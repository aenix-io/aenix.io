---
title: "Ænix Platform ISP Edition"
description: "Ænix Platform ISP Edition: turnkey Kubernetes-native cloud platform for hosting providers and MSPs, with WHMCS billing and VMware/OpenStack migration."
type: "page"
language: "en"
direct_answer: |
  **Ænix Platform ISP Edition is a turnkey, Kubernetes-native cloud platform for small and mid-size hosting providers, MSPs, regional cloud providers, and data centres that want to launch or modernize a multi-tenant cloud product without building it from scratch. It is the productized, supported distribution of Cozystack (an Apache 2.0 CNCF project created and maintained by Aenix) and adds the commercial surfaces a hosting business needs: WHMCS-integrated billing, a white-label customer portal, payment processing, automatic tenant lock and suspension, and service-creation wizards for VMs, Kubernetes clusters, managed databases, S3 storage, and GPU workloads. Aenix delivers it with migration tooling and expertise from VMware, OpenStack, Virtuozzo, and OpenNebula, getting providers production-ready in weeks rather than months.**
quick_facts:
  - label: "What it is"
    value: "Turnkey, supported cloud-in-a-box for hosting providers, MSPs, regional clouds, and data centres, built on Cozystack with WHMCS billing and a white-label portal."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it is for"
    value: "Small and mid-size hosting providers, MSPs, regional cloud providers, and data centres modernizing or expanding a cloud product."
  - label: "Replaces"
    value: "OpenStack, VMware Cloud Director, Virtuozzo, OpenNebula, and custom in-house hosting panels."
  - label: "Architecture"
    value: "Kubernetes-native: KubeVirt (VMs and containers on one Kubernetes API), Cilium (eBPF) networking, LINSTOR/DRBD storage, Tenant CRD multi-tenancy, plus cozyportal, VictoriaMetrics, and VictoriaLogs."
  - label: "Time to live"
    value: "Production-ready in weeks via the productized installer and migration tooling; entry support tier from EUR 1.3k/month."
faq:
  - q: "How is ISP Edition different from running open-source Cozystack ourselves?"
    a: "Cozystack is the engine; ISP Edition adds the commercial surfaces a hosting business needs: WHMCS integration, full billing, a white-label customer portal, payment processing, automatic tenant lock and suspension, migration tooling, and an enterprise support tier from EUR 1.3k/month."
  - q: "Can we keep our own billing system instead of WHMCS?"
    a: "Yes. ISP Edition supports two integration modes: WHMCS as the customer-facing front with Cozystack as the substrate, or cozyportal as the front with WHMCS as the billing back-end. Custom billing integrations are also supported."
  - q: "What does ISP Edition replace?"
    a: "It replaces OpenStack, VMware Cloud Director, Virtuozzo, OpenNebula, and custom in-house hosting panels, consolidating compute, Kubernetes, managed databases, S3 storage, GPU, billing, and the customer portal under one Kubernetes-native platform."
  - q: "How long does migration from VMware or OpenStack take?"
    a: "The productized installer brings ISP Edition live in weeks. End-customer migration is workload-dependent; a typical pattern is a parallel run with cohort-based migration over several months for mid-size hosting estates, delivered with Aenix tooling and runbooks."
  - q: "Does ISP Edition support white-label and multi-tier reseller models?"
    a: "Yes. cozyportal is fully white-labelable per provider (colors, logo, domain), and multi-tier reseller models are supported (Aenix to MSP to MSP customers). A partner program offers deal registration, sales kit, pre-sales support, and training."
  - q: "What hardware does ISP Edition need?"
    a: "Bare-metal servers, such as Hetzner, OVH, your own data centre, or colocation. Cozystack is hardware-agnostic, and ISP Edition adds operations runbooks for typical hosting hardware. Sizing is scoped on a discovery call."
---

**A modern alternative to OpenStack built for small and mid-size hosting providers, MSPs, regional cloud providers, and data centres. Turnkey cloud-in-a-box: hosting panel, billing, customer portal, payments, support — install, plug in users, start operating. WHMCS-integrated. Production-ready in weeks.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a discovery call</a>
  <a class="cta-secondary" href="/products/aenix-platform/">All editions →</a>
</div>

---

## Quick facts

- **For:** Small / mid hosting providers, MSPs, regional clouds, data centres modernizing or expanding cloud product
- **Foundation:** Open-source Cozystack (CNCF project, Apache 2.0)
- **Entry pricing:** **From €1.3k/month** support tier
- **Time to live:** Weeks (with productized installer + migration tooling)
- **Replaces:** OpenStack, VMware Cloud Director, Virtuozzo, OpenNebula, custom in-house panels
- **Architecture:** Kubernetes-native (Talos + KubeVirt + Cilium + LINSTOR + Tenant CRD + cozyportal + VictoriaMetrics + VictoriaLogs)

---

## What's included in ISP Edition

### WHMCS integration

Production-ready WHMCS module with billing templates for your existing hosting panel. Two integration modes — use WHMCS as the customer-facing front, or use cozyportal frontend with WHMCS as the billing back-end. Tracks and stores full usage data with a clear API.

### Hosting panel + customer-facing portal

Branded admin dashboard for the operator + customer-facing console portal (cozyportal customized to your brand). Self-service registration, profile, team management, support ticketing.

### Service-creation wizards

Simple guided UX for spinning up VMs, Kubernetes clusters, managed databases (PostgreSQL, MySQL, Redis, Kafka, ClickHouse, RabbitMQ, NATS), S3-compatible object storage, GPU workloads. No YAML required from end customers.

### Tenant lock / suspension

Built-in tenant lifecycle controls — automatic suspension of overdue tenants, blocking of resources, lock for security review. No engineering ticket needed.

### Full billing — backend + frontend

Usage metering, invoicing, payment processing. Stripe + regional payment providers + B2B invoicing. Not just API hooks — actual production billing surface.

### Migration expertise + tooling

Ready modules and runbooks for migration from VMware, OpenStack, Virtuozzo, OpenNebula. Aenix delivers migration with experience from production engagements.

### Fast feature delivery

Proprietary modules (beyond open-source Cozystack) shipped without the long wait times typical of community-only platforms.

### Enterprise support

24/7 support with named technical account manager (higher tiers). Entry tier from €1.3k/month.

### Service catalog beyond VMs

Managed databases (PostgreSQL via Cloud Native PG, MySQL via MariaDB, Redis, Kafka via Strimzi, ClickHouse via Altinity, RabbitMQ, NATS messaging), S3 storage (SeaweedFS), HTTP cache (Nginx-based), VPN service (Outline), GPU workloads.

---

## Why hosting providers / MSPs choose ISP Edition over OpenStack

| Dimension | OpenStack | Ænix Platform ISP Edition |
|---|---|---|
| Time to production | 6+ months typical | Weeks |
| Operations team size | 8-15+ engineers | 3-7 engineers |
| Service catalog | DIY beyond core compute / storage / network | Built-in: K8s, DBs, S3, GPU, cache, VPN |
| Customer-facing portal | DIY | cozyportal, branded, included |
| Billing | DIY integration | WHMCS-native + Stripe + regional providers |
| Multi-tenancy | Project model — limited | Tenant CRD with quotas / RBAC / observability per tenant |
| Migration from VMware | Heavy lift | Productized modules + Aenix expertise |
| Vendor support | Community + add-ons | Aenix enterprise support from €1.3k/month |
| Upgrade cadence | Manual / risky | GitOps-managed, low-risk |

---

## Production customers (currently listed on aenix.io)

Regional hosting providers running Ænix Platform ISP Edition include **GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy**.

These customers use Ænix Platform ISP Edition to deliver multi-tenant cloud products to their end customers across the EU, DACH, Central Asia, and other regions.

---

## Pricing

**Entry from €1.3k/month support tier.** Higher tiers and project-based migration / build engagements priced on request via discovery call.

[Discuss ISP Edition pricing →](/contact/?edition=isp)

---

## Migration paths

Aenix delivers ISP Edition migrations with productized modules and engagement expertise:

- **From VMware Cloud Director / vSphere** — most common 2026 trigger (Broadcom subscription pressure)
- **From OpenStack** — operational complexity reduction; faster feature velocity
- **From Virtuozzo / OpenNebula** — modernizing legacy hosting stacks
- **From custom panels** — consolidating multi-vendor stacks under one platform

[VMware migration hub →](/migration/vmware/) | [OpenStack migration hub →](/migration/openstack/)

---

## Reseller / partner pricing

Up to 40% margin on Ænix Platform sales for resellers, integrators, and distributors. Includes deal registration, sales kit, technical pre-sales support, L3 support access, training.

[Partner Program →](/partners/)

---

## Pure Cozystack with Ænix Support (entry tier)

For product teams running Cozystack on their own / leased servers (Hetzner, OVH, regional bare-metal) without the commercial portal/billing layer:

**The cloud experience on customer-controlled hardware. Reduce AWS-level bills 2-7x. Go live and migrate from public clouds in 1-2 weeks.** Vendor support, architecture review, and migration expertise — no commercial portal/billing.

[Discuss Pure Cozystack support →](/contact/?edition=cozystack-support)

---

## Frequently asked questions

### How is ISP Edition different from running open-source Cozystack ourselves?

Cozystack gives you the engine. ISP Edition gives you the car: WHMCS integration, billing, customer portal, payment processing, tenant suspension, support — all the surfaces a real cloud business needs. Plus enterprise support tier.

### What does €1.3k/month include?

Entry support tier — direct support channel, named TAM at higher tiers, access to ISP-specific modules, migration expertise. Ask on the discovery call for the current tier breakdown.

### Can we use our own billing system instead of WHMCS?

Yes. Two integration modes:
1. **WHMCS-front + Cozystack-back** — your customers see WHMCS; Cozystack is the substrate
2. **cozyportal-front + WHMCS-back** — your customers see cozyportal; WHMCS handles billing
Plus support for custom billing if needed.

### How long does migration from VMware take?

Productized installer gets ISP Edition live in weeks. VMware customer migration is workload-dependent — typical pattern is parallel run with cohort-based migration over 3-6 months for mid-size hosting estates.

### Do you support white-label?

Yes. cozyportal is fully white-labelable per provider — colors, logo, domain. Multi-tier reseller model supported (Aenix → MSP → MSP customers).

### Is there a managed-operations option?

Yes. Aenix can run ISP Edition under contract while you focus on customer acquisition. Discuss on discovery call.

### What hardware do we need?

Bare-metal servers (Hetzner, OVH, your own datacenter, colocation). Cozystack is hardware-agnostic; ISP Edition adds operations runbooks for typical hosting hardware. Discuss sizing on discovery call.

---

## How to start

Book a 30-minute discovery call. We'll discuss your hosting business, current stack, customer mix, and ISP Edition fit.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a discovery call</a>
</div>

---

*Ænix Platform ISP Edition is built on [Cozystack](https://cozystack.io) — a CNCF project we created and maintain (currently CNCF Sandbox; CNCF Incubating expected late summer 2026). Apache 2.0. Aenix is the open-core company.*
