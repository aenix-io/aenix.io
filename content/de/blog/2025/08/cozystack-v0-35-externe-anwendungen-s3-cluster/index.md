---
title: "Cozystack v0.35: externe Anwendungsquellen, dedizierte S3-Cluster und Hetzner RobotLB"
seo_title: "Cozystack v0.35: externe Apps und dedizierter S3"
description: "Cozystack v0.35 bringt externe Anwendungsquellen für die modulare Architektur, dedizierte S3-Cluster mit Monitoring und Unterstützung für Hetzner RobotLB."
slug: "cozystack-v0-35-externe-anwendungen-s3-cluster"
date: "2025-08-21"
cover_image: "/img/blog/covers/de/cozystack-v0-35-externe-anwendungen-s3-cluster.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "AI and ML", "GPU", "Multi-tenancy"]
language: "de"
hreflang_en: "/blog/2025/08/cozystack-v0-35/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack mit SLA ansehen →"
---



Die neue Cozystack-Version macht einen großen Schritt in Richtung modularer (oder: entkoppelter) Architektur: Nutzer können eigene Anwendungen und Services jetzt schnell integrieren. Damit lässt sich der Funktionsumfang der Plattform deutlich über das hinaus erweitern, was sie von Haus aus mitbringt, und auf konkrete geschäftliche Anforderungen zuschneiden. Und das ist noch nicht alles.

![Release Cozystack v0.35](/img/blog/medium/cozystack-v0-35/cover.png)

> Was ist Cozystack?

> Cozystack ist ein kostenloses PaaS und Framework für den Aufbau von Clouds, das VMs, Container und GPU-Workloads unter Kubernetes vereint. Unternehmen können damit Hardware in eine Cloud verwandeln und ihren Nutzern oder Kunden Managed K8s, VMs, Managed-Datenbanken, Anwendungen und GPU-Services anbieten. Dank KubeVirt-Integration, Multi-Tenancy und der Einfachheit von Bare Metal lassen sich KI, Datenbanken oder Edge-Anwendungen ohne Vendor-Lock-in betreiben. Cozystack ist ein CNCF-Sandbox-Projekt.

## Wichtige Funktionen und Verbesserungen

### Externe Anwendungsquellen in Cozystack

Cozystack unterstützt jetzt das [Hinzufügen externer Anwendungspakete](https://cozystack.io/docs/applications/external/) zum Anwendungskatalog der Plattform. Plattformadministratoren können über die Cozystack-API eigene Anwendungen oder Anwendungen von Drittanbietern neben den mitgelieferten bereitstellen.

Dafür wird ein Anwendungspaket benötigt, ähnlich den Paketen, die Cozystack unter [packages/apps](https://github.com/cozystack/cozystack/tree/main/packages/apps) mitbringt. Möglich wird die Nutzung externer Pakete durch eine neue CustomResourceDefinition (CRD) namens CozystackResourceDefinition und einen zugehörigen Controller (Reconciler), der diese Ressourcen überwacht.

Fügen Sie Ihre eigene Managed-Anwendung anhand der [Dokumentation](https://cozystack.io/docs/applications/external/) und des Beispiels unter [github.com/cozystack/external-apps-example](https://github.com/cozystack/external-apps-example) hinzu.

### Verbesserungen an der Cozystack-API

Dieses Release verbessert die OpenAPI-Spezifikationen aller Managed-Anwendungen in Cozystack deutlich, darunter Datenbanken, Tenant-Kubernetes, virtuelle Maschinen, Monitoring und weitere. Felder, die bisher nur als generische Objekte definiert waren, haben jetzt präzisere Typdefinitionen, und für viele Felder gelten Wertebeschränkungen. Viele Fehlkonfigurationen werden dadurch sofort beim API-Request erkannt und nicht erst später durch ein fehlgeschlagenes Deployment.

Die Cozystack-API zeigt jetzt außerdem die Standardwerte der Anwendungsressourcen an. Die meisten übrigen Felder haben nun sinnvolle Standardwerte, sofern solche möglich sind.

All diese Änderungen ebnen den Weg für die neue Cozystack-Oberfläche, die sich derzeit in Entwicklung befindet.

### Unterstützung für Hetzner RobotLB

MetalLB, der standardmäßig in Cozystack enthaltene Load Balancer, ist für Bare Metal und selbst gehostete VMs gebaut, wird aber von den meisten Cloud-Anbietern nicht unterstützt. Hetzner beispielsweise bietet mit RobotLB einen eigenen Service an, den Cozystack jetzt als optionale Komponente unterstützt.

Lesen Sie die aktualisierte Anleitung zum [Deployment von Cozystack bei Hetzner.com](https://cozystack.io/docs/install/providers/hetzner/), um mehr zu erfahren und Ihren eigenen Cozystack-Cluster bei Hetzner aufzusetzen.

### S3-Service: dedizierte Cluster und Monitoring

Sie können jetzt dedizierte Cozystack-Cluster für den S3-Service auf Basis von SeaweedFS bereitstellen. Dank der Unterstützung für die [Integration entfernter Filer-Endpunkte](https://cozystack.io/docs/operations/stretched/seaweedfs-multidc/) lässt sich Ihr primärer Cozystack-Cluster so anbinden, dass er den S3-Storage im dedizierten Cluster nutzt.

Aus Sicherheitsgründen können Plattformadministratoren die SeaweedFS-Anwendung jetzt mit einer Liste von IP-Adressen oder CIDR-Bereichen konfigurieren, die auf den Filer-Service zugreifen dürfen.

Außerdem ist SeaweedFS jetzt in den Monitoring-Stack integriert und hat ein eigenes Grafana-Dashboard. Zusammen helfen diese Verbesserungen Cozystack-Nutzern, einen zuverlässigeren, besser skalierbaren und besser beobachtbaren S3-Service aufzubauen.

### ClickHouse Keeper

Die ClickHouse-Anwendung enthält jetzt einen ClickHouse-Keeper-Service, der Zuverlässigkeit und Verfügbarkeit des Clusters verbessert. Diese Komponente wird standardmäßig mit jedem ClickHouse-Cluster bereitgestellt.

Mehr dazu in der [Konfigurationsreferenz für ClickHouse](https://cozystack.io/docs/applications/clickhouse/#clickhouse-keeper-parameters).

## Neue Komponentenversionen

- flux-operator auf 0.28.0 aktualisiert.

## Neue Dokumentation

- [Cozystack-Roadmap als GitHub-Projekt neu aufgesetzt](https://github.com/orgs/cozystack/projects/1).
- [SeaweedFS-Konfiguration für mehrere Rechenzentren](https://cozystack.io/docs/operations/stretched/seaweedfs-multidc/).
- [Troubleshooting für Kube-OVN](https://cozystack.io/docs/operations/troubleshooting/#kube-ovn-crash).
- [Talos mit kexec installieren](https://cozystack.io/docs/talos/install/kexec/).
- [Cozystack-Tutorial neu geschrieben](https://cozystack.io/docs/getting-started/).
- [Cozystack bei Hetzner installieren](https://cozystack.io/docs/install/providers/hetzner/).
- [Externe Anwendungen zum Cozystack-Katalog hinzufügen](https://cozystack.io/docs/applications/external/).
- [Benannte VM-Images (Golden Images) erstellen und nutzen](https://cozystack.io/docs/virtualization/vm-image/).
- [Verschlüsselten Storage auf LINSTOR einrichten](https://cozystack.io/docs/operations/storage/disk-encryption/).
- [Komponenten einer Cozystack-Installation mit bundle-enable und bundle-disable hinzufügen und entfernen](https://cozystack.io/docs/operations/bundles/#how-to-enable-and-disable-bundle-components).
- Cozystack-Dokumentation neu strukturiert: Die Anleitungen zu [Managed Kubernetes](https://cozystack.io/docs/kubernetes/), [Managed-Anwendungen](https://cozystack.io/docs/applications/), [Virtualisierung](https://cozystack.io/docs/virtualization/) und [Netzwerk](https://cozystack.io/docs/networking/) stehen jetzt auf oberster Ebene.

Alle Änderungen: [v0.35.0](https://github.com/cozystack/cozystack/releases/tag/v0.35.0), [v0.35.1](https://github.com/cozystack/cozystack/releases/tag/v0.35.1)

## Werden Sie Teil der Community

- Telegram-[Gruppe](http://t.me/cozystack)
- Slack-[Gruppe](https://kubernetes.slack.com/archives/C06L3CPRVN1) (Einladung über [https://slack.kubernetes.io](https://slack.kubernetes.io))

Von [Timur Tukaev](https://medium.com/@tym83) am [21. August 2025](https://medium.com/p/b65472b2cdf8).

[Kanonischer Link](https://medium.com/@tym83/cozystack-v0-35-b65472b2cdf8)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
