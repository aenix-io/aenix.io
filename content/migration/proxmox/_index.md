---
title: "Proxmox to Cozystack migration — when SMB virtualization stops fitting"
seo_title: "Proxmox to Cozystack migration for service providers"
description: "Proxmox VE is excellent at SMB scale. When it has to serve many tenants with a service catalogue and billing, Ænix migrates it to Cozystack end to end."
primary_keyword: "Proxmox migration"
secondary_keywords:
  - "Proxmox to Cozystack migration"
  - "Proxmox to KubeVirt"
  - "migrate from Proxmox"
related_pages: ["/alternatives/proxmox-alternative/", "/compare/cozystack-vs-proxmox/", "/products/public-cloud-platform/", "/products/cozystack/", "/services/platform-readiness-assessment/"]
language: "en"
hreflang_de: /de/migration/proxmox/
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Proxmox-to-Cozystack migration moves virtualization workloads from Proxmox VE to Cozystack, the open-source cloud platform built on Kubernetes. It targets hosting providers, ISPs, and service-provider clouds that have outgrown Proxmox's single-organization model and need a tenant model, a service catalog beyond plain VMs (managed databases, S3, Kubernetes tenancy, GPU), and production multi-cluster federation. Ænix, which created and co-maintains Cozystack, runs these migrations end-to-end: VM images convert from qcow2 into KubeVirt via CDI, a multi-tenant model is designed during migration using the Tenant CRD, and storage and networking are re-architected on LINSTOR/DRBD and Cilium. Cozystack is Apache 2.0 licensed with no per-CPU or per-core fees. For single-tenant deployments under 50 hosts, staying on Proxmox is the recommended choice.**

quick_facts:
  - label: "What it is"
    value: "End-to-end migration from Proxmox VE to Cozystack for multi-tenant cloud and service-provider deployments"
  - label: "Licence"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence)"
  - label: "Who it is for"
    value: "Hosting providers, ISPs, and regional clouds that have outgrown Proxmox's multi-tenancy and service-catalog limits"
  - label: "Engagement timeline"
    value: "Platform Readiness Assessment (14 or 28 days, fixed price); the platform is live in weeks once hardware is ready; moving workloads and customers typically takes 3-9 months"
  - label: "Migration path"
    value: "VM images convert qcow2 to KubeVirt via CDI; multi-tenancy is designed during migration with the Tenant CRD; storage and network are re-architected on LINSTOR/DRBD and Cilium"
  - label: "When to stay on Proxmox"
    value: "Single-tenant deployments under roughly 50 hosts, where migration ROI does not justify the effort"

faq:
  - q: "When does migrating from Proxmox to Cozystack make sense?"
    a: "It makes sense at service-provider scale, when you need multi-tenancy beyond Proxmox's pools and ACLs, a service catalog beyond VMs (managed databases, S3, Kubernetes tenancy, GPU), production multi-cluster federation, or regulated multi-tenant isolation. Single-tenant deployments under about 50 hosts should stay on Proxmox."
  - q: "How are Proxmox VMs migrated to Cozystack?"
    a: "VM image migration is straightforward: qcow2 disks convert into KubeVirt using the Containerized Data Importer (CDI). The tenant model (per-tenant quotas, networks and services) is designed during migration, because Proxmox pools and ACLs do not map one-to-one onto it, and storage and networking are re-architected on Cozystack's LINSTOR/DRBD and Cilium foundations."
  - q: "How long does a Proxmox to Cozystack migration take?"
    a: "A typical engagement starts with a fixed-price Platform Readiness Assessment of 14 or 28 days. The Ænix Public Cloud Platform installer gets the platform live in weeks once hardware is ready; moving workloads and customers over typically takes 3-9 months. The exact duration depends on workload count, multi-tenancy requirements, and storage and network re-architecture scope."
  - q: "Does Cozystack require per-CPU or per-core licensing like commercial hypervisors?"
    a: "No. Cozystack is open source under Apache 2.0 with no per-CPU or per-core licensing. Ænix sells a subscription — support, commercial modules such as billing and WHMCS integration, and services — not a licence. Support tiers for Ænix Public Cloud Platform and self-run Cozystack start at $1,250 per 10 nodes per month (Basic, billed annually)."
  - q: "What does Cozystack offer that Proxmox does not?"
    a: "Cozystack unifies VMs and containers on a single Kubernetes API via KubeVirt, adds native multi-tenancy through the Tenant CRD, eBPF networking with Cilium, and LINSTOR/DRBD replicated storage, plus a service catalog with managed databases, S3, Kubernetes tenancy, and GPU support."
  - q: "Who runs the migration?"
    a: "Ænix, the company that created Cozystack and co-maintains it, runs the migration end-to-end, from assessment through implementation. Cozystack is a CNCF Sandbox project (its Incubation application is in due diligence), so the underlying platform is open source and not tied to a single vendor."
---

**Proxmox VE is excellent at SMB scale. When deployments grow into multi-tenant cloud builders or service-provider models, the operational model strains. Ænix runs Proxmox-to-Cozystack migrations end-to-end.**

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** — a complete public-cloud product for hosting providers and regional clouds outgrowing Proxmox: customer portal, billing and service catalog. WHMCS-integrated billing, multi-tenant Tenant CRD, productized installer. Support tiers from $1,250 per 10 nodes per month.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/alternatives/proxmox-alternative/">Proxmox alternative →</a>
</div>

---

## When migration makes sense

- Service-provider scale (multi-customer cloud) outgrowing Proxmox
- Multi-tenancy beyond Proxmox's pools and ACLs (per-tenant quotas, networks and self-service)
- Service catalog beyond VMs (managed databases, S3, K8s tenancy, GPU)
- Production multi-cluster federation
- Regulated multi-tenant requirements

If your deployment is single-tenant and under 50 hosts — **stay on Proxmox**. The migration ROI doesn't justify it.

---

## Migration approach

VM image migration is straightforward (qcow2 → KubeVirt CDI). Tenant model: designed during migration, because Proxmox pools and ACLs do not map one-to-one onto Cozystack tenants. Storage and network are re-architected.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Proxmox VE</b><div class="diagram__chips"><span>qcow2 VM disks</span><span>Single-organization model</span></div></div>
<div class="diagram__conn">converts via</div>
<div class="diagram__node"><b>Migration path</b><div class="diagram__chips"><span>KubeVirt CDI import</span><span>Tenant CRD multi-tenancy design</span></div></div>
<div class="diagram__conn">lands on</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>LINSTOR/DRBD storage</span><span>Cilium networking</span></div></div>
</div>
</div>

Typical: a 14- or 28-day assessment, the platform live in weeks once hardware is ready, then 3-9 months to move workloads and customers.

Choosing the destination? See **[Proxmox alternative](/alternatives/proxmox-alternative/)** and **[Cozystack vs Proxmox](/compare/cozystack-vs-proxmox/)**, or the long read **[Proxmox vs VMware vs Cozystack](/blog/2026/05/proxmox-vs-vmware-vs-cozystack-comparison/)**.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

---

*Ænix created Cozystack (a CNCF Sandbox project) and co-maintains it with maintainers from other companies.*
