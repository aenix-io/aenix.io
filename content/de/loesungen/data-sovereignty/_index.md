---
title: "Datensouveränität für Cloud-Infrastruktur — nachweisbare Jurisdiktionskontrolle"
description: "Datensouveränität ist 2026 keine Beschaffungsklausel mehr. DORA, NIS2, GDPR, sektorale Datenresidenzregeln und explizite souveräne Cloud-Mandate aus..."
type: "page"
related_pages: ["/de/loesungen/dora-compliance", "/de/produkte/private-cloud"]
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /solutions/data-sovereignty/
direct_answer: |
  **Datensouveränität bezeichnet die nachweisbare Kontrolle darüber, in welcher Jurisdiktion Daten gespeichert und verarbeitet werden — auf jeder Schicht, einschließlich Produktion, Backups, Observability und CI/CD-Artefakten. Sie ist 2026 eine harte regulatorische Anforderung aus DORA, NIS2, GDPR, sektoralen Datenresidenzregeln und souveränen Cloud-Mandaten der EU-Mitgliedstaaten. Aenix unterstützt regulierte Organisationen — Banken, öffentlicher Sektor, Gesundheitswesen, Telekommunikation — dabei, eine Souveränitätsposition von der Behauptung in eine nachweisbare Architektur zu überführen. Die Ænix Platform baut auf Cozystack (CNCF-Projekt, Apache 2.0) auf und ermöglicht kundenkontrollierte Schlüssel auf jeder Datenschicht sowie eine Air-Gap-Option für vollständige Datenresidenz.**
quick_facts:
  - label: "Was es ist"
    value: "Nachweisbare Jurisdiktionskontrolle über Datenspeicherung und -verarbeitung auf jeder Schicht — Produktion, Backup, Observability und CI/CD"
  - label: "Zielgruppe"
    value: "Banken und Versicherer unter DORA, öffentlicher Sektor, Gesundheitswesen, Telekommunikation unter NIS2, multinationale Unternehmen mit Datenlokalisierung"
  - label: "Regulatorik"
    value: "DORA, NIS2, GDPR, sektorale Datenresidenzregeln und souveräne Cloud-Mandate der EU-Mitgliedstaaten"
  - label: "Schlüsselkontrolle"
    value: "Kundenkontrollierte Schlüssel auf jeder Datenschicht (Primärspeicher, Replikate, Backups, Observability); Air-Gap-Option unterstützt"
  - label: "Technologie"
    value: "Ænix Platform auf Basis von Cozystack — KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium (eBPF) Networking, LINSTOR/DRBD Storage"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
faq:
  - q: "Was bedeutet Datensouveränität in der Cloud-Infrastruktur?"
    a: "Datensouveränität bedeutet, nachweislich belegen zu können, dass Daten in der vom Regulator vorgeschriebenen Jurisdiktion gespeichert und verarbeitet werden — und zwar auf jeder Schicht, nicht nur in der Produktion. Dazu gehören Backups, Observability-Daten und CI/CD-Artefakte. Es geht um Nachweisbarkeit, nicht um eine Beschaffungsklausel."
  - q: "Welche Vorschriften erzwingen Datensouveränität 2026?"
    a: "Mehrere Regelwerke konvergieren auf dieselbe Anforderung: DORA für den Finanzsektor, NIS2 für kritische Infrastruktur und Telekommunikation, GDPR für personenbezogene Daten sowie sektorale Datenresidenzregeln und explizite souveräne Cloud-Mandate einzelner EU-Mitgliedstaaten."
  - q: "Wie unterstützt Aenix bei Datensouveränität?"
    a: "Aenix führt strukturierte Engagements durch, die eine Souveränitätsposition von der Behauptung in eine nachweisbare Architektur überführen. Die Ænix Platform ermöglicht kundenkontrollierte Verschlüsselungsschlüssel auf jeder Datenschicht — Primärspeicher, Replikate, Backups und Observability — und unterstützt eine Air-Gap-Option."
  - q: "Welche Edition der Ænix Platform passt zu Souveränitätsanforderungen?"
    a: "Die Enterprise Edition eignet sich für regulierte Unternehmen, die souveräne Cloud intern konsumieren. Die Provider Edition richtet sich an Betreiber, die souveräne Cloud selbst als Produkt anbieten möchten."
  - q: "Worauf baut die Ænix Platform technisch auf?"
    a: "Die Ænix Platform baut auf Cozystack auf, einem CNCF-Projekt unter Apache-2.0-Lizenz. Cozystack vereint VMs und Container über KubeVirt auf einer Kubernetes-API, nutzt Cilium (eBPF) für Networking, LINSTOR/DRBD für Storage und Tenant-CRDs für Mandantenfähigkeit."
  - q: "Bedeutet Datensouveränität nur den Speicherort der Produktionsdaten?"
    a: "Nein. Echte Souveränität erfordert nachweisbare Datenresidenz auf jeder Schicht — Produktion, Backup, Observability und CI/CD —, Verschlüsselung und Schlüsselkontrolle unter Kundenkontrolle, Lieferanten-Transparenz bis zum zweiten Hop sowie Audit- und Aufsichtszugang."
---

<!-- BLOCK 1: HERO -->

**Datensouveränität ist keine Beschaffungsklausel mehr. DORA, NIS2, GDPR, sektorale Datenresidenzregeln und explizite souveräne Cloud-Mandate aus EU-Mitgliedstaaten und Nicht-EU-Jurisdiktionen konvergieren allesamt auf dieselbe operative Anforderung: mit Belegen nachzuweisen, dass Ihre Daten dort liegen, wo der Regulator es vorschreibt — auf jeder Schicht, einschließlich Backups, Observability und CI/CD-Artefakten.**

Aenix führt ein strukturiertes Engagement für Organisationen durch, die eine Souveränitätsposition von der Behauptung zur nachweisbaren Architektur überführen müssen. Ergebnis: eine kontrollebenengenaue Karte, wo Ihre Daten heute tatsächlich liegen, wo die Lücken sind und wie Sovereignty-by-Design für Ihren Stack aussieht.

> **Passt zu:** **[Ænix Platform Enterprise Edition](/de/produkte/private-cloud-platform/)** für regulierte Unternehmen, die souveräne Cloud intern konsumieren; **[Provider Edition](/de/produkte/public-cloud-platform/)** für Betreiber, die souveräne Cloud als Produkt anbieten. Kundenkontrollierte Schlüssel auf jeder Datenschicht (Primärspeicher, Replikate, Backups, Observability). Air-Gap-Option unterstützt.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/datenresidenz-anforderungen-2026/">Datenresidenz-Leitfaden lesen →</a>
</div>

<div class="trust-badges">
Ingenieure in der EU · Apache 2.0 Plattform · Schriftliche Ergebnisse · Gegenseitige NDA zum Kickoff
</div>


<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO THIS IS FOR -->

## Wer ein Datensouveränitäts-Problem hat

Der Druck zur Datensouveränität äußert sich je nach Rolle des Käufers in unterschiedlicher Sprache, doch die zugrunde liegende Einschränkung ist dieselbe.

- **Banken und Versicherer** unter DORA / sektoraler Aufsicht, die mit Konzentrationsrisiko- und Datenresidenzpflichten konfrontiert sind.
- **Organisationen des öffentlichen und quasi-öffentlichen Sektors**, die beschaffungsmandatierten Anforderungen an souveräne Cloud unterliegen (EU-Mitgliedstaaten, Kasachstan, mehrere APAC-Jurisdiktionen).
- **Betreiber im Gesundheitswesen und in den Life Sciences** mit Residenzregeln für Patientendaten unter nationalen Gesundheitsdaten-Rahmenwerken.
- **Telekommunikations- und Betreiber kritischer Infrastruktur** unter NIS2 mit sektoralen Datenverarbeitungsregeln.
- **Multinationale Unternehmen** mit Datenlokalisierungsanforderungen, die je nach Land variieren (Indien, China, Russland, Brasilien, mehrere EU-Mitgliedstaaten).
- **KI- / Analytics-Teams**, die mit sensiblen Datenklassen arbeiten, welche nicht von Nicht-EU-Modellanbietern verarbeitet werden dürfen.

Wenn Sie einen konkreten Regulator, eine sektorale Regel oder eine Beschaffungsklausel benennen können, die dies für Ihr Team ausgelöst hat — dann ist dieses Engagement genau für diese Situation gemacht.

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT SOVEREIGNTY ACTUALLY REQUIRES -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was "Datensouveränität" tatsächlich von Ihrer Architektur verlangt

<div class="grid-2x2">

**1. Nachweisbare Datenresidenz auf jeder Schicht**
Der Produktionsspeicher ist der einfache Teil. Backups, Observability-Daten, CI/CD-Artefakte und Telemetrie von Managed Services verlassen häufig den Perimeter des Regulators, ohne dass es jemand bemerkt. Souveränität gilt für *alle* Schichten, nicht nur für die Produktionsdatenbank.

**2. Verschlüsselung und Schlüsselverwahrung unter Ihrer Kontrolle**
Verschlüsselung allein ist keine Souveränität. Die Verschlüsselungsschlüssel müssen bei der Finanzentität (oder dem Kunden) liegen — nicht beim Cloud-Anbieter — mit dokumentierter Rotation, Notfallzugriff und Audit-Trail.

**3. Lieferantentransparenz bis zum zweiten Hop**
Hyperscaler laufen auf Rechenzentren und Konnektivitätsanbietern; SaaS-Anbieter laufen auf Hyperscalern; Managed Services hängen von geteilter Infrastruktur ab. Souveränität erfordert, die Kette über den ersten Hop hinaus zu kennen.

**4. Audit- und Aufsichtszugang**
Audit-Trails müssen in regulatorenkonformen Formaten exportierbar, gemäß den Vorgaben des Regulators aufbewahrt und manipulationssicher sein. Prozesse für den Aufsichtszugang müssen dokumentiert und getestet sein.

</div>

Für praktische Details mit kontrollebenengenauen Prüfungen siehe **[Datenresidenz-Anforderungen 2026](/de/blog/2026/05/datenresidenz-anforderungen-2026/)**.

</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHERE CURRENT SETUPS FAIL -->

## Wo die meisten Cloud-Setups den Souveränitätstest nicht bestehen

<div class="gap-cards-2">

**Observability und Telemetrie durchbrechen den Perimeter**
Die Produktionsdatenbank liegt in der richtigen Region. Der SaaS-Observability-Stack, der Logs aus ihr sammelt, verarbeitet diese über US-Regionen, weil dort die Infrastruktur des Anbieters läuft. Der Compliance-Verantwortliche weiß nichts davon.

**Backups sind souverän — bis sie getestet werden**
Die Backup-Speicherebene liegt in der richtigen Region. Der DR-Test zieht Backups über Regionen hinweg zu einem anderen DR-Standort, der sich als in einer nicht-konformen Jurisdiktion liegend herausstellt. Souveränität scheitert unter Belastung.

**Verschlüsselungsschlüssel liegen beim Cloud-Anbieter**
Die Standardverschlüsselung sieht auf dem Papier konform aus. Bis der Regulator fragt, wer die Schlüssel kontrolliert — und die Antwort derselbe Anbieter ist, der auch die Daten hält.

**Die Lieferkette ist jenseits von Hop 1 eine Blackbox**
Der Hyperscaler ist im Vertrag benannt. Der Rechenzentrumsbetreiber des Hyperscalers, die Netzwerk-Subunternehmer und die geteilten Plattformdienste sind es nicht. Artikel 30(2)(a) DORA, die NIS2-Regeln zum Lieferantenrisiko und ähnliche sektorale Regeln fordern diese Transparenz.

</div>

Diese Lücken sind bei Institutionen, die sich für souveränitätskonform halten, weit verbreitet. Sie unter einem strukturierten Assessment aufzudecken ist günstiger, als sie unter einem Regulator-Audit aufzudecken.

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW AENIX HELPS -->

## Wie Aenix hilft

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Datensouveränität</b><div class="diagram__chips"><span>DORA, NIS2, GDPR</span></div></div>
<div class="diagram__conn">verlangt</div>
<div class="diagram__node"><b>Nachweisbare Datenresidenz auf jeder Schicht</b><div class="diagram__chips"><span>Produktion, Backup, Observability, CI/CD</span></div></div>
<div class="diagram__conn">ermöglicht durch</div>
<div class="diagram__node diagram__node--brand"><b>Ænix Platform auf Cozystack</b><div class="diagram__chips"><span>kundenkontrollierte Schlüssel · Air-Gap-Option</span></div></div>
</div>
</div>

Das Datensouveränitäts-Engagement läuft als Teil unseres **[Platform Readiness Assessments](/de/dienstleistungen/platform-readiness-assessment/)**, mit dem Arbeitsstrang zur Souveränitäts- und Regulator-Lücke als primärem Fokus. Das 14- oder 28-tägige Engagement bringt hervor:

- **Datenresidenz-Karte** — wo jede Datenklasse heute tatsächlich liegt, einschließlich Produktion, Backup, Observability und CI/CD-Artefakten. Pro Klasse die Jurisdiktion mit Belegen.
- **Verschlüsselungs- und Schlüsselverwahrungs-Prüfung** — aktuelle Verschlüsselungslage, Schlüsselverwahrungs-Arrangements, Lückenidentifikation pro Datenklasse.
- **Lieferketten-Karte bis zum zweiten Hop** — jedes ICT-Drittparteien-Arrangement zurückverfolgt bis zu seinen zugrunde liegenden Anbietern und geteilten Abhängigkeiten.
- **Audit-Bereitschafts-Assessment** — welche Prozesse für den Aufsichtszugang dokumentiert, welche getestet und welche nicht vorhanden sind.
- **Remediationsplan auf Architekturebene** — was in welcher Reihenfolge zu beheben ist, mit Aufwandsschätzungen und Abgleich an regulatorischen Fristen.

Geliefert von Aenix-Ingenieuren — dem Team hinter Cozystack — in der gesamten EU, der DACH-Region und Zentralasien. Wir sind mit keinem Hyperscaler kommerziell verbunden, und der Bericht orientiert sich an dem, was wir nachweisen und wofür wir einstehen können.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Warum genau Aenix

- **Ingenieure und Betrieb in der EU.** Unser Team arbeitet in der gesamten EU, der DACH-Region und Zentralasien. Wir verstehen den Unterschied zwischen Souveränität als US-Marketingbegriff und Souveränität, wie sie unter EU-sektoralen Regeln und Beschaffungsklauseln von EU-Mitgliedstaaten durchgesetzt wird.
- **Kein Hyperscaler-Bias.** Souveränitätsberatung von Big-Four-Firmen ist durch deren Hyperscaler-Partnerschaften geprägt. Unsere Empfehlungen sind an keinen Cloud-Anbieter kommerziell gebunden — wir empfehlen die Architektur, die die Souveränitätsanforderung tatsächlich erfüllt, auch wenn das vollständig On-Prem bedeutet.
- **Open-Source-Plattformfundament.** Wir sind das Unternehmen hinter **[Cozystack](/de/produkte/cozystack/)** — einem CNCF-Projekt, das auf der von der Finanzentität gewählten Hardware in der gewählten Jurisdiktion läuft, wobei die Entität den Zugriff auf Cluster-Ebene innehat. Souveränität ist strukturell, nicht vertraglich.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## Wie das Engagement abläuft

| Wann | Was | Ergebnis |
|---|---|---|
| **Tag 0** | 30-minütiger Discovery-Call (kostenlos) | Eignung bestätigen, Souveränitätsumfang eingrenzen (welche Regulatoren / Klauseln Sie binden), Sponsor identifizieren |
| **Tage 1-13 (oder 1-27)** | Vier parallele Arbeitsstränge; Arbeitsstrang zur Souveränitäts- und Regulator-Lücke betont | Tägliche asynchrone Updates, drei Checkpoints mit dem Sponsor |
| **Tag 14 (oder 28)** | Executive-Readout (60-90 Min.) | Schriftlicher Bericht: Datenresidenz-Karte, Schlüsselverwahrungs-Prüfung, Lieferketten-Karte, Audit-Bereitschaft, Remediationsplan |

Für die vollständige Methodik siehe **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Souveränitäts-Engagements, die wir durchgeführt haben

{{< clients >}}

Wir haben Datensouveränitäts-Assessments und Platform-Engineering-Programme für Banken, Versicherer, Organisationen des öffentlichen Sektors und ICT-Drittanbieter in der gesamten EU, der DACH-Region und Zentralasien durchgeführt. Die Ergebnisse reichen von vollständigen On-Prem-Aufbauten souveräner Cloud bis zur selektiven Repatriierung regulierter Workloads.

{{< quote-carousel >}}
> *— {{NAME_1}}, {{TITLE_1}}*

Benannte Fallstudien sind im Discovery-Call verfügbar, sofern die Kundenfreigaben es erlauben.

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Preise und Engagement-Umfang

Das souveränitätsfokussierte Engagement läuft als Platform Readiness Assessment.

<div class="pricing-cards-2">

### 14 Tage (fokussierter Souveränitätsumfang)
Tiefe des Souveränitäts-Arbeitsstrangs, ein regulatorisches Rahmenwerk, eine Domäne. Datenresidenz-Karte, Schlüsselverwahrungs-Prüfung, Lieferkette (bis zum zweiten Hop), Remediationsplan.
**Auf Anfrage**

### 28 Tage (volle Souveränität + angrenzend)
Souveränität + angrenzende regulatorische Überschneidung (Mapping von DORA / NIS2 / sektoral / GDPR). Stakeholder-Interviews über mehrere Geschäftsbereiche. Vendor-Shortlisting, wo zutreffend. Roadmap für die Implementierung in Phase 2.
**Auf Anfrage**

</div>

Festpreis. Einzelne Rechnung. Gegenseitige NDA zum Kickoff. Implementierungskosten Phase 2: Assessment-Honorar wird je nach Umfang angerechnet.

Wir akzeptieren RFI / RFP über die üblichen Beschaffungskanäle in EU-Mitgliedstaaten und Kasachstan; der Discovery-Call klärt die verfahrenstechnische Eignung.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->


<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Beginnen Sie mit einem 30-minütigen Discovery-Call

Kostenlos. Keine Vorbereitung nötig. Wir bestätigen die Eignung, grenzen den Souveränitätsumfang auf Ihre bindenden Regulatoren oder Klauseln ein und sagen Ihnen, ob die 14-tägige oder die 28-tägige Variante zu Ihrer Situation passt.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

Oder lesen Sie mehr:
- **[Datenresidenz-Anforderungen 2026](/de/blog/2026/05/datenresidenz-anforderungen-2026/)** — praktischer Leitfaden
- **[DORA-Compliance für Cloud-Infrastruktur](/de/loesungen/dora-compliance/)** — regulatorisch angrenzender Auslöser
- **[Cloud-Repatriierung](/de/loesungen/cloud-repatriation/)** — wenn Souveränität + Kosten zusammenfallen
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — Engagement-Methodik
- **[Cozystack](/de/produkte/cozystack/)** — souverän-per-Architektur-Plattform

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Aenix ist das Unternehmen hinter Cozystack — einem CNCF-Projekt, einer Kubernetes Certified Distribution, OpenSSF Best Practices. Wir führen Datensouveränitäts-Engagements und Platform-Engineering-Programme für Banken, Versicherer, Organisationen des öffentlichen Sektors und Betreiber kritischer Infrastruktur in der gesamten EU, der DACH-Region und Zentralasien durch.*

<!-- /BLOCK 12 -->

---
