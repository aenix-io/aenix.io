---
title: "Industry 4.0 platform — cloud + edge architecture for manufacturing in 2026"
seo_title: "Industry 4.0 cloud and edge architecture for manufacturing"
description: "Industry 4.0 cloud and edge in 2026: who builds and runs it, where it sits in the Purdue model, GPU inspection, industrial IP protection and NIS2."
date: "2026-05-17"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/manufacturing-cloud-industry-40-edge.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["NIS2", "Cozystack", "Sovereignty", "AI and ML", "Compliance"]
language: "en"
hreflang_de: "/de/blog/2026/05/industrie-4-0-plattform-cloud-edge-fertigung/"
companion_landing: "/industries/manufacturing/"
faq:
  - q: "Who usually builds and runs a manufacturing cloud?"
    a: "Three kinds of operator: the group IT of a multi-site manufacturer running a private cloud for its own plants, a regional cloud or hosting provider selling capacity to industrial mid-market customers, and a system integrator delivering plant IT to many manufacturers. The same Cozystack engine serves all three; what changes is whether the commercial layer (billing, branded portal) is switched on."
  - q: "Does the platform run real-time machine control?"
    a: "No. The platform sits at Purdue levels 3 and 3.5 — site operations and the industrial DMZ. PLCs, SCADA and safety systems stay on their own network under their own change control. The platform runs the layer above: MES, historians, OPC-UA collectors, quality-inspection inference and the data pipeline to headquarters."
  - q: "What happens at a plant when the WAN link to headquarters fails?"
    a: "The site cluster keeps running. Its workloads serve from local storage replicated inside the site, and control never depended on the platform. Replication upward, central dashboards and cross-site aggregation pause, and buffered data drains when the link returns."
  - q: "How are GPUs used for visual quality inspection?"
    a: "NVIDIA data-centre GPUs are supported through the NVIDIA GPU Operator. In tenant Kubernetes clusters, MIG partitions on MIG-capable cards or time-sliced sharing via HAMi let several inspection models share a card. Virtual machines take whole GPUs by passthrough, or NVIDIA vGPU with your own NVIDIA vGPU licence."
  - q: "Does the platform make a manufacturer NIS2-compliant?"
    a: "No platform does that on its own. Manufacturing of critical products is listed in NIS2 Annex II, and the obligations stay with the manufacturer. The platform is built to support the Article 21 measures with tenant isolation, network segmentation, opt-in volume encryption, audit logs with configurable retention and air-gapped installation."
quiz:
  title: "Test yourself: Industry 4.0 platform architecture"
  questions:
    - q: "Which three kinds of operator does the article say actually build and run manufacturing clouds?"
      options:
        - { text: "Hyperscalers, PLC vendors and machine builders", correct: false }
        - { text: "Group IT, regional cloud or hosting providers, and system integrators", correct: true }
        - { text: "Only the IT department of each individual plant", correct: false }
        - { text: "Telcos, national regulators and certification bodies", correct: false }
      explanation: "The article names the group IT of a multi-site manufacturer, regional cloud and hosting providers selling to industrial mid-market customers, and system integrators delivering plant IT to many manufacturers. The engine is the same; the commercial layer is switched on only where capacity is sold."
    - q: "Where in the Purdue model does the platform sit?"
      options:
        - { text: "Levels 0 to 2, next to the PLCs and sensors", correct: false }
        - { text: "Only at level 5, in the corporate data centre", correct: false }
        - { text: "Levels 3 and 3.5 — site operations and the industrial DMZ", correct: true }
      explanation: "The platform lives at levels 3 and 3.5 and does not reach into levels 0 to 2. Controllers, PLCs, SCADA and safety systems stay on their own network; the platform runs MES, historians, OPC-UA collectors, inspection inference and the pipeline upward."
    - q: "What does a site cluster do when the uplink to headquarters dies?"
      options:
        - { text: "It keeps running from local storage; replication upward and central dashboards pause", correct: true }
        - { text: "It fails over automatically to another data centre", correct: false }
        - { text: "It stops until the control plane at headquarters is reachable again", correct: false }
      explanation: "The site's workloads keep serving from storage replicated inside the site. What stops is replication upward, central dashboards and cross-site aggregation; buffered data drains when the link returns. Production does not wait on a WAN circuit."
    - q: "Which GPU modes does the article describe for quality-inspection workloads?"
      options:
        - { text: "MIG slices assigned to virtual machines as the default mode", correct: false }
        - { text: "MIG or HAMi time-slicing in tenant Kubernetes; passthrough or vGPU for VMs", correct: true }
        - { text: "Only whole-GPU passthrough; sharing is not possible", correct: false }
        - { text: "AMD and Intel accelerators with full operator automation", correct: false }
      explanation: "In tenant Kubernetes clusters, the NVIDIA GPU Operator exposes MIG partitions and HAMi provides time-sliced sharing. Virtual machines take whole GPUs by passthrough, or NVIDIA vGPU with the customer's own NVIDIA vGPU licence."
    - q: "How does the article describe the platform's role in NIS2 for manufacturers of critical products?"
      options:
        - { text: "The platform certifies the manufacturer as NIS2-compliant", correct: false }
        - { text: "NIS2 does not apply to manufacturing at all", correct: false }
        - { text: "Built to support the Article 21 measures; the obligations stay with the manufacturer", correct: true }
      explanation: "Manufacturing of critical products is listed in Annex II (important entities). The platform supplies architectural controls — isolation, segmentation, opt-in encryption, audit logs with configurable retention, air-gap — but the obligations and the evidence remain the manufacturer's."
---

Most Industry 4.0 diagrams start with the cloud and end at a sensor. That order hides the two questions that decide whether a manufacturing platform works: who will run it for the next ten years, and what the plant does when the link to headquarters goes dark. This article starts there.

## What Industry 4.0 means in infrastructure terms

Strip the marketing off the term and what remains is a set of workloads with very different needs. Sensors and machines produce a steady stream of data that has to be collected close to the line. Quality inspection runs on cameras and models that need a GPU next to the conveyor. Predictive maintenance and digital twins want months of history and a lot of compute, but no urgency. MES, historians and planning systems sit in between, and many are vendor-supported only as a virtual machine on one specific operating system.

So the infrastructure has to run old VMs and new containers side by side, keep latency-sensitive work on site, and move data upward to where analytics and training happen. That is what OT/IT convergence means for the people who build it — not a merged network, but one platform that handles both kinds of workload.

## Who actually builds and runs a manufacturing cloud

A single plant rarely builds a cloud. In practice, three kinds of operator do, and the architecture should fit the one you are.

**Group IT of a multi-site manufacturer.** A central team runs a private cloud for its own plants, regional sites and headquarters. Its problem is consistency: twenty sites that drift apart become twenty platforms. This is the [Ænix Private Cloud Platform](/products/private-cloud-platform/) case — multi-site, air-gap-capable, with developer self-service for the teams building inspection models and data pipelines.

**A regional cloud or hosting provider.** Industrial mid-market companies often do not want to run infrastructure at all, but they also do not want their design data in a hyperscaler region. A regional provider can sell them a sovereign cloud with VMs, Kubernetes and managed databases, and place an edge cluster at the customer's plant. That is the [Ænix Public Cloud Platform](/products/public-cloud-platform/) case: the same engine plus billing, a branded customer portal and the WHMCS integration.

**A system integrator.** Integrators who already deliver MES and plant IT to many manufacturers can turn that delivery into a managed platform under their own brand. Nested tenants give each customer its own isolated space, and white-labeling — an open-source Cozystack feature — puts the integrator's identity on the portal. The [white-label cloud](/services/white-label-cloud/) service describes how that is set up.

The three share one engine because the technical problem is the same. What differs is whether the commercial layer is switched on and who holds the operational pager.

## The three-tier architecture

```
HQ cloud (Cozystack)
   ├── Analytics and data warehouse
   ├── ML training
   └── Enterprise integration (ERP, PLM, supply chain)
        ↓ (data flow)
Regional sites (Cozystack)
   ├── Regional aggregation
   ├── Production planning
   └── Quality systems
        ↓
Production-floor edge (Cozystack)
   ├── IoT and OPC-UA data ingestion
   ├── Local AI inference for inspection
   ├── MES functions and historians
   └── OT/IT interface (industrial DMZ)
```

Each tier is its own cluster, installed and changed the same way. That is the point of running Cozystack at all three: one set of runbooks, one upgrade procedure, one way to describe a tenant — instead of three unrelated stacks.

### Where the platform sits in the Purdue model

The platform lives at levels 3 and 3.5 — site operations and the industrial DMZ. It does not reach into levels 0 to 2. Controllers, PLCs, SCADA and safety systems stay exactly where they are, on their own network and under their own change control. What runs on the platform is the layer above them: MES and historians, OPC-UA collectors and unified-namespace brokers, quality-inspection inference, and the pipeline that carries data to the corporate level.

That placement also gives the IEC 62443 framing. The platform is one or more zones with defined conduits into the OT network, so segmentation becomes a design property rather than a list of firewall exceptions. Cilium network policy defines the conduits; tenant boundaries separate a line, a site or a joint-venture partner. Component-level certification of industrial devices remains the device vendors' obligation — no infrastructure platform can grant it.

### What the floor does when the uplink dies

This is the question that decides the architecture, so the answer should be plain: the site cluster keeps running. Control never depended on the platform, because it lives below it. The historian, the inspection inference and the MES functions on site keep serving from local LINSTOR storage, with their state replicated inside the site rather than to headquarters. What stops is what should stop — replication upward, central dashboards, cross-site aggregation. When the link returns, buffered data drains and the site resynchronizes.

This is also why a hyperscaler edge service is a poor fit for a factory. If the edge depends on a control plane in another country, the plant's ability to change anything depends on a WAN circuit.

## The platform capabilities that matter on the floor

**VMs and containers on one API.** KubeVirt runs the vendor-supported MES or historian as a normal virtual machine next to containerized collectors and inference services. Nobody has to repackage an application the vendor only supports on one OS.

**Nested tenants.** A tenant can contain tenants: the group, then a site, then a line or a project team, each with its own quotas, access rights and network boundary. For a provider or integrator, the same hierarchy separates one manufacturer from another and a manufacturer's own plants from each other.

**Managed services from a catalog.** PostgreSQL, Kafka, ClickHouse, S3-compatible object storage and tenant Kubernetes clusters are ordered from the same catalog in every tier. A data pipeline built at one plant is rebuilt at the next by the same declaration, not by a new set of manual installs.

**GitOps across sites.** Cozystack itself is reconciled from Git, and tenants can run their own GitOps on top. A change to the standard site configuration is a pull request that every site picks up, which is the only realistic way to keep twenty plants from drifting.

**Observability per tenant.** Metrics and logs are collected per tenant, so plant teams see their own workloads and the central team sees the whole estate. Audit-log retention is configurable, and logs can ship to the customer's own immutable store.

**Air-gapped installation.** For plants whose security concept forbids internet egress, Cozystack has a documented air-gapped install workflow, with images mirrored into the perimeter. It is part of open-source Cozystack; Ænix support for air-gapped installs starts at the Plus tier on the [pricing page](/pricing/).

## GPUs for quality inspection

Visual inspection has a specific shape: many small models, each watching one station, running continuously. Giving each a whole GPU wastes most of the card.

NVIDIA data-centre GPUs are supported through the NVIDIA GPU Operator. In tenant Kubernetes clusters, the operator exposes MIG partitions on MIG-capable cards as schedulable resources, which separates workloads in hardware, while HAMi provides time-sliced sharing with memory and compute limits per workload. Virtual machines take whole GPUs by passthrough, or NVIDIA vGPU with your own NVIDIA vGPU licence. Training for these models usually belongs at headquarters, where the GPUs can be pooled; the [Ænix AI Platform](/products/ai-platform/) covers that side. The [internal data and AI platform](/case-studies/internal-data-and-ai-platform/) case study shows GPU pools with per-tenant quotas and one scheduler for pods and VMs — not in manufacturing, but the same pattern.

## Sovereignty for industrial IP

Design data, formulations and process specifications are what a manufacturer competes on. A leak is competitive harm, not only a compliance finding, which is why industrial IP tends to carry stricter requirements than ordinary enterprise data.

The architectural answer has three parts. The platform runs on hardware and in a jurisdiction you choose, including fully air-gapped. Volume encryption at rest (LINSTOR and LUKS) is opt-in per storage class, with a passphrase the manufacturer holds; the key-management process is designed with you during the build. And because Cozystack is open source under Apache 2.0, the platform keeps running without Ænix — there is no proprietary control plane that has to stay reachable. Ænix engineers work on your environment only with your approval.

## NIS2 for manufacturers of critical products

NIS2 lists manufacturing of critical products — medical devices, computers, electronic equipment, machinery, motor vehicles — among the important entities in Annex II. The Article 21 risk-management measures and the Article 23 reporting timelines therefore reach many plants that never thought of themselves as critical infrastructure.

The platform is built to support those measures: tenant isolation, network segmentation, opt-in encryption, audit logs and air-gapped operation. The obligations, the risk register and the incident process stay with the manufacturer. The [NIS2 evidence page](/compliance/nis2/) maps each Article 21 area to what the platform provides and what it does not, and the [NIS2 checklist for cloud infrastructure](/blog/2026/05/nis2-requirements-cloud-infrastructure-checklist/) walks through the architecture work.

## What the evidence looks like today

No manufacturing customer is named on this site. The closest published deployment with the same structural pattern — multi-site, tenant-isolated, operated by the customer — is the [sovereign public cloud](/case-studies/sovereign-public-cloud/) case: a provider running one compute cluster across three data centres with synchronous replication, tenants and sub-tenants, and volume encryption. The energy sector has a similar IT/OT split, described in [smart-grid platform architecture](/blog/2026/05/smart-grid-platform-architecture-it-ot/).

## When this doesn't fit

**One plant, a handful of VMs.** If the whole estate is a few virtual machines in one server room, a multi-tier platform is more than you need. A simpler virtualization stack will do until a second site or a GPU workload appears.

**Hard real-time control.** The platform does not run PLC logic or safety functions and should not. If the project is really about levels 0 to 2, it needs industrial control vendors, not a cloud platform.

**A hyperscaler-first strategy.** If the target state is a hyperscaler's own edge product and you accept its control plane, a vendor-neutral sovereign platform solves a problem you have chosen not to have.

**No one to run it.** A platform at twenty sites needs an operations team. If group IT cannot staff one, the options are Ænix managed operations, or a regional provider or integrator who runs it for you — which is exactly why those operators exist in this market.

## How to start

For group IT, the path is a free 30-minute discovery call, then the fixed-price [Platform Readiness Assessment](/services/platform-readiness-assessment/) of 14 or 28 days, then a build of 3–12 months depending on scope — often starting with one site or one workload class. Private Cloud Platform is quoted per RFP.

For providers and integrators, Public Cloud Platform is a productized installer that goes live in weeks once the hardware is ready. Subscriptions start at $1,250 per 10 nodes per month on the Basic tier with annual billing; the full matrix is on the [pricing page](/pricing/). The open-source project documentation lives at [cozystack.io](https://cozystack.io).
