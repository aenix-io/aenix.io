---
title: "IBM AIX / Power migration — exit Power to an open cloud"
seo_title: "IBM AIX / Power migration to Cozystack on x86"
description: "Migrate off IBM AIX/Power and Cloud Pak/OpenShift to an open, Kubernetes-native platform on commodity x86. Honest TCO and Oracle-safe design."
date: 2026-06-06
lastmod: 2026-06-06
page_type: migration-hub
primary_keyword: "IBM AIX migration"
secondary_keywords:
  - "migrate from AIX to Linux"
  - "IBM Power to x86 migration"
  - "IBM Power Systems"
  - "AIX end of life"
  - "IBM PowerVM alternative"
  - "IBM Cloud Pak alternative"
  - "Oracle on Kubernetes licensing"
  - "private cloud for banks"
images: ["img/og/og-ibm-migration.jpg"]
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_de: /de/migration/ibm/
related_pages:
  - /alternatives/openshift-alternative/
  - /compare/cozystack-vs-openshift/
  - /compare/cozystack-vs-openstack/
  - /products/private-cloud-platform/
  - /industries/financial-services/
  - /solutions/data-sovereignty/
  - /services/platform-readiness-assessment/
  - /products/cozystack/
  - /pricing/
service:
  type: "Platform Migration"
  areaServed: ["EU", "MENA", "Central Asia", "Global"]
  audience: "Financial Services"
direct_answer: |
  **An IBM AIX/Power exit moves workloads off premium POWER hardware, AIX/PowerVM licensing, and IBM SWMA/HWMA contracts onto commodity x86 running an open, Kubernetes-native platform. Cozystack — Apache 2.0, a CNCF Sandbox project — runs VMs and containers under one API (KubeVirt + Cilium + LINSTOR), so an existing Kubernetes team can operate it without scarce AIX/Power specialists. Ænix runs the exit end-to-end: estate inventory, destination architecture, Oracle-safe design, cohort cutover, decommission. The typical lever for non-IT decision-makers is cost: a mid-size bank model shows roughly 40% three-year TCO reduction, driven by x86 over POWER, zero platform licensing, and shrinking the expensive Oracle-on-Power footprint.**
quick_facts:
  - label: "What it is"
    value: "End-to-end migration from IBM AIX/Power (and Cloud Pak/OpenShift) to commodity x86 on Cozystack"
  - label: "Destination licence"
    value: "Apache 2.0 — no per-socket / per-core / per-vCPU platform licensing"
  - label: "Virtualization"
    value: "KubeVirt replaces PowerVM; VMs and containers on one Kubernetes scheduler"
  - label: "Typical TCO reduction"
    value: "~40% over three years (illustrative mid-size-bank model; recomputed on real estate data)"
  - label: "Oracle"
    value: "Kept on dedicated bare-metal and attached as an external app — licence-clean (Oracle treats KubeVirt as soft partitioning)"
  - label: "Engagement"
    value: "Platform Readiness Assessment (14 or 28 days, fixed price) → pilot → cohort migration; migration services quoted after the assessment"
  - label: "Commercial model"
    value: "Ænix Private Cloud Platform is quoted per RFP; support tiers for self-run Cozystack start at $1,250 per 10 nodes per month"
quick_facts_source: "[Cozystack docs](https://cozystack.io), [Oracle Partitioning Policy](https://www.oracle.com/assets/partitioning-070609.pdf)"
faq:
  - q: "Can we lift-and-shift AIX binaries to x86?"
    a: "No. AIX runs on big-endian POWER; x86 is little-endian. AIX binaries do not run unchanged on x86 — applications must be rebuilt or re-platformed. Modern microservices and most database/middleware workloads move cleanly; older monoliths need a re-architecture step. An honest migration separates these two classes up front rather than promising a binary lift-and-shift."
  - q: "Do we have to give up PowerVM live migration?"
    a: "No. KubeVirt provides live migration of running VMs between x86 nodes. In stretched-cluster designs across data centres, replication switches to synchronous only for the VM in flight, so cluster-wide latency does not rise. Stretched designs are delivered as engineering work in the build; there is no automated cross-site VM failover."
  - q: "We depend on Oracle Database. Does Kubernetes break Oracle licensing?"
    a: "It would if you ran Oracle inside the cluster. Oracle treats Kubernetes and KubeVirt as soft partitioning and does not accept them as a way to limit the licensable scope — running Oracle in a cluster VM can require licensing every physical core it could land on. The recommended pattern keeps production Oracle on dedicated, separately-licensed bare-metal and attaches it to the platform as an external application over a private network. Licence-clean, and it matches how most banks already run Oracle."
  - q: "Is IBM Cloud Pak / OpenShift the same kind of product?"
    a: "Not quite. Cloud Pak is a proprietary data/AI software bundle on Red Hat OpenShift, licensed per-cluster on a vCPU-per-pod metric with a restricted OpenShift entitlement — a different class of product from a VM cloud. For an OpenShift-specific comparison see the [OpenShift alternative](/alternatives/openshift-alternative/) and [Cozystack vs OpenShift](/compare/cozystack-vs-openshift/)."
  - q: "Can our existing team operate it, given we lack AIX specialists?"
    a: "That is the point of the destination. The platform is operated with Kubernetes/DevOps skills — the talent pool you can actually hire — instead of scarce AIX/PowerVM specialists. Ænix provides training (Kubernetes Deep Dive); managed migration and 24×7 managed operations are available as separately quoted services."
  - q: "What does the migration cost, and how is it engaged?"
    a: "It starts with a fixed-price Platform Readiness Assessment (14 or 28 days). Ænix Private Cloud Platform programmes for banks are quoted per RFP after the assessment; migration services, a pilot and managed operations are scoped and quoted separately. Support tiers for self-run Cozystack start at $1,250 per 10 nodes per month. See the [pricing page](/pricing/)."
  - q: "Will this run air-gapped for a regulated banking estate?"
    a: "Yes. Air-gapped installation, white-labelling, backup and GPU sharing are open-source Cozystack capabilities; the Ænix support tiers set how much help you get with them, and the billing/chargeback components are Ænix modules. The platform is on-prem-first and built for sovereign, customer-controlled infrastructure — see [Data sovereignty](/solutions/data-sovereignty/) and [Financial services](/industries/financial-services/)."
---

<!-- BLOCK 1: HERO -->

**IBM POWER hardware is capital-heavy, AIX/PowerVM is licensed per socket, and SWMA/HWMA renewals compound every year — while AIX specialists get harder to hire. An IBM exit moves those workloads onto commodity x86 running an open, Kubernetes-native platform your existing team can operate.**

Ænix runs IBM AIX/Power migrations end-to-end. The engineers who created and co-maintain [Cozystack](/products/cozystack/) — the open-source destination platform — work alongside your team for assessment, sequencing, and execution.

> **Pairs with:** **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** for regulated banks (air-gapped installs, chargeback, migration delivered as a quoted service), or the **[OpenShift alternative](/alternatives/openshift-alternative/)** if you're specifically replacing IBM Cloud Pak / OpenShift.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/pricing/">See pricing →</a>
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO -->

## Who runs an IBM exit in 2026

Organizations triggered by:

- **IBM Power Systems (AIX) hardware at end-of-life** — refresh means another capital-heavy POWER purchase, or an exit.
- **IBM cost compounding** — premium POWER CapEx, socket-based AIX + PowerVM licensing, and SWMA/HWMA renewals, year over year.
- **Oracle-on-Power tax** — Oracle carries a core-factor of 1.0 on POWER (the maximum). Every non-Oracle workload still sitting on POWER inflates the licensable core count.
- **Scarce specialists** — AIX/PowerVM expertise is a shrinking, expensive talent pool; Kubernetes/DevOps is not.
- **Sovereignty and sanctions exposure** — a proprietary, single-vendor stack is a different risk profile from an open, CNCF-governed platform for state-owned and regulated institutions.
- **Modernization** — a legacy estate where the upgrade path is also the exit path, often alongside a move to microservices.

If two or more apply, a structured exit compounds. If a comfortable POWER refresh is already budgeted and nothing else bites, "stay and tune" is the honest answer.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT'S COVERED -->

## What an Ænix IBM migration covers

<div class="grid-2x2">

**1. Inventory and assessment**
AIX/Power estate: LPARs, sockets and cores, firmware, PowerVM dependencies, Oracle footprint, Cloud Pak/OpenShift usage. Workload classification: rebuild-now / re-platform-later / keep-on-bare-metal (Oracle) / retire.

**2. Destination architecture**
Target platform on commodity x86. Cozystack default — KubeVirt for VMs, Cilium (eBPF) for networking, LINSTOR/DRBD on ZFS for storage, Tenant CRD for multi-tenancy. Capacity model, HA, and geo design.

**3. Migration execution**
Cohort-based. Microservices and container workloads first; VMs via KubeVirt; databases re-platformed or attached externally. Parallel-run against the IBM estate until validation. Live migration and geo-stretch handled by the platform.

**4. Decommission**
POWER frames retired as cohorts complete; AIX/PowerVM and IBM support contracts wound down. Oracle footprint compressed to dedicated hosts only.

</div>

**Honest scoping note — endianness.** AIX is big-endian on POWER, x86 little-endian: there is no binary lift-and-shift. Modern microservices and standard database/middleware move cleanly; legacy monoliths need re-architecture. We separate the two classes in the assessment, not mid-cutover.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>IBM AIX / PowerVM on POWER</b><div class="diagram__chips"><span>LPARs</span><span>Socket-based licensing</span><span>SWMA/HWMA</span></div></div>
<div class="diagram__conn">moves through</div>
<div class="diagram__node"><b>Cohort-based cutover</b><div class="diagram__chips"><span>Microservices first</span><span>VMs via KubeVirt</span><span>Parallel-run validation</span></div></div>
<div class="diagram__conn">lands on</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack on commodity x86</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium</span><span>LINSTOR</span></div></div>
<div class="diagram__conn">completes with</div>
<div class="diagram__node"><b>POWER frames retired</b><div class="diagram__chips"><span>~40% three-year TCO reduction</span><span>Oracle on dedicated bare-metal</span></div></div>
</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: COST -->

## The economics: Cozystack vs IBM

The model below is an illustrative list-price scenario for a mid-size bank (~500 staff) moving the subset of workloads that can leave POWER (microservices, VMs, non-Oracle databases) over a three-year horizon. Figures are order-of-magnitude and recomputed on real estate data during assessment.

| Line item (3 years) | IBM / AIX / Power | Cozystack (x86) |
|---|---|---|
| Hardware (CapEx) | $200,000 — refresh 2 POWER servers | $90,000 — 6 commodity x86 nodes |
| OS / platform licensing | $40,000 — AIX + PowerVM | $0 — Apache 2.0 |
| Support (3 yr) | $180,000 — IBM SWMA/HWMA | $198,000 — Plus support tier list price for 10 nodes (24×7, guided migration, 3 h/month training) |
| Oracle (licence + support) | $300,000 — on shared POWER (core-factor 1.0) | $120,000 — isolated to a minimal dedicated footprint |
| Migration services | — | Quoted after the assessment (not included above) |
| **Total (3 years)** | **$720,000** | **$408,000 + migration services** |

{{< factoid number="~40%" label="illustrative three-year TCO reduction — driven by commodity x86 over POWER, zero platform licensing, and shrinking the Oracle-on-Power footprint" source="Ænix TCO model, mid-size-bank scenario, list-price order-of-magnitude" >}}

The support line uses the published Plus tier as an illustration; an Ænix Private Cloud Platform programme for a bank is quoted per RFP, and migration services are quoted separately after the assessment. Model your own numbers with the **[TCO calculator](/tco-calculator/)** or on a **[discovery call](/contact/)**.

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: ORACLE -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Oracle: the licensing trap to avoid

The single most expensive mistake in a Power-to-Kubernetes move is running production Oracle inside the cluster.

- **Oracle treats Kubernetes and KubeVirt as soft partitioning.** CPU limits and pinning do not narrow the licensable scope — "the processors of all nodes in the cluster are subject to Oracle licensing."
- **The node is licensed, not the pod.** A whole worker node counts even if Oracle uses a fraction of its cores; a KubeVirt VM does not qualify as Oracle-approved hard partitioning.
- **The clean path:** keep production Oracle on dedicated, separately-licensed bare-metal and attach it to the platform as an **external application** (Helm chart / operator wrapping connection points and credentials via external secret reference) over a private network. Tenant workloads reach it like any managed endpoint; the database is never pulled into the cluster.

It compresses the licensable footprint as non-Oracle workloads leave POWER. (Oracle's partitioning policy is "educational, not contractual" — finalize the model with Oracle and your legal team.)

</div>
</div>

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: PLATFORM PROFILE -->

## Cozystack vs OpenStack vs IBM Cloud Pak

| Criterion | Cozystack | OpenStack | IBM Cloud Pak / OpenShift |
|---|---|---|---|
| What it is | Open PaaS framework on Kubernetes for building a cloud | IaaS — modular infrastructure services | Proprietary data/AI software bundle on Red Hat OpenShift |
| VM + containers | One API (KubeVirt + containers, one scheduler) | Separate: VMs via Nova, containers via Zun/Magnum | Container-centric; no native unified VM+container provisioning |
| Licence & cost | Apache 2.0; software free. Ænix support tiers from $1,250/mo per 10 nodes | Apache 2.0; pay for distro/support | Proprietary per-cluster subscription, vCPU-per-pod metric; restricted OpenShift entitlement |
| Vendor lock-in | Low — API-first, CNCF-governed | Medium — at the distro level | High — proprietary stack + bundled-restricted OpenShift |
| Multi-tenancy | Native (Tenant model, eBPF isolation, billing integration) | Native (Keystone, projects, quotas) | Supported (OpenShift namespaces + Zen) |
| On-prem / air-gap | Yes | Yes | Yes (operator-catalog mirroring) |

Cozystack is a CNCF Sandbox project (its Incubation application is in due diligence), released under Apache 2.0 and governed in the open rather than by a single vendor. That removes most of the "vendor changes the licence" risk of proprietary and quasi-open products: a different risk profile for a state-owned bank under a digital-sovereignty mandate.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: SCALE & STORAGE -->

## Storage and scale on x86

The destination architecture is engineered for linear horizontal growth — each x86 node adds both compute and a share of distributed storage, no re-architecture:

- **Storage in the kernel.** LINSTOR orchestrates per-volume DRBD devices on ZFS; DRBD replicates in the Linux kernel rather than in a userspace daemon, so the write path does not cross into user space on every I/O. After a node returns, DRBD resyncs only the changed chunks by bitmap, not the whole disk — critical at large volume sizes.
- **No bottleneck at scale.** Each PVC is an independent DRBD device spread across the cluster — 100 volumes means 100 independent devices, not one fat shared device.
- **Network.** Cilium eBPF replaces kube-proxy with O(1) in-kernel service lookup; latency does not degrade as service count grows.
- **Geo-stretch.** Stretched-cluster designs can span up to three data centres; replication goes synchronous only for a migrating VM, governed by a hard RTT budget (~15 ms). These designs are delivered as engineering work; there is no automated cross-site VM failover.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: HOW WE ENGAGE -->

## How Ænix engages

- **Assessment (14 or 28 days)** — [Platform Readiness Assessment](/services/platform-readiness-assessment/): AIX/Power inventory, destination architecture, workload classification, Oracle plan, cutover sequencing, risk register.
- **Pilot** — Cozystack stood up as a working framework against your real requirements; success criteria agreed up front. Scope and price are set in the assessment.
- **Migration** — cohort execution with parallel-run validation, quoted after the assessment; legal/procurement can run on your templates (tenders, forms).
- **Operations (optional)** — managed Cozystack operations, 24×7, after cutover, quoted separately.

A recurring real-world idea: stand the platform up on the POWER servers being freed at end-of-life (POWER supports Linux) as a live demonstration before committing the wider estate.

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: WHY AENIX -->

## Why Ænix specifically

- **We created the destination platform.** Estimates are calibrated against work we have shipped, not theory.
- **Honest about hard parts.** Endianness, Oracle licensing, and legacy re-architecture are surfaced in the assessment, not mid-cutover.
- **Operable by your team.** Kubernetes skills you can hire, not scarce AIX/PowerVM specialists.
- **Open destination.** Apache 2.0 and CNCF-governed — you run the platform you migrate to without a platform licence fee.
- **EU and Central Asia teams.** Engineering teams in the EU and Central Asia; EU contracts through AENIX s.r.o. (Czech Republic).

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: TIMELINE -->

## Typical migration timeline

| When | What |
|---|---|
| Day 0 | Discovery call (free) — confirm fit |
| Days 1-14 (or 1-28) | Platform Readiness Assessment, fixed price |
| Day 14 (or 28) | Executive readout — written plan + TCO on real data |
| After the readout | Pilot against real workloads |
| Build phase | Workload cohorts migrate; POWER frames retired as cohorts complete |
| End of programme | IBM/AIX decommission; Oracle compressed to dedicated hosts |

Estate size and the legacy/microservice mix drive the actual schedule; a private-cloud build typically runs 3-12 months depending on scope, and sequencing is set in the assessment.

<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: PROOF -->

## Companies running platforms built with Ænix

{{< clients >}}

Hosting providers running Ænix Public Cloud Platform in production. For regulated finance, see the anonymised [bank](/case-studies/private-cloud-in-a-bank/) and [financial group](/case-studies/unified-cloud-portal-financial-group/) case studies.

{{< quote-carousel >}}

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FAQ — auto-injected by template from `faq:` frontmatter -->

---

<!-- BLOCK 13: CTA -->

<a id="discovery"></a>

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/services/platform-readiness-assessment/">Get an assessment →</a>
</div>

- **[OpenShift alternative](/alternatives/openshift-alternative/)** — replacing Cloud Pak / OpenShift
- **[Cozystack vs OpenShift](/compare/cozystack-vs-openshift/)** — direct comparison
- **[Private Cloud Platform](/products/private-cloud-platform/)** — turnkey for regulated banks
- **[Financial services](/industries/financial-services/)** — sector context
- **[Data sovereignty](/solutions/data-sovereignty/)** — open, customer-controlled infrastructure
- **[Cozystack](/products/cozystack/)** — the open-source destination platform
- **[OpenStack alternative](/alternatives/openstack-alternative/)** and **[Cozystack vs OpenStack](/compare/cozystack-vs-openstack/)** — if OpenStack is on your shortlist

<!-- /BLOCK 13 -->

---

*Ænix created Cozystack (a CNCF Sandbox project) and co-maintains it with maintainers from other companies. On top of it, Ænix offers three platforms — Public Cloud, Private Cloud and AI.*
