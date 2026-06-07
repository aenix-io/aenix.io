---
title: "DORA compliance for cloud infrastructure — make your cloud architecture supervisor-ready"
description: "DORA has been in force since 17 January 2025. If your cloud architecture has not been independently checked against ICT third-party risk, concentration..."
type: "page"
related_pages:
  - /solutions/data-sovereignty/
  - /solutions/sovereign-ai/
  - /services/platform-readiness-assessment/
  - /industries/financial-services/
  - /products/aenix-platform/enterprise-edition/
  - /products/cozystack/
language: "en"
direct_answer: |
  **DORA compliance for cloud infrastructure means proving that your cloud architecture satisfies the EU Digital Operational Resilience Act, in force since 17 January 2025, across ICT third-party risk (Articles 28-30), concentration risk, tested exit-readiness (Article 28(8)), and operational-resilience testing (Title IV). It applies to banks, insurers, investment and payment firms, crypto-asset service providers, and the ICT third parties serving them. Aenix, the company behind the CNCF project Cozystack, runs a DORA-aligned platform readiness engagement that produces a control-level map of what an entity can demonstrate today, a concentration-risk picture mapped to the second supplier hop, exit-feasibility analysis, and an architecture-level remediation plan, delivered by engineers with no hyperscaler commercial bias.**
quick_facts:
  - label: "What it is"
    value: "A DORA-aligned platform readiness engagement that checks cloud architecture against ICT third-party risk, concentration risk, exit-readiness, and operational-resilience testing."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Regulation"
    value: "EU Digital Operational Resilience Act (DORA), in force since 17 January 2025; key articles 28-30 and Title IV"
  - label: "Who it is for"
    value: "Banks, insurers, investment and payment firms, crypto-asset service providers, and ICT third-party providers serving in-scope financial entities in the EU and DACH"
  - label: "Engagement timeline"
    value: "14-day (focused DORA scope) or 28-day (DORA plus adjacent NIS2 / GDPR mapping); fixed-price, mutual NDA at kickoff"
  - label: "Delivered by"
    value: "Aenix engineers, the team behind Cozystack, not management consultants; no commercial tie to AWS, Azure, or GCP"
faq:
  - q: "Is Aenix a DORA-certified provider?"
    a: "There is no DORA certification stamp by design. DORA defines obligations a financial entity must satisfy; how it demonstrates satisfaction is open. Aenix is an EU-based ICT services provider running DORA-aligned engagements, and one deliverable is a documentation pack that supports your supervisory dialog."
  - q: "What does DORA require of cloud architecture?"
    a: "Four substantive areas: ICT third-party risk transparency including sub-contractors (Articles 28-30), a documented and increasingly tested exit plan for critical-function arrangements (Article 28(8)), operational-resilience testing run against live architecture (Title IV), and data residency, supervisory access, and customer-controlled encryption keys at every layer."
  - q: "How does this differ from a Big-4 DORA assessment?"
    a: "Big-4 assessments are typically delivered by consultants, handed to a separate implementation team, and shaped by hyperscaler partnerships. Aenix engineers do the assessment and the implementation, with no commercial tie to any hyperscaler, so effort estimates are calibrated against work actually shipped."
  - q: "What does the engagement deliver?"
    a: "A DORA control-level map of what you can demonstrate today, a concentration-risk picture mapped to the second supplier hop, exit-feasibility analysis with time-to-exit estimates, resilience-testing readiness, and an architecture-level remediation plan with effort estimates. Delivered as a fixed-price 14-day or 28-day engagement."
  - q: "Will Aenix recommend Cozystack at the end?"
    a: "The report names the recommended architecture with reasoning. Where a Cozystack-based architecture fits DORA's substantive requirements better than the alternative, the report explains why with named controls. Where it does not, Aenix says so. Cozystack is Apache 2.0 with no per-core licensing."
  - q: "How does this relate to NIS2 and GDPR work?"
    a: "The 28-day variant maps the same controls back to NIS2 where applicable to your sectoral scope and to GDPR. The architecture surface that satisfies DORA's substantive requirements largely also satisfies NIS2's, so the report does that mapping rather than asking you to repeat the work."
---

<!-- BLOCK 1: HERO -->


**DORA has been in force since 17 January 2025. If your cloud architecture has not been independently checked against ICT third-party risk, concentration risk, exit-readiness, and operational-resilience testing, the next supervisory cycle will surface gaps you'd rather find first.**

Aenix runs a DORA-aligned platform readiness engagement for financial entities and the ICT third parties serving them. Output: a control-level map of what you can demonstrate today, where the gaps are, and what an architecture-level remediation plan looks like.

> **Pairs with:** **[Ænix Platform Enterprise Edition](/products/aenix-platform/enterprise-edition/)** — DORA-aligned by design (customer-controlled keys at every layer, audit-ready logging via VictoriaLogs, multi-tenant Tenant CRD aligned with ICT risk classification, tested exit-readiness mechanics, supplier transparency to second hop). Free [DORA Compliance Checklist →](/resources/dora-compliance-checklist/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a 30-minute discovery call</a>
  <a class="cta-secondary" href="/blog/2026/05/dora-compliance-checklist-cloud-architecture/">Read the DORA checklist →</a>
</div>

<div class="trust-badges">
EU-based engineers · Mutual NDA at kickoff · Written deliverables · No hyperscaler bias
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO THIS IS FOR -->

## Who this is for

DORA applies, directly or indirectly, to almost every organization in the EU's financial supply chain. We work most often with:

- **Banks and credit institutions** facing supervisor-level scrutiny on Article 28 ICT third-party arrangements.
- **Insurers and reinsurers** with multi-jurisdiction data flows and cross-border DR.
- **Investment firms, payment institutions, and crypto-asset service providers** scoped under DORA Title V.
- **ICT third-party service providers** that supply critical functions to in-scope entities — including hosting providers, SaaS vendors, and managed-service operators.

If your cloud setup supports a *critical or important function* under DORA, the requirements below apply substantively, not just procedurally.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: FOUR THINGS DORA REQUIRES OF YOUR CLOUD -->

## What DORA requires of your cloud architecture

<div class="grid-2x2">

**1. ICT third-party risk transparency (Articles 28-30)**
Every ICT supplier in your stack — hyperscaler, SaaS, managed service — has Article 28 obligations attached. The financial entity must map the supply chain, including sub-contractors, with documented concentration-risk position.

**2. Exit-readiness for critical-function arrangements (Article 28(8))**
A documented exit plan — and increasingly, a tested one — for every critical-function ICT arrangement. Tabletop plans are no longer sufficient.

**3. Operational resilience testing (Title IV)**
Annual scenario-based testing for all in-scope entities. Threat-led penetration testing every three years for significant entities. Both run against live architecture, not against documentation.

**4. Sovereignty and supervisory access**
Data residency enforced at every layer — production, backup, observability, CI/CD artifacts. Audit trails exportable in regulator-consumable formats. Encryption keys under the financial entity's control.

</div>

For a control-level checklist with operational language for each of these, see **[the DORA compliance checklist](/blog/2026/05/dora-compliance-checklist-cloud-architecture/)**.

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHERE CURRENT SETUPS FALL SHORT -->

## Where most cloud setups fall short

<div class="gap-cards-2">

**Observability data quietly leaves the regulator's perimeter**
The production database may be compliant. The SaaS observability stack collecting application logs probably is not. DORA Article 28 applies to the entire ICT third-party arrangement.

**The exit plan exists on paper but has never been tested**
Article 28(8) requires an exit plan. Many entities have one. Without a rehearsal in the past 24 months, the time-to-exit is fictional.

**Concentration risk is treated as a procurement question, not an architecture question**
Contractual diversity language without architectural diversity does not satisfy substantive Article 28 requirements.

**Sub-contractor risk is invisible past the first hop**
Article 30(2)(a) requires the financial entity to know the chain. Most do not, beyond the first hop.

</div>

These gaps are common across institutions that consider themselves cloud-mature. Surfacing them early is cheaper than surfacing them under supervisory pressure.

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW WE HELP (linking to entry offer) -->

## How Aenix helps

Our DORA engagement is built into the **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**, with the sovereignty-and-regulator-gap workstream emphasized for DORA-specific scope. The 14- or 28-day engagement produces:

- **DORA control-level map** — a control-by-control table showing what you can demonstrate today, what is partially met, and where the architectural gaps are.
- **Concentration-risk picture** — supplier-chain mapping (to the second hop), with quantified concentration position per critical function.
- **Exit-feasibility analysis** — calibrated time-to-exit estimates, exit-drill scoping, and sequencing aligned with commitment expirations.
- **Resilience-testing readiness** — whether your architecture supports the scenario-based testing supervisors expect.
- **Architecture-level remediation plan** — what to fix, in what sequence, with effort estimates.

Delivered by Aenix engineers — the team behind Cozystack — not management consultants. We don't sell you a hyperscaler partnership, and the report is honest about which architectural choices are worth the work.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Why Aenix specifically

Most DORA advisory work comes from Big-4 consultancies that hand off to a hyperscaler partner whose incentives shape the recommendation. The architectural answer tends to be the architecture the partner sells.

We are different in three concrete ways:

- **No hyperscaler bias.** Our recommendations are not commercially tied to AWS, Azure, GCP, or any single provider. When the answer is hyperscaler-with-better-controls, we say so. When the answer is on-prem or hybrid, we say that.
- **Engineers not consultants.** The same Aenix engineers who run the readiness engagement build the production platforms afterwards. The implementation effort estimates in the report are calibrated against work we have actually shipped.
- **Open-source platform foundation.** We are the company behind **[Cozystack](/products/cozystack/)** — a CNCF Project, Kubernetes Certified Distribution, OpenSSF Best Practices badge. Where a Cozystack-based architecture serves DORA's substantive requirements better than the alternative, the report explains why with named controls.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## What the engagement looks like

| When | What | Output |
|---|---|---|
| **Day 0** | 30-min discovery call (free) | Confirm fit, narrow DORA scope (which articles bind you), identify sponsor |
| **Days 1-13 (or 1-27)** | Four parallel workstreams; sovereignty-and-regulator-gap workstream emphasized | Daily async updates, three checkpoints with sponsor |
| **Day 14 (or 28)** | Executive readout (60-90 min) | Written report: DORA control map, concentration analysis, exit-feasibility, resilience-testing readiness, remediation plan |

For the full engagement methodology, see **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Who's done this with us

{{< placeholder-logos >}}

We have run DORA-aligned readiness engagements for banks, insurers, telecom operators, and ICT third-party service providers across the EU and DACH. Mutual NDA at kickoff; named case studies available on the discovery call where customer permissions allow.

> {{< placeholder-quote >}}
> *— {{NAME_1}}, {{TITLE_1}}*

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Pricing and engagement scope

The DORA-emphasized engagement runs as a Platform Readiness Assessment with the sovereignty-and-regulator-gap workstream as the primary focus.

<div class="pricing-cards-2">

### 14-day (focused DORA scope)
DORA-emphasized workstream depth, single business unit / domain. Full control map, concentration analysis, exit-feasibility, remediation plan.
**{{PRICING_14_DAY}}**

### 28-day (full DORA + adjacent)
DORA + adjacent NIS2 / GDPR / sectoral overlap mapping. Multi-BU stakeholder interviews. Vendor shortlisting where applicable. Phase 2 implementation roadmap.
**{{PRICING_28_DAY}}**

</div>

Fixed-price. Single invoice. Mutual NDA at kickoff. If a Phase 2 implementation engagement follows, the assessment cost is credited against it (subject to scope).

We accept RFI / RFP through standard procurement channels in EU member states and Kazakhstan; the discovery call covers procedural fit.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->

## FAQ

**Is Aenix a "DORA-certified" provider?**
There is no DORA certification stamp, by design. DORA defines obligations that must be satisfied; how a financial entity demonstrates that satisfaction is open. We are an EU-based ICT services provider running DORA-aligned engagements — and one of our deliverables is a documentation pack that supports your supervisory dialog.

**How does this differ from a Big-4 DORA assessment?**
Big-4 DORA assessments are typically delivered by management consultants, handed off to a separate implementation team, and shaped by the consultancy's hyperscaler partnerships. Our engineers do the assessment, the implementation, and we are not commercially tied to any hyperscaler. The report's bias is toward what we can stand behind technically and operate under your governance.

**Will Aenix recommend Cozystack at the end?**
The report names the architecture we recommend with reasoning. Where Cozystack fits DORA's substantive requirements better than the alternative, we explain with named controls. Where it doesn't, we say so.

**Can we run this under a public-sector procurement process (e.g., goszakup.gov.kz, EU member-state portals)?**
Yes. We accept RFI / RFP through standard procurement channels and have responded to procurement processes in EU member states and Kazakhstan. The discovery call covers procedural fit.

**What is the relationship between this engagement and NIS2 / GDPR work?**
The 28-day variant maps the same controls back to NIS2 (where applicable to your sectoral scope) and GDPR. The architecture surface that satisfies DORA's substantive requirements largely also satisfies NIS2's; we do that mapping in the report rather than asking you to do it twice.

**More questions?** See the **[DORA compliance checklist article](/blog/2026/05/dora-compliance-checklist-cloud-architecture/)** for control-level depth, or **[talk to us](#discovery)**.

<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Start with a 30-minute discovery call

Free. No prep needed. We confirm fit, narrow the DORA scope to your binding articles, and tell you whether the 14-day or the 28-day variant matches your situation.

/contact/

Or read more:
- **[DORA compliance checklist for cloud architecture](/blog/2026/05/dora-compliance-checklist-cloud-architecture/)** — the control-level guide
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — the engagement that includes the DORA workstream
- **[Data sovereignty in 2026](/solutions/data-sovereignty/)** — adjacent regulatory trigger
- **[Cozystack](/products/cozystack/)** — the platform we typically recommend for sovereign architectures

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Aenix is the company behind Cozystack — a CNCF Project, Kubernetes Certified Distribution, OpenSSF Best Practices. We run DORA-aligned platform readiness engagements and platform engineering programs for financial-services organizations across the EU and DACH.*

<!-- /BLOCK 12 -->

<!--
SEO meta tags:
- title: "DORA Compliance for Cloud Infrastructure — Architecture Readiness | Aenix"
- description: "DORA compliance for cloud architecture. Article 28 supplier risk, exit-readiness, operational resilience testing. EU engineers, no hyperscaler bias, written deliverables."
- og:image: 1200×630 — DORA / EU shield + cloud architecture grid
- canonical: this URL
- hreflang: en (default), de (when DE locale launches at /de/loesungen/dora-compliance/)

JSON-LD on page:
- WebPage / BreadcrumbList: Home → Solutions → DORA Compliance
- Service schema (schema.org/Service): name="DORA-aligned platform readiness", provider=Aenix, areaServed=EU/DACH/Central Asia
- FAQPage from BLOCK 10

Word count target: 900-1100. Actual: ~1050. On budget.

Article companion (long-form): ../article.md → /blog/2026/05/dora-compliance-checklist-cloud-architecture/
Keyword split: landing owns "dora compliance" head (1100/6); article owns "dora compliance checklist" (200/0) + framework + deadline sub-cluster.
-->
