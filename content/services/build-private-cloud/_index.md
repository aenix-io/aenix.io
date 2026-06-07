---
title: "Build a private cloud — engineers who've shipped this in production"
description: "The phrase \"build a private cloud\" sounds like it should be straightforward in 2026. The reality: it's an architecture problem, an operational discipline..."
related_pages:
  - /services/private-cloud-consulting
  - /solutions/cloud-repatriation
  - /products/aenix-platform/enterprise-edition/
  - /products/aenix-platform/public-cloud-edition/
  - /products/cozystack
language: "en"
direct_answer: |
  **Building a private cloud means designing, deploying, and operating cloud-style infrastructure on hardware you control — covering platform, storage, networking, multi-tenancy, observability, and compliance as one coherent system rather than a one-off project. It suits organizations with a platform engineering function and a clear trigger such as a VMware exit, a sovereignty mandate, AI/GPU workloads, or runaway public-cloud costs. Aenix builds private clouds end-to-end on Cozystack, an open-source CNCF project it runs in production with service providers, banks, telecom, and AI operators. The stack uses KubeVirt for VMs and containers on one Kubernetes API, Cilium (eBPF) networking, and LINSTOR/DRBD storage, with handover so the customer's own team operates the platform afterward.**

quick_facts:
  - label: "What it is"
    value: "An end-to-end engagement to design, build, and hand over a production private cloud on hardware the customer controls, built on Cozystack."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it's for"
    value: "Organizations with (or building) a platform engineering function and a concrete trigger — VMware exit, sovereignty mandate, AI/GPU workloads, or public-cloud cost cliff."
  - label: "Engagement timeline"
    value: "Free 30-minute discovery, 14-28 day assessment, then a 3-12 month build, with optional ongoing managed operations."
  - label: "Technology stack"
    value: "Cozystack on Talos by default; KubeVirt for VMs and containers on one Kubernetes API; Cilium (eBPF) networking; LINSTOR/DRBD (or Ceph) storage; Tenant CRD multi-tenancy."
  - label: "Ownership"
    value: "The platform is built on open source and operated by the customer's own team after knowledge transfer — the cloud is theirs, not Aenix's."

faq:
  - q: "What does a build-private-cloud engagement actually include?"
    a: "Hardware sizing and vendor selection, the platform layer (Cozystack on Talos or an existing Kubernetes extension), storage and backup architecture, networking, multi-tenancy via the Tenant CRD, an observability and operations setup, self-service golden paths, compliance work, and knowledge transfer so your team operates it."
  - q: "How long does it take to build a private cloud with Aenix?"
    a: "A free 30-minute discovery confirms fit, a 14-28 day assessment produces architecture, sizing, and a build plan, and the build itself runs 3-12 months depending on scope. Ongoing managed operations are available afterward if the customer prefers not to run it in-house."
  - q: "Is the private cloud locked to Aenix?"
    a: "No. It is built on Cozystack, an open-source CNCF project under Apache 2.0 with no per-CPU or per-core licensing. After knowledge transfer your own platform team operates the cloud. Aenix has no hyperscaler partnership economics shaping the architecture."
  - q: "What technology does Aenix use to build a private cloud?"
    a: "Cozystack on Talos by default, with KubeVirt running virtual machines and containers on one Kubernetes API, Cilium (eBPF) for networking, and LINSTOR/DRBD (or Ceph) for storage. Multi-tenancy, RBAC, quotas, and audit are handled through the Tenant CRD."
  - q: "When does building a private cloud make sense versus staying on public cloud?"
    a: "It fits when you have or are building a platform engineering function, a specific trigger like a VMware exit or sovereignty mandate, sustained workloads or AI/GPU at scale where the economics favor dedicated infrastructure, and a team that can operate it after handover. The assessment phase clarifies fit before any build begins."

---

**The phrase "build a private cloud" sounds like it should be straightforward in 2026. The reality: it's an architecture problem, an operational discipline problem, and a team-capacity problem at the same time. Done well, it produces a platform that compounds value for years. Done badly, it produces operational debt and the next emergency.**

Aenix builds private clouds end-to-end based on [Cozystack](/products/cozystack/), an open-source CNCF project we run in production with service providers, banks, telecom, and AI operators.

> **Pairs with:** **[Ænix Platform Enterprise Edition](/products/aenix-platform/enterprise-edition/)** for regulated enterprises building private/hybrid sovereign cloud; **[Public Cloud Edition](/products/aenix-platform/public-cloud-edition/)** for large operators needing multi-region public-cloud-class platform.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a 30-minute discovery call</a>
  <a class="cta-secondary" href="/blog/2026/05/build-private-cloud-90-day-playbook/">Read the 90-day playbook →</a>
</div>

---

## Who builds a private cloud successfully

The work fits when:

- You have or are building a platform engineering function (this is operational commitment, not a one-time project).
- You have a specific trigger — VMware exit, sovereignty mandate, AI workloads, FinOps cliff.
- The economics support dedicated infrastructure (sustained workloads, regulated data, or AI/GPU at scale).
- The customer team can sustain operations after Aenix leaves (or has chosen managed-services).

If you're not sure on any of these, the assessment phase clarifies before building begins.

---

## What a "build private cloud" engagement actually covers

- **Hardware** — sizing, vendor selection, datacenter / colocation arrangements.
- **Platform layer** — Cozystack on Talos (default), or extension of existing Kubernetes.
- **Storage** — LINSTOR (default) or Ceph; capacity planning; backup architecture.
- **Network** — Cilium, BGP fabric, MetalLB, ingress.
- **Multi-tenancy** — Tenant CRD, RBAC, quotas, audit.
- **Operations** — observability stack, runbooks, on-call, incident response.
- **Self-service** — golden paths for product teams.
- **Compliance** — sovereignty, audit-readiness per applicable regulator.
- **Knowledge transfer** — your platform team operates it after handover.

---

## Engagement structure

| Phase | Duration | Output |
|---|---|---|
| Discovery | 30 min, free | Confirm fit |
| Assessment | 14-28 days | Architecture, sizing, Phase 2 plan |
| Build | 3-12 months | Production private cloud |
| Operate (optional) | Ongoing | Managed service or in-house |

For methodology see **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

---

## Pricing

<div class="pricing-cards-2">

### Assessment (14-28 days)
****

### Build engagement (3-12 months)
****

</div>

---

## Why Aenix

- **Cozystack contributors.** We built and operate the platform.
- **No hyperscaler bias.** No partnership economics shape recommendations.
- **EU + Central Asia teams.** Time-zone friendly.
- **Open-source platform foundation** — the cloud is yours, not ours.

---

## How to start

/contact/

- **[Build private cloud — 90-day playbook](/blog/2026/05/build-private-cloud-90-day-playbook/)**
- **[Private cloud consulting](/services/private-cloud-consulting/)** — broader scope
- **[Cloud repatriation](/solutions/cloud-repatriation/)** — when leaving public cloud
- **[Cozystack](/products/cozystack/)**

---

*Aenix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack, Kubernetes Certified Distribution.*

<!-- SEO: title "Build a Private Cloud — Engineers Who've Shipped This | Aenix"
Word count: ~700. -->
