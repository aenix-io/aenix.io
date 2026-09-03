---
title: "Cloud platform for transport and logistics — NIS2-aligned, edge-aware, AI-ready"
description: "Transport and logistics operators in 2026 face: NIS2 essential-entity classification (transport sector is in scope under Annex I), AI-driven optimization..."
related_pages:
  - /solutions/nis2-compliance
  - /solutions/data-sovereignty
  - /products/private-cloud-platform/
  - /products/cozystack
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Transport and logistics operators classified as essential entities under NIS2 (the transport sector falls under Annex I) need a cloud platform that runs consistently at headquarters, regional sites, and the edge — depots, ports, terminals, and vehicles — under one operational model. Aenix addresses this with Cozystack, the CNCF open-source platform it builds, and the commercial Ænix Platform on top. Cozystack runs virtual machines and containers on one Kubernetes API via KubeVirt, with Cilium eBPF networking and LINSTOR/DRBD storage, and supports air-gapped operational-technology systems such as rail signalling and port automation. Built-in Tenant-CRD multi-tenancy separates freight, passenger, and intermodal business units, while AI infrastructure serves routing, demand forecasting, and predictive maintenance. NIS2-aligned controls are structural rather than bolted on.**

quick_facts:
  - label: "What it is"
    value: "A single Kubernetes-based cloud platform for transport and logistics operators spanning HQ, regional sites, and edge (depots, ports, terminals, vehicles)."
  - label: "Who it is for"
    value: "Air, rail, water, and road freight operators, logistics service providers, last-mile and fleet operators, and port/terminal operators — many of which are NIS2 essential entities."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Regulation in scope"
    value: "NIS2 — the transport sector is classified as an essential entity under Annex I; controls are addressed structurally in the platform."
  - label: "Key capability"
    value: "VMs and containers on one Kubernetes API (KubeVirt), Cilium eBPF networking, LINSTOR/DRBD storage, and air-gap support for OT systems like rail signalling and port automation."
  - label: "Commercial offering"
    value: "Ænix Platform tiers — Basic $1,250/mo (10 nodes), Standard $3,000, Plus $5,500, Enterprise custom."

faq:
  - q: "Is transport in scope for NIS2?"
    a: "Yes. The transport sector (air, rail, water, and road) is classified as an essential entity under NIS2 Annex I. Aenix designs the platform so NIS2-aligned controls — tenancy isolation, network policy, and sovereignty options — are structural rather than added afterward."
  - q: "Can the same platform run at HQ, regional sites, and the edge?"
    a: "Yes. Cozystack runs HQ, regional, and depot/port/terminal/vehicle edge locations under one Kubernetes API, so teams operate every site with one model instead of separate stacks for cloud and edge."
  - q: "How does it handle operational-technology systems like rail signalling or port automation?"
    a: "Cozystack supports air-gapped deployments, so OT systems such as rail signalling and port automation can run isolated from external networks while still using the same platform tooling and operational model as the rest of the estate."
  - q: "Can different business units share the platform safely?"
    a: "Yes. Cozystack uses a Tenant CRD for multi-tenancy, allowing cross-business-unit separation — for example freight, passenger, and intermodal — on shared infrastructure with isolated namespaces and policy boundaries."
  - q: "Does it support AI workloads for routing and predictive maintenance?"
    a: "Yes. The platform provides AI infrastructure for routing optimization, demand forecasting, and predictive maintenance, running those workloads alongside VMs and containers on the same Kubernetes API."
  - q: "Is it a good fit for a VMware exit or OpenStack modernization?"
    a: "Yes. Cozystack is Apache 2.0 with no per-CPU or per-core licensing and runs VMs via KubeVirt, making it a common target for transport operators migrating off VMware or modernizing OpenStack-based infrastructure."
---

**Transport and logistics is in NIS2 scope as an essential-entity sector (Annex I, covering air, rail, water and road), and it is the sector where the compute follows the freight: a terminal, a depot, a marshalling yard and a vehicle each need to keep working when the link to headquarters does not. The architectural consequence is that site autonomy, not central elegance, is the property the platform is judged on.**

> **Pairs with:** **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** — multi-DC + edge architecture, NIS2 compliance, sovereign-cloud option for cross-border logistics data.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/blog/2026/05/transport-logistics-cloud-architecture-nis2/">Transport architecture →</a>
</div>

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Who comes to us, and why

Air, rail, water and road freight operators, multi-modal logistics service providers, port and terminal operators, last-mile and fleet organizations. Four triggers dominate:

- **NIS2 as an essential entity** — transport is named in Annex I, so risk management, supply-chain security and incident reporting are binding, and the evidence has to come from somewhere.
- **A VMware exit that cannot break the TOS or WMS** — the vendor-supported VM appliance is the constraint, not the containerized services around it.
- **Edge compute that has to survive a bad link** — depots, ports, terminals and vehicles, where autonomy beats central consistency.
- **Cross-border logistics data** — freight data crosses jurisdictions on every consignment; residency has to be a property of where a workload is pinned, not a clause.

</div>
</div>

---

## What actually runs at a site, and what happens when the link drops

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>HQ + regional sites</b><div class="diagram__chips"><span>TMS</span><span>Planning</span><span>Cross-site aggregation</span></div></div>
<div class="diagram__conn">run on</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack / Ænix Platform</b><div class="diagram__chips"><span>One Kubernetes API</span><span>KubeVirt VMs + containers</span><span>Tenant CRD</span></div></div>
<div class="diagram__conn">extends to</div>
<div class="diagram__node"><b>Site clusters</b><div class="diagram__chips"><span>TOS / WMS</span><span>Gate and OCR</span><span>Telematics ingest</span></div></div>
<div class="diagram__conn">bounded from</div>
<div class="diagram__node"><b>OT</b><div class="diagram__chips"><span>Signalling</span><span>Crane and AGV control</span></div></div>
</div>
</div>

**The terminal operating system is the hard case.** A TOS or a WMS is a stateful, latency-sensitive application that a vendor supports on a named OS and often ships as a VM appliance. It is what stops a container-only platform at the gate. On Cozystack it runs as a KubeVirt VM on the site cluster, next to the containerized services, on one network and one backup class — the vendor keeps its support matrix and you stop operating a second hypervisor to humour it.

**Gate, OCR and telematics are edge ingest, not analytics.** Gate automation, licence-plate and container-number OCR, weighbridge integration and vehicle telematics all produce a high-rate local stream that is useless if it has to round-trip to headquarters. It is processed on the site cluster and forwarded upward as summarised events, which is also what keeps the WAN bill sane across a few hundred depots.

**The OT boundary is a boundary, not a merge.** Rail signalling, crane and AGV control, and interlocking stay on their own network under their own change control and safety case. The platform sits above them, taking data across defined conduits enforced by Cilium network policy, and runs air-gapped where the site security concept requires it. Nothing about the platform is in the path of a safety function.

**When the uplink dies, the site keeps working.** Site workloads serve from local storage with state replicated inside the site rather than to headquarters. What stops is replication upward, central dashboards and cross-network planning; when the link returns, buffered data drains and the site resynchronizes. Trucks do not wait on a WAN circuit — which is the reason a hyperscaler edge service is a poor fit for a terminal.

**Multi-tenancy is how freight, passenger and intermodal share it.** One Tenant CRD boundary per business unit, per site or per joint-venture partner, with quotas and audit that survive a NIS2 supervisor asking who could reach what.

---

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

- **[Transport architecture article](/blog/2026/05/transport-logistics-cloud-architecture-nis2/)**
- **[NIS2 compliance](/solutions/nis2-compliance/)**
- **[Sovereign AI](/solutions/sovereign-ai/)**

---

*Ænix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack.*

