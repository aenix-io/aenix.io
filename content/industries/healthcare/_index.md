---
title: "Sovereign Cloud for Healthcare — Data Residency & NIS2-Ready"
description: "Sovereign cloud for healthcare: NIS2-ready, GDPR special-category data residency, BYOK encryption, and sovereign AI on patient data across the EU and DACH."
date: 2026-07-01
lastmod: 2026-07-01
page_type: "industry-landing"
language: "en"
primary_keyword: "sovereign cloud for healthcare"
secondary_keywords: ["healthcare data sovereignty", "healthcare private cloud", "NIS2 healthcare"]
related_pages:
  - /solutions/data-sovereignty/
  - /solutions/nis2-compliance/
  - /solutions/sovereign-ai/
  - /industries/public-sector/
  - /products/aenix-platform/enterprise-edition/
  - /products/aenix-platform/ai-ml-edition/
  - /services/platform-readiness-assessment/
  - /resources/nis2-compliance-checklist/
  - /case-studies/sovereign-public-cloud/
hreflang_de: /de/branchen/gesundheitswesen/
service:
  type: "Sovereign Cloud for Healthcare"
  areaServed: ["EU", "DACH"]
  audience: "Healthcare"
direct_answer: |
  **A sovereign cloud for healthcare is a cloud platform where patient data physically stays inside a defined jurisdiction, encryption keys are held by the healthcare provider (BYOK), and the operating stack is auditable open source rather than an opaque hyperscaler service. It matters because health data is special-category personal data under GDPR Article 9, and hospitals, clinics, and health-insurers are in scope of NIS2 as essential entities. Aenix builds these platforms on Cozystack (a CNCF project, Apache 2.0) running on the provider's own hardware, so data residency, key custody, and audit trails are structural rather than contractual promises. It suits hospital groups, health insurers, diagnostics labs, and medical-AI teams across the EU and DACH.**
quick_facts:
  - label: "What it is"
    value: "A healthcare cloud where patient data, encryption keys, and audit trails stay under the provider's own control and jurisdiction."
  - label: "NIS2 scope"
    value: "Healthcare providers are listed as an essential-entity sector in NIS2 (Directive (EU) 2022/2555, Annex I)."
  - label: "Data classification"
    value: "Health data is special-category personal data under GDPR Article 9 — processing requires a specific legal basis and heightened safeguards."
  - label: "Data residency"
    value: "Workloads pinned to named EU / DACH regions on the provider's own or contracted hardware; no default cross-border replication."
  - label: "Encryption / key custody"
    value: "Encryption at rest and in transit with customer-held keys (BYOK); operator has no standing access to plaintext patient data."
  - label: "Platform license"
    value: "Cozystack is open source under Apache 2.0 — no per-CPU licensing, full audit of the control plane."
  - label: "Engagement timeline"
    value: "Platform Readiness Assessment in 14-28 days; full estate migration typically 9-18 months."
quick_facts_source: "[NIS2 Directive (EU) 2022/2555, EUR-Lex](https://eur-lex.europa.eu/eli/dir/2022/2555/oj), [ENISA](https://www.enisa.europa.eu/topics/cybersecurity-policy/nis-directive-new)"
faq:
  - q: "What is a sovereign cloud for healthcare?"
    a: "It is a cloud platform where patient and clinical data physically stays inside a defined jurisdiction, encryption keys are held by the healthcare organization, and the software stack is auditable open source. It gives hospitals, insurers, and labs verifiable control over health data instead of contractual assurances from a hyperscaler."
  - q: "Are healthcare providers in scope of NIS2?"
    a: "Yes. NIS2 (Directive (EU) 2022/2555) lists the health sector — including hospitals and certain medical-device and pharmaceutical actors — among its essential-entity sectors in Annex I. In-scope organizations face binding risk-management and incident-reporting obligations, with management accountability."
  - q: "How does a sovereign cloud handle GDPR special-category health data?"
    a: "Health data is special-category personal data under GDPR Article 9, so it needs a specific legal basis and stronger safeguards. A sovereign platform pins storage to a named EU region, encrypts data with customer-held keys, and produces provider-owned audit logs, so residency and access controls are demonstrable to a regulator or data-protection authority."
  - q: "Can we run medical AI on patient data without sending it to a hyperscaler?"
    a: "Yes. The AI/ML Edition runs GPU inference and training inside the same sovereign perimeter as the data, so imaging models, clinical NLP, and decision-support workloads process patient data without it leaving the provider's jurisdiction or control."
  - q: "Do you provide named healthcare customer references?"
    a: "Named healthcare references are not yet public — health engagements are NDA-protected. We share an anonymized sovereign public-cloud case study as an architectural evidence pattern, and healthcare logos will be added as permissions land."
  - q: "What does an engagement look like and how long does it take?"
    a: "The entry point is a Platform Readiness Assessment covering sovereignty, NIS2 posture, cost, and platform engineering, delivered in 14-28 days. It produces a written report and a Phase 2 implementation roadmap. Full-estate migration typically runs 9-18 months depending on scope."
---

<!-- BLOCK 1: HERO -->

# Sovereign cloud for healthcare

**Hospitals, health insurers, diagnostics labs, and medical-AI teams handle the most sensitive personal data in the economy under two hard constraints: GDPR special-category obligations and NIS2 essential-entity duties. The architectural answer is not "a healthcare SaaS in someone else's cloud" — it's a sovereign platform where data residency, encryption-key custody, and audit trails are structural. Aenix builds and operates these platforms on [Cozystack](/products/cozystack/), running production healthcare workloads on the provider's own hardware.**

> **Pairs with:** **[Ænix Platform Enterprise Edition](/products/aenix-platform/enterprise-edition/)** for the regulated cloud foundation; **[AI/ML Edition](/products/aenix-platform/ai-ml-edition/)** for medical imaging, clinical NLP, and decision-support AI on patient data. Free [NIS2 Compliance Checklist →](/resources/nis2-compliance-checklist/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a discovery call</a>
  <a class="cta-secondary" href="/solutions/data-sovereignty/">Data sovereignty →</a>
</div>

---


---

## What healthcare teams come to us for

The four most-common entry points:

- **Healthcare data sovereignty** — patient records, imaging archives, and genomic data that must stay in-jurisdiction with provider-held keys. See **[Data sovereignty](/solutions/data-sovereignty/)**.
- **NIS2 readiness for the health sector** — essential-entity risk management, incident reporting, and supply-chain controls. See **[NIS2 compliance](/solutions/nis2-compliance/)**.
- **Sovereign AI on clinical data** — imaging models, clinical NLP, and decision support that cannot send patient data to a hyperscaler. See **[Sovereign AI](/solutions/sovereign-ai/)**.
- **Public / regulated infrastructure alignment** — shared patterns with public health bodies and the wider public sector. See **[Public sector](/industries/public-sector/)**.

Most engagements combine two or more of these triggers.

---

## Why healthcare needs a sovereign architecture, not a compliance checkbox

Health data is the highest-friction data class in European regulation, and two frameworks converge on it.

**GDPR special-category data.** Under [Article 9 of the GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj), data concerning health is special-category personal data. Processing is prohibited unless a specific condition applies, and even then providers must demonstrate heightened technical and organizational safeguards — encryption, access control, and documented residency. A generic hyperscaler contract asserts these controls; a sovereign platform lets you prove them, because the keys and the audit logs never leave your custody.

**NIS2 essential-entity duties.** The health sector is an essential-entity sector under [NIS2 (Directive (EU) 2022/2555)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj), Annex I. In-scope hospitals and health organizations carry binding risk-management, supply-chain-security, and incident-reporting obligations, with accountability at management level. [ENISA](https://www.enisa.europa.eu/topics/cybersecurity-policy/nis-directive-new) provides the reference guidance national authorities build on. A platform whose control plane is auditable open source shortens the distance between "we operate securely" and "here is the evidence."

**Data residency and key custody.** On a sovereign platform, workloads are pinned to named EU or DACH regions on hardware the provider owns or contracts directly — there is no default cross-border replication to a US-owned parent company. Encryption uses customer-held keys (BYOK), so the operator has no standing path to plaintext patient data.

**Sovereign AI on patient data.** Medical AI is where sovereignty and economics collide: imaging and clinical-language models want GPUs, but the data cannot leave the perimeter. Running GPU inference and training inside the same platform as the data — rather than shipping records to an external AI API — keeps special-category data in-jurisdiction while still delivering modern model performance.

---

## How Aenix engages with healthcare organizations

The standard engagement runs as a **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with workstreams weighted for the healthcare context:

- **Sovereignty + NIS2 workstream** — data-residency mapping, GDPR Article 9 safeguards, encryption and key-custody posture, incident-reporting readiness, supply-chain-security review.
- **Platform engineering workstream** — a multi-tenant Kubernetes-native foundation with isolation between clinical, administrative, and research workloads, plus golden paths for internal delivery teams.
- **AI infrastructure workstream** (where applicable) — sovereign GPU architecture for imaging, clinical NLP, and decision-support models that must process patient data in-perimeter.
- **Cost workstream** — an honest TCO model and repatriation candidates for sustained workloads where public-cloud economics no longer fit.

Output is a written report aligned with regulator dialog plus a Phase 2 implementation roadmap.

---

## Evidence pattern

We do not publish named healthcare customers — health engagements are NDA-protected until permissions land. As an architectural evidence pattern, see our anonymized **[sovereign public cloud case study](/case-studies/sovereign-public-cloud/)**: a multi-tenant platform running regulated workloads with full data residency and provider-held keys — the same structural pattern a hospital group or health insurer would deploy.

{{< placeholder-logos count="4" label="Healthcare customer logos (pending permission)" >}}

---


---

*Aenix is the team behind [Cozystack](https://cozystack.io) — a CNCF project (Sandbox today; Incubating expected late summer 2026), Apache 2.0. Aenix commercializes Cozystack as Ænix Platform, available in five editions: Public Cloud, ISP, Enterprise, IDP, and AI/ML.*
