---
title: "Cozystack vs OpenNebula — VM cloud or Kubernetes-native cloud platform"
seo_title: "Cozystack vs OpenNebula: head-to-head comparison"
primary_keyword: "cozystack vs opennebula"
secondary_keywords:
  - "opennebula alternative"
  - "opennebula vs kubevirt"
  - "opennebula vs kubernetes"
  - "opennebula vs cozystack"
description: "Cozystack vs OpenNebula: both Apache 2.0 cloud platforms. Compare architecture, multi-tenancy, managed services, GPU, subscriptions and where OpenNebula wins."
related_pages:
  - /tco-calculator/vs-opennebula/
  - /products/public-cloud-platform/
  - /products/cozystack/
  - /migration/
  - /case-studies/unified-cloud-portal-financial-group/
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Cozystack and OpenNebula are both open-source cloud platforms under Apache 2.0, built from different starting points. OpenNebula is a cloud management platform centred on KVM virtual machines (with LXC containers), organised into users, groups and Virtual Data Centers, with Kubernetes offered as a service on top of those VMs. Cozystack runs on Kubernetes itself: virtual machines run through KubeVirt, tenants are a Kubernetes resource with nested isolation, and managed databases, message brokers, S3 object storage and tenant Kubernetes clusters are part of the same catalogue. OpenNebula suits teams that want a mature VM cloud with a long track record; Cozystack suits hosting providers and platform teams whose product is a catalogue of managed services. Ænix created Cozystack and co-maintains it, and sells Ænix Public Cloud Platform — Cozystack plus billing, WHMCS integration and a branded portal — for providers.**
quick_facts:
  - label: "What it is"
    value: "A head-to-head comparison of OpenNebula and Cozystack as open-source platforms for building private and public clouds."
  - label: "Licence"
    value: "Both Apache 2.0. OpenNebula Enterprise Edition packages ship under commercial terms to subscribers; Cozystack has a single open-source edition."
  - label: "Foundation"
    value: "OpenNebula: KVM VMs and LXC containers managed by the OpenNebula front-end. Cozystack: KubeVirt VMs and containers on one Kubernetes API."
  - label: "Multi-tenancy"
    value: "OpenNebula: users, groups, ACLs, quotas and Virtual Data Centers. Cozystack: a Tenant resource with nested tenants, quotas, network isolation and per-tenant observability."
  - label: "Managed services"
    value: "OpenNebula: marketplace appliances and OneKS managed Kubernetes. Cozystack: built-in managed PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS, S3 and Kubernetes."
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence). OpenNebula is developed by OpenNebula Systems."
  - label: "Who it is for"
    value: "Hosting providers, regional clouds and platform teams choosing between a VM-first cloud manager and a Kubernetes-native platform."
quick_facts_source: "[OpenNebula documentation](https://docs.opennebula.io/7.4/), [OpenNebula on GitHub](https://github.com/OpenNebula/one), [Cozystack](https://cozystack.io)"
faq:
  - q: "Is OpenNebula open source?"
    a: "Yes. OpenNebula is published under the Apache License 2.0, the same licence as Cozystack. The difference is in distribution: OpenNebula Systems ships Enterprise Edition packages, with maintenance releases and LTS versions, under commercial terms to customers with an active subscription, while the Community Edition receives patch releases with critical fixes. Cozystack has one open-source edition; Ænix sells support and proprietary commercial modules on top of it."
  - q: "What is the main architectural difference?"
    a: "OpenNebula is a VM cloud manager: its front-end orchestrates KVM hosts (and LXC), and Kubernetes clusters run inside VMs as a service. Cozystack starts from Kubernetes: VMs run as KubeVirt workloads next to containers, and the platform's own objects, including tenants and managed services, are Kubernetes resources driven by GitOps."
  - q: "Does OpenNebula support Kubernetes?"
    a: "Yes. OpenNebula 7.4 includes OneKS, a Kubernetes-as-a-Service built on RKE2 and the Cluster API provider for OpenNebula, and it is a Community Edition feature. Cozystack offers tenant Kubernetes clusters with a managed control plane per tenant as one item of its service catalogue, alongside databases, brokers and S3."
  - q: "How do the two compare on GPUs?"
    a: "Both cover NVIDIA data-centre GPUs. OpenNebula documents PCI passthrough and NVIDIA vGPU for VMs, including vGPU profiles backed by MIG instances on cards such as the H100. Cozystack gives VMs whole GPUs via PCI passthrough or NVIDIA vGPU (with your NVIDIA vGPU licence); in tenant Kubernetes clusters the NVIDIA GPU Operator exposes MIG partitions on MIG-capable cards and HAMi provides time-sliced sharing. Cozystack does not assign MIG slices to VMs."
  - q: "Can OpenNebula and Cozystack run side by side?"
    a: "Yes. Ænix Public Cloud Platform can run alongside an existing OpenNebula estate during migration, and one anonymised case study describes a financial group that put a single self-service portal over OpenNebula, VMware and Kubernetes rather than replacing them in one step."
  - q: "What does Ænix offer on top of Cozystack?"
    a: "Ænix created Cozystack and co-maintains it with maintainers from other companies. It sells subscriptions — support plus the proprietary Ænix commercial modules (billing system and WHMCS integration) — for Ænix Public Cloud Platform, from $1,250 per 10 nodes per month on the Basic tier billed annually. Private Cloud Platform and AI Platform are quoted per RFP."
hreflang_de: /de/vergleichen/cozystack-vs-opennebula/
---

**Same licence, different design centre. OpenNebula manages a VM cloud; Cozystack turns Kubernetes into one.**

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** — Cozystack plus billing, WHMCS integration, a branded customer portal and tenant lock and suspension, for hosting providers and regional clouds. Support tiers from $1,250 per 10 nodes per month.

OpenNebula has been building clouds since long before Kubernetes existed, and it shows in the good sense: a stable VM model, a web UI that covers the whole lifecycle, federation across zones and a commercial company behind it. Cozystack comes from the other direction. It assumes Kubernetes as the control plane and treats virtual machines, databases and tenant clusters as workloads on it. Both are Apache 2.0. The question is which shape matches what you sell or run.

<div class="compare-elevated compare-elevated--col3">

| | OpenNebula | Cozystack |
|---|---|---|
| **Licence** | Apache 2.0; Enterprise Edition packages for subscribers | Apache 2.0, one edition |
| **Foundation** | KVM (and LXC) managed by the OpenNebula front-end | KubeVirt and containers on Kubernetes, Talos Linux nodes |
| **Multi-tenancy** | Users, groups, ACLs, quotas, Virtual Data Centers | Tenant resource with nested tenants, quotas, network isolation |
| **Kubernetes for tenants** | OneKS (RKE2 + Cluster API), clusters on VMs | Tenant clusters with a managed control plane per tenant |
| **Managed databases and brokers** | Marketplace appliances and templates | Built in: PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS and more |
| **S3 object storage** | Not listed as a tenant service in the documented key features | Built in (SeaweedFS) |
| **Storage** | NFS/NAS, Ceph, SAN/LVM, NetApp | LINSTOR with DRBD replication |
| **GPU** | PCI passthrough, NVIDIA vGPU, vGPU on MIG for VMs | Passthrough or NVIDIA vGPU for VMs; MIG and HAMi sharing in tenant Kubernetes |
| **Usage data** | Accounting and showback | Per-tenant usage; billing via Ænix modules or your own system |
| **Best for** | VM-centric private and edge clouds | Providers selling managed services; Kubernetes-native platforms |

</div>

<!-- source: https://github.com/OpenNebula/one (licence) -->
<!-- source: https://docs.opennebula.io/7.0/getting_started/understand_opennebula/opennebula_concepts/key_features/ (multi-tenancy, storage, accounting, showback, GPU, federation) -->
<!-- source: https://docs.opennebula.io/7.4/platform_services/oneks/ (OneKS) -->

## Architecture: who is the control plane?

OpenNebula's documentation describes virtualization "based principally on the KVM open source hypervisor, with support for LXC". <!-- source: https://docs.opennebula.io/7.4/getting_started/understand_opennebula/opennebula_concepts/opennebula_overview/ --> An OpenNebula front-end schedules VMs onto hosts, attaches images from datastores and wires networks from Linux bridges, VLANs, VXLAN or Open vSwitch. Kubernetes, where you want it, is a workload: OneKS creates RKE2 clusters on OpenNebula VMs through the Cluster API provider for OpenNebula. <!-- source: https://opennebula.io/blog/product/introducing-oneks/ -->

Cozystack inverts that. The management cluster is Kubernetes on Talos Linux, an immutable OS with no SSH. Virtual machines are KubeVirt objects, storage comes from LINSTOR with DRBD replication, networking from Cilium, and every service in the catalogue is declared as a manifest and reconciled continuously. The practical consequence is one API and one GitOps workflow for VMs, databases and clusters, at the price of having to understand Kubernetes to operate the platform.

## Multi-tenancy

OpenNebula offers multi-tenancy "by design": users and groups, fine-grained ACLs, quotas, authentication through LDAP and SAML, and Virtual Data Centers that assign groups a slice of clusters, hosts, datastores and networks. <!-- source: https://docs.opennebula.io/7.0/product/cloud_system_administration/multitenancy/manage_vdcs/ --> It is a well-understood model for an organisation dividing its cloud between departments or customers.

Cozystack's unit is the tenant, a Kubernetes resource. Creating one provisions its own namespace, network policies that deny traffic from other tenants by default, quotas, and its own monitoring and logging; tenants can nest, so a reseller can hold its own customers underneath it. That nesting is what a provider with resellers or a holding company with subsidiaries usually ends up needing.

## Managed services catalogue

This is the largest practical difference. OpenNebula's catalogue is built around VM templates and appliances from its public and private marketplaces, plus OneKS for Kubernetes. <!-- source: https://docs.opennebula.io/7.0/product/apps-marketplace/ -->

Cozystack ships managed services as first-class platform objects: PostgreSQL (CloudNativePG), MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS, MongoDB, OpenSearch and Qdrant, S3-compatible object storage on SeaweedFS, HTTP cache, VPN, tenant Kubernetes and virtual machines. Each is ordered the same way, through the dashboard or the API, with replication, backups and monitoring wired in. For a hosting provider, that catalogue is the product: it is how revenue per node grows beyond selling VMs.

## GPU

OpenNebula documents NVIDIA GPU passthrough and NVIDIA vGPU for VMs, including vGPU profiles that map to MIG instances on supported cards such as the H100. <!-- source: https://docs.opennebula.io/7.0/product/cluster_configuration/hosts_and_clusters/vgpu/ --> <!-- source: https://docs.opennebula.io/7.0/product/cluster_configuration/hosts_and_clusters/nvidia_gpu_passthrough/ --> Its 7.4 subscription adds integration with NVIDIA's infrastructure controller for bare-metal provisioning. <!-- source: https://docs.opennebula.io/7.4/software/release_information/release_notes/whats_new/ -->

Cozystack runs NVIDIA data-centre GPUs through the NVIDIA GPU Operator. Virtual machines, including the VM worker nodes of tenant clusters, get whole GPUs via PCI passthrough or NVIDIA vGPU with your NVIDIA vGPU licence. Inside tenant Kubernetes clusters, the GPU Operator exposes MIG partitions as schedulable resources on MIG-capable cards and HAMi provides time-sliced sharing and oversubscription. GPU usage is measured per tenant; charging happens in your billing system. If MIG-backed vGPU inside VMs is a hard requirement, OpenNebula documents it and Cozystack does not offer it.

## Licensing and commercial model

Both projects are Apache 2.0. OpenNebula Systems distributes Enterprise Edition packages — with maintenance releases, LTS versions and extra fixes — under commercial terms to subscribers, while the Community Edition gets patch releases with critical fixes. <!-- source: https://docs.opennebula.io/6.8/intro_release_notes/release_notes_enterprise/what_is.html --> Subscriptions come as Standard (9×5) and Premium (24×7) plans, priced on request. <!-- source: https://opennebula.io/subscriptions/ -->

Cozystack has one edition; nothing is held back for subscribers. Ænix sells a subscription — support plus the proprietary Ænix commercial modules (billing system and WHMCS integration) — priced per 10 physical nodes per month and published on the [pricing page](/pricing/): Basic $1,250, Standard $3,000, Plus $5,500 on annual billing, Enterprise custom. Private Cloud Platform and AI Platform are quoted per RFP. If the subscription ends, Cozystack keeps running on your hardware.

For the five-year money question, the **[OpenNebula vs Cozystack TCO calculator](/tco-calculator/vs-opennebula/)** models both sides with sourced prices and states openly where OpenNebula comes out cheaper at default assumptions.

## Migration path

OpenNebula VMs are KVM guests with qcow2 or raw disks, which is the format KubeVirt imports through its Containerized Data Importer, so moving a VM is a disk copy and a re-declaration rather than a conversion. The work sits in networking, templates and the services around the VMs. Nothing forces a big-bang move: Ænix Public Cloud Platform can run alongside OpenNebula while workloads move in waves, and one anonymised write-up shows a financial group that put [one self-service portal over OpenNebula, VMware and Kubernetes](/case-studies/unified-cloud-portal-financial-group/) and kept all three running. See the **[migration hubs](/migration/)** for runbooks from other platforms.

## Where OpenNebula is genuinely better

- **A VM cloud without Kubernetes.** If your team knows KVM and Linux networking and does not want Kubernetes in the critical path, OpenNebula gives you a complete cloud without it. Cozystack asks you to learn Kubernetes first.
- **Storage choice.** NFS/NAS, Ceph, SAN/LVM and NetApp are all supported backends. Cozystack standardises on LINSTOR; integrating an existing SAN is a design exercise.
- **MIG-backed vGPU for VMs.** Documented by OpenNebula for supported NVIDIA cards; not offered by Cozystack.
- **Federation and scale record.** Zone federation for geographically distributed clouds and a documented track record of managing more than 2,500 hypervisor nodes.
- **Edge and hybrid deployments.** OpenNebula's documentation covers on-premises, cloud, edge, hybrid and multi-cloud deployments under one platform.
- **Breadth of built-in backup.** Change block tracking with full, incremental and differential backups is part of the platform, alongside Veeam integration in the subscription.

## When Cozystack fits

Cozystack pays off when the cloud you run is a catalogue rather than a VM pool: managed databases, Kubernetes, S3 and GPU sold or self-served per tenant, with nested tenants for resellers and per-tenant usage feeding billing. It also fits teams already standardising on Kubernetes, who would rather run VMs as one more workload than maintain a second control plane. For providers, [Ænix Public Cloud Platform](/products/public-cloud-platform/) adds the commercial layer; for the open-source engine on its own, see **[Cozystack](/products/cozystack/)**.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/tco-calculator/vs-opennebula/">Compare five-year cost →</a>
</div>

---

## Sources

OpenNebula facts on this page come from the vendor's own documentation and site, checked in October 2026:

- [OpenNebula repository and licence](https://github.com/OpenNebula/one)
- [OpenNebula overview (7.4)](https://docs.opennebula.io/7.4/getting_started/understand_opennebula/opennebula_concepts/opennebula_overview/)
- [OpenNebula key features (7.0)](https://docs.opennebula.io/7.0/getting_started/understand_opennebula/opennebula_concepts/key_features/)
- [What is OpenNebula Enterprise Edition](https://docs.opennebula.io/6.8/intro_release_notes/release_notes_enterprise/what_is.html)
- [OpenNebula subscription plans](https://opennebula.io/subscriptions/)
- [OneKS — Kubernetes as a Service (7.4)](https://docs.opennebula.io/7.4/platform_services/oneks/) and [announcement](https://opennebula.io/blog/product/introducing-oneks/)
- [NVIDIA vGPU and MIG](https://docs.opennebula.io/7.0/product/cluster_configuration/hosts_and_clusters/vgpu/) and [NVIDIA GPU passthrough](https://docs.opennebula.io/7.0/product/cluster_configuration/hosts_and_clusters/nvidia_gpu_passthrough/)
- [Managing Virtual Data Centers](https://docs.opennebula.io/7.0/product/cloud_system_administration/multitenancy/manage_vdcs/)
- [OpenNebula 7.4 release notes](https://docs.opennebula.io/7.4/software/release_information/release_notes/whats_new/)

---

*Ænix created Cozystack (CNCF Sandbox project) and co-maintains it with maintainers from other companies. On top of it we offer Ænix Public Cloud Platform, Ænix Private Cloud Platform and Ænix AI Platform. OpenNebula is a trademark of OpenNebula Systems; this comparison is based on its public documentation.*
