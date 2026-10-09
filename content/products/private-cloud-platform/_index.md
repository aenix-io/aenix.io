---
title: "Ænix Private Cloud Platform for regulated enterprises"
description: "Ænix Private Cloud Platform: private and hybrid sovereign cloud for banks, insurers, public sector, telco and healthcare. DORA- and NIS2-aligned; per RFP."
type: "page"
language: "en"
hero_cta: {secondary_text: "Open the developer-platform demo", secondary_url: "/idp/"}
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "private cloud platform for regulated enterprises"
secondary_keywords: ["sovereign cloud platform", "dora compliant cloud", "nis2 cloud platform", "internal developer platform", "vmware alternative enterprise"]
direct_answer_image: "/images/cozystack-screenshot.png"
direct_answer_image_alt: "Cozystack Dashboard console"
images: ["img/og/private-cloud-platform.jpg"]
hreflang_de: /de/produkte/private-cloud-platform/
related_pages: ["/products/public-cloud-platform/", "/products/ai-platform/", "/solutions/dora-compliance/", "/solutions/nis2-compliance/", "/migration/vmware/"]
direct_answer: |
  **Ænix Private Cloud Platform is a private and hybrid sovereign cloud for regulated organizations that run cloud for themselves rather than sell it — banks, insurance carriers, public administration, telco and healthcare operators. It runs on Cozystack, the CNCF project Ænix created and maintains with maintainers from other companies, and runs alongside existing VMware, OpenNebula and OpenShift estates while workloads move, instead of forcing a rip-and-replace. Ænix designs it for your regulator: DORA- and NIS2-aligned architecture, volume encryption where you need it, audit-log retention and archive set to your requirement, multi-site designs, and control evidence for your own ISO 27001 work. A developer self-service layer with GitLab CI/CD and Argo CD golden paths is part of the platform. It is quoted per RFP: a 14- or 28-day assessment, then a 3-12 month build depending on scope, with the support tier chosen during scoping. No per-CPU or per-core licensing.**
quick_facts:
  - label: "What it is"
    value: "Private and hybrid sovereign cloud for regulated enterprises, built on Cozystack, running alongside VMware, OpenNebula and OpenShift while you migrate."
  - label: "Licence"
    value: "Apache 2.0 core (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence)"
  - label: "For"
    value: "Regulated enterprises — banks, insurance, public administration, telco, healthcare, regulated industrial and energy operators"
  - label: "Includes"
    value: "DORA / NIS2-aligned architecture, opt-in volume encryption, configurable audit-log retention, multi-site designs, air-gapped deployment, control evidence for your ISO 27001 work, and the developer self-service layer"
  - label: "Engagement"
    value: "Free 30-minute discovery call, a 14- or 28-day Platform Readiness Assessment, then a 3-12 month build depending on scope. Quoted per RFP."
  - label: "Architecture"
    value: "Kubernetes-native, multi-DC, KubeVirt VMs and containers on one API, Cilium (eBPF) networking, LINSTOR/DRBD replicated block storage, Tenant CRD multi-tenancy"
faq:
  - q: "How is this different from running open-source Cozystack ourselves?"
    a: "Cozystack provides the Kubernetes-native multi-tenant foundation. Private Cloud Platform adds the design and delivery work a regulator expects: DORA- and NIS2-aligned architecture, encryption, log retention and backup targets configured for your requirements, multi-site operations runbooks, coexistence with VMware, OpenNebula and OpenShift during migration, control evidence for your audits, an enterprise support tier and engineering training. The engine is the same and stays Apache 2.0; what you buy is the regulated-operations layer and the people who have done it before."
  - q: "How is it different from Ænix Public Cloud Platform?"
    a: "Who consumes the capacity. Private Cloud Platform is for organizations running cloud for their own business units, so it carries compliance architecture, encryption and audit logging designed for its regulator. Public Cloud Platform is for operators selling cloud to external customers, so it carries billing, payments and customer-facing portals instead. Same foundation and same APIs — and a telco or bank that does both runs both on one platform rather than two."
  - q: "Can it coexist with our existing VMware estate?"
    a: "Yes, and that is how these programmes normally run. The platform runs alongside existing VMware Cloud Foundation, OpenStack, OpenNebula and OpenShift estates while consolidation proceeds at the pace of the workloads. VMs move with built-in migration tooling, one cohort at a time."
  - q: "Does the developer self-service layer come separately?"
    a: "No. The internal developer platform layer — golden paths, GitLab CI/CD patterns, Argo CD GitOps, self-service APIs for environments, databases and clusters — is part of this platform rather than a separate product. Organizations that want only the regulated cloud simply leave it switched off; those that want self-service for their engineers switch it on without a second procurement."
  - q: "Can we add GPU and AI workloads?"
    a: "Yes. AI Platform capability runs on the same substrate: GPU tenancy uses the same tenant boundary as the rest of the estate, and the storage and logging choices made for the cloud apply to the AI workloads too. Regulated organizations typically add it once the cloud foundation is in production, without changing the platform underneath."
  - q: "What does air-gapped operation actually mean here?"
    a: "No internet egress is required for the platform to run or to be updated: images and platform releases are mirrored into the perimeter, and the control plane has no dependency on a vendor-hosted service. Air-gapped installation is an open-source Cozystack workflow; Ænix support for it is included from the Plus tier. Ænix engineers work on your environment only with your approval."
  - q: "Where are Ænix engineers located?"
    a: "Ænix has about 20 people, in the EU and Central Asia. Contracts with EU customers are signed with AENIX s.r.o. in the Czech Republic. Who may access which environment, and from where, is agreed in the contract."
aliases:
  - /products/aenix-platform/enterprise-edition/
  - /products/aenix-platform/idp-edition/
---


**Private and hybrid sovereign cloud for regulated organizations that run cloud for themselves. Multi-site designs, DORA- and NIS2-aligned architecture, and coexistence with VMware, OpenNebula and OpenShift while you migrate — on hardware you control. Developer self-service and engineering training are part of the platform, not a second purchase.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/products/">Compare platforms →</a>
</div>

## What's included

### Multi-site private and hybrid sovereign cloud

Stretched and multi-site designs across two or more data centres, with synchronous replication where the design calls for it — a Swiss provider runs one across [three data centres](/case-studies/sovereign-public-cloud/). There is no automated cross-site VM failover: site failover is a runbook that we design and rehearse with you, and backups go to storage outside the cluster they protect. See the [DORA evidence page](/compliance/dora/) for what the platform provides and what it does not.

### Coexistence with VMware / OpenNebula / OpenShift

The platform is built for **coexistence**, not rip-and-replace. It runs next to existing VMware Cloud Foundation, OpenStack, OpenNebula and OpenShift estates while workloads move at their own pace; a financial group in Asia runs [one self-service portal over OpenNebula, VMware and Kubernetes](/case-studies/unified-cloud-portal-financial-group/).

### DORA architecture controls

- Volume encryption at rest (LINSTOR and LUKS, opt-in) for the storage classes that need it (Article 9)
- Audit logging with retention set to your requirement — the default is 30 days — and shipping to an immutable store you control (Articles 17–19)
- Tenant boundaries aligned with ICT asset and risk classification (Article 8)
- An open-source exit path: the platform keeps running without Ænix (Article 28(8))
- Supplier transparency for the register of information (Article 28(3))

The [DORA evidence page](/compliance/dora/) maps each article to what Cozystack provides, what you configure, and what is not provided.

<div class="cta-row">
  <a class="cta-secondary" href="/solutions/dora-compliance/">DORA compliance services →</a>
  <a class="cta-secondary" href="/resources/dora-compliance-checklist/">Free DORA checklist →</a>
</div>

### NIS2 architecture controls

- Article 21 cybersecurity risk-management measures across 10 control areas
- Article 23 incident handling and reporting templates aligned to 24h / 72h / 1-month timelines
- Tenant boundaries with NetworkPolicy / Cilium for segmentation

<div class="cta-row">
  <a class="cta-secondary" href="/solutions/nis2-compliance/">NIS2 compliance services →</a>
  <a class="cta-secondary" href="/resources/nis2-compliance-checklist/">Free NIS2 checklist →</a>
</div>

### Sovereign deployment

Customer-controlled hardware in a customer-controlled jurisdiction. Air-gapped operation supported (no internet egress required). Ænix engineers work on your environment only with your approval.

### Encryption

Volume encryption at rest is opt-in per storage class, and backups can be encrypted and sent to storage you control. The key-management process — who holds keys, rotation, dual control — is designed with you during the build. The [GDPR evidence page](/compliance/gdpr/) describes the current mechanics and their limits.

### Audit logging

Audit logs in VictoriaLogs with configurable retention (default 30 days), exportable to your SIEM and to an immutable archive you control for the retention your regulator expects.

### Multi-tenant Tenant CRD

Tenant CRD with quota / RBAC / observability per workload. Tenant boundary enforced at network, identity, storage, observability layers — not just namespace.

### Education and training

Engineering team training as part of the engagement, plus monthly training hours on every support tier. On Plus and Enterprise, one full [Kubernetes Deep Dive Course](/kubernetes-deep-dive/) per year is included, covering the Cozystack stack (Talos, LINSTOR, Cilium, KubeVirt, Cluster API, Flux).

### Enterprise SLA and audit support

The support tier is chosen during scoping, from the same [tiers](/pricing/#support) as the price list: response times down to 1 hour on Enterprise, 24×7 from Plus, compliance audit support from Plus. The platform supplies control evidence for your own ISO 27001 or SOC 2 work; Ænix does not certify your organization. Ænix itself holds [ISO/IEC 27001:2022](/compliance/iso-27001/) for its own information security management. Ænix engineering teams are in the EU and Central Asia; EU contracts are signed with AENIX s.r.o.

---

### Developer self-service (internal developer platform)

Included in the platform rather than sold as a second product, and switched off for organizations that do not want it. It turns the multi-tenant substrate into something your engineers touch directly:

- **Golden paths and service-creation wizards** — engineers describe the outcome (workload, SLO, tenancy) and the platform realises it. Customizable to your organization's patterns.
- **GitLab CI/CD integration** — pre-built patterns for environments, secrets and deployment promotion, with templates for web services, workers, batch jobs and ML pipelines. GitHub and Bitbucket supported as alternatives.
- **Argo CD GitOps** — multi-cluster, multi-environment app-of-apps setup, PR-driven change for application and infrastructure, drift detection and remediation.
- **Self-service APIs** — environments, managed databases (PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse), object storage, Kubernetes clusters, observability scopes and identity bindings, without ticket queues.
- **Engineering productivity dashboards** — time-to-environment, deployment frequency, lead time, drift events.

The Tenant CRD that carries the compliance boundary is the same object that carries the team or squad model, so a self-service environment is isolated by the control the auditor already accepted. Against building this on Backstage: Backstage is a UI framework and you still supply the cloud underneath — here the foundation and the layer above it arrive together.

## Combine it with the other platforms

The three Ænix platforms are the same engine with different surfaces switched on, so they compose rather than compete. Nothing below is a separate installation or a second procurement.

- **[AI Platform](/products/ai-platform/)** — GPU tenancy on NVIDIA data-centre GPUs, model serving and vector databases, inside the same tenant boundary the regulator already reviewed.
- **[Public Cloud Platform](/products/public-cloud-platform/)** — billing, payments and customer-facing portals, for when the same organization also sells capacity externally. A telco running a regulated internal estate and a commercial sovereign cloud product runs both on one platform under one operations team.

The practical consequence: choosing Private Cloud Platform now does not foreclose anything later. Adding GPU tenancy or a customer-facing commercial layer is a configuration decision on the platform you already run.

## Where it sits against the incumbents

| Vs. | The trade |
|---|---|
| **Nutanix** | Nutanix sells an appliance-grade experience: HCI with Prism, one vendor for hardware and software, and an operations story that genuinely works out of the box. The costs are the licence per core, the hardware compatibility list, and an exit that gets harder each renewal — and quotes swing widely, so the same estate can price anywhere in a broad band. Ænix Private Cloud Platform runs on commodity hardware with no per-core licence, and Kubernetes is the API rather than a bolted-on add-on. [Five-year TCO with quote sensitivity](/tco-calculator/vs-nutanix/). |
| **Azure Stack HCI / Azure Local** | The right answer if your target state is Azure and this is a landing zone for workloads that cannot leave the building yet: the Azure control plane, Azure billing, Azure identity, one operating model. It is also the opposite of sovereignty — the control plane is Microsoft's, the meter runs to Microsoft, and a jurisdiction question about the control plane has one answer. Private Cloud Platform puts the control plane inside your perimeter, including fully air-gapped, with opt-in volume encryption at rest (LINSTOR and LUKS) using a passphrase you hold; the key-management process is designed with you. |
| **VMware / VCF under Broadcom** | The migration everyone is currently modelling. See [Cozystack vs VMware](/compare/cozystack-vs-vmware/) and the [five-year TCO](/tco-calculator/vs-vmware/). |
| **OpenShift** | A real ecosystem advantage in certified operators and images, against a per-core subscription and a heavier platform. [The honest version](/compare/cozystack-vs-openshift/). |

---

## Who buys it

| Buyer | Typical engagement |
|---|---|
| Bank or financial group | DORA-aligned private cloud with developer self-service ([bank case](/case-studies/private-cloud-in-a-bank/), [financial group case](/case-studies/unified-cloud-portal-financial-group/)) |
| Insurance carrier | DORA scope + GDPR + sectoral; sovereignty for regulated workloads |
| Large public administration | Sovereign cloud aligned with national procurement mandates |
| Telco operator | NIS2 essential-entity compliance + customer-cloud product opportunity |
| Healthcare operator | Sectoral data laws + AI workloads on regulated data |
| Regulated industrial / energy | NIS2 essential-entity + AI optimization + edge |

---

## Pricing

Quoted per RFP after a discovery call and a Platform Readiness Assessment. The [published support tiers](/pricing/#support) are for Public Cloud Platform and self-run Cozystack; a Private Cloud programme includes the tier chosen during scoping.

[Discuss Private Cloud Platform →](/contact/?platform=private-cloud)

---

## Engagement structure

- **Discovery call** (30 min, free)
- **Platform Readiness Assessment** (14 or 28 days, fixed price agreed up front) — DORA / NIS2 gap analysis + architecture roadmap
- **Build** (3-12 months, depending on scope) — production deployment, often starting with a defined slice (one workload class, one business unit, one site), plus audit support and operations team training
- **Managed operations** (optional, ongoing) — Ænix runs the platform under SLA

[Platform Readiness Assessment →](/services/platform-readiness-assessment/)

---

## Customer evidence

[Nine case studies are published in full](/case-studies/), anonymized by contract but with architecture and figures intact — including [a private cloud inside a bank](/case-studies/private-cloud-in-a-bank/) and [one portal over OpenNebula, VMware and Kubernetes for a financial group](/case-studies/unified-cloud-portal-financial-group/). Reference calls with existing customers can be arranged under NDA for an active opportunity.

---

## Request an architecture review

Tell us your regulatory context (DORA / NIS2 / sectoral), current architecture, and sovereignty requirements — we reply by email and set up a focused architecture review with an Ænix engineer to confirm platform fit. To talk first, [book a 30-minute call in the calendar](https://zcal.co/i/s5C4-cO1).

{{< pipedrive-form type="demo" >}}

Prefer a shorter first step? [Book a discovery call](/contact/) instead.

---

*Ænix Private Cloud Platform is built on [Cozystack](https://cozystack.io) — a CNCF project Ænix created and maintains with maintainers from other companies (currently CNCF Sandbox; CNCF Incubating application in due diligence). Apache 2.0.*
