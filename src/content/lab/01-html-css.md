---
title: "01 HTML/CSS Experiment"
date: 2026-05-31
category: "Lab"
summary: "Notes on the first blog-building experiment, using hand-authored HTML and CSS."
tags:
  - "experiment"
  - "lab"
  - "html"
  - "css"
type: "lab"
workflow: "Plain HTML and CSS"
workflowStatus: "in-progress"
---

# 01 HTML/CSS Experiment

The first blog experiment uses plain HTML and CSS. Its purpose is to make the basic mechanics visible before adding a static site generator or build tool.

## What Worked

- Each page is easy to open directly in a browser.
- Relative links, images, page structure, and CSS are visible instead of hidden behind tooling.
- The Pythonland bundle shows how a multi-page topic can live in one folder with one shared stylesheet.
- Metadata comments at the top of HTML files give the project a simple way to describe posts before a formal content system exists.

## Pain Points

- Navigation has to be updated by hand on every page.
- Shared layout patterns are duplicated across files.
- Manual HTML can drift away from any Markdown source that may exist later.
- Indexes, archives, tags, and next/previous links are all manual.

## Next Steps

- Keep the HTML/CSS folder as a preserved experiment under `experiments/01-html-css/`.
- Use this note as the durable lab record for the workflow.
- Move future reader-facing source posts toward `content/posts/` when they are written in Markdown.
- Compare this manual workflow against the Pelican experiment before choosing what belongs in the public site.
