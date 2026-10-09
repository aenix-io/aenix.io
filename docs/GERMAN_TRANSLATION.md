# German translations — aenix.io

How to write the German version of an English page or blog post. Every new page or post ships in English and German in the same pull request (see "Content rules" in `CLAUDE.md`); `scripts/check-content-rules.py` fails the PR otherwise.

Read first: `CLAUDE.md`, `docs/BLOG_AUTHORING.md`, the "DE slug map" and "Cross-locale linking" sections of `docs/CONTENT_OPERATIONS.md`, and `docs/CANONICAL_FACTS.md` (the German text must follow it as closely as the English one — "konform", "vorvalidiert", "NVIDIA-validiert" are rejected by CI).

## The German text

- Natural, idiomatic German for technical B2B readers in the DACH region (CTOs, platform engineers, compliance teams). Formal "Sie". Not word-for-word: rebuild sentences the way a German technical author would write them; keep paragraph structure and meaning.
- Keep established English technical terms German engineers use as-is (Kubernetes, Cluster, Pod, Deployment, Rollout, Tenant, Control Plane, Managed Service, Platform Engineering, Edge, …). No invented German calques.
- Do not add, drop or change facts, numbers, names, dates, prices, claims or customer references. If the English is ambiguous, translate it faithfully; do not "improve" it. If it contradicts `docs/CANONICAL_FACTS.md`, fix the English too.
- No emoji. Headings `##` / `###` as in the source; no `#` H1 in the body.
- Code blocks, commands, YAML, file paths, product names (Cozystack, Ænix, KubeVirt, LINSTOR, Talos, …) and shortcode names stay untouched; translate only human-readable shortcode parameters (`caption`, `alt`, `title`, `label`).
- Internal links: if the linked English page has a German counterpart (its front matter has `hreflang_de`), link the German page; otherwise keep the English link.
- Quotes from other people stay in their original language unless the source already translated them.
- For tone and front matter, look at existing German posts in `content/de/blog/2026/05/`.

## Blog posts

For an English post `content/blog/YYYY/MM/<slug>/index.md`:

1. Create `content/de/blog/YYYY/MM/<german-slug>/index.md`, same year/month. `<german-slug>` comes from the German title's keywords: lowercase ASCII (ä→ae, ö→oe, ü→ue, ß→ss), hyphens, short, no stop words; English technical terms stay English.
2. If the English post is a page bundle with images or other files next to `index.md`, copy them into the German bundle under the same names, so `{{< figure src="x.png" >}}` keeps working. Images with absolute paths (`/img/...`) need no copy.
3. Front matter:
   - Translate `title` and `description` (German description 140–160 characters).
   - Set `slug: "<german-slug>"`, `language: "de"`, `hreflang_en: "/blog/YYYY/MM/<english-slug>/"` (the English URL).
   - Keep `date`, `author` (CI checks both versions have the same author), `type`, `topics` (topics stay in English).
   - `related_posts`: only targets that exist in German (their German paths); otherwise drop.
   - `companion_landing`: the German counterpart of the English landing (follow its `hreflang_de`; drop if none); `companion_label` in German.
   - `quiz`: translate title, questions, options and explanations; keep exactly one `correct: true` per question.
   - GEO fields (`direct_answer`, `quick_facts`, `faq`, `seo_title`, `keywords`), if present: translate.
   - Do NOT copy `cover_image`, `images`, `source_url` or `external_only`.
4. In the English post add `hreflang_de: "/de/blog/YYYY/MM/<german-slug>/"` after `language:`.
5. Cover: `python3 scripts/generate-blog-covers.py --only <german-slug>` draws the German cover from the English post's scene and sets `cover_image`. If it fails, say so in the PR; do not hand-write `cover_image`.

## Pages (non-blog)

Use the DE slug map. The German page goes under the German section path with `language: "de"` and `hreflang_en`; add `hreflang_de` to the English page. Landing-type pages carry the GEO front matter (`direct_answer`, `quick_facts`, `faq` with at least 4 entries) translated — the build fails otherwise (CLAUDE.md Rule 10). OG cards: `scripts/generate-og-cards.py`. Menu or navigation entries: follow how existing German pages of the same kind are wired (`hugo.yaml` menus, `data/`), and add entries only where the English page has one.

## Updating an existing pair

When you change the meaning of an English page, change the German page in the same PR (and vice versa). CI warns "EN changed, DE not — sync?" when only one side of a pair changed; ignore it only for changes that do not affect the other language (typo, link fix).

## Checks

- `hugo --gc --minify` builds with no ERROR, and both pages exist in the output.
- `./scripts/validate-frontmatter.sh` passes.
- `python3 scripts/check-content-rules.py` passes (it verifies the hreflang pair both ways, the author and the wording).
- Re-read the German text once for naturalness and leftover English sentences.

Commit messages: `feat(de): German translation of "<English title>"`, signed off (`git commit -s`), in English.
