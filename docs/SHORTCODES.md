# Shortcodes reference — aenix.io

All Hugo shortcodes available in this site, with usage examples. Used in landings, blog posts, and content pages.

For partials (rendered automatically by layouts, not invoked manually), see [layout templates](../layouts/).

---

## Pipedrive forms (live embeds)

### `{{< pipedrive-form type="..." >}}`

Embeds a live Pipedrive web form. Five types map to five live forms in the Aenix Pipedrive workspace.

**Types:**

| `type` | What it is | Default placement |
|---|---|---|
| `discovery` | Aenix — Discovery Call | `/contact/` |
| `demo` | Aenix — Architecture Review | mentioned in `/contact/` message field |
| `partner` | Aenix — Partner Program | `/partners/#apply` |
| `course` | Aenix — Kubernetes Deep Dive Course | `/kubernetes-deep-dive/#enroll` |
| `lead-magnet` | Aenix — Lead Magnet Download | 6 resource pages |

**Example:**
```markdown
{{< pipedrive-form type="discovery" >}}
```

**Renders:** `<div class="pipedriveWebForms" data-pd-webforms="...">` + native Pipedrive loader script. Form styling (dark theme #111827, button color #01A5FF, Full-name field) is configured inside Pipedrive itself, not in site CSS.

**One form per page maximum.** Multiple Pipedrive forms on the same page = two separate loader scripts = wall of iframes. Use a single primary form + textual reference to other forms.

---

## Pull-out content (blog + landings)

### `{{< factoid number="..." label="..." source="..." >}}`

Big-number callout, brand-orange accent. Used to anchor an article with a single stat.

```markdown
{{< factoid number="92%" label="of EU financial entities had not completed DORA gap analysis as of January 2025" source="Aenix engagement notes, Q1 2026" >}}

{{< factoid number="3.5×" label="multi-tenant GPU utilisation gain after switching to per-tenant scheduling on Cozystack" >}}
```

The `source` attribute is optional; use it for citation when the number comes from external research.

### `{{< quote author="..." role="..." source="..." >}}...{{< /quote >}}`

Styled pull-quote. Different from markdown `>` blockquote (which we keep for inline quoting inside paragraphs).

```markdown
{{< quote author="Andrei Kvapil" role="Founder, Aenix" >}}
Cozystack is what we wish OpenStack had become — a cloud-in-a-box you can actually operate at scale, with Kubernetes-native ops and a fraction of the operational surface.
{{< /quote >}}
```

Body supports markdown formatting via `markdownify`. Optional `source` attribute renders as a link to original source.

### `{{< spoiler title="..." kind="..." >}}...{{< /spoiler >}}`

Collapsible `<details>` block. Used for term definitions, extended context, code-heavy explanations that casual readers can skip.

```markdown
{{< spoiler title="What is a Tenant CRD in Cozystack?" kind="term" >}}
The `Tenant` CRD carves a multi-tenant cloud into isolated buyer-namespaces with their own quotas, RBAC, and storage. Each tenant gets a Kubernetes namespace plus a budgeted slice of the underlying GPU / CPU / storage pool.
{{< /spoiler >}}
```

**Kinds:** `default`, `term`, `code`.

---

## Inline entity highlighting

### `{{% var "..." kind="..." %}}`

**Note: this is the `%-form` shortcode — used inline within a paragraph, not as a block.**

Coloured chip for variable names, system entities, CRDs, environment variables, file paths. Different colours signal what kind of thing it is.

```markdown
The {{% var "Tenant" kind="crd" %}} CRD is reconciled by the {{% var "cozystack-controller" kind="component" %}} component, which reads {{% var "kubevirt.io/v1" kind="api" %}} and watches manifests under {{% var "/etc/cozystack/" kind="path" %}}, switching mode based on {{% var "COZY_ENV" kind="env" %}}.
```

**Kinds:** `default` (teal), `crd` (purple), `api` (blue), `component` (red), `env` (cyan), `path` (green).

For plain inline code (commands, function names without semantic meaning), use markdown backticks `` `kubectl get pods` `` — not `var`.

---

## Design notes (hidden in production)

### `{{< design-note kind="..." >}}...{{< /design-note >}}`

Visible "DESIGN NOTE" callout for instructions to designers / devs. Hidden in production via `params.hide_design_notes: true` in `hugo.yaml`. Re-enabled per-build with `HUGO_PARAMS_SHOW_DESIGN_NOTES=true` for design-handoff previews.

```markdown
{{< design-note kind="illustration" >}}
Replace this section with an isometric architecture diagram showing the three-tier deployment (HQ / regional / edge), with the OT/IT boundary marked in red.
{{< /design-note >}}
```

**Kinds:** `default`, `illustration`, `chart`, `callout`, `warning`. (Different border colour per kind.)

---

## Placeholders (for early-design content where real content is pending)

### `{{< lorem-block size="..." >}}`

Lorem ipsum paragraphs. Used as filler during early design.

**Sizes:** `short`, `medium`, `long`.

```markdown
{{< lorem-block size="medium" >}}
```

### `{{< placeholder-image width="800" height="450" label="..." >}}`

SVG placeholder with dimensions and optional label, dashed orange "PLACEHOLDER" tag.

```markdown
{{< placeholder-image width="1200" height="630" label="Sovereign AI architecture diagram" >}}
```

### `{{< placeholder-quote >}}`

Generic sample customer-quote block. Replaced with real `{{< quote >}}` (with `author=` + `role=`) when permission lands.

### `{{< placeholder-logos count="6" label="..." >}}`

Logo-strip placeholder grid. Replaced with real logos when permission lands.

```markdown
{{< placeholder-logos count="6" label="Customer logos (NDA-protected until mid-2027)" >}}
```

### `{{< placeholder-form type="..." resource="..." >}}`

**Note:** for live Pipedrive forms use `{{< pipedrive-form >}}` instead. `placeholder-form` is a design-preview-only shortcode that renders a mock Pipedrive form for visualising what the live form will look like. Still used on legacy / design-preview pages.

---

## Landing-page-specific shortcodes

### `{{< pairs-with-editions >}}`

Renders the "Pairs with editions" badge / callout / card on landing pages. Reads `pairs_with_editions:` frontmatter array.

**Styles:** `callout` (default), `badge`, `card`.

```markdown
{{< pairs-with-editions style="card" >}}
```

### `{{< cta-row >}}...{{< /cta-row >}}`

Styled CTA-button row. Two-button pattern (primary + secondary).

### `{{< customer-evidence ... >}}`

Renders customer-evidence block from frontmatter. Used on landings where customer-evidence frontmatter is set.

### `{{< seo-blocks >}}` and `{{< seo-faq >}}`

Render visible HTML for `direct_answer`, `quick_facts`, and `faq` frontmatter. Same fields are consumed by JSON-LD partials — single source of truth.

---

## Theme-supplied shortcodes (from `themes/aenix/`)

These exist for backward compatibility with the pre-redesign site. Used on `/about/`, `/oss-contribution/`, and other preserved pages.

- `{{< team >}}` — team grid
- `{{< products-grid >}}` — products grid
- `{{< features >}}` — features list
- `{{< partners >}}` — partner logos
- `{{< community-champions >}}` — community contributor list
- `{{< offices >}}` — office locations grid
- `{{< social-icons linkedin="..." x="..." telegram="..." >}}` — social icons
- `{{< two-cols >}}...{{< /two-cols >}}` — two-column layout
- `{{< spoiler >}}...{{< /spoiler >}}` — pre-existing spoiler (different from new blog spoiler)
- `{{< action-buttons >}}` — action button group
- `{{< cta >}}` — pre-existing CTA shortcode (theme-level)
- `{{< videos >}}` — embedded video grid
- `{{< product-card >}}` — product card

---

## Sources

- New shortcodes: `/layouts/shortcodes/`
- Theme shortcodes: `/themes/aenix/layouts/shortcodes/`
- Partials (auto-rendered, not invoked manually): `/layouts/partials/`
- Styles: `/static/css/aenix-seo-extensions.css` + theme CSS
