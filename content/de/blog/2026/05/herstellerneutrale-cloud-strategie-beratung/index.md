---
title: "Herstellerneutrale Cloud-Strategie — wie ehrliche Cloud-Beratung 2026 aussieht"
description: "Was eine herstellerneutrale Cloud-Strategieberatung tatsächlich liefert und worin sie sich von Big-4-Beratung und Hyperscaler-nahen Beratungshäusern abhebt."
slug: "herstellerneutrale-cloud-strategie-beratung"
date: "2026-05-06"
cover_image: "/img/blog/covers/de/herstellerneutrale-cloud-strategie-beratung.jpg"
author: "Aenix Team"
type: "article"
topics: ["Cloud", "Platform Engineering", "Sovereignty", "Compliance"]
language: "de"
hreflang_en: "/blog/2026/05/cloud-strategy-engagement-vendor-neutral/"
companion_landing: "/de/dienstleistungen/cloud-strategy-consultancy/"
companion_label: "Zur Cloud-Strategie-Beratung →"
quiz:
  title: "Wissens-Check: herstellerneutrale Cloud-Strategie"
  questions:
    - q: "Wie viele strategische Fragen muss eine Cloud-Strategieberatung 2026 laut Artikel beantworten?"
      options:
        - { text: "Fünf strategische Fragen", correct: true }
        - { text: "Drei strategische Fragen", correct: false }
        - { text: "Sieben strategische Fragen", correct: false }
      explanation: "Fünf Fragen: wo jede Workload-Klasse läuft, die Position zur Souveränität, die Kostenentwicklung über 3–5 Jahre, ein skalierbares Betriebsmodell und die Entwicklung des regulatorischen Umfelds. Eine Strategie, der eine davon fehlt, ist eine Tooling-Roadmap, keine Strategie."
    - q: "Warum ist Cloud-Beratung der Big 4 laut Artikel strukturell nicht herstellerneutral?"
      options:
        - { text: "Ihren Beratern fehlt die technische Kompetenz in der Cloud", correct: false }
        - { text: "Ihre Honorare sind zu hoch für eine objektive Analyse", correct: false }
        - { text: "Ihre Integrationsumsätze folgen den Hyperscaler-Partnerschaften", correct: true }
      explanation: "Deloitte, KPMG, EY und PwC haben jeweils Partnerprogramme mit Hyperscalern; die meisten Projekte enden mit Modernisierungsplänen, die auf einen Hyperscaler ausgerichtet sind, weil dort die Integrationsumsätze liegen. Herstellerneutral laut Marketing, herstellergebunden laut Ökonomie."
    - q: "Was tut Aenix laut Artikel ausdrücklich, wenn die Abwägung es rechtfertigt?"
      options:
        - { text: "Immer die Aenix-Plattform empfehlen, unabhängig von der Eignung", correct: false }
        - { text: "Schriftlich empfehlen, beim Hyperscaler zu bleiben", correct: true }
        - { text: "Das Projekt an eine Big-4-Gesellschaft übergeben", correct: false }
      explanation: "Die herstellerneutrale Position von Aenix bedeutet, dass „beim Hyperscaler bleiben“ schriftlich empfohlen wird, wenn es gerechtfertigt ist. Der negative Anreiz — Projekte, auf die keine Plattformarbeit für Aenix folgt — ist real, und genau so soll Herstellerneutralität funktionieren."
    - q: "Welchen Seitenumfang hat das zusammengeführte Strategiedokument laut Artikel?"
      options:
        - { text: "Zehn bis fünfzehn Seiten konzentrierte Zusammenfassung", correct: false }
        - { text: "Dreißig bis fünfzig Seiten plus Management-Präsentation", correct: true }
        - { text: "Hundert oder mehr Seiten Management-Folien", correct: false }
      explanation: "Das Ergebnis umfasst 30–50 Seiten verwertbarer Details (3–5 Seiten Management Summary, 5–8 Seiten je Arbeitsstrang, 2–3 Seiten Roadmap) plus eine Management-Präsentation. Der Artikel stellt das 100 Seiten Management-Theater gegenüber: Entscheidungstempo statt Folienglanz."
    - q: "Wie grenzt der Artikel die Cloud-Strategie-Beratung vom Platform Readiness Assessment ab?"
      options:
        - { text: "Die Strategie ist taktisch, das PRA strategisch", correct: false }
        - { text: "Beides ist dasselbe Produkt unter anderem Namen", correct: false }
        - { text: "Das PRA ist taktisch; die Strategie definiert Zielbild und Substrat", correct: true }
      explanation: "PRA = taktisch, kommt zum Einsatz, wenn die strategische Richtung feststeht, und liefert einen Maßnahmenplan über 14–28 Tage. Cloud-Strategie = strategisch, kommt zum Einsatz, wenn die Richtung noch offen ist, und definiert Zielarchitektur und Substrat-Position. Die meisten Kunden beginnen mit der Strategie, dann folgen Assessment und Umsetzung."
---


„Cloud-Strategie“ ist ein abgenutzter Begriff. Hyperscaler bieten sie
an (Azure Cloud Adoption Framework, AWS Migration Acceleration Programme,
Google Cloud Adoption Framework). Die Big 4 bieten sie an (Deloitte,
KPMG, EY und PwC haben jeweils Cloud-Beratungssparten mit Tausenden
Beratern). Partner der Hyperscaler bieten sie an (Systemintegratoren mit
Tausenden zertifizierten Cloud-Beratern). Boutique-Beratungen bieten sie
an. Interne Strategieteams erarbeiten sie selbst.

Der Markt ist voll, und die Methoden sehen von außen ähnlich aus. Der
Unterschied zeigt sich darin, was die Strategie tatsächlich empfiehlt,
wer welchen Anreiz für welche Empfehlung hat und ob die Empfehlung
18 Monate Praxis übersteht.

Dieser Artikel ist die ehrliche Fassung: Was liefert eine
herstellerneutrale Cloud-Strategieberatung *nach Art von Ænix*, warum
unterscheidet sie sich von Hyperscaler-nahen oder Big-4-Alternativen,
und wann passt welche Variante.

## Was eine „Cloud-Strategie“ 2026 wirklich beantworten muss

Fünf strategische Fragen bestimmen die Diskussion 2026:

### 1. Wo sollte jede Workload-Klasse laufen?

Der Standard von 2018 — „alles in die Public Cloud“ — ist überholt.
DORA-relevante Workloads laufen anders als SaaS-Workloads. Dauerhafte
KI-Inferenz läuft anders als kundenseitige Anwendungen mit Lastspitzen.
Regulierte Datenklassen laufen anders als offene Daten. Die Strategie
muss pro Workload-Klasse Position beziehen, statt alle über einen Kamm
zu scheren.

### 2. Wie lautet die Position zur Souveränität?

Unterschiedliche Rechtsordnungen, Branchen und Kundenbeziehungen
stellen unterschiedliche Anforderungen an die Souveränität. Die
Strategie muss die Position ausdrücklich benennen — einschließlich der
Kosten in Form betrieblicher Komplexität und der Auswirkungen auf die
Anbieterauswahl.

### 3. Wie entwickeln sich die Kosten?

Public-Cloud-Rechnungen wachsen mit Zinseszinseffekt. Die Strategie muss
die Kosten über die nächsten 3–5 Jahre für jede Workload-Klasse und
jede Substrat-Option prognostizieren. Eine ehrliche Prognose —
einschließlich Hardware-Erneuerung, Kapazität im Platform Engineering
und Wechselkosten durch Vendor-Lock-in —, nicht die Marketing-Version.

### 4. Welches Betriebsmodell skaliert?

Nur DevOps? Platform Engineering? In die Teams eingebettete SREs?
Zentrales SRE? Das Modell muss zum Personalprofil und zum
Wachstumspfad der Engineering-Organisation passen; Fehlanpassungen
kosten mehr, als sie sparen.

### 5. Wie entwickelt sich das regulatorische Umfeld?

DORA gilt seit Januar 2025. Die NIS2-Umsetzung erfolgte im Oktober
2024. EUCS wird finalisiert. Branchenspezifische Vorgaben weiten sich
aus. Regelwerke für souveräne Clouds werden schärfer. Die Strategie
darf nicht auf den heutigen regulatorischen Stand festgeschrieben sein;
sie muss die wahrscheinliche Entwicklung der nächsten 24–36 Monate
einbeziehen.

Eine „Cloud-Strategie“-Beratung, die nicht zu allen fünf Fragen
Position bezieht, ist keine Strategie. Sie ist eine Tooling-Roadmap.

## Warum Herstellerneutralität zählt

Hyperscaler-nahe Beratung und die meisten Big-4-Beratungssparten haben
eine implizite kommerzielle Ausrichtung, die ihre Empfehlungen prägt:

- **Beratung unter Führung der Hyperscaler** — AWS, Azure, GCP und IBM
  Cloud finanzieren jeweils eigene und partnergeführte
  Beratungssparten. Die Beratung ist strukturell darauf ausgerichtet,
  den jeweiligen Hyperscaler zu empfehlen. Ehrliche Praktiker versuchen
  gegenzusteuern, aber der kommerzielle Anreiz ist eindeutig.
- **Cloud-Beratung der Big 4** — Deloitte, KPMG, EY und PwC haben
  jeweils Partnerprogramme mit Hyperscalern, die die Empfehlungen
  beeinflussen. Die meisten Projekte enden mit einem
  Modernisierungsplan, der auf einen Hyperscaler ausgerichtet ist,
  weil dort die Integrationsumsätze liegen.
- **Systemintegratoren als Hyperscaler-Partner** — Capgemini,
  Accenture, Infosys und Wipro haben den Status zertifizierter Partner
  bei Hyperscalern und verdienen an Umsetzungen unter Führung der
  Hyperscaler. Herstellerneutral laut Marketing, herstellergebunden
  laut Ökonomie.

Herstellerneutrale Beratung bedeutet: Das kommerzielle Ergebnis des
Projekts hängt nicht davon ab, dass sich der Kunde für einen
bestimmten Hyperscaler, eine bestimmte Distribution oder ein
bestimmtes Produkt entscheidet. Das Geschäftsmodell von Ænix — wir
bauen und betreiben die Cloud-Plattform-Produkte von Ænix — schafft
eine andere Ausrichtung: Wir möchten, dass die Strategie bei einem
davon landet, *wo es passt*, drängen aber ausdrücklich nicht darauf,
wo es nicht passt.

Wir sagen „bleiben Sie beim Hyperscaler“, wenn die Abwägung es
rechtfertigt. Und zwar schriftlich. Der negative Anreiz, der daraus
entsteht, ist real — manche Projekte enden ohne Folgeauftrag für
Plattformarbeit bei Ænix —, und genau so soll Herstellerneutralität
funktionieren.

## Was unsere Beratung tatsächlich liefert

Eine typische Cloud-Strategieberatung von Ænix umfasst:

### Arbeitsstrang 1 — Strategie für das Workload-Portfolio

Taxonomie der Workload-Klassen: reguliert / nicht reguliert, Dauerlast /
Lastspitzen, sensible / nicht sensible Datenklasse, latenzkritisch /
elastisch. Für jede Klasse die Eignung des Substrats (Public Cloud /
von Hyperscalern verwaltet / Private Cloud / souverän / hybrid / Edge).

Ergebnis: eine Matrix von Workload-Klassen zu Substraten mit Begründung
pro Klasse.

### Arbeitsstrang 2 — Position zur Souveränität

Anwendbarkeit der Regulierung über Rechtsordnungen und Branchen hinweg.
Substanzielle Souveränitätsanforderungen pro Workload-Klasse.
Bewertungskriterien für Anbieter aus Sicht der Souveränität.

Ergebnis: eine schriftliche Position zur Souveränität mit benannten
Rechtsordnungen, benannten Einschränkungen für Substrate und
dokumentierter Akzeptanz der Restrisiken.

### Arbeitsstrang 3 — Kostenentwicklung

Kostenprognose über drei bis fünf Jahre für die verschiedenen
Substrat-Optionen. Ehrliche TCO einschließlich versteckter Kosten
(Egress, schlecht genutzte Reservierungen, Kapazität im Platform
Engineering, Wechselkosten durch Vendor-Lock-in,
Hardware-Erneuerungszyklen). Sensitivitätsanalyse für die wichtigsten
Annahmen.

Ergebnis: eine Tabellenkalkulation, die Ihr CFO prüfen kann, plus
erläuternder Text.

### Arbeitsstrang 4 — Empfehlung zum Betriebsmodell

Gestaltung der Funktionen DevOps / SRE / Platform Engineering.
Personalprognosen. Einstellungsplan. Empfehlungen zur
Organisationsstruktur. Prioritäten beim Tooling.

Ergebnis: Empfehlungen zum Organisationsdesign mit benannten Rollen,
RACI-Matrizen und priorisierter Einstellungsreihenfolge.

### Arbeitsstrang 5 — regulatorische Entwicklung

Ausblick auf 24–36 Monate für die anwendbaren Regelwerke. Finalisierung
von EUCS, Durchsetzung von NIS2, Verschärfung branchenspezifischer
Vorgaben, Ausweitung der Souveränitäts-Regelwerke. Wie sich die
Strategie für das Workload-Portfolio anpasst, wenn sich das
regulatorische Umfeld verändert.

Ergebnis: eine regulatorische Roadmap mit Prüfterminen und
Entscheidungsauslösern.

### Synthese: der Plan für 18–36 Monate

Die Ergebnisse von fünf Arbeitssträngen werden zu einem
Strategiedokument auf Vorstandsniveau zusammengeführt. Management
Summary (3–5 Seiten). Details der Arbeitsstränge (5–8 Seiten je
Strang). Roadmap mit Meilensteinen (2–3 Seiten). Empfehlungen zur
Reihenfolge der Umsetzung.

Insgesamt: ein Dokument mit 30–50 Seiten plus Management-Präsentation
für Vorstand bzw. Sponsoren.

## Varianten der Zusammenarbeit

- **Strategisches Assessment über 4 Wochen** — engerer Umfang,
  Festpreis, ein einzelnes Segment des Workload-Portfolios
- **Strategieprojekt über 8 Wochen** — voller Umfang mit fünf
  Arbeitssträngen, Festpreis
- **Quartalsweise strategische Beratung** — laufende Begleitung bei
  strategischen Entscheidungen, sobald sie anstehen (typischerweise für
  Tier-1-Kunden)

## Wo der Nutzen der Beratung wächst

Strategieprojekte haben oft ein „Schrankware“-Problem — das Ergebnis
wird abgeliefert, verteilt, und 18 Monate später weiß niemand mehr, was
drinstand. Das Beratungsmodell von Ænix setzt hier an:

- **Von Engineers geschrieben, nicht von Beratern** — unsere
  Ergebnisse schreiben dieselben Engineers, die sie umsetzen würden;
  technische Nachvollziehbarkeit bedeutet, dass sich jede Aussage auf
  konkrete Artefakte zurückführen lässt.
- **Kontinuität in der Umsetzung** — beauftragt der Kunde Ænix mit der
  Umsetzung, wirkt das Engineering-Team, das die Strategie geschrieben
  hat, an der Ausführung mit. Kein Verlust bei der Übergabe.
- **Entscheidungstempo statt Folienglanz** — wir liefern 30–50 Seiten
  verwertbarer Details, nicht 100 Seiten Management-Theater.
- **Quartalsweise strategische Beratung** für Tier-1-Kunden hält die
  Strategie aktuell, während sich das Umfeld des Kunden und die
  Regulierung weiterentwickeln.

## Wann diese Beratung passt

Gute Eignung:

- CIO / CTO / Head of Cloud in einer Organisation mit über 100 Mio. €
  Umsatz
- Vor der Entscheidung über eine mehrjährige Cloud-Ausrichtung
  (Modernisierung, Repatriierung, souveräne Cloud, KI-Infrastruktur)
- Bisherige Strategiearbeit hat herstellergebundene Optionen
  hervorgebracht, mit denen man sich unwohl fühlt
- Regulatorischer Druck (DORA, NIS2, branchenspezifisch) erfordert
  eine substanzielle Positionierung über die Erfüllung von
  Beschaffungsklauseln hinaus

Bedingte Eignung:

- Mittelgroße Organisationen mit einfacherem Entscheidungsraum — hier
  passt eher ein Platform Readiness Assessment (taktischer) als ein
  vollständiges Strategieprojekt
- Entscheidung für eine einzelne Workload-Klasse (z. B. nur
  KI-Infrastruktur) — hier passt eher das KI-spezifische
  Sovereign AI Architecture Review

Schlechte Eignung:

- Organisationen, die sich bereits auf ein bestimmtes
  Hyperscaler-Programm festgelegt haben — Ænix kann zu konkreten
  Architekturlücken innerhalb dieser Festlegung beraten, aber eine
  vollständige Strategiearbeit setzt voraus, dass die Entscheidungen
  noch offen sind
- Strategiearbeit, bei der es vor allem um Change Management oder
  Umstrukturierung der Organisation geht — das ist eine andere
  Kategorie

## Der Unterschied zum Platform Readiness Assessment

Die beiden Angebote überschneiden sich im Umfang, verfolgen aber
unterschiedliche Zwecke:

- **Platform Readiness Assessment** ist *taktisch* — es bewertet den
  Ist-Zustand gegenüber einer Zielarchitektur und liefert einen
  Maßnahmenplan über 14–28 Tage. Es kommt zum Einsatz, wenn die
  strategische Richtung feststeht.
- **Cloud-Strategie-Beratung** ist *strategisch* — sie definiert die
  Zielarchitektur und die Substrat-Position. Sie kommt zum Einsatz,
  wenn die strategische Richtung noch offen ist.

Die meisten Kunden nehmen am Ende beides nacheinander in Anspruch:
zuerst die Strategie, dann das Assessment, dann die Umsetzung.

## Weiterführende Informationen

- **[Cloud-Strategie-Beratung](/de/dienstleistungen/cloud-strategy-consultancy/)** —
  die Angebotsseite
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** —
  das taktische Assessment
- **[Cloud Readiness Assessment — Methodik für 14 Tage](/de/blog/2026/05/cloud-readiness-assessment-methodik/)** —
  Details zur Methodik des taktischen Assessments
- **[Cloud Engineering 2026](/de/dienstleistungen/cloud-engineering/)** —
  die sieben Disziplinen des Cloud Engineering
