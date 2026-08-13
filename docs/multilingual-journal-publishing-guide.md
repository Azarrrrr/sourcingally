# Publishing One Journal Article in Six Languages

## The recommended method

You do **not** need an API for normal publishing. The simplest and safest method is to add one Markdown file per language to the same GitHub repository. Each translated version uses the same `translationKey`, which tells the website that the six files are versions of one article. The website then publishes them under one matching set of URLs.

> Example: an article about supplier comparison can live at `/en/blog/compare-suppliers/`, `/ru/blog/compare-suppliers/`, `/es/blog/compare-suppliers/`, `/pt/blog/compare-suppliers/`, `/tr/blog/compare-suppliers/`, and `/fr/blog/compare-suppliers/`.

## Recommended folder and file names

Save the six files under `src/content/blog/`. Keep the article topic before the language code. Use lowercase letters, numbers, and hyphens only.

| Language | Example file name | Required `lang` value |
|---|---|---|
| English | `compare-suppliers.en.md` | `en` |
| Spanish | `compare-suppliers.es.md` | `es` |
| Portuguese | `compare-suppliers.pt.md` | `pt` |
| Russian | `compare-suppliers.ru.md` | `ru` |
| Turkish | `compare-suppliers.tr.md` | `tr` |
| French | `compare-suppliers.fr.md` | `fr` |

Every file in this group must use exactly the same value: `translationKey: compare-suppliers`.

## Copy-ready article template

```md
---
title: "Write the title naturally in this language"
description: "Write a clear 140–160 character summary naturally in this language."
pubDate: 2026-08-13
author: "Sourcing Ally"
lang: ru
translationKey: "compare-suppliers"
category: "Supplier research"
tags: ["supplier sourcing", "China sourcing"]
readingTime: "8 min read"
featured: false
draft: true
---

Start with the buyer's real question in this language.

## Use clear headings

Write the full article in the same language as `lang`. Keep the facts, fee policy, and service scope accurate. Do not invent client results, certifications, supplier relationships, or legal conclusions.

## Add useful next actions

Link to related pages using the same language prefix. For example:

- [Sourcing Questions](/ru/questions/)
- [Supplier sourcing service](/ru/services/supplier-sourcing/)
- [Start a project](/ru/start-project/)
```

When the article is ready, change `draft: true` to `draft: false`. The article can then appear in that language’s Journal.

## Publishing from GitHub

Open the repository at [github.com/Azarrrrr/sourcingally](https://github.com/Azarrrrr/sourcingally), open `src/content/blog/`, choose **Add file → Create new file**, paste the complete Markdown article, and commit it to the `main` branch. You can also upload a `.md` file with **Add file → Upload files**.

For now, the website is being deployed directly. To make a GitHub commit publish automatically, connect this GitHub repository to the existing Cloudflare Pages project once in the Cloudflare Pages dashboard. Set the production branch to `main`, the build command to `npm run build`, and the output directory to `dist`. After that, every future commit to `main` builds and publishes automatically. Cloudflare documents this Git integration workflow in its Pages documentation. [1]

## When an API is useful

A GitHub API is optional. It is useful only if you later build an editor, connect Google Docs/Notion, or want a custom button that creates files automatically. GitHub’s repository-contents API can create or replace a file in a repository, but it requires a private token with repository-write permission. [2]

Do **not** put a GitHub token in the website’s code, JavaScript, or a public browser tool. If you later want a private editorial dashboard, the token must stay on a secure server. For your current workflow, GitHub’s website or GitHub Desktop is safer and easier.

## Article-quality checklist before publishing

| Check | What to confirm |
|---|---|
| Language | The body, title, description, headings, and link labels are all in the selected language. |
| Translation key | All language versions use the same `translationKey`. |
| File state | `draft: false` only after your review. |
| Internal links | Links use the matching language prefix, such as `/ru/questions/` for Russian. |
| Claims | No invented client numbers, testimonials, certifications, results, or legal promises. |
| Source notes | Verify any changing shipping, legal, customs, or compliance point before publishing. |

## Sources

[1] [Cloudflare Pages: Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/)

[2] [GitHub REST API: repository contents](https://docs.github.com/rest/repos/contents)
