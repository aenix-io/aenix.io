---
title: "Reverse cloud migration — a practical playbook for leaving public cloud in 2026"
description: "Cloud repatriation is no longer a contrarian position. The Broadcom Private Cloud Outlook 2025 reports that 69% of organizations are evaluating repatriation..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["DORA", "NIS2", "Sovereignty", "Cloud Repatriation", "AI/ML", "GPU"]
language: "en"
companion_landing: "/solutions/cloud-repatriation/"
quiz:
  title: "Test yourself: Cloud repatriation playbook"
  questions:
    - q: "According to the Broadcom Private Cloud Outlook 2025 cited in the article, what share of organizations are evaluating repatriation?"
      options:
        - { text: "23%", correct: false }
        - { text: "53%", correct: false }
        - { text: "69%", correct: true }
        - { text: "92%", correct: false }
      explanation: "69% of organizations are evaluating repatriation according to Broadcom 2025. 53% now prioritize private cloud for new workloads — those are two different stats from the same report."
    - q: "In the workload classification step, how many labels can a workload receive?"
      options:
        - { text: "Four labels with a reassess bucket", correct: true }
        - { text: "Two — repatriate or stay in cloud", correct: false }
        - { text: "Six fine-grained category buckets", correct: false }
      explanation: "Step 2 of the playbook assigns each workload one of four labels: repatriate now / repatriate later / stay in cloud / reassess. The \"reassess\" bucket exists because some workloads need PoC or instrumentation before a credible decision can be made."
    - q: "For a typical 100-VM repatriation, how long does end-to-end elapsed time usually take from \"we should look at this\" to \"we are running on the destination platform\"?"
      options:
        - { text: "4–8 weeks", correct: false }
        - { text: "8–14 months", correct: true }
        - { text: "24–36 months", correct: false }
      explanation: "For an org with ~100 VMs and a moderate cloud bill: 2–4 weeks assessment, 2–4 months destination platform build, 6–18 months workload migration in cohorts. Total elapsed: 8–14 months."
    - q: "Which of these is NOT on the article's list of when repatriation is the wrong answer?"
      options:
        - { text: "You have a small IT team running a handful of services", correct: false }
        - { text: "Your portfolio is dominated by hyperscaler-proprietary services with no realistic alternatives", correct: false }
        - { text: "You are subject to DORA Article 28 supplier-concentration requirements", correct: true }
        - { text: "You are at year 1 of a 5-year commitment with steep penalties", correct: false }
      explanation: "DORA Article 28 is actually a trigger to consider repatriation, not a reason to avoid it. The wrong-answer list covers small teams, proprietary-dependency-heavy portfolios, fundamentally elastic businesses, stretched platform teams, and early-stage commitment lockups."
    - q: "What is \"Pitfall 1\" — the most strategic pitfall called out in the playbook?"
      options:
        - { text: "Buying the wrong GPU SKU class", correct: false }
        - { text: "Treating it as a cost cut, not platform work", correct: true }
        - { text: "Failing to negotiate exit-fee terms", correct: false }
        - { text: "Choosing the wrong cutover season", correct: false }
      explanation: "A repatriation measured purely on cost reduction tends to under-invest in the platform work that makes the cost reduction sustainable. Two years in, the team has saved money but lost velocity — and that triggers a partial reverse-repatriation back into the hyperscaler."
---

**Cloud repatriation is no longer a contrarian position. The Broadcom Private Cloud Outlook 2025 reports that 69% of organizations are evaluating repatriation and 53% now prioritize private cloud for new workloads. This is the practical playbook for the reverse cloud migration — what to evaluate, what to build, what to move first, and where most teams get it wrong. It's the long-form companion to our [cloud repatriation services page](/solutions/cloud-repatriation/), where the engagement that runs this work is described.**

Most coverage of cloud repatriation is either ideological ("public cloud was always too expensive") or vendor-led ("buy our private-cloud appliance"). Neither helps the platform engineer or infrastructure lead who has to translate a board-level decision into running systems. The work below is what we actually do during an Aenix repatriation engagement.

## Why repatriation is happening now

Three independent pressures hit the same architectures at the same time:

**Cost cliff after the renewal cycle.** Public-cloud spend that looked acceptable in 2020-2022 has compounded for several years. Renewal cycles are now meeting boards that did not approve the trajectory. Reservation under-utilization, egress costs, and "we'll right-size later" technical debt are all visible.

**Regulatory pressure.** DORA in force since January 2025; NIS2 transposition across EU member states; sectoral rules sharpening in financial services, public sector, healthcare; and explicit sovereign-cloud mandates in Kazakhstan, France, Germany, and other markets. Many critical-function workloads can no longer comfortably run in a single hyperscaler region under a US-headquartered provider.

**AI and inference economics.** GenAI training and inference at scale have egress, GPU-pricing, and data-residency profiles that hyperscalers were not designed to optimize. Some workloads make sense in hyperscaler GPU; many do not.

The combination has shifted repatriation from "what some hipsters do" to a normal part of cloud strategy. Done well, it produces 30-60% cost reduction on the workloads that move, plus regulator-aligned architecture. Done badly, it produces an under-engineered on-prem environment that combines the worst of both worlds.

## Repatriation isn't all-or-nothing

The single most common mistake at the strategy level is treating repatriation as a binary decision. It almost never is.

A typical repatriated estate, after a year of work, looks like:

- **30-50% on-prem or private cloud** — steady-state workloads, regulated workloads, expensive workloads, latency-critical workloads
- **30-50% remaining in public cloud** — elastic / spike workloads, hyperscaler-proprietary services with no realistic alternative, latency-sensitive customer-facing workloads where hyperscaler edge is decisive, very small workloads where the operational cost of repatriation exceeds the savings
- **10-20% in transition** — workloads being moved, in PoC, or under reassessment

The workstream that classifies workloads — repatriate now / repatriate later / keep in cloud — is the most consequential single deliverable of a repatriation engagement.

## Five-step playbook

Here is the sequence of work in a structured reverse cloud migration. Each step has a defined deliverable and a defined precondition for moving to the next step.

### Step 1 — honest TCO modelling

Most organizations do not actually know their real public-cloud TCO. The bill is one number; the real cost includes:

- Egress charges, especially for backup, observability, and cross-region traffic
- Reservation / commitment under-utilization
- Idle and over-sized resources never reclaimed
- Hyperscaler-managed services priced at a premium over self-managed equivalents
- Hidden cost of vendor-lock-in: switching cost when something fails
- Cost of platform-engineering capacity dedicated to managing public-cloud-specific complexity

A honest TCO model captures all of these and compares them to a realistic destination-cost model that includes:

- Hardware acquisition and refresh cost over 5 years
- Datacenter or colocation cost
- Network bandwidth, including egress between sites
- Storage tiering and growth
- Backup and DR infrastructure
- Identity, observability, and platform tooling
- Platform-engineering capacity needed to operate the destination
- Software licenses where applicable

The honest model usually shows on-prem economics 30-60% better for steady-state workloads, and 0-20% worse for highly elastic workloads. The interesting question is which workloads are which.

**Deliverable:** TCO model in a spreadsheet your CFO can audit. Public-cloud-current-state vs. destination-target-state, sensitive to occupancy assumptions.

### Step 2 — workload classification

Every workload gets one of four labels:

- **Repatriate now** — clear cost or regulatory case, low migration friction, no hyperscaler-only dependencies.
- **Repatriate later** — case is clear but commitments not yet expired, or destination architecture not ready.
- **Stay in cloud** — workload is genuinely better-suited to hyperscaler economics or hyperscaler-only services.
- **Reassess** — not enough data to decide; needs PoC or instrumentation.

The classification considers:

- Compute pattern (steady vs. spiky)
- Data gravity (size, growth rate, regulatory class)
- Hyperscaler-proprietary dependencies
- Network adjacency (does it need to be next to other workloads?)
- Latency sensitivity
- Available commitment / reservation expiration
- Migration effort estimate

**Deliverable:** workload table with classification, ranked by net repatriation ROI. The top-10 list usually accounts for 60-80% of the cost case.

### Step 3 — destination architecture

This is where most repatriations go wrong: treating "the destination" as "an on-prem cluster" without engineering the platform underneath.

A real destination architecture has answers for all of:

- **Compute:** virtualization platform (KubeVirt, KVM/libvirt, Hyper-V, VMware), hardware specs, lifecycle management, live migration, snapshots
- **Storage:** primary storage (LINSTOR / Ceph / SAN / vendor HCI), backup, DR, snapshots, replication topology
- **Network:** datacenter fabric, software-defined networking (Cilium, NSX equivalent), load balancing, BGP / routing, edge connectivity to remaining cloud workloads
- **Identity:** how IAM works, including federation with workforce identity
- **Observability:** metrics (VictoriaMetrics, Prometheus), logs (VictoriaLogs, Loki), tracing
- **Backup and DR:** Velero, restic, cross-site replication, RPO/RTO targets
- **Platform-engineering function:** the team that operates this; size, structure, on-call model
- **Self-service surface:** how product teams provision environments without filing tickets

A Kubernetes-native architecture (KubeVirt + Cilium + LINSTOR + Velero, or equivalent) is increasingly the default for repatriation projects in 2026 because it gives a coherent answer to all of the above without integrating ten unrelated vendors. **[Cozystack](/products/cozystack/)** is one such platform; OpenStack, OpenShift Virtualization, and several vendor-led options are alternatives.

**Deliverable:** target architecture document. Diagram + named components + sizing + cost.

### Step 4 — cutover sequencing

The cutover plan respects three constraints:

1. **Commitment expirations.** Workloads move when AWS RI / Azure RI / Savings Plan expirations open the economic case. Moving early into the lockup costs money.
2. **Data gravity.** Workloads that share data move together, or with explicit cross-cloud data flow during transition.
3. **Risk concentration.** No single cohort moves more than your operational capacity to manage rollback.

A typical 100-VM repatriation runs as 4-8 cohorts over 6-12 months. Each cohort is parallel-run in cloud and on-prem until validated by the application owner.

**Deliverable:** cutover plan with cohort definitions, dates, dependencies, rollback paths, and signoff criteria.

### Step 5 — operate the platform

The post-repatriation steady state is where the strategic gain materializes — *if* the platform was actually engineered. The post-repatriation team needs:

- Runbooks for the platform stack
- Monitoring and alerting that catches issues before users do
- Self-service paths for product teams (golden paths, IaC-based environment provisioning, GitOps-based deployment)
- A platform-engineering function with the right headcount to maintain pace

The most common failure mode at this stage is a successful migration followed by under-staffing of the platform team. Repatriation with a 5-person platform team responsible for everything that AWS used to handle is not sustainable.

**Deliverable:** operating model, headcount plan, runbook library, and a 12-month platform-engineering roadmap.

## Common pitfalls

Beyond "TCO is wishful" and "destination is left for later," four more pitfalls recur:

### Pitfall 1 — treating repatriation as a cost project rather than a platform project

Repatriation that's measured purely on cost reduction tends to deprioritize the platform work that makes the cost reduction sustainable. Two years in, the team has saved money but lost velocity, and the result is a partial reverse-repatriation back into hyperscalers.

The fix: repatriation goals include *platform engineering maturity* alongside cost. A successful repatriation produces a self-service platform whose time-to-environment is at least as good as what you had on hyperscalers — usually better.

### Pitfall 2 — underestimating data gravity

Moving 50 TB of production data is not a weekend job. Cross-network movement, cutover windows, dual-write periods, rollback paths, and backup-during-migration all need explicit engineering. Teams that don't plan for this end up in a multi-week emergency in the middle of the migration.

### Pitfall 3 — buying a vendor-led "repatriation appliance"

Several vendors sell "private cloud in a box" as a repatriation answer. These work for a narrow class of customers but rebuild the lock-in problem with a different vendor. The vendor's roadmap becomes your roadmap; the vendor's support availability becomes your operational ceiling. Open-source platforms (Cozystack, OpenStack, OpenShift) avoid this trap.

### Pitfall 4 — ignoring the human side

Platform-team morale, product-team relationships, and internal communications all shift during a repatriation. Engineers who built deep AWS skills may not see private cloud as a career step. Product teams accustomed to AWS Console may push back against new self-service paths. A repatriation program that doesn't account for the human transition stalls in month 6.

## When NOT to repatriate

Repatriation is the wrong answer when:

- You have a small IT team running a handful of services. Public cloud's operational simplicity is genuinely better than what you'd build.
- Your workload portfolio is dominated by hyperscaler-proprietary services (e.g., heavy use of AWS Lambda + DynamoDB + Kinesis with no realistic alternatives).
- Your business is fundamentally elastic — traffic patterns where 10× spike capacity is needed for hours per day. Hyperscaler economics are good for this.
- Your platform-engineering capacity is already stretched beyond capacity. Adding repatriation to an under-resourced team makes both worse.
- Your renewal cycle is at year 1 of a 5-year commitment with steep penalties. Wait for commitment expirations.

A good repatriation engagement is honest about these cases. The Aenix engagement specifically does not push repatriation when staying in cloud is the right answer.

## What about hybrid?

Most repatriated estates end up hybrid — a useful term, often vague in practice. There are three coherent patterns:

- **Steady-state on-prem, elastic in cloud.** Predictable workloads run on private platform; spike capacity overflows to cloud. Operationally complex; usually worth it for workloads with strong elastic patterns.
- **Critical on-prem, non-critical in cloud.** Regulated and core workloads on private cloud; auxiliary workloads (analytics, internal tooling, dev/test) in public cloud. Operationally simpler; common for financial-services repatriations.
- **Geographic split.** EU workloads on-prem in EU; non-EU workloads in regional public cloud. Driven by sovereignty rather than cost.

The hybrid pattern that fits depends on the trigger that drove repatriation — cost, regulator, or sovereignty.

## How long does this take?

A typical repatriation, end-to-end:

- **2-4 weeks:** assessment phase (Aenix Platform Readiness Assessment with cost-and-cloud-spend workstream emphasis).
- **2-4 months:** destination platform build. Greenfield infrastructure, base services, observability, identity, IaC and GitOps tooling, runbooks.
- **6-18 months:** workload migration in cohorts. Earliest cohorts move quickly; later cohorts respect commitment ladders.
- **Ongoing:** platform operation and continuous optimization. The post-repatriation platform is a long-term asset that compounds value.

For an organization with 100 VMs and a moderate cloud bill, total elapsed time from "we should look at this" to "we are running on the destination platform" is 8-14 months.

## Where to start

If repatriation is on the table for your organization, the structured next step is a focused assessment. The output is honest enough to support a board-level decision either way: repatriate (with a plan), don't repatriate (with the reasons), or selective repatriation (with the workload list).

Aenix runs this as a 14- or 28-day **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with the cost-and-cloud-spend workstream emphasized. See the **[cloud repatriation services page](/solutions/cloud-repatriation/)** for the engagement details.

---

## Want to dig deeper?

- **[Cloud repatriation services page](/solutions/cloud-repatriation/)** — the engagement details and pricing
- **[Cloud cost optimization](/solutions/cloud-cost-optimization/)** — adjacent FinOps trigger
- **[Data sovereignty](/solutions/data-sovereignty/)** — regulatory side of the same shift
- **[Cozystack](/products/cozystack/)** — the platform we typically recommend as repatriation destination

---

*Aenix is the company behind Cozystack — a CNCF Project, Kubernetes Certified Distribution, OpenSSF Best Practices. We run cloud-repatriation engagements and platform engineering programs across the EU, DACH, and Central Asia.*

<!--
SEO meta description (≤155 chars):
"Reverse cloud migration playbook for 2026: honest TCO, workload ranking, destination architecture, cutover sequencing, and 4 common pitfalls."

OG image: 1200×630 — reverse-arrow visual + workload-classification card

Slug: /blog/2026/05/reverse-cloud-migration-playbook/

Hreflang setup (when DE locale launches):
- en: /blog/2026/05/reverse-cloud-migration-playbook/
- de: /de/blog/2026/05/reverse-cloud-migration-playbook/
- x-default: en

Word count: 2500-3500. Actual: ~3000.

Keyword cannibalization check:
- This article: "reverse cloud migration" parent
- Cloud repatriation landing: "cloud repatriation" parent — DIFFERENT
- DORA landing: "dora compliance" — DIFFERENT
- DORA article: "dora compliance checklist" — DIFFERENT
- Platform readiness assessment landing: "cloud readiness assessment" — DIFFERENT
- Platform readiness assessment article: "cloud assessment framework" — DIFFERENT
- VMware alternative landing/article: "vmware alternative" / "vmware replacement" — DIFFERENT

No conflicts.
-->
