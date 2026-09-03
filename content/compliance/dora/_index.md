---
title: "DORA evidence from the Ænix platform layer"
description: "Platform-side DORA evidence: resilience, backup and restore, incident records, and the ICT third-party risk chapter where self-hosted open source changes the answer."
page_type: "solution-landing"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "dora ict third-party risk platform"
secondary_keywords: ["dora article 12 backup restore", "dora exit strategy kubernetes", "dora register of information open source", "dora resilience testing tenant"]
hreflang_de: /de/compliance/dora/
related_pages:
  - /solutions/dora-compliance/
  - /compliance/cis-benchmark/
  - /compliance/gdpr/
  - /industries/financial-services/
  - /products/private-cloud-platform/
direct_answer: |
  **This page is the platform-side half of a DORA conversation: what the Ænix platforms actually provide against Regulation (EU) 2022/2554, and what no infrastructure can hold for you. For the chapter that decides most platform discussions — dependence on a single ICT provider — the answer is unusually strong. The engine is open-source software under Apache 2.0, it runs on your own hardware, and leaving it means moving standard Kubernetes objects and virtual machines rather than unwinding a proprietary format, so the Article 28(8) exit strategy is something you can rehearse rather than a clause promising cooperation. On resilience the platform brings replicated storage, live migration, continuously reconciled declared state, multi-datacenter topologies and encrypted backups. DORA itself binds financial entities, not platforms; Aenix makes no claim to be DORA compliant or DORA certified. For the assessment programme, see the DORA compliance engagement.**
quick_facts:
  - label: "What this page is"
    value: "Platform-side control evidence. The regulator-facing engagement lives on the DORA compliance solution page."
  - label: "Regulation"
    value: "Regulation (EU) 2022/2554, applying since 17 January 2025 to the financial entities listed in Article 2."
  - label: "Third-party risk"
    value: "Apache 2.0 engine on your own hardware: no vendor control plane, no standing vendor access, no proprietary format to unwind."
  - label: "Resilience provided"
    value: "LINSTOR replicated storage where the StorageClass asks for it, live migration, reconciled declared state, stretched multi-site clusters."
  - label: "Not provided"
    value: "Automated VM failover after unplanned node loss. Node health handling and restart policies exist; combining them into a failover procedure is configuration and rehearsal work."
  - label: "Backups"
    value: "Velero with encryption by default — but the default bucket lives inside the cluster it protects, which is hard to reconcile with the segregation Article 12(3) expects."
  - label: "Certification"
    value: "None exists. DORA defines obligations for financial entities; there is no DORA certificate for a platform, and Aenix does not claim one."
faq:
  - q: "Is the Aenix platform DORA compliant?"
    a: "The question does not apply to a platform. Financial entities are subject to DORA; platforms are part of the ICT estate those entities manage. What the Aenix platforms contribute is replication, live migration, backup and restore, observability, audit logging and an architecture with no vendor dependency to unwind. There is no DORA certification mark to hold, for us or for anyone."
  - q: "Does running on our own hardware remove ICT third-party risk?"
    a: "Self-hosting removes the platform vendor from the critical path — often the largest single component of that risk. Hardware suppliers, datacenter operators and any integrator you contract remain third parties and belong in the register of information. If you buy support, hosting or operations from Aenix, Aenix is one of them."
  - q: "Does the platform go into our register of information?"
    a: "The register under Article 28(3) records contractual arrangements for the use of ICT services. Downloading and self-hosting Apache 2.0 software creates no contractual arrangement, so there is no counterparty to name and nothing about the open-source project itself to register. The moment you buy support, hosting or integration around it, that supplier is an ICT third-party service provider under Article 3(19) and belongs in the register, with the function it supports and whether that function is critical or important. Confirm the treatment with your own competent authority — supervisory practice on open-source components is not uniform."
  - q: "What about the right to audit?"
    a: "Article 30(3)(e) is a contractual right of access, inspection and audit for you and for your competent authority, exercised against a provider. With no provider in the path there is no contract to carry it, and inspecting the platform means reading public source and running checks against your own cluster. Where you contract an operator, those access and audit rights — and the Article 30(3)(f) exit and transition provisions — belong in that contract rather than in a claim about the software."
  - q: "How is this different from the DORA compliance solution page?"
    a: "Different questions. The solution page describes a fixed-price readiness engagement: a control-level map of what your organisation can demonstrate today, concentration-risk analysis to the second supplier hop, exit-feasibility, and a remediation plan. This page describes what the infrastructure itself provides and how that was observed. Read the solution page for the programme, this one for the artefacts it draws on."
  - q: "Can we test failure scenarios safely?"
    a: "Yes. Run them in a dedicated tenant, isolated by network policy from everything else, and recreate the environment from manifests between runs. Note the limit: Article 26 threat-led penetration testing runs against live production systems supporting critical or important functions, so a tenant copy does not substitute for one, and any ICT third-party providers involved have to be arranged with in advance."
---

**For the chapter of DORA that decides most platform conversations — dependence on a single ICT provider — the Ænix platforms are about as good an answer as infrastructure gets.** The engine is open-source software under Apache 2.0, it runs on your own hardware, and leaving it means moving standard Kubernetes objects and virtual machines rather than unwinding a proprietary format. An exit strategy you can rehearse beats a clause promising cooperation.

<div class="cta-row">
  <a class="cta-primary" href="/solutions/dora-compliance/">DORA readiness engagement</a>
  <a class="cta-secondary" href="/compliance/">All compliance evidence →</a>
</div>

---

## What this page is, and what it is not

This is the **platform-side** half. It describes what the infrastructure provides against DORA and how that was observed. The organisational half — the gap analysis, the control-level map of what your entity can demonstrate today, concentration risk mapped to the second supplier hop, exit-feasibility with time-to-exit estimates, a remediation plan — is a fixed-price engagement described on the **[DORA compliance](/solutions/dora-compliance/)** page. Start there if what you need is the programme; stay here if what you need is the evidence underneath it.

**On provenance.** The observations below were made against **Cozystack v1.6** on a reference cluster. Cozystack is the open-source, Apache 2.0, CNCF-hosted engine that Ænix creates and maintains, and the Ænix Public Cloud Platform, Private Cloud Platform and AI Platform are distributions of it. There is no separate closed build. That matters twice over here: it is why the evidence transfers, and it is the substance of the Chapter V argument below.

**And what the platform cannot do is hold the obligation.** DORA — Regulation (EU) 2022/2554 — has applied since 17 January 2025 and binds the categories of financial entity listed in Article 2: banks, insurers, investment firms, payment and e-money institutions, crypto-asset service providers and others. ICT third-party service providers are not in scope directly; a small number are designated critical by the European Supervisory Authorities under Article 31 and placed under an EU Oversight Framework with a Lead Overseer, which is a different regime from the competent-authority supervision financial entities face.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## ICT third-party risk: the part that depends on the platform

DORA devotes a whole chapter to ICT third-party risk: register of information, contractual requirements, concentration risk, exit strategies, and the right to audit. Regulators care about it because a financial entity that cannot leave a provider has no real control over its own resilience.

Three properties matter here. None is a feature you enable; each follows from how the platform is built and licensed.

**The source is open, under Apache 2.0.** Contractual continuity does not depend on one vendor's survival, and the code can be audited by you or by a third party without asking permission.

**It runs on your own hardware.** No control plane in someone else's account, no vendor with standing access required for the platform to function, no dependency on an external service being up. What you host, you control.

**Exit is possible in practice, not only on paper.** Workloads are Kubernetes objects and virtual machines in standard formats; there is no proprietary encapsulation to unwind. An exit plan you can rehearse is worth more to a regulator than a clause promising cooperation.

None of this exempts you from maintaining the register of information required by Article 28(3), from holding an exit strategy under Article 28(8), or from contracts carrying the key provisions of Article 30 of DORA — a different Article 30 from the GDPR one. It makes those documents easier to write truthfully.

**One honest qualifier.** If you buy support, hosting or operations from Ænix, Ænix becomes an ICT third-party service provider under Article 3(19) and belongs in your register with the function it supports. The open-source engine creates no contractual arrangement; a commercial relationship around it does.

</div>
</div>

---

## Resilience: what the platform provides

DORA expects ICT systems to withstand and recover from disruption, and to be tested against that expectation rather than assumed to meet it.

**Replicated storage, where the StorageClass asks for it.** LINSTOR places volumes with DRBD replication across nodes, so a replicated volume survives the loss of a node holding one of its copies. Replication is a property of the StorageClass rather than of the platform — local, non-replicated classes exist and are the right choice for some workloads — so check which class each critical or important function actually uses. No separate storage array is required either way.

**Live migration.** Virtual machines move between nodes without shutdown, which turns planned maintenance from an outage into an operation.

**Declared state, continuously reconciled.** Machines and services are described as manifests, and the platform works to keep reality matching the description. Kill a workload directly and it comes back, because the description did not change.

**Stretched clusters across locations.** Multi-datacenter topologies are a normal deployment shape rather than an exotic one, which matters when your resilience requirements name geographic separation.

Be precise about what is **not** provided. There is no automated virtual machine failover after unplanned node loss of the kind a dedicated HA product gives you. Node health handling and restart policies exist and can be combined into a failover procedure, but that is configuration and rehearsal work, not a switch. See [disaster recovery](/solutions/disaster-recovery/) for how that is usually built out.

---

## Backup, restore and the evidence that they work

Velero ships with the platform for scheduled backups, volume snapshots, virtual machine backups and cluster state, and backup data is encrypted in object storage by default through the kopia uploader.

**Where those backups land needs a decision before an assessment, not after.** Platform-managed backups default to a shared `cozy-backups` bucket in `tenant-root`, separated between tenants by object path. Article 12(3) requires that, when restoring backup data using its own systems, a financial entity uses ICT systems physically and logically segregated from the source system — and a bucket inside the cluster being protected is hard to argue as segregated from it. Article 12(2) adds that activating a backup system must not itself jeopardise the security, availability, authenticity, integrity or confidentiality of the data, and that the procedures be tested periodically. Point the BackupClass at storage outside the cluster, with its own credentials and its own key, and say so in the backup policy Article 12(1) asks you to write.

The regulation's emphasis is not on having backups but on being able to restore. Rehearse the restore against a defined recovery time and recovery point objective, record what you actually achieved, and keep that record. A restore time you measured is evidence; an estimate is not.

---

## Detection, logging and incident evidence

DORA requires incidents to be detected, classified and — for major ones — reported to the competent authority on a short clock. That works only if the underlying record exists.

The platform ships metrics collection, log aggregation, alerting and dashboards, and the Kubernetes API server writes an audit log under a policy you supply. Set two things deliberately:

**Retention.** The default on the cluster examined here is thirty days, shorter than a financial supervisor will expect for records touching critical or important functions.

**The audit policy, resource by resource.** Do not raise everything to full request and response capture: it writes secrets and personal data into the log and buys a GDPR problem to settle a DORA one. The [GDPR page](/compliance/gdpr/) sets out why, and the [CIS Benchmark page](/compliance/cis-benchmark/) gives the workable split.

Security advisories for the engine are published openly, including assessments of vulnerabilities that turn out not to affect it. That public record is directly usable in the threat-intelligence and vulnerability-management parts of an ICT risk framework.

---

## Testing resilience without touching production

DORA expects a programme of digital operational resilience testing under Chapter IV, and threat-led penetration testing under Article 26 for those entities their competent authority identifies as in scope for it — a designation based on risk profile and systemic importance, not a category you can read off your own balance sheet.

Two properties of the platform help the general programme. A tenant gives you an isolated place to run destructive tests against a realistic copy. And because environments are described as manifests, the environment under test can be recreated exactly, which is what makes a test result meaningful the second time.

TLPT is a different exercise, and the distinction matters: Article 26 tests run against live production systems supporting critical or important functions, so a tenant copy does not substitute for one. Where the platform is operated for you, or supports a critical or important function, the ICT third-party service providers involved are drawn into the scope of that test and have to be arranged with in advance.

The [CIS Benchmark](/compliance/cis-benchmark/) page shows one such test executed against a live cluster, together with the reasoning that turns a raw report into something an assessor can use.

---

## What stays with you

Governance sits with the management body and cannot be delegated to a supplier: the ICT risk framework, the register of information, incident classification and reporting within the regulation's deadlines, the digital operational resilience testing programme, contractual arrangements with providers, and the exit strategy itself.

A platform can make each of those cheaper to satisfy. It cannot hold them. Where you want help producing them, that is the [DORA readiness engagement](/solutions/dora-compliance/), and the free [DORA compliance checklist](/resources/dora-compliance-checklist/) is the short version of what it looks at.

<div class="cta-row">
  <a class="cta-primary" href="/solutions/dora-compliance/">DORA readiness engagement</a>
  <a class="cta-secondary" href="/contact/">Talk to an engineer</a>
</div>

---

## Notes

This page describes Cozystack v1.6 — the engine the Ænix platforms are built from — as observed on a reference cluster in August 2026, and is informational. It is not legal advice, not an assessment, and not a statement that any configuration satisfies a competent authority. Regulation (EU) 2022/2554 applies to defined categories of financial entity and their critical ICT providers; whether it applies to you, and in what capacity, is a question for your own counsel.
