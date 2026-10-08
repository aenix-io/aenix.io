---
title: "Data sovereignty for cloud infrastructure — make jurisdictional control demonstrable"
seo_title: "Data sovereignty for cloud infrastructure"
primary_keyword: "data sovereignty cloud infrastructure"
description: "Prove where every data class lives, who holds the keys and which suppliers sit behind your cloud. A fixed-price engagement for DORA, NIS2 and GDPR scope."
type: "page"
related_pages:
  - /solutions/dora-compliance/
  - /solutions/cloud-repatriation/
  - /solutions/sovereign-ai/
  - /services/platform-readiness-assessment/
  - /products/private-cloud-platform/
  - /products/public-cloud-platform/
  - /products/cozystack/
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Data sovereignty for cloud infrastructure means proving, with evidence, that data lives in the jurisdiction a regulator requires at every layer — production storage, replicas, backups, observability, and CI/CD artifacts — with key custody the data owner can explain and supplier dependencies transparent past the first hop. It is the operational requirement behind DORA, NIS2, GDPR, sectoral data-residency rules, and EU member-state sovereign-cloud mandates. Ænix runs a structured engagement that maps where each data class actually lives, identifies gaps, and defines sovereignty-by-design for regulated organisations. Ænix created Cozystack, an Apache 2.0 CNCF Sandbox project that runs on the customer's chosen hardware in the chosen jurisdiction, with the customer holding cluster-level access — making sovereignty structural rather than contractual.**
quick_facts:
  - label: "What it is"
    value: "A structured engagement to take a data-sovereignty position from claim to demonstrable architecture across every data layer"
  - label: "Licence"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence)"
  - label: "Who it is for"
    value: "Banks, insurers, public-sector and quasi-public bodies, healthcare, telecom and critical-infrastructure operators, and multinationals under data-localization rules"
  - label: "Engagement timeline"
    value: "14-day focused scope or 28-day full sovereignty plus adjacent regulatory overlap; fixed-price, single invoice, mutual NDA at kickoff"
  - label: "Standards covered"
    value: "DORA, NIS2, GDPR, sectoral data-residency rules, and EU member-state and non-EU sovereign-cloud mandates"
  - label: "Delivered by"
    value: "Ænix engineers (engineering teams in the EU and Central Asia; EU contracts through AENIX s.r.o., Czech Republic), with no hyperscaler commercial alignment"
faq:
  - q: "Is data sovereignty the same as data residency?"
    a: "No. Data residency is necessary but not sufficient. Sovereignty also requires control of encryption keys, supplier-chain transparency past the first hop, audit-readiness, and operational independence from a single provider. A workload can be in the right region and still fail the sovereignty test."
  - q: "Do we need to go fully on-prem to be sovereign?"
    a: "Not necessarily. The right answer depends on the data class, the regulator, and operational realities. Some workloads achieve sovereignty under hyperscaler sovereign-cloud arrangements with caveats; others require dedicated infrastructure under the customer's control. The engagement determines which is which per data class."
  - q: "How does this differ from a Big-4 sovereignty assessment?"
    a: "Big-4 advisory is usually delivered by management consultants, handed off to a separate implementation team, and shaped by the firm's hyperscaler partnerships. Ænix engineers do both the assessment and the implementation and are not commercially tied to any provider, so the report's bias is toward what can be demonstrated and operated under your governance."
  - q: "What does the engagement produce?"
    a: "A data-residency map per data class (production, backup, observability, CI/CD), an encryption and key-custody review, a supplier-chain map traced to the second hop, an audit-readiness assessment, and an architecture-level remediation plan with effort estimates and regulatory-deadline alignment."
  - q: "Why does Cozystack help with data sovereignty?"
    a: "Cozystack is an Apache 2.0 CNCF project that runs KubeVirt VMs and containers on one Kubernetes API on the customer's chosen hardware in the chosen jurisdiction, with the customer holding cluster-level access. Volume encryption (LUKS on LINSTOR) is available opt-in per storage class, and key handling is designed with you during the build. There is no per-core licensing and no provider lock-in, so sovereignty is structural rather than contractual."
  - q: "Can we run this under a public-sector procurement process?"
    a: "Yes. Ænix accepts RFI / RFP through standard procurement channels; EU contracts are with AENIX s.r.o. (Czech Republic), which holds ISO/IEC 27001:2022 certification. The 30-minute discovery call covers procedural fit and confirms which 14-day or 28-day variant matches your situation."
hreflang_de: /de/loesungen/data-sovereignty/
---

<!-- BLOCK 1: HERO -->

**Data sovereignty is no longer a procurement clause — it is an operational requirement: prove, with evidence, that your data lives where the regulator says it must, at every layer and not only in production.**

Ænix runs a structured engagement that produces a control-level map of where your data actually lives today, where the gaps are, and what sovereignty-by-design looks like for your stack.

> **Pairs with:** **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** for regulated enterprises consuming sovereign cloud internally, or **[Public Cloud Platform](/products/public-cloud-platform/)** for operators offering it as a product — your hardware, your jurisdiction, opt-in volume encryption, air-gapped installation optional.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/blog/2026/05/data-residency-requirements-2026/">Read guide →</a>
</div>

<div class="trust-badges">
ISO/IEC 27001:2022 (AENIX s.r.o.) · Apache 2.0 platform · Written deliverables · Mutual NDA at kickoff
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

> **Reading as a CISO?** The [CISO guide](/for/ciso/) summarises what the platform does and does not provide, and the [GDPR evidence page](/compliance/gdpr/) documents encryption and key handling as they ship. AENIX s.r.o. holds [ISO/IEC 27001:2022 certification](/compliance/iso-27001/) for its own ISMS.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT SOVEREIGNTY ACTUALLY REQUIRES -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## What "data sovereignty" actually requires of your architecture

<div class="grid-2x2">

**1. Demonstrable data-residency at every layer**
Production storage is the easy part. Backups, observability data, CI/CD artifacts, and managed-service telemetry frequently leave the regulator's perimeter without anyone noticing. Sovereignty applies to *all* layers, not just the production database.

**2. Encryption and key custody under your control**
Encryption alone is not sovereignty. The data owner must be able to explain who holds the keys — ideally itself, not the cloud provider — with a documented rotation, emergency-access and audit process.

**3. Supplier transparency to the second hop**
Hyperscalers run on data centres and connectivity providers; SaaS providers run on hyperscalers; managed services depend on shared infrastructure. Sovereignty requires knowing the chain past the first hop.

**4. Audit and supervisory access**
Audit trails must be exportable in regulator-consumable formats, retained per the regulator's requirement, and tamper-evident. Supervisor access processes must be documented and tested.

</div>

For practical detail with control-level checks, see **[data residency requirements 2026](/blog/2026/05/data-residency-requirements-2026/)**.

</div>
</div>

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
The hyperscaler is named in the contract. The hyperscaler's data-centre operator, networking sub-contractors, and shared platform services are not. DORA Article 30(2)(a) requires the subcontracting chain to be described in the contract; NIS2 Article 21(2)(d) requires supply-chain security to cover direct suppliers and service providers.

</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW AENIX HELPS -->

## How Ænix helps

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Sovereignty requirement</b><div class="diagram__chips"><span>Data residency for every data class</span><span>Key custody</span><span>Chosen jurisdiction</span></div></div>
<div class="diagram__conn">met by</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>Customer's chosen hardware in the chosen jurisdiction</span><span>Opt-in volume encryption</span><span>Cluster-level access</span></div></div>
<div class="diagram__conn">makes it</div>
<div class="diagram__node"><b>Structural, not contractual</b><div class="diagram__chips"><span>Audit-readiness</span></div></div>
</div>
</div>

The data-sovereignty engagement runs as part of our **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**, with the sovereignty-and-regulator-gap workstream as primary focus. The 14- or 28-day engagement produces:

- **Data-residency map** — where each data class actually lives today, including production, backup, observability, and CI/CD artifacts. Per-class jurisdiction with evidence.
- **Encryption and key-custody review** — current encryption posture, key-custody arrangements, gap identification per data class.
- **Supplier-chain map to second hop** — every ICT third-party arrangement traced to its underlying providers and shared dependencies.
- **Audit-readiness assessment** — what supervisor access processes are documented, what tested, what missing.
- **Architecture-level remediation plan** — what to fix, in what sequence, with effort estimates and regulatory deadline alignment.

Delivered by Ænix engineers — the team that created Cozystack — from engineering teams in the EU and Central Asia, with no hyperscaler commercial alignment. EU contracts are with AENIX s.r.o. (Czech Republic).

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Why Ænix specifically

- **Engineers who work under these rules.** Our engineering teams are in the EU and Central Asia; EU contracts are with AENIX s.r.o. (Czech Republic). We understand the difference between sovereignty as a US marketing term and sovereignty as it is enforced under EU sectoral rules and EU member-state procurement clauses.
- **No hyperscaler bias.** Sovereignty consulting from Big-4 firms is shaped by their hyperscaler partnerships. Our recommendations are not commercially tied to any cloud provider — we recommend the architecture that actually meets the sovereignty requirement, even when that means full on-prem.
- **Open-source platform foundation.** We created **[Cozystack](/products/cozystack/)** and co-maintain it — a CNCF Sandbox project running on your chosen hardware in your chosen jurisdiction, with cluster-level access held by you. Sovereignty is structural, not contractual.

<!-- /BLOCK 6 -->

---

{{< factoid number="14 days" label="from sovereignty claim to a demonstrable data-residency map, key-custody review, and remediation plan" >}}

---

<!-- BLOCK 7: TIMELINE -->

## What the engagement looks like

Day 0 is a free 30-minute discovery call that fixes the scope. Days 1-13 (or 1-27) run four parallel workstreams with the sovereignty-and-regulator-gap workstream emphasized, on daily async updates and three sponsor checkpoints. Day 14 (or 28) is a 60-90 minute executive readout against the written report — data-residency map, key-custody review, supplier-chain map, audit-readiness and remediation plan. Full day-by-day methodology: **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Case studies

Nine anonymised case studies are published on the [case studies page](/case-studies/), in anonymised form where the customer requires it — including a [private cloud in a bank](/case-studies/private-cloud-in-a-bank/) and a [three-data-centre sovereign public cloud](/case-studies/sovereign-public-cloud/). Reference calls are arranged under NDA where the customer agrees.

{{< quote-carousel >}}

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Pricing and engagement scope

The sovereignty-emphasized engagement runs as a Platform Readiness Assessment.

<div class="pricing-cards-2">

### 14-day (focused sovereignty scope)
Sovereignty workstream depth, single regulatory framework, single domain. Data-residency map, key-custody review, supplier-chain (to second hop), remediation plan.
**On request**

### 28-day (full sovereignty + adjacent)
Sovereignty + adjacent regulatory overlap (DORA / NIS2 / sectoral / GDPR mapping). Multi-BU stakeholder interviews. Vendor shortlisting where applicable. Phase 2 implementation roadmap.
**On request**

</div>

Fixed-price. Single invoice. Mutual NDA at kickoff. Phase 2 implementation cost: assessment fee credited subject to scope.

We accept RFI / RFP through standard procurement channels; EU contracts are with AENIX s.r.o. (Czech Republic). The discovery call covers procedural fit.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->


<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Start with a 30-minute discovery call

We confirm fit, narrow the scope to the regulators or procurement clauses that bind you, and name the 14-day or 28-day variant.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

Or read more:
- **[Data residency requirements 2026](/blog/2026/05/data-residency-requirements-2026/)** — practical guide
- **[DORA compliance for cloud infrastructure](/solutions/dora-compliance/)** — regulatory adjacent trigger
- **[Cloud repatriation](/solutions/cloud-repatriation/)** — when sovereignty + cost align
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — engagement methodology
- **[Cozystack](/products/cozystack/)** — sovereign-by-architecture platform

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Ænix created Cozystack — a CNCF Sandbox project, CNCF Certified Kubernetes distribution, OpenSSF Best Practices — and co-maintains it. AENIX s.r.o. holds ISO/IEC 27001:2022 certification.*

<!-- /BLOCK 12 -->

