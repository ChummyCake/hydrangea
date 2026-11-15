# Hydrangea

A small journal by Cakey and Cynthia about the moments and milestones on our way to marriage.

## Current site

- Astro generates a static site from Markdown and MDX posts in `src/content/blog/`.
- The blog has an about page, RSS feed, and sitemap.
- The header music player uses local audio files listed in `src/data/playlist.ts`. Playback starts only when a visitor chooses to play.
- Visitors can choose from four built-in themes. Their selection is saved in the browser.

Posts use typed frontmatter defined in `src/content.config.ts`. Set `draft: false` to publish a post. The current sample posts are drafts.

## Architecture

The site is a static Astro project deployed as Cloudflare Worker static assets. It does not currently need a database, server adapter, or application API. `wrangler.jsonc` names the Worker and publishes `dist/`.

## Development

Requirements: Node.js 22.23.4 or later.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

For a local Cloudflare Worker preview, set `SITE_URL` to the local origin and run `npm run cf:dev`.

## Deployment

The development site is deployed at [hydrangea-cakey-cynthia-dev.minhtrilethanh.workers.dev](https://hydrangea-cakey-cynthia-dev.minhtrilethanh.workers.dev/).

Buddy pipeline `hydrangea-dev` runs on pushes to `dev`. It installs dependencies, builds the site, runs `npm run test:ci` when that script exists, and deploys with Wrangler. Its definition is in `.buddy/pipelines/dev.yml`.

The Buddy project needs these variables:

- `SITE_URL`: the development Worker origin.
- `CLOUDFLARE_ACCOUNT_ID`: the Cloudflare account ID.
- `CLOUDFLARE_API_TOKEN`: a masked token with Workers Editor access scoped to the development Worker.

To deploy manually, authenticate Wrangler and run:

```sh
SITE_URL=https://hydrangea-cakey-cynthia-dev.minhtrilethanh.workers.dev npm run deploy:dev
```

There is no production Worker, custom domain, or production pipeline yet.

## Roadmap

1. Replace the draft posts with our stories and photos; expand theme and background choices as needed.
2. Add invited users’ public, read-only home pages with owner customization.
3. Add authentication and data storage when those pages need editing and persistence. Keep the main journal static where possible.
