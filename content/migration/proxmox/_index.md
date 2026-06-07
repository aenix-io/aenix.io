---
title: "Proxmox to Cozystack migration — when SMB virtualization stops fitting"
description: "Proxmox VE is excellent at SMB scale. When deployments grow into multi-tenant cloud builders or service-provider models, the operational model strains...."
related_pages: ["/alternatives/proxmox-alternative", "/products/aenix-platform/isp-edition/", "/products/cozystack", "/services/platform-readiness-assessment"]
language: "en"
direct_answer: |
  **Proxmox-to-Cozystack migration moves virtualization workloads from Proxmox VE to Cozystack, the open-source cloud platform built on Kubernetes. It targets hosting providers, ISPs, and service-provider clouds that have outgrown Proxmox's single-organization model and need true multi-tenancy, a service catalog beyond plain VMs (managed databases, S3, Kubernetes tenancy, GPU), and production multi-cluster federation. Aenix, the team behind Cozystack, runs these migrations end-to-end: VM images convert from qcow2 into KubeVirt via CDI, a multi-tenant model is designed during migration using the Tenant CRD, and storage and networking are re-architected on LINSTOR/DRBD and Cilium. Cozystack is Apache 2.0 licensed with no per-CPU or per-core fees. For single-tenant deployments under 50 hosts, staying on Proxmox is the recommended choice.**

quick_facts:
  - label: "What it is"
    value: "End-to-end migration from Proxmox VE to Cozystack for multi-tenant cloud and service-provider deployments"
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it is for"
    value: "Hosting providers, ISPs, and regional clouds that have outgrown Proxmox's multi-tenancy and service-catalog limits"
  - label: "Engagement timeline"
    value: "Typically 2-4 weeks assessment plus 3-9 months implementation"
  - label: "Migration path"
    value: "VM images convert qcow2 to KubeVirt via CDI; multi-tenancy is designed during migration with the Tenant CRD; storage and network are re-architected on LINSTOR/DRBD and Cilium"
  - label: "When to stay on Proxmox"
    value: "Single-tenant deployments under roughly 50 hosts, where migration ROI does not justify the effort"

faq:
  - q: "When does migrating from Proxmox to Cozystack make sense?"
    a: "It makes sense at service-provider scale, when you need multi-tenancy beyond Proxmox's permission model, a service catalog beyond VMs (managed databases, S3, Kubernetes tenancy, GPU), production multi-cluster federation, or regulated multi-tenant isolation. Single-tenant deployments under about 50 hosts should stay on Proxmox."
  - q: "How are Proxmox VMs migrated to Cozystack?"
    a: "VM image migration is straightforward: qcow2 disks convert into KubeVirt using the Containerized Data Importer (CDI). The multi-tenant model is designed during migration, since Proxmox did not have one, and storage and networking are re-architected on Cozystack's LINSTOR/DRBD and Cilium foundations."
  - q: "How long does a Proxmox to Cozystack migration take?"
    a: "A typical engagement runs 2-4 weeks of assessment followed by 3-9 months of implementation. The exact duration depends on workload count, multi-tenancy requirements, and storage and network re-architecture scope."
  - q: "Does Cozystack require per-CPU or per-core licensing like commercial hypervisors?"
    a: "No. Cozystack is open source under Apache 2.0 with no per-CPU or per-core licensing. Aenix sells the productized Ænix Platform plus support and services on top, starting at the Basic tier of $1,250/month for up to 10 nodes."
  - q: "What does Cozystack offer that Proxmox does not?"
    a: "Cozystack unifies VMs and containers on a single Kubernetes API via KubeVirt, adds native multi-tenancy through the Tenant CRD, eBPF networking with Cilium, and LINSTOR/DRBD replicated storage, plus a service catalog with managed databases, S3, Kubernetes tenancy, and GPU support."
  - q: "Who runs the migration?"
    a: "Aenix, the open-core company behind Cozystack, runs the migration end-to-end, from assessment through implementation. Cozystack is a CNCF Sandbox project, so the underlying platform is open source and not tied to a single vendor."
---

**Proxmox VE is excellent at SMB scale. When deployments grow into multi-tenant cloud builders or service-provider models, the operational model strains. Aenix runs Proxmox-to-Cozystack migrations end-to-end.**

> **Pairs with:** **[Ænix Platform ISP Edition](/products/aenix-platform/isp-edition/)** — turnkey cloud-in-a-box for hosting providers and regional clouds outgrowing Proxmox. WHMCS-integrated billing, multi-tenant Tenant CRD, productized installer. From €1.3k/month support tier.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a 30-minute discovery call</a>
  <a class="cta-secondary" href="/alternatives/proxmox-alternative">Proxmox alternative →</a>
</div>

---

## When migration makes sense

- Service-provider scale (multi-customer cloud) outgrowing Proxmox
- Multi-tenancy beyond Proxmox's namespace + permissions model
- Service catalog beyond VMs (managed databases, S3, K8s tenancy, GPU)
- Production multi-cluster federation
- Regulated multi-tenant requirements

If your deployment is single-tenant and under 50 hosts — **stay on Proxmox**. The migration ROI doesn't justify it.

---

## Migration approach

VM image migration is straightforward (qcow2 → KubeVirt CDI). Multi-tenant model: designed during migration (Proxmox didn't have one). Storage and network re-architect.

Typical: 2-4 weeks assessment + 3-9 months implementation.

For full comparison see **[Proxmox vs VMware vs Cozystack](/blog/2026/05/proxmox-vs-vmware-vs-cozystack-comparison/)**.

/contact/

---

*Aenix is the team behind Cozystack.*

<!-- SEO: title "Proxmox to Cozystack Migration — When SMB Virtualization Stops Fitting | Aenix"
Word count: ~300. -->
