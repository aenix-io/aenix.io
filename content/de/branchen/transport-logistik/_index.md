---
title: "Cloud-Plattform für Transport und Logistik — NIS2-konform, edge-bereit, KI-fähig"
description: "Transport- und Logistikbetreiber stehen 2026 vor: NIS2-Klassifikation als wesentliche Entität (Transport-Sektor ist im Geltungsbereich unter Annex I),..."
related_pages: ["/de/loesungen/nis2-compliance", "/de/loesungen/data-sovereignty"]
language: "de"
direct_answer: |
  **Eine Cloud-Plattform für Transport und Logistik ist eine Infrastruktur, die Fracht-, Fleet- und Terminalbetreiber für NIS2-konforme, edge-fähige und KI-getriebene Workloads nutzen. Der Transport-Sektor fällt unter NIS2 Annex I als wesentliche Entität. Aenix liefert dies über die Ænix Platform Enterprise Edition auf Basis von Cozystack (CNCF-Projekt, Apache 2.0): KubeVirt führt VMs und Container über eine einzige Kubernetes-API, Cilium (eBPF) übernimmt das Networking, LINSTOR/DRBD den Storage. Eine Multi-DC- und Edge-Architektur betreibt Workloads an Depots, Häfen und Terminals, mit Mandantenfähigkeit über das Tenant-CRD für Cross-Business-Unit-Trennung und einer Souveräne-Cloud-Option für grenzüberschreitende Logistikdaten.**
quick_facts:
  - label: "Was es ist"
    value: "NIS2-konforme, edge-fähige und KI-fähige Cloud-Plattform für Transport- und Logistikbetreiber auf Basis von Cozystack"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Luft-, Schiene-, Wasser-, Straßenfracht-Operatoren, Logistikdienstleister (LSPs), Last-Mile-Delivery, Hafen- und Terminalbetreiber, Fleet-Management"
  - label: "Regulatorik"
    value: "Transport-Sektor ist unter NIS2 Annex I als wesentliche Entität im Geltungsbereich; Compliance für Cloud und OT erforderlich"
  - label: "Schlüsselfunktion"
    value: "Multi-DC- und Edge-Compute-Architektur an Depots, Häfen und Terminals; KI für Routing, Nachfrage-Forecasting und Predictive Maintenance"
  - label: "Produkt"
    value: "Ænix Platform Enterprise Edition (produktisiertes Cozystack) plus Services von Aenix, dem Team hinter Cozystack"
faq:
  - q: "Fällt der Transport-Sektor unter NIS2?"
    a: "Ja. Der Transport-Sektor (Luft, Schiene, Wasser, Straße) ist unter NIS2 Annex I als wesentliche Entität im Geltungsbereich. Betreiber müssen NIS2-Compliance sowohl für Cloud-Infrastruktur als auch für OT-Systeme nachweisen. Die Ænix Platform Enterprise Edition unterstützt diese Anforderungen über eine souveräne, selbstbetriebene Architektur."
  - q: "Wie unterstützt die Plattform Edge-Compute an Depots, Häfen und Terminals?"
    a: "Die Ænix Platform Enterprise Edition nutzt eine Multi-DC- und Edge-Architektur auf Basis von Cozystack. Workloads laufen verteilt an Depots, Häfen und Terminals über eine einzige Kubernetes-API, wobei KubeVirt VMs und Container gemeinsam orchestriert und Cilium (eBPF) das Networking über die Standorte hinweg übernimmt."
  - q: "Welche KI-Anwendungsfälle deckt die Plattform für Logistik ab?"
    a: "Die Plattform ist für KI-getriebene Workloads ausgelegt: Routenoptimierung, Nachfrage-Forecasting und Predictive Maintenance für Fahrzeugflotten. Da sie auf Kubernetes basiert, lassen sich GPU-Workloads und ML-Pipelines neben bestehenden VMs und Containern auf derselben Infrastruktur betreiben."
  - q: "Wie wird Datensouveränität für grenzüberschreitende Logistikdaten gewährleistet?"
    a: "Cozystack wird selbst betrieben und ist Apache-2.0-lizenziert, ohne Bindung an einen Hyperscaler. Die Ænix Platform Enterprise Edition bietet eine Souveräne-Cloud-Option, sodass grenzüberschreitende Logistikdaten in kontrollierten Regionen und unter eigener Hoheit verbleiben."
  - q: "Wie trennt die Plattform mehrere Business Units?"
    a: "Cozystack stellt Mandantenfähigkeit über das Tenant-CRD bereit. Damit lassen sich verschiedene Business Units, Tochtergesellschaften oder Frachtsparten isoliert auf gemeinsamer Infrastruktur betreiben, jeweils mit eigenen Ressourcengrenzen und Zugriffsregeln."
  - q: "Was kostet die Ænix Platform?"
    a: "Die Preisstufen sind: Basic 1.250 $/Monat (bis 10 Nodes), Standard 3.000 $/Monat, Plus 5.500 $/Monat und Enterprise mit individueller Preisgestaltung. Für Transport- und Logistik-Szenarien mit Multi-DC- und Edge-Architektur ist in der Regel die Enterprise Edition relevant."
---

**Transport- und Logistikbetreiber stehen 2026 vor: NIS2-Klassifikation als wesentliche Entität (Transport-Sektor ist im Geltungsbereich unter Annex I), KI-getriebener Optimierung (Routen, Nachfrage, Predictive Maintenance), Edge-Compute-Anforderungen (Fahrzeuge, Depots, Häfen, Terminals) und zunehmendem Datensouveränitäts-Druck für grenzüberschreitende Logistikdaten.**

> **Passt zu:** **[Ænix Platform Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/)** — Multi-DC + Edge-Architektur, NIS2-Compliance, Souveräne-Cloud-Option für grenzüberschreitende Logistikdaten.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/transport-logistik-cloud-architektur-nis2/">Transport-Architektur →</a>
</div>

---

## Wer im Transport / Logistik

- Luft-, Schiene-, Wasser-, Straßenfracht-Operatoren
- Logistikdienstleister (LSPs)
- Last-Mile-Delivery
- Hafen- und Terminalbetreiber
- Fleet-Management

---

## Was Transport-Teams zu uns bringen

- NIS2-Compliance für Cloud + OT
- KI für Routing, Nachfrage-Forecasting, Predictive Maintenance
- Edge-Compute an Depots, Häfen, Terminals
- Multi-Tenant für Cross-BU
- Souveränität für grenzüberschreitende Daten

---

/contact/

- **[Transport-Architektur-Artikel](/de/blog/2026/05/transport-logistik-cloud-architektur-nis2/)**
- **[NIS2-Compliance](/de/loesungen/nis2-compliance/)**

---

*Aenix ist das Team hinter Cozystack.*

<!-- Word count: ~300. -->
