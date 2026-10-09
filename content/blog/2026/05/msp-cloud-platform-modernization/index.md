---
title: "MSP cloud platform modernization — branded cloud as managed-service offering"
seo_title: "MSP cloud platform modernization: a branded cloud"
description: "How an MSP moves from managing each customer's infrastructure to running one branded multi-tenant cloud as a managed service: architecture, migration, limits."
date: "2026-05-18"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/msp-cloud-platform-modernization.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Cozystack", "Multi-tenancy", "Hosting", "Observability"]
language: "en"
companion_landing: "/industries/msp/"
quiz:
  title: "Test yourself: MSP cloud platform modernization"
  questions:
    - q: "What does the article name as the main change in an MSP's unit of work?"
      options:
        - { text: "From many per-customer estates to one platform where each customer is a tenant", correct: true }
        - { text: "From managed Microsoft 365 to reselling a hyperscaler under a partner tier", correct: false }
        - { text: "From one shared cluster to a dedicated Kubernetes cluster per customer", correct: false }
      explanation: "The section on what changes explains that today the MSP's work scales with the number of customer estates — each with its own hypervisor, backups and patch windows. On a multi-tenant platform the MSP runs one upgrade cycle, one monitoring stack and one storage layer, and each customer becomes a tenant."
    - q: "How does a customer's environment map onto the platform?"
      options:
        - { text: "A namespace shared by all customers, separated by labels", correct: false }
        - { text: "A tenant nested under the MSP's tenant, with its own quotas, RBAC, network isolation and observability", correct: true }
        - { text: "A separate VMware cluster that the platform only monitors", correct: false }
      explanation: "Cozystack tenants nest: the MSP tenant contains a tenant per customer, and a customer can have sub-tenants such as production and test. Each tenant has its own quotas, access rights, network isolation and observability scope."
    - q: "What does the article recommend for customers who still run VMware estates?"
      options:
        - { text: "A single cutover weekend for all customers at once", correct: false }
        - { text: "Rebuilding every workload from scratch as containers first", correct: false }
        - { text: "Migration in waves while the control plane runs alongside VMware; about 8–12 months for a ~100-VM estate", correct: true }
      explanation: "The migration section describes moving estates in waves with the platform running next to existing VMware during migration. The VMware migration page puts a ~100-VM estate at about 8–12 months and a ~1,000-VM estate at 18–24 months, including planning."
    - q: "Which part of the stack is a proprietary Ænix module rather than open-source Cozystack?"
      options:
        - { text: "White-labelling of the Cozystack Dashboard", correct: false }
        - { text: "The WHMCS integration for billing", correct: true }
        - { text: "Nested tenants with per-tenant quotas", correct: false }
        - { text: "The managed services catalog", correct: false }
      explanation: "White-labelling, multi-tenancy and the managed services catalog are open-source Cozystack features. The WHMCS integration (and the Ænix billing system) are proprietary Ænix modules included in every Ænix Public Cloud Platform subscription tier."
    - q: "According to the article, what sets the pace once the platform is live?"
      options:
        - { text: "The MSP's own sales and migration pace", correct: true }
        - { text: "A fixed 6–12 month platform build that has to finish first", correct: false }
        - { text: "Licence approval per CPU socket from the vendor", correct: false }
      explanation: "The platform goes live in weeks once the hardware is ready, through the productized installer. How fast customers move onto it depends on the MSP's sales and migration waves, not on the platform build."
faq:
  - q: "What does modernizing an MSP's platform actually mean?"
    a: "Moving from looking after each customer's separate infrastructure to running one multi-tenant cloud under the MSP's brand, where every customer is a tenant and the MSP sells managed services from a catalog. Ænix builds this as the Ænix Public Cloud Platform on Cozystack, the open-source CNCF Sandbox project Ænix created and co-maintains."
  - q: "Do existing customer estates have to be replaced first?"
    a: "No. New services can start on the platform straight away, and VMware estates move in waves while the platform runs alongside them. The VMware migration page puts a ~100-VM estate at about 8–12 months and a ~1,000-VM estate at 18–24 months, including planning."
  - q: "How long until the platform itself is running?"
    a: "After a free 30-minute discovery call and a fixed-price Platform Readiness Assessment of 14 or 28 days, the platform goes live in weeks once the hardware is ready, through the productized installer. How fast customers follow is set by the MSP's sales and migration pace."
  - q: "What does the MSP pay Ænix?"
    a: "A subscription per 10 nodes per month, not a per-CPU licence: Basic $1,250, Standard $3,000, Plus $5,500 on annual billing, Enterprise quoted individually. For a branded product, plan on Standard or higher, which includes white-label configuration support and platform installation. Partners can earn up to 40% margin on resold subscriptions and support."
  - q: "When is this the wrong move for an MSP?"
    a: "When the MSP's value is hands-on work inside each customer's own data centre, when it has only a handful of customers on small estates, or when its customers are committed to a hyperscaler. It is also the wrong move without people or a support tier to cover on-call for a shared platform."
hreflang_de: /de/blog/2026/05/msp-cloud-plattform-modernisierung/
---

Most managed-service providers did not set out to run a cloud. They grew by looking after other people's infrastructure: a VMware cluster here, a backup appliance there, a Microsoft 365 tenant, a firewall, a patch window every second Tuesday. That model still pays, but customers now ask their MSP for things it cannot deliver from a stack of separately managed estates — a database in ten minutes, a Kubernetes cluster for a new project, a GPU for a pilot, self-service instead of a ticket.

An MSP has two obvious answers, and both are poor. It can resell a hyperscaler, which keeps the invoice and gives away everything else: the customer's console, quotas and support path live somewhere the MSP does not control, and the margin is whatever the partner tier allows. Or it can keep managing estates and say no to the new requests, which works until a competitor says yes.

This article is about the third answer: modernizing the MSP's own platform so that it runs one branded, multi-tenant cloud and sells it as a managed service. The commercial side of white-labelling — branding, reseller tiers and margin — has its own article, the [white-label cloud playbook for MSPs and resellers](/blog/2026/05/white-label-cloud-msp-reseller-playbook/). Here the focus is on what changes inside the MSP when it stops managing infrastructure customer by customer and starts operating a cloud.

## What actually changes when an MSP becomes a cloud operator

The first thing that changes is the unit of work. Today the MSP's effort scales with the number of customer estates. Every estate has its own hypervisor version, its own storage, its own backup schedule and its own upgrade window, and the engineers who know a given customer's quirks are a scarce resource. Ten new customers means ten more things to keep alive.

On a multi-tenant platform the MSP runs one upgrade cycle, one storage layer, one monitoring stack and one set of runbooks, and each customer becomes a tenant on it. The work does not disappear, but it stops multiplying. An engineer who fixes something fixes it for every customer at once, and an upgrade is rehearsed once on staging and then rolled out, instead of being negotiated customer by customer.

The second change is how customers get things. In the estate model most requests become tickets: provision a VM, open a port, resize a disk. On a platform, those become self-service actions in a portal, with quotas setting the limits. The MSP's engineers move from executing requests to deciding what is offered and keeping it healthy. One of the nine anonymised case studies, a [financial group that put one self-service portal over three infrastructures](/case-studies/unified-cloud-portal-financial-group/), shows the effect plainly: the team was not short of people, it was short of automated provisioning, and fixing that is what changed the workload.

The third change is what the MSP sells. Instead of "we look after your servers", the offer becomes a catalog: virtual machines, managed Kubernetes, managed PostgreSQL and other databases, S3-compatible storage, and GPU capacity, each with the MSP's operations behind it. That is where managed-service margin comes from on a cloud — not from reselling raw capacity.

## The target architecture, briefly

The platform Ænix builds for this is the [Ænix Public Cloud Platform](/products/public-cloud-platform/), running on [Cozystack](https://cozystack.io), the open-source CNCF Sandbox project Ænix created and co-maintains. A few properties matter for an MSP specifically.

Virtual machines and containers run on one Kubernetes API. VMs run through KubeVirt, so a customer's existing Windows or Linux servers land as VMs, while new workloads can go straight to managed Kubernetes. The MSP does not operate two platforms to serve old and new.

Tenants nest. The MSP has its own tenant, inside it there is a tenant per customer, and a customer can have sub-tenants of its own — production, development, test. Each tenant gets its own quotas, access rights, network isolation and observability scope. This hierarchy is what lets an MSP host competitors side by side and still show each one only its own resources.

The managed services catalog is curated. The MSP decides what to expose. If it can back PostgreSQL with real operational expertise but not Kafka, it exposes PostgreSQL and hides Kafka. The catalog should match what the MSP can support at three in the morning, not everything the platform can technically run.

The customer-facing portal is the Cozystack Dashboard with the MSP's logo, titles and favicon, branded once for the whole platform, and each customer tenant can publish its services on its own domain. White-labelling is an open-source Cozystack feature. Billing runs through the [WHMCS integration](/products/whmcs-integration/), a proprietary Ænix module included in the subscription, either with WHMCS as the customer-facing front or with the Dashboard in front and WHMCS as the billing back-end. Overdue accounts can be suspended from the platform without an engineering ticket.

## Bringing existing customer estates across

No MSP moves its whole customer base in one go, and it should not try. In practice customers sort themselves into three groups.

The first group wants something new: a Kubernetes cluster for a product team, a managed database, a GPU for an AI pilot. These customers can start on the platform as soon as it is live, and they are the best first cohort, because nothing has to be migrated.

The second group runs on VMware or another hypervisor that the MSP manages today. They move in waves. During the migration the platform runs alongside existing VMware, OpenStack or OpenNebula infrastructure, and Ænix provides migration tooling and runbooks. The [VMware migration guide](/migration/vmware/) is the reference for timing: including planning and waves, a ~100-VM estate typically takes about 8–12 months, a ~1,000-VM estate 18–24 months. Plan customer contracts and notice periods around those ranges, not around the date the platform goes live.

The third group needs hardware inside its own building, for latency, regulation or habit. For them the MSP keeps managing on-site infrastructure, and the platform simply does not apply. Being honest about that group early avoids forcing a migration nobody benefits from.

The [sovereign public cloud case study](/case-studies/sovereign-public-cloud/) shows the end state from a provider's perspective: a provider moved off its hypervisor stack, set up an operator model with tenants and sub-tenants for each customer's production, development and test, and now sells VMs, Kubernetes and GPUs from its own hardware across three data centres.

## What the managed service looks like afterwards

Running a shared platform changes the support model. The MSP still owns the customer relationship and first-line support. Behind it, an Ænix support subscription covers the platform itself. On [Standard and above](/pricing/), that includes platform installation, support for white-label configuration, supervised upgrades and remote access to the clusters with the MSP's approval; Plus adds 24×7 support. Optionally, Ænix can run the control plane under SLA while the MSP concentrates on its customers.

Some operational habits have to be built on purpose. Backups need to exist at both the platform and the tenant level. Upgrades should be rehearsed on staging and then repeated in production, as the sovereign-cloud provider learned. Audit log retention is configurable, and logs can be shipped to the customer's own long-term store if a regulated customer requires it. Volume encryption is opt-in, with a passphrase the operator holds. None of this is exotic, but it is different from the estate model, where each customer's setup made its own rules.

## Sequencing the change

The sequence that works is short at the start and paced by the business afterwards. It begins with a free 30-minute discovery call and a fixed-price [Platform Readiness Assessment](/services/platform-readiness-assessment/) of 14 days (focused) or 28 days (full), which covers the current customer estates, the target architecture and the first services to offer.

At provider scale, the platform then goes live in weeks once the hardware is ready, through the productized installer. The MSP runs its own internal workloads on it first, then brings in the first cohort of customers who want something new, then starts the migration waves. Branding, catalog curation and billing integration can follow at the MSP's own pace. Nothing after the installer is a fixed build phase; how quickly the platform fills is set by the MSP's sales and by the migration waves.

## Economics in one paragraph

There is no per-CPU or per-core licence: Cozystack is Apache 2.0, and Ænix sells a subscription priced per 10 nodes per month — Basic $1,250, Standard $3,000, Plus $5,500 on annual billing, Enterprise quoted individually. For a branded customer-facing product, plan on Standard or higher. MSPs that also resell Ænix subscriptions and support can join the [Partner Program](/partners/) for up to 40% margin. The [hosting-provider unit economics calculator](/isp-calculator/) models the rest, and the [white-label playbook](/blog/2026/05/white-label-cloud-msp-reseller-playbook/) goes into reseller pricing.

## When this doesn't fit

Modernizing onto a shared cloud is the wrong move for some MSPs, and it is better to say so before an assessment than after.

If most of an MSP's value is hands-on work inside customers' own data centres, a central cloud adds a second business rather than replacing the first. If the MSP has only a handful of customers on small estates, the effort of operating a platform may exceed what it saves; keeping the current tools is cheaper. If its customers are firmly committed to a hyperscaler, a regional cloud will not change their minds.

People matter as well. A shared platform means a shared outage, so someone has to cover on-call. An MSP without engineers for that needs the 24×7 coverage of the Plus tier or managed operations from Ænix, and should budget for it from the start.

Finally, two expectations to correct early. The platform is built to support customers' DORA and NIS2 obligations, but it does not take those obligations off the MSP or its customers. And while stretched multi-site designs exist, disaster recovery between sites is backup, restore and rehearsed runbooks, not automated failover.

If the fit looks right, the [MSP industry page](/industries/msp/) and the [white-label cloud service](/services/white-label-cloud/) describe the engagement, and a discovery call is the quickest way to test it against your own customer base.
