# 2026-04-04 — Personal Website Build (Bojan Milinic)

## Actions Taken

- Planned full website architecture: Astro + Tailwind CSS, hosted on Netlify, GitHub for source control
- Wrote `package.json` with Astro + `@astrojs/tailwind` + Tailwind CSS dependencies
- Wrote `astro.config.mjs` with Tailwind integration and static output
- Wrote `tailwind.config.mjs` with custom color palette (`navy`, `accent`, `dark`) and custom fonts (Inter, Playfair Display, JetBrains Mono)
- Wrote `netlify.toml` with build command and publish directory for auto-deploy
- Wrote `src/data/cv.js` — full CV data (personal info, experience, education, skills); later updated by user to reflect personal email (`bojan.milinic@gmail.com`), location (`Reading, PA`), and GitHub (`BojanMilinic`)
- Wrote `src/data/projects.js` — 6 scaffolded Python/GIS projects based on USGS work
- Wrote `src/data/classes.js` — 4 Python tutoring class listings with Stripe + Venmo payment placeholders; user updated Venmo username to `Bojan456` and added real Stripe Payment Link for "Intro to Coding Concepts"
- Wrote `src/layouts/BaseLayout.astro` — shared HTML shell with Google Fonts, dark/light mode prop
- Wrote `src/components/Nav.astro` — sticky navy navbar, active page highlighting, CSS-only mobile hamburger via `<details>`
- Wrote `src/components/Footer.astro` — minimal footer with GitHub, ORCID, and email links
- Wrote `src/components/ProjectCard.astro` — dark-themed card with color-coded tech badges, GitHub/demo links, featured badge
- Wrote `src/components/ClassCard.astro` — academic-style card with level badge, price, topics checklist, Stripe button, Venmo button; shows amber warning if payment links not yet configured
- Wrote `src/pages/index.astro` — dark hero landing page with monogram, bio, and 4 nav cards
- Wrote `src/pages/cv.astro` — two-column layout (sidebar + main), print/PDF button, timeline experience, skills badges
- Wrote `src/pages/projects.astro` — dark technical page with featured/other grid sections and terminal-style stat bar
- Wrote `src/pages/teaching.astro` — light academic page with how-it-works section, class listings, and about-the-instructor section
- Wrote `src/pages/contact.astro` — split layout with direct contact links and Formspree form (with placeholder detection)
- Wrote `public/favicon.svg` — navy rounded square with "BM" monogram
- Wrote `README.md` — setup instructions, deployment guide, content update guide, payment setup, photo instructions
- Wrote `.gitignore` — excludes `dist/`, `node_modules/`, `.astro/`, `.env*`, private keys, OS/editor clutter, `*.zip`
- Ran `npm install` — 377 packages installed successfully
- Ran `npm run build` — all 5 pages built successfully with zero errors
- Generated SSH key (`id_ed25519_github`) on Mac Mini for `ssgokuclaw` GitHub account
- Configured `~/.ssh/config` to use correct key for `github.com`
- Initialized git repo, added remote, committed, and pushed to `ssgokuclaw/personal-website`
- **Netlify** connected to `BojanMilinic/personal-website` (forked from `ssgokuclaw`) — site is live with auto-deploy on merge
- **Stripe** fully set up — Payment Links created and plugged into `classes.js`

---

## Questions Asked

| Question | Answer |
|---|---|
| How do I preview the website from VS Code? | Use built-in Simple Browser (`Cmd+Shift+P → Simple Browser: Show → localhost:4321`), Live Preview extension, or just open the browser directly |
| Do I have to be logged into Stripe to use Payment Links? | Yes to create them; customers never need a Stripe account to pay |
| Can I create my Stripe account on a personal machine and just plug in the URLs here? | Yes — only the public Payment Link URL ever touches this machine, never bank/card data |
| What should live in the GitHub repo? | Full source code (not `dist/` or `node_modules/` — both are auto-generated) |
| Can I just delete the `.git` folder to wipe history? | Yes — `.git` is a folder; deleting it fully un-gits the repo |
| Why zip only `dist/` and not the whole project? | `dist/` is for Netlify drag-and-drop only; for GitHub you want the full source |
| Could I use the forking method for long-term workflow? | Yes — `ssgokuclaw` forks to `BojanMilinic`, Mac Mini pushes to fork, PR merges to main, Netlify auto-deploys |
| Is it "site name" or "project name" to change the Netlify URL? | Site name — found at Site settings → General → Site details → Site name |
| How do I force push? | `git push origin main --force` |
| Can I do `git remote add` without `git init` first? | No — must `git init` first or you get "not a git repository" error |

---

## Lessons Learned

- **Forking direction matters for PRs** — if two repos are created independently (not one forked from the other), GitHub can't compare their histories and PRs fail with "entirely different commit histories." Always fork from the source of truth.
- **Deleting `.git` also deletes `.gitignore`** — had to recreate `.gitignore` after wiping git history.
- **SSH key must be added to GitHub before pushing** — generating the key locally is not enough; you get `Permission denied (publickey)` until the public key is saved in GitHub account settings.
- **`~/.ssh/config` is needed on fresh machines** — without it, SSH may not use the right key for `github.com` even if the key is loaded in the agent.
- **`git remote add` requires `git init` first** — obvious in hindsight but easy to miss when working step-by-step.
- **Netlify drag-and-drop only needs `dist/`** — but for proper source control you want the full project directory (minus `node_modules/` and `dist/`).
- **Stripe Payment Links are fully public URLs** — no credentials, no backend, no PCI scope. Safe to hardcode in a static site's data files.
- **README got encoded weirdly** — the README was modified with wide-character encoding (likely a copy/paste or encoding issue from the user's machine). Not a blocker but worth noting.

---

## General Notes

- **Two-machine security model**: Mac Mini (`ssgokuclaw`) handles all coding and git pushes. Personal machine (`BojanMilinic`) holds GitHub credentials, Stripe account, and bank info. Mac Mini never touches sensitive accounts.
- **Git workflow**: Mac Mini → pushes to `ssgokuclaw/personal-website` → PR to `BojanMilinic/personal-website` → merge → Netlify auto-deploys.
- **Netlify** is connected to `BojanMilinic/personal-website` (the main/canonical repo). Every merge to `main` triggers a redeploy automatically.
- **Stripe is live**: At least one Payment Link (`Intro to Coding Concepts`) is confirmed configured. Remaining 3 classes still need Stripe links added to `classes.js`.
- **Formspree not yet set up**: `src/pages/contact.astro` still has `YOUR_FORMSPREE_ID` placeholder. The page shows an amber warning until configured.
- **Content is all in `src/data/`** — `cv.js`, `projects.js`, `classes.js`. No code changes needed to update text, prices, or projects.
- **Projects are scaffolded** — 6 projects based on known USGS work. GitHub/demo links are all `null` for now (internal repos). Update as public work becomes available.
- **Photo placeholder** — monogram "BM" used everywhere. To add a real photo: drop `photo.jpg` in `public/` and replace monogram divs per README instructions.
- **Design split**: CV + Teaching + Contact = light/academic (Inter + Playfair Display). Projects + Index = dark/technical (navy `#0f172a`, monospace accents). Shared navy navbar ties them together.

---

## Commands Ran

```bash
# Install dependencies
npm install

# Build the site (verify everything compiles)
npm run build

# Start dev server
npm run dev
# → http://localhost:4321

# Generate SSH key for ssgokuclaw GitHub account
ssh-keygen -t ed25519 -C "ssgokuclaw-macmini" -f ~/.ssh/id_ed25519_github -N ""

# Add key to SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_github

# Configure SSH to use correct key for github.com
cat >> ~/.ssh/config << 'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github
  AddKeysToAgent yes
EOF

# Test GitHub SSH connection
ssh -T git@github.com
# Expected: Hi ssgokuclaw! You've successfully authenticated...

# Initialize git and push to GitHub
git init
git remote add origin git@github.com:ssgokuclaw/personal-website.git
git add .
git commit -m "initial build"
git branch -M main
git push -u origin main

# Zip project for transfer (excludes node_modules, dist, .astro)
cd /Users/goku_claw/code_projects
zip -r personal_website.zip personal_website/ \
  --exclude "personal_website/node_modules/*" \
  --exclude "personal_website/dist/*" \
  --exclude "personal_website/.astro/*"
```
