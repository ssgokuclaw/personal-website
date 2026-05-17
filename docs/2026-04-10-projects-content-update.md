# 2026-04-10 — Projects Content Update

## Project Goal

Build and maintain Bojan Milinic's personal website — a static Astro + Tailwind CSS site hosted on Netlify, showcasing a CV, Python/GIS projects, Python tutoring services, and a contact form. No goal shift from the previous session; this session was purely a content update.

## How to Run / Restart

Start the dev server from the project root. No setup needed unless `node_modules/` is missing.

### Commands to Resume

```bash
cd ~/code_projects/personal_website
npm install   # only if node_modules/ is missing
npm run dev
# → http://localhost:4321
```

## Session Goal

Add the Water Geogenic Contamination project to `src/data/projects.js` so it appears on the Projects page. Also explored where all website text can be edited for future reference.

## Options Considered

### Option A — Edit `src/data/projects.js` directly
Add a new entry to the `projects` array with title, description, tags, and optional github/demo links.

- **Pros:** Single file change, no component code touched, auto-renders on the Projects page, consistent with existing data-driven pattern.
- **Cons:** None for this use case.
- **Verdict:** Correct approach — chosen.

### Option B — Hardcode project in the `.astro` page
Write the project HTML directly in `src/pages/projects.astro`.

- **Pros:** Slightly faster for a one-off addition.
- **Cons:** Breaks the data-driven pattern, harder to maintain, inconsistent with other projects.
- **Verdict:** Not appropriate.

## Decision Summary

|  | Option A: Edit `projects.js` | Option B: Hardcode in page |
|---|---|---|
| Consistent with existing pattern | ✅ | ❌ |
| Single file to edit | ✅ | ❌ |
| Easy to maintain/update | ✅ | ❌ |
| Renders automatically | ✅ | ✅ |

**Chosen: Option A** — editing `src/data/projects.js` is the established pattern for all project content.

## Tech Stack

- **Astro** — static site framework
- **Tailwind CSS** — utility-first styling
- **JavaScript** — data files (`src/data/`)
- **Netlify** — hosting and auto-deploy on merge to `main`
- **GitHub** — source control (`ssgokuclaw/personal-website` → `BojanMilinic/personal-website`)

## What was Attempted

### What was done

- **`src/data/projects.js`** — added new project entry: `Water Geogenic Contamination Data Summarization and Plotting Pipeline`. Includes full description referencing the published paper by Melinda Erickson et al. in *Environmental Monitoring and Assessment* (DOI included inline), tags (`Python`, `Pandas`, `Data Engineering`, `Watershed`), `featured: false`, and `github: null` / `demo: null`.
- **No other files changed.**

### What went wrong

Nothing — clean, targeted content edit with no issues.

## More Context

### Questions Asked

| Question | Answer |
|---|---|
| Where can the website text be updated? | Structured content lives in `src/data/` (cv.js, projects.js, classes.js); page copy lives inline in `src/pages/*.astro`; nav/footer in `src/components/` |

### Lessons Learned

- The website text is well-organized: all structured content (projects, CV, classes) is in `src/data/` — no need to touch component or page files for routine content updates.
- The `docs/` folder and `.gitignore` exclusion were already set up from the previous session.

## Next Steps (Pick up here)

- **Add remaining Stripe Payment Links** to `src/data/classes.js` — 3 classes still have placeholder links.
- **Set up Formspree** — replace `YOUR_FORMSPREE_ID` in `src/pages/contact.astro` so the contact form works.
- **Add a real photo** — drop `photo.jpg` in `public/` and replace monogram divs per README instructions.
- **Add GitHub links** to projects as repos become public — currently all `github: null`.
- **Consider promoting** the Water Geogenic Contamination project to `featured: true` since it's tied to a published paper.
- **Push and merge** the `projects.js` update from `ssgokuclaw/personal-website` → PR → `BojanMilinic/personal-website` to trigger Netlify deploy.
