---
title: "Enterprise Platform Engineering — interne Plattformen für Organisationen im großen Maßstab"
description: "Enterprise Platform Engineering ist die Disziplin des Aufbauens und Betreibens interner Plattformen für Organisationen mit mehreren Produkt-Teams,..."
related_pages:
  - /de/dienstleistungen/platform-engineering
  - /de/dienstleistungen/internal-developer-platform
  - /de/produkte/private-cloud-platform/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack
language: "de"
hreflang_en: /services/enterprise-platform-engineering/
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Enterprise Platform Engineering ist die Disziplin, interne Plattformen für große Organisationen mit mehreren Produkt-Teams, BU-übergreifender Isolation und nachhaltigem Scale aufzubauen und zu betreiben. Sie unterscheidet sich vom Platform Engineering für ein einzelnes Team: Multi-Tenancy, Governance und Operations-at-Scale sind nicht verhandelbar. Zielgruppe sind Engineering-Organisationen mit 5+ Produkt-Teams, Multi-BU-Trennung, cross-jurisdiktionellen Souveränitätsanforderungen und Multi-Cluster-/Multi-Region-Betrieb. Aenix liefert dies mit Cozystack — strukturelle Mandantenfähigkeit über das Tenant CRD, KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium-eBPF-Networking und LINSTOR/DRBD-Storage — produktisiert als Ænix Platform Enterprise und Developer Self-Service inklusive Implementierungs- und Betriebs-Services.**
quick_facts:
  - label: "Was es ist"
    value: "Die Disziplin, interne Plattformen für große Organisationen mit mehreren Produkt-Teams, BU-übergreifender Isolation und nachhaltigem Scale aufzubauen und zu betreiben."
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Engineering-Organisationen mit 5+ Produkt-Teams, Multi-BU-Trennung, 500+ Engineers, Multi-Cluster-/Multi-Region-Betrieb"
  - label: "Schlüsselfunktion"
    value: "Strukturelle Multi-Tenancy über das Tenant CRD, KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium-eBPF-Networking, LINSTOR/DRBD-Storage"
  - label: "Abgrenzung"
    value: "Anderer Scope als Platform Engineering für ein einzelnes Team — Governance, Audit und Operations-at-Scale stehen im Zentrum"
  - label: "Engagement"
    value: "Ænix Private Cloud Platform samt Developer-Self-Service-Schicht plus Implementierungs- und Betriebs-Services; Service-Stufen ab 1.250 $/Monat (Basic, 10 Nodes)"
faq:
  - q: "Worin unterscheidet sich Enterprise Platform Engineering von normalem Platform Engineering?"
    a: "Der Scope ist breiter: Statt einer Plattform für ein Team geht es um geteilte Plattformen für mehrere Produkt-Teams. Multi-Tenancy, Governance, Audit und Multi-Region-Operations sind nicht verhandelbar. Für kleineren Scope eignen sich die Platform Engineering Services."
  - q: "Ab wann lohnt sich der Enterprise-Scope?"
    a: "Wenn 5+ Produkt-Teams eine Plattform teilen, eine Multi-BU-Trennung nötig ist, cross-jurisdiktionelle Souveränitätsbeschränkungen gelten, die Engineering-Organisation 500+ Personen umfasst oder Multi-Cluster-/Multi-Region-Betrieb erforderlich ist."
  - q: "Wie löst Cozystack Mandantenfähigkeit bei Enterprise-Scale?"
    a: "Cozystack stellt Multi-Tenancy strukturell über das Tenant CRD bereit. Jeder Mandant erhält isolierte Ressourcen auf einer gemeinsamen Kubernetes-API, mit KubeVirt für VMs und Container, Cilium-eBPF-Networking und LINSTOR/DRBD-Storage — Grundlage für BU-übergreifende Trennung."
  - q: "Welche Lizenz gilt und gibt es Core-basierte Kosten?"
    a: "Cozystack steht unter Apache 2.0 ohne CPU- oder Core-basierte Lizenzierung. Aenix verkauft die produktisierte Ænix Platform plus Services. Die Service-Stufen beginnen bei 1.250 $/Monat (Basic, 10 Nodes), Standard 3.000 $, Plus 5.500 $, Enterprise nach Vereinbarung."
  - q: "Welche Ænix-Plattform passt zu Enterprise Platform Engineering?"
    a: "Die Private Cloud Platform für regulierte Multi-DC-Plattformen und die Developer Self-Service für produkt-engineering-getriebene Internal Developer Platforms at Enterprise Scale. Beide bauen auf Cozystack auf und werden durch Implementierungs- und Betriebs-Services ergänzt."
  - q: "Wie wird Governance und Compliance bei Enterprise-Scale abgebildet?"
    a: "Über Compliance-by-Design: Governance und Audit sind strukturell verankert, SLO-Disziplin gilt über alle Produkt-Teams hinweg, und Multi-Region-Operations sorgen für Konsistenz über Geografien. Die Plattform wird als Produkt mit Roadmap und internem NPS betrieben."
---

**Enterprise Platform Engineering ist die Disziplin des Aufbauens und Betreibens interner Plattformen für Organisationen mit mehreren Produkt-Teams, Cross-BU-Isolation und nachhaltigem Scale. Es ist anderer Scope als "Platform Engineering für ein einzelnes Team" — Multi-Tenancy, Governance und Ops-at-Scale sind nicht verhandelbar.**

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für regulierte Multi-DC-Plattformen; **[Developer Self-Service](/de/produkte/private-cloud-platform/)** für produkt-engineering-led IDP at enterprise scale.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/dienstleistungen/platform-engineering/">Platform Engineering Services →</a>
</div>

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wann Enterprise-Scope zählt

- 5+ Produkt-Teams mit geteilter Plattform
- Multi-BU-Trennung erforderlich
- Cross-jurisdiktionelle Souveränitätsbeschränkungen
- 500+ Engineering-Organisation
- Multi-Cluster / Multi-Region-Operations

Für kleineren Scope siehe **[Platform Engineering Services](/de/dienstleistungen/platform-engineering/)**.

</div>
</div>

---

## Was bei Enterprise-Scale anders ist

- **Multi-Tenancy strukturell** — Tenant CRD auf Cozystack
- **Governance und Audit** — Compliance-by-Design
- **Multi-Region-Operations** — Konsistenz über Geografien
- **SLO-Disziplin** über Produkt-Teams
- **Plattform-as-Product** — Internal NPS, Roadmap-Disziplin

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>5+ Produkt-Teams, Multi-BU</b><div class="diagram__chips"><span>Cross-jurisdiktionelle Souveränität</span><span>Multi-Cluster / Multi-Region</span></div></div>
<div class="diagram__conn">teilen</div>
<div class="diagram__node diagram__node--brand"><b>Ænix Platform auf Cozystack</b><div class="diagram__chips"><span>Tenant CRD (strukturelle Multi-Tenancy)</span><span>KubeVirt (VMs und Container)</span><span>Cilium-eBPF-Networking</span><span>LINSTOR/DRBD-Storage</span></div></div>
<div class="diagram__conn">stellt bereit</div>
<div class="diagram__node"><b>Isolierte Ressourcen je Mandant</b><div class="diagram__chips"><span>auf einer gemeinsamen Kubernetes-API</span><span>BU-übergreifende Trennung</span></div></div>
</div>
</div>

---

*Ænix ist das Open-Core-Unternehmen hinter [Cozystack](https://cozystack.io) (CNCF-Projekt). Hersteller von Ænix Platform — turnkey kommerzielle Cloud-in-a-Box in drei Plattformen.*
