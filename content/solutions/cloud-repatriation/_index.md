---
title: "Cloud repatriation — exit public cloud without breaking the application"
description: "The Broadcom Private Cloud Outlook 2025 found 69% of organizations are evaluating cloud repatriation, and 53% now prioritize private cloud for new..."
type: "page"
related_pages:
  - /solutions/cloud-cost-optimization/
  - /solutions/data-sovereignty/
  - /services/platform-readiness-assessment/
  - /products/aenix-platform/
  - /products/cozystack/
  - /pricing
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Cloud repatriation is the practice of moving selected workloads out of public cloud (AWS, Azure, GCP) into private cloud, hybrid, or on-premises environments, typically to cut steady-state cost, satisfy data-sovereignty and regulatory pressure (DORA, NIS2, GDPR), or control AI and inference economics. Aenix runs a structured repatriation engagement, delivered as part of its Platform Readiness Assessment, that produces an honest TCO model, a per-workload "repatriate now / later / stay" ranking, a destination architecture, and a cutover sequence. Aenix is the company behind Cozystack, an Apache 2.0 CNCF project that unifies VMs and containers on one Kubernetes API and is the platform Aenix typically recommends as a repatriation destination. The engagement is delivered by engineers with no hyperscaler commercial bias.**
quick_facts:
  - label: "What it is"
    value: "A structured engagement that moves selected workloads from public cloud to private cloud, hybrid, or on-prem without breaking the application."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Engagement length"
    value: "14-day (focused TCO + repatriation) or 28-day (full repatriation program), fixed-price, single invoice"
  - label: "Who it is for"
    value: "Organizations with seven-figure cloud bills, predictable steady-state workloads, sovereignty exposure, or AI/ML egress and inference costs, plus an internal platform-engineering function"
  - label: "Deliverables"
    value: "Honest TCO model, per-workload repatriation ranking, destination architecture, cutover sequencing, and a Phase 2 implementation roadmap"
  - label: "Destination platform"
    value: "Cozystack — KubeVirt for VMs and containers on one Kubernetes API, Cilium (eBPF) networking, LINSTOR/DRBD storage, Tenant CRD multi-tenancy"
faq:
  - q: "Is cloud repatriation the same as going fully on-prem?"
    a: "No. Repatriation usually means moving a subset of workloads — typically 30-60%, the steady-state, regulated, or expensive ones — to private cloud, hybrid, or on-prem, while elastic and latency-sensitive workloads stay in public cloud. Treating it as all-or-nothing usually destroys the economic case."
  - q: "How long does a cloud repatriation take?"
    a: "The Aenix assessment is 14 or 28 days. Phase 2 implementation depends on estate size: roughly 6-12 months for a 100-VM estate and 12-24 months for a 1000-VM estate. The economic case typically clarifies after 9-12 months as cloud commitments lapse."
  - q: "Will Aenix just recommend Cozystack at the end?"
    a: "Only where it fits. Where Cozystack suits the destination architecture better than the alternative, the report explains why with named architectural attributes. Where a different stack fits — hyperscaler with better controls, OpenShift, or vanilla Kubernetes on commodity hardware — Aenix says so. There is no hyperscaler commercial bias."
  - q: "What does the repatriation destination platform cost?"
    a: "Cozystack itself is Apache 2.0 with no per-CPU or per-core licensing. The productized Ænix Platform and support are priced in tiers: Basic at $1,250/mo (10 nodes), Standard at $3,000/mo, Plus at $5,500/mo, and Enterprise on custom terms."
  - q: "What if our public cloud reserved commitments lock us in?"
    a: "The cutover sequencing plan respects commitment expiration ladders. Repatriation cadence is aligned with AWS Reserved Instances, Azure RI, and Savings Plan expirations rather than fighting them, so workloads move as commitments lapse."
  - q: "What if our team cannot operate a private cloud platform afterwards?"
    a: "Two paths are scoped during the assessment: Aenix runs the platform under a managed-services arrangement, or Aenix builds your platform team's capacity through a structured platform-engineering engagement."
---

<!-- BLOCK 1: HERO -->

**The Broadcom Private Cloud Outlook 2025 found 69% of organizations are evaluating cloud repatriation, and 53% now prioritize private cloud for new workloads. The reasons vary — runaway cost, regulator pressure, AI data residency, predictable performance — but the architectural work is the same: identify the right workloads to move, run the move without breaking the application, and end up with a platform you can actually operate.**

Aenix runs the technical engagement that turns "we need to leave AWS / Azure / GCP" from a board statement into a working plan with workloads ranked, costs modelled, and a destination architecture that won't reinvent the public cloud the wrong way.

> **Pairs with** any **[Ænix Platform Edition](/products/aenix-platform/)** by buyer profile: hosting / regional clouds → [ISP](/products/aenix-platform/isp-edition/); regulated enterprises → [Enterprise](/products/aenix-platform/enterprise-edition/); large operators → [Public Cloud](/products/aenix-platform/public-cloud-edition/); product teams → [IDP](/products/aenix-platform/idp-edition/); AI-heavy → [AI/ML](/products/aenix-platform/ai-ml-edition/). Free [Cloud Repatriation TCO Worksheet →](/resources/cloud-repatriation-tco-worksheet/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/blog/2026/05/reverse-cloud-migration-playbook/">Read playbook →</a>
</div>

<div class="trust-badges">
No hyperscaler bias · Honest TCO modelling · Engineers, not consultants · Apache 2.0 platform
</div>

<!-- /BLOCK 1 -->

---


---

<!-- BLOCK 2: WHO THIS IS FOR -->

## Who repatriation actually fits

Repatriation is not for everyone. The teams that benefit most share a common profile:

- **Heavy public-cloud bills** — annual spend in the seven figures, and the renewal trajectory is steeper than revenue.
- **Predictable, steady-state workloads** — not the elastic spike workloads hyperscalers were designed for.
- **Sensitive data with sovereignty exposure** — financial, healthcare, public-sector, or regulated-industry data that increasingly attracts regulatory pressure.
- **AI / ML workloads with egress and inference cost concerns** — model serving and training where hyperscaler economics break down at scale.
- **An internal platform-engineering function** (or one being stood up) — repatriation requires somebody to run the destination platform afterwards.

If your situation matches at least three of those, repatriation deserves a structured look. If you have a small IT team running a handful of services, the answer is almost always "stay in public cloud and tune your spend."

{{< factoid number="84%" label="of financial-services firms had adjusted their cloud strategy because of regulatory developments" source="LSEG Global Cloud Survey 2025" >}}

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: FOUR REASONS TEAMS REPATRIATE IN 2026 -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Four reasons teams repatriate in 2026

<div class="grid-2x2">

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg></span>
**1. Predictable cost on steady-state workloads**
Hyperscaler economics favor elasticity. For workloads that run 24/7 at predictable utilization, the unit economics on-prem or in private cloud are routinely 30-60% better — once egress, idle resources, and underutilized commitments are accounted for honestly.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
**2. Regulatory and sovereignty pressure**
DORA (in force January 2025), NIS2, GDPR, sectoral data-residency rules, and procurement-led sovereignty mandates (EU member states, Kazakhstan, others) increasingly force critical workloads into the financial entity's own environment.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg></span>
**3. AI and analytics on sensitive data**
GenAI, inference, and analytics workloads against regulated data classes face two-front pressure: model providers' data-handling terms aren't acceptable, and inference egress costs make hyperscaler economics unworkable at scale.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg></span>
**4. Operational and architectural control**
Hyperscaler-proprietary services lock the architecture into one vendor's roadmap. Repatriation gives the platform team back the ability to choose, evolve, and audit the underlying components.

</div>

</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHERE REPATRIATION GOES WRONG -->

## Where most repatriation projects go wrong

<div class="gap-cards-2">

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>
**The TCO model is wishful, not honest**
Hardware cost is easy. Network, datacenter, storage tiering, observability, identity, backup, DR, ongoing platform-engineering capacity — usually missing or underestimated. The result: repatriation looks cheaper than it is, then disappoints the CFO 18 months in.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></span>
**The destination architecture is left for later**
Workloads get moved to "an on-prem cluster" without a real platform underneath. The team rebuilds, in worse form, what hyperscalers spent a decade engineering. Self-service breaks. Velocity drops. Repatriation gets blamed.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></span>
**Data gravity is treated as a checkbox**
"Move the database last" — without a real plan for how 50 TB of production data crosses the network, what the cutover window looks like, how the rollback path works, and where backups live during the move.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg></span>
**The exit is full-scope when selective is the right answer**
Most repatriations are not all-or-nothing. The right outcome is usually 30-60% of workloads on-prem (the steady-state, regulated, or expensive ones), 40-70% staying in public cloud (the elastic, latency-sensitive, or hyperscaler-only ones). Treating repatriation as a binary decision destroys the economic case.

</div>

These failure modes are independent of cloud provider, vendor, or destination platform — they're what happens when repatriation is run as a spreadsheet exercise instead of a platform-engineering program.

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW AENIX HELPS -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## How Aenix helps

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Public cloud</b><div class="diagram__chips"><span>AWS</span><span>Azure</span><span>GCP</span></div></div>
<div class="diagram__conn">assessed by</div>
<div class="diagram__node diagram__node--brand"><b>Platform Readiness Assessment</b><div class="diagram__chips"><span>Honest TCO model</span><span>Workload ranking</span><span>Destination architecture</span></div></div>
<div class="diagram__conn">repatriate now / later / stay</div>
<div class="diagram__node"><b>Cozystack private cloud</b><div class="diagram__chips"><span>VMs</span><span>Containers</span><span>One Kubernetes API</span></div></div>
<div class="diagram__conn">on</div>
<div class="diagram__node"><b>Bare metal you own</b><div class="diagram__chips"><span>Private cloud, hybrid, or on-prem</span></div></div>
</div>
</div>

The repatriation engagement runs as part of our **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**, with the cost-and-cloud-spend workstream as primary focus. The 14- or 28-day engagement produces:

- **Honest TCO model** — current public cloud spend (incl. egress, commitment underutilization, hidden costs) vs. realistic destination cost on private cloud or hybrid.
- **Workload repatriation ranking** — every workload classified as "repatriate now / repatriate later / stay in cloud," ranked by ROI and risk.
- **Destination architecture** — what the platform looks like that workloads land on, including compute, storage, network, identity, observability, DR, and the platform-engineering function that operates it.
- **Cutover sequencing** — repatriation cohorts that respect commitment expirations and minimize cross-environment data movement.
- **Phase 2 implementation roadmap** — what an Aenix-delivered Phase 2 would do, in what sequence, with effort estimates.

Delivered by Aenix engineers who have built and operated production platforms for service providers, banks, and AI operators across the EU and Central Asia. The report's bias is toward what we can stand behind technically.

{{< factoid number="30-60%" label="better unit economics on-prem or in private cloud for steady-state workloads, once egress, idle resources, and underused commitments are counted honestly" >}}

</div>
</div>

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Why Aenix specifically

<div class="advantage-panel">

- **No hyperscaler bias.** Repatriation advisory work from Big-4 consultancies is shaped by their hyperscaler partnerships. Our recommendations are not commercially tied to AWS, Azure, GCP, or any single provider — we say "stay in public cloud" when that's the answer, and we say "fully on-prem" when that's the answer.
- **Engineers, not consultants.** The engineers who run the repatriation engagement build the production platforms afterwards. The implementation effort estimates in the report are calibrated against work we have actually shipped — not against industry benchmarks.
- **Open-source destination platform.** We are the company behind **[Cozystack](/products/cozystack/)** — an open-source Kubernetes-native cloud platform (CNCF Project, Kubernetes Certified Distribution). Where Cozystack fits the destination architecture better than the alternative, the report explains why with named architectural attributes. Where it doesn't, we say so.

</div>

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## What the engagement looks like

| When | What | Output |
|---|---|---|
| **Day 0** | 30-min discovery call (free) | Confirm fit, identify cost concerns + workload portfolio + sponsor |
| **Days 1-13 (or 1-27)** | Four parallel workstreams; cost-and-cloud-spend workstream emphasized | TCO modelling, workload classification, destination architecture, daily async updates |
| **Day 14 (or 28)** | Executive readout (60-90 min) | Written report: workload ranking, TCO model, destination architecture, cutover sequencing, Phase 2 roadmap |

For the full methodology see **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Repatriation projects we've supported

{{< clients >}}

We have run cloud-repatriation engagements for service providers, financial-services organizations, telecom operators, and AI/GPU platforms across the EU, DACH, and Central Asia. Workloads moved have ranged from steady-state production databases to AI inference clusters; outcomes have ranged from full on-prem to selective hybrid.

> {{< placeholder-quote >}}
> *— {{NAME_1}}, {{TITLE_1}}*

Named case studies available on the discovery call where customer permissions allow.

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Pricing and engagement scope

The repatriation-emphasized engagement runs as a Platform Readiness Assessment.

<div class="pricing-cards-2">

### 14-day (focused TCO + repatriation)
TCO modelling depth, workload portfolio ranking, destination architecture options, cutover sequencing for top-priority workloads.
**{{PRICING_14_DAY}}**

### 28-day (full repatriation program)
Adds vendor shortlisting (compute / storage / network / observability), proof-of-concept scoping for 1-2 priority workloads, multi-BU stakeholder interviews, complete Phase 2 implementation roadmap.
**{{PRICING_28_DAY}}**

</div>

Fixed-price. Single invoice. Mutual NDA at kickoff. Phase 2 implementation cost: assessment fee credited subject to scope.

We accept RFI / RFP through standard procurement channels in EU member states and Kazakhstan.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->


**More questions?** See the **[reverse cloud migration playbook](/blog/2026/05/reverse-cloud-migration-playbook/)** or **[talk to us](#discovery)**.

<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Start with a 30-minute discovery call

Free. No prep needed. We confirm fit, identify your top cost concerns, and tell you whether the 14-day or 28-day variant matches your situation.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

Or read more:
- **[Reverse cloud migration playbook](/blog/2026/05/reverse-cloud-migration-playbook/)** — the long-form playbook
- **[Cloud cost optimization](/solutions/cloud-cost-optimization/)** — adjacent FinOps trigger
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — the engagement methodology
- **[Cozystack](/products/cozystack/)** — the platform we typically recommend as repatriation destination

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Aenix is the company behind Cozystack — a CNCF Project, Kubernetes Certified Distribution, OpenSSF Best Practices. We run cloud-repatriation engagements and platform engineering programs for service providers, banks, telecom, and AI operators across the EU, DACH, and Central Asia.*

<!-- /BLOCK 12 -->

