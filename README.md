# SLB Surya Wiyata

The official landing page of **SLB Surya Wiyata**, a special-needs school (*Sekolah Luar Biasa*) in Bekasi and East Jakarta, Indonesia. Since 1972 the school has served children who are deaf or hard of hearing, children with intellectual disabilities, autism, and Down syndrome. Its motto: *Bring Hope for a Brighter Future*.

**Live site:** https://slb-surya-wiyata.vercel.app

The site itself is in Indonesian, because it is written for parents, donors, and partners in Indonesia.

## Features

- **Seven focused pages** instead of one long page: Home, About (`/tentang`), Programs (`/program`), Facilities (`/sarana`), Activities (`/kegiatan`), Gallery (`/galeri`), and Contact (`/kontak`)
- **Easy to follow**: every page opens with the same header (breadcrumb, title, short intro, "on this page" jump links), the menu highlights the current page, and each page ends with a "Next" card that leads visitors through the site
- **Seamless navigation**: cross-document View Transitions (no JavaScript) keep the header still while the content fades in, and links are prefetched on hover so pages open instantly
- **Home page** kept short: hero slideshow, a short introduction, key numbers, "explore" cards to each page, latest activities, and a contact call to action
- **Scroll-driven mission cards** on the About page that slide sideways while you scroll
- **Photo gallery** with every school photo, grouped by category, with a keyboard- and swipe-friendly lightbox
- **Mobile-first layout** that follows the reference design on phones and desktops
- **Fast and light**: fully static, a few KB of JavaScript, images served as AVIF/WebP in responsive sizes
- **SEO ready**: per-page titles and descriptions, Open Graph share image, `School` JSON-LD for both campuses, sitemap, robots.txt
- **Accessible**: semantic markup, alt text on every photo, visible focus, respects reduced motion

## Tech stack

| Part | Tool |
|---|---|
| Framework | [Astro 7](https://astro.build) (static output) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 |
| Fonts | Besley (headings) and Inter (body), self-hosted via Fontsource |
| Images | `astro:assets` (Sharp) |
| Hosting | Vercel |

## Getting started

Requires Node.js 22.12 or newer (the repo pins Node 24 in `.nvmrc`).

```bash
npm install
npm run dev      # start the dev server at http://localhost:4321
npm run build    # type-check with astro check, then build to dist/
npm run preview  # serve the production build locally
```

The first build takes a few minutes because every photo is encoded to AVIF and WebP in several sizes. Later builds reuse the image cache.

## Project structure

| Path | What it holds |
|---|---|
| `src/content/site.ts` | All text and data: school info, campuses, programs, schedule, staff, photo captions |
| `src/pages/` | One file per page: `index`, `tentang`, `program`, `sarana`, `kegiatan`, `galeri`, `kontak`, `404` |
| `src/components/sections/` | One component per page section (Hero, About, Programs, Footer, ...) |
| `src/components/ui/` | Building blocks: `PageHero`, `PageNext`, `Photo`, `Icon`, `Flower`, `SunRise`, `VideoDialog` |
| `src/layouts/BaseLayout.astro` | HTML shell, SEO tags, header and footer |
| `src/styles/global.css` | Tailwind setup, color tokens, shared utilities |
| `src/assets/images/` | Source photos, grouped by category |
| `public/` | Videos, favicons, share image, robots.txt |

## Editing content

Everything a non-developer might want to change lives in `src/content/site.ts`.

- **Text**: edit the matching object (for example `programs`, `weeklySchedule`, `teachers`).
- **Pages**: page titles, descriptions, and card photos used by the menu, footer, and "Next" cards live in `pages`.
- **Photos**: put a `.jpg` in `src/assets/images/<category>/` and add its caption to the `captions` object. It is optimized on build and shows up in the gallery automatically.
- **Videos**: put an `.mp4` in `public/videos/` and register it in `videos`.

## Deployment

The site is live at **https://slb-surya-wiyata.vercel.app** (Vercel). The **Astro** preset is detected automatically (`npm run build`, output `dist`), and no adapter is needed because the site is fully static. Pushing to `main` triggers a new production deployment.

If the domain changes, update `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`.

## Notes

- Design inspired by the layout of [overlake.org](https://www.overlake.org), recolored with the school's own blue, yellow, black, and white.
- Individual student data from the school profile (names, classes, portraits) is intentionally not published.
