---
title: "How to build a sovereign cloud — playbook for EU and Central Asia in 2026"
description: "Long-form companion to sovereign cloud builder services page. What it takes to build a sovereign cloud product that actually satisfies sovereignty mandates..."
date: "2026-05-01"
author: "Aenix Team"
type: "tutorial"
topics: ["DORA", "NIS2", "Sovereignty", "Financial Services", "Backup & DR", "Observability"]
language: "en"
companion_landing: "/services/sovereign-cloud-builder/"
quiz:
  title: "Test yourself: building a sovereign cloud"
  questions:
    - q: "How many requirements define \"real\" sovereignty in the article?"
      options:
        - { text: "Eight criteria across residency, keys, and supply chain", correct: true }
        - { text: "Two criteria: residency and encryption", correct: false }
        - { text: "Three criteria: residency, keys, audit", correct: false }
      explanation: "Eight requirements: residency, customer-controlled keys, OSS foundation, supplier-chain transparency, air-gap option, audit completeness, no phone-home, sovereign operational independence. A product that doesn't satisfy all eight will fail under regulator audit."
    - q: "Which French sovereign-cloud certification is named?"
      options:
        - { text: "BSI C5 (German cloud security catalogue)", correct: false }
        - { text: "DORA (EU financial-sector regulation)", correct: false }
        - { text: "SecNumCloud (ANSSI certification)", correct: true }
      explanation: "SecNumCloud is France's strict sovereign requirement. BSI C5 is Germany's cloud security catalogue. EUCS is the emerging EU-wide framework."
    - q: "What is the typical end-to-end timeline for building a sovereign cloud product to first customer GA?"
      options:
        - { text: "Three to six weeks of focused work", correct: false }
        - { text: "Twelve to thirty months from project start", correct: true }
        - { text: "Five to ten years of phased build-out", correct: false }
      explanation: "Discovery + assessment 4-8 weeks; architecture + procurement readiness 2-4 months; phase-2 platform build 8-24 months including certification work; customer onboarding ongoing. Total elapsed: 12-30 months."
    - q: "Which Cozystack feature is NOT named as supporting sovereign-cloud builders?"
      options:
        - { text: "Mandatory phone-home telemetry", correct: true }
        - { text: "Tenant CRD multi-tenancy", correct: false }
        - { text: "WHMCS billing integration", correct: false }
        - { text: "Air-gap install support", correct: false }
      explanation: "Cozystack has no phone-home by default — telemetry is opt-in. The article explicitly lists this as a sovereign-friendly property. Tenant CRD, cozyportal, WHMCS billing, air-gap, VictoriaMetrics + VictoriaLogs, and Cilium are the named sovereign-friendly features."
    - q: "For Pattern 2 (managed sovereign cloud), what is the trade-off?"
      options:
        - { text: "Maximum sovereignty with maximum operational footprint", correct: false }
        - { text: "Operational simplification with substantive sovereignty", correct: true }
        - { text: "No real sovereignty guarantees, just marketing", correct: false }
      explanation: "Pattern 2: cloud-provider hardware + sovereign jurisdiction + customer-controlled keys + transparent supply chain. Operational simplification with substantive sovereignty. Right for most regulated enterprise workloads. Pattern 1 (full on-prem) is for the most sensitive workloads."
---

**Long-form companion to [sovereign cloud builder services page](/services/sovereign-cloud-builder). What it takes to build a sovereign cloud product that actually satisfies sovereignty mandates — architecturally, operationally, and procurementally.**

Sovereign cloud is no longer a niche topic. EU member-state mandates, Kazakhstan procurement-portal sovereignty clauses, and several APAC initiatives have made sovereignty a market category. Hyperscaler "sovereign" regions try to address this but face structural limitations (US-vendor relationship, control-plane dependencies).

The opportunity for purpose-built sovereign cloud products is real — but the engineering, certification, and operational work is non-trivial.

## What sovereignty actually means

Sovereignty is more than data residency. The full requirements:

1. **Data residency at every layer** — production, backup, observability, CI/CD, telemetry
2. **Encryption with customer-controlled keys** — HSM, documented rotation, emergency access procedures
3. **Open-source platform foundation** — transparency and exit-readiness
4. **Supplier-chain transparency** — to second hop minimum
5. **Air-gap option** for the most sensitive workloads
6. **Audit-trail completeness** in regulator-consumable formats
7. **No phone-home telemetry** — opt-in only
8. **Operational independence** — sovereign cloud team under sovereign jurisdiction

A "sovereign cloud" product that doesn't satisfy all of these substantively will fail under regulator audit.

## Specific sovereignty frameworks

Each jurisdiction has its own framework:

### EU
- **EUCS (EU Cybersecurity Certification Scheme for Cloud Services)** — emerging EU-wide framework
- **SecNumCloud** (France) — strict French sovereign requirement
- **BSI C5** (Germany) — German cloud security catalogue
- **DORA** — financial-services-specific, applies to cloud providers serving banks
- **NIS2** — broader cybersecurity, applies to cloud providers as essential entities

### Central Asia
- **Kazakhstan** — procurement-mandated sovereignty for public-sector workloads. Active sovereign cloud market: QazCloud, Clever Cloud, regional telco sovereign cloud product launches.
- **Other CIS** — various national frameworks emerging

### Other regions
- **France SecNumCloud** outside France: increasingly referenced
- **APAC** — Singapore IM8, India MeitY, Australia IRAP, etc.

## Architectural patterns for sovereign cloud

### Pattern 1: full on-prem sovereign cloud
Customer hardware, customer-operated, customer-controlled at every layer. Maximum sovereignty; maximum operational footprint. Right for the most sensitive workloads (classified, defence, banking core).

### Pattern 2: managed sovereign cloud
Cloud provider hardware + sovereign jurisdiction + customer-controlled keys + transparent supply chain. Operational simplification with substantive sovereignty. Right for most regulated enterprise workloads.

### Pattern 3: hybrid sovereign + non-sovereign
Critical-function workloads on sovereign cloud; non-critical on hyperscaler. Common pattern in financial services.

### Pattern 4: edge sovereign cloud
Sovereign cloud distributed to edge sites within jurisdiction. Right for workloads that need both sovereignty and edge proximity (IoT, telco).

## Cozystack as sovereign cloud foundation

Cozystack is open-source (Apache 2.0), CNCF Project-governed (community-governed roadmap), supports air-gap deployment, customer-controlled encryption keys, and audit-trail completeness.

Specifically for sovereign cloud builders:
- Multi-tenant Tenant CRD model — for customer-facing sovereign cloud product
- Cozyportal — customer-facing self-service surface
- WHMCS billing integration — for subscription customer-facing offering
- Air-gap install supported and documented
- VictoriaMetrics + VictoriaLogs — self-hosted observability (no SaaS dependency)
- Cilium networking — sovereignty-friendly, no proprietary network platform dependency

## Implementation timeline

A sovereign cloud product takes longer to build than a non-sovereign cloud:

- **Discovery + assessment:** 4-8 weeks
- **Architecture and procurement readiness:** 2-4 months
- **Phase 2 platform build:** 8-24 months including certification work
- **Customer onboarding:** ongoing

Total elapsed: 12-30 months from project start to first customer GA, depending on certification scope.

## Aenix engagement

Aenix builds sovereign cloud products end-to-end. EU + Central Asia teams. Open-source foundation. Procurement-ready documentation.

For details see **[sovereign cloud builder services page](/services/sovereign-cloud-builder)**.

---

*Aenix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack.*

<!-- Word count: ~1100. -->
