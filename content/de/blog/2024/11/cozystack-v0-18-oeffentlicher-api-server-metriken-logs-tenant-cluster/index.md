---
title: "Cozystack v0.18: Öffentlicher API-Server, Metriken und Logs aus Tenant-Clustern"
seo_title: "Cozystack v0.18: öffentlicher API-Server und Tenant-Logs"
description: "Cozystack v0.18 bringt einen eigenen Kubernetes-API-Server für feingranularen Nutzerzugriff, Metriken und Logs aus Tenant-Clustern sowie Talos Linux v1.8.2."
slug: "cozystack-v0-18-oeffentlicher-api-server-metriken-logs-tenant-cluster"
date: "2024-11-07"
cover_image: "/img/blog/covers/de/cozystack-v0-18-oeffentlicher-api-server-metriken-logs-tenant-cluster.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "Talos", "Multi-tenancy", "Observability"]
language: "de"
hreflang_en: "/blog/2024/11/cozystack-v0-18/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack ansehen →"
---



## Öffentliche API für Cozystack

Das ist für uns das größte und am meisten erwartete Update. Cozystack bringt jetzt einen eigenen Kubernetes-API-Server mit, der alle Anfragen an Custom Resources automatisch in HelmReleases übersetzt.

Plattform-Administratoren können Nutzern damit feingranularen Zugriff auf bestimmte Ressourcen geben (Kuberneteses, VirtualMachines, Postgresses usw.). Außerdem lässt sich der API-Server einfach um weitere Komponenten erweitern: Sie werden lediglich in einer ConfigMap aufgeführt, ein Neukompilieren ist nicht nötig.

Beachten Sie allerdings, dass das Dashboard weiterhin direkt mit HelmReleases arbeitet. Endnutzern Zugriff darauf zu geben, ist daher vorerst nicht zu empfehlen.

Eine Demo des API-Servers und eine Anleitung zur Arbeit damit finden Sie in der Aufzeichnung des letzten Cozystack-Community-Meetings (orientieren Sie sich an den Zeitmarken in der Videobeschreibung): [Auf YouTube ansehen](https://www.youtube.com/watch?v=yn1ryGRtTGE).

![Öffentlicher API-Server in Cozystack v0.18](/img/blog/medium/cozystack-v0-18/cover.jpg)

## Erfassung von Metriken und Logs aus Tenant-Clustern konfigurieren

In der Kubernetes-Konfiguration für Tenant-Cluster gibt es jetzt eine Option, das Addon mit den Monitoring-Agenten zu aktivieren. Ist es aktiviert, werden alle Metriken und Logs automatisch an das Monitoring-System im Tenant-Bereich des Nutzers weitergeleitet.

## Weitere Änderungen

- Die Datenbank-Operatoren sind in den Editionen distro-full und distro-hosted jetzt optionale Komponenten.
- Talos Linux wurde auf Version v1.8.2 aktualisiert.
- Der Webhook in Alerta zur Verwaltung von Alerts über Telegram wurde repariert.
- Überflüssige Alerts wurden entfernt.
- Grundlegende e2e-Tests prüfen jetzt das Deployment jeder Anwendung.

Weitere Details finden Sie im Projekt auf [GitHub](https://github.com/aenix-io/cozystack/releases/tag/v0.18.0).

Werden Sie Teil unserer Community:
- [Telegram](https://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)
- [Kalender der Community-Meetings](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

Von [Timur Tukaev](https://medium.com/@tym83) am [7. November 2024](https://medium.com/p/d724cd6d2fa1).

[Kanonischer Link](https://medium.com/@tym83/cozystack-v0-18-d724cd6d2fa1)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
