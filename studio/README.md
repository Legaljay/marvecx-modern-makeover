# MARVECX CMS (Sanity Studio)

Content editor for the ISTC events shown on the MARVECX website.

- Project: `fsmhaobl`
- Dataset: `production`
- Schema: `schemas/event.ts` — field names match exactly what the website reads (`src/lib/sanity.ts`). Renaming a field breaks the site.

## 1. Run it locally

```bash
cd studio
npm install
npm run dev          # http://localhost:3333
```

First run opens a browser login — use the Sanity account that owns project `fsmhaobl`.

## 2. Deploy

### Option A — Sanity hosted (fastest, 1 command)

```bash
npm run deploy       # → https://marvecx.sanity.studio
```

### Option B — studio.marvecx.com (custom subdomain)

Sanity's own `*.sanity.studio` hosting does not support custom domains, so the
Studio is served as a static SPA from hosting you control. It's a plain static
build — any host works. Cloudflare Pages example:

```bash
cd studio
npm install
npm run build        # outputs ./dist
npx wrangler pages deploy dist --project-name marvecx-studio
```

Netlify: `npx netlify deploy --prod --dir=dist` (the SPA rewrite lives in
`static/_redirects`, which is copied into `dist`).
Vercel: `npx vercel --prod` from `studio/` with output dir `dist`.

Then in your DNS provider add:

| Type  | Name     | Value                              |
| ----- | -------- | ---------------------------------- |
| CNAME | `studio` | the hostname your host gives you   |

Finally add the origin to Sanity so the browser is allowed to talk to the API:
sanity.io/manage → project `fsmhaobl` → API → CORS origins → add
`https://studio.marvecx.com` **with credentials allowed**.
(`http://localhost:3333` is allowed by default.)

## 3. Seed the ISTC editions

Only needed on an empty dataset — it is idempotent and never overwrites edits.

```bash
SANITY_WRITE_TOKEN=<editor token> npm run seed
```

Create the token at sanity.io/manage → API → Tokens → Editor. Never commit it.

## Branding

- Browser tab icon: `static/favicon.png`
- Navbar logo: `components/StudioLogo.tsx`

Swap `static/favicon.png` with the official logo file to change both.
