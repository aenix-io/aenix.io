---
title: "Telco-Cloud-Modernisierung 2026 — von Legacy-NFV zur Kubernetes-nativen Edge"
seo_title: "Telco-Cloud: von Legacy-NFV zu Kubernetes"
description: "Wie Tier-1- und Tier-2-Telcos Legacy-NFV-Umgebungen zu Kubernetes-nativen, souveränen Cloud-Plattformen modernisieren — ein Leitfaden für Architekten."
slug: "telco-cloud-modernisierung-nfv-kubernetes-edge"
date: "2026-05-28"
cover_image: "/img/blog/covers/de/telco-cloud-modernisierung-nfv-kubernetes-edge.jpg"
author: "Aenix Team"
type: "article"
topics: ["Telco", "Sovereignty", "Multi-tenancy", "Cozystack", "Cloud", "AI and ML"]
language: "de"
hreflang_en: "/blog/2026/05/telco-cloud-edge-nfv-modernization/"
companion_landing: "/de/branchen/telco/"
companion_label: "Zur Branchenseite Telco →"
quiz:
  title: "Wissens-Check: Telco-Cloud-Modernisierung"
  questions:
    - q: "Wie viele parallele Infrastrukturumgebungen betreibt ein typischer europäischer Tier-1-Telco im Jahr 2026?"
      options:
        - { text: "Eine einheitliche Hyperscaler-Landschaft", correct: false }
        - { text: "Drei oder vier parallele Umgebungen", correct: true }
        - { text: "Legacy-NFV plus einen einzigen Edge-Stack", correct: false }
      explanation: "Laut Artikel betreiben Tier-1-Telcos drei oder vier parallele Umgebungen: Legacy-NFV (Baujahr 2015–2020), IT-Cloud, Edge Compute sowie AI/Data Lake/Analytics."
    - q: "Wo braucht die Vision einer einzigen Cozystack-Plattform eine differenzierte Betrachtung statt einer einfachen Passung?"
      options:
        - { text: "Bei IT-Cloud-Workloads, die VMware separat benötigen", correct: false }
        - { text: "Bei AI-/Data-Lake-Workloads, die nicht souverän sein können", correct: false }
        - { text: "Bei NFV, weil die VNF-Zertifizierung an die Hersteller gebunden ist", correct: true }
      explanation: "Der Artikel hält fest, dass die darunterliegende Plattform KubeVirt-basierte VNFs hosten kann, die VNF-Zertifizierung mit Herstellerausrüstung aber herstellergesteuert bleibt und manche VNFs nur auf bestimmten OpenStack-Distributionen zertifiziert sind."
    - q: "Welchen Footprint unterstützt Cozystack für typische Telco-Edge-Standorte?"
      options:
        - { text: "Cluster mit rund 3 Nodes, föderiert zum Core", correct: true }
        - { text: "Mindestens 12 Nodes pro MEC-Standort", correct: false }
        - { text: "Nur Single-Node, ohne Föderation", correct: false }
      explanation: "Laut Artikel unterstützt Cozystack Edge-Deployments mit reduziertem Footprint; typisch sind Cluster mit rund 3 Nodes an Edge-Standorten, die unter demselben Betriebsmodell mit regionalen und zentralen Plattformen föderiert werden."
    - q: "Warum passen AI-Workloads mit dauerhaft hoher Auslastung bei Telcos besser zur Ænix AI Platform als zum Hyperscaler?"
      options:
        - { text: "Hyperscaler können überhaupt keine Inferenz ausführen", correct: false }
        - { text: "Dedizierte GPUs sind wirtschaftlicher als der Hyperscaler", correct: true }
        - { text: "Regulierer verbieten die GPU-Nutzung bei Hyperscalern", correct: false }
      explanation: "Der Artikel erklärt, dass AI-Muster bei Telcos (Verkehrsprognose, Anomalieerkennung, kundennahe AI) von dauerhaft hoher Auslastung geprägt sind — genau der Fall, in dem dedizierte GPUs wirtschaftlich besser abschneiden als der Hyperscaler."
    - q: "Wie lange dauert die Cloud-Plattform mit mehreren Regionen selbst in einem Programm eines Tier-1-Telcos?"
      options:
        - { text: "3–6 Monate Pilot, dann 9–18 Monate bis zum vollen Multi-Region-Betrieb", correct: true }
        - { text: "Wenige Tage, ohne Pilot", correct: false }
        - { text: "Mindestens fünf Jahre bis zur ersten produktiven Nutzung", correct: false }
      explanation: "Für die Plattform folgt der Artikel dem Muster im Betreibermaßstab: 3–6 Monate Pilot, dann 9–18 Monate bis zum vollen Multi-Region-Betrieb. Edge-Ausbau und NFV-Modernisierung laufen als längere parallele Stränge."
---

Die Telco-Cloud-Diskussion des Jahres 2026 steht an einem
ungewöhnlichen Schnittpunkt von Belastungen, denen keine andere Branche
gleichzeitig ausgesetzt ist. NFV-Deployments aus den Jahren 2015–2020
kommen in die Jahre. NIS2-Pflichten gelten für die gesamte Infrastruktur
des Betreibers. Als souverän vermarktete Cloud-Produkte sind kommerziell
attraktiv (eine regionale Souveränitätspositionierung können Hyperscaler
nur schwer nachbilden). Die Nachfrage nach Edge Compute für
5G/6G-Workloads wächst. AI für den Netzbetrieb (Verkehrsprognose,
Anomalieerkennung, kundennahe Assistenten) entsteht gerade.

Die architektonische Antwort lautet selten „eine Plattform für alles“ —
Telcos haben mehrere Betriebsdomänen, jede mit eigenen Randbedingungen.
Die Muster, die über alle Domänen hinweg funktionieren, sind jedoch zu
Kubernetes-nativen Multi-Site-Plattformen mit starker
Mandantentrennung, souveränem Betrieb und Edge-bewusstem Scheduling
zusammengewachsen.

## Was die Modernisierung tatsächlich ersetzt

Die meisten europäischen Tier-1-Telcos betreiben 2026 drei oder vier
parallele Infrastrukturumgebungen:

### 1. Legacy-NFV-Umgebung (Baujahr 2015–2020)

Typischerweise aufgebaut auf VMware Cloud Foundation, auf
OpenStack-basierten Herstellerdistributionen (Red Hat OSP, Mirantis
Cloud Platform, Wind River usw.) oder auf herstellerspezifischer NFVI
(Ericsson CEE, Nokia CloudBand). Sie hostet VNFs von
Netzwerkausrüstern mit herstellerspezifischen
Zertifizierungsanforderungen.

Treiber der Modernisierung: Lebenszyklen der Herstellerdistributionen
(EOL von Red Hat OSP, Umbruch bei Mirantis), die VMware-Preise unter
Broadcom und eine betriebliche Komplexität, die mit jeder Fluktuation im
Team zunimmt. Die meisten Tier-1-Betreiber haben parallele
Modernisierungsprogramme laufen.

### 2. IT-Cloud (getrennt von NFV)

Für Business-Workloads, Kundenportale, Billing, OSS/BSS. Typischerweise
eine separate VMware-Landschaft oder ein Deployment in einer
Hyperscaler-Region. Bei VMware derselbe Broadcom-Druck, beim
Hyperscaler-Deployment der Souveränitätsdruck.

### 3. Edge Compute (5G/6G-Ära)

Verteilte Edge-Standorte in Umspannwerken, Vermittlungsstellen und
MEC-Knoten. Deployments mit kleinerem Footprint und zeitweise
unterbrochener Anbindung an den Core. Häufig auf einem anderen Stack
als die Core-Plattform aufgebaut (ältere Orchestrierung für kleine
Footprints).

### 4. AI / Data Lake / Netzanalytik

Eine neuere Umgebung für Verkehrsprognose, Anomalieerkennung und
kundennahe AI. Heute oft beim Hyperscaler; bei sensiblen
Workload-Mustern wächst der Souveränitätsdruck, sie on-prem zu holen.

## Die Vision einer einzigen Plattform (und wo sie funktioniert)

Der architektonische Reiz einer Modernisierung auf Basis von Cozystack
ist eine einheitliche Plattform über alle vier Umgebungen hinweg: ein
Betriebsmodell, ein Upgrade-Lebenszyklus, ein Observability-Stack,
föderierte Identitäten, GitOps-gesteuerte Änderungen.

Wo das funktioniert:

- **IT-Cloud-Workloads** — ein unkompliziertes Deployment auf Basis von
  Cozystack. Die meisten IT-Cloud-Modernisierungen bei Tier-1-Telcos
  folgen diesem Muster.
- **AI / Data Lake / Analytics** — Workload-Muster der Cozystack AI
  Platform; standardmäßig souverän; mandantenfähig für den Zugriff über
  Geschäftsbereiche hinweg.
- **Edge Compute** — Cozystack unterstützt Edge-Deployments mit kleinem
  Footprint und Föderation zum Core. Standardisiert über alle Standorte.

Wo eine differenzierte Betrachtung nötig ist:

- **Speziell die NFV-Umgebung** — die VNF-Zertifizierung mit
  Herstellerausrüstung wird weiterhin von den Herstellern gesteuert. Die
  darunterliegende Cozystack-Plattform kann KubeVirt-basierte VNFs
  hosten, der Zertifizierungs-Stack bleibt aber an die Hersteller
  gebunden. Manche VNFs sind auf bestimmten OpenStack-Distributionen
  zertifiziert und brauchen einen parallelen Modernisierungsstrang.
- **Kritisches Netz-OAM im SCADA-Stil** — vom Netz getrennte
  (air-gapped) Netzmanagementsysteme mit eigenem Betriebsmodell.
  Cozystack kann sie hosten, die OT-artige Betriebsdisziplin
  unterscheidet sich jedoch von der IT-Cloud.

Das praktische Muster: Cozystack als IT-Cloud-Plattform, AI-Plattform
und Edge-Plattform; NFV erhält einen eigenen Modernisierungsstrang mit
einer Cozystack-äquivalenten Architektur, soweit die
Herstellerzertifizierung es zulässt.

## Mandantenfähigkeit im Telco-Umfeld

Telcos haben mehrschichtige Anforderungen an die Mandantenfähigkeit:

- **Trennung der operativen Geschäftsbereiche** — Festnetz-Breitband,
  Mobilfunk, Geschäftskunden, Privatkunden; jeder Geschäftsbereich hat
  eine andere operative Verantwortung.
- **Kundenseitige Services** — der Telco bietet seinen Geschäftskunden
  Cloud-Kapazität an (Produktlinie souveräne Cloud); jeder Kunde ist ein
  eigener Tenant.
- **Interne versus externe Workloads** — rein interne Workloads (OAM,
  Observability-Backends) gegenüber kundenseitigen Workloads
  (Cloud-Produkt, Kundenportal).
- **Sektorale bzw. regulierte Tenants** — Telcos hosten zunehmend
  regulierte Workloads (Nähe zum Finanzsektor, Aufträge der öffentlichen
  Hand) mit sektoraler Tenant-Isolation.

Das Tenant-CRD-Modell von Cozystack mit verschachtelten Tenants
unterstützt alle vier Ebenen nativ. Ein Tier-1-Telco betreibt
typischerweise 5–50 Top-Level-Tenants mit Hunderten bis Tausenden
verschachtelter Tenants.

## Positionierung über Souveränität

Für Telcos ist Souveränität nicht nur eine Compliance-Frage, sondern ein
kommerzielles Unterscheidungsmerkmal. Europäische Kunden sehen
Abhängigkeiten von Hyperscalern mit Hauptsitz in den USA zunehmend als
strukturelles Risiko. Telcos können in ihrer Region souveräne
Cloud-Produkte anbieten, mit denen von Hyperscalern betriebene Angebote
bei den inhaltlichen Souveränitätskriterien nicht mithalten können.

Eine Architektur auf Basis von Cozystack unterstützt das kommerziell:

- **Kundenkontrollierte Schlüssel** — der Kunde des Telcos hält die
  Schlüssel, der Telco leistet den Betriebssupport
- **Air-Gap-Option** — für Anwendungsfälle mit
  Verschlusssachen
- **Open-Source-Fundament** — Exit-Fähigkeit ist eingebaut; der Telco
  bindet seine Kunden nicht an eine Herstellerbeziehung
- **EU-Rechtsraum** — die EU-Präsenz des Telcos plus die
  EU-Vertragsgesellschaft von Ænix (AENIX s.r.o.)

Für kommerzielle Produktlinien einer souveränen Cloud ist die Ænix
Public Cloud Platform die typische Ergänzung — mehrere Regionen, mehrere
Rechenzentren, ein tiefer Servicekatalog und ein Kundenportal im eigenen
Markenauftritt.

## Die Realität von Edge Compute

5G/6G hat Anforderungen an verteiltes Computing mit sich gebracht, die
die Architektur der NFV-Ära nicht vorhergesehen hat. Modernes Edge
Compute für den Telco-Betrieb umfasst:

- **MEC-Knoten (Multi-access Edge Computing)** an Basisstationen oder
  Vermittlungsstellen für latenzarme Kunden-Workloads
- **Verteilte RAN-Intelligenz** — vRAN-/O-RAN-Workloads mit
  Echtzeitanforderungen
- **Customer-Edge-Compute** — vom Telco verwaltete Edge-Instanzen beim
  Kunden vor Ort (Fabriken, Smart-Grid-Standorte, Verkehrsknotenpunkte)
- **Sektorale Edge** — vom Telco betriebene Edge für Branchenkunden
  (Bankfilialen, Gesundheitseinrichtungen, Einzelhandel)

Cozystack unterstützt Edge-Deployments mit reduziertem Footprint
(typisch sind Cluster mit rund 3 Nodes an Edge-Standorten) und
Föderation zu regionalen und zentralen Plattformen. Dasselbe
Betriebsmodell, dieselbe Observability, ein je Ebene differenzierter
Servicekatalog.

## AI für den Telco-Betrieb

Die AI-Workload-Muster bei Tier-1-Telcos:

- **Verkehrsprognose und Kapazitätsplanung** — Inferenz rund um die Uhr
  auf Netztelemetrie
- **Anomalieerkennung** — Sicherheits- und Betriebsanomalien in
  Echtzeit
- **Kundennahe AI** — Chatbot, Unterstützung bei Rechnungsfragen,
  Routing im Kundenservice
- **Netzoptimierung** — Routing, Traffic Engineering, Energieeffizienz
- **Betrugserkennung** — Erkennung von Transaktionsanomalien,
  Identitätsprüfung
- **Sektorale AI-Services** — vom Telco gehostete AI-Kapazität für
  Branchenkunden (AI für Banken, Gesundheitswesen und öffentlichen
  Sektor)

Es dominieren Workload-Profile mit dauerhaft hoher Auslastung — genau
der Fall, in dem dedizierte GPUs wirtschaftlich besser abschneiden als
der Hyperscaler. Die Ænix AI Platform passt dazu.

## Phasen einer Tier-1-Telco-Modernisierung

Die Cloud-Plattform folgt dem Muster im Betreibermaßstab: 3–6 Monate
Pilot, danach 9–18 Monate bis zum vollen Multi-Region-Betrieb. Edge-Ausbau
und NFV-Modernisierung laufen als längere parallele Stränge, getaktet durch
den Standort-Rollout und die Lebenszyklen der Hersteller. Eine typische
Aufteilung in Phasen:

### Phase 0 — Strategisches Engagement (Beginn des Pilots)

Architektur-Review über alle vier Umgebungen. Kommerzielle Abstimmung zur
Produktlinie souveräne Cloud, zur sektoralen Positionierung und zur
Reihenfolge der Modernisierung. Benennung von Sponsoren und Leitungen
der Arbeitsstränge.

### Phase 1 — Modernisierung der IT-Cloud

Die Ænix Private Cloud Platform bzw. Public Cloud Platform wird
bereitgestellt. Interne Workloads werden migriert. Das Kundenportal für
das souveräne Cloud-Produkt geht live.

### Phase 2 — AI / Data Lake (parallel)

Die Ænix AI Platform wird bereitgestellt. Workloads der
Netzanalytik wandern on-prem. Kundennahe AI-Services gehen live.

### Phase 3 — Ausbau der Edge (fortlaufend, getaktet durch den Standort-Rollout)

Edge-Standorte werden an MEC-, Vermittlungsstellen- und
Customer-Edge-Standorten aufgebaut. Identitäten und Observability sind
übergreifend föderiert.

### Phase 4 — NFV-Modernisierung (parallel, getaktet durch die Lebenszyklen der Hersteller)

Replatforming herstellerzertifizierter VNFs, wo zulässig.
Greenfield-Deployments neuer VNFs auf einer Architektur auf Basis von
Cozystack. Die Legacy-NFV-Umgebung wird parallel weiterbetrieben, bis
der Lebenszyklus des Herstellers ein Upgrade erzwingt.

Ab Phase 5 hängt alles vom Wachstum des kundenseitigen Produkts ab:
regionale Expansion, sektorale SKUs, neue Service-Familien.

## Wann das zu einem Telco passt

Gute Passung:

- Europäischer Tier-1- oder Tier-2-Telekommunikationsbetreiber
- Ein laufendes Programm zur Modernisierung von Legacy-NFV
- Die strategische Absicht, eine Produktlinie souveräne Cloud anzubieten
- Ein Budgetrahmen in Millionenhöhe über ein mehrjähriges Programm
- Rückendeckung auf oberster Führungsebene (CIO / CTO / Leitung des
  Cloud-Geschäftsbereichs)

Bedingte Passung:

- Kleinere Betreiber (regional, MVNO-artig), die Cloud verkaufen — die
  Ænix Public Cloud Platform im Providermaßstab zu den [veröffentlichten
  Preisen](/de/preise/) statt eines vollständigen Betreiberprogramms
- Betreiber mit umfangreicher, noch funktionierender OpenStack-basierter
  NFV-Investition — die Modernisierung kann warten, bis der Lebenszyklus
  des Herstellers sie erzwingt

## Weiterführende Inhalte

- **[Branchenseite Telco](/de/branchen/telco/)** — die kommerzielle
  Landingpage
- **[Produktseite Public Cloud Platform](/de/produkte/public-cloud-platform/)** —
  das Produkt für Telcos, die Cloud-Services verkaufen
- **[Sovereign-Cloud-Builder-Leistungen](/de/dienstleistungen/sovereign-cloud-builder/)** —
  für den Aufbau einer Produktlinie souveräne Cloud
- **[Sovereign-AI-Leistungen](/de/loesungen/sovereign-ai/)** — für
  AI-Workload-Muster
- **[Phasen des Aufbaus einer Public Cloud Platform](/de/blog/2026/05/public-cloud-platform-souveraenes-cloud-produkt/)** —
  mehrjährige Aufbauphasen
- **[Entscheidungen für eine Sovereign-AI-Architektur](/de/blog/2026/05/sovereign-ai-architektur-entscheidungen/)** —
  sieben Entscheidungen für Sovereign AI
