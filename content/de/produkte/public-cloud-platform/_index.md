---
title: "Ænix Public Cloud Platform — für alle, die Cloud verkaufen"
description: "Ænix Public Cloud Platform: schlüsselfertige Cloud für Hoster, MSPs und Betreiber — Billing, WHMCS, Kundenportal. Ab 1.250 USD pro 10 Nodes und Monat."
type: "page"
language: "de"
hreflang_en: /products/public-cloud-platform/
quick_facts_style: "rows"
faq_style: "rows"
direct_answer_image: "/images/screens/public-cloud-marketplace.jpg"
direct_answer_image_alt: "Kundenportal der Ænix Public Cloud Platform: Marktplatz mit VMs, Kubernetes, S3, AI Gateway und VMware-Cloud-Director-Mandanten"
related_pages: ["/de/produkte/private-cloud-platform/", "/de/produkte/ai-platform/", "/de/produkte/whmcs-integration/", "/de/migration/vmware/", "/de/alternativen/openstack-alternative/"]
direct_answer: |
  **Die Ænix Public Cloud Platform ist eine schlüsselfertige, Kubernetes-native Cloud-Plattform für Organisationen, die Cloud-Kapazität an andere verkaufen — Hosting-Anbieter, MSPs und regionale Clouds am einen Ende, Telekommunikationsbetreiber, nationale Betreiber und Banken mit einer kommerziellen Cloud am anderen. Sie ist die produktisierte, unterstützte Distribution von Cozystack (Apache 2.0, ein CNCF-Projekt, das Ænix entwickelt hat und gemeinsam mit Maintainern anderer Unternehmen pflegt) und ergänzt die kommerziellen Oberflächen, die ein Cloud-Geschäft braucht: vollständiges Billing in Back-End und Front-End, WHMCS-Integration, ein Kundenportal im eigenen Branding, Zahlungsabwicklung, automatische Sperrung und Suspendierung von Tenants sowie Assistenten zum Anlegen von VMs, Kubernetes-Clustern, Managed Databases, S3-Storage und GPU-Workloads. Sie läuft über mehrere Regionen hinweg und neben einem bestehenden VMware- oder OpenStack-Bestand, sodass Sie schrittweise migrieren, statt alles auf einmal auszutauschen. Ein Abonnement beginnt bei 1.250 USD pro 10 physische Nodes und Monat (Support-Stufe Basic plus die proprietären kommerziellen Ænix-Module); nationale Multi-Region-Programme werden per RFP angeboten.**
quick_facts:
  - label: "Was es ist"
    value: "Ein komplettes, unterstütztes Public-Cloud-Produkt für alle, die Cloud verkaufen — auf Basis von Cozystack, mit dem Ænix-Billing-System, der WHMCS-Integration und einem Kundenportal im eigenen Branding."
  - label: "Lizenz"
    value: "Apache-2.0-Kern (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubation-Antrag in der Due-Diligence-Prüfung)"
  - label: "Für wen"
    value: "Hosting-Anbieter, MSPs, regionale Clouds und Rechenzentren am kleinen Ende; Telekommunikationsbetreiber, nationale Betreiber und Banken mit einer kommerziellen Cloud am großen Ende."
  - label: "Ersetzt"
    value: "OpenStack, VMware Cloud Director, Virtuozzo, OpenNebula, Panels der Klasse Virtualizor / SolusVM und selbst entwickelte Hosting-Panels."
  - label: "Architektur"
    value: "Kubernetes-nativ: KubeVirt (VMs und Container auf einer API), Cilium-Networking (eBPF), replizierter Block-Storage mit LINSTOR/DRBD, Object Storage mit SeaweedFS, Mandantenfähigkeit über das Tenant-CRD, Cozystack Dashboard, VictoriaMetrics und VictoriaLogs."
  - label: "Projektablauf"
    value: "Ab 1.250 USD pro 10 Nodes und Monat bei Provider-Größe; mit dem produktisierten Installer innerhalb weniger Wochen live, sobald die Hardware bereitsteht. Multi-Region-Programme für Betreiber werden per RFP angeboten: 3–6 Monate Pilot, danach 9–18 Monate."
faq:
  - q: "Was ist der Unterschied zum Selbstbetrieb von Open-Source-Cozystack?"
    a: "Cozystack ist der Motor, und er endet dort, wo das Cloud-Geschäft beginnt. Die Public Cloud Platform ergänzt die Oberfläche für den Betreiber: Billing in Back-End und Front-End, Zahlungsintegrationen, WHMCS-Module, ein Kundenportal im eigenen Branding, Assistenten zum Anlegen von Diensten, Sperrung und Suspendierung von Tenants, einen produktisierten Installer, eine Multi-Region-Control-Plane, ein Enterprise-SLA und dedizierten Support. Das Billing-System und die WHMCS-Integration sind proprietäre Ænix-Module; der Rest der Plattform bleibt Open-Source-Cozystack. Diese Oberflächen selbst zu bauen, kostet Jahre an Engineering — und nichts davon unterscheidet Sie von einem anderen Anbieter."
  - q: "Wie unterscheidet sie sich von der Ænix Private Cloud Platform?"
    a: "Darin, wer die Kapazität nutzt. Die Public Cloud Platform richtet sich an Betreiber, die Cloud an Kunden außerhalb des eigenen Hauses verkaufen; sie bringt deshalb Billing, Zahlungen, Weiterverkauf und Kundenportale mit. Die Private Cloud Platform richtet sich an Organisationen, die Cloud für die eigenen Geschäftsbereiche betreiben; sie bringt stattdessen eine an DORA und NIS2 ausgerichtete Architektur sowie Verschlüsselung und Audit-Logging mit, die auf Ihre Aufsicht hin ausgelegt sind. Dieselbe Cozystack-Basis, dieselben APIs — Sie können beide betreiben, und Organisationen, die Cloud verkaufen und zugleich regulierte interne Workloads betreiben, tun das häufig."
  - q: "Kann sie neben unserem bestehenden VMware- oder OpenStack-Bestand laufen?"
    a: "Ja, und das ist der übliche Weg. Die Plattform unterstützt mehrere Hypervisoren: Sie orchestriert native KubeVirt-VMs und läuft zugleich neben bestehenden VMware-, OpenStack-, OpenNebula- und OpenShift-Umgebungen, sodass Sie eine Kohorte nach der anderen konsolidieren, statt alles in einem Schritt zu migrieren. VMs wechseln mit eingebauten Migrationswerkzeugen von VMware oder OpenStack, und Ænix hat kohortenweise VMware-Ausstiege produktiv umgesetzt."
  - q: "Brauchen wir ein eigenes 24/7-Betriebsteam?"
    a: "Nicht unbedingt. Unterstützt werden sowohl der Betrieb durch den Kunden als auch der Betrieb durch Ænix; im hybriden Modell verantworten Sie die Data Plane, während Ænix die Control Plane unter SLA betreibt. Unsere Rechner modellieren den Cozystack-Betrieb in Engineer-Tagen pro Node: Das Standardmodell des Rechners für Hosting-Anbieter kommt bei 10 Nodes auf etwa 1,3 Vollzeit-Engineers und bei 40 Nodes auf etwa 2,6; das TCO-Modell setzt den Betriebsaufwand pro Node für ein selbst betriebenes OpenStack bei etwa dem Doppelten von Cozystack an. Eine Rufbereitschaft rund um die Uhr braucht mehr Personal als diese Rechnung — oder die 24×7-Abdeckung der Stufe Plus."
  - q: "Wie sieht das Multi-Region-Muster aus?"
    a: "Zwei bis N+1 Regionen mit Richtlinien auf Tenant-Ebene, vom Kunden wählbarer Region sowie Identity-, Netzwerk- und Storage-Richtlinien, die auf Plattformebene über die Regionen hinweg gelten. Ein Anbieter, der in mehrere Regionen wächst, wechselt nicht die Plattform — er schaltet Multi-Region ein und behält sein Portal, sein Billing und seine Tenants."
  - q: "Können wir GPU oder Developer Self-Service später ergänzen?"
    a: "Ja. AI- und GPU-Funktionen sowie die Developer-Self-Service-Schicht sind gewöhnliche Tenant-Workloads auf derselben Plattform; beides hinzuzufügen ist also eine Konfigurationsentscheidung und keine zweite Beschaffung. Anbieter starten häufig mit VMs und Managed Databases und schalten GPU-as-a-Service ein, sobald die Nachfrage da ist."
aliases:
  - /de/produkte/aenix-platform/provider-edition/
  - /de/produkte/aenix-platform/public-cloud-edition/
---

**Eine moderne Alternative zu OpenStack für alle, die Cloud verkaufen — vom regionalen Hoster mit vierzig Nodes bis zum nationalen Betreiber mit mehreren Rechenzentren. Ein komplettes Public-Cloud-Produkt für Hosting-Anbieter: Hosting-Panel, Billing, Kundenportal, Zahlungen, Support. Installieren, Nutzer anbinden, Betrieb aufnehmen.**

Die Live-Demo läuft mit Demodaten in Ihrem Browser: das Kundenportal (Marketplace, Konsole, Konto, Support) und hinter dem Admin-Schalter das Back-Office des Betreibers mit Kunden, Verifizierung, Rechnungen und Ressourcenpreisen. Ohne Registrierung, ohne Cluster.

<div class="cta-row">
  <a class="cta-primary" href="/demo/" target="_blank" rel="noopener">Live-Demo öffnen →</a>
  <a class="cta-secondary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/produkte/">Plattformen vergleichen →</a>
</div>

## Eine Plattform, zwei Enden derselben Skala

Ein regionaler Hoster mit vierzig Nodes und ein nationaler Betreiber mit mehreren Rechenzentren sind im selben Geschäft: Sie verkaufen Kapazität an jemanden außerhalb des eigenen Hauses und brauchen deshalb Billing, ein Kundenportal, eine Tenant-Isolation, die Sie in einem Audit belegen können, und Zahlungen, die sich abgleichen lassen. Das ist ein Produkt, nicht zwei. Der Unterschied liegt darin, wie viel davon eingeschaltet ist.

| | Provider-Größe | Nationale Größe / Betreibergröße |
|---|---|---|
| Wer | Hosting-Anbieter, MSPs, regionale Clouds, Rechenzentren | Telekommunikationsbetreiber, nationale Betreiber, Banken mit einer kommerziellen Cloud, große Public Clouds |
| Regionen | Ein oder wenige Standorte | Multi-Region-Control-Plane; Platzierung von Workloads und Richtlinien über Regionen hinweg |
| Billing | Mit WHMCS integriert, Stripe und regionale Zahlungsanbieter | Vollständiges Billing-Back-End plus Ihr eigenes Front-End, individuelle Zahlungsintegrationen |
| Bestehende Umgebung | Wird abgelöst | Läuft parallel weiter — ein Portal und eine API über bestehende Umgebungen, während Sie migrieren |
| Inbetriebnahme | Produktisierter Installer, live innerhalb weniger Wochen, sobald die Hardware bereitsteht | 3–6 Monate Pilot, danach 9–18 Monate bis zum vollständigen Multi-Region-Betrieb |
| Beschaffung | Veröffentlichte Preisliste, ab 1.250 USD pro Monat für 10 Nodes | Mehrjähriges Programm, Angebot per RFP |

Die Technologie darunter ist identisch, und genau darum geht es: Ein Anbieter, der in die rechte Spalte hineinwächst, wechselt nicht die Plattform. Er schaltet Multi-Region ein und behält sein Portal, sein Billing und seine Tenants.

## Was enthalten ist

### Vollständiges Billing — Back-End und Front-End

Nutzungserfassung, Rechnungsstellung, Zahlungsabwicklung. Stripe, regionale Zahlungsanbieter und B2B-Rechnungen. Keine API-Hooks, die Sie selbst fertigstellen müssen, sondern eine echte produktive Billing-Oberfläche — bei Betreibergröße mit mehreren Währungen und Rechtsräumen sowie mit Prepaid-Guthaben, nachträglicher Rechnungsstellung, Abrechnung über Channel-Partner und Margen für Reseller.

### WHMCS-Integration

Ein produktionsreifes Modul mit Billing-Vorlagen für das Panel, das Sie bereits betreiben. Zwei Integrationsmodi: WHMCS als Frontend für Ihre Kunden oder Cozystack Dashboard als Frontend mit WHMCS als Billing-Back-End. Vollständige Nutzungsdaten, erfasst und gespeichert hinter einer dokumentierten API. [Mehr zur WHMCS-Integration →](/de/produkte/whmcs-integration/)

### Hosting-Panel und Kundenportal

Ein Admin-Back-Office für den Betreiber sowie eine Konsole für Ihre Kunden (Cozystack Dashboard in Ihrem Branding; White-Labeling ist eine Open-Source-Funktion von Cozystack, und Support für die Konfiguration ist ab der Stufe Standard enthalten) mit Self-Service-Registrierung, Profilen, Teamverwaltung und Support-Tickets.

### Assistenten zum Anlegen von Diensten

Geführte Abläufe für VMs, Kubernetes-Cluster, Managed Databases (PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS), S3-kompatiblen Object Storage und GPU-Workloads. Ihre Endkunden brauchen kein YAML.

### Sperrung und Suspendierung von Tenants

Steuerung des Tenant-Lebenszyklus ist eingebaut — automatische Suspendierung überfälliger Konten, Sperrung von Ressourcen, Sperre für Sicherheitsprüfungen. Für die Suspendierung eines nicht zahlenden Tenants braucht es kein Engineering-Ticket.

### Control Plane für mehrere Hypervisoren

Orchestriert native KubeVirt-VMs und läuft während der Migration neben bestehender VMware-, OpenStack-, OpenNebula- und OpenShift-Infrastruktur. Storage-Classes sind mit gemeinsam genutztem SAN, S3-kompatiblem und lokalem Block-Storage kompatibel; die Netzwerkanbindung an bestehende Fabrics erfolgt über BGP, OVN und Cilium.

### Multi-Region

Native Orchestrierung über mehrere Regionen: Platzierung von Workloads sowie Identity-, Netzwerk- und Storage-Richtlinien gelten regionsübergreifend. Ein Tenant kann in einer Region leben oder sich über mehrere erstrecken.

### Dienstkatalog über VMs hinaus

Managed PostgreSQL (CloudNativePG), MariaDB, Valkey, Kafka, ClickHouse, RabbitMQ, NATS, MongoDB, OpenSearch und Qdrant; S3-Storage (SeaweedFS); HTTP-Cache; VPN-Dienst; GPU-Workloads.

### Migrationswerkzeuge und Erfahrung

Eingebaute Werkzeuge zur VM-Migration und Runbooks für den Umstieg von VMware, OpenStack, Virtuozzo und OpenNebula. In der Stufe Plus begleitet Ænix die Migration, in der Stufe Enterprise steuert Ænix sie; in den übrigen Stufen wird sie als Dienstleistung angeboten. [Migrationsleitfäden →](/de/migration/)

### Was das Abonnement umfasst

Ein Abonnement besteht aus einer Support-Stufe plus den proprietären kommerziellen Ænix-Modulen (Billing-System und WHMCS-Integration) und wird pro 10 physische Nodes und Monat berechnet: Basic 1.250 USD, Standard 3.000 USD, Plus 5.500 USD bei jährlicher Abrechnung, Enterprise individuell. Ein Team, das Cozystack selbst betreibt, schließt dasselbe Abonnement als [Enterprise-Support für selbst betriebenes Cozystack](/de/produkte/cozystack-enterprise-support/) ab und lässt die kommerziellen Module einfach ungenutzt. Die Plattforminstallation ist ab Standard enthalten, 24×7-Support ab Plus. Endet das Abonnement, läuft die Open-Source-Plattform Cozystack auf Ihrer Hardware weiter; die kommerziellen Module und der Ænix-Support enden. [Vollständiger Vergleich der Stufen →](/de/preise/#support)

## Warum sich Anbieter dafür statt für OpenStack entscheiden

| Kriterium | OpenStack | Ænix Public Cloud Platform |
|---|---|---|
| Zeit bis zum Produktivbetrieb | Typischerweise 6 Monate und mehr | Wochen |
| Betriebsaufwand pro Node | Im Selbstbetrieb etwa doppelt so hoch wie bei Cozystack ([TCO-Modell](/tco-calculator/methodology/)) | Die Basis im selben Modell |
| Dienstkatalog | Jenseits von Compute, Storage und Netzwerk Eigenbau | Eingebaut: Kubernetes, Datenbanken, S3, GPU, Cache, VPN |
| Kundenportal | Eigenbau | Cozystack Dashboard in Ihrem Branding |
| Billing | Eigene Integration | WHMCS-nativ, Stripe und regionale Anbieter |
| Mandantenfähigkeit | Projektmodell — eingeschränkt | Tenants mit Quotas, RBAC und Observability pro Tenant |
| Migration von VMware | Großer Aufwand | Eingebaute Migrationswerkzeuge plus Umsetzung durch Ænix |
| Herstellersupport | Community plus Zusatzangebote | Ænix-Support-Stufen ab 1.250 USD pro 10 Nodes und Monat |
| Upgrade-Rhythmus | Manuell | Plattform-Releases über GitOps |

### Und im Vergleich zu VPS-Control-Panels

Die meisten kleinen und mittleren Anbieter betreiben gar kein OpenStack. Sie nutzen Virtualizor, SolusVM, Proxmox mit angeflanschtem Billing oder ein selbst geschriebenes Panel. Diese Werkzeuge erledigen eine Aufgabe gut: VPS verkaufen und bereitstellen.

| Kriterium | Klasse Virtualizor / SolusVM | Ænix Public Cloud Platform |
|---|---|---|
| Produktkatalog | VPS und Varianten davon | VMs plus Managed Kubernetes, PostgreSQL, MariaDB, ClickHouse, Kafka, RabbitMQ, Valkey, S3, GPU |
| Wo die Marge liegt | Weiterverkauf von Kapazität, Preiswettbewerb pro vCPU | Managed Services auf derselben Hardware, mit Preis pro Dienst |
| Mandantenmodell | Ein Konto, dem VMs gehören | Tenants mit Quotas, RBAC, Netzwerkisolation sowie Observability und Billing pro Tenant |
| Kubernetes für Kunden | Nicht angeboten oder ein separat zu betreibendes Produkt | Nativ, mit einer verwalteten Control Plane pro Tenant |
| Upgrades | Panel-Upgrade und Hypervisor-Upgrade, beide manuell | Eine über GitOps verwaltete Plattformversion |
| Lock-in | Proprietäres Panel, Lizenz pro VM | Apache-2.0-Kern; Sie können die kommerzielle Schicht weglassen und bei reinem Cozystack bleiben |

Ehrlich gesagt: Wenn der VPS-Weiterverkauf Ihr gesamtes Geschäft ist und die Marge Sie zufriedenstellt, ist ein Panel günstiger und einfacher — behalten Sie es. Diese Plattform rechnet sich, wenn Sie Managed Services, Datenbanken, Kubernetes und GPU verkaufen wollen, ohne jeden Dienst selbst zu bauen.

## Kombinierbar mit den anderen Plattformen

Die drei Ænix-Plattformen sind derselbe Motor mit unterschiedlich eingeschalteten Oberflächen; sie ergänzen sich, statt zu konkurrieren. Nichts davon ist eine separate Installation.

- **[AI Platform](/de/produkte/ai-platform/)** — mandantenfähiges GPU-Scheduling, anteilige GPU-Nutzung, Model Serving, Vektordatenbanken. Anbieter verkaufen das als GPU-as-a-Service auf der Hardware, die sie bereits haben.
- **[Private Cloud Platform](/de/produkte/private-cloud-platform/)** — an DORA und NIS2 ausgerichtete Architektur, Verschlüsselung und Audit-Logging, ausgelegt auf Ihre Aufsicht. Relevant, wenn Sie selbst ein reguliertes Unternehmen sind oder interne Workloads neben den verkauften betreiben.

Ein Telekommunikationsbetreiber, der ein souveränes Cloud-Produkt verkauft und zugleich seine eigene regulierte interne Umgebung betreibt, nimmt beides — auf einer Plattform, mit einem Betriebsteam.

## Wer sie kauft

| Käufer | Typischer Projektablauf |
|---|---|
| Hosting-Anbieter, MSP, regionale Cloud | Produktisierter Installer, live innerhalb weniger Wochen, sobald die Hardware bereitsteht, zu Listenpreisen |
| Rechenzentrum, das Cloud-Dienste ergänzt | Migration von VMware oder Virtuozzo, danach Ausbau des Dienstkatalogs |
| Großer Public-Cloud-Betreiber | Start eines neuen Cloud-Produkts oder Ausbau auf mehrere Regionen |
| Großer Telekommunikationsbetreiber oder nationaler Betreiber | Souveränes Cloud-Produkt für Kunden, oft regional plus Edge |

## Produktive Kunden

Zu den Anbietern, die die Ænix Public Cloud Platform betreiben, gehören **GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard und Cloudsy**; sie liefern mandantenfähige Cloud-Produkte in der EU, im DACH-Raum, in Zentralasien und weiteren Regionen.

Eine kommerzielle Public Cloud auf dieser Plattform ist ausführlich beschrieben: [ein Schweizer Anbieter mit drei Rechenzentren, synchroner Replikation zwischen den Rechenzentren und GPU im Produktivbetrieb](/de/case-studies/sovereign-public-cloud/).

## Projektablauf

- **Discovery-Gespräch** (30 Minuten, kostenlos) — Eignung klären
- **Platform Readiness Assessment** (14 oder 28 Tage, Festpreis) — Ist- und Zielarchitektur, Migrations-Roadmap, Risikoregister
- **Pilot** (3–6 Monate, bei Betreibergröße) — eine Region, eine Tenant-Kohorte, eine Produktlinie
- **Aufbau** — bei Provider-Größe mit dem produktisierten Installer innerhalb weniger Wochen live, sobald die Hardware bereitsteht; bei Programmen in Betreibergröße 9–18 Monate bis zum vollständigen Multi-Region-Betrieb
- **Managed Operations** (optional) — Ænix betreibt die Control Plane unter SLA

[Platform Readiness Assessment →](/de/dienstleistungen/platform-readiness-assessment/)

## Wie Sie starten

Nennen Sie uns Ihre Größe, Ihren aktuellen Stack und was Sie heute verkaufen — wir antworten per E-Mail und vereinbaren ein fokussiertes Gespräch mit einem Ænix-Engineer, um die Eignung zu klären. Oder [buchen Sie direkt ein 30-minütiges Gespräch im Kalender](https://zcal.co/i/s5C4-cO1).

{{< pipedrive-form type="demo" >}}

Lieber ein kürzerer erster Schritt? [Vereinbaren Sie ein Discovery-Gespräch](/de/kontakt/) oder modellieren Sie Ihre Margen im [Rechner für die Unit Economics von Hosting-Anbietern](/isp-calculator/) (Englisch).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/demo/" target="_blank" rel="noopener">Live-Demo öffnen →</a>
</div>
