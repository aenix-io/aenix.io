---
title: "K-12-Schulträger-Cloud-Infrastruktur — wenn Souveränität wichtiger ist als Bequemlichkeit"
seo_title: "Cloud-Infrastruktur für Schulträger"
description: "Wann ein Schulträger eine eigene Cloud braucht, wer sie aufbauen und betreiben sollte und welches Tenant-Modell zu Trägern, Schulen und Klassen passt."
date: "2026-05-01"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/de/k12-schultraeger-cloud-infrastruktur.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Cozystack", "Multi-tenancy"]
language: "de"
companion_landing: "/de/branchen/k12-bildung/"
quiz:
  title: "Wissens-Check: K-12-Schulträger-Cloud"
  questions:
    - q: "Welches Infrastrukturthema unterscheidet Schulträger laut Artikel vor allem von Universitäten?"
      options:
        - { text: "Forschungs-Computing und GPU-Kapazität für Lehrstühle", correct: false }
        - { text: "Kubernetes- und Cloud-native-Kompetenzen im Lehrplan", correct: false }
        - { text: "Schutz von Schülerdaten, verteilt auf viele Schulen bei langen Budgetzyklen", correct: true }
      explanation: "Universitäten betreiben Forschungs-Computing und vermitteln oft Cloud-native-Kompetenzen. Schulträger tun beides nicht; im Vordergrund steht der Schutz von Schülerdaten — verteilt auf Zehntausende Schülerinnen und Schüler in vielen Schulen und beschafft in Zyklen von drei bis fünf Jahren."
    - q: "Wer baut und betreibt laut Artikel üblicherweise eine Schul-Cloud, wenn sie gerechtfertigt ist?"
      options:
        - { text: "Die IT jeder einzelnen Schule, mit einem Cluster pro Schule", correct: false }
        - { text: "Ein Shared-Service-Center, ein regionaler Provider oder ein Integrator", correct: true }
        - { text: "Der EdTech-Anbieter, dessen Lernplattform der Schulträger nutzt", correct: false }
      explanation: "Einzelne Schulträger haben selten ein Plattformteam. Realistische Betreiber sind die IT der öffentlichen Hand und Shared-Service-Center, die eine Cloud für die eigenen Schulen betreiben, regionale Cloud- und Hosting-Anbieter, die vielen Trägern eine Bildungs-Cloud anbieten, und Systemintegratoren, die eine Plattform in die Umgebung der Behörde liefern."
    - q: "Wie bildet der Artikel eine Bildungsbehörde auf die Mandantenfähigkeit von Cozystack ab?"
      options:
        - { text: "Verschachtelte Tenants: Behörde, dann Schulträger, dann Schule, dann Klasse oder Projekt", correct: true }
        - { text: "Ein gemeinsamer Namespace für alle Schulen mit Labels je Klasse", correct: false }
        - { text: "Ein eigener physischer Cluster für jede einzelne Schule", correct: false }
      explanation: "Cozystack-Tenants lassen sich verschachteln. Eine Plattform trägt die Behörde als Wurzel, darunter einen Tenant je Schulträger oder Schule und bei Bedarf Tenants für Klassen oder EdTech-Projekte — jeweils mit eigenen Quotas, eigenem RBAC, eigener Network Policy und eigenem Monitoring."
    - q: "Was sagt der Artikel zur Verschlüsselung von Schülerdaten im Ruhezustand?"
      options:
        - { text: "Alle Volumes sind standardmäßig verschlüsselt, die Schlüssel verwaltet Ænix", correct: false }
        - { text: "Volume-Verschlüsselung ist optional je Storage Class, die Passphrase liegt bei der Behörde", correct: true }
        - { text: "Die Verschlüsselung übernimmt ein Hardware-Sicherheitsmodul in jeder Schule", correct: false }
      explanation: "Die Volume-Verschlüsselung (LUKS auf LINSTOR) ist optional je Storage Class und nutzt eine Passphrase, die die Behörde selbst verwaltet. Sie muss beim Design entschieden werden, weil die nachträgliche Umstellung eines befüllten Volumes eine Datenmigration bedeutet."
    - q: "Wann ist eine souveräne Plattform laut Artikel die falsche Antwort für einen Schulträger?"
      options:
        - { text: "Wenn der Schulträger mehr als 10.000 Schülerinnen und Schüler hat", correct: false }
        - { text: "Wenn die Schülerdaten Noten und Anwesenheiten enthalten", correct: false }
        - { text: "Ohne Residenzvorgabe, ohne eigene EdTech-Entwicklung und ohne Betreiber", correct: true }
      explanation: "Ohne Vorgabe zur Datenresidenz, ohne eigene Plattformentwicklung und ohne jemanden, der die Plattform betreibt — selbst oder über ein Shared-Service-Center bzw. einen Provider —, ist ein Schulträger mit Managed SaaS und gängigen EdTech-Werkzeugen besser bedient."
faq:
  - q: "Braucht jeder Schulträger eine eigene Cloud-Plattform?"
    a: "Nein. Die meisten Schulträger sind mit Managed SaaS und gängigen EdTech-Werkzeugen besser bedient. Eine souveräne Plattform ist gerechtfertigt, wenn eine nationale oder regionale Vorschrift verlangt, dass Schülerdaten im Rechtsraum bleiben, wenn sich die Behörde öffentlich auf lokale Datenhaltung festgelegt hat oder wenn sie eine eigene Lern- oder Analyseplattform entwickelt."
  - q: "Wer sollte eine Schul-Cloud betreiben — der Schulträger oder jemand anderes?"
    a: "In der Regel jemand mit einem Plattformteam: ein kommunales oder regionales Shared-Service-Center, das eine Cloud für die eigenen Schulen betreibt, ein regionaler Cloud- oder Hosting-Anbieter, der vielen Trägern eine Bildungs-Cloud anbietet, oder ein Systemintegrator, der die Plattform in die Umgebung der Behörde liefert und übergibt."
  - q: "Wie werden Schulträger, Schulen und Klassen auf einer Plattform voneinander getrennt?"
    a: "Mit verschachtelten Cozystack-Tenants. Die Behörde bildet die Wurzel, jeder Schulträger oder jede Schule erhält einen eigenen Tenant, darunter können Klassen oder EdTech-Projekte eigene Tenants bekommen. Jeder Tenant hat eigene Quotas, eigenes RBAC, eigene Network Policy und eigenes Monitoring; eine Schule verwaltet ihre Ressourcen, ohne die einer anderen Schule zu sehen."
  - q: "Nimmt die Plattform dem Schulträger die DSGVO- oder FERPA-Pflichten ab?"
    a: "Nein. Die Pflichten bleiben beim Schulträger oder bei der Behörde. Die Architektur ist darauf ausgelegt, sie zu unterstützen: Schülerdaten auf Hardware unter Kontrolle der Behörde, optionale Volume-Verschlüsselung mit einer Passphrase, die die Behörde verwaltet, Audit-Logs mit konfigurierbarer Aufbewahrung, die sich in das eigene Archiv der Behörde ausleiten lassen, und Backups auf Speicher unter ihrer Kontrolle."
  - q: "Was kostet das und wie lange dauert es?"
    a: "Cozystack steht unter Apache 2.0, ohne Lizenzkosten pro Core. Ænix Private Cloud Platform wird per RFP angeboten, nach einem Platform Readiness Assessment zum Festpreis über 14 oder 28 Tage; danach folgt je nach Umfang ein Aufbau von 3–12 Monaten. Subscriptions für Ænix Public Cloud Platform, für Provider, die eine Bildungs-Cloud verkaufen, beginnen bei 1.250 USD pro 10 Nodes und Monat bei jährlicher Abrechnung."
hreflang_en: /blog/2026/05/k12-school-district-cloud-infrastructure/
---

Die meisten Schulträger sollten keine eigene Cloud bauen. Sie sind mit Managed SaaS gut bedient und geben ihr knappes IT-Budget besser in den Klassenzimmern aus. Dieser Beitrag handelt von den Ausnahmen — von Schulträgern, Verbünden und Bildungsbehörden, für die eine eigene Plattform die richtige Antwort ist — und von einer Frage, die meist übersprungen wird: Wenn eine Schul-Cloud gerechtfertigt ist, wer baut und betreibt sie dann eigentlich?

Selten der Schulträger selbst — und genau das prägt die Architektur.

## Warum K-12 ein anderes Problem ist als eine Universität

Eine Universität betreibt Forschungs-Computing und GPU-Labore für ihre Lehrstühle und vermittelt immer öfter Cloud-native-Kompetenzen auf echter Infrastruktur — diesen Fall behandelt der Beitrag zu [Cloud-native-Infrastruktur für Forschung und Lehre](/de/blog/2026/05/cloud-native-forschung-lehre-infrastruktur-hochschulen/). Ein Schulträger tut nichts davon.

Was ein Schulträger dagegen hat, sind Schülerdaten, und zwar viele: Anmeldungen, Noten, Anwesenheiten, Angaben zu sonderpädagogischem Förderbedarf — über Minderjährige. Ein großer Schulträger oder eine regionale Behörde betreut zwischen 10.000 und deutlich über 100.000 Schülerinnen und Schüler an Dutzenden oder Hunderten Schulen. Die einzelne Schule hat kaum eigenes IT-Personal oder gar keins. Und das Geld kommt in Beschaffungszyklen von drei bis fünf Jahren, sodass eine Plattformentscheidung mehrere Haushaltsrunden überstehen muss, ohne neu gekauft zu werden.

Datenschutz zuerst, viele kleine Standorte, lange Zyklen: Das ergibt eine andere Architektur als Forschungs-Computing.

## Wann eine souveräne Plattform gerechtfertigt ist

Drei Situationen rechtfertigen sie.

Die erste ist Regulierung. Einige EU-Mitgliedstaaten und einige Rechtsräume außerhalb der EU verlangen, dass Schülerdaten im Land bleiben oder auf Infrastruktur unter Kontrolle der öffentlichen Stelle liegen — auf Grundlage nationaler Datenschutzregeln, die über die DSGVO hinausgehen. In den USA entsteht derselbe Druck durch FERPA und die Schülerdatenschutzgesetze der Bundesstaaten. Wo die Vorschrift eindeutig ist, ist die Frage entschieden.

Die zweite ist eine öffentliche Zusage. Ein Schulträger oder eine Behörde hat Eltern, einem Schulausschuss oder einem Parlament womöglich versprochen, dass Schülerdaten vor Ort bleiben. Das ist kein Gesetz, aber eine Verpflichtung, und sie bindet die Beschaffung genauso fest wie ein Gesetz.

Die dritte ist Eigenentwicklung. Manche Behörden entwickeln ihre Lernplattform, ihr Schulverwaltungssystem oder ihre Analyseschicht selbst, statt sie zu lizenzieren.

Trifft keiner der drei Fälle zu, lautet die ehrliche Empfehlung: Managed SaaS und gängige EdTech-Werkzeuge.

## Wer eine Schul-Cloud tatsächlich aufbaut und betreibt

Ausschreibungsunterlagen sind oft so geschrieben, als würde jeder Schulträger seine Plattform selbst betreiben. Ein Schulträger mit zwei IT-Kräften kann aber keine mandantenfähige Cloud mit Speicherreplikation, Upgrades und Rufbereitschaft betreiben, und er sollte es auch nicht versuchen. In der Praxis ist der Betreiber eine von drei Arten von Organisationen.

### IT der öffentlichen Hand und Shared-Service-Center

Kommunale IT-Dienstleister, Kreis- oder Landesbehörden für Bildung, Kultusministerien und die Shared-Service-Center, die mehrere von ihnen bedienen, betreiben schon heute Infrastruktur für viele Schulen. Für sie ist eine Schul-Cloud eine interne Plattform: Sie betreiben sie für die eigenen Schulträger und Schulen, nicht zum Verkauf. Das ist das Profil der [Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/) — einer Private Cloud für Organisationen, die Cloud für sich selbst betreiben, angeboten per RFP. Die Beschaffungsseite solcher Programme, vom RFI bis zur Ausschreibung, behandelt der Beitrag zur [Vergabe souveräner Clouds im öffentlichen Sektor](/de/blog/2026/05/oeffentlicher-sektor-souveraene-cloud-vergabe/).

### Regionale Cloud- und Hosting-Anbieter

Ein regionaler Provider kann vielen Schulträgern zugleich eine Bildungs-Cloud anbieten, im Land und im Rechtsraum, den diese Träger brauchen. Hier sind die Schulträger Kunden, also braucht der Provider, was eine kommerzielle Cloud braucht: ein Self-Service-Portal in eigener Marke, Abrechnung und einen Katalog von Services, die er tatsächlich betreuen kann. Das ist die [Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/); das Modell mit eigenem Portal beschreibt die Seite zur [White-Label-Cloud](/de/dienstleistungen/white-label-cloud/). White-Labeling selbst ist eine Open-Source-Funktion von Cozystack; die Subscription legt fest, in welchem Umfang Ænix sie unterstützt.

### Systemintegratoren

Integratoren halten oft den Rahmenvertrag der Behörde und brauchen eine Plattform, die sie in deren Umgebung ausrollen, auf der sie ihre Services aufbauen und die sie anschließend übergeben können. Eine veröffentlichte Fallstudie zeigt genau dieses Muster: Ein Integrator hat [auf Cozystack eine unternehmensweite KI-Plattform gebaut und dieselbe Distribution in die Umgebung eines staatlichen Kunden geliefert](/de/case-studies/ai-universal-installer/), wobei die Daten innerhalb der Grenzen des Kunden blieben. Der Kunde dort ist kein Schulsystem, aber das Liefermodell ist dasselbe.

Alle drei betreiben dieselbe Engine — [Cozystack](/de/produkte/cozystack/), das CNCF-Sandbox-Projekt, das Ænix entwickelt hat und mitbetreut und dessen Antrag auf Incubation sich in der Due Diligence befindet. Unterschiedlich ist nur, wer die Kapazität nutzt.

## Die Architektur: eine Plattform, verschachtelte Tenants

Die zentrale Designentscheidung lautet: eine Plattform für die gesamte Behörde, und Schulträger, Schulen und Klassen werden über Mandanten getrennt, nicht über separate Cluster. Getrennte Cluster pro Schule vervielfachen den Betriebsaufwand; ein gemeinsamer Namespace bietet keine echte Isolation.

In Cozystack ist ein Tenant eine Grenze für Quotas, RBAC, Network Policy, Storage und Monitoring, und Tenants lassen sich verschachteln. Die Behörde bildet die Wurzel. Jeder Schulträger — oder bei einem einzelnen Träger jede Schule — erhält einen eigenen Tenant. Unterhalb einer Schule kann eine Klasse, ein Pilotprojekt oder ein eigenes EdTech-Team einen eigenen Tenant bekommen. Eine Schuladministration verwaltet, was im Tenant ihrer Schule liegt, ohne die Nachbarschule zu sehen, und die zentrale IT behält die Kontrolle über die Grenzen. Dieselbe Aufteilung hat Self-Service in einer regulierten Organisation akzeptabel gemacht, nämlich bei der [Private Cloud in einer Bank](/de/case-studies/private-cloud-in-a-bank/): Freiheit innerhalb des Tenants, Kontrolle an seiner Grenze. In diesem Fall wurde die Plattform außerdem an das bereits vorhandene Identitätssystem der Organisation angebunden, statt ein zweites aufzubauen — genau das braucht auch ein Schulsystem.

### Was in den Tenants läuft

Ältere Schulverwaltungssysteme und Windows-basierte Verwaltungsanwendungen laufen als virtuelle Maschinen (KubeVirt) auf derselben Plattform wie Container. Eine Behörde, die ihre eigene Lernplattform entwickelt, stellt ihren Entwicklern Tenant-Kubernetes-Cluster bereit. Managed Services aus dem Katalog — PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse und S3-kompatibler Object Storage — decken die Datenbanken und den Dateispeicher ab, die eine Lernplattform braucht, ohne dass jedes Projekt seine eigenen betreibt. Replizierter Block-Storage auf LINSTOR verhindert, dass ein Plattenausfall in der Prüfungszeit zum Ausfall wird, und Backups landen auf Speicher außerhalb des Clusters, den sie schützen.

Die Konfiguration lässt sich per GitOps deklarieren und abgleichen, sodass hundert Schul-Tenants in einem Repository liegen und nicht im Gedächtnis einzelner Personen. Monitoring und Logs sind enthalten und je Tenant abgegrenzt.

### Schülerdaten: Residenz, Verschlüsselung und Logs

Die Plattform läuft auf Hardware unter Kontrolle der Behörde oder ihres Providers, in dem Rechtsraum, den die Ausschreibung verlangt, und lässt sich bei Bedarf eines Ministeriums vollständig air-gapped installieren und aktualisieren.

Die Volume-Verschlüsselung im Ruhezustand ist optional je Storage Class und nutzt LUKS auf LINSTOR mit einer Passphrase, die die Behörde selbst verwaltet. Entscheiden Sie das beim Design: Ein befülltes Volume nachträglich umzustellen, bedeutet eine Datenmigration. Audit-Logs haben eine konfigurierbare Aufbewahrungsdauer (standardmäßig 30 Tage) und lassen sich an das SIEM der Behörde oder in ein unveränderliches Archiv unter ihrer Kontrolle ausleiten. Die [DSGVO-Nachweisseite](/de/compliance/dsgvo/) beschreibt offen, was die Plattform leistet und was bei Ihnen bleibt — das Löschen aus Backups etwa ist eine Aufbewahrungsregel, die Sie dokumentieren, kein Schalter.

Die Pflichten aus DSGVO und FERPA bleiben beim Schulträger oder bei der Behörde; die Plattform ist darauf ausgelegt, sie zu unterstützen, nicht, sie abzunehmen.

### KI und Analytik auf Schülerdaten

Lernanalytik und KI-Assistenten sind die Stellen, an denen Schülerdaten am leichtesten zu einem externen Endpunkt abwandern; laufen sie lokal, bleiben die Daten, wo sie sind. In Tenant-Kubernetes-Clustern stellt der NVIDIA GPU Operator auf MIG-fähigen Karten MIG-Partitionen bereit, und HAMi ermöglicht zeitlich geteilte Nutzung (Time-Slicing). Virtuelle Maschinen erhalten ganze GPUs per Passthrough oder NVIDIA vGPU mit der eigenen NVIDIA-vGPU-Lizenz der Behörde. Die GPU-Nutzung wird je Tenant gemessen, was zählt, wenn sich mehrere Schulträger die Hardware teilen. Die [Ænix AI Platform](/de/produkte/ai-platform/) nutzt dieselben Tenant-Grenzen.

## Verbünde: gemeinsamer Kern, Isolation je Schulträger

Kleine Schulträger, für die sich eine eigene Plattform nicht lohnt, können eine gemeinsame betreiben. Das Muster: ein gemeinsamer Kern, betrieben von einer federführenden Behörde oder einem Shared-Service-Center, jeder Schulträger in einem eigenen Tenant mit eigenen Sub-Tenants für die Schulen. Die Beschaffung erfolgt gemeinsam, der Betrieb zentral, die Datenhoheit bleibt beim einzelnen Schulträger, weil an der Tenant-Grenze Zugriff, Network Policy und Storage enden.

Der heikle Teil eines Verbunds ist die Kostenaufteilung. Nutzungsberichte je Tenant liefern die Grundlage für eine interne Leistungsverrechnung zwischen den Schulträgern, so wie zwischen den Teams im Bankbeispiel; ein von einem Provider betriebener Verbund kann stattdessen über sein Abrechnungssystem fakturieren.

## Budgetzyklen und Beschaffung

Ein Zyklus von drei bis fünf Jahren bestraft Lizenzen pro Core, die mit jedem Server wachsen, und Plattformen, die zur Halbzeit ersetzt werden müssen. Cozystack steht unter Apache 2.0, ohne Lizenzierung pro Core, und läuft auch ohne Ænix weiter. Das gibt der Beschaffung einen dokumentierten Ausstiegspfad.

Was Ænix darüber hinaus verkauft, ist eine Subscription — Support, kommerzielle Module und Dienstleistungen —, keine Lizenz. Für Provider beginnen die [Subscriptions der Public Cloud Platform](/de/preise/) bei 1.250 USD pro 10 Nodes und Monat bei jährlicher Abrechnung. Für eine Behörde, die ihre Plattform selbst betreibt, wird die Private Cloud Platform per RFP angeboten. Der übliche Ablauf: ein kostenloses 30-minütiges Erstgespräch, ein [Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/) zum Festpreis über 14 oder 28 Tage, dann je nach Umfang ein Aufbau von 3–12 Monaten, oft beginnend mit einem Schulträger oder einer Workload-Klasse. Ein Provider, der eine Bildungs-Cloud auf der Public Cloud Platform aufbaut, geht innerhalb weniger Wochen live, sobald die Hardware bereitsteht.

## Häufige Fehler

Vier Fehler kehren in Plattformprojekten für Schulen immer wieder.

Die EdTech-Integration unterschätzen. Die Zeit fließt in die Lernplattform, das Schulverwaltungssystem, die Identitäten und die Anbieterwerkzeuge, die mit ihnen Daten austauschen — erfassen Sie diese, bevor Sie irgendetwas dimensionieren.

Die Auditfähigkeit auf später verschieben. Log-Aufbewahrung, Backup-Aufbewahrung, wer was lesen darf und wo die Daten liegen, sind Designvorgaben für DSGVO oder FERPA, keine Dokumente, die nach dem Go-live entstehen.

Eine anbietergeführte „Bildungs-Cloud“ akzeptieren, die nur ein einziger Anbieter betreiben kann. Eine Plattform, die niemand sonst betreiben kann, macht den nächsten Budgetzyklus zu einer Verhandlung, die Sie schon verloren haben.

Mitten im Zyklus neu architektieren. Eine Plattform, die für die aktuelle Haushaltsrunde gewählt wurde und nicht für die nächsten zwei, erzwingt genau die teure Umplanung, die ein langer Zyklus verhindern soll.

## Wann das nicht passt

Ein einzelner Schulträger ohne Vorgabe zur Datenresidenz, ohne Eigenentwicklung und ohne jemanden, der eine Plattform für ihn betreiben kann, sollte keine bauen; Managed SaaS ist günstiger und sicherer. Ebenso wenig eine Behörde, die nur Werkzeuge für Büro- und Unterrichtszusammenarbeit braucht. Und eine souveräne Plattform, für deren Betrieb niemand verantwortlich ist — weder ein Shared-Service-Center noch ein Provider noch ein Integrator mit Supportvertrag —, ist eine Belastung, kein Gewinn.

## Weiterlesen

- [Cloud-Plattform für die Schulbildung (K-12)](/de/branchen/k12-bildung/) — wann die Plattform zu Schulträgern passt, in Kürze
- [Öffentlicher Sektor](/de/branchen/oeffentlicher-sektor/) — Vergabe, NIS2 und air-gapped Deployments
- [Datensouveränität](/de/loesungen/data-sovereignty/) — Datenresidenz und Schlüsselhoheit im Detail
- [Fallstudien](/de/case-studies/) — neun anonymisierte Deployments mit Architektur und Kennzahlen

---

*Ænix hat Cozystack, ein CNCF-Sandbox-Projekt, entwickelt und betreut es gemeinsam mit Maintainern anderer Unternehmen. Die Projektdokumentation finden Sie unter [cozystack.io](https://cozystack.io).*
