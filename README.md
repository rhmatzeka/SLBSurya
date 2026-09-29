# SLB Surya Wiyata

The official landing page of **SLB Surya Wiyata**, a special-needs school (*Sekolah Luar Biasa*) in Bekasi and East Jakarta, Indonesia. Since 1972 the school has served children who are deaf or hard of hearing, children with intellectual disabilities, autism, and Down syndrome. Its motto: *Bring Hope for a Brighter Future*.

The site itself is in Indonesian, because it is written for parents, donors, and partners in Indonesia.

## Features

- **Home page** with a hero slideshow, about, key numbers, school grounds, facilities (tabbed), vocational programs, mission carousel, vision with video, school levels, weekly schedule, activities, teachers and staff, partnership call, and contact details for both campuses
- **Photo gallery** (`/galeri`) with every school photo, grouped by category, with a keyboard- and swipe-friendly lightbox
- **Mobile-first layout** that follows the reference design on phones and desktops
- **Fast and light**: fully static, about 1.6 KB of JavaScript (gzipped), images served as AVIF/WebP in responsive sizes
- **SEO ready**: meta and Open Graph tags, share image, `School` JSON-LD for both campuses, sitemap, robots.txt
- **Accessible**: semantic markup, alt text on every photo, visible focus, respects reduced motion (Lighthouse accessibility 100)

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
| `src/pages/` | `index.astro` (home), `galeri.astro` (gallery), `404.astro` |
| `src/components/sections/` | One component per page section (Hero, About, Programs, Footer, ...) |
| `src/components/ui/` | Small building blocks: `Photo`, `Icon`, `Flower`, `SunRise`, `VideoDialog` |
| `src/layouts/BaseLayout.astro` | HTML shell, SEO tags, header and footer |
| `src/styles/global.css` | Tailwind setup, color tokens, shared utilities |
| `src/assets/images/` | Source photos, grouped by category |
| `public/` | Videos, favicons, share image, robots.txt |

## Editing content

Everything a non-developer might want to change lives in `src/content/site.ts`.

- **Text**: edit the matching object (for example `programs`, `weeklySchedule`, `teachers`).
- **Photos**: put a `.jpg` in `src/assets/images/<category>/` and add its caption to the `captions` object. It is optimized on build and shows up in the gallery automatically.
- **Videos**: put an `.mp4` in `public/videos/` and register it in `videos`.

## Deployment

The site is deployed on Vercel. The **Astro** preset is detected automatically (`npm run build`, output `dist`), and no adapter is needed because the site is fully static. Pushing to `main` triggers a new production deployment.

If the domain changes, update `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`.

## Notes

- Design inspired by the layout of [overlake.org](https://www.overlake.org), recolored with the school's own blue, yellow, black, and white.
- Individual student data from the school profile (names, classes, portraits) is intentionally not published.
