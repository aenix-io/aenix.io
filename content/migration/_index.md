---
title: "Migration hubs"
description: "Aenix migration hubs — strategy, architecture, and cohort patterns for migrating to Ænix Platform from VMware, OpenStack, Proxmox, CloudStack. Productized migration tooling + Aenix engineering services."
language: "en"
---

**Practical migration patterns for moving onto Ænix Platform from existing platforms. Productized migration tooling for ISP Edition; engineering-led migration for Enterprise + Public Cloud Edition deployments. Cohort-based; parallel-run-validated.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a discovery call</a>
  <a class="cta-secondary" href="/services/platform-readiness-assessment/">Platform Readiness Assessment →</a>
</div>

---

## Browse migration hubs

### VMware

The largest single migration trigger we see in 2026 — Broadcom subscription pressure + license model uncertainty.

- **[VMware migration](/migration/vmware/)** — strategy + architecture + cohort migration patterns
- Free **[VMware Migration Assessment Checklist](/resources/vmware-migration-checklist/)** — 25-point readiness checklist

**Typical pattern:** Platform Readiness Assessment (5-10 days) → Pilot (3-6 months, defined cohort) → Cohort migration (rolling) → Decommission. Total estate migration typically 9-18 months.

### OpenStack

Modernization pattern — replace OpenStack with Cozystack-based foundation. Faster feature velocity, smaller ops team.

- **[OpenStack migration](/migration/openstack/)** — modernization patterns

**Typical pattern:** Architecture review → Parallel deployment → Workload migration by class (compute / storage / network) → OpenStack decommission.

### Proxmox

For Proxmox environments hitting scale limits (multi-tenancy, service catalog, billing).

- **[Proxmox migration](/migration/proxmox/)** — migration patterns

**Typical pattern:** Productized installer for ISP Edition → Workload migration via standard VM export/import → Tenant model alignment → Cutover.

### CloudStack

Legacy CloudStack modernization patterns.

- **[CloudStack migration](/migration/cloudstack/)** — migration patterns

**Typical pattern:** Architecture review → Parallel deployment → Workload migration → CloudStack decommission.

---

## Migration tooling included

Ænix Platform includes productized migration modules for the most common source platforms:

- **VMware vSphere / vCloud Director** → KubeVirt-on-Cozystack
- **OpenStack Nova / Cinder / Neutron** → Kubernetes / KubeVirt / LINSTOR / Cilium
- **OpenNebula** → KubeVirt-on-Cozystack
- **Virtuozzo / OpenVZ** → KubeVirt-on-Cozystack
- **CloudStack** → Kubernetes / KubeVirt

For non-standard environments, Aenix engineering services build custom migration tooling as part of the engagement.

---

## Migration economics

Use the **[Cloud Repatriation TCO Worksheet](/resources/cloud-repatriation-tco-worksheet/)** (free Excel + Google Sheets) to model migration cost vs ongoing savings vs cumulative net cash flow. Most repatriation cases break even within 18-36 months on sustained workloads.

---

## How we engage on migrations

1. **Discovery call** — confirm fit, scope, timeline
2. **Platform Readiness Assessment** (5-10 days, fixed-price €20-50k) — current-state audit, target architecture, cohort plan, risk register
3. **Pilot cohort** (3-6 months) — first cohort migration, validated patterns, knowledge transfer
4. **Rolling migration** — cohort-by-cohort production migration with parallel-run validation
5. **Decommission** — source platform shutdown after final validation

---

*See also: [Alternatives →](/alternatives/) for vendor-by-vendor comparison; [Solutions →](/solutions/cloud-repatriation/) for repatriation strategy; [Resources →](/resources/) for free assessment tools.*
