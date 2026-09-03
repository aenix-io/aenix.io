---
title: "Ænix Private Cloud Platform"
description: "Aenix Private Cloud Platform: private and hybrid sovereign cloud for regulated banks, insurance, public sector, telco and healthcare. DORA / NIS2-aligned."
type: "page"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "private cloud platform for regulated enterprises"
secondary_keywords: ["sovereign cloud platform", "dora compliant cloud", "nis2 cloud platform", "internal developer platform", "vmware alternative enterprise"]
direct_answer_image: "/images/cozystack-screenshot.png"
direct_answer_image_alt: "Aenix Private Cloud Platform console"
images: ["img/og/private-cloud-platform.png"]
hreflang_de: /de/produkte/private-cloud-platform/
related_pages: ["/products/public-cloud-platform/", "/products/ai-platform/", "/solutions/dora-compliance/", "/solutions/nis2-compliance/", "/migration/vmware/"]
direct_answer: |
  **Aenix Private Cloud Platform is a private and hybrid sovereign cloud for regulated organizations that run cloud for themselves rather than sell it — banks, insurance carriers, public administration, telco and healthcare operators. It runs on Cozystack, the open-source CNCF project Aenix created and maintains, and provides a single Kubernetes-native control plane that coexists with existing VMware, OpenNebula and OpenShift estates instead of forcing a rip-and-replace. It adds pre-validated DORA and NIS2 architecture controls, customer-controlled encryption keys at every data layer, audit-ready immutable logging, multi-datacenter operations with tested failover, ISO 27001 and SOC 2 alignment support, and an optional developer self-service layer with GitLab CI/CD and Argo CD golden paths. Enterprise SLA with 24/7 support and engineering training are included. No per-CPU or per-core licensing applies.**
quick_facts:
  - label: "What it is"
    value: "Private and hybrid sovereign cloud for regulated enterprises, built on Cozystack, with one control plane that coexists with VMware, OpenNebula and OpenShift."
  - label: "License"
    value: "Apache 2.0 core (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "For"
    value: "Regulated enterprises — banks, insurance, public administration, telco, healthcare, regulated industrial and energy operators"
  - label: "Includes"
    value: "DORA / NIS2 architecture controls, customer-managed keys, audit-ready logging, multi-DC operations, and an optional developer self-service (IDP) layer"
  - label: "Engagement"
    value: "Multi-year platform builds; 3-6 month pilot, 9-18 months to full multi-DC production"
  - label: "Compliance"
    value: "DORA / NIS2-aligned by design; ISO 27001 / SOC 2 alignment; air-gap and sovereign deployment options"
  - label: "Architecture"
    value: "Kubernetes-native, multi-DC, KubeVirt VMs and containers on one API, Cilium (eBPF) networking, replicated block storage, Tenant CRD multi-tenancy, customer-controlled keys"
faq:
  - q: "How is this different from running open-source Cozystack ourselves?"
    a: "Cozystack provides the Kubernetes-native multi-tenant foundation. Private Cloud Platform adds pre-validated DORA and NIS2 architecture bundles, multi-DC operations runbooks, customer-managed encryption at every layer, an audit-ready logging stack, hybrid integration with VMware, OpenNebula and OpenShift, ISO 27001 and SOC 2 alignment support, enterprise SLA with 24/7 support, and engineering training. The engine is the same and stays Apache 2.0; what you buy is the regulated-operations layer and the people who have done it before."
  - q: "How is it different from Ænix Public Cloud Platform?"
    a: "Who consumes the capacity. Private Cloud Platform is for organizations running cloud for their own business units, so it carries compliance architecture, customer-controlled keys and audit-ready logging. Public Cloud Platform is for operators selling cloud to external customers, so it carries billing, payments and customer-facing portals instead. Same foundation and same APIs — and a telco or bank that does both runs both on one platform rather than two."
  - q: "Can it coexist with our existing VMware estate?"
    a: "Yes, and that is how these programmes normally run. The platform is built for coexistence: existing VMware Cloud Foundation, OpenStack, OpenNebula and OpenShift estates come under one Cozystack-based control plane while consolidation proceeds at the pace of the workloads. Forklift-based VM migration ships in the platform, so moving a cohort does not require a separate tool or a separate project."
  - q: "Does the developer self-service layer come separately?"
    a: "No. The internal developer platform layer — golden paths, GitLab CI/CD patterns, Argo CD GitOps, self-service APIs for environments, databases and clusters — is part of this platform rather than a separate product. Organizations that want only the regulated cloud simply leave it switched off; those that want self-service for their engineers switch it on without a second procurement."
  - q: "Can we add GPU and AI workloads?"
    a: "Yes. AI Platform capability runs on the same substrate and inherits the same sovereignty controls: customer-controlled keys extend to model weights at rest, and GPU tenancy uses the same Tenant CRD boundary as the rest of the estate. Regulated organizations typically add it once the cloud foundation is in production, without changing the platform underneath."
  - q: "What does air-gapped operation actually mean here?"
    a: "No internet egress is required for the platform to run or to be updated: images and platform releases are mirrored into the perimeter, and the control plane has no dependency on a vendor-hosted service. Provider personnel access is logged and time-limited, and encryption keys stay with the customer, including for backups and observability data."
aliases:
  - /products/aenix-platform/enterprise-edition/
  - /products/aenix-platform/idp-edition/
---


**Private and hybrid sovereign cloud for regulated organizations that run cloud for themselves. Built for multi-DC setups, DORA / NIS2 compliance, and enterprise integrations. One control plane that connects to VMware, OpenNebula, OpenShift, and more — turnkey cloud-in-a-box on customer-controlled hardware. Includes education and training.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/products/">Compare platforms →</a>
</div>

---


---

## What's included

### Multi-DC private and hybrid sovereign cloud

Designed for two-or-more datacenter deployments with active-warm or active-active failover. Tested DR + backup-restore cadence for regulator review. Hybrid pattern (on-prem + cloud) supported with one control plane.

### One control plane connecting to VMware / OpenNebula / OpenShift

The platform is built for **coexistence**, not rip-and-replace. Existing VMware Cloud Foundation, OpenStack, OpenNebula, OpenShift estates can be brought under one Cozystack-based control plane while gradual consolidation happens at the workload pace.

### DORA architecture controls

- Customer-controlled encryption keys (Article 21(2)(h)) at every data layer
- Audit-ready logging via VictoriaLogs with immutable backend (Article 21(2)(i) + Articles 17–19)
- Multi-tenant Tenant CRD aligned with ICT risk classification (Article 21(2)(a))
- Tested exit-readiness mechanics (Article 28(7)(c))
- Supplier transparency to second hop (Article 28(3))

<div class="cta-row">
  <a class="cta-secondary" href="/solutions/dora-compliance/">DORA compliance services →</a>
  <a class="cta-secondary" href="/resources/dora-compliance-checklist/">Free DORA checklist →</a>
</div>

### NIS2 architecture controls

- Article 21 cybersecurity risk-management measures across 10 control areas
- Article 23 incident handling + reporting templates aligned to 24h / 72h / 1-month timelines
- Article 12 coordinated vulnerability disclosure aligned
- Tenant CRD with NetworkPolicy / Cilium for segmentation

<div class="cta-row">
  <a class="cta-secondary" href="/solutions/nis2-compliance/">NIS2 compliance services →</a>
  <a class="cta-secondary" href="/resources/nis2-compliance-checklist/">Free NIS2 checklist →</a>
</div>

### Sovereign deployment

Customer-controlled hardware in customer-controlled jurisdiction. Air-gap operation supported (no internet egress required). Customer-managed encryption keys (BYOK / HYOK) with HSM integration. Provider personnel access logged and time-limited.

### Customer-managed encryption (data at rest + in transit)

Encryption keys held by the customer at every layer — primary store, replicas, backups, observability data, model weights at rest. Vendor-managed-only keys are explicitly avoided.

### VictoriaLogs audit-ready logging stack

Immutable, exportable, regulator-compatible audit trail. Integration with customer SIEM. Long-tail retention meeting longest applicable regulatory requirement (often 5+ years).

### Multi-tenant Tenant CRD

Tenant CRD with quota / RBAC / observability per workload. Tenant boundary enforced at network, identity, storage, observability layers — not just namespace.

### Sovereign AI infrastructure

H100, H200, L40S, A100, Blackwell (B100/B200) GPU classes supported. Multi-tenant GPU scheduling. Customer-controlled keys for AI workloads. See [Sovereign AI](/solutions/sovereign-ai/) and [Ænix AI Platform](/products/ai-platform/) for the AI-specific feature set.

### Education and training included

Engineering team training as part of the engagement. Aenix's Kubernetes Deep Dive Course covering the Cozystack stack (Talos, LINSTOR, Cilium, KubeVirt, Cluster API, Flux) included for customer engineers in Private Cloud Platform deployments.

### Enterprise SLA + 24/7 support + named TAM

Tiered SLA aligned to regulator expectations. Named technical account manager. Escalation procedures.

### Compliance certification support

Pre-validated against ISO 27001 / SOC 2. Aenix supports certification documentation and audit-readiness work.

---

### Developer self-service (internal developer platform)

Included in the platform rather than sold as a second product, and switched off for organizations that do not want it. It turns the multi-tenant substrate into something your engineers touch directly:

- **Golden paths and service-creation wizards** — engineers describe the outcome (workload, SLO, tenancy) and the platform realises it. Customizable to your organization's patterns.
- **GitLab CI/CD integration** — pre-built patterns for environments, secrets and deployment promotion, with templates for web services, workers, batch jobs and ML pipelines. GitHub and Bitbucket supported as alternatives.
- **Argo CD GitOps** — multi-cluster, multi-environment app-of-apps setup, PR-driven change for application and infrastructure, drift detection and remediation.
- **Self-service APIs** — environments, managed databases (PostgreSQL, MySQL, Redis, Kafka, ClickHouse), object storage, Kubernetes clusters, observability scopes and identity bindings, without ticket queues.
- **Engineering productivity dashboards** — time-to-environment, deployment frequency, lead time, drift events.

The Tenant CRD that carries the compliance boundary is the same object that carries the team or squad model, so a self-service environment is isolated by the control the auditor already accepted. Against building this on Backstage: Backstage is a UI framework and you still supply the cloud underneath — here the foundation and the layer above it arrive together.

## Combine it with the other platforms

The three Ænix platforms are the same engine with different surfaces switched on, so they compose rather than compete. Nothing below is a separate installation or a second procurement.

- **[AI Platform](/products/ai-platform/)** — GPU tenancy, model serving and vector databases inheriting the same sovereignty controls: customer-managed keys extend to model weights at rest, GPU workloads sit inside the same Tenant CRD boundary the regulator already reviewed.
- **[Public Cloud Platform](/products/public-cloud-platform/)** — billing, payments and customer-facing portals, for when the same organization also sells capacity externally. A telco running a regulated internal estate and a commercial sovereign cloud product runs both on one platform under one operations team.

The practical consequence: choosing Private Cloud Platform now does not foreclose anything later. Adding GPU tenancy or a customer-facing commercial layer is a configuration decision on the platform you already run.

## Where it sits against the incumbents

| Vs. | The trade |
|---|---|
| **Nutanix** | Nutanix sells an appliance-grade experience: HCI with Prism, one vendor for hardware and software, and an operations story that genuinely works out of the box. The costs are the licence per core, the hardware compatibility list, and an exit that gets harder each renewal — and quotes swing widely, so the same estate can price anywhere in a broad band. Ænix Private Cloud Platform runs on commodity hardware with no per-core licence, and Kubernetes is the API rather than a bolted-on add-on. [Five-year TCO with quote sensitivity](/tco-calculator/vs-nutanix/). |
| **Azure Stack HCI / Azure Local** | The right answer if your target state is Azure and this is a landing zone for workloads that cannot leave the building yet: the Azure control plane, Azure billing, Azure identity, one operating model. It is also the opposite of sovereignty — the control plane is Microsoft's, the meter runs to Microsoft, and a jurisdiction question about the control plane has one answer. Private Cloud Platform puts the control plane inside your perimeter, including fully air-gapped, with customer-managed keys. |
| **VMware / VCF under Broadcom** | The migration everyone is currently modelling. See [Cozystack vs VMware](/compare/cozystack-vs-vmware/) and the [five-year TCO](/tco-calculator/vs-vmware/). |
| **OpenShift** | A real ecosystem advantage in certified operators and images, against a per-core subscription and a heavier platform. [The honest version](/compare/cozystack-vs-openshift/). |

---

## Who buys it

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

Multi-year platform build, quoted per RFP. Discovery call to scope.

[Discuss Private Cloud Platform →](/contact/?edition=private-cloud)

---

## Engagement structure

- **Discovery call** (30 min, free)
- **Platform Readiness Assessment** (5-10 days, fixed price agreed up front) — DORA / NIS2 gap analysis + architecture roadmap
- **Pilot engagement** (3-6 months) — defined slice (one workload class, one BU, one site)
- **Full platform build** (9-18 months) — multi-DC production deployment, compliance certification support, operations team training
- **Managed operations** (optional, ongoing) — Aenix runs the platform under SLA

[Platform Readiness Assessment →](/services/platform-readiness-assessment/)

---

## Customer evidence

Tier-1 / tier-2 European bank engagements are in production and NDA-protected; naming is permitted from mid-2027 as the NDAs expire. [Five deployments are written up in full](/case-studies/), anonymized by contract but with architecture and figures intact. Reference calls with existing customers can be arranged under NDA for an active opportunity.

Anonymized phrasing pattern: "Tier-1 European bank engagement under DORA scope" / "Multi-million-euro Ænix Private Cloud Platform deployment with regulated financial institution".

---


---

## Book a review

Tell us your regulatory context (DORA / NIS2 / sectoral), current architecture, and sovereignty requirements — we'll set up a focused architecture review with an Aenix engineer and confirm platform fit.

{{< pipedrive-form type="demo" >}}

Prefer a shorter first step? [Book a discovery call](/contact/) instead.

---

*Ænix Private Cloud Platform is built on [Cozystack](https://cozystack.io) — a CNCF project we created and maintain (currently CNCF Sandbox; CNCF Incubating expected late summer 2026). Apache 2.0. Aenix is the open-core company.*
