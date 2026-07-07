# Design

Visual system of aenix.io, captured from the shipped code (theme `themes/aenix/assets/css/main.css` tokens + `assets/css/aenix-seo-extensions.css` components). Dark-only site.

## Theme

Dark, engineering-calm. Near-black navy surfaces, high-contrast slate text, one bright brand blue for action, violet as the secondary accent, cyan reserved for staging markers. Glass-morphism is limited to cards and the sticky header blur.

## Colors

Tokens live in `main.css :root`; the `--aenix-*` bridge in `aenix-seo-extensions.css` maps component colors onto them.

| Role | Token | Value |
|---|---|---|
| Background | `--bg-main` | `#0B0F1A` |
| Surface (raised) | `--bg-secondary` / `--bg-elevated` | `#111827` / `#151C2C` |
| Card (glass) | `--glass-bg` | `rgba(255,255,255,0.03)` (borders 0.06–0.12) |
| Text primary | `--text-primary` | `#F1F5F9` |
| Text secondary | `--text-secondary` | `#94A3B8` (7.4:1 on bg) |
| Text muted | `--text-muted` | `#8493A8` |
| Brand primary (links, accents) | `--brand-primary` | `#01A5FF` |
| Brand fill (solid buttons, white text) | `--brand-secondary` / `--aenix-fill` | `#0971EB` |
| Brand accent (gradient end) | `--brand-accent` | `#661BE1` |
| UI accent (tags, pills, hovers) | `--aenix-accent` | `#A78BFA` (hover `#C4B5FD`) |
| Staging markers only | `--brand-cyan` | `#94DEE0` |
| Status ok / error (dark-adjusted) | — | `#6EE7B7` / `#FCA5A5` on 0.14-alpha tints |

Rules: no orange anywhere (removed 2026-07; it was placeholder-palette residue). Solid fills that carry white text use `#0971EB`, never `#01A5FF`. Accent buttons on light-violet use dark ink `#0B0F1A`.

## Typography

- Body: Inter (`--font-body`), mono: JetBrains Mono (`--font-mono`) for small technical labels (team roles, meta).
- Existing brand identity — do not swap families; work within weights.
- Hero H1: `clamp(2rem, 4vw, 2.75rem)`, 700. Section H2 on homepage: 1.875rem. Body 1rem/1.65.
- Prose measure capped at 68ch (`.page-content > p` et al.); homepage grids break out of the 800px prose column to a 1140px track.
- Small uppercase tracked labels (`.card-tag`, `.dropdown-group-heading`, quick-facts heading) at 0.6875–0.8125rem / 700 / 0.08–0.1em tracking.

## Components

- **Cards**: glass surface, 1px white-alpha border, `border-radius: 10-16px`, hover = border brightens + `translateY(-2/-3px)` + dark shadow. Families: `.card--replace`, `.card--edition`, `.blog-card`, `.related-pages__card`.
- **Buttons**: `.cta-primary` solid `#0971EB` white text with glow shadow; `.cta-secondary` transparent with white-alpha border, blue on hover. Border-radius `--radius-sm` (8px). Label convention: short ("Book a call").
- **GEO blocks**: `.seo-direct-answer` lead panel (blue-violet gradient tint, left accent border), `.seo-quick-facts` label/value rows with hairline dividers, `.faq-item` disclosure cards with rotating `+`.
- **Header**: sticky, `backdrop-filter: blur(20px)`, 6 top-level items + Contact pill + GitHub. Solutions renders `.dropdown-menu--mega` (780px, 3 columns, Industries group spans 2 with a 2-column list; 620px/2-col under 1181px).
- **Engagement steps**: numbered circles on `--aenix-fill`, tinted panels.
- **Quiz, share bar, consent banner**: all on the same token bridge.

## Layout & Spacing

- Container `--container-max: 1200px`; prose column 800px; homepage breakout `min(1140px, 100vw - 3rem)`.
- Section padding `--section-pad: 6rem` (4rem mobile). Homepage h2 rhythm: 4.5rem top margin, quiet 1px hr separators.
- Spacing tokens `--gap-sm/md/lg/xl`: 0.75 / 1.5 / 2.5 / 4rem.
- Radius scale 8 / 12 / 16 / 24px (`--radius-sm/md/lg/xl`).

## Motion

- Durations 0.15–0.4s, `--ease: cubic-bezier(0.25, 0.1, 0.25, 1)`.
- Hover lifts via transform/opacity only; dropdown panels fade + 4px translateY; FAQ `+` rotates 45°.
- Hero has a particle orb canvas (`orb.js`) and 3D cloud scene partials — heavier motion is confined to the hero.
- Gap: no global `prefers-reduced-motion` handling yet (see audits).

## Assets

- Logo: `/images/logo-full-white.svg` (white wordmark). Brand gradient `--gradient-brand` blue→violet used for the footer top border.
- OG cards generated via `scripts/generate-og-cards.py` into `static/img/og/`.
