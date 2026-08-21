---
title: "NIS2-Compliance für Cloud-Infrastruktur — auditbereite Architektur"
description: "Die NIS2-Richtlinie (EU 2022/2555) ist seit dem Umsetzungstermin 17. Oktober 2024 in den meisten EU-Mitgliedstaaten in Kraft. Für wesentliche und wichtige..."
type: "page"
related_pages: ["/de/loesungen/dora-compliance", "/de/loesungen/data-sovereignty", "/services/platform-readiness-assessment"]
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /solutions/nis2-compliance/
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

<!-- BLOCK 1 -->

**Die NIS2-Richtlinie (EU 2022/2555) wird in den EU-Mitgliedstaaten umgesetzt, wobei die Fristen für viele bereits verstrichen sind. Für wesentliche und wichtige Entitäten — Energie, Verkehr, Bankwesen, Finanzmarktinfrastrukturen, Gesundheitswesen, Trinkwasser, digitale Infrastruktur, öffentliche Verwaltung, Postdienste, Abfall, ICT-Dienste und mehrere weitere Sektoren — schreibt NIS2 spezifische Cybersicherheits- und Vorfallsmanagement-Anforderungen vor, die direkt auf die Cloud-Architektur abbilden.**

Aenix führt NIS2-konforme Platform-Readiness-Engagements für betroffene Entitäten und die sie bedienenden ICT-Drittanbieter durch. Ergebnis: eine Kontroll-Level-Landkarte, die zeigt, wo Sie heute stehen, wo die Lücken liegen und wie ein Remediationsplan auf Architekturebene aussieht.

> **Passt zu:** **[Ænix Platform Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/)** — NIS2-konform by design (Artikel 21 Risikomanagement, Artikel 23 Meldepflichten, Artikel 30 koordinierte Offenlegung von Schwachstellen). Tenant CRD mit NetworkPolicy / Cilium für Segmentierung, kundenkontrollierte Verschlüsselung, audit-bereites Logging. Kostenlose [NIS2-Compliance-Checkliste →](/de/ressourcen/nis2-compliance-checkliste/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/nis2-checkliste-cloud-architektur/">NIS2-Checkliste lesen →</a>
</div>

<div class="trust-badges">
Ingenieure mit Sitz in der EU · Gegenseitige NDA · Keine Hyperscaler-Voreingenommenheit · Schriftliche Ergebnisse</div>


<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO -->

## Wer fällt in den NIS2-Geltungsbereich

NIS2 gilt breit für:

- **Wesentliche Entitäten** — Energie, Verkehr, Bankwesen, Finanzmarktinfrastrukturen, Gesundheitswesen, Trinkwasser, Abwasser, digitale Infrastruktur (IXPs, DNS, TLD, Cloud-Anbieter, Rechenzentrumsanbieter, CDN, MSPs, MSSPs, öffentliche elektronische Kommunikation), öffentliche Verwaltung, Raumfahrt.
- **Wichtige Entitäten** — Postdienste, Abfallwirtschaft, Chemie, Lebensmittel, Herstellung kritischer Produkte, Anbieter digitaler Dienste (Online-Marktplätze, Suchmaschinen, soziale Plattformen), Forschung und Entwicklung.
- **ICT-Drittanbieter**, die betroffene Entitäten bedienen.

Wenn Ihr Sektor betroffen ist oder Ihre Kunden betroffen sind, gelten die architektonischen NIS2-Anforderungen.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT NIS2 REQUIRES -->

## Was NIS2 von der Cloud-Architektur fordert

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node diagram__node--brand"><b>Ænix Platform Enterprise Edition</b><div class="diagram__chips"><span>Cozystack</span><span>Apache 2.0</span></div></div>
<div class="diagram__conn">liefert</div>
<div class="diagram__node"><b>Segmentierung, Verschlüsselung, audit-bereites Logging</b><div class="diagram__chips"><span>Tenant-CRD</span><span>Cilium (eBPF)</span></div></div>
<div class="diagram__conn">unterstützt</div>
<div class="diagram__node"><b>NIS2-Konformität</b><div class="diagram__chips"><span>Artikel 21 / 23 / 30</span></div></div>
</div>
</div>

<div class="grid-2x2">

**1. Risikomanagement-Maßnahmen (Artikel 21)**
Dokumentierte Cybersicherheits-Risikomanagement-Praktiken mit Konzepten für Risikoanalyse, ICT-Asset-Management, Vorfallsbehandlung, Betriebskontinuität, Lieferkettensicherheit, Schwachstellenbehandlung und Sicherheit bei Beschaffung von Netzwerken/Informationssystemen.

**2. Meldepflichten (Artikel 23)**
Vorfälle werden dem CSIRT bzw. der zuständigen Behörde binnen 24 Stunden (Frühwarnung), 72 Stunden (Vorfallsmeldung) und einem Monat (Abschlussbericht) gemeldet. Die Architektur muss Erkennung und Meldung innerhalb dieser Fristen unterstützen.

**3. Lieferketten- und ICT-Drittparteirisiko**
Spezifische Pflichten zum Management von Risiken aus der ICT-Lieferkette, einschließlich direkter Anbieter und (soweit zutreffend) Unterlieferanten. Konzentrationsrisiko, Ausstiegsfähigkeit und Pflichten zur Anbieterüberwachung.

**4. Verantwortung der Leitungsorgane**
Die Unternehmensleitung ist verantwortlich und wird im Cybersicherheits-Risikomanagement geschult. Die Compliance wird nicht vollständig an technische Teams delegiert.

</div>

Eine Kontroll-Level-Checkliste finden Sie im **[Artikel zu den NIS2-Anforderungen](/de/blog/2026/05/nis2-checkliste-cloud-architektur/)**.

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHERE COMMON SETUPS FAIL -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wo die meisten Cloud-Setups das NIS2-Audit nicht bestehen

<div class="gap-cards-2">

**Vorfallserkennung zu langsam für die 24-Stunden-Frist**
Die Erkennung erfordert Telemetrie und Monitoring, die auf jene Ereignisse abgestimmt sind, die NIS2 als meldepflichtig betrachtet. Die meisten Cloud-Setups verfügen über Observability für Performance, nicht für die Vorfallserkennung innerhalb der NIS2-Fristen.

**ICT-Lieferkette nur bis zur ersten Stufe erfasst**
NIS2 verlangt Transparenz über die Lieferkette für ICT-Drittanbieter mit kritischer Funktion. Die meisten Organisationen können über ihre direkten Anbieter hinaus keine Auflistung vornehmen.

**Backup und BCP funktionieren auf dem Papier, nicht in der Übung**
NIS2 verlangt Betriebskontinuität. Die meisten BCP-Pläne sind Dokumente, die nie unter realistischen Ausfallszenarien getestet wurden.

**Schwachstellenmanagement ist reaktiv**
Patch-Zyklen laufen im monatlichen Rhythmus; kritische Schwachstellen erhalten Notfall-Patches. NIS2 erwartet eine proaktivere Schwachstellenbehandlung für kritische Infrastruktur.

</div>

</div>
</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW WE HELP -->

## Wie Aenix hilft

Das NIS2-Engagement läuft als Teil unseres **[Platform Readiness Assessments](/de/dienstleistungen/platform-readiness-assessment/)** mit Schwerpunkt auf dem Workstream Souveränität und Regulierungs-Lücken. Das 14- oder 28-tägige Engagement liefert:

- **NIS2-Kontroll-Level-Landkarte** — Kontrolle für Kontrolle, was Ihre Architektur nachweist
- **Lieferketten-Mapping** — bis zur zweiten Stufe für ICT-Drittanbieter mit kritischer Funktion
- **Bewertung der Fähigkeit zur Vorfallserkennung und -meldung** — Telemetrie und Prozesse gegenüber den Fristen von 24/72 Stunden und einem Monat
- **Aufstellung zu Betriebskontinuität und Schwachstellenmanagement**
- **Remediationsplan auf Architekturebene**

Geliefert von Ingenieuren mit Sitz in der EU und Erfahrung im Dialog mit Regulierungsbehörden. Dieselben Ingenieure führen auch die [DORA-Compliance](/de/loesungen/dora-compliance/) durch — die 28-Tage-Variante bildet beide Regulierungsbehörden in einem Engagement ab.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX -->

## Warum gerade Aenix

- **Ingenieure mit Sitz in der EU** mit Erfahrung innerhalb derselben Regulierungsrahmen wie Ihre Kunden.
- **Keine Hyperscaler-Voreingenommenheit.** Empfehlungen spiegeln technische Eignung und regulatorische Passung wider, nicht die Ökonomie von Partnerschaften.
- **Open-Source-Plattformfundament.** [Cozystack](/de/produkte/cozystack/) unterstützt Air-Gap, kundenkontrollierte Schlüssel und vollständige Audit-Trails — Souveränität by Architecture.
- **Regulierungsübergreifendes Engagement** — DORA + NIS2 + GDPR gemeinsam in der 28-Tage-Variante abgebildet.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

| Wann | Was | Ergebnis |
|---|---|---|
| **Tag 0** | 30-minütiger Discovery-Call (kostenlos) | Passung bestätigen, NIS2-Umfang eingrenzen (welche Sektoren / welche Pflichten) |
| **Tage 1-13 (oder 1-27)** | Workstream Souveränität und Regulierungs-Lücken | Tägliche Updates, drei Checkpoints |
| **Tag 14 (oder 28)** | Executive-Readout (60-90 Min.) | Schriftlicher Bericht: NIS2-Kontroll-Landkarte, Lieferketten-Landkarte, BCP-/Vorfalls-Aufstellung, Remediationsplan |

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

{{< clients >}}

{{< quote-carousel >}}

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

<div class="pricing-cards-2">

### 14 Tage (fokussiert auf NIS2)
**Auf Anfrage**

### 28 Tage (NIS2 + DORA + GDPR-Overlay)
**Auf Anfrage**

</div>

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->


<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: CTA -->

<a id="discovery"></a>
<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

- **[NIS2-Anforderungen-Artikel](/de/blog/2026/05/nis2-checkliste-cloud-architektur/)** — Leitfaden auf Kontroll-Level
- **[DORA-Compliance](/de/loesungen/dora-compliance/)** — Regulierungsbehörde für Finanzdienstleistungen
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — angrenzender Auslöser
- **[Cozystack](/de/produkte/cozystack/)** — souveräne Plattform by Architecture

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER -->

*Aenix ist das Team hinter Cozystack — einem CNCF-Projekt und einer Kubernetes Certified Distribution.*

<!-- /BLOCK 12 -->
