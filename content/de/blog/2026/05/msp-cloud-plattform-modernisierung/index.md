---
title: "MSP-Cloud-Plattform-Modernisierung — gebrandetes Cloud-Angebot"
seo_title: "MSP-Cloud-Plattform: Cloud-Angebot unter eigener Marke"
description: "Wie MSPs ein Cloud-Angebot unter eigener Marke aufbauen: mehrstufige Mandanten, eigenes Portal, Abrechnung, Reseller-Marge und der Ablauf des Projekts."
date: "2026-05-01"
cover_image: "/img/blog/covers/de/msp-cloud-plattform-modernisierung.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Cozystack", "Multi-tenancy", "Hosting"]
language: "de"
companion_landing: "/de/branchen/msp/"
quiz:
  title: "Wissens-Check: MSP-Cloud-Modernisierung"
  questions:
    - q: "Welches Muster für Mandantenfähigkeit empfiehlt der Artikel MSPs?"
      options:
        - { text: "Ein gemeinsamer Namespace für alle Endkunden", correct: false }
        - { text: "Mehrstufig verschachtelte Tenant CRDs: Ænix, MSP, Endkunde", correct: true }
        - { text: "Ein eigener Kubernetes-Cluster je Endkunde", correct: false }
      explanation: "Mehrstufiges Tenant CRD: Ænix, dann der MSP, dann dessen Kunden. Isolation je Stufe in RBAC, Quotas, Observability-Umfang und Abrechnung. Genau diese Verschachtelung macht das Reseller-Modell sauber, weil keine Ebene ohne ausdrückliche Berechtigung in eine andere hineinsieht."
    - q: "Wo liegt der Break-even für mittelgroße MSPs mit 50 bis 500 Kunden?"
      options:
        - { text: "Bei etwa fünf zahlenden Kunden", correct: false }
        - { text: "Bei 30 bis 50 zahlenden Kunden", correct: true }
        - { text: "Erst ab mehr als 500 zahlenden Kunden", correct: false }
      explanation: "Mittelgroßer MSP mit 50 bis 500 Kunden: Break-even bei 30 bis 50 zahlenden Kunden, danach skaliert die Wirtschaftlichkeit. Der Preis je Kunde liegt typischerweise 30–50 Prozent über den reinen Plattformkosten; die Marge deckt Support, Vertrieb und Betrieb."
    - q: "Wie lange dauert das Vorhaben von Anfang bis Ende?"
      options:
        - { text: "Etwa eine Woche", correct: false }
        - { text: "6–12 Monate", correct: true }
        - { text: "Mehr als fünf Jahre", correct: false }
      explanation: "Ablauf: Assessment, Plattform-Start über den Installer und Pilot, erste Kundenkohorte mit 5 bis 10 Kunden und vollständiger White-Label-Erfahrung, Aufbau der Betriebsabläufe für Supporteskalation und SLA-Steuerung, dann Skalierung. Gesamtdauer: 6–12 Monate."
    - q: "Was kann der MSP am kundenorientierten Portal anpassen?"
      options:
        - { text: "Nur das Logo im Kopfbereich", correct: false }
        - { text: "Farben, Logo, Domain und den Servicekatalog", correct: true }
        - { text: "Gar nichts, das Portal bleibt unverändert", correct: false }
      explanation: "Das Cozystack Dashboard lässt sich mit eigener Marke ausliefern: Farben, Logo, Domain und die Auswahl im Servicekatalog. Der MSP kann den Katalog außerdem kuratieren und etwa nur PostgreSQL anbieten und Kafka ausblenden, wenn er es betrieblich nicht tragen kann."
    - q: "Was leistet die WHMCS-Integration?"
      options:
        - { text: "Sie orchestriert die Rechenlast der Mandanten", correct: false }
        - { text: "Die Abrechnung läuft über das bestehende System des MSP", correct: true }
        - { text: "Sie repliziert die Daten zwischen zwei Standorten", correct: false }
      explanation: "Die WHMCS-Integration führt die Abrechnung über das Kundenverwaltungssystem, das der MSP ohnehin betreibt. Er muss keine neue Abrechnungsplattform danebenstellen — das Cloud-Produkt fügt sich in das vorhandene System ein."
hreflang_en: /blog/2026/05/msp-cloud-platform-modernization/
---

Dieser Beitrag vertieft das Thema unserer Seite **[MSPs](/de/branchen/msp/)**.

## Architektur-Muster

- Multi-Tier Tenant CRD (Root-Tenant → MSP → MSP-Kunden)
- Pro-Tier-Isolation
- Gebrandetes kundenorientiertes Portal
- Abrechnung über die WHMCS-Integration (proprietäres Ænix-Modul)
- Service-Katalog (MSP kuratiert)

## Reseller-Wirtschaftlichkeit

Mittelgroßer MSP (50-500 Kunden):
- Plattform-Kosten + Hardware + Operations
- Pro-Kunde-Inkrementelle Kosten
- MSP-Kunden-Pricing typisch 30-50% über Plattform-Rohkosten
- Break-even: 30-50 zahlende Kunden

## Engagement-Sequenz

1. Platform Readiness Assessment (14 oder 28 Tage)
2. Plattform live über den produktisierten Installer (wenige Wochen nach Bereitstellung der Hardware), danach Pilot
3. Initiale Kunden-Kohorte (5-10 Kunden)
4. Operations-Workflow
5. Skalierung

Gesamtzeit: 6-12 Monate.

---

*Ænix hat Cozystack entwickelt und gehört zu den Maintainern des CNCF-Projekts.*

