---
title: "Cloud Readiness Assessment — what 14 days actually cover (2026 methodology)"
description: "This is the long-form companion to our Platform Readiness Assessment landing page. It walks through the methodology in detail — workstreams, deliverables,..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["DORA", "NIS2", "Nutanix", "Kubernetes", "Sovereignty", "Cloud Repatriation"]
language: "en"
companion_landing: "/services/platform-readiness-assessment/"
---

**This is the long-form companion to our [Platform Readiness Assessment landing page](/services/platform-readiness-assessment/). It walks through the methodology in detail — workstreams, deliverables, examples of findings, common pitfalls — for technical leaders evaluating whether a 14-day or 28-day cloud readiness assessment is the right next step.**

Most cloud readiness assessments on the market still come from the early-2010s mold: a hyperscaler-aligned consultancy maps your workloads against a reference architecture and produces a migration plan to that hyperscaler. The output reads like a template because it is one.

That worked when "cloud strategy" meant "decide how much to put in AWS / Azure / GCP." In 2026 the question is different. The triggers that bring teams to an assessment now look like this:

- **Regulator pressure** — DORA in force since January 2025, NIS2 in transposition across the EU, sectoral data-residency rules sharpening in financial services, public sector, and healthcare.
- **AI on sensitive data** — GenAI and inference workloads where the data class makes hyperscaler endpoints a non-starter. Nutanix's 2025 Financial Services ECI report found 62% of finsec firms are already hiring GenAI specialists, while 92% rate their existing infrastructure as not ready for cloud-native or container workloads.
- **Cost cliff and repatriation** — Broadcom's 2025 Private Cloud Outlook found 53% of organizations now prioritize private cloud for new workloads and 69% are evaluating repatriation. The LSEG Global Cloud Survey 2025 reported that 84% of financial services firms had adjusted their cloud strategy specifically because of regulatory developments.
- **Developer self-service breakdown** — environments that take weeks to provision, IAM and networking done by hand, observability fragmented across vendors, multiple Kubernetes distributions nobody owns.

A 2026-relevant cloud readiness assessment has to answer all four — without picking a hyperscaler answer first. The methodology below is what we run at Aenix.

## Why we structure it as four parallel workstreams

Each of the four buyer pressures involves a different set of artifacts, stakeholders, and decisions. Running them sequentially turns a 14-day engagement into a 12-week one. Running them in parallel — with one engineer owning each workstream and daily async cross-talk — produces a unified picture without missing any of the four lenses.

This is not a Big-4 model. The Big-4 cloud readiness assessment optimizes for stakeholder coverage and presentation polish. Our model optimizes for technical depth and decision velocity. Different goals, different methodology.

Here are the four workstreams in detail.

### Workstream 1: Inventory and platform maturity

**What we inspect:**

- Workload inventory: VMs (count, OS mix, vCPU / RAM / disk profiles, criticality tier), containerized apps (orchestration platform, CI/CD origin, statefulness), managed services (databases, queues, caches), legacy systems still on bare metal.
- Environment topology: dev / staging / prod / DR — counts, isolation model, data flows.
- Provisioning velocity: time from "team requests an environment" to "environment is reachable, monitored, and secured." We measure this for the last 5-10 actual environment requests, not from documentation.
- Infrastructure-as-Code coverage: percentage of provisioning that's declarative vs. ticket-driven. Drift detection. State management.
- GitOps maturity: whether platform changes go through pull requests reviewed by humans, or land via direct kubectl / cloud-console operations.
- CI/CD ownership: who owns the pipeline definitions? How many distinct CI tools are in production use? Where does secrets management actually live?

**What we produce:**

- Current-state architecture map: a single diagram covering compute, storage, network, identity, observability, and CI/CD across the environments you operate. Annotated with ownership and change cadence.
- Maturity score across eight dimensions: workload portability, IaC coverage, GitOps adoption, observability unification, secrets handling, identity model, multi-tenancy, and disaster-recovery posture.
- Top five operational risks identified and prioritized.

**Common findings at this stage:**

- Provisioning time of 2-5 weeks for "standard" environments — usually because IAM, networking, and observability are owned by three different teams with manual handoffs.
- 30-60% of infrastructure is not in IaC. The IaC that exists is not under drift detection.
- Two or three Kubernetes distributions in production simultaneously, accumulated through team-by-team adoption, with no single platform team.

### Workstream 2: Sovereignty and regulator gap

**What we inspect:**

- Regulatory applicability map: which frameworks actually bind you? DORA (financial services in scope from January 2025), NIS2 (transposed across EU member states with sectoral coverage), GDPR (personal data), sectoral rules (banking secrecy, healthcare, public sector, telco), local data-residency mandates.
- Data residency mapping: where each data class actually lives today, including backups, observability data, and CI/CD artifacts. Data classes are surprisingly often not formally defined — that's a finding.
- Encryption posture: at rest, in transit, in use. Key management ownership. HSM usage where applicable.
- Supplier-risk concentration: how many critical ICT services depend on a single vendor or jurisdiction. DORA Article 28 concentration risk in particular.
- Audit trail: whether you can answer "who did what to which system, when, with what change ticket" within 30 minutes for an arbitrary production change.

**What we produce:**

- Compliance-by-design map: a control-level table showing, for each applicable framework, which controls your current architecture meets, which are partially met, and which are gaps. For each gap: what an architecture-level fix looks like, which workloads are affected, estimated effort.
- Supplier-risk concentration table.
- A prioritized remediation list with three categories: must-fix-before-renewal, fix-during-platform-build, and policy-only-fix.

**Common findings:**

- Data residency is enforced at storage layer but not at backup or observability layer. SaaS observability tools are quietly exporting log data outside the regulator's perimeter.
- DORA Article 28 supplier concentration risk concentrated in a single hyperscaler region.
- Audit trail coverage is good for production but weak for shared platform services — "who promoted that pipeline" is unanswerable.

### Workstream 3: Cost and cloud-spend posture

**What we inspect:**

- Public cloud bill, last 12 months, broken down by account, service, and tag.
- Commitment / reservation utilization. Underutilized commitments. Expiration ladder.
- Egress cost: where it concentrates. Whether cross-cloud or cross-region traffic is structural or accidental.
- Repatriation feasibility per workload: hardware sizing, performance constraints, data-gravity friction.
- FinOps maturity: tagging discipline, chargeback / showback, cost anomaly detection, FinOps owner.

**What we produce:**

- Cost trajectory: current spend → 12-month target with caps. Sequenced repatriation plan that respects existing commitment expiration ladders.
- Repatriation candidate ranking: workloads ranked by ROI (savings vs. migration effort), with confidence levels.
- FinOps owner identification: if there isn't one, the report names the seat that should be created.

**Common findings:**

- 15-35% of public-cloud spend is structurally repatriable in 6-12 months without performance regression.
- Egress cost concentrated in specific data flows that were never architected — they emerged from team-by-team feature work.
- Reservation discount realization is below 60% because the team that buys reservations isn't the team that operates workloads.

### Workstream 4: Developer self-service and platform engineering

**What we inspect:**

- Time-to-environment: measured, not estimated.
- Provisioning friction points: which 3-5 specific tickets dominate the path from "team needs X" to "team has X." Often these are concentrated in IAM, network connectivity to legacy systems, observability onboarding, and approval chains.
- Golden-path coverage: how much of typical product-team work is covered by an opinionated, self-service path versus by ad-hoc tickets to platform engineers.
- Internal documentation: whether the documented path matches the actual path, or whether there's a substantial oral tradition.
- Platform-team capacity: headcount, hiring plan, ratio of platform engineers to product engineers, whether platform work is distinguished from on-call.

**What we produce:**

- Time-to-environment baseline → target metric, with a delivery plan that closes the gap.
- Golden-path proposal: which 3-5 self-service paths to build first, in what sequence.
- Platform-team RACI: who owns what, who consults, who gets informed. Often the most uncomfortable part of the readout.

**Common findings:**

- Time-to-environment of 2-6 weeks for what should be a 30-minute self-service action.
- Platform team has effectively absorbed all on-call duties, leaving no capacity for golden-path work — a self-perpetuating problem.
- Three or more "internal developer platforms" exist informally, owned by different teams, all incomplete.

## How the 14 days are sequenced

We run the engagement against a fixed calendar so that scheduling, async updates, and stakeholder availability stay predictable.

- **Day 0 — Discovery call (30 min, free).** Confirm fit, narrow scope, identify sponsor and four workstream owners on your side. We do not start without these named.
- **Day 1 — Kickoff workshop (90 min).** Mutually-agreed objectives. Access to artifacts: architecture documentation, GitHub / GitLab orgs, observability dashboards, public-cloud billing read-only, regulator scope statements where applicable. We sign mutual NDAs at kickoff.
- **Days 2-9 — Parallel workstream analysis.** Four engineers run the four workstreams. Daily async updates posted to a shared channel. Three short interviews per workstream with named owners on your side — usually 30 minutes each, scheduled by your sponsor.
- **Day 10 — Findings checkpoint (60 min).** We walk through preliminary findings. Your team corrects, sharpens, or contests them. We adjust before the final report. This is where most of the report's real-world accuracy comes from.
- **Days 11-13 — Report drafting.** Four workstream sections, three outcome sections, executive summary, prioritized remediation. Internal review across our team for consistency.
- **Day 14 — Executive readout (60-90 min).** Final report handed over. Q&A with sponsor and selected stakeholders. Roadmap discussion: what would Phase 2 look like.

The 28-day variant adds vendor-shortlisting workshops where applicable, proof-of-concept scoping for repatriation candidates, and stakeholder interviews across two more business units.

## What the final report contains

A typical 14-day report runs 30-50 pages, structured as:

1. Executive summary (3-4 pages, decision-grade)
2. Workstream 1: Inventory and platform maturity (5-8 pages)
3. Workstream 2: Sovereignty and regulator gap (5-8 pages)
4. Workstream 3: Cost and cloud-spend posture (5-8 pages)
5. Workstream 4: Developer self-service and platform engineering (5-8 pages)
6. Three outcomes: time-to-environment, compliance-by-design map, cost trajectory (3-5 pages each)
7. Prioritized remediation roadmap with effort estimates and sequencing (3-5 pages)
8. Phase 2 implementation scoping options (2-3 pages)

The report is delivered as a versioned PDF, plus a stripped-back executive deck (10-15 slides) for board / sponsor distribution.

## Pitfalls we've learned to avoid

A few things we tell every customer at kickoff:

- **Pre-existing answers contaminate the assessment.** If your sponsor enters the engagement having already decided "we're moving everything to Azure" or "we're going on-prem with Cozystack" — the report will be discounted internally as confirmation. We push back on pre-decided answers in Day 0.
- **Assessment of an architecture you've just bought is rarely useful.** If you're 3 months into a multi-year hyperscaler commitment, you don't need an assessment to find out the commitment was over-sized. You need a Phase 2 program to operate within it.
- **Skipping the executive readout is the most expensive saving you can make.** Reports that aren't read by the sponsor become shelf-ware. The 60-90 minute readout is structurally where the report becomes a decision.
- **Don't bundle the assessment with vendor selection.** If we're scoring vendors before the assessment is complete, the score reflects the architecture we'd already biased toward. Vendor shortlisting belongs in the 28-day variant after architecture is settled.

## How this differs from Big-4 cloud readiness assessments

A few specific differences worth naming:

- **The deliverer.** Big-4 cloud readiness assessments are typically delivered by management consultants and handed off to a separate implementation team — and to a hyperscaler partner whose incentives shape the recommendation. Our engineers do both the assessment and the implementation, and we are not commercially aligned with any hyperscaler. The bias of our recommendations is toward what we can stand behind technically and operate under your governance.
- **Decision velocity.** A Big-4 assessment of similar scope typically runs 6-12 weeks. Ours runs 2 or 4. The difference is parallelism, fixed scope, and engineers writing the report rather than reviewing what analysts wrote.
- **Output style.** A Big-4 deliverable optimizes for slide-grade presentation polish. Ours optimizes for technical reproducibility — every recommendation has an effort estimate, every diagram is reproducible from underlying artifacts, and every claim is traceable to a specific artifact we inspected.
- **Stack neutrality with a known recommendation.** We have a stack we believe in (Cozystack, KubeVirt, Cilium, LINSTOR, Talos, Flux) and we recommend it when the work fits. When it doesn't fit, the report says so. We will not deliver an assessment that ends "and the answer is Cozystack" if the work doesn't justify it.

## When to start the assessment

The assessment is a poor fit when:

- You don't yet know whether you have a sovereignty / cost / developer-experience problem at all. (Discovery call addresses this — for free.)
- You've just signed a multi-year hyperscaler commitment and the question is not "should we?" but "how do we operate within it."
- You have a 5-person IT team and one or two systems. You don't need an assessment; you need a senior architect for two days.

It's a strong fit when:

- A specific regulator pressure has a deadline (DORA Article 28 supplier-risk submission, NIS2 transposition deadline in your jurisdiction, sectoral audit cycle).
- A board-level cost decision is upcoming and the FinOps trajectory needs a defensible plan.
- A new platform engineering function is being stood up and needs an external baseline before requesting headcount.
- An AI / data residency project is blocked at architecture review and needs an unbundling of the regulatory and technical questions.

---

## Want the short version?

If you're evaluating an Aenix Platform Readiness Assessment specifically, the **[services landing page](/services/platform-readiness-assessment/)** has the same structure in a 5-minute read with pricing and a discovery-call form.

If your trigger is a specific regulator or cost pressure, the dedicated solutions pages go deeper:

- **[Data sovereignty](/solutions/data-sovereignty/)** — DORA, NIS2, GDPR, sectoral
- **[DORA compliance](/solutions/dora-compliance/)** — financial services
- **[Cloud repatriation](/solutions/cloud-repatriation/)** — exit strategy from public cloud
- **[Sovereign AI](/solutions/sovereign-ai/)** — GenAI on sensitive data
- **[Cloud cost optimization](/solutions/cloud-cost-optimization/)** — predictable spend

---

*Aenix runs platform readiness assessments and platform engineering programs across the EU and Central Asia. We are the company behind Cozystack, a CNCF Project, Kubernetes Certified Distribution.*

<!--
SEO meta description (≤155 chars):
"Cloud readiness assessment methodology — 14 days, 4 workstreams, 3 outcomes. What's actually inspected, what the report contains, common findings."

OG image: 1200×630 — methodology timeline visual

Slug: /blog/2026/05/cloud-readiness-assessment-14-day-methodology/

Hreflang setup (when DE locale launches):
- en: /blog/2026/05/cloud-readiness-assessment-14-day-methodology/
- de: /de/blog/2026/05/cloud-readiness-assessment-methodik/
- x-default: en

Internal-link strategy:
- Landing → article: "see methodology deep-dive on our blog"
- Article → landing: "Want the short version? Services landing page" (footer)
- No canonical between them.

Word count target: 2500-3500. Actual: ~3300. On target.
-->
