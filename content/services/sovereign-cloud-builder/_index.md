---
title: "Sovereign cloud builder — design and ship a sovereign cloud product for regulated markets"
seo_title: "Sovereign cloud builder for regulated markets"
description: "Build a sovereign cloud product on open-source Cozystack: opt-in encryption, supplier transparency, air-gapped option and audit logs for regulators."
related_pages:
  - /solutions/data-sovereignty/
  - /industries/public-sector/
  - /products/private-cloud-platform/
  - /products/public-cloud-platform/
  - /products/cozystack/
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **A sovereign cloud builder designs and ships a substantively sovereign cloud product for regulated markets, going beyond regional data residency to deliver opt-in volume encryption at rest (LINSTOR and LUKS) with a passphrase you hold and a key-management process designed with you, supplier-chain transparency, audit logs with configurable retention, and an air-gap deployment option. It serves national and regional government IT services, telcos launching sovereign-cloud product lines, regional operators in jurisdictions with sovereignty mandates, and quasi-public entities. Ænix builds these products on Cozystack, an open-source Apache 2.0 CNCF project that runs virtual machines via KubeVirt and containers on a single Kubernetes API, with Cilium eBPF networking, LINSTOR/DRBD storage, and Tenant CRD multi-tenancy. Because the foundation is open source with no phone-home telemetry, the resulting product can demonstrate transparency and regulator-aligned operations that hyperscaler "sovereign" regions cannot match substantively.**

quick_facts:
  - label: "What it is"
    value: "A service engagement that designs and ships a substantively sovereign cloud product for regulated markets, not just a regionally hosted one."
  - label: "Licence"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence)"
  - label: "Who it's for"
    value: "National/regional government IT services, telcos, regional operators in sovereignty-mandated jurisdictions, and quasi-public entities (transport, energy, banking-adjacent)."
  - label: "Engagement timeline"
    value: "Discovery call and a 14- or 28-day readiness assessment, then a 3-6 month pilot and 9-18 months to full multi-region production; optional managed operation."
  - label: "Key capability"
    value: "Opt-in volume encryption at rest (LINSTOR and LUKS) with a passphrase you hold and a key-management process designed with you, supplier-chain transparency, audit logs with configurable retention (default 30 days), air-gapped deployment, and no mandatory telemetry."
  - label: "Standards"
    value: "Sovereign-cloud frameworks such as BSI C5, SecNumCloud, and EUCS addressed during discovery; RFI/RFP accepted via EU TED, national e-procurement portals, and Kazakhstan platforms (goszakup.gov.kz, mitwork.kz)."

faq:
  - q: "What makes a cloud substantively sovereign rather than just regionally hosted?"
    a: "Beyond data residency, substantive sovereignty requires documented encryption-key custody (who holds the keys, rotation, emergency access), an open-source platform foundation for audit-readiness, supplier-chain transparency to at least the second hop, an air-gap deployment option, complete regulator-consumable audit trails, and no phone-home telemetry."
  - q: "Why build a sovereign cloud on Cozystack instead of a hyperscaler sovereign region?"
    a: "Cozystack is open source under Apache 2.0, so the platform can be inspected and audited end to end, runs with no mandatory phone-home telemetry, and supports air-gap deployment. Hyperscaler sovereign regions cannot match these transparency and custody properties substantively because their control planes remain proprietary."
  - q: "Who typically engages Ænix to build a sovereign cloud product?"
    a: "National and regional government IT services offering shared sovereign cloud, telcos launching a sovereign-cloud product line, regional operators in jurisdictions with explicit sovereignty mandates, and quasi-public entities in transport, energy, and banking-adjacent sectors building sectoral sovereign clouds."
  - q: "How long does a sovereign cloud build take?"
    a: "Engagements start with a discovery call and a 14- or 28-day readiness assessment. National and multi-region programmes then run a 3-6 month pilot, followed by 9-18 months to full multi-region production, covering the platform, sovereignty controls and procurement-ready documentation. Managed operation afterwards is optional."
  - q: "Which sovereignty frameworks and procurement channels are supported?"
    a: "Specific requirements such as BSI C5, SecNumCloud, and EUCS are addressed during discovery. Ænix accepts RFI/RFP through EU TED and national e-procurement portals, and through Kazakhstan platforms including goszakup.gov.kz, mitwork.kz, zakup.sk.kz, and the Unified Procurement Platform; other jurisdictions are handled per case."
  - q: "What is the technical foundation of the platform?"
    a: "The product is built on Cozystack, which runs virtual machines via KubeVirt and containers on a single Kubernetes API, with Cilium eBPF networking, LINSTOR/DRBD storage, and Tenant CRD multi-tenancy. Air-gapped installation is part of open-source Cozystack; Ænix supports it from the Plus tier."
hreflang_de: /de/dienstleistungen/sovereign-cloud-builder/
---

**Sovereign cloud is a procurement-mandated reality in 2026 across EU member states, Kazakhstan, and several APAC jurisdictions. Building one means designing for substantive sovereignty — not just marketing claims — including encryption-key custody, supplier-chain transparency, audit-readiness, and regulator-aligned operational model.**

Ænix builds sovereign cloud products on Cozystack for governments, quasi-public entities, and regional operators serving sovereignty-mandated markets.

> **Pairs with:** **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** for sovereign clouds that need opt-in volume encryption with a passphrase you hold and air-gap support; **[Public Cloud Platform](/products/public-cloud-platform/)** for large sovereign-cloud product launches at hyperscaler-adjacent scale.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/blog/2026/05/build-sovereign-cloud-eu-and-central-asia/">Read playbook →</a>
</div>

---

## Who builds a sovereign cloud product

- **National / regional government IT services** offering shared sovereign cloud
- **Telcos** launching sovereign-cloud product line
- **Regional operators** in jurisdictions with explicit sovereignty mandates
- **Quasi-public entities** (transport, energy, banking-adjacent) building sectoral sovereign cloud

---

## What sovereign cloud actually requires

Beyond regional residency:

- **Documented encryption-key custody** — who holds the keys, rotation, emergency access
- **Open-source platform foundation** — for transparency and audit-readiness
- **Supplier-chain transparency** to second hop minimum
- **Air-gap deployment option** for the most sensitive workloads
- **Audit-trail completeness** in regulator-consumable formats
- **No phone-home telemetry** — opt-in only

These are the properties a sovereign-cloud product has to demonstrate. Ænix designs them with you during the build; the platform's current encryption and logging mechanics are documented on the [compliance evidence pages](/compliance/).

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Engagement structure

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Discovery + procurement-readiness</b><div class="diagram__chips"><span>BSI C5</span><span>SecNumCloud</span><span>EUCS</span></div></div>
<div class="diagram__conn">scopes</div>
<div class="diagram__node diagram__node--brand"><b>Ænix sovereign cloud build</b><div class="diagram__chips"><span>Sovereignty controls</span><span>Procurement-ready docs</span></div></div>
<div class="diagram__conn">delivered on</div>
<div class="diagram__node"><b>Cozystack platform</b><div class="diagram__chips"><span>KubeVirt VMs</span><span>Containers</span><span>One Kubernetes API</span></div></div>
<div class="diagram__conn">runs on</div>
<div class="diagram__node"><b>Customer hardware / jurisdiction</b><div class="diagram__chips"><span>Air-gap option</span><span>Opt-in volume encryption</span></div></div>
</div>
</div>

- **Discovery call** (30 minutes, free) and **readiness assessment** (14 or 28 days, fixed price), with procurement readiness in scope
- **Pilot** (3-6 months), then **build** (9-18 months to full multi-region production) — platform, sovereignty controls and procurement-ready documentation
- **Managed operation (optional)**

For specific sovereign-cloud requirements (BSI C5, SecNumCloud, EUCS) — discussed during discovery.

</div>
</div>

---

## Procurement readiness

Ænix accepts RFI / RFP through:
- **EU member states** — TED, national e-procurement portals
- **Kazakhstan** — goszakup.gov.kz, mitwork.kz, zakup.sk.kz, Unified Procurement Platform
- **Other jurisdictions** — discussed per case

---

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

- **[Sovereign cloud playbook](/blog/2026/05/build-sovereign-cloud-eu-and-central-asia/)**
- **[Data sovereignty](/solutions/data-sovereignty/)** — adjacent solution
- **[Public sector industry](/industries/public-sector/)**
- **[Cozystack](/products/cozystack/)**

---

*Ænix created [Cozystack](https://cozystack.io), a CNCF project and CNCF Certified Kubernetes distribution, and maintains it with maintainers from other companies. Ænix sells three platforms built on it — Public Cloud, Private Cloud and AI — plus support and services.*

