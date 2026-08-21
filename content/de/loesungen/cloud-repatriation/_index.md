---
title: "Cloud Repatriation — Public Cloud verlassen, ohne die Anwendung zu zerbrechen"
description: "Der Broadcom Private Cloud Outlook 2025 fand heraus, dass 69% der Organisationen Cloud Repatriation evaluieren und 53% Private Cloud für neue Workloads..."
type: "page"
related_pages: ["/de/loesungen/cloud-kostenoptimierung", "/de/produkte/private-cloud"]
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /solutions/cloud-repatriation/
direct_answer: |
  **Cloud Repatriation bezeichnet die geplante Rückführung von Workloads aus Public Clouds (AWS, Azure, GCP) in eine eigene Private-Cloud- oder On-Premises-Umgebung. Sie richtet sich an Organisationen, die Kostenexplosion, Regulatordruck, KI-Datenresidenz oder vorhersagbare Performance adressieren müssen — laut Broadcom Private Cloud Outlook 2025 evaluieren 69% der Organisationen Repatriation. Aenix führt das technische Engagement durch, das eine Vorstandsaussage in einen umsetzbaren Plan mit benannten Workloads, modellierten Kosten und einer Zielarchitektur verwandelt. Die Zielplattform ist Cozystack, das offene (Apache 2.0), CNCF-basierte Fundament, das KubeVirt-VMs und Container über eine einzige Kubernetes-API betreibt.**

quick_facts:
  - label: "Was es ist"
    value: "Geplante Rückführung von Workloads aus Public Clouds in eine eigene Private-Cloud- oder On-Premises-Umgebung, mit benannten Workloads, modellierten Kosten und Zielarchitektur"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Organisationen mit hohen Public-Cloud-Rechnungen, vorhersagbaren Steady-State-Workloads, Souveränitäts-Anforderungen oder KI/ML-Egress- und Inferenz-Kostenproblemen"
  - label: "Zielplattform"
    value: "Cozystack betreibt KubeVirt-VMs und Container über eine Kubernetes-API; Cilium (eBPF) Networking, LINSTOR/DRBD Storage, Tenant-CRD-Mandantenfähigkeit"
  - label: "Marktkontext"
    value: "Broadcom Private Cloud Outlook 2025: 69% evaluieren Repatriation, 53% priorisieren Private Cloud für neue Workloads"
  - label: "Engagement"
    value: "Ænix Platform (produktisiert) plus Services; Preisstufen Basic 1.250 $/Mon. (10 Nodes), Standard 3.000 $, Plus 5.500 $, Enterprise Custom"

faq:
  - q: "Was ist Cloud Repatriation?"
    a: "Cloud Repatriation ist die geplante Rückführung von Workloads aus Public Clouds wie AWS, Azure oder GCP zurück in eine eigene Private-Cloud- oder On-Premises-Umgebung. Treiber sind typischerweise Kostenexplosion, Regulatordruck, KI-Datenresidenz und der Bedarf an vorhersagbarer Performance bei Steady-State-Workloads."
  - q: "Welche Workloads eignen sich für Repatriation?"
    a: "Am besten eignen sich vorhersagbare Steady-State-Workloads, Systeme mit hohen Public-Cloud-Rechnungen, sensible Daten mit Souveränitäts-Anforderungen sowie KI/ML-Workloads, die unter Egress- und Inferenz-Kosten leiden. Bursty oder selten genutzte Workloads bleiben oft besser in der Public Cloud."
  - q: "Auf welche Plattform migriert Aenix die Workloads?"
    a: "Aenix migriert auf Cozystack, ein CNCF-Sandbox-Projekt unter Apache-2.0-Lizenz. Cozystack betreibt VMs (via KubeVirt) und Container über eine einzige Kubernetes-API, mit Cilium (eBPF) für Networking, LINSTOR/DRBD für Storage und Tenant-CRD-basierter Mandantenfähigkeit. Die produktisierte Variante ist die Ænix Platform."
  - q: "Wie läuft ein Repatriation-Engagement mit Aenix ab?"
    a: "Aenix übersetzt die strategische Entscheidung in einen umsetzbaren Plan: Inventarisierung und Auswahl der zu migrierenden Workloads, Kostenmodellierung gegenüber dem aktuellen Public-Cloud-Setup und Entwurf der Zielarchitektur. Ein kostenloses Cloud-Repatriation-TCO-Worksheet steht für die erste Einschätzung bereit."
  - q: "Welche Edition der Ænix Platform passt zu Repatriation?"
    a: "Jede Ænix Platform Edition unterstützt Repatriation; die Wahl folgt dem Buyer-Profil. Hosting-Anbieter und regionale Clouds wählen die Provider Edition, regulierte Unternehmen die Enterprise Edition, große Betreiber die Provider Edition, Produkt-Engineering-Teams die Developer Self-Service und KI-lastige Umgebungen die AI & GPU."
  - q: "Was kostet die Ænix Platform?"
    a: "Die Ænix Platform kombiniert Produkt und Services in vier Stufen: Basic ab 1.250 $/Monat (bis 10 Nodes), Standard 3.000 $/Monat, Plus 5.500 $/Monat und Enterprise mit individueller Preisgestaltung. Cozystack selbst ist Open Source unter Apache 2.0 ohne CPU- oder Core-basierte Lizenzierung."
---

<!-- BLOCK 1: HERO -->

**Der Broadcom Private Cloud Outlook 2025 fand heraus, dass 69% der Organisationen Cloud Repatriation evaluieren und 53% inzwischen Private Cloud für neue Workloads priorisieren. Die Gründe variieren — ausufernde Kosten, Regulatordruck, KI-Datenresidenz, vorhersagbare Performance — aber die architektonische Arbeit ist dieselbe: die richtigen Workloads für den Umzug identifizieren, den Umzug durchführen, ohne die Anwendung zu zerbrechen, und am Ende eine Plattform haben, die Sie tatsächlich betreiben können.**

Aenix übernimmt das technische Engagement, das "wir müssen AWS / Azure / GCP verlassen" von einer Vorstandsaussage in einen funktionierenden Plan verwandelt — mit priorisierten Workloads, modellierten Kosten und einer Zielarchitektur, die die Public Cloud nicht auf die falsche Weise neu erfindet.

> **Passt zu:** jeder **[Ænix Platform Edition](/de/produkte/aenix-platform/)** — die richtige Edition folgt Ihrem Buyer-Profil. Hosting-Anbieter / regionale Clouds: [Provider Edition](/de/produkte/aenix-platform/provider-edition/). Regulierte Unternehmen: [Enterprise Edition](/de/produkte/aenix-platform/enterprise-edition/). Große Betreiber: [Provider Edition](/de/produkte/aenix-platform/public-cloud-edition/). Produkt-Engineering-Teams: [Developer Self-Service](/de/produkte/aenix-platform/idp-edition/). KI-lastig: [AI & GPU](/de/produkte/aenix-platform/ai-ml-edition/). Kostenloses [Cloud-Repatriation-TCO-Worksheet →](/de/ressourcen/cloud-repatriation-tco-worksheet/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/blog/2026/05/reverse-cloud-migration-leitfaden/">Repatriation-Leitfaden lesen →</a>
</div>


<div class="trust-badges">
Keine Hyperscaler-Voreingenommenheit · Ehrliche TCO-Modellierung · Ingenieure, keine Berater · Apache-2.0-Plattform
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO THIS IS FOR -->

## Für wen sich Repatriation wirklich eignet

Repatriation ist nicht für jeden. Die Teams, die am meisten von einem strukturierten Cloud-Repatriation-Engagement profitieren, teilen ein gemeinsames Profil:

- **Hohe Public-Cloud-Rechnungen** — jährliche Ausgaben im siebenstelligen Bereich, wobei die Verlängerungskurve steiler ist als der Umsatz.
- **Vorhersagbare Steady-State-Workloads** — nicht die elastischen Spitzen-Workloads, für die Hyperscaler entworfen wurden.
- **Sensible Daten mit Souveränitäts-Exposition** — Daten aus Finanzwesen, Gesundheitssektor, öffentlichem Sektor oder regulierten Branchen, die zunehmend Regulatordruck auf sich ziehen.
- **KI-/ML-Workloads mit Egress- und Inferenz-Kostenbedenken** — Model-Serving und Training, bei denen die Hyperscaler-Ökonomie im großen Maßstab nicht mehr aufgeht.
- **Eine interne Plattform-Engineering-Funktion** (oder eine im Aufbau befindliche) — Repatriation erfordert jemanden, der die Zielplattform danach betreibt.

Wenn Ihre Situation mindestens drei dieser Punkte erfüllt, verdient Repatriation einen strukturierten Blick. Wenn Sie ein kleines IT-Team haben, das eine Handvoll Services betreibt, lautet die Antwort fast immer "in der Public Cloud bleiben und die Ausgaben optimieren".

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: FOUR REASONS TEAMS REPATRIATE IN 2026 -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Vier Gründe, warum Teams 2026 repatriieren

<div class="grid-2x2">

**1. Vorhersagbare Kosten bei Steady-State-Workloads**
Die Hyperscaler-Ökonomie belohnt Elastizität. Für Workloads, die rund um die Uhr bei vorhersagbarer Auslastung laufen, ist die Stückkostenrechnung on-prem oder in der Private Cloud regelmäßig 30-60% besser — sobald Egress, ungenutzte Ressourcen und unterausgelastete Verpflichtungen ehrlich einkalkuliert werden.

**2. Regulatorischer und Souveränitäts-Druck**
DORA (in Kraft seit Januar 2025), NIS2, DSGVO, sektorale Datenresidenz-Regeln und beschaffungsgetriebene Souveränitätsvorgaben (EU-Mitgliedstaaten, Kasachstan und andere) zwingen kritische Workloads zunehmend in die eigene Umgebung des Finanzunternehmens.

**3. KI und Analytics auf sensiblen Daten**
GenAI-, Inferenz- und Analytics-Workloads gegen regulierte Datenklassen stehen unter Druck an zwei Fronten: Die Datenverarbeitungsbedingungen der Model-Anbieter sind nicht akzeptabel, und die Egress-Kosten der Inferenz machen die Hyperscaler-Ökonomie im großen Maßstab unbrauchbar.

**4. Operative und architektonische Kontrolle**
Proprietäre Hyperscaler-Services binden die Architektur an die Roadmap eines einzigen Anbieters. Repatriation gibt dem Plattform-Team die Fähigkeit zurück, die zugrunde liegenden Komponenten zu wählen, weiterzuentwickeln und zu auditieren.

</div>

Der Broadcom Private Cloud Outlook 2025 hat die Verschiebung quantifiziert: **69% der Organisationen evaluieren Repatriation; 53% priorisieren Private Cloud für neue Workloads.** Die LSEG Global Cloud Survey 2025 ergab, dass **84% der Finanzdienstleister ihre Cloud-Strategie aufgrund regulatorischer Entwicklungen angepasst haben.**

</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHERE REPATRIATION GOES WRONG -->

## Wo die meisten Repatriation-Projekte scheitern

<div class="gap-cards-2">

**Das TCO-Modell ist Wunschdenken, nicht ehrlich**
Hardwarekosten sind einfach. Netzwerk, Rechenzentrum, Storage-Tiering, Observability, Identity, Backup, DR, laufende Plattform-Engineering-Kapazität — meist fehlend oder unterschätzt. Das Ergebnis: Repatriation wirkt günstiger, als sie ist, und enttäuscht dann nach 18 Monaten den CFO.

**Die Zielarchitektur wird auf später verschoben**
Workloads werden auf "einen On-Prem-Cluster" verschoben, ohne eine echte Plattform darunter. Das Team baut in schlechterer Form nach, was Hyperscaler ein Jahrzehnt lang entwickelt haben. Self-Service bricht. Die Geschwindigkeit sinkt. Repatriation bekommt die Schuld.

**Datengravitation wird als Häkchen behandelt**
"Die Datenbank zuletzt verschieben" — ohne einen echten Plan dafür, wie 50 TB Produktionsdaten das Netzwerk überqueren, wie das Cutover-Fenster aussieht, wie der Rollback-Pfad funktioniert und wo während des Umzugs die Backups liegen.

**Der Exit ist vollumfänglich, wenn selektiv die richtige Antwort ist**
Die meisten Repatriationen sind nicht alles-oder-nichts. Das richtige Ergebnis sind meist 30-60% der Workloads on-prem (die Steady-State-, regulierten oder teuren) und 40-70% verbleiben in der Public Cloud (die elastischen, latenzsensitiven oder Hyperscaler-exklusiven). Repatriation als binäre Entscheidung zu behandeln, zerstört den ökonomischen Business Case.

</div>

Diese Fehler sind unabhängig von Cloud-Anbieter, Vendor oder Zielplattform. Es sind die vorhersehbaren Fehlermodi einer Repatriation, die als Tabellenkalkulations-Übung statt als Plattform-Engineering-Programm durchgeführt wird.

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW AENIX HELPS -->

## Wie Aenix hilft

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Workloads in Public Cloud</b><div class="diagram__chips"><span>AWS, Azure, GCP</span></div></div>
<div class="diagram__conn">geordnet nach ROI und Risiko</div>
<div class="diagram__node"><b>Workload-Repatriation-Ranking</b><div class="diagram__chips"><span>jetzt repatriieren / später repatriieren / in der Cloud bleiben</span></div></div>
<div class="diagram__conn">migriert auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt-VMs und Container, Cilium (eBPF), LINSTOR/DRBD</span></div></div>
</div>
</div>

Das Repatriation-Engagement läuft als Teil unseres **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**, mit dem Kosten- und Cloud-Ausgaben-Workstream als primärem Fokus. Das 14- oder 28-tägige Engagement liefert:

- **Ehrliches TCO-Modell** — aktuelle Public-Cloud-Ausgaben (inkl. Egress, Unterauslastung von Verpflichtungen, versteckte Kosten) gegenüber realistischen Zielkosten in Private Cloud oder Hybrid.
- **Workload-Repatriation-Ranking** — jeder Workload klassifiziert als "jetzt repatriieren / später repatriieren / in der Cloud bleiben", geordnet nach ROI und Risiko.
- **Zielarchitektur** — wie die Plattform aussieht, auf der die Workloads landen, einschließlich Compute, Storage, Netzwerk, Identity, Observability, DR und der Plattform-Engineering-Funktion, die sie betreibt.
- **Cutover-Sequenzierung** — Repatriation-Kohorten, die den Ablauf von Verpflichtungen respektieren und die Datenbewegung zwischen Umgebungen minimieren.
- **Implementierungs-Roadmap für Phase 2** — was eine von Aenix gelieferte Phase 2 tun würde, in welcher Reihenfolge, mit Aufwandsschätzungen.

Geliefert von Aenix-Ingenieuren, die Produktionsplattformen für Service-Provider, Banken und KI-Betreiber in der EU und Zentralasien gebaut und betrieben haben. Wir sind kommerziell mit keinem Hyperscaler verbunden, und die Ausrichtung des Berichts folgt dem, wofür wir technisch geradestehen können.

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Warum gerade Aenix

- **Keine Hyperscaler-Voreingenommenheit.** Repatriation-Beratung von Big-4-Beratungshäusern ist von deren Hyperscaler-Partnerschaften geprägt. Unsere Empfehlungen sind kommerziell nicht an AWS, Azure, GCP oder einen einzelnen Anbieter gebunden — wir sagen "in der Public Cloud bleiben", wenn das die Antwort ist, und wir sagen "vollständig on-prem", wenn das die Antwort ist.
- **Ingenieure, keine Berater.** Die Ingenieure, die das Repatriation-Engagement durchführen, bauen die Produktionsplattformen anschließend selbst. Die Aufwandsschätzungen für die Implementierung im Bericht sind an Arbeit kalibriert, die wir tatsächlich ausgeliefert haben — nicht an Branchen-Benchmarks.
- **Open-Source-Zielplattform.** Wir sind das Unternehmen hinter **[Cozystack](/de/produkte/cozystack/)** — einer Open-Source-, Kubernetes-nativen Cloud-Plattform (CNCF Project, Kubernetes Certified Distribution). Wo Cozystack die Zielarchitektur besser trifft als die Alternative, erklärt der Bericht warum, mit benannten architektonischen Eigenschaften. Wo nicht, sagen wir es.

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## Wie das Engagement abläuft

| Wann | Was | Ergebnis |
|---|---|---|
| **Tag 0** | 30-minütiger Discovery-Call (kostenlos) | Eignung bestätigen, Kostenbedenken + Workload-Portfolio + Sponsor identifizieren |
| **Tage 1-13 (oder 1-27)** | Vier parallele Workstreams; Kosten- und Cloud-Ausgaben-Workstream betont | TCO-Modellierung, Workload-Klassifizierung, Zielarchitektur, tägliche asynchrone Updates |
| **Tag 14 (oder 28)** | Executive-Readout (60-90 Min.) | Schriftlicher Bericht: Workload-Ranking, TCO-Modell, Zielarchitektur, Cutover-Sequenzierung, Phase-2-Roadmap |

Zur vollständigen Methodik siehe **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Repatriation-Projekte, die wir begleitet haben

{{< clients >}}

Wir haben Cloud-Repatriation-Engagements für Service-Provider, Finanzdienstleister, Telekommunikationsbetreiber und KI-/GPU-Plattformen in der EU, der DACH-Region und Zentralasien durchgeführt. Die verschobenen Workloads reichten von Steady-State-Produktionsdatenbanken bis zu KI-Inferenz-Clustern; die Ergebnisse reichten von vollständig on-prem bis zu selektivem Hybrid.

{{< quote-carousel >}}
> *— {{NAME_1}}, {{TITLE_1}}*

Benannte Case Studies sind im Discovery-Call verfügbar, sofern die Kundenfreigaben es erlauben.

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Preise und Engagement-Umfang

Das repatriation-fokussierte Engagement läuft als Platform Readiness Assessment.

<div class="pricing-cards-2">

### 14 Tage (fokussiert auf TCO + Repatriation)
Tiefe der TCO-Modellierung, Ranking des Workload-Portfolios, Optionen für die Zielarchitektur, Cutover-Sequenzierung für die Workloads mit höchster Priorität.
**Auf Anfrage**

### 28 Tage (vollständiges Repatriation-Programm)
Ergänzt um Vendor-Shortlisting (Compute / Storage / Netzwerk / Observability), Proof-of-Concept-Scoping für 1-2 Prioritäts-Workloads, Stakeholder-Interviews über mehrere Geschäftsbereiche, vollständige Implementierungs-Roadmap für Phase 2.
**Auf Anfrage**

</div>

Festpreis. Eine Rechnung. Gegenseitiges NDA zum Kickoff. Kosten der Phase-2-Implementierung: Assessment-Gebühr wird abhängig vom Umfang angerechnet.

Wir akzeptieren RFI / RFP über die üblichen Beschaffungskanäle in EU-Mitgliedstaaten und Kasachstan.

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->


**Weitere Fragen?** Siehe den **[Reverse-Cloud-Migration-Leitfaden](/de/blog/2026/05/reverse-cloud-migration-leitfaden/)** oder **[sprechen Sie mit uns](#discovery)**.

<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Starten Sie mit einem 30-minütigen Discovery-Call

Kostenlos. Keine Vorbereitung nötig. Wir bestätigen die Eignung, identifizieren Ihre wichtigsten Kostenbedenken und sagen Ihnen, ob die 14-Tage- oder die 28-Tage-Variante zu Ihrer Situation passt.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

Oder lesen Sie weiter:
- **[Reverse-Cloud-Migration-Leitfaden](/de/blog/2026/05/reverse-cloud-migration-leitfaden/)** — der ausführliche Leitfaden
- **[Cloud-Kostenoptimierung](/de/loesungen/cloud-kostenoptimierung/)** — angrenzender FinOps-Auslöser
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — die Engagement-Methodik
- **[Cozystack](/de/produkte/cozystack/)** — die Plattform, die wir typischerweise als Repatriation-Ziel empfehlen

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Aenix ist das Unternehmen hinter Cozystack — einem CNCF Project, einer Kubernetes Certified Distribution mit OpenSSF Best Practices. Wir führen Cloud-Repatriation-Engagements und Plattform-Engineering-Programme für Service-Provider, Banken, Telekommunikation und KI-Betreiber in der EU, der DACH-Region und Zentralasien durch.*

<!-- /BLOCK 12 -->
