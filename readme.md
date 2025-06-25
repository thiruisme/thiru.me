# Web 2.0 Aesthetic Blog

A lightweight, Astro-powered static blog showcasing Web 2.0 design principles: repeating tiled backgrounds, paper-tabs navigation, responsive grids, semantic markup, and minimal resource usage.

## Features

- **Astro** framework with content collections for Markdown-based posts
- **Responsive layout**: fluid shell, two-column homepage cards, three-column archive, mobile-first breakpoints
- **Web 2.0 styling**:
  - Repeating checker-tile background patterns
  - Pastel shell grid overlay
  - Subtle pull-quotes and custom typography
- **Navigation**:
  - Slanted, 3D-tilted “paper” tabs built in pure CSS
  - Active tab blends seamlessly into content shell
- **Cards**:
  - Hover animations: background color shifts, lifted transforms, text color swaps
  - Adjustable grid columns via CSS variables and media queries
- **Tags**:
  - Frontmatter-driven tagging system
  - Dynamic tag pages auto-generated for each tag
- **Markdown flexibility**:
  - Inline HTML support for custom components, pull-quotes, and semantics
  - Component slots (e.g. PullQuote, Card)
- **Performance optimizations**:
  - SVG or compressed raster assets for logos and hero banners
  - Lazy-loaded images with `loading="lazy"`
  - Minimal CSS footprint, no external JavaScript

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm or pnpm

### Installation

1. Clone this repo
2. Install dependencies:
   ```bash
   npm install
   # or pnpm install
   ```

### Development

Launch the dev server with hot reload:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Build & Preview

Generate and preview a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```
/src
  /components     # Reusable UI components (Layout, Header, Footer, PullQuote)
  /content        # Markdown posts for content collections
  /pages
    index.astro   # Homepage with responsive grid and sidebar
    /blog
      index.astro # Archive grid
      [slug].astro# Dynamic post pages
    links.astro   # Links page
    contact.astro # Contact page with mailto form
/public
  /images         # Logo, hero banners, thumbnails
  /fonts          # Optional custom fonts (Adobe, Google)
/src/styles
  global.css      # Variables, layout, nav tabs, grids, pull-quote, themes
```

## Customization

- **Colors & themes**: adjust `:root` CSS variables (`--primary`, `--accent`, `--shell-grid-size`).
- **Typography**: import web fonts (Adobe, Google) in `Layout.astro` head; use CSS classes for headings vs body.
- **Navigation tabs**: modify padding, perspective, margin for slanted effect.
- **Cards & grids**: update `.cards` rules for column counts and hover interactions.
- **Pull-Quotes**: use `<blockquote class="pullquote">…</blockquote>` in Markdown or `<PullQuote>` component.
- **Tags**:
  - Tag posts via frontmatter in `src/content/posts/`.
  - Each tag generates its own page under `/tags/<tag>/`.

## Adding a New Post

1. Create `src/content/posts/YYYY-MM-DD-slug.md` with frontmatter:
   ```md
   ---
   title: "Your Post Title"
   date: 2025-06-25
   thumbnail: "/images/your-thumb.png"
   excerpt: "Short teaser text."
   tags:
     - example
     - demo
   ---

   Start writing your content here…
   ```
2. Run `npm run dev` and visit `/blog` to see it.

## License

This project’s **source code** is licensed under the MIT License and is open source.

**Blog content**, **images**, and **media assets** are © Thiru and are **all rights reserved**; they are **not open source** and may **not** be used or redistributed without explicit permission.

**Web fonts** (Aesthet Nova, Avenir LT Pro) are used under license from Adobe and are **only** for use on this site per Adobe’s licensing terms; any unauthorized use is strictly prohibited.

