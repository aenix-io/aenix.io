---
title: "NIS2-Compliance für Cloud-Infrastruktur — auditbereite Architektur"
description: "Die NIS2-Richtlinie (EU 2022/2555) ist seit dem Umsetzungstermin 17. Oktober 2024 in den meisten EU-Mitgliedstaaten in Kraft. Für wesentliche und wichtige..."
type: "page"
related_pages: ["/de/loesungen/dora-compliance", "/de/loesungen/data-sovereignty", "/services/platform-readiness-assessment"]
language: "de"
direct_answer: |
  **NIS2-Compliance für Cloud-Infrastruktur bedeutet, die Cyber­sicherheits- und Vorfallsmanagement-Pflichten der EU-Richtlinie 2022/2555 (Umsetzungstermin 17. Oktober 2024) direkt in der Plattform­architektur umzusetzen. Sie betrifft wesentliche und wichtige Entitäten — Energie, Verkehr, Banken, Gesundheitswesen, digitale Infrastruktur, öffentliche Verwaltung — sowie deren ICT-Drittanbieter. Aenix liefert mit der auf Cozystack aufbauenden Ænix Platform Enterprise Edition eine auditbereite Grundlage: Tenant-CRD-Mandantenfähigkeit mit NetworkPolicy und Cilium (eBPF) für Segmentierung, kundenkontrollierte Verschlüsselung, audit-bereites Logging und Coordinated Vulnerability Disclosure nach Artikel 30 — alles Open Source unter Apache 2.0 ohne Vendor-Lock-in.**
quick_facts:
  - label: "Was es ist"
    value: "Auditbereite Cloud-Architektur, die die Cybersicherheits- und Vorfall-Reporting-Pflichten der NIS2-Richtlinie (EU 2022/2555) technisch umsetzt"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Wesentliche und wichtige Entitäten nach NIS2 (Energie, Verkehr, Banken, Gesundheitswesen, digitale Infrastruktur, öffentliche Verwaltung) sowie deren ICT-Drittanbieter"
  - label: "Schlüsselfunktion"
    value: "Tenant-CRD-Mandantenfähigkeit mit NetworkPolicy / Cilium (eBPF) für Segmentierung, kundenkontrollierte Verschlüsselung und audit-bereites Logging"
  - label: "Regulatorik"
    value: "Artikel 21 (Risikomanagement, 10 Bereiche), Artikel 23 (24-h-Frühwarnung / 72-h-Meldung / 1-Monat-Endbericht), Artikel 20 (Verantwortlichkeit der Leitungsorgane), Artikel 30 (Coordinated Vulnerability Disclosure)"
  - label: "Passendes Produkt"
    value: "Ænix Platform Enterprise Edition; Einstieg über Platform-Readiness-Assessment, Preisstufen ab Basic 1.250 $/Monat (10 Nodes)"
faq:
  - q: "Was ist die NIS2-Richtlinie und seit wann gilt sie?"
    a: "NIS2 (EU-Richtlinie 2022/2555) ist der EU-Rechtsrahmen für Cybersicherheit kritischer und wichtiger Einrichtungen. Der Umsetzungstermin war der 17. Oktober 2024; sie ist seitdem in den meisten EU-Mitgliedstaaten in nationales Recht überführt und in Kraft."
  - q: "Wer fällt unter den Geltungsbereich von NIS2?"
    a: "Wesentliche Entitäten (Energie, Verkehr, Banken, Finanzmarktinfrastrukturen, Gesundheitswesen, Trinkwasser, digitale Infrastruktur, öffentliche Verwaltung) und wichtige Entitäten (Postdienste, Abfall, Chemie, Lebensmittel, kritische Produkte, digitale Diensteanbieter) sowie ICT-Drittanbieter, die diese bedienen."
  - q: "Welche Fristen gelten für das Vorfall-Reporting nach Artikel 23?"
    a: "NIS2 schreibt eine dreistufige Meldung vor: eine Frühwarnung innerhalb von 24 Stunden, eine Vorfallsmeldung innerhalb von 72 Stunden und einen Endbericht innerhalb eines Monats. Audit-bereites Logging ist hierfür Grundvoraussetzung."
  - q: "Wie unterstützt die Ænix Platform die NIS2-Konformität technisch?"
    a: "Über die Enterprise Edition: Tenant-CRD-Mandantenfähigkeit mit NetworkPolicy und Cilium (eBPF) für Segmentierung, kundenkontrollierte Verschlüsselung, audit-bereites Logging und Coordinated Vulnerability Disclosure nach Artikel 30 — als architektonische Grundlage für Risikomanagement und Nachweispflichten."
  - q: "Gibt es bei Aenix einen Vendor-Lock-in für NIS2-Workloads?"
    a: "Nein. Die Plattform basiert auf Cozystack, das vollständig unter Apache 2.0 quelloffen ist, ohne CPU- oder Core-basierte Lizenzierung. Workloads laufen auf standardisierten Kubernetes-APIs mit KubeVirt für VMs und Container, LINSTOR/DRBD für Storage und Cilium für Networking."
  - q: "Wie steigt man in ein NIS2-Compliance-Projekt mit Aenix ein?"
    a: "Üblicher Einstieg ist ein Platform-Readiness-Assessment, gefolgt von einem Discovery-Call. Die produktisierte Ænix Platform startet bei Basic 1.250 $/Monat (10 Nodes); Standard, Plus und Enterprise (Custom) decken größere und stärker regulierte Umgebungen ab."
---

**Die NIS2-Richtlinie (EU 2022/2555) ist seit dem Umsetzungstermin 17. Oktober 2024 in den meisten EU-Mitgliedstaaten in Kraft. Für wesentliche und wichtige Entitäten — Energie, Verkehr, Banken, Finanzmarktinfrastrukturen, Gesundheitswesen, Trinkwasser, digitale Infrastruktur, öffentliche Verwaltung, Postdienste, Abfall, ICT-Dienste und mehr — schreibt NIS2 spezifische Cybersicherheits- und Vorfallsmanagement-Anforderungen vor, die direkt auf die Cloud-Architektur abbilden.**

> **Passt zu:** **[Ænix Platform Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/)** — NIS2-konform by design (Tenant CRD mit NetworkPolicy / Cilium für Segmentierung, kundenkontrollierte Verschlüsselung, audit-bereites Logging, Coordinated Vulnerability Disclosure nach Artikel 30). Kostenlose [NIS2-Compliance-Checkliste →](/de/ressourcen/nis2-compliance-checkliste/).

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/nis2-checkliste-cloud-architektur/">NIS2-Checkliste →</a>
</div>

---

## Wer ist im NIS2-Geltungsbereich

- **Wesentliche Entitäten** — Energie, Verkehr, Banken, Finanzmarktinfrastrukturen, Gesundheitswesen, Trinkwasser, digitale Infrastruktur, öffentliche Verwaltung
- **Wichtige Entitäten** — Postdienste, Abfallwirtschaft, Chemie, Lebensmittelproduktion, Herstellung kritischer Produkte, digitale Diensteanbieter
- **ICT-Drittanbieter**, die wesentliche und wichtige Entitäten bedienen

---

## Was NIS2 von Ihrer Cloud-Architektur fordert

1. **Risikomanagement-Maßnahmen** (Artikel 21) — 10 spezifische Bereiche
2. **Vorfall-Reporting** (Artikel 23) — 24-Stunden-Frühwarnung, 72-Stunden-Meldung, 1-Monat-Endbericht
3. **Lieferketten- und ICT-Drittpartei-Risiko**
4. **Verantwortlichkeit der Leitungsorgane** (Artikel 20)

Detaillierte Checkliste: **[NIS2-Anforderungen-Artikel](/de/blog/2026/05/nis2-checkliste-cloud-architektur/)**.

---

/contact/

---

*Aenix ist das Team hinter Cozystack — CNCF Project-Projekt.*

<!-- Keyword: nis2 compliance DE 400. Word count: ~400. -->
