---
title: "Transport- und Logistik-Cloud-Architektur — NIS2, KI, Edge im Jahr 2026"
seo_title: "Transport und Logistik: Cloud-Architektur mit NIS2"
description: "Cloud-Architektur für Transport und Logistik unter NIS2: wer sie baut, wie Terminals und Depots ohne Uplink weiterlaufen und wo TOS und KI-Inferenz laufen."
date: "2026-05-01"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/de/transport-logistik-cloud-architektur-nis2.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["NIS2", "Cozystack"]
language: "de"
companion_landing: "/de/branchen/transport-logistik/"
quiz:
  title: "Wissens-Check: Transport / Logistik Cloud-Architektur"
  questions:
    - q: "Wo ordnet NIS2 den Sektor Verkehr ein?"
      options:
        - { text: "Sektor nach Anhang I; wesentliche oder wichtige Einrichtung je nach Größe (Artikel 3)", correct: true }
        - { text: "Sektor nach Anhang II; immer eine wichtige Einrichtung", correct: false }
        - { text: "Die IT im Verkehrssektor fällt nicht unter NIS2", correct: false }
      explanation: "Verkehr (Luft, Schiene, Wasser, Straße) ist ein Sektor mit hoher Kritikalität nach Anhang I. Nach Artikel 3 sind große Verkehrsunternehmen wesentliche, mittlere wichtige Einrichtungen. In beiden Fällen gelten die Risikomanagementmaßnahmen aus Artikel 21 und die Meldefristen aus Artikel 23 für die IT, die sie betreiben."
    - q: "Wie empfiehlt der Artikel, ein Terminal Operating System zu betreiben, das der Hersteller als VM-Appliance ausliefert?"
      options:
        - { text: "Vor der Migration als Container neu schreiben", correct: false }
        - { text: "Als KubeVirt-VM auf dem Standort-Cluster, neben den containerisierten Diensten", correct: true }
        - { text: "Für das TOS an jedem Terminal einen eigenen Hypervisor betreiben", correct: false }
        - { text: "In die Zentrale verlagern und über das WAN ansprechen", correct: false }
      explanation: "Ein TOS oder WMS ist zustandsbehaftet, latenzempfindlich und wird vom Hersteller auf einem bestimmten Betriebssystem unterstützt. Es läuft als KubeVirt-VM auf dem Standort-Cluster, im selben Netz und in derselben Backup-Klasse wie die Container daneben — der Hersteller behält seine Support-Matrix, und niemand betreibt einen zweiten Hypervisor."
    - q: "Was passiert an einem Terminal, wenn der Uplink zur Zentrale ausfällt?"
      options:
        - { text: "Die Workloads am Standort stehen still, bis die Verbindung zurück ist", correct: false }
        - { text: "Die Workloads schwenken automatisch ins regionale Rechenzentrum", correct: false }
        - { text: "Der Standort arbeitet aus lokalem Storage weiter; nur Replikation nach oben und zentrale Sichten pausieren", correct: true }
      explanation: "Workloads am Standort arbeiten aus Storage, der innerhalb des Standorts repliziert wird. Es pausieren die Replikation nach oben, zentrale Dashboards und netzweite Planung; kommt die Verbindung zurück, werden gepufferte Daten nachgeliefert. Der Artikel stellt klar, dass es kein automatisches standortübergreifendes Failover gibt."
    - q: "Welche GPU-Modi beschreibt der Artikel für KI-Workloads?"
      options:
        - { text: "Ausschließlich MIG-Slices, die virtuellen Maschinen zugewiesen werden", correct: false }
        - { text: "Ganze GPU per Passthrough oder NVIDIA vGPU für VMs; MIG-Partitionen oder HAMi-Time-Slicing in Tenant-Kubernetes", correct: true }
        - { text: "Nur Time-Slicing, MIG kommt erst später", correct: false }
        - { text: "Genau eine GPU pro Tenant, ohne Sharing", correct: false }
      explanation: "Virtuelle Maschinen erhalten eine ganze GPU per Passthrough oder NVIDIA vGPU mit der NVIDIA-vGPU-Lizenz des Kunden. In Tenant-Kubernetes-Clustern stellt der NVIDIA GPU Operator MIG-Partitionen auf MIG-fähigen Karten bereit, HAMi sorgt für Time-Slicing. MIG-Slices werden keinen VMs zugewiesen."
    - q: "Ein regionaler Cloud-Anbieter möchte mittelständischen Logistikunternehmen eine souveräne Cloud verkaufen. Auf welchen Weg verweist der Artikel?"
      options:
        - { text: "Ænix Public Cloud Platform: Portal unter eigener Marke, Billing und Managed Services, in Wochen live, sobald die Hardware steht", correct: true }
        - { text: "Ænix Private Cloud Platform: ein Aufbau über 3–12 Monate für die eigenen Geschäftsbereiche des Anbieters", correct: false }
        - { text: "Ein Edge-Dienst eines Hyperscalers, unter eigener Marke weiterverkauft", correct: false }
      explanation: "Wer Kapazität an andere verkauft, ist der Fall für die Public Cloud Platform: Portal im White-Label, Billing und ein Katalog an Managed Services. In Anbietergröße ist der Produkt-Installer in Wochen live, sobald die Hardware steht; Multi-Region-Programme von Betreibern laufen mit einem Pilot über 3–6 Monate, danach 9–18 Monate."
faq:
  - q: "Fallen Transport und Logistik unter NIS2?"
    a: "Ja. Verkehr — Luft, Schiene, Wasser und Straße — ist ein Sektor nach Anhang I. Große Unternehmen sind wesentliche, mittlere wichtige Einrichtungen (Artikel 3). Beide müssen die Risikomanagementmaßnahmen aus Artikel 21 auf ihre IT anwenden und die Meldefristen aus Artikel 23 einhalten: 24 Stunden, 72 Stunden und ein Monat."
  - q: "Wer baut typischerweise eine Cloud-Plattform für Transport und Logistik?"
    a: "Drei Arten von Betreibern. Große Verkehrsunternehmen und staatliche Verkehrskonzerne bauen eine Private Cloud für ihre eigenen Geschäftsbereiche. Öffentliche IT-Dienstleister und Shared-Service-Center betreiben eine Plattform für mehrere Behörden oder Betreiber. Regionale Cloud-Anbieter und Systemintegratoren bauen sie für Logistikunternehmen, die nie eine eigene Plattform betreiben werden."
  - q: "Kann ein Terminal oder Depot weiterarbeiten, wenn die Verbindung zur Zentrale ausfällt?"
    a: "Ja, wenn der Standort einen eigenen Cluster hat. Die Workloads arbeiten aus Storage, der innerhalb des Standorts repliziert wird; Replikation nach oben und zentrale Dashboards pausieren und laufen weiter, sobald die Verbindung zurück ist. Ein automatisches standortübergreifendes Failover gibt es nicht — der Standortwechsel ist ein Runbook, das Sie entwerfen und üben."
  - q: "Greift die Plattform in sicherheitskritische OT wie Bahnsignaltechnik ein?"
    a: "Nein. Signaltechnik, Stellwerke und Kransteuerung bleiben in ihrem eigenen Netz mit eigenem Sicherheitsnachweis. Die Plattform liegt darüber, übernimmt Daten über definierte Übergänge, die per Cilium Network Policy durchgesetzt werden, und läuft air-gapped, wo das Sicherheitskonzept des Standorts das verlangt."
  - q: "Wie wird abgerechnet?"
    a: "Ænix Private Cloud Platform und Ænix AI Platform werden per RFP angeboten, nach einem Platform Readiness Assessment zum Festpreis über 14 oder 28 Tage. Ænix Public Cloud Platform für Anbieter, die Kapazität verkaufen, beginnt bei 1.250 USD pro 10 Nodes und Monat nach den veröffentlichten Support-Stufen."
hreflang_en: /blog/2026/05/transport-logistics-cloud-architecture-nis2/
---

Im Transportsektor folgt die Rechenleistung der Fracht. Ein Containerterminal, ein Rangierbahnhof, ein Cross-Dock-Depot und eine Lkw-Flotte erzeugen Daten, und alle müssen weiterarbeiten, wenn die Leitung zur Zentrale ausfällt. Gleichzeitig hat NIS2 die meisten dieser Unternehmen verbindlichen Pflichten zu Risikomanagement und Meldung unterworfen, und KI ist aus den Präsentationen in die Disposition gewandert: Ankunftsprognosen, Routenplanung und Wartungsvorhersagen laufen heute produktiv.

Diese drei Kräfte ziehen die Architektur in verschiedene Richtungen. Die Regulierung verlangt zentrale Kontrolle und Nachweise. KI braucht GPUs an wenigen Orten mit gleichmäßiger Last. Der Betrieb braucht Autonomie am Edge. Dieser Beitrag beschreibt ein Muster, das alle drei zusammenbringt, zeigt, wer es tatsächlich baut und betreibt, und sagt, wo es nicht passt.

## Wer eine Transport-Cloud baut

Es lohnt sich, beim Betreiber anzufangen, denn dieselbe Architektur sieht je nach Träger sehr unterschiedlich aus.

**Große Verkehrsunternehmen und staatliche Verkehrskonzerne** — Eisenbahninfrastrukturunternehmen, Hafenbehörden, nationale Post- und Frachtkonzerne — bauen eine Private Cloud für ihre eigenen Geschäftsbereiche. Güterverkehr, Personenverkehr und Infrastruktur teilen sich die Hardware, aber nicht das Vertrauen, und Joint Ventures bringen Partner mit, die ihre eigenen Workloads sehen sollen und sonst nichts. Das ist der Fall für die [Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/): eine Plattform, ein Tenant pro Geschäftsbereich und die Nachweise, nach denen eine NIS2-Aufsicht fragt.

**Öffentliche IT-Dienstleister und Shared-Service-Center** betreiben Infrastruktur für mehrere Behörden zugleich: ein Verkehrsministerium, einen kommunalen Verkehrsbetrieb, eine Straßenbauverwaltung. Für sie zählen verschachtelte Tenants. Ein Tenant auf oberster Ebene pro Behörde, mit eigenen Quotas und Administratoren, und darunter Sub-Tenants für Projekte oder Auftragnehmer bilden das Organigramm auf der Plattform ab, ohne für jede Abteilung einen eigenen Cluster zu betreiben. Die Seite zum [öffentlichen Sektor](/de/branchen/oeffentlicher-sektor/) behandelt die Vergabeseite.

**Regionale Cloud-Anbieter und Systemintegratoren** bedienen den breiten Rest des Marktes. Ein mittelständischer Spediteur oder ein regionales Busunternehmen wird nie eine eigene Kubernetes-Plattform betreiben, braucht aber trotzdem ein souveränes Zuhause für sein TMS, sein Kundenportal und seine Telematikdaten. Ein Anbieter mit Rechenzentren in der richtigen Rechtsordnung kann das auf der [Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/) als Dienst unter eigener Marke verkaufen: White-Labeling des Portals ist eine Open-Source-Funktion von Cozystack, Billing und WHMCS-Integration sind in der Subscription enthalten. Ein Integrator, der ein Terminalprojekt liefert, kann dieselbe Plattform beim Kunden vor Ort installieren, bei Bedarf air-gapped, und sie übergeben.

Unter unseren veröffentlichten Case Studies ist kein Verkehrsunternehmen, und wir tun auch nicht so. Am nächsten kommt [eine souveräne Public Cloud auf Bare Metal](/de/case-studies/sovereign-public-cloud/): ein Schweizer Anbieter, der VMs, Managed Kubernetes, Datenbanken und GPUs über drei Rechenzentren mit synchroner Replikation betreibt, für einen Markt — öffentlicher Sektor und Finanzbranche —, in dem die Daten im Land bleiben müssen. Genau so sieht der Weg über den regionalen Anbieter aus.

## Drei Ebenen, und warum der Edge die schwierige ist

Das Muster hat drei Ebenen, jede auf [Cozystack](/de/produkte/cozystack/), dem CNCF-Projekt, das Ænix entwickelt hat und mitbetreut. So läuft an jedem Standort dieselbe API mit demselben Betriebsmodell.

**Zentrale Cloud.** Transportmanagementsystem, Flottenmanagement, Planung, Modelltraining, Kundenportale und die netzweite Sicht. Hier landet der größte Teil der Daten, und hier sitzen die meisten Menschen, die sie auswerten.

**Regionale Standorte.** Leitstellen und regionale Disposition, dazu KI-Inferenz, die eine Region bedient statt eines einzelnen Standorts. Regionale Standorte sind außerdem der nächstgelegene Sammelpunkt für kleinere Standorte.

**Standort-Cluster.** Häfen, Terminals, große Depots und Rangierbahnhöfe — Orte mit einem Serverraum und genug Volumen für einige eigene Nodes. Hier liegt die eigentliche Arbeit.

Fahrzeuge sind keine Ebene, auf der die Plattform läuft. Ein Lkw oder eine Lokomotive ist eine Telematikquelle, kein Kubernetes-Node; seine Daten landen am nächsten Standort oder in der Region. Kleine Depots ohne Serverraum sind in derselben Lage: Ein schlankes Gateway leitet an den nächsten Standort-Cluster weiter.

### Das Terminal Operating System

Der Fall, an dem reine Container-Plattformen scheitern, ist das Terminal Operating System oder das Warehouse-Management-System. Es ist zustandsbehaftet, latenzempfindlich und wird vom Hersteller auf einem bestimmten Betriebssystem unterstützt, oft als VM-Appliance ausgeliefert. Neu schreiben kommt nicht infrage, und ein zweiter Hypervisor nur dafür verdoppelt den Betriebsaufwand.

Auf Cozystack läuft das TOS als virtuelle Maschine mit KubeVirt auf dem Standort-Cluster, neben den containerisierten Diensten drumherum, in einem Netz und einer Backup-Klasse. Der Hersteller behält seine Support-Matrix, Ihr Team behält eine Plattform. Wenn der Bestand gleichzeitig von VMware weggeht, beschreibt der Beitrag zu [VMware-Migration: Tools und Strategie](/de/blog/2026/05/vmware-migration-tools-strategie/), wie VMs in Kohorten umziehen.

### Gate, OCR und Telematik

Gate-Automatisierung, OCR für Kennzeichen und Containernummern, Anbindung der Fahrzeugwaage und Fahrzeugtelematik erzeugen einen lokalen Datenstrom mit hoher Rate. Roh in die Zentrale geschickt, kostet er Latenz, die sich das Gate nicht leisten kann, und eine WAN-Rechnung, die mit jedem Depot wächst. Er wird auf dem Standort-Cluster verarbeitet und als verdichtete Ereignisse nach oben weitergegeben.

### Wenn der Uplink ausfällt

Ein Standort-Cluster arbeitet aus lokalem Storage; der Zustand wird mit LINSTOR/DRBD innerhalb des Standorts repliziert, nicht in die Zentrale. Fällt der Uplink aus, fahren die Lkw weiter durchs Gate. Es pausieren die Replikation nach oben, zentrale Dashboards und netzweite Planung; kommt die Verbindung zurück, werden gepufferte Daten nachgeliefert und der Standort holt auf.

Wichtig ist, was das nicht ist. Ein automatisches standortübergreifendes Failover virtueller Maschinen gibt es nicht. Geht ein ganzer Standort verloren, ist die Wiederherstellung ein Runbook — Restore aus Backups, die außerhalb des Standorts auf anderer Infrastruktur liegen —, das Sie entwerfen und üben. Gestreckte Designs mit synchroner Replikation über nahe beieinanderliegende Rechenzentren gibt es, wie im Schweizer Fall, aber sie sind eine Designentscheidung, keine Voreinstellung.

## NIS2-Kontrollen, die für den Transport spezifisch sind

Die allgemeine Zuordnung ist dieselbe wie für jede Einrichtung: die zehn Maßnahmen aus Artikel 21 Absatz 2 und die Fristen aus Artikel 23 — 24 Stunden für die Frühwarnung, 72 Stunden für die Meldung, ein Monat für den Abschlussbericht. Die [NIS2-Nachweisseite](/de/compliance/nis2/) zeigt Maßnahme für Maßnahme, was die Plattform liefert und was bei Ihnen bleibt; die [NIS2-Checkliste für die Cloud-Architektur](/de/blog/2026/05/nis2-checkliste-cloud-architektur/) ist die Kurzfassung. Vier Punkte verdienen im Transport besondere Aufmerksamkeit.

**Grenzüberschreitende Daten.** Frachtdaten überschreiten mit jeder Sendung Rechtsordnungen. Datenresidenz muss eine Eigenschaft der Platzierung eines Workloads sein — welcher Cluster, welcher Tenant, welche Storage-Klasse —, keine Vertragsklausel. Das ist einfacher, wenn an jedem Standort dieselbe Plattform läuft und die Platzierung deklariert statt erinnert wird.

**Lieferketten mit vielen Gliedern.** Artikel 21 Absatz 3 verlangt, die Schwachstellen und Praktiken jedes direkten Lieferanten zu bewerten. In der Logistik ist die Kette aus Frachtführern, Spediteuren, Maklern und Umschlagbetrieben hinter einer einzigen Sendung lang, und der Blick über den direkten Lieferanten hinaus ist begrenzt. Bei Ihrer eigenen Seite hilft die Plattform: eine Open-Source-Engine, die Sie prüfen können, Komponenten, die auf Image-Digests festgelegt sind, und Ænix als bewertbarer Lieferant mit [ISO/IEC 27001:2022](/de/compliance/iso-27001/)-Zertifizierung für das eigene ISMS.

**Kontinuität bei physischen Störungen.** Hafensperrungen, gesperrte Straßen und Stürme sind in der Transportplanung normale Ereignisse. Business Continuity bedeutet hier Standortautonomie plus geprüfte Restores, nicht das Versprechen, dass alles von selbst umschwenkt.

**Die OT-Grenze.** Bahnsignaltechnik, Stellwerke, Kran- und AGV-Steuerung bleiben in ihrem eigenen Netz, mit eigenem Änderungsmanagement und eigenem Sicherheitsnachweis. Die Plattform liegt darüber und übernimmt Daten über definierte Übergänge, die per Cilium Network Policy durchgesetzt werden. Sie liegt nie im Pfad einer Sicherheitsfunktion. Wo das Sicherheitskonzept des Standorts es verlangt, läuft die Plattform air-gapped: Images und Releases werden innerhalb des Perimeters gespiegelt, und Ænix-Engineers greifen nur mit Ihrer Freigabe auf die Umgebung zu.

Der Rest ist gewöhnliche Plattformhygiene, die zugleich NIS2-Nachweis ist: Der Plattformzustand ist als Manifeste deklariert und wird per GitOps ausgerollt, sodass Sie ein versioniertes Inventar haben; Metriken und Logs werden pro Tenant mit VictoriaMetrics und VictoriaLogs erfasst; Kubernetes-Audit-Logs haben eine konfigurierbare Aufbewahrung und lassen sich in einen unveränderlichen Speicher unter Ihrer Kontrolle ausleiten; die Volume-Verschlüsselung ist pro Storage-Klasse optional, mit einer Passphrase, die Sie halten. Nichts davon erfüllt die Pflichten eines Betreibers von allein. Es macht den technischen Teil der Nachweise aber deutlich leichter.

## KI-Workloads im Transport

Die meiste KI im Transport ist Inferenz, die den ganzen Tag läuft: Ankunftsprognosen, Routen- und Ladeplanung, Nachfrageprognosen, vorausschauende Wartung auf Basis von Sensordaten der Flotte und Modelle hinter dem Kundenservice. Das ist gleichmäßige Last, und genau dort schlagen eigene GPUs meist das stundenweise Mieten — der [Beitrag zur GPU-Wirtschaftlichkeit](/de/blog/2026/05/ai-platform-gpu-wirtschaftlichkeit-inferenz/) rechnet durch, ab wann. Training und große Planungsläufe gehören in die Zentrale; latenzkritische Inferenz wie Gate-OCR kann auf dem Standort-Cluster laufen.

Die [Ænix AI Platform](/de/produkte/ai-platform/) unterstützt NVIDIA-Rechenzentrums-GPUs über den NVIDIA GPU Operator, in zwei Formen. Virtuelle Maschinen erhalten eine ganze GPU per Passthrough oder NVIDIA vGPU mit Ihrer NVIDIA-vGPU-Lizenz. In Tenant-Kubernetes-Clustern stellt der GPU Operator MIG-Partitionen auf MIG-fähigen Karten bereit, und HAMi ermöglicht Time-Slicing für kleine Modelle, die keine ganze Karte brauchen. GPU-Tenants nutzen dieselbe Tenant-Grenze wie alles andere, sodass das Zugriffsmodell, das Ihre Aufsicht bereits geprüft hat, auch die KI-Workloads abdeckt.

## Wann das nicht passt

Besteht Ihr gesamter Bestand aus einer Handvoll SaaS-Anwendungen und einem TMS, das der Hersteller hostet, brauchen Sie keine Plattform, sondern gute Lieferantenverträge. Sind Ihre Standorte kleine Depots mit je einem Server, ist ein vollständiger Standort-Cluster überdimensioniert — ein Cozystack-Cluster beginnt bei drei Nodes —, und ein Gateway, das an einen regionalen Standort weiterleitet, ist die ehrliche Antwort. Und wenn Ihr Kontinuitätsplan voraussetzt, dass virtuelle Maschinen automatisch zwischen Rechenzentren umschwenken, liefert dieses Muster das nicht; es liefert Standortautonomie, Replikation und geübte Restores.

## Wie Ænix vorgeht

Für Verkehrsunternehmen und öffentliche IT führt der Weg über ein kostenloses 30-minütiges Erstgespräch zum [Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/) — Festpreis, 14 Tage fokussiert oder 28 Tage vollständig — mit einem Transport-Arbeitsstrang zu Standorttopologie, OT-Grenze und NIS2-Lücken. Darauf folgt ein [Private-Cloud-Aufbau](/de/dienstleistungen/build-private-cloud/) über 3 bis 12 Monate je nach Umfang, oft beginnend mit einem Standort oder einem Geschäftsbereich. Private Cloud Platform und AI Platform werden per RFP angeboten.

Für regionale Anbieter ist die Public Cloud Platform über den Produkt-Installer in Wochen live, sobald die Hardware steht; Subscriptions beginnen bei 1.250 USD pro 10 Nodes und Monat nach den [veröffentlichten Stufen](/de/preise/). Nationale Multi-Region-Programme laufen mit einem Pilot über 3 bis 6 Monate, danach 9 bis 18 Monate bis zur vollständigen Multi-Region. Diesen Weg deckt die Dienstleistung [Sovereign Cloud Builder](/de/dienstleistungen/sovereign-cloud-builder/) ab.

Die Seite [Transport und Logistik](/de/branchen/transport-logistik/) fasst die Plattformseite zusammen. Die Dokumentation von Cozystack selbst finden Sie unter [cozystack.io](https://cozystack.io/docs/).
