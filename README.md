# Zeta Corporate Website

A static-first, highly accessible corporate website for Zeta, designed for Netlify deployment and engineered with Astro.

## Why this stack

- **Astro:** Ideal for content-heavy corporate websites, leadership profiles, educational articles, and mostly static pages.
- **Minimal JavaScript:** Only the mobile navigation requires minimal client-side JavaScript.
- **Netlify:** Continuous deployment, preview builds, forms, and simple hosting.
- **No UI Framework:** The design system is authored in vanilla CSS using modern tokens, keeping the footprint lean and eliminating runtime framework overhead.

## CSS Architecture & Design System

The styling layer is organized into a modular token-driven structure under `src/styles/`:

1. **`tokens.css`**: Defines the core design tokens within `:root`. Contains the primitive palette (Manulife Green, Terracotta, Sage, Deep Espresso), fluid typography scales (`clamp`), responsive spacing increments, unified shadows, and an automated `prefers-color-scheme: dark` media block that flips the canvas seamlessly for dark mode environments.
2. **`typography.css`**: Governs global editorial typesetting, line-height definitions, and structural layout headings using fluid token inheritance.
3. **`utilities.css`**: Houses structural utility helpers, container maximum boundaries (`.prose`, `.narrow`), and accessible screen-reader visibility constraints.

Global styles should be imported in your primary Astro layouts:
```css
@import "./tokens.css";
@import "./typography.css";
@import "./utilities.css";

```

## Run locally

```bash
npm install
npm run dev

```

## Build

```bash
npm run build

```

Netlify production specifications:

* **Build command:** `npm run build`
* **Publish directory:** `dist`

## Before launch

1. **Asset Optimization:** Replace all temporary SVG placeholder images in `public/images/` with approved, optimized photography.
2. **Configuration:** Replace the placeholder production domain inside `astro.config.mjs`.
3. **Content Verification:** Review and verify all leadership titles, financial statistics, achievements, testimonials, and event claims.
4. **Form Integration:** Connect Netlify Forms email notifications or wire up a webhook to the production CRM workflow.
5. **Legal Compliance:** Add final privacy policies, cookie consent flags, licensing agreements, and regulatory footers following legal review.
6. **Branding:** Upload the official Zeta SVG logo marks and configure multi-resolution favicons.

## Content model

The initial release manages content within static Astro page files for simplicity. When Zeta scales publishing frequency, migrate corporate articles and leadership profiles into dedicated Astro Content Collections utilizing Markdown or connect an external headless CMS API layer.
