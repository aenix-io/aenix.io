---
title: "Cloud Repatriation TCO Worksheet — model your exit case (free spreadsheet)"
description: "Excel / Google Sheets template that lets you fill in your actual public-cloud spend and get an honest TCO comparison against private cloud. Models hidden..."
type: "page"
related_pages: ["/solutions/cloud-repatriation", "/solutions/cloud-cost-optimization", "/products/aenix-platform/"]
language: "en"
direct_answer: |
  **The Cloud Repatriation TCO Worksheet is a free Excel and Google Sheets template that compares the true total cost of ownership of staying on public cloud versus moving workloads to private cloud. It is built for CFOs, FinOps practitioners, platform engineering leads, and CIOs preparing a board recommendation. The worksheet captures often-missed costs on both sides: hyperscaler egress, idle and over-sized resources, reserved-instance underutilization, and managed-service premiums against destination hardware, colocation, storage, backup, DR, and platform-team capacity. Aenix uses it during the cost workstream of its Platform Readiness Assessment. The repatriation destination is the Ænix Platform, the company's productized offering built on Cozystack, an open-source CNCF project licensed under Apache 2.0.**

quick_facts:
  - label: "What it is"
    value: "A free Excel and Google Sheets TCO template comparing public-cloud spend against private-cloud repatriation, including hidden costs on both sides."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it's for"
    value: "CFOs and finance partners, FinOps practitioners, platform engineering leads, and CIOs building a repatriation business case."
  - label: "What it models"
    value: "Public-cloud current state, destination architecture cost, per-workload classification, 36-month cost trajectory, and a stay / partial / full repatriation decision framework."
  - label: "How Aenix uses it"
    value: "Drives the cost workstream of the Platform Readiness Assessment; full TCO modelling and architecture design follow as a paid engagement."
  - label: "Destination platform"
    value: "Ænix Platform, productized on Cozystack: KubeVirt VMs and containers on one Kubernetes API, Cilium (eBPF) networking, LINSTOR/DRBD storage, Tenant CRD multi-tenancy."

faq:
  - q: "What is cloud repatriation TCO and why does it need its own worksheet?"
    a: "Cloud repatriation TCO is the all-in cost comparison of keeping workloads on public cloud versus running them on private infrastructure. A worksheet is needed because both sides hide costs: cloud bills understate egress and commitment waste, while naive private-cloud estimates omit datacenter, DR, and platform-team capacity. The template surfaces both honestly."
  - q: "Is the worksheet really free, and what format is it in?"
    a: "Yes. It is a free download provided in both Excel and Google Sheets formats, so finance and engineering teams can fill in actual numbers in whichever tool they already use."
  - q: "Which hidden costs does the worksheet capture?"
    a: "On the cloud side: egress, idle and over-sized resources, reserved-instance and savings-plan underutilization, and hyperscaler managed-service premiums. On the destination side: hardware acquisition and 5-year refresh, colocation, network bandwidth, storage growth, backup and DR, identity and observability tooling, and platform-engineering capacity."
  - q: "Do I have to repatriate every workload to benefit?"
    a: "No. Sheet 3 classifies each workload as repatriate now, later, stay, or reassess, ranked by net repatriation ROI. The top ten workloads usually account for 60-80 percent of the cost case, so partial repatriation is a valid and common outcome."
  - q: "What is the repatriation destination Aenix recommends?"
    a: "The Ænix Platform, a productized offering built on Cozystack, an Apache 2.0 CNCF project. It runs virtual machines via KubeVirt and containers on a single Kubernetes API, with Cilium eBPF networking, LINSTOR/DRBD storage, and Tenant-CRD multi-tenancy. The right edition depends on buyer profile, from ISP to Enterprise to AI/ML."
  - q: "What happens after I download and fill in the worksheet?"
    a: "The worksheet gives you the analytical foundation. For full TCO modelling and architecture design, Aenix offers Cloud repatriation services and a Platform Readiness Assessment, where the worksheet feeds the cost workstream."
---

**Excel / Google Sheets template that lets you fill in your actual public-cloud spend and get an honest TCO comparison against private cloud. Models hidden costs (egress, idle resources, commitment underutilization, hyperscaler-managed-service premiums) plus realistic destination costs (hardware, datacenter, platform-team capacity, ops). Used by Aenix during cost workstream of Platform Readiness Assessment.**

> **Pairs with:** any **[Ænix Platform Edition](/products/aenix-platform/)** — repatriation destination depends on buyer profile. Hosting providers / regional clouds → ISP Edition. Regulated enterprises → Enterprise Edition. Large operators → Public Cloud Edition. Product engineering teams → IDP Edition. AI-heavy → AI/ML Edition.

<div class="lead-magnet-form">
{{< pipedrive-form type="lead-magnet" >}}
[Download the TCO worksheet (Excel + Google Sheets)]
</div>

---

## What's in the worksheet

### Sheet 1: Public-cloud current state
- Monthly bill breakdown by account / service / team
- Reserved Instances / Savings Plans utilization
- Egress costs (often missed)
- Idle / over-sized resources
- Hyperscaler-managed-service premium analysis
- Commitment expiration ladder

### Sheet 2: Destination architecture
- Hardware acquisition + 5-year refresh
- Datacenter / colocation
- Network bandwidth + egress between sites
- Storage tiering and growth
- Backup and DR infrastructure
- Identity, observability, platform tooling
- Platform-engineering capacity needed
- Software licenses where applicable

### Sheet 3: Workload classification
- Per-workload: repatriate now / later / stay / reassess
- Ranked by net repatriation ROI
- Top-10 list usually = 60-80% of cost case

### Sheet 4: Cost trajectory
- Current state → 12-month → 24-month → 36-month
- Sensitivity analysis for occupancy assumptions
- CFO-grade summary

### Sheet 5: Decision framework
- Stay / partial repatriate / full repatriate
- Risk factors and dependencies

---

## Who uses this

- CFOs and finance partners evaluating cloud cost
- Platform engineering leads scoping repatriation
- CIOs preparing board recommendation
- FinOps practitioners

---

## After downloading

The worksheet gives you the analytical foundation. For full TCO modelling and architecture design see **[Cloud repatriation services](/solutions/cloud-repatriation/)** or **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

---

## Related resources

- **[Cloud repatriation services](/solutions/cloud-repatriation/)** — engagement details
- **[Cloud cost optimization](/solutions/cloud-cost-optimization/)** — without architectural change
- **[VMware migration checklist](/resources/vmware-migration-checklist/)** — adjacent migration trigger

---

*Aenix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack.*

<!-- Word count: ~500. -->
