---
title: "Cloud platform for MSPs — branded cloud product for managed-service providers"
seo_title: "White-label cloud platform for MSPs"
description: "White-label cloud for MSPs where nested tenancy is the product: your brand, your billing, your customer relationship, margin that does not compress."
related_pages: ["/services/white-label-cloud/", "/services/public-cloud-builder/", "/products/public-cloud-platform/", "/partners/", "/products/cozystack/"]
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **An MSP cloud platform lets a managed-service provider deliver white-label, hyperscaler-class cloud capabilities under its own brand instead of reselling a public hyperscaler. Ænix builds this on Cozystack, an open-source CNCF Sandbox project Ænix created and co-maintains, that runs virtual machines (via KubeVirt) and containers on one Kubernetes API, with Cilium eBPF networking, LINSTOR/DRBD storage, and a nested Tenant CRD that maps directly to a provider-to-MSP-to-customer reseller hierarchy. MSPs get a branded Cozystack Dashboard (white-labelling is an open-source Cozystack feature), billing through Ænix's proprietary WHMCS integration (part of Ænix Public Cloud Platform), and a curated service catalog. Because Cozystack is Apache 2.0 with no per-CPU or per-core licensing, MSPs avoid hyperscaler and VMware-style licensing economics while keeping full control of margin, data residency, and customer relationships.**
quick_facts:
  - label: "What it is"
    value: "A white-label, multi-tenant cloud platform that lets MSPs sell branded cloud services on open-source Cozystack instead of reselling a hyperscaler."
  - label: "Who it's for"
    value: "Mid-sized and regional MSPs, system integrators, specialty MSPs in regulated verticals, and reseller-channel partners."
  - label: "Licence"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence)"
  - label: "Multi-tier model"
    value: "Nested Tenant CRD maps to provider tenant to MSP tenant to MSP-customer tenant, with a branded Cozystack Dashboard and WHMCS-integrated billing (Ænix Public Cloud Platform)."
  - label: "Productized offering"
    value: "Pairs with Ænix Public Cloud Platform; support tiers from $1,250 per 10 nodes per month (Basic), white-label configuration support from Standard ($3,000); up to 40% partner margin on platform subscriptions and support."
faq:
  - q: "What is an MSP cloud platform?"
    a: "It is a cloud platform an MSP runs under its own brand to deliver compute, storage, and managed services to its customers. Ænix delivers it on Cozystack, so the MSP owns the customer relationship, billing, and margin rather than reselling a hyperscaler."
  - q: "How does white-label work with Cozystack?"
    a: "White-labelling is an open-source Cozystack feature: the Cozystack Dashboard self-service console carries the MSP's logo, titles, footer and favicon, and the sign-in pages show the MSP's name, so customers see the MSP's brand. Branding is set once for the whole platform; each tenant can publish its services on its own domain. Ænix support for white-label configuration starts at the Standard tier. The nested Tenant CRD provides a multi-tier hierarchy from the top-level tenant down to each MSP-customer tenant."
  - q: "Is there per-core or per-CPU licensing?"
    a: "No. Cozystack is open source under Apache 2.0, so there is no per-CPU or per-core licensing. MSPs pay for an Ænix subscription (support tiers) and services rather than capacity-based platform licences, which protects margin as customer workloads scale."
  - q: "How does billing integrate for MSPs?"
    a: "Ænix Public Cloud Platform includes a proprietary WHMCS integration module (it is not part of open-source Cozystack), so billing flows through the MSP's existing customer-management system. This supports the multi-tier reseller model where the MSP bills its own customers directly."
  - q: "Can MSPs serve regulated verticals?"
    a: "Yes. Because the platform is self-hosted on infrastructure the MSP controls, it supports data-sovereignty and residency positioning for finance, healthcare, and government customers. The MSP decides where data lives and which services to expose."
  - q: "What does an engagement cost?"
    a: "Support tiers for Ænix Public Cloud Platform subscriptions are Basic $1,250, Standard $3,000 and Plus $5,500 per 10 nodes per month (billed annually), Enterprise quoted individually; support for white-label configuration starts at Standard. Ænix Public Cloud Platform adds the reseller model and billing (WHMCS integration); partners can earn up to 40% margin on platform subscriptions and support. See the pricing page."
hreflang_de: /de/branchen/msp/
---

**Managed Service Providers (MSPs) in 2026 are asked by enterprise customers for cloud capabilities that combine MSP managed-service relationship with hyperscaler-class capabilities. Cozystack-based platform with white-label branding is the realistic path — and what Ænix delivers.**

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** — white-labelable Cozystack Dashboard, multi-tier reseller model, WHMCS-integrated billing. Support tiers from $1,250 per 10 nodes per month; white-label configuration support from Standard ($3,000). See **[Partner Program](/partners/)** for up to 40% margin on resold engagements.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/blog/2026/05/msp-cloud-platform-modernization/">MSP cloud modernization →</a>
</div>

---

## Who this is for

Mid-sized and regional MSPs, system integrators moving into managed cloud, reseller-channel partners, and specialty MSPs in regulated verticals. What they have in common is a customer relationship worth more than the margin a hyperscaler leaves them on resale.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node diagram__node--brand"><b>Provider tenant</b></div>
<div class="diagram__conn">nests</div>
<div class="diagram__node"><b>MSP tenant</b><div class="diagram__chips"><span>Branded Cozystack Dashboard</span><span>WHMCS billing</span></div></div>
<div class="diagram__conn">bills directly</div>
<div class="diagram__node"><b>MSP customer tenant</b></div>
</div>
</div>

For full engagement see **[white-label cloud services](/services/white-label-cloud/)**.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Why the tenancy model is the whole argument

An MSP reselling a hyperscaler owns the invoice and nothing else: the customer's account, quotas and support path all live in a console the MSP does not control, and the margin is whatever the partner tier allows.

Cozystack's Tenant CRD nests, so the hierarchy is the product. A top-level tenant contains the MSP tenant, which contains a tenant per MSP customer, each with its own quotas, isolation, observability scope and audit trail. The Cozystack Dashboard carries the MSP's brand across the platform, each customer tenant can publish its services on its own domain, and the Ænix WHMCS integration bills from the MSP's existing customer-management system, so the customer never sees a second vendor. Because the platform is Apache 2.0 with no per-CPU fee, the margin does not compress as customer workloads grow, and the MSP decides which services in the catalog to expose rather than inheriting someone else's.

</div>
</div>

---

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

- **[White-label cloud services](/services/white-label-cloud/)** — engagement
- **[MSP cloud modernization article](/blog/2026/05/msp-cloud-platform-modernization/)**
- **[Head of cloud guide](/for/head-of-cloud/)** — for the leader who owns the cloud product

---

*Ænix created Cozystack (CNCF Sandbox project) and co-maintains it with maintainers from other companies.*

