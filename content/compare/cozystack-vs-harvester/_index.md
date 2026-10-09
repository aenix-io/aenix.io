---
title: "Cozystack vs Harvester — two KubeVirt platforms, two different scopes"
seo_title: "Cozystack vs Harvester (SUSE Virtualization)"
primary_keyword: "cozystack vs harvester"
secondary_keywords:
  - "harvester alternative"
  - "suse virtualization alternative"
  - "harvester hci vs kubevirt"
  - "harvester vs cozystack"
description: "Cozystack vs Harvester (SUSE Virtualization): both run VMs on KubeVirt. Compare scope, tenancy, managed services, GPU, storage and where Harvester is better."
related_pages: ["/products/public-cloud-platform/", "/products/private-cloud-platform/", "/products/cozystack/", "/tco-calculator/vs-harvester/", "/migration/vmware/"]
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Cozystack and Harvester both run virtual machines with KubeVirt on Kubernetes, and both are Apache 2.0 open source. The difference is scope. Harvester, sold by SUSE as SUSE Virtualization, is hyperconverged infrastructure: an installable appliance with KVM through KubeVirt, Longhorn block storage and VM management, with multi-tenancy and guest Kubernetes clusters delivered through Rancher. Cozystack is a platform for building a multi-tenant cloud: a Tenant model with nested tenants and quotas, managed Kubernetes per tenant, and a catalogue of managed databases, message brokers and S3 storage next to VMs. Choose Harvester to replace a hypervisor inside a Rancher estate; choose Cozystack to sell or run cloud services to many tenants. Ænix created and co-maintains Cozystack and sells support, services and Ænix Public Cloud Platform on it.**
quick_facts:
  - label: "What it is"
    value: "A head-to-head comparison of Harvester (SUSE Virtualization) and Cozystack, two KubeVirt-based platforms with different design centres."
  - label: "Licence"
    value: "Both Apache 2.0. Harvester is commercially supported by SUSE as SUSE Virtualization within SUSE Rancher Prime; Cozystack support and modules come from Ænix and other vendors."
  - label: "Shared foundation"
    value: "KubeVirt (KVM) on Kubernetes in both. Harvester adds Longhorn storage on SUSE Linux Enterprise Micro; Cozystack uses LINSTOR/DRBD storage and Cilium networking on Talos Linux."
  - label: "Multi-tenancy"
    value: "Harvester delivers multi-tenancy through Rancher authentication and project-scoped RBAC; Cozystack has its own Tenant resource with nested tenants, quotas and network isolation."
  - label: "Service catalogue"
    value: "Harvester: VMs, storage, networking and Rancher-provisioned guest clusters. Cozystack adds managed PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS and S3 storage."
  - label: "Who it is for"
    value: "Harvester: VMware-to-HCI moves inside a Rancher estate. Cozystack: hosting providers, regional clouds and enterprises running a multi-tenant cloud."
quick_facts_source: "[Harvester docs](https://docs.harvesterhci.io/), [SUSE Virtualization](https://www.suse.com/products/rancher/virtualization/), [Cozystack](https://cozystack.io/)"
faq:
  - q: "Are Harvester and Cozystack built on the same technology?"
    a: "Partly. Both run VMs with KubeVirt and KVM on Kubernetes, so a VM definition looks similar in both. Below that they differ: Harvester uses Longhorn for distributed block storage on SUSE Linux Enterprise Micro, while Cozystack uses LINSTOR with DRBD replication, Cilium networking and Talos Linux. Above it they differ more: Cozystack adds a tenant model and a managed-services catalogue."
  - q: "Is Harvester the same as SUSE Virtualization?"
    a: "Yes. SUSE's documentation now uses the name SUSE Virtualization for the product, while the open-source project and its documentation at docs.harvesterhci.io keep the name Harvester. SUSE sells it as part of SUSE Rancher Prime with its support offerings."
  - q: "When should I choose Harvester over Cozystack?"
    a: "When you already run Rancher, the goal is to replace a hypervisor with hyperconverged infrastructure, and your tenants are internal teams. Harvester installs from an ISO onto bare metal, does not require Kubernetes knowledge for day-to-day VM work, and plugs into Rancher's Virtualization Management, with SUSE behind it for enterprise support."
  - q: "When does Cozystack fit better?"
    a: "When you sell or run cloud services for many tenants who should not see each other: hosting providers, regional clouds, MSPs, or an enterprise platform team offering self-service. The Tenant model, managed Kubernetes per tenant and the database, messaging and S3 catalogue are built in rather than assembled from separate products."
  - q: "How do the two compare on GPUs?"
    a: "For VMs, Harvester is ahead: besides PCI passthrough it shares SR-IOV-capable NVIDIA GPUs as vGPUs, including MIG-backed vGPUs on cards such as A100 and H100 since v1.7. Cozystack gives VMs whole GPUs through PCI passthrough, or NVIDIA vGPU with your NVIDIA vGPU licence. Inside tenant Kubernetes clusters, Cozystack's NVIDIA GPU Operator exposes MIG partitions and HAMi provides time-sliced sharing and oversubscription."
  - q: "What does Ænix offer on top of Cozystack?"
    a: "Ænix created Cozystack and co-maintains it. It sells support and services, and Ænix Public Cloud Platform for hosting providers and regional clouds, with billing, a WHMCS integration and a branded customer portal. Subscriptions start at $1,250 per 10 nodes per month (Basic, billed annually); Private Cloud Platform and AI Platform are quoted per RFP."
hreflang_de: /de/vergleichen/cozystack-vs-harvester/
---

**Same hypervisor layer. Different products built on top of it.**

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** for providers selling cloud services, and **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** for enterprises running a multi-tenant internal cloud. The engine underneath both is open-source **[Cozystack](/products/cozystack/)**.

Comparisons between Cozystack and Harvester often start from the wrong question. Both run virtual machines with [KubeVirt](https://kubevirt.io/) and KVM on top of Kubernetes, so the hypervisor layer is close to identical. Both are licensed under Apache 2.0. Neither charges per CPU for the software. The decision is about what each product is trying to be.

Harvester describes itself as "a modern, open, interoperable, hyperconverged infrastructure (HCI) solution built on Kubernetes". <!-- source: https://docs.harvesterhci.io/v1.8/ --> It replaces a hypervisor and a storage array with one appliance, and leans on Rancher for everything that spans clusters or users. Cozystack is a platform for building a cloud: tenants, managed Kubernetes, managed databases and object storage, with VMs as one service among several.

<div class="compare-elevated compare-elevated--col3">

| | Harvester (SUSE Virtualization) | Cozystack |
|---|---|---|
| **Licence** | Apache 2.0 | Apache 2.0 |
| **Design centre** | Hyperconverged infrastructure for VMs | Multi-tenant cloud platform |
| **Virtualization** | KubeVirt (KVM) | KubeVirt (KVM) |
| **Host OS** | SUSE Linux Enterprise Micro (Elemental) | Talos Linux |
| **Storage** | Longhorn distributed block storage | LINSTOR with DRBD replication; S3 via SeaweedFS |
| **Multi-tenancy** | Through Rancher: authentication, project-scoped RBAC | Tenant resource: nested tenants, quotas, network isolation |
| **Kubernetes for users** | Guest RKE2 / K3s clusters provisioned by Rancher | Managed Kubernetes per tenant, built in |
| **Managed services** | Not in scope | PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS, S3 and more |
| **GPU for VMs** | PCI passthrough; vGPU on SR-IOV NVIDIA GPUs, MIG-backed since v1.7 | PCI passthrough; NVIDIA vGPU with your NVIDIA licence |
| **GPU in Kubernetes** | Through the guest cluster you build | GPU Operator with MIG partitions; HAMi time-slicing and oversubscription |
| **Commercial support** | SUSE, as part of SUSE Rancher Prime | Ænix (and other vendors) |
| **Best for** | VMware-to-HCI moves inside a Rancher estate | Providers and platform teams serving many tenants |

</div>

## Architecture: an appliance versus a platform

**Harvester** installs as an ISO onto bare metal (USB and PXE installs are also documented) and brings its own operating system, Elemental for SUSE Linux Enterprise Micro. <!-- source: https://docs.harvesterhci.io/v1.8/install/requirements --> Underneath sits an RKE2 cluster: the documentation points administrators to the RKE2 kubeconfig on the management nodes. <!-- source: https://docs.harvesterhci.io/v1.8/rancher/cloud-provider --> KubeVirt manages VMs, Longhorn provides distributed block storage and tiering, and Prometheus and Grafana handle monitoring. <!-- source: https://docs.harvesterhci.io/v1.8/ --> A three-node cluster is required for high availability; single-node installations work without HA. <!-- source: https://docs.harvesterhci.io/v1.8/install/requirements -->

**Cozystack** runs on Talos Linux, an immutable OS with no SSH, and assembles Kubernetes, KubeVirt, Cilium networking, LINSTOR/DRBD storage, a monitoring stack and a catalogue of operators into one platform managed declaratively. The same API that creates a VM creates a PostgreSQL cluster or a tenant Kubernetes cluster.

In practice: Harvester is a product you install and then use. Cozystack is a platform you install and then offer to other people.

## Multi-tenancy: borrowed from Rancher versus built in

Harvester's documentation is explicit that it "leverages Rancher's existing capabilities, such as authentication and RBAC control, to provide full multi-tenancy support", with global, cluster and project roles, and it recommends project-scoped RBAC for user access. <!-- source: https://docs.harvesterhci.io/v1.8/rancher/virtualization-management --> That works well when tenants are departments of one organisation and Rancher is already the control point.

Cozystack's tenancy is part of the platform itself. A Tenant gets its own namespace, quotas, network isolation enforced by Cilium policies, its own services and, if needed, nested sub-tenants, which is the shape a hosting provider or a regional cloud needs when tenants are paying customers who must not see each other. Per-tenant usage data feeds billing; with Ænix Public Cloud Platform that billing, a WHMCS integration and a branded customer portal are part of the product.

## What tenants can order

Harvester's documented scope is VMs, storage, networking and backups, plus guest Kubernetes clusters that Rancher provisions on Harvester VMs through the Harvester node driver, with a cloud provider for load balancers and a CSI driver that passes Harvester storage through to the guest cluster. <!-- source: https://docs.harvesterhci.io/v1.8/rancher/node/node-driver --> Managed databases or object storage are not part of it; you would run those yourself on top.

Cozystack ships them as services: managed Kubernetes with a control plane per tenant, PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS, S3-compatible object storage on SeaweedFS, and more. For a provider, that catalogue is where the margin sits; for an enterprise platform team it is what removes tickets.

## Storage and backup

Longhorn is integrated into the Harvester UI and supports backups of VM volumes to NFS or an S3-compatible target, with cross-cluster restore. The documentation notes that backups are limited to Longhorn volumes. <!-- source: https://docs.harvesterhci.io/v1.8/vm/backup-restore -->

Cozystack places volumes on LINSTOR with DRBD replication where the StorageClass asks for it, and uses Velero for scheduled backups of VMs and cluster state, encrypted in the object store. Managed databases add their own point-in-time recovery.

## GPU

Be precise here, because the two are strong in different places.

**Harvester** passes PCI devices, including GPUs, through to VMs with the `pcidevices-controller` add-on, and shares SR-IOV-capable NVIDIA GPUs as vGPUs once the `nvidia-driver-toolkit` add-on is enabled. Since v1.7 it also shares MIG-backed vGPUs across VMs on cards such as A100, H100 and H200. <!-- source: https://docs.harvesterhci.io/v1.8/advanced/vgpusupport -->

**Cozystack** gives VMs whole GPUs through PCI passthrough, or NVIDIA vGPU where you hold the NVIDIA vGPU licence; it does not assign MIG slices to VMs. Inside tenant Kubernetes clusters, the NVIDIA GPU Operator exposes MIG partitions as schedulable resources on MIG-capable cards and HAMi provides time-sliced sharing and oversubscription. Cozystack was accepted into the CNCF Kubernetes AI Conformance program in September 2026.

If your GPU product is MIG slices attached to VMs, Harvester covers that today. If it is GPU capacity for containers and Kubernetes clusters sold per tenant, Cozystack fits better.

## Where Harvester is genuinely better

- **It is the natural choice in a Rancher estate.** Harvester clusters are imported into Rancher's Virtualization Management, and VMs and Kubernetes clusters are managed side by side with the same authentication and RBAC. <!-- source: https://documentation.suse.com/cloudnative/rancher-manager/v2.13/en/integrations/harvester/harvester.html -->
- **Simpler to adopt for a virtualization team.** SUSE states that Harvester "does not require knowledge of Kubernetes concepts" for day-to-day use. Cozystack asks your platform team to understand Kubernetes.
- **An ISO appliance.** "Simply install it directly onto your bare metal server to get started." <!-- source: https://harvesterhci.io/ -->
- **Built-in VM import.** The `vm-import-controller` add-on imports VMs from VMware, OpenStack and OVA packages. <!-- source: https://docs.harvesterhci.io/v1.8/advanced/addons/vmimport -->
- **MIG-backed vGPU for VMs**, as described above.
- **SUSE behind it.** SUSE offers support tiers including Premium Support, Sovereign Premium Support and Long Term Service Pack Support. <!-- source: https://www.suse.com/products/rancher/virtualization/ -->

If your goal is to replace vSphere for internal VMs and you already standardise on Rancher, Harvester is the shorter path, and moving to Cozystack would cost you more than it returns.

## When Cozystack fits

Cozystack starts paying off when the requirements include any of the following:

- Tenants are **external customers**, each needing isolation, quotas and their own usage records.
- You want to sell or offer **managed databases, message brokers, S3 and Kubernetes**, not only VMs.
- You need **billing**, a **customer portal** or a **WHMCS integration** around the platform; that is what [Ænix Public Cloud Platform](/products/public-cloud-platform/) adds.
- You want **GPU capacity for Kubernetes workloads** shared between tenants with MIG and HAMi.

## Cost

Both platforms are free to use as open source; what you pay for is support and the people who run it. The [Harvester vs Cozystack TCO calculator](/tco-calculator/vs-harvester/) holds a five-year cost model with sourced assumptions, and shows openly the scale at which Harvester comes out cheaper. Ænix subscriptions start at $1,250 per 10 nodes per month on annual billing; see [pricing](/pricing/). For moving workloads off VMware or another platform, see the [migration hubs](/migration/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/tco-calculator/vs-harvester/">Harvester vs Cozystack TCO →</a>
</div>

## Sources

Harvester facts on this page were checked against the vendor's own documentation in October 2026:

- [Harvester documentation, overview](https://docs.harvesterhci.io/v1.8/)
- [Harvester hardware and network requirements](https://docs.harvesterhci.io/v1.8/install/requirements)
- [Harvester multi-tenancy through Rancher](https://docs.harvesterhci.io/v1.8/rancher/virtualization-management)
- [Harvester node driver for guest clusters](https://docs.harvesterhci.io/v1.8/rancher/node/node-driver)
- [Harvester cloud provider](https://docs.harvesterhci.io/v1.8/rancher/cloud-provider)
- [Harvester vGPU support](https://docs.harvesterhci.io/v1.8/advanced/vgpusupport)
- [Harvester VM backup, snapshot and restore](https://docs.harvesterhci.io/v1.8/vm/backup-restore)
- [Harvester VM import add-on](https://docs.harvesterhci.io/v1.8/advanced/addons/vmimport)
- [Harvester on GitHub (Apache 2.0)](https://github.com/harvester/harvester)
- [SUSE Virtualization product page](https://www.suse.com/products/rancher/virtualization/)
- [SUSE Rancher Manager: SUSE Virtualization integration](https://documentation.suse.com/cloudnative/rancher-manager/v2.13/en/integrations/harvester/harvester.html)

---

*Ænix created Cozystack (CNCF Sandbox project) and co-maintains it with maintainers from other companies. On top of it we offer Ænix Public Cloud Platform, Ænix Private Cloud Platform and Ænix AI Platform. Harvester, SUSE and Rancher are trademarks of their respective owners.*
