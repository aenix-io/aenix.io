---
title: "Nutanix Migration: Exit HCI Lock-In to a K8s Platform"
description: "Nutanix migration to a Kubernetes-native platform: leave HCI lock-in and per-node licensing for KubeVirt VMs, containers, and LINSTOR storage you own."
date: 2026-07-01
lastmod: 2026-07-01
page_type: "migration-hub"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "nutanix migration"
secondary_keywords: ["nutanix alternative", "leaving nutanix", "nutanix ahv migration"]
hreflang_de: "/de/migration/nutanix/"
hreflang_en: "/migration/nutanix/"
related_pages:
  - /alternatives/nutanix-alternative/
  - /migration/vmware/
  - /products/
  - /services/platform-readiness-assessment/
  - /roi-calculator/
service:
  type: "Nutanix Migration"
  areaServed: ["EU", "DACH"]
  audience: "Enterprise, Hosting Providers, Public Sector"
direct_answer: |
  **A Nutanix migration moves virtual machines and workloads off Nutanix HCI — the AOS storage layer and the AHV hypervisor — onto a different platform, usually because licensing and renewal costs, or hyperconverged lock-in, no longer justify staying. The Kubernetes-native destination is Cozystack (a CNCF project, Apache 2.0): it runs VMs on KubeVirt alongside containers on the same cluster, with LINSTOR for replicated block storage and no per-node hypervisor licensing. Aenix runs these migrations end to end — inventory, destination architecture, cohort-based cutover, and decommission — with the same engineers who build and operate the destination platform. It suits enterprises, hosting providers, and public-sector operators who want to own their virtualization stack rather than rent it under a renewal that keeps climbing.**
quick_facts:
  - label: "What it is"
    value: "Moving VMs and workloads off Nutanix AOS/AHV onto a Kubernetes-native platform you own."
  - label: "Destination"
    value: "Cozystack — KubeVirt VMs plus containers on one cluster, LINSTOR replicated storage, Cilium networking."
  - label: "Licensing"
    value: "No per-node hypervisor licensing; Cozystack is Apache 2.0 open source."
  - label: "Migration method"
    value: "Cohort-based cutover with parallel run; image conversion via KubeVirt CDI; sequencing aligned to renewal dates."
  - label: "Why teams move"
    value: "Renewal and licensing pressure, HCI lock-in, and a wish to unify VMs and containers on one platform."
  - label: "Difference from the alternative page"
    value: "This hub is how to move; the Nutanix alternative page is why and what you move to."
  - label: "Engagement timeline"
    value: "Assessment in 14-28 days; full-estate migration typically 9-18 months by scope."
quick_facts_source: "[Cozystack docs](https://cozystack.io), [Nutanix alternative comparison](/alternatives/nutanix-alternative/), [ROI & TCO calculator](/roi-calculator/)"
faq:
  - q: "Why are organizations leaving Nutanix?"
    a: "The common triggers are renewal and licensing pressure after portfolio and pricing changes, hyperconverged lock-in that ties storage and compute to one vendor's stack, and a strategic wish to run VMs and containers on a single platform the organization owns. When two or more of these apply, a structured migration usually pays back; if a renewal is comfortable and nothing else pushes, staying can be the honest answer."
  - q: "What do you migrate a Nutanix estate to?"
    a: "To a Kubernetes-native platform: Cozystack runs VMs on KubeVirt alongside containers on the same cluster, uses LINSTOR for replicated block storage in place of the AOS distributed storage fabric, and Cilium for networking. There is no per-node hypervisor license, and the platform is Apache 2.0 open source, so the estate you migrate to is one you control."
  - q: "How is an AHV VM migrated?"
    a: "Nutanix AHV VMs are exported and converted to run on KubeVirt, which uses the same underlying KVM technology, so guest operating systems and disks carry over. The KubeVirt Containerized Data Importer (CDI) handles disk image conversion into the new storage layer, and migration runs cohort by cohort with a parallel run for validation before each cutover."
  - q: "What is the difference between this page and the Nutanix alternative page?"
    a: "This migration hub is about how to move — inventory, sequencing, cutover, and decommission. The Nutanix alternative page is about why and what: the platform-level comparison of Cozystack versus Nutanix HCI. Read the alternative page to decide the destination; read this hub to plan the move."
  - q: "How long does a Nutanix migration take?"
    a: "It starts with a Platform Readiness Assessment in 14-28 days that produces a written plan and a destination architecture. Execution then runs cohort by cohort, sequenced against your Nutanix renewal dates, typically 9-18 months for a full estate depending on VM count, application complexity, and how much re-platforming to containers you fold in."
  - q: "Can we model the cost before committing?"
    a: "Yes. Use the ROI and TCO calculator to model the delta between the current Nutanix renewal path and an owned Cozystack platform, including hardware, platform-team capacity, and the operational learning curve, before you commit to hardware or a migration timeline."
---

# Nutanix migration: exit HCI lock-in on your own terms

**Leaving Nutanix is a planned project, not an emergency — and done well it produces a virtualization platform you own instead of one you rent under a renewal that keeps climbing. Aenix migrates Nutanix AOS/AHV estates to a Kubernetes-native platform where VMs and containers share one cluster, storage is replicated with LINSTOR, and there is no per-node hypervisor license. The destination is [Cozystack](/products/cozystack/), built and operated by the same engineers who run your migration.**

> **Pairs with:** the **[Ænix Platform](/products/)** edition that matches your estate — Enterprise for regulated workloads, ISP for hosting providers, Public Cloud for large operators. Decide the destination on the **[Nutanix alternative](/alternatives/nutanix-alternative/)** comparison, then model the numbers with the **[ROI & TCO calculator](/roi-calculator/)**.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/alternatives/nutanix-alternative/">Why Cozystack vs Nutanix →</a>
</div>


---

## Why are organizations leaving Nutanix?

The triggers cluster into three, and they compound.

- **Renewal and licensing pressure.** Portfolio consolidation and subscription repricing have pushed a lot of Nutanix customers to re-examine the total cost of staying, particularly where per-node licensing scales with a growing cluster.
- **Hyperconverged lock-in.** HCI ties the storage fabric, the hypervisor, and the management plane to one vendor's stack. That is convenient until you want to change one layer, add a workload type the platform does not favour, or run on hardware the vendor does not bless.
- **One platform for VMs and containers.** Many teams already run Kubernetes next to their Nutanix VMs. Consolidating both onto a single Kubernetes-native platform removes a parallel stack, a parallel operations model, and a parallel bill.

If two or more of these apply, a structured migration usually compounds in your favour. If your renewal is comfortable and nothing else pushes, "stay and tune" is the honest recommendation — we will tell you so.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## What you migrate to

The destination is a single Kubernetes-native platform assembled from open, [CNCF](https://www.cncf.io/)-aligned components rather than a second proprietary HCI stack.

- **VMs on KubeVirt.** [KubeVirt](https://kubevirt.io/) runs full virtual machines on Kubernetes using the same KVM technology underneath AHV, so guest operating systems, including Windows, carry over. VMs and containers schedule on the same cluster.
- **LINSTOR replicated storage.** LINSTOR/DRBD provides replicated block storage in place of the AOS distributed storage fabric, with encrypted, replicated volumes across nodes and — where the topology calls for it — across data centres.
- **Cilium networking.** An eBPF-based CNI replaces the HCI network plane, with network policy, load balancing, and multi-tenant isolation as first-class Kubernetes primitives.
- **No per-node hypervisor tax.** Cozystack is Apache 2.0 open source; the platform you migrate to has no per-node hypervisor license, so cluster growth does not compound a licensing bill.

For the platform-level comparison — feature by feature, Cozystack versus Nutanix HCI — read the **[Nutanix alternative](/alternatives/nutanix-alternative/)** page. This hub assumes you have chosen the destination and focuses on the move.

</div>
</div>

---

## How an AHV migration actually runs

Migration is cohort-based, not big-bang. A single-weekend "move it all" rarely survives contact with an enterprise estate.

1. **Inventory and classification.** Full AOS/AHV inventory — VM count, OS mix, storage dependencies, network integrations, multi-site topology — then classify each workload as migrate-now, migrate-later, stay, or re-platform to containers.
2. **Destination architecture.** Size and design the Cozystack target on your hardware: capacity model, storage classes, networking, tenancy, and operations design.
3. **Cohort cutover.** AHV VMs are exported and converted with the KubeVirt Containerized Data Importer (CDI); each cohort runs in parallel with Nutanix until validated, and cutover sequencing is aligned to your renewal expirations so you never pay twice for capacity you have already moved.
4. **Decommission.** Nutanix nodes are retired as cohorts complete and hardware is repurposed where it fits, so the final renewal is simply avoided.

This is the same disciplined sequencing we use for **[VMware migration](/migration/vmware/)** — the mechanics differ, but the cohort-and-parallel-run pattern is what keeps a migration from becoming next year's emergency.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Nutanix AOS / AHV</b><div class="diagram__chips"><span>AOS storage fabric</span><span>Per-node licensing</span></div></div>
<div class="diagram__conn">exported through</div>
<div class="diagram__node"><b>Cohort cutover</b><div class="diagram__chips"><span>KubeVirt CDI conversion</span><span>Parallel run with Nutanix</span></div></div>
<div class="diagram__conn">lands on</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt VMs + containers</span><span>LINSTOR</span><span>Cilium</span></div></div>
<div class="diagram__conn">completes with</div>
<div class="diagram__node"><b>Nutanix nodes retired</b><div class="diagram__chips"><span>Hardware repurposed</span><span>Final renewal avoided</span></div></div>
</div>
</div>

---

## What carries over, and what genuinely changes

Being honest about the delta is what keeps a migration on schedule. Some things port with little friction; others are a deliberate redesign, and pretending otherwise is how projects stall.

- **Carries over.** Guest operating systems and their disks (KubeVirt runs the same KVM technology as AHV), VM-centric operating habits, and most application architectures — a VM that ran on Nutanix runs as a VM on KubeVirt.
- **Redesigned on purpose.** Storage moves from the AOS fabric to LINSTOR storage classes; networking moves from the HCI plane to Cilium policy; and tenancy, quotas, and self-service are modelled as Kubernetes-native constructs rather than Prism categories. Skipping this redesign is the single most common cause of post-migration fragility.
- **A new capability, not just a swap.** Because containers are first-class on the same cluster, the migration is also the moment teams can start consolidating a separate Kubernetes estate — turning a like-for-like VM move into a platform consolidation.

The assessment names each of these explicitly for your estate, so the plan reflects real effort rather than an optimistic like-for-like assumption.

---

## Model the cost before you commit

Migration economics look attractive in theory and turn on the details in practice: hardware refresh, platform-team capacity, and the operational learning curve all belong in the model. Before committing to hardware or a timeline, run your estate size and current Nutanix renewal through the **[ROI & TCO calculator](/roi-calculator/)** to see the annual delta, the multi-year net after migration, and the payback period. An honest TCO up front is what separates a migration that pays back from one that stalls.

---

## How Aenix engages on Nutanix migration

The engagement mirrors our **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with Nutanix emphasis: AOS/AHV inventory, destination architecture, workload classification, cutover sequencing against renewal dates, and a Phase 2 roadmap — delivered in 14-28 days. Phase 2 is implementation, with Aenix engineers integrated into your team for the migration cohorts and knowledge transfer throughout; an optional Phase 3 covers managed Cozystack operations after the estate has moved. Because we build the destination platform, the effort estimates are calibrated against work we have shipped, not guessed.


---

*Aenix is the team behind [Cozystack](https://cozystack.io) — a CNCF project (Sandbox today; Incubating expected late summer 2026), Apache 2.0. Aenix commercializes it as Ænix Platform, as three platforms on one engine — Public Cloud, Private Cloud and AI — that combine rather than exclude each other. We run Nutanix and VMware migrations for enterprises, hosting providers, and public-sector operators across the EU and DACH.*
