---
title: "MSP-Cloud-Plattform-Modernisierung — gebrandetes Cloud-Angebot"
description: "- Multi-Tier Tenant CRD (Aenix → MSP → MSP-Kunden) - Pro-Tier-Isolation - Gebrandetes kundenorientiertes Portal - WHMCS-integriertes Billing -..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Cozystack", "Multi-tenancy", "Hosting"]
language: "de"
companion_landing: "/de/branchen/msp/"
quiz:
  title: "Wissens-Check: MSP-Cloud-Modernisierung"
  questions:
    - q: "Welches Multi-Tenant-Architektur-Muster wird für MSP empfohlen?"
      options:
        - { text: "Single-Namespace für alle", correct: false }
        - { text: "Multi-Tier Tenant CRD: Aenix → MSP → MSP-Kunden, mit Pro-Tier-Isolation", correct: true }
        - { text: "Cluster pro Kunde", correct: false }
      explanation: "Multi-Tier Tenant CRD: Aenix → MSP → MSP-Kunden. Pro-Tier-Isolation in RBAC, Quotas, Observability-Scope, Billing. Die Verschachtelung ist was das Reseller-Modell sauber macht."
    - q: "Was ist der Break-even für mittelgroße MSPs (50-500 Kunden)?"
      options:
        - { text: "5 Kunden", correct: false }
        - { text: "30-50 zahlende Kunden; positive Wirtschaftlichkeit skaliert von dort", correct: true }
        - { text: "500+ Kunden minimum", correct: false }
      explanation: "Mittelgroßer MSP (50-500 Kunden): Break-even bei 30-50 zahlenden Kunden. Pro-Kunde-Pricing typisch 30-50% über Plattform-Rohkosten. Marge deckt MSP-Support, Vertrieb, Operations."
    - q: "Wie lange dauert das End-to-End-Engagement?"
      options:
        - { text: "1 Woche", correct: false }
        - { text: "6-12 Monate", correct: true }
        - { text: "5+ Jahre", correct: false }
      explanation: "Engagement-Sequenz: Discovery → Cozystack-Pilot → initiale Kunden-Kohorte (5-10 mit voller White-Label-Erfahrung) → Operations-Workflow (Support-Eskalation, SLA-Management) → Skalierung. Gesamtzeit: 6-12 Monate."
    - q: "Welche Pro-Kunde-Funktionalität wird gebrandet bereitgestellt?"
      options:
        - { text: "Nur Logo-Änderung", correct: false }
        - { text: "Gebrandetes kundenorientiertes Portal (cozyportal customizable: Farben, Logo, Domain, Service-Katalog-Optionen)", correct: true }
        - { text: "Nichts gebrandet", correct: false }
      explanation: "Gebrandetes cozyportal: MSP kann Farben, Logo, Domain, Service-Katalog-Optionen anpassen. MSP kann auch Service-Katalog kuratieren — z.B. nur PostgreSQL exposen, Kafka verstecken wenn der MSP es nicht supportet."
    - q: "Was ermöglicht WHMCS-Integration?"
      options:
        - { text: "Compute-Orchestration", correct: false }
        - { text: "Billing fließt durch das bestehende Customer-Management-System des MSP", correct: true }
        - { text: "Storage-Replikation", correct: false }
      explanation: "WHMCS-Integration: Billing fließt durch das bestehende Customer-Management-System des MSP. Der MSP muss kein neues Billing-Plattform aufschalten — das Cloud-Produkt fügt sich in das System, das der MSP bereits betreibt."
---

Begleitung zur **[MSP-Page](/de/branchen/msp)**.

## Architektur-Muster

- Multi-Tier Tenant CRD (Aenix → MSP → MSP-Kunden)
- Pro-Tier-Isolation
- Gebrandetes kundenorientiertes Portal
- WHMCS-integriertes Billing
- Service-Katalog (MSP kuratiert)

## Reseller-Wirtschaftlichkeit

Mittelgroßer MSP (50-500 Kunden):
- Plattform-Kosten + Hardware + Operations
- Pro-Kunde-Inkrementelle Kosten
- MSP-Kunden-Pricing typisch 30-50% über Plattform-Rohkosten
- Break-even: 30-50 zahlende Kunden

## Engagement-Sequenz

1. Discovery (4 Wochen)
2. Cozystack-Pilot (2-3 Monate)
3. Initiale Kunden-Kohorte (5-10 Kunden)
4. Operations-Workflow
5. Skalierung

Gesamtzeit: 6-12 Monate.

---

*Aenix ist das Team hinter Cozystack.*

<!-- Word count: ~250. -->
