---
title: "Cozystack 1.2: OpenSearch, VPC Peering und intelligenteres Scheduling für Tenants"
seo_title: "Cozystack 1.2: OpenSearch und VPC Peering"
description: "Die Release-Linie Cozystack 1.2 ist verfügbar: v1.2.0 erschien am 27. März 2026, v1.2.1 folgte am 31. März 2026. OpenSearch, VPC Peering und SchedulingClass."
slug: "cozystack-1-2-opensearch-vpc-peering-tenant-scheduling"
date: "2026-04-03"
cover_image: "/img/blog/covers/de/cozystack-1-2-opensearch-vpc-peering-tenant-scheduling.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Cozystack", "LINSTOR", "Multi-tenancy", "Observability"]
language: "de"
hreflang_en: "/blog/2026/04/cozystack-1-2-opensearch-vpc-peering-and-smarter-tenant-scheduling/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack ansehen →"
---



Die Release-Linie Cozystack 1.2 ist verfügbar. [v1.2.0](https://github.com/cozystack/cozystack/releases/tag/v1.2.0) erschien am 27. März 2026, [v1.2.1](https://github.com/cozystack/cozystack/releases/tag/v1.2.1) folgte am 31. März 2026.

Dieser Zyklus erweitert die Plattform in drei wichtigen Richtungen: Managed Search und Analytics, sichere Netzwerkverbindungen zwischen Tenant-Umgebungen und mehr Kontrolle darüber, wo Tenant-Workloads laufen. Das Folge-Release `v1.2.1` konzentriert sich auf Sicherheit und Betriebsstabilität.

![Release Cozystack 1.2](/img/blog/medium/cozystack-1-2-opensearch-vpc-peering-and-smarter-tenant-scheduling/cover.jpg)

## Die wichtigsten Neuerungen

### Managed OpenSearch im Anwendungskatalog

Cozystack 1.2 ergänzt **OpenSearch** als vollständig verwalteten Service. Unterstützt werden OpenSearch v1, v2 und v3; der Service kann in einer Multi-Role-Topologie laufen, aktiviert TLS standardmäßig, bringt HTTP-Basic-Authentifizierung mit und kann optional OpenSearch Dashboards neben der Engine ausrollen.

Damit ist OpenSearch eine vollwertige PaaS-Komponente in Cozystack und nichts mehr, was Betreiber selbst integrieren müssen.

### VPC Peering für Verbindungen zwischen Tenants

Die Anwendung `vpc` unterstützt jetzt **VPC Peering**: Tenants können private Netze direkt miteinander verbinden, ohne den Verkehr über öffentliche Endpunkte zu leiten. Für Multi-Tenant-Umgebungen ist das ein großer Schritt: Betreiber können sauberere interne Topologien aufbauen und nur den Verkehr nach außen lassen, der die Plattform tatsächlich verlassen muss.

Das Release bringt außerdem eine deterministische Vergabe der Peering-IP-Adressen und Unterstützung für statische Routen. Dadurch wird die Funktion in realen Produktionsumgebungen deutlich besser nutzbar.

### SchedulingClass für die Platzierung von Workloads

Das neue System **SchedulingClass** gibt Betreibern clusterweit die Kontrolle darüber, wo Tenant-Workloads landen. In der Praxis lassen sich Workloads damit an bestimmte Rechenzentren, Hardware-Klassen oder Node-Gruppen binden, ohne dass Tenants sich selbst um Details des Schedulers kümmern müssen.

Für Betreiber mit mehreren Standorten oder gemischten Hardware-Pools ist das eine der wichtigsten Neuerungen in 1.2. Über das Cozystack-Dashboard steht sie zudem als Self-Service zur Verfügung.

## Außerdem in Cozystack v1.2.0

Neben den zentralen Funktionen enthält `v1.2.0` mehrere substanzielle Verbesserungen der Plattform:

- **VictoriaLogs läuft jetzt im Cluster-Modus** mit `VLCluster` und bietet dem Logging-Stack damit höhere Verfügbarkeit und bessere Skalierbarkeit.
- **Verlagerung von LINSTOR-Volumes nach Clone und Restore** verbessert die Speicherplatzierung beim Wiederherstellen aus Snapshots und beim Klonen von PVCs.
- **cozystack-scheduler ist standardmäßig aktiviert**, SchedulingClass gehört damit zum Standardverhalten der Plattform.
- **external-dns steht jetzt als eigenständiges Zusatzpaket bereit**.

## Cozystack v1.2.1: Update zur Stabilisierung

Während `v1.2.0` die großen neuen Funktionen einführte, macht `v1.2.1` sie fit für den Produktivbetrieb.

Die wichtigsten Fixes in `v1.2.1`:

- **Kein versehentliches Löschen installierter Pakete mehr**, wenn Pakete zwischen `enabledPackages` und `disabledPackages` verschoben werden.
- **Die Allokationsverhältnisse für CPU, Arbeitsspeicher und Ephemeral Storage** werden wieder an Managed Packages weitergegeben.
- **Kritisches Verhalten von LINSTOR und DRBD behoben**, darunter der Erhalt von TCP-Ports und eine sicherere Einstellung für `verify-alg` bei neueren Kerneln.
- **Fehlerbilder von Multus/CNI behoben**, durch die Nodes nach einem fehlgeschlagenen CNI-Setup oder Race Conditions beim CNI-Start während des Bootens keine neuen Pods mehr anlegen konnten.
- **Die Monitoring-Datenbanken sind auf PostgreSQL 17 festgelegt**, damit die Monitoring-Abfragen von Grafana und Alerta nicht brechen.

Zusammengenommen machen diese Änderungen `v1.2.1` zu weit mehr als einem routinemäßigen Patch-Release.

## Release-Links

- [Cozystack v1.2.0 auf GitHub](https://github.com/cozystack/cozystack/releases/tag/v1.2.0)
- [Cozystack v1.2.1 auf GitHub](https://github.com/cozystack/cozystack/releases/tag/v1.2.1)
- [Vollständiges Changelog für v1.2.0](https://github.com/cozystack/cozystack/compare/v1.1.0...v1.2.0)
- [Vollständiges Changelog für v1.2.1](https://github.com/cozystack/cozystack/compare/v1.2.0...v1.2.1)

## Werden Sie Teil der Community

- [Telegram-Gruppe](https://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)-Gruppe (Einladung über [https://slack.kubernetes.io](https://slack.kubernetes.io/))
- [Kalender der Community-Meetings](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)
- [Cozysummit Virtual 2026](https://community.cncf.io/events/details/cncf-virtual-project-events-hosted-by-cncf-presents-cozysummit-virtual-2026/)

Von [Timur Tukaev](https://medium.com/@tym83) am [3. April 2026](https://medium.com/p/777a13bbe25c).

[Kanonischer Link](https://medium.com/@tym83/cozystack-1-2-opensearch-vpc-peering-and-smarter-tenant-scheduling-777a13bbe25c)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
