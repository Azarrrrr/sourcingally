# Search guidance sources used for the 2026 technical SEO upgrade

## Google: helpful, reliable, people-first content

Source: https://developers.google.com/search/docs/fundamentals/creating-helpful-content

Google states that its ranking systems prioritize helpful, reliable information created to benefit people rather than content created to manipulate rankings. Its self-assessment guidance emphasizes original information or analysis, substantial coverage, clear authorship, first-hand expertise where relevant, factual accuracy, and pages that do not feel mass-produced or hastily made. The guidance specifically warns against producing large volumes of content merely to attract search traffic.

Project implication: retain the 196-title roadmap as a managed editorial pipeline; publish field-informed, reviewed articles in smaller quality-controlled batches rather than bulk-generating weak pages.

## Google: build and submit a sitemap

Source: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

Google recommends a root-level sitemap with fully qualified canonical URLs. It says sitemaps should include URLs the site owner wants to appear in search results, and describes sitemap submission as a hint rather than an indexing guarantee. It also notes that automatic generation is preferred for sites with more than a few dozen URLs.

Project implication: the sitemap generator was updated to include published Journal URLs and canonical, indexable conversion and knowledge pages while excluding known `noindex` fallback routes.

## Google: localized versions of a page

Source: https://developers.google.com/search/docs/specialty/international/localized-versions

Google recommends explicitly indicating language variations. It explains that substantially untranslated main content can be treated as duplicate content, that language-version annotations must be reciprocal, and that `x-default` is useful as a fallback for unsupported language settings. Google also cautions that `hreflang` alone does not determine page language.

Project implication: reciprocal alternates are emitted only for fully localized, indexable page groups (home, Buyer Paths hub, Project Brief Builder, Service Matcher, China Route Map, and Questions hub). Interim non-English English-source fallback detail pages use `noindex,follow` rather than being treated as full translations.

## Google: structured data

Source: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

Google explains that structured data provides explicit clues about a page’s meaning and should describe visible content on that page. It recommends JSON-LD as an implementation-friendly format and stresses completeness, correctness, development validation, and ongoing monitoring after deployment.

Project implication: retain Organization, Article, and FAQPage JSON-LD that accurately represents visible content. Do not add false review, rating, certification, product, or local-business attributes.
