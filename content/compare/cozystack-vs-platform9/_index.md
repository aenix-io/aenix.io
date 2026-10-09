---
title: "Cozystack vs Platform9 Private Cloud Director — two routes off VMware"
seo_title: "Cozystack vs Platform9: two VMware exit platforms"
primary_keyword: "cozystack vs platform9"
secondary_keywords:
  - "platform9 alternative"
  - "platform9 private cloud director alternative"
  - "platform9 vs kubevirt"
  - "platform9 vs cozystack"
description: "Cozystack vs Platform9 Private Cloud Director: management plane, tenancy, managed services, GPU, VMware migration and pricing, and where Platform9 is stronger."
related_pages: ["/alternatives/vmware-alternative/", "/alternatives/vmware-cloud-director-alternative/", "/migration/vmware/", "/products/public-cloud-platform/", "/products/private-cloud-platform/", "/products/cozystack/", "/pricing/"]
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Platform9 Private Cloud Director and Cozystack both run virtual machines on KVM on hardware you already own, and both are positioned as VMware replacements, but they are built differently. Private Cloud Director is a commercial, virtualization-first platform whose compute, block storage, network and identity services expose OpenStack APIs; its management plane is either hosted by Platform9 as SaaS or self-hosted, and it ships VM HA, Dynamic Resource Rebalancing and the vJailbreak migration tool. Cozystack is an open-source CNCF project under Apache 2.0 that runs VMs through KubeVirt on Kubernetes and adds a catalogue of managed services — databases, S3, Kubernetes, GPU — behind nested tenants. Platform9 fits teams that want a vSphere-like admin experience fast; Cozystack fits providers that sell more than VMs. Ænix, which created and co-maintains Cozystack, sells support and Ænix Public Cloud Platform on top.**
quick_facts:
  - label: "What it is"
    value: "A head-to-head comparison of Platform9 Private Cloud Director and Cozystack for enterprises and service providers leaving VMware."
  - label: "Hypervisor"
    value: "Both use KVM. Private Cloud Director manages KVM hosts through a host agent; Cozystack runs VMs as Kubernetes workloads through KubeVirt."
  - label: "Management plane"
    value: "Platform9: SaaS hosted by Platform9, or self-hosted (air-gapped install documented). Cozystack: always on your own hardware; there is no vendor-hosted option."
  - label: "Licence"
    value: "Cozystack: Apache 2.0, CNCF project (Sandbox since 2025-02-28; Incubating application in due diligence). Private Cloud Director: commercial, with a free Community Edition for labs and evaluation."
  - label: "Pricing basis"
    value: "Platform9 service-provider programme: $10.40 per core per month after a 90-day $1,000/month promotion. Ænix Public Cloud Platform subscription: from $1,250 per 10 nodes per month, billed annually."
  - label: "Who it is for"
    value: "Hosting providers, former VMware Cloud Service Provider partners and enterprises choosing a post-VMware platform."
quick_facts_source: "[Platform9 Private Cloud Director docs](https://docs.platform9.com/private-cloud-director/introduction/architecture-overview), [Platform9 service providers](https://platform9.com/service-providers/), [Ænix pricing](/pricing/)"
faq:
  - q: "Is Platform9 Private Cloud Director based on OpenStack?"
    a: "Platform9 documents that Private Cloud Director's compute, block storage, network and identity services expose OpenStack APIs, that the OpenStack CLI can manage them, and that its Identity Service extends the open-source Keystone project. Day-to-day administration happens in Platform9's own UI, which is modelled on a virtualization admin's workflow. Cozystack uses no OpenStack components: VMs, tenants and services are Kubernetes resources."
  - q: "Can I run Platform9 without a vendor-hosted control plane?"
    a: "Yes. Besides the SaaS model, Platform9 offers a self-hosted management plane installed and upgraded with its airctl tool, including an air-gapped installation, and a free Community Edition that Platform9 states is not for production. Note that Platform9's service-provider programme page describes the Platform9-run control plane. Cozystack has only one model: the whole platform runs on your hardware."
  - q: "Which platform has better VM high availability?"
    a: "Platform9, today. Private Cloud Director ships VM HA that restarts VMs on healthy hosts after a host failure, Dynamic Resource Rebalancing that live-migrates VMs to even out load, and stretched clusters across two sites. Cozystack offers live migration and replicated storage, but VMs do not restart on their own after unplanned node loss: Cozystack ships no fencing, so an operator first marks the failed node out of service (or an external fencing mechanism does), and only then does KubeVirt restart the VMs on healthy nodes."
  - q: "What can a provider sell on each platform besides VMs?"
    a: "Platform9 documents Kubernetes clusters, Load Balancer as a Service and DNS as a Service, plus integrations with existing firewall and VPN components. Cozystack's catalogue adds managed PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS and other services, S3-compatible object storage and GPU workloads, each provisioned per tenant. Ænix Public Cloud Platform adds billing and WHMCS integration on top."
  - q: "How do GPUs compare?"
    a: "For VMs the two are close: Platform9 documents GPU passthrough and NVIDIA vGPU with vendor-defined profiles, and Cozystack offers passthrough or NVIDIA vGPU with your NVIDIA vGPU licence. Inside tenant Kubernetes clusters Cozystack also exposes MIG partitions on MIG-capable cards through the NVIDIA GPU Operator and time-sliced sharing through HAMi. Platform9 notes that VM HA is not supported for GPU-enabled clusters."
  - q: "How does VMware migration work on each?"
    a: "Platform9 offers vJailbreak, a free tool that connects to vCenter and moves VMs to any OpenStack-compliant cloud, including in-place rolling conversion of vSphere clusters. Cozystack migrations use Forklift into KubeVirt, with runbooks and delivery from Ænix; see the VMware migration hub for durations and method."
hreflang_de: /de/vergleichen/cozystack-vs-platform9/
---

**Both run KVM on the servers you already own. One gives a virtualization team a familiar console quickly; the other gives a provider a catalogue of services to sell.**

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** for hosting providers and former VMware Cloud Service Provider partners — customer portal, billing, WHMCS integration and a service catalogue beyond VMs — and **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** for enterprises replacing vSphere internally.

## What Platform9 Private Cloud Director is

Private Cloud Director is Platform9's enterprise private cloud platform for virtualized and Kubernetes infrastructure on existing server and storage hardware. It is built on the open-source KVM hypervisor, and its compute, block storage, network and identity services expose OpenStack APIs, so the OpenStack CLI works alongside Platform9's own `pcdctl` and its UI. <!-- source: https://docs.platform9.com/private-cloud-director/introduction/readme ; https://docs.platform9.com/private-cloud-director/automation-and-cli/openstack-cli -->

The architecture splits a **management plane** (APIs, databases, scheduling, the UI) from a **data plane** of physical hosts you supply, joined by a Platform9 host agent on each host. Workloads always run in your data centre. The management plane comes in two commercial models — **SaaS**, hosted and patched by Platform9, or **self-hosted**, installed and upgraded by you with the `airctl` tool, including a documented air-gapped installation — plus a free **Community Edition** with a single-host management plane, which Platform9 states is for labs and evaluation, not production. <!-- source: https://docs.platform9.com/private-cloud-director/introduction/architecture-overview ; https://docs.platform9.com/private-cloud-director/getting-started/self-hosted/self-hosted-airgap-install ; https://docs.platform9.com/private-cloud-director/getting-started/getting-started-with-community-edition -->

Platform9 aims it squarely at VMware exits, for enterprises and for service providers. Its Cloud Solution Provider Program, announced in June 2026, targets VMware Cloud Service Provider partners ahead of the VCSP programme's end. <!-- source: https://platform9.com/press/platform9-launches-cloud-solution-provider-program-to-give-abandoned-vmware-partners-a-stable-landing/ ; https://platform9.com/service-providers-guide-to-exiting-vmware/ -->

## What Cozystack is

Cozystack is an open-source platform for building clouds, a CNCF Sandbox project under Apache 2.0 whose Incubation application is in due diligence. It runs virtual machines through KubeVirt and containers on the same Kubernetes API, networks them with Cilium, stores them on LINSTOR/DRBD, and isolates customers with a Tenant resource that can be nested. On top it provisions managed databases, message brokers, S3-compatible object storage, tenant Kubernetes clusters and GPU workloads from one catalogue. Nodes run Talos Linux, an immutable OS with no SSH. The whole platform, management included, runs on your hardware.

Ænix created Cozystack and co-maintains it with maintainers from other companies. Ænix sells support and services, plus Ænix Public Cloud Platform with proprietary billing and WHMCS modules.

## Head-to-head

<div class="compare-elevated compare-elevated--col3">

| | Platform9 Private Cloud Director | Cozystack |
|---|---|---|
| **Licence** | Commercial; free Community Edition (not for production) | Apache 2.0, CNCF project |
| **Hypervisor** | KVM via host agent | KVM via KubeVirt on Kubernetes |
| **APIs** | OpenStack-compatible APIs, `pcdctl`, Terraform provider | Kubernetes API and CRDs |
| **Management plane** | SaaS (Platform9-run) or self-hosted, air-gap documented | Self-hosted only |
| **Multi-tenancy** | Domains, regions, tenants, users and groups; quotas; Keystone-based identity | Nested Tenant resources with quotas, RBAC, network isolation |
| **VM availability** | VM HA, Dynamic Resource Rebalancing, stretched clusters across two sites | Live migration, replicated storage; VMs restart after a node loss only once the node is fenced |
| **Kubernetes** | Clusters with control planes hosted in the management plane | Tenant Kubernetes clusters with a managed control plane per tenant |
| **Managed services** | LBaaS, DNSaaS; firewall and VPN through existing components | PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS and more; S3 |
| **GPU** | Passthrough and NVIDIA vGPU for VMs | Passthrough or NVIDIA vGPU for VMs; MIG partitions and HAMi sharing in tenant Kubernetes clusters |
| **VMware migration** | vJailbreak (free), in-place rolling conversion | Forklift into KubeVirt, Ænix runbooks |
| **Provider billing** | Not documented in the product | Ænix billing and WHMCS integration (proprietary Ænix modules) |

</div>

<!-- sources for the Platform9 column: https://docs.platform9.com/private-cloud-director/introduction/architecture-overview ; https://docs.platform9.com/private-cloud-director/identity-and-multi-tenancy/identity-and-multi-tenancy-overview ; https://docs.platform9.com/private-cloud-director/virtualized-clusters/stretched-clusters ; https://docs.platform9.com/private-cloud-director/gpu/gpu-support-pcd/gpu-faqs ; https://docs.platform9.com/private-cloud-director/automation-and-cli/terraform-provider ; https://github.com/platform9/vjailbreak -->

## The management plane: who runs it, and where

This is the line that matters most for sovereignty and regulated buyers, so state it exactly.

Platform9's SaaS model keeps your workloads in your data centre but runs the management plane — identity, scheduling, the Kubernetes control planes of your clusters — in Platform9's cloud, which reaches your hosts over the management network. Platform9 patches and upgrades it for you, and that is a genuine operational saving. Its service-provider programme page describes this model: "Platform9 runs the control plane in our cloud." <!-- source: https://platform9.com/service-providers/ --> For organisations whose compliance, sovereignty or air-gap requirements rule that out, Platform9 documents a self-hosted management plane, which you then upgrade and back up yourself. <!-- source: https://docs.platform9.com/private-cloud-director/introduction/architecture-overview -->

Cozystack has no hosted option at all. Management and data plane run on your hardware, from day one, under an Apache 2.0 licence. You operate the upgrades — GitOps-managed platform releases — or buy that from Ænix as support. There is no vendor account in the path for a regulator to ask about.

## Multi-tenancy for providers

Platform9 builds tenancy on domains, regions, tenants, users and groups, with quotas, tenant-scoped networking and per-tenant single sign-on; its service-provider page describes "domain-level tenancy, network isolation, RBAC, and quotas" per customer. <!-- source: https://docs.platform9.com/private-cloud-director/identity-and-multi-tenancy/identity-and-multi-tenancy-overview ; https://platform9.com/service-providers/ -->

Cozystack's Tenant is a Kubernetes resource. Creating one provisions network policies that deny traffic from other tenants by default, scoped RBAC and quotas, and a tenant can hold child tenants — useful for resellers and for customers with their own sub-organisations. Every service a tenant orders lives inside that boundary.

## What you can sell

Here the platforms diverge. Private Cloud Director is virtualization-first: VMs, Kubernetes clusters, Load Balancer as a Service and DNS as a Service, with firewall and VPN as a service offered through compatible existing components. <!-- source: https://docs.platform9.com/private-cloud-director/introduction/architecture-overview --> We found no managed database or object-storage service in its documentation.

Cozystack's catalogue starts where that ends: managed PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS, MongoDB, OpenSearch and Qdrant, S3-compatible object storage, HTTP cache and VPN, tenant Kubernetes and GPU workloads. For a hosting provider that is the margin: managed services priced per service rather than VMs priced per vCPU. Ænix Public Cloud Platform adds the commercial surfaces — billing, a branded customer portal, WHMCS integration, tenant lock and suspension.

## GPU

For virtual machines the two are close. Platform9 documents GPU passthrough and NVIDIA vGPU with NVIDIA-defined profiles, configured per host, and notes that VM HA is not supported for GPU-enabled clusters. <!-- source: https://docs.platform9.com/private-cloud-director/gpu/gpu-support-pcd/gpu-faqs -->

Cozystack gives VMs whole GPUs through PCI passthrough, or NVIDIA vGPU with your NVIDIA vGPU licence. In tenant Kubernetes clusters the NVIDIA GPU Operator exposes MIG partitions on MIG-capable cards, and HAMi adds time-sliced sharing and oversubscription, so container workloads such as inference can share a card. Per-tenant GPU usage is measured for your billing system.

## VMware migration

Platform9's vJailbreak connects to vCenter, discovers VMs, converts disks and moves them to any OpenStack-compliant cloud, hot or cold, and can convert vSphere clusters in place in a rolling fashion. It is free. <!-- source: https://github.com/platform9/vjailbreak ; https://docs.platform9.com/private-cloud-director/introduction/readme --> In-place conversion of the same hosts is a real advantage when there is no spare hardware.

Cozystack migrations move VMs into KubeVirt with Forklift, in waves, with runbooks and delivery from Ænix. The [VMware migration hub](/migration/vmware/) gives realistic durations — about 8–12 months for roughly 100 VMs including planning — and the method.

## Pricing models

Platform9 does not publish a price list for Private Cloud Director; its pricing link leads to a contact form. <!-- source: https://platform9.com/pricing/ --> Its service-provider programme is public: a $1,000 per month platform fee with unlimited cores for the first 90 days, then $10.40 per core per month, or a custom package. <!-- source: https://platform9.com/service-providers/ -->

Ænix sells a subscription, not a licence: support plus the proprietary commercial modules, priced per 10 physical nodes per month — from $1,250 (Basic, billed annually), with Standard, Plus and Enterprise tiers on [the pricing page](/pricing/). Private Cloud Platform programmes are quoted per RFP. Per-core and per-node pricing scale differently with core density, so compare them on your own hardware. If the subscription ends, the open-source Cozystack platform keeps running.

## Where Platform9 is genuinely better

- **A familiar console for vSphere administrators.** VM HA, Dynamic Resource Rebalancing, cloning, snapshots and affinity rules, presented the way a virtualization team expects. Cozystack asks that team to learn Kubernetes.
- **Automated VM failover.** VM HA restarts VMs on healthy hosts after a host failure, and stretched clusters recover VMs on the peer site. Cozystack has nothing equivalent built in. It ships no fencing, so after an unplanned node loss its VMs stay down until an operator marks the node out of service or removes it, or an external fencing mechanism does; KubeVirt then restarts them on healthy nodes, and VMs on replicated LINSTOR/DRBD storage come back with their data. Worker nodes of tenant Kubernetes clusters, by contrast, are replaced automatically. There is no automated failover of VMs to another site.
- **A hosted management plane, if you want one.** Platform9 runs and upgrades it for you. Cozystack always leaves that work with you or your support contract.
- **In-place conversion of vSphere clusters.** vJailbreak converts hosts in rolling fashion, without a second set of servers.
- **Enterprise storage reuse as a design point.** Private Cloud Director is built to keep your existing storage arrays and server hardware. <!-- source: https://docs.platform9.com/private-cloud-director/introduction/readme --> Cozystack's default is LINSTOR replicated storage on the nodes' own disks, with other storage classes as an integration task.

## When Cozystack fits

Cozystack fits when the business is selling cloud rather than running VMs: a hosting provider or former VMware Cloud Service Provider partner that needs managed databases, S3, Kubernetes and GPU next to VMs, nested tenants for resellers, per-tenant billing and a management plane that never leaves its own data centre, under an open-source licence. For providers coming from VMware Cloud Director specifically, see the **[VMware Cloud Director alternative](/alternatives/vmware-cloud-director-alternative/)**; for the wider market, **[VMware alternative](/alternatives/vmware-alternative/)**. The engine itself is described on the **[Cozystack](/products/cozystack/)** page.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/pricing/">See pricing →</a>
</div>

## Sources

Platform9 facts on this page were checked against Platform9's own documentation and site in October 2026:

- [Private Cloud Director — Overview](https://docs.platform9.com/private-cloud-director/introduction/readme)
- [Private Cloud Director — Architecture Overview](https://docs.platform9.com/private-cloud-director/introduction/architecture-overview)
- [Community Edition](https://docs.platform9.com/private-cloud-director/getting-started/getting-started-with-community-edition)
- [Air Gapped Installation](https://docs.platform9.com/private-cloud-director/getting-started/self-hosted/self-hosted-airgap-install)
- [Identity and multi-tenancy overview](https://docs.platform9.com/private-cloud-director/identity-and-multi-tenancy/identity-and-multi-tenancy-overview)
- [OpenStack CLI](https://docs.platform9.com/private-cloud-director/automation-and-cli/openstack-cli)
- [Stretched Clusters](https://docs.platform9.com/private-cloud-director/virtualized-clusters/stretched-clusters)
- [GPU FAQs](https://docs.platform9.com/private-cloud-director/gpu/gpu-support-pcd/gpu-faqs)
- [vJailbreak on GitHub](https://github.com/platform9/vjailbreak)
- [Platform9 for service providers](https://platform9.com/service-providers/)
- [Platform9 Cloud Solution Provider Program announcement](https://platform9.com/press/platform9-launches-cloud-solution-provider-program-to-give-abandoned-vmware-partners-a-stable-landing/)

Product names are trademarks of their owners. If anything here is out of date, tell us and we will correct it.

---

*Ænix created Cozystack (CNCF Sandbox project) and co-maintains it with maintainers from other companies. On top of it we offer Ænix Public Cloud Platform, Ænix Private Cloud Platform and Ænix AI Platform.*
