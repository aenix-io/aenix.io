---
title: "Neues in der Open-Source-Plattform Cozystack: OpenCost, Log-Sammlung und Bridge Binding für VMs"
seo_title: "Cozystack v0.12–v0.15: OpenCost und Log-Sammlung"
description: "Was sich in Cozystack von v0.12 bis v0.15 geändert hat: Kosten-Monitoring mit OpenCost, Logs mit VictoriaLogs und Fluent Bit, schnellere VMs per Bridge Binding."
slug: "cozystack-v0-12-bis-v0-15-opencost-logs-bridge-binding"
date: "2024-09-26"
cover_image: "/img/blog/covers/de/cozystack-v0-12-bis-v0-15-opencost-logs-bridge-binding.jpg"
author: "Andrei Kvapil"
type: "news"
topics: ["Kubernetes", "Platform Engineering", "DevOps", "Open Source", "Cozystack"]
language: "de"
hreflang_en: "/blog/2024/09/recent-changes-in-the-cozystack-open-source-platform-opencost-log-collection-system-bridge/"
---

In den vergangenen Monaten haben wir unsere Open-Source-Plattform Cozystack intensiv weiterentwickelt. Heute stellen wir die Verbesserungen vor, die mit den Versionen v0.12 bis v0.15 hinzugekommen sind.

![Cozystack-Updates von v0.12 bis v0.15](/img/blog/medium/recent-changes-in-the-cozystack-open-source-platform-opencost-log-collection-system-bridge/cover.jpg)

> *Cozystack ist eine Open-Source-Plattform, mit der sich auf Bare Metal eine Cloud aufbauen lässt, um schnell Managed Kubernetes, Database as a Service, Applications as a Service und virtuelle Maschinen auf Basis von KubeVirt bereitzustellen. Kafka, FerretDB, PostgreSQL, Cilium, Grafana, Victoria Metrics und* [*weitere Services*](https://cozystack.io/docs/components/) *lassen sich darin mit einem einzigen Klick bereitstellen.*

## [v0.15](https://github.com/aenix-io/cozystack/releases/tag/v0.15.0)

- **Integration von Opencost**: Die Plattform enthält jetzt Opencost, ein Open-Source-Projekt aus dem Cloud-Native-Ökosystem zur Überwachung und Zuordnung der Kosten von Cloud-Infrastruktur und Containern.
- **Update des Strimzi Operator**: Der Strimzi Operator, der für Managed Kafka zuständig ist, wurde aktualisiert und seine Generierung von Network Policies deaktiviert (dafür nutzen wir eine eigene Lösung).
- **Talos-Linux-Profil**: Neues Profil in Talos Linux für die Installation auf AMD64-Architekturen.

## [v0.14](https://github.com/aenix-io/cozystack/releases/tag/v0.14.0)

- **Passwortgenerierung**: Für FerretDB, PostgreSQL und Clickhouse werden jetzt Passwörter generiert.
- **Komponenten-Updates**: CNPG auf Version 1.24.0 und RabbitMQ auf Version 3.13.2 aktualisiert.

## [v0.13](https://github.com/aenix-io/cozystack/releases/tag/v0.13.0)

- **System zur Log-Sammlung**: Neues System zur Log-Sammlung auf Basis von [VictoriaLogs](https://docs.victoriametrics.com/victorialogs/) und [Fluentbit](https://fluentbit.io/). Logs lassen sich direkt in Grafana mit [LogsQL](https://docs.victoriametrics.com/victorialogs/logsql/)-Abfragen ansehen.
- **Verbesserungen bei virtuellen Maschinen**: Virtuelle Maschinen werden jetzt mit Bridge Binding und auf Block Devices ohne zusätzliche Dateisystemschicht angelegt. Das verbessert die Performance deutlich und ermöglicht Live-Migration.
- **Neue VM-Optionen**: Talos Linux und Alpine Linux lassen sich jetzt in VMs betreiben.
- **Vergrößern von Disks**: Mit expandDisks wird die Disk einer virtuellen Maschine automatisch vergrößert, nachdem das PVC vergrößert wurde.
- **Updates**: FerretDB auf Version v1.24, KubeVirt und CDI auf die neuesten Versionen aktualisiert.

## [v0.12](https://github.com/aenix-io/cozystack/releases/tag/v0.12.0)

- **Bessere Developer Experience**: Zahlreiche Verbesserungen für eine bessere Developer Experience.
- **Cilium-Update**: Cilium auf Version 1.16.1 aktualisiert.

> Werden Sie Teil unserer [Cozy-Community](https://t.me/cozystack): Stellen Sie Fragen, erhalten Sie Unterstützung von der Community und den Maintainern und beteiligen Sie sich an der Entwicklung der Open-Source-Plattform!

Von [Andrei Kvapil](https://medium.com/@kvaps) am [26. September 2024](https://medium.com/p/66bb25b7269b).

[Kanonischer Link](https://medium.com/p/66bb25b7269b)

Exportiert von [Medium](https://medium.com) am 5. Oktober 2026.
