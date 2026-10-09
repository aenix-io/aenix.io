---
title: "Cozystack v0.40: Besserer Storage und weiterentwickelte Plattformarchitektur"
seo_title: "Cozystack v0.40: Storage und Plattformarchitektur"
description: "Cozystack v0.40 bringt einen LINSTOR-Scheduler für storage-bewusstes Pod-Placement, Traffic-Lokalität für SeaweedFS, valuesFrom und LINSTOR Auto-diskful."
slug: "cozystack-v0-40-storage-plattformarchitektur"
date: "2026-01-19"
cover_image: "/img/blog/covers/de/cozystack-v0-40-storage-plattformarchitektur.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "LINSTOR", "Observability", "Storage", "etcd"]
language: "de"
hreflang_en: "/blog/2026/01/cozystack-v0-40-enhanced-storage-platform-architecture/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack ansehen →"
---

In Version 0.40 haben wir uns auf effizienteren Storage und die Architektur der Plattform konzentriert. Zu den wichtigsten Neuerungen gehören der LINSTOR-Scheduler für eine klügere Platzierung von Pods, Traffic-Lokalität für SeaweedFS, der Konfigurationsmechanismus valuesFrom, LINSTOR Auto-diskful und Werkzeuge für die automatisierte Versionsverwaltung.

![Cozystack v0.40: Storage und Plattformarchitektur](/img/blog/medium/cozystack-v0-40-enhanced-storage-platform-architecture/cover.jpg)

## Im Fokus: Optimiertes Pod-Placement mit dem LINSTOR-Scheduler

Cozystack enthält jetzt einen eigenen Kubernetes Scheduler Extender, der Kubernetes bessere Placement-Entscheidungen für Pods mit LINSTOR-Storage ermöglicht. Fordert ein Pod LINSTOR-basierten Storage an, fragt der Scheduler beim LINSTOR-Controller nach Nodes, die lokale Replicas der angeforderten Volumes besitzen. So landen Pods auf Nodes, auf denen die Daten bereits liegen, was den Netzwerkverkehr minimiert und die I/O-Performance verbessert.

Zum Scheduler gehört ein Admission Webhook, der Pods mit LINSTOR-CSI-Volumes automatisch an den eigenen Scheduler weiterleitet. Die Integration funktioniert damit nahtlos und ohne manuelle Konfiguration. Für Workloads auf LINSTOR-Storage verbessert die Funktion die Performance deutlich, weil sie die Netzwerklatenz senkt und die Datenlokalität erhöht.

Mehr über LINSTOR erfahren Sie in der [Dokumentation](https://cozystack.io/docs/v0/storage/).

## Traffic-Lokalität für SeaweedFS

SeaweedFS wurde auf Version 4.05 aktualisiert und bringt neue Funktionen für Traffic-Lokalität mit, die die Verteilung des S3-Traffics optimieren. Das Update umfasst eine neue Admin-Komponente mit webbasierter UI und Authentifizierung sowie eine Worker-Komponente für verteilte Operationen. Diese Erweiterungen verbessern die Performance des S3-Service und sorgen für mehr Transparenz durch erweiterte Grafana-Dashboard-Panels zu Buckets, API-Aufrufen, Kosten und Performance-Metriken.

Die Traffic-Lokalität stellt sicher, dass S3-Anfragen an den nächstgelegenen verfügbaren Volume-Server geleitet werden. Das senkt die Latenz und verbessert die Gesamtperformance verteilter Storage-Operationen. Außerdem haben wir TLS-Unterstützung für die Management-Komponenten ergänzt, damit Ihre Storage-Operationen abgesichert bleiben.

## Konfigurationsmechanismus valuesFrom

Cozystack nutzt jetzt den valuesFrom-Mechanismus von FluxCD. Durch den Verzicht auf Helm-Lookup-Funktionen wird Konfiguration deutlich sauberer weitergegeben, und Controller für erzwungene Reconciles sind überflüssig. Die Konfiguration aus ConfigMaps (cozystack, cozystack-branding, cozystack-scheduling) und die Verweise auf Services in Namespaces (etcd, host, ingress, monitoring, seaweedfs) werden jetzt zentral über ein Secret cozystack-values in jedem Namespace verwaltet.

Für Anwender bedeutet das einfachere Helm-Templates und schnellere Reconciliation. Die Konfiguration wird transparenter, weil HelmReleases sich genau das, was sie brauchen, automatisch aus dem zentralen Secret holen.

## LINSTOR Auto-diskful

Die LINSTOR-Integration enthält jetzt eine automatische Diskful-Funktion: Diskless-Nodes werden zu Diskful-Nodes umgewandelt, wenn sie DRBD-Ressourcen über längere Zeit (30 Minuten) im Zustand Primary halten. Damit adressiert die Funktion Fälle, in denen Workloads auf Nodes ohne lokale Storage-Replicas geplant werden: Bei Bedarf werden automatisch lokale Disk-Replicas angelegt, was die I/O-Performance lang laufender Workloads verbessert.

Ist die Funktion mit Bereinigungsoptionen aktiviert, kann das System nicht mehr benötigte Disk-Replicas automatisch entfernen und so verhindern, dass temporäre Replicas Speicherplatz verschwenden. Dieses intelligente Storage-Management reduziert den Netzwerkverkehr für häufig genutzte Daten und hält die Speicherauslastung zugleich effizient.

## Automatisierte Versionsverwaltung

Cozystack verfügt jetzt über eine automatisierte Versionsverwaltung für PostgreSQL, Kubernetes, MariaDB und Redis. Sie verfolgt die Upstream-Versionen und bietet Möglichkeiten für automatisierte Versionsupdates. So haben Anwender der Plattform stets Zugriff auf die neuesten stabilen Versionen, ohne dass die Kompatibilität mit bestehenden Deployments leidet.

Integriert in die Cozystack-API und das Dashboard, geben diese Systeme Administratoren vollen Überblick über verfügbare Versionen und Upgrade-Pfade. Diese Infrastruktur legt die Grundlage für künftige automatisierte Upgrade-Workflows und ein umfassendes Management der Versionskompatibilität auf der gesamten Plattform.

Alle Änderungen und Verbesserungen: [v0.40.2](https://github.com/cozystack/cozystack/releases/tag/v0.40.2), [v0.40.1](https://github.com/cozystack/cozystack/releases/tag/v0.40.1), [v0.40.0](https://github.com/cozystack/cozystack/releases/tag/v0.40.0)

Herzlichen Dank an alle, die zur Release-Linie 0.40 beigetragen haben: [@IvanHunters](https://github.com/IvanHunters), [@insignia96](https://github.com/insignia96), [@kvaps](https://github.com/kvaps), [@lllamnyp](https://github.com/lllamnyp), [@nbykov0](https://github.com/nbykov0), [@scooby87](https://github.com/scooby87).

## Cozystack v0.39: Vereinfachtes Management und erweiterte Telemetrie

Release v0.39 konsolidiert das Management der Plattform und verbessert die Observability mit einheitlichen Monitoring-Dashboards. Außerdem geht es robuster mit Storage- und Netzwerkressourcen um. Zu den wichtigsten Neuerungen gehören der Umstieg auf Grafana Alloy für die Erfassung von Metriken, eine höhere Stabilität und der Fokus auf die Zuverlässigkeit aller Plattformkomponenten.

Wir haben unseren Monitoring-Stack grundlegend überarbeitet: Grafana Alloy ersetzt jetzt das bisherige Setup aus Prometheus-Agent und node-exporter. Als modernes, vielseitiges Werkzeug für Metriken, Logs und Traces bietet Alloy einen flexibleren Umgang mit Telemetrie. Die neue Telemetrie ist direkt in das Cozystack-Dashboard integriert und gibt Ihnen ab der Installation vollen Einblick in die Cluster-Komponenten.

Alle Änderungen und Verbesserungen: [v0.39.5](https://github.com/cozystack/cozystack/releases/tag/v0.39.5), [v0.39.4](https://github.com/cozystack/cozystack/releases/tag/v0.39.4), [v0.39.3](https://github.com/cozystack/cozystack/releases/tag/v0.39.3), [v0.39.2](https://github.com/cozystack/cozystack/releases/tag/v0.39.2), [v0.39.1](https://github.com/cozystack/cozystack/releases/tag/v0.39.1)

Herzlichen Dank an alle, die zur Release-Linie 0.39 beigetragen haben!

### Treten Sie der Community bei

- [Telegram-Gruppe](http://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)-Kanal (Einladung unter [https://slack.kubernetes.io](https://slack.kubernetes.io/))

Von [Timur Tukaev](https://medium.com/@tym83) am [19. Januar 2026](https://medium.com/p/9c5ab48abd68).

[Kanonischer Link](https://medium.com/@tym83/cozystack-v0-40-enhanced-storage-platform-architecture-9c5ab48abd68)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
