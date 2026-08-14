# Sourcing Ally Platform Audit — 2026-08-14

## Scope and current baseline

The static output was reviewed across route generation, language paths, shared navigation, footer hierarchy, internal links, Journal metadata, and sampled live page presentation. The audited build generated **601 static pages**, with **100 pages for each website language**: English, Spanish, Portuguese, Russian, Turkish, and French.

| Area | Status | Audit finding |
|---|---|---|
| Static build | Healthy | The audited source build completed successfully with 601 pages. |
| Language route coverage | Healthy | Every core language directory has 100 generated pages. |
| Shared navigation | Improved | Desktop hover protection and the concise grouped footer are in place. |
| Internal related links | Repaired | A shared localized related-card resolver incorrectly sent translated service, product, and city cards into nonexistent `/guides/` URLs. The resolver now preserves each related page’s actual section. |
| Confirmed deep links | Repaired | The supplier-verification Questions link, freight-forwarder Journal link, and several Journal slug references now use published routes. |
| Turkish operational guide | Repaired in source | Visible English headings and labels in the shipping-readiness guide were replaced with Turkish equivalents. |
| Spanish navigation | Repaired in source | The remaining English “Explore China” label was changed to “Explora China.” |
| Journal language coverage | Priority gap | There are 21 English topics, one Spanish edition, and one Russian edition. The next multilingual article batch addresses this gap. |

## Important distinction: fallbacks versus visible translated content

The platform produces non-English fallback routes for legacy Journal topics that have not yet been translated. Those routes use a localized availability panel and are marked noindex; the English article body is hidden. The audit was adjusted to avoid treating hidden fallback-body links as visitor-facing language-navigation errors. This approach prevents unlocalized legacy articles from being indexed as native translations, but the visitor experience will improve as more real translated articles are published.

## Highest-value improvements after this article batch

The strongest remaining opportunity is not another global design change. It is the **authentic proof layer**: real factory-visit report examples, anonymized sample-review or quality-check templates, project photographs supplied by Azar, and carefully scoped process records. These should be genuine materials rather than invented testimonials, client counts, certifications, warehouse claims, or success metrics.

The second priority is expanding real Journal translation coverage, starting with the practical first-order, supplier comparison, quality-control, samples, Incoterms, freight-forwarder, MOQ, packaging, Chinese-holidays, and supplier-communication articles. The third priority is measurement: a properly configured analytics and search-console setup so future content decisions can follow actual search impressions, language demand, and page engagement.

## Audit assets

The repeatable static audit lives at `scripts/audit-platform.mjs`. Its checks cover generated-page counts, language coverage, valid internal links, non-English English-target links, fallback-route markers, and Journal translation coverage. The sampled live-page observations are recorded in `docs/platform-visual-audit-notes.md`.
