---
title: "NIS2 Compliance Cloud Architecture Checklist — download free"
seo_title: "NIS2 Compliance Checklist for Cloud Architecture"
primary_keyword: "NIS2 compliance checklist"
secondary_keywords:
  - "NIS2 checklist"
  - "NIS2 Article 21 checklist"
  - "NIS2 cloud infrastructure requirements"
description: "A free 35-point checklist for essential and important entities subject to NIS2. Covers Article 21 risk-management measures, Article 23 reporting, and more."
type: "page"
related_pages:
  - /solutions/nis2-compliance/
  - /resources/dora-compliance-checklist/
  - /products/private-cloud-platform/
hreflang_de: /de/ressourcen/nis2-compliance-checkliste/
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **The NIS2 Compliance Cloud Architecture Checklist is a free 35-point self-assessment for essential and important entities subject to the EU NIS2 Directive. It maps cloud and platform architecture against Article 21 risk-management measures across 10 areas, Article 23 incident-reporting timelines (24-hour early warning, 72-hour notification, 1-month final report), supply-chain security, business continuity (RTO/RPO), MFA, encryption, and vulnerability management. It is aimed at security, compliance, and platform teams at NIS2-regulated organizations and the ICT providers serving them. Ænix uses this checklist during NIS2-aligned readiness engagements; its Ænix Private Cloud Platform, built on the CNCF Sandbox project Cozystack, supports these controls with Tenant CRD network segmentation enforced by Cilium, opt-in volume encryption, and API audit logging with configurable retention that you can ship to your own store. Ænix claims no NIS2 certification: compliance belongs to the regulated entity.**
quick_facts:
  - label: "What it is"
    value: "A free 35-point checklist to assess cloud and platform architecture against the EU NIS2 Directive."
  - label: "Who it is for"
    value: "Essential and important entities under NIS2, plus the ICT third-party providers serving them."
  - label: "What it covers"
    value: "Article 21 risk-management (10 areas), Article 23 incident reporting, supply-chain security, business continuity, MFA, encryption, and vulnerability management."
  - label: "Format"
    value: "Free PDF, 35 control points in five sections, delivered by email"
  - label: "Time to complete"
    value: "Typically 1-3 hours with your security and platform teams"
  - label: "Pairs with"
    value: "Ænix Private Cloud Platform — built to support NIS2 work: Cilium segmentation, opt-in volume encryption, audit logging with configurable retention. Compliance stays with the regulated entity."
faq:
  - q: "Who must comply with NIS2?"
    a: "NIS2 applies to medium and large entities in the sectors of Annex I (for example energy, transport, banking, health, digital infrastructure, ICT service management including MSPs, public administration) and Annex II (for example postal, manufacturing of critical products, digital providers, research), classified as essential or important. Their suppliers feel it through the supply-chain security measure of Article 21(2)(d). The checklist covers both entities and suppliers."
  - q: "What are the NIS2 incident-reporting timelines?"
    a: "Under Article 23, regulated entities must submit an early warning within 24 hours of becoming aware of a significant incident, a fuller incident notification within 72 hours, and a final report within one month. The checklist helps you verify your architecture and processes can meet each deadline."
  - q: "Is the checklist free, and what do I get?"
    a: "Yes. It is a free downloadable PDF with 35 points covering Article 21 risk-management measures across 10 areas, Article 23 reporting timelines, supply-chain security to at least the second hop, business continuity with documented RTO/RPO, MFA, encryption posture, and vulnerability management."
  - q: "How does Ænix help with NIS2 compliance?"
    a: "Ænix uses this checklist during NIS2-aligned readiness engagements and offers NIS2 compliance services for deeper work. The platform supplies controls, not compliance: NIS2 obligations sit with the essential or important entity, and no platform can hold them. Ænix Private Cloud Platform, built on the CNCF Sandbox project Cozystack, supports relevant controls through Tenant CRD segmentation with Cilium NetworkPolicy, opt-in volume encryption, and API audit logging with configurable retention (30 days by default) that you can ship to your own immutable store."
  - q: "What is Cozystack and how does it relate to this checklist?"
    a: "Cozystack is an open-source, Apache 2.0 cloud platform and CNCF Sandbox project that runs VMs and containers on one Kubernetes API via KubeVirt, with Cilium (eBPF) networking and LINSTOR/DRBD storage. Ænix created it and co-maintains it with maintainers from other companies; Ænix Private Cloud Platform is built on it. The checklist itself is platform-neutral."
---

**A 35-point checklist for essential and important entities subject to NIS2. Covers Article 21 risk management measures (10 areas), Article 23 incident reporting timelines, supply-chain transparency, business continuity, MFA, encryption, and architecture-level controls. Used by Ænix during NIS2-aligned readiness engagements.**

> **Pairs with:** **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** — built to supply the platform-side controls NIS2 work draws on: Tenant CRD with Cilium NetworkPolicy for segmentation, opt-in volume encryption (LUKS on LINSTOR), and audit logging with configurable retention that you can ship to your own immutable store.

<div class="lead-magnet-form">
{{< pipedrive-form type="lead-magnet" resource="nis2-compliance-checklist" >}}
<p class="lead-magnet-form__note">Download the NIS2 checklist (PDF)</p>
</div>

---

## What's in the checklist

Five sections, 35 architectural control points:

1. **Risk management** (10 points) — the Article 21(2)(a)-(j) cybersecurity risk-management measures, plus the management-body accountability of Article 20
2. **Incident handling and reporting** (6 points) — Article 23(4) readiness: 24-hour early warning, 72-hour incident notification, one-month final report
3. **Business continuity and vulnerability management** (7 points) — documented and tested RTO/RPO, patch SLA, SAST/DAST in CI, a published vulnerability disclosure process (see Article 12)
4. **Supply chain and cryptography** (6 points) — Article 21(2)(d) supplier security to the second hop, Article 21(2)(h) cryptography and encryption posture
5. **Access control and audit** (6 points) — Article 21(2)(i)-(j) access control and MFA, plus Article 21(2)(f) effectiveness assessment

The PDF closes with architecture-level recommendations and a generic reference pattern; they describe what the Ænix platforms actually provide: volume encryption at rest is opt-in (LINSTOR and LUKS) with a passphrase you hold, and the key-management process is designed with you; audit logs have configurable retention (default 30 days) and can be shipped to your own immutable store; DR is backup and restore with Velero plus rehearsed runbooks, with no SRM-style orchestrated cross-site failover. The next step it offers is the [Platform Readiness Assessment](/services/platform-readiness-assessment/) of 14 or 28 days.

---

## Who uses this

- Essential and important entities in Annex I sectors (energy, transport, banking, health, digital infrastructure, ICT service management, public administration)
- Important entities in Annex II sectors (postal, manufacturing of critical products, digital providers, research)
- Suppliers and ICT providers serving them, under Article 21(2)(d)

---

## After downloading

The checklist gives you the working surface to assess your architecture against NIS2. For deeper engagement see **[NIS2 compliance services](/solutions/nis2-compliance/)**.

---

## Related resources

- **[NIS2 compliance services](/solutions/nis2-compliance/)** — full engagement
- **[NIS2 platform evidence](/compliance/nis2/)** — Article 21(2)(a)–(j) mapped to what the platform provides and what stays with you
- **[DORA compliance checklist](/resources/dora-compliance-checklist/)** — for financial services
- **[Data sovereignty services](/solutions/data-sovereignty/)** — adjacent

---

*Ænix created Cozystack (a CNCF Sandbox project) and co-maintains it with maintainers from other companies. On top of it, Ænix offers three platforms — Public Cloud, Private Cloud and AI.*
