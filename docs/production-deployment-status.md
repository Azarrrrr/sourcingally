# Production deployment status

## Live website

The Sourcing Ally website is live and reachable through both of these addresses:

| Address | Role | Current status |
|---|---|---|
| `https://sourcingally.com/en/` | Primary production domain | Returns HTTP 200 and the Sourcing Ally homepage title. |
| `https://sourcingally.pages.dev/en/` | Cloudflare Pages project address | Returns HTTP 200 and serves the same production deployment. |

The production deployment was created through Cloudflare Pages Direct Upload from the Astro `dist/` directory.

| Deployment field | Value |
|---|---|
| Cloudflare Pages project | `sourcingally` |
| Production branch label | `main` |
| Deployment identifier | `58a4aa83-d4eb-45ed-8d9d-1ab195b6d0bb` |
| Deployment URL | `https://58a4aa83.sourcingally.pages.dev` |
| Production project URL | `https://sourcingally.pages.dev` |
| Custom domain | `sourcingally.com` |
| DNS routing | Proxied apex CNAME: `sourcingally.com` → `sourcingally.pages.dev` |

## Important publishing status

The Pages deployment is currently a **Direct Upload** deployment. It is live, but a direct upload does not automatically update when files change in GitHub.

The repository exists at `https://github.com/Azarrrrr/sourcingally`, and the completed site is committed locally on branch `main`. GitHub write authorization needs to be completed before the local source can be pushed and GitHub auto-deploy can be enabled.

Once GitHub write access works, use this sequence:

1. Push the local `main` branch to the repository.
2. In Cloudflare Pages, connect the `Azarrrrr/sourcingally` GitHub repository to the existing Pages project.
3. Set the production branch to `main` and the build configuration to `npm run build` with output directory `dist`.
4. Publish future reviewed Journal articles by committing Markdown files to `src/content/blog/` and pushing to `main`.

Until that final connection is completed, build and publish a new Direct Upload deployment from the project directory with:

```bash
npm run build
npx wrangler pages deploy dist --project-name sourcingally --branch main
```

The deployed build contains 213 static pages, including the five-language core experience, buyer tools, Sourcing Questions library, long-form English Journal, sitemap generation, and no-index safeguards for unreviewed source-language fallbacks.
