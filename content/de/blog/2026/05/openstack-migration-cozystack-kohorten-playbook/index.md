---
title: "OpenStack-Migration — ein kohortenbasiertes Playbook für den Umstieg auf Cozystack 2026"
description: "Kohortenbasiertes Playbook für die Migration von produktivem OpenStack zu Cozystack: Komponenten-Mapping, Image-Konvertierung, Netzwerk, Übergabe und Zeitplan."
slug: "openstack-migration-cozystack-kohorten-playbook"
date: "2026-05-20"
cover_image: "/img/blog/covers/de/openstack-migration-cozystack-kohorten-playbook.jpg"
author: "Aenix Team"
type: "tutorial"
topics: ["OpenStack", "Cozystack", "Migration", "Multi-tenancy", "Kubernetes"]
language: "de"
hreflang_en: "/blog/2026/05/openstack-migration-cozystack-cohort-playbook/"
companion_landing: "/de/migration/openstack/"
companion_label: "Zum OpenStack-Migrations-Hub →"
quiz:
  title: "Wissens-Check: Migration von OpenStack zu Cozystack"
  questions:
    - q: "Worauf wird Nova in der Komponententabelle OpenStack→Cozystack abgebildet?"
      options:
        - { text: "KubeVirt auf Talos (Compute-Schicht)", correct: true }
        - { text: "Cilium auf Talos (Netzwerkschicht)", correct: false }
        - { text: "LINSTOR (Block-Storage-Schicht)", correct: false }
      explanation: "Laut Komponenten-Mapping: Nova (Compute) → KubeVirt auf Talos. Neutron entspricht Cilium (eBPF), Cinder entspricht LINSTOR, dem per DRBD replizierten Block Storage, den Cozystack mitliefert."
    - q: "Welcher der drei Migrationstreiber hängt strukturell damit zusammen, dass Red Hat OSP in Richtung OpenShift Virtualization überführt wird?"
      options:
        - { text: "Fachkräftemangel (schrumpfender Pool an OpenStack-Know-how)", correct: false }
        - { text: "Lebenszyklus der Hersteller-Distributionen (OSP 17/18 als letzte Major-Linien)", correct: true }
        - { text: "Grenze des Servicekatalogs (begrenzte Day-2-Plattformfunktionen)", correct: false }
      explanation: "Red Hat OSP 17/18 sind die letzten Major-Release-Linien, während Red Hat auf OpenShift Virtualization umschwenkt. Mirantis hat diesen Schritt schon vor Jahren vollzogen; Canonical Charmed OpenStack wird im Enterprise-Vertrieb nur noch schmaler vermarktet. Der Lebenszyklus der Hersteller-Distributionen ist der strukturelle Druck, der die Entscheidung erzwingt."
    - q: "Wie lange dauert die gesamte Modernisierung realistisch bei einer Tier-1-Telco mit 1.000–5.000 Nodes und zertifizierten VNFs?"
      options:
        - { text: "6–12 Monate durchgängig (schnelles Greenfield-Programm)", correct: false }
        - { text: "12–24 Monate durchgängig (Migration innerhalb eines Kalenderjahres)", correct: false }
        - { text: "24–48 Monate insgesamt; erste Workloads auf Cozystack nach 12–18 Monaten", correct: true }
      explanation: "Die Modernisierung bei einer Tier-1-Telco dauert insgesamt 24–48 Monate, die ersten produktiven Workloads laufen nach 12–18 Monaten auf Cozystack. Der Track zur VNF-Modernisierung läuft parallel über 18–36 Monate. Mittelgroße Unternehmen (200–500 Nodes) kommen auf 12–24 Monate."
    - q: "Welche drei Ansätze beschreibt der Artikel für den Umgang mit zertifizierten VNFs bei der Migration einer Tier-1-Telco?"
      options:
        - { text: "Neuzertifizierung erzwingen, VNF aufgeben oder Hersteller wechseln", correct: false }
        - { text: "VNFs auf KubeVirt betreiben, OSP parallel weiterführen oder den CNF-Pfad des Herstellers nutzen", correct: true }
        - { text: "Auf die Entscheidung der Regulierungsbehörde warten (Migration ganz aufschieben)", correct: false }
      explanation: "Die drei beschriebenen Ansätze: (1) VNFs als VMs auf KubeVirt betreiben (die Herstellerzertifizierung gilt dafür womöglich, womöglich auch nicht); (2) zertifizierte VNFs für deren Lebenszyklus auf OpenStack belassen und Plattformen parallel betreiben; (3) sich an der CNF-Modernisierung des Herstellers hin zu Cloud-Native Network Functions auf Kubernetes ausrichten."
    - q: "Welcher Kultur- und Disziplinwechsel braucht laut Artikel bei OpenStack-Betreibern 4–8 Wochen gezieltes Training plus 3–6 Monate Praxis?"
      options:
        - { text: "GitOps-Disziplin verinnerlichen (deklarativ statt imperativ)", correct: true }
        - { text: "Die Cozystack-CLI lernen (Befehle, Flags, Plugin-Modell)", correct: false }
        - { text: "Die Kubernetes-RBAC-Doku lesen (Roles und ClusterRoles)", correct: false }
      explanation: "OpenStack-Betreiber sind imperative APIs gewohnt. Cozystack erwartet GitOps für produktive Änderungen — ein Kulturwandel, nicht nur ein Werkzeugwechsel. Engineers brauchen 4–8 Wochen gezieltes Training und 3–6 Monate Praxis, um die GitOps-Disziplin zu verinnerlichen."
---


OpenStack ist in Telekommunikations- und Großunternehmens-Infrastrukturen
nach wie vor weit verbreitet. Für die Modernisierung gibt es kein
Patentrezept: Ein ausgereiftes OpenStack im Telco-Maßstab mit tiefem
Support durch eine Hersteller-Distribution ist eine ganz andere Migration
als ein mittelgroßes Unternehmen, das Upstream-OpenStack mit einem kleinen
Betriebsteam fährt. Beide können auf Cozystack umsteigen; Phasenplanung und
Risikoprofil unterscheiden sich jedoch erheblich.

## Wo OpenStack weiterhin funktioniert (und das sagen wir auch)

Bevor wir über Migration sprechen, zunächst ehrlich der Gegenfall.
OpenStack bleibt die richtige Antwort für:

- **NFV-Umgebungen von Tier-1-Telcos**, in denen die Hersteller-Distribution
  (Red Hat OSP, Mirantis, Canonical, Wind River) noch Support-Laufzeit hat
  und die VNF-Zertifizierung OpenStack-spezifisch ist
- **Sehr große Bestände (>1.000 Nodes)** mit tiefem OpenStack-Know-how, bei
  denen sich die betriebliche Komplexität bereits amortisiert hat
- **Government Clouds**, in denen OpenStack die vergaberechtlich
  vorgeschriebene Plattform ist (einige Ausschreibungen des öffentlichen
  Sektors in EU-Mitgliedstaaten und im APAC-Raum)
- **Bestehende Investitionen im Jahr 2–3 eines fünfjährigen Rollouts**, bei
  denen die Migrationskosten die Kosten des Weiterbetriebs übersteigen würden

Für alle anderen lohnt sich in der Regel eine ernsthafte Bewertung der
Modernisierung.

## Was OpenStack-Betreiber zur Migration drängt

Drei Treiber bestimmen die Diskussion 2026:

### 1. Lebenszyklus der Hersteller-Distributionen

Red Hat überführt OSP (OpenStack Platform) in Richtung OpenShift
Virtualization; OSP 17/18 sind die letzten Major-Release-Linien. Mirantis
Cloud Platform hat seinen kommerziellen Fokus schon vor Jahren verlagert.
Canonical Charmed OpenStack ist weiterhin aktiv, wird im Enterprise-Vertrieb
aber deutlich schmaler vermarktet. Der Herstellersupport für
OpenStack-Distributionen konsolidiert sich; Deployments aus der Mitte der
2020er-Jahre stehen in den nächsten 24–36 Monaten vor einem strukturellen
Umbruch.

### 2. Fachkräftemangel

OpenStack-Know-how wird knapper. Neue Engineers lernen Kubernetes, nicht das
Komponentenmodell aus Nova/Neutron/Cinder/Keystone. Betreiber mit tiefer
OpenStack-Erfahrung gehen in den Ruhestand oder wechseln in andere Rollen.
Einstellen wird schwieriger, Halten ebenso.

### 3. Grenze des Servicekatalogs

Der Kernumfang von OpenStack ist IaaS (Compute, Netzwerk, Storage).
Verwaltete Datenbanken (Trove), Container-Orchestrierung (Magnum) und
moderne Servicefamilien (Managed Kafka, S3-Äquivalent im großen Maßstab,
GPU-as-a-Service, AI Inference) lassen sich entweder nur umständlich
anflanschen oder liegen ganz außerhalb der Plattform. Für Betreiber, deren
Kunden oder interne Teams zunehmend Services in Plattformqualität erwarten,
fällt OpenStack ohne erheblichen zusätzlichen Engineering-Aufwand zurück.

## Komponenten-Mapping

Für OpenStack-Betreiber, die Cozystack bewerten, gilt folgende kanonische
Übersetzung:

| OpenStack | Cozystack-Äquivalent |
|---|---|
| **Nova** (Compute) | KubeVirt auf Talos |
| **Neutron** (Netzwerk) | Cilium (eBPF) |
| **Cinder** (Block Storage) | LINSTOR (per DRBD replizierter Block Storage, über den Piraeus-Operator) |
| **Swift** (Object Storage) | SeaweedFS (S3-kompatibel, verwalteter Bucket-Service) |
| **Keystone** (Identität) | Kubernetes RBAC + Föderation mit dem Workforce-IdP (Keycloak / Okta / AD) |
| **Glance** (Image-Registry) | KubeVirt CDI + Container-Image-Registry |
| **Magnum** (Managed Kubernetes) | Nativ — Kubernetes IST die Plattform |
| **Heat** (Orchestrierung) | Kubernetes-Operatoren + GitOps (Flux / Argo CD) |
| **Horizon** (UI) | Cozystack Dashboard |
| **Ceilometer / Telemetry** | VictoriaMetrics + VictoriaLogs |
| **Trove** (DBaaS) | Verwaltete Datenbanken in Cozystack (PostgreSQL, MariaDB, MongoDB, Redis, Valkey, Kafka, NATS, RabbitMQ, ClickHouse, OpenSearch, Qdrant, FoundationDB) |
| **Designate** (DNS) | external-dns-Operator + DNS-Anbieter des Kunden |
| **Octavia** (Load Balancing) | MetalLB + Cilium L7 + Ingress Controller |
| **Manila** (File Share) | RWX-Volumes auf DRBD-gestützten LINSTOR-Storage-Classes (Cozystack v1.0+); optionales Paket `nfs-driver` für externe NFS-Exporte |
| **Project / Domain / Role** (Mandantenfähigkeit) | Tenant CRD + verschachtelte Tenants |

Die meisten OpenStack-Engineers empfinden das Betriebsmodell von Cozystack
als einfacher, sobald sie die Kubernetes-Lernkurve genommen haben — weniger
bewegliche Teile, deklarativer, integrierte Observability. Die Lernkurve
selbst ist allerdings real: 4–8 Wochen gezieltes Training pro Engineer,
länger für fachliche Tiefe.

## Migrationsphasen in Kohorten

### Phase 0 — Assessment (3–6 Wochen)

Bestandsaufnahme des OpenStack-Deployments:

- **Nutzung Service für Service** — welche OpenStack-Services Sie
  tatsächlich verwenden (Nova / Neutron / Cinder fast immer, alles andere
  variiert)
- **Workload-Inventar** — Anzahl der Instanzen, Betriebssystem-Mix,
  vCPU-/RAM-/Disk-Profile, Kritikalitätsstufe
- **Netzwerk-Inventar** — Subnetze, Security Groups, Floating IPs,
  Konfigurationen externer Netze, Octavia-Load-Balancer
- **Storage-Inventar** — Cinder-Volume-Typen, Aufbewahrung von Snapshots,
  Nutzung von Swift-Buckets
- **Mandantenfähigkeit** — Hierarchie aus Projects und Domains,
  benutzerdefinierte Rollen, RBAC-Richtlinien
- **Integrationen** — VNF-Zertifizierungen der Hersteller,
  Observability-Anbindungen, CI/CD-Pipelines, ITSM-Werkzeuge

Ergebnis: ein Migrationsplan mit Workload-Kategorien (jetzt migrieren /
später migrieren / bleiben / neu architekturieren), Risikomarkierungen und
Optionen für die Phasenplanung.

### Phase 1 — Cozystack-Fundament (2–4 Monate)

Hardwarebeschaffung (oder in späteren Phasen Wiederverwendung der Kapazität,
die OpenStack freigibt). Die Cozystack-Plattform wird auf neuer Hardware
parallel zum bestehenden OpenStack aufgebaut. Das Cilium-Networking wird
gegen jene OpenStack-Netzwerkkonfigurationen validiert, die übertragen
werden sollen. LINSTOR-Storage wird im großen Maßstab in Betrieb genommen.
Föderierte Identität (Keycloak + IdP des Kunden).

Das Tenant-CRD-Modell wird so entworfen, dass es sich sauber aus der
Project-/Domain-Hierarchie von OpenStack ableiten lässt. Jedes
OpenStack-Project der obersten Ebene wird typischerweise zu einem
Cozystack-Tenant, verschachtelte Projects werden zu verschachtelten Tenants.

Endzustand: Die Cozystack-Plattform läuft, ist intern validiert und bereit
für das Onboarding der Workloads.

### Phase 2 — Betriebswerkzeuge (2–3 Monate)

Observability-Stack (VictoriaMetrics + VictoriaLogs), integriert in das SIEM
des Kunden. Backup/DR mit Velero plus anwendungsspezifischen Mustern.
Runbook-Bibliothek. Rufbereitschaft. Incident-Response-Prozess.
GitOps-Deployment-Workflow (standardmäßig Flux, Argo CD auf Wunsch des
Kunden).

Endzustand: Werkzeuge in Produktionsbetriebsqualität sind vorhanden, die
Schulung des Teams läuft.

### Phase 3 — Workload-Migration in Kohorten (4–12 Monate)

Es migrieren jeweils Kohorten von 50–200 Instanzen. Pro Kohorte:

1. **Image-Konvertierung** — OpenStack-Glance-Images werden in ein
   KubeVirt-kompatibles Format konvertiert. Die meisten KVM-basierten
   OpenStack-Images lassen sich mit `qemu-img convert` und kleinen
   Metadatenanpassungen umwandeln. In Windows-Instanzen werden
   virtio-Treiber injiziert.
2. **Netzwerk-Mapping** — OpenStack-Subnetze auf Cilium ClusterPool +
   NetworkPolicies, Security Groups auf NetworkPolicies,
   Octavia-Load-Balancer auf MetalLB + Ingress Controller.
3. **Storage-Migration** — Die Daten der Cinder-Volumes werden nach LINSTOR
   migriert. Die Snapshot-Historie wird je nach Aufbewahrungsrichtlinie
   übernommen oder bereinigt. Für Daten in Swift erlaubt die
   S3-API-Kompatibilität eine direkte Migration nach SeaweedFS.
4. **Validierungsfenster** — Der Workload läuft typischerweise 7–14 Tage
   parallel auf Cozystack. Vor dem endgültigen Cutover ist die Freigabe des
   Application Owners erforderlich.
5. **Endgültiger Cutover** — DNS bzw. Load Balancer werden auf den
   Cozystack-Endpunkt umgeschaltet. Die OpenStack-Instanz bleibt für ein
   Rollback-Fenster von 7–30 Tagen verfügbar.

### Phase 4 — Betriebsübergabe (2–4 Monate, parallel zu Phase 3)

Die Ænix-Engineers reduzieren ihre direkte Beteiligung. Das Betriebsteam des
Kunden übernimmt Tier-1-/Tier-2-Incidents. Der Ænix-Retainer läuft für die
Eskalation im Rahmen des Tier-3-SLA weiter. Übergabe der Dokumentation.
Sitzungen zum Wissenstransfer.

### Phase 5 — Stilllegung von OpenStack (2–6 Monate)

Sobald Migrationskohorten abgeschlossen sind, wird OpenStack-Kapazität in
den Cozystack-Cluster überführt. Die Hardware ist dieselbe
Standard-x86-Hardware; der OpenStack-Software-Stack wird stillgelegt.
Verträge für Hersteller-Distributionen laufen gemäß ihrem Lebenszyklus aus.

## Woran Migrationen von OpenStack zu Cozystack scheitern

### 1. Neuentwurf des Netzwerkmodells

Das Netzwerkmodell von OpenStack Neutron war traditionell hochgradig
konfigurierbar — Provider-Netze, Tenant-Netze, Security Groups, Floating
IPs, FWaaS, VPNaaS, komplexe Routing-Topologien. Das eBPF-Modell von Cilium
ist grundlegend anders: L4/L7-NetworkPolicies, eBPF-basiertes Routing,
Hubble für Observability.

Ausgefeilte Neutron-Konfigurationen auf Cilium zu übertragen, erfordert
sorgfältige Architekturarbeit in Phase 0–1. Wer diese überspringt, erlebt in
Phase 3 Produktionsvorfälle, weil Kunden-Workloads ein bestimmtes
Netzwerkverhalten erwarten, das sich nicht direkt übertragen lässt.

### 2. Übersetzung der Mandanten-Richtlinien

Das rollenbasierte Zugriffsmodell von OpenStack (Keystone-Rollen,
Project-Policies) lässt sich nicht 1:1 auf Kubernetes RBAC + Tenant CRD
abbilden. Benutzerdefinierte Rollen für bestimmte OpenStack-APIs haben
möglicherweise keine direkte Entsprechung in Kubernetes. Planen Sie Zeit
für einen Neuentwurf der Richtlinien ein statt für eine mechanische
Übersetzung.

### 3. VNF-Zertifizierung

Tier-1-Telcos mit zertifizierten VNFs stehen vor einer anderen
Herausforderung: Der VNF-Hersteller zertifiziert auf bestimmten
OpenStack-Distributionen, nicht auf Cozystack. Drei Ansätze:

- **VNFs auf KubeVirt unter Cozystack betreiben** — die VNF läuft als VM;
  ob die Herstellerzertifizierung diese Konfiguration abdeckt, ist offen.
  Ein Gespräch mit dem Hersteller ist notwendig.
- **Zertifizierte VNFs auf OpenStack belassen** — parallele Plattformen für
  den Lebenszyklus der zertifizierten VNF; ein Modernisierungs-Track für
  neue VNFs auf Cozystack.
- **Ein Cloud-native Äquivalent verhandeln** — viele VNF-Hersteller
  wechseln zu Cloud-Native Network Functions (CNFs) auf Kubernetes; die
  Migration lässt sich womöglich mit der CNF-Modernisierung des Herstellers
  verzahnen.

In unseren Projekten mit Tier-1-Telcos kommen alle drei Muster vor — je
nachdem, um welchen VNF-Hersteller und welche Generation es geht.

### 4. Wandel der Betriebskultur

OpenStack-Betreiber sind imperative APIs gewohnt (CLI-Befehle, REST-Aufrufe,
Aktionen in der Konsole). Cozystack erwartet GitOps für produktive
Änderungen. Das ist ein Kulturwandel, nicht nur ein Werkzeugwechsel.
Engineers, deren OpenStack-Expertise auf imperativen Workflows aufbaut,
brauchen 4–8 Wochen gezieltes Training plus 3–6 Monate Praxis, um die
GitOps-Disziplin zu verinnerlichen.

Ein Ænix-Engagement umfasst Training als eigenen Workstream; zugleich muss
der Kunde selbst in den kulturellen Wandel investieren.

## Realistische Zeitpläne

Mittelgroßes Unternehmen (200–500 Nodes, einfache Mandantenstruktur,
überwiegend Standard-Networking):

- Phase 0: 3–6 Wochen
- Phase 1: 2–3 Monate
- Phase 2: 1–2 Monate
- Phase 3: 6–12 Monate
- Phase 4–5: 3–6 Monate

**Gesamt: 12–24 Monate**

Tier-1-Telco (1.000–5.000 Nodes, komplexe Mandantenstruktur, zertifizierte
VNF-Umgebungen, NFV-spezifisches Networking):

- Phase 0: 2–3 Monate
- Phase 1: 4–6 Monate
- Phase 2: 2–3 Monate
- Phase 3: 12–24 Monate (mehrere parallele Kohorten)
- Phase 4–5: 6–12 Monate
- Track zur VNF-Modernisierung: parallel 18–36 Monate

**Gesamt: 24–48 Monate für die vollständige Modernisierung; erste
produktive Workloads auf Cozystack innerhalb von 12–18 Monaten**

## Wann die Migration von OpenStack zu Cozystack die richtige Antwort ist

Gute Passung:

- Der Lebenszyklus der Hersteller-Distribution erzwingt innerhalb von 24
  Monaten eine Entscheidung
- Der Fachkräftemangel beginnt, die Betriebsqualität zu beeinträchtigen
- Die Kundennachfrage nach verwalteten Datenbanken / S3 / Containern /
  GPU-Services übersteigt, was OpenStack nativ abdeckt
- Ein Modernisierungsbudget steht über 2–4 Jahre zur Verfügung

Bedingte Passung:

- Stabiles, ausgereiftes OpenStack-Deployment mit tiefer Teamexpertise und
  ohne Druck auf den Servicekatalog — die Modernisierung kann bis zum Ende
  des Herstellerlebenszyklus warten
- Sehr große Bestände (>5.000 Nodes), bei denen die Modernisierungskosten im
  mehrstelligen Millionenbereich liegen — ein gestaffeltes, mehrjähriges
  Programm ist erforderlich

Schlechte Passung:

- Kürzlich ausgerolltes OpenStack im ersten Jahr eines Fünfjahresprogramms —
  bringen Sie zu Ende, was Sie begonnen haben, und modernisieren Sie am Ende
  des Lebenszyklus
- OpenStack auf Basis einer Vergabevorgabe der öffentlichen Hand ohne
  Spielraum für einen Plattformwechsel

## Aufbau des Engagements

- **Discovery Call** (30 Min., kostenlos)
- **Migrations-Assessment** (3–6 Wochen, Festpreis) — Workload-Kategorien,
  Optionen für die Phasenplanung, Risikomarkierungen
- **Pilot-Deployment** (2–3 Monate) — Cozystack wird aufgebaut, 50–100
  Workloads werden migriert, Abrechnungs- und Betriebsabläufe validiert
- **Migration in Kohorten** (6–24 Monate) — Workload-Migration in Kohorten
- **Stilllegung von OpenStack** (parallel zur Kohortenmigration) —
  schrittweise, sobald Kohorten abgeschlossen sind
- **Managed Retainer** (optional, laufend) — Tier-3-SLA von Ænix

## Weiterführende Inhalte

- **[OpenStack-Migrations-Hub](/de/migration/openstack/)** — kommerzielle
  Landingpage
- **[OpenStack vs Cozystack: Modernisierung](/de/blog/2026/05/openstack-vs-cozystack-modernisierung/)** —
  Analyse des Modernisierungspfads
- **[OpenStack-Alternative](/de/alternativen/openstack-alternative/)** —
  kommerzielle Landingpage mit Fokus auf Alternativen
- **[Produktseite Public Cloud Platform](/de/produkte/public-cloud-platform/)** —
  häufiges Zielprodukt für OpenStack-Migrationen von Hosting-Anbietern
