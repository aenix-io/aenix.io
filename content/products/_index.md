---
title: "Aenix products"
description: "Aenix products — Ænix Platform (turnkey cloud-in-a-box, five editions), Cozystack (open-source CNCF project we maintain) and the Kubernetes Deep Dive course."
language: "en"
---

**Three products, distinct audiences. Ænix Platform — our turnkey commercial cloud-in-a-box with five editions matching five buyer profiles. Cozystack — the open-source CNCF project we created and maintain. Kubernetes Deep Dive Course — for engineers learning the stack.**

---

## Ænix Platform

**Turnkey commercial cloud-in-a-box. Built on open-source Cozystack. Five editions for five buyer profiles. Hosting panel, billing, portals, payments, support — install, plug in users, start operating.**

| Edition | For | What's distinct |
|---|---|---|
| **Public Cloud Edition** | Large public clouds, big banks operating own cloud, large telcos | Multi-hypervisor cloud control plane, multi-region, third-party integration |
| **ISP Edition** | Small / mid hosting providers, MSPs, regional clouds, data centres | WHMCS integration, billing module + templates, tenant lock/suspension, migration from VMware/OpenStack/Virtuozzo. From €1.3k/month |
| **Enterprise Edition** | Regulated enterprises (banks, insurance, public administration, telco, healthcare) | DORA / NIS2 architecture, multi-DC, hybrid sovereign, integrates with VMware/OpenNebula/OpenShift |
| **IDP Edition** | Product / SaaS organizations with strong engineering teams | Internal Developer Platform layer — GitLab, Argo CD workflows, APIs |
| **AI/ML Edition** | AI-heavy organizations, regulated AI deployments, GPU-heavy product companies | AI platform automation out of the box, ready blueprints, models, DBs |

Plus an entry tier — **Pure Cozystack with Ænix Support** — for product teams running on Hetzner / OVH / leased bare-metal who want vendor support without the commercial portal/billing layer.

**Engagement size:** ISP Edition entry from €1.3k/month support; Public Cloud / Enterprise / IDP / AI/ML full builds €500k - €10M+ multi-year.

[Explore Ænix Platform →](/products/aenix-platform/)

---

## Cozystack

**Open-source Kubernetes-native multi-tenant cloud platform. CNCF project (Apache 2.0). Created and maintained by Aenix.**

- **Architecture:** Talos Linux + Kubernetes + KubeVirt + Cilium + LINSTOR + Tenant CRD + cozyportal + VictoriaMetrics + VictoriaLogs
- **License:** Apache 2.0 — anyone can run it
- **Status:** CNCF project (currently CNCF Sandbox; CNCF Incubating expected late summer 2026); CNCF-Certified Kubernetes Distribution; OpenSSF Best Practices
- **Documentation:** [cozystack.io/docs](https://cozystack.io/docs)
- **Source:** [github.com/cozystack/cozystack](https://github.com/cozystack/cozystack)
- **Community:** Slack (#cozystack on Kubernetes Slack), Telegram, GitHub

If your organization has platform engineering capacity and wants full control: run Cozystack yourself, free.

If you need a turnkey cloud (billing, portals, payments, support, productized installer): **Ænix Platform** is the commercial path.

[Visit cozystack.io →](https://cozystack.io)

---

## Kubernetes Deep Dive Course

**Education product. Advanced course for engineers covering the Cozystack stack — Talos, LINSTOR, Cilium, KubeVirt, Cluster API, Flux, and other Kubernetes tools.**

- **Audience:** Platform engineers, Kubernetes operators, OSS contributors learning the stack
- **Format:** Multi-week intensive course (online or hybrid)
- **Topics:** Containerization, networking, storage, security, GitOps with the Cozystack stack
- **Outcome:** Engineers ready to operate the same architecture that powers Ænix Platform deployments

The course also serves as a secondary funnel — engineers who learn the stack often bring it to their organization and discuss platform engagement with us.

[Kubernetes Deep Dive Course details →](/kubernetes-deep-dive/)

---

## How they relate

```
                    ┌──────────────────────┐
                    │  Cozystack           │  ← Open-source CNCF project (Apache 2.0)
                    │  (open source)       │     Anyone can run it
                    └──────────┬───────────┘
                               │
              ┌────────────────┼────────────────┐
              │                                  │
              ▼                                  ▼
   ┌──────────────────┐              ┌──────────────────────┐
   │  Ænix Platform   │              │  Kubernetes          │
   │  (commercial)    │              │  Deep Dive Course    │
   │  5 editions      │              │  (education)         │
   │  + entry tier    │              │                      │
   │                  │              │                      │
   │  Sold by Aenix   │              │  Sold by Aenix       │
   │  for production  │              │  for engineers       │
   └──────────────────┘              └──────────────────────┘
```

---

## Frequently asked questions

### What's the difference between Ænix Platform and Cozystack?

Cozystack is the open-source foundation — a CNCF project under Apache 2.0 that anyone can download, modify, and run. Ænix Platform is the commercial turnkey version Aenix sells, with hosting panel, full billing, portals, payments, productized installer, enterprise SLA, and edition-specific features per buyer profile (Public Cloud / ISP / Enterprise / IDP / AI/ML).

### Do I need Ænix Platform if I just want Cozystack?

No. Cozystack is free and self-deployable. If your team has platform engineering capacity, run Cozystack directly. Ænix Platform exists for organizations that need turnkey deployment with billing, portals, support, and edition-specific features without building it in-house.

### Is the Kubernetes Deep Dive Course required?

No. The course is for engineers who want to learn the stack. It's separate from Ænix Platform engagement. Aenix Platform engagements include engineering team training as part of the build phase.

### Which product should I look at first?

- **Public-cloud operator / big bank / large telco:** [Ænix Platform Public Cloud Edition](/products/aenix-platform/public-cloud-edition/)
- **Hosting provider / MSP / regional cloud:** [Ænix Platform ISP Edition](/products/aenix-platform/isp-edition/)
- **Regulated bank / insurance / public sector:** [Ænix Platform Enterprise Edition](/products/aenix-platform/enterprise-edition/)
- **Product / SaaS team:** [Ænix Platform IDP Edition](/products/aenix-platform/idp-edition/)
- **AI-heavy / GPU-heavy:** [Ænix Platform AI/ML Edition](/products/aenix-platform/ai-ml-edition/)
- **Engineer evaluating the tech:** [Cozystack](https://cozystack.io)
- **Engineer learning the stack:** [Kubernetes Deep Dive Course](/kubernetes-deep-dive/)

---

*Cozystack is open source under Apache 2.0. Ænix Platform is commercial, sold by Aenix.*
