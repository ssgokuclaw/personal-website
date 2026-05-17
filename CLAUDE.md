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
| `/booking-confirmed` | Post-Stripe payment page; shows Calendly inline embed for scheduling; replace `YOUR_CALENDLY_LINK` placeholder with real link |
| `/dance` | Branches of Dance landing page; QR code on flyers points here; has Python/dance joke; CTAs to `/dance-booking` and `/teaching` |
| `/dance-booking` | Free intro class booking; bypasses Stripe; goes straight to Calendly; replace `YOUR_CALENDLY_LINK/free-intro` placeholder with real link |

## Tailwind custom tokens

Custom colors are defined in `tailwind.config.mjs` and used throughout:

- `navy` / `navy-dark` / `navy-light` — nav and hero backgrounds
- `accent` / `accent-dark` / `accent-light` — blue highlight color
- `dark-base` / `dark-card` / `dark-border` — dark mode surface colors
- Fonts: `font-sans` (Inter), `font-serif` (Playfair Display), `font-mono` (JetBrains Mono)

## Teaching / payments

`src/data/classes.js` contains Stripe payment links and the Venmo username. The `stripeLink` field on some classes still has placeholder values (`YOUR_STRIPE_PAYMENT_LINK_*`) — replace with real Stripe Payment Link URLs before those classes go live. Public payment link URLs are safe to commit; never commit Stripe secret keys.
