---
title: "Ænix Public Cloud Platform — for everyone who sells cloud"
description: "Aenix Public Cloud Platform: turnkey cloud platform for anyone selling cloud — hosting providers, MSPs, telcos, national operators. Billing, portal, multi-region."
type: "page"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "public cloud platform"
secondary_keywords: ["cloud platform for hosting providers", "openstack alternative for providers", "multi-tenant cloud platform", "whmcs cloud billing", "sovereign public cloud"]
direct_answer_image: "/images/cozystack-screenshot.png"
direct_answer_image_alt: "Aenix Public Cloud Platform console"
images: ["img/og/public-cloud-platform.png"]
hreflang_de: /de/produkte/public-cloud-platform/
related_pages: ["/products/private-cloud-platform/", "/products/ai-platform/", "/products/whmcs-integration/", "/migration/vmware/", "/alternatives/openstack-alternative/"]
direct_answer: |
  **Aenix Public Cloud Platform is a turnkey, Kubernetes-native cloud platform for organizations that sell cloud capacity to someone else — hosting providers, MSPs, regional clouds and data centres at one end, telcos, national operators and banks running a commercial cloud at the other. It is the productized, supported distribution of Cozystack (Apache 2.0, a CNCF project created and maintained by Aenix) and adds the commercial surfaces a cloud business needs: full billing back-end and front-end, WHMCS integration, a white-label customer portal, payment processing, automatic tenant lock and suspension, and service-creation wizards for VMs, Kubernetes clusters, managed databases, S3 storage and GPU workloads. It runs multi-region and multi-hypervisor, so it extends an existing VMware or OpenStack estate rather than forcing a rip-and-replace. Entry tier starts at $1,250/month; national multi-region programmes are quoted per RFP.**
quick_facts:
  - label: "What it is"
    value: "Turnkey, supported cloud-in-a-box for anyone selling cloud — built on Cozystack, with billing, payments and a white-label portal included."
  - label: "License"
    value: "Apache 2.0 core (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it is for"
    value: "Hosting providers, MSPs, regional clouds and data centres at the small end; telcos, national operators and banks running a commercial cloud at the large end."
  - label: "Replaces"
    value: "OpenStack, VMware Cloud Director, Virtuozzo, OpenNebula, Virtualizor / SolusVM-class panels, and in-house hosting panels."
  - label: "Architecture"
    value: "Kubernetes-native: KubeVirt (VMs and containers on one API), Cilium (eBPF) networking, replicated block storage, Tenant CRD multi-tenancy, plus Cozystack Dashboard, VictoriaMetrics and VictoriaLogs."
  - label: "Time to live"
    value: "Weeks at provider scale via the productized installer; 3-6 month pilot then 9-18 months for a multi-region national build."
  - label: "Engagement"
    value: "From $1,250/month at provider scale; multi-region operator programmes quoted per RFP."
faq:
  - q: "How is this different from running open-source Cozystack ourselves?"
    a: "Cozystack is the engine, and it stops where the cloud business begins. Public Cloud Platform adds the operator surface: billing back-end and front-end, payment integrations, WHMCS modules, a brandable customer portal, service-creation wizards, tenant lock and suspension, a productized installer, multi-region control plane, enterprise SLA and dedicated support. Building those yourself is years of engineering, and none of it differentiates you from another provider."
  - q: "How is it different from Ænix Private Cloud Platform?"
    a: "Who consumes the capacity. Public Cloud Platform is for operators selling cloud to customers who are not them, so it carries billing, payments, resale and customer-facing portals. Private Cloud Platform is for organizations running cloud for their own business units, so it carries DORA / NIS2 architecture, customer-controlled keys and audit-ready logging instead. Same Cozystack foundation, same APIs — you can run both, and organizations that sell cloud and also run regulated internal workloads frequently do."
  - q: "Can it coexist with our existing VMware or OpenStack estate?"
    a: "Yes, and that is the normal path. The platform is multi-hypervisor: it orchestrates native KubeVirt VMs while integrating with existing VMware, OpenStack, OpenNebula and OpenShift footprints, so you consolidate one cohort at a time instead of running a big-bang migration. Ænix ships Forklift-based migration tooling in the platform and has done cohort-based VMware exits in production. Upstream Cozystack self-service VM import is still in review, so a self-run cluster deploys Forklift alongside it."
  - q: "Do we need our own 24/7 operations team?"
    a: "Not necessarily. Both customer-operated and Aenix-managed operating models are supported, and the hybrid one — you own the data plane, Aenix operates the control plane under SLA — is common in regulated deployments. At provider scale a typical team is three to seven engineers, against eight to fifteen for a comparable OpenStack estate."
  - q: "What does the multi-region pattern look like?"
    a: "Two to N+1 regions with tenant-scoped policy enforcement, customer-selectable region placement, and identity, network and storage policy federated at the platform layer. A provider that grows into multi-region does not replatform — it switches multi-region on and keeps its portal, its billing and its tenants."
  - q: "Can we add GPU or developer self-service later?"
    a: "Yes. AI and GPU capability and the developer self-service layer are ordinary tenant workloads on the same platform, so adding either is a configuration decision rather than a second procurement. Providers commonly start with VMs and managed databases and switch on GPU-as-a-Service once demand appears."
aliases:
  - /products/aenix-platform/provider-edition/
  - /products/aenix-platform/isp-edition/
  - /products/aenix-platform/public-cloud-edition/
  - /managed-kubernetes/
---

**A modern alternative to OpenStack for everyone who sells cloud — from a regional hoster with forty nodes to a national operator with several data centres. Turnkey cloud-in-a-box: hosting panel, billing, customer portal, payments, support. Install, plug in users, start operating.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/products/">Compare platforms →</a>
</div>

**See the customer portal for yourself.** The Cozystack Dashboard console is the actual Ænix Platform customer frontend, running entirely in your browser with demo data — no signup, no cluster, no setup.

<div class="cta-row">
  <a class="cta-primary" href="/demo/" target="_blank" rel="noopener">Open the live demo →</a>
</div>

## One platform, two ends of the same scale

A regional hoster with forty nodes and a national operator with several data centres are in the same business: you sell capacity to someone who is not you, so you need billing, a customer-facing portal, tenant isolation you can defend under audit, and payments that reconcile. That is one product, not two. The difference is how much of it is switched on.

| | Provider scale | National / operator scale |
|---|---|---|
| Who | Hosting providers, MSPs, regional clouds, data centres | Telcos, national operators, banks running a commercial cloud, large public clouds |
| Regions | One or a few sites | Multi-region control plane; workload placement and policy across regions |
| Billing | WHMCS-integrated, Stripe and regional processors | Full billing back-end plus your own front-end, custom payment integrations |
| Existing estate | Migrate off it | Federate with it — one control plane over VMware, OpenNebula and OpenShift while you migrate |
| Onboarding | Productized installer, weeks to live | 3-6 month pilot, then 9-18 months to full multi-region |
| Bought as | Published price list, from $1,250 / month per 10 nodes | Multi-year programme, quoted per RFP |

The technology underneath is identical, which is the point: a provider that grows into the right-hand column does not replatform. It turns on multi-region and keeps its portal, its billing and its tenants.

## What's included

### Full billing — back-end and front-end

Usage metering, invoicing, payment processing. Stripe, regional payment providers and B2B invoicing. Not API hooks you finish yourself — an actual production billing surface, with multi-currency and multi-jurisdiction support at operator scale, and pre-paid balance, post-paid invoicing, channel-partner billing and reseller margin handling.

### WHMCS integration

A production-ready module with billing templates for the panel you already run. Two integration modes: WHMCS as the customer-facing front, or Cozystack Dashboard as the front with WHMCS as the billing back-end. Full usage data tracked and stored behind a documented API. [More on the WHMCS integration →](/products/whmcs-integration/)

### Hosting panel and customer portal

A branded admin dashboard for the operator, plus a customer-facing console (Cozystack Dashboard, customized to your brand) with self-service registration, profiles, team management and support ticketing.

### Service-creation wizards

Guided flows for VMs, Kubernetes clusters, managed databases (PostgreSQL, MariaDB, Redis, Kafka, ClickHouse, RabbitMQ, NATS), S3-compatible object storage and GPU workloads. No YAML required from end customers.

### Tenant lock and suspension

Tenant lifecycle controls built in — automatic suspension of overdue accounts, resource blocking, lock for security review. No engineering ticket to suspend a non-paying tenant.

### Multi-hypervisor control plane

One control plane that orchestrates native KubeVirt VMs and integrates with existing VMware, OpenStack, OpenNebula and OpenShift infrastructure. Storage-class compatibility with shared SAN, S3-compatible and on-premise block storage; network integration with existing fabrics over BGP, OVN and Cilium.

### Multi-region

Native multi-region orchestration: workload placement, identity, network and storage policy enforced across regions. The Tenant CRD scopes naturally to a region or across several.

### Service catalogue beyond VMs

Managed PostgreSQL (CloudNativePG), MySQL (MariaDB), Redis, Kafka (Strimzi), ClickHouse (Altinity), RabbitMQ and NATS; S3 storage (SeaweedFS); HTTP cache; VPN service; GPU workloads.

### Migration tooling and expertise

Modules and runbooks for migration from VMware, OpenStack, Virtuozzo and OpenNebula, including Forklift-based VM migration, which ships in the Ænix platform (upstream Cozystack self-service import is still in review, so a self-run Cozystack cluster deploys Forklift alongside it). Ænix delivers migration with experience from production engagements. [Migration guides →](/migration/)

### Enterprise support

24/7 support with a named technical account manager on higher tiers. Entry tier from $1,250/month.

## Why providers choose this over OpenStack

| Dimension | OpenStack | Ænix Public Cloud Platform |
|---|---|---|
| Time to production | 6+ months typical | Weeks |
| Operations team size | 8-15+ engineers | 3-7 engineers |
| Service catalogue | DIY beyond core compute / storage / network | Built-in: Kubernetes, databases, S3, GPU, cache, VPN |
| Customer-facing portal | DIY | Cozystack Dashboard, branded, included |
| Billing | DIY integration | WHMCS-native, Stripe and regional providers |
| Multi-tenancy | Project model — limited | Tenant CRD with quotas, RBAC and observability per tenant |
| Migration from VMware | Heavy lift | Forklift-based tooling plus Ænix delivery |
| Vendor support | Community plus add-ons | Ænix enterprise support from $1,250/month |
| Upgrade cadence | Manual, risky | GitOps-managed, low-risk |

### And versus the VPS control panels

Most small and mid-size providers are not running OpenStack at all. They run Virtualizor, SolusVM, Proxmox with a billing bolt-on, or a panel written in-house. Those tools do one job well: sell and provision VPS.

| Dimension | Virtualizor / SolusVM class | Ænix Public Cloud Platform |
|---|---|---|
| Product catalogue | VPS, and variations on VPS | VMs plus managed Kubernetes, PostgreSQL, MariaDB, ClickHouse, Kafka, RabbitMQ, Redis, S3, GPU |
| Where the margin is | Reselling capacity, competing on price per vCPU | Managed services on the same hardware, priced per service |
| Tenancy model | An account owning VMs | Tenant CRD — quotas, RBAC, network isolation, per-tenant observability and billing |
| Kubernetes for customers | Not offered, or a separate product to operate | Native, with a managed control plane per tenant |
| Upgrades | Panel upgrade and hypervisor upgrade, both manual | One GitOps-managed platform version |
| Lock-in | Proprietary panel, per-VM licence | Apache 2.0 core; you can drop the commercial layer and stay on plain Cozystack |

The honest read: if VPS resale is your whole business and the margin satisfies you, a panel is cheaper and simpler — keep it. This platform pays for itself when you want to sell managed services, databases, Kubernetes and GPU without building each one yourself.

## Combine it with the other platforms

The three Ænix platforms are the same engine with different surfaces switched on, so they compose rather than compete. Nothing here is a separate installation.

- **[AI Platform](/products/ai-platform/)** — multi-tenant GPU scheduling, MIG and fractioning, model serving, vector databases. Providers sell this as GPU-as-a-Service on the hardware they already have.
- **[Private Cloud Platform](/products/private-cloud-platform/)** — DORA / NIS2 architecture, customer-controlled keys, audit-ready logging. Relevant when you are a regulated entity yourself, or when you run internal workloads next to the ones you sell.

A telco selling a sovereign cloud product while running its own regulated internal estate takes both, on one platform, under one operations team.

## Who buys it

| Buyer | Typical engagement |
|---|---|
| Hosting provider, MSP, regional cloud | Productized installer, live in weeks, from the price list |
| Data centre adding cloud services | Migration from VMware or Virtuozzo, then service catalogue expansion |
| Large public-cloud operator | New cloud product launch or multi-region scale-up |
| Tier-1 bank operating a commercial cloud | DORA-aligned, sovereign, multi-region |
| Large telco or national operator | Customer-facing sovereign cloud product, often regional plus edge |

## Production customers

Regional hosting providers running Ænix Platform include **GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy**, delivering multi-tenant cloud products across the EU, DACH, Central Asia and other regions.

Bank and telco deployments are NDA-protected until mid-2027. One commercial public cloud built on this platform is written up in detail: [a Swiss provider running three data centres with synchronous cross-DC replication and GPU in production](/case-studies/sovereign-public-cloud/).

## Engagement structure

- **Discovery call** (30 minutes, free) — confirm fit
- **Platform Readiness Assessment** (5-10 days, fixed price) — current-state and target architecture, migration roadmap, risk register
- **Pilot** (3-6 months, operator scale) — one region, one tenant cohort, one product line
- **Full build** — weeks at provider scale via the productized installer; 9-18 months for multi-region production with customer onboarding workflows and operations training
- **Managed operations** (optional) — Ænix runs the control plane under SLA

[Platform Readiness Assessment →](/services/platform-readiness-assessment/)

## How to start

Tell us your scale, your current stack and what you sell today, and we will set up a focused call with an Ænix engineer to confirm fit.

{{< pipedrive-form type="demo" >}}

Prefer a shorter first step? [Book a discovery call](/contact/) instead.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/demo/" target="_blank" rel="noopener">Open the live demo →</a>
</div>
