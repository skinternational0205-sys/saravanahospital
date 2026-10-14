# Salem Saravana Hospital — Marketing Website

A statically rendered marketing site for Salem Saravana Hospital, a 60-bed
multi-speciality integrated hospital in Salem, Tamil Nadu (est. 1993).

## Tech stack

| Concern    | Choice                                       |
| ---------- | -------------------------------------------- |
| Framework  | Next.js 16.3.1 (App Router, Turbopack)       |
| UI runtime | React 19.2                                   |
| Language   | TypeScript (strict)                          |
| Styling    | Tailwind CSS v4 (`@tailwindcss/typography`)  |
| Animation  | Framer Motion                                |
| Icons      | lucide-react                                 |

> **Note for contributors:** this Next.js version has breaking changes relative
> to older releases. Read the bundled docs in `node_modules/next/dist/docs/`
> before writing code — see `AGENTS.md`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build + type check
npm run start    # serve the production build
npm run lint     # eslint
npx tsc --noEmit # type check only
```

## Project structure

```
src/
  app/                      # App Router routes (one folder per URL)
    layout.tsx              # Root layout: fonts, metadata, JSON-LD, Header/Footer
    page.tsx                # Home
    about/ appointment/ careers/ contact/ fmtalks/ gallery/
    health-packages/ insurance/ laboratory/ pharmacy/
    specialities/
      page.tsx              # Speciality index grid
      [slug]/page.tsx       # Speciality detail (SSG via generateStaticParams)
    sitemap.ts robots.ts    # Generated sitemap.xml and robots.txt
  components/               # Header, Footer, ParticleEKG, VideoModal
  data/specialities.json    # Speciality content (name, slug, HTML body)
  lib/site.ts               # Canonical URL, NAP details, social links
```

### Per-route metadata

Page components are client components (`"use client"`, required for Framer
Motion), and per the Next.js metadata rules the `metadata` export is only read
from Server Components. Each route therefore has a sibling `layout.tsx` that
exports the route's `metadata` and renders `children` unchanged. The root
layout owns `metadataBase`, the title template (`%s | Salem Saravana Hospital`)
and the `Hospital` JSON-LD block.

### Adding a speciality

1. Append an entry to `src/data/specialities.json` (`id`, `name`, `slug`,
   `content` as an HTML string).
2. That's it — the index grid, `generateStaticParams`, per-page metadata and
   `sitemap.xml` all derive from that array.

### Site-wide constants

Hospital address, phone numbers, email addresses and social links live in
`src/lib/site.ts`. Update them there rather than inline in components.

## Notes

- **No backend.** All forms (`/appointment`, `/contact`, `/careers`,
  `/pharmacy`) are presentational UI shells; submissions are not sent
  anywhere. Wiring them up requires a form endpoint or server action.
- The `/gallery` images are Unsplash placeholders and `/health-packages`
  package cards are non-linked; replace with real hospital photography and
  package detail pages before launch.
