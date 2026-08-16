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

- Spotify, Apple Music, Instagram, TikTok, Facebook, and X links are live;
  YouTube and SoundCloud are still unset ([src/config/site.ts](src/config/site.ts)
  `SOCIALS` — `href: null` entries auto-hide from the header/footer/Music page
  until filled in).
- The Contact page, Turnstile widget, and Email Sending Function are configured;
  the API token and Turnstile secret remain encrypted Pages secrets.
- No confirmed release date (`src/data/album.ts` `ALBUM.releaseDate`).
- Track order in `src/data/album.ts` is a proposed sequence, not a confirmed master order.

## Development

```bash
npm install
npm run dev                                  # pages only; Functions are not served
npm run build
npx wrangler pages dev dist                 # includes /api/contact
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Cloudflare Pages project `dorianblack`, via `wrangler.toml`. The connected Git
repository deploys automatically, or a local build can be published with:

```bash
npx wrangler pages deploy dist
```

## Contact form

`POST /api/contact` is the site's only server-side route. The Cloudflare Pages
Function in [`functions/api/contact.ts`](functions/api/contact.ts) verifies
Turnstile and sends messages through the Cloudflare Email Sending REST API.

Production configuration:

| Location | Type | Name |
| --- | --- | --- |
| `wrangler.toml` `[vars]` | Plaintext | `CLOUDFLARE_ACCOUNT_ID` |
| Pages project secret | Encrypted | `CLOUDFLARE_API_TOKEN` |
| Pages project secret | Encrypted | `TURNSTILE_SECRET_KEY` |

The API token needs `Email Sending: Edit` permission for the account. The
Function defaults to `contact@dorianblack.com` as its verified sender and
`hello@dorianblack.com` as its destination; `EMAIL_FROM_CONTACT` and
`CONTACT_TO_EMAIL` can override those at runtime.

The public Turnstile site key is committed in `src/config/site.ts` so the form
cannot silently disappear when a build variable is missing.
`PUBLIC_TURNSTILE_SITE_KEY` remains an optional build-time override. Copy
`.dev.vars.example` to `.dev.vars` for local Function testing; never commit the
populated file.
