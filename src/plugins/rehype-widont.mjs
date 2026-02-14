/**
 * Rehype plugin to prevent orphaned words.
 *
 * 1. Binds short words (articles, prepositions, conjunctions) to the next word
 *    with non-breaking spaces so they never dangle at a line break.
 * 2. Binds short words after punctuation to the next word.
 * 3. Prevents widows (single last word on a line) in block elements.
 */
import { visit } from "unist-util-visit";

const SHORT_WORDS = [
  "a", "an", "the",
  "I",
  "in", "on", "at", "to", "by", "of", "or", "so", "if",
  "is", "it", "as", "no", "do", "we", "my", "up",
  "and", "but", "for", "nor", "yet", "not", "its",
  "was", "are", "has", "had", "can", "may", "will",
];

const shortWordPattern = new RegExp(
  `(?<=\\s|^)(${SHORT_WORDS.join("|")}) `,
  "g"
);

const punctOrphanPattern = /([,:;—–-]) (\w{1,3}) /g;

const TARGETS = new Set(["p", "li", "blockquote", "figcaption"]);

function fixText(value) {
  let result = value;
  result = result.replace(shortWordPattern, "$1\u00A0");
  result = result.replace(punctOrphanPattern, "$1 $2\u00A0");
  return result;
}

function fixWidow(value) {
  return value.replace(/ ([^ ]+)$/, "\u00A0$1");
}

function fixLastTextNode(node) {
  if (!node.children) return;
  for (let i = node.children.length - 1; i >= 0; i--) {
    const child = node.children[i];
    if (child.type === "text" && child.value.trim()) {
      child.value = fixWidow(child.value);
      return;
    } else if (child.children) {
      fixLastTextNode(child);
      return;
    }
  }
}

export default function rehypeWidont() {
  return (tree) => {
    visit(tree, "text", (node) => {
      node.value = fixText(node.value);
    });

    visit(tree, "element", (node) => {
      if (!TARGETS.has(node.tagName)) return;
      fixLastTextNode(node);
    });
  };
}
