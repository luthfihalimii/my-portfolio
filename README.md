# Luthfi Halimi Portfolio

Personal portfolio and writing site built with Astro, React islands, Tailwind CSS, MDX, and Cloudflare deployment support.

## Requirements

- Node.js `>=22.12.0`
- Bun

## Commands

```bash
bun install
bun run dev
bun run build
bun run preview
bun test
```

The local dev server runs at <http://localhost:4321> by default.

## Main Files

- `src/data/resume.tsx` controls portfolio profile, sections, work history, projects, skills, and social links.
- `src/data/config.ts` controls site URL, SEO defaults, typography, and theme tokens.
- `src/content/blog/*.mdx` contains blog posts.
- `src/layouts/Layout.astro` defines the document shell and SEO tags.

## Deployment

This project is configured for Cloudflare through `@astrojs/cloudflare` and `wrangler.jsonc`.

```bash
bun run build
```

Deploy the generated output through Cloudflare Workers/Pages according to the target environment.
