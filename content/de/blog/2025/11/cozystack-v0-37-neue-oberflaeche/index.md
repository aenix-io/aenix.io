---
title: "Cozystack v0.37: Eine völlig neue Oberfläche"
description: "Cozystack v0.37 ersetzt das Dashboard durch eine neue, aus der Plattform-API generierte UI auf Basis von openapi-ui. Was sich für Anwender ändert."
slug: "cozystack-v0-37-neue-oberflaeche"
date: "2025-11-04"
cover_image: "/img/blog/covers/de/cozystack-v0-37-neue-oberflaeche.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Cilium", "Multi-tenancy", "CNCF"]
language: "de"
hreflang_en: "/blog/2025/11/cozystack-v0-37-brand-new-ui/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack ansehen →"
---

Mit dem neuen Release hat die Entwickler-Community von Cozystack eine komplett neue Oberfläche auf Basis des Projekts openapi-ui vorgestellt. Die Maintainer haben das Frontend der Plattform vollständig neu geschrieben, zahlreiche Verbesserungen umgesetzt und Probleme der bisherigen, auf Kubeapps basierenden UI behoben. Sehen wir uns an, was drinsteckt.

![Neue Dashboard-Oberfläche von Cozystack](/img/blog/medium/cozystack-v0-37-brand-new-ui/cover.png)

> **Was ist Cozystack**
>
> Cozystack ist eine Open-Source-Plattform, mit der Sie eine Bare-Metal-Cloud aufbauen und darauf schnell Managed Kubernetes, Database-as-a-Service, Applications-as-a-Service und virtuelle Maschinen auf Basis von KubeVirt bereitstellen. Services wie Kafka, FerretDB, PostgreSQL, Cilium, Grafana, VictoriaMetrics und weitere lassen sich per Mausklick ausrollen. Cozystack ist ein CNCF-Sandbox-Projekt.

## Die wichtigsten Änderungen am Cozystack-Dashboard

### Cluster-Auswahl

Neu ist eine Cluster-Auswahl. Derzeit arbeitet das Dashboard im Single-Cluster-Modus (ein Dashboard pro Cluster). Dieselbe UI wird in künftigen Releases auch den Multi-Cluster-Modus abdecken.

### Navigation über Namespaces (Tenant Namespace)

In der Cluster-Ansicht sehen Sie jetzt alle Namespaces, für die Sie berechtigt sind. Die Liste wird über den Kubernetes API Aggregation Layer (Tenant Namespace) erzeugt, daher erscheinen nur Namespaces, auf die Sie Zugriff haben.

![Cluster-Ansicht mit den Namespaces, für die ein Benutzer berechtigt ist](/img/blog/medium/cozystack-v0-37-brand-new-ui/02.png)

### Anwendungskategorien

Die vorhandenen Anwendungen sind in drei Kategorien aufgeteilt. In kommenden Releases werden Kategorien optional: Sie können dann nur ausgewählte Gruppen ausrollen und andere weglassen.

![Anwendungskategorien im neuen Dashboard](/img/blog/medium/cozystack-v0-37-brand-new-ui/03.png)

### Ausführlichere Ressourcenseiten

Jede Ressourcenseite enthält jetzt:
- eine Ressourcentabelle und grundlegende Metadaten,
- Conditions,
- Workloads (was gerade läuft),
- Ingresses, Services, Secrets,
- das YAML der Ressource.

### Konfiguratoren auf Basis von OpenAPI

Ressourcen werden über Formulare angelegt, die automatisch aus der OpenAPI-Spezifikation von Kubernetes generiert werden. Felddefinitionen und Validierung stammen direkt aus der Spezifikation; Kommentare im YAML sind nicht mehr nötig.

### Spezifikationen aus Helm generiert

Die Spezifikationen neuer Anwendungen werden mit dem Generator cozy-values aus Helm-Charts erzeugt. Felder, die Sie im Formular ergänzen, erscheinen sofort im resultierenden YAML.

![Anwendungsformular mit Live-Vorschau des YAML](/img/blog/medium/cozystack-v0-37-brand-new-ui/04.png)

### Tenant-Verwaltung ausgelagert

Die Module zur Tenant-Verwaltung sind in einen eigenen Bereich „Administration“ umgezogen. Dort legen Sie Sub-Tenants an und rollen tenant-spezifische Module und Anwendungen aus (abhängig von Ihrer Rolle und Ihren Berechtigungen).

### Grundlage für VM-Funktionen

Ein VNC-Konsolen-Tab für virtuelle Maschinen ist geplant und wird als zusätzlicher Tab erscheinen. Bestimmte Ressourcentypen (etwa KubeVirt-VMs) erhalten eigene Tabs und Felder.

### Video-Demo der neuen Cozystack-UI

### Cozystack in 5 Minuten

### Neue Komponentenversionen

- Flux Operator 0.29.0
- Cilium v1.17.8
- Velero v1.17.0
- openapi-ui v1.0.3
- LINSTOR v1.32.3
- SeaweedFS v3.99

Alle Änderungen: [v0.37.0](https://github.com/cozystack/cozystack/releases/tag/v0.37.0), [v0.37.1](https://github.com/cozystack/cozystack/releases/tag/v0.37.1), [v0.37.2](https://github.com/cozystack/cozystack/releases/tag/v0.37.2), [v0.37.3](https://github.com/cozystack/cozystack/releases/tag/v0.37.3), [v0.37.4](https://github.com/cozystack/cozystack/releases/tag/v0.37.4)

## Treten Sie der Community bei

- [Telegram](http://t.me/cozystack)-Gruppe
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)-Kanal (Einladung unter [https://slack.kubernetes.io](https://slack.kubernetes.io/))

Von [Timur Tukaev](https://medium.com/@tym83) am [4. November 2025](https://medium.com/p/dd4ad96eac57).

[Kanonischer Link](https://medium.com/@tym83/cozystack-v0-37-brand-new-ui-dd4ad96eac57)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
