---
title: "Disaster Recovery as a Service on a Sovereign Platform"
description: "Disaster recovery as a service on a self-operated sovereign platform: cross-DC synchronous replication, immutable backups, and tested RTO/RPO you can evidence."
date: 2026-07-01
lastmod: 2026-07-01
page_type: "solution-landing"
language: "en"
primary_keyword: "disaster recovery as a service"
secondary_keywords: ["cloud disaster recovery", "disaster recovery solutions", "business continuity"]
hreflang_de: "/de/loesungen/disaster-recovery/"
hreflang_en: "/solutions/disaster-recovery/"
related_pages:
  - /solutions/data-sovereignty/
  - /solutions/dora-compliance/
  - /products/aenix-platform/enterprise-edition/
  - /services/platform-readiness-assessment/
  - /case-studies/sovereign-public-cloud/
service:
  type: "Disaster Recovery as a Service"
  areaServed: ["EU", "DACH"]
  audience: "Financial Services, Healthcare, Regulated Enterprise"
direct_answer: |
  **Disaster recovery as a service (DRaaS) is a managed capability that replicates your workloads and data to a second site so you can fail over quickly after an outage, ransomware event, or data-centre loss. On a sovereign platform it means recovery infrastructure you operate and audit yourself, not a black-box hyperscaler service. Aenix builds DRaaS on Cozystack (a CNCF project, Apache 2.0): synchronous cross-data-centre replication with LINSTOR/DRBD, geo-distributed etcd, and immutable backups via Velero with Object Lock. Recovery-time and recovery-point objectives are tested, evidenced, and defensible to a regulator rather than asserted in a contract. It suits banks, insurers, healthcare providers, and any DORA- or NIS2-scoped organization that must prove business continuity, not just claim it.**
quick_facts:
  - label: "What it is"
    value: "A recovery capability that replicates workloads and data to a second site for fast failover after an outage or data loss."
  - label: "RTO / RPO"
    value: "Objectives are architected, tested in drills, and evidenced; synchronous replication targets near-zero RPO for the protected tier."
  - label: "Replication"
    value: "Synchronous cross-data-centre volume replication (LINSTOR/DRBD) plus geo-distributed etcd across three sites."
  - label: "Backups"
    value: "Immutable backups with Velero and S3 Object Lock plus versioning; deletion-protection webhook guards critical objects."
  - label: "Resilience target"
    value: "Architecture designed to survive the loss of a whole data centre with no data loss."
  - label: "Platform license"
    value: "Cozystack is open source under Apache 2.0 — no per-CPU licensing, full audit of the control plane."
  - label: "Regulatory fit"
    value: "Supports DORA operational-resilience and NIS2 business-continuity obligations with provider-owned evidence."
quick_facts_source: "[DORA Regulation (EU) 2022/2554, EUR-Lex](https://eur-lex.europa.eu/eli/reg/2022/2554/oj), [sovereign public cloud case study](/case-studies/sovereign-public-cloud/)"
faq:
  - q: "What is disaster recovery as a service (DRaaS)?"
    a: "DRaaS is a managed disaster-recovery capability that continuously replicates your workloads and data to a second site so you can fail over quickly after an outage, ransomware attack, or data-centre loss. On a sovereign platform the recovery infrastructure is one you operate and audit yourself, rather than an opaque hyperscaler service you cannot inspect."
  - q: "What is the difference between RTO and RPO?"
    a: "Recovery-time objective (RTO) is how long you can take to restore service after an incident; recovery-point objective (RPO) is how much data you can afford to lose, measured in time. Synchronous cross-DC replication targets a near-zero RPO for the protected tier, while immutable backups and tested runbooks drive the RTO down to a defensible number."
  - q: "How does a sovereign platform protect against ransomware?"
    a: "Backups are written to immutable object storage using S3 Object Lock and versioning, so an attacker who compromises the primary environment cannot alter or delete the recovery copies. A deletion-protection webhook additionally prevents critical objects — volumes, namespaces, load balancers — from being removed by accident or malice."
  - q: "Does DRaaS help with DORA and NIS2 compliance?"
    a: "Yes. DORA (Regulation (EU) 2022/2554) requires financial entities to set, test, and evidence ICT operational-resilience objectives, and NIS2 imposes business-continuity duties on essential and important entities. A self-operated DR platform produces provider-owned drill records, incident post-mortems, and residency evidence a regulator can inspect directly."
  - q: "How do you prove the recovery target actually works?"
    a: "Through real drills, not paper plans. On the anchor engagement the team regularly powers nodes off to test resilience for real, and a major 20-hour storage incident during an upgrade was recovered with zero data loss. Failover is rehearsed on staging on the record, then repeated on production, with ready runbooks for each scenario."
  - q: "What does a DR engagement with Aenix look like?"
    a: "The entry point is a Platform Readiness Assessment covering current RTO/RPO posture, replication topology, backup immutability, and drill process, delivered in 14-28 days. It produces a written report and a Phase 2 implementation roadmap. Full-estate DR build-out and migration typically runs 9-18 months depending on scope."
---

# Disaster recovery as a service on a platform you control

**Business continuity is not a line in a vendor contract — it is an outcome you have to be able to prove. Disaster recovery as a service (DRaaS) on a sovereign, self-operated platform gives you cross-data-centre synchronous replication, immutable backups, and failover that is tested rather than assumed. Aenix builds and operates these platforms on [Cozystack](/products/cozystack/), so your recovery-time and recovery-point objectives are architecture you own and evidence you can hand to a regulator.**

> **Pairs with:** **[Ænix Platform Enterprise Edition](/products/aenix-platform/enterprise-edition/)** for the regulated cloud foundation that DR sits on; **[DORA compliance](/solutions/dora-compliance/)** for the operational-resilience obligations DR helps you meet. Start with a **[Platform Readiness Assessment →](/services/platform-readiness-assessment/)**.

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

On the reference architecture, Cozystack runs a compute cluster geo-distributed across three data centres. Volumes are replicated synchronously with **LINSTOR/DRBD** at replication factor three — one replica per site — and **etcd**, the Kubernetes cluster state store, is geo-distributed across the same three sites. The result is an architecture designed to survive the loss of an entire data centre with no data loss, because both the persistent data and the control-plane state already live elsewhere.

This is standard, open, [CNCF](https://www.cncf.io/)-aligned Kubernetes infrastructure rather than proprietary DR appliances. The [Kubernetes storage model](https://kubernetes.io/docs/concepts/storage/) treats the replicated volumes as ordinary persistent volumes, so applications do not need bespoke DR integration to benefit from cross-site durability.

---

## Why immutable backups matter more than ever

Synchronous replication protects against hardware and site failure, but it faithfully replicates a ransomware encryption event too. That is why DR and backup are separate layers.

Backups on the platform are written to object storage with **S3 Object Lock and versioning**, producing immutable copies that an attacker who has compromised the primary environment cannot alter or delete within the retention window. Platform- and tenant-level **Velero** backups capture Kubernetes objects and volume snapshots, and a **deletion-protection webhook** guards critical objects — volumes, namespaces, load balancers — against accidental or malicious removal. At-rest LUKS encryption and encrypted inter-DC replication keep the recovery copies confidential as well as durable.

The distinction matters for regulators: operational-resilience frameworks increasingly expect a recovery path that is provably isolated from the blast radius of the primary incident.

---

## Tested failover, not paper failover

A DR plan that has never been exercised is a hypothesis. The platforms Aenix operates are drilled for real.

On the anchor engagement, the client regularly powers nodes off to test resilience deliberately, which surfaces the non-obvious cascades a tabletop exercise never finds. Upgrades are rehearsed on staging on the record, then repeated on production; non-declarative commands are dropped in favour of GitOps; and each scenario has a ready runbook — DRBD recovery, cluster upgrade, storage failover. This is what converts an RTO from a marketing figure into a number you can defend.

---

## Evidence: a 20-hour incident, zero data loss

The clearest proof of a DR posture is how it behaves on the worst day. In our anonymized **[sovereign public cloud case study](/case-studies/sovereign-public-cloud/)**, a multi-tenant provider hit a cascading storage failure during a major upgrade — a DRBD race, lost patches at an intermediate step, and a breaking change in the network layer. The team worked the incident for roughly **20 hours and recovered the cloud with zero data loss**, then pushed the underlying bugs upstream into LINSTOR and its CSI driver. The same three-DC replication, geo-distributed etcd, and immutable-backup pattern a bank or insurer would deploy carried a real production cloud through a real disaster.

For DORA-scoped entities specifically, this is the shape of evidence [DORA (Regulation (EU) 2022/2554)](https://eur-lex.europa.eu/eli/reg/2022/2554/oj) expects: tested resilience, documented recovery, and objectives you can show rather than assert.

---

## Not every workload needs the same recovery tier

Treating every system as mission-critical is how DR budgets explode and drills become unmanageable. A working DR posture tiers the estate first.

- **Tier 0 — synchronous.** Systems where an RPO above near-zero is unacceptable — core banking ledgers, order books, patient records. These sit on synchronous cross-DC replication and are the reason the three-DC topology exists.
- **Tier 1 — asynchronous plus frequent backups.** Important but tolerant of minutes of data loss. Frequent immutable backups and asynchronous replication keep the cost proportionate to the risk.
- **Tier 2 — backup and rebuild.** Stateless or easily reconstructed services recovered from immutable backups and infrastructure-as-code, with an RTO measured in hours rather than seconds.

Tiering is the first output of the assessment, because it decides where the expensive synchronous capacity goes and where a cheaper recovery path is honestly sufficient.

---

## How Aenix engages on disaster recovery

The engagement runs as a **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with DR-weighted workstreams: current RTO/RPO posture per workload tier, replication and geo-topology design, backup immutability and ransomware isolation, and drill-process maturity. Output is a written report plus a Phase 2 implementation roadmap. Where the DR platform doubles as the production platform — the usual case — it pairs naturally with **[data sovereignty](/solutions/data-sovereignty/)** and DORA-alignment work, so continuity, residency, and compliance are engineered together rather than bolted on.


---

*Aenix is the team behind [Cozystack](https://cozystack.io) — a CNCF project (Sandbox today; Incubating expected late summer 2026), Apache 2.0. Aenix commercializes it as Ænix Platform, available in five editions: Public Cloud, ISP, Enterprise, IDP, and AI/ML. We build sovereign disaster-recovery and business-continuity platforms for regulated organizations across the EU and DACH.*
