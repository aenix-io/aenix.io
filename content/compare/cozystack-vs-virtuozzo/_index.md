---
title: "Cozystack vs Virtuozzo — head-to-head for hosting providers"
seo_title: "Cozystack vs Virtuozzo: comparison for hosting providers"
primary_keyword: "cozystack vs virtuozzo"
secondary_keywords:
  - "virtuozzo alternative"
  - "virtuozzo infrastructure alternative"
  - "virtuozzo hybrid infrastructure vs kubernetes"
description: "Cozystack vs Virtuozzo Infrastructure for hosting providers: architecture, tenancy, managed services, GPU, billing, licensing and where Virtuozzo is stronger."
related_pages: ["/migration/virtuozzo/", "/tco-calculator/vs-virtuozzo/", "/products/public-cloud-platform/", "/products/whmcs-integration/", "/industries/hosting-providers/"]
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Cozystack and Virtuozzo Infrastructure (formerly Virtuozzo Hybrid Infrastructure) both let a hosting provider sell virtual machines, Kubernetes and S3 storage from its own hardware, but they are built differently and licensed differently. Virtuozzo Infrastructure is a commercial hyperconverged platform with OpenStack orchestration, KVM and Virtuozzo's own software-defined storage, licensed by physical CPU cores and storage capacity. Cozystack is an open-source CNCF project under Apache 2.0 that runs VMs (KubeVirt) and containers on Kubernetes, with a Tenant model, a catalogue of managed databases, message brokers and S3, and GPUs through the NVIDIA GPU Operator. Virtuozzo is stronger on built-in VM high availability and a mature hyperconverged storage layer; Cozystack fits providers who want managed services beyond VMs and no per-core licence. Ænix, which created and co-maintains Cozystack, sells it as Ænix Public Cloud Platform with billing and WHMCS integration.**
quick_facts:
  - label: "What it is"
    value: "A head-to-head comparison of Virtuozzo Infrastructure and Cozystack as platforms a hosting provider sells cloud services from."
  - label: "Licence"
    value: "Cozystack: Apache 2.0, no per-core licence. Virtuozzo Infrastructure: commercial licence keys counting physical CPU cores on compute nodes and used logical storage."
  - label: "Foundation"
    value: "Virtuozzo Infrastructure: OpenStack orchestration, KVM, Virtuozzo Storage. Cozystack: Kubernetes with KubeVirt, LINSTOR/DRBD storage and Cilium networking."
  - label: "Managed services"
    value: "Virtuozzo: Kubernetes, load balancer, S3 and backup as a service. Cozystack adds managed PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS and more."
  - label: "Where Virtuozzo is stronger"
    value: "VM high availability with automatic evacuation, enabled by default; a hyperconverged storage layer with file, block and S3 from one vendor; Acronis backup integration."
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence)"
  - label: "Migration"
    value: "Virtuozzo Infrastructure exits like an OpenStack cloud; Virtuozzo Server containers and Application Management need their own paths — see the Virtuozzo migration hub."
faq:
  - q: "Is Cozystack a Virtuozzo alternative for hosting providers?"
    a: "For the IaaS product, Virtuozzo Infrastructure, yes: both sell VMs, Kubernetes and S3 to tenants from your own hardware. Cozystack adds a catalogue of managed databases and message brokers and has no per-core licence. For Virtuozzo Application Management (the PaaS, formerly Jelastic) the move is a re-platform onto Kubernetes rather than a like-for-like swap, and the Virtuozzo migration hub covers that separately."
  - q: "When should I stay on Virtuozzo Infrastructure?"
    a: "When automatic VM high availability is a hard requirement and your team has no Kubernetes experience, when your offer is VMs, S3 and Acronis-based backup and customers are not asking for managed databases, or when your billing runs through CloudBlue, for which Virtuozzo documents a connector. In those cases the move costs more than it returns."
  - q: "How is each licensed?"
    a: "Virtuozzo Infrastructure uses licence keys (lease, annual or perpetual) that grant a number of physical CPU cores on compute nodes and a logical storage limit. Cozystack is open source under Apache 2.0 with no licence fee; what Ænix sells is a subscription, priced per 10 physical nodes per month (Basic $1,250, Standard $3,000, Plus $5,500 on annual billing, Enterprise custom), which includes support and the proprietary Ænix commercial modules."
  - q: "How does multi-tenancy compare?"
    a: "Virtuozzo Infrastructure follows the OpenStack model of domains, projects and users, with a self-service panel for domain administrators and project members. Cozystack uses a Tenant object: nested tenants, each with its own quotas, Cilium network isolation created with the tenant, its own Kubernetes clusters and services, and per-tenant observability."
  - q: "What about GPUs?"
    a: "Both pass GPUs to virtual machines: Virtuozzo documents GPU passthrough and vGPU, and Cozystack offers whole-GPU PCI passthrough or NVIDIA vGPU with your NVIDIA vGPU licence. In tenant Kubernetes clusters, Cozystack also exposes MIG partitions through the NVIDIA GPU Operator on MIG-capable cards, and HAMi provides time-sliced sharing and oversubscription."
  - q: "Can we sell Cozystack services through WHMCS like we sell Virtuozzo today?"
    a: "Yes. The Ænix WHMCS integration is a proprietary Ænix module included in every Ænix Public Cloud Platform tier; it exposes Kubernetes, managed databases, VMs, message brokers, S3 and GPU as WHMCS products, with usage metered per tenant. WHMCS modules for Virtuozzo exist from third parties; Virtuozzo itself documents a CloudBlue integration."
hreflang_de: /de/vergleichen/cozystack-vs-virtuozzo/
---

**Two ways to sell cloud from your own racks. One is a licensed hyperconverged stack with OpenStack underneath; the other is open source on Kubernetes with a managed-services catalogue on top.**

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** — Cozystack with the commercial surfaces a hosting business needs: billing, the [WHMCS integration](/products/whmcs-integration/), a branded customer portal, tenant lock and suspension. Moving an existing estate? The **[Virtuozzo migration hub](/migration/virtuozzo/)** covers the three Virtuozzo products path by path.

## Who this comparison is for

Virtuozzo is sold largely through hosting providers and service providers, who rebrand it and resell VMs, storage and containers to their own customers. That is the same audience Cozystack's public-cloud use is built for, so the question here is narrow: if you run, or are about to buy, **Virtuozzo Infrastructure** (formerly Virtuozzo Hybrid Infrastructure) to sell IaaS, what changes on Cozystack?

Virtuozzo renamed its products in 2026. The IaaS is now **Virtuozzo Infrastructure**, the PaaS formerly called Application Platform (originally Jelastic) is **Virtuozzo Application Management**, and the container-and-VM host formerly called Hybrid Server is **Virtuozzo Server**. This page compares against Virtuozzo Infrastructure, the product a hosting provider replaces with Cozystack. Virtuozzo Server and Application Management are not like-for-like comparisons; the [migration hub](/migration/virtuozzo/) explains what happens to them.

## At a glance

<div class="compare-elevated compare-elevated--col3">

| | Virtuozzo Infrastructure | Cozystack |
|---|---|---|
| **Licence** | Commercial licence keys (lease, annual, perpetual) counting physical CPU cores and used logical storage | Apache 2.0, no licence fee |
| **Orchestration** | OpenStack (Nova, Neutron, Cinder, Glance, Keystone, Octavia, Magnum) | Kubernetes; VMs via KubeVirt |
| **Hypervisor** | KVM | KVM through KubeVirt |
| **Storage** | Virtuozzo Storage: file, block (iSCSI) and S3 in one software-defined layer | LINSTOR/DRBD replicated block storage; S3 via SeaweedFS |
| **Multi-tenancy** | Domains, projects and users; self-service panel | Nested Tenant objects with quotas, network isolation and per-tenant observability |
| **Kubernetes for customers** | Kubernetes as a Service | Managed Kubernetes clusters per tenant |
| **Managed databases and brokers** | Not part of the IaaS product | PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS, MongoDB, OpenSearch, Qdrant |
| **Load balancing** | Load Balancer as a Service | Services of type LoadBalancer, Cilium with BGP or L2 announcements |
| **Backup** | Backup Gateway for Acronis Cyber Protect; Backup and Restore as a Service | Velero with encrypted backups to S3-compatible storage |
| **VM high availability** | Automatic evacuation of VMs from a failed node, on by default | Live migration for planned maintenance; no automated VM failover after unplanned node loss |
| **GPU** | GPU passthrough and vGPU for VMs | VMs: PCI passthrough or NVIDIA vGPU (your NVIDIA licence). Tenant Kubernetes: MIG partitions via the GPU Operator, HAMi time-slicing |
| **Billing** | CloudBlue connector documented by Virtuozzo; third-party WHMCS modules | Ænix Billing and WHMCS integration (proprietary Ænix modules, in every Public Cloud Platform tier) |

</div>

<!-- sources: licensing https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/managing-licenses.html ; services https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/welcome.html ; VM HA https://docs.virtuozzo.com/virtuozzo_infrastructure_7_3_admins_guide/configuring-virtual-machine-ha.html ; GPU https://docs.virtuozzo.com/virtuozzo_infrastructure_7_3_admins_guide/configuring-gpu-passthrough.html ; CloudBlue https://docs.virtuozzo.com/virtuozzo_hybrid_infrastructure_4_7_cloudblue_integration_guide/introduction.html ; OpenStack components: see /migration/virtuozzo/ sources -->

## Architecture: OpenStack underneath versus Kubernetes underneath

Virtuozzo describes Infrastructure as a hyperconverged solution providing storage, compute and network resources for businesses and service providers. Underneath the vendor's management layer it is OpenStack: administrators reconfigure Nova, Cinder and Neutron through Kolla-Ansible, and the documentation drives it with the standard `openstack` client against Keystone. <!-- source: https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/welcome.html (product description); OpenStack/Kolla details: https://www.virtuozzo.com/infrastructure-docs/ as cited on /migration/virtuozzo/ -->

That has two consequences for a provider. The first is good: the APIs are familiar, tooling written for OpenStack works, and Virtuozzo has packaged an otherwise demanding stack into something a smaller team can install and run. The second is that the product shape is OpenStack's — compute, block, networks, images — with Kubernetes offered as one more service on top.

Cozystack inverts that. Kubernetes is the control plane for everything, virtual machines run as KubeVirt workloads next to containers, and every service a tenant can order — a VM, a Kubernetes cluster, a PostgreSQL instance, an S3 bucket — is a declared object reconciled by the platform. Nodes run Talos Linux, an immutable operating system with no SSH. The practical effect is that adding a new managed service is packaging work on one API, not a new OpenStack project to integrate.

## Multi-tenancy

Virtuozzo Infrastructure uses the OpenStack model: domains contain projects, domain administrators manage everything in their domain, and project members manage virtual objects in their projects through a self-service panel. <!-- source: https://docs.virtuozzo.com/pdf/virtuozzo_infrastructure_7_3_self_service_guide.pdf --> It is a well-understood model and maps cleanly to "reseller, then customer".

Cozystack's unit is the **Tenant**. Tenants nest, each carries its own quotas, creating one provisions Cilium network policies that deny traffic from other tenants by default, and each tenant can run its own Kubernetes clusters and managed services with its own monitoring. For a provider whose customers are themselves resellers or agencies, nesting is the feature that matters.

## What you can sell: the catalogue

Both platforms sell VMs, Kubernetes and S3. Virtuozzo Infrastructure lists Kubernetes as a Service, Load Balancer as a Service, Backup and Restore as a Service and persistent storage for Kubernetes alongside file, block and S3 object storage. <!-- source: https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/welcome.html -->

Where the two diverge is above the infrastructure line. Cozystack ships a catalogue of managed data services that tenants order from the dashboard: PostgreSQL (CloudNativePG), MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS, MongoDB, OpenSearch and Qdrant, plus S3 (SeaweedFS), HTTP cache and VPN. For a hosting provider that is where margin sits: a managed database is priced per service, not per vCPU, and customers who would otherwise leave for a hyperscaler's database service can stay.

## Storage

Storage is Virtuozzo's home ground. Virtuozzo Storage is a mature software-defined layer that serves file, iSCSI block and S3 object storage from the same cluster, and Virtuozzo's Backup Gateway lets Acronis Cyber Protect store backups on it, in public clouds or on NAS. <!-- source: https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/welcome.html -->

Cozystack uses LINSTOR with DRBD replication for block volumes, with replication set per StorageClass, and SeaweedFS for S3. Backups go through Velero, encrypted in object storage. It covers the same needs with more components and makes you decide where backups land; it does not offer a single storage product with one vendor behind every protocol.

## GPU

Both platforms put GPUs into virtual machines: Virtuozzo documents GPU passthrough and vGPU, and notes that VMs with attached physical GPUs cannot be live-migrated. <!-- source: https://docs.virtuozzo.com/virtuozzo_infrastructure_7_3_admins_guide/configuring-gpu-passthrough.html --> On Cozystack, VMs get whole GPUs through PCI passthrough or NVIDIA vGPU with your own NVIDIA vGPU licence. Inside tenant Kubernetes clusters, the NVIDIA GPU Operator exposes MIG partitions on MIG-capable cards as schedulable resources, and HAMi adds time-sliced sharing and oversubscription — useful when the product you sell is inference capacity rather than whole cards.

## Billing and the commercial layer

A hosting platform is only half a product without billing. Virtuozzo documents a connector that provisions Virtuozzo Infrastructure subscriptions ordered through the CloudBlue commerce platform, with customer projects as the billed assets. <!-- source: https://docs.virtuozzo.com/virtuozzo_hybrid_infrastructure_4_7_cloudblue_integration_guide/introduction.html --> WHMCS modules for Virtuozzo products are sold by third parties rather than by Virtuozzo. <!-- source: https://www.modulesgarden.com/products/whmcs/virtuozzo-hybrid-server -->

On the Cozystack side, the commercial layer comes from Ænix and is proprietary, while the platform stays open source. **Ænix Billing** reports usage per tenant and per workload — vCPU, memory, volumes by storage class, IP addresses, S3 — at per-minute granularity through a Kubernetes API, and the **[WHMCS integration](/products/whmcs-integration/)** turns the catalogue into WHMCS products with provisioning and metering. Both are included in every tier of **[Ænix Public Cloud Platform](/products/public-cloud-platform/)**, together with a branded customer portal and automatic tenant lock and suspension for overdue accounts.

## Licensing and cost

Virtuozzo Infrastructure is licensed with keys that grant a number of physical CPU cores on compute nodes and a logical storage limit, as lease (renewed monthly), annual or perpetual licences; a trial key is limited to 96 cores and 1 TB. <!-- source: https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/managing-licenses.html --> Cost therefore grows with cores and stored data.

Cozystack has no licence fee. Ænix sells a subscription — support plus the proprietary commercial modules — priced per 10 physical nodes per month: Basic $1,250, Standard $3,000, Plus $5,500 on annual billing, Enterprise custom ([pricing](/pricing/)). For a five-year model with sourced Virtuozzo prices at 50, 200 and 1,000 VMs, use the **[Virtuozzo vs Cozystack TCO calculator](/tco-calculator/vs-virtuozzo/)**; it labels every assumption, including where its Virtuozzo figure is an estimate.

## Where Virtuozzo is genuinely better

- **VM high availability out of the box.** When a compute node fails, Virtuozzo Infrastructure evacuates its running VMs to healthy nodes and starts them, and this is enabled by default when the compute cluster is created. <!-- source: https://docs.virtuozzo.com/virtuozzo_infrastructure_7_3_admins_guide/configuring-virtual-machine-ha.html --> Cozystack has live migration for planned maintenance and node health handling, but no automated VM failover after unplanned node loss; building one is configuration and rehearsal work.
- **One storage product for every protocol.** File, iSCSI block and S3 from one hyperconverged layer, supported by one vendor, with Acronis backup storage built in. Cozystack assembles the same from LINSTOR, SeaweedFS and Velero.
- **No Kubernetes skills required to run it.** A team that knows VMs and OpenStack concepts can operate Virtuozzo Infrastructure. Cozystack asks your operators to be comfortable with Kubernetes.
- **CloudBlue.** If your commerce already runs on CloudBlue, Virtuozzo has a documented connector; Ænix's modules target WHMCS and your own billing.

If your offer is VMs, S3 and backup, your customers do not ask for managed databases or Kubernetes, and your team is not ready for Kubernetes, staying on Virtuozzo Infrastructure is a reasonable decision.

## When Cozystack fits

- You want to sell **managed services beyond VMs** — databases, message brokers, Kubernetes — without building each one.
- You want to stop paying a **per-core licence** as the fleet grows.
- Your customers include resellers who need **nested tenants**.
- You run **Virtuozzo Server 7**, which passed end of maintenance in July 2024, and need somewhere for those workloads to go — the [migration hub](/migration/virtuozzo/) covers system containers and KVM guests.
- You are adding **GPU capacity** and want MIG partitions or HAMi sharing for Kubernetes workloads alongside GPU VMs.

Read more for hosting providers on **[the industry page](/industries/hosting-providers/)**.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/migration/virtuozzo/">Virtuozzo migration hub →</a>
</div>

## Sources

Virtuozzo facts on this page come from Virtuozzo's own documentation, checked in October 2026:

- [Virtuozzo Infrastructure 7.4 Administrator's Guide — Welcome](https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/welcome.html) — product description, storage types, Kubernetes, Load Balancer, Backup and Restore as a Service
- [Managing licenses (7.4)](https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/managing-licenses.html) — licence models and counted resources
- [Configuring virtual machine high availability (7.3)](https://docs.virtuozzo.com/virtuozzo_infrastructure_7_3_admins_guide/configuring-virtual-machine-ha.html)
- [Configuring GPU passthrough (7.3)](https://docs.virtuozzo.com/virtuozzo_infrastructure_7_3_admins_guide/configuring-gpu-passthrough.html) and [Switching between GPU passthrough and vGPU (5.4)](https://docs.virtuozzo.com/virtuozzo_hybrid_infrastructure_5_4_admins_guide/switching-between-gpu-passthrough-and-vgpu.html)
- [Self-Service Guide (7.3)](https://docs.virtuozzo.com/pdf/virtuozzo_infrastructure_7_3_self_service_guide.pdf) — domains, projects, users
- [CloudBlue integration guide](https://docs.virtuozzo.com/virtuozzo_hybrid_infrastructure_4_7_cloudblue_integration_guide/introduction.html)
- [Virtuozzo product lifecycle policy](https://www.virtuozzo.com/server-docs/product-lifecycle-policy/) — Virtuozzo Server 7 end of maintenance

---

*Ænix created Cozystack (CNCF Sandbox project) and co-maintains it with maintainers from other companies. On top of it we offer Ænix Public Cloud Platform, Ænix Private Cloud Platform and Ænix AI Platform.*
