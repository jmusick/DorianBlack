# AGENTS.md

Guidance for AI coding agents working in this repo.

## What this is

Marketing site for Dorian Black, a synth-pop recording artist. Astro static
site, deployed to Cloudflare Pages. See [README.md](README.md) for the
design-system background and current content-status caveats (fonts, icons,
release info) — read it before touching visual styling or copy.

## Stack

- **Astro** (static output), TypeScript, no UI framework — components are
  `.astro` files with inline `<style>`/`<script>`.
- Styling is hand-written CSS. Design tokens live in
  [public/universal.css](public/universal.css), ported verbatim from the
  Dorian Black Design System (a separate React component kit preserved at
  `C:\Users\JD\Projects\Dorian Black\Design System`). Header/button/badge/card
  rules here are hand-written equivalents of that kit's components — keep
  them visually in sync if the source design system changes, but there is no
  code-level dependency between the two.
- Icons via `astro-icon` + `@iconify-json/simple-icons` / `lucide`.
- Deploy target: Cloudflare Pages via `wrangler.toml` (`npx wrangler pages
  deploy dist`).

## Structure

- `src/pages/` — routes (`index.astro`, `about.astro`, `music.astro`,
  `privacy-policy.astro`).
- `src/components/` — `SiteHeader.astro`, `SiteFooter.astro`.
- `src/layouts/Layout.astro` — shared page shell.
- `src/config/site.ts` — single source of truth for site URL, name, tagline,
  and `SOCIALS` (streaming/social links). Entries with `href: null` are
  auto-hidden by the header/footer/Music page — don't special-case missing
  links elsewhere, just fill in the `href`.
- `src/data/album.ts` — album/track data (`After Tonight`). Track order,
  durations, and release date here are the single source for the Music page;
  don't hardcode track info in components.

## Commands

```bash
npm run dev       # astro dev, http://localhost:4321
npm run build     # astro build -> dist/
npm run preview   # serve the built output
```

No test suite or linter is configured. Verify changes with `npm run build`
and, for anything visual, `npm run dev` + a browser check.

## Conventions

- Keep the site static — no server runtime, no API routes, no client-side
  data fetching. Content changes go through `src/config/site.ts` /
  `src/data/album.ts`, not component-level hardcoding.
- Remaining placeholder values are flagged inline (see README "Content
  status" and comments in `site.ts`/`album.ts`, e.g. release date, track
  order). Don't quietly invent real-looking replacements — either use the
  flagged placeholder or ask.
- `astro.config.mjs` `site`, `src/config/site.ts` `SITE_URL`, and
  `public/robots.txt`'s `Sitemap:` line must all point at the same domain
  (`dorianblack.com`) — nothing else in the codebase hardcodes it.
