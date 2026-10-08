---
title: "VMware Cloud Director alternative for service providers"
description: "Leaving VMware Cloud Director? Keep multi-tenant self-service, catalogues and billing on Ænix Public Cloud Platform, and move tenant VMs off vSphere in cohorts."
date: 2026-10-08
lastmod: 2026-10-08
language: "en"
hreflang_de: "/de/alternativen/vmware-cloud-director-alternative/"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "vmware cloud director alternative"
secondary_keywords: ["vcloud director alternative", "vcd alternative for service providers", "vmware vcpp exit", "vcsp vmware exit", "multi-tenant cloud platform for service providers"]
related_pages:
  - /products/public-cloud-platform/
  - /migration/vmware/
  - /alternatives/vmware-alternative/
  - /products/whmcs-integration/
  - /industries/hosting-providers/
  - /resources/vmware-migration-checklist/
  - /pricing/
direct_answer: |
  **A VMware Cloud Director alternative replaces the layer a service provider sells from: tenant organisations, self-service, catalogues and the link to billing, not only the hypervisor underneath. Ænix Public Cloud Platform does this for hosting providers, MSPs and regional clouds leaving the VMware Cloud Service Provider programme after Broadcom's changes. It runs on Cozystack, a CNCF project Ænix created and co-maintains. Tenants map to Cozystack tenants with quotas and access rights, nested for resellers. Customers use a branded portal to order VMs, Kubernetes, managed databases, S3 and GPU. Billing runs through WHMCS or your own system. Tenant VMs move off vSphere in cohorts with Konveyor Forklift, which ships in the Ænix platform, while the VMware estate keeps running.**
quick_facts:
  - label: "What it is"
    value: "A replacement for the service-provider layer of VMware Cloud Director: multi-tenancy, self-service portal, service catalogue and billing integration, on Ænix Public Cloud Platform."
  - label: "Who it is for"
    value: "Hosting providers, MSPs, regional clouds and telcos that sell cloud from VMware Cloud Director today."
  - label: "Tenancy"
    value: "Cozystack tenants with quotas, access rights, network isolation and per-tenant monitoring; nested tenants for resellers."
  - label: "Billing"
    value: "Ænix WHMCS integration (a proprietary Ænix module) in two modes, the Ænix billing back-end, or your own billing system."
  - label: "Tenant VM migration"
    value: "Konveyor Forklift ships in the Ænix platform: cold or warm migration from vSphere, guest conversion with VirtIO drivers, run in cohorts."
  - label: "Time to launch"
    value: "Productized installer: live in weeks once hardware is ready. Multi-region operator programmes: 3–6 month pilot, then 9–18 months."
  - label: "Commercial model"
    value: "Subscription on published support tiers, priced per 10 physical nodes per month; open-source Cozystack underneath is free."
quick_facts_source: "[Cozystack (CNCF)](https://cozystack.io), [Konveyor Forklift](https://github.com/kubev2v/forklift), [Ænix pricing](/pricing/)"
faq:
  - q: "What replaces VMware Cloud Director organisations and org VDCs?"
    a: "Cozystack tenants. Each tenant is an isolation boundary with its own quotas, access rights, network isolation and monitoring, and tenants can contain tenants, so a reseller or a large customer can run its own sub-tenants such as production, staging and test. The model is Kubernetes-native rather than vSphere-native, so it is redesigned in the assessment rather than copied one to one."
  - q: "Can our customers keep self-service?"
    a: "Yes. Customers use a branded portal, Cozystack Dashboard in your brand, with self-registration, team management and support tickets. From it they create VMs, Kubernetes clusters, managed databases, S3 storage and GPU workloads without a ticket to your team. You can try the customer side in the live demo."
  - q: "How do tenant VMs move off vSphere?"
    a: "With Konveyor Forklift, which ships in the Ænix platform. It runs cold or warm migrations from vSphere, maps networks and storage, and converts guests with virt-v2v, which injects VirtIO drivers and removes VMware Tools. Migrations run in cohorts with parallel-run validation. Windows VMs using Measured Boot, and Windows Server 2012 and 2012 R2, are rebuilt rather than converted."
  - q: "Do we have to switch off VMware on day one?"
    a: "No. The platform runs next to your VMware estate and can integrate with it, so you can sell new services from the new platform while tenants move over cohort by cohort. VMware is decommissioned once the last cohort has moved and its licences lapse."
  - q: "How does billing work without vCloud Director usage metering?"
    a: "The platform measures usage per tenant and hands it to billing. With the Ænix WHMCS integration, WHMCS either acts as your storefront or sits behind the Ænix portal as the billing back-end. Providers with their own billing system take the usage data directly, and Public Cloud Platform also includes a billing back-end with payment processing."
  - q: "What does it cost?"
    a: "Ænix sells a subscription, not a licence. Public Cloud Platform uses the published support tiers, priced per 10 physical nodes per month. Migration help depends on the tier: documentation on Basic and Standard, guided by Ænix on Plus, managed by Ænix on Enterprise. Multi-region programmes are quoted per RFP, and the open-source Cozystack underneath is free to run."
---

**Your customers buy from VMware Cloud Director: organisations, self-service, catalogues and an invoice at the end of the month. Replacing vSphere alone does not replace that. Ænix Public Cloud Platform does: multi-tenancy, a branded self-service portal, a service catalogue that goes beyond VMs, and billing through WHMCS or your own system. Your tenants' VMs move over in cohorts while VMware keeps running.**

> **Not a service provider?** If you run VMware for your own organisation rather than selling it, read **[the VMware alternative for your own estate](/alternatives/vmware-alternative/)** instead. Planning the move itself? See **[the VMware migration path](/migration/vmware/)** and the free **[VMware Migration Checklist](/resources/vmware-migration-checklist/)**.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/demo/" target="_blank" rel="noopener">See the customer portal →</a>
</div>

---

## Why are providers leaving VMware Cloud Director?

Broadcom moved VMware to subscription-only VCF bundles, ended perpetual licences and changed the terms of the VMware Cloud Service Provider programme. A provider's costs are tied to a licence model it does not control, and passing that cost on is hard when customers can buy the same capacity elsewhere.

Replacing vSphere is the easy half. Most VMware alternatives answer the hypervisor question: where the VMs run. A provider also has to replace the layer its customers actually use: who is a tenant, what they can order, and how usage becomes an invoice. That layer is what this page covers. For an enterprise leaving vSphere and VMware Cloud Foundation for its own use, the [VMware alternative page](/alternatives/vmware-alternative/) is the better starting point.

---

## What did vCloud Director give you, and what replaces it?

| What VMware Cloud Director gave providers | On Ænix Public Cloud Platform |
|---|---|
| **Organisations and org VDCs** for each customer | Cozystack tenants with quotas, access rights, network isolation and per-tenant monitoring |
| **Reseller and sub-customer structure** | Nested tenants: a reseller or customer runs its own sub-tenants |
| **Self-service tenant portal** | Cozystack Dashboard in your brand: self-registration, team management, support tickets |
| **Catalogues and vApp templates** | Service catalogue with VMs from custom images and templates, plus managed Kubernetes, databases, S3 and GPU |
| **Usage data for VCPP billing** | Per-tenant usage to WHMCS, the Ænix billing back-end, or your own billing system |
| **Suspending a non-paying customer** | Automatic tenant suspension and resource blocking for overdue accounts |
| **Edge gateways and NSX networking** | Cilium and Kube-OVN networking with per-tenant isolation. Needs redesign, not a one-to-one mapping |
| **vSphere and ESXi underneath** | KubeVirt virtual machines and containers on one Kubernetes API, LINSTOR/DRBD replicated storage |

Two layers need redesign rather than a literal mapping: the **tenant model** (Cozystack tenants are Kubernetes-native; vCD organisations are vSphere-native) and **networking** (Cilium is not NSX). Both are covered in the Platform Readiness Assessment before any tenant moves.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## What can you sell that vCloud Director did not?

A VMware Cloud Director catalogue is mostly VMs. On Ænix Public Cloud Platform the same customers can order:

<div class="capability-grid">

- **Virtual machines**: Linux and Windows, from your images and templates
- **Managed Kubernetes**: a cluster per customer, with its own control plane
- **Managed databases and queues**: PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS, MongoDB, OpenSearch, Qdrant
- **S3-compatible object storage** for backups and applications
- **GPU workloads**: whole GPUs passed through to VMs, NVIDIA vGPU for VMs (requires your NVIDIA vGPU licence), or GPUs shared between containers with HAMi. See [GPU as a service](/solutions/gpu-as-a-service/)

</div>

Selling managed services on the same hardware is where a provider earns more per customer than by competing on price per vCPU.

</div>
</div>

---

## How do billing and WHMCS fit?

- **WHMCS as the storefront.** The Ænix WHMCS integration, a proprietary Ænix module, sells platform services as WHMCS products. Customers order in WHMCS; the platform provisions and reports usage back.
- **Ænix portal as the storefront, WHMCS as billing.** Customers use the branded portal; WHMCS invoices in the background.
- **Your own billing.** Providers with an in-house system take per-tenant usage from the platform. A Swiss provider on Cozystack bills dedicated resources hourly from its own system ([case study](/case-studies/sovereign-public-cloud/)).
- **Ænix billing.** Public Cloud Platform includes a billing back-end and front-end with payment processing, for providers replacing their billing at the same time.

[More on the WHMCS integration →](/products/whmcs-integration/)

---

## How do tenant VMs move off vSphere?

<div class="engagement-steps">

  <div class="engagement-step">
    <div class="engagement-step__number">1</div>
    <h3 class="engagement-step__title">Inventory</h3>
    <p class="engagement-step__body">vSphere and vCD inventory: tenants, VMs, OS mix, networks, storage, integrations.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">2</div>
    <h3 class="engagement-step__title">Platform in parallel</h3>
    <p class="engagement-step__body">Ænix Public Cloud Platform on new or freed-up hardware, next to VMware.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">3</div>
    <h3 class="engagement-step__title">Tenants and catalogue</h3>
    <p class="engagement-step__body">Tenant structure, portal branding, service catalogue and billing connection.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">4</div>
    <h3 class="engagement-step__title">Move VMs in cohorts</h3>
    <p class="engagement-step__body">Konveyor Forklift: cold or warm migration, guest conversion, parallel-run validation with the tenant.</p>
  </div>

  <div class="engagement-step">
    <div class="engagement-step__number">5</div>
    <h3 class="engagement-step__title">Decommission VMware</h3>
    <p class="engagement-step__body">Once the last cohort has moved, reuse the hardware as licences lapse.</p>
  </div>

</div>

Plan these cases as rebuilds: Windows VMs using Measured Boot cannot be converted, and Windows Server 2012 and 2012 R2 do not boot after conversion. The full method is on the **[VMware migration hub](/migration/vmware/)**.

If you need one portal over several infrastructures during the move, that has been done: a financial group runs one self-service catalogue over OpenNebula, VMware and Kubernetes ([case study](/case-studies/unified-cloud-portal-financial-group/)).

---

## Where VMware Cloud Director is still ahead

- **vSphere operations depth.** DRS, Storage DRS and Fault Tolerance have no exact equivalent. KubeVirt live-migrates and schedules VMs well, but it is a different tool.
- **The VMware backup ecosystem.** Tools built on VMware's backup APIs are replaced by Velero and per-database point-in-time recovery, and runbooks need rewriting.
- **Automated cross-site VM failover.** There is none. Stretched multi-site designs exist, as in the [Swiss three-data-centre case](/case-studies/sovereign-public-cloud/), but they are designed per project.
- **ISV certification.** Some software vendors support their products only on ESXi.

If your VMware terms still work for you and customers are not asking for more than VMs, staying may be the right call. We will tell you on the first call.

---

## How long does it take, and what does it cost?

**Timeline.** A 30-minute discovery call is free. The Platform Readiness Assessment is fixed price and takes 14 or 28 days. At provider scale the productized installer brings the platform live in weeks once hardware is ready. Multi-region operator programmes run a 3–6 month pilot, then 9–18 months to full multi-region. How long it takes to move tenant VMs depends on the estate and is planned in the assessment.

**Pricing.** Ænix sells a subscription (support, commercial modules and services), not a licence. Public Cloud Platform uses the published support tiers, priced per 10 physical nodes per month. Migration help depends on the tier: documentation on Basic and Standard, guided by Ænix on Plus, managed by Ænix on Enterprise. Out-of-scope work is billed at $150 per hour, and multi-region programmes are quoted per RFP. Details are on the **[pricing page](/pricing/)**.

---

## Start with a call

Tell us how many tenants and VMs you run on VMware Cloud Director, what you sell, and when your VMware terms come up for renewal. An Ænix engineer will map your setup to the platform and tell you what moves easily and what needs redesign.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/products/public-cloud-platform/">Ænix Public Cloud Platform →</a>
</div>

---

*Ænix created [Cozystack](https://cozystack.io) and maintains it together with maintainers from other companies. Cozystack is a CNCF Sandbox project, Apache 2.0; its CNCF Incubation application is in due diligence. Ænix delivers it as three platforms on one engine (Public Cloud, Private Cloud and AI) that combine rather than exclude each other.*
