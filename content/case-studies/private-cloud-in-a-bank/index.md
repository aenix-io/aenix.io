---
title: "A private cloud inside a bank"
description: "A bank in Eastern Europe gave its internal teams a full self-service private cloud — three months to production, its own Keycloak and Ceph, per-tenant RBAC and backups."
hero_subtitle: "Self-service environments for internal teams, three months to production"
date: 2026-08-21
lastmod: 2026-08-21
page_type: "case-study"
language: "en"
hreflang_de: "/de/case-studies/private-cloud-in-a-bank/"
images: ["img/og/og-case-private-cloud-in-a-bank.png"]
primary_keyword: "private cloud for banks"
secondary_keywords:
  - "bank private cloud platform"
  - "self-service environments enterprise"
  - "keycloak rbac multi-tenancy"
  - "internal cloud portal bank"
  - "on-premise cloud financial services"
related_pages:
  - /products/private-cloud-platform/
  - /industries/financial-services/
  - /solutions/dora-compliance/
  - /products/private-cloud-platform/
faq:
  - q: "Did the bank have to adopt a new identity system?"
    a: "No. The bank's existing Keycloak stayed the source of truth and the platform integrated with it, mapping the bank's groups and roles onto platform roles. Nobody got a second set of credentials, and joiner-mover-leaver processes kept working the way audit already understood them."
  - q: "Who manages network access inside a tenant?"
    a: "The teams themselves. Firewall rules, load balancers and ACLs are theirs to manage within the boundary of their own tenant. That was an explicit requirement: self-service that still requires a ticket for a firewall rule is not self-service, and central network engineering did not want to be in that queue."
  - q: "What about backups and monitoring?"
    a: "Both are part of the platform rather than adjacent tools. Backup and restore rules are managed as policy. Monitoring is configurable globally and per tenant, with threshold-based alerting delivered over Telegram and SMTP, so a team watches its own services without waiting for a central dashboard change."
  - q: "Was existing storage reused?"
    a: "Yes — the platform integrates with the bank's external Ceph cluster. Storage the organisation already owns, operates and has capacity planning for does not need to be rebuilt to stand up a cloud on top of it."
  - q: "How long did it take?"
    a: "Three months from the start of integration to production. The short path came from the platform being a product rather than a bespoke build: the work was integration with the bank's identity, storage and processes, not construction of a cloud from parts."
---

<div class="cs-tags">
  <span class="cs-tag">Private cloud</span>
  <span class="cs-tag">Bank · regulated</span>
  <span class="cs-tag">Keycloak · RBAC</span>
  <span class="cs-tag">External Ceph</span>
  <span class="cs-tag">Self-service</span>
</div>

**A bank in Eastern Europe wanted its internal teams to get environments and managed services the way they would from a public cloud — a button, not a ticket — without anything leaving the bank. We delivered a full self-service private cloud that integrates with the bank's own Keycloak and its existing Ceph storage, with per-tenant RBAC, self-managed network access, backup policy and threshold alerting. Three months from the start of integration to production.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">3 months</div><div class="cs-stat__label">from the start of integration to production</div></div>
  <div class="cs-stat"><div class="cs-stat__num">Existing Keycloak</div><div class="cs-stat__label">kept as the identity source, with group and role mapping onto platform roles</div></div>
  <div class="cs-stat"><div class="cs-stat__num">Per tenant</div><div class="cs-stat__label">RBAC, network rules, backup policy, monitoring thresholds and usage reports</div></div>
</div>

## About the project

The client is a bank running its own infrastructure for its own engineering, data and product teams. The pressure was internal rather than commercial: teams wanted environments, databases and services on demand, and everything they wanted had to be requested, approved and provisioned by hand. Delivery slowed at the infrastructure queue, and the infrastructure team spent its time on repetitive provisioning rather than on the platform.

Nothing could leave the bank, and nothing could route around the bank's existing controls — identity, storage, audit and backup were already governed and already audited. A cloud that ignored them would have been a second control plane to defend in front of a regulator, which is worse than the problem it solves.

## Goals and objectives

- Give internal teams a full cloud experience — managed services and ready environments provisioned on demand.
- Make ordering simple enough that it does not need a runbook, and reporting simple enough that resource usage per service and per user is one click.
- Let teams manage their own network access — firewall rules, load balancers, ACLs — inside their tenant boundary.
- Put backup and restore under managed policy rather than tribal knowledge.
- Give monitoring both a global and a per-tenant view, with threshold alerts over Telegram and SMTP.
- Integrate with what the bank already runs: Keycloak for identity, RBAC globally and per tenant, external Ceph for storage.

## Proposed solution

A self-service cloud platform, delivered as a product and integrated into the bank's existing controls rather than beside them.

**Platform components.** Managed services launched from a button; monitoring plus an audit trail of user actions; a public API for programmatic use of the cloud; a web interface for everyone else; and a billing interface that produces resource-usage reports per service and per user — internal chargeback rather than invoicing, but the same machinery.

**Tenancy as the control boundary.** Each team gets a tenant with its own quotas, its own RBAC, its own network policy and its own monitoring thresholds. What a team can do inside its tenant it does without asking; what crosses the boundary stays with central engineering. That line is what makes self-service acceptable in a regulated organisation.

**Integration, not replacement.**

- **Keycloak** — the bank's own instance stays authoritative; the platform maps existing groups and roles onto platform roles.
- **Ceph** — the bank's existing external cluster serves as storage, with its own capacity planning and operational history intact.
- **RBAC** — enforced globally and inside each tenant, consistent with how access is already reviewed.

{{< placeholder-image width="1200" height="640" label="Bank private cloud: internal teams enter through a web console or the public API; the platform enforces per-tenant RBAC, quotas, network policy (firewall, load balancer, ACL), backup policy and threshold monitoring; identity comes from the bank's existing Keycloak with group and role mapping, storage from the bank's external Ceph cluster; usage reports feed internal chargeback" >}}

## Results and current state

- A working cloud-service management platform, in production three months after integration began.
- The bank's existing Keycloak integrated with group and role mapping onto platform roles — one identity, one review process.
- The bank's existing external Ceph integrated as platform storage.
- Teams manage network access, backups and monitoring thresholds inside their own tenants; central engineering handles the boundaries.
- Training and accompaniment for the bank's team, with L3 support behind them.

## Why this case matters

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Self-service that a regulator can live with</h3><p class="card-description">Freedom inside the tenant, control at the boundary. Teams stop queueing for firewall rules without anyone losing the audit trail.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Existing identity and storage stay</h3><p class="card-description">Keycloak and Ceph were already governed, already audited, already capacity-planned. The platform integrated with them instead of standing up rivals.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Three months, because it is a product</h3><p class="card-description">The work was integration with the bank's processes, not building a cloud from parts. That is the whole difference in the timeline.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Usage reporting from day one</h3><p class="card-description">Per-service and per-user consumption in one click — the number an internal platform is asked for the moment it becomes popular.</p></div></div>
</div>

---

*This case study is published in anonymized form (Tier-3 evidence): the customer is described by profile, not by name. A customer reference is available under NDA on request — [talk to Aenix sales](/contact/).*

*Aenix is the team behind [Cozystack](https://cozystack.io) — a CNCF project (Sandbox today; Incubating expected late summer 2026), Apache 2.0. Aenix commercializes it as Ænix Platform, in two editions — Provider and Enterprise — with AI & GPU and Developer Self-Service modules on top.*
