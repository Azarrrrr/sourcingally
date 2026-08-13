# Translation Priority Remediation

## Verified audit result

The audit of the 523-page static build confirms that the non-English URLs do **not** yet mean all of their page bodies have been translated. English is complete. Spanish, Portuguese, Russian, and Turkish each have **66 likely English fallback bodies**, while French has **86**. The interim fallback routes have been correctly marked `noindex,follow`, but they are not acceptable as a finished multilingual experience.

| Priority | Page family | Why it matters | Current status |
|---|---|---|---|
| 1 | Privacy, terms, disclaimer, editorial policy | Trust, legal clarity, and footer journeys; visible on every page | English fallback in ES/PT/RU/TR/FR |
| 2 | Services, products, cities, and sourcing-school hubs | Main entry pages from navigation and the homepage | English fallback in ES/PT/RU/TR/FR |
| 3 | Buyer paths and Sourcing Questions | High-intent education and conversion journeys | Mostly localized for ES/PT/RU/TR but still under fallback safeguards; French fallback |
| 4 | Service, product, city, and guide detail pages | Core SEO and education library | English fallback in all non-English locales |
| 5 | Journal articles | High-volume editorial expansion | English fallback until individual human-reviewed translations are published |

## Immediate remediation batch

The first corrective batch will fully translate the four shared legal/trust pages into Spanish, Portuguese, Russian, Turkish, and French, then remove their fallback `noindex` treatment for the completed languages. The next batch will address the navigation hubs and their high-value detail-page families.

## Quality controls

Translations must retain confirmed company facts, avoid new claims, preserve explicit limitation language, use natural market-language phrasing, and keep legal/operational qualifications intact. The content will be generated in structured page data, reviewed for completeness and script/language consistency, and deployed only after build verification.
