---
title: "Cloud platform for transport and logistics — NIS2-aligned, edge-aware, AI-ready"
description: "Transport and logistics operators in 2026 face: NIS2 essential-entity classification (transport sector is in scope under Annex I), AI-driven optimization..."
related_pages:
  - /solutions/nis2-compliance
  - /solutions/data-sovereignty
  - /products/aenix-platform/enterprise-edition/
  - /products/cozystack
language: "en"
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

**Transport and logistics operators in 2026 face: NIS2 essential-entity classification (transport sector is in scope under Annex I), AI-driven optimization (route, demand, predictive maintenance), edge compute requirements (vehicles, depots, ports, terminals), and increasing data-sovereignty pressure for cross-border logistics data. The architectural answer is a coherent platform that runs at HQ, regional sites, and edge — under one operational model.**

> **Pairs with:** **[Ænix Platform Enterprise Edition](/products/aenix-platform/enterprise-edition/)** — multi-DC + edge architecture, NIS2 compliance, sovereign-cloud option for cross-border logistics data.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a 30-minute discovery call</a>
  <a class="cta-secondary" href="/blog/2026/05/transport-logistics-cloud-architecture-nis2/">Transport architecture →</a>
</div>

---

## Who in transport / logistics

- Air, rail, water, road freight operators (NIS2 essential entities)
- Logistics service providers (LSPs) with multi-modal operations
- Last-mile delivery operators
- Port and terminal operators
- Fleet management organizations
- Supply-chain integration platforms

---

## What transport teams come to us for

- **NIS2 compliance** for cloud + OT infrastructure (transport is essential-entity Annex I)
- **AI for routing, demand forecasting, predictive maintenance**
- **Edge compute** at depots, ports, terminals, vehicles
- **Multi-tenant** for cross-BU (freight + passenger + intermodal)
- **Sovereignty** for cross-border logistics data
- **VMware exit / OpenStack modernization**

---

## Cozystack pattern for transport

- Multi-site: HQ + regional + depot/port/terminal edge under one Kubernetes API
- Air-gap support for OT systems (rail signalling, port automation)
- Multi-tenant for cross-BU separation
- AI infrastructure for routing / forecasting / predictive maintenance
- NIS2-aligned controls structurally

---

/contact/

- **[Transport architecture article](/blog/2026/05/transport-logistics-cloud-architecture-nis2/)**
- **[NIS2 compliance](/solutions/nis2-compliance/)**
- **[Sovereign AI](/solutions/sovereign-ai/)**

---

*Aenix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack.*

<!-- Word count: ~500. -->
