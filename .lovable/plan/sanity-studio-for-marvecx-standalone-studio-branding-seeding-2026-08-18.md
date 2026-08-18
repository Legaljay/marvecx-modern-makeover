# Sanity Studio for MARVECX: standalone studio, branding, seeding

## What you get

1. A complete Studio project in this repo under `studio/` — schema already matching what the site reads, MARVECX logo as the browser favicon and Studio nav icon, dark instrument-blue theme, and a sensible desk structure (ISTC events ordered by date).
2. A one-off seed that creates the three ISTC editions in the `production` dataset from the content the site currently falls back to, so the Studio opens with real documents instead of an empty list.
3. `studio.marvecx.com` pointing at the Studio.

## Studio project

Created at `studio/` (its own `package.json`, so it never affects the website build):

- `sanity.config.ts` — project `fsmhaobl`, dataset `production`, title "MARVECX CMS", `icon` set to the MARVECX mark, custom `theme` colors, structure tool + vision.
- `studio/schemas/event.ts` — the existing `sanity/schemas/event.ts` moved in and registered (same field names, so no site changes needed).
- `studio/static/favicon.png` + logo asset — used for the browser tab and the Studio navbar logo component.
- `studio/README.md` — the three commands you run.

The existing `sanity/schemas/` folder is folded into `studio/` so there is one source of truth.

## Icon / branding

Yes. Two places, both handled:

- Browser tab icon: `studio/static/favicon.png` (and apple-touch icon).
- In-Studio logo: a small `StudioLogo` component wired through `studio.components.logo`, showing the MARVECX mark plus wordmark in the navbar.

I'll use the MARVECX mark from the site assets. If you have the original logo file (SVG or high-res PNG), drop it in and I'll swap it — otherwise I'll render the existing site mark.

## Seeding

I'll write `studio/scripts/seed.ts`, run once with your Editor token:

- Creates `event` documents for ISTC 2023 (Inaugural, closed), ISTC 2024 (Second Edition, closed) and ISTC 2025 — Emergence (Third Edition), each with edition label, theme, status, dates, location, excerpt, slug and registration link, matching the site's current fallback data exactly.
- Uses deterministic document IDs (`istc-2025` etc.) with `createIfNotExists`, so re-running never duplicates.
- Speakers, sessions, resources, gallery and body are left empty for you to fill in the Studio — I don't have verified names/timings for past editions, and I won't invent them.

You create the token at sanity.io/manage → API → Tokens (Editor role) and I store it as a project secret; it is only used for this seed, never shipped to the site (the website stays read-only via the public CDN).

## Hosting on studio.marvecx.com

Worth knowing before we commit: Sanity's own `*.sanity.studio` hosting does not support custom domains. To get `studio.marvecx.com` the Studio has to be served from hosting you control. Two paths:

- **Path A (recommended, zero extra hosting):** deploy the Studio as a static build to Cloudflare Pages / Netlify / Vercel (free tier), then add a CNAME for `studio` → that host. I'll include the exact build command (`npm run build` → `dist/`), the SPA redirect config, and step-by-step DNS instructions.
- **Path B (fastest, no custom domain):** `npx sanity deploy` → `marvecx.sanity.studio`. Zero setup, but the URL stays on Sanity's domain. Can be done alongside Path A.

I'll set the project up so both work, and write the DNS + deploy steps into `studio/README.md`. The deploy itself needs your Sanity login, so you run the two commands — I can't authenticate as you.

## Also fixed in the same pass

The events list currently mismatches between server and browser render (an edition label differs between the SSR HTML and the client), which throws a React hydration error on the homepage. Once seeded data replaces the fallbacks this is resolved at the source, and I'll make the fallback path deterministic so it can't recur.

## Technical notes

- `studio/` is excluded from the site's Vite build and typecheck (own tsconfig), so nothing about the Studio can break the website.
- Seed runs via `bunx tsx studio/scripts/seed.ts` using `@sanity/client` with `useCdn: false` and the token from env.
- CORS: the Studio origin (`https://studio.marvecx.com`, plus `http://localhost:3333` for local dev) must be added as allowed origins with credentials — I'll add them for you through the Sanity connector.
