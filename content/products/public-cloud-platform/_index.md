---
title: "Ænix Public Cloud Platform — for everyone who sells cloud"
description: "Ænix Public Cloud Platform: a complete public-cloud product for hosting providers, MSPs and operators: billing, WHMCS, customer portal. From $1,250 / 10 nodes."
type: "page"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "public cloud platform"
secondary_keywords: ["cloud platform for hosting providers", "openstack alternative for providers", "multi-tenant cloud platform", "whmcs cloud billing", "sovereign public cloud"]
direct_answer_image: "/images/cozystack-screenshot.png"
direct_answer_image_alt: "Cozystack Dashboard customer console"
images: ["img/og/public-cloud-platform.jpg"]
hreflang_de: /de/produkte/public-cloud-platform/
related_pages: ["/products/private-cloud-platform/", "/products/ai-platform/", "/products/whmcs-integration/", "/migration/vmware/", "/alternatives/openstack-alternative/"]
direct_answer: |
  **Ænix Public Cloud Platform is a complete, Kubernetes-native public-cloud product for organizations that sell cloud capacity to someone else — hosting providers, MSPs and regional clouds at one end, telcos, national operators and banks running a commercial cloud at the other. It is the productized, supported distribution of Cozystack (Apache 2.0, a CNCF project that Ænix created and maintains with maintainers from other companies), adding the commercial surfaces a cloud business needs: full billing back-end and front-end, WHMCS integration, a brandable customer portal, payment processing, automatic tenant lock and suspension, and service-creation wizards for VMs, Kubernetes clusters, managed databases, S3 storage and GPU workloads. It runs multi-region and alongside an existing VMware or OpenStack estate during migration, rather than forcing a rip-and-replace. A subscription starts at $1,250 per 10 physical nodes per month (Basic support tier plus the proprietary Ænix commercial modules); national multi-region programmes are quoted per RFP.**
quick_facts:
  - label: "What it is"
    value: "A complete, supported public-cloud product for anyone selling cloud — built on Cozystack, with the Ænix billing system, WHMCS integration and a brandable customer portal."
  - label: "Licence"
    value: "Apache 2.0 core (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence)"
  - label: "Who it is for"
    value: "Hosting providers, MSPs, regional clouds and data centres at the small end; telcos, national operators and banks running a commercial cloud at the large end."
  - label: "Replaces"
    value: "OpenStack, VMware Cloud Director, Virtuozzo, OpenNebula, Virtualizor / SolusVM-class panels, and in-house hosting panels."
  - label: "Architecture"
    value: "Kubernetes-native: KubeVirt (VMs and containers on one API), Cilium (eBPF) networking, LINSTOR/DRBD replicated block storage, SeaweedFS object storage, Tenant CRD multi-tenancy, Cozystack Dashboard, VictoriaMetrics and VictoriaLogs."
  - label: "Engagement"
    value: "From $1,250 per 10 nodes per month at provider scale; live in weeks once the hardware is ready, via the productized installer. Multi-region operator programmes are quoted per RFP: 3-6 month pilot, then 9-18 months."
faq:
  - q: "How is this different from running open-source Cozystack ourselves?"
    a: "Cozystack is the engine, and it stops where the cloud business begins. Public Cloud Platform adds the operator surface: billing back-end and front-end, payment integrations, WHMCS modules, a brandable customer portal, service-creation wizards, tenant lock and suspension, a productized installer, multi-region control plane, enterprise SLA and dedicated support. The billing system and WHMCS integration are proprietary Ænix modules; the rest of the platform stays open-source Cozystack. Building those surfaces yourself is years of engineering, and none of it differentiates you from another provider."
  - q: "How is it different from Ænix Private Cloud Platform?"
    a: "Who consumes the capacity. Public Cloud Platform is for operators selling cloud to customers who are not them, so it carries billing, payments, resale and customer-facing portals. Private Cloud Platform is for organizations running cloud for their own business units, so it carries DORA- and NIS2-aligned architecture, encryption and audit logging designed for its regulator instead. Same Cozystack foundation, same APIs — you can run both, and organizations that sell cloud and also run regulated internal workloads frequently do."
  - q: "Can it coexist with our existing VMware or OpenStack estate?"
    a: "Yes, and that is the normal path. The platform is multi-hypervisor: it orchestrates native KubeVirt VMs and runs alongside existing VMware, OpenStack, OpenNebula and OpenShift footprints during migration, so you consolidate one cohort at a time instead of running a big-bang migration. VMs move from VMware or OpenStack with built-in migration tooling, and Ænix has done cohort-based VMware exits in production."
  - q: "Do we need our own 24/7 operations team?"
    a: "Not necessarily. Both customer-operated and Ænix-managed operating models are supported; in the hybrid one you own the data plane while Ænix operates the control plane under SLA. Our calculators model Cozystack operations in engineer-days per node: the hosting-provider calculator's default model comes to about 1.3 full-time engineers at 10 nodes and about 2.6 at 40 nodes, and the TCO model puts per-node operations effort for a self-managed OpenStack at about twice that of Cozystack. Round-the-clock on-call needs more people than that arithmetic, or the 24×7 coverage of the Plus tier."
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

**A modern alternative to OpenStack for everyone who sells cloud — from a regional hoster with forty nodes to a national operator with several data centres. A complete public-cloud product for hosting providers: hosting panel, billing, customer portal, payments, support. Install, plug in users, start operating.**

The live demo runs in your browser on demo data: the customer portal (marketplace, console, account, support) and, behind the Admin switch, the operator back-office with clients, verification, invoices and resource pricing. No signup, no cluster.

<div class="cta-row">
  <a class="cta-primary" href="/demo/" target="_blank" rel="noopener">Open the live demo →</a>
  <a class="cta-secondary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/products/">Compare platforms →</a>
</div>

## One platform, two ends of the same scale

A regional hoster with forty nodes and a national operator with several data centres are in the same business: you sell capacity to someone who is not you, so you need billing, a customer-facing portal, tenant isolation you can defend under audit, and payments that reconcile. That is one product, not two. The difference is how much of it is switched on.

| | Provider scale | National / operator scale |
|---|---|---|
| Who | Hosting providers, MSPs, regional clouds, data centres | Telcos, national operators, banks running a commercial cloud, large public clouds |
| Regions | One or a few sites | Multi-region control plane; workload placement and policy across regions |
| Billing | WHMCS-integrated, Stripe and regional processors | Full billing back-end plus your own front-end, custom payment integrations |
| Existing estate | Migrate off it | Run alongside it — a single portal and API over existing estates while you migrate |
| Onboarding | Productized installer, live in weeks once hardware is ready | 3-6 month pilot, then 9-18 months to full multi-region |
| Bought as | Published price list, from $1,250 / month per 10 nodes | Multi-year programme, quoted per RFP |

The technology underneath is identical, which is the point: a provider that grows into the right-hand column does not replatform. It turns on multi-region and keeps its portal, its billing and its tenants.

## What's included

### Full billing — back-end and front-end

Usage metering, invoicing, payment processing. Stripe, regional payment providers and B2B invoicing. Not API hooks you finish yourself — an actual production billing surface, with multi-currency and multi-jurisdiction support at operator scale, and pre-paid balance, post-paid invoicing, channel-partner billing and reseller margin handling.

### WHMCS integration

A production-ready module with billing templates for the panel you already run. Two integration modes: WHMCS as the customer-facing front, or Cozystack Dashboard as the front with WHMCS as the billing back-end. Full usage data tracked and stored behind a documented API. [More on the WHMCS integration →](/products/whmcs-integration/)

### Hosting panel and customer portal

An admin back-office for the operator, plus a customer-facing console (Cozystack Dashboard with your branding; white-labeling is an open-source Cozystack feature, and support for configuring it is included from the Standard tier) with self-service registration, profiles, team management and support ticketing.

### Service-creation wizards

Guided flows for VMs, Kubernetes clusters, managed databases (PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS), S3-compatible object storage and GPU workloads. No YAML required from end customers.

### Tenant lock and suspension

Tenant lifecycle controls built in — automatic suspension of overdue accounts, resource blocking, lock for security review. No engineering ticket to suspend a non-paying tenant.

### Multi-hypervisor control plane

Orchestrates native KubeVirt VMs and runs alongside existing VMware, OpenStack, OpenNebula and OpenShift infrastructure during migration. Storage-class compatibility with shared SAN, S3-compatible and on-premise block storage; network integration with existing fabrics over BGP, OVN and Cilium.

### Multi-region

Native multi-region orchestration: workload placement, identity, network and storage policy enforced across regions. A tenant can live in one region or span several.

### Service catalogue beyond VMs

Managed PostgreSQL (CloudNativePG), MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS, MongoDB, OpenSearch and Qdrant; S3 storage (SeaweedFS); HTTP cache; VPN service; GPU workloads.

### Migration tooling and expertise

Built-in VM migration tooling and runbooks for moving off VMware, OpenStack, Virtuozzo and OpenNebula. Migration is guided by Ænix on the Plus tier and managed by Ænix on Enterprise; on the other tiers it is quoted as a service. [Migration guides →](/migration/)

### What the subscription includes

A subscription is a support tier plus the proprietary Ænix commercial modules (billing system and WHMCS integration), priced per 10 physical nodes per month: Basic $1,250, Standard $3,000, Plus $5,500 on annual billing, Enterprise custom. A team running Cozystack itself buys the same subscription as [enterprise support for self-run Cozystack](/products/cozystack-enterprise-support/) and can simply leave the commercial modules unused. Platform installation is included from Standard, 24×7 support from Plus. If the subscription ends, the open-source Cozystack platform keeps running on your hardware; the commercial modules and Ænix support stop. [Full tier comparison →](/pricing/#support)

## Why providers choose this over OpenStack

| Dimension | OpenStack | Ænix Public Cloud Platform |
|---|---|---|
| Time to production | 6+ months typical | Weeks |
| Per-node operations effort | About twice Cozystack's when self-managed ([TCO model](/tco-calculator/methodology/)) | The baseline in the same model |
| Service catalogue | DIY beyond core compute / storage / network | Built-in: Kubernetes, databases, S3, GPU, cache, VPN |
| Customer-facing portal | DIY | Cozystack Dashboard with your branding |
| Billing | DIY integration | WHMCS-native, Stripe and regional providers |
| Multi-tenancy | Project model — limited | Tenants with quotas, RBAC and observability per tenant |
| Migration from VMware | Heavy lift | Built-in migration tooling plus Ænix delivery |
| Vendor support | Community plus add-ons | Ænix support tiers from $1,250 per 10 nodes per month |
| Upgrade cadence | Manual | GitOps-managed platform releases |

### And versus the VPS control panels

Most small and mid-size providers are not running OpenStack at all. They run Virtualizor, SolusVM, Proxmox with a billing bolt-on, or a panel written in-house. Those tools do one job well: sell and provision VPS.

| Dimension | Virtualizor / SolusVM class | Ænix Public Cloud Platform |
|---|---|---|
| Product catalogue | VPS, and variations on VPS | VMs plus managed Kubernetes, PostgreSQL, MariaDB, ClickHouse, Kafka, RabbitMQ, Valkey, S3, GPU |
| Where the margin is | Reselling capacity, competing on price per vCPU | Managed services on the same hardware, priced per service |
| Tenancy model | An account owning VMs | Tenants with quotas, RBAC, network isolation, per-tenant observability and billing |
| Kubernetes for customers | Not offered, or a separate product to operate | Native, with a managed control plane per tenant |
| Upgrades | Panel upgrade and hypervisor upgrade, both manual | One GitOps-managed platform version |
| Lock-in | Proprietary panel, per-VM licence | Apache 2.0 core; you can drop the commercial layer and stay on plain Cozystack |

The honest read: if VPS resale is your whole business and the margin satisfies you, a panel is cheaper and simpler — keep it. This platform pays for itself when you want to sell managed services, databases, Kubernetes and GPU without building each one yourself.

## Combine it with the other platforms

The three Ænix platforms are the same engine with different surfaces switched on, so they compose rather than compete. Nothing here is a separate installation.

- **[AI Platform](/products/ai-platform/)** — multi-tenant GPU scheduling, fractional GPU sharing, model serving, vector databases. Providers sell this as GPU-as-a-Service on the hardware they already have.
- **[Private Cloud Platform](/products/private-cloud-platform/)** — DORA- and NIS2-aligned architecture, encryption and audit logging designed for your regulator. Relevant when you are a regulated entity yourself, or when you run internal workloads next to the ones you sell.

A telco selling a sovereign cloud product while running its own regulated internal estate takes both, on one platform, under one operations team.

## Who buys it

| Buyer | Typical engagement |
|---|---|
| Hosting provider, MSP, regional cloud | Productized installer, live in weeks once hardware is ready, from the price list |
| Data centre adding cloud services | Migration from VMware or Virtuozzo, then service catalogue expansion |
| Large public-cloud operator | New cloud product launch or multi-region scale-up |
| Large telco or national operator | Customer-facing sovereign cloud product, often regional plus edge |

## Production customers

Providers running Ænix Public Cloud Platform include **GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy**, delivering multi-tenant cloud products across the EU, DACH, Central Asia and other regions.

One commercial public cloud built on this platform is written up in detail: [a Swiss provider running three data centres with synchronous cross-DC replication and GPU in production](/case-studies/sovereign-public-cloud/).

## Engagement structure

- **Discovery call** (30 minutes, free) — confirm fit
- **Platform Readiness Assessment** (14 or 28 days, fixed price) — current-state and target architecture, migration roadmap, risk register
- **Pilot** (3-6 months, operator scale) — one region, one tenant cohort, one product line
- **Build** — live in weeks at provider scale once the hardware is ready, via the productized installer; 9-18 months to full multi-region production for operator-scale programmes
- **Managed operations** (optional) — Ænix runs the control plane under SLA

[Platform Readiness Assessment →](/services/platform-readiness-assessment/)

## How to start

Tell us your scale, your current stack and what you sell today, and we will set up a focused call with an Ænix engineer to confirm fit.

{{< pipedrive-form type="demo" >}}

Prefer a shorter first step? [Book a discovery call](/contact/) instead, or model your margins in the [hosting-provider unit economics calculator](/isp-calculator/). The recorded webinar [Add Kubernetes, databases and GPU to your price list](/webinars/launch-public-cloud/) walks through the catalogue, billing and migration path.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/demo/" target="_blank" rel="noopener">Open the live demo →</a>
</div>
