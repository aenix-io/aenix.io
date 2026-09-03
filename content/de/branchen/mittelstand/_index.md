---
title: "Cloud-Plattform für Mittelstand — ehrliche Antwort, wann Cozystack passt"
description: "Cozystack ist zweckgebaut für Service Provider, regulierte Unternehmen und Multi-Tenant-Cloud-Builder. Für KMU und kleinen Mittelstand (unter ~100..."
related_pages:
  - /products/cozystack
  - /de/dienstleistungen/platform-readiness-assessment
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /industries/smb-mid-market/
direct_answer: |
  **Diese Seite beantwortet ehrlich, wann Cozystack für den deutschen Mittelstand passt und wann nicht. Cozystack ist zweckgebaut für Service Provider, regulierte Unternehmen und Multi-Tenant-Cloud-Builder. Für kleine KMU (unter ~100 Mitarbeitern, single-tenant, einfache Infrastruktur) ist Cozystack Over-Engineering — Hyperscaler, Hetzner oder Proxmox sind dort einfacher. Cozystack lohnt sich für Mittelständler mit regulierten Daten, DACH-Souveränitätsanforderungen, interner Plattform-Engineering-Funktion oder einem Weg zu Multi-Tenant (etwa SaaS). KMU konsumieren die Plattform meist als Produkt über einen Aenix-Partner (regionaler MSP oder Hosting-Anbieter), der die Ænix Platform darunter betreibt. Direktes Aenix-Engagement ist im KMU-Maßstab selten passend.**
quick_facts:
  - label: "Was es ist"
    value: "Ehrliche Fit-Einschätzung, wann Cozystack als Cloud-Plattform für den Mittelstand sinnvoll ist und wann nicht"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Wann es NICHT passt"
    value: "Single-Tenant, unter 50 Hosts, IT-Team unter 5 Personen, keine Plattform-Engineering-Funktion, einfaches Workload-Portfolio"
  - label: "Wann es passt"
    value: "Regulierte Daten, DACH-Souveränität, interne Plattform-Engineering-Funktion, Weg zu Multi-Tenant (SaaS) oder konkreter Kosten-Trigger"
  - label: "Bezugsweg für KMU"
    value: "Über einen Aenix-Partner (regionaler MSP / Hosting-Anbieter), der die Ænix Platform betreibt"
  - label: "Technologie"
    value: "KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium (eBPF) Networking, LINSTOR/DRBD Storage, Tenant-CRD-Mandantenfähigkeit"
faq:
  - q: "Passt Cozystack für ein kleines KMU mit unter 100 Mitarbeitern?"
    a: "In der Regel nicht. Für single-tenant Betrieb, unter 50 Hosts und ein IT-Team unter 5 Personen ohne Plattform-Engineering-Funktion ist Cozystack Over-Engineering. Hyperscaler, Hetzner oder Proxmox sind in diesen Fällen einfacher und schneller einsatzbereit."
  - q: "Wann lohnt sich Cozystack für den Mittelstand?"
    a: "Wenn regulierte Daten (Banking- oder Healthcare-adjacent), DACH-spezifische Souveränitätsanforderungen, eine interne Plattform-Engineering-Funktion, ein Weg zu Multi-Tenant-Angeboten wie SaaS oder ein konkreter Kosten-Trigger vorliegen. Ein Discovery-Call bestätigt den Fit oder verweist auf eine einfachere Lösung."
  - q: "Wie beziehen KMU Cozystack beziehungsweise die Ænix Platform?"
    a: "Meist über einen Aenix-Partner — einen regionalen MSP oder Hosting-Anbieter, der die Ænix Public Cloud Platform darunter betreibt. KMU konsumieren Cloud als fertiges Produkt vom Partner. Ein direktes Aenix-Engagement ist im KMU-Maßstab selten passend."
  - q: "Was kostet Cozystack als Software?"
    a: "Cozystack ist Open Source unter Apache 2.0 ohne Lizenzkosten und ohne CPU- oder Core-basierte Gebühren. Aenix verkauft die produktisierte Ænix Platform plus Services. Die Preisstufen beginnen bei Basic 1.250 $/Monat (10 Nodes), Standard 3.000 $, Plus 5.500 $ und Enterprise nach Aufwand."
  - q: "Warum empfiehlt Aenix Cozystack nicht jedem Mittelständler?"
    a: "Cozystack ist Open Source und Aenix verkauft keine Lizenzen. Eine Plattform zu empfehlen, die ein KMU nicht braucht, würde der Reputation schaden. Die ehrliche Fit-Einschätzung zählt mehr als der Sales-Pitch."
  - q: "Worin liegt der Unterschied zwischen Cozystack und einem Hyperscaler für den Mittelstand?"
    a: "Cozystack bringt VMs und Container über KubeVirt auf einer Kubernetes-API zusammen, mit Cilium-Networking, LINSTOR-Storage und Tenant-CRD-Mandantenfähigkeit — geeignet für souveräne, Multi-Tenant-Cloud-Builds. Hyperscaler sind einfacher für simple single-tenant Workloads, bieten aber weder volle Datensouveränität noch lizenzkostenfreien Betrieb."
---

**Cozystack ist zweckgebaut für Service Provider, regulierte Unternehmen und Multi-Tenant-Cloud-Builder. Für KMU und kleinen Mittelstand (unter ~100 Mitarbeitern, single-tenant, einfache Infrastruktur) ist Cozystack Over-Engineering. Die ehrliche Antwort zählt mehr als der Sales-Pitch.**

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** — aber **nur über einen Aenix-[Partner](/de/partner/)** (regionaler MSP / Hosting-Anbieter). KMU-Kunden konsumieren Cloud als Produkt vom Partner, der die Ænix Platform darunter betreibt. Ein direktes Aenix-Engagement passt im KMU-Maßstab selten.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>KMU-Kunde</b></div>
<div class="diagram__conn">konsumiert Cloud von</div>
<div class="diagram__node"><b>Aenix-Partner</b><div class="diagram__chips"><span>Regionaler MSP</span><span>Hosting-Anbieter</span></div></div>
<div class="diagram__conn">betreibt</div>
<div class="diagram__node diagram__node--brand"><b>Ænix Public Cloud Platform</b></div>
<div class="diagram__conn">basiert auf</div>
<div class="diagram__node"><b>Cozystack</b><div class="diagram__chips"><span>Apache 2.0</span><span>CNCF-Projekt</span></div></div>
</div>
</div>

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Kurzer Fit-Check-Call (15 Min, kostenlos)</a>
</div>

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wann Cozystack NICHT für KMU passt

- Ein Team, eine Produktlinie, ein Tenant
- Unter 50 Server / Hosts
- Bestehendes IT-Team kleiner als 5
- Keine Plattform-Engineering-Funktion (und kein Plan, eine aufzubauen)
- Einfaches Workload-Portfolio (ein paar VMs, einfache Datenbanken)
- Public-Cloud-Ökonomie (AWS/Azure/GCP) funktioniert und das Team ist damit vertraut

In diesen Fällen ist **Cozystack Over-Engineering**. Realistische Alternativen:

- **Einfache Hyperscaler-Deployments** — AWS/Azure/GCP mit Managed Services
- **Proxmox VE** — für KMU-On-Prem-Virtualisierung
- **Hetzner / OVHcloud / ähnliche** — Managed Infrastructure
- **Cloud-Managed-Plattformen** — DigitalOcean, Linode, Hostinger für sehr kleine Teams

</div>
</div>

---

## Wann Cozystack für den Mittelstand passen könnte

- Mittelstand mit **regulierten Daten** (Banking-nah, Healthcare-nah)
- Mittelstand mit **spezifischem Souveränitäts-Druck** (DACH-Finanzdienstleistungs-KMU)
- Mittelstand mit **interner Plattform-Engineering-Funktion**
- Mittelstand, der **Multi-Tenant** wird (z.B. SaaS-Unternehmen mit 100+ Kunden)
- Mittelstand mit **spezifischem Kosten-Trigger** bei Skalierung (FinOps-Mandat)

Für diese Fälle bestätigt ein Discovery-Call, ob Cozystack passt oder ob etwas Einfacheres richtig ist.

---

## Was wir KMU / Mittelstand anbieten

- **15-minütiger Fit-Check-Call** — kostenlos, ehrlich, ohne Sales-Druck. Wir sagen Ihnen, ob Cozystack passt oder nicht.
- **Architektur-Review** (5-10 Tage, Festpreis) — für Organisationen, die vor einer Festlegung eine strukturierte Bewertung wünschen.
- **Phase-2-Implementierung** — nur wenn die Bewertung bestätigt, dass Cozystack passt.

---

## Warum wir das ehrlich publizieren

Cozystack ist Open Source. Wir verkaufen keine Lizenzen. Ihnen etwas zu bauen, das Sie nicht brauchen, würde unserer Reputation schaden. Besser, von Anfang an ehrlich zu sein und uns auf Right-Fit-Projekte einzulassen.

Evidenz aus dem Kundenstamm: Die meisten Aenix-Engagements betreffen Engineering-Organisationen mit 200+ Mitarbeitern. KMU-Engagements sind selten — und wenn sie vorkommen, werden sie durch Ausnahmefälle mit regulierten Daten getrieben, nicht durch generische "Cloud-Plattform"-Bedürfnisse.

---

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

- **[Wann Cozystack für KMU und Mittelstand passt — ehrliche Antwort](/blog/2026/05/when-cozystack-fits-smb-and-mid-market/)**

---

*Aenix ist das Team hinter Cozystack (CNCF-Projekt) und bietet die Ænix Platform — unser kommerzielles, produktisiertes Angebot auf Basis von Cozystack. Wir engagieren uns bei Projekten, bei denen die Architektur wirklich passt.*
