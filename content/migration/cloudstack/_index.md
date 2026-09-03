---
title: "CloudStack migration — moving a service-provider cloud to Kubernetes"
description: "Apache CloudStack to Cozystack migration: zones and offerings, the virtual router redesign, accounts to tenants, billing, and when CloudStack should stay."
date: 2026-09-03
lastmod: 2026-09-03
language: "en"
hreflang_de: /de/migration/cloudstack/
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "cloudstack migration"
secondary_keywords: ["apache cloudstack migration", "cloudstack to kubernetes", "cloudstack alternative", "migrate from cloudstack"]
related_pages:
  - /products/public-cloud-platform/
  - /products/whmcs-integration/
  - /products/cozystack
  - /services/platform-readiness-assessment
  - /alternatives/vmware-alternative
  - /migration/openstack/
direct_answer: |
  **A CloudStack migration moves a multi-tenant service-provider cloud off Apache CloudStack onto a Kubernetes-native control plane. Aenix runs these onto Cozystack, an Apache 2.0 CNCF project running VMs and containers on one Kubernetes API. For KVM-based CloudStack the disks move mechanically: QCOW2 volumes on NFS or Ceph primary storage import into KubeVirt without guest changes. The work is in everything around the disks — accounts, domains and projects are re-modelled onto the Tenant CRD, service and disk offerings become catalogue definitions, and the CloudStack virtual router is replaced by Cilium, which means DHCP, source NAT, port forwarding, VPN and load balancing are redesigned rather than converted. Billing integrations that call the CloudStack API must be re-pointed. Mid-size providers run four to twelve months. CloudStack is actively maintained, so the case for moving is consolidation, not abandonment.**
quick_facts:
  - label: "What it is"
    value: "A cohort-based migration of a multi-tenant CloudStack cloud onto a Kubernetes-native platform (Cozystack), covering compute, tenancy, networking and billing."
  - label: "Moves mechanically"
    value: "KVM guests — QCOW2 volumes from NFS or Ceph primary storage import into KubeVirt with no guest rebuild."
  - label: "Needs redesign"
    value: "The CloudStack virtual router (DHCP, source NAT, port forwarding, site-to-site VPN, LB) has no single equivalent; its functions are spread across Cilium and platform services."
  - label: "Tenancy mapping"
    value: "Domains, accounts and projects re-model onto the Tenant CRD; service and disk offerings become catalogue definitions."
  - label: "Commercial integrations"
    value: "WHMCS, HostBill and in-house portals call the CloudStack API and must be re-pointed — usually the longest work item after networking."
  - label: "Typical timeline"
    value: "Four to twelve months for a mid-size provider; longer where customers hold CloudStack API credentials."
  - label: "When not to migrate"
    value: "A stable KVM estate, VMs as the whole product, and no demand for containers or managed services — CloudStack is actively maintained and staying is defensible."
faq:
  - q: "Is Apache CloudStack dead? Why migrate at all?"
    a: "No. CloudStack is an active Apache project with a regular release cadence, and it gained users during the post-Broadcom VMware exodus. The case for migrating is not abandonment, it is consolidation: providers whose customers now want managed Kubernetes, managed databases and object storage alongside VMs end up running CloudStack plus a separate Kubernetes stack plus separate storage, and paying for three control planes. A Kubernetes-native platform collapses that into one."
  - q: "What moves cleanly from CloudStack, and what does not?"
    a: "On KVM the disks move mechanically — QCOW2 volumes from NFS or Ceph primary storage import into KubeVirt without guest changes. Templates and ISOs in secondary storage carry over as image sources. What does not move: the virtual router, whose DHCP, source NAT, port forwarding, VPN and load balancing functions are redesigned across Cilium and platform services; the CloudStack API surface, which any customer automation depends on; and network offerings, which are a CloudStack-specific abstraction."
  - q: "What happens to our WHMCS or HostBill billing integration?"
    a: "It is re-pointed. Provisioning modules that call the CloudStack API to create instances, resize volumes and read usage records need to target the new platform instead. Aenix ships a WHMCS integration for exactly this path, and usage metering moves from CloudStack usage records to the platform metrics stack. Because this gates revenue, it is scheduled early in the programme rather than left to the end."
  - q: "We run CloudStack on VMware, not KVM. Does that change anything?"
    a: "Yes, and usually for the better: it becomes a VMware migration with a CloudStack-shaped tenancy layer on top. The guest disks are moved with the same VMware tooling used in any vSphere exit, while the CloudStack accounts, offerings and billing integration are re-modelled separately. See the VMware migration hub for the disk-level mechanics."
  - q: "How long does a CloudStack migration take?"
    a: "Four to twelve months for a mid-size provider. The variables are tenant count, how much of the virtual router feature set is actually in use per customer, and whether customers hold CloudStack API credentials of their own — the last one adds a published deprecation timeline to the plan and is the main reason a migration runs past twelve months."
  - q: "Which Aenix platform is the destination?"
    a: "The Aenix Public Cloud Platform in almost every case, because CloudStack operators sell infrastructure to external customers and need the tenant model, service catalogue and billing integration to survive the move. The Aenix Private Cloud Platform is the fit only where CloudStack was deployed as an internal private cloud rather than a commercial one."
service:
  type: "CloudStack Migration"
  areaServed: ["EU", "DACH", "Central Asia"]
  audience: "Hosting providers, MSPs, regional cloud operators"
---

**Apache CloudStack is not dying — it is an active Apache project that picked up users during the VMware exodus. Providers leave it for a different reason: their customers now want managed Kubernetes, databases and object storage next to the VMs, and running CloudStack plus a separate Kubernetes stack means paying for two control planes and staffing both.**

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** — CloudStack estates are almost always sold to external customers, so the tenant model, service catalogue and billing are the parts that have to survive the move. See also **[WHMCS integration](/products/whmcs-integration/)** if CloudStack is billed through WHMCS.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/services/platform-readiness-assessment/">Platform Readiness Assessment →</a>
</div>

---

## When CloudStack should stay

If your product is virtual machines, your estate is stable KVM, your customers are not asking for containers or managed data services, and your team knows the codebase, there is no migration case. CloudStack is maintained, the zone/pod/cluster model scales, and replacing a working IaaS with an equivalent IaaS buys nothing.

The case appears when the product has to broaden. A provider selling only VMs in 2026 is competing on price with everyone else selling only VMs. The moment the roadmap includes managed Kubernetes, managed PostgreSQL, S3-compatible storage or GPU capacity, the question stops being "which IaaS" and becomes "how many control planes am I willing to operate."

---

## What the mapping actually looks like

| CloudStack | Cozystack destination | Migration character |
|---|---|---|
| KVM guests, QCOW2 on NFS or Ceph primary storage | KubeVirt VMs, disks imported via CDI | Mechanical. No guest rebuild for Linux; Windows needs VirtIO handling. |
| Templates and ISOs in secondary storage | Image sources for DataVolumes | Mechanical. |
| Domains, accounts, projects | Tenant CRD hierarchy plus Kubernetes RBAC and OIDC | Re-model. CloudStack's domain tree and the tenant tree are both hierarchical but not identically shaped. |
| Service offerings and disk offerings | Catalogue definitions and storage classes | Re-model. Straightforward, but every offering in use must be enumerated — providers routinely find offerings nobody remembers selling. |
| Virtual router (DHCP, source NAT, port forwarding, static NAT, site-to-site VPN, LB) | Cilium plus platform services; no single replacement object | **Redesign.** The largest single work item. |
| Isolated networks, VPCs, network offerings | Cilium networking with per-tenant policy; LB IPAM with BGP or L2 announcements | Redesign, coupled to the address plan. |
| Security groups (basic zones) | Kubernetes network policy | Re-model. Same intent, different expression. |
| Primary storage (NFS / Ceph RBD) | LINSTOR/DRBD, or keep your existing Ceph cluster via Ceph CSI | Keep Ceph, or move data. A design choice, not a forced change. |
| Secondary storage | Object storage on the platform | Usually a straight move. |
| SystemVMs (SSVM, console proxy) | Platform components; console via the tenant dashboard | Replaced, not migrated. |
| CloudStack API | Kubernetes API and the tenant dashboard | Rewrite for anyone automating against it. |
| Usage records | Platform metrics stack | Re-point. Gates billing — schedule early. |

**The virtual router is the redesign.** In CloudStack it is one appliance per network doing DHCP, DNS forwarding, source NAT, port forwarding, static NAT, load balancing and site-to-site VPN. On a Kubernetes-native platform those functions live in different places: address assignment and policy in Cilium, external addresses through LB IPAM announced by BGP or L2, and VPN as an explicit service where a customer genuinely needs it. Most providers discover during the assessment that only two or three of the virtual router's functions are in real use across the customer base — but the inventory has to be done per customer, because the one tenant using site-to-site VPN is usually the one paying the most.

**Customer-held API credentials set the timeline.** If your customers only ever touch the portal, the API surface is an internal concern and the migration is yours to schedule. If customers have CloudStack API keys and their own automation, you are running a public API deprecation, and that has a communication timeline measured in quarters. This distinction changes the shape of the whole programme and belongs in week one of the assessment.

---

## How the migration runs

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Apache CloudStack</b><div class="diagram__chips"><span>KVM / QCOW2</span><span>Domains, accounts, projects</span><span>Virtual router</span></div></div>
<div class="diagram__conn">assessed, then moved by</div>
<div class="diagram__node"><b>Cohort migration</b><div class="diagram__chips"><span>Disk import to KubeVirt</span><span>Tenant CRD mapping</span><span>Billing re-point</span></div></div>
<div class="diagram__conn">lands on</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium eBPF</span><span>LINSTOR/DRBD</span></div></div>
<div class="diagram__conn">then</div>
<div class="diagram__node"><b>Catalogue expansion</b><div class="diagram__chips"><span>Managed Kubernetes</span><span>Managed databases</span><span>S3, GPU</span></div></div>
</div>
</div>

1. **Architecture review.** Offering inventory, virtual-router feature usage per customer, API-credential exposure, billing integration surface, address plan. Output is a target architecture and a customer-by-customer cohort sequence.
2. **Parallel deployment.** The new platform is built alongside the running CloudStack zones. Both operate together for the duration.
3. **Billing and portal first.** Provisioning and metering are re-pointed before customer workloads move, so that migrated customers are billed correctly from their first day on the new platform. This ordering is deliberate; providers who leave billing to the end migrate customers they cannot invoice.
4. **Cohort migration.** Customers move in groups, smallest and most tolerant first. Each cohort is validated in parallel run before its CloudStack side is released.
5. **Decommission and catalogue expansion.** Freed CloudStack hosts are rebuilt into the target cluster, and the service catalogue widens beyond VMs — which is the reason the migration was worth doing.

**Typical duration:** four to twelve months for a mid-size provider.

---

## How Ænix engages

- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — offering and virtual-router inventory, tenant and address design, billing integration scope, cohort plan, risk register.
- **Pilot cohort** — first customer group migrated with Ænix engineers inside your team, producing the runbooks for the rest.
- **Rolling migration** — cohort by cohort, parallel-run validated, hardware recycled forward.
- **Operations** — your team with **[Cozystack enterprise support](/products/cozystack-enterprise-support/)** behind it, or operated by Ænix.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

---

*Ænix is the team behind Cozystack (CNCF project, Apache 2.0).*
