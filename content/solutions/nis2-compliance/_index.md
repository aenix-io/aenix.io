---
title: "NIS2 compliance for cloud infrastructure — make your architecture audit-ready"
description: "The NIS2 Directive (EU 2022/2555) is in transposition across EU member states with deadlines that have already passed for many. For essential and important..."
type: "page"
related_pages:
  - /solutions/dora-compliance/
  - /solutions/data-sovereignty/
  - /services/platform-readiness-assessment/
  - /products/aenix-platform/enterprise-edition/
  - /products/cozystack/
language: "en"
---

<!-- BLOCK 1 -->


**The NIS2 Directive (EU 2022/2555) is in transposition across EU member states with deadlines that have already passed for many. For essential and important entities — energy, transport, banking, financial market infrastructures, healthcare, drinking water, digital infrastructure, public administration, postal, waste, ICT services, and several other sectors — NIS2 imposes specific cybersecurity and incident-management requirements that map directly to cloud architecture.**

Aenix runs NIS2-aligned platform readiness engagements for in-scope entities and the ICT third parties serving them. Output: a control-level map of where you stand today, where the gaps are, and what an architecture-level remediation plan looks like.

> **Pairs with:** **[Ænix Platform Enterprise Edition](/products/aenix-platform/enterprise-edition/)** — NIS2-aligned by design (Articles 21 risk management, 23 incident reporting, 30 coordinated vulnerability disclosure). Tenant CRD with NetworkPolicy / Cilium for segmentation, customer-controlled encryption, audit-ready logging. Free [NIS2 Compliance Checklist →](/resources/nis2-compliance-checklist/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a 30-minute discovery call</a>
  <a class="cta-secondary" href="/blog/2026/05/nis2-requirements-cloud-infrastructure-checklist/">Read NIS2 checklist →</a>
</div>

<div class="trust-badges">
EU-based engineers · Mutual NDA · No hyperscaler bias · Written deliverables</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO -->

## Who has NIS2 in scope

NIS2 applies broadly to:

- **Essential entities** — energy, transport, banking, financial market infrastructures, healthcare, drinking water, wastewater, digital infrastructure (IXPs, DNS, TLD, cloud providers, datacenter providers, CDN, MSPs, MSSPs, public electronic comms), public administration, space.
- **Important entities** — postal, waste management, chemical, food, manufacturing of critical products, digital service providers (online marketplaces, search engines, social platforms), R&D.
- **ICT third parties** serving in-scope entities.

If your sector is in scope or your customers are in scope, NIS2 architectural requirements apply.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT NIS2 REQUIRES -->

## What NIS2 requires of cloud architecture

<div class="grid-2x2">

**1. Risk management measures (Article 21)**
Documented cybersecurity risk-management practices covering policies on risk analysis, ICT asset management, incident handling, business continuity, supply chain security, vulnerability handling, security in network/IS acquisition.

**2. Incident reporting (Article 23)**
Incidents reported to CSIRT/competent authority within 24 hours (early warning), 72 hours (incident notification), and one month (final report). Architecture must support detection and reporting at these timelines.

**3. Supply chain and ICT third-party risk**
Specific obligations on managing risk from ICT supply chain, including direct suppliers and (where applicable) sub-suppliers. Concentration risk, exit readiness, and supplier-monitoring obligations.

**4. Management body responsibility**
Top management is responsible and trained on cybersecurity risk-management. Compliance is not delegated entirely to technical teams.

</div>

For control-level checklist, see **[the NIS2 requirements article](/blog/2026/05/nis2-requirements-cloud-infrastructure-checklist/)**.

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHERE COMMON SETUPS FAIL -->

## Where most cloud setups fail NIS2 audit

<div class="gap-cards-2">

**Incident detection too slow for 24-hour deadline**
Detection requires telemetry and monitoring tuned to recognize the kinds of events NIS2 considers reportable. Most cloud setups have observability for performance, not for incident detection at NIS2 timelines.

**ICT supply chain mapped only to first hop**
NIS2 requires visibility into the supply chain for critical-function ICT third parties. Most organizations cannot enumerate beyond their direct vendors.

**Backup and BCP works on paper, not in drill**
NIS2 requires business continuity. Most BCP plans are documents that have never been tested under realistic failure scenarios.

**Vulnerability management is reactive**
Patch cycles run on monthly cadence; critical vulnerabilities get emergency patches. NIS2 expects more proactive vulnerability handling for critical infrastructure.

</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW WE HELP -->

## How Aenix helps

The NIS2 engagement runs as part of our **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with sovereignty + regulator-gap workstream emphasized. The 14- or 28-day engagement produces:

- **NIS2 control-level map** — control-by-control review of what your architecture demonstrates
- **Supply chain mapping** — to second hop for critical-function ICT third parties
- **Incident detection and reporting capability assessment** — telemetry and processes against the 24/72-hour/one-month timelines
- **Business continuity and vulnerability management posture**
- **Architecture-level remediation plan**

Delivered by EU-based engineers with regulator-dialog experience. Same engineers also run [DORA compliance](/solutions/dora-compliance/) — the 28-day variant maps both regulators in one engagement.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX -->

## Why Aenix specifically

- **EU-based engineers** with experience inside the same regulatory frameworks as your customers.
- **No hyperscaler bias.** Recommendations reflect technical fit and regulatory alignment, not partnership economics.
- **Open-source platform foundation.** [Cozystack](/products/cozystack/) supports air-gap, customer-controlled keys, full audit trails — sovereignty-by-architecture.
- **Cross-regulator engagement** — DORA + NIS2 + GDPR mapped together in 28-day variant.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

| When | What | Output |
|---|---|---|
| **Day 0** | 30-min discovery call (free) | Confirm fit, narrow NIS2 scope (which sectors / which obligations) |
| **Days 1-13 (or 1-27)** | Sovereignty + regulator-gap workstream | Daily updates, three checkpoints |
| **Day 14 (or 28)** | Executive readout (60-90 min) | Written report: NIS2 control map, supply-chain map, BCP/incident posture, remediation plan |

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

{{< placeholder-logos >}}

> {{< placeholder-quote >}}

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

<div class="pricing-cards-2">

### 14-day (focused NIS2)
**{{PRICING_14_DAY}}**

### 28-day (NIS2 + DORA + GDPR overlay)
**{{PRICING_28_DAY}}**

</div>

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->

## FAQ

**Has NIS2 transposition deadline passed?**
Yes — for most member states the 17 October 2024 transposition deadline has passed. Some member states' transpositions remain delayed; competent authorities are operational.

**Is there a NIS2 certification?**
No. NIS2 is outcome-based; specific schemes (e.g., national cybersecurity certifications) may be referenced in implementing rules but there's no single NIS2 stamp.

**How does NIS2 differ from DORA?**
DORA is sector-specific (financial services); NIS2 is sectoral but broader. Many entities are in scope of both — overlapping but not identical requirements. The 28-day engagement variant maps both.

**More questions?** See **[NIS2 requirements article](/blog/2026/05/nis2-requirements-cloud-infrastructure-checklist/)** or **[talk to us](#discovery)**.

<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: CTA -->

<a id="discovery"></a>
/contact/

- **[NIS2 requirements article](/blog/2026/05/nis2-requirements-cloud-infrastructure-checklist/)** — control-level guide
- **[DORA compliance](/solutions/dora-compliance/)** — financial-services regulator
- **[Data sovereignty](/solutions/data-sovereignty/)** — adjacent trigger
- **[Cozystack](/products/cozystack/)** — sovereign-by-architecture platform

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER -->

*Aenix is the team behind Cozystack — a CNCF Project, Kubernetes Certified Distribution.*

<!-- /BLOCK 12 -->

<!--
SEO: title "NIS2 Compliance for Cloud Infrastructure — Audit-Ready Architecture | Aenix"
Description: "NIS2 compliance engagement: control-level map, supply-chain transparency, incident-reporting capability, BCP/DR. EU-based engineers."
Word count: ~900.
-->
