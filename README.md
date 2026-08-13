# Sourcing Ally

A multilingual Astro website for **Sourcing Ally**, a Shenzhen-based sourcing partner for international buyers importing from China.

## Local development

```bash
npm install
npm run dev
npm run build
```

The production build creates the static `dist/` directory.

## Publish a Journal article in six languages

All Journal posts live in `src/content/blog/`. For one article, create one Markdown file for each reviewed language version in that same folder:

| Language | Example file |
|---|---|
| English | `compare-suppliers.en.md` |
| Spanish | `compare-suppliers.es.md` |
| Portuguese | `compare-suppliers.pt.md` |
| Russian | `compare-suppliers.ru.md` |
| Turkish | `compare-suppliers.tr.md` |
| French | `compare-suppliers.fr.md` |

Every version of the same article must use the identical `translationKey`. For example, all six files above contain:

```md
---
title: "A natural title in this language"
description: "A clear, natural description in this language."
pubDate: 2026-08-13
author: "Sourcing Ally"
lang: "ru"
translationKey: "compare-suppliers"
category: "Supplier research"
tags: ["supplier sourcing", "China sourcing"]
readingTime: "8 min read"
featured: false
draft: false
---
```

Use `draft: true` until a fluent reviewer has checked the language. Keep titles, descriptions, headings, body text, and internal-link labels in the selected language. Do not invent client results, certifications, testimonials, warehouse claims, legal advice, or other unverified claims.

The full author guide is at [`docs/multilingual-journal-publishing-guide.md`](docs/multilingual-journal-publishing-guide.md). Before publishing a large batch, run:

```bash
node scripts/validate-blog-translations.mjs
```

## Automatic deployment

This repository is connected to the existing **Cloudflare Pages** project for `sourcingally.com`.

| Setting | Value |
|---|---|
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production deployment | Every commit to `main` |
| Pull-request previews | Disabled initially |

To publish a new article, use GitHub: open `src/content/blog/`, choose **Add file**, create or upload the Markdown file, and commit it directly to `main`. Cloudflare Pages then rebuilds and publishes the website automatically. No GitHub API key is needed for normal manual uploads.

## Current platform

The current build contains **523 static pages** and six website languages: English, Spanish, Portuguese, Russian, Turkish, and French. The platform includes services, product categories, sourcing cities, sourcing-school guides, buyer paths, Questions and Answers, a Journal, legal pages, and interactive buyer tools.

## Project structure

- `src/content/blog/` — GitHub-managed Journal Markdown files.
- `src/content.config.ts` — content schema and language validation.
- `src/pages/[lang]/blog/` — multilingual Journal index and article routes.
- `src/data/` — localized site content and interface copy.
- `docs/multilingual-journal-publishing-guide.md` — detailed author instructions.
- `scripts/validate-blog-translations.mjs` — translation-key and language-frontmatter validation.

## Claims policy

Publish only facts confirmed by Sourcing Ally: its Shenzhen base, listed services, regional travel coverage, contact details, language options, the minimum 5% sourcing fee, the $150/day independent factory-travel support fee, and the exclusion of dangerous or military-related goods. Do not add unverified statistics, client counts, results, certifications, guarantees, or testimonials.

## Deployment verification

The Cloudflare Workers and Pages GitHub App is authorized for this repository. New commits to `main` are expected to trigger a Cloudflare Pages production build automatically.
