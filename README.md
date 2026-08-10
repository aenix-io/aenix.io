# aenix.io

The official website for **Aenix**, the open-core company behind [Cozystack](https://cozystack.io) (CNCF Sandbox project; CNCF Incubating expected late summer 2026). Built with [Hugo](https://gohugo.io/), deployed via Netlify.

## Site structure

- **5 product editions** under `/products/aenix-platform/` — Public Cloud, ISP, Enterprise, IDP, AI/ML
- **8 solutions, 15 services, 12 industries, 7 alternatives, 4 compare, 4 migration hubs, 6 lead-magnet resources**
- **Bilingual** — EN + DE locale at `/de/`
- **Blog** at `/blog/` — 108 posts, native Hugo blog with filters, share bar, end-of-post quizzes, JSON-LD `BlogPosting` schema

## Local development

```bash
hugo server --port 1313 --disableFastRender --gc
# http://localhost:1313/
```

Hugo extended ≥0.151.1 required (see `netlify.toml`).

## Production build

```bash
hugo --gc --minify --logLevel info
```

Netlify auto-builds on push to `main` (production) and `feat/*` branches (deploy previews).

## Documentation for contributors

| Document | What's in it |
|---|---|
| [`CLAUDE.md`](CLAUDE.md) | Binding rules for AI assistants + engineers working on this repo |
| [`docs/CONTENT_OPERATIONS.md`](docs/CONTENT_OPERATIONS.md) | Where things live; DE slug map; adding pages and menu items |
| [`docs/BLOG_AUTHORING.md`](docs/BLOG_AUTHORING.md) | Blog post conventions, frontmatter, quizzes |
| [`docs/SHORTCODES.md`](docs/SHORTCODES.md) | Reference for all custom shortcodes |
| [`docs/FRONTMATTER_SCHEMA.md`](docs/FRONTMATTER_SCHEMA.md) | Required frontmatter fields per page type |
| [`docs/PAGE_CREATION_PLAYBOOK.md`](docs/PAGE_CREATION_PLAYBOOK.md) | Strategic content rules (12-block IA, keyword split, CNCF neutrality) |
| [`docs/EXAMPLE_solution_landing.md`](docs/EXAMPLE_solution_landing.md) | Full working example of a solution landing |
| `AGENTS.md`, `.cursorrules` | Same content as CLAUDE.md, in formats Codex / Cursor / Copilot read natively |

## Key conventions

- **Customer evidence requires permission.** Tier-1 European bank engagements NDA-protected until mid-2027. Hosting customer logos (GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy) need per-use Timur sign-off for new content. Do not invent quotes.
- **DE locale uses DE slugs.** See DE slug map in `docs/CONTENT_OPERATIONS.md`.
- **Cannibalization-safe pairs.** Landing + companion blog post must use shifted parent_topic. Verify via Ahrefs `keywords-explorer-overview` before publishing.
- **No emoji in B2B content** (enterprise / regulated buyers).
- **English only** for commit messages, PRs, content frontmatter, code comments. Bilingual `content/` (EN + DE) is the only place German appears.
- **`{{ partial "seo/head.html" . }}`** must remain invoked in `layouts/partials/hooks/head-end.html` — it's the single entry point for canonical / JSON-LD / hreflang / OG / CSS.

## Contact

- Timur Tukaev (CEO + COO): timur.tukaev@aenix.io
- Andrei Kvapil (Founder, main Cozystack developer): via GitHub `@kvaps`
- Sales: sales@aenix.io
- General: info@aenix.io

For Cozystack open-source / community: [cozystack.io](https://cozystack.io) and CNCF Slack `#cozystack`.

## License

Site content © Aenix. Cozystack itself is open-source under Apache 2.0 at [github.com/cozystack/cozystack](https://github.com/cozystack/cozystack).
