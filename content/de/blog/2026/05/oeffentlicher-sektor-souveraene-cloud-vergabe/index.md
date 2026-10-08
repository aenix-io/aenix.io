---
title: "Souveräne Cloud im öffentlichen Sektor — vom Vergaberahmen zur laufenden Plattform"
seo_title: "Souveräne Cloud im öffentlichen Sektor"
slug: "oeffentlicher-sektor-souveraene-cloud-vergabe"
description: "Wie Vergabeverantwortliche und IT-Leitungen im öffentlichen Sektor Souveränitätsvorgaben in eine laufende Cloud-Plattform übersetzen — Regelwerke und Phasen."
date: "2026-05-25"
cover_image: "/img/blog/covers/de/oeffentlicher-sektor-souveraene-cloud-vergabe.jpg"
author: "Aenix Team"
type: "article"
topics: ["Public Sector", "Sovereignty", "Compliance", "NIS2", "Cozystack"]
language: "de"
hreflang_en: "/blog/2026/05/public-sector-sovereign-cloud-procurement/"
companion_landing: "/de/branchen/oeffentlicher-sektor/"
companion_label: "Zur Branchenseite Öffentlicher Sektor →"
quiz:
  title: "Wissens-Check: souveräne Cloud im öffentlichen Sektor"
  questions:
    - q: "Welches Regelwerk gilt als anspruchsvollstes Souveränitätsschema eines EU-Mitgliedstaats und als Referenz für mehrere andere nationale Initiativen?"
      options:
        - { text: "Frankreich: SecNumCloud", correct: true }
        - { text: "Deutschland: BSI C5", correct: false }
        - { text: "Spanien: ENS High", correct: false }
      explanation: "Der Beitrag beschreibt SecNumCloud als strenges französisches Regelwerk — das anspruchsvollste Souveränitätsschema eines EU-Mitgliedstaats und Referenzstandard für mehrere andere nationale Initiativen."
    - q: "Woran scheitern „souveräne“ Angebote von Hyperscalern am häufigsten, wenn es um inhaltliche Souveränität geht?"
      options:
        - { text: "Ihnen fehlt ein regionales Rechenzentrum", correct: false }
        - { text: "Sie unterstützen die DSGVO-Artikel 44-50 nicht", correct: false }
        - { text: "Der Anbieter behält Zugriff auf die Schlüssel", correct: true }
      explanation: "Der Artikel nennt genau diesen Punkt als häufigste Schwachstelle „souveräner“ Hyperscaler-Angebote: Der Anbieter behält operativen Zugriff auf die Schlüssel und verfehlt damit die inhaltliche Bedingung kundenkontrollierter Verschlüsselungsschlüssel."
    - q: "Wie weit muss die Lieferkette nach den Artikel-28-ähnlichen Bestimmungen der wichtigsten Regelwerke dokumentiert sein?"
      options:
        - { text: "Nur die erste Stufe ist erforderlich", correct: false }
        - { text: "Mindestens bis zur zweiten Stufe", correct: true }
        - { text: "Nach DSGVO ist keine Dokumentation nötig", correct: false }
      explanation: "Der Beitrag erklärt, dass Artikel-28-ähnliche Bestimmungen eine Dokumentation der Lieferkette mindestens bis zur zweiten Stufe erwarten und dass die meisten souveränen Cloud-Konstrukte auf Hyperscaler-Basis bei der ersten Stufe (dem Hyperscaler selbst) enden."
    - q: "Welche Gesellschaft ist laut Beitrag der EU-Vertragspartner von Aenix?"
      options:
        - { text: "AENIX INC (Delaware)", correct: false }
        - { text: "AENIX s.r.o. (Tschechien)", correct: true }
        - { text: "AENIX GmbH (Deutschland)", correct: false }
      explanation: "Laut Artikel ist die AENIX s.r.o. in Tschechien der Vertragspartner für die EU, die AENIX INC in Delaware der Vertragspartner für die USA."
    - q: "Wie lange dauert ein Projekt für eine souveräne Cloud im öffentlichen Sektor typischerweise vom Start bis zur zertifizierten Produktion?"
      options:
        - { text: "12-36 Monate insgesamt", correct: true }
        - { text: "3-6 Monate im Schnellverfahren", correct: false }
        - { text: "6-12 Monate mit gestaffeltem Rollout", correct: false }
      explanation: "Der Beitrag nennt 12-36 Monate vom Projektstart bis zur zertifizierten Produktion — wegen des Zertifizierungsaufwands deutlich länger als in der Privatwirtschaft; danach folgt die jährliche Rezertifizierung, und der Wert der Zertifizierung wächst mit."
---


Die Diskussion um souveräne Clouds im öffentlichen Sektor ist 2026
zersplitterter als bei Finanzdienstleistern. Es gibt keine einzelne
Verordnung wie DORA, die für eine gemeinsame Richtung sorgt.
Stattdessen hat jede Jurisdiktion ihr eigenes Regelwerk, oft
aufgesetzt auf DSGVO, NIS2 und sektorale Zusatzanforderungen. Ein
multinationales Projekt im öffentlichen Sektor — oder schon ein
nationales, das mehrere Regionen umfasst — muss in der Regel drei
oder mehr Regelwerke gleichzeitig abdecken.

## Die Landschaft der Regelwerke

### EU-Ebene

- **EUCS (EU Cybersecurity Certification Scheme for Cloud Services)** —
  das entstehende EU-weite Regelwerk, finalisiert 2025. Drei
  Vertrauensniveaus (Basic, Substantial, High). Das Niveau High
  verlangt inhaltliche Souveränitätskontrollen.
- **NIS2** — gilt für die öffentliche Verwaltung als Kategorie
  wesentlicher Einrichtungen (Anhang I). Pflichten aus Artikel 21 und
  Artikel 23.
- **DSGVO** — Grundlage für personenbezogene Daten, Regeln für
  grenzüberschreitende Übermittlungen in den Artikeln 44-50.

### Ebene der Mitgliedstaaten

- **Frankreich: SecNumCloud** — strenges französisches nationales
  Regelwerk. Das anspruchsvollste Souveränitätsschema eines
  EU-Mitgliedstaats. Referenzstandard für mehrere andere nationale
  Initiativen.
- **Deutschland: BSI C5** — der deutsche Kriterienkatalog für
  Cloud-Sicherheit. Inzwischen auch über Deutschland hinaus für den
  Betrieb in der DACH-Region breit referenziert.
- **Italien: ACN** — Regelwerke der Nationalen Agentur für
  Cybersicherheit; Infrastrukturregeln des Polo Strategico Nazionale.
- **Spanien: ENS High** — höchste Stufe des Esquema Nacional de
  Seguridad.

Andere Mitgliedstaaten haben eigene Varianten.

### Zentralasien und APAC

- **Kasachstan** — per Vergaberecht vorgeschriebene Souveränität für
  Workloads des öffentlichen Sektors über goszakup.gov.kz /
  mitwork.kz / zakup.sk.kz. Aktiver Markt für souveräne Clouds,
  darunter Produktstarts souveräner Clouds regionaler Telcos.
- **Singapur: IM8** — IT-Sicherheitsstandards der Regierung.
- **Indien: MeitY** — Ministry of Electronics IT, einschließlich des
  STQC-Rahmens für gelistete Cloud-Anbieter (Empanelled CSP).
- **Australien: IRAP** — Information Security Registered Assessors
  Program; Stufen Protected / Secret für Workloads der Regierung.

### Sektorale Zusatzanforderungen

- Verteidigungsnahe Workloads (in den meisten Jurisdiktionen):
  zusätzliche nationale Geheimschutzeinstufung
- Gesundheitswesen: nationale Regeln zur Souveränität von
  Gesundheitsdaten
- Kritische Infrastruktur: sektorale Cybersicherheitsanforderungen

## Was „inhaltlich souverän“ bedeutet

Ein „souveränes“ Cloud-Produkt, das nicht alle folgenden Punkte
inhaltlich erfüllt, fällt in einem Audit auf dem höchsten
Vertrauensniveau der meisten Regelwerke durch:

### 1. Datenresidenz auf jeder Schicht

Nicht nur beim produktiven Storage. Backups, Observability,
CI/CD-Artefakte, Telemetrie der Managed Services,
grenzüberschreitende Replikation, Verarbeitung durch Unterauftragnehmer
— jede Schicht muss die Residenzanforderung einhalten.

### 2. Kundenkontrollierte Verschlüsselungsschlüssel

HSM-gestützt für sensible Datenklassen. Dokumentierte Rotation.
Verfahren für den Notfallzugriff. Personal des Anbieters kann Schlüssel
unter keinen Umständen auslesen oder kopieren. An genau dieser Stelle
scheitern „souveräne“ Angebote von Hyperscalern am häufigsten: Der
Anbieter behält operativen Zugriff auf die Schlüssel und verfehlt damit
die inhaltliche Bedingung.

### 3. Open-Source-Fundament der Plattform

Für Transparenz, Ausstiegsfähigkeit und Prüfbarkeit. Closed-Source-Plattformen,
die an die Roadmap eines einzelnen Herstellers gebunden sind, verfehlen
die inhaltlichen Anforderungen mehrerer Regelwerke (selbst wenn sie die
formalen Prüfungen der Vergaberichtlinien bestehen).

### 4. Transparenz der Lieferkette

Artikel-28-ähnliche Bestimmungen der verschiedenen Regelwerke erwarten
eine Dokumentation der Lieferkette mindestens bis zur zweiten Stufe.
Die meisten souveränen Cloud-Konstrukte auf Hyperscaler-Basis enden bei
der ersten Stufe (dem Hyperscaler selbst).

### 5. Option für Air-Gap-Deployments

Für die sensibelsten Workloads — eingestufte Daten, verteidigungsnahe
Anwendungen, Gesundheitswesen mit strikter Residenz. Updates gelangen
über kontrollierte Kanäle in die Umgebung (Artefakt-Registry auf
Kundenseite, manuelle Freigabe). Die meisten Souveränitätsregelwerke
verlangen auf dem höchsten Niveau Air-Gap-Unterstützung als
architektonische Option, auch wenn sie nicht jeder Workload nutzt.

### 6. Vollständige Audit-Trails in Standardformaten

Logs in Standardformaten (Syslog, CEF, OpenTelemetry), die das
Audit-Team des Kunden unabhängig vom Plattformhersteller auswerten
kann. Manipulationssicher. Aufbewahrung gemäß der längsten
anwendbaren regulatorischen Anforderung.

### 7. Keine Telemetrie, die nach Hause telefoniert

Telemetrie, die den Perimeter des Kunden verlässt, muss Opt-in sein und
ausdrücklich dokumentiert werden. Viele von Hyperscalern verwaltete
Cloud-Produkte haben nicht abschaltbare Telemetriekanäle und verfehlen
dieses Kriterium.

### 8. Betriebliche Unabhängigkeit unter souveräner Jurisdiktion

Zugriffe von Personal des Anbieters werden protokolliert und sind
zeitlich begrenzt. Die Supportgesellschaft unterliegt souveräner
Jurisdiktion (Ænix hat die AENIX s.r.o. in Tschechien für Verträge in
der EU und die AENIX INC in Delaware für Verträge in den USA). Kein
jurisdiktionsübergreifendes Support-Routing für souveränitätskritische
Workloads.

## Was eine Cozystack-basierte Architektur über alle Regelwerke hinweg liefert

Das Architekturmuster, das alle wichtigen Regelwerke gleichzeitig
erfüllt:

- **Open-Source-Plattform** — Cozystack unter Apache 2.0, CNCF-Projekt,
  herstellerneutrales Fundament. Der Kunde kann die Plattform prüfen,
  verändern oder den Plattformanbieter austauschen.
- **Kundenkontrollierte Schlüssel** — External Secrets Operator mit
  dem HSM des Kunden als Backend; Ænix hält niemals Schlüssel.
- **Air-Gap-Unterstützung** — dokumentiert für Anwendungsfälle mit
  eingestuften Daten und verteidigungsnahen Anwendungen.
- **Selbst betriebene Observability** — VictoriaMetrics und
  VictoriaLogs innerhalb der Jurisdiktion; kein Residenzleck durch
  SaaS-Observability.
- **Kundenkontrollierte Identity** — Integration mit Keycloak / Active
  Directory / nationalem IdP; Ænix hält niemals produktive Zugangsdaten.
- **Mandantenfähiges Tenant CRD** — starke Isolation je Datenklasse,
  Geschäftsbereich oder sektoraler Zusatzanforderung.
- **Audit-isolierte Umgebungen** — getrennte Cluster für Produktion,
  Audit und forensische Kopie.
- **Supportgesellschaft unter EU-Jurisdiktion** — AENIX s.r.o.
  (Tschechien).

Das Architekturmuster ist dasselbe; die Zertifizierungsarbeit ist je
Regelwerk spezifisch. Bei Projekten auf SecNumCloud-Niveau beauftragt
der Kunde in der Regel einen zertifizierten Auditor; Ænix liefert
Architektur und Dokumentation, der Kunde führt den Auditzyklus durch.

## Realitäten der Vergabe

Projekte im öffentlichen Sektor werden von Vergaberahmen bestimmt, wie
es in der Privatwirtschaft nicht der Fall ist. Einige praktische
Realitäten:

### Angebot auf eine Ausschreibung

Ausschreibungen im öffentlichen Sektor legen in der Regel fest, welche
Regelwerke erfüllt sein müssen (SecNumCloud High, BSI C5, EUCS
Substantial usw.). Das Angebot muss die inhaltliche Erfüllung belegen,
nicht nur die Absicht. Das Modell der Zusammenarbeit mit Ænix umfasst
Unterstützung bei der Angebotserstellung, mit benannten Referenzen aus
früheren Projekten im öffentlichen Sektor, soweit zulässig.

### Mehrjährige Rahmenverträge

Viele Projekte im öffentlichen Sektor laufen über Rahmenverträge mit
spezifischen Compliance- und Ausstiegsklauseln. Vertragspartner ist
die jeweilige Gesellschaft von Ænix (AENIX s.r.o. in Tschechien für die
EU; AENIX INC in Delaware für die USA); die Struktur der Zusammenarbeit
passt sich den Anforderungen des Rahmenvertrags an.

### Ænix ist kein Hyperscaler — genau darum geht es

Mehrere Vorgaben im öffentlichen Sektor verlangen ausdrücklich eine
souveräne Bereitstellung ohne Hyperscaler. Das Open-Core-Modell von
Ænix — Hardware des Kunden, Schlüssel des Kunden, betriebliche
Kontrolle beim Kunden, optionaler Support durch Ænix — erfüllt diese
Vorgaben strukturell statt über vertragliche Hilfskonstruktionen.

## Projektphasen im öffentlichen Sektor

### Phase 0 — Klärung der Regelwerke

Die anwendbaren Regelwerke bestätigen. Das mit der höchsten Messlatte
identifizieren (meist SecNumCloud High in Frankreich, BSI C5 in
Deutschland, EUCS High EU-weit, die Souveränitätsvorgaben der
kasachischen Vergabeportale in Kasachstan). Die Architektur gegen die
höchste Messlatte entwerfen und auf die übrigen abbilden.

### Phase 1 — Architektur und Angebotserstellung

Die Unterlagen für das Vergabeverfahren erstellen: technisches
Angebot, Abbildung auf die Compliance-Anforderungen der Regelwerke,
Referenzarchitektur, beispielhafter Nachweiskatalog. Typische Dauer:
2-4 Monate.

### Phase 2 — Aufbau der Plattform in Phase 1 (nach den Modellen Public Cloud Platform / Private Cloud Platform)

Deployment über mehrere Rechenzentren, Air-Gap-Option bei Bedarf
aktiviert, Integration einer souveränen Identity, audit-isolierte
Umgebungen. 6-18 Monate.

### Phase 3 — Zertifizierungszyklus

Der Kunde beauftragt einen akkreditierten Auditor; Ænix liefert
Architekturdokumentation, Control Mapping und Nachweiskatalog.
Engineers von Ænix nehmen, soweit zulässig, an den technischen
Gesprächen mit dem Auditor teil. Typischer Zertifizierungszyklus:
6-12 Monate parallel zu Phase 2.

### Phase 4 — Produktionsbetrieb

Das Team des Kunden betreibt die Plattform mit Beratung durch Ænix und
Tier-3-SLA. Jährlicher Rezertifizierungszyklus (bei den meisten
Regelwerken).

Gesamtdauer: 12-36 Monate vom Projektstart bis zur zertifizierten
Produktion. Deutlich länger als Projekte in der Privatwirtschaft, weil
die Zertifizierung Aufwand verursacht — doch ihr Wert wächst mit: Ist
die Plattform einmal zertifiziert, behält sie die Zertifizierung durch
die jährliche Rezertifizierung, statt sie für jedes Projekt neu zu
erwerben.

## Die bestehende Position von Ænix im öffentlichen Sektor

Wir arbeiten derzeit innerhalb etablierter Vergaberahmen des
öffentlichen Sektors in der EU und in Zentralasien. Konkrete Projekte
bleiben aufgrund der Vertraulichkeitsregeln im Vergabeverfahren
vertraulich; benannte Fallstudien aus dem öffentlichen Sektor
erscheinen in der Regel mit einer Verzögerung von 3-5 Jahren.

Öffentlich sagen wir Folgendes: Ænix hat mehrjährige Projekte mit
souveränen Cloud-Produkten, die auf den kasachischen Vergabeportalen
gelistet sind, und mit regionalen Digitalisierungsprogrammen von
EU-Mitgliedstaaten. Konkrete Referenzen nennen wir
unter NDA im Discovery Call.

## Wann dieses Modell der Zusammenarbeit passt

Gute Passung:

- Nationale Initiativen für souveräne Clouds (öffentlich, als
  öffentlich-private Partnerschaft, Betreiber einer souveränen Cloud)
- Regionale oder sektorale Cloud-Programme von EU-Mitgliedstaaten
- Hosting verteidigungsnaher oder eingestufter Daten mit
  Air-Gap-Anforderung
- Souveräne Cloud im Gesundheitswesen auf nationaler oder regionaler
  Ebene
- Bildungs- und Forschungskonsortien mit einem Planungshorizont über
  mehrere Jahrzehnte

Bedingte Passung:

- Vergaben einzelner Ministerien oder Behörden mit kleinerem Umfang —
  hier passt womöglich eher die Private Cloud Platform als die Public
  Cloud Platform

Schlechte Passung:

- Workloads, bei denen eine von Hyperscalern verwaltete Cloud die
  Regelwerke bereits erfüllt (bei einigen spezifischen Vergaberahmen)
- Organisationen ohne Souveränitätsdruck (nutzen Sie das Produkt für
  die Privatwirtschaft, das zum Workload-Profil passt)

## Wo Sie tiefer einsteigen können

- **[Branchenseite Öffentlicher Sektor](/de/branchen/oeffentlicher-sektor/)** —
  die kommerzielle Landingpage
- **[Data Sovereignty](/de/loesungen/data-sovereignty/)** —
  Landingpage zum Kaufanlass Souveränität
- **[NIS2-Compliance](/de/loesungen/nis2-compliance/)** —
  für die NIS2-Anforderungen (die öffentliche Verwaltung fällt unter
  Anhang I)
- **[Sovereign Cloud Builder](/de/dienstleistungen/sovereign-cloud-builder/)** —
  die passende Form der Zusammenarbeit
- **[Souveräne Cloud aufbauen — Playbook für die EU und Zentralasien](/de/blog/2026/05/souveraene-cloud-aufbauen-eu-zentralasien/)** —
  Playbook für souveräne Clouds in der EU und in Kasachstan
- **[Datenresidenz-Anforderungen 2026](/de/blog/2026/05/datenresidenz-anforderungen-2026/)** —
  Datenresidenz Schicht für Schicht
