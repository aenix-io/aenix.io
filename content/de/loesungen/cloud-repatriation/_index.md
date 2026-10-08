---
title: "Cloud Repatriation — Public Cloud verlassen, ohne die Anwendung zu zerbrechen"
seo_title: "Cloud Repatriation: Public Cloud sicher verlassen"
primary_keyword: "Cloud Repatriation"
description: "Die richtigen Workloads aus AWS, Azure oder GCP zurückholen: ehrliches TCO-Modell, Ranking pro Workload und eine betreibbare Zielplattform in 14 oder 28 Tagen."
type: "page"
related_pages:
  - /de/loesungen/cloud-kostenoptimierung/
  - /de/loesungen/data-sovereignty/
  - /de/dienstleistungen/platform-readiness-assessment/
  - /de/produkte/
  - /de/produkte/cozystack/
  - /de/preise/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /solutions/cloud-repatriation/
direct_answer: |
  **Cloud Repatriation bezeichnet die Verlagerung ausgewählter Workloads aus der Public Cloud (AWS, Azure, GCP) in Private-Cloud-, Hybrid- oder On-Premises-Umgebungen — meist, um die Kosten dauerhafter Workloads zu senken, Datensouveränität und regulatorischen Druck (DORA, NIS2, DSGVO) zu bewältigen oder die Wirtschaftlichkeit von KI und Inferenz in den Griff zu bekommen. Ænix führt ein strukturiertes Repatriation-Projekt als Teil des Platform Readiness Assessment durch. Es liefert ein ehrliches TCO-Modell, ein Ranking jedes Workloads nach „jetzt verlagern / später verlagern / bleiben“, eine Zielarchitektur und eine Cutover-Reihenfolge. Ænix hat Cozystack initiiert, ein CNCF-Sandbox-Projekt unter Apache 2.0, das VMs und Container über eine Kubernetes-API vereint; Ænix empfiehlt es typischerweise als Ziel einer Repatriation. Das Projekt liefern Ingenieure ohne kommerzielle Bindung an einen Hyperscaler.**
quick_facts:
  - label: "Was es ist"
    value: "Ein strukturiertes Projekt, das ausgewählte Workloads aus der Public Cloud in Private Cloud, Hybrid oder On-Premises verlagert, ohne die Anwendung zu zerbrechen."
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU/Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung)"
  - label: "Projektdauer"
    value: "14 Tage (fokussiert auf TCO und Repatriation) oder 28 Tage (vollständiges Repatriation-Programm), Festpreis, eine Rechnung"
  - label: "Für wen"
    value: "Organisationen mit siebenstelligen Cloud-Rechnungen, planbaren dauerhaften Workloads, Souveränitätsrisiken oder Egress- und Inferenzkosten bei KI/ML sowie einer internen Platform-Engineering-Funktion"
  - label: "Ergebnisse"
    value: "Ehrliches TCO-Modell, Repatriation-Ranking pro Workload, Zielarchitektur, Cutover-Reihenfolge und Umsetzungs-Roadmap für Phase 2"
  - label: "Zielplattform"
    value: "Cozystack — KubeVirt für VMs und Container über eine Kubernetes-API, Cilium (eBPF) für Networking, LINSTOR/DRBD für Storage, Mandantenfähigkeit über die Tenant-CRD"
faq:
  - q: "Ist Cloud Repatriation dasselbe wie der vollständige Umzug On-Premises?"
    a: "Nein. Repatriation bedeutet meist, einen Teil der Workloads zu verlagern — typischerweise 30–60 %, nämlich die dauerhaften, regulierten oder teuren — in Private Cloud, Hybrid oder On-Premises, während elastische und latenzkritische Workloads in der Public Cloud bleiben. Wer es als Alles-oder-nichts-Entscheidung behandelt, zerstört in der Regel den wirtschaftlichen Business Case."
  - q: "Wie lange dauert eine Cloud Repatriation?"
    a: "Das Ænix-Assessment dauert 14 oder 28 Tage zum Festpreis. Der Umzug selbst hängt von der Größe der Landschaft ab: Ein Bestand mit 100 VMs ist typischerweise in 8–12 Monaten migriert, einer mit 1.000 VMs in 18–24 Monaten, je nach Abhängigkeiten. Die Wirtschaftlichkeit zeigt sich typischerweise nach 9–12 Monaten, wenn Cloud-Commitments auslaufen."
  - q: "Empfiehlt Ænix am Ende einfach Cozystack?"
    a: "Nur wo es passt. Wo Cozystack besser zur Zielarchitektur passt als die Alternative, begründet der Bericht das mit konkret benannten architektonischen Eigenschaften. Wo ein anderer Stack passt — ein Hyperscaler mit besseren Kontrollen, OpenShift oder Standard-Kubernetes auf Standardhardware —, sagt Ænix das. Eine kommerzielle Bindung an einen Hyperscaler gibt es nicht."
  - q: "Was kostet die Zielplattform einer Repatriation?"
    a: "Cozystack selbst steht unter Apache 2.0, ohne Lizenzkosten pro CPU oder Core. Die Ænix Private Cloud Platform und die Ænix AI Platform werden nach einem Platform Readiness Assessment per RFP angeboten. Wenn Sie Cozystack selbst betreiben, beginnen die Support-Stufen bei 1.250 USD pro 10 Nodes und Monat (Basic, jährliche Abrechnung). Siehe die [Preisseite](/de/preise/)."
  - q: "Was, wenn uns reservierte Kapazitäten in der Public Cloud binden?"
    a: "Die Cutover-Planung berücksichtigt die Laufzeiten der Commitments. Das Tempo der Repatriation richtet sich nach dem Ablauf von AWS Reserved Instances, Azure Reservations und Savings Plans, statt dagegen zu arbeiten — Workloads ziehen um, wenn die Commitments auslaufen."
  - q: "Was, wenn unser Team danach keine Private-Cloud-Plattform betreiben kann?"
    a: "Im Assessment werden zwei Wege ausgearbeitet: Ænix betreibt die Plattform im Rahmen eines Managed-Services-Vertrags, oder Ænix baut die Fähigkeiten Ihres Plattform-Teams in einem strukturierten Platform-Engineering-Projekt auf."
---

<!-- BLOCK 1: HERO -->

**Der Broadcom Private Cloud Outlook 2025 — eine Umfrage des Anbieters, der VMware verkauft, also mit entsprechender Vorsicht zu lesen — ergab, dass 69 % der Organisationen Cloud Repatriation prüfen und 53 % Private Cloud für neue Workloads bevorzugen. Die Gründe variieren — ausufernde Kosten, regulatorischer Druck, Datenresidenz für KI, planbare Performance —, die architektonische Arbeit ist aber dieselbe: die richtigen Workloads für den Umzug bestimmen, den Umzug durchführen, ohne die Anwendung zu zerbrechen, und am Ende eine Plattform haben, die Sie tatsächlich betreiben können.**

Ænix übernimmt das technische Projekt, das „wir müssen AWS / Azure / GCP verlassen“ von einer Aussage im Vorstand in einen funktionierenden Plan verwandelt — mit priorisierten Workloads, modellierten Kosten und einer Zielarchitektur, die die Public Cloud nicht auf die falsche Weise nachbaut.

> **Passt zu** der **[Ænix-Plattform](/de/produkte/)**, die zum Ziel passt: **[Private Cloud Platform](/de/produkte/private-cloud-platform/)**, wenn Sie die Kapazität für Ihre eigenen Geschäftsbereiche betreiben, **[Public Cloud Platform](/de/produkte/public-cloud-platform/)**, wenn Sie sie weiterverkaufen, **[AI Platform](/de/produkte/ai-platform/)**, wenn die zurückgeholten Workloads GPU-gebunden sind. Kostenloses [Cloud-Repatriation-TCO-Worksheet →](/de/ressourcen/cloud-repatriation-tco-worksheet/). CTOs, die die Entscheidung abwägen: siehe den [CTO-Leitfaden](/de/fuer/cto/).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/reverse-cloud-migration-leitfaden/">Leitfaden lesen →</a>
</div>

<div class="trust-badges">
Keine Hyperscaler-Bindung · Ehrliche TCO-Modellierung · Ingenieure statt Berater · Plattform unter Apache 2.0
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO THIS IS FOR -->

## Für wen sich Repatriation wirklich eignet

Repatriation ist nicht für jeden. Die Teams, die am meisten davon profitieren, haben ein gemeinsames Profil:

- **Hohe Public-Cloud-Rechnungen** — jährliche Ausgaben im siebenstelligen Bereich, und die Kurve bis zur nächsten Verlängerung steigt steiler als der Umsatz.
- **Planbare, dauerhafte Workloads** — nicht die elastischen Lastspitzen, für die Hyperscaler gebaut wurden.
- **Sensible Daten mit Souveränitätsrisiko** — Daten aus Finanzwesen, Gesundheitswesen, öffentlichem Sektor oder regulierten Branchen, die zunehmend regulatorischen Druck auf sich ziehen.
- **KI-/ML-Workloads mit Sorgen um Egress- und Inferenzkosten** — Model Serving und Training, bei denen die Hyperscaler-Ökonomie im großen Maßstab nicht mehr aufgeht.
- **Eine interne Platform-Engineering-Funktion** (bestehend oder im Aufbau) — nach der Repatriation muss jemand die Zielplattform betreiben.

Treffen mindestens drei dieser Punkte zu, verdient Repatriation eine strukturierte Prüfung. Betreibt ein kleines IT-Team nur eine Handvoll Services, lautet die Antwort fast immer: „in der Public Cloud bleiben und die Ausgaben optimieren“.

{{< factoid number="84 %" label="der Finanzdienstleister haben ihre Cloud-Strategie aufgrund regulatorischer Entwicklungen angepasst" source="LSEG Global Cloud Survey 2025" >}}

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: FOUR REASONS TEAMS REPATRIATE IN 2026 -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Vier Gründe, warum Teams 2026 Workloads zurückholen

<div class="grid-2x2">

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg></span>
**1. Planbare Kosten für dauerhafte Workloads**
Die Hyperscaler-Ökonomie belohnt Elastizität. Für Workloads, die rund um die Uhr bei planbarer Auslastung laufen, sind die Stückkosten On-Premises oder in der Private Cloud regelmäßig 30–60 % besser — sobald Egress, ungenutzte Ressourcen und untergenutzte Commitments ehrlich eingerechnet werden.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>
**2. Regulatorischer Druck und Souveränität**
DORA (in Kraft seit Januar 2025), NIS2, DSGVO, branchenspezifische Regeln zur Datenresidenz und Souveränitätsvorgaben in der öffentlichen Beschaffung mehrerer Länder zwingen kritische Workloads zunehmend in eine Umgebung, die die Organisation selbst kontrolliert.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg></span>
**3. KI und Analytik auf sensiblen Daten**
GenAI-, Inferenz- und Analytik-Workloads auf regulierten Datenklassen stehen an zwei Fronten unter Druck: Die Datenverarbeitungsbedingungen der Modellanbieter sind nicht akzeptabel, und die Egress-Kosten der Inferenz machen die Hyperscaler-Ökonomie im großen Maßstab untragbar.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg></span>
**4. Betriebliche und architektonische Kontrolle**
Proprietäre Hyperscaler-Services binden die Architektur an die Roadmap eines einzigen Anbieters. Repatriation gibt dem Plattform-Team die Möglichkeit zurück, die zugrunde liegenden Komponenten selbst zu wählen, weiterzuentwickeln und zu prüfen.

</div>

</div>
</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: WHERE REPATRIATION GOES WRONG -->

## Woran die meisten Repatriation-Projekte scheitern

<div class="gap-cards-2">

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>
**Das TCO-Modell ist Wunschdenken statt ehrlich**
Hardwarekosten sind leicht zu beziffern. Netzwerk, Rechenzentrum, Storage-Tiering, Observability, Identity, Backup, DR und die laufende Platform-Engineering-Kapazität fehlen meist oder werden unterschätzt. Das Ergebnis: Repatriation wirkt günstiger, als sie ist, und enttäuscht den CFO nach 18 Monaten.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></span>
**Die Zielarchitektur wird auf später verschoben**
Workloads landen auf „einem On-Prem-Cluster“, ohne echte Plattform darunter. Das Team baut in schlechterer Form nach, was die Hyperscaler in einem Jahrzehnt entwickelt haben. Self-Service funktioniert nicht mehr, die Geschwindigkeit sinkt, und die Repatriation bekommt die Schuld.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg></span>
**Datengravitation wird als Formalie abgehakt**
„Die Datenbank ziehen wir zuletzt um“ — ohne echten Plan, wie 50 TB Produktionsdaten über das Netzwerk kommen, wie das Cutover-Fenster aussieht, wie der Rollback funktioniert und wo die Backups während des Umzugs liegen.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg></span>
**Der Ausstieg ist vollständig, wo selektiv richtig wäre**
Die meisten Repatriationen sind keine Alles-oder-nichts-Entscheidung. Das richtige Ergebnis sind meist 30–60 % der Workloads On-Premises (die dauerhaften, regulierten oder teuren) und 40–70 % in der Public Cloud (die elastischen, latenzkritischen oder nur beim Hyperscaler verfügbaren). Wer Repatriation als binäre Entscheidung behandelt, zerstört den wirtschaftlichen Business Case.

</div>

Diese Fehlermuster hängen nicht von Cloud-Anbieter, Hersteller oder Zielplattform ab — sie entstehen, wenn Repatriation als Tabellenkalkulation statt als Platform-Engineering-Programm betrieben wird.

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW AENIX HELPS -->

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wie Ænix hilft

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Public Cloud</b><div class="diagram__chips"><span>AWS</span><span>Azure</span><span>GCP</span></div></div>
<div class="diagram__conn">bewertet durch</div>
<div class="diagram__node diagram__node--brand"><b>Platform Readiness Assessment</b><div class="diagram__chips"><span>Ehrliches TCO-Modell</span><span>Workload-Ranking</span><span>Zielarchitektur</span></div></div>
<div class="diagram__conn">jetzt verlagern / später / bleiben</div>
<div class="diagram__node"><b>Private Cloud mit Cozystack</b><div class="diagram__chips"><span>VMs</span><span>Container</span><span>Eine Kubernetes-API</span></div></div>
<div class="diagram__conn">auf</div>
<div class="diagram__node"><b>Eigenes Bare Metal</b><div class="diagram__chips"><span>Private Cloud, Hybrid oder On-Premises</span></div></div>
</div>
</div>

Das Repatriation-Projekt läuft als Teil unseres **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** mit dem Arbeitsstrang Kosten und Cloud-Ausgaben als Schwerpunkt. Das 14- oder 28-tägige Projekt liefert:

- **Ehrliches TCO-Modell** — aktuelle Public-Cloud-Ausgaben (inklusive Egress, untergenutzter Commitments und versteckter Kosten) gegenüber realistischen Zielkosten in Private Cloud oder Hybrid.
- **Repatriation-Ranking der Workloads** — jeder Workload eingestuft als „jetzt verlagern / später verlagern / in der Cloud bleiben“, sortiert nach ROI und Risiko.
- **Zielarchitektur** — wie die Plattform aussieht, auf der die Workloads landen: Compute, Storage, Netzwerk, Identity, Observability, DR und die Platform-Engineering-Funktion, die sie betreibt.
- **Cutover-Reihenfolge** — Repatriation-Wellen, die den Ablauf der Commitments berücksichtigen und Datenbewegungen zwischen den Umgebungen minimieren.
- **Umsetzungs-Roadmap für Phase 2** — was eine von Ænix umgesetzte Phase 2 leisten würde, in welcher Reihenfolge und mit welchem Aufwand.

Geliefert von Ænix-Ingenieuren, die Produktionsplattformen für Service-Provider, eine Bank und KI-Betreiber gebaut haben (siehe die [Fallstudien](/de/case-studies/)). Der Bericht empfiehlt, wofür wir technisch geradestehen können.

</div>
</div>

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: WHY AENIX SPECIFICALLY -->

## Warum gerade Ænix

<div class="advantage-panel">

- **Keine Hyperscaler-Bindung.** Repatriation-Beratung der Big Four ist von deren Hyperscaler-Partnerschaften geprägt. Unsere Empfehlungen sind kommerziell weder an AWS, Azure, GCP noch an einen anderen Anbieter gebunden — wir sagen „in der Public Cloud bleiben“, wenn das die Antwort ist, und „vollständig On-Premises“, wenn das die Antwort ist.
- **Ingenieure statt Berater.** Die Ingenieure, die das Repatriation-Projekt durchführen, bauen danach die Produktionsplattformen. Die Aufwandsschätzungen im Bericht sind an Arbeit kalibriert, die wir tatsächlich ausgeliefert haben — nicht an Branchen-Benchmarks.
- **Open-Source-Zielplattform.** Wir haben **[Cozystack](/de/produkte/cozystack/)** initiiert und pflegen es gemeinsam mit Maintainern anderer Unternehmen — eine quelloffene, Kubernetes-native Cloud-Plattform (CNCF-Sandbox-Projekt, CNCF Certified Kubernetes Distribution). Wo Cozystack besser zur Zielarchitektur passt als die Alternative, begründet der Bericht das mit konkret benannten architektonischen Eigenschaften. Wo nicht, sagen wir es.

</div>

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: TIMELINE -->

## Wie das Projekt abläuft

Tag 0 ist ein kostenloses 30-minütiges Discovery-Gespräch, in dem der Umfang festgelegt wird. An den Tagen 1–13 (bzw. 1–27) laufen vier parallele Arbeitsstränge mit Schwerpunkt auf Kosten und Cloud-Ausgaben, begleitet von täglichen asynchronen Updates und drei Abstimmungsterminen mit dem Sponsor. An Tag 14 (bzw. 28) folgt ein 60- bis 90-minütiger Executive-Readout zum schriftlichen Bericht — Workload-Ranking, TCO-Modell, Zielarchitektur, Cutover-Reihenfolge und Roadmap für Phase 2. Die vollständige Methodik Tag für Tag: **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: PROOF -->

## Unternehmen, die Plattformen mit Ænix betreiben

{{< clients >}}

Hosting-Anbieter, die die Ænix Public Cloud Platform produktiv betreiben. Projekte mit Bezug zur Repatriation sind auf der [Seite mit den Fallstudien](/de/case-studies/) beschrieben, zum Beispiel ein [Umzug von Proxmox auf Kubernetes auf Bare Metal](/de/case-studies/bare-metal-kubernetes-messaging-saas/) und [GPU-Inferenz auf eigener Hardware](/de/case-studies/bare-metal-gpu-inference/).

{{< quote-carousel >}}

<!-- /BLOCK 8 -->

---

<!-- BLOCK 9: PRICING -->

## Preise und Projektumfang

Das Repatriation-Projekt läuft als Platform Readiness Assessment.

<div class="pricing-cards-2">

### 14 Tage (fokussiert auf TCO und Repatriation)
TCO-Modellierung in der Tiefe, Ranking des Workload-Portfolios, Optionen für die Zielarchitektur, Cutover-Reihenfolge für die Workloads mit höchster Priorität.
**Auf Anfrage**

### 28 Tage (vollständiges Repatriation-Programm)
Zusätzlich Anbieter-Shortlist (Compute / Storage / Netzwerk / Observability), Zuschnitt eines Proof of Concept für 1–2 priorisierte Workloads, Stakeholder-Interviews über mehrere Geschäftsbereiche, vollständige Umsetzungs-Roadmap für Phase 2.
**Auf Anfrage**

</div>

Festpreis. Eine Rechnung. Gegenseitige NDA zum Projektstart. Kosten der Umsetzung in Phase 2: Das Assessment-Honorar wird je nach Umfang angerechnet.

Wir nehmen RFI und RFP über die üblichen Beschaffungskanäle an; EU-Verträge laufen über die AENIX s.r.o. (Tschechien).

<!-- /BLOCK 9 -->

---

<!-- BLOCK 10: FAQ -->


<!-- /BLOCK 10 -->

---

<!-- BLOCK 11: BOTTOM CTA -->

<a id="discovery"></a>
## Beginnen Sie mit einem 30-minütigen Discovery-Gespräch

Wir prüfen die Passung, bestimmen die Workloads, deren Umzug sich lohnt, und benennen die passende Variante — 14 oder 28 Tage.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

Oder lesen Sie weiter:
- **[Leitfaden zur Reverse Cloud Migration](/de/blog/2026/05/reverse-cloud-migration-leitfaden/)** — der ausführliche Leitfaden
- **[Cloud-Kostenoptimierung](/de/loesungen/cloud-kostenoptimierung/)** — der angrenzende FinOps-Auslöser
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — die Methodik des Projekts
- **[Cozystack](/de/produkte/cozystack/)** — die Plattform, die wir typischerweise als Ziel einer Repatriation empfehlen

<!-- /BLOCK 11 -->

---

<!-- BLOCK 12: FOOTER TRUST STRIP -->

*Ænix hat Cozystack initiiert — ein CNCF-Sandbox-Projekt, eine CNCF Certified Kubernetes Distribution mit OpenSSF Best Practices — und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Wir führen Repatriation-Projekte und Platform-Engineering-Programme durch.*

<!-- /BLOCK 12 -->
