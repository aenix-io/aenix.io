---
title: "Private Cloud Platform für die regulierte Cloud — DORA- und NIS2-Pflichten in der laufenden Architektur"
seo_title: "DORA und NIS2 in der Private-Cloud-Architektur"
description: "Wie sich IKT-Risiko- und Drittparteienpflichten aus DORA und die Maßnahmen nach NIS2 Artikel 21(2) auf eine belastbare Cloud-Architektur abbilden lassen."
slug: "private-cloud-platform-dora-nis2-architektur"
date: "2026-05-10"
cover_image: "/img/blog/covers/de/private-cloud-platform-dora-nis2-architektur.jpg"
author: "Aenix Team"
type: "article"
topics: ["DORA", "Financial Services", "Compliance", "Sovereignty", "Multi-tenancy", "Cozystack"]
language: "de"
hreflang_en: "/blog/2026/05/enterprise-edition-dora-cloud-architecture/"
companion_landing: "/de/produkte/private-cloud-platform/"
companion_label: "Details zur Private Cloud Platform ansehen →"
quiz:
  title: "Wissens-Check: DORA-Architektur und Drittparteienrisiko"
  questions:
    - q: "Welche Meldefristen nach NIS2 Artikel 23 muss die Detection-Telemetrie unterstützen?"
      options:
        - { text: "24-Stunden-Frühwarnung, 72-Stunden-Meldung, Abschlussbericht nach einem Monat", correct: true }
        - { text: "1-Stunden-Frühwarnung, 24-Stunden-Meldung, Abschlussbericht nach 7 Tagen", correct: false }
        - { text: "Keine festen Fristen — das Unternehmen legt sein eigenes SLO fest", correct: false }
      explanation: "Die Erkennung muss innerhalb der Fristen nach NIS2 Artikel 23 funktionieren: Frühwarnung binnen 24 Stunden, Meldung des Vorfalls binnen 72 Stunden und Abschlussbericht nach einem Monat. Die DORA-Meldungen nach Artikel 19 folgen den in den Durchführungsstandards festgelegten Fristen; die Erkennung sollte auf die strengere der beiden Vorgaben ausgelegt sein."
    - q: "Warum entsteht durch SaaS-Anbieter für Observability laut Artikel ein Risiko nach DORA Artikel 28?"
      options:
        - { text: "Sie rechnen in USD ab und verletzen damit die Regeln zum Währungsrisiko in DORA", correct: false }
        - { text: "Ihre Datenverarbeitung liegt standardmäßig in den USA, sodass Logs den Perimeter verlassen", correct: true }
        - { text: "Sie weigern sich, EU-Standardvertragsklauseln zu unterzeichnen", correct: false }
      explanation: "Muster 1 im Abschnitt zu Artikel 28: SaaS-Tools für Observability verarbeiten Daten standardmäßig in den USA und verschieben so in jeder Minute Kundenkennungen und geschützte Daten in eine nicht konforme Jurisdiktion. Die Residency-Erwartungen nach Artikel 28 gelten für die gesamte IKT-Drittparteienvereinbarung."
    - q: "Artikel 28(8) verlangt einen dokumentierten Exit-Plan mit welcher zusätzlichen Eigenschaft, die den meisten Unternehmen fehlt?"
      options:
        - { text: "Eine notariell beglaubigte Kopie, hinterlegt bei der nationalen Aufsicht", correct: false }
        - { text: "Einen zweiten, vertraglich gebundenen Backup-Hyperscaler", correct: false }
        - { text: "Erprobte Durchführbarkeit — eine Übung innerhalb der letzten 24 Monate", correct: true }
      explanation: "Muster 2 im Abschnitt zu Artikel 28 erklärt, dass die meisten Unternehmen einen Exit-Plan auf dem Papier haben, ihn aber nur wenige geübt haben — und die Aufsicht fragt inzwischen nach einer Übung innerhalb der letzten 24 Monate."
    - q: "Welches Zugriffsmodell beschreibt der Artikel für Ænix-Engineers in einem Private-Cloud-Platform-Projekt?"
      options:
        - { text: "Die Bank entscheidet: Beratung und GitOps-PR-Review brauchen keinen Clusterzugriff, Fernzugriff gibt es nur mit ihrer Freigabe", correct: true }
        - { text: "Ænix verlangt dauerhaften Root-Zugriff auf jeden Produktionscluster", correct: false }
        - { text: "Der Kunde muss für Änderungen am Cluster eine eigene Beratung beauftragen", correct: false }
      explanation: "Der Zugriff ist Sache des Kunden. Beratung, Runbooks und GitOps-PR-Reviews kommen ohne Zugriff auf die Produktion aus; wo die Support-Stufe es vorsieht, gibt es Fernzugriff auf die Cluster nur mit Freigabe des Kunden. Das ist für Banken entscheidend, bei denen ein Zugriff des Anbieters ein strukturelles Risiko darstellt."
    - q: "Wie lange dauert laut Artikel der Aufbau der Private Cloud Platform nach dem Assessment?"
      options:
        - { text: "1 bis 2 Wochen", correct: false }
        - { text: "3 bis 12 Monate, je nach Umfang", correct: true }
        - { text: "5 bis 10 Jahre", correct: false }
      explanation: "Der Abschnitt zum Ablauf der Zusammenarbeit nennt ein Assessment über 14 oder 28 Tage und danach 3–12 Monate Aufbau je nach Umfang; bei großen Banken bestimmen TLPT-Zyklus und Abnahmen durch die Aufsicht zusätzlich den Start des Produktivbetriebs."
---


Cloud-Architektur für regulierte Unternehmen ist 2026 ein anderes
Gespräch als 2022. DORA gilt seit dem 17. Januar 2025. Die Frist zur
Umsetzung von NIS2 ist im Oktober 2024 abgelaufen. Die Erwartungen der
Aufsicht werden mit jedem TLPT-Zyklus schärfer. Das Muster aus der Zeit
vor DORA — eine Hyperscaler-Region mit ein paar Vertragsklauseln — hält
einer realistischen Prüfung nicht stand.

## Die zehn Maßnahmenbereiche — NIS2 Artikel 21(2) und wo DORA sie trifft

NIS2 Artikel 21(2) verlangt „geeignete und verhältnismäßige technische,
operative und organisatorische Maßnahmen“ in zehn aufgezählten
Bereichen. DORA deckt weitgehend dasselbe Terrain auf anderem Weg ab:
über den Rahmen für das IKT-Risikomanagement (Artikel 5–16,
insbesondere Artikel 6), das Management und die Meldung von Vorfällen
(Artikel 17–23) und das IKT-Drittparteienrisiko (Artikel 28–30). Ein
reguliertes Unternehmen, das unter beide Regelwerke fällt, betreibt
nicht zwei Architekturen — es betreibt eine und weist sie zweimal nach.
Die zehn Bereiche unten folgen der Aufzählung in NIS2; wo DORA dieselbe
Kontrolle in einem anderen Artikel regelt, ist dieser genannt.

Für Platform Engineers übersetzen sich die zehn Bereiche in konkrete
Architekturentscheidungen:

### 1. Konzepte für Risikoanalyse und Sicherheit der Informationssysteme

Folge für die Architektur: Jeder Workload einer kritischen Funktion hat
einen dokumentierten Eintrag im Risikoregister. Die Artefakte des
Threat Models liegen beim Workload (nicht in einem separaten
„Compliance-System“, das auseinanderdriftet). Pod Security Standards
und Kubernetes Network Policies setzen die technischen Kontrollen um,
die das Risikoregister benennt.

### 2. Bewältigung von Sicherheitsvorfällen

Die Erkennung muss innerhalb der Meldefristen nach NIS2 Artikel 23
funktionieren: Frühwarnung binnen 24 Stunden, Meldung des Vorfalls
binnen 72 Stunden, Abschlussbericht nach einem Monat. DORA regelt das
in den Artikeln 17–19 eigenständig — Klassifizierung nach Artikel 18,
Meldung schwerwiegender IKT-bezogener Vorfälle an die zuständige
Behörde nach Artikel 19 — mit Fristen, die in den technischen
Durchführungsstandards festgelegt sind und nicht im Artikeltext selbst.
Bauen Sie die Erkennung auf die strengere der beiden Vorgaben aus; die
Architektur ist in beiden Fällen dieselbe. Der Engpass in der Praxis
ist die Detection-Telemetrie — Alert Fatigue überdeckt das Signal. Die
Private Cloud Platform wird mit VictoriaMetrics und VictoriaLogs sowie
kuratierten Alert-Regeln ausgeliefert, die auf Sicherheit abgestimmt
sind, nicht nur auf Performance.

### 3. Aufrechterhaltung des Betriebs

RTO und RPO sind pro kritischem Workload dokumentiert *und werden
jährlich getestet* — mit Telemetrie, die das Testergebnis belegt. Reine
Backups reichen nicht. Die Private Cloud Platform enthält Velero plus
anwendungsspezifische Muster (PostgreSQL PITR, Kafka-Snapshots usw.)
sowie Hooks für Chaos Engineering zur kontrollierten Fehlerinjektion.

### 4. Sicherheit der Lieferkette

Die anspruchsvollste Anforderung im Drittparteienkapitel von DORA
(Artikel 28–30): IKT-Drittparteienvereinbarungen werden erfasst, nach
Kritikalität klassifiziert, und die Kette der Unterauftragnehmer wird
nach Artikel 30(2)(a) bis zur *zweiten Stufe* abgebildet. Die Private
Cloud Platform liefert Ihnen die Anbieterbeziehung, für die Ænix
einstehen kann (wir sind der Plattformanbieter); das Open-Source-Fundament
(Cozystack) schafft Transparenz bis auf die Ebene der
Upstream-Komponenten. Alles darüber hinaus liegt in der Verantwortung
des Kunden.

### 5. Sicherheit bei Erwerb, Entwicklung und Wartung

SAST/DAST in der CI, Container-Scanning plus SBOM, Schwachstellenmanagement
mit dokumentiertem SLA, veröffentlichte Disclosure-Policy. Die Private
Cloud Platform bringt die Disziplin auf Betreiberseite mit; die
Pipelines des Kunden werden angebunden.

### 6. Bewertung der Wirksamkeit

Für wesentliche Einrichtungen erwartet die Aufsicht eine jährliche
externe Bewertung. Die Dokumentation der Private Cloud Platform folgt
den Arbeitsformaten, mit denen die Aufsicht arbeitet — Mapping auf
Kontrollebene, Nachweiskatalog, vollständiger Audit-Trail.

### 7. Cyberhygiene und Schulungen

Nicht Teil der Plattform selbst, aber Teil der Aufgaben des
Betriebsteams beim Kunden. Ænix kann den Kubernetes Deep Dive Course als
Teil des Projekts liefern (separates Produkt).

### 8. Kryptografie

Die Verschlüsselung ruhender Volumes ist pro Storage-Klasse verfügbar
und wird beim Design aktiviert (Opt-in). Schlüsselverwaltung, Rotation
und Notfallzugriff entwerfen und dokumentieren wir gemeinsam mit Ihnen.
Secrets lassen sich über den External Secrets Operator aus dem
Schlüsselspeicher des Kunden beziehen.

### 9. Personalsicherheit, Zugriffskontrolle und Asset-Management

Workload-Identität über SPIFFE/SPIRE oder Gleichwertiges. Privileged
Access Management. Automatisierter Joiner-Mover-Leaver-Prozess.
Vollständiges und aktuelles Asset-Register. Die Private Cloud Platform
wird mit dem cozystack-controller ausgeliefert, der das Asset-Register
als Kubernetes-natives Objekt führt — ohne Abweichung zwischen Policy
und laufendem Zustand.

### 10. MFA, kontinuierliche Authentifizierung, gesicherte Kommunikation

Mindestens MFA auf allen privilegierten Konten. Der Enterprise-Tier des
Ænix-Supports verlangt MFA für jeden Cluster-Zugriff auf Kundenseite.
Gesicherte Notfallkommunikation über den Supportkanal selbst.

## DORA Artikel 28–30 — die Lieferantenrisiko-Dimension, an der die meisten Setups scheitern

Im Drittparteienkapitel von DORA haben die meisten Banken und
Versicherer, mit denen wir arbeiten, die größten Lücken. Drei Muster
wiederholen sich:

### Muster 1 — Observability-Daten verlassen still den regulierten Perimeter

Die Produktionsdatenbank liegt in einer EU-Region, die dem
regulatorischen Mandat entspricht. Die darauf laufende Anwendung
schickt Logs und Metriken an einen SaaS-Anbieter für Observability —
Datadog, New Relic, Splunk Cloud —, dessen Region für die
Datenverarbeitung standardmäßig in den USA liegt. Anwendungslogs mit
Transaktionsdetails, Kundenkennungen und geschützten Daten wandern in
jeder Minute, in der die Anwendung läuft, in eine nicht konforme
Jurisdiktion.

Die Drittparteienanforderungen von DORA gelten für die *gesamte
IKT-Drittparteienvereinbarung* — Observability-Tools eingeschlossen.
Prüfungen der Aufsicht decken das zunehmend auf; herkömmliche
„Richtlinien zur Datenklassifizierung“ nicht. Die Private Cloud
Platform ersetzt SaaS-Observability durch selbst gehostetes
VictoriaMetrics und VictoriaLogs auf derselben Infrastruktur des
Kunden. Damit ist das häufigste Residency-Leck beseitigt.

### Muster 2 — Exit-Pläne auf dem Papier, nie getestet

Artikel 28(8) verlangt für Vereinbarungen zu kritischen Funktionen einen
dokumentierten Exit-Plan mit *erprobter Durchführbarkeit*. Die meisten
Unternehmen haben einen Plan; deutlich weniger haben ihn geübt. Die
Aufsicht fragt inzwischen nach einer Übung innerhalb der letzten 24
Monate.

Das Open-Source-Fundament der Private Cloud Platform macht den Exit-Test
mechanisch einfacher: Die Workloads sind Standard-KubeVirt-VMs und
Kubernetes-Ressourcen. Das Ziel des Exits kann „dieselbe
Kubernetes-API auf anderer Hardware oder bei einem anderen Anbieter“
sein statt einer kompletten Migration. Das Projektmodell von Ænix
enthält ein dokumentiertes Playbook für die Exit-Übung, das Kunden
jährlich durchspielen.

### Muster 3 — Konzentrationsrisiko als Beschaffungsfrage behandelt

Konzentrationsrisiko wird oft erkannt und dann über vertragliche
Diversifizierungsklauseln „gemindert“. Die eigentliche Bedingung —
Workloads, die architektonisch über mehrere Anbieter verteilt sind — ist
meist nicht erfüllt. Artikel 29 bewertet das Konzentrationsrisiko
anhand der tatsächlichen Gegebenheiten, nicht anhand der
Beschaffungsformalitäten.

Die Architektur der Private Cloud Platform löst die Konzentration von
sich aus auf: Die Beziehung zum Cloud-Anbieter beschränkt sich auf
Hardware und Bandbreite, nicht auf Plattformdienste. Die Abbildung der
Unterauftragnehmer wird drastisch kürzer. Souveränität wird zu einer
Frage der Architektur statt des Vertrags.

## Was die Private Cloud Platform zusätzlich zur Public Cloud Platform mitbringt

Mehrere Ebenen speziell für regulierte Unternehmen:

- **Air-Gap-Installation**, dokumentiert und als vollwertiger
  Deployment-Modus unterstützt. Updates laufen über kontrollierte Kanäle
  (Harbor-Mirror, Artefakt-Registry auf Kundenseite, manuelle
  Freigabe). Geeignet für Umgebungen mit Verschlusssachen und für die
  sensibelsten Bank-Workloads.
- **Multi-DC aktiv/passiv oder aktiv/aktiv** — die Private Cloud Platform wird in der
  Regel in zwei oder mehr Rechenzentren ausgerollt, mit
  rechenzentrumsübergreifender Replikation, die auf die RTO-/RPO-Ziele
  abgestimmt ist. Ein VM-Failover zwischen Standorten ist ein geprobtes
  Runbook, kein automatischer Schalter.
- **Zugriff nach Ihrer Wahl** — Beratung, Runbooks und GitOps-PR-Reviews
  brauchen keinen Zugriff auf Ihren Produktionscluster. Wo Ihre
  Support-Stufe es vorsieht, gibt es Fernzugriff auf Ihre Cluster nur
  mit Ihrer Freigabe.
  Entscheidend für Banken, bei denen ein Zugriff des Anbieters ein
  strukturelles Risiko darstellt.
- **Anbindung an den Schlüsselspeicher des Kunden** — Secrets kommen
  über den External Secrets Operator aus dem System des Kunden; die
  genaue Schlüsselarchitektur wird im Projekt festgelegt.
- **Für Audits isolierte Umgebungen** — getrennte Cluster für
  Produktion, Audit und forensische Kopie. Audit-Logs lassen sich in
  einen unveränderlichen Speicher des Kunden ausleiten.
- **Compliance-Dokumentation als Lieferergebnis** — zum Projektabschluss
  erhält der Kunde einen Nachweiskatalog Kontrolle für Kontrolle,
  ausgerichtet an den Erwartungen der Aufsicht zu DORA und NIS2.

## Was in der Verantwortung des Kunden bleibt

Die Private Cloud Platform ist *architektonisch an DORA und NIS2
ausgerichtet*. Sie ist keine Zertifizierung. Mehrere Pflichten bleiben
beim Kunden:

- **Interne Governance** — Berichterstattung an den Vorstand,
  Risikomanagement-Ausschuss, IKT-Risikofunktion. Außerhalb des
  Plattformumfangs.
- **Sektorale Zusatzregeln** — Bankgeheimnis, Versicherungsaufsicht,
  Gesetze zu Gesundheitsdaten. Sie neben DORA auszulegen, liegt in der
  Verantwortung des Kunden.
- **Das Audit selbst** — die Private Cloud Platform liefert Ihnen eine
  belastbare Architektur und die Nachweise; den Auditzyklus
  durchzuführen, ist Aufgabe Ihres Audit-Teams.
- **Workload-spezifische Risikoentscheidungen** — die Private Cloud
  Platform liefert das Fundament; welche Workloads kritisch sind, wie
  sie klassifiziert werden und welches Restrisiko Sie akzeptieren,
  entscheiden Sie.

## Wann die Private Cloud Platform die richtige Antwort ist

Gute Passung:

- Sie sind in einem regulierten Sektor tätig (Finanzdienstleistungen,
  öffentlicher Sektor, Gesundheitswesen, Energie, Telekommunikation)
  mit Pflichten aus DORA, NIS2 oder sektoralen Zusatzregeln.
- Es gibt eine Entscheidung auf Vorstandsebene, Workloads kritischer
  Funktionen vom Hyperscaler zu holen.
- Sie können ein mehrjähriges Plattformprogramm budgetieren, dessen
  Umfang im Scoping festgelegt wird.
- Sie haben ein Plattformteam von 5–10 Engineers für den Betrieb der
  Infrastruktur oder können es aufbauen.
- In den nächsten 12–18 Monaten besteht sektoraler Druck in Richtung
  TLPT, Audit der Lieferkette oder Exit-Readiness.

Bedingte Passung:

- Mittelgroße Organisationen, bei denen der regulatorische Druck real
  ist, das Budget für ein mehrjähriges Programm aber noch fehlt. Die
  Public Cloud Platform mit souveränitätsorientierter Architektur kann
  eine Brücke sein.

Schlechte Passung:

- Organisationen ohne regulatorischen Druck. Nutzen Sie ein anderes
  Produkt (Developer Self-Service oder Cozystack Enterprise Support) —
  der Compliance-Aufwand der Private Cloud Platform zahlt sich ohne den
  Treiber Regulierung nicht aus.

## Ablauf der Zusammenarbeit

- **Discovery Call** (30 Min., kostenlos)
- **Platform Readiness Assessment** (14 oder 28 Tage, Schwerpunkt auf
  dem Arbeitspaket DORA / NIS2) — Gap-Analyse auf Kontrollebene gegen
  die aktuelle Architektur
- **Pilot** (3–6 Monate) — ein definierter Ausschnitt wird auf die Ænix
  Private Cloud Platform migriert, der Nachweiskatalog für die Aufsicht
  teilweise aufgebaut
- **Vollständiger Aufbau der Private Cloud Platform** (3–12 Monate je nach Umfang) —
  Multi-DC-Deployment in Produktionsqualität mit vollständiger
  Compliance-Dokumentation
- **Managed Retainer** (fortlaufend) — Beratung, Runbooks, Review von
  GitOps-PRs, Incident Response unter SLA

Zeitrahmen: 30-minütiges Discovery-Gespräch, Assessment über 14 oder
28 Tage, danach 3–12 Monate Aufbau je nach Umfang. Bei großen Banken
bestimmen TLPT-Zyklus und Abnahmen durch die Aufsicht zusätzlich, wann
der Produktivbetrieb beginnt.

## Weiterführende Inhalte

- **[Landingpage Private Cloud Platform](/de/produkte/private-cloud-platform/)** —
  Funktionsübersicht, produktspezifisches FAQ, Kundennachweise
- **[Leistungen zur DORA-Compliance](/de/loesungen/dora-compliance/)** —
  Details zu DORA-orientierten Projekten
- **[Leistungen zur NIS2-Compliance](/de/loesungen/nis2-compliance/)** —
  Details zu NIS2-orientierten Projekten
- **[DORA-Compliance-Checkliste](/de/ressourcen/dora-compliance-checkliste/)** —
  kostenlose Checkliste der Kontrollen zum Herunterladen
- **[DORA-Compliance-Checkliste für Cloud-Infrastruktur](/de/blog/2026/05/dora-checkliste-cloud-architektur/)** —
  ausführlicherer DORA-Durchgang auf Architekturebene
