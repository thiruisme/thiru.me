# Thiru's Internet Corner

> **Note**: This project serves a dual purpose as both a personal website and an extensive GenAI experiment. The entire development process—from initial concept through iterative improvements—has been a collaboration between human creativity and AI assistance, exploring the boundaries of what's possible when human vision meets AI capabilities in web development.

A lightweight, Astro-powered personal website showcasing modern web development practices with a nostalgic Web 2.0 aesthetic. Features a sophisticated theme system, responsive design, and content management through Astro's content collections.

## Features

### Dynamic Theme System
- **Three distinct themes**: Default (emerald), Autumn (warm browns), Beach (blue & yellow)
- **Intelligent theme switching**: Persistent localStorage, smooth transitions
- **Lightweight architecture**: CSS custom properties, no unused styles
- **Easy customization**: Centralized theme configuration in `/src/config/themes.js`

### Responsive Design
- **Mobile-first approach**: Fluid layouts, responsive breakpoints
- **Adaptive grids**: Three-column → two-column → single-column layouts
- **Touch-friendly**: Optimized for mobile interaction
- **Progressive enhancement**: Works without JavaScript

### Modern Web Standards
- **Astro framework**: Static site generation with islands architecture
- **Content collections**: Markdown-based content with frontmatter
- **Semantic HTML**: Accessible markup structure
- **Performance optimized**: Minimal CSS, compressed assets, lazy loading

### Web 2.0 Aesthetic
- **Nostalgic design**: Tiled backgrounds, paper-tab navigation
- **Subtle animations**: Hover effects, smooth transitions
- **Typography**: Custom fonts (Adobe, Google) with careful hierarchy
- **Visual depth**: CSS-only 3D effects, gradients, shadows

### Content Management
- **Blog system**: Markdown posts with rich frontmatter
- **Tag system**: Dynamic tag pages, automatic generation
- **Digital garden**: Interconnected notes with growth stages
- **Rich components**: Pull-quotes, cards, custom layouts

### Developer Experience
- **TypeScript support**: Type-safe development
- **Hot reloading**: Instant development feedback
- **Modern tooling**: Vite, ESM, CSS custom properties
- **Clean architecture**: Separation of concerns, maintainable code

## Getting Started

### Prerequisites
- Node.js ≥ 18.20.8
- npm or pnpm

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/thiru.me
cd thiru.me

# Install dependencies
npm install
```

### Development
```bash
# Start development server
npm run dev

# Visit http://localhost:4321
```

### Build & Deploy
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Layout.astro     # Main layout wrapper
│   ├── Header.astro     # Navigation and branding
│   ├── Footer.astro     # Footer with theme switcher
│   └── ThemeSwitcher.astro # Theme selection component
├── config/
│   └── themes.js        # Centralized theme configuration
├── content/             # Content collections
│   ├── posts/          # Blog posts (Markdown)
│   └── garden/         # Digital garden entries
├── pages/               # Route pages
│   ├── index.astro     # Homepage
│   ├── blog/           # Blog archive and posts
│   ├── garden.astro    # Digital garden
│   └── contact.astro   # Contact form
├── styles/
│   └── global.css      # Global styles and theme variables
└── images/             # Static assets

public/
├── images/             # Public images
├── fonts/              # Web fonts
└── favicon.svg         # Site icon
```

## Theme System

### Theme Configuration
Themes are defined in `/src/config/themes.js` with semantic naming:

```javascript
export const themes = {
  default: {
    'emerald-dark': '#1b4d3e',
    'emerald-light': '#2b7a57',
    'accent-top': '#a7f542',
    'text-color': '#222',
    // ... other properties
  },
  autumn: {
    'emerald-dark': '#8b4513',
    'emerald-light': '#cd853f',
    'accent-top': '#ff8c00',
    // ... warm autumn colors
  },
  beach: {
    'emerald-dark': '#1e3a8a',
    'emerald-light': '#3b82f6',
    'accent-top': '#fde047',
    // ... blue and yellow palette
  }
};
```

### Adding New Themes
1. Add theme object to `/src/config/themes.js`
2. Update `themeNames` array
3. Add metadata to `themeMetadata`
4. Theme switcher automatically updates

### Customizing Colors
- **Easy editing**: Change hex values in theme configuration
- **Consistent relationships**: Use color palette system
- **Accessibility**: Maintain proper contrast ratios
- **Performance**: Changes apply instantly via CSS custom properties

## Content Creation

### Blog Posts
Create new posts in `/src/content/posts/`:

```markdown
---
title: "Your Post Title"
date: 2025-01-16
thumbnail: "/images/post-thumb.webp"
excerpt: "Brief description of your post"
tags:
  - web-development
  - design
  - javascript
---

Your post content here...
```

### Digital Garden
Add garden entries in `/src/content/garden/`:

```markdown
---
title: "Your Thought"
dateAdded: 2025-01-16
growth: "seedling" # seedling, growing, blooming, mature
type: "reflection" # reflection, insight, observation, principle
tags:
  - design
  - philosophy
connections:
  - other-entry-slug
---

Your interconnected thoughts...
```

## Customization

### Visual Styling
- **Colors**: Modify theme configuration
- **Typography**: Update font imports in `Layout.astro`
- **Spacing**: Adjust CSS custom properties
- **Animations**: Modify transition timing

### Layout Changes
- **Grid layouts**: Update CSS grid configurations
- **Responsive breakpoints**: Modify media queries
- **Component structure**: Edit Astro components

### Performance Optimization
- **Image optimization**: Use WebP format, lazy loading
- **CSS efficiency**: Leverage CSS custom properties
- **JavaScript minimization**: Astro's islands architecture
- **Caching**: Static site generation benefits

## Development

### Available Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run check      # Run Astro checks
npm run lint       # Lint code
npm run typecheck  # Type checking
```

### Code Quality
- **TypeScript**: Type-safe development
- **ESLint**: Code linting and consistency
- **Prettier**: Code formatting
- **Astro Check**: Framework-specific validation

## Deployment

This site is optimized for static hosting platforms:
- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop deployment
- **GitHub Pages**: Automated workflows
- **Any static host**: Upload `dist/` folder

## Contributing

While this is a personal website, the code architecture and theme system can serve as inspiration for your own projects. Feel free to fork and adapt the structure for your needs.

## License

**Source Code**: MIT License - Open source and free to use

**Content & Assets**: All rights reserved
- Blog posts, images, and media assets are © Thiru
- Web fonts are licensed through Adobe and restricted to this site
- Not for redistribution without explicit permission

## Acknowledgments

This project represents a unique collaboration between human creativity and AI assistance, demonstrating the potential of GenAI in web development. The iterative development process, from initial concept through feature refinement, showcases how AI can augment human capabilities in creating sophisticated, maintainable web applications.

---

*Built using Astro, modern web standards, and a touch of nostalgia*