# Project Notes

Running notes on decisions, current state, and things to revisit.

---

## Booking flow (current)

Simplified for first launch — no upfront payment required.

1. Student fills out `/book` form (Formspree)
2. Formspree emails submission to `bojan.milinic@gmail.com`
3. Student is redirected to `/booking-confirmed`
4. Bojan follows up manually to confirm time and collect payment

**Formspree endpoint:** `https://formspree.io/f/mqejygad`
**Post-submit redirect:** `https://bojanmilinic.netlify.app/booking-confirmed`

Form fields: name, email, session interest, online/in-person, who the session is for, student experience level and age, open-ended notes.

---

## Class pricing

All classes currently set to **$20 / 55 min** as a first-run rate.

When prices change, update three places:
1. `src/data/classes.js` — website updates automatically
2. Stripe — archive old payment link, create new one, update `stripeLink` in `classes.js`
3. Venmo — no action needed (students send manually)

---

## Domain

- **Domain:** `bojanmilinic.com` — purchased via Namecheap
- **DNS:** Netlify DNS configured ("Set up Netlify DNS for your domain" completed in Netlify dashboard)
- **Status:** Waiting on propagation — can take up to 48 hours (usually under 1 hour)
- **Next step:** Once propagated, verify `https://bojanmilinic.com` loads the site and SSL certificate is active (Netlify provisions this automatically)
- **After confirmed live:** Update Formspree `_next` redirect from `bojanmilinic.netlify.app/booking-confirmed` to `bojanmilinic.com/booking-confirmed`

---

## Git remotes

| Remote | Repo | Purpose |
|---|---|---|
| `origin` | `ssgokuclaw/personal-website` | Working fork |
| (not yet added) | `BojanMilinic/personal-website` | Netlify watches this |

To add upstream: `git remote add upstream git@github.com:BojanMilinic/personal-website.git`

Pushing to `origin` alone does **not** update the live site.

---

## Things to revisit later

- [ ] Verify `bojanmilinic.com` is live after DNS propagation
- [ ] Update Formspree `_next` redirect URL to `bojanmilinic.com` once domain is confirmed live
- [ ] Add Stripe payment links when ready to collect payment upfront
- [ ] Add Calendly links to `/booking-confirmed` and `/dance-booking` once account is set up
- [ ] Add `upstream` remote for BojanMilinic repo
- [ ] Consider adding availability/timezone and goal fields to `/book` form
- [ ] Confirm Formspree email notifications are active in dashboard
