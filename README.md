# Zeta Corporate Website

A static-first, accessible corporate website for Zeta, designed for Netlify and built with Astro.

## Why this stack

- **Astro:** ideal for content-heavy corporate websites, leadership profiles, educational articles, and mostly static pages.
- **Minimal JavaScript:** only the mobile navigation needs client-side JavaScript.
- **Netlify:** continuous deployment, preview builds, forms, and simple hosting.
- **No UI framework:** the design system is written in plain CSS to keep the site lean and easy to maintain.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Netlify settings:

- Build command: `npm run build`
- Publish directory: `dist`

## Before launch

1. Replace all SVG placeholder images in `public/images/` with approved, optimized photographs.
2. Replace the placeholder domain in `astro.config.mjs`.
3. Verify all leadership titles, achievements, testimonials, and event claims.
4. Connect Netlify Forms email notifications or a CRM workflow.
5. Add final privacy, consent, licensing, and regulatory wording after professional review.
6. Add the actual Zeta logo and favicon.

## Content model

The first release keeps content in Astro page files for simplicity. When Zeta begins publishing frequently, migrate articles and leadership profiles into Astro Content Collections using Markdown or connect a headless CMS.
