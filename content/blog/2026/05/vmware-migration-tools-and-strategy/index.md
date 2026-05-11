---
title: "VMware migration tools and strategy in 2026 — what works, what fails"
description: "This is the long-form companion to our VMware migration hub. It walks through VMware migration tooling and strategy in 2026 — what's available, how to..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["VMware", "Nutanix", "OpenShift", "Kubernetes", "Cozystack", "KubeVirt"]
language: "en"
companion_landing: "/migration/vmware/"
quiz:
  title: "Test yourself: VMware migration tooling"
  questions:
    - q: "How many honest VMware migration paths does the article identify?"
      options:
        - { text: "Three: VMware-managed, KubeVirt-based, lift-and-shift to public cloud", correct: true }
        - { text: "Five", correct: false }
        - { text: "Eight", correct: false }
      explanation: "Three paths: (1) VMware-managed migration using vendor-supplied tools (HCX, MTV, Nutanix Move), (2) KubeVirt-based migration to open-source destinations (Cozystack, OpenShift Virt), (3) lift-and-shift to VMware-on-cloud (defers the architectural question)."
    - q: "For most 2026 migrations driven by Broadcom pricing or sovereignty, which path does the article recommend?"
      options:
        - { text: "Path 1 — vendor-tools-led", correct: false }
        - { text: "Path 2 — KubeVirt-based to open destination", correct: true }
        - { text: "Path 3 — lift-and-shift to public cloud", correct: false }
      explanation: "Path 2 wins for most 2026 migrations driven by Broadcom pricing or sovereignty: open destination architecture, no vendor lock-in at destination, modern Kubernetes-native foundation. The article focuses there for the rest of the piece."
    - q: "Which Red Hat tool handles VMware → KubeVirt at bulk scale?"
      options:
        - { text: "Forklift / Migration Toolkit for Virtualization (MTV)", correct: true }
        - { text: "KubeVirt CDI alone", correct: false }
        - { text: "virtv2v alone", correct: false }
      explanation: "Forklift (also packaged as MTV — Migration Toolkit for Virtualization) handles bulk VM migration with metadata preservation. virtv2v is the lower-level conversion tool used internally by Forklift. KubeVirt CDI handles disk-level import."
    - q: "How many workloads per cohort does the article suggest for cohort-based migration?"
      options:
        - { text: "1–5", correct: false }
        - { text: "10–50", correct: true }
        - { text: "500+", correct: false }
      explanation: "Cohort-based migration: 10-50 workloads at a time. Cohort cadence is 1-3 cohorts per month at steady state. Each cohort runs through pre-migration validation → image conversion → cutover → post-migration validation → parallel run → signoff → VMware-side decommission."
    - q: "What is the typical destination-platform-build duration before migration cohort 1 starts (for Cozystack-based destinations)?"
      options:
        - { text: "1 week", correct: false }
        - { text: "1–3 months", correct: true }
        - { text: "12 months", correct: false }
      explanation: "1-3 months destination-build before migration cohort 1. Most migrations fail when workloads move to a destination that's been engineered as a PoC, not as a production platform. Engineer the destination first."
---

**This is the long-form companion to our [VMware migration hub](/migration/vmware/). It walks through VMware migration tooling and strategy in 2026 — what's available, how to choose between paths, where most migrations stumble.**

The VMware migration market in 2026 is a different conversation than in 2022. Broadcom-induced exits have produced enough customer experience that the patterns that work and the patterns that fail are documented. This article covers the working version.

## Migration paths — three options

There are three honest VMware migration paths in 2026:

### Path 1: VMware-managed migration (vendor-tools-led)
Use Broadcom-supplied or Red Hat-supplied tooling to migrate within or out of the VMware ecosystem. Tools: VMware HCX (intra-VMware), Red Hat Migration Toolkit for Virtualization (MTV) for VMware → OpenShift, vendor-specific (Nutanix Move, Scale Computing tools).

**Pros:** Vendor support during migration; established tooling.

**Cons:** Locks into vendor relationship at destination. Limited choice of destination architecture.

### Path 2: KubeVirt-based migration (open-source destination)
Convert VMware VMs to KubeVirt format on the destination platform (Cozystack, OpenShift Virtualization, vendor KubeVirt platforms). Tools: virtv2v (RedHat), forklift (RedHat), KubeVirt CDI (community), custom scripts.

**Pros:** Open destination architecture, no vendor lock-in at destination, modern Kubernetes-native foundation.

**Cons:** More integration work upfront; team learning curve.

### Path 3: Lift-and-shift to public cloud
Move VMware workloads to VMware-on-cloud (VMware on AWS, Azure VMware Solution, Oracle VMware Solution). Defers the architectural question.

**Pros:** Fastest migration path; smallest re-architecture.

**Cons:** Doesn't address Broadcom pricing pressure (often makes it worse); doesn't address sovereignty; usually a stop-gap rather than a strategy.

For most 2026 migrations driven by Broadcom pricing or sovereignty, Path 2 (KubeVirt-based) wins. This article focuses there.

## Tooling for KubeVirt-based migration

### KubeVirt CDI (Containerized Data Importer)
Native KubeVirt tool. Imports disk images (qcow2, VMDK, VHD, ISO) into KubeVirt PersistentVolumeClaims. Free, open-source, works.

**Strengths:** Native to KubeVirt; supported by KubeVirt operators; works with various source formats.
**Limits:** Disk-level migration; doesn't handle VM metadata, networking, or post-migration cleanup automatically.

### Forklift / Migration Toolkit for Virtualization (Red Hat)
Red Hat's tool for vSphere → KubeVirt (OpenShift Virtualization) migration. Open-source; works on any KubeVirt platform with manual configuration.

**Strengths:** Bulk VM migration; metadata preservation; production-tested.
**Limits:** Originally OpenShift-focused; some integration work for non-OpenShift destinations.

### virtv2v (Red Hat)
Lower-level conversion tool. Operates on individual VM images; converts vSphere VMs to KVM-compatible format with VMware Tools cleanup.

**Strengths:** Mature, used by Forklift internally; handles Windows VM driver cleanup.
**Limits:** Single-VM tool; orchestration is your problem.

### Cozystack-specific migration tooling
KubeVirt CDI + dedicated migration scripts that Aenix has built and reused across customer deployments. Covers VM image conversion, multi-tenant placement, network mapping into Cilium policies.

**Strengths:** Aenix-validated for production migrations; Cozystack-tenant-aware.
**Limits:** Aenix-engagement-specific (open-sourcing in roadmap).

### Vendor / commercial tools
- **Nutanix Move** — for VMware → Nutanix AHV migrations
- **Scale Computing tools** — for VMware → Scale HC3
- **Various commercial migration tools** — Carbonite, Veeam, etc.

These work for their specific destination; not relevant for KubeVirt-based migration to open destinations.

## Strategy for VMware migration

### Step 1: Discovery and assessment

Before tools, agree on:
- **Trigger** — what's pushing the migration? (Pricing, sovereignty, scale, AI.)
- **Workload portfolio** — count, OS mix, criticality, dependencies.
- **Destination architecture** — what you're moving to.
- **Timeline constraints** — VCF subscription expirations.
- **Team capacity** — to run the destination after migration.

Output: structured assessment with workload classification (migrate-now / later / stay / re-platform).

### Step 2: Destination platform engineered

The destination platform must be production-ready before migration starts. This is where many migrations fail: workloads move to a destination that's been engineered as a PoC, not as a production platform.

For Cozystack-based destinations: 1-3 months destination-build before migration cohort 1.

### Step 3: Cohort-based migration

Cohorts of 10-50 workloads at a time. Each cohort:
1. Pre-migration validation (workload state, dependencies)
2. Image conversion
3. Network and storage cutover
4. Post-migration validation
5. Parallel-run (VMware + destination both active)
6. Customer signoff
7. VMware-side decommission

Cohort cadence: 1-3 cohorts per month at steady state.

### Step 4: VCF expiration-aligned sequencing

Workloads move when VCF commitments lapse. Moving early into a paid-for commitment costs money. Moving late risks expiration without prepared destination.

### Step 5: Decommission

VMware-side decommission as cohorts complete. Hardware repurposed where applicable.

## Where migrations stumble

### Stumble 1: destination not ready
Workloads moved to destination that's not actually production-ready. Operational issues blamed on migration.

### Stumble 2: big-bang cutover attempted
Weekend "we'll move it all" — rarely works at enterprise scale. Cohort approach is the proven pattern.

### Stumble 3: data gravity ignored
50TB production database moves are not a weekend job. Cross-network movement, cutover windows, dual-write periods all need engineering.

### Stumble 4: networking redesign skipped
Cilium ≠ NSX. Network policies, ingress patterns, service-to-service auth all need redesign.

### Stumble 5: post-migration capacity underestimated
Migration completes; platform team thinks they're done. Actually, post-migration operations is when the workload starts. Capacity for ongoing ops is non-negotiable.

## Cost ranges

For planning:

- **Assessment:** 14-28 days, fixed-price.
- **Destination platform foundation:** 1-3 months, depends on scale.
- **Migration cohort labor:** 8-15 person-days per cohort of 10-50 VMs.
- **Total elapsed:** 8-12 months for 100 VMs; 18-24 months for 1000 VMs.

Compared to ongoing VCF subscription: most customer engagements show net positive after Year 2 even accounting for migration cost.

## How to start

If your situation fits, the structured next step is an assessment. Aenix runs **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with VMware emphasis. For details see **[VMware migration hub](/migration/vmware/)**.

---

*Aenix is the team behind Cozystack.*

<!-- SEO: title "VMware Migration Tools & Strategy 2026 — Practical Guide | Aenix"
Word count: ~1500.
-->
