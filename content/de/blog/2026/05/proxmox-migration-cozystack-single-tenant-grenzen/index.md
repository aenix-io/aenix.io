---
title: "Von Proxmox zu Cozystack — wenn Single-Tenant an seine Grenzen stößt"
seo_title: "Von Proxmox zu Cozystack: Grenzen von Single-Tenant"
description: "Wann wächst Proxmox VE über Single-Tenant hinaus? Leitfaden zur Migration von Proxmox zu Cozystack für MSPs und Teams an Grenzen bei Mandanten und Skalierung."
slug: "proxmox-migration-cozystack-single-tenant-grenzen"
date: "2026-05-23"
cover_image: "/img/blog/covers/de/proxmox-migration-cozystack-single-tenant-grenzen.jpg"
author: "Aenix Team"
type: "tutorial"
topics: ["Proxmox", "Cozystack", "Migration", "Multi-tenancy", "Hosting"]
language: "de"
hreflang_en: "/blog/2026/05/proxmox-migration-when-cozystack-fits/"
companion_landing: "/de/migration/proxmox/"
companion_label: "Zum Proxmox-Migrations-Hub →"
quiz:
  title: "Wissens-Check: Migration von Proxmox zu Cozystack"
  questions:
    - q: "Ab welcher Kundenzahl wirkt das Mandantenmodell von Proxmox für Hosting-Anbieter zu dünn?"
      options:
        - { text: "Ab rund 300 Kunden (Audit und Quotas pro Tenant werden mühsam)", correct: true }
        - { text: "Ab rund 50 Kunden (Schwelle für Deployments in einem Rack)", correct: false }
        - { text: "Ab rund 5.000 Kunden (betriebliche Obergrenze im Hyperscale-Bereich)", correct: false }
      explanation: "Ab rund 300 kundenseitigen Tenants wirkt das Modell aus Pools, Realms und Berechtigungen von Proxmox (ohne harte Isolation) zu dünn; Audit-Trails pro Kunde, Isolationsgarantien und die Durchsetzung von Quotas werden zur betrieblichen Belastung."
    - q: "Welche zwei Proxmox-Komponenten entsprechen in Cozystack KubeVirt bzw. Cilium?"
      options:
        - { text: "ZFS-Storage und Proxmox Backup Server (PBS)", correct: false }
        - { text: "LXC-Container und pvesh (CLI-Verwaltungsebene)", correct: false }
        - { text: "KVM-Hypervisor und Linux SDN / Linux-Bridges", correct: true }
      explanation: "Laut der Tabelle zur Architekturabbildung: KVM-Hypervisor → KubeVirt (KVM-basiert) und Linux SDN / Bridges → Cilium (eBPF). LXC erfordert ein Redesign statt einer 1:1-Abbildung; PBS entspricht Velero + S3 + PITR."
    - q: "Welche realistische Gesamtdauer hat die Migration bei einem typischen Hosting-Anbieter mit 300–1.000 Kunden?"
      options:
        - { text: "1–3 Monate (schnelles Lift-and-Shift-Programm)", correct: false }
        - { text: "6–18 Monate insgesamt bei mittelgroßen Anbietern", correct: true }
        - { text: "3–5 Jahre (langer Parallelbetrieb zweier Plattformen)", correct: false }
      explanation: "Vom Projektstart bis zur vollständigen Ablösung von Proxmox vergehen bei typischen mittelgroßen Anbietern 6–18 Monate. Größere Betreiber (1.000–5.000 Kunden) dehnen Phase 3 auf 12–24 Monate aus, um ein tragfähiges Kohortentempo zu halten."
    - q: "Warum ist LXC die problematischste Proxmox-Komponente bei der Migration?"
      options:
        - { text: "Weil LXC proprietär ist (keine Code-Parität mit Upstream)", correct: false }
        - { text: "Weil LXC System-Container sind, Kubernetes Anwendungscontainer nutzt", correct: true }
        - { text: "Weil LXC keine Live-Snapshots oder Replikation unterstützt", correct: false }
      explanation: "Proxmox-LXC sind System-Container (vollständiges OS-Image); Kubernetes-Container sind Anwendungscontainer (ein einzelner Prozess oder wenige). Workloads, die LXC als System-Container nutzen, wandern entweder in KubeVirt-VMs (1:1, aber schwergewichtiger) oder werden zu Kubernetes-nativen Anwendungen umgebaut."
    - q: "Wann sollte ein Hosting-Anbieter laut Artikel bei Proxmox bleiben, statt eine vollständige Migration durchzuführen?"
      options:
        - { text: "Bei stabilem Bestand unter rund 200 Kunden und überwiegend VM-Workloads", correct: true }
        - { text: "Wenn Kunden Managed PostgreSQL als Service verlangen", correct: false }
        - { text: "Wenn der Betreiber eine Active/Active-Topologie über mehrere Rechenzentren braucht", correct: false }
      explanation: "Für Anbieter mit weniger als 200 Kunden, Mittelstands-IT mit unter 100 internen VMs, Lab- und Entwicklungsumgebungen sowie überwiegend VM-basierte Workloads bleibt Proxmox die bessere Antwort — ein vollständiges Migrationsprogramm ist für diesen Rahmen überdimensioniert; wer neue Services anbieten will, kann eine neue Produktlinie auf der Ænix Public Cloud Platform im Providermaßstab starten. Managed Services und Active/Active über mehrere Rechenzentren sind dagegen Treiber, die eine Migration rechtfertigen."
---


Proxmox VE ist eine der erfolgreichsten Open-Source-Virtualisierungsplattformen
des letzten Jahrzehnts: ausgereift, einfach zu installieren, mit starker
Community, unter AGPLv3 und mit kommerzieller Subscription. Wir sprechen mit
vielen Betreibern, die mit Proxmox angefangen haben, gewachsen sind und nun
prüfen, was als Nächstes kommt.

Entscheidend ist: Für viele von ihnen ist Proxmox die richtige Antwort. Dieser
Artikel zeigt, wann eine Migration gerechtfertigt ist und wann sie verfrüht wäre.

## Wo Proxmox weiterhin gewinnt

Proxmox VE bleibt die richtige Antwort für:

- **IT-Abteilungen im Mittelstand** — kleine und mittlere Unternehmen mit
  10–50 virtualisierten Workloads im eigenen Haus, ohne Bedarf an
  kundenseitiger Mandantenfähigkeit
- **Single-Tenant-Labs und Entwicklungsumgebungen** — die betriebliche
  Einfachheit von Proxmox schlägt jede schwergewichtigere Alternative
- **Etablierte Betreiber mit stabilem Kundenstamm unter rund 200 Kunden** —
  die kommerzielle Rechnung von Proxmox geht weiterhin auf; die
  Migrationskosten würden den Nutzen übersteigen
- **Überwiegend VM-basierte Workloads** — der Funktionsumfang von Proxmox
  mit KVM und LXC passt sauber
- **Bestehende Betreiber mit tiefer Proxmox-Expertise und stabilem Team** —
  zu den Wechselkosten gehört auch die Umschulung des Teams

Wenn Ihre Situation darauf zutrifft: *Migrieren Sie nicht.* Die Ænix Public
Cloud Platform ist für den Single-Tenant-Betrieb im Mittelstand
überdimensioniert. Das sagen wir bereits im Discovery Call, statt das
Engagement zu forcieren.

## Woran man erkennt, dass Proxmox zu klein wird

Eine Migration verdient eine ernsthafte Prüfung, wenn mindestens drei der
folgenden Punkte zutreffen:

### 1. Die Kundenzahl wächst über rund 300

Das Mandantenmodell von Proxmox (Pools, Realms und Berechtigungen, keine harte
Isolation) wirkt ab etwa 300 kundenseitigen Tenants zu dünn. Audit-Trails
pro Kunde, Isolationsgarantien und die Durchsetzung von Quotas werden zur
betrieblichen Belastung.

### 2. Kunden fragen nach Diensten jenseits von VMs

Managed PostgreSQL, MariaDB, MongoDB, Redis, Valkey, Kafka, S3-kompatibler
Object Storage, Tenant-Kubernetes-Cluster, GPU-Dienste. Proxmox deckt VMs und
LXC ab; alles andere wird über manuelle Integration oder externe Systeme
angeflanscht.

### 3. WHMCS oder eine vergleichbare Kundenverwaltung

Proxmox hat eine WHMCS-Integration, doch der Servicekatalog jenseits von VMs
bedeutet manuelle Integrationsarbeit. Die Ænix Public Cloud Platform ergänzt
eine WHMCS-Integration (ein proprietäres Ænix-Modul, nicht Teil des
Open-Source-Projekts Cozystack), die den gesamten Servicekatalog abdeckt.

### 4. Active/Active über mehrere Rechenzentren

Proxmox-Clustering ist auf ein Rechenzentrum beschränkt. Geografische
Verteilung erfordert manuelle Replikationsmuster zwischen Clustern. Cozystack
behandelt Active/Active über mehrere Rechenzentren als vollwertigen
Deployment-Modus.

### 5. Nachfrage nach containernativen Diensten

Kunden wollen Tenant-Kubernetes-Cluster oder containernative Servicekataloge.
Proxmox kann Container über LXC betreiben, ist aber nicht das richtige
Betriebsmodell für kundenseitiges Kubernetes-as-a-Service.

### 6. Wiederkehrender Lizenz- und Subscription-Druck bei kommerziellem Proxmox

Die kommerzielle Subscription von Proxmox ist wettbewerbsfähig, aber ein
realer Kostenfaktor. Betreiber mit wachsendem Infrastruktur-Footprint stellen
mitunter fest, dass sich die gesamten Subscription-Kosten dem nähern, was Ænix
für den Support der Public Cloud Platform berechnet — und an diesem Punkt
geben Servicekatalog und betriebliche Vorteile von Cozystack den Ausschlag.

## Architekturabbildung: Proxmox → Cozystack

| Proxmox VE | Entsprechung in Cozystack |
|---|---|
| **KVM-Hypervisor** | KubeVirt (KVM-basiert) |
| **LXC-Container** | Native Kubernetes-Container (anderes Modell — LXC im System-Stil vs. Kubernetes im Anwendungsstil) |
| **ZFS-Storage** | LINSTOR (DRBD) |
| **Ceph (von Proxmox verwaltet)** | LINSTOR (DRBD); Cozystack liefert kein Ceph aus |
| **Linux SDN / Bridges** | Cilium (eBPF) |
| **Proxmox-Web-UI** | Cozystack Dashboard |
| **Proxmox Backup Server (PBS)** | Velero + S3-kompatibles Ziel + PITR pro Anwendung |
| **PVE-Storage-Replikation** | LINSTOR-DRBD-Replikation |
| **Proxmox API / pvesh, qm, pct** | Kubernetes API |
| **Datacenter / Pool / VM** | Tenant CRD + Namespace + KubeVirt-VM |
| **Berechtigungsmodell (Rollen)** | Kubernetes RBAC + Geltungsbereich des Tenant CRD |

Zwei Bereiche erfordern ein Redesign statt einer 1:1-Abbildung:

- **LXC vs. Kubernetes-Container** — Proxmox-LXC ist ein System-Container
  (vollständiges OS-Image), ein Kubernetes-Container ist ein
  Anwendungscontainer (ein einzelner Prozess oder wenige). Workloads, die LXC
  im Sinne von System-Containern nutzen, wandern entweder in KubeVirt-VMs oder
  werden umgebaut.
- **Mandantenmodell** — das Tenant-Modell von Proxmox (Pools, Realms
  und Berechtigungen) gegenüber dem Tenant CRD von Cozystack (Kubernetes-nativ).
  Die kundenseitige Isolation ist in Cozystack stärker; die betriebliche
  Abstraktion ist eine andere.

## Migrationsphasen

### Phase 0 — Assessment (14 oder 28 Tage)

Bestandsaufnahme: Kundenzahl, genutzte kundenseitige Dienste, Anzahl der VMs,
Betriebssystem-Mix, LXC-Nutzung, Storage-Klassen, Netzwerktopologie,
Backup-Muster, Integration von WHMCS bzw. der Kundenverwaltung.

Ehrlicher TCO-Vergleich: das heutige Proxmox mit kommerzieller Subscription
und Betriebsteam gegenüber der Ænix Public Cloud Platform mit
Hardwareerneuerung und Ænix-Support-Stufe. Bei Betreibern unter rund 300
Kunden bleibt Proxmox dabei oft wettbewerbsfähig; oberhalb von etwa 500 gewinnt
Cozystack in der Regel durch Servicekatalog und betriebliche Tiefe.

Ergebnis: eine Go/No-Go-Entscheidung mit quantifizierter Begründung.

### Phase 1 — Cozystack-Fundament (wenige Wochen bis 3 Monate)

Mit dem produktisierten Installer ist die Plattform wenige Wochen nach
Bereitstellung der Hardware live; Katalog- und Markenarbeit füllen den Rest
der Phase. Die Cozystack-Plattform wird auf neuer Hardware oder auf umgewidmeter
Proxmox-Hardware bereitgestellt (handelsübliche x86-Server lassen sich leicht
umziehen). Das Cilium-Networking wird konfiguriert, LINSTOR-Storage in den
Betrieb überführt, die Identitätsintegration eingerichtet (typischerweise
Keycloak plus IdP des Kunden). Das Cozystack Dashboard wird an die bestehende
Marke des Betreibers angepasst.

Die WHMCS-Integration wird Ende-zu-Ende validiert. Der Servicekatalog wird
mit den vom Betreiber gewählten Diensten befüllt (zuerst VMs, danach Managed
Databases, dann S3, und von dort aus weiter).

### Phase 2 — Migration der Pilotkunden (1–3 Monate)

5–20 wohlgesonnene Kunden werden als erste Kohorte zu Cozystack migriert.
Ablauf pro Kunde:

1. Kunden-VMs werden vom Proxmox-Format qcow2 in ein KubeVirt-kompatibles
   Format konvertiert
2. Die Netzwerkkonfiguration wird übertragen (Proxmox-Bridges → Cilium
   ClusterPool + NetworkPolicies)
3. Der Storage wird migriert (ZFS- / Ceph-Volumes → LINSTOR in
   Cozystack)
4. Validierungsfenster auf Kundenseite (7–14 Tage)
5. Umschaltung von DNS und Load Balancer

Während des Piloten baut das Support-Team betriebliche Vertrautheit mit
Cozystack auf. Die Dokumentationsmuster spielen sich ein.

### Phase 3 — Produktive Migrationskohorten (3–9 Monate)

Kohorten von jeweils 30–100 Kunden. Pro Kunde derselbe Ablauf wie im Piloten,
mit wachsender betrieblicher Effizienz, je mehr das Team den Workflow
verinnerlicht.

Kunden mit LXC werden gesondert behandelt: entweder als KubeVirt-VM im
System-Stil (1:1-Ersatz) oder durch Umbau zu einem Kubernetes-nativen
Anwendungscontainer (je nach Präferenz und Unterstützung des Kunden).

### Phase 4 — Abschaltung von Proxmox (1–3 Monate)

Mit dem Abschluss der Migrationskohorten wandert die Proxmox-Hardware in den
Cozystack-Cluster. Die Proxmox-Subscription läuft gemäß Verlängerungszyklus
aus. Die Daten des Proxmox Backup Server werden gemäß den Kundenvereinbarungen
archiviert.

## Realistische Zeitpläne

Für einen typischen mittelgroßen Hosting-Anbieter (300–1.000 Kunden):

- Phase 0: 14 oder 28 Tage
- Phase 1: wenige Wochen bis 3 Monate
- Phase 2: 1–3 Monate
- Phase 3: 3–9 Monate
- Phase 4: 1–3 Monate

**Gesamt: 6–18 Monate vom Projektstart bis zur vollständigen Ablösung von Proxmox**

Bei größeren Betreibern (1.000–5.000 Kunden) verlängert sich Phase 3 auf
12–24 Monate, um ein tragfähiges Kohortentempo zu halten.

## Woran Migrationen von Proxmox zu Cozystack scheitern

### 1. LXC-Workloads

Wenn ein erheblicher Teil der Kunden-Workloads LXC als System-Container nutzt
(z. B. ein LAMP-Stack pro Kunde in einem einzigen LXC), erfordert die
Migration zu Kubernetes-nativen Containern einen Umbau. Die Alternative ist der
Betrieb als KubeVirt-VMs (1:1-Abbildung, aber höherer Ressourcenbedarf).
Planen Sie dafür in Phase 0 Zeit ein.

### 2. Abweichende kundenseitige APIs

Manche Kunden haben eigene Werkzeuge gegen die Proxmox API gebaut. Cozystack
stellt die Kubernetes API und die Cozystack Dashboard API bereit; die
Schnittstellenverträge unterscheiden sich. Migrationsunterstützung auf
Kundenseite (Dokumentation, mitunter ein API-Kompatibilitäts-Shim) ist Teil
der Engagement-Arbeit.

### 3. Schulung des Betriebsteams

Proxmox-Betreiber sind mit der Proxmox-Web-UI und den imperativen
CLI-Werkzeugen `qm` / `pct` / `pvesh` vertraut. Cozystack setzt für produktive Änderungen GitOps voraus.
Das Betriebsteam braucht 4–8 Wochen gezielte Schulung und anschließend
3–6 Monate Praxis. Das Ænix-Engagement umfasst Schulungen; zugleich muss auch
der Kunde in den Übergang investieren.

### 4. ZFS-spezifische Workloads

Manche Kunden haben sich gerade wegen der ZFS-Funktionen auf dem Host für
Proxmox entschieden (erweiterte Snapshots, über ZFS replizierte Backups).
Cozystack liefert LINSTOR (DRBD) aus; ZFS-spezifische Betriebsmuster lassen sich
nicht übertragen. Das Gespräch mit dem Kunden über funktionale Äquivalenz ist
Teil von Phase 0.

## Im Vergleich zu anderen Alternativen

**Im Vergleich zum Eigenbau auf reinem KVM + libvirt + Kubernetes:**
Dieselben Zielkonflikte wie bei jeder Open-Source-Eigenbauoption. Mit Cozystack
ist eine mandantenfähige Plattform in wenigen Wochen bis wenigen Monaten
produktiv; ein Eigenbau braucht 12–24 Monate, bis er dasselbe Niveau erreicht. Für Betreiber mit starker
Platform-Engineering-Kapazität ist der Eigenbau eine glaubwürdige Alternative.

**Im Vergleich zu VMware (nach Broadcom):** Eine Migration von Proxmox zu
VMware ist 2026 selten — der Weg zurück ist nach Broadcom wirtschaftlich
meist nicht sinnvoll.

**Im Vergleich zu Nutanix:** Nutanix AHV ist ein proprietäres KVM mit
geschlossenem Quellcode. Für Betreiber, denen ein Open-Source-Fundament
wichtig ist, gewinnt Cozystack allein durch diese Eigenschaft. Für Betreiber,
die integrierten kommerziellen Support ohne den Mehraufwand von Open Source
schätzen, gewinnt Nutanix.

**Im Vergleich zu OpenShift Virtualization:** Beide basieren auf KubeVirt.
OpenShift passt zu bestehenden Red-Hat- und OpenShift-Kunden; Cozystack passt
zu Betreibern, die eine Open-Source-orientierte Beschaffung und einen
schlankeren betrieblichen Footprint bevorzugen.

## Wann dieses Engagement-Modell passt

Gut geeignet:

- Hosting-Anbieter oder MSP mit mehr als 300 Kunden
- Wachstumskurs in Richtung 1.000+ Kunden
- Kundennachfrage nach Diensten jenseits von VMs
- Betrieb über mehrere Rechenzentren
- Budget für ein Migrationsprogramm von 6–18 Monaten

Grenzfall:

- Anbieter mit 200–300 Kunden — Grenzbereich; hängt vom Wachstumskurs und
  vom Anspruch an den Servicekatalog ab

Schlecht geeignet:

- Mittelstands-IT (< 100 interne VMs) — Proxmox ist weiterhin besser
- Lab- und Entwicklungsumgebungen — die Einfachheit von Proxmox gewinnt
- Hosting-Anbieter mit weniger als 200 Kunden — schlecht geeignet für ein
  vollständiges Migrationsprogramm; stattdessen eine neue Produktlinie auf
  der Ænix Public Cloud Platform im Providermaßstab erwägen

## Aufbau des Engagements

- **Discovery Call** (30 Min., kostenlos)
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**
  (Festpreis, 14 Tage fokussiert oder 28 Tage vollständig) — Go/No-Go mit
  TCO-Vergleich
- **Pilot-Deployment** (1–3 Monate) — Cozystack wird aufgebaut, 5–20
  wohlgesonnene Kunden werden migriert
- **Kohortenmigration** (3–12 Monate) — Kundenmigration in Kohorten
- **Abschaltung von Proxmox** (1–3 Monate, parallel) — sobald Kohorten
  abgeschlossen sind
- **Support-Subskription** (laufend) — Plus- oder Enterprise-Stufe für
  Abdeckung rund um die Uhr (siehe [Preise](/de/preise/))

## Tiefer einsteigen

- **[Proxmox-Migrations-Hub](/de/migration/proxmox/)** — kommerzielle Landingpage
- **[Vergleich Proxmox vs. VMware vs. Cozystack](/de/blog/2026/05/proxmox-vs-vmware-vs-cozystack/)** —
  Entscheidungsmatrix
- **[Proxmox-Alternative](/de/alternativen/proxmox-alternative/)** —
  kommerzielle Landingpage mit Fokus auf Alternativen
- **[Branchenseite Hosting-Anbieter](/de/branchen/hosting-anbieter/)** —
  branchenspezifische Positionierung
- **[Wirtschaftlichkeit der Public Cloud Platform für Hosting-Anbieter](/de/blog/2026/05/public-cloud-platform-wirtschaftlichkeit-hosting-anbieter/)** —
  Unit Economics Schritt für Schritt
- **[Plattformmodernisierung für Hosting-Anbieter](/de/blog/2026/05/hosting-anbieter-plattform-modernisierung/)** —
  Modernisierungsmuster
