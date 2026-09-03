---
title: "OpenStack migration — service-by-service move to a Kubernetes control plane"
description: "OpenStack to Cozystack migration: what maps, what is redesigned (Neutron), what does not move (Ironic, Heat), and when staying on OpenStack is right."
date: 2026-09-03
lastmod: 2026-09-03
language: "en"
hreflang_de: /de/migration/openstack/
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "openstack migration"
secondary_keywords: ["migrate from openstack", "openstack to kubernetes", "openstack modernization", "openstack replacement"]
related_pages:
  - /alternatives/openstack-alternative
  - /products/public-cloud-platform/
  - /products/private-cloud-platform/
  - /products/cozystack
  - /services/platform-readiness-assessment
  - /migration/vmware/
direct_answer: |
  **An OpenStack migration moves compute, tenants, storage and networking from an OpenStack cloud onto a Kubernetes-native control plane. Aenix runs these onto Cozystack, an Apache 2.0 CNCF project that runs VMs and containers on one Kubernetes API. The mapping is uneven and worth knowing before scoping: Nova and Glance move mechanically because both sides are KVM, Cinder either keeps Ceph or moves to LINSTOR, Keystone projects are re-modelled onto the Tenant CRD, and Neutron is a genuine redesign onto Cilium rather than a conversion. Heat templates and Horizon customisations are rebuilt, not ported, and Ironic has no direct equivalent. A mid-size migration runs 4-12 months. Where the team still has depth and the upgrade path is exercised, staying on OpenStack is the correct answer.**
quick_facts:
  - label: "What it is"
    value: "A cohort-based migration from OpenStack to a Kubernetes-native control plane (Cozystack), covering compute, tenancy, storage and networking."
  - label: "Moves mechanically"
    value: "Nova to KubeVirt and Glance to CDI DataVolumes — both sides are libvirt/KVM, so disks import without guest changes."
  - label: "Needs redesign"
    value: "Neutron to Cilium (tenant networks, floating IPs, security groups) and Keystone project trees to the Tenant CRD."
  - label: "Does not move"
    value: "Heat templates and Horizon customisations are rebuilt; Ironic bare-metal provisioning has no direct equivalent."
  - label: "Typical timeline"
    value: "4-12 months for a mid-size deployment; 12-18 months with complex provider networks or tenant-facing OpenStack APIs."
  - label: "License"
    value: "Cozystack is Apache 2.0 with no per-CPU or per-core licensing; a CNCF project (Sandbox since 2025-02-28)."
  - label: "Migration tooling"
    value: "Konveyor Forklift ships in the Aenix platform and supports OpenStack as a source provider — cold migration only, so each instance has a real power-off window."
  - label: "When not to migrate"
    value: "Staffed operations team, exercised upgrade path, and heavy use of Ironic, Octavia, Manila or Designate — stay on OpenStack."
faq:
  - q: "Which OpenStack services map cleanly to Cozystack, and which do not?"
    a: "Nova maps to KubeVirt and Glance to CDI DataVolumes with no guest changes, because both platforms run libvirt/KVM. Cinder either keeps an existing Ceph cluster, consumed over Ceph CSI, or moves to LINSTOR/DRBD. Keystone projects are re-modelled onto the Tenant CRD. Neutron is a redesign onto Cilium rather than a conversion. Heat templates, Horizon customisations and Ceilometer-based billing integrations are rebuilt. Ironic bare-metal provisioning has no direct equivalent."
  - q: "What is the hardest part of an OpenStack migration?"
    a: "Networking. Tenant networks, routers, floating IPs, security groups and provider VLANs are an addressing and policy model, not just plumbing. Cilium reaches the same outcomes through different primitives — network policy instead of security groups, LB IPAM with BGP or L2 announcements instead of floating IPs. Customer-visible addresses must either survive the move or be renumbered on an agreed schedule. Under-scoping this is the most common cause of a stalled OpenStack migration."
  - q: "How long does an OpenStack to Cozystack migration take?"
    a: "Four to twelve months for a mid-size deployment. It extends to twelve to eighteen months where the estate carries complex provider-network topology, or where tenants consume the OpenStack API directly and need a deprecation timeline for their own automation."
  - q: "Do we have to abandon Ceph?"
    a: "No. An existing Ceph cluster can stay where it is, consumed through the Ceph CSI driver, and that is often the right call when the investment is already made and the performance profile works. LINSTOR/DRBD is the alternative where you want replicated local NVMe rather than a distributed storage cluster. This is a design choice made in the assessment, not a forced rip-and-replace."
  - q: "What happens to Heat templates and Terraform against the OpenStack API?"
    a: "They are rewritten against the Kubernetes API. Heat stacks do not convert; the equivalent is Helm plus GitOps reconciliation. For an internal cloud this is a training and refactoring cost. For a public cloud whose customers automate against your OpenStack endpoints, it is a product decision that needs a published deprecation timeline from day one of the plan."
  - q: "When should we stay on OpenStack instead of migrating?"
    a: "When you have a staffed operations team that knows the release cadence, an upgrade path that is exercised rather than theoretical, and real use of the wider service surface — Ironic for bare metal, Octavia, Manila, Designate, Barbican. OpenStack does things a Kubernetes-native platform does not. The migration case is operational: stalled upgrades, a bus-factor of one or two engineers, a narrow service footprint, or containers already forming the majority of the workload."
  - q: "What tooling performs the transfer?"
    a: "Konveyor Forklift, the Kubernetes migration toolkit for virtualization, which ships in the Aenix platform and supports OpenStack as a source provider. Network and storage mappings are declared as Kubernetes objects and virt-v2v handles guest conversion. One constraint to plan around: from OpenStack, Forklift performs cold migration only. Warm, incremental transfer using changed block tracking is available from vSphere and RHV, not from OpenStack, so each instance needs a genuine power-off window and cohort sizing follows from how many of those you can schedule together."
  - q: "Do we need double the hardware during the migration?"
    a: "No. Cozystack is deployed alongside OpenStack, but only with enough headroom for the largest in-flight cohort. As each cohort completes and its OpenStack side is released, those nodes are drained and rebuilt into the target cluster, so capacity rolls forward rather than being duplicated for the whole programme."
service:
  type: "OpenStack Migration"
  areaServed: ["EU", "DACH", "Central Asia"]
  audience: "Hosting providers, telcos, national operators, regulated enterprises"
---

**OpenStack is not a failed platform. It is a platform whose operating cost is paid in scarce people. This page covers when that trade stops working, what the move to a Kubernetes-native control plane actually involves service by service, and which parts are genuinely hard.**

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** if the OpenStack cloud is sold to external customers (hosters, MSPs, telcos, national operators); **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** if it serves internal consumers under DORA / NIS2 / sectoral rules.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/alternatives/openstack-alternative">OpenStack alternative →</a>
</div>

---

## When you should not migrate

Say this plainly first, because most OpenStack content skips it.

Stay on OpenStack if you have a functioning operations team that knows the release cadence, you are current on a maintained release, your upgrade path is exercised rather than theoretical, and you use enough of the service surface — Ironic for bare metal, Octavia, Manila, Designate, Barbican — that a replacement would mean rebuilding several of them. OpenStack does things Kubernetes-native platforms do not: multi-hypervisor compute, mature bare-metal provisioning, an API surface that a decade of tooling already speaks.

The migration case is an operational one, not a technical-superiority one. It gets strong when:

- **Upgrades have stalled.** The estate is two or more releases behind, the upgrade is a project rather than a maintenance window, and each deferral makes the next one worse.
- **The team is a bus-factor problem.** One or two engineers hold the whole control plane. OpenStack skills are not being replenished from the market at the rate they are leaving it.
- **The service surface used is narrow.** In practice many clouds run Keystone, Nova, Glance, Cinder, Neutron and Horizon, and nothing else. That is a footprint a Kubernetes control plane replaces without loss.
- **Containers are already the majority workload.** You are running Kubernetes on top of OpenStack VMs, paying for two control planes and debugging across both.
- **Distribution economics changed.** Vendor-supported OpenStack subscriptions renewed at a number that no longer matches the value of the support.

If none of these apply, the honest recommendation is to stay and invest in your upgrade pipeline instead.

---

## Service-by-service mapping

This is the part that decides scope. Each OpenStack project has a destination, a no-destination, or a redesign.

| OpenStack | Cozystack destination | Migration character |
|---|---|---|
| Keystone (identity, domains, projects) | Tenant CRD plus Kubernetes RBAC, OIDC to your existing IdP | Redesign. Project trees do not map one-to-one; tenant hierarchy is modelled during the assessment. |
| Nova (compute) | KubeVirt VMs on the same cluster as containers | Mechanical. Both sides are libvirt/KVM underneath. |
| Glance (images) | Container Data Importer (CDI) DataVolumes, backed by object storage | Mechanical. QCOW2 and raw carry over. |
| Cinder (block) | LINSTOR/DRBD, or keep your existing Ceph cluster via Ceph CSI | Mechanical if Ceph stays; a data move if you consolidate onto LINSTOR. |
| Neutron (networking) | Cilium (eBPF) with L2 announcements or BGP; MetalLB where already standardised | Redesign. This is the hard part — see below. |
| Swift / Ceph RGW (object) | S3-compatible object storage on the platform, or keep RGW | Usually keep. Object endpoints are long-lived and customer-facing. |
| Octavia (load balancing) | Kubernetes Service type LoadBalancer plus an ingress layer | Redesign. Per-tenant LB semantics differ. |
| Ironic (bare metal) | No direct equivalent | Gap. If Ironic is load-bearing, keep it or keep OpenStack for that slice. |
| Magnum (Kubernetes as a service) | Tenant Kubernetes clusters with hosted control planes | Simplification. This is what the platform is built around. |
| Trove (DBaaS) | Managed database applications in the tenant catalogue | Replacement, not migration. Data moves by logical dump/replica. |
| Heat (orchestration) | Helm plus GitOps reconciliation | Rewrite. Heat templates do not convert. |
| Horizon (dashboard) | Cozystack tenant dashboard | Replacement. Retrain, do not port. |
| Ceilometer / Gnocchi | Prometheus-compatible metrics stack with long-term storage | Replacement. Billing integrations must be re-pointed. |

Two entries deserve emphasis because they are where migrations overrun.

**Neutron is the redesign.** Tenant networks, routers, floating IPs, security groups and provider VLANs are an addressing and policy model, not just plumbing. Cilium expresses the same outcomes with different primitives: network policy instead of security groups, LB IPAM and BGP or L2 announcements instead of floating IPs and the L3 agent. Customer-visible IPs have to survive the move or be renumbered on a schedule your customers agree to. Budget real design time here; skipping it is the most common cause of a stalled OpenStack migration.

**Heat and Horizon do not port.** Anything a tenant automated against the OpenStack API — Terraform providers, Heat stacks, internal scripts — is rewritten against the Kubernetes API. For an internal cloud that is a training cost. For a public cloud with API-consuming customers, it is a product decision with a deprecation timeline attached, and it belongs in the plan on day one rather than month nine.

---

## How the migration runs

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>OpenStack</b><div class="diagram__chips"><span>Nova / KVM</span><span>Keystone projects</span><span>Neutron tenant networks</span></div></div>
<div class="diagram__conn">assessed, then moved by</div>
<div class="diagram__node"><b>Cohort migration</b><div class="diagram__chips"><span>Disk import to KubeVirt</span><span>Tenant CRD mapping</span><span>Address plan</span></div></div>
<div class="diagram__conn">lands on</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium eBPF</span><span>LINSTOR/DRBD</span></div></div>
<div class="diagram__conn">ends with</div>
<div class="diagram__node"><b>OpenStack decommission</b><div class="diagram__chips"><span>Per-cohort, after validation</span></div></div>
</div>
</div>

1. **Architecture review (2-4 weeks).** Full service inventory — which OpenStack projects are actually in use, which have tenant-visible APIs, which have integrations behind them. Tenant model design. Address plan. The output is a written target architecture and a cohort sequence, and it is where a no-go decision is still cheap.
2. **Parallel deployment.** Cozystack is built alongside the running OpenStack cloud, not on top of it. Both control planes coexist for the duration; there is no point at which the estate depends on a single cutover.
3. **Cohort migration.** The disk transfer itself is done by [Konveyor Forklift](https://github.com/kubev2v/forklift), which ships in the Ænix platform and supports OpenStack as a source provider. Datastore-to-StorageClass and network-to-network mappings are declared as Kubernetes objects, and `virt-v2v` handles guest-side conversion. Note the constraint: **from OpenStack, Forklift does cold migration only** — warm, incremental transfer is available from vSphere and RHV, not from OpenStack — so every OpenStack instance has a real power-off window, and cohort sizing is driven by how many of those windows you can schedule at once. Workloads move in defined groups — typically by tenant, or by application tier for an internal cloud. Each cohort is validated in parallel run before its OpenStack side is released. Compute moves first, storage follows the compute, networking is cut over per cohort against the agreed address plan.
4. **Decommission.** OpenStack nodes are drained and rebuilt into the new cluster as cohorts complete, so the estate does not need double the hardware for the full duration — only enough headroom for the largest in-flight cohort.

**Typical duration:** 4-12 months for a mid-size deployment; 12-18 months where Neutron carries a complex provider-network topology or tenants consume the OpenStack API directly.

---

## What moves cleanly, and what does not

**Moves cleanly.** VM disks — both sides are KVM, so a QCOW2 or raw image imports into a KubeVirt DataVolume without guest changes, driven by Forklift. Linux guests generally boot on first attempt. Ceph, if you keep it. Object storage endpoints. Anything already containerised.

**Needs design work.** Tenant hierarchy, if you used Keystone domains and nested projects. Load balancer semantics. Quota and rate-limit models. Anything that assumed a floating-IP pool.

**Has to be rebuilt.** Heat stacks. Horizon customisations. Billing and metering integrations, which read Ceilometer and must be re-pointed at the new metrics source — for a service provider this is usually the longest single work item after networking, and it gates revenue, so it is scheduled early rather than late.

**May not move at all.** Ironic-managed bare metal. Windows guests need the same VirtIO driver handling as any other virtualisation migration. Appliances shipped as vendor VMs need their vendor's blessing on the new hypervisor before you plan around them.

For the platform comparison behind these choices, see **[OpenStack vs Cozystack modernization](/blog/2026/05/openstack-vs-cozystack-modernization/)** and the **[OpenStack alternative](/alternatives/openstack-alternative/)** page. To model the cost side, use the **[TCO calculator](/tco-calculator/)**.

---

## How Ænix engages

- **Platform Readiness Assessment** (fixed price, agreed up front) — service inventory, target architecture, tenant and address design, cohort plan, risk register. See **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.
- **Pilot cohort** — the first tenant group migrated with Ænix engineers working inside your team, producing the runbooks the rest of the estate uses.
- **Rolling migration** — cohort by cohort, parallel-run validated, with OpenStack hardware recycled into the target cluster as it frees up.
- **Operations** — either your team runs it with **[Cozystack enterprise support](/products/cozystack-enterprise-support/)** behind them, or Ænix operates it.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

---

*Ænix is the team behind Cozystack (CNCF project, Apache 2.0).*
