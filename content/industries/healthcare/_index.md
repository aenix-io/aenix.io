---
title: "Sovereign Cloud for Healthcare — Data Residency & NIS2"
seo_title: "Sovereign cloud for healthcare: residency and NIS2"
description: "Sovereign cloud for healthcare: built to support NIS2, GDPR special-category data residency, opt-in encryption, and sovereign AI on patient data in the EU."
date: 2026-07-01
lastmod: 2026-07-01
page_type: "industry-landing"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "sovereign cloud for healthcare"
secondary_keywords: ["healthcare data sovereignty", "healthcare private cloud", "NIS2 healthcare"]
related_pages:
  - /solutions/data-sovereignty/
  - /solutions/nis2-compliance/
  - /solutions/sovereign-ai/
  - /industries/public-sector/
  - /products/private-cloud-platform/
  - /products/ai-platform/
  - /services/platform-readiness-assessment/
  - /resources/nis2-compliance-checklist/
  - /case-studies/sovereign-public-cloud/
hreflang_de: /de/branchen/gesundheitswesen/
service:
  type: "Sovereign Cloud for Healthcare"
  areaServed: ["EU", "DACH"]
  audience: "Healthcare"
direct_answer: |
  **A sovereign cloud for healthcare is a cloud platform where patient data physically stays inside a defined jurisdiction, runs on hardware the healthcare organization owns or contracts directly, and the operating stack is auditable open source rather than an opaque hyperscaler service. It matters because health data is special-category personal data under GDPR Article 9, and healthcare providers are an essential-entity sector under NIS2 (Annex I). Ænix builds these platforms on Cozystack (a CNCF Sandbox project, Apache 2.0) running on the provider's own hardware, so data residency and audit trails are properties of the architecture rather than contractual promises. It suits hospital groups, health insurers, diagnostics labs, and medical-AI teams across the EU and DACH.**
quick_facts:
  - label: "What it is"
    value: "A healthcare cloud where patient data and audit trails stay under the provider's own control and jurisdiction."
  - label: "NIS2 scope"
    value: "Healthcare providers are listed as an essential-entity sector in NIS2 (Directive (EU) 2022/2555, Annex I)."
  - label: "Data classification"
    value: "Health data is special-category personal data under GDPR Article 9 — processing requires a specific legal basis and heightened safeguards."
  - label: "Data residency"
    value: "Workloads pinned to named EU / DACH regions on the provider's own or contracted hardware; no default cross-border replication."
  - label: "Encryption / key custody"
    value: "Volume encryption (LUKS on LINSTOR) is available opt-in per storage class; key handling is designed with you during the build."
  - label: "Cozystack licence"
    value: "Cozystack is open source under Apache 2.0 — no per-CPU licensing, full audit of the control plane."
  - label: "Engagement timeline"
    value: "Fixed-price Platform Readiness Assessment (14 or 28 days), then a 3–12 month build depending on scope."
quick_facts_source: "[NIS2 Directive (EU) 2022/2555, EUR-Lex](https://eur-lex.europa.eu/eli/dir/2022/2555/oj), [ENISA](https://www.enisa.europa.eu/topics/state-of-cybersecurity-in-the-eu/cybersecurity-policies/nis-directive-2)"
faq:
  - q: "What is a sovereign cloud for healthcare?"
    a: "It is a cloud platform where patient and clinical data physically stays inside a defined jurisdiction, the infrastructure is owned or directly contracted by the healthcare organization, and the software stack is auditable open source. It gives hospitals, clinics, and labs verifiable control over health data instead of contractual assurances from a hyperscaler."
  - q: "Are healthcare providers in scope of NIS2?"
    a: "Yes. NIS2 (Directive (EU) 2022/2555) lists the health sector — including hospitals and certain medical-device and pharmaceutical actors — among its essential-entity sectors in Annex I. In-scope organizations face binding risk-management and incident-reporting obligations, with management accountability."
  - q: "How does a sovereign cloud handle GDPR special-category health data?"
    a: "Health data is special-category personal data under GDPR Article 9, so it needs a specific legal basis and stronger safeguards. A sovereign platform pins storage to a named EU region, can encrypt volumes (opt-in per storage class), and produces audit logs the provider can ship to its own store, so residency and access controls are demonstrable to a regulator or data-protection authority."
  - q: "Can we run medical AI on patient data without sending it to a hyperscaler?"
    a: "Yes. The AI Platform runs GPU inference and training inside the same sovereign perimeter as the data, so imaging models, clinical NLP, and decision-support workloads process patient data without it leaving the provider's jurisdiction or control."
  - q: "Do you provide named healthcare customer references?"
    a: "No. We do not publish healthcare customer names. We share an anonymized sovereign public-cloud case study as an architectural evidence pattern, and discuss references on the discovery call where customers allow it."
  - q: "What does an engagement look like and how long does it take?"
    a: "The entry point is a fixed-price Platform Readiness Assessment covering sovereignty, NIS2 posture, cost, and platform engineering, delivered in 14 or 28 days. It produces a written report and a Phase 2 implementation roadmap. The build then typically runs 3–12 months depending on scope."
---

<!-- BLOCK 1: HERO -->

**Hospitals, diagnostics labs, health insurers, and medical-AI teams handle the most sensitive personal data in the economy under GDPR special-category obligations — and healthcare providers additionally carry NIS2 essential-entity duties. The architectural answer is not "a healthcare SaaS in someone else's cloud" — it's a sovereign platform where data residency and audit trails are properties of the architecture. Ænix builds and operates these platforms on [Cozystack](/products/cozystack/), on the provider's own hardware.**

AENIX s.r.o. holds [ISO/IEC 27001:2022 certification](/compliance/iso-27001/) for its own ISMS. Security leads can start with the [CISO guide](/for/ciso/).

> **Pairs with:** **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** for the regulated cloud foundation; **[AI Platform](/products/ai-platform/)** for medical imaging, clinical NLP, and decision-support AI on patient data. Free [NIS2 Compliance Checklist →](/resources/nis2-compliance-checklist/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/solutions/data-sovereignty/">Data sovereignty →</a>
</div>

---

## What healthcare teams come to us for

The four most-common entry points:

- **Healthcare data sovereignty** — patient records, imaging archives, and genomic data that must stay in-jurisdiction. See **[Data sovereignty](/solutions/data-sovereignty/)**.
- **NIS2 readiness for the health sector** — essential-entity risk management, incident reporting, and supply-chain controls. See **[NIS2 compliance](/solutions/nis2-compliance/)**.
- **Sovereign AI on clinical data** — imaging models, clinical NLP, and decision support that cannot send patient data to a hyperscaler. See **[Sovereign AI](/solutions/sovereign-ai/)**.
- **Public / regulated infrastructure alignment** — shared patterns with public health bodies and the wider public sector. See **[Public sector](/industries/public-sector/)**.

Most engagements combine two or more of these triggers.

---

## Why healthcare needs a sovereign architecture, not a compliance checkbox

Health data is the highest-friction data class in European regulation, and two frameworks converge on it.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Patient data</b><div class="diagram__chips"><span>GDPR Article 9 special-category</span><span>Records, imaging, genomic data</span></div></div>
<div class="diagram__conn">pinned to</div>
<div class="diagram__node diagram__node--brand"><b>Sovereign platform on Cozystack</b><div class="diagram__chips"><span>Named EU / DACH regions</span><span>Provider's own hardware</span><span>Opt-in volume encryption</span><span>Apache 2.0</span></div></div>
<div class="diagram__conn">produces</div>
<div class="diagram__node"><b>Provider-owned audit trails</b><div class="diagram__chips"><span>Demonstrable to regulators</span><span>NIS2 essential-entity evidence</span></div></div>
</div>
</div>

**GDPR special-category data.** Under [Article 9 of the GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj), data concerning health is special-category personal data. Processing is prohibited unless a specific condition applies, and even then providers must demonstrate heightened technical and organizational safeguards — encryption, access control, and documented residency. A generic hyperscaler contract asserts these controls; a sovereign platform lets you prove them, because the infrastructure and the audit logs stay in your custody.

**NIS2 essential-entity duties.** The health sector is an essential-entity sector under [NIS2 (Directive (EU) 2022/2555)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj), Annex I. In-scope hospitals and health organizations carry binding risk-management, supply-chain-security, and incident-reporting obligations, with accountability at management level. [ENISA](https://www.enisa.europa.eu/topics/state-of-cybersecurity-in-the-eu/cybersecurity-policies/nis-directive-2) provides the reference guidance national authorities build on. A platform whose control plane is auditable open source shortens the distance between "we operate securely" and "here is the evidence."

**Data residency and key custody.** On a sovereign platform, workloads are pinned to named EU or DACH regions on hardware the provider owns or contracts directly — there is no default cross-border replication to a US-owned parent company. Volume encryption (LUKS on LINSTOR) is available opt-in per storage class, with key handling designed with you during the build — see the [GDPR evidence page](/compliance/gdpr/) for what is and is not provided by default.

**Sovereign AI on patient data.** Medical AI is where sovereignty and economics collide: imaging and clinical-language models want GPUs, but the data cannot leave the perimeter. Running GPU inference and training inside the same platform as the data — rather than shipping records to an external AI API — keeps special-category data in-jurisdiction while still delivering modern model performance.

### What this looks like for the systems you actually run

Healthcare infrastructure is not generic infrastructure, and the platform has to meet the estate where it is.

- **PACS and the imaging archive.** A PACS is a storage problem wearing a clinical badge: large immutable objects, a long legal retention period, latency that radiologists notice, and a DICOM interface everything speaks. Cozystack gives it S3-compatible object storage for the archive tier with LINSTOR/DRBD block storage for the online tier, both inside the same cluster and the same encryption boundary as the rest of the estate — so imaging is not a separate silo with its own backup story. Retention is set per bucket; the object store is not shared with a public cloud tenant you cannot name.
- **The DICOM and HL7/FHIR path.** Modality gateways, DICOM routers, integration engines and FHIR servers are mostly long-lived stateful services, often vendor-supplied as an appliance or a VM image with a support matrix that names an operating system. They run as KubeVirt VMs on the same platform as the containerized services, on the same network, with the same backup class — no second virtualization stack to license and operate alongside Kubernetes.
- **Vendor-locked clinical applications.** Every hospital has a handful of applications the vendor will only support on a specific OS and a specific hypervisor generation. These are the workloads that block a container-only platform. They stay as VMs, indefinitely, and stop being the reason a modernization stalls.
- **Imaging AI next to the imaging data.** Because inference runs as a tenant workload on the same cluster as the archive, a segmentation or triage model reads from local object storage rather than a copy shipped somewhere else — the GPU is inside the perimeter that the DPIA already covers.


---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## How Ænix engages with healthcare organizations

The standard engagement runs as a **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with workstreams weighted for the healthcare context:

- **Sovereignty + NIS2 workstream** — data-residency mapping, GDPR Article 9 safeguards, encryption and key-custody posture, incident-reporting readiness, supply-chain-security review.
- **Platform engineering workstream** — a multi-tenant Kubernetes-native foundation with isolation between clinical, administrative, and research workloads, plus golden paths for internal delivery teams.
- **AI infrastructure workstream** (where applicable) — sovereign GPU architecture for imaging, clinical NLP, and decision-support models that must process patient data in-perimeter.
- **Cost workstream** — an honest TCO model and repatriation candidates for sustained workloads where public-cloud economics no longer fit.

Output is a written report aligned with regulator dialog plus a Phase 2 implementation roadmap.

</div>
</div>

---

## Evidence pattern

We do not publish healthcare customer names. As an architectural evidence pattern, see our anonymized **[sovereign public cloud case study](/case-studies/sovereign-public-cloud/)**: a multi-tenant platform across three data centres with full data residency — the same structural pattern a hospital group would deploy. [All case studies →](/case-studies/)

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

---

*Ænix created [Cozystack](https://cozystack.io) — a CNCF Sandbox project (Incubation application in due diligence), Apache 2.0 — and co-maintains it with maintainers from other companies. On top of it Ænix offers three platforms on one engine — Public Cloud, Private Cloud and AI — that combine rather than exclude each other.*
