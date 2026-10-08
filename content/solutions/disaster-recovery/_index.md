---
title: "Disaster Recovery as a Service on a Sovereign Platform"
description: "Disaster recovery on a sovereign platform you operate: cross-DC synchronous replication, backups outside the cluster and RTO/RPO rehearsed in drills."
date: 2026-07-01
lastmod: 2026-07-01
page_type: "solution-landing"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "disaster recovery as a service"
secondary_keywords: ["cloud disaster recovery", "disaster recovery solutions", "business continuity"]
hreflang_de: "/de/loesungen/disaster-recovery/"
hreflang_en: "/solutions/disaster-recovery/"
related_pages:
  - /solutions/data-sovereignty/
  - /solutions/dora-compliance/
  - /products/private-cloud-platform/
  - /services/platform-readiness-assessment/
  - /case-studies/sovereign-public-cloud/
service:
  type: "Disaster Recovery as a Service"
  areaServed: ["EU", "DACH"]
  audience: "Financial Services, Healthcare, Regulated Enterprise"
direct_answer: |
  **Disaster recovery as a service (DRaaS) is a capability that replicates your workloads and data to a second site so you can recover after an outage, ransomware event, or data-centre loss. On a sovereign platform it means recovery infrastructure you operate and audit yourself, not a black-box hyperscaler service. Ænix designs and builds DR on Cozystack (a CNCF Sandbox project, Apache 2.0) as engineering work: synchronous cross-data-centre replication with LINSTOR/DRBD, geo-distributed etcd, and Velero backups to object storage outside the cluster, with Object Lock configured on that storage. Cozystack has no automated cross-site VM failover; VM recovery is a documented, rehearsed runbook. Recovery-time and recovery-point objectives are tested in drills and evidenced rather than asserted in a contract. It suits DORA- or NIS2-scoped organisations that must prove business continuity, not just claim it.**
quick_facts:
  - label: "What it is"
    value: "A recovery capability that replicates workloads and data to a second site so service can be restored after an outage or data loss."
  - label: "RTO / RPO"
    value: "Objectives are architected, tested in drills, and evidenced; synchronous replication targets near-zero RPO for the protected tier."
  - label: "Replication"
    value: "Synchronous cross-data-centre volume replication (LINSTOR/DRBD) plus geo-distributed etcd across three sites."
  - label: "Backups"
    value: "Velero backups to object storage outside the cluster they protect, with S3 Object Lock and versioning configured on that external storage."
  - label: "Failover"
    value: "No automated cross-site VM failover. Replicated storage keeps a copy in each site; bringing workloads back after a site loss is a rehearsed runbook."
  - label: "Cozystack licence"
    value: "Cozystack is open source under Apache 2.0 — no per-CPU licensing, full audit of the control plane."
  - label: "Regulatory fit"
    value: "Built to support DORA operational-resilience work (incl. Art. 12 backup and segregated restore) and NIS2 business-continuity measures (Art. 21) with evidence you own."
quick_facts_source: "[DORA Regulation (EU) 2022/2554, EUR-Lex](https://eur-lex.europa.eu/eli/reg/2022/2554/oj), [sovereign public cloud case study](/case-studies/sovereign-public-cloud/)"
faq:
  - q: "What is disaster recovery as a service (DRaaS)?"
    a: "DRaaS is a disaster-recovery capability that continuously replicates your workloads and data to a second site so you can restore service after an outage, ransomware attack, or data-centre loss. On a sovereign platform the recovery infrastructure is one you operate and audit yourself, rather than an opaque hyperscaler service you cannot inspect."
  - q: "What is the difference between RTO and RPO?"
    a: "Recovery-time objective (RTO) is how long you can take to restore service after an incident; recovery-point objective (RPO) is how much data you can afford to lose, measured in time. Synchronous cross-DC replication targets a near-zero RPO for the protected tier, while immutable backups and tested runbooks drive the RTO down to a defensible number."
  - q: "How does a sovereign platform protect against ransomware?"
    a: "Backups are written to object storage outside the cluster they protect, with S3 Object Lock and versioning configured on that storage, so an attacker who compromises the primary environment cannot alter or delete the recovery copies within the retention window. By default the backup bucket sits inside the cluster, so moving it out is part of the build."
  - q: "Does DRaaS help with DORA and NIS2 compliance?"
    a: "It supports that work. DORA (Regulation (EU) 2022/2554) requires financial entities to set, test and evidence recovery objectives (Arts. 11-12, including restores onto segregated systems under Art. 12(3)), and NIS2 Article 21 lists business continuity among the risk-management measures for essential and important entities. A self-operated DR platform produces drill records, incident post-mortems and residency evidence you own. The DORA evidence page lists what the platform does not provide by default."
  - q: "How do you prove the recovery target actually works?"
    a: "Through real drills, not paper plans. In the three-data-centre provider case the team regularly powers nodes off to test resilience, and a 20-hour storage incident during an upgrade was recovered with zero data loss. Recovery procedures are rehearsed on staging, then repeated on production, with a runbook for each scenario."
  - q: "What does a DR engagement with Ænix look like?"
    a: "The entry point is a Platform Readiness Assessment covering current RTO/RPO posture, replication topology, backup immutability, and drill process, delivered in 14 or 28 days at a fixed price. It produces a written report and an implementation roadmap; the build typically takes 3-12 months depending on scope."
---

**Business continuity is not a line in a vendor contract — it is an outcome you have to be able to prove. Disaster recovery as a service (DRaaS) on a sovereign, self-operated platform gives you cross-data-centre synchronous replication, backups isolated from the primary environment, and recovery that is rehearsed rather than assumed. Ænix builds and operates these platforms on [Cozystack](/products/cozystack/), so your recovery-time and recovery-point objectives are architecture you own and evidence you can hand to a regulator.**

> **Pairs with:** **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** for the regulated cloud foundation that DR sits on; **[DORA compliance](/solutions/dora-compliance/)** for the operational-resilience obligations DR helps you meet. Start with a **[Platform Readiness Assessment →](/services/platform-readiness-assessment/)**. Heads of infrastructure: see the [infrastructure guide](/for/head-of-infrastructure/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/case-studies/sovereign-public-cloud/">See the case study →</a>
</div>


---

## What does DRaaS actually have to guarantee?

Every disaster-recovery conversation reduces to two numbers, and most vendor pitches quietly avoid them.

- **Recovery-time objective (RTO)** — how long you are allowed to be down. This is a function of how fast you can bring the second site into service, not of how big your backup is.
- **Recovery-point objective (RPO)** — how much data you can afford to lose, expressed as time. Nightly backups imply an RPO of up to 24 hours; synchronous replication targets an RPO close to zero for the protected tier.

A credible DR capability commits to both numbers per workload tier and then *demonstrates* them in a drill. On a sovereign platform, the replication topology, the backup immutability, and the drill records are all things you hold and can inspect — you are not trusting a hyperscaler's opaque SLA to describe a failure mode you will never see documented.

---

## How synchronous cross-data-centre replication works

The protected tier of a sovereign DR platform is built on synchronous block replication, so a committed write exists in more than one data centre before the application is told it succeeded.

On the reference architecture, Cozystack runs a compute cluster geo-distributed across three data centres. Volumes are replicated synchronously with **LINSTOR/DRBD** at replication factor three — one replica per site — and **etcd**, the Kubernetes cluster state store, is geo-distributed across the same three sites. Because both the persistent data and the control-plane state keep a copy in each site, losing one data centre does not lose committed data. Bringing affected VMs and services back on the remaining sites is not automatic: it follows a documented, rehearsed runbook. This multi-site design is engineering work delivered in the build; it is not a default of a single-site Cozystack installation.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Primary data centre</b><div class="diagram__chips"><span>Committed writes</span></div></div>
<div class="diagram__conn">replicated synchronously by</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack / Ænix</b><div class="diagram__chips"><span>LINSTOR/DRBD</span><span>Geo-distributed etcd</span></div></div>
<div class="diagram__conn">across three data centres to</div>
<div class="diagram__node"><b>Secondary data centre</b><div class="diagram__chips"><span>One replica per site</span></div></div>
<div class="diagram__conn">recovered by</div>
<div class="diagram__node"><b>Rehearsed runbook</b><div class="diagram__chips"><span>Committed data kept</span></div></div>
</div>
</div>

This is standard, open, [CNCF](https://www.cncf.io/)-aligned Kubernetes infrastructure rather than proprietary DR appliances. The [Kubernetes storage model](https://kubernetes.io/docs/concepts/storage/) treats the replicated volumes as ordinary persistent volumes, so applications do not need bespoke DR integration to benefit from cross-site durability.

---

## Why immutable backups matter more than ever

Synchronous replication protects against hardware and site failure, but it faithfully replicates a ransomware encryption event too. That is why DR and backup are separate layers.

Platform- and tenant-level **Velero** backups capture Kubernetes objects and volume snapshots. In a DR build they are written to object storage **outside the cluster they protect**, with **S3 Object Lock and versioning** configured on that storage, so an attacker who has compromised the primary environment cannot alter or delete them within the retention window. (By default the backup bucket lives inside the cluster; moving it out is part of the build.) Volume encryption with LUKS is available opt-in per storage class.

The distinction matters for regulators: operational-resilience frameworks increasingly expect a recovery path that is provably isolated from the blast radius of the primary incident.

---

## Rehearsed recovery, not paper recovery

A DR plan that has never been exercised is a hypothesis. The platforms Ænix builds are drilled for real.

In the three-data-centre provider case, the client regularly powers nodes off to test resilience deliberately, which surfaces the non-obvious cascades a tabletop exercise never finds. Upgrades are rehearsed on staging on the record, then repeated on production; non-declarative commands are dropped in favour of GitOps; and each scenario has a ready runbook — DRBD recovery, cluster upgrade, storage failover. This is what converts an RTO from a marketing figure into a number you can defend.

---

## Evidence: a 20-hour incident, zero data loss

The clearest proof of a DR posture is how it behaves on the worst day. In our anonymized **[sovereign public cloud case study](/case-studies/sovereign-public-cloud/)**, a multi-tenant provider hit a cascading storage failure during a major upgrade — a DRBD race, lost patches at an intermediate step, and a breaking change in the network layer. The team worked the incident for roughly **20 hours and recovered the cloud with zero data loss**, then pushed the underlying bugs upstream into LINSTOR and its CSI driver. The same three-DC replication and geo-distributed etcd pattern carried a real production cloud through a real incident.

For DORA-scoped entities specifically, this is the shape of evidence [DORA (Regulation (EU) 2022/2554)](https://eur-lex.europa.eu/eli/reg/2022/2554/oj) asks for under Articles 11-12: tested recovery, documented procedures, and objectives you can show rather than assert. What the platform does not provide by default is listed on the [DORA evidence page](/compliance/dora/).

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Not every workload needs the same recovery tier

Treating every system as mission-critical is how DR budgets explode and drills become unmanageable. A working DR posture tiers the estate first.

- **Tier 0 — synchronous.** Systems where an RPO above near-zero is unacceptable — core banking ledgers, order books, patient records. These sit on synchronous cross-DC replication and are the reason the three-DC topology exists.
- **Tier 1 — asynchronous plus frequent backups.** Important but tolerant of minutes of data loss. Frequent backups to locked external storage and asynchronous replication keep the cost proportionate to the risk.
- **Tier 2 — backup and rebuild.** Stateless or easily reconstructed services recovered from backups and infrastructure-as-code, with an RTO measured in hours rather than seconds.

Tiering is the first output of the assessment, because it decides where the expensive synchronous capacity goes and where a cheaper recovery path is honestly sufficient.

</div>
</div>

---

## How Ænix engages on disaster recovery

The engagement runs as a **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with DR-weighted workstreams: current RTO/RPO posture per workload tier, replication and geo-topology design, backup immutability and ransomware isolation, and drill-process maturity. Output is a written report plus a Phase 2 implementation roadmap. Where the DR platform doubles as the production platform — the usual case — it pairs naturally with **[data sovereignty](/solutions/data-sovereignty/)** and DORA-alignment work, so continuity, residency, and compliance are engineered together rather than bolted on.


---

*Ænix created [Cozystack](https://cozystack.io) — a CNCF Sandbox project (Incubation application in due diligence), Apache 2.0 — and co-maintains it. Ænix sells three platforms on that engine — Public Cloud, Private Cloud and AI. We design disaster-recovery and business-continuity architectures for regulated organisations.*
