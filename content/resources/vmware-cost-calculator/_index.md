---
title: "VMware cost calculator — model your post-Broadcom savings"
description: "Free VMware cost calculator: enter your cores and renewal price, see annual savings, 3-year net, and migration payback when you move to an open platform."
type: "page"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
images: ["img/og/og-vmware-cost-calculator.jpg"]
hreflang_de: /de/ressourcen/vmware-kostenrechner/
primary_keyword: "vmware cost calculator"
secondary_keywords: ["vmware license calculator", "vmware tco calculator", "vmware exit savings"]
related_pages:
  - /alternatives/vmware-alternative/
  - /migration/vmware/
  - /solutions/cloud-repatriation/
  - /resources/cloud-repatriation-tco-worksheet/
  - /products/cozystack/
direct_answer: |
  **The VMware cost calculator on aenix.io is a free interactive tool that estimates how much an organization can save by moving VMware/VCF workloads to an open Apache 2.0 platform after Broadcom's licensing changes. Built by Ænix, which created the CNCF Sandbox project Cozystack, it takes licensed cores and the Broadcom price per core, physical nodes and an Ænix support tier, and the number of VMs to migrate, and returns annual VMware spend, annual support, net annual saving, the three-year net after an indicative migration figure, and payback time. It targets infrastructure, finance and procurement teams scoping a VMware exit. The target platform, Cozystack, carries no per-core or per-socket licence fee, so the recurring licence line VMware charges disappears and only support plus a one-time migration remain. Migration is indicative ($8,000 + $140 per VM); the final quote follows scoping.**
quick_facts:
  - label: "What it is"
    value: "A free interactive calculator that models VMware/VCF cost versus an open-platform alternative and shows annual saving, three-year net, and migration payback."
  - label: "Who it's for"
    value: "Infrastructure, finance and procurement teams scoping a post-Broadcom VMware exit."
  - label: "Inputs"
    value: "VMware side: licensed CPU cores and what you pay Broadcom per core/year. Cozystack side: physical nodes and an Ænix support tier, priced from the published list per 10 nodes. Migration: number of VMs. Defaults are illustrative."
  - label: "Target platform"
    value: "Cozystack — KubeVirt VMs and containers on one Kubernetes API, Cilium (eBPF) networking, LINSTOR/DRBD storage, Tenant CRD multi-tenancy."
  - label: "Format"
    value: "Interactive, on-page; no download and no email required"
  - label: "Ænix list pricing"
    value: "Ænix prices support per 10 physical nodes, not per core; the calculator takes the tier price from the published price list"
faq:
  - q: "Is this an official VMware or Broadcom calculator?"
    a: "No. It is a simple estimator built by Ænix, a vendor with an interest in the outcome, to compare VMware/VCF spend against an open Apache 2.0 platform. Enter your own renewal figures for a result you can check."
  - q: "What cost per core should I enter?"
    a: "Use your current VMware/VCF subscription cost divided by the number of licensed cores. If you only have a total renewal figure, divide it by your core count to get the per-core number."
  - q: "Does the target platform really have no licence cost?"
    a: "Cozystack is Apache 2.0 with no per-core or per-socket licence fee. You pay for support, chosen in the calculator as a tier for your node count, and for the one-time migration, estimated from your VM count."
  - q: "Do I have to migrate every workload to see savings?"
    a: "No. Savings apply only to the workloads that move; some workloads are better left where they are. The VMware migration page covers sequencing and what to keep in the cloud."
  - q: "What does Ænix charge?"
    a: "Cozystack is free under Apache 2.0. Ænix prices support per 10 physical nodes, not per core: support tiers for self-run Cozystack and Ænix Public Cloud Platform start at $1,250 per 10 nodes per month (Basic, billed annually), then Standard, Plus and Enterprise (custom); Ænix Private Cloud Platform is quoted per RFP. The calculator uses the same per-10-node tier prices. The migration line is an indicative figure ($8,000 + $140 per VM); the final quote follows scoping."
  - q: "Can Ænix validate the numbers the calculator produces?"
    a: "Yes. A 30-minute discovery call produces an honest, workload-level TCO that accounts for migration cost, support, and the workloads that should stay in the cloud."
---

<!-- BLOCK 1: HERO -->

**A VMware cost calculator turns Broadcom's renewal into a number you can act on. Enter the CPU cores in your estate and what you pay per core today, then your node count, a support tier and the VMs to move, and it shows the annual cost, the net saving if you move to an open Apache-2.0 platform, the three-year delta after migration, and how fast the migration pays back. Built by Ænix, which created and co-maintains Cozystack.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/migration/vmware/">VMware migration →</a>
</div>

<!-- /BLOCK 1 -->

---

## Calculate your VMware exit savings

{{< vmware-calculator >}}

The licence line you pay VMware/Broadcom disappears on an open platform (Apache 2.0, no per-core fee). What remains is support and the one-time migration — both modelled above; the migration line is indicative ($8,000 + $140 per VM) and the final quote follows scoping. For a five-year model against VMware with hardware, staff and sourced list prices, use the **[VMware vs Cozystack TCO calculator](/tco-calculator/vs-vmware/)**; for a workload-level model, the **[cloud repatriation TCO worksheet](/resources/cloud-repatriation-tco-worksheet/)**.

---

## How the calculation works

- **VMware cost per year** = licensed cores × what you pay Broadcom per core/year.
- **Ænix support per year** = physical nodes rounded up to blocks of 10 × the monthly price of the chosen support tier × 12 (the platform itself is Apache 2.0). Tier prices come from the published [price list](/pricing/), billed annually.
- **One-time migration** = $8,000 + $140 per VM. This is an indicative figure from the calculator; the final quote follows scoping.
- **Net saving per year** = VMware annual − Ænix support annual.
- **3-year net saving** = net annual × 3 − one-time migration.
- **Payback** = migration cost ÷ monthly net saving.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>VMware cost per year</b><div class="diagram__chips"><span>Cores × price per core/year</span></div></div>
<div class="diagram__conn">compared with</div>
<div class="diagram__node diagram__node--brand"><b>Ænix support per year</b><div class="diagram__chips"><span>Nodes ÷ 10 × tier price</span><span>No per-core fee</span><span>+ migration: $8,000 + $140 per VM</span></div></div>
<div class="diagram__conn">yields</div>
<div class="diagram__node"><b>Net saving</b><div class="diagram__chips"><span>3-year net</span><span>Payback time</span></div></div>
</div>
</div>

These are deliberately simple inputs so the output is defensible. A full TCO includes power, hardware refresh, staff and the workloads you keep in the cloud — we model those with you on a call.

---

## Turn the number into a plan

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/alternatives/vmware-alternative/">VMware alternative →</a>
</div>

---

*Ænix created Cozystack (a CNCF Sandbox project) and co-maintains it with maintainers from other companies. On top of it, Ænix offers three platforms — Public Cloud, Private Cloud and AI.*

<!--
SEO/GEO: canonical https://aenix.io/resources/vmware-cost-calculator/ ; hreflang de → /de/ressourcen/vmware-kostenrechner/, x-default EN.
primary "vmware cost calculator" (KD1, TP350, parent "vmware license calculator"); secondary vmware license/tco calculator.
Routes to vmware-alternative, migration/vmware, repatriation TCO worksheet.
JSON-LD: BreadcrumbList (Home → Resources → VMware cost calculator); WebApplication/SoftwareApplication (calculator tool); FAQPage.
-->
