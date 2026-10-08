---
title: "Cloud-Plattform für Energieversorger — an NIS2 ausgerichtet, edge-fähig, souverän durch Architektur"
seo_title: "Cloud-Plattform für Energieversorger, an NIS2 ausgerichtet"
description: "An NIS2 ausgerichtete Cloud für Strom-, Gas-, Öl- und Wärmeversorger: Zentrale, regionale Standorte und Umspannwerk-Edge in einem Kubernetes-Betriebsmodell."
related_pages:
  - /de/loesungen/data-sovereignty/
  - /de/loesungen/nis2-compliance/
  - /de/loesungen/sovereign-ai/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/ai-platform/
  - /de/produkte/cozystack/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /industries/energy/
direct_answer: |
  **Eine Cloud-Plattform für Energieversorger ist eine souveräne, an NIS2 ausgerichtete Infrastruktur, die in der Zentrale, in regionalen Leitstellen und an der Umspannwerk-Edge einheitlich unter einem Kubernetes-Betriebsmodell läuft. Sie richtet sich an Strom-, Gas-, Öl- und Wärmeversorger, die nach NIS2 Anhang I als wesentliche Einrichtungen gelten und Netzdaten-Analytics, KI-Prognosen und OT-Systeme auf kritischer Infrastruktur betreiben müssen, die über Jahrzehnte abgeschrieben wird. Ænix setzt dieses Muster mit Cozystack um, einem Open-Source-CNCF-Sandbox-Projekt, das virtuelle Maschinen und Container auf einer Kubernetes-API vereint, Air-Gap-Installationen unterstützt und auf Kunden-Hardware läuft. Ænix bietet die Ænix Private Cloud Platform (Angebot per RFP) sowie Platform-Engineering-Leistungen darauf an.**

quick_facts:
  - label: "Was es ist"
    value: "Eine souveräne, an NIS2 ausgerichtete Cloud-Plattform für Energieversorger über Zentrale, regionale Leitstellen und Umspannwerk-Edge unter einem Kubernetes-Betriebsmodell"
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung)"
  - label: "Zielgruppe"
    value: "Strom-, Gas-, Öl- und Fernwärmeversorger, die nach NIS2 Anhang I als wesentliche Einrichtungen eingestuft sind"
  - label: "Kernfunktion"
    value: "Multi-Site-Architektur (zentrale Steuerung + regionale Standorte + Umspannwerk-Edge) mit air-gapped OT-Grenze und KI-Infrastruktur für Netzprognosen"
  - label: "Regulatorischer Rahmen"
    value: "NIS2 Artikel 21 (Risikomanagement) und Artikel 23 (Meldepflichten) sowie sektorale Vorgaben der Mitgliedstaaten (BSI, ANSSI) und britische Entsprechungen (NCSC). Die AENIX s.r.o. ist für ihr eigenes ISMS nach ISO/IEC 27001:2022 zertifiziert"
  - label: "Projektablauf"
    value: "Zuerst ein Platform Readiness Assessment zum Festpreis (14 oder 28 Tage), danach 3–12 Monate Aufbau je nach Umfang; Multi-Site-Rollouts erfolgen Standort für Standort"

faq:
  - q: "Fällt der Energiesektor unter NIS2?"
    a: "Ja. Energie ist nach NIS2 Anhang I ein Sektor wesentlicher Einrichtungen und umfasst Strom (Erzeugung, Übertragung, Verteilung), Gas, Öl, Fernwärme und -kälte sowie Wasserstoff. Für Betreiber in diesen Kategorien gelten die Risikomanagementpflichten nach Artikel 21 und die Meldepflichten nach Artikel 23."
  - q: "Unterstützt Cozystack Air-Gap-Deployments für OT-Systeme?"
    a: "Ja. Cozystack hat einen dokumentierten Ablauf für Air-Gap-Installationen. Energieversorger können damit eine eingeschränkte oder vollständig isolierte OT-Grenze für SCADA-, DCS- und RTU-Systeme ziehen, während IT- und Analytics-Workloads im selben Kubernetes-Betriebsmodell laufen."
  - q: "Wie läuft die Plattform in Umspannwerken und an entfernten Erzeugungsstandorten?"
    a: "Die Architektur folgt einem Multi-Site-Muster: zentrale Steuerung, regionale Aggregation und eine Edge-Ebene in den Umspannwerken, alles unter einer Kubernetes-API. Edge-Standorte rechnen lokal mit zentral vorgegebener Policy und kommen mit unterbrochener Verbindung zurecht, was zu dezentraler Erzeugung und Microgrids passt."
  - q: "Warum eignet sich eine Open-Source-Plattform für Netzinfrastruktur?"
    a: "Netz-Hardware wird über Jahrzehnte abgeschrieben, die Plattform muss also mehrere Hardware-Generationen überdauern. Cozystack steht unter Apache 2.0, wird in der CNCF gemeinschaftlich gesteuert und läuft auf Kunden-Hardware — ohne Lizenzkosten pro Core und ohne Vendor-Lock-in über Planungshorizonte von mehr als einem Jahrzehnt."
  - q: "Was verkauft Ænix, und worin unterscheidet sich das von Cozystack?"
    a: "Cozystack ist das Open-Source-Plattformfundament in der CNCF, von Ænix entwickelt und gemeinsam mit Maintainern anderer Unternehmen gepflegt. Ænix verkauft Plattform-Abonnements (Support, kommerzielle Module und Services) — die Ænix Private Cloud Platform wird nach einem Platform Readiness Assessment per RFP angeboten — sowie Platform-Engineering-Leistungen."
  - q: "Wie beginnt ein Projekt?"
    a: "Mit einem Platform Readiness Assessment zum Festpreis über 14 oder 28 Tage. Es erfasst NIS2- und sektorale Compliance-Lücken, die Multi-Site-Architektur, das Design der OT/IT-Grenze, die Konsolidierung der Smart-Grid-Systeme und die KI-Infrastruktur für Netz-Anwendungsfälle. Der Aufbau dauert danach typischerweise 3–12 Monate je nach Umfang; Multi-Site-Rollouts erfolgen Standort für Standort."
---

**Energieversorger stehen 2026 vor einer besonderen Kombination von Anforderungen: Einstufung als wesentliche Einrichtung nach NIS2 (Energie fällt in den Anwendungsbereich), Souveränitätsvorgaben für Daten kritischer Infrastruktur, Edge-Compute in Umspannwerken und an Erzeugungsstandorten, KI-gestützte Netzoptimierung und Prognosen — und die betriebliche Realität, dass Hardware-Zyklen in der Netzinfrastruktur in Jahrzehnten gemessen werden, nicht in Jahren. Die architektonische Antwort ist eine durchgängige Plattform, die in der Zentrale, in regionalen Leitstellen und an der Umspannwerk-Edge läuft — in einem Betriebsmodell mit an NIS2 ausgerichteten Kontrollen.**

Ænix setzt ein Multi-Site-Plattformmuster um, das darauf ausgelegt ist, die Anforderungen von NIS2 zu unterstützen, mit Schwerpunkt auf IT/OT-Konvergenz, Edge-Resilienz und Air-Gap-Unterstützung für OT-Systeme. Die AENIX s.r.o. ist für ihr eigenes ISMS nach ISO/IEC 27001:2022 zertifiziert ([Zertifikat](/de/compliance/iso-27001/)).

> **Passende Plattformen:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für eine an NIS2 ausgerichtete Multi-Site-Architektur mit Air-Gap-Option für OT; **[AI Platform](/de/produkte/ai-platform/)** für KI-Workloads zur Netzoptimierung.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/smart-grid-plattform-architektur-it-ot/">Netzarchitektur →</a>
</div>

---

## Weshalb Energieversorger zu uns kommen

- **NIS2-Compliance für Cloud- und OT-Infrastruktur** — Energie ist nach Anhang I ein Sektor wesentlicher Einrichtungen; es gelten Artikel 21 (Risikomanagement) und Artikel 23 (Meldepflichten)
- **Souveräne Cloud für Netz- und Kundendaten** — Daten kritischer Infrastruktur mit sektoralen Anforderungen an die Datenresidenz
- **Konsolidierung der Smart-Grid-Plattform** — mehrere Altsysteme unter einer Kubernetes-nativen Control Plane zusammengeführt
- **KI für Netzoptimierung, Prognosen und Predictive Maintenance** — dauerhafte Workloads auf Kunden-Hardware
- **VMware-Ausstieg / OpenStack-Modernisierung** — viele Energieversorger betreiben veraltete Virtualisierung, die modernisiert werden muss
- **Edge-Compute in Umspannwerken und an Erzeugungsstandorten** — verteilte Control Plane mit zentraler Policy

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Warum Energie-Architektur anders ist

- **Edge-Compute ist Kern, nicht Option** — Umspannwerke, dezentrale Erzeugung und Microgrids brauchen lokale Rechenleistung bei nur zeitweiliger Verbindung zur Zentrale
- **OT/IT-Konvergenz ist strukturell** — wo Betriebstechnik (SCADA, DCS, RTUs) auf Cloud-native IT-Infrastruktur trifft, muss die Grenze sorgfältig entworfen werden
- **Lange Abschreibungszyklen** — Netz-Hardware hält Jahrzehnte; die Plattform muss über mehrere Hardware-Generationen hinweg funktionieren
- **Sicherheitsmodell kritischer Infrastruktur** — physische und Cyber-Bedrohungen; ein Air-Gap für OT-Systeme ist oft nicht verhandelbar
- **Dreifache Regulierung** — NIS2, sektorale Energieregulierung (national und EU) und spezifische Cybersicherheitsvorgaben (nationale Behörden)
- **Höchste Verfügbarkeitsanforderungen** — Ausfälle berühren die öffentliche Sicherheit; Redundanz (N+1 oder mehr) muss eingeplant und geprobt werden

</div>
</div>

---

## Das Cozystack-Muster für Energieversorger

- **Multi-Site** — zentrale Steuerung, regionale Standorte und Umspannwerk-Edge unter einer Kubernetes-API
- **Air-Gap für OT** — Cozystack hat einen dokumentierten Ablauf für Air-Gap-Installationen
- **Mandantenfähig** — getrennte Workloads für Erzeugung, Übertragung, Verteilung und kundennahe Systeme
- **KI-Infrastruktur** — für Netzprognosen, Demand Response und Predictive Maintenance
- **Souverän durch Architektur** — Open-Source-Plattform auf Kunden-Hardware, optional aktivierbare Volume-Verschlüsselung
- **Langfristige Plattform** — Apache-2.0-Lizenz und Community-Governance passen zu einer Betriebsplanung über mehr als ein Jahrzehnt

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node diagram__node--brand"><b>Zentrale Steuerung</b><div class="diagram__chips"><span>Eine Kubernetes-API</span><span>Zentrale Policy</span></div></div>
<div class="diagram__conn">gibt Policy vor für</div>
<div class="diagram__node"><b>Regionale Standorte</b><div class="diagram__chips"><span>Regionale Aggregation</span></div></div>
<div class="diagram__conn">reicht bis</div>
<div class="diagram__node"><b>Umspannwerk-Edge</b><div class="diagram__chips"><span>Lokale Rechenleistung</span><span>Toleriert Verbindungsabbrüche</span></div></div>
<div class="diagram__conn">per Air-Gap getrennt von</div>
<div class="diagram__node"><b>OT-Systeme</b><div class="diagram__chips"><span>SCADA</span><span>DCS</span><span>RTU</span></div></div>
</div>
</div>

---

## Unternehmen, die Plattformen mit Ænix betreiben

{{< clients >}}

Hosting-Anbieter, die die Ænix Public Cloud Platform produktiv betreiben. Kunden aus dem Energiesektor werden nicht genannt; [neun veröffentlichte Fallstudien](/de/case-studies/) beschreiben Projekte ausführlich, in anonymisierter Form — darunter eine [Provider-Plattform über drei Rechenzentren](/de/case-studies/sovereign-public-cloud/), die das Multi-Site-Muster zeigt.

{{< quote-carousel >}}

---

## Branchenkontext

- **NIS2-Anwendungsbereich für wesentliche Einrichtungen** — Anhang I umfasst Strom (Erzeugung, Übertragung, Verteilung), Gas, Öl, Fernwärme und -kälte sowie Wasserstoff
- **Sektorale Vorgaben der Mitgliedstaaten** — in Deutschland die BSI-Anforderungen für den Energiesektor, in Frankreich die ANSSI-Vorgaben zur souveränen Cloud für kritische Betreiber, im Vereinigten Königreich die NCSC-Leitlinien als Entsprechung außerhalb der EU; vergleichbare Stellen in anderen Märkten
- **EU-Initiativen zur Netzdigitalisierung** — Datenaustauschplattformen von ENTSO-E und ENTSOG; Smart Grid Architecture Model (SGAM) als Referenzarchitektur
- **KI in der Energiewirtschaft** — Netzprognosen, Demand Response und Predictive Maintenance setzen zunehmend ML auf Netzbetriebsdaten ein; Datenresidenz und Schutz geistigen Eigentums sind reale Randbedingungen

---

## Wie Ænix mit Energieversorgern arbeitet

Standardmäßiges **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit energiespezifischen Schwerpunkten:

- **NIS2- und sektorale Compliance-Lücken** — Artikel 21 und 23 auf die heutige Architektur abgebildet
- **Multi-Site-Architektur** — Zentrale, Regionen und Umspannwerk-Edge in einem Betriebsmodell
- **Design der OT/IT-Grenze** — Air-Gap oder eingeschränkter ausgehender Datenverkehr für OT-Systeme
- **Konsolidierung der Smart-Grid-Plattform** — Integration bestehender SCADA-, DCS-, GIS- und Energiemanagementsysteme
- **KI-Infrastruktur für Netz-Anwendungsfälle** — Prognosen, Demand Response, Predictive Maintenance

Der Aufbau dauert danach typischerweise 3–12 Monate je nach Umfang; Multi-Site-Rollouts erfolgen Standort für Standort.

---

## Bereit für die Beschaffung

Wir nehmen RFI und RFP entgegen über:
- **EU-Mitgliedstaaten** — TED, nationale E-Vergabeportale
- **Kasachstan und Zentralasien** — goszakup.gov.kz, mitwork.kz, zakup.sk.kz
- **Beschaffungsrahmen des Energiesektors** — Klärung im Erstgespräch

---

## So starten Sie

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

Oder lesen Sie weiter:
- **[Smart-Grid-Plattformarchitektur für die IT/OT-Konvergenz](/de/blog/2026/05/smart-grid-plattform-architektur-it-ot/)** — ausführlicher Beitrag
- **[NIS2-Compliance](/de/loesungen/nis2-compliance/)** — Regulierung wesentlicher Einrichtungen
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — Daten kritischer Infrastruktur
- **[Souveräne KI](/de/loesungen/sovereign-ai/)** — KI auf Netzbetriebsdaten
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — Methodik
- **[Cozystack](/de/produkte/cozystack/)** — Open-Source-Plattformfundament

---

*Ænix hat Cozystack entwickelt (CNCF-Sandbox-Projekt, CNCF Certified Kubernetes Distribution, OpenSSF Best Practices) und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bieten wir drei Plattformen an — Public Cloud, Private Cloud und AI — für Organisationen in der EU, im DACH-Raum und in Zentralasien.*
