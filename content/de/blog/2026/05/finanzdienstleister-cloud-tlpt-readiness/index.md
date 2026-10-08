---
title: "Cloud-Plattformen für Finanzdienstleister — wie TLPT-Readiness 2026 tatsächlich aussieht"
seo_title: "TLPT-Readiness unter DORA für Cloud-Plattformen"
description: "Wie TLPT-Readiness unter DORA 2026 tatsächlich aussieht — für Platform Engineers bei Banken, Versicherern und Zahlungsinstituten vor einem echten Prüfzyklus."
slug: "finanzdienstleister-cloud-tlpt-readiness"
date: "2026-05-11"
cover_image: "/img/blog/covers/de/finanzdienstleister-cloud-tlpt-readiness.jpg"
author: "Aenix Team"
type: "article"
topics: ["Financial Services", "DORA", "Compliance", "Sovereignty", "Cozystack"]
language: "de"
hreflang_en: "/blog/2026/05/financial-services-cloud-tlpt-readiness/"
companion_landing: "/de/branchen/finanzdienstleistungen/"
companion_label: "Zur Branchenseite Finanzdienstleistungen →"
quiz:
  title: "Wissens-Check: TLPT-Readiness für Finanzdienstleister"
  questions:
    - q: "Was ist TLPT, und wie oft ist es unter DORA für bedeutende Finanzunternehmen vorgeschrieben?"
      options:
        - { text: "Tactical Live Performance Test, vierteljährlich durch das interne SOC", correct: false }
        - { text: "Threat-Led Penetration Testing, alle drei Jahre", correct: true }
        - { text: "Transaction-Level Privacy Test, jährlich zusammen mit dem DSGVO-Audit", correct: false }
      explanation: "TLPT steht für Threat-Led Penetration Testing. Es ist alle drei Jahre vorgeschrieben: eine strukturierte Red-Team-Übung gegen die laufende Produktion durch einen externen Testdienstleister, bei der das CSIRT/SOC als echter Verteidiger behandelt wird."
    - q: "Warum erweist sich das 24-Stunden-Frühwarnfenster nach NIS2 Artikel 23 laut Artikel in der Praxis oft als Fiktion?"
      options:
        - { text: "Die Aufsicht setzt die 24-Stunden-Frist in der Praxis selten durch", correct: false }
        - { text: "Die meisten Banken haben die Erkennung an MSSPs ausgelagert, die sie verpassen", correct: false }
        - { text: "Die Detection-Telemetrie ist auf Performance abgestimmt, nicht auf Sicherheit", correct: true }
      explanation: "Die erste TLPT-Readiness-Frage erklärt: Ist die Detection-Telemetrie auf Performance und nicht auf Sicherheit abgestimmt, ist das 24-Stunden-Fenster eine Fiktion — die meisten Banken haben reichhaltige Performance-Telemetrie und eine von Alert Fatigue geplagte Sicherheitstelemetrie, sodass das Signal-Rausch-Verhältnis bei Auslösern für meldepflichtige Vorfälle zu schlecht ist."
    - q: "Wie adressiert die Cozystack-basierte Architektur die materielle Bedingung des Konzentrationsrisikos nach Artikel 29 (nicht nur die Beschaffung)?"
      options:
        - { text: "Workloads nutzen Plattformabstraktionen, die es auf mehreren Substraten gibt", correct: true }
        - { text: "Durch gleichzeitige Verträge mit zwei konkurrierenden Hyperscalern", correct: false }
        - { text: "Indem alle Daten und alle Rechenleistung strikt on-prem bleiben müssen", correct: false }
      explanation: "Lücke 3 (Konzentrationsrisiko) beschreibt die materielle Antwort: Workloads nutzen Plattformabstraktionen — Kubernetes, KubeVirt, S3-kompatiblen Storage —, die es auf mehreren Substraten gibt, und das Ziel eines Exits wird auf Architekturebene benannt, nicht auf juristischer Ebene."
    - q: "Bis zu welcher Ebene muss die Transparenz über die Lieferkette nach Artikel 30(2)(a) reichen?"
      options:
        - { text: "Nur bis zum direkt beauftragten Anbieter — erste Stufe", correct: false }
        - { text: "Bis zur vollständigen transitiven Hülle aller Upstream-Abhängigkeiten", correct: false }
        - { text: "Bis zur zweiten Stufe — den kritischen Dienstleistern des beauftragten Anbieters", correct: true }
      explanation: "Lücke 4 hält fest, dass Artikel 30(2)(a) Transparenz bis zur zweiten Stufe verlangt — also bis zu den Rechenzentrumsbetreibern, Netzwerkanbietern und gemeinsam genutzten Plattformdiensten unterhalb des beauftragten Hyperscalers."
    - q: "Was tut Ænix im Projektmodell in Phase 4 (Managed Retainer) ausdrücklich NICHT?"
      options:
        - { text: "Ohne Freigabe des Kunden auf den Produktionscluster zugreifen", correct: true }
        - { text: "SLA-gestützten Support für die Plattform leisten", correct: false }
        - { text: "An der TLPT-Vorbereitung und den Post-Mortems mitwirken", correct: false }
      explanation: "Phase 4 hält ausdrücklich fest: Gearbeitet wird über GitOps-PR-Reviews; Fernzugriff auf den Produktionscluster gibt es nur mit Freigabe des Kunden. Entscheidend für die Governance einer Bank."
---


Die DORA-Diskussion zerfiel in den meisten Finanzinstituten 2024–2025
in zwei Hälften. Die erste Hälfte — Governance, Richtlinien,
Dokumentation des IKT-Risikomanagements — landete bei Rechtsabteilung,
Compliance und CISO. Als DORA am 17. Januar 2025 in Kraft trat, war
diese Dokumentation bei den meisten regulierten Unternehmen in
ordentlichem Zustand.

Um die zweite Hälfte — die Cloud-Architektur *nachweisbar*
an DORA auszurichten, wenn ein echter TLPT-Zyklus ansteht — war es
stiller. Diese Stille bricht 2026 auf. TLPT-Übungen der Aufsicht
erreichen inzwischen Architekturen, die beim Start von DORA als konform
galten, aber nie unter realistischer Prüfung durch die Aufsicht
getestet wurden.

## Was TLPT bedeutet und warum es jetzt zählt

Threat-Led Penetration Testing (TLPT) ist unter DORA für bedeutende
Finanzunternehmen vorgeschrieben. Alle drei Jahre führt ein externer
Testdienstleister eine strukturierte Red-Team-Übung gegen die laufende
Produktionsumgebung durch, wobei das CSIRT / SOC des Finanzunternehmens
als echter Verteidiger behandelt wird.

Es geht nicht darum, Schwachstellen zu finden (das leistet jeder
Pentest). Es geht darum, die operationale Resilienz unter realistischen
Angriffsszenarien nachzuweisen — dass Menschen, Prozesse und
Infrastruktur des Unternehmens innerhalb der von DORA erwarteten
Fristen erkennen, reagieren und wiederherstellen können.

Für Platform Engineers zählen drei Fragen der TLPT-Readiness:

1. **Erkennung im Takt der Meldefristen.** DORA Artikel 17–19 setzen
   für die Erstmeldung eines schwerwiegenden IKT-bezogenen Vorfalls
   eine kurze Frist, und NIS2 Artikel 23 legt für Unternehmen, die unter
   beide Regelwerke fallen, eine Frühwarnung binnen 24 Stunden fest.
   Ist Ihre Detection-Telemetrie auf Performance statt auf Sicherheit
   abgestimmt, ist jede dieser Fristen eine Fiktion.
2. **Vollständigkeit des Audit-Trails.** DORA Artikel 6 verlangt einen
   dokumentierten Rahmen für das IKT-Risikomanagement, den Sie der
   Aufsicht *mit Nachweisen* belegen können — welche Kontrollen zum
   Zeitpunkt des Vorfalls in Kraft waren. Dokumentation reicht nicht;
   die Messlatte sind Nachweise aus dem laufenden System.
3. **Eindämmung und Wiederherstellung.** TLPT-Übungen spielen reale
   Angriffsmuster ein. Die Network Policies, das Identitätsmodell und
   die Isolationsgrenzen der Plattform müssen realistischen Versuchen
   von Lateral Movement und Persistenz standhalten.

## Wie eine „DORA-fähige Architektur“ tatsächlich aussieht

Eine belastbare Cloud-Architektur für Finanzdienstleister hat sechs
Eigenschaften, auf die die Aufsicht achtet:

### 1. Auf Sicherheit abgestimmte Detection-Telemetrie

Die meisten Banken, mit denen wir arbeiten, haben eine reichhaltige
Performance-Telemetrie und eine von Alert Fatigue geplagte
Sicherheitstelemetrie. Das Verhältnis der Alerts stimmt nicht: zu viel
Performance-Rauschen, zu wenig Signal bei den Sicherheitsereignissen,
die einem meldepflichtigen Vorfall nach DORA Artikel 18–19 (und NIS2
Artikel 23, wo beide gelten) entsprechen.

Lösungsmuster:
- Kuratierte Alert-Regeln, abgestimmt auf die für Cloud-Infrastruktur
  relevanten MITRE-ATT&CK-Techniken
- Logs fließen aus VictoriaLogs / VictoriaMetrics (selbst gehostet, im
  eigenen Rechtsraum) in ein SIEM, das das SOC tatsächlich überwacht
- Erkennung rund um die Uhr (24×7) mit dokumentierter Eskalation
- Alert-Hygiene als wiederkehrende Aufgabe

Die Ænix Private Cloud Platform liefert VictoriaMetrics und
VictoriaLogs standardmäßig für Telemetrie in Sicherheitsqualität
konfiguriert aus, dazu sicherheitsorientierte Alert-Regeln. Die
Anbindung an das SIEM des Kunden ist Projektarbeit.

### 2. Workload-Identität statt weit offener Service Accounts

Die Standard-Service-Accounts von Kubernetes sind weit offen. In einer
an DORA ausgerichteten Architektur hat jeder Workload eine Identität,
jede Identität ist eng begrenzt, und jeder Aufruf zwischen Diensten
ist authentifiziert und autorisiert.

Muster: SPIFFE/SPIRE für die Workload-Identität, External Secrets
Operator mit dem Schlüsselspeicher des Kunden als Backend, Pod Security Standards als
durchgesetzte Policy. Das Ænix-Projekt umfasst die Integration; der IdP
und die Mitarbeiteridentität des Kunden bleiben unter Kontrolle des
Kunden.

### 3. Tenant-CRD-Isolation als strukturelle Antwort auf das Konzentrationsrisiko

Artikel 29 bewertet das Konzentrationsrisiko anhand der tatsächlichen
Resilienz, nicht anhand vertraglicher Diversifizierung. Das
Tenant-CRD-Modell bietet Isolation auf Namespace-Ebene pro
Geschäftsfunktion, pro Datenklasse und pro Kritikalitätsstufe — mit
Quotas, RBAC-Geltungsbereich, Observability-Geltungsbereich und
Audit-Trail-Geltungsbereich pro Tenant.

Das ist keine „weiche Mandantenfähigkeit nach dem Prinzip Hoffnung“.
Das Tenant CRD ist ein Kubernetes-natives Objekt, das der
cozystack-controller abgleicht; der laufende Zustand entspricht der
Spezifikation, oder der Operator macht die Abweichung sichtbar.

### 4. Für Audits isolierte Umgebungen

Kritische Workloads laufen in Tenants, die ausdrücklich für Audits
isoliert sind: getrennte Cluster von nicht produktiven Workloads,
manipulationssicheres Logging, das das Audit-Team des Kunden
unabhängig nachvollziehen kann, keine gemeinsame Infrastruktur zwischen
auditrelevanten und nicht auditrelevanten Workloads.

Das kostet mehr Infrastruktur. Diese Kosten sind der Preis für
belastbare Audit-Nachweise.

### 5. Exit-Readiness mit geübten Exit-Drills

Artikel 28(8) verlangt für Vereinbarungen zu kritischen Funktionen
einen erprobten Exit-Plan. Die Aufsicht erwartet zunehmend einen
teilweisen Exit-Drill innerhalb der letzten 24 Monate.

Die Cozystack-basierte Architektur macht Exit-Drills mechanisch
einfacher: Die Workloads sind Standard-KubeVirt-VMs und
Kubernetes-Ressourcen. Das Ziel des Exits kann „dieselbe
Kubernetes-API auf anderer Hardware oder bei einem anderen Anbieter“
sein. Das Projektmodell von Ænix enthält ein dokumentiertes Playbook
für den Exit-Drill, das Kunden jährlich durchspielen.

### 6. Transparenz über die Lieferkette bis zur zweiten Stufe

Artikel 30(2)(a) verlangt Einblick in die IKT-Lieferkette mindestens
bis zur zweiten Stufe. Für die Beziehung zum Plattformanbieter steht
Ænix in der Pflicht — wir stellen ein attestiertes Dokument zur
Offenlegung der Lieferanten bereit, das Upstream-Open-Source-Komponenten,
Kanäle für Sicherheitsmeldungen und betriebliche Abhängigkeiten
abbildet.

Jenseits des Plattformanbieters ist der Kunde dafür verantwortlich,
seine eigene Lieferkette abzubilden. Ænix-Projekte enthalten Tooling
für die Erfassung, die Bestandsaufnahme selbst ist aber Arbeit auf
Kundenseite.

## Wo die meisten Cloud-Architekturen von Finanzdienstleistern noch zu kurz greifen

Vier wiederkehrende Muster aus unseren Assessments 2025–2026:

### Lücke 1: Observability verlässt still den regulierten Perimeter

Die Produktionsdatenbank liegt in einer EU-Region, die dem
regulatorischen Mandat entspricht. Die darauf laufende Anwendung
schickt Logs an einen SaaS-Anbieter für Observability, dessen Region
für die Datenverarbeitung standardmäßig in den USA liegt. In jeder
Minute, in der die Anwendung läuft, wandern Anwendungslogs mit
Transaktionsdetails, Kundenkennungen und geschützten Daten in eine
nicht konforme Jurisdiktion.

Die meisten Banken bemerken das erst nach einem Hinweis der Aufsicht.
Dann bedeutet die Behebung entweder, den SaaS-Anbieter auszutauschen
(ein Projekt über mehrere Quartale), oder eine regionale
Datenverarbeitungsvereinbarung auszuhandeln (bei manchen Anbietern
möglich, bei anderen langwierig).

Die architektonische Antwort auf Basis von Cozystack: selbst gehostetes
VictoriaMetrics und VictoriaLogs auf derselben Infrastruktur wie die
Workloads. Damit ist das Residency-Leck beseitigt.

### Lücke 2: Der Exit-Plan existiert auf dem Papier, getestet wurde er nie

Der Exit-Plan wurde für die Aufsicht geschrieben; geübt hat ihn
niemand. Die Schätzungen zur Dauer eines Exits stammen aus
Tabletop-Übungen und sind nicht an einem Drill kalibriert. Fragt die
Aufsicht „Wann haben Sie den Exit-Plan zuletzt getestet?“, herrscht
Schweigen.

Lösung: jährliche Exit-Drill-Übung mit dokumentiertem Ergebnis. Das
Ænix-Projekt liefert das Playbook; der Kunde führt die Übung durch.

### Lücke 3: Konzentrationsrisiko als Beschaffungsfrage behandelt

„Wir nutzen AWS in zwei Regionen; wir haben eine Vertragsklausel, die
eine geografische Verteilung unseres Backups vorschreibt.“ Beides
stimmt. Keines von beidem adressiert, was Artikel 29 tatsächlich
bewertet — die materielle architektonische Resilienz gegen den Ausfall
eines einzelnen Anbieters.

Die materielle Antwort: Workloads nutzen Plattformabstraktionen
(Kubernetes, KubeVirt, S3-kompatiblen Storage, relationale
Standarddatenbanken), die es auf mehreren Substraten gibt. Das Ziel des
Exits wird auf Architekturebene benannt, nicht auf juristischer Ebene.

### Lücke 4: Das Risiko der Unterauftragnehmer ist jenseits der ersten Stufe unsichtbar

Der beauftragte Hyperscaler ist dokumentiert. Seine
Rechenzentrumsbetreiber, Anbieter der Netzwerkanbindung und die
darunterliegenden gemeinsam genutzten Plattformdienste sind es nicht.
Artikel 30(2)(a) verlangt Transparenz bis zur zweiten Stufe.

Bei einer Cozystack-basierten Architektur legt der Plattformanbieter
(Ænix) die Herkunft der Upstream-Komponenten offen. Der
Hardwarelieferant ist die nächste Stufe; alles darüber hinaus liegt in
der Verantwortung des Kunden.

## Das Projektmodell von Ænix für Finanzdienstleister

Wir gehen Projekte mit Finanzdienstleistern anders an als in anderen
Branchen, weil die Treiber Regulierung und Audit-Readiness die Arbeit
prägen.

### Phase 0 — Discovery und DORA-Scoping

Den regulatorischen Rahmen bestätigen (DORA plus nationale
Zusatzregeln plus sektorale Vorschriften). Die
Kritikalitätsklassifizierung der Workloads bestätigen. Sponsor und
Ansprechpartner für die Kommunikation mit der Aufsicht auf Kundenseite.
Projektmodell (typisch: Ænix übernimmt Beratung und Support unter SLA,
der Kunde den Produktionsbetrieb).

### Phase 1 — Platform Readiness Assessment mit DORA-Arbeitspaket

Assessment über 14 oder 28 Tage zum Festpreis. Architektur-Review
Kontrolle für Kontrolle gegen die Erwartungen aus DORA Artikel 6 und
Artikel 28–30. Ergebnis: ein Bericht von 30–50 Seiten mit
Gap-Analyse, priorisierter Behebung und Zeitplan.

### Phase 2 — Pilot-Deployment der Private Cloud Platform

3–6 Monate. Ein definierter Ausschnitt der Workloads kritischer
Funktionen wird auf die Cozystack-basierte Private Cloud Platform
migriert. Der Nachweiskatalog für die Aufsicht wird teilweise
aufgebaut. Die TLPT-Readiness wird für den Pilotumfang validiert.

### Phase 3 — Vollständiger Aufbau der Private Cloud Platform

3–12 Monate, je nach Workload-Umfang und Multi-DC-Struktur; der
TLPT-Zyklus kann den Zeitpunkt der Abnahme zusätzlich bestimmen. Deployment in Produktionsqualität mit vollständiger
Compliance-Dokumentation als Lieferergebnis. Ænix wirkt an der
TLPT-Vorbereitung mit; den Test selbst führen akkreditierte
Red-Team-Dienstleister durch.

### Phase 4 — Managed Retainer

Ænix-Beratung plus Support der Plus- oder Enterprise-Stufe unter SLA.
Gearbeitet wird über GitOps-PR-Reviews; Fernzugriff auf den
Produktionscluster gibt es nur mit Freigabe des Kunden. Entscheidend für die Governance einer Bank.

## Wann dieses Projektmodell passt

Gute Passung:

- Europäische Tier-1- oder Tier-2-Bank mit aktivem DORA-Programm
- Versicherer mit regulatorischer Exposition in mehreren Rechtsräumen
- Zahlungsinstitut im Überschneidungsbereich von DORA und PSD2/PSD3
- Marktinfrastruktur (CSDs, CCPs) unter DORA und CSDR
- Ein laufender TLPT-Zyklus, der Arbeit an der Architektur-Readiness
  erfordert

Bedingte Passung:

- Kleinere Banken, deren Budgetrahmen noch nicht auf ein mehrjähriges
  Programm ausgelegt ist; die Public Cloud Platform mit
  souveränitätsorientierter Architektur kann eine Brücke sein

Schlechte Passung:

- Banken, die sich bereits auf ein mehrjähriges Hyperscaler-Programm
  festgelegt haben und diese Entscheidung nicht neu öffnen — Ænix kann
  zu konkreten DORA-Architekturlücken im Hyperscaler-Kontext beraten,
  die vollständige Private Cloud Platform passt dort aber nicht

## Weiterführende Inhalte

- **[Branchenseite Finanzdienstleistungen](/de/branchen/finanzdienstleistungen/)** —
  die kommerzielle Landingpage, ausgehend von den Auslösern
- **[Leistungen zur DORA-Compliance](/de/loesungen/dora-compliance/)** —
  die DORA-Landingpage aus Sicht des Einkäufers
- **[Produktseite Private Cloud Platform](/de/produkte/private-cloud-platform/)** —
  das Produkt für regulierte Unternehmen
- **[DORA-Compliance-Checkliste für Cloud-Infrastruktur](/de/blog/2026/05/dora-checkliste-cloud-architektur/)** —
  DORA-Durchgang auf Architekturebene
- **[Private Cloud Platform — DORA- und NIS2-Pflichten in der Architektur](/de/blog/2026/05/private-cloud-platform-dora-nis2-architektur/)** —
  architektonische Details auf Produktebene
- **[DORA-Compliance-Checkliste](/de/ressourcen/dora-compliance-checkliste/)** —
  Checkliste der Kontrollen zum Herunterladen
