---
title: "Cozystack vs Virtuozzo — direkter Vergleich für Hosting-Anbieter"
seo_title: "Cozystack vs Virtuozzo: Vergleich für Hosting-Anbieter"
primary_keyword: "cozystack vs virtuozzo"
secondary_keywords:
  - "virtuozzo alternative"
  - "virtuozzo infrastructure alternative"
  - "virtuozzo hybrid infrastructure vs kubernetes"
description: "Cozystack vs Virtuozzo Infrastructure für Hosting-Anbieter: Architektur, Mandanten, Managed Services, GPU, Billing, Lizenz und wo Virtuozzo stärker ist."
related_pages:
  - /de/migration/virtuozzo/
  - /tco-calculator/vs-virtuozzo/
  - /de/produkte/public-cloud-platform/
  - /de/produkte/whmcs-integration/
  - /de/branchen/hosting-anbieter/
language: "de"
hreflang_en: /compare/cozystack-vs-virtuozzo/
quick_facts_style: "rows"
faq_style: "rows"
direct_answer: |
  **Mit Cozystack und Virtuozzo Infrastructure (früher Virtuozzo Hybrid Infrastructure) verkaufen Hosting-Anbieter virtuelle Maschinen, Kubernetes und S3-Storage von eigener Hardware — beide Plattformen sind jedoch unterschiedlich gebaut und unterschiedlich lizenziert. Virtuozzo Infrastructure ist eine kommerzielle hyperkonvergente Plattform mit OpenStack-Orchestrierung, KVM und Virtuozzos eigenem Software-defined Storage, lizenziert nach physischen CPU-Cores und Speicherkapazität. Cozystack ist ein Open-Source-Projekt der CNCF unter Apache 2.0, das VMs (KubeVirt) und Container auf Kubernetes betreibt — mit Tenant-Modell, einem Katalog aus Managed-Datenbanken, Message Brokern und S3 sowie GPUs über den NVIDIA GPU Operator. Virtuozzo ist stärker bei integrierter VM-Hochverfügbarkeit und einer ausgereiften hyperkonvergenten Storage-Schicht; Cozystack passt zu Anbietern, die Managed Services über VMs hinaus wollen und keine Lizenz pro Core. Ænix hat Cozystack entwickelt, pflegt es mit und bietet es als Ænix Public Cloud Platform mit Billing und WHMCS-Integration an.**
quick_facts:
  - label: "Was es ist"
    value: "Ein direkter Vergleich von Virtuozzo Infrastructure und Cozystack als Plattformen, über die ein Hosting-Anbieter Cloud-Services verkauft."
  - label: "Lizenz"
    value: "Cozystack: Apache 2.0, keine Lizenz pro Core. Virtuozzo Infrastructure: kommerzielle Lizenzschlüssel, die physische CPU-Cores der Compute-Nodes und belegten logischen Speicher zählen."
  - label: "Basis"
    value: "Virtuozzo Infrastructure: OpenStack-Orchestrierung, KVM, Virtuozzo Storage. Cozystack: Kubernetes mit KubeVirt, LINSTOR/DRBD-Storage und Cilium-Networking."
  - label: "Managed Services"
    value: "Virtuozzo: Kubernetes, Load Balancer, S3 und Backup as a Service. Cozystack ergänzt Managed PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS und mehr."
  - label: "Wo Virtuozzo stärker ist"
    value: "VM-Hochverfügbarkeit mit automatischer Evakuierung, ab Werk aktiv; eine hyperkonvergente Storage-Schicht mit File, Block und S3 aus einer Hand; Acronis-Backup-Integration."
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung)"
  - label: "Migration"
    value: "Virtuozzo Infrastructure wird wie eine OpenStack-Cloud verlassen; Container auf Virtuozzo Server und Application Management brauchen eigene Wege — siehe Virtuozzo-Migrations-Hub."
faq:
  - q: "Ist Cozystack eine Virtuozzo-Alternative für Hosting-Anbieter?"
    a: "Für das IaaS-Produkt Virtuozzo Infrastructure ja: Beide verkaufen VMs, Kubernetes und S3 von Ihrer eigenen Hardware an Tenants. Cozystack ergänzt einen Katalog aus Managed-Datenbanken und Message Brokern und kennt keine Lizenz pro Core. Bei Virtuozzo Application Management (dem PaaS, früher Jelastic) ist der Wechsel ein Re-Platforming auf Kubernetes, kein Austausch eins zu eins; das behandelt der Virtuozzo-Migrations-Hub gesondert."
  - q: "Wann sollte ich bei Virtuozzo Infrastructure bleiben?"
    a: "Wenn automatische VM-Hochverfügbarkeit eine harte Anforderung ist und Ihr Team keine Kubernetes-Erfahrung hat; wenn Ihr Angebot aus VMs, S3 und Acronis-basiertem Backup besteht und Kunden nicht nach Managed-Datenbanken fragen; oder wenn Ihre Abrechnung über CloudBlue läuft, wofür Virtuozzo einen Connector dokumentiert. Dann kostet der Wechsel mehr, als er bringt."
  - q: "Wie werden die beiden lizenziert?"
    a: "Virtuozzo Infrastructure nutzt Lizenzschlüssel (Lease, jährlich oder unbefristet), die eine Anzahl physischer CPU-Cores auf Compute-Nodes und ein Limit für logischen Speicher freigeben. Cozystack ist Open Source unter Apache 2.0 ohne Lizenzgebühr; Ænix verkauft eine Subscription pro 10 physische Nodes und Monat (Basic 1.250 USD, Standard 3.000 USD, Plus 5.500 USD bei jährlicher Abrechnung, Enterprise individuell), die Support und die proprietären kommerziellen Ænix-Module enthält."
  - q: "Wie unterscheidet sich die Mandantenfähigkeit?"
    a: "Virtuozzo Infrastructure folgt dem OpenStack-Modell aus Domains, Projekten und Benutzern, mit einem Self-Service-Panel für Domain-Administratoren und Projektmitglieder. Cozystack nutzt ein Tenant-Objekt: verschachtelte Tenants, jeweils mit eigenen Quotas, einer mit dem Tenant erzeugten Cilium-Netzwerkisolation, eigenen Kubernetes-Clustern und Services sowie Observability pro Tenant."
  - q: "Wie sieht es mit GPUs aus?"
    a: "Beide reichen GPUs an virtuelle Maschinen durch: Virtuozzo dokumentiert GPU-Passthrough und vGPU, Cozystack bietet PCI-Passthrough ganzer GPUs oder NVIDIA vGPU mit Ihrer NVIDIA-vGPU-Lizenz. In Tenant-Kubernetes-Clustern stellt Cozystack zusätzlich MIG-Partitionen über den NVIDIA GPU Operator auf MIG-fähigen Karten bereit, und HAMi ermöglicht zeitgeteilte Nutzung und Überbuchung."
  - q: "Können wir Cozystack-Services über WHMCS verkaufen, so wie heute Virtuozzo?"
    a: "Ja. Die Ænix-WHMCS-Integration ist ein proprietäres Ænix-Modul und in jeder Stufe der Ænix Public Cloud Platform enthalten; sie stellt Kubernetes, Managed-Datenbanken, VMs, Message Broker, S3 und GPU als WHMCS-Produkte bereit, mit Verbrauchsmessung pro Tenant. WHMCS-Module für Virtuozzo gibt es von Drittanbietern; Virtuozzo selbst dokumentiert eine CloudBlue-Integration."
---

**Zwei Wege, Cloud aus den eigenen Racks zu verkaufen. Der eine ist ein lizenzierter hyperkonvergenter Stack mit OpenStack darunter, der andere Open Source auf Kubernetes mit einem Katalog von Managed Services obendrauf.**

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** — Cozystack mit den kommerziellen Bausteinen, die ein Hosting-Geschäft braucht: Billing, die [WHMCS-Integration](/de/produkte/whmcs-integration/), ein Kundenportal unter Ihrer Marke, Sperrung und Suspendierung von Tenants. Sie ziehen einen bestehenden Bestand um? Der **[Virtuozzo-Migrations-Hub](/de/migration/virtuozzo/)** beschreibt die Wege für alle drei Virtuozzo-Produkte.

## Für wen dieser Vergleich gedacht ist

Virtuozzo wird überwiegend über Hosting- und Service-Provider vertrieben, die das Produkt unter eigener Marke betreiben und VMs, Storage und Container an ihre Kunden weiterverkaufen. Für genau dieses Publikum ist der Public-Cloud-Einsatz von Cozystack gebaut. Die Frage ist daher eng gefasst: Wenn Sie **Virtuozzo Infrastructure** (früher Virtuozzo Hybrid Infrastructure) betreiben oder kaufen wollen, um IaaS zu verkaufen — was ändert sich mit Cozystack?

Virtuozzo hat seine Produkte 2026 umbenannt. Das IaaS heißt jetzt **Virtuozzo Infrastructure**, das PaaS, früher Application Platform (ursprünglich Jelastic), heißt **Virtuozzo Application Management**, und der Host für Container und VMs, früher Hybrid Server, heißt **Virtuozzo Server**. Diese Seite vergleicht mit Virtuozzo Infrastructure, dem Produkt, das ein Hosting-Anbieter durch Cozystack ersetzt. Virtuozzo Server und Application Management lassen sich nicht eins zu eins vergleichen; was mit ihnen geschieht, erklärt der [Migrations-Hub](/de/migration/virtuozzo/).

## Auf einen Blick

<div class="compare-elevated compare-elevated--col3">

| | Virtuozzo Infrastructure | Cozystack |
|---|---|---|
| **Lizenz** | Kommerzielle Lizenzschlüssel (Lease, jährlich, unbefristet), gezählt nach physischen CPU-Cores und belegtem logischem Speicher | Apache 2.0, keine Lizenzgebühr |
| **Orchestrierung** | OpenStack (Nova, Neutron, Cinder, Glance, Keystone, Octavia, Magnum) | Kubernetes; VMs über KubeVirt |
| **Hypervisor** | KVM | KVM über KubeVirt |
| **Storage** | Virtuozzo Storage: File, Block (iSCSI) und S3 in einer Software-defined-Schicht | Replizierter Block-Storage mit LINSTOR/DRBD; S3 über SeaweedFS |
| **Mandantenfähigkeit** | Domains, Projekte und Benutzer; Self-Service-Panel | Verschachtelte Tenant-Objekte mit Quotas, Netzwerkisolation und Observability pro Tenant |
| **Kubernetes für Kunden** | Kubernetes as a Service | Managed-Kubernetes-Cluster pro Tenant |
| **Managed-Datenbanken und Broker** | Nicht Teil des IaaS-Produkts | PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS, MongoDB, OpenSearch, Qdrant |
| **Load Balancing** | Load Balancer as a Service | Services vom Typ LoadBalancer, Cilium mit BGP- oder L2-Announcements |
| **Backup** | Backup Gateway für Acronis Cyber Protect; Backup and Restore as a Service | Velero mit verschlüsselten Backups in S3-kompatiblen Storage |
| **VM-Hochverfügbarkeit** | Automatische Evakuierung von VMs eines ausgefallenen Nodes, ab Werk aktiv | Live-Migration für geplante Wartung; nach ungeplantem Node-Ausfall starten VMs erst nach dem Fencing des Nodes neu |
| **GPU** | GPU-Passthrough und vGPU für VMs | VMs: PCI-Passthrough oder NVIDIA vGPU (Ihre NVIDIA-Lizenz). Tenant-Kubernetes: MIG-Partitionen über den GPU Operator, Time-Slicing mit HAMi |
| **Billing** | Von Virtuozzo dokumentierter CloudBlue-Connector; WHMCS-Module von Drittanbietern | Ænix Billing und WHMCS-Integration (proprietäre Ænix-Module, in jeder Stufe der Public Cloud Platform) |

</div>

<!-- sources: licensing https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/managing-licenses.html ; services https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/welcome.html ; VM HA https://docs.virtuozzo.com/virtuozzo_infrastructure_7_3_admins_guide/configuring-virtual-machine-ha.html ; GPU https://docs.virtuozzo.com/virtuozzo_infrastructure_7_3_admins_guide/configuring-gpu-passthrough.html ; CloudBlue https://docs.virtuozzo.com/virtuozzo_hybrid_infrastructure_4_7_cloudblue_integration_guide/introduction.html ; OpenStack components: see /migration/virtuozzo/ sources -->

## Architektur: OpenStack darunter oder Kubernetes darunter

Virtuozzo beschreibt Infrastructure als hyperkonvergente Lösung, die Storage-, Compute- und Netzwerkressourcen für Unternehmen und Service-Provider bereitstellt. Unter der Management-Schicht des Herstellers arbeitet OpenStack: Administratoren konfigurieren Nova, Cinder und Neutron über Kolla-Ansible, und die Dokumentation steuert die Plattform mit dem Standard-Client `openstack` gegen Keystone. <!-- source: https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/welcome.html (product description); OpenStack/Kolla details: https://www.virtuozzo.com/infrastructure-docs/ as cited on /migration/virtuozzo/ -->

Für einen Anbieter hat das zwei Folgen. Die erste ist positiv: Die APIs sind vertraut, für OpenStack geschriebene Werkzeuge funktionieren, und Virtuozzo hat einen ansonsten anspruchsvollen Stack so verpackt, dass auch ein kleineres Team ihn installieren und betreiben kann. Die zweite: Die Produktform ist die von OpenStack — Compute, Block, Netze, Images —, und Kubernetes ist ein weiterer Service obendrauf.

Cozystack dreht das um. Kubernetes ist die Control Plane für alles, virtuelle Maschinen laufen als KubeVirt-Workloads neben Containern, und jeder Service, den ein Tenant bestellen kann — eine VM, ein Kubernetes-Cluster, eine PostgreSQL-Instanz, ein S3-Bucket —, ist ein deklariertes Objekt, das die Plattform abgleicht. Die Nodes laufen mit Talos Linux, einem unveränderlichen Betriebssystem ohne SSH. Praktisch heißt das: Ein neuer Managed Service ist Paketierungsarbeit an einer API, kein weiteres OpenStack-Projekt, das integriert werden muss.

## Mandantenfähigkeit

Virtuozzo Infrastructure nutzt das OpenStack-Modell: Domains enthalten Projekte, Domain-Administratoren verwalten alles in ihrer Domain, und Projektmitglieder verwalten virtuelle Objekte ihrer Projekte über ein Self-Service-Panel. <!-- source: https://docs.virtuozzo.com/pdf/virtuozzo_infrastructure_7_3_self_service_guide.pdf --> Das Modell ist gut verstanden und bildet „Reseller, dann Kunde“ sauber ab.

Die Einheit in Cozystack ist der **Tenant**. Tenants lassen sich verschachteln, jeder hat eigene Quotas, beim Anlegen entstehen Cilium-Netzwerk-Policies, die Verkehr aus anderen Tenants standardmäßig blockieren, und jeder Tenant kann eigene Kubernetes-Cluster und Managed Services mit eigenem Monitoring betreiben. Für einen Anbieter, dessen Kunden selbst Reseller oder Agenturen sind, ist die Verschachtelung die entscheidende Eigenschaft.

## Was Sie verkaufen können: der Katalog

Beide Plattformen verkaufen VMs, Kubernetes und S3. Virtuozzo Infrastructure führt Kubernetes as a Service, Load Balancer as a Service, Backup and Restore as a Service und persistenten Storage für Kubernetes neben File-, Block- und S3-Object-Storage. <!-- source: https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/welcome.html -->

Auseinander gehen die beiden oberhalb der Infrastrukturebene. Cozystack bringt einen Katalog gemanagter Datendienste mit, die Tenants im Dashboard bestellen: PostgreSQL (CloudNativePG), MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ, NATS, MongoDB, OpenSearch und Qdrant, dazu S3 (SeaweedFS), HTTP-Cache und VPN. Für einen Hosting-Anbieter liegt dort die Marge: Eine Managed-Datenbank wird pro Service bepreist, nicht pro vCPU, und Kunden, die sonst zum Datenbank-Service eines Hyperscalers abwandern würden, bleiben.

## Storage

Storage ist Virtuozzos Heimspiel. Virtuozzo Storage ist eine ausgereifte Software-defined-Schicht, die File-, iSCSI-Block- und S3-Object-Storage aus demselben Cluster bedient, und über das Backup Gateway legt Acronis Cyber Protect Backups darauf, in Public Clouds oder auf NAS ab. <!-- source: https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/welcome.html -->

Cozystack nutzt LINSTOR mit DRBD-Replikation für Block-Volumes, wobei die Replikation pro StorageClass festgelegt wird, und SeaweedFS für S3. Backups laufen über Velero, verschlüsselt im Object Storage. Damit sind dieselben Anforderungen abgedeckt, allerdings mit mehr Komponenten, und die Entscheidung, wo Backups landen, liegt bei Ihnen; ein einziges Storage-Produkt mit einem Hersteller hinter jedem Protokoll gibt es nicht.

## GPU

Beide Plattformen bringen GPUs in virtuelle Maschinen: Virtuozzo dokumentiert GPU-Passthrough und vGPU und weist darauf hin, dass VMs mit durchgereichter physischer GPU nicht live migriert werden können. <!-- source: https://docs.virtuozzo.com/virtuozzo_infrastructure_7_3_admins_guide/configuring-gpu-passthrough.html --> In Cozystack erhalten VMs ganze GPUs per PCI-Passthrough oder NVIDIA vGPU mit Ihrer eigenen NVIDIA-vGPU-Lizenz. In Tenant-Kubernetes-Clustern stellt der NVIDIA GPU Operator MIG-Partitionen auf MIG-fähigen Karten als planbare Ressourcen bereit, und HAMi ergänzt zeitgeteilte Nutzung und Überbuchung — nützlich, wenn Sie Inferenzkapazität verkaufen statt ganzer Karten.

## Billing und die kommerzielle Schicht

Ohne Billing ist eine Hosting-Plattform nur ein halbes Produkt. Virtuozzo dokumentiert einen Connector, der über die Commerce-Plattform CloudBlue bestellte Subscriptions für Virtuozzo Infrastructure bereitstellt, mit Kundenprojekten als abgerechneten Assets. <!-- source: https://docs.virtuozzo.com/virtuozzo_hybrid_infrastructure_4_7_cloudblue_integration_guide/introduction.html --> WHMCS-Module für Virtuozzo-Produkte verkaufen Drittanbieter, nicht Virtuozzo selbst. <!-- source: https://www.modulesgarden.com/products/whmcs/virtuozzo-hybrid-server -->

Auf der Cozystack-Seite kommt die kommerzielle Schicht von Ænix und ist proprietär, während die Plattform Open Source bleibt. **Ænix Billing** liefert den Verbrauch pro Tenant und pro Workload — vCPU, Arbeitsspeicher, Volumes nach StorageClass, IP-Adressen, S3 — minutengenau über eine Kubernetes-API, und die **[WHMCS-Integration](/de/produkte/whmcs-integration/)** macht aus dem Katalog WHMCS-Produkte mit Provisionierung und Verbrauchsmessung. Beide sind in jeder Stufe der **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** enthalten, zusammen mit einem Kundenportal unter Ihrer Marke und automatischer Sperrung und Suspendierung von Tenants mit offenen Rechnungen.

## Lizenz und Kosten

Virtuozzo Infrastructure wird über Lizenzschlüssel lizenziert, die eine Anzahl physischer CPU-Cores auf Compute-Nodes und ein Limit für logischen Speicher freigeben — als Lease (monatlich erneuert), Jahreslizenz oder unbefristete Lizenz; ein Testschlüssel ist auf 96 Cores und 1 TB begrenzt. <!-- source: https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/managing-licenses.html --> Die Kosten wachsen also mit Cores und gespeicherten Daten.

Cozystack hat keine Lizenzgebühr. Ænix verkauft eine Subscription — Support plus die proprietären kommerziellen Module —, bepreist pro 10 physische Nodes und Monat: Basic 1.250 USD, Standard 3.000 USD, Plus 5.500 USD bei jährlicher Abrechnung, Enterprise individuell ([Preise](/de/preise/)). Für ein Fünfjahresmodell mit belegten Virtuozzo-Preisen bei 50, 200 und 1.000 VMs nutzen Sie den **[TCO-Rechner Virtuozzo vs Cozystack](/tco-calculator/vs-virtuozzo/)** (auf Englisch); er kennzeichnet jede Annahme, auch dort, wo der Virtuozzo-Wert eine Schätzung ist.

## Wo Virtuozzo tatsächlich besser ist

- **VM-Hochverfügbarkeit ab Werk.** Fällt ein Compute-Node aus, evakuiert Virtuozzo Infrastructure die laufenden VMs auf gesunde Nodes und startet sie dort; die Funktion ist beim Anlegen des Compute-Clusters standardmäßig aktiv. <!-- source: https://docs.virtuozzo.com/virtuozzo_infrastructure_7_3_admins_guide/configuring-virtual-machine-ha.html --> Cozystack bietet Live-Migration für geplante Wartung, aber keinen automatischen VM-Neustart nach ungeplantem Node-Ausfall, denn es liefert kein Fencing mit. Seine VMs bleiben aus, bis der ausgefallene Node abgeschottet ist (Fencing): Ein Operator markiert ihn als außer Betrieb oder entfernt ihn, oder ein externer Fencing-Mechanismus übernimmt das. Danach startet KubeVirt sie auf gesunden Nodes neu, und VMs auf repliziertem LINSTOR/DRBD-Storage kommen mit ihren Daten zurück. Worker-Nodes von Tenant-Kubernetes-Clustern werden automatisch ersetzt.
- **Ein Storage-Produkt für alle Protokolle.** File, iSCSI-Block und S3 aus einer hyperkonvergenten Schicht, von einem Hersteller unterstützt, mit integriertem Backup-Storage für Acronis. Cozystack setzt dasselbe aus LINSTOR, SeaweedFS und Velero zusammen.
- **Keine Kubernetes-Kenntnisse für den Betrieb nötig.** Ein Team, das VMs und OpenStack-Konzepte kennt, kann Virtuozzo Infrastructure betreiben. Cozystack verlangt, dass Ihr Betriebsteam mit Kubernetes umgehen kann.
- **CloudBlue.** Läuft Ihr Commerce bereits über CloudBlue, hat Virtuozzo einen dokumentierten Connector; die Ænix-Module zielen auf WHMCS und Ihr eigenes Billing.

Besteht Ihr Angebot aus VMs, S3 und Backup, fragen Ihre Kunden weder nach Managed-Datenbanken noch nach Kubernetes und ist Ihr Team noch nicht bereit für Kubernetes, ist es eine vernünftige Entscheidung, bei Virtuozzo Infrastructure zu bleiben.

## Wann Cozystack passt

- Sie wollen **Managed Services über VMs hinaus** verkaufen — Datenbanken, Message Broker, Kubernetes —, ohne jeden einzelnen selbst zu bauen.
- Sie wollen mit wachsender Flotte keine **Lizenz pro Core** mehr zahlen.
- Zu Ihren Kunden gehören Reseller, die **verschachtelte Tenants** brauchen.
- Sie betreiben **Virtuozzo Server 7**, das im Juli 2024 das Ende der Wartung erreicht hat, und brauchen ein Ziel für diese Workloads — der [Migrations-Hub](/de/migration/virtuozzo/) behandelt System-Container und KVM-Gäste.
- Sie bauen **GPU-Kapazität** auf und wollen MIG-Partitionen oder HAMi-Sharing für Kubernetes-Workloads neben GPU-VMs.

Mehr für Hosting-Anbieter finden Sie auf der **[Branchenseite](/de/branchen/hosting-anbieter/)**.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/migration/virtuozzo/">Virtuozzo-Migrations-Hub →</a>
</div>

## Quellen

Die Angaben zu Virtuozzo auf dieser Seite stammen aus Virtuozzos eigener Dokumentation, geprüft im Oktober 2026:

- [Virtuozzo Infrastructure 7.4 Administrator's Guide — Welcome](https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/welcome.html) — Produktbeschreibung, Storage-Arten, Kubernetes, Load Balancer, Backup and Restore as a Service
- [Managing licenses (7.4)](https://docs.virtuozzo.com/virtuozzo_infrastructure_7_4_admins_guide/managing-licenses.html) — Lizenzmodelle und gezählte Ressourcen
- [Configuring virtual machine high availability (7.3)](https://docs.virtuozzo.com/virtuozzo_infrastructure_7_3_admins_guide/configuring-virtual-machine-ha.html)
- [Configuring GPU passthrough (7.3)](https://docs.virtuozzo.com/virtuozzo_infrastructure_7_3_admins_guide/configuring-gpu-passthrough.html) und [Switching between GPU passthrough and vGPU (5.4)](https://docs.virtuozzo.com/virtuozzo_hybrid_infrastructure_5_4_admins_guide/switching-between-gpu-passthrough-and-vgpu.html)
- [Self-Service Guide (7.3)](https://docs.virtuozzo.com/pdf/virtuozzo_infrastructure_7_3_self_service_guide.pdf) — Domains, Projekte, Benutzer
- [CloudBlue integration guide](https://docs.virtuozzo.com/virtuozzo_hybrid_infrastructure_4_7_cloudblue_integration_guide/introduction.html)
- [Virtuozzo product lifecycle policy](https://www.virtuozzo.com/server-docs/product-lifecycle-policy/) — Ende der Wartung für Virtuozzo Server 7

---

*Ænix hat Cozystack (CNCF-Sandbox-Projekt) entwickelt und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bieten wir die Ænix Public Cloud Platform, die Ænix Private Cloud Platform und die Ænix AI Platform an.*
