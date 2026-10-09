---
title: "Cozystack v0.38: VPC-Netzwerke, VM-Konsole und eine schnellere API"
seo_title: "Cozystack v0.38: VPC-Netzwerke und VM-Konsole"
description: "Cozystack v0.38 bringt VPC-Netzwerke für Tenant-Anwendungen, eine VNC-Konsole für virtuelle Maschinen, Neues in weiteren Repositorys und eine schnellere API."
slug: "cozystack-v0-38-vpc-vm-konsole-schnellere-api"
date: "2025-12-17"
cover_image: "/img/blog/covers/de/cozystack-v0-38-vpc-vm-konsole-schnellere-api.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "Talos", "LINSTOR", "Multi-tenancy"]
language: "de"
hreflang_en: "/blog/2025/12/cozystack-v0-38-vpc-networking-vm-console-faster-api/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Cozystack-Support mit SLA gesucht? Enterprise-Support ansehen →"
---

Dieses Release führt die Unterstützung für Virtual Private Clouds (VPC) ein und erweitert damit die Netzwerkfunktionen für Tenant-Anwendungen. Außerdem gibt es eine VNC-Konsole im Dashboard, die Kubernetes-Version der Worker ist jetzt konfigurierbar, und die gesamte Plattform profitiert von zahlreichen Verbesserungen und Fixes.

![Cozystack v0.38: VPC-Netzwerke und VM-Konsole](/img/blog/medium/cozystack-v0-38-vpc-networking-vm-console-faster-api/cover.jpg)

## Virtual-Private-Cloud-Netzwerke (VPC)

Mit Cozystack v0.38.0 kommt die Unterstützung für Virtual Private Clouds (VPC): Plattformadministratoren können isolierte Netzwerksegmente für Tenant-Anwendungen anlegen. VPCs sorgen für Netzwerkisolation und erlauben eine feingranulare Steuerung von Netzwerktopologie, Subnetzen und Routing. Jede VPC kann mehrere Subnetze enthalten, und Administratoren konfigurieren die Details je Subnetz, darunter IP-Bereiche, Gateway-Einstellungen und DNS.

Die VPC-Funktion ist nahtlos in das Cozystack-Dashboard integriert: Nutzer sehen und verwalten VPCs und ihre Subnetze über eine intuitive Oberfläche. Die Subnetzdetails erscheinen im Dashboard als Tabellen, sodass die Netzwerkkonfiguration auf einen Blick erfassbar ist. Die VPC-Konfiguration liegt in ConfigMaps mit vorhersagbaren Namen, was einen zuverlässigen Zugriff auf die Subnetzinformationen sicherstellt.

Besonders wertvoll ist die Funktion in Multi-Tenant-Umgebungen, in denen Netzwerkisolation entscheidend ist, sowie für Anwendungen, die bestimmte Netzwerkkonfigurationen oder Routing-Regeln benötigen.

## VNC-Konsole für virtuelle Maschinen

Das Cozystack-Dashboard enthält jetzt eine integrierte VNC-Konsole für virtuelle Maschinen. Nutzer greifen damit direkt aus der Weboberfläche auf die Konsole einer VM zu, ganz ohne externe Werkzeuge. So steht die Konsole sofort für Fehlersuche, Konfiguration und Wartung zur Verfügung. Die Integration vereinfacht die VM-Verwaltung und verbessert die Bedienung, weil alle VM-Aufgaben im Cozystack-Dashboard bleiben.

## Weitere Repositorys

- Boot-/Install-Modus eingeführt: Das Werkzeug boot-to-talos hat einen Boot-/Install-Modus erhalten.
- valuesFiles aus der Annotation cozypkg.cozystack.io/values-files verarbeiten: cozypkg kann valuesFiles jetzt aus einer Annotation übernehmen.

## Dokumentation und Ökosystem

- Neue und aktualisierte [Dokumentation zu VPC](https://cozystack.io/docs/networking/vpc/#service-details)-Netzwerken und ihrer Konfiguration.
- Empfehlungen zur [Planung der Systemressourcen](https://cozystack.io/docs/getting-started/requirements/) und Aktualisierungen zum Storage.
- Verbesserte [Dokumentation zur OpenAPI UI](https://cozystack.io/docs/guides/platform-stack/#openapi-ui), aktualisierte Referenz der Managed Apps, [Namenskonventionen](https://cozystack.io/docs/virtualization/vm-image/#naming-conventions-important), Anleitungen zu LINSTOR und Golden Images sowie weitere Verbesserungen an der Dokumentation.

## Alle Änderungen und Verbesserungen

[v0.38.0](https://github.com/cozystack/cozystack/releases/tag/v0.38.0), [v0.38.1](https://github.com/cozystack/cozystack/releases/tag/v0.38.1), [v0.38.2](https://github.com/cozystack/cozystack/releases/tag/v0.38.2), [v0.38.3](https://github.com/cozystack/cozystack/releases/tag/v0.38.3), [v0.38.4](https://github.com/cozystack/cozystack/releases/tag/v0.38.4)

## Herzlichen Dank an alle, die zur Release-Linie 0.38 beigetragen haben

[@IvanHunters](https://github.com/IvanHunters), [@insignia96](https://github.com/insignia96), [@kvaps](https://github.com/kvaps), [@lllamnyp](https://github.com/lllamnyp), [@nbykov0](https://github.com/nbykov0), [@scooby87](https://github.com/scooby87)

## Ein besonderer Gruß an unseren Erstbeitragenden

[@tabu-a](https://github.com/tabu-a) – willkommen an Bord!

## Werden Sie Teil der Community

- [Telegram-Gruppe](http://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)-Kanal (Einladung unter [https://slack.kubernetes.io](https://slack.kubernetes.io))

Von [Timur Tukaev](https://medium.com/@tym83) am [17. Dezember 2025](https://medium.com/p/34032464b94f).

[Kanonischer Link](https://medium.com/@tym83/cozystack-v0-38-vpc-networking-vm-console-faster-api-34032464b94f)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
