---
title: "Transport and logistics cloud architecture — NIS2, AI, edge in 2026"
seo_title: "Transport and logistics cloud architecture under NIS2"
description: "Transport cloud architecture under NIS2: who builds it, how terminals and depots keep working when the link drops, and where the TOS and AI inference run."
date: "2026-05-29"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/transport-logistics-cloud-architecture-nis2.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["NIS2", "Cozystack", "Sovereignty", "AI and ML", "GPU"]
language: "en"
companion_landing: "/industries/transport-logistics/"
quiz:
  title: "Test yourself: transport / logistics cloud"
  questions:
    - q: "Under NIS2, where does transport fall?"
      options:
        - { text: "Annex I sector; essential or important depending on size (Article 3)", correct: true }
        - { text: "Annex II sector; always an important entity", correct: false }
        - { text: "Out of scope for transport ICT", correct: false }
      explanation: "Transport (air, rail, water, road) is an Annex I sector of high criticality. Under Article 3, large transport entities are essential and medium-sized ones important. Either way, the Article 21 risk-management measures and the Article 23 reporting deadlines apply to the ICT they run."
    - q: "How does the article suggest running a terminal operating system that the vendor ships as a VM appliance?"
      options:
        - { text: "Rewrite it as containers before the migration", correct: false }
        - { text: "As a KubeVirt VM on the site cluster, next to the containerised services", correct: true }
        - { text: "Keep a separate hypervisor at every terminal just for the TOS", correct: false }
        - { text: "Move it to headquarters and reach it over the WAN", correct: false }
      explanation: "The TOS or WMS is stateful, latency-sensitive and supported by its vendor on a named OS. It runs as a KubeVirt VM on the site cluster, on the same network and backup class as the containers around it, so the vendor keeps its support matrix and nobody runs a second hypervisor."
    - q: "What happens at a terminal when the uplink to headquarters drops?"
      options:
        - { text: "Site workloads stop until the link returns", correct: false }
        - { text: "Workloads fail over automatically to the regional data centre", correct: false }
        - { text: "The site keeps serving from local storage; only replication upward and central views pause", correct: true }
      explanation: "Site workloads serve from storage replicated inside the site. What stops is replication upward, central dashboards and cross-network planning; when the link returns, buffered data drains. The article is explicit that there is no automated cross-site failover."
    - q: "Which GPU modes does the article describe for AI workloads?"
      options:
        - { text: "MIG slices assigned to virtual machines only", correct: false }
        - { text: "Whole-GPU passthrough or NVIDIA vGPU for VMs; MIG partitions or HAMi time-slicing in tenant Kubernetes", correct: true }
        - { text: "Time-slicing only, with MIG still to come", correct: false }
        - { text: "Only one GPU per tenant, no sharing", correct: false }
      explanation: "Virtual machines get a whole GPU by passthrough or NVIDIA vGPU with the customer's NVIDIA vGPU licence. In tenant Kubernetes clusters, the NVIDIA GPU Operator exposes MIG partitions on MIG-capable cards and HAMi provides time-sliced sharing. MIG slices are not assigned to VMs."
    - q: "A regional cloud provider wants to sell a sovereign cloud to mid-size logistics firms. Which path does the article point to?"
      options:
        - { text: "Ænix Public Cloud Platform: branded portal, billing and managed services, live in weeks once hardware is ready", correct: true }
        - { text: "Ænix Private Cloud Platform: a 3–12 month build for the provider's own business units", correct: false }
        - { text: "A hyperscaler edge service resold under the provider's brand", correct: false }
      explanation: "Selling capacity to someone else is the Public Cloud Platform case: white-labelled portal, billing and a managed services catalog. At provider scale the productized installer is live in weeks once hardware is ready; multi-region operator programmes run a 3–6 month pilot, then 9–18 months."
faq:
  - q: "Is transport and logistics in scope for NIS2?"
    a: "Yes. Transport — air, rail, water and road — is an Annex I sector. Large entities are essential and medium-sized ones important (Article 3). Both must apply the Article 21 risk-management measures to the ICT they run and meet the Article 23 reporting deadlines of 24 hours, 72 hours and one month."
  - q: "Who usually builds a cloud platform for transport and logistics?"
    a: "Three kinds of builder. Large operators and state transport groups build a private cloud for their own business units. Public-sector IT and shared-service centres run one platform for several agencies or operators. Regional cloud providers and system integrators build it for logistics companies that will never run their own platform."
  - q: "Can a terminal or depot keep working when the link to headquarters fails?"
    a: "Yes, if the site has its own cluster. Workloads serve from storage replicated inside the site; replication upward and central dashboards pause and resume when the link returns. There is no automated cross-site failover — site failover is a runbook you design and rehearse."
  - q: "Does the platform touch safety-critical OT such as rail signalling?"
    a: "No. Signalling, interlocking and crane control stay on their own network under their own safety case. The platform sits above them, takes data across defined conduits enforced by Cilium network policy, and can run air-gapped where the site security concept requires it."
  - q: "How is it priced?"
    a: "Ænix Private Cloud Platform and Ænix AI Platform are quoted per RFP after a fixed-price 14- or 28-day Platform Readiness Assessment. Ænix Public Cloud Platform, for providers selling capacity, starts at $1,250 per 10 nodes per month on the published support tiers."
hreflang_de: /de/blog/2026/05/transport-logistik-cloud-architektur-nis2/
---

Transport is the sector where compute follows the freight. A container terminal, a rail marshalling yard, a cross-dock depot and a fleet of trucks all produce data and all need to keep working when the line to headquarters is down. At the same time, NIS2 has put most of these organisations under binding risk-management and reporting duties, and AI has moved from slide decks into dispatch: ETA predictions, route planning and maintenance forecasts now run in production.

Those three pressures pull the architecture in different directions. Regulation wants central control and evidence. AI wants GPUs in a few places with steady load. Operations want autonomy at the edge. This article describes a pattern that reconciles them, who actually builds and runs it, and where it does not fit.

## Who builds a transport cloud

It helps to start with the builder, because the same architecture looks very different depending on who carries it.

**Large operators and state transport groups** — rail infrastructure managers, port authorities, national postal and freight groups — build a private cloud for their own business units. Freight, passenger and infrastructure divisions share hardware but not trust, and joint ventures add partners who must see their own workloads and nothing else. This is the [Ænix Private Cloud Platform](/products/private-cloud-platform/) case: one platform, a tenant per business unit, and the evidence a NIS2 supervisor asks for.

**Public-sector IT and shared-service centres** run infrastructure for several agencies at once: a transport ministry, a municipal transit operator, a road authority. For them, nested tenants matter. A top-level tenant per agency, with its own quotas and administrators, and sub-tenants underneath for projects or contractors, maps the organisation chart onto the platform without a separate cluster per department. The [public sector](/industries/public-sector/) page covers the procurement side.

**Regional cloud providers and system integrators** serve the long tail. A mid-size forwarder or a regional bus company will never run its own Kubernetes platform, but it still needs a sovereign home for its TMS, its customer portal and its telematics data. A provider with data centres in the right jurisdiction can sell that as a service on [Ænix Public Cloud Platform](/products/public-cloud-platform/), under its own brand: white-labelling of the portal is an open-source Cozystack feature, and the billing and WHMCS integration come with the subscription. An integrator delivering a terminal project can install the same platform into the customer's site, air-gapped if needed, and hand it over.

We have no transport operator among our published case studies, so we will not pretend otherwise. The closest reference is [a sovereign public cloud on bare metal](/case-studies/sovereign-public-cloud/): a Swiss provider running VMs, managed Kubernetes, databases and GPUs across three data centres with synchronous replication, for a market — public sector and finance — where data has to stay in the country. That is the shape of the regional-provider path.

## Three tiers, and why the edge is the hard one

The pattern has three tiers, each on [Cozystack](/products/cozystack/), the CNCF project Ænix created and co-maintains, so every site runs the same API and the same operating model.

**Headquarters cloud.** The transport management system, fleet management, planning, model training, customer-facing portals and the cross-network view. This is where most of the data ends up and where most of the people who look at it sit.

**Regional sites.** Operations centres and regional dispatch, plus AI inference that serves a region rather than a single site. Regional sites also act as the nearest aggregation point for smaller locations.

**Site clusters.** Ports, terminals, large depots and marshalling yards — places with a server room and enough volume to justify a few nodes of their own. This is where the hard work is.

Vehicles are not a tier the platform runs on. A truck or a locomotive is a source of telematics, not a Kubernetes node; its data lands at the nearest site or region. Small depots without a server room are in the same position: a lightweight gateway forwards to the nearest site cluster.

### The terminal operating system

The case that stops container-only platforms is the terminal operating system or warehouse management system. It is stateful, latency-sensitive and supported by its vendor on a named operating system, often shipped as a VM appliance. Rewriting it is not an option, and running a second hypervisor just for it doubles the operational surface.

On Cozystack the TOS runs as a KubeVirt virtual machine on the site cluster, next to the containerised services around it, on one network and one backup class. The vendor keeps its support matrix; your team keeps one platform. If the estate is moving off VMware at the same time, the [VMware migration tooling and strategy](/blog/2026/05/vmware-migration-tools-and-strategy/) post covers how VMs move in cohorts.

### Gate, OCR and telematics

Gate automation, licence-plate and container-number OCR, weighbridge integration and vehicle telematics produce a high-rate local stream. Sending it raw to headquarters adds latency the gate cannot afford and a WAN bill that grows with every depot. It is processed on the site cluster and forwarded upward as summarised events.

### When the uplink dies

A site cluster serves from local storage, with state replicated inside the site by LINSTOR/DRBD rather than to headquarters. When the uplink fails, trucks keep moving through the gate. What pauses is replication upward, central dashboards and cross-network planning; when the link returns, buffered data drains and the site catches up.

Be precise about what this is not. There is no automated cross-site failover of virtual machines. If a whole site is lost, recovery is a runbook — restore from backups kept outside the site, on infrastructure elsewhere — that you design and rehearse. Stretched designs with synchronous replication across nearby data centres exist, as in the Swiss case, but they are a design decision, not a default.

## NIS2 controls that are specific to transport

The general mapping is the same as for any entity: the ten Article 21(2) measures and the Article 23 deadlines of 24 hours for an early warning, 72 hours for the notification and one month for the final report. The [NIS2 evidence page](/compliance/nis2/) shows, measure by measure, what the platform supplies and what stays with you; the [NIS2 checklist for cloud architecture](/blog/2026/05/nis2-requirements-cloud-infrastructure-checklist/) is the short version. Four things deserve extra attention in transport.

**Cross-border data.** Freight data crosses jurisdictions on every consignment. Residency has to be a property of where a workload is pinned — which cluster, which tenant, which storage class — not a contract clause. That is easier when every site runs the same platform and placement is declared rather than remembered.

**Supply chains with many links.** Article 21(3) asks you to assess the vulnerabilities and practices of each direct supplier. In logistics, the chain of carriers, forwarders, brokers and handlers behind one shipment is long, and visibility beyond the direct supplier is limited. The platform helps with your own side of it: an open-source engine you can audit, components pinned to image digests, and Ænix assessable as a supplier with its [ISO/IEC 27001:2022](/compliance/iso-27001/) certification for its own ISMS.

**Continuity for physical disruption.** Port closures, blocked roads and storms are ordinary events in transport planning. Business continuity here means site autonomy plus tested restores, not a promise that everything fails over by itself.

**The OT boundary.** Rail signalling, interlocking, crane and automated guided vehicle control stay on their own network under their own change control and safety case. The platform sits above them and takes data across defined conduits enforced by Cilium network policy. It is never in the path of a safety function. Where the site security concept demands it, the platform runs air-gapped: images and releases are mirrored inside the perimeter, and Ænix engineers reach the environment only with your approval.

The rest is ordinary platform hygiene that happens to be NIS2 evidence: platform state declared as manifests and applied through GitOps, so you have a versioned inventory; metrics and logs collected per tenant with VictoriaMetrics and VictoriaLogs; Kubernetes audit logs with configurable retention, shippable to an immutable store you control; and volume encryption that is opt-in per storage class, with a passphrase you hold. None of this fulfils an operator's obligations on its own. It makes the technical half of the evidence much easier to produce.

## AI workloads in transport

Most AI in transport is inference that runs all day: ETA prediction, route and load planning, demand forecasting, predictive maintenance on fleet sensor data, and models behind customer service. That is steady load, which is where owning GPUs tends to beat renting them by the hour — the [GPU economics post](/blog/2026/05/ai-ml-edition-sustained-gpu-economics/) works through when. Training and heavy planning runs belong at headquarters; latency-sensitive inference such as gate OCR can sit on the site cluster.

The [Ænix AI Platform](/products/ai-platform/) supports NVIDIA data-centre GPUs through the NVIDIA GPU Operator, in two shapes. Virtual machines get a whole GPU by passthrough, or NVIDIA vGPU with your NVIDIA vGPU licence. In tenant Kubernetes clusters, the GPU Operator exposes MIG partitions on MIG-capable cards, and HAMi provides time-sliced sharing for small models that do not need a whole card. GPU tenants use the same tenant boundary as everything else, so the access model your supervisor already reviewed covers the AI workloads too.

## When this doesn't fit

If your whole estate is a handful of SaaS applications and a TMS hosted by its vendor, you do not need a platform; you need good supplier contracts. If your sites are small depots with a single server each, a full site cluster is overkill — a Cozystack cluster starts at three nodes — and a gateway that forwards to a regional site is the honest answer. And if your continuity plan assumes that virtual machines fail over between data centres automatically, this pattern will not give you that; it gives you site autonomy, replication and rehearsed restores.

## How Ænix engages

For operators and public-sector IT, the path is a free 30-minute discovery call, then the [Platform Readiness Assessment](/services/platform-readiness-assessment/) — fixed price, 14 days focused or 28 days full — with a transport workstream covering site topology, the OT boundary and NIS2 gaps. A [private cloud build](/services/build-private-cloud/) follows in 3 to 12 months depending on scope, often starting with one site or one business unit. Private Cloud Platform and AI Platform are quoted per RFP.

For regional providers, Public Cloud Platform is live in weeks once the hardware is ready, through the productized installer; subscriptions start at $1,250 per 10 nodes per month on the [published tiers](/pricing/). National multi-region programmes run a 3 to 6 month pilot, then 9 to 18 months to full multi-region. The [sovereign cloud builder](/services/sovereign-cloud-builder/) service covers that route.

The [transport and logistics](/industries/transport-logistics/) page summarises the platform side. Cozystack's own documentation is at [cozystack.io](https://cozystack.io/docs/).
