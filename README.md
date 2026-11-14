# Cakey & Cynthia

A small journal about our life together and the journey toward marriage. The site is built with Astro and rendered as static files for Cloudflare Workers.

## Local development

```sh
npm install
npm run dev
```

The background development server runs at `http://localhost:4321`. Manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`. Write journal entries as Markdown or MDX files in `src/content/blog/`; include a title, description, and publication date. Set `draft: true` to keep an entry out of the site, RSS feed, and sitemap routes.

## Themes and music

The theme picker has four built-in themes. Visitors can choose a theme from the header; the choice is saved in their browser.

Add songs to `src/data/playlist.ts`:

- Use `kind: 'embed'` and the provider’s embed URL for a streaming player.
- Use `kind: 'audio'` and a path such as `/audio/song.mp3` for audio placed in `public/audio/`.
- Only add audio you own or have permission to distribute. There is no upload interface; audio files are added to the project by its maintainers.

```ts
export const PLAYLIST: PlaylistTrack[] = [
	{ id: 'first-dance', title: 'Song title', artist: 'Artist', kind: 'embed', src: 'https://provider.example/embed/track-id' },
	{ id: 'our-song', title: 'Another song', artist: 'Artist', kind: 'audio', src: '/audio/our-song.mp3' },
];
```

The player does not autoplay. Visitors choose a song and control playback themselves.

## Deploy to Cloudflare Workers

The site uses Astro’s static output, so it does not need an Astro server adapter or database. Set `SITE_URL` to the production origin (for example, `https://your-domain.example`) in the Cloudflare Workers Builds environment. This value is used for canonical links, RSS, and the sitemap; do not leave it as the `example.com` fallback for a production build.

Connect this repository in Cloudflare **Workers & Pages → Create application → Import a repository** and configure:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Production branch: `main`
- Environment variable: `SITE_URL=https://your-domain.example`

The included `wrangler.jsonc` publishes the `dist/` folder as static assets. Pushes to the production branch deploy the site, and pull request builds can be used as previews. A custom domain can be attached to the Worker in Cloudflare.

For local deployment preview, set `SITE_URL` and run `npm run cf:dev`. To deploy manually, run `SITE_URL=https://your-domain.example npm run deploy` after authenticating Wrangler.

## Later: invited home pages

The current site intentionally has no accounts or user-editable pages. When that feature is ready, Astro can switch selected routes to on-demand rendering on Cloudflare Workers, with D1 for page and account data and R2 for approved media. Keep the public blog static and add authentication only for the owner editing area.
