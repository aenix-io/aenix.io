---
title: "Cloud-Plattform für Energieversorger — NIS2-konform, edge-bereit, souverän nach Architektur"
description: "Energieversorger in der DACH-Region stehen 2026 vor einer spezifischen Kombination von Drücken: NIS2-Klassifikation als wesentliche Entität (Energie ist im..."
related_pages: ["/de/loesungen/nis2-compliance", "/de/loesungen/data-sovereignty", "/de/loesungen/sovereign-ai"]
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /industries/energy/
direct_answer: |
  **Eine Cloud-Plattform für Energieversorger vereint OT-nahes Edge-Compute, NIS2-Compliance und souveräne Datenhaltung auf einer Kubernetes-API. Sie richtet sich an Netzbetreiber, Erzeuger und Stadtwerke in der DACH-Region, die als wesentliche Entitäten unter NIS2 fallen und Netz-, Kunden- und OT-Daten in eigener Kontrolle halten müssen. Aenix liefert dieses Muster mit Cozystack (CNCF-Projekt, Apache 2.0): KubeVirt betreibt VMs und Container nebeneinander, Cilium (eBPF) das Netzwerk, LINSTOR/DRBD den Storage, und das Tenant-CRD trennt Geschäftsbereiche mandantenfähig. Die Architektur unterstützt Multi-Site (Zentrale, Region, Umspannstation) mit Air-Gap-Option für OT und langen Operationshorizont ohne Core-basierte Lizenzkosten.**

quick_facts:
  - label: "Was es ist"
    value: "Multi-Site-Cloud-Plattform für Energieversorger — Edge-Compute an Umspannstationen, NIS2-Compliance und souveräne Daten auf einer Kubernetes-API"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Netzbetreiber, Erzeuger und Stadtwerke in der DACH-Region, NIS2-klassifiziert als wesentliche Entität (Sektor Energie)"
  - label: "Schlüsselfunktion"
    value: "Multi-Site-Architektur (Zentrale + Regional + Substation Edge) mit Air-Gap-Option für OT, Multi-Tenancy für Geschäftsbereiche und KI-Infrastruktur für Netzoptimierung und Predictive Maintenance"
  - label: "Technologie"
    value: "KubeVirt (VMs + Container), Cilium (eBPF) Networking, LINSTOR/DRBD Storage, Tenant-CRD-Mandantenfähigkeit"
  - label: "Engagement"
    value: "Ænix Platform (Enterprise Edition für NIS2-Multi-Site mit Air-Gap; AI/ML Edition für Netzoptimierungs-Workloads) plus Services; Preisstufen ab Basic 1.250 $/Mon. (10 Nodes)"

faq:
  - q: "Ist Cozystack NIS2-konform für Energieversorger?"
    a: "Cozystack liefert die architektonische Grundlage für NIS2-Compliance: Multi-Site-Isolation, Air-Gap-Option für OT-Infrastruktur, Mandantentrennung per Tenant-CRD und souveräne Datenhaltung in eigener Kontrolle. NIS2 ist ein organisatorischer und technischer Gesamtprozess — die Plattform deckt die technische Infrastrukturebene ab. Siehe die NIS2-Compliance-Lösungsseite für Details."
  - q: "Unterstützt die Plattform Edge-Compute an Umspannstationen?"
    a: "Ja. Das Cozystack-Muster für Energie ist explizit Multi-Site: Zentrale, regionale Standorte und Substation Edge. Dieselbe Kubernetes-API läuft an verteilten Erzeugungs- und Umspannstandorten, sodass Workloads für Netzoptimierung und Microgrids nah an der OT betrieben werden."
  - q: "Kann OT-Infrastruktur air-gapped betrieben werden?"
    a: "Ja. Das Muster unterstützt Air-Gap-Betrieb für Operations Technology, getrennt vom IT-Netz. Das adressiert das Critical-Infrastructure-Sicherheitsmodell mit kinetischen und Cyber-Bedrohungen sowie den Regulator-Triple-Stack aus NIS2, sektoraler Energieregulatorik und cybersecurity-spezifischen Vorgaben."
  - q: "Wie passt die lange Abschreibungszyklus von Netz-Hardware zur Plattform?"
    a: "Netzinfrastruktur wird in Jahrzehnten abgeschrieben. Cozystack steht unter Apache 2.0 ohne Core-basierte Lizenzierung und ist ein CNCF-Projekt — das gibt einen langen Operationshorizont ohne Vendor-Lock-in und ohne Lizenzkosten, die mit Hardware-Refresh-Zyklen kollidieren."
  - q: "Welche Ænix-Platform-Edition passt für Energieversorger?"
    a: "Die Enterprise Edition deckt NIS2-konforme Multi-Site-Architektur mit Air-Gap-Option für OT ab. Für KI-getriebene Netzoptimierung, Forecasting und Predictive Maintenance ergänzt die AI/ML Edition die nötige GPU- und KI-Infrastruktur."
  - q: "Eignet sich die Plattform für VMware-Ausstieg oder OpenStack-Modernisierung?"
    a: "Ja. KubeVirt betreibt bestehende VMs und neue Container nebeneinander auf einer Kubernetes-API, was die Migration weg von VMware oder einer alternden OpenStack-Umgebung ohne Komplettumbau ermöglicht. Apache-2.0-Lizenzierung entfernt zudem die Core-basierten Lizenzkosten klassischer Virtualisierungsstacks."
---

**Energieversorger stehen 2026 vor einer spezifischen Kombination von Drücken: NIS2-Klassifikation als wesentliche Entität (Energie ist im Geltungsbereich), souveräne Cloud-Anforderungen für Critical-Infrastructure-Daten, Edge-Compute an Umspannstationen und Erzeugungsstandorten, KI-getriebene Netzoptimierung und Forecasting sowie die operative Realität, dass Hardware-Refresh-Zyklen für Netzinfrastruktur in Jahrzehnten gemessen werden, nicht in Jahren. Die architektonische Antwort ist eine kohärente Plattform, die in der Zentrale, in regionalen Leitstellen und an der Umspannstation-Edge läuft — unter einem Operations-Modell mit NIS2-konformen Kontrollen.**

Aenix pilotiert derzeit Cozystack mit einem Energieversorger und wendet das gleiche Multi-Site-, NIS2-konforme, souveränitätsfreundliche Plattform-Muster an, das bei unseren Kunden aus dem Finanzdienstleistungs- und Telekommunikationssektor läuft. Die energiespezifische Arbeit legt den Schwerpunkt auf IT/OT-Konvergenz, Edge-Resilienz und Air-Gap-Support für OT-Systeme.

> **Passt zu:** **[Ænix Platform Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/)** für NIS2-konforme Multi-Site-Architektur mit Air-Gap-Option für OT; **[AI/ML Edition](/de/produkte/aenix-platform/ai-ml-edition/)** für Netzoptimierungs-KI-Workloads.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/smart-grid-plattform-architektur-it-ot/">Smart-Grid-Plattform-Architektur →</a>
</div>

---

## Wofür Energieversorger zu uns kommen

- **NIS2-Compliance für Cloud- und OT-Infrastruktur** — Energie ist wesentliche Entität nach Annex I; Artikel 21 Risikomanagement und Artikel 23 Meldepflichten für Vorfälle gelten
- **Souveräne Cloud für Netz- und Kundendaten** — Critical-Infrastructure-Daten mit sektoralen Residenz-Anforderungen
- **Smart-Grid-Plattform-Konsolidierung** — mehrere Legacy-Systeme integriert unter einer Kubernetes-nativen Control Plane
- **KI für Netzoptimierung, Forecasting, Predictive Maintenance** — anhaltende Workloads auf Kunden-Hardware
- **VMware-Ausstieg / OpenStack-Modernisierung** — viele Energieversorger haben Legacy-Virtualisierung, die modernisiert werden muss
- **Edge-Compute an Umspannstationen / Erzeugungsstandorten** — verteilte Control Plane mit zentraler Policy

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Warum Energie-Architektur anders ist

- **Edge-Compute ist Kern, nicht optional** — Umspannstationen, verteilte Erzeugung, Microgrids benötigen alle lokales Compute bei intermittierender zentraler Konnektivität
- **OT/IT-Konvergenz ist strukturell** — Operations Technology (SCADA, DCS, RTUs), die auf IT-Cloud-native-Infrastruktur trifft, erfordert sorgfältiges Boundary-Design
- **Lange Abschreibungszyklen** — Netz-Hardware hält Jahrzehnte; die Plattform muss über mehrere Hardware-Generationen hinweg funktionieren
- **Critical-Infrastructure-Sicherheitsmodell** — kinetische + Cyber-Bedrohungen; Air-Gap für OT-Systeme ist oft nicht verhandelbar
- **Regulatorischer Triple-Stack** — NIS2 + sektorale Energieregulierung (national + EU) + cybersecurity-spezifisch (NCAs)
- **Mission-Critical-Zuverlässigkeit** — Ausfälle haben Auswirkungen auf die öffentliche Sicherheit; die Architektur muss N+1- / N+2-Redundanz strukturell unterstützen

</div>
</div>

---

## Cozystack-Muster für Energieversorger

- **Multi-Site** — zentrale Steuerung + regionale Standorte + Umspannstation-Edge unter einer Kubernetes-API
- **Air-Gap für OT** — Cozystack unterstützt Air-Gapped-Deployments, dokumentiert und getestet
- **Multi-Tenant** — getrennte Workloads für Erzeugung / Übertragung / Verteilung / kundenseitige Systeme
- **KI-Infrastruktur** — für Netz-Forecasting, Demand Response, Predictive Maintenance
- **Souverän nach Architektur** — Open-Source-Plattform auf Kunden-Hardware, kundengesteuerte Schlüssel
- **Langfristige Plattform** — Apache-2.0-Lizenz + Community-Governance passen zu einer Betriebsplanung über ein Jahrzehnt hinaus

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node diagram__node--brand"><b>Zentrale Steuerung</b><div class="diagram__chips"><span>Eine Kubernetes-API</span><span>Zentrale Policy</span></div></div>
<div class="diagram__conn">steuert</div>
<div class="diagram__node"><b>Regionale Standorte</b><div class="diagram__chips"><span>Regionale Aggregation</span></div></div>
<div class="diagram__conn">erweitert auf</div>
<div class="diagram__node"><b>Umspannstation-Edge</b><div class="diagram__chips"><span>Lokales Compute</span><span>Intermittierende Konnektivität</span></div></div>
<div class="diagram__conn">getrennt von</div>
<div class="diagram__node"><b>OT-Systeme</b><div class="diagram__chips"><span>SCADA</span><span>DCS</span><span>RTU</span></div></div>
</div>
</div>

---

## Was in der Energie auf Cozystack läuft

{{< clients >}}

*Kunden-Evidenz — Pilot in Arbeit; benannte Referenz ausstehend bis zur Kunden-Genehmigung.*

Anonyme Proof Points:
- Ein regionaler Energieversorger betreibt ein Pilot-Cozystack-Deployment für Netzdaten-Analytics und KI-getriebene Forecasting-Workloads
- Architektur-Muster: zentrale Steuerung + regionale Aggregation + Umspannstation-Edge-Tier; Air-Gapped-OT-Boundary; KI/ML-Cluster für Forecasting
- Angrenzende Plattform-Engagements im Energiesektor über Beschaffungsprozesse skopiert

> {{< placeholder-quote >}}

---

## Branchenkontext

- **NIS2-Geltungsbereich als wesentliche Entität** — Annex I umfasst Strom (Erzeugung, Übertragung, Verteilung), Gas, Öl, Fernwärme/-kälte, Wasserstoff
- **Sektorale Überlagerungen der Mitgliedstaaten** — BSI-Anforderungen für den Energiesektor in Deutschland; ANSSI-souveräne-Cloud für kritische Betreiber in Frankreich; NCSC-Leitlinien in Großbritannien; Äquivalente in anderen Märkten
- **EU-Initiativen zur Netzdigitalisierung** — ENTSO-E- und ENTSO-G-Datenaustauschplattformen; Smart Grid Architecture Model (SGAM) als Referenzarchitektur
- **KI in der Energie** — Netz-Forecasting, Demand Response, Predictive Maintenance nutzen zunehmend ML auf netzbetrieblichen Daten; Datenresidenz und IP-Schutz sind reale Beschränkungen

---

## Wie Aenix mit Energieversorgern zusammenarbeitet

Standard-**[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit energiespezifischen Schwerpunkten:

- **NIS2- + sektorale Compliance-Lücke** — Artikel 21/23 auf die aktuelle Architektur abgebildet
- **Multi-Site-Architektur** — zentral + regional + Umspannstation-Edge unter einem Operations-Modell
- **OT/IT-Boundary-Design** — Air-Gap- oder Restricted-Egress-Muster für OT-Systeme
- **Smart-Grid-Plattform-Konsolidierung** — Integration von Legacy-SCADA / DCS / GIS / Energiemanagementsystemen
- **KI-Infrastruktur für Netz-Use-Cases** — Forecasting, Demand Response, Predictive Maintenance

Die Phase-2-Implementierung erstreckt sich typischerweise über 12-30 Monate für eine Multi-Site-Energie-Plattform.

---

## Beschaffungsbereitschaft

Wir akzeptieren RFI / RFP über:
- **EU-Mitgliedstaaten** — TED, nationale E-Beschaffungsportale
- **Kasachstan und GUS** — goszakup.gov.kz, mitwork.kz, zakup.sk.kz
- **Energiesektor-spezifische Beschaffungsrahmen** — im Discovery-Call besprochen

---

## Wie Sie starten

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

Oder mehr lesen:
- **[Smart-Grid-Plattform-Architektur für IT/OT-Konvergenz](/de/blog/2026/05/smart-grid-plattform-architektur-it-ot/)** — Langform
- **[NIS2-Compliance](/de/loesungen/nis2-compliance/)** — Regulierung für wesentliche Entitäten
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — Critical-Infrastructure-Daten
- **[Souveräne KI](/de/loesungen/sovereign-ai/)** — KI auf netzbetrieblichen Daten
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — Methodik
- **[Cozystack](/de/produkte/cozystack/)** — Open-Source-Plattform-Fundament

---

*Aenix ist das Team hinter Cozystack (CNCF-Projekt) und bietet die Ænix Platform — unser kommerzielles, produktisiertes Angebot auf Basis von Cozystack, Kubernetes Certified Distribution, OpenSSF Best Practices. Wir bauen Cloud-native Infrastruktur für Energieversorger, Telekommunikation, Banken und Critical-Infrastructure-Organisationen in der EU, DACH und Zentralasien.*
