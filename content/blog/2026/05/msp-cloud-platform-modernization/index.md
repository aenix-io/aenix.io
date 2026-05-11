---
title: "MSP cloud platform modernization — branded cloud as managed-service offering"
description: "Companion to MSP industry page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Cozystack", "Multi-tenancy", "Hosting", "Observability"]
language: "en"
companion_landing: "/industries/msp/"
quiz:
  title: "Test yourself: MSP cloud platform modernization"
  questions:
    - q: "Why does the article say MSPs \"need cloud now\"?"
      options:
        - { text: "Regulators force them", correct: false }
        - { text: "Enterprise customers expect cloud capabilities; traditional MSP offering is necessary but no longer sufficient", correct: true }
        - { text: "Hyperscalers stopped offering MSP partnerships", correct: false }
      explanation: "Enterprise customers increasingly expect cloud capabilities from their MSPs. Traditional MSP offering (managed M365, infrastructure management, security ops) is necessary but no longer sufficient. Cloud as part of the offering — branded with the MSP — is what compounds value."
    - q: "For mid-size MSP (50-500 customers), what is the break-even point?"
      options:
        - { text: "5 customers", correct: false }
        - { text: "30-50 paying customers; positive economics scaling from there", correct: true }
        - { text: "500+ customers minimum", correct: false }
      explanation: "For 50-500 customer MSPs: break-even at 30-50 paying customers. Customer pricing typically 30-50% above raw platform cost; margin covers MSP support/sales/operations."
    - q: "What is the typical end-to-end engagement timeline?"
      options:
        - { text: "1 week", correct: false }
        - { text: "6-12 months", correct: true }
        - { text: "5+ years", correct: false }
      explanation: "Engagement sequencing: discovery → Cozystack pilot → initial customer cohort (5-10 with full white-label experience) → operations workflow (support escalation, SLA management) → scale. Total elapsed: 6-12 months."
    - q: "Why does the architecture pattern use multi-tier Tenant CRD?"
      options:
        - { text: "Aenix → MSP → MSP customers — three tiers of isolation in RBAC, quotas, observability scope, billing", correct: true }
        - { text: "Just for performance", correct: false }
        - { text: "Required by Helm", correct: false }
      explanation: "Multi-tier Tenant CRD: Aenix → MSP → MSP customers. Per-tier isolation: RBAC, quotas, observability scope, billing. Nesting is what makes the reseller model clean — each layer can't see into others without explicit permission."
    - q: "What customization does the article say MSPs can do to the service catalog?"
      options:
        - { text: "Nothing — fixed catalog", correct: false }
        - { text: "MSP can curate which services to expose to customers (e.g., expose only PostgreSQL, hide Kafka if not supported)", correct: true }
        - { text: "Only colors", correct: false }
      explanation: "Service catalog curation: MSP can expose only PostgreSQL and hide Kafka (or any other service) if the MSP doesn't support it operationally. The catalog matches what the MSP can actually back with support, not what Cozystack technically can run."
---

Companion to **[MSP industry page](/industries/msp)**.

## Why MSPs need cloud now

Enterprise customers increasingly expect cloud capabilities from their MSPs. The traditional MSP offering (managed Microsoft 365, infrastructure management, security operations) is necessary but no longer sufficient. Cloud as part of the offering — branded with the MSP, run on shared or dedicated infrastructure — is what compounds value.

## Architecture pattern

- **Multi-tier Tenant CRD** — Aenix → MSP → MSP customers
- **Per-tier isolation** — RBAC, quotas, observability scope, billing
- **Branded customer-facing portal** — cozyportal customized per MSP
- **WHMCS-integrated billing** — flows through MSP's customer-management
- **Service catalog** — MSP can curate (e.g., expose only PostgreSQL, hide Kafka if not supported)

## Reseller economics

For mid-size MSP (50-500 customers):
- **Platform cost** — Aenix engagement + hardware + ops
- **Per-customer cost** — incremental hardware/storage/bandwidth
- **MSP customer pricing** — typically 30-50% above raw platform cost
- **Margin** — covers MSP support, sales, operations

Break even: 30-50 paying customers. Positive economics scaling from there.

## Engagement sequencing

1. **Discovery** — MSP customer base, service catalog priorities
2. **Cozystack pilot** — internal validation
3. **Initial customer cohort** — 5-10 customers with full white-label experience
4. **Operations workflow** — support escalation, SLA management
5. **Scale** — open to broader MSP customer base

Total elapsed: 6-12 months.

## How to start

**[White-label cloud services](/services/white-label-cloud/)** for full engagement.

---

*Aenix is the team behind Cozystack.*

<!-- Word count: ~400. -->
