---
title: "Ænix Platform Public Cloud Edition"
description: "Turnkey multi-hypervisor public-cloud control plane for large operators, banks, and telcos: multi-region, billing, payments, and a brandable portal."
type: "page"
language: "en"
direct_answer: |
  **Ænix Platform Public Cloud Edition is a turnkey public-cloud control plane for large operators — public-cloud companies, big banks running their own internal cloud, and national telcos launching or scaling sovereign cloud products. It is built on Cozystack, the open-source CNCF project Aenix created and maintains, and adds a multi-region control plane, full billing back-end and front-end, payment integrations, a brandable customer portal, and operator-grade UX on top. It is multi-hypervisor (native KubeVirt VMs plus integration with existing VMware, OpenStack, OpenNebula, and OpenShift estates) and multi-tenant via the Cozystack Tenant CRD, so operators can extend an existing cloud estate and consolidate gradually rather than rip and replace.**
quick_facts:
  - label: "What it is"
    value: "A turnkey, multi-region public-cloud control plane for large operators — public-cloud providers, banks running their own cloud, and national telcos."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "For"
    value: "Large public-cloud operators, Tier-1 banks operating their own cloud, and large telcos / national operators."
  - label: "Architecture"
    value: "Kubernetes-native, multi-hypervisor (KubeVirt plus VMware / OpenStack / OpenNebula / OpenShift integration), multi-region control plane, multi-tenant via Tenant CRD."
  - label: "Engagement"
    value: "Multi-year programs; 3-6 month pilot, then 9-18 months to full multi-region production. Optional Aenix-managed operations under SLA."
  - label: "Compliance"
    value: "Pre-validated against DORA, NIS2, ISO 27001, and SOC 2 for regulated operators."
faq:
  - q: "How is Public Cloud Edition different from running open-source Cozystack ourselves?"
    a: "Cozystack is the engine; Public Cloud Edition adds the operator surface a cloud business needs — multi-region control plane, billing back-end and front-end, payment integrations, brandable customer portal, productized installer, enterprise SLA, and dedicated support. Building those from scratch costs years of engineering."
  - q: "How is Public Cloud Edition different from Enterprise Edition?"
    a: "Public Cloud Edition is for operators selling cloud as a product (public cloud, a bank's internal cloud, a large telco). Enterprise Edition is for regulated enterprises consuming cloud internally. Same Cozystack foundation, different feature bundle and engagement model."
  - q: "Can it coexist with our existing VMware or OpenStack estate?"
    a: "Yes. Public Cloud Edition is designed for multi-hypervisor coexistence and gradual consolidation rather than rip-and-replace, with migration patterns for cohort-based VMware exit and OpenStack consolidation."
  - q: "What is the typical multi-region pattern?"
    a: "Two to N+1 regions with tenant-scope policy enforcement, customer-controlled region selection, and a recommended per-region capacity-planning model. Network and identity federation are handled at the platform layer."
  - q: "Do we need a 24/7 in-house operations team?"
    a: "No. Public Cloud Edition supports customer-operated and Aenix-managed-operations models. A hybrid split (vendor control plane plus customer data plane) is common in regulated bank deployments."
  - q: "What does it cost?"
    a: "Public Cloud Edition is scoped as a multi-year program and priced on request via a discovery call. The standalone Ænix Platform pricing tiers (Basic, Standard, Plus, Enterprise) sit below this operator-scale engagement."
---

**A turnkey public-cloud control plane for large operators — public-cloud companies, big banks running own cloud, national telcos. Multi-hypervisor, multi-region, integrates with third-party infrastructure. Built for data centres and cloud providers launching or scaling public clouds at hyperscaler-adjacent scale.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a discovery call</a>
  <a class="cta-secondary" href="/products/aenix-platform/">All editions →</a>
</div>

---

## Quick facts

- **For:** Large public-cloud operators, big banks operating own cloud, large telcos / national operators
- **Foundation:** Open-source Cozystack (CNCF project, Apache 2.0)
- **Engagement size:** €1M - €10M+ multi-year programs
- **Time to production:** 6-18 months for full multi-region deployment; 3-6 month pilot phase typical
- **Architecture:** Kubernetes-native, multi-hypervisor (KubeVirt + integration with VMware / OpenStack / OpenNebula / OpenShift / others), multi-region control plane, multi-tenant Tenant CRD
- **Replaces or augments:** OpenStack at scale, VMware Cloud Foundation, custom in-house cloud platforms

---

## What's included in Public Cloud Edition

### Multi-hypervisor cloud control plane

One cloud control plane that orchestrates KubeVirt VMs (native Cozystack), and integrates with existing VMware, OpenStack, OpenNebula, and OpenShift infrastructure. No "rip and replace" — Public Cloud Edition can extend an existing cloud estate while gradually consolidating.

### Multi-region support

Native multi-region orchestration. Workload placement, identity, network, and storage policy enforced across regions. Tenant CRD scopes naturally to regional or multi-regional deployment.

### Cloud-like UX with users, projects, quotas

Out-of-the-box cloud-style abstractions: users, projects (or tenants), quotas, RBAC, billing scopes. Customer-facing console portal (cozyportal customized to your brand).

### Hosting panel + admin interface

Branded admin dashboard for the cloud operator + service-creation wizards for end customers (VMs, K8s, databases, S3, GPU, networking).

### Full billing — backend + frontend

Usage metering, invoicing, payment processing for high-volume cloud operations. Stripe + regional payment providers + B2B invoicing flows. Multi-currency, multi-jurisdiction support.

### Payment integrations

Cloud-grade payment surface — pre-paid balance, post-paid invoicing, channel partner billing, reseller margin handling.

### Third-party infrastructure integration

Native integration patterns with existing VMware, OpenStack, OpenNebula, OpenShift footprints. Storage-class compatibility with shared SAN / S3-compatible / on-prem block. Network integration with existing fabrics (BGP, OVN, Cilium).

### Enterprise SLA + dedicated support + named TAM

24/7 support with named technical account manager, escalation procedures aligned to operator SLA commitments.

### Migration tooling and expertise

Productized modules + Aenix engineering services for migration from VMware Cloud Foundation, legacy OpenStack, custom cloud panels.

### Compliance bundles

Pre-validated against DORA / NIS2 / ISO 27001 / SOC 2 — relevant when the cloud operator itself is a regulated entity (e.g., bank running own cloud).

---

## Who buys Public Cloud Edition

| Buyer | Typical engagement |
|---|---|
| Large public-cloud operator | New cloud product launch or multi-region scale-up |
| Tier-1 bank operating own cloud | DORA-aligned, sovereign, multi-region internal cloud — typically Enterprise Edition with Public-Cloud-Edition-class scale-out |
| Large telco / national operator | Customer-facing sovereign cloud product, often regional + edge |
| Large enterprise with hyperscaler-scale internal cloud | Internal cloud product for many BUs / subsidiaries |

---

## Why Public Cloud Edition over alternatives

| Vs. | Why Public Cloud Edition |
|---|---|
| **Building from open-source Cozystack** | Cozystack is the engine — Public Cloud Edition adds the multi-region control plane, billing surface, payment integrations, and operator UX needed for a real cloud product. Faster time to revenue. |
| **OpenStack at scale** | Lower operational overhead, faster feature velocity, more modern multi-tenancy model, no cell-architecture complexity. |
| **Hyperscaler partnership / wrapper** | Sovereign by design (no hyperscaler dependency), full control over economics, no vendor margin on every customer dollar. |
| **VMware Cloud Foundation** | Open-source foundation, Kubernetes-native, no Broadcom subscription pressure, structurally cheaper at scale. |

---

## Pricing

Pricing on request — multi-million-euro multi-year programs. Discovery call to scope.

[Discuss Public Cloud Edition →](/contact/?edition=public-cloud)

---

## Engagement structure

- **Discovery call** (30 min, free) — confirm fit
- **Platform Readiness Assessment** (5-10 days, fixed-price) — current-state architecture, target architecture, migration roadmap, risk register
- **Pilot engagement** (3-6 months) — defined slice (one region, one tenant cohort, one product line)
- **Full Public Cloud Edition build** (9-18 months) — multi-region production, customer onboarding workflows, operations team training
- **Managed operations** (optional, ongoing) — Aenix runs the cloud control plane under SLA

[Platform Readiness Assessment →](/services/platform-readiness-assessment/)

---

## Customer evidence

Public Cloud Edition deployments are currently NDA-protected. Tier-1 European bank engagements (operating own internal cloud at scale) and regional telco sovereign cloud product launches are in production. **First named case studies expected mid-2027** as NDAs expire.

---

## Frequently asked questions

### How is Public Cloud Edition different from running open-source Cozystack ourselves?

Cozystack is a clean Kubernetes-native multi-tenant cloud platform — but it stops short of the operator surface a real cloud business needs. Public Cloud Edition adds the multi-region control plane, billing back-end + front-end, payment integrations, customer-facing portal customization, productized installer, enterprise SLA, and dedicated support. For organizations operating cloud at scale, building these surfaces from scratch costs years of engineering — Public Cloud Edition delivers them as the product.

### How is Public Cloud Edition different from Enterprise Edition?

Public Cloud Edition is for operators selling cloud as a product (public cloud, big bank's internal cloud, large telco). Enterprise Edition is for regulated enterprises consuming cloud internally (single-customer use, DORA / NIS2 alignment, hybrid integration with VMware / OpenNebula / OpenShift). Same Cozystack foundation; different feature bundle and engagement model.

### Can Public Cloud Edition coexist with our existing VMware / OpenStack estate?

Yes. Public Cloud Edition is designed for multi-hypervisor coexistence — gradual consolidation rather than rip-and-replace. Aenix has migration patterns for cohort-based VMware exit and OpenStack consolidation.

### What's the typical multi-region pattern?

Two to N+1 regions with tenant-scope policy enforcement, customer-controlled region selection, and Aenix-recommended capacity-planning model per region. Network and identity federation handled at the platform layer.

### Do we need 24/7 in-house ops?

Public Cloud Edition supports both customer-operated and Aenix-managed-operations models. Hybrid (vendor control plane + customer data plane) is common in regulated bank deployments.

---

## How to start

Book a 30-minute discovery call. We'll discuss your cloud product strategy, scale, regulatory context, and Public Cloud Edition fit.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a discovery call</a>
</div>

---

*Ænix Platform Public Cloud Edition is built on [Cozystack](https://cozystack.io) — a CNCF project we created and maintain (currently CNCF Sandbox; CNCF Incubating expected late summer 2026). Apache 2.0. Aenix is the open-core company.*
