---
title: "Data sovereignty for cloud infrastructure — make jurisdictional control demonstrable"
description: "Data sovereignty is no longer a procurement clause. DORA, NIS2, GDPR, sectoral data-residency rules, and explicit sovereign-cloud mandates from EU member..."
type: "page"
related_pages:
  - /solutions/dora-compliance/
  - /solutions/cloud-repatriation/
  - /solutions/sovereign-ai/
  - /services/platform-readiness-assessment/
  - /products/aenix-platform/enterprise-edition/
  - /products/aenix-platform/public-cloud-edition/
  - /products/cozystack/
language: "en"
---

<!-- BLOCK 1: HERO -->


**Data sovereignty is no longer a procurement clause. DORA, NIS2, GDPR, sectoral data-residency rules, and explicit sovereign-cloud mandates from EU member states and non-EU jurisdictions all converge on the same operational requirement: prove, with evidence, that your data lives where the regulator says it must — at every layer, including backups, observability, and CI/CD artifacts.**

Aenix runs a structured engagement for organizations that need to take a sovereignty position from claim to demonstrable architecture. Output: a control-level map of where your data actually lives today, where the gaps are, and what sovereignty-by-design looks like for your stack.

> **Pairs with:** **[Ænix Platform Enterprise Edition](/products/aenix-platform/enterprise-edition/)** for regulated enterprises consuming sovereign cloud internally; **[Public Cloud Edition](/products/aenix-platform/public-cloud-edition/)** for operators offering sovereign cloud as a product. Customer-controlled keys at every data layer (primary store, replicas, backups, observability). Air-gap option supported.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a 30-minute discovery call</a>
  <a class="cta-secondary" href="/blog/2026/05/data-residency-requirements-2026/">Read the data residency guide →</a>
</div>

<div class="trust-badges">
EU-based engineers · Apache 2.0 platform · Written deliverables · Mutual NDA at kickoff
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO THIS IS FOR -->

## Who has a data sovereignty problem

Data sovereignty pressure shows up in different language depending on the buyer's seat, but the underlying constraint is the same.

- **Banks and insurers** under DORA / sectoral supervision facing concentration-risk and data-residency obligations.
- **Public-sector and quasi-public organizations** subject to procurement-mandated sovereign-cloud requirements (EU member states, Kazakhstan, several APAC jurisdictions).
- **Healthcare and life-sciences operators** with patient-data residency rules under national health-data frameworks.
- **Telecom and critical-infrastructure operators** under NIS2 with sectoral data-handling rules.
- **Multinational enterprises** with data-localization requirements that vary by country (India, China, Russia, Brazil, several EU member states).
- **AI / analytics teams** working on sensitive data classes that cannot be processed by non-EU model providers.

If you can name a specific regulator, sectoral rule, or procurement clause that triggered this for your team — this engagement is built for that situation.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT SOVEREIGNTY ACTUALLY REQUIRES -->

## What "data sovereignty" actually requires of your architecture

<div class="grid-2x2">

**1. Demonstrable data-residency at every layer**
Production storage is the easy part. Backups, observability data, CI/CD artifacts, and managed-service telemetry frequently leave the regulator's perimeter without anyone noticing. Sovereignty applies to *all* layers, not just the production database.

**2. Encryption and key custody under your control**
Encryption alone is not sovereignty. The encryption keys must be held by the financial entity (or the customer) — not the cloud provider — with documented rotation, emergency access, and audit-trail.

**3. Supplier transparency to the second hop**
Hyperscalers run on data centres and connectivity providers; SaaS providers run on hyperscalers; managed services depend on shared infrastructure. Sovereignty requires knowing the chain past the first hop.

**4. Audit and supervisory access**
Audit trails must be exportable in regulator-consumable formats, retained per the regulator's requirement, and tamper-evident. Supervisor access processes must be documented and tested.

</div>

For practical detail with control-level checks, see **[data residency requirements 2026](/blog/2026/05/data-residency-requirements-2026/)**.

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHERE CURRENT SETUPS FAIL -->

## Where most cloud setups fail the sovereignty test

<div class="gap-cards-2">

**Observability and telemetry leak the perimeter**
Production database is in the right region. The SaaS observability stack collecting logs from it processes them through US-based regions because that's where the vendor's infrastructure runs. The compliance officer doesn't know.

**Backups are sovereign — until they're tested**
Backup storage tier is in the right region. The DR test pulls backups across regions to a different DR site that turns out to be in a non-compliant jurisdiction. Sovereignty fails under stress.

**Encryption keys are with the cloud provider**
Default encryption looks compliant on paper. Until the regulator asks who controls the keys — and the answer is the same vendor that holds the data.

**Supplier chain is a black box past hop 1**
The hyperscaler is named in the contract. The hyperscaler's data-centre operator, networking sub-contractors, and shared platform services are not. Article 30(2)(a) of DORA, NIS2 supplier-risk rules, and similar sectoral rules require this transparency.

</div>

These gaps are common across institutions that consider themselves sovereignty-compliant. Surfacing them under structured assessment is cheaper than surfacing them under regulator audit.

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW AENIX HELPS -->

## How Aenix helps

The data-sovereignty engagement runs as part of our **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**, with the sovereignty-and-regulator-gap workstream as primary focus. The 14- or 28-day engagement produces:

- **Data-residency map** — where each data class actually lives today, including production, backup, observability, and CI/CD artifacts. Per-class jurisdiction with evidence.
- **Encryption and key-custody review** — current encryption posture, key-custody arrangements, gap identification per data class.
- **Supplier-chain map to second hop** — every ICT third-party arrangement traced to its underlying providers and shared dependencies.
- **Audit-readiness assessment** — what supervisor access processes are documented, what tested, what missing.
- **Architecture-level remediation plan** — what to fix, in what sequence, with effort estimates and regulatory deadline alignment.

Delivered by Aenix engineers — the team behind Cozystack — across the EU, DACH, and Central Asia. We are not commercially aligned with any hyperscaler, and the report's bias is toward what we can demonstrate and stand behind.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Why Aenix specifically

- **EU-based engineers and operations.** Our team works across the EU, DACH, and Central Asia. We understand the difference between sovereignty as a US marketing term and sovereignty as it is enforced under EU sectoral rules and EU member-state procurement clauses.
- **No hyperscaler bias.** Sovereignty consulting from Big-4 firms is shaped by their hyperscaler partnerships. Our recommendations are not commercially tied to any cloud provider — we recommend the architecture that actually meets the sovereignty requirement, even when that means full on-prem.
- **Open-source platform foundation.** We are the company behind **[Cozystack](/products/cozystack/)** — a CNCF Project running on the financial entity's chosen hardware in the chosen jurisdiction, with the entity holding cluster-level access. Sovereignty is structural, not contractual.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## What the engagement looks like

| When | What | Output |
|---|---|---|
| **Day 0** | 30-min discovery call (free) | Confirm fit, narrow sovereignty scope (which regulators / clauses bind you), identify sponsor |
| **Days 1-13 (or 1-27)** | Four parallel workstreams; sovereignty-and-regulator-gap workstream emphasized | Daily async updates, three checkpoints with sponsor |
| **Day 14 (or 28)** | Executive readout (60-90 min) | Written report: data-residency map, key-custody review, supplier-chain map, audit-readiness, remediation plan |

For the full methodology see **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Sovereignty engagements we've run

{{< placeholder-logos >}}

We have run data-sovereignty assessments and platform-engineering programs for banks, insurers, public-sector organizations, and ICT third-party providers across the EU, DACH, and Central Asia. Outcomes range from full on-prem sovereign-cloud builds to selective repatriation of regulated workloads.

> {{< placeholder-quote >}}
> *— {{NAME_1}}, {{TITLE_1}}*

Named case studies available on the discovery call where customer permissions allow.

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Pricing and engagement scope

The sovereignty-emphasized engagement runs as a Platform Readiness Assessment.

<div class="pricing-cards-2">

### 14-day (focused sovereignty scope)
Sovereignty workstream depth, single regulatory framework, single domain. Data-residency map, key-custody review, supplier-chain (to second hop), remediation plan.
**{{PRICING_14_DAY}}**

### 28-day (full sovereignty + adjacent)
Sovereignty + adjacent regulatory overlap (DORA / NIS2 / sectoral / GDPR mapping). Multi-BU stakeholder interviews. Vendor shortlisting where applicable. Phase 2 implementation roadmap.
**{{PRICING_28_DAY}}**

</div>

Fixed-price. Single invoice. Mutual NDA at kickoff. Phase 2 implementation cost: assessment fee credited subject to scope.

We accept RFI / RFP through standard procurement channels in EU member states and Kazakhstan; the discovery call covers procedural fit.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->

## FAQ

**Is sovereignty just data residency?**
Data residency is a necessary part of sovereignty, but not sufficient. Sovereignty also requires control of encryption keys, supplier-chain transparency, audit-readiness, and operational independence from a single provider's infrastructure decisions. A workload can be in the right region and still fail the sovereignty test.

**Do we need to go fully on-prem to be sovereign?**
Not necessarily. The right answer depends on the data class, the regulator, and the operational realities. Some workloads achieve sovereignty under hyperscaler sovereign-cloud arrangements (with caveats); others require dedicated infrastructure under the customer's control. The engagement determines which is which.

**How does this differ from a Big-4 sovereignty assessment?**
Big-4 sovereignty advisory work is typically delivered by management consultants, handed off to a separate implementation team, and shaped by the consultancy's hyperscaler partnerships. Our engineers do both the assessment and the implementation, and we are not commercially tied to any provider. The report's bias is toward what we can demonstrate and operate under your governance.

**Will Aenix recommend Cozystack at the end?**
Where Cozystack fits the sovereignty requirements better than the alternative, the report explains why with named architectural attributes. Where a hyperscaler sovereign-cloud arrangement or a different stack fits better, we say so.

**Can we run this under a public-sector procurement process?**
Yes. We accept RFI / RFP through standard procurement channels in EU member states and Kazakhstan. Discovery call covers procedural fit.

**More questions?** See the **[data residency requirements article](/blog/2026/05/data-residency-requirements-2026/)** or **[talk to us](#discovery)**.

<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Start with a 30-minute discovery call

Free. No prep needed. We confirm fit, narrow the sovereignty scope to your binding regulators or clauses, and tell you whether the 14-day or the 28-day variant matches your situation.

/contact/

Or read more:
- **[Data residency requirements 2026](/blog/2026/05/data-residency-requirements-2026/)** — practical guide
- **[DORA compliance for cloud infrastructure](/solutions/dora-compliance/)** — regulatory adjacent trigger
- **[Cloud repatriation](/solutions/cloud-repatriation/)** — when sovereignty + cost align
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — engagement methodology
- **[Cozystack](/products/cozystack/)** — sovereign-by-architecture platform

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Aenix is the company behind Cozystack — a CNCF Project, Kubernetes Certified Distribution, OpenSSF Best Practices. We run data-sovereignty engagements and platform-engineering programs for banks, insurers, public-sector organizations, and critical-infrastructure operators across the EU, DACH, and Central Asia.*

<!-- /BLOCK 12 -->

<!--
SEO meta tags:
- title: "Data Sovereignty for Cloud Infrastructure — Demonstrable Jurisdictional Control | Aenix"
- description: "Data sovereignty engagement: data-residency map, key custody, supplier-chain transparency, audit-readiness. EU engineers, no hyperscaler bias."
- og:image: 1200×630 — sovereignty visual (EU flag + cloud architecture)
- canonical: this URL
- hreflang: en (default), de

JSON-LD:
- WebPage / BreadcrumbList: Home → Solutions → Data Sovereignty
- Service schema: name="Data sovereignty engagement", provider=Aenix
- FAQPage from BLOCK 10

Word count: 900-1100. Actual: ~1080.
-->
