# Sourcing Ally

Astro website for **Sourcing Ally**, a Shenzhen-based sourcing partner for international buyers importing from China.

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown by Astro. The production build can be checked with:

```bash
npm run build
```

## Add a blog post

Blog posts live in `src/content/blog/`. Create a Markdown file with frontmatter like this:

```md
---
title: "Your localized article title"
description: "A short description for the article card and SEO metadata."
pubDate: 2026-08-20
author: "Sourcing Ally"
lang: "en"
draft: false
---

Write the article here.
```

The supported language codes are `en`, `es`, `pt`, `ru`, and `tr`. To publish a translated version, create a second Markdown file with the same article topic and set the appropriate `lang` value. The current content structure is designed for human-reviewed localization rather than automatic literal translation.

When a new post is committed and pushed to the production branch, Cloudflare Pages rebuilds the site and publishes the update automatically.

## GitHub setup

Create an empty GitHub repository, then run these commands from this directory:

```bash
git init
git add .
git commit -m "Build Sourcing Ally Astro website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the repository URL with the one belonging to your GitHub account. Do not commit passwords, API keys, or private credentials.

## Cloudflare Pages setup

In Cloudflare, open **Workers & Pages**, choose **Create application**, select **Pages**, and choose **Import an existing Git repository**. Select the GitHub repository and configure the build as follows:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | Astro, if offered |
| Build command | `npm run build` |
| Build output directory | `dist` |

After the first deployment, add `sourcingally.com` as a custom domain in the Cloudflare Pages project. Because the domain is already controlled in Cloudflare, follow the DNS instructions Cloudflare shows for the project. Keep the DNS records Cloudflare provides and confirm that HTTPS is enabled.

## Content and claims policy

The website currently uses only facts confirmed by the owner: the Sourcing Ally name, Shenzhen base, listed service capabilities, regional coverage, contact details, five-language site structure, a minimum 5% sourcing fee, and the exclusion of dangerous or military-related products. Do not add client counts, testimonials, years of experience, certifications, guarantees, warehouse claims, or performance statistics unless they are verified and approved for publication.

## Project structure

- `src/pages/[lang]/index.astro`: localized homepages.
- `src/pages/[lang]/blog/index.astro`: localized blog indexes.
- `src/pages/[lang]/blog/[...slug].astro`: article pages.
- `src/content/blog/`: Markdown content managed through GitHub.
- `src/content.config.ts`: blog schema and language validation.
- `src/layouts/Layout.astro`: shared metadata, navigation, language selector, and footer.
- `public/images/azar-pamir.webp`: owner-provided portrait.
