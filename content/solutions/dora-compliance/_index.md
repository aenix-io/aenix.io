---
title: "DORA compliance for cloud infrastructure — make your cloud architecture supervisor-ready"
description: "DORA has been in force since 17 January 2025. If your cloud architecture has not been independently checked against ICT third-party risk, concentration..."
type: "page"
related_pages:
  - /solutions/data-sovereignty/
  - /solutions/sovereign-ai/
  - /services/platform-readiness-assessment/
  - /industries/financial-services/
  - /products/private-cloud-platform/
  - /products/cozystack/
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **DORA compliance for cloud infrastructure means proving that your cloud architecture satisfies the EU Digital Operational Resilience Act, in force since 17 January 2025, across ICT risk management (Articles 5-16), incident reporting (Articles 17-19, deadlines set by Delegated Regulation (EU) 2025/301), ICT third-party and concentration risk (Articles 28-30), tested exit strategies (Article 28(8)), and digital operational-resilience testing (Articles 24-27). It applies to banks, insurers, investment and payment firms, crypto-asset service providers, and the ICT third parties serving them. Aenix, the company behind the CNCF project Cozystack, runs a DORA-aligned platform readiness engagement that produces a control-level map of what an entity can demonstrate today, a concentration-risk picture mapped to the second supplier hop, exit-feasibility analysis, and an architecture-level remediation plan, delivered by engineers with no hyperscaler commercial bias.**
quick_facts:
  - label: "What it is"
    value: "A DORA-aligned platform readiness engagement that checks cloud architecture against ICT risk management, incident reporting, third-party and concentration risk, exit strategies, and resilience testing."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Regulation"
    value: "EU Digital Operational Resilience Act (DORA), Regulation (EU) 2022/2554, applying since 17 January 2025. Architecture-binding articles: 5-16 (ICT risk management), 17-19 (incident reporting), 24-27 (resilience testing, TLPT at 26-27), 28-30 (third-party and concentration risk)"
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
    a: "Four substantive areas: ICT third-party risk transparency including sub-contractors (Articles 28-30, with concentration risk at Article 29), an exit strategy that is documented and tested for every critical-or-important-function arrangement (Article 28(8), reflected in contract terms under Article 30(3)(f)), digital operational-resilience testing run against live architecture (Articles 24-27, threat-led penetration testing at Articles 26-27), and the residency, supervisory-access and key-custody controls that make ICT risk management under Articles 5-16 demonstrable."
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

**DORA has applied since 17 January 2025. If your cloud architecture has not been independently checked against ICT third-party risk (Arts. 28-30), concentration risk (Art. 29), tested exit strategies (Art. 28(8)), and resilience testing (Arts. 24-27), the next supervisory cycle will surface the gaps you would rather find first.**

Ænix runs a DORA-aligned platform readiness engagement for financial entities and the ICT third parties serving them.

> **Pairs with:** **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** — DORA-aligned by design (customer-controlled keys at every layer, audit-ready logging via VictoriaLogs, multi-tenant Tenant CRD aligned with ICT risk classification, tested exit-readiness mechanics, supplier transparency to second hop). Free [DORA Compliance Checklist →](/resources/dora-compliance-checklist/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/blog/2026/05/dora-compliance-checklist-cloud-architecture/">Get checklist →</a>
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
- **Investment firms, payment institutions, and crypto-asset service providers** in scope as financial entities under DORA Article 2.
- **ICT third-party service providers** that supply critical functions to in-scope entities — including hosting providers, SaaS vendors, and managed-service operators.

If your cloud setup supports a *critical or important function* under DORA, the requirements below apply substantively, not just procedurally.

<!-- /BLOCK 2 -->

---

{{< factoid number="17 Jan 2025" label="date DORA became binding on EU financial entities and the ICT third parties serving them" >}}

---

<!-- BLOCK 3: FOUR THINGS DORA REQUIRES OF YOUR CLOUD -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## What DORA requires of your cloud architecture

<div class="grid-2x2">

**1. ICT third-party risk transparency (Articles 28-30)**
Every ICT supplier in your stack — hyperscaler, SaaS, managed service — has Article 28 obligations attached. The financial entity must map the supply chain, including sub-contractors, with documented concentration-risk position.

**2. Tested exit strategies (Article 28(8))**
Article 28(8) requires exit strategies for every ICT arrangement supporting a critical or important function, and requires the plans to be comprehensive, documented and adequately tested. Article 30(3)(f) puts the corresponding exit terms in the contract. An untested plan does not satisfy the article.

**3. Digital operational-resilience testing (Articles 24-27)**
At least annual testing of ICT tools and systems for all in-scope entities (Art. 24-25), plus threat-led penetration testing at least every three years for entities identified by their competent authority (Arts. 26-27). Both run against live architecture, not against documentation.

**4. Demonstrable ICT risk management (Articles 5-16) and incident reporting (Articles 17-19)**
Data residency at every layer — production, backup, observability, CI/CD artifacts — with keys under the financial entity's control and audit trails exportable in regulator-consumable formats. Detection and classification must be fast enough for the reporting windows set by Delegated Regulation (EU) 2025/301.

</div>

For a control-level checklist with operational language for each of these, see **[the DORA compliance checklist](/blog/2026/05/dora-compliance-checklist-cloud-architecture/)**.

</div>
</div>

<!-- /BLOCK 3 -->

---

{{< factoid number="Every 3 years" label="minimum frequency for threat-led penetration testing under DORA Articles 26-27, on top of the annual testing programme under Articles 24-25" >}}

---

<!-- BLOCK 4: WHERE CURRENT SETUPS FALL SHORT -->

## Where most cloud setups fall short

<div class="gap-cards-2">

**Observability data quietly leaves the regulator's perimeter**
The production database may be compliant. The SaaS observability stack collecting application logs probably is not. DORA Article 28 applies to the entire ICT third-party arrangement.

**The exit plan exists on paper but has never been tested**
Article 28(8) requires the exit plan to be adequately tested, not merely written. Without a rehearsal, the stated time-to-exit is a guess.

**Concentration risk is treated as a procurement question, not an architecture question**
Article 29 requires the entity to assess concentration at ICT-arrangement level. Contractual diversity language without architectural diversity does not answer it.

**Sub-contractor risk is invisible past the first hop**
Article 30(2)(a) requires the financial entity to know the chain. Most do not, beyond the first hop.

</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW WE HELP (linking to entry offer) -->

## How Ænix helps

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>DORA obligations</b><div class="diagram__chips"><span>ICT third-party risk (Arts. 28-30)</span><span>Tested exit strategies (Art. 28(8))</span><span>Resilience testing (Arts. 24-27)</span></div></div>
<div class="diagram__conn">satisfied by</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack / Ænix Platform controls</b><div class="diagram__chips"><span>Customer-controlled keys</span><span>VictoriaLogs audit logging</span><span>Tenant CRD multi-tenancy</span><span>Supplier transparency to second hop</span></div></div>
<div class="diagram__conn">documented as</div>
<div class="diagram__node"><b>Audit-ready outcome</b><div class="diagram__chips"><span>DORA control-level map</span><span>Exit-feasibility analysis</span><span>Remediation plan</span></div></div>
</div>
</div>

Our DORA engagement is built into the **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**, with the sovereignty-and-regulator-gap workstream emphasized for DORA-specific scope. The 14- or 28-day engagement produces:

- **DORA control-level map** — a control-by-control table showing what you can demonstrate today, what is partially met, and where the architectural gaps are.
- **Concentration-risk picture** — supplier-chain mapping (to the second hop), with quantified concentration position per critical function.
- **Exit-feasibility analysis** — calibrated time-to-exit estimates, exit-drill scoping, and sequencing aligned with commitment expirations.
- **Resilience-testing readiness** — whether your architecture supports the scenario-based testing supervisors expect.
- **Architecture-level remediation plan** — what to fix, in what sequence, with effort estimates.

Delivered by Ænix engineers — the team behind Cozystack — not management consultants.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Why Ænix specifically

Most DORA advisory work comes from Big-4 consultancies that hand off to a hyperscaler partner whose incentives shape the recommendation.

We are different in three concrete ways:

- **No hyperscaler bias.** Our recommendations are not commercially tied to AWS, Azure, GCP, or any single provider. When the answer is hyperscaler-with-better-controls, we say so. When the answer is on-prem or hybrid, we say that.
- **Engineers not consultants.** The same Ænix engineers who run the readiness engagement build the production platforms afterwards. The implementation effort estimates in the report are calibrated against work we have actually shipped.
- **Open-source platform foundation.** We are the company behind **[Cozystack](/products/cozystack/)** — a CNCF Project, Kubernetes Certified Distribution, OpenSSF Best Practices badge. Where a Cozystack-based architecture serves DORA's substantive requirements better than the alternative, the report explains why with named controls.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## What the engagement looks like

Day 0 is a free 30-minute discovery call that fixes the scope. Days 1-13 (or 1-27) run four parallel workstreams with the sovereignty-and-regulator-gap workstream emphasized, on daily async updates and three sponsor checkpoints. Day 14 (or 28) is a 60-90 minute executive readout against the written report — DORA control map, concentration analysis, exit-feasibility, resilience-testing readiness and remediation plan. Full day-by-day methodology: **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Who's done this with us

{{< clients >}}

We have run DORA-aligned readiness engagements for banks, insurers, telecom operators, and ICT third-party service providers across the EU and DACH. Mutual NDA at kickoff; named case studies available on the discovery call where customer permissions allow.

{{< quote-carousel >}}

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Pricing and engagement scope

<div class="pricing-cards-2">

### 14-day (focused DORA scope)
DORA-emphasized workstream depth, single business unit / domain. Full control map, concentration analysis, exit-feasibility, remediation plan.
**On request**

### 28-day (full DORA + adjacent)
DORA + adjacent NIS2 / GDPR / sectoral overlap mapping. Multi-BU stakeholder interviews. Vendor shortlisting where applicable. Phase 2 implementation roadmap.
**On request**

</div>

Fixed-price. Single invoice. Mutual NDA at kickoff. If a Phase 2 implementation engagement follows, the assessment cost is credited against it (subject to scope).

We accept RFI / RFP through standard procurement channels in EU member states and Kazakhstan; the discovery call covers procedural fit.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->


<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Start with a 30-minute discovery call

We confirm fit, narrow the scope to the articles that actually bind you, and recommend the 14-day or 28-day variant.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

Or read more:
- **[DORA compliance checklist for cloud architecture](/blog/2026/05/dora-compliance-checklist-cloud-architecture/)** — the control-level guide
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — the engagement that includes the DORA workstream
- **[Data sovereignty in 2026](/solutions/data-sovereignty/)** — adjacent regulatory trigger
- **[Cozystack](/products/cozystack/)** — the platform we typically recommend for sovereign architectures

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Ænix is the company behind Cozystack — a CNCF Project, Kubernetes Certified Distribution, OpenSSF Best Practices. We run DORA-aligned platform readiness engagements and platform engineering programs for financial-services organizations across the EU and DACH.*

<!-- /BLOCK 12 -->

