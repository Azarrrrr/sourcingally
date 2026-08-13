# Owner launch checklist: only the inputs Sourcing Ally still needs

The website code, search assets, publishing workflow, and multilingual safeguards are ready for the next stage. The remaining items require account access or real business material that should come from the owner.

## 1. GitHub and Cloudflare Pages launch

Please provide **one** of the following when you are ready to launch:

| Option | What you do | What happens next |
|---|---|---|
| Share a new GitHub repository URL | Create an empty repository in your GitHub account and send the URL | The local website history can be connected, the production branch prepared, and the source pushed. |
| Open GitHub in your browser | Sign in to your GitHub account and open the page for creating a new repository | The repository can be created with your confirmation, then the project can be connected. |

After the source is in GitHub, open Cloudflare Pages in your Cloudflare account and connect the repository. Use these production settings:

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | Astro |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | 22 or a current Cloudflare-supported version |
| Custom domain | `sourcingally.com` |

Cloudflare Pages will then rebuild the site whenever a reviewed Markdown article or website update is pushed to `main`.

## 2. Search Console verification

Once `https://sourcingally.com` is live, verify it in Google Search Console. Submit:

```text
https://sourcingally.com/sitemap.xml
```

The current sitemap contains **104 canonical indexable URLs**. It includes the 13 published English Journal articles and excludes interim non-English English-source fallback pages.

## 3. Original proof materials

Send any material you are comfortable publishing, following the detailed checklist in [`field-evidence-intake.md`](./field-evidence-intake.md). The fastest useful starter package is:

1. Two to six original photographs from Shenzhen, a market, travel, sample review, packaging work, or a factory visit where publication is permitted.
2. A short note for one real sourcing situation: where it happened, what was checked, what became clearer, and what must remain private.
3. A short factual founder biography: how you began working in sourcing, your language capability, how you work with clients, and any real qualifications you want published.

## 4. Review process for translated content

Before publishing the first reviewed translations, name a fluent reviewer for Spanish and Russian. The reviewer does not need to be a lawyer or engineer, but must be able to flag unnatural language and check that fees, travel scope, destination-specific cautions, and legal limitations retain their intended meaning.

Start with these three English source articles:

- **How to Import from China: A Practical First-Order Framework**
- **How to Write a Product Brief for China Sourcing**
- **How to Find Suppliers in China: A Practical Research Process**

Use the existing `article-translation-template.md` for each finished translation. Publish only after a human review, then remove the related interim no-index fallback where a complete localized page has replaced it.

## 5. Optional measurement choice after launch

Decide later whether Sourcing Ally should use simple privacy-light traffic reporting or detailed marketing analytics. Do not install analytics until the final Privacy Policy has been updated to describe the actual deployed tools and any consent obligations relevant to the audiences you serve.
