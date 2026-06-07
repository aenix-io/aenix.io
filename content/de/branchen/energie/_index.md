---
title: "Cloud-Plattform für Energieversorger — NIS2-konform, edge-bereit, souverän nach Architektur"
description: "Energieversorger in der DACH-Region stehen 2026 vor einer spezifischen Kombination von Drücken: NIS2-Klassifikation als wesentliche Entität (Energie ist im..."
related_pages: ["/de/loesungen/nis2-compliance", "/de/loesungen/data-sovereignty", "/de/loesungen/sovereign-ai"]
language: "de"
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

**Energieversorger in der DACH-Region stehen 2026 vor einer spezifischen Kombination von Drücken: NIS2-Klassifikation als wesentliche Entität (Energie ist im Geltungsbereich), souveräne Cloud-Anforderungen für Critical-Infrastructure-Daten, Edge-Compute an Umspannstationen und Erzeugungsstandorten, KI-getriebene Netzoptimierung und Forecasting, sowie die operative Realität, dass Hardware-Refresh-Zyklen für Netzinfrastruktur in Jahrzehnten gemessen werden.**

Aenix pilotiert derzeit Cozystack mit einem Energieversorger und wendet das gleiche Multi-Site-, NIS2-konforme, souveränitätsfreundliche Plattform-Muster an, das bei unseren Finanz- und Telekommunikationskunden läuft.

> **Passt zu:** **[Ænix Platform Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/)** für NIS2-konforme Multi-Site-Architektur mit Air-Gap-Option für OT; **[AI/ML Edition](/de/produkte/aenix-platform/ai-ml-edition/)** für Netzoptimierungs-KI-Workloads.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/smart-grid-plattform-architektur-it-ot/">Smart-Grid-Architektur →</a>
</div>

---

## Was Energie-Teams zu uns bringen

- NIS2-Compliance für Cloud + OT-Infrastruktur
- Souveräne Cloud für Netz- und Kundendaten
- Smart-Grid-Plattform-Konsolidierung
- KI für Netzoptimierung, Forecasting, Predictive Maintenance
- VMware-Ausstieg / OpenStack-Modernisierung
- Edge-Compute an Umspannstationen / Erzeugungsstandorten

---

## Warum Energie-Architektur anders ist

- **Edge-Compute ist Kern, nicht optional** — Umspannstationen, verteilte Erzeugung, Microgrids
- **OT/IT-Konvergenz strukturell** — Operations Technology trifft IT
- **Lange Abschreibungszyklen** — Netz-Hardware hält Jahrzehnte
- **Critical-Infrastructure-Sicherheitsmodell** — kinetische + Cyber-Bedrohungen; Air-gap für OT
- **Regulator-Triple-Stack** — NIS2 + sektorale Energieregulatorik + cybersecurity-spezifisch

---

## Cozystack-Muster für Energieversorger

- Multi-Site (Zentrale + Regional + Substation Edge)
- Air-Gap-Support für OT
- Multi-Tenant für Cross-BU
- KI-Infrastruktur für Forecasting und Predictive Maintenance
- Souverän nach Architektur
- Lange Operationshorizont (Apache 2.0)

---

## Was läuft auf Cozystack in der Energie

{{< placeholder-logos >}}

*Kunden-Evidenz — Pilot in Arbeit; benannte Referenz nach Kunden-Genehmigung.*

> {{< placeholder-quote >}}

---

/contact/

- **[Smart-Grid-Plattform-Architektur](/de/blog/2026/05/smart-grid-plattform-architektur-it-ot/)**
- **[NIS2-Compliance](/de/loesungen/nis2-compliance/)**
- **[Datensouveränität](/de/loesungen/data-sovereignty/)**
- **[Souveräne KI](/de/loesungen/sovereign-ai/)**

---

*Aenix ist das Team hinter Cozystack — CNCF Project-Projekt.*

<!-- Keyword: energie cloud DE 50/KD 0/TP 600. Word count: ~600. -->
