---
name: new-content
description: Create a new aenix.io blog post or page end to end - pick the author by the rule, write the English and German files with correct slugs, hreflang pair and front matter, generate covers/OG cards, run the build and all content checks, and open one PR with both languages. Use whenever someone asks for a new blog post, article, news item, release announcement or landing page on aenix.io.
---

# New blog post or page (EN + DE)

The rules are in the repo; this skill is the order of work. Read before writing:
`CLAUDE.md` (especially "Content rules (enforced by CI)" and Rule 10), `docs/CANONICAL_FACTS.md`, `docs/GERMAN_TRANSLATION.md`, and for posts `docs/BLOG_AUTHORING.md`, for landings `docs/PAGE_CREATION_PLAYBOOK.md`.

## 1. Decide

- **Kind and location.** Blog post: `content/blog/YYYY/MM/<slug>/index.md` (`type:` per CLAUDE.md "Content type taxonomy"; quizzes only on `article`/`tutorial`). Page: `content/<section>/<slug>/_index.md`; `page_type` comes from the `hugo.yaml` cascade.
- **Author** (posts): Timur Tukaev for paleocomputing, "the inevitable future of Kubernetes", news, business, SEO materials and release announcements; Andrei Kvapil for deep technical articles. Never "Aenix Team". Ask if it is genuinely unclear.
- **German path.** Section via the DE slug map in `docs/CONTENT_OPERATIONS.md`; German slug from the German title's keywords (`docs/GERMAN_TRANSLATION.md`). Only event pages, certification and the other kinds in `data/locale-parity-exceptions.yaml` may stay English-only — never add a new page there to skip German.
- **Facts.** Every claim, number, price and timeline must match `docs/CANONICAL_FACTS.md` and `data/pricing.yaml`; link `/pricing/` instead of restating prices.

## 2. Write both files on a feature branch

Branch from fresh `origin/main` (`git fetch origin && git switch -c <type>/<slug> origin/main`).

- English front matter: `title`, `description` (70–160 chars), `date`, `author`, `type`, `topics`, `language: "en"`, `hreflang_de: "<German URL>"`, and for companion posts `companion_landing` / `companion_label` (shifted `parent_topic`, CLAUDE.md Rule 9).
- German front matter: as in `docs/GERMAN_TRANSLATION.md` — same `date`, `author`, `type`, `topics`; `slug`, `language: "de"`, `hreflang_en: "<English URL>"`; `companion_landing` = the landing's German counterpart.
- Landing types (`solution-landing`, `services-landing`, `industry-landing`, `compare`, `alternative`, `migration-hub`, `lead-magnet`, `product`) in both languages: `direct_answer`, `quick_facts`, `faq` (at least 4), `primary_keyword`, `secondary_keywords`, `images: ["img/og/<slug>.png"]`. The build fails without the first three.
- Quiz, if any: exactly one `correct: true` per question, in both languages.
- Major landing or top-30 post: add it to `static/llms.txt` (CLAUDE.md Rule 3); new landing: menu entries in `hugo.yaml` for EN and DE where the existing siblings have them.

URLs: English posts are `/blog/YYYY/MM/<dir-name>/`; German posts `/de/blog/YYYY/MM/<slug>/`; pages follow their path (or `slug:` / `url:`).

## 3. Images

- Blog covers: `python3 scripts/generate-blog-covers.py --only <english-slug> --only <german-slug>` (German reuses the English scene and sets `cover_image`).
- OG cards for landings: `python3 scripts/generate-og-cards.py --cards` after adding the card to `CARDS` in the script; per-page fallbacks: `--pages`.
- Do not hand-write `cover_image` if the generator fails; report it.

## 4. Check

```bash
hugo --gc --minify -d /tmp/aenix-check     # no ERROR; both pages in the output
./scripts/validate-frontmatter.sh          # passes
python3 scripts/check-content-rules.py     # 0 errors; read the warnings for your files
```

Fix every error. For warnings on your own files (title/description length, EN/DE drift) fix them unless there is a reason not to.

## 5. Commit and open the PR

- Commits per logical step (English post, German post, images), `git commit -s`, English messages such as `feat(blog): <title>` / `feat(de): German translation of "<title>"`, ending with the trailer `Assisted-by: LLM` before `Signed-off-by`.
- Push the branch and open one PR containing both languages; body sections `## What` / `## Why` / `## Testing` (list the three checks). No AI attribution in the PR. Show the PR text to the user before creating it; do not merge.
