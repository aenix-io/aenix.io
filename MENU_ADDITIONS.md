# MENU_ADDITIONS.md

Config changes that belong in `hugo.yaml` (and one in `netlify.toml`) for the
pages ported from production in the "port missing live pages" pass.

**I did not edit `hugo.yaml` or `netlify.toml` — merge these by hand.**

Everything below is additive. Nothing here removes an existing entry except
where explicitly marked CHANGE.

---

## 1. `menus.main` — new entries

The redesign menu currently has no entry for Webinars, Workshops,
Certification, or the IDP demo. All four sections now exist and build.

Insert into `menus.main`. `Resources` already exists with
`identifier: resources` (weight 60) — the three children slot under it.

```yaml
    # ── Resources (existing parent, identifier: resources) — new children ──
    - name: Webinars
      url: /webinars/
      parent: resources
      weight: 7
    - name: Workshops
      url: /workshops/
      parent: resources
      weight: 8
    - name: Cozystack Certification
      url: /certification/
      parent: resources
      weight: 9
```

The IDP demo is the second live demo and has no entry at all. It belongs
next to the existing Live Demo CTA (weight 85):

```yaml
    - name: IDP Demo
      url: /idp/
      weight: 86
      identifier: idp-demo
      params:
        cta: true
```

## 2. `menus.main` — CHANGE to the existing Live Demo entry

Currently (line ~427):

```yaml
    - name: Live Demo
      url: /demo/
      weight: 85
      identifier: live-demo
      params:
        cta: true
        external: true      # <-- remove this line
```

`external: true` makes `layouts/partials/header.html` render
`target="_blank"` plus an outbound-arrow icon. `/demo/` is an internal Hugo
page (it wraps the demo SPA in an iframe), so the arrow is misleading. Drop
`external: true`, keep `cta: true`.

Same change applies to the DE entry `identifier: live-demo-de` (line ~757).

Note: until this pass, `/demo/` in the branch menu pointed at a page that did
not exist — both the EN and DE menus were shipping a 404. That is now fixed by
the ported content.

## 3. `menus.main_de` — new entry for the IDP demo

The DE menu already carries `Live Demo → /demo/`. Add its sibling:

```yaml
    - name: IDP-Demo
      url: /idp/
      weight: 86
      identifier: idp-demo-de
      params:
        cta: true
```

Both demo apps are UI-in-English mock apps; there is no DE build of either, so
the DE menu points at the same URLs production uses.

## 4. `menus.footer` — new entries

```yaml
    - name: Live Demo
      url: /demo/
      weight: 10
    - name: IDP Demo
      url: /idp/
      weight: 11
    - name: Webinars
      url: /webinars/
      weight: 12
    - name: Certification
      url: /certification/
      weight: 13
```

## 5. `cascade` — page_type for the webinars section

The cascade block already assigns `page_type: event-landing` to
`/{,ru/}workshops/**` but not to `/webinars/**`, so webinar landings fall back
to the flag-page default. Add:

```yaml
  - _target: { path: '/{,de/}webinars/**' }
    page_type: event-landing
```

(Ported certification and `/workshop/labs/` pages carry an explicit
`page_type: "flag-page"` in frontmatter, so they need no cascade entry.)

## 6. `netlify.toml` — CHANGE: stale `/demo/*` redirect block

`netlify.toml` in this branch carries a block from the *older* demo scheme,
where the demo SPA was served directly under `/demo/`:

```toml
[[redirects]]
  from = "/demo/kc"
  to = "/demo/_kc/account.json"
  status = 200
# ... three more /demo/kc* rules ...
[[redirects]]
  from = "/demo/*"
  to = "/demo/index.html"
  status = 200
```

Production now serves the SPA from `/demo-app/` and `/demo/` is a Hugo page
that iframes it. The `/demo/_kc/*.json` fixtures those four rules point at do
not exist in this branch — the demo carries its own mocks. Delete the whole
block (all five `[[redirects]]` between the `[context.branch-deploy]` stanza
and the site-wide 404 rule), matching `netlify.toml` on `main`.

This only affects Netlify deploy previews. Production is GitHub Pages — see
item 7.

## 7. Legacy URLs are NOT redirected in production — needs an owner

**This is the one item worth escalating.** Production deploys from
`.github/workflows/hugo.yaml` to **GitHub Pages**, not Netlify (`main`'s
`netlify.toml` says so in its header comment: "Netlify builds deploy previews
only"). GitHub Pages does not read `static/_redirects` or `netlify.toml`.

So every rule in `static/_redirects` — the whole legacy-URL map the redesign
relies on — is dead in production. 17 live URLs currently 404 on this branch:

| Live URL | `static/_redirects` says | Works in prod? |
|---|---|---|
| `/about-us/` | → `/about/` 301 | no |
| `/our-partners/` | → `/partners/` 301 | no |
| `/contact-us/` | → `/contact/` 301 | no |
| `/kubernetes-deep-dive-course/` | → `/kubernetes-deep-dive/` 301 | no |
| `/managed-kubernetes/` | → `/products/aenix-platform/isp-edition/` 301 | no |
| `/cloud/` | → `https://cloud.aenix.io/` 302 | no |
| `/kubefarm/` | → a case study that no longer exists | no, and target is gone |
| `/aenix-platform/` | *(no rule)* | no |
| `/cozystack/` | *(no rule)* | no |
| 6 × `/case-studies/<legacy-slug>/` | 2 have 410 rules, 4 have none | no |

The fix that works on GitHub Pages is Hugo `aliases:` — Hugo emits a real
meta-refresh page per alias (the branch already ships 19 of them). Suggested
frontmatter additions, all one line each:

```yaml
# content/about/_index.md
aliases: ["/about-us/"]

# content/partners/_index.md
aliases: ["/our-partners/"]

# content/contact/_index.md
aliases: ["/contact-us/"]

# content/kubernetes-deep-dive/_index.md
aliases: ["/kubernetes-deep-dive-course/"]

# content/products/_index.md            (owned by the products workstream)
aliases: ["/aenix-platform/", "/managed-kubernetes/"]

# content/case-studies/_index.md
aliases: [
  "/case-studies/design-a-full-feature-csi-driver-for-shared-san-in-kubernetes/",
  "/case-studies/highly-efficient-backup-system-for-virtual-machines-and-databases/",
  "/case-studies/kubernetes-in-kubernetes-and-pxe-bootable-server-farm/",
  "/case-studies/lightweight-vdi-infrastructure/",
  "/case-studies/public-cloud-and-vps-hosting-platform/",
  "/case-studies/research-and-integrate-a-virtualization-platform-for-kubernetes/",
]
```

I did not apply these: `content/products/` is off-limits this pass, and the
rest sit outside the sections I was given. `/kubefarm/` and `/cloud/` point at
an external app and a deleted case study respectively and need a decision, not
a default.

## 8. Where the two demo links belong (page placements)

Menu entries are covered above. In-page placements, all in sections owned by
other people — listing, not editing:

- **Homepage** (`content/_index.md`) — a "See it running" band with both demos
  side by side: `/demo/` for the customer-facing cloud console (marketplace,
  VMs, billing) and `/idp/` for the internal developer platform (catalog,
  topology, template builder). This is the highest-value placement; today
  neither demo is linked from the homepage.
- `/products/public-cloud-platform/` and `/products/private-cloud-platform/` —
  `/demo/` as the secondary hero CTA next to "Talk to us". The demo *is* that
  product's console.
- `/products/ai-platform/` — `/demo/`, same slot.
- `/solutions/developer-self-service/` and
  `/services/internal-developer-platform/` — `/idp/` as the secondary hero CTA.
  These two pages describe exactly what the IDP demo shows.
- `/pricing/` — one line under the plan table: "Try the console before you
  talk to us" → `/demo/`.
- `/webinars/` and the three webinar landings — `/demo/` in the "what you'll
  see" area, since the webinars demo the same console live.

## 9. Not wired up, needs the theme/forms owner (regression, not a port)

`themes/aenix/layouts/_default/baseof.html` on `main` calls
`{{ partial "utm-capture.html" . }}`. This branch has neither the call nor the
partial, and nothing in the branch references `window.aenixUTM`.

That partial is what stores `utm_*` + `gclid` in first-party cookies and
replays them into the Pipedrive loader (`restoreForForm()`), so a lead that
arrives on a campaign link and converts two pages later still gets attributed.
Restoring it means porting the partial, adding the baseof call, **and** having
`layouts/shortcodes/pipedrive-form.html` call `restoreForForm()` before the
loader — three files across the theme and the forms shortcode, all outside this
pass. Flagging rather than half-wiring it.

This matters right now because the short links restored under `/l/` (item
below) are live campaign links carrying exactly those UTM parameters.
