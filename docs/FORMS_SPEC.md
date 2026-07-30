# Forms specification — aenix.io

The complete set of web forms the site needs, their fields, funnel stage, placement,
and how they are embedded and delivered. Hand this to whoever configures Pipedrive; the
form field editing happens in the Pipedrive UI, the embed happens via the
`{{< pipedrive-form type="..." >}}` shortcode in this repo.

All five forms already have live Pipedrive embed URLs wired into
`layouts/shortcodes/pipedrive-form.html`. What remains is (a) confirming the field sets
below in Pipedrive, (b) setting the lead-magnet redirect targets (§6), and (c) deciding
per-magnet attribution (§7).

---

## 0. Global rules (every form)

- **Required base fields:** First name, Last name, Work email, Company name.
- **GDPR consent checkbox** (required): "I agree to be contacted about Aenix services." DE forms use a German consent string.
- **Styling** is configured inside Pipedrive (dark theme `#111827`, button `#01A5FF`). Not in site CSS.
- **One form per page maximum** (two Pipedrive loader scripts on one page = broken). Use a single primary form + textual links to others.
- **Embed:** `{{< pipedrive-form type="discovery|demo|partner|course|lead-magnet" >}}`.

---

## 1. Discovery Call — `type="discovery"`  (funnel: BOFU, primary conversion)

**Placement:** `/contact/` (and `/de/kontakt/`). All landing CTAs point here.

| Field | Type | Required |
|---|---|---|
| First name / Last name / Work email / Company name | text | yes |
| Job title | text | yes |
| Company size | select: 1-50 / 50-500 / 500-5000 / 5000+ | yes |
| I'm interested in | multi-select: Public Cloud / ISP / Enterprise / IDP / AI/ML / Pure Cozystack / Not sure | yes |
| Brief context (1-3 sentences) | textarea | no |
| GDPR consent | checkbox | yes |

## 2. Architecture Review / Demo — `type="demo"`  (funnel: MOFU→BOFU)

**Placement:** referenced from `/contact/` and migration/alternative pages. **Currently defined but embedded nowhere** — decide whether to surface it (recommended on `/migration/*` and `/alternatives/*` as a "book an architecture review" step) or retire it.

| Field | Type | Required |
|---|---|---|
| base fields + Job title | text | yes |
| Current platform | select: VMware / OpenStack / Proxmox / OpenShift / Nutanix / Other | yes |
| Estate size | select: <50 / 50-200 / 200-1000 / 1000+ hosts | yes |
| Migration timeline | select: Already evaluating / 0-6mo / 6-12mo / 12+mo / Just exploring | yes |
| GDPR consent | checkbox | yes |

## 3. Partner Program — `type="partner"`  (funnel: partner acquisition)

**Placement:** `/partners/#apply` (and `/de/partner/`).

| Field | Type | Required |
|---|---|---|
| base fields | text | yes |
| Company website | text | yes |
| Country / region | select | yes |
| Partner type | select: Reseller / Integrator / Distributor / Hosting / MSP / Sovereign | yes |
| Customer base / vertical focus | textarea | yes |
| Estimated annual deal capacity | select | yes |
| GDPR consent | checkbox | yes |

## 4. Course Enrollment — `type="course"`  (funnel: product/education)

**Placement:** `/kubernetes-deep-dive/#enroll` (and DE).

| Field | Type | Required |
|---|---|---|
| base fields | text | yes |
| Cohort preference | select | yes |
| Number of seats | select: 1 / 2-5 / 6-10 / 10+ | yes |
| Payment method | select: Invoice / Credit card / PO | yes |
| GDPR consent | checkbox | yes |

## 5. Lead Magnet Download — `type="lead-magnet"`  (funnel: TOFU/MOFU capture)

**Placement:** the six resource landings under `/resources/*` (and `/de/ressourcen/*`).

| Field | Type | Required |
|---|---|---|
| base fields | text | yes |
| Job title | text | recommended |
| Hidden: `asset` | hidden | yes (see §7) |
| GDPR consent | checkbox | yes |

---

## 6. Lead-magnet delivery — redirect after submit (decided: redirect-to-URL)

Delivery is by **Redirect to URL** in the Pipedrive form's after-submit action, sending the
visitor to a thank-you page that hosts the download button. Set these redirect targets:

| Magnet | Redirect to (EN) | Redirect to (DE) |
|---|---|---|
| DORA checklist | `/resources/dora-compliance-checklist/thank-you/` | `/de/ressourcen/dora-compliance-checkliste/thank-you/` |
| NIS2 checklist | `/resources/nis2-compliance-checklist/thank-you/` | `/de/ressourcen/nis2-compliance-checkliste/thank-you/` |
| VMware migration checklist | `/resources/vmware-migration-checklist/thank-you/` | `/de/ressourcen/vmware-migrations-checkliste/thank-you/` |
| Cloud repatriation TCO worksheet | `/resources/cloud-repatriation-tco-worksheet/thank-you/` | `/de/ressourcen/cloud-repatriation-tco-worksheet/thank-you/` |
| Platform maturity assessment | `/resources/platform-engineering-maturity-assessment/thank-you/` | `/de/ressourcen/platform-engineering-maturity-assessment/thank-you/` |
| Sovereign AI decision guide | `/resources/sovereign-ai-decision-guide/thank-you/` | `/de/ressourcen/sovereign-ai-architektur-leitfaden/thank-you/` |

The thank-you pages already exist (noindex) and link the PDF (and CSV for the worksheet)
under `/downloads/`. Note: static hosting cannot truly gate the files — the form is the
friction; if hard-gating is required, add an email-only delivery or a serverless function.

## 7. Per-magnet lead attribution (decision needed)

All six magnets currently share ONE `lead-magnet` form, so Pipedrive can't tell which asset
a lead requested. Options:
- **A (simplest):** keep one form; add a **hidden `asset` field** and set its value per embed (needs one form field + a small shortcode change to pass `resource=`).
- **B:** create one Pipedrive form per magnet (six forms) and give each landing its own embed code.
- Either way, the per-landing **redirect URL already identifies the asset**, so basic attribution exists via the thank-you page hit in analytics.

## 8. Forms NOT currently needed (documented for completeness)

- **Newsletter / blog subscribe** — the blog has no capture form. If TOFU nurture is wanted, add a lightweight "get new posts" email capture (single email field + consent) in the blog footer. Optional.
- **Event / webinar registration** — handle via the `demo`/`course` forms or a dedicated form if events scale.

---

*Maintained alongside the site. Field edits happen in Pipedrive; embeds via `{{< pipedrive-form >}}`.*
