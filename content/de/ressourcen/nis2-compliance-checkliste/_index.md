---
title: "NIS2-Compliance Cloud-Architektur-Checkliste — kostenlos herunterladen"
description: "Kostenlose 35-Punkt-Checkliste für wesentliche und wichtige Einrichtungen unter NIS2. Deckt Artikel 21, Artikel 23 und angrenzende Anforderungen ab."
type: "page"
related_pages:
  - /de/loesungen/nis2-compliance
  - /de/ressourcen/dora-compliance-checkliste
  - /de/produkte/private-cloud-platform/
hreflang_en: /resources/nis2-compliance-checklist/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Die NIS2-Compliance Cloud-Architektur-Checkliste von Aenix ist eine kostenlose 35-Punkt-Checkliste für wesentliche und wichtige Entitäten, die ihre Cloud-Infrastruktur auf die NIS2-Richtlinie ausrichten müssen. Sie deckt die zehn Risiko-Management-Maßnahmen aus Artikel 21, die Vorfall-Reporting-Timelines aus Artikel 23 (24 Stunden, 72 Stunden, 1 Monat), Lieferketten-Sicherheit, Geschäftskontinuität (RTO/RPO), MFA, Verschlüsselung und Vulnerability-Management ab. Sie richtet sich an CISOs, IT-Leiter und Compliance-Teams in Energie, Banking, Gesundheitswesen, öffentlicher Verwaltung und bei MSPs. Die Ænix Private Cloud Platform auf Basis von Cozystack setzt diese Kontrollen technisch um: Tenant-CRD-Mandantenfähigkeit mit Cilium-NetworkPolicy-Segmentierung, kundenkontrollierte Verschlüsselung und audit-bereites Logging.**

quick_facts:
  - label: "Was es ist"
    value: "Kostenlose 35-Punkt-Cloud-Architektur-Checkliste zur Ausrichtung an der NIS2-Richtlinie (EU 2022/2555)"
  - label: "Zielgruppe"
    value: "CISOs, IT-Leiter und Compliance-Teams wesentlicher und wichtiger Entitäten sowie ICT-Drittanbieter"
  - label: "Abgedeckte Bereiche"
    value: "Artikel 21 Risiko-Management (10 Bereiche), Artikel 23 Vorfall-Reporting, Lieferkette, Geschäftskontinuität, MFA, Verschlüsselung, Vulnerability-Management"
  - label: "Passendes Produkt"
    value: "Ænix Private Cloud Platform — NIS2-konform by design (Tenant CRD, Cilium-Segmentierung, kundenkontrollierte Verschlüsselung, audit-bereites Logging)"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"

faq:
  - q: "Für wen gilt die NIS2-Richtlinie?"
    a: "NIS2 gilt für wesentliche Entitäten (u. a. Energie, Transport, Banking, Gesundheitswesen, öffentliche Verwaltung, digitale Infrastruktur, MSPs) und wichtige Entitäten (u. a. Post, Fertigung kritischer Produkte, digitale Service-Anbieter, R&D). Auch ICT-Drittanbieter, die wesentliche Entitäten bedienen, sind über die Lieferketten-Anforderungen betroffen."
  - q: "Welche Vorfall-Reporting-Timelines verlangt NIS2?"
    a: "Artikel 23 verlangt eine gestufte Meldung: eine Frühwarnung innerhalb von 24 Stunden nach Kenntnis eines erheblichen Vorfalls, eine Vorfallsmeldung innerhalb von 72 Stunden und einen Abschlussbericht innerhalb eines Monats. Die Checkliste prüft, ob Ihre Architektur und Prozesse diese Fristen einhalten können."
  - q: "Was kostet die NIS2-Checkliste?"
    a: "Die Checkliste ist kostenlos. Sie laden das PDF über das Formular auf dieser Seite herunter. Es ist keine Zahlung erforderlich."
  - q: "Wie hilft die Ænix Platform bei der NIS2-Compliance?"
    a: "Die Private Cloud Platform adressiert NIS2-Kontrollen technisch: Tenant-CRD-Mandantenfähigkeit mit Cilium-NetworkPolicy-Segmentierung, kundenkontrollierte Verschlüsselung und audit-bereites Logging. Die Coordinated Vulnerability Disclosure ist an Artikel 12 ausgerichtet. So lassen sich Risiko-Management- und Reporting-Anforderungen auf Architektur-Ebene abbilden."
  - q: "Worauf basiert die Ænix Platform technisch?"
    a: "Die Ænix Platform ist die produktisierte, kommerziell unterstützte Distribution von Cozystack, einem Open-Source-CNCF-Projekt unter Apache-2.0-Lizenz. Cozystack nutzt KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium (eBPF) für Networking und LINSTOR/DRBD für Storage."
  - q: "Was kostet die Ænix Platform?"
    a: "Die kommerziellen Stufen sind Basic ab 1.250 $/Monat (bis 10 Nodes), Standard 3.000 $/Monat, Plus 5.500 $/Monat und Enterprise nach Vereinbarung. Die zugrunde liegende Cozystack-Software bleibt Apache 2.0 ohne CPU- oder Core-basierte Lizenzierung."
---

**Eine 35-Punkt-Checkliste für wesentliche und wichtige Entitäten unter NIS2. Deckt Artikel 21 Risiko-Management-Maßnahmen (10 Bereiche), Artikel 23 Vorfall-Reporting-Timelines, Lieferketten-Transparenz, Geschäftskontinuität, MFA, Verschlüsselung und Architektur-Level-Kontrollen ab.**

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** — NIS2-konform by design (Tenant CRD mit NetworkPolicy / Cilium für Segmentierung, kundenkontrollierte Verschlüsselung, audit-bereites Logging, Coordinated Vulnerability Disclosure nach Artikel 12).

<div class="lead-magnet-form">
{{< pipedrive-form type="lead-magnet" resource="nis2-compliance-checklist" >}}
<p class="lead-magnet-form__note">NIS2-Checkliste herunterladen (PDF)</p>
</div>

---

## Was in der Checkliste enthalten ist

Fünf Sektionen, 35 architektonische Kontrollpunkte:

1. **Risikomanagement** (10 Punkte) — die Risikomanagement-Maßnahmen nach Artikel 21(2)(a)-(j) sowie die Verantwortlichkeit der Leitungsorgane nach Artikel 20
2. **Vorfallbearbeitung und Meldung** (6 Punkte) — Bereitschaft für Artikel 23(4): Frühwarnung in 24 Stunden, Vorfallsmeldung in 72 Stunden, Abschlussbericht in einem Monat
3. **Geschäftskontinuität und Schwachstellenmanagement** (7 Punkte) — dokumentierte und getestete RTO/RPO, Patch-SLA, SAST/DAST in der CI, Coordinated Vulnerability Disclosure (Artikel 12)
4. **Lieferkette und Kryptografie** (6 Punkte) — Lieferantensicherheit bis mindestens zur zweiten Stufe nach Artikel 21(2)(d), Kryptografie und Verschlüsselung nach Artikel 21(2)(h)
5. **Zugangskontrolle und Audit** (6 Punkte) — Zugangskontrolle und MFA nach Artikel 21(2)(i)-(j), Wirksamkeitsbewertung nach Artikel 21(2)(f)

---

## Wer das nutzt

- Wesentliche Entitäten (Energie, Transport, Banking, Gesundheitswesen, öffentliche Verwaltung, digitale Infrastruktur, MSPs)
- Wichtige Entitäten (Post, Fertigung kritischer Produkte, digitale Service-Anbieter, R&D)
- ICT-Drittanbieter, die wesentliche Entitäten bedienen

---

## Nach dem Download

Die Checkliste gibt Ihnen die Arbeitsgrundlage, um Ihre Architektur gegen NIS2 zu bewerten. Für ein tieferes Engagement siehe **[NIS2-Compliance-Lösung](/de/loesungen/nis2-compliance/)**.

---

## Verwandte Ressourcen

- **[NIS2-Compliance-Lösung](/de/loesungen/nis2-compliance/)** — vollständiges Engagement
- **[DORA-Compliance-Checkliste](/de/ressourcen/dora-compliance-checkliste/)** — für Finanzdienstleister
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — angrenzend

---

*Ænix ist das Open-Core-Unternehmen hinter [Cozystack](https://cozystack.io) (CNCF-Projekt) und bietet die Ænix Platform an — eine schlüsselfertige kommerzielle Cloud-in-a-Box.*
