---
title: "OpenStack to Cozystack migration — modernizing the operational footprint"
description: "OpenStack remains valid where deep expertise lives. Where engineer-availability and operational footprint are pressuring modernization, Cozystack is the..."
related_pages:
  - /alternatives/openstack-alternative
  - /products/public-cloud-platform/
  - /products/public-cloud-platform/
  - /products/cozystack
  - /services/platform-readiness-assessment
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **OpenStack-to-Cozystack migration is the process of moving virtual machines, tenants, networking, and storage from an OpenStack cloud onto Cozystack, an open-source CNCF Sandbox platform that runs VMs and containers on a single Kubernetes API. It targets hosting providers, ISPs, and large operators where shrinking OpenStack engineer availability and operational footprint are forcing modernization. Aenix, the team behind Cozystack, runs these migrations end to end: KVM images convert to KubeVirt, the Keystone tenant model is re-architected onto the Tenant CRD, Neutron networking moves to Cilium (eBPF), and Cinder or Ceph storage moves to LINSTOR or stays on Ceph. A typical mid-size migration takes 4-12 months. Cozystack is Apache 2.0, with no per-CPU or per-core licensing.**
quick_facts:
  - label: "What it is"
    value: "A structured migration from an OpenStack cloud to Cozystack, consolidating VMs, tenants, networking, and storage onto one Kubernetes-based platform."
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it is for"
    value: "Hosting providers, ISPs, and large operators pressured by OpenStack engineer availability and operational footprint."
  - label: "Migration mapping"
    value: "KVM to KubeVirt, Keystone to Tenant CRD, Neutron to Cilium (eBPF), Cinder/Ceph to LINSTOR or Ceph."
  - label: "Typical timeline"
    value: "4-12 months for a mid-size deployment."
  - label: "Delivered by"
    value: "Aenix, the team behind Cozystack, via the Ænix Platform ISP and Public Cloud editions plus migration services."
faq:
  - q: "How does Cozystack run OpenStack VMs?"
    a: "Cozystack uses KubeVirt to run virtual machines alongside containers on a single Kubernetes API. KVM-based OpenStack images convert to KubeVirt directly, so existing VM workloads keep running without a guest-OS rewrite."
  - q: "How long does an OpenStack-to-Cozystack migration take?"
    a: "A mid-size deployment typically takes 4-12 months. The exact timeline depends on tenant count, network re-architecture from Neutron to Cilium, and whether storage moves from Cinder/Ceph to LINSTOR or stays on Ceph."
  - q: "Do we have to abandon Ceph storage?"
    a: "No. Storage can move from Cinder or Ceph to LINSTOR/DRBD, but in many migrations Ceph stays in place. The choice depends on existing investment and performance requirements rather than a forced rip-and-replace."
  - q: "Does Cozystack require per-CPU or per-core licensing?"
    a: "No. Cozystack is open source under Apache 2.0 with no per-CPU or per-core licensing. Aenix sells the productized Ænix Platform and migration services on top, with subscription tiers starting at $1,250/month for 10 nodes."
  - q: "When should we keep OpenStack instead of migrating?"
    a: "OpenStack remains valid where deep in-house expertise lives and the operational footprint is sustainable. Migration makes sense when engineer availability is shrinking or operational overhead is pressuring modernization toward a Kubernetes-native platform."
  - q: "Who performs the migration?"
    a: "Aenix, the team behind Cozystack, runs OpenStack-to-Cozystack migrations. Engagements pair with the Ænix Platform Provider Edition for hosting providers and the Provider Edition for large operators consolidating OpenStack at scale."
---

**OpenStack remains valid where deep expertise lives. Where engineer-availability and operational footprint are pressuring modernization, Cozystack is the realistic next platform. Aenix runs OpenStack-to-Cozystack migrations.**

> **Pairs with:** **[Ænix Platform Provider Edition](/products/public-cloud-platform/)** for hosting providers and regional clouds; **[Provider Edition](/products/public-cloud-platform/)** for large operators consolidating OpenStack at scale.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/alternatives/openstack-alternative">OpenStack alternative →</a>
</div>

---

## Migration approach

VM image migration: KVM → KubeVirt is straightforward. Tenant model: re-architect from Keystone to Tenant CRD. Network: Neutron → Cilium. Storage: Cinder/Ceph → LINSTOR or Ceph (often Ceph stays).

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>OpenStack</b><div class="diagram__chips"><span>KVM images</span><span>Keystone tenants</span><span>Neutron networking</span></div></div>
<div class="diagram__conn">converts via</div>
<div class="diagram__node"><b>Migration path</b><div class="diagram__chips"><span>KVM to KubeVirt</span><span>Keystone to Tenant CRD</span><span>Neutron to Cilium</span></div></div>
<div class="diagram__conn">lands on</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>Cilium eBPF networking</span><span>LINSTOR or Ceph storage</span></div></div>
</div>
</div>

Typical: 4-12 months for mid-size deployment.

For full comparison see **[OpenStack vs Cozystack modernization](/blog/2026/05/openstack-vs-cozystack-modernization/)**.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

---

*Aenix is the team behind Cozystack.*

<!-- SEO: title "OpenStack to Cozystack Migration — Modernizing Operational Footprint | Aenix"
Word count: ~250. -->
