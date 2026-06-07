---
title: "CloudStack to Cozystack migration"
description: "Apache CloudStack remains established in some service-provider markets. For organizations modernizing to a Kubernetes-native foundation, Aenix runs..."
related_pages:
  - /products/aenix-platform/isp-edition/
  - /products/aenix-platform/public-cloud-edition/
  - /products/cozystack
  - /services/platform-readiness-assessment
  - /alternatives/vmware-alternative
language: "en"
direct_answer: |
  **CloudStack-to-Cozystack migration moves an Apache CloudStack IaaS deployment onto a Kubernetes-native foundation. It is aimed at hosting providers, ISPs, and regional cloud operators that run multi-tenant infrastructure on CloudStack and want to modernize. Aenix, the team behind Cozystack, migrates VM images from KVM or XenServer to KubeVirt, maps CloudStack accounts and projects to the Cozystack Tenant CRD, and re-architects storage and networking on LINSTOR/DRBD and Cilium eBPF. CloudStack service-provider capabilities such as multi-tenant billing, customer portal, and service catalog map to the Tenant CRD plus cozyportal model. A mid-size service-provider migration typically runs four to twelve months, delivered on the Apache 2.0 licensed Cozystack stack with no per-CPU licensing.**
quick_facts:
  - label: "What it is"
    value: "A migration service that moves an Apache CloudStack IaaS platform to a Kubernetes-native foundation built on Cozystack."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it is for"
    value: "Hosting providers, ISPs, and regional cloud operators running multi-tenant CloudStack deployments."
  - label: "What moves"
    value: "VM images (KVM / XenServer to KubeVirt), CloudStack accounts and projects to the Tenant CRD, plus storage and network re-architecture."
  - label: "Typical timeline"
    value: "Four to twelve months for a mid-size service-provider deployment."
  - label: "Delivered by"
    value: "Aenix, the open-core company behind Cozystack, on the Ænix Platform (ISP and Public Cloud editions)."
faq:
  - q: "What does a CloudStack to Cozystack migration involve?"
    a: "It converts VM images from KVM or XenServer to KubeVirt, maps CloudStack accounts and projects to the Cozystack Tenant CRD, and re-architects storage and networking on a Kubernetes-native foundation using LINSTOR/DRBD storage and Cilium eBPF networking."
  - q: "How long does a CloudStack migration take?"
    a: "A mid-size service-provider deployment typically takes four to twelve months. The exact timeline depends on the number of tenants, total VM footprint, storage volume, and how much network and billing integration must be re-architected."
  - q: "Do CloudStack multi-tenant features carry over to Cozystack?"
    a: "Yes. CloudStack service-provider features such as multi-tenant billing, customer portal, and service catalog map to Cozystack's Tenant CRD plus the cozyportal model, preserving the operator's multi-tenant model on a Kubernetes-native platform."
  - q: "Is Cozystack open source, and is there per-CPU licensing?"
    a: "Cozystack is Apache 2.0 licensed open source and a CNCF project (Sandbox since 2025-02-28). There is no per-CPU or per-core licensing. Aenix sells the productized Ænix Platform and services on top of the open-source stack."
  - q: "Which Ænix Platform edition fits a CloudStack migration?"
    a: "ISP Edition suits hosting providers and regional clouds, while Public Cloud Edition fits large operators. Both run the same Cozystack foundation, so the choice depends on scale and the operator's tenant and billing requirements."
  - q: "How do I start a CloudStack migration with Aenix?"
    a: "Book a 30-minute discovery call. For broader scoping, the Platform Readiness Assessment service covers engagement methodology, current-state analysis, and a migration plan before any production move begins."
---

**Apache CloudStack remains established in some service-provider markets. For organizations modernizing to a Kubernetes-native foundation, Aenix runs CloudStack-to-Cozystack migrations.**

> **Pairs with:** **[Ænix Platform ISP Edition](/products/aenix-platform/isp-edition/)** for hosting providers and regional clouds; **[Public Cloud Edition](/products/aenix-platform/public-cloud-edition/)** for large operators.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a 30-minute discovery call</a>
</div>

---

## Migration approach

VM image migration: KVM/XenServer → KubeVirt. Tenant model: CloudStack accounts/projects → Tenant CRD. Storage and network re-architect on Kubernetes-native foundation.

Typical: 4-12 months for mid-size service-provider deployment.

CloudStack's service-provider features (multi-tenant billing, customer portal, service catalog) map naturally to Cozystack's Tenant CRD + cozyportal model.

/contact/

For broader engagement methodology see **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

---

*Aenix is the team behind Cozystack.*

<!-- SEO: title "CloudStack to Cozystack Migration | Aenix"
Word count: ~200. -->
