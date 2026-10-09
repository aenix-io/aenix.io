---
title: "Ehrliche TCO-Modelle für Cloud Repatriation — welche Zahlen Sie wirklich vergleichen sollten"
seo_title: "Cloud Repatriation: ehrliche TCO-Modelle"
description: "Warum die meisten TCO-Modelle zur Cloud Repatriation falsch sind: übersehene Zielkosten, Sensitivitätsanalyse und Entscheidungen auf Ebene der Workloads."
slug: "cloud-repatriation-tco-modell-ehrliche-zahlen"
date: "2026-05-05"
cover_image: "/img/blog/covers/de/cloud-repatriation-tco-modell-ehrliche-zahlen.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Cloud Repatriation", "Financial Services", "Platform Engineering", "Backup and DR", "Observability"]
language: "de"
hreflang_en: "/blog/2026/05/cloud-repatriation-tco-modeling-honest-numbers/"
companion_landing: "/de/loesungen/cloud-repatriation/"
quiz:
  title: "Wissens-Check: ehrliche TCO für Cloud Repatriation"
  questions:
    - q: "Welchen Anteil der Public-Cloud-Ausgaben verschlingt Egress laut Artikel typischerweise?"
      options:
        - { text: "Fünf bis fünfzehn Prozent der Gesamtausgaben", correct: true }
        - { text: "Weniger als ein Prozent der Gesamtausgaben", correct: false }
        - { text: "Vierzig bis fünfzig Prozent der Gesamtausgaben", correct: false }
      explanation: "Egress macht oft 5–15 % der Gesamtausgaben aus und wird leicht übersehen. Zusammen mit schlecht genutzten Reservierungen (eine Ausschöpfung von 30–50 % ist üblich), ungenutzten oder überdimensionierten Ressourcen (10–20 % der Compute-Kosten), dem Aufschlag für Managed Services der Hyperscaler (2–4× gegenüber Eigenbetrieb) und den Wechselkosten durch Lock-in unterschätzt die Rechnungssumme allein die echte TCO."
    - q: "Welche Ausschöpfung von Reservierungen ist laut Artikel üblich?"
      options:
        - { text: "Über neunzig Prozent", correct: false }
        - { text: "Dreißig bis fünfzig Prozent", correct: true }
        - { text: "Praktisch hundert Prozent", correct: false }
      explanation: "Eine Ausschöpfung von 30–50 % ist üblich — der Rabatt verpufft also. Eine Reservierung spart nur dann Geld, wenn Sie das Zugesagte tatsächlich nutzen. Eine typische Ursache ist, dass das Portfolio der Zusagen nicht zum tatsächlichen Workload-Mix passt."
    - q: "Welchen Anteil an der Kostenbilanz einer Repatriierung machen die Top-10-Workloads typischerweise aus?"
      options:
        - { text: "Zehn bis zwanzig Prozent", correct: false }
        - { text: "Über fünfundneunzig Prozent", correct: false }
        - { text: "Sechzig bis achtzig Prozent", correct: true }
      explanation: "Die TCO auf Ebene der Workloads zeigt meist: Die Top-10-Workloads stehen für 60–80 % der Kostenbilanz; der Rest ist allenfalls leicht kostenpositiv oder neutral. Oft ist es am besten, die Top 10 zurückzuholen und den Rest in der Cloud zu lassen."
    - q: "Was sagt der Artikel über die Zielkosten — was übersehen oberflächliche Modelle?"
      options:
        - { text: "Nur die Anschaffungskosten der Hardware zählen", correct: false }
        - { text: "Erneuerungszyklen, Netzwerk, Backup, Tooling, Personal", correct: true }
        - { text: "Nichts — das Ziel ist immer günstiger", correct: false }
      explanation: "Wer Posten auf der Zielseite weglässt, lässt die TCO künstlich gut aussehen; im zweiten Jahr holt einen die Realität ein. Die vollständigen Zielkosten umfassen Hardware-Anschaffung + Erneuerung nach 5 Jahren, Rechenzentrum/Colocation, Netzwerkbandbreite, Storage-Tiering, Backup/DR, Identity/Observability/Tooling, Kapazität im Platform Engineering und Softwarelizenzen."
    - q: "Welcher Sensitivitätsfaktor hat einen „unverhältnismäßig großen Einfluss“ auf die Wirtschaftlichkeit der Private Cloud?"
      options:
        - { text: "Dauerauslastung von 50 Prozent gegenüber 80 Prozent", correct: true }
        - { text: "Der Anteil der Rechnung, der auf GPU-Compute entfällt", correct: false }
        - { text: "Wechselkursschwankungen", correct: false }
      explanation: "Eine ehrliche TCO reagiert empfindlich auf Annahmen zur Auslastung: Eine Dauerauslastung von 50 % statt 80 % verändert die Wirtschaftlichkeit der Private Cloud dramatisch. Das Wachstum der Workloads (20 %/Jahr gegenüber 50 %/Jahr) verändert die Erneuerungszyklen der Hardware. Änderungen beim Egress-Volumen haben einen unverhältnismäßig großen Einfluss."
---


## Warum die meisten Cloud-TCO-Modelle falsch sind

Die Rechnung ist eine einzige Zahl. Die echte TCO der Public Cloud umfasst:

- **Egress-Gebühren** — oft 5–15 % der Gesamtausgaben, leicht zu übersehen
- **Schlecht genutzte Reservierungen** — eine Ausschöpfung von 30–50 % ist üblich; der Rabatt verpufft
- **Ungenutzte und überdimensionierte Ressourcen** — 10–20 % der Compute-Ausgaben
- **Aufschlag für Managed Services der Hyperscaler** — 2–4× gegenüber Eigenbetrieb im großen Maßstab
- **Wechselkosten durch Vendor-Lock-in** — unsichtbar, bis etwas bricht
- **Kapazität im Platform Engineering, die durch die Komplexität der jeweiligen Public Cloud gebunden ist**

Ein echtes TCO-Modell erfasst all das.

## Zielkosten — was übersehen wird

Für die Private Cloud als Ziel:

- **Hardware-Anschaffung + Erneuerung nach 5 Jahren** (die Erneuerungswelle kommt)
- **Rechenzentrum oder Colocation**
- **Netzwerkbandbreite, einschließlich Egress zwischen Standorten**
- **Storage-Tiering und Wachstum**
- **Infrastruktur für Backup und DR**
- **Identity, Observability, Plattform-Tooling**
- **Kapazität im Platform Engineering für den Betrieb**
- **Softwarelizenzen, sofern anfallend**

Lassen Sie diese Posten weg, sieht die TCO künstlich gut aus; im zweiten Jahr holt Sie die Realität ein.

## Sensitivitätsanalyse

Ein ehrliches TCO-Modell reagiert empfindlich auf Annahmen zur Auslastung:
- Eine Dauerauslastung von 50 % statt 80 % verändert die Wirtschaftlichkeit der Private Cloud dramatisch
- Ein Wachstum der Workloads von 20 %/Jahr statt 50 %/Jahr verändert die Erneuerungszyklen der Hardware
- Änderungen beim Egress-Volumen haben einen unverhältnismäßig großen Einfluss

## Entscheidungen auf Ebene der Workloads

Auf Portfolio-Ebene kann die TCO neutral ausfallen. Auf Ebene der Workloads zeigt sich meist:
- Top-10-Workloads: 60–80 % der Kostenbilanz
- Der Rest der Workloads: allenfalls leicht kostenpositiv oder neutral

Die Top-10-Workloads zurückzuholen und den Rest in der Cloud zu lassen, ist oft am besten.

## So nutzen Sie das Arbeitsblatt

Laden Sie das **[Cloud-Repatriation-TCO-Worksheet](/de/ressourcen/cloud-repatriation-tco-worksheet/)** herunter. Tragen Sie Ihre Zahlen ein und gehen Sie sie mit Ihrem Partner aus dem Finanzbereich und dem Platform Engineering durch. Bestimmen Sie die Top-10-Kandidaten für die Repatriierung. Prüfen Sie die Annahmen.

Für die vollständige Zusammenarbeit siehe **[Cloud Repatriation](/de/loesungen/cloud-repatriation/)**.
