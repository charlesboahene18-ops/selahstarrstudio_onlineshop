# Selah Starr Studio Rebrand

## Overview

This project preserves the original prototype-derived layout, interactions, and responsive behavior while rebranding the site for **Selah Starr Studio**.

The implementation keeps:

- The opening showcase hero with layered desktop and mobile mockups
- The existing section order and interaction flow
- Hover states, reveal motion, and marquee behavior
- Local temporary assets instead of scraped social or product imagery

## Technology

- React
- JavaScript
- Vite
- Lucide React
- Global CSS

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Project Structure

```text
public/
  favicon.svg
  social-preview.svg
src/
  assets/
    backgrounds/
    collections/
    editorial/
    hero/
    products/
    social/
  components/
  config/
    brand.js
  data/
    collectionData.js
    mockProducts.js
    storefrontContent.js
  hooks/
  pages/
  styles/
ASSET_REPLACEMENT_GUIDE.md
CLIENT_CONTENT_CHECKLIST.md
VIDEO_ANALYSIS.md
```

## Content Notes

- All product entries are editable mock data and include `isMockData: true`.
- Unconfirmed pricing is presented as `Contact for pricing`.
- No unverified phone number, email address, shipping promise, returns policy, or location is published.
- Instagram imagery is not scraped or hotlinked. All current visuals are local placeholder assets.

## Launch Prep

Before production, replace temporary photography and confirm the missing client information listed in [CLIENT_CONTENT_CHECKLIST.md](./CLIENT_CONTENT_CHECKLIST.md).
