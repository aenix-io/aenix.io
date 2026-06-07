---
title: "Cloud-Plattform für Mittelstand — ehrliche Antwort, wann Cozystack passt"
description: "Cozystack ist zweckgebaut für Service Provider, regulierte Unternehmen und Multi-Tenant-Cloud-Builder. Für KMU und kleinen Mittelstand (unter ~100..."
related_pages:
  - /products/cozystack
  - /de/dienstleistungen/platform-readiness-assessment
language: "de"
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
    a: "Meist über einen Aenix-Partner — einen regionalen MSP oder Hosting-Anbieter, der die Ænix Platform ISP Edition darunter betreibt. KMU konsumieren Cloud als fertiges Produkt vom Partner. Ein direktes Aenix-Engagement ist im KMU-Maßstab selten passend."
  - q: "Was kostet Cozystack als Software?"
    a: "Cozystack ist Open Source unter Apache 2.0 ohne Lizenzkosten und ohne CPU- oder Core-basierte Gebühren. Aenix verkauft die produktisierte Ænix Platform plus Services. Die Preisstufen beginnen bei Basic 1.250 $/Monat (10 Nodes), Standard 3.000 $, Plus 5.500 $ und Enterprise nach Aufwand."
  - q: "Warum empfiehlt Aenix Cozystack nicht jedem Mittelständler?"
    a: "Cozystack ist Open Source und Aenix verkauft keine Lizenzen. Eine Plattform zu empfehlen, die ein KMU nicht braucht, würde der Reputation schaden. Die ehrliche Fit-Einschätzung zählt mehr als der Sales-Pitch."
  - q: "Worin liegt der Unterschied zwischen Cozystack und einem Hyperscaler für den Mittelstand?"
    a: "Cozystack bringt VMs und Container über KubeVirt auf einer Kubernetes-API zusammen, mit Cilium-Networking, LINSTOR-Storage und Tenant-CRD-Mandantenfähigkeit — geeignet für souveräne, Multi-Tenant-Cloud-Builds. Hyperscaler sind einfacher für simple single-tenant Workloads, bieten aber weder volle Datensouveränität noch lizenzkostenfreien Betrieb."
---

**Cozystack ist zweckgebaut für Service Provider, regulierte Unternehmen und Multi-Tenant-Cloud-Builder. Für KMU und kleinen Mittelstand (unter ~100 Mitarbeitern, single-tenant, einfache Infrastruktur) ist Cozystack Over-Engineering. Die ehrliche Antwort zählt mehr als der Sales-Pitch.**

> **Passt zu:** **[Ænix Platform ISP Edition](/de/produkte/aenix-platform/isp-edition/)** — aber **nur über einen Aenix-[Partner](/de/partner/)** (regionaler MSP / Hosting-Anbieter). KMU-Kunden konsumieren Cloud als Produkt vom Partner, der Ænix Platform darunter betreibt. Direktes Aenix-Engagement ist im KMU-Maßstab selten passend.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">15-min-Fit-Check (kostenlos)</a>
</div>

---

## Wann Cozystack NICHT für KMU passt

- Single Team, single Produktlinie, single Tenant
- Unter 50 Server / Hosts
- Bestehendes IT-Team kleiner als 5
- Keine Plattform-Engineering-Funktion
- Einfaches Workload-Portfolio

In diesen Fällen Hyperscaler / Hetzner / Proxmox einfacher.

---

## Wann Cozystack für Mittelstand passen könnte

- Mittelstand mit **regulierten Daten** (Banking-, Healthcare-adjacent)
- Mittelstand mit **DACH-spezifischer Souveränität**
- Mittelstand mit **interner Plattform-Engineering-Funktion**
- Mittelstand wird **Multi-Tenant** (z.B. SaaS)
- Mittelstand mit **spezifischem Kosten-Trigger**

In diesen Fällen — Discovery-Call bestätigt Fit oder weist auf Einfacheres hin.

---

## Warum wir das ehrlich publizieren

Cozystack ist Open Source. Wir verkaufen keine Lizenzen. Was Sie nicht brauchen zu bauen, würde unserer Reputation schaden.

/contact/

---

*Aenix ist das Team hinter Cozystack.*

<!-- Word count: ~300. Honest positioning. -->
