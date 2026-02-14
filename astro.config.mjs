import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
import remarkSmartypants from 'remark-smartypants';
import rehypeWidont from './src/plugins/rehype-widont.mjs';

export default defineConfig({
  output: "static",
  site: "https://thiru.me",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkSmartypants],
    rehypePlugins: [rehypeWidont],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport"
  }
});
