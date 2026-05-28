# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Rules

**Always verify before handing off:** After any code change, run `npm run build` and confirm it succeeds before telling the user to try it. If there are errors, fix them first.

## Commands

```bash
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Deployment workflow

Changes flow through three remotes in order:

1. **Local mac mini** → commit and push to `ssgokuclaw/personal-website` (origin)
2. **ssgokuclaw fork** → sync to `BojanMilinic/personal-website` (via PR or fork sync)
3. **BojanMilinic repo** → Netlify auto-deploys from this repo's `main` branch

Pushing to `origin` (ssgokuclaw) alone does **not** update the live site. The BojanMilinic repo is what Netlify watches.

## Architecture

All site content is static and data-driven. The pattern is:

- **`src/data/*.js`** — plain JS export objects/arrays that are the single source of truth for all page content (projects, CV, teaching classes, payment links)
- **`src/pages/*.astro`** — one file per route; imports from `src/data/`, filters/transforms data, and renders HTML
- **`src/components/*.astro`** — reusable UI pieces (`ProjectCard`, `ClassCard`, `Nav`, `Footer`)
- **`src/layouts/BaseLayout.astro`** — single layout wrapping all pages; accepts `title`, `description`, and `darkMode` props; dark mode (`bg-dark-base`) is used on all current pages

**To add or edit content**, edit the relevant file in `src/data/` — no page or component changes needed.

**Nav variants:** Two nav variants are set via `navVariant` prop on `BaseLayout`. `'professional'` (default): brand→`/`, links: CV · Projects · Contact. `'teaching'`: brand→`/teaching`, links: Teaching · Globe · Notebooks. The two sides intentionally have no cross-links.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home / CV (professional nav) |
| `/projects` | Projects list (professional nav) |
| `/contact` | Contact (professional nav) |
| `/teaching` | Teaching overview (teaching nav) |
| `/globe` | Interactive globe (teaching nav) |
| `/notebooks` | Quarto notebooks (teaching nav) |
| `/book` | Central booking form (Formspree); collects name, email, session interest, format, who-for, background/age, message; redirects to `/booking-confirmed` on submit |
| `/booking-confirmed` | Thank-you page shown after form submission; has Browse Sessions + Email Bojan CTAs |
| `/dance` | Branches of Dance landing page; QR code on flyers points here; has Python/dance joke; CTAs to `/dance-booking` and `/teaching` |
| `/dance-booking` | Free intro class booking; links to `/book` |

## Tailwind custom tokens

Custom colors are defined in `tailwind.config.mjs` and used throughout:

- `navy` / `navy-dark` / `navy-light` — nav and hero backgrounds
- `accent` / `accent-dark` / `accent-light` — blue highlight color
- `dark-base` / `dark-card` / `dark-border` — dark mode surface colors
- Fonts: `font-sans` (Inter), `font-serif` (Playfair Display), `font-mono` (JetBrains Mono)

## Dev server

Dev server configs live in `.claude/launch.json`. Use `preview_start` to launch them. Default Astro dev port is 4321 — if it's in use, Astro bumps to the next available port. If the preview shows 404, stop and restart the server via `preview_stop` + `preview_start`.

## Teaching / booking

All class cards link to `/book` — no Stripe or Venmo in the current flow. The booking form uses **Formspree** (`https://formspree.io/f/mqejygad`) and redirects to `/booking-confirmed` after submission. Formspree emails submissions to `bojan.milinic@gmail.com`.

`src/data/classes.js` is the single source of truth for class titles, prices, and durations. All classes are currently set to **$20 / 55 min**. The `stripeLink` and `venmoNote` fields are still present in the data but not used in the UI — kept for future use.
