---
title: "Ænix Platform Enterprise Edition"
description: "Ænix Platform Enterprise Edition: private and hybrid sovereign cloud for regulated banks, insurance, public sector, telco and healthcare. DORA / NIS2-aligned."
type: "page"
language: "en"
direct_answer: |
  **Ænix Platform Enterprise Edition is a private and hybrid sovereign cloud built for regulated enterprises — banks, insurance carriers, public administration, telco, and healthcare operators. It runs on Cozystack, the open-source CNCF project Aenix created, and is delivered as multi-year platform builds (typically 9-18 months to full production). It provides a single Kubernetes-native control plane that coexists with existing VMware, OpenNebula, and OpenShift estates rather than forcing rip-and-replace. The edition adds pre-validated DORA and NIS2 architecture controls, customer-controlled encryption keys at every data layer, audit-ready logging, multi-datacenter operations, ISO 27001 and SOC 2 alignment support, enterprise SLA with 24/7 support, and engineering training. No per-CPU or per-core licensing applies.**
quick_facts:
  - label: "What it is"
    value: "Private and hybrid sovereign cloud for regulated enterprises, built on Cozystack with one control plane that coexists with VMware, OpenNebula, and OpenShift"
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "For"
    value: "Regulated enterprises — banks, insurance, public administration, telco, healthcare, regulated industrial / energy operators"
  - label: "Engagement"
    value: "Multi-year platform builds; 3-6 month pilot, 9-18 months to full multi-DC production"
  - label: "Compliance"
    value: "DORA / NIS2-aligned by design; ISO 27001 / SOC 2 alignment; air-gap and sovereign-deployment options"
  - label: "Architecture"
    value: "Kubernetes-native, multi-DC, KubeVirt VMs + containers on one API, Cilium (eBPF) networking, LINSTOR storage, Tenant CRD multi-tenancy, customer-controlled keys"
faq:
  - q: "How is Enterprise Edition different from running open-source Cozystack ourselves?"
    a: "Cozystack provides the Kubernetes-native multi-tenant platform foundation. Enterprise Edition adds pre-validated DORA / NIS2 architecture bundles, multi-DC operations runbooks, customer-managed encryption at every layer, an audit-ready logging stack, hybrid integration with VMware / OpenNebula / OpenShift, ISO 27001 / SOC 2 alignment support, enterprise SLA with 24/7 support, and engineering training."
  - q: "Can Enterprise Edition coexist with our existing VMware, OpenStack, or OpenShift?"
    a: "Yes. It is designed for coexistence, not rip-and-replace. A single Cozystack-based control plane integrates with existing VMware Cloud Foundation, OpenStack, OpenNebula, and OpenShift estates, allowing gradual consolidation at the pace of each workload. Many enterprise deployments run hybrid for years."
  - q: "How does Enterprise Edition support DORA and NIS2 compliance?"
    a: "It provides customer-controlled encryption keys at every data layer, audit-ready logging via VictoriaLogs with an immutable backend, multi-tenant Tenant CRD aligned with ICT risk classification, tested exit-readiness mechanics, and Cilium-based network segmentation. These map to specific DORA Article 21/23/28 and NIS2 Article 21/23/30 requirements."
  - q: "What is the deployment timeline?"
    a: "A defined-slice pilot runs 3-6 months. A full Enterprise Edition deployment runs 9-18 months. Multi-DC deployments with sovereign-deployment requirements typically run 12-24 months. Engagements usually start with a fixed-price Platform Readiness Assessment for DORA / NIS2 gap analysis and an architecture roadmap."
  - q: "Is air-gapped deployment supported?"
    a: "Yes. Enterprise Edition supports fully air-gapped operation with no internet egress required, using offline updates via signed bundles. It is used in defence, sovereign cloud, and isolated industrial environments. Encryption keys are customer-managed (BYOK / HYOK) with HSM integration."
  - q: "Who controls the encryption keys?"
    a: "The customer. Keys are held by the customer at every layer — primary store, replicas, backups, observability data, and model weights at rest. Vendor-managed-only keys are explicitly avoided, and provider personnel access is logged and time-limited."
---

**Private and hybrid sovereign cloud for regulated enterprises. Secure, automated, and easy to extend. Built for multi-DC setups, DORA / NIS2 compliance, and enterprise integrations. One control plane that connects to VMware, OpenNebula, OpenShift, and more — turnkey cloud-in-a-box on customer-controlled hardware. Includes education and training.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a discovery call</a>
  <a class="cta-secondary" href="/products/aenix-platform/">All editions →</a>
</div>

---

## Quick facts

- **For:** Regulated enterprises — banks, insurance, public administration, telco, healthcare, regulated industrial / energy operators
- **Foundation:** Open-source Cozystack (CNCF project, Apache 2.0)
- **Engagement size:** €500k - €5M+ multi-year platform builds
- **Time to production:** 9-18 months full estate; 3-6 month pilot phase
- **Architecture:** Kubernetes-native, multi-DC, integrates with existing VMware / OpenNebula / OpenShift, customer-controlled keys, audit-ready logging
- **Compliance posture:** DORA / NIS2-aligned by design; ISO 27001 / SOC 2 alignment; sovereign-deployment options

---

## What's included in Enterprise Edition

### Multi-DC private and hybrid sovereign cloud

Designed for two-or-more datacenter deployments with active-warm or active-active failover. Tested DR + backup-restore cadence for regulator review. Hybrid pattern (on-prem + cloud) supported with one control plane.

### One control plane connecting to VMware / OpenNebula / OpenShift

Enterprise Edition is built for **coexistence**, not rip-and-replace. Existing VMware Cloud Foundation, OpenStack, OpenNebula, OpenShift estates can be brought under one Cozystack-based control plane while gradual consolidation happens at the workload pace.

### DORA architecture controls

- Customer-controlled encryption keys (Article 21(2)(h)) at every data layer
- Audit-ready logging via VictoriaLogs with immutable backend (Article 21(2)(i) + Article 23)
- Multi-tenant Tenant CRD aligned with ICT risk classification (Article 21(2)(a))
- Tested exit-readiness mechanics (Article 28(7)(c))
- Supplier transparency to second hop (Article 28(3))

[DORA compliance services →](/solutions/dora-compliance/) | [Free DORA checklist →](/resources/dora-compliance-checklist/)

### NIS2 architecture controls

- Article 21 cybersecurity risk-management measures across 10 control areas
- Article 23 incident handling + reporting templates aligned to 24h / 72h / 1-month timelines
- Article 30 coordinated vulnerability disclosure aligned
- Tenant CRD with NetworkPolicy / Cilium for segmentation

[NIS2 compliance services →](/solutions/nis2-compliance/) | [Free NIS2 checklist →](/resources/nis2-compliance-checklist/)

### Sovereign deployment

Customer-controlled hardware in customer-controlled jurisdiction. Air-gap operation supported (no internet egress required). Customer-managed encryption keys (BYOK / HYOK) with HSM integration. Provider personnel access logged and time-limited.

### Customer-managed encryption (data at rest + in transit)

Encryption keys held by the customer at every layer — primary store, replicas, backups, observability data, model weights at rest. Vendor-managed-only keys are explicitly avoided.

### VictoriaLogs audit-ready logging stack

Immutable, exportable, regulator-compatible audit trail. Integration with customer SIEM. Long-tail retention meeting longest applicable regulatory requirement (often 5+ years).

### Multi-tenant Tenant CRD

Tenant CRD with quota / RBAC / observability per workload. Tenant boundary enforced at network, identity, storage, observability layers — not just namespace.

### Sovereign AI infrastructure

H100, H200, L40S, A100, Blackwell (B100/B200) GPU classes supported. Multi-tenant GPU scheduling. Customer-controlled keys for AI workloads. See [Sovereign AI](/solutions/sovereign-ai/) and [AI/ML Edition](/products/aenix-platform/ai-ml-edition/) for AI-specific feature bundle.

### Education and training included

Engineering team training as part of the engagement. Aenix's Kubernetes Deep Dive Course covering the Cozystack stack (Talos, LINSTOR, Cilium, KubeVirt, Cluster API, Flux) included for customer engineers in Enterprise Edition deployments.

### Enterprise SLA + 24/7 support + named TAM

Tiered SLA aligned to regulator expectations. Named technical account manager. Escalation procedures.

### Compliance certification support

Pre-validated against ISO 27001 / SOC 2. Aenix supports certification documentation and audit-readiness work.

---

## Who buys Enterprise Edition

| Buyer | Typical engagement |
|---|---|
| Tier-1 / tier-2 European bank | DORA-aligned multi-DC sovereign cloud — multi-million-euro multi-year |
| Insurance carrier | DORA scope + GDPR + sectoral; sovereignty for regulated workloads |
| Large public administration | Sovereign cloud aligned with national procurement mandates |
| Telco operator | NIS2 essential-entity compliance + customer-cloud product opportunity |
| Healthcare operator | Sectoral data laws + AI workloads on regulated data |
| Regulated industrial / energy | NIS2 essential-entity + AI optimization + edge |

---

## Pricing

Pricing on request — €500k - €5M+ multi-year platform builds. Discovery call to scope.

[Discuss Enterprise Edition →](/contact/?edition=enterprise)

---

## Engagement structure

- **Discovery call** (30 min, free)
- **Platform Readiness Assessment** (5-10 days, fixed-price €20-50k) — DORA / NIS2 gap analysis + architecture roadmap
- **Pilot engagement** (3-6 months) — defined slice (one workload class, one BU, one site)
- **Full Enterprise Edition build** (9-18 months) — multi-DC production deployment, compliance certification support, operations team training
- **Managed operations** (optional, ongoing) — Aenix runs the platform under SLA

[Platform Readiness Assessment →](/services/platform-readiness-assessment/)

---

## Customer evidence

Tier-1 / tier-2 European bank engagements are in production. **All currently NDA-protected; first named bank case studies expected mid-2027** as NDAs expire.

Anonymized phrasing pattern: "Tier-1 European bank engagement under DORA scope" / "Multi-million-euro Ænix Platform Enterprise Edition deployment with regulated financial institution".

---

## Frequently asked questions

### How is Enterprise Edition different from running open-source Cozystack ourselves?

Cozystack provides the Kubernetes-native multi-tenant cloud platform foundation. Enterprise Edition adds: pre-validated DORA / NIS2 architecture bundles, multi-DC operations runbook, customer-managed encryption at every layer (incl. backups + observability), audit-ready logging stack, hybrid integration patterns with VMware / OpenNebula / OpenShift, ISO 27001 / SOC 2 alignment support, enterprise SLA + 24/7 support, and engineering training included.

### How is Enterprise Edition different from Public Cloud Edition?

Enterprise Edition is for regulated enterprises consuming cloud internally (single-organization use, often hybrid integration with existing VMware / OpenNebula / OpenShift). Public Cloud Edition is for operators selling cloud as a product (public cloud, big bank's internal cloud at scale, large telco). Same Cozystack foundation; different feature bundle.

### Can Enterprise Edition coexist with our existing VMware / OpenStack / OpenShift?

Yes. Designed for coexistence — Enterprise Edition's control plane integrates with existing VMware Cloud Foundation, OpenStack, OpenNebula, OpenShift estates. Gradual consolidation at workload pace. Many bank deployments run hybrid for years.

### What's the deployment timeline?

Pilot (defined slice): 3-6 months. Full Enterprise Edition deployment: 9-18 months. Multi-DC with sovereign-deployment requirements: 12-24 months.

### How does this satisfy DORA Article 28 supplier exit?

Workload portability is structural — workloads expressible as Kubernetes manifests + Helm, deployable to a second substrate without rewrite. Customer-controlled hardware. Documented exit plan tested at least every 24 months. Provider-side exit support contracted.

### What about ISO 27001 / SOC 2?

Enterprise Edition is pre-validated against ISO 27001 / SOC 2 architectural requirements. Aenix supports customer certification documentation and audit-readiness work as part of the engagement. Aenix's own ISO 27001 certification is in progress.

### Can we keep our existing storage / network / identity?

Generally yes. Enterprise Edition uses storage classes (LINSTOR by default; integrates with shared SAN), CNI (Cilium by default), and identity (OIDC federation with existing SSO) compatible with most existing enterprise stacks.

### Is air-gap supported?

Yes. Enterprise Edition supports air-gapped deployments with offline updates via signed bundles. Used in defence, sovereign cloud, isolated industrial environments.

---

## How to start

Book a 30-minute discovery call. We'll discuss your regulatory context (DORA / NIS2 / sectoral), current architecture, sovereignty requirements, and Enterprise Edition fit.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a discovery call</a>
</div>

---

*Ænix Platform Enterprise Edition is built on [Cozystack](https://cozystack.io) — a CNCF project we created and maintain (currently CNCF Sandbox; CNCF Incubating expected late summer 2026). Apache 2.0. Aenix is the open-core company.*
