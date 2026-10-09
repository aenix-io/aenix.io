---
title: "Sell and bill managed cloud services as a hosting provider"
seo_title: "Billing for managed cloud services: hosting providers"
description: "Sell managed databases, Kubernetes, S3, VMs and GPU from your own hardware and bill them per minute: Ænix Billing, WHMCS integration, tenant suspension."
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "billing for managed cloud services hosting provider"
secondary_keywords: ["cloud billing for hosting providers", "usage-based billing managed databases", "sell managed kubernetes hosting provider", "dbaas billing whmcs", "per-minute billing kubernetes"]
hreflang_de: /de/loesungen/managed-services-abrechnung/
related_pages:
  - /products/public-cloud-platform/
  - /products/whmcs-integration/
  - /industries/hosting-providers/
  - /isp-calculator/
  - /webinars/launch-public-cloud/
  - /pricing/
service:
  type: "Managed cloud services billing platform"
  areaServed: ["EU", "DACH", "MENA", "Central Asia"]
  audience: "Hosting Providers"
direct_answer: |
  **A hosting provider that wants to sell managed databases, Kubernetes, S3 storage, virtual machines and GPU needs two things a VPS panel does not give it: a catalogue of services customers can order themselves, and billing that measures what each tenant actually used. Ænix Public Cloud Platform supplies both on your own or leased hardware. The service catalogue is open-source Cozystack (Apache 2.0, a CNCF project Ænix created and co-maintains). On top sit two proprietary Ænix modules: Ænix Billing, which reports per-tenant, per-workload usage at per-minute granularity through a Kubernetes-native API, and the WHMCS integration, which turns that usage into WHMCS products and invoices. Tenant lock and suspension for overdue accounts and a customer portal under your brand complete the commercial surface. Both modules are included in every subscription tier, from $1,250 per 10 nodes per month billed annually.**
quick_facts:
  - label: "What you sell"
    value: "Managed PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS, MongoDB, OpenSearch and Qdrant; managed Kubernetes; S3-compatible object storage; Linux and Windows VMs; GPU workloads."
  - label: "How usage is measured"
    value: "Ænix Billing: a UsageReport per tenant and workload — CPU or vCPU hours, memory, ephemeral and persistent storage by storage class, IP addresses, S3 storage, lifetime."
  - label: "How customers are invoiced"
    value: "Through WHMCS (as storefront, or as the billing back-end behind the Cozystack Dashboard) or through the platform's own billing front-end with Stripe and regional payment providers."
  - label: "Open source vs proprietary"
    value: "Service catalogue, multi-tenancy, white-labeling and GPU sharing are open-source Cozystack. Ænix Billing and the WHMCS integration are proprietary Ænix modules."
  - label: "Price"
    value: "Ænix Public Cloud Platform subscription: Basic $1,250, Standard $3,000, Plus $5,500 per 10 physical nodes per month on annual billing; Enterprise custom. Both modules in every tier."
  - label: "Time to sell"
    value: "Live in weeks once the hardware is ready, through the productized installer."
faq:
  - q: "Which managed services can a hosting provider sell on the platform?"
    a: "Managed databases and data services (PostgreSQL via CloudNativePG, MariaDB, Valkey, ClickHouse, MongoDB, OpenSearch, Qdrant), message brokers (Kafka, RabbitMQ, NATS), managed Kubernetes clusters with a control plane per tenant, S3-compatible object storage on SeaweedFS, KubeVirt virtual machines (Linux and Windows), HTTP cache, VPN and GPU workloads. Customers order them through service-creation wizards, without writing YAML."
  - q: "How does Ænix Billing measure usage?"
    a: "It is a Kubernetes extension API (billing.aenix.io/v1alpha1). You request a UsageReport for a tenant and time window, optionally including sub-tenants, and get one entry per consumer — a database replica, a Kubernetes worker, a VM, a bucket — with CPU or vCPU hours, memory, ephemeral and persistent storage per storage class, IP addresses, S3 storage and lifetime. The workload metadata (kind, primary or replica, owning tenant) travels with each entry, so the pricing rules stay yours."
  - q: "Do I have to use WHMCS?"
    a: "No. The WHMCS integration works in two modes: WHMCS as the customer-facing storefront, or the Cozystack Dashboard as the front with WHMCS as the billing back-end. Without WHMCS, the platform's own billing front-end handles invoicing and payments with Stripe and regional payment providers, or you feed the usage reports into a billing system you already run."
  - q: "What happens when a customer does not pay?"
    a: "Tenant lock and suspension are built into the platform: automatic suspension of overdue accounts, resource blocking, and a lock for security review. Suspending a non-paying tenant does not need an engineering ticket."
  - q: "Can I sell under my own brand?"
    a: "Yes. The customer portal is the Cozystack Dashboard with your branding. White-labeling is an open-source Cozystack feature; Ænix support for configuring it is included from the Standard tier."
  - q: "How is GPU usage billed?"
    a: "GPU usage is measured per tenant, and charging happens in your billing system — WHMCS or your own. In tenant Kubernetes clusters, MIG partitions on MIG-capable cards and HAMi time-sliced sharing let you sell fractions of a GPU; virtual machines get whole GPUs through PCI passthrough, or NVIDIA vGPU with your NVIDIA vGPU licence."
  - q: "What is open source and what is proprietary?"
    a: "The platform that runs and isolates the services — Cozystack, Apache 2.0, CNCF — is open source, including the service catalogue, multi-tenancy, white-labeling and GPU sharing. Ænix Billing and the WHMCS integration are proprietary Ænix modules, included in every subscription tier. If the subscription ends, Cozystack keeps running on your hardware; the modules and Ænix support stop."
---

**Selling VPS means competing on price per vCPU. Selling a managed PostgreSQL, a Kubernetes cluster or an S3 bucket means charging for a service, and that is where the margin of a hosting business moves. The hard part is rarely the database. The hard part is the commercial surface around it: a catalogue customers can order from, usage you can bill without a spreadsheet, and a way to stop serving a customer who stopped paying.**

This page describes that commercial surface on [Ænix Public Cloud Platform](/products/public-cloud-platform/), and which parts are open source and which are not.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## The catalogue you can sell

Every service below runs on the same platform, in the customer's tenant, isolated from other customers by network policy, quotas and RBAC. Customers order through service-creation wizards; nobody writes YAML.

| Service family | What the customer gets |
|---|---|
| **Managed databases** | PostgreSQL (CloudNativePG), MariaDB, Valkey, ClickHouse, MongoDB, OpenSearch, Qdrant |
| **Messaging** | Kafka, RabbitMQ, NATS |
| **Managed Kubernetes** | Tenant Kubernetes clusters with a managed control plane per tenant |
| **Object storage** | S3-compatible buckets on SeaweedFS |
| **Virtual machines** | KubeVirt VMs, Linux and Windows, with custom image upload |
| **GPU** | In tenant Kubernetes: MIG partitions on MIG-capable cards and HAMi time-sliced sharing. For VMs: whole GPUs through PCI passthrough, or NVIDIA vGPU with your NVIDIA vGPU licence |
| **Network services** | HTTP cache, VPN service |

The catalogue itself is open-source [Cozystack](/products/cozystack/). What turns it into a business is the next three sections.

</div>
</div>

---

## Usage you can bill: Ænix Billing

Ænix Billing is a Kubernetes extension API server that exposes `billing.aenix.io/v1alpha1`. Your billing team asks it for a `UsageReport`, the same way it would query any Kubernetes object, with RBAC scoped to the billing API and nothing more:

```yaml
apiVersion: billing.aenix.io/v1alpha1
kind: UsageReport
query:
  tenant: tenant-acme
  includeSubTenants: true
  startTimestamp: 2026-04-01T00:00:00Z
  endTimestamp:   2026-05-01T00:00:00Z
```

The report returns one entry per consumer, such as a PostgreSQL replica, a Kafka broker, a Kubernetes worker, a VM or a bucket. Each entry carries:

- **CPU**: `vCPUHours` or `CPUHours`, depending on whether you bill virtual or physical CPU
- **Memory**: `MemoryGiBHours`
- **Storage**: `EphemeralStorageGiBHours`, and `PersistentVolumeGBHours` per storage class, so NVMe, HDD and replicated volumes can carry different prices
- **Network**: `IPAddressHours`
- **Object storage**: `S3StorageGBHours` and `S3PhysicalStorageGBHours`
- **Lifetime**: `LifetimeHours`, independent of reservations

The workload's metadata travels with the line item: the kind of service, primary or replica, and the owning tenant. Pricing is a policy you apply to the report, not code you rewrite. Replicas can cost half of a primary, NVMe three times HDD, and a strategic customer can get a discount. The customer can run the same query and reconcile the invoice to the line.

Under the hood are a small controller that turns workload state into metrics, the platform's VictoriaMetrics store, and the API server that integrates reservations over the requested window. Nothing new to operate. The [Ænix Billing announcement](/blog/2026/05/aenix-billing-per-minute-managed-services-cozystack/) has the full details.

---

## Invoices and payments: WHMCS or the platform's own billing

Usage becomes an invoice in one of three ways:

1. **WHMCS as the storefront.** Your customers order Cozystack services as WHMCS products, and provisioning, metering and invoicing run through the WHMCS billing you already operate. See the [WHMCS integration](/products/whmcs-integration/).
2. **Cozystack Dashboard as the storefront, WHMCS as the billing back-end.** Customers work in your branded portal, and WHMCS handles invoicing.
3. **The platform's own billing front-end.** Pre-paid balance, post-paid invoicing, Stripe and regional payment providers, B2B invoicing. At operator scale it adds multi-currency, multi-jurisdiction, channel-partner and reseller margin handling.

If you already run a billing system you trust, the `UsageReport` API is the integration point. Feed it the report and keep your invoicing where it is.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Tenant lock, suspension and your brand

**Lock and suspension.** Tenant lifecycle controls are part of the platform: automatic suspension of overdue accounts, resource blocking, and a lock for security review. Suspending a non-paying customer is a billing event, not an engineering ticket.

**A portal under your brand.** Customers see the Cozystack Dashboard with your branding. It covers self-service registration, profiles, team management and support ticketing. Behind it, the operator back-office shows clients, verification, invoices and resource pricing. You can try both in the [live demo](/demo/), which runs in your browser on demo data.

</div>
</div>

---

## What is open source and what you pay for

Ænix sells a subscription — support plus proprietary commercial modules — not a licence.

| Component | Licence | Notes |
|---|---|---|
| Service catalogue, multi-tenancy, managed Kubernetes, VMs, S3 | Open source (Cozystack, Apache 2.0) | Free to run; the support tier decides what Ænix supports |
| White-labeling of the customer portal | Open source (Cozystack) | Ænix configuration support from Standard |
| GPU sharing (HAMi) | Open source (Cozystack) | Ænix configuration support from Standard |
| **Ænix Billing** | Proprietary Ænix module | Included in every tier |
| **WHMCS integration** | Proprietary Ænix module | Included in every tier |

**Pricing basis.** The Ænix Public Cloud Platform subscription is priced per 10 physical nodes per month: Basic $1,250, Standard $3,000, Plus $5,500 on annual billing, and a custom Enterprise tier. Annual billing equals ten months of the monthly price. Platform installation is included from Standard, and 24×7 support from Plus. Contracts with AENIX s.r.o. are in EUR; list prices are shown in USD. See the [full tier comparison](/pricing/#support).

**If you stop paying us.** Cozystack keeps running on your hardware, and your customers' databases and clusters keep running. Ænix Billing, the WHMCS integration and Ænix support stop.

---

## Where this runs in production

Hosting providers and regional clouds run Ænix Public Cloud Platform in the EU, DACH, Central Asia and other regions. One is written up in detail: [a Swiss provider running a commercial public cloud across three data centres](/case-studies/sovereign-public-cloud/), with VMs, managed Kubernetes, databases and GPUs on owned infrastructure. For billing over infrastructure you keep, see [one portal over OpenNebula, VMware and Kubernetes](/case-studies/unified-cloud-portal-financial-group/), where usage, tariffs and invoicing sit in the same portal as the service catalogue.

---

## When this is not the right fit

If VPS resale is your whole business and its margin satisfies you, a VPS panel with a billing bolt-on is cheaper and simpler. Keep it. This platform pays off when you want to sell managed services, Kubernetes and GPU on the same hardware without building each service, and its billing, yourself.

Model the numbers first in the [hosting-provider unit economics calculator](/isp-calculator/). The recorded webinar [Add Kubernetes, databases and GPU to your price list](/webinars/launch-public-cloud/) walks through the catalogue, billing and migration path. Moving off another stack first? See the [Virtuozzo migration](/migration/virtuozzo/) guide and the [comparisons](/compare/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/demo/" target="_blank" rel="noopener">Open the live demo →</a>
</div>

---

*Ænix created [Cozystack](https://cozystack.io), a CNCF project (Sandbox today; Incubating application in due diligence) under Apache 2.0, and co-maintains it with maintainers from other companies. Ænix sells three platforms built on it: Public Cloud, Private Cloud and AI.*
