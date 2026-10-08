---
title: "Datensouveränität für Cloud-Infrastruktur — nachweisbare Jurisdiktionskontrolle"
seo_title: "Datensouveränität für Cloud-Infrastruktur"
primary_keyword: "Datensouveränität Cloud-Infrastruktur"
description: "Belegen Sie, wo jede Datenklasse liegt, wer die Schlüssel hält und welche Lieferanten hinter Ihrer Cloud stehen. Festpreis-Projekt für DORA, NIS2 und DSGVO."
type: "page"
related_pages:
  - /de/loesungen/dora-compliance/
  - /de/loesungen/cloud-repatriation/
  - /de/loesungen/sovereign-ai/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/public-cloud-platform/
  - /de/produkte/cozystack/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /solutions/data-sovereignty/
direct_answer: |
  **Datensouveränität für Cloud-Infrastruktur bedeutet, mit Belegen nachzuweisen, dass Daten auf jeder Schicht in der vom Regulator verlangten Jurisdiktion liegen — Produktionsspeicher, Replikate, Backups, Observability und CI/CD-Artefakte —, dass der Dateneigentümer die Schlüsselverwahrung erklären kann und dass Lieferantenabhängigkeiten über die erste Stufe hinaus transparent sind. Das ist die operative Anforderung hinter DORA, NIS2, DSGVO, branchenspezifischen Regeln zur Datenresidenz und den Souveränitätsvorgaben der EU-Mitgliedstaaten für Cloud. Ænix führt ein strukturiertes Projekt durch, das erfasst, wo jede Datenklasse tatsächlich liegt, Lücken benennt und Sovereignty-by-Design für regulierte Organisationen festlegt. Ænix hat Cozystack initiiert, ein CNCF-Sandbox-Projekt unter Apache 2.0, das auf der vom Kunden gewählten Hardware in der gewählten Jurisdiktion läuft, wobei der Kunde den Zugriff auf Cluster-Ebene hält — so wird Souveränität strukturell statt nur vertraglich.**
quick_facts:
  - label: "Was es ist"
    value: "Ein strukturiertes Projekt, das eine Souveränitätsposition von der Behauptung zu einer nachweisbaren Architektur über alle Datenschichten führt"
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU/Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung)"
  - label: "Für wen"
    value: "Banken, Versicherer, öffentliche und öffentlich-nahe Einrichtungen, Gesundheitswesen, Telekommunikation und Betreiber kritischer Infrastruktur sowie multinationale Unternehmen mit Pflichten zur Datenlokalisierung"
  - label: "Zeitplan"
    value: "14 Tage mit fokussiertem Umfang oder 28 Tage für volle Souveränität plus angrenzende regulatorische Überschneidungen; Festpreis, eine Rechnung, gegenseitige Geheimhaltungsvereinbarung zum Kick-off"
  - label: "Abgedeckte Regelwerke"
    value: "DORA, NIS2, DSGVO, branchenspezifische Regeln zur Datenresidenz sowie Souveränitätsvorgaben für Cloud in EU-Mitgliedstaaten und außerhalb der EU"
  - label: "Geliefert von"
    value: "Ænix-Ingenieuren (Engineering-Teams in der EU und in Zentralasien; EU-Verträge über die AENIX s.r.o., Tschechien), ohne kommerzielle Bindung an einen Hyperscaler"
faq:
  - q: "Ist Datensouveränität dasselbe wie Datenresidenz?"
    a: "Nein. Datenresidenz ist notwendig, aber nicht hinreichend. Souveränität verlangt außerdem Kontrolle über die Verschlüsselungsschlüssel, Transparenz der Lieferkette über die erste Stufe hinaus, Prüfbereitschaft und betriebliche Unabhängigkeit von einem einzelnen Anbieter. Ein Workload kann in der richtigen Region liegen und den Souveränitätstest trotzdem nicht bestehen."
  - q: "Müssen wir vollständig On-Premises gehen, um souverän zu sein?"
    a: "Nicht unbedingt. Die richtige Antwort hängt von der Datenklasse, dem Regulator und den betrieblichen Gegebenheiten ab. Manche Workloads erreichen Souveränität mit Einschränkungen in Sovereign-Cloud-Angeboten der Hyperscaler; andere brauchen dedizierte Infrastruktur unter Kontrolle des Kunden. Das Projekt klärt das für jede Datenklasse."
  - q: "Worin unterscheidet sich das von einem Souveränitäts-Assessment der Big Four?"
    a: "Big-Four-Beratung wird meist von Managementberatern geliefert, an ein separates Umsetzungsteam übergeben und ist von den Hyperscaler-Partnerschaften der Firma geprägt. Bei Ænix übernehmen Ingenieure Assessment und Umsetzung, ohne kommerzielle Bindung an einen Anbieter — der Bericht empfiehlt, was sich unter Ihrer Governance nachweisen und betreiben lässt."
  - q: "Was liefert das Projekt?"
    a: "Eine Datenresidenz-Karte pro Datenklasse (Produktion, Backup, Observability, CI/CD), eine Prüfung von Verschlüsselung und Schlüsselverwahrung, eine Lieferketten-Karte bis zur zweiten Stufe, eine Bewertung der Prüfbereitschaft und einen Maßnahmenplan auf Architekturebene mit Aufwandsschätzungen, abgestimmt auf regulatorische Fristen."
  - q: "Warum hilft Cozystack bei der Datensouveränität?"
    a: "Cozystack ist ein CNCF-Projekt unter Apache 2.0, das KubeVirt-VMs und Container über eine Kubernetes-API auf der vom Kunden gewählten Hardware in der gewählten Jurisdiktion betreibt; den Zugriff auf Cluster-Ebene hält der Kunde. Volume-Verschlüsselung (LUKS auf LINSTOR) lässt sich pro Storage Class optional aktivieren; das Schlüsselmanagement legen wir beim Aufbau gemeinsam mit Ihnen fest. Es gibt keine Lizenzkosten pro Core und keine Anbieterbindung — Souveränität ist damit strukturell statt nur vertraglich."
  - q: "Können wir das über ein öffentliches Vergabeverfahren abwickeln?"
    a: "Ja. Ænix nimmt RFI und RFP über die üblichen Beschaffungskanäle an; EU-Verträge laufen über die AENIX s.r.o. (Tschechien), die nach ISO/IEC 27001:2022 zertifiziert ist. Das 30-minütige Discovery-Gespräch klärt die verfahrensrechtliche Eignung und bestätigt, ob die 14- oder die 28-tägige Variante zu Ihrer Situation passt."
---

<!-- BLOCK 1: HERO -->

**Datensouveränität ist keine Beschaffungsklausel mehr, sondern eine operative Anforderung: mit Belegen nachzuweisen, dass Ihre Daten dort liegen, wo der Regulator es vorschreibt — auf jeder Schicht und nicht nur in der Produktion.**

Ænix führt ein strukturiertes Projekt durch, das auf Ebene einzelner Kontrollen kartiert, wo Ihre Daten heute tatsächlich liegen, wo die Lücken sind und wie Sovereignty-by-Design für Ihren Stack aussieht.

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** für regulierte Unternehmen, die souveräne Cloud intern nutzen, oder **[Public Cloud Platform](/de/produkte/public-cloud-platform/)** für Betreiber, die sie als Produkt anbieten — Ihre Hardware, Ihre Jurisdiktion, optional aktivierbare Volume-Verschlüsselung, auf Wunsch Air-Gap-Installation.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/datenresidenz-anforderungen-2026/">Leitfaden lesen →</a>
</div>

<div class="trust-badges">
ISO/IEC 27001:2022 (AENIX s.r.o.) · Plattform unter Apache 2.0 · Schriftliche Ergebnisse · Gegenseitige Geheimhaltungsvereinbarung zum Kick-off
</div>


<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO THIS IS FOR -->

## Wer ein Problem mit Datensouveränität hat

Der Druck zur Datensouveränität klingt je nach Rolle unterschiedlich, die zugrunde liegende Einschränkung ist aber dieselbe.

- **Banken und Versicherer** unter DORA oder sektoraler Aufsicht, mit Pflichten zu Konzentrationsrisiko und Datenresidenz.
- **Öffentliche und öffentlich-nahe Organisationen**, für die Vergabevorgaben souveräne Cloud verlangen (EU-Mitgliedstaaten, Kasachstan, mehrere Jurisdiktionen im asiatisch-pazifischen Raum).
- **Betreiber im Gesundheitswesen und in den Life Sciences** mit Residenzregeln für Patientendaten nach nationalen Gesundheitsdatengesetzen.
- **Telekommunikationsunternehmen und Betreiber kritischer Infrastruktur** unter NIS2 mit branchenspezifischen Regeln für den Umgang mit Daten.
- **Multinationale Unternehmen** mit Pflichten zur Datenlokalisierung, die von Land zu Land variieren (Indien, China, Russland, Brasilien, mehrere EU-Mitgliedstaaten).
- **KI- und Analytik-Teams**, die mit sensiblen Datenklassen arbeiten, die nicht von Modellanbietern außerhalb der EU verarbeitet werden dürfen.

Wenn Sie einen konkreten Regulator, eine Branchenregel oder eine Vergabeklausel benennen können, die das Thema für Ihr Team ausgelöst hat — dann ist dieses Projekt genau für Ihre Situation gemacht.

> **Sie lesen als CISO?** Der [CISO-Leitfaden](/de/fuer/ciso/) fasst zusammen, was die Plattform leistet und was nicht, und die [DSGVO-Nachweise](/de/compliance/dsgvo/) dokumentieren Verschlüsselung und Schlüsselmanagement so, wie sie ausgeliefert werden. Die AENIX s.r.o. ist für ihr eigenes ISMS nach ISO/IEC 27001:2022 zertifiziert ([Zertifikat](/de/compliance/iso-27001/)).

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT SOVEREIGNTY ACTUALLY REQUIRES -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Was „Datensouveränität“ tatsächlich von Ihrer Architektur verlangt

<div class="grid-2x2">

**1. Nachweisbare Datenresidenz auf jeder Schicht**
Der Produktionsspeicher ist der einfache Teil. Backups, Observability-Daten, CI/CD-Artefakte und die Telemetrie von Managed Services verlassen häufig den Geltungsbereich des Regulators, ohne dass es jemand bemerkt. Souveränität gilt für *alle* Schichten, nicht nur für die Produktionsdatenbank.

**2. Verschlüsselung und Schlüsselverwahrung unter Ihrer Kontrolle**
Verschlüsselung allein ist keine Souveränität. Der Dateneigentümer muss erklären können, wer die Schlüssel hält — idealerweise er selbst, nicht der Cloud-Anbieter —, mit dokumentiertem Prozess für Rotation, Notfallzugriff und Prüfung.

**3. Transparenz der Lieferanten bis zur zweiten Stufe**
Hyperscaler laufen auf Rechenzentren und Konnektivitätsanbietern; SaaS-Anbieter laufen auf Hyperscalern; Managed Services hängen von geteilter Infrastruktur ab. Souveränität verlangt, die Kette über die erste Stufe hinaus zu kennen.

**4. Zugang für Prüfung und Aufsicht**
Audit-Trails müssen in Formaten exportierbar sein, die der Regulator verarbeiten kann, nach seinen Vorgaben aufbewahrt werden und Manipulationen erkennbar machen. Die Prozesse für den Zugang der Aufsicht müssen dokumentiert und erprobt sein.

</div>

Praktische Details mit Prüfungen auf Kontrollebene finden Sie unter **[Anforderungen an die Datenresidenz 2026](/de/blog/2026/05/datenresidenz-anforderungen-2026/)**.

</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHERE CURRENT SETUPS FAIL -->

## Woran die meisten Cloud-Setups beim Souveränitätstest scheitern

<div class="gap-cards-2">

**Observability und Telemetrie durchbrechen die Grenze**
Die Produktionsdatenbank liegt in der richtigen Region. Der SaaS-Observability-Stack, der ihre Logs sammelt, verarbeitet sie in US-Regionen, weil dort die Infrastruktur des Anbieters läuft. Der Compliance-Verantwortliche weiß nichts davon.

**Backups sind souverän — bis sie getestet werden**
Die Backup-Ebene liegt in der richtigen Region. Der DR-Test zieht Backups über Regionen hinweg an einen anderen DR-Standort, der sich als Jurisdiktion entpuppt, die die Anforderungen nicht erfüllt. Die Souveränität scheitert unter Belastung.

**Die Verschlüsselungsschlüssel liegen beim Cloud-Anbieter**
Die Standardverschlüsselung sieht auf dem Papier gut aus. Bis der Regulator fragt, wer die Schlüssel kontrolliert — und die Antwort derselbe Anbieter ist, der auch die Daten hält.

**Die Lieferkette ist ab der zweiten Stufe eine Blackbox**
Der Hyperscaler steht im Vertrag. Sein Rechenzentrumsbetreiber, seine Netzwerk-Subunternehmer und die geteilten Plattformdienste stehen nicht darin. Art. 30 Abs. 2 Buchst. a DORA verlangt, dass die Kette der Unterauftragsvergabe im Vertrag beschrieben wird; Art. 21 Abs. 2 Buchst. d NIS2 verlangt, dass die Sicherheit der Lieferkette direkte Lieferanten und Diensteanbieter abdeckt.

</div>

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW AENIX HELPS -->

## Wie Ænix hilft

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Souveränitätsanforderung</b><div class="diagram__chips"><span>Datenresidenz für jede Datenklasse</span><span>Schlüsselverwahrung</span><span>Gewählte Jurisdiktion</span></div></div>
<div class="diagram__conn">erfüllt durch</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>Vom Kunden gewählte Hardware in der gewählten Jurisdiktion</span><span>Optionale Volume-Verschlüsselung</span><span>Zugriff auf Cluster-Ebene</span></div></div>
<div class="diagram__conn">macht sie</div>
<div class="diagram__node"><b>Strukturell statt vertraglich</b><div class="diagram__chips"><span>Prüfbereitschaft</span></div></div>
</div>
</div>

Das Souveränitätsprojekt läuft als Teil unseres **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit dem Arbeitsstrang Souveränität und regulatorische Lücken als Schwerpunkt. Das 14- oder 28-tägige Projekt liefert:

- **Datenresidenz-Karte** — wo jede Datenklasse heute tatsächlich liegt, einschließlich Produktion, Backup, Observability und CI/CD-Artefakten. Jurisdiktion pro Klasse, mit Belegen.
- **Prüfung von Verschlüsselung und Schlüsselverwahrung** — aktueller Stand der Verschlüsselung, Regelungen zur Schlüsselverwahrung, Lücken pro Datenklasse.
- **Lieferketten-Karte bis zur zweiten Stufe** — jede IKT-Drittdienstleistung bis zu den zugrunde liegenden Anbietern und geteilten Abhängigkeiten zurückverfolgt.
- **Bewertung der Prüfbereitschaft** — welche Prozesse für den Zugang der Aufsicht dokumentiert, welche erprobt und welche nicht vorhanden sind.
- **Maßnahmenplan auf Architekturebene** — was in welcher Reihenfolge zu beheben ist, mit Aufwandsschätzungen und abgestimmt auf regulatorische Fristen.

Geliefert von Ænix-Ingenieuren — dem Team, das Cozystack initiiert hat — aus Engineering-Teams in der EU und in Zentralasien, ohne kommerzielle Bindung an einen Hyperscaler. EU-Verträge laufen über die AENIX s.r.o. (Tschechien).

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Warum gerade Ænix

- **Ingenieure, die unter diesen Regeln arbeiten.** Unsere Engineering-Teams sitzen in der EU und in Zentralasien; EU-Verträge laufen über die AENIX s.r.o. (Tschechien). Wir kennen den Unterschied zwischen Souveränität als US-Marketingbegriff und Souveränität, wie sie unter EU-Branchenregeln und Vergabeklauseln der EU-Mitgliedstaaten durchgesetzt wird.
- **Keine Hyperscaler-Bindung.** Souveränitätsberatung der Big Four ist von deren Hyperscaler-Partnerschaften geprägt. Unsere Empfehlungen sind an keinen Cloud-Anbieter kommerziell gebunden — wir empfehlen die Architektur, die die Souveränitätsanforderung tatsächlich erfüllt, auch wenn das vollständig On-Premises bedeutet.
- **Open-Source-Plattform als Fundament.** Wir haben **[Cozystack](/de/produkte/cozystack/)** initiiert und pflegen es gemeinsam mit Maintainern anderer Unternehmen — ein CNCF-Sandbox-Projekt, das auf der von Ihnen gewählten Hardware in der von Ihnen gewählten Jurisdiktion läuft, mit Zugriff auf Cluster-Ebene bei Ihnen. Souveränität ist strukturell, nicht vertraglich.

<!-- /BLOCK 6 -->

---

{{< factoid number="14 Tage" label="von der Souveränitätsbehauptung zu einer nachweisbaren Datenresidenz-Karte, einer Prüfung der Schlüsselverwahrung und einem Maßnahmenplan" >}}

---

<!-- BLOCK 7: TIMELINE -->

## Wie das Projekt abläuft

Tag 0 ist ein kostenloses 30-minütiges Discovery-Gespräch, in dem der Umfang festgelegt wird. An den Tagen 1–13 (bzw. 1–27) laufen vier parallele Arbeitsstränge mit Schwerpunkt auf Souveränität und regulatorischen Lücken, begleitet von täglichen asynchronen Updates und drei Abstimmungsterminen mit dem Sponsor. An Tag 14 (bzw. 28) folgt ein 60- bis 90-minütiger Executive-Readout zum schriftlichen Bericht — Datenresidenz-Karte, Prüfung der Schlüsselverwahrung, Lieferketten-Karte, Prüfbereitschaft und Maßnahmenplan. Die vollständige Methodik Tag für Tag: **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Fallstudien

Neun Projekte sind auf der [Seite mit den Fallstudien](/de/case-studies/) beschrieben, anonymisiert, wo der Kunde es verlangt — darunter eine [Private Cloud in einer Bank](/de/case-studies/private-cloud-in-a-bank/) und eine [souveräne Public Cloud über drei Rechenzentren](/de/case-studies/sovereign-public-cloud/). Referenzgespräche vereinbaren wir unter Geheimhaltung, sofern der Kunde zustimmt.

{{< quote-carousel >}}

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Preise und Projektumfang

Das Souveränitätsprojekt läuft als Platform Readiness Assessment.

<div class="pricing-cards-2">

### 14 Tage (fokussierter Souveränitätsumfang)
Arbeitsstrang Souveränität in der Tiefe, ein regulatorisches Rahmenwerk, ein Bereich. Datenresidenz-Karte, Prüfung der Schlüsselverwahrung, Lieferkette (bis zur zweiten Stufe), Maßnahmenplan.
**Auf Anfrage**

### 28 Tage (volle Souveränität plus angrenzende Themen)
Souveränität plus angrenzende regulatorische Überschneidungen (Abgleich mit DORA / NIS2 / Branchenregeln / DSGVO). Stakeholder-Interviews über mehrere Geschäftsbereiche. Anbieter-Shortlist, wo sinnvoll. Umsetzungs-Roadmap für Phase 2.
**Auf Anfrage**

</div>

Festpreis. Eine Rechnung. Gegenseitige Geheimhaltungsvereinbarung zum Kick-off. Kosten der Umsetzung in Phase 2: Das Assessment-Honorar wird je nach Umfang angerechnet.

Wir nehmen RFI und RFP über die üblichen Beschaffungskanäle an; EU-Verträge laufen über die AENIX s.r.o. (Tschechien). Das Discovery-Gespräch klärt die verfahrensrechtliche Eignung.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->


<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Beginnen Sie mit einem 30-minütigen Discovery-Gespräch

Wir prüfen die Passung, grenzen den Umfang auf die Regulatoren oder Vergabeklauseln ein, die Sie binden, und benennen die passende Variante — 14 oder 28 Tage.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

Oder lesen Sie weiter:
- **[Anforderungen an die Datenresidenz 2026](/de/blog/2026/05/datenresidenz-anforderungen-2026/)** — praktischer Leitfaden
- **[DORA-Compliance für Cloud-Infrastruktur](/de/loesungen/dora-compliance/)** — angrenzender regulatorischer Auslöser
- **[Cloud-Repatriation](/de/loesungen/cloud-repatriation/)** — wenn Souveränität und Kosten zusammenfallen
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — Methodik des Projekts
- **[Cozystack](/de/produkte/cozystack/)** — die Plattform, die Souveränität in der Architektur verankert

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Ænix hat Cozystack initiiert — ein CNCF-Sandbox-Projekt, eine CNCF Certified Kubernetes Distribution mit OpenSSF Best Practices — und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Die AENIX s.r.o. ist nach ISO/IEC 27001:2022 zertifiziert.*

<!-- /BLOCK 12 -->
