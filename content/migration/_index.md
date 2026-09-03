---
title: "Migration hubs"
description: "Migration guides for moving off VMware, OpenStack, CloudStack, Proxmox, Nutanix, Virtuozzo and IBM Power onto an open Kubernetes-native cloud platform."
hero_subtitle: "Strategy, architecture and tooling for migrating off legacy virtualization"
language: "en"
hreflang_de: /de/migration/
---

**Migration guides for moving onto the Ænix platforms from an existing virtualization or cloud stack. Each hub covers the same three questions: what maps mechanically, what has to be redesigned, and when staying put is the right answer. Cohort-based, parallel-run validated, with [Konveyor Forklift](https://github.com/kubev2v/forklift) shipping in the platform as the VM transfer engine.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/services/platform-readiness-assessment/">Platform Readiness Assessment →</a>
</div>

---

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Source platforms</b><div class="diagram__chips"><span>VMware</span><span>OpenStack</span><span>CloudStack</span><span>Proxmox</span><span>Nutanix</span><span>Virtuozzo</span><span>IBM Power</span></div></div>
<div class="diagram__conn">assess</div>
<div class="diagram__node"><b>Migration path</b><div class="diagram__chips"><span>Readiness Assessment</span><span>Pilot cohort</span><span>Rolling migration</span></div></div>
<div class="diagram__conn">cutover onto</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt</span><span>LINSTOR</span><span>Cilium</span></div></div>
<div class="diagram__conn">delivers</div>
<div class="diagram__node"><b>Outcome</b><div class="diagram__chips"><span>One control plane</span><span>Smaller ops team</span></div></div>
</div>
</div>

## Browse migration hubs

### VMware

The largest single migration trigger of 2026 — Broadcom subscription pressure and licence-model uncertainty. Forklift performs cold and warm transfer from vSphere; the page covers what that actually requires, including the VDDK licence problem you inherit and the guests that do not convert.

- **[VMware migration](/migration/vmware/)** — Forklift mechanics, cohort sequencing, VCF decommission
- Free **[VMware Migration Assessment Checklist](/resources/vmware-migration-checklist/)** — 25-point readiness checklist

**Typical pattern:** assessment (14-28 days) → destination foundation → cohort migration sequenced against subscription expirations → decommission. A 100-VM estate typically completes in 8-12 months.

### OpenStack

An operational case, not a technical-superiority one. Nova and Glance move mechanically because both sides are KVM; Neutron is a genuine redesign; Heat and Horizon are rebuilt; Ironic has no equivalent.

- **[OpenStack migration](/migration/openstack/)** — service-by-service mapping and the parts that do not move

**Typical pattern:** architecture review → parallel deployment → cohort migration by tenant → decommission with hardware recycled forward. 4-12 months mid-size.

### CloudStack

CloudStack is actively maintained, so the case for moving is catalogue breadth, not decay. The work is in the virtual router redesign, the tenancy re-model and the billing integration.

- **[CloudStack migration](/migration/cloudstack/)** — offerings, virtual router, accounts, WHMCS

**Typical pattern:** architecture review → parallel deployment → billing re-pointed first → cohort migration by customer → decommission and catalogue expansion.

### Virtuozzo

Three products renamed in 2026, exiting three different ways. Virtuozzo Infrastructure (ex-Hybrid Infrastructure) is a real OpenStack deployment and the one place standard tooling applies. Virtuozzo Application Management (ex-Application Platform, ex-Jelastic) is a PaaS whose export only imports into another Virtuozzo installation — a re-platform, not a lift-and-shift. Virtuozzo Server (ex-Hybrid Server) is past end of maintenance and its system-container line has no announced successor.

- **[Virtuozzo migration](/migration/virtuozzo/)** — the three paths stated separately, with the ploop and export limits named
- **[Virtuozzo vs Cozystack TCO](/tco-calculator/vs-virtuozzo/)** — five-year model at 50 / 200 / 1,000 VMs

### Proxmox

For Proxmox deployments that have outgrown the single-organization model — multi-tenancy, a service catalogue beyond VMs, billing.

- **[Proxmox migration](/migration/proxmox/)** — migration patterns

**Typical pattern:** productized installer → workload migration via standard VM export/import → tenant model design → cutover. Under 50 hosts and single-tenant, staying on Proxmox is the honest recommendation.

### Nutanix

HCI licence and renewal pressure, plus the wish to run VMs and containers on one platform rather than two.

- **[Nutanix migration](/migration/nutanix/)** — exiting AOS/AHV to a Kubernetes-native platform

### IBM AIX / Power

The longest-horizon migration on this list: an architecture change from POWER to commodity x86, not just a hypervisor change.

- **[IBM AIX / Power migration](/migration/ibm/)** — Power to x86, Cloud Pak and OpenShift exit

### Cloud migration strategy

If the trigger is not one specific vendor, start with placement rather than destination.

- **[Cloud migration services](/migration/cloud/)** — repatriation, workload placement, greenfield private cloud

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Migration tooling in the platform

The Ænix platforms ship [Konveyor Forklift](https://github.com/kubev2v/forklift), the Kubernetes migration toolkit for virtualization, as the VM transfer engine. It is configured through Kubernetes objects — a `Provider` for the source connection, a `NetworkMap` and a `StorageMap` for the mappings, and a `Plan` executed by a `Migration` — and `virt-v2v` handles guest conversion: VirtIO driver injection, VMware Tools removal, static IP and drive-letter preservation.

| Source | Forklift support | Notes |
|---|---|---|
| VMware vSphere (6.5+) | Cold and warm | Warm uses changed block tracking. VDDK image required for vSAN, strongly recommended otherwise, and supplied by you — it cannot be redistributed. |
| oVirt / RHV | Cold and warm | Warm uses the same precopy and cutover model. |
| OpenStack | Cold only | Every instance needs a real power-off window. |
| OVA files | Cold only | Useful for anything that can export an OVA. Vendor appliances may fall outside vendor support once converted. |
| Remote KubeVirt / OpenShift | Cold | Cluster-to-cluster. |

Warm migration is not live migration: RAM state is not carried across, so a reboot still occurs. What warm buys is an outage measured by the final delta rather than by a full disk copy.

Forklift covers the disk and guest layer only. Tenancy, addressing, billing integration and cutover order are engineering work, and that is what the assessment and the cohort plan exist for. For sources Forklift does not cover — Virtuozzo among them — Ænix engineering builds the export and conversion path as part of the engagement.

**Upstream status:** Forklift ships in the Ænix platform today. The work to expose it as tenant self-service VM import in upstream open-source Cozystack is in review and is not yet in a released Cozystack version.

</div>
</div>

---

## Migration economics

Use the **[TCO calculator](/tco-calculator/)** to model five-year cost against your current platform, or the **[Cloud Repatriation TCO Worksheet](/resources/cloud-repatriation-tco-worksheet/)** (free Excel and Google Sheets) for migration cost against ongoing savings and cumulative net cash flow. Most repatriation cases break even within 18-36 months on sustained workloads.

---

## How we engage on migrations

1. **Discovery call** — confirm fit, scope, timeline
2. **Platform Readiness Assessment** (5-10 days, fixed price agreed up front) — current-state audit, target architecture, cohort plan, risk register. This is also where a no-go decision is still cheap.
3. **Pilot cohort** (3-6 months) — first cohort migrated with Ænix engineers inside your team, producing the runbooks for the rest
4. **Rolling migration** — cohort by cohort with parallel-run validation, source hardware recycled forward as it frees up
5. **Decommission** — source platform shutdown after final validation

---

*See also: [Alternatives →](/alternatives/) for vendor-by-vendor comparison; [Solutions →](/solutions/cloud-repatriation/) for repatriation strategy; [Resources →](/resources/) for free assessment tools.*
