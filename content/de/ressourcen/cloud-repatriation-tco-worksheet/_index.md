---
title: "Cloud-Repatriation-TCO-Worksheet — modellieren Sie Ihren Ausstiegs-Case (kostenlose Tabelle)"
description: "Excel / Google Sheets Template, das Ihnen erlaubt, Ihren tatsächlichen Public-Cloud-Spend einzugeben und einen ehrlichen TCO-Vergleich gegen Private Cloud..."
type: "page"
related_pages: ["/de/loesungen/cloud-repatriation", "/de/loesungen/cloud-kostenoptimierung", "/de/produkte/aenix-platform/"]
language: "de"
direct_answer: |
  **Das Cloud-Repatriation-TCO-Worksheet ist ein kostenloses Excel- und Google-Sheets-Template, mit dem IT-Entscheider, FinOps-Teams und Plattform-Verantwortliche ihren tatsächlichen Public-Cloud-Spend eingeben und einen ehrlichen Total-Cost-of-Ownership-Vergleich gegen eine Private Cloud erstellen. Es modelliert versteckte Kosten wie Egress, ungenutzte und überdimensionierte Ressourcen, Commitment-Underutilisation und Hyperscaler-Managed-Service-Premiums sowie realistische Destination-Kosten über fünf Jahre. Aenix, das Open-Core-Unternehmen hinter dem CNCF-Projekt Cozystack, bietet das Worksheet an, damit Organisationen ihren Repatriation-Case faktenbasiert bewerten und bei Bedarf die Ænix Platform als Ziel-Plattform (KubeVirt, Cilium, LINSTOR auf einer Kubernetes-API) evaluieren können.**
quick_facts:
  - label: "Was es ist"
    value: "Kostenloses Excel-/Google-Sheets-Template zur TCO-Modellierung eines Public-Cloud-Ausstiegs (Cloud Repatriation)"
  - label: "Zielgruppe"
    value: "IT-Entscheider, FinOps-Teams, Plattform-Engineering und regulierte Unternehmen, die Public-Cloud-Kosten gegen Private Cloud vergleichen"
  - label: "Inhalt"
    value: "Fünf Sheets: Public-Cloud-Ist-Zustand, Destination-Architektur, Workload-Klassifizierung, 5-Jahres-Cost-Trajektorie und Decision-Framework"
  - label: "Versteckte Kosten"
    value: "Modelliert Egress, Idle/Over-sized Ressourcen, RI/Savings-Plans-Underutilisation und Hyperscaler-Managed-Service-Premiums"
  - label: "Ziel-Plattform"
    value: "Jede Ænix Platform Edition; Repatriation-Destination je nach Buyer-Profil (ISP, Enterprise oder Public Cloud Edition)"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
faq:
  - q: "Was ist Cloud Repatriation?"
    a: "Cloud Repatriation bezeichnet die Rückverlagerung von Workloads aus der Public Cloud (Hyperscaler) zurück in eine Private Cloud, eigene Rechenzentren oder Colocation. Treiber sind meist Kosten, Datensouveränität und Kontrolle. Das TCO-Worksheet hilft, diese Entscheidung anhand realer Zahlen statt Bauchgefühl zu treffen."
  - q: "Welche versteckten Kosten deckt das Worksheet auf?"
    a: "Das Worksheet modelliert Kostenposten, die in einfachen Vergleichen oft fehlen: Egress-Gebühren, ungenutzte und überdimensionierte Ressourcen, ungenutzte Reserved Instances und Savings Plans sowie die Aufschläge für Hyperscaler-Managed-Services. So entsteht ein ehrlicher TCO-Vergleich gegen die Private-Cloud-Destination."
  - q: "Brauche ich Cozystack oder die Ænix Platform, um das Worksheet zu nutzen?"
    a: "Nein. Das Template ist anbieterneutral und funktioniert für jede Repatriation-Destination. Wenn Sie eine Ziel-Plattform suchen, modelliert es die Kosten einer Ænix-Platform-Umgebung (Cozystack-basiert: KubeVirt, Cilium, LINSTOR) realistisch mit, aber das Worksheet selbst setzt kein bestimmtes Produkt voraus."
  - q: "Welche Ænix Platform Edition passt zu meinem Repatriation-Case?"
    a: "Die Destination hängt vom Buyer-Profil ab: Hosting-Anbieter und regionale Clouds passen zur ISP Edition, regulierte Unternehmen zur Enterprise Edition und große Betreiber zur Public Cloud Edition. Alle Editions basieren auf demselben Open-Source-Kern Cozystack."
  - q: "Was kostet die Ænix Platform als Repatriation-Ziel?"
    a: "Die Ænix Platform wird in Stufen angeboten: Basic 1.250 $/Monat (10 Nodes), Standard 3.000 $, Plus 5.500 $ und Enterprise als individuelles Angebot. Der Open-Source-Kern Cozystack steht unter Apache 2.0 ohne CPU- oder Core-basierte Lizenzierung."
  - q: "Über welchen Zeitraum vergleicht das Worksheet die Kosten?"
    a: "Das Worksheet enthält eine 5-Jahres-Cost-Trajektorie. Auf der Destination-Seite werden Hardware-Akquisition plus Refresh, Colocation, Netzwerk-Bandbreite, Storage-Tiering, Backup/DR sowie Plattform-Engineering-Kapazität berücksichtigt, um den vollen Lebenszyklus abzubilden."
---

**Excel / Google Sheets Template, das Ihnen erlaubt, Ihren tatsächlichen Public-Cloud-Spend einzugeben und einen ehrlichen TCO-Vergleich gegen Private Cloud zu erhalten. Modelliert versteckte Kosten (Egress, ungenutzte Ressourcen, Commitment-Underutilisation, Hyperscaler-Managed-Service-Premiums) plus realistische Destination-Kosten.**

> **Passt zu:** jeder **[Ænix Platform Edition](/de/produkte/aenix-platform/)** — Repatriation-Destination hängt vom Buyer-Profil ab. Hosting-Anbieter / regionale Clouds → ISP Edition. Regulierte Unternehmen → Enterprise Edition. Große Betreiber → Public Cloud Edition.

<div class="lead-magnet-form">
{{< pipedrive-form type="lead-magnet" >}}
[TCO-Worksheet herunterladen (Excel + Google Sheets)]
</div>

---

## Was in der Tabelle enthalten ist

### Sheet 1: Public-Cloud aktueller Zustand
- Monthly-Bill-Aufschlüsselung nach Account / Service / Team
- RI / Savings Plans Utilisation
- Egress-Kosten (oft übersehen)
- Idle / Over-sized Ressourcen
- Hyperscaler-Managed-Service-Premium-Analyse

### Sheet 2: Destination-Architektur
- Hardware-Akquisition + 5-Jahres-Refresh
- Datacenter / Colocation
- Network-Bandwidth + Egress
- Storage-Tiering und Wachstum
- Backup und DR-Infrastruktur
- Plattform-Engineering-Kapazität

### Sheet 3: Workload-Klassifizierung
### Sheet 4: Cost-Trajektorie (5-Jahre)
### Sheet 5: Decision-Framework

---

*Aenix ist das Open-Core-Unternehmen hinter [Cozystack](https://cozystack.io) (CNCF-Projekt). Hersteller von Ænix Platform — turnkey kommerzielle Cloud-in-a-Box in fünf Editions.*
