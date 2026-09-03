---
title: "DORA Compliance für Cloud-Infrastruktur — auditbereite Architektur"
description: "Die Digital Operational Resilience Act (DORA) ist seit dem 17. Januar 2025 in Kraft. Für die Finanzbranche der EU — Banken, Versicherer, Investmentfirmen,..."
type: "page"
related_pages:
  - /de/loesungen/data-sovereignty
  - /de/loesungen/nis2-compliance
  - /de/dienstleistungen/platform-readiness-assessment
  - /de/produkte/private-cloud-platform/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /solutions/dora-compliance/
direct_answer: |
  **DORA-Compliance für Cloud-Infrastruktur bedeutet, die Cloud- und Plattform-Architektur eines Finanzunternehmens auditbereit an die Digital Operational Resilience Act (seit 17. Januar 2025 in Kraft) anzupassen. Betroffen sind Banken, Versicherer, Investmentfirmen, Zahlungsinstitute, Krypto-Asset-Anbieter und ihre kritischen IKT-Drittanbieter. Aenix — das Team hinter Cozystack (CNCF-Projekt) — führt DORA-fokussierte Plattform-Readiness-Assessments durch und liefert mit der Ænix Private Cloud Platform eine DORA-konforme Architektur: kundenkontrollierte Schlüssel, audit-bereites Logging via VictoriaLogs, Mandantenfähigkeit über das Tenant CRD nach IKT-Risikoklassifizierung, getestete Exit-Mechanik und Transparenz über IKT-Drittparteien-Risiken.**

quick_facts:
  - label: "Was es ist"
    value: "Auditbereite Cloud- und Plattform-Architektur, die die Anforderungen der EU-Verordnung DORA (digitale operationale Resilienz) erfüllt"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Finanzunternehmen der EU (Banken, Versicherer, Investmentfirmen, Zahlungsinstitute, Krypto-Asset-Anbieter) und ihre kritischen IKT-Drittanbieter"
  - label: "Regulatorik"
    value: "Die Verordnung (EU) 2022/2554 gilt seit dem 17. Januar 2025; deckt IKT-Drittparteien-Risiko (Art. 28-30), Exit-Bereitschaft (Art. 28(8)) und Tests der digitalen operationalen Resilienz (Art. 24-27) ab"
  - label: "Schlüsselfunktionen"
    value: "Kundenkontrollierte Schlüssel, audit-bereites Logging via VictoriaLogs, Multi-Tenant-Isolierung über Tenant CRD, getestete Exit-Mechanik, Lieferantentransparenz"
  - label: "Engagement"
    value: "14-Tage-Engagement (fokussierte DORA-Bewertung) oder 28-Tage-Engagement (DORA + NIS2 + DSGVO-Mapping)"

faq:
  - q: "Was ist DORA und seit wann gilt sie?"
    a: "DORA (Digital Operational Resilience Act) ist eine EU-Verordnung zur digitalen operationalen Resilienz der Finanzbranche. Sie ist seit dem 17. Januar 2025 in Kraft und ersetzt das zuvor fragmentierte Aufsichtsregime durch eine einheitliche Verordnung für die gesamte EU."
  - q: "Wer ist von DORA betroffen?"
    a: "Banken und Kreditinstitute, Versicherer und Rückversicherer, Investmentfirmen, Zahlungsinstitute und Krypto-Asset-Service-Anbieter. Zusätzlich gilt DORA für IKT-Drittanbieter, die kritische Funktionen für diese Finanzunternehmen erbringen."
  - q: "Was fordert DORA von meiner Cloud-Architektur?"
    a: "Vier Kernbereiche: Transparenz über IKT-Drittparteien-Risiken (Art. 28-30), nachweisbare Exit-Bereitschaft für kritische Funktionen (Art. 28(8)), Tests der digitalen operationalen Resilienz (Art. 24-27) sowie Souveränität und Aufsichtszugang zu Ihrer Plattform."
  - q: "Wie hilft die Ænix Platform bei der DORA-Compliance?"
    a: "Die Private Cloud Platform ist DORA-konform by design: kundenkontrollierte Schlüssel, audit-bereites Logging via VictoriaLogs, Multi-Tenant-Isolierung über das Tenant CRD nach IKT-Risikoklassifizierung, getestete Exit-Mechanik und Lieferantentransparenz. Sie basiert auf Cozystack (Apache 2.0, KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium-Networking, LINSTOR-Storage)."
  - q: "Reduziert Open Source das Lock-in- und Exit-Risiko unter DORA?"
    a: "Ja. Cozystack steht unter Apache 2.0 ohne CPU- oder Core-basierte Lizenzierung. Da die Plattform auf der Kubernetes-API und CNCF-Komponenten (KubeVirt, Cilium, LINSTOR) aufbaut, lässt sich die für Art. 28(8) geforderte Exit-Mechanik real testen, statt nur vertraglich zugesichert zu werden."
  - q: "Wie läuft ein DORA-Assessment bei Aenix ab?"
    a: "Aenix bietet zwei Engagements an: ein 14-Tage-Engagement als fokussierte DORA-Bewertung und ein 28-Tage-Engagement, das DORA, NIS2 und DSGVO gemeinsam abbildet. Beide folgen der Methodik des Platform Readiness Assessments."
---

<!-- BLOCK 1: HERO -->

**DORA gilt seit dem 17. Januar 2025. Wenn Ihre Cloud-Architektur nicht unabhängig auf IKT-Drittparteien-Risiko, Konzentrationsrisiko, Exit-Bereitschaft und Tests der operativen Resilienz geprüft wurde, wird der nächste Aufsichtszyklus Lücken aufdecken, die Sie besser selbst zuerst finden.**

Ænix führt ein DORA-konformes Platform-Readiness-Engagement für Finanzunternehmen und die sie beliefernden IKT-Drittanbieter durch. Das Ergebnis: eine Kontroll-Landkarte dessen, was Sie heute nachweisen können, wo die Lücken liegen und wie ein Remediationsplan auf Architekturebene aussieht.

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** — DORA-konform by design (kundenkontrollierte Schlüssel auf jeder Ebene, audit-bereites Logging via VictoriaLogs, mandantenfähiges Tenant CRD abgestimmt auf die IKT-Risikoklassifizierung, getestete Exit-Mechanik, Lieferantentransparenz bis zur zweiten Stufe). Kostenlose [DORA-Compliance-Checkliste →](/de/ressourcen/dora-compliance-checkliste/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/dora-checkliste-cloud-architektur/">DORA-Checkliste lesen →</a>
</div>

<div class="trust-badges">
In der EU ansässige Ingenieure · Gegenseitige NDA zum Auftakt · Schriftliche Ergebnisse · Keine Hyperscaler-Voreingenommenheit
</div>


<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO THIS IS FOR -->

## Für wen das gedacht ist

DORA gilt direkt oder indirekt für nahezu jede Organisation in der Finanz-Lieferkette der EU. Am häufigsten arbeiten wir mit:

- **Banken und Kreditinstituten**, die bei den IKT-Drittparteien-Vereinbarungen nach Artikel 28 unter aufsichtlicher Prüfung stehen.
- **Versicherern und Rückversicherern** mit Datenflüssen über mehrere Jurisdiktionen und grenzüberschreitendem Disaster Recovery.
- **Investmentfirmen, Zahlungsinstituten und Krypto-Asset-Dienstleistern**, die als Finanzunternehmen nach DORA Artikel 2 in den Anwendungsbereich fallen.
- **IKT-Drittdienstleistern**, die kritische Funktionen für betroffene Unternehmen erbringen — darunter Hosting-Anbieter, SaaS-Anbieter und Managed-Service-Betreiber.

Wenn Ihr Cloud-Setup eine *kritische oder wichtige Funktion* im Sinne von DORA unterstützt, gelten die nachfolgenden Anforderungen materiell, nicht nur verfahrenstechnisch.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: FOUR THINGS DORA REQUIRES OF YOUR CLOUD -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was DORA von Ihrer Cloud-Architektur fordert

<div class="grid-2x2">

**1. Transparenz beim IKT-Drittparteien-Risiko (Artikel 28-30)**
Jeder IKT-Lieferant in Ihrem Stack — Hyperscaler, SaaS, Managed Service — ist mit Pflichten aus Artikel 28 verbunden. Das Finanzunternehmen muss die Lieferkette abbilden, einschließlich Subunternehmern, mit einer dokumentierten Position zum Konzentrationsrisiko.

**2. Getestete Ausstiegsstrategien (Artikel 28(8))**
Artikel 28(8) verlangt Ausstiegsstrategien für jede IKT-Vereinbarung, die eine kritische oder wichtige Funktion stützt, und verlangt, dass diese Pläne umfassend, dokumentiert und angemessen getestet sind. Artikel 30(3)(f) verankert die entsprechenden Ausstiegsklauseln im Vertrag. Eine reine Schreibtischplanung genügt dem Artikel nicht.

**3. Tests der digitalen operationalen Resilienz (Artikel 24-27)**
Mindestens jährliche Tests der IKT-Werkzeuge und -Systeme für alle betroffenen Unternehmen (Art. 24-25), dazu bedrohungsgeleitete Penetrationstests mindestens alle drei Jahre für Unternehmen, die ihre zuständige Behörde dafür benennt (Art. 26-27). Beides läuft gegen die Live-Architektur, nicht gegen die Dokumentation.

**4. Nachweisbares IKT-Risikomanagement (Artikel 5-16) und Meldewesen (Artikel 17-19)**
Datenresidenz auf jeder Ebene durchgesetzt — Produktion, Backup, Observability, CI/CD-Artefakte —, Verschlüsselungsschlüssel unter der Kontrolle des Finanzunternehmens und Audit-Trails, die sich in aufsichtlich verwertbaren Formaten exportieren lassen. Erkennung und Klassifizierung müssen schnell genug sein für die Meldefristen der Delegierten Verordnung (EU) 2025/301.

</div>

Eine Kontroll-Checkliste mit operativer Sprache zu jedem dieser Punkte finden Sie in **[der DORA-Compliance-Checkliste](/de/blog/2026/05/dora-checkliste-cloud-architektur/)**.

</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHERE CURRENT SETUPS FALL SHORT -->

## Wo die meisten Cloud-Setups zu kurz greifen

<div class="gap-cards-2">

**Observability-Daten verlassen still den Perimeter des Regulators**
Die Produktionsdatenbank mag konform sein. Der SaaS-Observability-Stack, der die Anwendungslogs einsammelt, ist es wahrscheinlich nicht. DORA Artikel 28 gilt für die gesamte IKT-Drittparteien-Vereinbarung.

**Der Exit-Plan existiert auf dem Papier, wurde aber nie getestet**
Artikel 28(8) verlangt, dass der Ausstiegsplan angemessen getestet ist — nicht bloß, dass er geschrieben wurde. Ohne eine echte Probe ist die genannte Ausstiegsdauer geraten. Artikel 30(3)(f) verlangt die entsprechenden Ausstiegsklauseln im Vertrag.

**Konzentrationsrisiko wird als Beschaffungsfrage behandelt, nicht als Architekturfrage**
Artikel 29 verlangt vom Unternehmen, das Konzentrationsrisiko auf Ebene der einzelnen IKT-Vereinbarung zu bewerten. Vertragliche Diversifizierungsklauseln ohne architektonische Diversität beantworten das nicht.

**Subunternehmer-Risiko ist jenseits der ersten Stufe unsichtbar**
Artikel 30(2)(a) verlangt, dass das Finanzunternehmen die Kette kennt. Die meisten tun es nicht, über die erste Stufe hinaus.

</div>

Diese Lücken sind bei Institutionen verbreitet, die sich für cloud-reif halten. Sie früh aufzudecken ist günstiger, als sie unter aufsichtlichem Druck aufzudecken.

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW WE HELP (linking to entry offer) -->

## Wie Ænix hilft

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>DORA (seit 17. Januar 2025)</b><div class="diagram__chips"><span>IKT-Drittparteien-Risiko · Exit-Bereitschaft · Resilienz-Tests</span></div></div>
<div class="diagram__conn">erfüllt durch</div>
<div class="diagram__node diagram__node--brand"><b>Ænix Private Cloud Platform</b><div class="diagram__chips"><span>kundenkontrollierte Schlüssel · VictoriaLogs · Tenant CRD</span></div></div>
<div class="diagram__conn">liefert</div>
<div class="diagram__node"><b>Auditbereite Architektur</b></div>
</div>
</div>

Unser DORA-Engagement ist in das **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** eingebettet, wobei der Workstream zu Souveränität und Lücken gegenüber der Aufsicht für den DORA-spezifischen Anwendungsbereich in den Vordergrund gerückt wird. Das 14- oder 28-tägige Engagement liefert:

- **DORA-Kontroll-Landkarte** — eine Kontrolle-für-Kontrolle-Tabelle, die zeigt, was Sie heute nachweisen können, was teilweise erfüllt ist und wo die architektonischen Lücken liegen.
- **Konzentrationsrisiko-Bild** — Abbildung der Lieferkette (bis zur zweiten Stufe), mit quantifizierter Konzentrationsposition pro kritischer Funktion.
- **Exit-Machbarkeitsanalyse** — kalibrierte Time-to-Exit-Schätzungen, Scoping von Exit-Übungen und Sequenzierung abgestimmt auf das Auslaufen von Verpflichtungen.
- **Bereitschaft für Resilienz-Tests** — ob Ihre Architektur die szenariobasierten Tests unterstützt, die Aufsichtsbehörden erwarten.
- **Remediationsplan auf Architekturebene** — was in welcher Reihenfolge zu beheben ist, mit Aufwandsschätzungen.

Geliefert von Ænix-Ingenieuren — dem Team hinter Cozystack — nicht von Unternehmensberatern. Wir verkaufen Ihnen keine Hyperscaler-Partnerschaft, und der Bericht ist ehrlich dazu, welche architektonischen Entscheidungen den Aufwand wert sind.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Warum gerade Ænix

Die meiste DORA-Beratung kommt von den Big-Four-Beratungen, die an einen Hyperscaler-Partner übergeben, dessen Anreize die Empfehlung prägen. Die architektonische Antwort ist tendenziell die Architektur, die der Partner verkauft.

Wir sind in drei konkreten Punkten anders:

- **Keine Hyperscaler-Voreingenommenheit.** Unsere Empfehlungen sind kommerziell nicht an AWS, Azure, GCP oder einen einzelnen Anbieter gebunden. Wenn die Antwort Hyperscaler-mit-besseren-Kontrollen lautet, sagen wir das. Wenn die Antwort On-Prem oder Hybrid lautet, sagen wir das.
- **Ingenieure statt Berater.** Dieselben Ænix-Ingenieure, die das Readiness-Engagement durchführen, bauen anschließend die Produktionsplattformen. Die Aufwandsschätzungen im Bericht sind an Arbeit kalibriert, die wir tatsächlich ausgeliefert haben.
- **Open-Source-Plattformfundament.** Wir sind das Unternehmen hinter **[Cozystack](/de/produkte/cozystack/)** — einem CNCF-Projekt, einer Kubernetes Certified Distribution mit OpenSSF-Best-Practices-Badge. Wo eine Cozystack-basierte Architektur die materiellen Anforderungen von DORA besser erfüllt als die Alternative, erklärt der Bericht das mit benannten Kontrollen.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## Wie das Engagement abläuft

| Wann | Was | Ergebnis |
|---|---|---|
| **Tag 0** | 30-min Discovery-Call (kostenlos) | Passung bestätigen, DORA-Scope eingrenzen (welche Artikel Sie binden), Sponsor identifizieren |
| **Tage 1-13 (oder 1-27)** | Vier parallele Workstreams; Workstream zu Souveränität und Lücken gegenüber der Aufsicht im Vordergrund | Tägliche asynchrone Updates, drei Checkpoints mit dem Sponsor |
| **Tag 14 (oder 28)** | Executive-Readout (60-90 Min.) | Schriftlicher Bericht: DORA-Kontroll-Landkarte, Konzentrationsanalyse, Exit-Machbarkeit, Bereitschaft für Resilienz-Tests, Remediationsplan |

Zur vollständigen Engagement-Methodik siehe **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Wer das mit uns durchgeführt hat

{{< clients >}}

Wir haben DORA-konforme Readiness-Engagements für Banken, Versicherer, Telekommunikationsbetreiber und IKT-Drittdienstleister in der gesamten EU und der DACH-Region durchgeführt. Gegenseitige NDA zum Auftakt; benannte Fallstudien auf Anfrage im Discovery-Call, sofern die Kundengenehmigungen dies erlauben.

{{< quote-carousel >}}
Namentliche Referenzen und Kundenzitate teilen wir im Discovery-Call, soweit Freigaben vorliegen.
<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Preise und Engagement-Umfang

Das DORA-fokussierte Engagement läuft als Platform Readiness Assessment mit dem Workstream zu Souveränität und Lücken gegenüber der Aufsicht als Hauptschwerpunkt.

<div class="pricing-cards-2">

### 14 Tage (fokussierter DORA-Scope)
Vertiefung des DORA-fokussierten Workstreams, einzelne Geschäftseinheit / Domäne. Vollständige Kontroll-Landkarte, Konzentrationsanalyse, Exit-Machbarkeit, Remediationsplan.
**Auf Anfrage**

### 28 Tage (volle DORA + angrenzend)
DORA + angrenzendes NIS2- / DSGVO- / sektorales Overlap-Mapping. Stakeholder-Interviews über mehrere Geschäftseinheiten. Anbieter-Vorauswahl, wo anwendbar. Roadmap für die Phase-2-Implementierung.
**Auf Anfrage**

</div>

Festpreis. Eine Rechnung. Gegenseitige NDA zum Auftakt. Folgt ein Phase-2-Implementierungs-Engagement, werden die Kosten des Assessments darauf angerechnet (abhängig vom Scope).

Wir akzeptieren RFI / RFP über die üblichen Beschaffungskanäle in EU-Mitgliedstaaten und Kasachstan; der Discovery-Call klärt die verfahrenstechnische Passung.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Beginnen Sie mit einem 30-minütigen Discovery-Call

Kostenlos. Keine Vorbereitung nötig. Wir bestätigen die Passung, grenzen den DORA-Scope auf die für Sie bindenden Artikel ein und sagen Ihnen, ob die 14-Tage- oder die 28-Tage-Variante zu Ihrer Situation passt.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

Oder lesen Sie weiter:
- **[DORA-Compliance-Checkliste für Cloud-Architektur](/de/blog/2026/05/dora-checkliste-cloud-architektur/)** — der Leitfaden auf Kontrollebene
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — das Engagement, das den DORA-Workstream enthält
- **[Datensouveränität im Jahr 2026](/de/loesungen/data-sovereignty/)** — angrenzender regulatorischer Auslöser
- **[Cozystack](/de/produkte/cozystack/)** — die Plattform, die wir typischerweise für souveräne Architekturen empfehlen

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Ænix ist das Unternehmen hinter Cozystack — einem CNCF-Projekt, einer Kubernetes Certified Distribution mit OpenSSF Best Practices. Wir führen DORA-konforme Platform-Readiness-Engagements und Platform-Engineering-Programme für Finanzdienstleister in der gesamten EU und der DACH-Region durch.*

<!-- /BLOCK 12 -->
