---
title: "When Cozystack fits SMB and mid-market — and when it doesn't"
seo_title: "When Cozystack fits SMB and mid-market teams"
description: "Most small companies do not need Cozystack. An honest test for when it fits, what to run instead, and when a regional provider running it is the better buy."
date: "2026-05-30"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/when-cozystack-fits-smb-and-mid-market.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["DORA", "VMware", "Proxmox", "Kubernetes", "Cozystack", "Sovereignty"]
language: "en"
companion_landing: "/industries/smb-mid-market/"
quiz:
  title: "Test yourself: when Cozystack fits SMB / mid-market"
  questions:
    - q: "According to the article, how many of the six criteria should hold before Cozystack is worth running yourself?"
      options:
        - { text: "At least one of the six", correct: false }
        - { text: "At least three of the six", correct: true }
        - { text: "All six of them", correct: false }
        - { text: "Exactly two of the six", correct: false }
      explanation: "The honest test: zero or one criterion means over-engineering, two is marginal, three or more means Cozystack fits. The criteria are regulated data, a multi-tenant model, sustained workloads, an internal platform team, AI/GPU at scale and a specific exit trigger."
    - q: "What does the article recommend for a small company without regulated data and with a few dozen VMs on premises?"
      options:
        - { text: "Cozystack anyway, for consistency", correct: false }
        - { text: "Proxmox VE, or managed services from a hyperscaler or a provider like Hetzner or OVHcloud", correct: true }
        - { text: "A self-built virtualisation platform", correct: false }
      explanation: "For SMB without regulated data the article points to Proxmox VE for on-premises virtualisation and to managed services from AWS, Azure or GCP, or from providers such as Hetzner, OVHcloud or DigitalOcean. Cozystack is over-engineering there."
    - q: "A small company needs its data to stay in-country but has no one to run a platform. What does the article suggest?"
      options:
        - { text: "Build a three-node Cozystack cluster in the office", correct: false }
        - { text: "Buy cloud services from a regional provider that runs Ænix Public Cloud Platform", correct: true }
        - { text: "Move everything to a global hyperscaler region", correct: false }
        - { text: "Wait until the company has a platform team", correct: false }
      explanation: "The 'middle road' section: a regional hosting provider or MSP running Ænix Public Cloud Platform sells VMs, managed Kubernetes and databases as a product. The company gets in-country infrastructure without operating the platform; the provider carries the operations and the subscription."
    - q: "Which mid-market example does the article give for a company becoming multi-tenant?"
      options:
        - { text: "A single-team developer environment", correct: false }
        - { text: "A SaaS company with 100+ customers needing hard isolation", correct: true }
        - { text: "An internal intranet with one database", correct: false }
      explanation: "Becoming multi-tenant is one of the fit cases: a SaaS company with 100+ customers that need hard isolation, illustrated by the messaging-API SaaS case study that consolidated 13 Proxmox hosts onto one Cozystack cluster."
    - q: "What is the first step the article describes, and what does it cost?"
      options:
        - { text: "A two-week paid proof of concept", correct: false }
        - { text: "A free 30-minute discovery call", correct: true }
        - { text: "A paid 28-day assessment before any conversation", correct: false }
      explanation: "The engagement starts with a free 30-minute discovery call. Only if it might fit is the next step an optional fixed-price Platform Readiness Assessment of 14 or 28 days, and implementation follows only if the assessment confirms the fit."
faq:
  - q: "Is Cozystack a good fit for a small business?"
    a: "Usually not. A single-tenant company with a few dozen VMs, no regulated data and no platform team is better served by Proxmox VE, hyperscaler managed services, or providers such as Hetzner and OVHcloud. Cozystack starts to pay off when at least three of six criteria hold: regulated data, a multi-tenant model, sustained workloads, a platform team, AI/GPU at scale, or a concrete exit trigger."
  - q: "Can a small company get the benefits of Cozystack without running it?"
    a: "Yes. Regional hosting providers and MSPs run Ænix Public Cloud Platform and sell VMs, managed Kubernetes, databases and object storage as a product. The small company buys the service; the provider operates the platform and holds the subscription."
  - q: "What does running Cozystack yourself really cost?"
    a: "The software is open source under Apache 2.0, but a platform needs people and hardware. Ænix's own hosting-provider calculator assumes about 1.3 full-time engineers for a 10-node platform in its default model. Optional Ænix support starts at $1,250 per 10 physical nodes per month on annual billing (Basic tier)."
  - q: "When does Cozystack make sense for a mid-market company?"
    a: "When it handles regulated data with residency requirements, serves many customers that need hard isolation, runs sustained workloads where owned hardware beats hyperscaler pricing, has or is building a platform team, or faces a concrete trigger such as a VMware renewal or a repatriation decision."
  - q: "How does Ænix decide whether Cozystack fits?"
    a: "Through a free 30-minute discovery call. If the answer is no, Ænix says so and names a simpler option. If it might fit, the next step is an optional fixed-price Platform Readiness Assessment of 14 or 28 days before any implementation."
hreflang_de: /de/blog/2026/05/wann-cozystack-fuer-mittelstand-passt/
---

A fair share of the people who contact us run small companies. Some have read about the VMware price changes, some want their data out of a US cloud, some simply like the idea of an open-source platform that does VMs, Kubernetes and databases in one place. Most of them do not need Cozystack, and we tell them so on the first call.

This article writes down how we reach that answer, so you can run the same test before you talk to anyone. It also covers the option that small companies tend to miss: getting the benefits of a Cozystack-based cloud without operating one yourself.

## What Cozystack is built for

Cozystack is an open-source cloud platform, a CNCF Sandbox project whose Incubation application is in due diligence. Ænix created it and co-maintains it with engineers from other companies. It turns bare-metal servers into a cloud: KubeVirt virtual machines and containers on one Kubernetes API, tenant Kubernetes clusters, a managed services catalog (PostgreSQL, MariaDB, Kafka, ClickHouse, S3-compatible storage and more), replicated LINSTOR storage, and multi-tenancy with nested tenants, so one organisation can hand isolated slices of the platform to customers, business units or teams.

Every one of those features answers a problem that appears at a certain scale. Nested tenants matter when you have many customers who must not see each other. A services catalog matters when developers keep asking for databases and waiting days to get them. Replicated storage across nodes matters when an outage costs real money. A company with one team, one product and twenty VMs has none of those problems yet — and the machinery that solves them still has to be installed, upgraded and understood.

## What running it yourself really costs

The software is free under Apache 2.0, so the cost question is easy to get wrong. The real cost of a self-run platform is people and hardware.

On the people side, Ænix's own hosting-provider calculator assumes in its default model about 1.3 full-time engineers for a 10-node platform. That is an estimate, not a law, but it gives the order of magnitude: a production cloud is somebody's job, not something an office IT generalist does on Friday afternoons. Round-the-clock on-call needs more people than that arithmetic suggests.

On the support side, if you want Ænix behind you, the published subscription is priced per block of 10 physical nodes: Basic is $1,250 a month on annual billing, Standard $3,000, Plus $5,500 (the full matrix is on [/pricing/](/pricing/)). That is reasonable money for a platform carrying a business. It is a lot of money for a company that could run the same workloads on four Proxmox hosts.

Neither cost is a reason to avoid Cozystack. Both are reasons to check that the problems it solves are actually yours.

## The honest test

We look for six things. Cozystack fits when at least three of them hold.

1. **Regulated data.** Banking, insurance, healthcare or public-sector data with sovereignty or residency requirements that rule out a foreign hyperscaler.
2. **A multi-tenant model.** You serve customers, business units or partners who need hard isolation from each other, not just separate folders.
3. **Sustained workloads.** Utilisation is steady around the clock, so owned or leased hardware beats pay-as-you-go pricing. Spiky, mostly idle workloads favour the hyperscaler.
4. **An internal platform team,** or a decision to build one. Somebody has to own upgrades, capacity and incidents.
5. **AI and GPU workloads at scale.** Sustained inference or training, where GPU rental bills grow faster than the business.
6. **A specific exit trigger.** A VMware renewal, a repatriation decision, a contract that ends on a known date.

With zero or one of these, Cozystack is over-engineering. With two, it is marginal, and the answer usually depends on how fast the company is growing. With three or more, it fits, and the conversation moves to how rather than whether.

## When it doesn't fit — what to run instead

### Small companies without regulated data

If you run a few dozen VMs for your own business, have no customers who need isolation and no regulator asking where your data lives, choose the simplest thing that works. [Proxmox VE](/blog/2026/05/proxmox-vs-vmware-vs-cozystack-comparison/) is a mature, easy-to-install virtualisation platform and the right answer for most small on-premises IT departments. If you would rather own no hardware at all, managed services from AWS, Azure or GCP, or from providers such as Hetzner, OVHcloud or DigitalOcean, keep operations close to zero.

### Mid-market companies with simple needs

If your workloads are containers only, plain upstream Kubernetes — on your own servers or as a managed service — is lighter than a full platform with virtualisation built in. If your current managed cloud works and the bill is predictable, keep it: do not fix what is not broken. And if the infrastructure team is two people, a handful of cloud servers and VPS from a regional host is often the most honest architecture.

### The middle road: buy from a regional provider that runs it

There is a case that falls between "stay on a hyperscaler" and "run Cozystack yourself", and it is the right answer for more small companies than either. You need in-country infrastructure, perhaps a managed database or a small Kubernetes cluster, but you have nobody to operate a platform.

Regional hosting providers and MSPs solve exactly this. Several of them run [Ænix Public Cloud Platform](/products/public-cloud-platform/) — the productized Cozystack distribution with billing, a brandable customer portal and service wizards — and sell VMs, managed Kubernetes, databases and S3 storage to their customers under their own brand. You buy a service with a price per month; the provider carries the platform team, the hardware and the subscription. The [sovereign public cloud case study](/case-studies/sovereign-public-cloud/) describes one such provider: a Swiss cloud provider whose market includes the public sector and finance, running VMs, managed Kubernetes, databases and GPUs across three data centres in the country.

For a small company this is usually the better trade. You get data residency and an exit path that does not depend on one hyperscaler, without turning infrastructure into a department. If you later grow into three of the six criteria, the move to your own platform is shorter, because the workloads already run on the same open-source foundation. Ænix works with such providers through its [partner programme](/partners/); a discovery call is a quick way to ask whether one operates in your region.

## When it does fit — examples

### Mid-market with regulated data

A regional bank with operations in several jurisdictions under DORA, a mid-size insurer running claims-processing AI on regulated data, a public or quasi-public body whose procurement rules demand sovereignty. Here the regulator effectively decides the architecture, and the platform has to be built to support audits rather than leave them to spreadsheets.

### Mid-market becoming multi-tenant

A SaaS company with 100 or more customers that need hard isolation, a B2B platform serving regulated industries, a specialty cloud product for a vertical market. The [messaging-API SaaS case study](/case-studies/bare-metal-kubernetes-messaging-saas/) is a good reference for how small such a team can be: the company consolidated 13 Proxmox hosts onto one Cozystack cluster on bare metal, moved roughly 25,000 isolated per-customer instances onto KubeVirt VMs without rewriting the application, and runs the platform with an effectively one-person infrastructure team and L3 support from Ænix behind it. Size of company did not decide that project; the number of tenants and the onboarding rate did.

### Mid-market with a strong platform team

Companies that have deliberately invested in platform engineering, or fast-growing technology firms that have outgrown the simple hyperscaler model and want developer self-service on their own terms. They already have the people; Cozystack gives them a platform they do not have to assemble from parts.

## Signs you are about to cross the line

Most companies do not jump from zero to three criteria at once. They drift. The signals we see most often: the customer count keeps rising and isolation is enforced by convention rather than by the platform; customers start asking for databases or Kubernetes, not just VMs; a renewal notice arrives with a number that changes the budget; a large customer sends a security questionnaire that asks where data lives and who can reach it. Our article on [when Proxmox is being outgrown](/blog/2026/05/proxmox-migration-when-cozystack-fits/) goes through these signals in detail for teams that start from Proxmox.

If two of them apply, it is worth a conversation, not a migration.

## How an engagement works

We keep the first steps cheap on purpose, because for most small companies the right outcome is that nothing gets built.

- **A [30-minute discovery call](/contact/)** — free and without sales pressure. We tell you whether Cozystack fits, and if it does not, what we would use in your place.
- **A [Platform Readiness Assessment](/services/platform-readiness-assessment/)** — optional, fixed price, 14 days focused or 28 days full, for organisations that want a written, structured answer before committing budget. The report names the recommended stack, and says so when that is not Cozystack.
- **Implementation** — only if the assessment confirms the fit. At mid-market scale, self-run Cozystack with [Ænix enterprise support](/products/cozystack-enterprise-support/) is often enough; the same subscription covers the [Public Cloud Platform](/products/public-cloud-platform/) if you are building a product for customers.

The open-source project and its documentation are on [cozystack.io](https://cozystack.io/) if you want to try it in a lab first.

## The honest answer

Ænix sells subscriptions and services, not licences. Building a platform for a company that does not need one would cost that company money and cost us its trust. So for most small-business enquiries the honest answer is "stay where you are" — on Proxmox, on your managed cloud, or with a regional provider that runs the platform for you. We would rather say that in the first half hour than discover it in the third month.
