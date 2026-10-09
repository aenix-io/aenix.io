---
title: "Hosting provider platform modernization — from VPS to cloud product"
seo_title: "Hosting provider modernization: VPS to cloud product"
description: "How a hosting provider moves from VPS to a cloud product: the platform, the service catalogue, billing and operations, and the order to change them in."
date: "2026-05-12"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/hosting-provider-platform-modernization.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Cozystack", "Sovereignty", "AI and ML", "GPU", "Multi-tenancy"]
language: "en"
companion_landing: "/industries/hosting-providers/"
companion_label: "See Ænix for hosting providers →"
faq:
  - q: "What actually changes when a hosting provider moves from VPS to a cloud product?"
    a: "Four things at once: the unit of the business becomes a tenant instead of an account owning VMs, provisioning moves from tickets to self-service wizards, billing moves from a fixed price per VM to metered usage per service, and operations move from patching a panel and a hypervisor to running one GitOps-managed platform version."
  - q: "Do we have to migrate all existing VPS customers before launching?"
    a: "No. The platform runs alongside the existing estate, and VMs move in cohorts with the built-in migration tooling for VMware, OpenStack, Virtuozzo and OpenNebula. New products can be sold on the new platform while old VPS customers stay where they are until their cohort is due."
  - q: "Can we keep WHMCS?"
    a: "Yes. The proprietary Ænix WHMCS integration, included in every subscription tier, works in two modes: WHMCS as the customer-facing storefront, or the Cozystack Dashboard as the storefront with WHMCS as the billing back-end. Providers without WHMCS can use the platform's own billing front-end or feed the UsageReport API into their existing billing system."
  - q: "How large does the platform operations team need to be?"
    a: "The hosting-provider calculator's default model comes to about 1.3 full-time engineers at 10 nodes and about 2.6 at 40. Round-the-clock on-call needs more people, or the 24×7 coverage of the Plus tier. Customer support is a separate headcount."
  - q: "When is this the wrong move?"
    a: "When VPS resale is the whole business and its margin satisfies you, a VPS panel with a billing bolt-on is cheaper and simpler. The platform pays off when you want to sell managed databases, Kubernetes, object storage and GPU on the same hardware without building each one yourself."
quiz:
  title: "Test yourself: hosting-provider modernization"
  questions:
    - q: "According to the article, what structural advantage do hosting providers have that hyperscalers can't easily replicate?"
      options:
        - { text: "Customer relationships, regional presence, sovereignty fit", correct: true }
        - { text: "Better hardware procurement leverage with OEMs", correct: false }
        - { text: "Lower network latency to leading LLM endpoints", correct: false }
      explanation: "The opening section names direct customer relationships, regional presence, pricing flexibility and a credible sovereignty position. What most providers lack is the cloud product to sell on top of them."
    - q: "How long does it take to get the platform live for a single hosting provider, once hardware is ready?"
      options:
        - { text: "Weeks, using the productized installer", correct: true }
        - { text: "A 3–6 month pilot before anything is live", correct: false }
        - { text: "At least two years of in-house platform engineering", correct: false }
      explanation: "At provider scale the platform goes live in weeks once hardware is ready, via the productized installer. The 3–6 month pilot followed by 9–18 months to full multi-region applies to national or operator programmes, not to a single provider."
    - q: "How does the ISP calculator's default model size platform operations?"
      options:
        - { text: "No engineers — the platform runs itself", correct: false }
        - { text: "About 1.3 full-time engineers at 10 nodes, about 2.6 at 40", correct: true }
        - { text: "More than 10 engineers before the first customer", correct: false }
      explanation: "The operations section cites the hosting-provider calculator: about 1.3 full-time engineers at 10 nodes and about 2.6 at 40. Round-the-clock on-call needs more people, or the 24×7 coverage of the Plus tier; customer support is a separate headcount."
    - q: "Which two modes does the Ænix WHMCS integration support?"
      options:
        - { text: "WHMCS as the storefront, or Cozystack Dashboard as the storefront with WHMCS as the billing back-end", correct: true }
        - { text: "WHMCS for VMs only, and a separate billing system for managed services", correct: false }
        - { text: "WHMCS for invoicing only, with provisioning done by tickets", correct: false }
        - { text: "WHMCS as a read-only reporting mirror of the platform's billing", correct: false }
      explanation: "The billing section describes both modes: customers order Cozystack services as WHMCS products, or they work in the branded Cozystack Dashboard while WHMCS handles invoicing."
    - q: "How does the article describe GPU offerings for virtual machines?"
      options:
        - { text: "Whole GPUs through PCI passthrough, or NVIDIA vGPU with the provider's own NVIDIA vGPU licence", correct: true }
        - { text: "MIG slices assigned directly to each VM", correct: false }
        - { text: "HAMi time-slicing inside the VM hypervisor", correct: false }
      explanation: "VMs get whole GPUs via passthrough or NVIDIA vGPU with your NVIDIA licence. MIG partitions and HAMi time-sliced sharing apply to tenant Kubernetes clusters, not to VMs."
hreflang_de: /de/blog/2026/05/hosting-anbieter-plattform-modernisierung/
---

## The hosting provider opportunity

Most hosting providers already have what a cloud business is hardest to build: direct customer relationships, a regional presence, pricing flexibility and a sovereignty story that a customer can check by driving to the data centre. Hyperscalers cannot copy that easily. What the provider usually lacks is the product to sell on top of it.

Selling VPS means competing on price per vCPU, and that race has one direction. Selling a managed PostgreSQL, a Kubernetes cluster or an S3 bucket means charging for a service, and that is where the margin of a hosting business moves. Getting there is less a question of buying new software than of changing four things in the business at the same time: the platform, the catalogue, billing and operations.

This article walks through those four changes and the order in which to make them. Two neighbouring articles cover the rest of the decision: [when Public Cloud Platform pays back for hosting providers](/blog/2026/05/isp-edition-economics-hosting-providers/) does the unit economics, and the [playbook for launching a customer-facing cloud product](/blog/2026/05/launch-customer-facing-cloud-product/) covers go-to-market.

## What changes when VPS becomes a cloud product

A typical hosting stack today is a hypervisor (a commercial one, vanilla KVM, Proxmox or Virtuozzo), a VPS panel such as Virtualizor or SolusVM or one written in-house, and billing in WHMCS or a home-grown system. The panel does one job well: it sells and provisions VPS. Everything else — a database for a customer, a Kubernetes cluster, a bucket — becomes a ticket and a manual build.

A cloud product changes the unit of the business. The customer is no longer an account that owns some VMs; it is a tenant with quotas, its own access control, its own network isolation and its own monitoring, in which the customer can create whatever the catalogue offers. Provisioning moves from a ticket to a wizard. Pricing moves from a fixed price per VM to metered usage per service. And operations move from upgrading a panel and a hypervisor separately to running one platform version.

None of those four changes works without the others. A catalogue without metering cannot be billed; metering without tenants cannot be attributed; tenants without one upgradeable platform turn into a support burden. That is why modernization is a platform decision rather than a feature to bolt onto the existing panel.

## The platform: one API for VMs and everything else

The [Ænix Public Cloud Platform](/products/public-cloud-platform/) is built on [Cozystack](https://cozystack.io), the open-source CNCF Sandbox project Ænix created and co-maintains. Its design choice that matters most to a hosting provider is that virtual machines and everything else live on the same Kubernetes API. VMs run through KubeVirt, so the existing VPS business does not need a second platform next to the new services: a Windows VM, a managed database and a tenant Kubernetes cluster are all objects in the same tenant, created and billed the same way.

Tenants nest. A provider can give a customer a tenant, and the customer can split it into production, development and test sub-tenants, or a reseller can host its own customers underneath. That hierarchy is what lets the same platform serve a direct customer, an MSP partner and a [white-label reseller](/services/white-label-cloud/) without separate installations.

Storage is replicated block storage on LINSTOR and DRBD, with optional volume encryption that the customer opts into with a passphrase they hold. Object storage is S3-compatible on SeaweedFS. Multi-region is a switch rather than a replatforming: a provider that grows from one site to several keeps its portal, its billing and its tenants.

The existing estate does not have to disappear on day one. The platform runs alongside VMware, OpenStack, OpenNebula and OpenShift during migration, and the built-in tooling moves VMs off VMware, OpenStack, Virtuozzo and OpenNebula in cohorts. If you run Virtuozzo, read the [Virtuozzo migration guide](/migration/virtuozzo/) first: its three products have three very different exits.

## The catalogue: start narrow, grow on demand

Cozystack ships a broad catalogue: managed PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS, MongoDB, OpenSearch and Qdrant, tenant Kubernetes clusters with a managed control plane per tenant, S3 buckets, VMs, an HTTP cache and a VPN service. Customers order each one through a service-creation wizard; nobody writes YAML.

The temptation is to switch everything on at launch. Resist it. Every service you list is a service your support team has to answer questions about at 3 am, and a customer who orders Kafka and finds that nobody on your side understands Kafka does not come back. A sensible first catalogue is VMs, managed PostgreSQL and S3, because those are what existing VPS customers already build by hand. Kubernetes and the next databases follow once the team has run the first ones under real load.

GPU is the expansion most providers ask about, and the details matter for what you can promise. In tenant Kubernetes clusters, the NVIDIA GPU Operator exposes MIG partitions on MIG-capable cards and HAMi provides time-sliced sharing. Virtual machines get whole GPUs through PCI passthrough, or NVIDIA vGPU with your own NVIDIA vGPU licence. GPU usage is measured per tenant and charged in your billing system. For the commercial side of selling GPU capacity, see [GPU as a service](/solutions/gpu-as-a-service/).

## Billing: accurate from the first invoice

Billing is where modernization projects most often lose trust with their first customers. A VPS has a fixed monthly price; a managed database with replicas, persistent volumes on two storage classes and a bucket that grows during the month does not. If the first invoices are wrong, the customer remembers the invoice, not the product.

The platform's usage source is Ænix Billing, which exposes a `UsageReport` API with per-workload line items: CPU and memory hours, persistent storage per storage class, IP addresses, S3 storage and lifetime. Pricing is a policy applied to that report, so replicas can cost less than primaries and NVMe more than HDD without rewriting anything. The [Ænix Billing announcement](/blog/2026/05/aenix-billing-per-minute-managed-services-cozystack/) has the details.

Invoices then come out of one of three places. WHMCS can be the storefront, with customers ordering Cozystack services as WHMCS products. The branded Cozystack Dashboard can be the storefront, with WHMCS as the billing back-end. Or the platform's own billing front-end handles pre-paid balance, post-paid invoicing and payment providers. Ænix Billing and the [WHMCS integration](/products/whmcs-integration/) are proprietary Ænix modules included in every subscription tier; the rest of the platform is open-source Cozystack. The [managed services billing](/solutions/managed-services-billing/) page lays out which part is which.

The last piece is tenant lock and suspension. Overdue accounts are suspended automatically and resources can be blocked or locked for a security review, so stopping service to a non-paying customer is a billing event, not an engineering ticket.

## Operations: a different team shape

Operations change more than most providers expect. A VPS team patches hypervisors and answers tickets. A platform team runs one GitOps-managed platform version, rehearses upgrades on staging before production, and watches per-tenant metrics and logs instead of individual hosts. Audit logs have configurable retention and can be shipped to the customer's own immutable store when a regulated tenant asks for it.

The [hosting-provider calculator](/isp-calculator/) models platform operations in engineer-days per node. Its default comes to about 1.3 full-time engineers at 10 nodes and about 2.6 at 40. Round-the-clock on-call needs more people than that arithmetic, or the 24×7 coverage of the Plus support tier. Customer support for cloud customers is a separate headcount and grows with the customer count, not the node count.

The written-up [sovereign public cloud case study](/case-studies/sovereign-public-cloud/) shows what that maturity looks like in practice: a provider running a commercial public cloud across three data centres, which built its process around notifying customers before changes, rehearsing upgrades on staging and keeping ready runbooks for storage recovery and platform upgrades.

## Sequencing the move

The order matters more than the speed.

1. **Assessment.** The [Platform Readiness Assessment](/services/platform-readiness-assessment/) is fixed-price, 14 days focused or 28 days full: current platform, customer profile, catalogue gap and migration plan.
2. **Platform live.** With the productized installer the platform goes live in weeks once the hardware is ready, deployed in parallel with the existing estate and validated internally.
3. **Beta cohort.** A handful of friendly customers on the new platform, with billing running for real. Rough edges get fixed here, not in public.
4. **Limited availability.** A larger group, with billing patterns and support load validated before the open launch.
5. **General availability**, then **specialty expansion** — GPU, AI services, regional sovereignty positioning.

How fast steps three to five follow depends on your sales pace and your team, not on the platform build. Multi-region national or operator programmes are a different scale: plan a 3–6 month pilot, then 9–18 months to full multi-region operation.

## Where modernization goes wrong

Four mistakes recur. The first is treating the customer portal as "good enough": providers who compete on reliability and price often under-invest in the ordering flow that now carries the sale. The second is shipping billing that is approximately right, which damages trust faster than any outage. The third is sizing the team for today's customers; a launch that signs far more customers in its first quarter than planned overwhelms a team sized for the old count. The fourth is a generic catalogue that offers what every other provider offers instead of what your region and your customers actually need.

## When this doesn't fit

If VPS resale is your whole business and its margin satisfies you, a VPS panel with a billing bolt-on is cheaper and simpler. Keep it. The same is true if nobody in the company can own a Kubernetes-based platform and you do not want to buy that ownership as a support subscription: the platform needs operational ownership, either yours or contracted. And if you do not have direct customer relationships to monetise — if you mostly resell someone else's cloud — the economics usually point elsewhere. The [economics article](/blog/2026/05/isp-edition-economics-hosting-providers/) works through the thresholds in detail.

## Where to go next

Start with the [hosting providers page](/industries/hosting-providers/) and the [live demo](/demo/), which shows the customer portal and the operator back-office on demo data. Model your numbers in the [hosting-provider calculator](/isp-calculator/), check the subscription tiers on [pricing](/pricing/), and if you want help with the build itself, see the [public cloud builder](/services/public-cloud-builder/) service.

*Ænix created Cozystack (a CNCF Sandbox project; its Incubation application is in due diligence) and co-maintains it with maintainers from other companies.*
