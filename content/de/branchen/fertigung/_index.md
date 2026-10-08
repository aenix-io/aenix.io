---
title: "Cloud-Plattform für die Fertigung — Industrie 4.0, edge-fähig, souverän"
seo_title: "Cloud-Plattform für die Fertigung und Industrie 4.0"
description: "Industrie-4.0-Cloud auf Purdue-Ebene 3 und 3.5: MES, Historians, OPC UA und KI-Qualitätsprüfung von Zentrale bis Shopfloor. Werke laufen ohne Uplink weiter."
related_pages:
  - /de/loesungen/data-sovereignty/
  - /de/loesungen/nis2-compliance/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /industries/manufacturing/
direct_answer: |
  **Eine Cloud-Plattform für die Fertigung ist ein einheitliches Rechenfundament, das Industrie-4.0- und IT/OT-Workloads in der Zentrale, an regionalen Standorten und an der Edge in der Produktion einheitlich in einem Betriebsmodell betreibt. Sie richtet sich an Hersteller in der EU, im DACH-Raum und in Zentralasien, die unter NIS2 fallen (die Herstellung kritischer Produkte ist in Anhang II aufgeführt), industrielles geistiges Eigentum wie Konstruktionsdaten und Rezepturen schützen und KI für Qualitätskontrolle und Predictive Maintenance einsetzen. Ænix baut diese Plattformen auf Cozystack, einem Open-Source-CNCF-Sandbox-Projekt (Apache 2.0), das Ænix initiiert hat und gemeinsam mit Maintainern anderer Unternehmen pflegt. Es betreibt virtuelle Maschinen und Container über KubeVirt auf einer Kubernetes-API, mit Cilium-eBPF-Networking, LINSTOR/DRBD-Storage und Tenant-basierter Mandantenfähigkeit. Zusätzlich bietet Ænix die Ænix Private Cloud Platform (Angebot per RFP) sowie Implementierungs- und Support-Leistungen an.**

quick_facts:
  - label: "Was es ist"
    value: "Eine einheitliche Cloud-Plattform auf Basis von Cozystack über Zentrale, regionale Standorte und Produktions-Edge in einem Betriebsmodell"
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung)"
  - label: "Zielgruppe"
    value: "Hersteller in der EU, im DACH-Raum und in Zentralasien mit Anforderungen an IT/OT-Konvergenz, Edge und den Schutz industriellen geistigen Eigentums"
  - label: "Relevante Regulierung"
    value: "NIS2 — die Herstellung kritischer Produkte ist in Anhang II aufgeführt (wichtige Einrichtungen)"
  - label: "Kernfunktionen"
    value: "Air-Gap-Deployment für sensible OT-Workloads, Multi-Site-Edge-Architektur, Mandantenfähigkeit zur Trennung von Geschäftsbereichen und Joint Ventures, KI-Infrastruktur für Qualitätskontrolle und Predictive Maintenance"
  - label: "Empfohlene Plattform"
    value: "Ænix Private Cloud Platform für industrielles IT/OT über mehrere Rechenzentren und die Edge"

faq:
  - q: "Hilft eine Cloud-Plattform für die Fertigung bei der NIS2-Compliance?"
    a: "Sie ist darauf ausgelegt, die Anforderungen zu unterstützen; die Pflichten bleiben bei Ihnen. NIS2 bezieht die Herstellung kritischer Produkte ein (Anhang II). Eine Plattform auf Basis von Cozystack unterstützt die architektonischen Kontrollen hinter den Risikomanagementmaßnahmen nach Artikel 21 — Datensouveränität, Isolation zwischen Mandanten und Air-Gap-Deployment für die sensibelsten OT-Workloads — über Zentrale, regionale Standorte und Edge in einem Betriebsmodell."
  - q: "Läuft die Plattform auch an der Edge in der Produktion, nicht nur im zentralen Rechenzentrum?"
    a: "Ja. Edge-Compute ist Kern, nicht Option. Dieselbe Plattform läuft in der Zentrale, an regionalen Standorten und in der Produktion, sodass Industrie-4.0-Workloads wegen der Latenz nah an den Maschinen bleiben und trotzdem alle Standorte ein Betriebsmodell teilen."
  - q: "Wie wird industrielles geistiges Eigentum wie Konstruktionsdaten und Rezepturen geschützt?"
    a: "Die Plattform unterstützt Air-Gap-Deployments für die sensibelsten Workloads und Tenant-basierte Mandantenfähigkeit, um Geschäftsbereiche und Joint Ventures zu trennen. Zusammen mit Kontrollen für die Datensouveränität bleibt industrielles geistiges Eigentum vertraulich und in den gewählten Rechtsräumen."
  - q: "Können Hersteller darauf KI-Workloads wie Qualitätskontrolle und Predictive Maintenance betreiben?"
    a: "Ja. Cozystack stellt GPU-Infrastruktur (NVIDIA GPU Operator) für Qualitätskontrolle, Predictive Maintenance und Lieferkettenoptimierung bereit, einschließlich privater LLMs auf Industriedaten, sodass sensible Eingaben die Umgebung des Unternehmens nie verlassen."
  - q: "Was kostet die Plattform, und gibt es Lizenzkosten pro Core?"
    a: "Cozystack ist Open Source unter Apache 2.0, ohne Lizenzkosten pro CPU oder Core. Die Ænix Private Cloud Platform für Multi-Site- und Edge-Deployments wird nach einem Platform Readiness Assessment zum Festpreis (14 oder 28 Tage) per RFP angeboten. Support-Stufen für selbst betriebenes Cozystack beginnen bei 1.250 USD pro 10 Nodes und Monat (Basic, jährliche Abrechnung) — siehe die Preisseite."
  - q: "Wie betreibt Cozystack VMs und Container für die OT/IT-Konvergenz?"
    a: "Cozystack nutzt KubeVirt, um virtuelle Maschinen und Container nebeneinander auf einer Kubernetes-API zu betreiben, mit Cilium-eBPF-Networking und LINSTOR/DRBD-Storage. So teilen sich bestehende OT-VMs und moderne containerisierte IT-Workloads eine Plattform."
---

**Fertigung bedeutet 2026 mehrere Anforderungen zugleich: Industrie-4.0-Transformation, NIS2-Compliance (die Herstellung kritischer Produkte fällt in den Anwendungsbereich), Edge-Compute an Produktionsstandorten, KI-gestützte Qualitätskontrolle und wachsende Souveränitätsanforderungen für industrielles geistiges Eigentum. Die architektonische Antwort ist eine durchgängige Plattform, die in der Zentrale, an regionalen Standorten und an der Edge in der Produktion läuft — in einem Betriebsmodell.**

Ænix baut Plattformen für Fertigungsunternehmen in der EU, im DACH-Raum und in Zentralasien.

> **Passende Plattform:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** — Architektur über mehrere Rechenzentren und die Edge für industrielles IT/OT, darauf ausgelegt, die Anforderungen von NIS2 an Hersteller kritischer Produkte zu unterstützen, mit Air-Gap-Unterstützung für OT-Netze.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/loesungen/data-sovereignty/">Datensouveränität →</a>
</div>

---

## Weshalb Fertigungsteams zu uns kommen

- **Edge-Cloud an Produktionsstandorten** — Industrie-4.0-Workloads nah an den Maschinen
- **NIS2-Bereitschaft** — die Herstellung kritischer Produkte fällt in den Anwendungsbereich
- **Souveräne Cloud für industrielles geistiges Eigentum** — Konstruktionsdaten, Rezepturen, Lieferkettendaten
- **KI-Workloads** — Qualitätskontrolle, Predictive Maintenance, Lieferkettenoptimierung
- **Hybrid: Cloud für Analytics, Edge für den Betrieb**

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Warum Fertigungsarchitektur anders ist

- **Edge-Compute ist Kern, nicht Option** — Latenzanforderungen in der Produktion
- **Lange Abschreibungszyklen** — Fertigungsanlagen halten Jahrzehnte; die Plattform muss mit mehreren Hardware-Generationen funktionieren
- **OT/IT-Konvergenz** — Betriebstechnik trifft auf Informationstechnik
- **Lange Aufbewahrung** — Qualitäts-, Rückverfolgbarkeits- und Regulierungsdaten mit Aufbewahrungspflichten über Jahrzehnte
- **Schutz industriellen geistigen Eigentums** — Konstruktionsdaten und Rezepturen sind vertraulicher als typische Unternehmensdaten

</div>
</div>

---

## Das Cozystack-Muster für die Fertigung

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>IT/OT-Workloads</b><div class="diagram__chips"><span>KubeVirt-VMs</span><span>Container</span><span>KI-Qualitätskontrolle</span><span>Predictive Maintenance</span></div></div>
<div class="diagram__conn">laufen auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>Eine Kubernetes-API</span><span>Tenant-Mandantenfähigkeit</span><span>Air-Gap-Deployment</span></div></div>
<div class="diagram__conn">verteilt über</div>
<div class="diagram__node"><b>Fertigungsstandorte</b><div class="diagram__chips"><span>Zentrale</span><span>Regionale Standorte</span><span>Edge in der Produktion</span></div></div>
</div>
</div>

- Multi-Site-Betrieb: Zentrale, regionale Standorte und Edge in der Produktion auf einer Plattform
- Air-Gap-Deployment für die sensibelsten Workloads (industrielles geistiges Eigentum)
- Mandantenfähigkeit zur Trennung von Geschäftsbereichen und Joint Ventures
- KI-Infrastruktur für Qualitätskontrolle und Predictive Maintenance

### Wo die Plattform im Purdue-Modell sitzt

Die Plattform liegt auf den Ebenen 3 und 3.5 — Standortbetrieb und DMZ — und reicht nicht hinunter auf die Ebenen 0 bis 2. Steuerungen, SPS, SCADA und die Sicherheitssysteme bleiben genau dort, wo sie sind: in ihrem eigenen Netz, unter ihrem eigenen Änderungsmanagement. Auf der Plattform läuft die Schicht darüber: MES und Historians, OPC-UA-Collector und Unified-Namespace-Broker, die Inferenz für die Qualitätsprüfung, die Datenpipeline hinauf zur Unternehmensebene und die als VM verpackten Industrieanwendungen, die der Hersteller nur auf einem bestimmten Betriebssystem unterstützt.

Die Einordnung nach IEC 62443 ergibt sich aus dieser Position: Die Plattform bildet eine oder mehrere Zonen mit definierten Conduits ins OT-Netz, Segmentierung ist also eine Eigenschaft des Designs und keine Liste von Firewall-Ausnahmen. Cilium-Netzwerkrichtlinien definieren die Conduits, Grenzen über die Tenant-CRD trennen eine Linie, ein Werk oder einen Joint-Venture-Partner, und das Ganze läuft air-gapped, wo das Sicherheitskonzept des Standorts es verlangt. Die Komponentenzertifizierung der Industriegeräte bleibt Pflicht der Gerätehersteller — das kann eine Infrastrukturplattform nicht übernehmen.

**Was im Werk passiert, wenn der Uplink ausfällt.** Diese Frage entscheidet über die Architektur, also sollte die Antwort klar sein: Ein Standort-Cluster läuft weiter. Die Steuerung hing ohnehin nie von der Plattform ab, denn sie liegt darunter. Die Workloads des Standorts — der Historian, die lokale Inferenz für die Prüfung, MES-Funktionen vor Ort — arbeiten aus lokalem Storage weiter, ihr Zustand wird innerhalb des Standorts repliziert statt in die Zentrale. Was stoppt, ist das, was stoppen soll: die Replikation nach oben, die Aktualisierung zentraler Dashboards, die standortübergreifende Aggregation. Sobald die Verbindung zurück ist, werden gepufferte Daten nachgeliefert und der Standort synchronisiert sich. Die Produktion wartet nicht auf eine WAN-Leitung oder auf eine Control Plane in einem anderen Land — auch deshalb passt ein Edge-Dienst eines Hyperscalers schlecht zu einer Fabrik.

---

## Unternehmen, die Plattformen mit Ænix betreiben

{{< clients >}}

Hosting-Anbieter, die die Ænix Public Cloud Platform produktiv betreiben. Kein Fertigungskunde wird namentlich genannt. Das am nächsten liegende beschriebene Deployment mit demselben strukturellen Muster — mehrere Standorte, isolierte Tenants, vom Kunden selbst betrieben — ist die [Fallstudie zur souveränen Public Cloud](/de/case-studies/sovereign-public-cloud/).

---

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — Schutz industriellen geistigen Eigentums
- **[NIS2-Compliance](/de/loesungen/nis2-compliance/)** — Regulierung für kritische Produkte
- **[Souveräne KI](/de/loesungen/sovereign-ai/)** — KI auf Industriedaten
- **[Cozystack](/de/produkte/cozystack/)**

---

*Ænix hat Cozystack initiiert (CNCF-Sandbox-Projekt) und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bieten wir drei Plattformen an — Public Cloud, Private Cloud und AI.*
