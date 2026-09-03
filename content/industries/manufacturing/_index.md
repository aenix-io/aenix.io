---
title: "Cloud platform for manufacturing — Industry 4.0, edge-ready, sovereign"
description: "Manufacturing in 2026 means simultaneous demands: Industry 4.0 transformation, NIS2 compliance (manufacturing of critical products is in scope), edge..."
related_pages:
  - /solutions/data-sovereignty
  - /solutions/nis2-compliance
  - /services/platform-readiness-assessment
  - /products/private-cloud-platform/
  - /products/cozystack
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **A cloud platform for manufacturing is a unified compute foundation that runs Industry 4.0 and IT/OT workloads consistently across HQ, regional sites, and production-floor edge under one operational model. It serves manufacturers in the EU, DACH, and Central Asia that must meet NIS2 compliance (manufacturing of critical products is in scope), protect industrial IP such as design data and formulations, and run AI for quality control and predictive maintenance. Aenix builds these platforms on Cozystack, an open-source CNCF project licensed under Apache 2.0 that runs virtual machines and containers on one Kubernetes API via KubeVirt, with Cilium eBPF networking, LINSTOR/DRBD storage, and Tenant-based multi-tenancy. Aenix also offers the Ænix Private Cloud Platform, the productized commercial form of that stack, plus implementation and support services.**

quick_facts:
  - label: "What it is"
    value: "A unified Cozystack-based cloud platform spanning manufacturing HQ, regional sites, and production-floor edge under one operational model"
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it is for"
    value: "Manufacturers across the EU, DACH, and Central Asia with IT/OT convergence, edge, and industrial-IP requirements"
  - label: "Regulation in scope"
    value: "NIS2 — manufacturing of critical products falls within scope"
  - label: "Key capabilities"
    value: "Air-gapped deployment for sensitive OT workloads, multi-site edge architecture, multi-tenancy for cross-BU and joint-venture separation, AI infrastructure for quality control and predictive maintenance"
  - label: "Recommended platform"
    value: "Ænix Private Cloud Platform for multi-DC and edge industrial IT/OT"

faq:
  - q: "Does a cloud platform for manufacturing help with NIS2 compliance?"
    a: "Yes. NIS2 brings manufacturing of critical products into scope. A Cozystack-based platform supports the architectural controls NIS2 expects — data sovereignty, multi-tenant isolation, and air-gapped deployment for the most sensitive OT workloads — across HQ, regional, and edge sites under one operational model."
  - q: "Can it run at the production-floor edge, not just in a central data center?"
    a: "Yes. Edge compute is treated as core, not optional. The same platform runs at HQ, regional sites, and the production floor, so Industry 4.0 workloads stay close to machinery for latency while sharing one operational model across all locations."
  - q: "How is industrial IP such as design data and formulations protected?"
    a: "The platform supports air-gapped deployment for the most sensitive workloads and Tenant-based multi-tenancy for separating business units and joint ventures. Combined with data-sovereignty controls, this keeps industrial IP confidential and within chosen jurisdictions."
  - q: "Can manufacturers run AI workloads like quality control and predictive maintenance on it?"
    a: "Yes. Cozystack provides AI infrastructure for quality control, predictive maintenance, and supply-chain optimization, including running private LLMs on industrial data so sensitive inputs never leave the organization's environment."
  - q: "What does the platform cost and is there per-core licensing?"
    a: "Cozystack is open source under Apache 2.0 with no per-CPU or per-core licensing. Aenix sells Ænix Platform tiers: Basic at $1,250/mo (10 nodes), Standard at $3,000, Plus at $5,500, and Enterprise on custom pricing for multi-DC and edge deployments."
  - q: "How does Cozystack run both VMs and containers for OT/IT convergence?"
    a: "Cozystack uses KubeVirt to run virtual machines and containers side by side on a single Kubernetes API, with Cilium eBPF networking and LINSTOR/DRBD storage. This lets legacy OT virtual machines and modern containerized IT workloads share one platform."
---

**Manufacturing in 2026 means simultaneous demands: Industry 4.0 transformation, NIS2 compliance (manufacturing of critical products is in scope), edge compute at production sites, AI-driven quality control, and increasing sovereign-cloud requirements for industrial IP. The architectural answer is a coherent platform that runs at HQ, regional sites, and production-floor edge — under one operational model.**

Ænix builds platforms for manufacturing organizations across the EU, DACH, and Central Asia.

> **Pairs with:** **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** — multi-DC + edge architecture for industrial IT/OT, NIS2 compliance for critical-product manufacturing, air-gap support for OT networks.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/solutions/data-sovereignty/">Data sovereignty →</a>
</div>

---

## What manufacturing teams come to us for

- **Edge cloud at production sites** — Industry 4.0 workloads close to machinery
- **NIS2 compliance** — manufacturing of critical products is in scope
- **Sovereign cloud for industrial IP** — design data, formulations, supply-chain data
- **AI workloads** — quality control, predictive maintenance, supply-chain optimization
- **Hybrid: cloud for analytics, edge for operations**

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Why manufacturing architecture is different

- **Edge compute is core, not optional** — production-floor latency requirements
- **Long depreciation cycles** — manufacturing equipment lasts decades; platform must work with multiple hardware generations
- **OT/IT convergence** — operations technology meeting information technology
- **Long retention** — quality, traceability, regulatory data with multi-decade requirements
- **Industrial IP protection** — design data and formulations have higher confidentiality than typical enterprise data

</div>
</div>

---

## Cozystack pattern for manufacturing

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>IT/OT workloads</b><div class="diagram__chips"><span>KubeVirt VMs</span><span>Containers</span><span>AI quality control</span><span>Predictive maintenance</span></div></div>
<div class="diagram__conn">run on</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>One Kubernetes API</span><span>Tenant multi-tenancy</span><span>Air-gapped deployment</span></div></div>
<div class="diagram__conn">deployed across</div>
<div class="diagram__node"><b>Manufacturing sites</b><div class="diagram__chips"><span>HQ</span><span>Regional sites</span><span>Production-floor edge</span></div></div>
</div>
</div>

- Multi-site operations: HQ + regional + production-floor edge under one platform
- Air-gapped deployment for the most sensitive workloads (industrial IP)
- Multi-tenant for cross-BU and joint-venture separation
- AI infrastructure for quality control and predictive maintenance

### Where the platform sits in the Purdue model

The platform lives at Levels 3 and 3.5 — site operations and the DMZ — and does not reach down into Levels 0 to 2. Controllers, PLCs, SCADA and the safety systems stay exactly where they are, on their own network, under their own change control. What runs on the platform is the layer above: MES and historians, OPC-UA collectors and unified-namespace brokers, quality-inspection inference, the data pipeline out to the corporate level, and the VM-packaged industrial applications the vendor supports on one specific OS.

The IEC 62443 framing follows from that placement: the platform is one or more zones with defined conduits into the OT network, so segmentation is a design property rather than a firewall exception list. Cilium network policy defines the conduits, Tenant CRD boundaries separate a line, a site or a joint-venture partner, and the whole thing runs air-gapped where the site security concept requires it. Component-level certification for the industrial devices remains the device vendors' obligation — that is not something an infrastructure platform can grant.

**What the floor does when the uplink dies.** This is the question that decides the architecture, so the answer should be plain: a site cluster keeps running. Control never depended on the platform in the first place, because it lives below it. The site's own workloads — the historian, the local inference for inspection, MES functions running on site — keep serving from local storage, with their state replicated inside the site rather than to headquarters. What stops is what should stop: replication upward, central dashboards refreshing, cross-site aggregation. When the link returns, buffered data drains and the site resynchronizes. Production does not wait on a WAN circuit or on a control plane in another country, which is also why a hyperscaler edge service is a poor fit for a factory.

---

## What runs on Cozystack in manufacturing

{{< clients >}}

Manufacturing engagements are NDA-protected; no named industrial reference is public yet. The closest written-up deployment with the same structural pattern — multi-site, tenant-isolated, operated by the customer — is the [sovereign public cloud case study](/case-studies/sovereign-public-cloud/).

---

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

- **[Data sovereignty](/solutions/data-sovereignty/)** — industrial IP protection
- **[NIS2 compliance](/solutions/nis2-compliance/)** — critical-products regulatory
- **[Sovereign AI](/solutions/sovereign-ai/)** — AI on industrial data
- **[Cozystack](/products/cozystack/)**

---

*Ænix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack.*

