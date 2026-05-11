---
title: "White-label cloud playbook — for MSPs and resellers in 2026"
description: "Companion to white label cloud services page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Cozystack", "Multi-tenancy", "Hosting", "Observability"]
language: "en"
companion_landing: "/services/white-label-cloud/"
quiz:
  title: "Test yourself: white-label cloud for MSPs"
  questions:
    - q: "What unique advantage do MSPs have over hyperscalers in the white-label cloud opportunity?"
      options:
        - { text: "Deeper customer relationships at scale", correct: true }
        - { text: "Better hardware in each datacentre", correct: false }
        - { text: "Cheaper raw compute per vCPU", correct: false }
      explanation: "MSPs have customer relationships hyperscalers can't easily replicate. They lack the cloud product to monetize those relationships at scale. White-label cloud bridges this — branded as MSP's product, MSP collects margin between platform cost and customer pricing."
    - q: "What multi-tenancy pattern does the article describe for white-label cloud?"
      options:
        - { text: "One shared namespace for all tenants", correct: false }
        - { text: "Multi-tier nested Tenant CRD model", correct: true }
        - { text: "One dedicated cluster per end customer", correct: false }
      explanation: "Multi-tier Tenant CRD: Aenix tenant → MSP tenant → MSP customer tenant. Per-tier isolation in RBAC, quotas, observability scope, billing. The nesting is what makes the reseller model work cleanly."
    - q: "Typical customer pricing markup over raw platform cost?"
      options:
        - { text: "5-10% over platform cost", correct: false }
        - { text: "500% over platform cost", correct: false }
        - { text: "30-50% over platform cost", correct: true }
      explanation: "Typical economics: customer pricing 30-50% above raw platform cost. The margin covers MSP support, sales, operations. Realistic to break even on first 50-100 customers."
    - q: "What does the WHMCS integration provide?"
      options:
        - { text: "Billing through MSP's existing system", correct: true }
        - { text: "Compute orchestration for tenant VMs", correct: false }
        - { text: "Cross-site storage replication layer", correct: false }
      explanation: "WHMCS integration: billing flows through MSP's existing customer-management system. The MSP doesn't need to bolt on a new billing platform — the cloud product slots into the system the MSP already runs."
    - q: "What customization can MSPs do to the cozyportal?"
      options:
        - { text: "No branding customisation supported", correct: false }
        - { text: "Brand, domain, and service catalog", correct: true }
        - { text: "Only the header logo image swap", correct: false }
      explanation: "Branded cozyportal: MSP can customize colors, logo, domain, and service catalog options. MSPs can also curate which services to expose to customers (e.g., hide Kafka if MSP doesn't support it)."
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
