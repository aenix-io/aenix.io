---
title: "White-Label-Cloud-Playbook — für MSPs und Reseller 2026"
seo_title: "White-Label-Cloud: Playbook für MSPs und Reseller"
description: "Architektur und Reseller-Ökonomie für den Start einer White-Label-Cloud unter eigener Marke — und wie das Engagement mit Ænix dafür aufgebaut ist."
slug: "white-label-cloud-playbook-msp-reseller"
date: "2026-05-31"
cover_image: "/img/blog/covers/de/white-label-cloud-playbook-msp-reseller.jpg"
author: "Aenix Team"
type: "article"
topics: ["Cozystack", "Multi-tenancy", "Hosting", "Observability"]
language: "de"
hreflang_en: "/blog/2026/05/white-label-cloud-msp-reseller-playbook/"
companion_landing: "/de/dienstleistungen/white-label-cloud/"
quiz:
  title: "Wissens-Check: White-Label-Cloud für MSPs"
  questions:
    - q: "Welchen besonderen Vorteil haben MSPs gegenüber Hyperscalern bei der Chance White-Label-Cloud?"
      options:
        - { text: "Engere Kundenbeziehungen, die sich skalieren lassen", correct: true }
        - { text: "Bessere Hardware in jedem Rechenzentrum", correct: false }
        - { text: "Günstigere reine Rechenleistung pro vCPU", correct: false }
      explanation: "MSPs haben Kundenbeziehungen, die Hyperscaler nicht ohne Weiteres nachbilden können. Ihnen fehlt aber das Cloud-Produkt, um diese Beziehungen im großen Maßstab zu monetarisieren. Die White-Label-Cloud schließt diese Lücke — als Produkt des MSP gebrandet, wobei der MSP die Marge zwischen Plattformkosten und Kundenpreis vereinnahmt."
    - q: "Welches Muster der Mandantenfähigkeit beschreibt der Artikel für die White-Label-Cloud?"
      options:
        - { text: "Ein gemeinsamer Namespace für alle Tenants", correct: false }
        - { text: "Mehrstufiges, verschachteltes Tenant-CRD-Modell", correct: true }
        - { text: "Ein dedizierter Cluster pro Endkunde", correct: false }
      explanation: "Mehrstufiges Tenant CRD: Root-Tenant → MSP-Tenant → Tenant des MSP-Kunden. Isolation je Ebene bei RBAC, Quotas, Observability-Umfang und Abrechnung. Erst die Verschachtelung lässt das Reseller-Modell sauber funktionieren."
    - q: "Welcher Aufschlag auf die reinen Plattformkosten ist beim Kundenpreis typisch?"
      options:
        - { text: "5–10 % über den Plattformkosten", correct: false }
        - { text: "500 % über den Plattformkosten", correct: false }
        - { text: "30–50 % über den Plattformkosten", correct: true }
      explanation: "Typische Ökonomie: Kundenpreise 30–50 % über den reinen Plattformkosten. Die Marge deckt Support, Vertrieb und Betrieb des MSP. Realistisch ist der Break-even bei 30–50 zahlenden Kunden oder bei 50–100, wenn neben der Plattform eine eigene Rufbereitschaft finanziert wird."
    - q: "Was leistet die WHMCS-Integration?"
      options:
        - { text: "Abrechnung über das bestehende System des MSP", correct: true }
        - { text: "Compute-Orchestrierung für Tenant-VMs", correct: false }
        - { text: "Schicht für standortübergreifende Storage-Replikation", correct: false }
      explanation: "WHMCS-Integration: Die Abrechnung läuft über das bestehende Kundenverwaltungssystem des MSP. Der MSP muss keine neue Abrechnungsplattform anflanschen — das Cloud-Produkt fügt sich in das System ein, das er bereits betreibt."
    - q: "Was können MSPs am Cozystack Dashboard anpassen?"
      options:
        - { text: "Anpassungen am Branding werden nicht unterstützt", correct: false }
        - { text: "Marke, Domain und Servicekatalog", correct: true }
        - { text: "Nur das Logo in der Kopfzeile austauschen", correct: false }
      explanation: "Gebrandetes Cozystack Dashboard: Der MSP kann Farben, Logo, Domain und die Optionen des Servicekatalogs anpassen. Außerdem kann er festlegen, welche Services er seinen Kunden anbietet (z. B. Kafka ausblenden, wenn er es nicht unterstützt)."
---


## Warum die White-Label-Cloud für MSPs wichtig ist

MSPs haben Kundenbeziehungen, die Hyperscaler nicht ohne Weiteres nachbilden können. Ihnen fehlt jedoch das Cloud-Produkt, um diese Beziehungen im großen Maßstab zu monetarisieren. Die White-Label-Cloud — als Produkt des MSP gebrandet, betrieben auf geteilter oder dedizierter Infrastruktur — schließt diese Lücke.

Das Muster 2026: Der MSP erhält ein gebrandetes, mandantenfähiges Cloud-Produkt auf einer Open-Source-Plattform; die Kunden nutzen die Cloud unter der Marke des MSP; der MSP vereinnahmt die Marge zwischen Plattformkosten und Kundenpreis.

## Architektur

- **Mehrstufiges Tenant CRD** — Root-Tenant → MSP-Tenant → Tenant des MSP-Kunden. Isolation auf jeder Ebene.
- **Gebrandetes Cozystack Dashboard** — der MSP kann Farben, Logo, Domain und die Optionen des Servicekatalogs anpassen
- **WHMCS-Integration** (proprietäres Ænix-Modul) — die Abrechnung läuft über das bestehende Kundenverwaltungssystem des MSP
- **Servicekatalog** — der MSP kann festlegen, welche Services er seinen Kunden anbietet (z. B. Kafka ausblenden, wenn er es nicht unterstützt)
- **SLA-Management** — Nachverfolgung des SLA pro Kunde über die Observability von Cozystack

## Reseller-Ökonomie

Typische Ökonomie für einen MSP, der eine White-Label-Cloud betreibt:
- **Plattformkosten** — Ænix-Subskription (White-Labeling ab der Standard-Stufe, 3.000 $ pro 10 Nodes und Monat; siehe [Preise](/de/preise/)) + Hardware + Colocation
- **Kosten pro Kunde** — zusätzliche Hardware, Storage und Bandbreite
- **Kundenpreis** — typischerweise 30–50 % über den reinen Plattformkosten
- **Marge** — deckt Support, Vertrieb und Betrieb des MSP

Der Break-even liegt bei 30–50 zahlenden Kunden, wenn Sie Plattform und Werkzeuge abdecken; bei 50–100, wenn zusätzlich eine eigene Rufbereitschaft finanziert wird. Danach ist die Ökonomie positiv, abhängig vom Kundenmix.

## Aufbau des Engagements

- **Platform Readiness Assessment** (14 oder 28 Tage, Festpreis) inklusive Produktreife
- **Plattform live in wenigen Wochen** über den produktisierten Installer, sobald die Hardware bereitsteht; Produkt- und Vertriebsarbeit läuft parallel in den folgenden Monaten
- **Optionale Managed Services**
