# Dorian Black

Website for Dorian Black, a synth-pop recording artist. Debut album: **After Tonight** (12 tracks).

Built with [Astro](https://astro.build), deployed to [Cloudflare Pages](https://pages.cloudflare.com/). Stack and structure mirror the [Pneumaris](https://pneumarisband.com) site.

## Design system

The visual language (retrowave synthwave: near-black backgrounds, magenta/violet/blue neon glow, Audiowide/Rajdhani/Dancing Script type) comes from the Dorian Black Design System, preserved at:

`C:\Users\JD\Projects\Dorian Black\Design System`

Design tokens are ported verbatim into [public/universal.css](public/universal.css); the header/button/badge/card rules are hand-written CSS equivalents of the kit's React components (`components/core/*.jsx`), since this site is static Astro rather than React.

**Flagged in the design system, unresolved here too:**
- Fonts (Audiowide, Rajdhani, Dancing Script) are Google Fonts approximations, not confirmed brand fonts.
- No real icon set — social icons currently use `astro-icon` + `simple-icons`, swap if a custom set shows up.
- Bio copy on the About page is placeholder, written to match the documented voice guidelines, not approved artist copy.

## Content status

- No streaming links yet ([src/config/site.ts](src/config/site.ts) `SOCIALS` — all `href: null`; header/footer/Music page auto-hide until filled in).
- No confirmed release date (`src/data/album.ts` `ALBUM.releaseDate`).
- Track order in `src/data/album.ts` is a proposed sequence, not a confirmed master order.
- Domain is a placeholder (`dorianblack.example` in `astro.config.mjs` and `src/config/site.ts`) — update both once registered.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Cloudflare Pages, via `wrangler.toml`. Connect the repo in the Cloudflare dashboard, or:

```bash
npx wrangler pages deploy dist
```
