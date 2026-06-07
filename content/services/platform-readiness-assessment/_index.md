---
title: "Platform Readiness Assessment — for cloud sovereignty, migration, and cost posture in 14 days"
description: "A structured cloud readiness assessment that gives you three concrete outcomes: time-to-environment metric, compliance-by-design map, and cost-and-control..."
related_pages: ["/solutions/data-sovereignty/", "/solutions/dora-compliance/", "/solutions/cloud-repatriation/", "/solutions/sovereign-ai/", "/services/platform-engineering/", "/products/aenix-platform/", "/products/cozystack/", "/pricing"]
language: "en"
direct_answer: |
  **The Platform Readiness Assessment is a fixed-price engagement from Aenix that evaluates an organization's cloud platform across four workstreams — platform maturity and inventory, sovereignty and regulator gap (DORA, NIS2, GDPR), cloud-spend posture, and developer self-service — and delivers a written report in 14 days (or 28 for the full variant). It is built for organizations with their own platform-engineering teams that face sovereignty pressure, repatriation or cost mandates, sovereign-AI requirements, or slow time-to-environment. The work is done by Aenix platform engineers who build and operate Cozystack in production, not by management consultants. Outputs are three written, dated deliverables: a time-to-environment metric, a compliance-by-design map, and a cost-and-control trajectory.**
quick_facts:
  - label: "What it is"
    value: "A fixed-price cloud readiness assessment that produces a written time-to-environment metric, compliance-by-design map, and cost-and-control trajectory in 14 days."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Engagement timeline"
    value: "14-day focused variant (single workstream emphasis) or 28-day full variant (all four workstreams, multi-BU interviews, Phase 2 roadmap)."
  - label: "Who delivers it"
    value: "Aenix platform engineers who build and operate Cozystack in production — not seconded consultants or a partner network."
  - label: "Who it's for"
    value: "Organizations with their own platform/SRE teams facing sovereignty, repatriation, cost-control, sovereign-AI, or time-to-environment pressure."
  - label: "Access required"
    value: "Read-only on architecture docs, Git orgs, public-cloud billing, and observability dashboards — no write credentials, no production kubectl."
faq:
  - q: "How is this different from a Big-4 cloud readiness assessment?"
    a: "Big-4 assessments are usually delivered by management consultants who hand off to a separate implementation team and a hyperscaler partner. Aenix engineers run both the assessment and any follow-on implementation, and are not commercially aligned with any hyperscaler, so recommendations reflect what the team can stand behind technically and operate under your governance."
  - q: "Will Aenix pitch us Cozystack at the end?"
    a: "The report names the recommended stack with reasoning. In most cases that is Cozystack — the open-source CNCF project Aenix builds — but when the work points elsewhere, the report says so. It is not a sales engagement for Cozystack."
  - q: "How long does the assessment take and what does it cost?"
    a: "Two variants: a 14-day focused engagement on a single workstream and a 28-day full engagement covering all four workstreams with a Phase 2 roadmap. Both are fixed-price with a single invoice and a mutual NDA at kickoff. If a Phase 2 implementation follows, the assessment cost is credited against it, subject to scope."
  - q: "What access does Aenix need to run it?"
    a: "Read-only access to architecture documents, GitHub/GitLab organizations, public-cloud billing, and observability dashboards. No kubectl access to production and no credentials to anything writable are required."
  - q: "What does the assessment actually deliver?"
    a: "Three written, dated outputs handed to the executive sponsor: a time-to-environment metric (current vs target with a delivery plan), a compliance-by-design map across DORA / NIS2 / GDPR and sectoral controls, and a 12-month cost-and-control trajectory with caps and ranked repatriation candidates."
  - q: "Does it work for an organization that has already chosen a stack?"
    a: "Yes. The workstreams shift emphasis toward operational readiness, multi-tenancy model, regulator gap, and developer self-service rather than vendor selection — for example if you have already committed to KubeVirt, Cilium, LINSTOR, and Talos."
---

<!-- BLOCK 1: HERO -->


**A structured cloud readiness assessment that gives you three concrete outcomes: time-to-environment metric, compliance-by-design map, and cost-and-control trajectory. Run by Aenix platform engineers — the team behind Cozystack — not management consultants.**

If you're evaluating data sovereignty, DORA / NIS2 compliance, cloud repatriation, sovereign AI, or a self-service platform for your developers — this is the engagement that turns the question into a written plan with numbers, owners, and a timeline.

> **Pairs with:** all **[Ænix Platform editions](/products/aenix-platform/)** — the assessment outputs which edition fits your scope. Public Cloud / ISP / Enterprise / IDP / AI/ML. Discovery call → Assessment → Edition recommendation → Pilot → Full build.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a 30-minute discovery call</a>
  <a class="cta-secondary" href="#what-we-look-at">See what 14 days cover →</a>
</div>

<div class="trust-badges">
Aenix engineers, not consultants · Fixed-price · Written deliverables · No vendor lock-in
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHY THIS ASSESSMENT (4 trigger callout) -->

## When the Platform Readiness Assessment fits

Buyers reach us with one of four pressures. The assessment addresses them as a single program — not four disconnected workstreams.

<div class="trigger-grid-2x2">

**Regulator and sovereignty pressure**
DORA (in force January 2025), NIS2, GDPR, sectoral data residency. Output: compliance-by-design map for your stack.

**AI and analytics on sensitive data**
GenAI / inference workloads where data cannot leave the perimeter. Output: private-AI architecture options scoped to your model and data class.

**Cloud repatriation and cost control**
Public-cloud bill outpacing predictability, FinOps mandate, repatriation in roadmap. Output: cost trajectory with caps and timeline.

**Developer self-service and time-to-environment**
Environments that take weeks to provision, IAM/network/monitoring done by hand, multiple tools nobody owns. Output: time-to-environment baseline → target with a delivery plan.

</div>

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT WE LOOK AT (4 workstreams in 14 days) -->

<a id="what-we-look-at"></a>
## What 14 days cover — four workstreams, one report

The assessment runs in parallel across four workstreams. Each has a named owner on our side, a defined deliverable, and a fixed window.

| # | Workstream | What we inspect | Deliverable |
|---|---|---|---|
| 1 | **Inventory and platform maturity** | Workloads (VMs / containers / databases), environments (dev / staging / prod), provisioning velocity, IaC coverage, GitOps maturity, CI/CD ownership | Current-state architecture map + maturity score across 8 dimensions |
| 2 | **Sovereignty and regulator gap** | DORA / NIS2 / GDPR / sectoral applicability, data residency mapping, encryption posture, supplier-risk concentration, audit trail | Compliance-by-design map: controls met, gaps, prioritized remediation |
| 3 | **Cost and cloud-spend posture** | Public cloud bill (last 12 months), commitment / reservation utilization, egress cost, repatriation feasibility per workload, FinOps maturity | Cost trajectory: current spend → 12-month target with caps, repatriation candidates ranked |
| 4 | **Developer self-service and platform engineering** | Time-to-environment (current SLA), provisioning friction points, golden-path coverage, internal documentation, platform-team capacity | Time-to-environment baseline + target metric, golden-path proposal, platform-team RACI |

Each workstream produces a 3-5 page section in the final report. The full report lands at the end of week 2 (or week 4 for the deeper variant).

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: THREE OUTCOMES (cards) -->

## Three outcomes you walk away with

<div class="outcome-cards-3">

### 1. Time-to-environment metric
**Current:** how long from "team needs an environment" to "environment is reachable, monitored, and secure".
**Target:** what it takes to bring that to hours, not weeks.
**Plan:** the platform-engineering work that closes the gap, with effort estimates and a sequence.

### 2. Compliance-by-design map
A control-level map for the regulatory frameworks you operate under — DORA, NIS2, GDPR, sectoral. For each control: where you stand, what's missing, what an architecture-level fix looks like, and which workloads it touches.

### 3. Cost and control trajectory
A 12-month spending plan with caps and a clear path between current public-cloud spend and a controllable hybrid or private-cloud posture. Repatriation candidates ranked by ROI. FinOps owner identified.

</div>

All three outputs are **written**, **dated**, and **handed to the executive sponsor** — not just discussed in a workshop.

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: WHO IT'S FOR (ICP qualifiers) -->

## Who this is for — and who it's not

<div class="fit-grid">

**Strong fit — at least four of these are true:**
- You have your own product or platform engineering teams (not just an IT department)
- You handle sensitive data under regulator pressure (banks, insurance, public sector, telco, critical enterprise)
- You run multiple environments and internal teams that all need infrastructure
- You have a hybrid setup — on-prem + public cloud + legacy
- You have AI / ML use cases that can't simply be lifted to a hyperscaler
- Your public-cloud bill or FinOps situation is a board-level concern
- You are actively hiring platform / SRE / DevOps / cloud architect roles
- You operate 24/7 critical systems

**Not a fit:**
- Small IT team running one or two systems
- No internal platform-engineering function and no plan to build one
- Goal is purely "save on licenses" — not faster delivery, not sovereignty, not control

</div>

If you're not sure which side you're on — **the discovery call answers that for free** before you commit to a paid engagement.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: METHODOLOGY (timeline) -->

## How the engagement runs

<div class="timeline-horizontal">

**Day 0 — Discovery call (30 min, free)**
Confirm fit, narrow scope, identify executive sponsor and four workstream owners.

**Day 1 — Kickoff workshop (90 min)**
Mutually-agreed objectives, access to artifacts (architecture docs, GitHub orgs, billing read-only, regulator scope).

**Days 2-9 — Parallel workstream analysis**
Four engineers run the four workstreams. Daily async updates to your sponsor. Three short interviews per workstream with named owners on your side.

**Day 10 — Findings checkpoint (60 min)**
Walk through preliminary findings; you correct or sharpen. We adjust before the final report.

**Days 11-13 — Report drafting**
Written report assembled. All four workstreams, three outcomes, prioritized remediation, executive summary.

**Day 14 — Executive readout (60-90 min)**
Final report handed over. Q&A with sponsor and selected stakeholders. Roadmap discussion: what would Phase 2 look like.

</div>

The 4-week variant adds: vendor-shortlisting workshops (where applicable), proof-of-concept scoping for repatriation candidates, and stakeholder interviews across two more business units.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: WHO DELIVERS IT -->

## Who actually does the work

The engagement is run by **Aenix platform engineers** — the team that builds and operates Cozystack in production for service providers, banks, and sovereign-cloud projects. Not seconded management consultants. Not a partner network handing the project off after the sale.

That matters because:
- We've made these architectural decisions on real production systems, not slides.
- Our recommendations come with implementation effort estimates we have actually paid.
- If you decide to engage us for Phase 2 implementation, the same engineers continue.

Aenix is the company behind **[Cozystack](/products/cozystack/)**, an open-source CNCF Project (Kubernetes Certified Distribution, OpenSSF Best Practices). The Cozystack stack is the foundation we typically recommend — but the assessment is **not a sales engagement for Cozystack**. If your context fits a different stack, the report says so.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PRICING / ENGAGEMENT -->

## Pricing and engagement scope

<div class="pricing-cards-2">

### 14-day (focused)
Single workstream emphasis (sovereignty, OR cost, OR developer experience). Single business unit / domain. Written report and executive readout.
**{{PRICING_14_DAY}}**

### 28-day (full)
All four workstreams in depth. Multi-BU stakeholder interviews. Vendor shortlisting for relevant components. PoC scoping. Written report, executive readout, and a Phase 2 implementation roadmap.
**{{PRICING_28_DAY}}**

</div>

Fixed-price. Single invoice. Mutual NDA at kickoff. No additional travel or expenses unless specifically scoped.

If a Phase 2 engagement follows, the assessment cost is credited against the implementation engagement (subject to scope).

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PROOF -->

## What we've assessed and built

{{< placeholder-logos >}}

We've run platform readiness assessments for service providers, regional cloud providers, financial-services organizations, telecom operators, and sovereign-cloud initiatives across the EU and Central Asia. Five to twenty assessments per year.

> {{< placeholder-quote >}}
> *— {{NAME_1}}, {{TITLE_1}}*

> {{< placeholder-quote >}}
> *— {{NAME_2}}, {{TITLE_2}}*

For named case studies see **[Customer stories](/case-studies/)** — request the protected versions on the discovery call where applicable.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->

## FAQ

**How is this different from a Big-4 cloud readiness assessment?**
Big-4 assessments are typically delivered by management consultants who hand off to a separate implementation team — and to a hyperscaler partner whose incentives are not aligned with yours. Our engineers do both the assessment and the implementation, and we are not commercially aligned with any hyperscaler. The bias of our recommendations is toward what we can stand behind technically and operate under your governance.

**Will Aenix pitch us Cozystack at the end?**
The report names the stack we'd recommend with reasoning. In ~80% of cases that's Cozystack. When it isn't, we say so. We won't deliver an assessment that ends "and the answer is Cozystack" if the work doesn't justify it — that would damage the reputation that makes the assessment work.

**Do you sign mutual NDAs?**
Yes — at kickoff. Customer interviews and proprietary architecture details stay confidential.

**What access do you actually need?**
Read-only on architecture docs, GitHub / GitLab orgs, public-cloud billing, observability dashboards. We do not need kubectl access to production. We do not need credentials to anything writable.

**What if our existing public-cloud commitments lock us in for 2 more years?**
The trajectory plan accounts for commitment-vehicle expirations. Repatriation cadence is sequenced so that workloads move as commitments lapse, not before.

**Can we run this engagement under government procurement (Kazakhstan, EU, etc.)?**
Yes. We accept RFI / RFP through standard government procurement channels. Discovery call covers the procedural fit.

**Does this work for an organization that's already chosen a stack?**
Yes — the workstreams change emphasis. If you've committed to KubeVirt + Cilium + LINSTOR + Talos for example, the assessment focuses on operational readiness, multi-tenancy model, regulator gap, and developer self-service rather than vendor selection.

**More questions?** See the **[methodology deep-dive on our blog](/blog/2026/05/cloud-readiness-assessment-14-day-methodology/)** or **[talk to us](#discovery)**.

<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Start with a 30-minute discovery call

Free. No prep needed. We confirm fit, agree on a focused scope, and tell you whether the 14-day or the 28-day variant matches your situation. If neither fits, we say so.

/contact/

Or read more:
- **[Cloud readiness assessment — 14-day methodology in detail](/blog/2026/05/cloud-readiness-assessment-14-day-methodology/)**
- **[Solutions overview — by trigger](/solutions/)**
- **[Cozystack — the platform we typically recommend](/products/cozystack/)**

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Aenix is the company behind Cozystack — a CNCF Project, Kubernetes Certified Distribution, OpenSSF Best Practices. We run platform readiness assessments and platform engineering programs for service providers, banks, and sovereign-cloud projects across the EU and Central Asia.*

<!-- /BLOCK 12 -->

<!--
SEO meta tags:
- title: "Platform Readiness Assessment — Cloud Sovereignty, Migration, and Cost in 14 Days | Aenix"
- description: "A 14-day cloud readiness assessment for sovereignty, migration, and cost posture. Three outcomes: time-to-environment, compliance-by-design, cost trajectory. Aenix engineers."
- og:image: 1200×630 — schedule pattern + 3-outcome icons
- canonical: this URL
- hreflang: en (default), de (when DE locale launches)

JSON-LD on page:
- WebPage / BreadcrumbList: Home → Services → Platform Readiness Assessment
- Service schema (schema.org/Service): name, provider (Aenix), serviceType ("Cloud readiness assessment"), areaServed (Worldwide / EU / Central Asia)
- FAQPage from BLOCK 10

Word count target: 900-1100. Actual: ~1100. On budget.

Article companion (long-form): ../article.md — methodology deep-dive at /blog/2026/05/cloud-readiness-assessment-14-day-methodology/
-->
