---
title: "One portal over OpenNebula, VMware and Kubernetes"
description: "A financial group in Asia put a single self-service portal over OpenNebula, VMware and Kubernetes-as-a-Service — four months to production, support load cut by automation."
hero_subtitle: "One catalogue over three infrastructures, four months to production"
date: 2026-08-21
lastmod: 2026-08-21
page_type: "case-study"
language: "en"
hreflang_de: "/de/case-studies/unified-cloud-portal-financial-group/"
images: ["img/og/og-case-unified-cloud-portal-financial-group.png"]
primary_keyword: "self-service cloud portal"
secondary_keywords:
  - "unified cloud portal"
  - "OpenNebula VMware integration"
  - "kubernetes as a service portal"
  - "cloud service catalog"
  - "private cloud billing portal"
related_pages:
  - /products/aenix-platform/provider-edition/
  - /products/aenix-platform/public-cloud-edition/
  - /industries/financial-services/
  - /services/public-cloud-builder/
faq:
  - q: "Did the existing OpenNebula and VMware estates have to be replaced?"
    a: "No, and that was the point. Both stay where they are and keep running their workloads. The portal sits above them as a catalogue and an ordering path, talking to each through its own backend module. Replacing a hypervisor estate is a multi-year programme; putting a single ordering surface over it is a matter of months, and it is usually what the business actually asked for."
  - q: "Why build the portal on the Kubernetes API rather than a conventional application stack?"
    a: "Because it removes an entire layer of plumbing. The Kubernetes API server acts as the aggregation layer and the data bus between frontends and backend controllers, so every operation goes through one consistent API, RBAC and audit come from the platform rather than from application code, the Watch API gives frontends real-time updates without polling, and horizontal scaling is the default rather than a project."
  - q: "How is the portal structured internally?"
    a: "As independent modules. On the frontend: an accounting portal for billing, users and usage; a console portal for managing VMs, networks and IP addresses; a support portal for tickets and the knowledge base. On the backend: separate microservices for accounting, files and object storage, applications (the OpenNebula and VMware adapters), usage reporting and tariffs, support, notification and logging. Each has its own business logic and scales on its own."
  - q: "Can other infrastructure providers be added later?"
    a: "Yes. A provider is a backend module behind the same API — the pattern is the same one used for OpenNebula and VMware. Adding a further platform, or an external service provider, does not change the frontend or the catalogue model."
  - q: "What did the customer's team get besides the software?"
    a: "Training and hands-on accompaniment through the build, L3 support for the first year, and a deliberate transfer of competence, so the group operates the portal itself rather than depending on us to keep it alive."
---

<div class="cs-tags">
  <span class="cs-tag">Self-service portal</span>
  <span class="cs-tag">OpenNebula · VMware</span>
  <span class="cs-tag">Kubernetes-as-a-Service</span>
  <span class="cs-tag">Billing · SSO</span>
  <span class="cs-tag">Financial group</span>
</div>

**A financial group in Asia was running three infrastructures in parallel — OpenNebula, VMware and Kubernetes-as-a-Service — each with its own way in, and every service request landing on the support team as manual work. We built one self-service portal above all three: a single catalogue, one login, automated provisioning, ticketing and billing in the same place. It reached production in four months, roughly twice as fast as the nearest comparable projects, and the underlying estates were never replaced.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">4 months</div><div class="cs-stat__label">from kickoff to production, about twice as fast as comparable builds</div></div>
  <div class="cs-stat"><div class="cs-stat__num">3 systems</div><div class="cs-stat__label">OpenNebula, VMware and Kubernetes-as-a-Service behind one catalogue</div></div>
  <div class="cs-stat"><div class="cs-stat__num">1 entry point</div><div class="cs-stat__label">for users, instead of several disconnected systems and a ticket each</div></div>
</div>

## About the project

The client is a financial group operating its own infrastructure for internal teams and for customers. Over the years it had accumulated the usual layering: an OpenNebula estate, a VMware estate, and a newer Kubernetes-as-a-Service offering. Each was competently run. None of them shared a front door.

For a user, ordering anything meant knowing which system it lived in, finding the right way in, and asking someone. For the support team, every request was manual work: provisioning, access, quotas, the follow-up questions. The volume of that work was growing with the estate, and hiring against it was not a strategy.

## Goals and objectives

- Give users one catalogue and one login covering services from all three systems, instead of several disconnected entry points.
- Automate the provisioning operations that support was performing by hand, so the team's load stops scaling with the estate.
- Keep OpenNebula and VMware in place — the portal integrates with them rather than displacing them.
- Deliver billing, usage reporting, ticketing and audit as part of the same surface, not as separate tools bolted on later.
- Leave the group able to run and extend the platform itself.

## Proposed solution

A portal built on the Kubernetes API rather than beside it. The API server acts as the aggregation layer and the single data bus: frontends talk to it, backend controllers and services sit behind it, and external databases and systems hang off those.

That choice does more work than it first appears to:

- **Consistency** — every operation, from ordering a VM to issuing an invoice, goes through the same standard API.
- **Security** — RBAC and audit are properties of the platform, not something each service reimplements.
- **Scalability** — horizontal scaling out of the box.
- **Real time** — the Watch API pushes changes to the frontends as they happen, so the console reflects reality rather than the last poll.

{{< placeholder-image width="1200" height="640" label="Portal architecture: frontend portals (accounting, console, support) talk to the Kubernetes API server acting as an aggregation layer and unified data bus; behind it, backend API services and backend controllers reach out to external databases, OpenNebula, VMware and Kubernetes-as-a-Service" >}}

**Portal components.** User registration and SSO; a personal dashboard; the service catalogue covering virtual machines and Kubernetes-as-a-Service through OpenNebula; a ticket centre; a knowledge base and documentation; logging and audit; billing and invoicing; and a platform-administrator interface.

**Modular architecture.** Each module solves one business problem and is an independent service integrated through the Kubernetes API, scaling on its own:

- **Frontend** — Accounting Portal (billing, users, usage), Console Portal (VMs, networks, IP addresses), Support Portal (tickets, knowledge base).
- **Backend** — Accounting; Files (S3); Apps, the adapters for OpenNebula and VMware; Usage, for reports and tariffs; Support; Notification; Logging.

## Results and current state

- Four months from the start of work to production — around twice as fast as the comparable projects the group had benchmarked against.
- A single self-service surface acts as the control point for the whole infrastructure, whichever system a service physically runs on.
- Integration with the tools the team already knew, VMware and OpenNebula, with the same pattern available for any further provider or external service.
- Provisioning that used to be manual now runs as automation, which is where the support-load reduction actually came from.
- Training and accompaniment for the customer's team, L3 support for the first year, and a deliberate handover of competence.

## Why this case matters

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">You do not have to replace the estate first</h3><p class="card-description">OpenNebula and VMware stayed exactly where they were. The portal went above them, and the business got what it asked for in months rather than years.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">The Kubernetes API as the data bus</h3><p class="card-description">One API for every operation means RBAC, audit, real-time updates and horizontal scale come from the platform instead of being written, and rewritten, per service.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Billing belongs in the portal</h3><p class="card-description">Usage, tariffs and invoicing sit in the same surface as ordering and support — the thing most self-service projects postpone and then bolt on.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Support load is an automation problem</h3><p class="card-description">The team was not short of people; it was short of automated provisioning. Fixing that is what changed the workload.</p></div></div>
</div>

---

*This case study is published in anonymized form (Tier-3 evidence): the customer is described by profile, not by name. A customer reference is available under NDA on request — [talk to Aenix sales](/contact/).*

*Aenix is the team behind [Cozystack](https://cozystack.io) — a CNCF project (Sandbox today; Incubating expected late summer 2026), Apache 2.0. Aenix commercializes it as Ænix Platform, in two editions — Provider and Enterprise — with AI & GPU and Developer Self-Service modules on top.*
