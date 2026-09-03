---
title: "Cloud platform for hosting providers — modernize beyond VPS, launch cloud products"
description: "Move beyond VPS to a cloud product: multi-tenant isolation, WHMCS billing in two modes, managed databases, S3 and GPU, with no per-CPU licensing on the margin."
related_pages: ["/services/public-cloud-builder", "/services/white-label-cloud", "/products/public-cloud-platform/", "/partners/", "/products/cozystack"]
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **A cloud platform for hosting providers lets a traditional shared, VPS, or dedicated-server business launch hyperscaler-class cloud products while keeping its direct customer relationships, pricing flexibility, and margin. Aenix delivers this with Cozystack, an open-source Kubernetes-native platform that runs VMs (via KubeVirt) and containers on one API, with Cilium eBPF networking, LINSTOR/DRBD storage, and Tenant-CRD multi-tenant isolation. It is productized as the Ænix Public Cloud Platform, with WHMCS-integrated billing, tenant lock and suspension, a service catalog beyond VMs (managed databases, S3, GPU), and migration tooling from VMware, OpenStack, and Virtuozzo. Apache 2.0 licensing means no per-CPU fees, so hosting margin is preserved.**
quick_facts:
  - label: "What it is"
    value: "An open-source, Kubernetes-native cloud platform that lets hosting providers launch multi-tenant cloud products beyond VPS, built on Cozystack and productized as the Ænix Public Cloud Platform."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it is for"
    value: "Traditional hosting providers, regional and sovereign cloud providers, specialty hosting (gaming, AI, financial services), and bare-metal-as-a-service providers."
  - label: "Key capabilities"
    value: "Tenant-CRD multi-tenancy, WHMCS billing integration (two modes), service catalog covering VMs, containers, managed databases, S3, and GPU, plus migration tooling from VMware, OpenStack, and Virtuozzo."
  - label: "Underlying technology"
    value: "KubeVirt for VMs and containers on one Kubernetes API, Cilium (eBPF) networking, LINSTOR/DRBD storage."
  - label: "Commercial entry"
    value: "Ænix Platform support tiers from $1,250/month; Partner Program offers up to 40% margin on resold engagements."
faq:
  - q: "Why would a hosting provider move from VPS to a Kubernetes-native cloud platform?"
    a: "Customers increasingly expect cloud capabilities competitive with hyperscalers — managed databases, object storage, GPU, and self-service. A Kubernetes-native platform adds these as a single service catalog while the provider keeps its direct customer relationship and pricing flexibility."
  - q: "Does Cozystack support both virtual machines and containers?"
    a: "Yes. Cozystack uses KubeVirt to run VMs and containers on one Kubernetes API, so a provider can serve traditional VM customers and modern container workloads from the same platform and operations team."
  - q: "How does billing integration work for hosting providers?"
    a: "The Ænix Public Cloud Platform includes WHMCS integration in two modes: the native Cozystack UI and a Cozystack Dashboard customer-facing frontend. It also supports tenant lock and suspension tied to billing status."
  - q: "Is there per-CPU or per-core licensing?"
    a: "No. Cozystack is Apache 2.0 licensed, so there is no per-CPU or per-core fee. This preserves hosting margin compared with proprietary virtualization platforms that license by socket or core."
  - q: "Can a provider migrate existing workloads from VMware, OpenStack, or Virtuozzo?"
    a: "Yes. The Ænix Public Cloud Platform ships with migration tooling from VMware, OpenStack, and Virtuozzo, allowing providers to move existing customer workloads onto the new platform."
  - q: "How is multi-tenant customer isolation handled?"
    a: "Cozystack provides production-grade isolation through a Tenant CRD, giving each customer a bounded, isolated environment on shared infrastructure — the foundation for selling cloud products to many customers safely."
hreflang_de: /de/branchen/hosting-anbieter/
---

**Hosting providers in 2026 face customer demand for cloud capabilities competitive with hyperscalers but with the customer-relationship advantages and pricing flexibility that hosting providers already have. The architectural answer is a Kubernetes-native platform with multi-tenant customer isolation, billing integration, and a service catalog beyond VMs — Cozystack's design center.**

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** — modern alternative to OpenStack for hosting providers. WHMCS-integrated billing, tenant lock/suspension, fast feature delivery, productized installer, migration tooling from VMware/OpenStack/Virtuozzo. Entry from $1,250/month support tier. Public production customers: GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy. See **[Partner Program](/partners/)** for up to 40% margin on resold engagements.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/blog/2026/05/hosting-provider-platform-modernization/">Hosting platform modernization →</a>
</div>

**See the customer portal for yourself.** The Cozystack Dashboard console is the actual Ænix Platform customer frontend, running entirely in your browser with demo data — no signup, no cluster, no setup.

<div class="cta-row">
  <a class="cta-primary" href="/demo/" target="_blank" rel="noopener">Open the live demo →</a>
</div>


---

## Who's in the audience

- Traditional hosting providers (shared, VPS, dedicated server) modernizing
- Regional cloud providers serving local sovereignty mandates
- Specialty hosting providers (gaming, AI, financial services)
- Bare-metal-as-a-service providers

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## What hosting providers come to us for

- **Modernization from VPS to cloud product** — multi-tenant Kubernetes-native platform
- **Service catalog expansion** — VMs + containers + managed databases + S3 + GPU on one platform
- **WHMCS integration** — production-ready, two integration modes
- **Customer-facing portal** — Cozystack Dashboard customizable per provider
- **Sovereign cloud product launches** — for regional markets

For sales-led engagement see **[public cloud builder](/services/public-cloud-builder/)** and **[white-label cloud](/services/white-label-cloud/)**.

</div>
</div>

---

## Why Cozystack fits hosting providers

- **Multi-tenant Tenant CRD** — production-grade customer isolation
- **WHMCS integration** — two modes (native UI + Cozystack Dashboard frontend)
- **Open-source platform** — no per-CPU licensing, hosting margin preserved
- **Service catalog** — far beyond VMs (managed DBs, S3, GPU)
- **Operational simplicity** — single platform, single team

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>WHMCS billing</b><div class="diagram__chips"><span>Two integration modes</span><span>Tenant lock/suspension</span></div></div>
<div class="diagram__conn">provisions through</div>
<div class="diagram__node diagram__node--brand"><b>Ænix Public Cloud Platform</b><div class="diagram__chips"><span>Cozystack Dashboard</span><span>Migration tooling</span></div></div>
<div class="diagram__conn">exposes</div>
<div class="diagram__node"><b>Cozystack service catalog</b><div class="diagram__chips"><span>VMs</span><span>Managed databases</span><span>S3</span><span>GPU</span></div></div>
<div class="diagram__conn">isolates customers via</div>
<div class="diagram__node"><b>Tenant CRD</b><div class="diagram__chips"><span>Production-grade isolation</span></div></div>
</div>
</div>

Production references: regional hosting providers running Ænix Public Cloud Platform; tier-1 European bank deployments under NDA until mid-2027. Closest written-up case: [a Swiss provider running a commercial public cloud across three data centres](/case-studies/sovereign-public-cloud/).

---

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

- **[Public cloud builder services](/services/public-cloud-builder/)** — engagement
- **[White-label cloud](/services/white-label-cloud/)** — branded for resellers
- **[Hosting provider platform modernization article](/blog/2026/05/hosting-provider-platform-modernization/)**

---

*Ænix is the team behind Cozystack.*

