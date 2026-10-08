---
title: "Private-Cloud-Architektur 2026 — Design, Komponenten und Umsetzungsmuster"
description: "Private Cloud 2026: die Architekturschichten, drei bewährte Muster, Kapazitätsplanung und die Fehler, die in Design-Reviews immer wieder auftauchen."
slug: "private-cloud-architektur-2026"
date: "2026-05-22"
cover_image: "/img/blog/covers/de/private-cloud-architektur-2026.jpg"
author: "Aenix Team"
type: "article"
topics: ["OpenStack", "Kubernetes", "KubeVirt", "Sovereignty", "Multi-tenancy", "Financial Services"]
language: "de"
hreflang_en: "/blog/2026/05/private-cloud-architecture-2026/"
companion_landing: "/de/dienstleistungen/private-cloud-consulting/"
quiz:
  title: "Wissens-Check: Private-Cloud-Architektur 2026"
  questions:
    - q: "In wie viele funktionale Schichten gliedert der Artikel eine moderne Private Cloud?"
      options:
        - { text: "Sechs (Hardware, OS, Storage/Netzwerk, Control Plane, Services, Betrieb)", correct: true }
        - { text: "Drei (Hardware, Plattform, Anwendung — grobe Schichtung)", correct: false }
        - { text: "Zwölf (nach dem ETSI-NFV-MANO-Referenzarchitekturmodell)", correct: false }
      explanation: "Sechs Schichten: Hardware → OS- und Plattformfundament → Storage und Networking → Control Plane → Anwendungs- und Plattformdienste → Betrieb. Wer eine Schicht überspringt (vor allem den Betrieb), erhält einen Stack, der zwar „funktioniert“, aber nicht produktionsreif ist."
    - q: "Welche Storage-Option nennt der Artikel als Cozystack-Standard für replizierten Block-Storage?"
      options:
        - { text: "Ceph (über Rook verwaltet, flexibel, aber aufwendiger im Betrieb)", correct: false }
        - { text: "LINSTOR (DRBD-basiert, betrieblich einfacherer Standard)", correct: true }
        - { text: "Hersteller-SAN (externes Fibre-Channel- oder iSCSI-Array)", correct: false }
        - { text: "Longhorn (schlanker Block-Storage aus dem Rancher-Umfeld)", correct: false }
      explanation: "LINSTOR (DRBD, über den Piraeus-Operator) ist das, was Cozystack tatsächlich ausliefert — Rook-Ceph ist nicht Teil der Distribution. Ceph und Longhorn sind die Alternativen, die man abwägt, wenn man eine Private Cloud selbst zusammenstellt; Ceph ist flexibler, aber aufwendiger im Betrieb, weshalb sich der Cozystack-Standard anders entschieden hat."
    - q: "Faustregel zur Kapazitätsplanung für rund 100 VM-Äquivalente — wie viele Compute-Server schlägt der Artikel als Ausgangspunkt vor?"
      options:
        - { text: "2–3 dichte Server (hohe Kerndichte, ein Chassis)", correct: false }
        - { text: "Mindestens 50 Server (Flotte im Hyperscale-Stil ab dem ersten Tag)", correct: false }
        - { text: "6–10 Dual-Socket-Server (256–512 GB RAM, 30 % Reserve)", correct: true }
      explanation: "Für 100 VM-Äquivalente: 6–10 Dual-Socket-Server mit je 256–512 GB RAM und 30 % Reserve für Ausfälle und Wachstum. Rund 100 TB replizierter Storage (3 Replikate) erfordern etwa 300 TB Rohkapazität."
    - q: "Was nennt der Artikel in Entscheidung 4 (Mandantenmodell) als richtige Wahl bei Anforderungen an „absolute Isolation“?"
      options:
        - { text: "Weiche Mandantenfähigkeit mit Namespaces und RBAC", correct: false }
        - { text: "Ein Cluster pro Tenant (betrieblich teuer, maximale Isolation)", correct: true }
        - { text: "Tenant CRD mit Quotas (Service-Provider-Modell)", correct: false }
      explanation: "Weiche Mandantenfähigkeit = Namespaces plus RBAC für Tenants, die einander vertrauen; Tenant CRD = richtig für Service-Provider und regulierte Mandantenfähigkeit; ein Cluster pro Tenant = absolute Isolation, wenn vollständige physische Trennung gefordert ist (betrieblich teuer)."
    - q: "Welches der drei Architekturmuster im Artikel wird als „Legacy“-Muster für Private Clouds beschrieben?"
      options:
        - { text: "Kubernetes-native Cloud auf Basis von Cozystack (das moderne Muster)", correct: false }
        - { text: "Klassische Private Cloud auf Basis von OpenStack (ausgereiftes Legacy)", correct: false }
        - { text: "VMware Cloud Foundation (nach Broadcom nur noch als Subscription)", correct: true }
      explanation: "Muster 3 ist VCF — ausdrücklich die „Legacy“-Option. Nach der Broadcom-Übernahme nur noch als Subscription, mit Preissteigerungen um den Faktor 2 bis 5 und Bindung an die Roadmap eines einzigen Herstellers. Leser, die VMware verlassen wollen, verweist der Artikel auf die Seite zur VMware-Alternative."
---


Innerhalb von rund drei Jahren ist die Private Cloud von der „Architektur von gestern“ zum „Standard von morgen für regulierte und kostensensible Workloads“ geworden. Laut dem Broadcom Private Cloud Outlook 2025 priorisieren inzwischen 53 % der Organisationen die Private Cloud für neue Workloads. Die LSEG Global Cloud Survey berichtet, dass 84 % der Finanzdienstleister ihre Cloud-Strategie wegen regulatorischen Drucks angepasst haben. Der Wandel ist real.

Die Architekturentscheidungen sehen 2026 allerdings anders aus als bei den OpenStack-zentrierten Private Clouds aus der Zeit um 2018. Der Standard-Stack hat sich zu Kubernetes-nativer Virtualisierung (KubeVirt) plus Open-Source-Storage und -Networking verschoben. Das Betriebsmodell ist ausgereift, die Zielkonflikte liegen klarer auf dem Tisch.

## Was „Private Cloud“ 2026 bedeutet

Eine Private Cloud ist eine dedizierte Cloud-Infrastruktur, die für eine einzelne Organisation oder einen einzelnen Tenant betrieben wird. Sie bietet dieselben Self-Service-Nutzungsmuster wie die Public Cloud (Bereitstellung auf Abruf, Mandantenfähigkeit, Observability, Automatisierung) — allerdings auf Infrastruktur, die die Organisation selbst kontrolliert.

2026 tritt die Private Cloud in einer dieser Formen auf:

- **Im Eigentum und Betrieb des Kunden** — die Organisation besitzt die Hardware und betreibt die Plattform.
- **Im Eigentum des Kunden, Betrieb durch einen Anbieter** — die Organisation besitzt die Hardware, ein Anbieter betreibt die Plattform vertraglich.
- **Dediziert im Eigentum des Anbieters** — der Anbieter stellt dedizierte Infrastruktur (Single-Tenant) bereit, die Organisation nutzt sie.
- **Souveräne Hyperscaler-Region** — vom Hyperscaler betriebene Infrastruktur mit Souveränitätskontrollen (manche zählen sie dazu, manche nicht).

Dieser Artikel konzentriert sich auf die Varianten 1 und 2 im Eigentum des Kunden — die Architektur ist ähnlich, der Betrieb unterscheidet sich.

## Architekturschichten

Eine moderne Private Cloud besteht aus sechs funktionalen Schichten:

### Schicht 1: Hardware

- **Compute** — x86- oder ARM-Server; aktuelle Generationen unterstützen alle relevanten Workloads. KI und GPU bilden eine eigene Hardware-Ebene (NVIDIA H100/H200/L40S/Blackwell, AMD MI-Serie).
- **Storage** — replizierter Block-Storage (LINSTOR, Ceph oder Hersteller-SAN). Object Storage für Backups und Anwendungen.
- **Netzwerk** — Rechenzentrums-Fabric (BGP-geroutetes Leaf-Spine wird zunehmend zum Standard); 25–100 Gbit/s Ethernet genügen für die meisten Workloads außerhalb von HPC.
- **Rechenzentrum** — eigener Standort, Colocation oder ROBO/Edge. Strom, Kühlung, physische Sicherheit.

### Schicht 2: OS- und Plattformfundament

- **Betriebssystem** — Linux, für Kubernetes-Hosts zunehmend minimal (Talos, Bottlerocket, Flatcar). RHEL oder Ubuntu LTS für VM-Hypervisoren außerhalb von Kubernetes.
- **Kubernetes** — Vanilla, OpenShift, Cozystack oder herstellergeführt. Die Wahl der Distribution ist eine strukturelle Entscheidung.
- **Virtualisierung** — KubeVirt für VM-Workloads innerhalb von Kubernetes (der modernste Ansatz); KVM/libvirt direkt (OpenStack); VMware (Legacy).

### Schicht 3: Storage und Networking

- **Block-Storage** — LINSTOR (DRBD-basiert, Standard in Cozystack), Ceph (über Rook verwaltet), Hersteller-SAN.
- **Object Storage** — Ceph RGW, MinIO, SeaweedFS.
- **Netzwerkvirtualisierung** — Cilium (eBPF, 2026 der Standard), Calico, OVN.
- **Load Balancing** — MetalLB für Layer 2/3, Cilium L7, Ingress-Controller (NGINX / Traefik / Contour).

### Schicht 4: Control Plane

- **Mandantenfähigkeit** — Tenant CRD (Cozystack), Namespace-basiert (Vanilla-Kubernetes), im Stil des vCloud Director (Legacy).
- **Identität** — Keycloak, Okta-Integration, AD-Integration. SPIFFE/SPIRE für Service-Identitäten.
- **GitOps** — Argo CD oder Flux. Cozystack setzt auf Flux.
- **Observability** — VictoriaMetrics + VictoriaLogs (Cozystack-Standard), Prometheus + Loki, SaaS-Angebote von Herstellern.
- **Backup/DR** — Velero + S3, anwendungsspezifische Muster (PostgreSQL PITR).

### Schicht 5: Anwendungs- und Plattformdienste

- **Managed Databases** — PostgreSQL (CloudNativePG), MariaDB, MongoDB, Redis, Valkey, Kafka, ClickHouse, RabbitMQ, NATS, OpenSearch.
- **Object Storage as a Service** — S3-kompatibel.
- **KI/ML-Plattform** — KubeVirt für VM-basierte GPU-Nutzung, Kubernetes-nativ für containerbasierte GPU-Nutzung, vLLM/Triton für Inferenz.
- **Self-Service-Portal** — Backstage, Cozystack Dashboard, Eigenentwicklung.

### Schicht 6: Betrieb

- **Runbooks** — dokumentierte Betriebsabläufe.
- **Rufbereitschaft** — Modell für die Incident Response.
- **Kapazitätsplanung** — quartalsweise Hardwareerneuerung, Wachstumsprognosen.
- **Compliance-Status** — Audit-Logging, Zertifizierungen (wo zutreffend), Dialog mit der Aufsicht.

## Drei Architekturmuster, die funktionieren

### Muster 1: Kubernetes-native Cloud auf Basis von Cozystack

**Was:** Ein einzelner Kubernetes-Cluster (oder eine Flotte) mit Cozystack als Plattformschicht. KubeVirt für VMs, Kubernetes für Container, LINSTOR für Storage, Cilium für Networking, Tenant CRD für Mandantenfähigkeit, Cozystack Dashboard für Self-Service.

**Am besten geeignet für:** Service-Provider, Betreiber souveräner Clouds, regulierte Multi-Tenant-Umgebungen. Greenfield-Projekte.

**Vorteile:** Open Source, ein einziger Stack, Mandantenfähigkeit nativ, Virtualisierung und Container auf einer Plattform.

**Nachteile:** Jünger als OpenStack; kleinere Community als reine Kubernetes-Deployments.

### Muster 2: Klassische Private Cloud auf Basis von OpenStack

**Was:** OpenStack als Compute-Orchestrator, Ceph für Storage, OVN für Networking, Heat/Terraform für die Bereitstellung. Optional Kubernetes auf OpenStack für Container-Workloads.

**Am besten geeignet für:** Organisationen mit tiefer OpenStack-Erfahrung; große Telco- oder Souveränitätsprojekte, bei denen OpenStack der Beschaffungsstandard ist.

**Vorteile:** Ausgereift, breite Community, viele Anbieteroptionen.

**Nachteile:** Betrieblich komplex; OpenStack-Engineers sind 2026 schwerer zu finden; weniger Kubernetes-nativ.

### Muster 3: VMware Cloud Foundation (VCF) — Legacy

**Was:** vSphere + vSAN + NSX + vCD + vRealize. Proprietär, im Subscription-Modell lizenziert.

**Am besten geeignet für:** Bestehende VMware-Umgebungen, die durch die Broadcom-Ökonomie noch nicht zum Ausstieg gezwungen wurden.

**Vorteile:** Ausgereift, gut bekannt, umfangreiche Integrationen.

**Nachteile:** Nach Broadcom nur noch als Subscription erhältlich, beobachtete Preissteigerungen um den Faktor 2 bis 5, Bindung an die Roadmap eines einzigen Herstellers.

(Hinweise zum VMware-Ausstieg finden Sie unter **[VMware-Alternative](/de/alternativen/vmware-alternative/)**.)

## Die Architekturentscheidungen mit dem größten Gewicht

Fünf Entscheidungen haben die stärkste langfristige Wirkung:

### Entscheidung 1: Virtualisierungsschicht
KubeVirt oder klassischer Hypervisor? KubeVirt ist 2026 der Standard für Greenfield-Projekte; ein klassischer Hypervisor (KVM/libvirt direkt) ist bei sehr großen OpenStack-Deployments angemessen, bei denen der Overhead von KubeVirt ins Gewicht fällt.

### Entscheidung 2: Storage-Architektur
LINSTOR/DRBD für replizierten Block-Storage? LINSTOR ist betrieblich einfacher und der Cozystack-Standard. Ceph ist flexibler, aber aufwendiger im Betrieb. Ein Hersteller-SAN ist eine Option, doch die Verträge schränken Ihr Skalierungsmuster ein.

### Entscheidung 3: Networking
Cilium ist zum Standard-CNI für neue Deployments geworden. NSX-äquivalente Funktionen (Cilium L7, Service Mesh) ersetzen die Funktionalität von VMware NSX. Die Entscheidung hängt eher davon ab, wie vertraut Ihr Team mit eBPF ist, als von der technischen Eignung.

### Entscheidung 4: Mandantenmodell
Für das Service-Provider-Modell ist das Tenant CRD (Cozystack) der Standard. Für interne Mandantenfähigkeit über mehrere Geschäftsbereiche genügen Namespaces plus RBAC. Für absolute Isolation: ein Cluster pro Tenant (betrieblich teuer).

### Entscheidung 5: Betriebsmodell
Betrieb durch den Kunden (Sie betreiben die Plattform), Betrieb durch einen Anbieter (Ænix oder ein vergleichbarer Partner betreibt sie für Sie) oder hybrid (Sie betreiben, der Anbieter liefert den 2nd-Level-Support). Die Entscheidung hängt von der Kapazität des internen Teams und der Risikobereitschaft ab.

## Kapazitätsplanung

Eine praxistaugliche Faustregel für eine Last von 100 VM-Äquivalenten:

- **Compute:** 6–10 Dual-Socket-Server mit je 256–512 GB RAM. 30 % Reserve für Ausfälle und Wachstum einplanen.
- **Storage:** rund 100 TB repliziert (3 Replikate) für den Regelbetrieb plus Kapazität für Snapshots und Backups. Dafür werden etwa 300 TB Rohkapazität benötigt.
- **Netzwerk:** 25-Gbit/s-NIC pro Server, Leaf-Spine-Fabric, 100-Gbit/s-Backbone.
- **Rechenzentrum:** etwa 6–10 kW pro Rack bei moderner Packungsdichte.
- **DR-Standort:** vergleichbarer zweiter Footprint.

Über 1000 VMs hinaus wächst die Hardware ungefähr linear; das Plattformteam wächst bei guter Automatisierung unterproportional.

## Betriebspraktiken, auf die es ankommt

- **Quartalsweise Kapazitäts-Reviews** — Hardware dem Wachstum voraus beschaffen.
- **Zwei Kubernetes-Upgrades pro Jahr** — bei CVEs und Funktionsumfang auf dem aktuellen Stand bleiben.
- **Dokumentierte Incident Response** — Incident Commander, Protokollführung, Post-Mortems ohne Schuldzuweisung.
- **Compliance-Status** — Audit-Logs, Zertifizierungen, Dialog mit der Aufsicht, wo zutreffend.
- **Realistisch bemessenes Plattformteam** — 1–3 Engineers für eine kleine Private Cloud mit einem einzelnen Cluster; 5–15 für einen Service-Provider mit mehreren Clustern.

## Häufige Architekturfehler

### Fehler 1: Public-Cloud-Architektur kopieren
Die Private Cloud wird so entworfen, dass sie intern wie AWS aussieht. Die Skalenökonomie ist eine andere; Public-Cloud-Architekturmuster (massiv verteilte Systeme mit Eventual Consistency) sind für die meisten Private Clouds überdimensioniert.

### Fehler 2: Herstellergeführte Private Cloud
Wer eine „Private-Cloud-Appliance“ kauft, baut den Lock-in mit einem neuen Hersteller wieder auf. Die Roadmap des Herstellers wird zu Ihrer eigenen.

### Fehler 3: Zu wenig in den Betrieb investiert
Compute und Storage sind gelöst, aber in Observability, Identität, Backup/DR und Runbooks wurde zu wenig investiert. Es entstehen betriebliche Altlasten.

### Fehler 4: Mandantenfähigkeit im Design ausgelassen
Ein Single-Tenant-Cluster wird später auf Mandantenfähigkeit hochskaliert. Nachträglich angeflanschte Mandantenfähigkeit scheitert im großen Maßstab oder bei einer Prüfung durch die Aufsicht.

### Fehler 5: Hardwareerneuerung nicht budgetiert
Die Hardwareerneuerung im vierten Jahr fehlt in der ursprünglichen Wirtschaftlichkeitsrechnung. Die Kostenklippe der Erneuerung kommt dann unerwartet.

## Tiefer einsteigen

- **[Private-Cloud-Consulting](/de/dienstleistungen/private-cloud-consulting/)** — Details zum Engagement
- **[Datensouveränität](/de/loesungen/data-sovereignty/)** — Souveränität als Auslöser
- **[Cloud-Repatriierung](/de/loesungen/cloud-repatriation/)** — beim Wechsel aus der Public Cloud
- **[VMware-Alternative](/de/alternativen/vmware-alternative/)** — beim Wechsel weg von VMware
- **[Cozystack](/de/produkte/cozystack/)** — Open-Source-Plattformfundament
