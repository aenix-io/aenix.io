---
title: "Cloud platform for SMB and mid-market — honest answer when Cozystack fits"
description: "Cozystack is usually over-engineering below about 100 people. This page says when it is, what to use instead, and the narrow cases where it genuinely fits."
related_pages: ["/products/cozystack", "/products/public-cloud-platform/", "/partners/", "/services/platform-readiness-assessment"]
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **For SMB and small mid-market organizations — under about 100 employees, single-tenant, with simple infrastructure — Cozystack is usually over-engineering, and Aenix says so openly. Cozystack is built for service providers, regulated enterprises, and multi-tenant cloud builders who need KubeVirt VMs and containers on one Kubernetes API, Cilium eBPF networking, LINSTOR storage, and Tenant-CRD isolation. Most Aenix engagements are 200-plus engineer organizations. SMB and mid-market fit is the exception, driven by regulated-data, sovereignty, or multi-tenant-SaaS triggers rather than generic cloud-platform needs. Aenix offers a free 15-minute fit-check, a fixed-price architecture review, and recommends simpler options like Proxmox VE or hyperscaler managed services when Cozystack does not fit.**
quick_facts:
  - label: "What it is"
    value: "An honest fit guide explaining when Cozystack and Aenix make sense for SMB and mid-market organizations, and when a simpler platform is the right choice."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it is for"
    value: "Mid-market with regulated data, sovereignty pressure, an internal platform-engineering function, or a path to multi-tenant SaaS; usually not single-tenant SMB under ~50 hosts."
  - label: "How SMB engages"
    value: "Typically through an Aenix Partner (regional MSP or hosting provider) running Ænix Public Cloud Platform; direct Aenix engagement is rarely a fit at SMB scale."
  - label: "First step"
    value: "Free 15-minute fit-check call, then an optional fixed-price 5-10 day architecture review before any implementation."
faq:
  - q: "Is Cozystack a good fit for a small business?"
    a: "Usually not. For single-team, single-tenant SMB under roughly 50 hosts with no platform-engineering function, Cozystack is over-engineering. Simpler options such as Proxmox VE, hyperscaler managed services, or providers like Hetzner and OVHcloud are typically the better fit."
  - q: "When does Cozystack make sense for a mid-market company?"
    a: "When there is regulated data, specific sovereignty pressure, an internal platform-engineering function, a move toward multi-tenant SaaS with 100-plus customers, or a clear cost trigger at scale. A discovery call confirms whether Cozystack fits or whether something simpler is right."
  - q: "How does an SMB buy Ænix Platform?"
    a: "Most SMB customers consume cloud as a product from an Aenix Partner (a regional MSP or hosting provider) running Ænix Public Cloud Platform underneath. Direct engagement with Aenix is rarely the right fit at SMB scale."
  - q: "What does Aenix charge for Ænix Platform?"
    a: "Ænix Platform pricing starts at Basic $1,250/month for 10 nodes, then Standard $3,000, Plus $5,500, and Enterprise (custom). Cozystack itself is open source under Apache 2.0 with no license fees."
  - q: "Why does Aenix tell SMBs not to use Cozystack?"
    a: "Cozystack is open source and Aenix does not sell licenses, so building something a customer does not need would damage trust. Being honest upfront and engaging only on right-fit projects protects both the customer and Aenix's reputation."
  - q: "What does the free fit-check call cover?"
    a: "A 15-minute, no-pressure conversation where Aenix gives an honest answer on whether Cozystack fits your situation. If it does not, you get a recommendation for a simpler alternative; if it might, the next step is an optional fixed-price architecture review."
hreflang_de: /de/branchen/mittelstand/
---

**Cozystack is purpose-built for service providers, regulated enterprises, and multi-tenant cloud builders. For SMB and small mid-market organizations (under ~100 employees, single-tenant, simple infrastructure), Cozystack is over-engineering. The honest answer matters more than the sales pitch.**

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** — but **only via an Ænix [Partner](/partners/)** (regional MSP / hosting provider). SMB customers consume cloud as a product from the partner, who runs Ænix Platform underneath. Direct Ænix engagement is rarely fit at SMB scale.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>SMB customer</b></div>
<div class="diagram__conn">consumes cloud from</div>
<div class="diagram__node"><b>Ænix Partner</b><div class="diagram__chips"><span>Regional MSP</span><span>Hosting provider</span></div></div>
<div class="diagram__conn">runs</div>
<div class="diagram__node diagram__node--brand"><b>Ænix Public Cloud Platform</b></div>
<div class="diagram__conn">based on</div>
<div class="diagram__node"><b>Cozystack</b><div class="diagram__chips"><span>Apache 2.0</span><span>CNCF project</span></div></div>
</div>
</div>

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Fit-check call →</a>
</div>

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## When Cozystack does NOT fit SMB

- Single team, single product line, single tenant
- Under 50 servers / hosts
- Existing IT team smaller than 5
- No platform engineering function (and no plan to build one)
- Simple workload portfolio (a few VMs, basic databases)
- Public cloud (AWS/Azure/GCP) economics work and team is comfortable with them

In these cases, **Cozystack is over-engineering**. Realistic alternatives:

- **Hyperscaler simple deployments** — AWS/Azure/GCP with managed services
- **Proxmox VE** — for SMB on-prem virtualization
- **Hetzner / OVHcloud / similar** — managed infrastructure
- **Cloud-managed platforms** — DigitalOcean, Linode, Hostinger for very small teams

</div>
</div>

---

## When Cozystack might fit mid-market

- Mid-market with **regulated data** (banking-adjacent, healthcare-adjacent)
- Mid-market with **specific sovereignty pressure** (DACH financial-services SMB)
- Mid-market with **internal platform engineering function**
- Mid-market becoming **multi-tenant** (e.g., SaaS company with 100+ customers)
- Mid-market with **specific cost trigger** at scale (FinOps mandate)

For these cases — discovery call confirms whether Cozystack fits or whether something simpler is right.

---

## What we offer SMB / mid-market

- **15-minute fit-check call** — free, honest, no sales pressure. We tell you whether Cozystack fits or doesn't.
- **Architecture review** (5-10 days, fixed-price) — for organizations that want structured assessment before committing.
- **Phase 2 implementation** — only if assessment confirms Cozystack fits.

---

## Why we publish this honestly

Cozystack is open source. We don't sell licenses. Building you something you don't need would damage our reputation. Better to be honest upfront and engage on right-fit projects.

Customer-base evidence: most Ænix engagements are 200+ engineering organizations. SMB engagements are rare — and when they happen, they're driven by regulated-data exception cases, not generic "cloud platform" needs.

---

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

- **[When Cozystack fits SMB and mid-market — honest answer](/blog/2026/05/when-cozystack-fits-smb-and-mid-market/)**

---

*Ænix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack. We engage on projects where the architecture genuinely fits.*

