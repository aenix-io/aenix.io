---
title: "DORA compliance — sovereign Kubernetes platform for EU financial services"
description: "DORA-aligned cloud platform for EU banks and insurers. Articles 21/23/24 architecture controls on sovereign Cozystack infrastructure. Production-ready."
date: 2026-05-10
lastmod: 2026-05-10

page_type: solution-landing

primary_keyword: "DORA compliance"
secondary_keywords:
  - "DORA cloud architecture"
  - "DORA Article 21"
  - "EU financial services cloud"

images:
  - "social-card.png"

translations:
  de: /de/loesungen/dora-compliance/

service:
  type: "DORA Compliance Platform"
  areaServed: ["EU", "DACH"]
  audience: "Financial Services"

direct_answer: |
  **DORA (Digital Operational Resilience Act, Regulation (EU) 2022/2554) entered force on 2025-01-17. It applies to all EU financial entities (banks, insurance, payment institutions, investment firms, market infrastructure) and their critical ICT third-party providers. DORA mandates ICT risk management (Article 21), incident reporting (Article 23), and third-party risk management (Article 24). Cozystack-based architecture provides DORA-aligned controls: customer-controlled keys, multi-tenant isolation, audit-ready logging, supplier transparency. Aenix delivers DORA-compliant platform builds for tier-1 to challenger banks.**

quick_facts:
  - label: "What it is"
    value: "EU Regulation (EU) 2022/2554 (DORA)"
  - label: "In force since"
    value: "2025-01-17"
  - label: "Who's covered"
    value: "All EU financial entities + their critical ICT third-party providers"
  - label: "Key articles"
    value: "21 (ICT risk management), 23 (incident reporting), 24 (ICT third-party risk)"
  - label: "Reporting timeline"
    value: "Major incidents reportable within 4 hours of classification"
  - label: "Cozystack relevance"
    value: "Multi-tenant Tenant CRD, customer-managed encryption keys, audit-ready VictoriaLogs, supplier-transparent open-source supply chain"

quick_facts_source: "[DORA text](https://eur-lex.europa.eu/eli/reg/2022/2554/oj), [EBA DORA page](https://www.eba.europa.eu)"

faq:
  - q: "What is DORA and when did it enter force?"
    a: "DORA (Digital Operational Resilience Act, Regulation (EU) 2022/2554) is the EU regulation establishing operational resilience for financial services. Entered force 2025-01-17. Applies to all EU financial entities + their critical ICT third-party providers."
  - q: "What does DORA require for cloud architecture?"
    a: "Article 21 mandates ICT risk management framework with explicit cloud architecture controls. Article 23 requires incident reporting (4 hours for major incidents). Article 24 requires third-party risk management with contractual clauses. Cloud platforms must support encryption, multi-tenancy aligned with risk classification, audit-ready logging, supplier transparency."
  - q: "Is Cozystack DORA-compliant?"
    a: "Cozystack provides architecture controls aligned with DORA Articles 21, 23, 24. Compliance is at the financial entity level (you). Cozystack-based architecture: customer-controlled keys (Article 21), audit-ready VictoriaLogs (Article 23), supplier-transparent open-source supply chain plus multi-tenant isolation (Article 24)."
  - q: "What's the difference between DORA and NIS2?"
    a: "DORA: financial services-specific, EU regulation (directly applicable), in force 2025-01-17. NIS2: 18 essential-entity sectors directive (national transposition), deadline 2024-10-17. Many financial entities subject to both. Cozystack architecture maps to both."
  - q: "How does DORA Article 24 affect cloud providers?"
    a: "Article 24 mandates written contracts including incident reporting, audit rights, exit strategies, BCP support. Critical cloud providers may be subject to direct ESA supervision. Open-source upstream + customer-controlled hardware (Cozystack pattern) reduces third-party risk surface relative to hyperscaler ICT services."
  - q: "What's the timeline for a DORA-aligned platform?"
    a: "Aenix Platform Readiness Assessment (5-10 days, fixed-price) produces DORA gap analysis + roadmap. Full alignment typically 6-12 months. Critical financial entities should be in active alignment now (regulation in force)."

customer_evidence:
  logos:
    # Default — empty; bank cases NDA-protected until mid-2027.
    # Hosting customers may be re-used after Timur sign-off per use:
    # - alt: "GoHost.kz"
    #   src: "/img/logos/gohost.svg"
    #   url: "https://gohost.kz/"
  quote:
    # text: "TODO — replace with named DORA-engagement quote when NDA expires (expected mid-2027)."
    # author: "TBD"
    # title: "TBD"
    # company: "TBD"
---

# DORA compliance — sovereign Kubernetes platform for EU financial services

{{< seo-blocks >}}

{{< cta-row primary="Book a discovery call" primary_url="/contact/" secondary="DORA architecture deep-dive" secondary_url="/blog/2026/05/dora-article-24-cloud-architecture/" >}}

## Who this is for

- Tier-1 EU banks under DORA Article 24 critical-ICT-provider scope
- Tier-2 banks and insurance carriers building DORA-aligned cloud platforms
- Challenger banks where regulatory readiness is competitive differentiator
- Payment institutions and investment firms covered under DORA scope

## What financial services teams come to us for

[... main content sections per playbook 12-block IA ...]

## How Aenix helps

[... rest of landing content ...]

{{< customer-evidence >}}

{{< seo-faq >}}

{{< cta-row primary="Book a discovery call" primary_url="/contact/" >}}

---

*Aenix is the team behind [Cozystack](https://cozystack.io) — CNCF project (currently CNCF Sandbox; Incubating expected late summer 2026), Apache 2.0. Aenix commercializes Cozystack as Ænix Platform, available in five editions: Public Cloud, ISP, Enterprise, IDP, AI/ML.*
