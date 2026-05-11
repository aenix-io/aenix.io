---
title: "White-label cloud playbook — for MSPs and resellers in 2026"
description: "Companion to white label cloud services page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Cozystack", "Multi-tenancy", "Hosting", "Observability"]
language: "en"
companion_landing: "/services/white-label-cloud/"
---

Companion to **[white label cloud services page](/services/white-label-cloud)**.

## Why white-label cloud matters for MSPs

MSPs have customer relationships hyperscalers can't easily replicate. They lack the cloud product to monetize those relationships at scale. White-label cloud — branded as MSP's product, running on shared or dedicated infrastructure — bridges this.

Pattern in 2026: MSP gets branded multi-tenant cloud product on open-source platform; customers consume MSP-branded cloud; MSP collects margin between platform cost and customer pricing.

## Architecture

- **Multi-tier Tenant CRD** — Aenix tenant → MSP tenant → MSP customer tenant. Per-tier isolation.
- **Branded cozyportal** — MSP can customize colors, logo, domain, service catalog options
- **WHMCS integration** — billing flows through MSP's existing customer-management system
- **Service catalog** — MSP can curate which services to expose to customers (e.g., hide Kafka if MSP doesn't support it)
- **SLA management** — per-customer SLA tracking through Cozystack observability

## Reseller economics

Typical economics for an MSP running white-label cloud:
- **Platform cost** — Aenix engagement + hardware + colocation
- **Per-customer cost** — incremental hardware/storage/bandwidth
- **Customer pricing** — typically 30-50% above raw platform cost
- **Margin** — covers MSP support, sales, operations

Realistic to break even on first 50-100 customers; positive economics after that depending on customer mix.

## Engagement structure

- **4-8 week discovery + product-readiness**
- **4-12 month build**
- **Optional managed-services**

## How to start

For details see **[white label cloud services](/services/white-label-cloud)**.

---

*Aenix is the team behind Cozystack.*

<!-- Word count: ~400. -->
