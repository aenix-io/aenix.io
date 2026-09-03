---
title: "VMware migration — exit VCF without breaking the application"
description: "VMware migration end to end: Forklift cold and warm transfer, VDDK and virt-v2v realities, cohort cutover with parallel-run validation, VCF decommission."
related_pages: ["/alternatives/vmware-alternative", "/alternatives/vmware-alternatives", "/solutions/cloud-repatriation", "/services/platform-readiness-assessment", "/products/", "/products/cozystack", "/resources/vmware-cost-calculator/", "/partners/vmware-exit/", "/for/head-of-infrastructure/"]
language: "en"
hreflang_de: /de/migration/vmware/
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **A VMware migration in the post-Broadcom era is a planned project to move workloads off VMware Cloud Foundation (VCF), vSphere, and vCloud Director onto infrastructure the organization controls. It suits enterprises, hosting providers, and regulated operators facing Broadcom subscription increases, sovereignty rules (DORA, NIS2), or repatriation goals. Aenix runs these migrations end to end — inventory and workload classification, destination architecture, cohort-based cutover with parallel-run validation, and VMware decommission. Konveyor Forklift, the Kubernetes migration toolkit for virtualization, ships in the Aenix platform and performs the transfer itself: cold or warm migration from vSphere, network and storage mapping as Kubernetes objects, and virt-v2v guest conversion that injects VirtIO drivers and strips VMware Tools. The destination Aenix typically recommends is Cozystack, an Apache 2.0 CNCF project running VMs and containers on one Kubernetes API via KubeVirt, with Cilium networking and LINSTOR storage. Done well, a structured migration produces a platform the customer owns and, in the engagements Aenix has modelled, a 30-60% cost reduction on the workloads that move, driven by removing per-core VMware licensing. That range is Aenix engagement modelling, not a published benchmark, and it is recomputed on real estate data during assessment.**
quick_facts:
  - label: "What it is"
    value: "An end-to-end project to move workloads off VMware VCF / vSphere / vCloud Director onto customer-controlled infrastructure, typically Cozystack."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it is for"
    value: "Enterprises exiting VCF, hosting providers exiting VMware Cloud Director, and operators driven by Broadcom pricing, DORA / NIS2 sovereignty rules, or cloud repatriation."
  - label: "Engagement timeline"
    value: "Assessment in 14-28 days; a 100-VM estate typically completes in 8-12 months, a 1000-VM estate in 18-24 months."
  - label: "Migration method"
    value: "Cohort-based cutover with VMware running in parallel until validation; Konveyor Forklift performs cold or warm transfer, with virt-v2v handling VirtIO injection and VMware Tools removal."
  - label: "Migration tooling"
    value: "Forklift ships in the Aenix platform. Warm migration uses VMware changed block tracking to shorten the outage to the final delta; it is not live migration, so a reboot still occurs."
  - label: "Prerequisite you supply"
    value: "A VDDK image built from your own Broadcom download. It cannot be redistributed, it is mandatory for vSAN-backed VMs, and transfer is materially slower without it."
  - label: "Destination platform"
    value: "Cozystack default — KubeVirt for VMs and containers on one Kubernetes API, Cilium (eBPF) networking, LINSTOR/DRBD storage, Tenant CRD multi-tenancy."
faq:
  - q: "Can we keep VMware running during the migration?"
    a: "Yes, that is the standard pattern. VMware and the destination platform run in parallel, and workloads migrate cohort by cohort with validation before each cutover, so there is no big-bang weekend move."
  - q: "What if our VCF commitments lock us in for years?"
    a: "Cohort sequencing is aligned with subscription expirations, so workloads move as commitments lapse. The plan respects what is contractually paid for and avoids the final renewal."
  - q: "Do you support Windows VMs?"
    a: "Yes. KubeVirt runs Windows VMs, and virt-v2v inside Forklift injects VirtIO drivers and removes VMware Tools before the first boot, preserving static IP addresses and drive letters. Two exceptions to plan for: Windows VMs using Measured Boot cannot be converted and are rebuilt on the destination, and Windows Server 2012 and 2012 R2 do not boot after conversion because virtio-win has no drivers for them."
  - q: "What migration tooling ships in the platform?"
    a: "Konveyor Forklift, the Kubernetes migration toolkit for virtualization. It is configured through Kubernetes objects: a Provider for the vCenter or ESXi connection, a NetworkMap from source port groups to destination networks, a StorageMap from datastores to StorageClasses, and a Plan executed by a Migration. It also covers oVirt/RHV, OpenStack, OVA files and remote KubeVirt clusters as sources."
  - q: "What is the difference between warm and cold migration?"
    a: "Cold migration powers the VM off, converts it, then transfers the disks — conversion first means an unconvertible VM fails immediately rather than after hours of copying. Warm migration keeps the VM running and copies disks incrementally using VMware changed block tracking, so only the final delta moves during the cutover window. Warm is not live migration: RAM state is not carried across and the VM still reboots. It requires changed block tracking enabled on each source VM and each disk beforehand."
  - q: "Do we need a VDDK image, and can you provide one?"
    a: "You need one and we cannot provide it. The VMware Virtual Disk Development Kit is proprietary and cannot be redistributed by Aenix or by the Forklift project, so you download it under your own Broadcom entitlement and build a container image in your own registry. It is mandatory for VMs backed by vSAN, and without it disk transfer falls back to a materially slower path. Supplying it is a pre-flight item, not a mid-migration surprise."
  - q: "What platform do you migrate to?"
    a: "Cozystack by default — an Apache 2.0 CNCF project that runs VMs and containers on one Kubernetes API via KubeVirt, with Cilium networking, LINSTOR storage, and Tenant CRD multi-tenancy. Other destinations are used where technically appropriate."
  - q: "How much can a VMware migration save?"
    a: "In the engagements Aenix has modelled, a structured migration produces a 30-60% cost reduction on the workloads that move, driven by removing per-core VMware licensing. That is our own engagement data rather than a published industry benchmark, and VCF pricing is quote-driven and non-public, so the number is recomputed on your estate with the VMware cost calculator before anything is committed."
  - q: "How does Aenix engage on a VMware migration?"
    a: "It starts with a 14-28 day assessment (estate inventory, destination architecture, workload classification, cutover sequencing), followed by a 6-18 month implementation phase with Aenix engineers integrated into your team, and optional managed Cozystack operations afterward."
---

<!-- BLOCK 1: HERO -->


**Post-Broadcom VMware migration is a planned project, not an emergency. Done well, it produces a platform you control and, on the engagements we have modelled, a 30-60% cost reduction on the workloads that move. Done badly, it produces operational debt and a stalled migration that becomes the next year's emergency. The difference is structured assessment, honest TCO modelling, and engineers who have shipped this in production.**

Ænix runs end-to-end VMware migrations for organizations exiting VCF. Same engineers who built and operate [Cozystack](/products/cozystack/) — the destination platform we typically recommend — work alongside your team for assessment, sequencing, and implementation.

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** for anyone selling cloud — hosters exiting VMware Cloud Director (the most common 2026 pattern), MSPs, telcos, national operators; **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** for regulated enterprises exiting VCF for their own consumption. Free [VMware Migration Checklist →](/resources/vmware-migration-checklist/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/blog/2026/05/vmware-migration-tools-and-strategy/">Read playbook →</a>
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO -->

## Who runs a VMware migration in 2026

Organizations triggered by:

- **Broadcom subscription renewal** — renewal quotes at 2-5× the prior deal in the engagements we run; ELA breakage; mandatory VCF bundling. VCF pricing is not published, so read that multiplier as our observation, not an industry figure
- **Sovereignty pressure** — DORA, NIS2, sectoral rules forcing critical workloads to customer-controlled infrastructure
- **AI / GPU economics** — sustained workloads where VMware GPU model adds licensing complexity
- **Repatriation strategy** — VMware-on-cloud workloads moving to private infrastructure
- **Modernization** — old VCF estate where the upgrade path is also the exit path

If two or more apply, structured migration compounds. If renewal is comfortable and no other trigger, "stay and tune" is honest.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT'S COVERED -->

## What an Ænix VMware migration covers

<div class="grid-2x2">

**1. Inventory and assessment**
vSphere / VCF / vCD inventory: workload count, OS mix, vSAN dependencies, NSX integrations, custom services, multi-site topology. Workload classification: migrate-now / migrate-later / stay / re-platform.

**2. Destination architecture**
Target platform on customer hardware. Cozystack default (KubeVirt + Cilium + LINSTOR + Tenant CRD); other options where appropriate. Sizing, capacity model, operations design.

**3. Migration execution**
Cohort-based migration. Konveyor Forklift drives virt-v2v and KubeVirt CDI; Windows guest cleanup is automated. Network and storage cutover. Parallel-run with VMware until validation. Cutover sequencing aligned with VCF subscription expirations.

**4. Decommission**
VMware decommission as cohorts complete. Hardware repurposed where applicable. Final renewal avoided.

</div>

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>VMware VCF / vSphere / vCD</b><div class="diagram__chips"><span>vSAN</span><span>NSX</span><span>Windows VMs</span></div></div>
<div class="diagram__conn">moves through</div>
<div class="diagram__node"><b>Cohort-based cutover</b><div class="diagram__chips"><span>Forklift: virt-v2v + CDI</span><span>Parallel-run validation</span></div></div>
<div class="diagram__conn">lands on</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium</span><span>LINSTOR</span></div></div>
<div class="diagram__conn">completes with</div>
<div class="diagram__node"><b>VMware decommission</b><div class="diagram__chips"><span>Final renewal avoided</span><span>Per-core licensing removed</span></div></div>
</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 3b: FORKLIFT -->

## Forklift: the VM transfer engine in the platform

Ænix ships [Konveyor Forklift](https://github.com/kubev2v/forklift) — the Kubernetes migration toolkit for virtualization — as part of the platform, so moving a cohort off vSphere does not need a separate tool, a separate licence or a separate project. Forklift is the same open-source engine that Red Hat distributes as the Migration Toolkit for Virtualization; it drives `virt-v2v` and KubeVirt CDI underneath and is configured through Kubernetes objects rather than a GUI-only workflow.

**How it is configured.** Four object types cover a migration:

- `Provider` — the connection to vCenter (or directly to ESXi) and to the destination cluster.
- `NetworkMap` — each source port group maps to a destination network: the pod network, a specific Multus attachment, or `ignored`. Per-network `networkIPMode` decides whether a static address is preserved, replaced by DHCP, or left alone.
- `StorageMap` — each source datastore maps to a destination StorageClass, with volume mode (`Block` or `Filesystem`) and access mode set per mapping.
- `Plan` and `Migration` — a Plan is a set of VMs sharing parameters and mappings; a Migration executes it. One Migration runs per Plan at a time, and the power state of each source VM is preserved through the move.

**Cold and warm.** Both are supported from vSphere, and the difference matters for planning:

- **Cold** — the source VM is powered off, converted, then transferred. Conversion happens before data movement, so a VM that cannot be converted fails immediately instead of after hours of copying. This is the default and the right choice for anything with a maintenance window.
- **Warm** — the VM keeps running while its disks are copied incrementally using VMware changed block tracking (CBT), by default snapshotting every hour. At cutover the VM is shut down and only the remaining delta moves. **Warm migration is not live migration**: RAM state is not carried across, so there is still a reboot. It shortens the outage from "length of a full disk copy" to "length of the last delta", which is the whole point for a large database VM.
- Warm requires **CBT enabled on each source VM and each of its disks** before the migration starts, and a VM tops out at 28 CBT snapshots. Windows guests additionally need VMware Tools present with Volume Shadow Copy Service and the VMware Snapshot Provider set to Manual or Automatic, or the snapshot step fails.

**What virt-v2v does to the guest.** VirtIO drivers are injected, VMware Tools and VMware-specific NIC configuration are removed, boot configuration is rewritten, and the QEMU guest agent is installed. Static IP addresses from vSphere are preserved, and Windows drive letters are kept. This is the automated version of the manual cleanup that makes hand-rolled VMware migrations painful.

**VDDK, and the licence problem you inherit.** The VMware Virtual Disk Development Kit is the fast disk-read path, and it is not optional in practice:

- Without VDDK, transfer falls back to a materially slower path.
- With VMs backed by **vSAN, VDDK is mandatory** — those migrations do not work without it.
- The VDDK cannot be redistributed. Neither Ænix nor the Forklift project may ship it. You download it from Broadcom under your own entitlement, build a container image from it, and push that image to your own registry. Storing it in a public registry may breach the VMware licence terms. The platform takes the image reference as configuration; supplying the image is the customer's step, and it is on the pre-flight checklist for exactly this reason.

**Sources other than vSphere.** The same engine covers oVirt/RHV, OpenStack, OVA files and remote KubeVirt clusters as cold migrations; warm migration is available from vSphere and RHV only. vSphere 6.5 and later is supported.

**What Forklift will not do.** These are real and should be found during assessment, not during cutover:

- Windows VMs with **Measured Boot** cannot be migrated — they are rebuilt on the destination. Secure Boot VMs may need Secure Boot disabled on the destination side.
- **Windows Server 2012 and 2012 R2** do not boot after conversion; `virtio-win` has no drivers for them and there is currently no workaround. Plan those as rebuilds or leave them until the guest OS is upgraded.
- Hibernated VMs are not supported; hibernation is disabled on the source first.
- ISOs and CD-ROMs must be unmounted, every NIC needs an address, and VM names must be DNS-compliant and unique.
- Vendor appliances shipped as OVAs may fall outside the vendor's support terms once converted. Check before you migrate one, not after.
- Guest OSes that `virt-v2v` does not support can be moved in raw copy mode, but they land on emulated devices rather than VirtIO and may boot or perform worse. Treat it as a fallback, not a plan.

Forklift covers the disk and guest layer. It does not decide your tenant model, your address plan or your cutover order — that is what the assessment and the cohort sequence are for.

**Upstream status, stated plainly:** Forklift ships in the Ænix platform today. The work to expose it as tenant self-service VM import in upstream open-source Cozystack is in review and is not yet in a released Cozystack version. If you are running Cozystack yourself rather than the Ænix platform, you deploy Forklift alongside it for now.

<!-- /BLOCK 3b -->

---

<!-- BLOCK 4: COMMON MIGRATION FAILURES -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Where VMware migrations commonly fail

<div class="gap-cards-2">

**No honest TCO before migration**
Migration economics look attractive in theory; in practice, hardware refresh, platform-team capacity, and operational learning curve aren't accounted for. Project stalls when economics turn out different from assumed.

**Big-bang cutover attempted**
Single weekend "we'll move it all" rarely works at enterprise scale. Cohort-based migration with validated parallel-run is the working pattern.

**Destination architecture inadequate**
Workloads land on a private cloud that hasn't been engineered for production. Operational debt builds; team blames migration when the issue is destination platform maturity.

**Network and storage redesign skipped**
Networking and storage on Cozystack (or alternative) are different from NSX/vSAN. Skipping the redesign produces operational fragility.

</div>

</div>
</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 4b: COST CALCULATOR -->

## Estimate the cost difference

Before committing, model the delta. Enter your estate size and current VMware price; the calculator shows the annual saving, the three-year net after migration, and how fast the migration pays back. For the standalone tool and methodology, see the **[VMware cost calculator](/resources/vmware-cost-calculator/)**.

{{< vmware-calculator >}}

<!-- /BLOCK 4b -->

---

<!-- BLOCK 5: HOW WE ENGAGE -->

## How Ænix engages on VMware migration

The engagement structure mirrors our **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with VMware-migration emphasis:

- **Assessment (14-28 days)** — VMware estate inventory, destination architecture, workload classification, cutover sequencing, Phase 2 roadmap.
- **Phase 2 implementation (6-18 months)** — Ænix engineers integrated with your team for migration cohorts. Parallel-run validation. Knowledge transfer throughout.
- **Phase 3 (optional)** — managed Cozystack operations after migration completes.

For VMware-specific destination guidance, see **[VMware alternative](/alternatives/vmware-alternative/)** (singular, vendor-focused) or **[VMware alternatives listicle](/alternatives/vmware-alternatives/)** (plural, market scan).

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX -->

## Why Ænix specifically for VMware migration

- **Cozystack-native experience.** We built the destination platform many migrations end up on. Implementation effort estimates calibrated against work we've shipped.
- **No hyperscaler bias.** Recommendations reflect technical fit, not partner economics. We say "stay in cloud" when right.
- **EU + Central Asia teams.** Time-zone friendly; aligned with DACH/EU regulatory frameworks.
- **Open-source destination.** Cozystack is Apache 2.0; the platform you migrate to is one you own.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## Typical migration timeline

| When | What |
|---|---|
| Day 0 | Discovery call (free) — confirm fit |
| Days 1-13 (or 1-27) | Platform Readiness Assessment with VMware emphasis |
| Day 14 (or 28) | Executive readout — written plan |
| Months 1-3 | Destination platform foundation |
| Months 3-12 | Workload cohorts migrate (cohort cadence aligned with VCF expirations) |
| Months 12-24 | VMware decommission complete |

100-VM estate typically completes in 8-12 months. 1000-VM estate in 18-24 months.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## VMware migrations we've supported

{{< clients >}}

{{< quote-carousel >}}

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

<div class="pricing-cards-2">

### Assessment
**On request**

### Implementation
Time-and-materials or fixed-scope.
**On request**

</div>

If Phase 2 follows assessment, assessment fee credited subject to scope.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->

---

<!-- BLOCK 11: CTA -->

<a id="discovery"></a>
<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

- **[VMware migration tools & strategy](/blog/2026/05/vmware-migration-tools-and-strategy/)**
- **[VMware alternative](/alternatives/vmware-alternative/)** — destination focus
- **[VMware alternatives listicle](/alternatives/vmware-alternatives/)** — market scan
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**
- **[Cozystack](/products/cozystack/)**

<!-- /BLOCK 11 -->

---

*Ænix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack.*

<!-- SEO: title "VMware Migration — Exit VCF Without Breaking the Application | Ænix"
Description: "VMware migration end-to-end: assessment, destination architecture, cohort-based cutover, decommission. EU engineers, no hyperscaler bias."
Word count: ~1000.
-->
