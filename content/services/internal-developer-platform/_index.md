---
title: "Internal developer platform — built for adoption, not just architecture"
description: "IDP engagements measured in adoption, not architecture: 5-10 golden paths on a multi-tenant Kubernetes foundation, with handover. Backstage only where it fits."
related_pages:
  - /services/platform-engineering/
  - /services/kubernetes-consulting/
  - /services/platform-readiness-assessment/
  - /products/private-cloud-platform/
  - /products/cozystack/
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **An internal developer platform (IDP) is a self-service capability layer that lets product engineers provision environments, deploy applications, and access observability, secrets, and networking through opinionated golden paths instead of infrastructure tickets. Aenix builds IDPs that get adopted, not just architected: 5-10 documented golden paths on a multi-tenant Kubernetes foundation, with operational runbooks and knowledge transfer so the customer's platform team owns the result. The foundation is typically Cozystack, an Apache 2.0 CNCF project combining KubeVirt VMs and containers, Cilium eBPF networking, LINSTOR storage, and Tenant-CRD multi-tenancy. Engagements run in three phases — readiness assessment, build, and optional managed operation — and use developer portals such as Backstage only where they fit, never as a destination.**
quick_facts:
  - label: "What it is"
    value: "A self-service platform giving product teams golden paths for provisioning, deployment, and operations on a multi-tenant Kubernetes foundation"
  - label: "License"
    value: "Apache 2.0 (no per-CPU / per-core licensing)"
  - label: "Status"
    value: "Cozystack is a CNCF project (Sandbox since 2025-02-28; Incubating expected late summer 2026)"
  - label: "Who it's for"
    value: "Organizations with 3+ product teams, weeks-long time-to-environment, and inconsistent per-team infrastructure patterns"
  - label: "Engagement timeline"
    value: "Phase 1 assessment 14-28 days; Phase 2 build 3-9 months; optional Phase 3 managed operation"
  - label: "Foundation"
    value: "Cozystack pattern — KubeVirt VMs and containers on one Kubernetes API, Cilium (eBPF) networking, LINSTOR/DRBD storage, Tenant CRD multi-tenancy"
  - label: "Developer portal"
    value: "Backstage, Port, or Cortex used only where catalog discipline is mature; the portal sits on top of the platform, not in place of it"
faq:
  - q: "Internal developer platform vs internal developer portal — which do we need?"
    a: "A portal (Backstage, Port, Cortex) is the UI and catalog; a platform is the underlying capability stack. Most organizations need the platform first. For teams under roughly 200 engineers, a well-documented platform with simple IaC entry points is usually enough; portal value emerges at scale."
  - q: "Do we have to build on Cozystack?"
    a: "No. Cozystack is the foundation Aenix recommends when it fits, which for multi-tenant or sovereign use cases it usually does. For organizations deeply on OpenShift, vanilla Kubernetes, or other distributions, Aenix extends the existing platform instead."
  - q: "How long is a typical IDP engagement?"
    a: "Phase 1 assessment runs 14-28 days. Phase 2 build runs 3-9 months elapsed depending on scope: foundation first (1-2 months), golden paths layered on (1-3 months), with knowledge transfer running throughout."
  - q: "What happens if our team can't operate the IDP after handover?"
    a: "Two paths: an optional managed-services engagement where Aenix operates the platform under contract, or an extension of the build engagement to grow internal platform-team capacity. The decision is named explicitly during the assessment phase."
  - q: "Why does Aenix not just sell Backstage?"
    a: "Backstage is a tool, not a destination. Aenix uses it where it serves the customer's operational maturity and recommends alternatives (Port, Cortex, custom) or no portal at all when they fit better. The decision is calibrated against the team's needs, not vendor incentives."
  - q: "Is the platform open source, and do we own it?"
    a: "Yes. The foundation is Cozystack, an Apache 2.0 CNCF project with no per-core licensing. The IDP Aenix builds is one the customer owns and operates, with no vendor-roadmap lock-in. Aenix sells the productized Ænix Platform and services on top."
---

<!-- BLOCK 1: HERO -->


**Most internal developer platforms fail not because the architecture is wrong, but because product teams don't use them. The platform that ranks highest on engineering elegance often ranks lowest on internal NPS. The platform that's actually adopted has fewer features, simpler abstractions, and a team that treats product engineers as customers.**

Ænix builds internal developer platforms (IDPs) that get adopted. Not Backstage as wallpaper over chaos; an opinionated platform with golden paths, multi-tenant foundations, and operational handoff your platform team can sustain.

> **Pairs with:** **[Developer self-service](/products/private-cloud-platform/)(/products/private-cloud-platform/)** — Internal Developer Platform layer (GitLab automation, Argo CD workflows, APIs, golden paths, productivity dashboards) on top of the Cozystack cloud foundation. Free [Platform Engineering Maturity Assessment →](/resources/platform-engineering-maturity-assessment/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/blog/2026/05/internal-developer-platform-examples-without-backstage/">IDP examples →</a>
</div>

<div class="trust-badges">
Production-grade · Adoption-driven · Open-source foundation · Customer-team-owned outcome
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO THIS IS FOR -->

## Who needs an internal developer platform

Internal developer platform investment fits when:

- **3+ product teams** with overlapping infrastructure and provisioning needs
- **Time-to-environment of weeks** for what should take hours
- **Multiple inconsistent infrastructure patterns** evolved per team
- **Existing platform / DevOps function maxed on tickets** — no capacity for self-service work
- **Specific pressure** (regulator, cost, sovereignty, scaling) makes structured platform investment timely

If your situation matches three of these, structured IDP work returns adoption + velocity within months. If you have one product team and a small infrastructure surface, simpler shared-tooling practices deliver better cost/value.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT YOU GET -->

## What an Ænix IDP engagement produces

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Product teams</b><div class="diagram__chips"><span>Environments</span><span>Deployments</span><span>Observability</span></div></div>
<div class="diagram__conn">self-serve via</div>
<div class="diagram__node diagram__node--brand"><b>Self-service IDP on Cozystack</b><div class="diagram__chips"><span>Golden paths</span><span>APIs</span><span>Multi-tenant Kubernetes</span></div></div>
<div class="diagram__conn">delivers</div>
<div class="diagram__node"><b>Adoption and velocity</b><div class="diagram__chips"><span>Time-to-environment</span><span>Golden-path adoption</span><span>Internal NPS</span></div></div>
</div>
</div>

<div class="grid-2x2">

**1. Opinionated golden paths**
5-10 self-service paths covering the most common product-team needs: environment provisioning, application deployment, observability onboarding, secrets, identity, network connectivity. Documented, supported, audited.

**2. Multi-tenant Kubernetes foundation**
Built on KubeVirt + Cilium + LINSTOR (Cozystack pattern) or extension of your existing Kubernetes platform. Tenant CRD, per-tenant quotas, RBAC, audit. Suitable for enterprise multi-BU or service-provider multi-customer use.

**3. Developer-portal layer where useful**
Backstage (CNCF Incubating) when the catalog discipline is mature; alternatives (Port, Cortex, custom) when better fit. Portal is the visible part; the platform sits underneath.

**4. Operational model and runbooks**
Documented platform-team responsibilities, on-call patterns, capacity planning. Knowledge transfer throughout. Your team operates the platform after we leave.

</div>

The output is measured in adoption metrics — time-to-environment, golden-path adoption rate, internal NPS — not feature count.

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: COMMON IDP FAILURES -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Where IDP programs commonly fail

<div class="gap-cards-2">

**Backstage as the platform**
Buying Backstage without an underlying opinionated platform produces a beautiful catalog over the same operational mess. Self-service paths still take weeks; the catalog is just a richer waiting room.

**Building for engineers, not for product teams**
Platform team's customers are product engineers. Architecture optimized for engineering elegance often produces a platform nobody wants to use the way it was designed.

**Vendor-led "complete IDP" lock-in**
Several vendors sell pre-packaged IDPs. They work for narrow customer profiles but rebuild lock-in with a different vendor. The vendor's roadmap becomes your roadmap.

**Platform team absorbed by tickets**
Without explicit headcount and protected golden-path work time, the platform team becomes ticket support. Self-service work stalls.

</div>


</div>
</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW AENIX HELPS -->

## How Ænix engages

The IDP engagement runs in three phases:

- **Phase 1: Platform Readiness Assessment (14-28 days)** — current-state platform maturity, target IDP architecture, golden-path priorities, RACI for platform team. See **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.
- **Phase 2: Build engagement (3-9 months)** — Ænix engineers integrated with your platform team, building the foundation, golden paths, and runbooks. Knowledge transfer is a first-class deliverable, not an afterthought.
- **Phase 3 (optional): Managed operation** — for organizations that need the IDP but cannot build internal platform-team capacity.

Engagements typically start with Phase 1; Phase 2 sequencing emerges from assessment.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Why Ænix specifically

- **Backstage is a tool, not a destination.** We don't sell it, so we can tell you when a catalog is the wrong first move and a documented golden path is the right one.
- **Multi-tenancy is the part that is hard, and it is what we run.** [Cozystack](/products/cozystack/) is in production with service providers and regulated enterprises operating multi-tenant clouds; the tenancy model we propose is one we operate.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## Engagement structure

| When | What | Output |
|---|---|---|
| **Day 0** | 30-min discovery call (free) | Confirm fit, identify scope and IDP stage |
| **Phase 1: Assessment (14-28 days)** | Platform Readiness Assessment | Target IDP architecture, golden-path priorities, RACI |
| **Phase 2: Build (3-9 months)** | Foundation + golden paths + runbooks + knowledge transfer | Production IDP, operational by your team |
| **Phase 3: Operate (optional, ongoing)** | Managed-services or fully in-house | Sustained IDP |

For methodology see **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## IDPs we've built

{{< clients >}}

We've built internal developer platforms for service providers running multi-tenant clouds, regulated enterprises with strong sovereignty requirements, AI/GPU operators with multi-team data-science access, and telecom operators consolidating multiple legacy environments.

{{< quote-carousel >}}
The logos above are production Ænix Public Cloud Platform deployments. Named references for the NDA-covered engagements are shared on the discovery call.
<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Pricing

The assessment is fixed-price, quoted before it starts, and delivers a written target IDP architecture and a Phase 2 roadmap. The build is time-and-materials or fixed-scope. If Phase 2 follows, the assessment cost is credited against it, subject to scope.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Start with a 30-minute discovery call

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

Or read more:
- **[IDP examples without Backstage lock-in](/blog/2026/05/internal-developer-platform-examples-without-backstage/)** — practical patterns
- **[Platform engineering services](/services/platform-engineering/)** — broader scope
- **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — assessment methodology
- **[Cozystack](/products/cozystack/)** — the foundation we typically build on

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Ænix is the platform engineering team behind Cozystack — a CNCF Project, Kubernetes Certified Distribution, OpenSSF Best Practices.*

<!-- /BLOCK 12 -->

