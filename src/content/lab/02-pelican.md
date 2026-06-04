---
title: "Pelican Progress and Lessons So Far"
date: 2026-06-01
category: "Lab"
summary: "A short summary of the Pelican setup, the first posts, and the main lessons from moving beyond hand-written HTML."
tags:
  - "pelican"
  - "markdown"
  - "static-site-generator"
  - "lab"
  - "workflow"
type: "lab"
---

This note summarizes what has happened so far in the Pelican experiment.

The blog started with a plain HTML and CSS experiment. That first version made the basic mechanics visible: pages, links, folders, images, metadata comments, and shared stylesheets. The Pythonland post showed how one folder could act like a small multi-page bundle, with one `style.css` file controlling the look of several related HTML pages.

The second experiment introduced Pelican, a static site generator. Instead of writing every final HTML page by hand, the workflow now starts with Markdown files in the shared root `content/` folder. Pelican reads those files, applies configuration and templates, and generates finished HTML into `experiments/02-pelican/output/`.

## What Has Been Set Up

- A UV-created virtual environment lives inside `experiments/02-pelican/.venv/`.
- Pelican is installed and working inside that environment.
- `experiments/02-pelican/pelicanconf.py` controls the local Pelican settings.
- `experiments/02-pelican/publishconf.py` exists for future publishing settings.
- `experiments/02-pelican/tasks.py` and `experiments/02-pelican/Makefile` were generated as helper command files.
- `content/posts/` now contains durable Markdown source posts.
- `content/lab/` contains durable lab notes about the workflows.
- `experiments/02-pelican/output/` contains the generated static site.
- `RELATIVE_URLS = True` was enabled so generated pages can find their CSS when opened locally or from a nested folder.

## Posts Created

The first real Pelican article was:

- `fighting-pointlessness.md`

That post explored the feeling of pointlessness and how meaning can return in small, practical units.

The second article was:

- `kendrick-lamar-and-watching-your-judgements.md`

That post used Kendrick Lamar, "Worldwide Steppers," "Savior," and Killer Mike's "Something for the Junkies" as a way to reflect on judgement, hypocrisy, and the danger of assuming we would act better than others under the same pressures.

This note is more of a lab entry than a normal essay, so it now lives in `content/lab/`.

## What Was Learned

Markdown is a better source format for durable posts than hand-written HTML. It keeps the writing cleaner and lets the generator handle the repetitive page structure.

Pelican creates more than just individual posts. It also generates indexes, archives, categories, tags, author pages, and article pages. That means navigation can become more automatic as the blog grows.

The generated HTML still depends on configuration. When CSS looked broken, the issue was not the stylesheet itself. The generated page was using root-relative links like `/theme/css/main.css`, which worked in some hosting situations but failed when opening the file directly. Switching to relative URLs fixed that.

The `Makefile` and `tasks.py` files are convenience layers. They are shortcuts for build, serve, clean, and publish commands. For now, the clearest command is still the direct Pelican command:

```powershell
.\.venv\Scripts\python.exe -m pelican -s pelicanconf.py
```

The `experiments/02-pelican/example_comparisons/` folder was used as a local design sandbox. It contained five small Pelican sites with different styling approaches and screenshots. That folder is intentionally ignored by Git because it is useful for exploration but not part of the main experiment.

## Open Questions

The normal posts now live in the durable source folder:

```text
content/
  posts/
  lab/
```

Another open question is how to host the site. The simplest option is to deploy the generated `experiments/02-pelican/output/` folder. A better long-term option is to configure Netlify to install Pelican, run the build, and publish the generated output automatically.

## Next Steps

1. Review the existing Markdown posts for tone, metadata, and order.
2. Decide whether lab notes and normal posts should share the same Pelican site or become separate sections.
3. Choose a visual direction for the real Pelican theme.
4. Decide whether generated `output/` should be committed, ignored, or treated only as deploy output.
5. Test a Netlify deployment path.

The main lesson so far is that a static site generator changes the work. Instead of hand-maintaining every page, the work shifts toward writing good source files, setting clear metadata, choosing useful structure, and trusting the build step to produce the site.
