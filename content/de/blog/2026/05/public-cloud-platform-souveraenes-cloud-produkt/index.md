---
title: "Public Cloud Platform im Betreibermaßstab — was der Start einer nationalen souveränen Cloud erfordert"
seo_title: "Public Cloud Platform im Betreibermaßstab"
slug: "public-cloud-platform-souveraenes-cloud-produkt"
description: "Was ein souveräner Cloud-Aufbau im Betreibermaßstab auf der Ænix Public Cloud Platform für Telcos, Banken und nationale Betreiber umfasst: Phasen, Zeitplan."
date: "2026-05-25"
cover_image: "/img/blog/covers/de/public-cloud-platform-souveraenes-cloud-produkt.jpg"
author: "Aenix Team"
type: "article"
topics: ["Cozystack", "Multi-tenancy", "Sovereignty", "Cloud", "Platform Engineering"]
language: "de"
hreflang_en: "/blog/2026/05/public-cloud-edition-multi-tenant-cloud-builder/"
companion_landing: "/de/produkte/public-cloud-platform/"
companion_label: "Details zur Public Cloud Platform ansehen →"
quiz:
  title: "Wissens-Check: Public Cloud Platform"
  questions:
    - q: "Wie viele Managed Services peilt ein Aufbau im Betreibermaßstab typischerweise an — im Vergleich zum Providermaßstab?"
      options:
        - { text: "30-50+ gegenüber rund 20 im Providermaßstab", correct: true }
        - { text: "Dieselben rund 20, nur in größerem Umfang", correct: false }
        - { text: "Über 100, um mit Hyperscalern gleichzuziehen", correct: false }
      explanation: "Laut Artikel stellt ein Aufbau im Providermaßstab rund 20 Managed Services bereit, während ein Aufbau im Betreibermaßstab typischerweise 30-50+ Services über Compute, Storage, Datenbanken, AI/GPU und weitere Bereiche anstrebt."
    - q: "Welchen Zeitrahmen hat ein Public-Cloud-Platform-Programm im Betreibermaßstab mit mehreren Regionen typischerweise?"
      options:
        - { text: "Live in wenigen Tagen, ohne Pilot", correct: false }
        - { text: "Feste Jahres-Subskription über 500.000 € ohne Phasen", correct: false }
        - { text: "3–6 Monate Pilot, dann 9–18 Monate bis zum vollen Multi-Region-Betrieb", correct: true }
      explanation: "Der Abschnitt zur Struktur der Zusammenarbeit beschreibt ein mehrjähriges Programm, kalkuliert je Ausschreibung: 3–6 Monate Pilot (Phasen 0–1), danach 9–18 Monate bis zum vollen Multi-Region-Betrieb (Phasen 2–4). Ein einzelner Anbieter im Providermaßstab ist deutlich schneller live — wenige Wochen nach Bereitstellung der Hardware."
    - q: "Warum sollte der Dialog mit der Aufsicht laut Artikel in Phase 0-1 und nicht erst in Phase 4 stattfinden?"
      options:
        - { text: "Aufsichtsbehörden verlangen eine Meldung vor Baubeginn", correct: false }
        - { text: "Phase 4 ist rechtlich zu spät für Lizenzen", correct: false }
        - { text: "Ein später Einstieg erzwingt einen Umbau der Architektur", correct: true }
      explanation: "Das Fehlermuster „Dialog mit der Aufsicht aufgeschoben“ erklärt: Projekte, die das Gespräch hinauszögern, bauen am Ende ihre Architektur um, um Erwartungen zu erfüllen, die sie von Anfang an hätten einplanen können."
    - q: "Welches Käuferprofil passt laut Artikel SCHLECHT zu einem Programm im Betreibermaßstab?"
      options:
        - { text: "Tier-1-Telcos, die eine souveräne Cloud starten", correct: false }
        - { text: "Kleinere Hosting-Anbieter (im Providermaßstab besser bedient)", correct: true }
        - { text: "Große Banken mit eigener Private Cloud", correct: false }
      explanation: "Der Artikel nennt kleinere Hosting-Anbieter als schlechte Passung für ein Programm im Betreibermaßstab, nicht für das Produkt: Die Public Cloud Platform im Providermaßstab, zu den veröffentlichten Preisen, passt besser zu ihrer Wirtschaftlichkeit und ihrem Betriebsmodell."
    - q: "Was geschieht in Phase 1 (Fundament) einer Zusammenarbeit im Betreibermaßstab?"
      options:
        - { text: "Hardware, erstes Rechenzentrum, Storage und Identity", correct: true }
        - { text: "Markteinführung und Start des Marketings", correct: false }
        - { text: "Servicekatalog für alle 30-50+ Services", correct: false }
      explanation: "Phase 1 umfasst Beschaffung und Einbau der Hardware, das Deployment der Talos/Cozystack-Plattform im ersten Rechenzentrum, die Storage-Schicht, das Netzwerkfundament, die Identity-Integration und die erste Observability — am Ende steht eine funktionierende interne Plattform in einer Region."
---


Die meisten Hosting-Anbieter betreiben die Ænix Public Cloud Platform im
Providermaßstab: Der produktisierte Installer bringt die Plattform wenige
Wochen nach Bereitstellung der Hardware live, die Preise folgen den
veröffentlichten Support-Stufen. In diesem Beitrag geht es um das andere
Ende — das Programm im Betreibermaßstab. Dort lautet die Frage nicht
„Sollen wir Cozystack einsetzen?“ — das ist bereits entschieden. Sie
lautet: „Wir bringen ein Cloud-Produkt im nationalen Maßstab oder für
Tier-1-Kunden auf den Markt; wie sieht die Partnerschaft mit Ænix über
3–6 Monate Pilot und die 9–18 Monate bis zum vollen Multi-Region-Betrieb
aus?“

## Wer die Public Cloud Platform im Betreibermaßstab einsetzt

Fünf Käuferprofile prägen die Projekte im Betreibermaßstab:

1. **Tier-1-Telcos / nationale Betreiber** — etablierte
   Telekommunikationsanbieter, die eine Public Cloud als Teil ihres
   Produktportfolios starten oder ausbauen. Häufig verbunden mit einer
   Souveränitätspositionierung („unsere souveräne Cloud“, „nationale
   Cloud“).
2. **Große Banken mit eigener Cloud** — die Bank nutzt ihr eigenes
   Cloud-Produkt für interne Workloads und verkauft mitunter auch
   Kapazität an ihren Kundenstamm.
3. **Initiativen für souveräne Clouds** — staatlich beauftragte
   Cloud-Produkte, teils als öffentlich-private Partnerschaft
   aufgesetzt, mit ausdrücklichen Souveränitätsanforderungen und
   Abstimmung mit der Aufsicht.
4. **Hosting-Anbieter im großen Maßstab** — Anbieter mit mehr als rund
   5.000 Kunden, bei denen das Betriebsmodell der Public Cloud Platform
   auf mehrere Regionen mit Active/Active über mehrere Rechenzentren
   skaliert werden muss.
5. **Nationale AI/GPU-Betreiber** — dauerhafte Inference- und
   Trainingskapazität für Kunden aus bestimmten Sektoren (Banken,
   Gesundheitswesen, öffentlicher Sektor), in denen
   AI-Souveränität eine Anforderung auf nationaler Ebene ist.

Alle fünf teilen dieselbe betriebliche Realität: Active/Active über
mehrere Regionen oder Rechenzentren; Infrastrukturinvestitionen im
Millionen-Euro-Bereich; kundenseitige SLAs, die sich an den
Erwartungen der nationalen Aufsicht orientieren; und eine Partnerschaft
mit Ænix, die Jahre dauert, nicht Monate.

## Was ein Aufbau im Betreibermaßstab zusätzlich umfasst

### Active/Active über mehrere Regionen und Rechenzentren

Deployments in einem einzigen Rechenzentrum bedient die Public Cloud
Platform im Providermaßstab (oder die Private Cloud Platform für den
internen Einsatz). Ein Aufbau im Betreibermaßstab geht vom ersten Tag an davon aus, dass der Kunde
Active/Active über Regionen oder Rechenzentren hinweg braucht, mit
einer rechenzentrumsübergreifenden Replikation, die auf die RTO/RPO-Ziele
abgestimmt ist. Control Plane, Observability, Identity und
Storage-Schicht der Plattform sind von Grund auf für mehrere Regionen
ausgelegt, statt nachträglich umgerüstet zu werden.

### Tiefe des Servicekatalogs

Ein Aufbau im Providermaßstab stellt rund 20 Managed Services bereit.
Ein Aufbau im Betreibermaßstab zielt typischerweise auf 30-50+ Services
aus Compute, Storage, Networking, Managed Databases, Observability,
AI/GPU, Message Queues, Suche, Content Delivery und Security-Tooling.
Die Paketarchitektur von Cozystack (die Ressourcen Package,
PackageSource und ApplicationDefinition, Stand v1.x) trägt diesen
Ausbau des Katalogs.

### Betriebsteam im großen Maßstab

10-30+ Engineers betreiben die Plattform, je nach Kundenzahl und SLA.
Zur Zusammenarbeit im Betreibermaßstab gehören Rekrutierung und
Schulung des Betriebsteams als eigener, umfangreicher Arbeitsstrang —
nicht nach dem Muster „Sie finden die Leute, wir schulen sie“, sondern:
„Wir entwerfen die Organisationsstruktur gemeinsam mit Ihnen, sitzen
in den Interviews mit, schulen praktisch und leisten in den ersten
12-18 Monaten Eskalations-Support (Plus- oder Enterprise-Stufe), während
Ihr Team Sicherheit gewinnt.“

### Abstimmung mit Aufsicht und Souveränitätsvorgaben

Welches Souveränitätsregelwerk im Markt des Kunden auch gilt —
SecNumCloud, BSI C5, EUCS, sektorale Zusatzanforderungen, nationale
Vergabevorgaben —, die Architektur wird so entworfen, dass sie es
inhaltlich erfüllt und nicht nur vertraglich. Ein Katalog der
Compliance-Nachweise ist Teil der Lieferung.

### Brand Engineering für die Kundenseite

Über die Anpassung des Cozystack Dashboards hinaus umfasst eine
Zusammenarbeit im Betreibermaßstab echte Markenarbeit: ein Kundenportal, das wie ein
erstklassiges Cloud-Produkt wirkt und nicht wie eine angepasste
Cozystack-Instanz. UX-Abläufe, die darauf abgestimmt sind, wie die
Kunden des Kunden über Bestellen, Konfigurieren und Bezahlen denken.
Von Designern geführt, nicht vom Engineering.

## Wie eine Zusammenarbeit im Betreibermaßstab in Phasen verläuft

Die Phasen 0 und 1 bilden den Pilot und dauern zusammen 3–6 Monate. Die
Phasen 2–4 dauern 9–18 Monate bis zum vollen Multi-Region-Betrieb und
überlappen, soweit die Teams es erlauben.

### Phase 0 — Discovery und Aufbau der Partnerschaft (Beginn des Pilots)

Vor dem Engineering steht die Einigung über:
- Strategische Ziele (welches Cloud-Produkt, welcher Kundenstamm,
  welche Wettbewerbspositionierung)
- Regulatorischen Rahmen (welche Regelwerke die Plattform binden)
- Organisationsstruktur (wer verantwortet was; wie die Teams von Ænix
  und Kunde zusammenarbeiten)
- Kommerzielle Struktur (Modell der Zusammenarbeit, IP, Supportmodell
  nach dem Go-live)
- Roadmap (Reihenfolge der Services, geografische Expansion, SLA-Stufen)

Ergebnis: ein unterzeichneter Plan für die Zusammenarbeit mit
benannten Verantwortlichen für jeden Arbeitsstrang auf beiden Seiten.

### Phase 1 — Fundament (restlicher Pilot)

Beschaffung und Einbau der Hardware. Deployment der Talos/Cozystack-Plattform
im ersten Rechenzentrum. Storage-Schicht (LINSTOR/DRBD im großen
Maßstab). Netzwerkfundament. Integration mit der bestehenden
Mitarbeiter-Identity des Kunden (Keycloak / Okta / Active Directory /
souveräner IdP). Erster Observability-Stack.

Endzustand: funktionierende Plattform, eine Region, nur interner
Zugriff. Noch nicht bereit für Kunden.

### Phase 2 — Fundament für mehrere Regionen

Das zweite Rechenzentrum wird aufgebaut. Die rechenzentrumsübergreifende
Replikation wird validiert. Föderierte Identity. Storage-Replikation
über Regionen hinweg (LINSTOR asynchron oder Ceph regionsübergreifend).
Disaster-Recovery-Muster werden getestet. Das Fundament der
Compliance-Dokumentation entsteht.

Endzustand: Plattform über mehrere Rechenzentren, interner Zugriff,
RTO/RPO gegen die Zielwerte validiert.

### Phase 3 — Ausbau des Servicekatalogs

Rollout Service für Service. Zuerst die grundlegenden Services
(Compute, Storage, Basis-Networking, Managed PostgreSQL). Danach
kommen die Familien der Managed Services hinzu (Datenbanken, Queues,
Caches, Suche, Observability). Schließlich produktspezifische Services
(GPU, AI-Inference, sektorspezifisches Compliance-Tooling).

Jeder Service durchläuft: Deployment → interne Tests → Pilot mit
befreundeten Kunden → Produktions-GA. Rollout in Kohorten, kein Big Bang.

### Phase 4 — Kunden-Onboarding und eingeschränkte GA

Das Kundenportal geht live (mit Brand Engineering). Die
Billing-Integration ist durchgängig validiert. Support-Runbooks sind
dokumentiert. Die ersten 10-50 befreundeten Kunden sind an Bord. Das
SLA-Monitoring läuft im Regelbetrieb.

Endzustand: Das Cloud-Produkt ist mit der ersten Kundenkohorte live,
Billing- und Support-Abläufe haben sich bewährt.

### Phase 5 — General Availability und Skalierung (fortlaufend)

Start am offenen Markt. Marketing und Vertrieb legen los. Das
Betriebsteam wächst mit den Kunden. Der Eskalations-Support von Ænix
(Plus- oder Enterprise-Stufe) läuft weiter, bis das Team des Kunden ihn
selbst übernehmen kann (typischerweise 12-24 Monate nach GA).

Alle weiteren Phasen folgen der Roadmap: neue Services, neue Regionen,
neue sektorspezifische SKUs.

## Woran Cloud-Projekte im Millionen-Euro-Bereich scheitern

Drei Fehlermuster, die wir in der Branche beobachtet haben:

### 1. Zu wenig Investition in Brand Engineering

Eine vom Engineering getriebene Plattform mit einer UX auf
Engineering-Niveau. Kunden klicken sich durch, finden sie funktional,
aber wenig ansprechend, und melden sich stattdessen beim Hyperscaler
an. Eine Zusammenarbeit im Betreibermaßstab enthält ausdrücklich eine
Designpartnerschaft, um genau das zu vermeiden.

### 2. Betriebsteam für den Go-live dimensioniert, nicht für das Volumen in 18 Monaten

Cloud-Produkte wachsen im ersten Jahr nach GA exponentiell, wenn die
Positionierung stimmt. Betriebsteams, die auf die Kundenzahl zum
Go-live ausgelegt sind, werden in Monat 6-12 überrollt. Planen Sie die
Betriebskapazität für das Volumen in 18 Monaten und stellen Sie
vorausschauend ein.

### 3. Dialog mit der Aufsicht aufgeschoben

Eine Souveränitätspositionierung hängt von der Zustimmung der Aufsicht
ab (ausdrücklich oder stillschweigend). Projekte, die das Gespräch mit
der Aufsicht bis in eine späte Phase verschieben, bauen schließlich
ihre Architektur um, um Erwartungen zu erfüllen, die sie von Anfang an
hätten einplanen können. Binden Sie die Aufsicht in Phase 0-1 ein,
nicht in Phase 4.

## Wann ein Programm im Betreibermaßstab die richtige Antwort ist

Gute Passung:

- Tier-1-Telco / nationaler Betreiber / große Bank / Initiative für
  eine souveräne Cloud
- Betriebliche Realität mit mehreren Regionen oder Rechenzentren
- 5.000+ angestrebte Kunden oder ein strategischer Kundenstamm
- Budgetrahmen im Millionen-Euro-Bereich über ein mehrjähriges Programm
- Souveränität und Positionierung gegenüber der Aufsicht sind Kern des
  Nutzenversprechens
- Sponsoring auf oberster Führungsebene (mindestens CIO oder CTO)

Bedingte Passung:

- Große Hosting-Anbieter unterhalb des Maßstabs eines Tier-1-Telcos —
  je nach Wachstumsprofil passt die Public Cloud Platform im
  Providermaßstab, Region für Region erweitert, oft besser als ein
  vollständiges Betreiberprogramm
- Auf AI/GPU fokussierte Betreiber, bei denen der AI-Workload dominiert
  — hier passt die Ænix AI Platform womöglich besser, ergänzt um
  ausgewählte Komponenten der Public Cloud Platform

Schlechte Passung:

- Kleinere Hosting-Anbieter — die Public Cloud Platform im
  Providermaßstab (zu den [veröffentlichten Preisen](/de/preise/)) passt
  bei Wirtschaftlichkeit und Betriebsmodell deutlich besser
- Regulierte Unternehmen, die Cloud konsumieren statt sie anzubieten —
  hier ist die Private Cloud Platform die richtige Antwort

## Struktur der Zusammenarbeit

- **Discovery Call** (Führungsebene, 60-90 Min.) — Einschätzung der
  strategischen Passung
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**
  (Festpreis, 28 Tage vollständig) — Grundlage für den Aufbau der
  Partnerschaft; Ergebnis ist ein unterzeichneter Plan
- **Pilot** (Phasen 0–1, 3–6 Monate), danach **Phasen 2–4** (9–18 Monate
  bis zum vollen Multi-Region-Betrieb)
- **Support-Subskription** (fortlaufend) — Plus- oder Enterprise-Stufe
  (siehe [Preise](/de/preise/)), bis das Team des Kunden die Eskalation
  übernehmen kann

Umfang der Zusammenarbeit: mehrjähriges Programm, kalkuliert je
Ausschreibung.

## Wo Sie tiefer einsteigen können

- **[Public Cloud Platform](/de/produkte/public-cloud-platform/)** —
  Funktionsübersicht, produktspezifische FAQ
- **[Public Cloud Builder](/de/dienstleistungen/public-cloud-builder/)** —
  Details zur Zusammenarbeit
- **[Sovereign Cloud Builder](/de/dienstleistungen/sovereign-cloud-builder/)** —
  für die Variante mit Schwerpunkt Souveränität
- **[Souveräne Cloud aufbauen — Playbook für die EU und Zentralasien](/de/blog/2026/05/souveraene-cloud-aufbauen-eu-zentralasien/)** —
  Architekturmuster für souveräne Clouds
