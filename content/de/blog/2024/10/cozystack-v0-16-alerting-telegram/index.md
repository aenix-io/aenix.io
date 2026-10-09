---
title: "Cozystack v0.16.0: Alerting mit Benachrichtigungen per Telegram und weitere Verbesserungen"
seo_title: "Cozystack v0.16: Alerting mit Telegram-Benachrichtigungen"
description: "Cozystack v0.16.0 bringt ein Alerting-System auf Basis des Open-Source-Tools Alerta mit Benachrichtigungen per Telegram und weitere Plattform-Verbesserungen."
slug: "cozystack-v0-16-alerting-telegram"
date: "2024-10-03"
cover_image: "/img/blog/covers/de/cozystack-v0-16-alerting-telegram.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Cilium", "GitOps", "Observability"]
language: "de"
hreflang_en: "/blog/2024/10/the-open-source-platform-cozystack-version-0-16-0/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack mit SLA ansehen →"
---



Die wichtigsten Neuerungen: Cozystack hat jetzt ein Alerting-System auf Basis des Open-Source-Tools [Alerta](https://alerta.io/), mit dem sich Benachrichtigungen direkt an Telegram schicken lassen. Außerdem können Sie Alerts aus dem k8s-prometheus-Stack empfangen. Alle Grafana-Dashboards wurden überarbeitet, ebenso wie Grafana selbst und der grafana-operator aktualisiert wurden.

![Alerta-Oberfläche mit Cozystack-Alerts](/img/blog/medium/the-open-source-platform-cozystack-version-0-16-0/cover.png)

Alerta-Oberfläche

> Cozystack ist eine Open-Source-Plattform für den Aufbau von Cloud-Infrastruktur auf Bare Metal. Mit ihr lassen sich schnell Managed Kubernetes, Database as a Service, Applications as a Service und virtuelle Maschinen auf Basis von KubeVirt bereitstellen. Services wie Kafka, FerretDB, PostgreSQL, Cilium, Grafana, Victoria Metrics und weitere lassen sich in der Plattform mit einem einzigen Klick bereitstellen.

Weitere Änderungen:

- Nginx-ingress auf Version v1.11.2 aktualisiert; das Problem beim Zugriff auf nginx-ingress aus dem Cluster heraus ist behoben
- Flux und flux-operator auf die neuesten Versionen aktualisiert
- Kamaji auf die neueste Version aktualisiert und das Problem mit Neustarts des Controllers behoben
- Endpointslice-Controller im CCM ergänzt; Services leiten Traffic jetzt nur noch an die Nodes, die sie tatsächlich bedienen
- Talos Linux auf Version v1.8.0 aktualisiert
- Cilium auf die neueste Patch-Version (v1.16.2) aktualisiert

![Neues Grafana-Dashboard in Cozystack v0.16](/img/blog/medium/the-open-source-platform-cozystack-version-0-16-0/02.jpg)

Neue Dashboards

![Neues Grafana-Dashboard in Cozystack v0.16](/img/blog/medium/the-open-source-platform-cozystack-version-0-16-0/03.jpg)

Neue Dashboards

![Neues Grafana-Dashboard in Cozystack v0.16](/img/blog/medium/the-open-source-platform-cozystack-version-0-16-0/04.jpg)

Neue Dashboards

*Weitere Details finden Sie auf der* *[GitHub-Seite](https://github.com/aenix-io/cozystack/releases/tag/v0.16.0)*.

Von [Timur Tukaev](https://medium.com/@tym83) am [3. Oktober 2024](https://medium.com/p/e2e86ca6ec47).

[Kanonischer Link](https://medium.com/@tym83/the-open-source-platform-cozystack-version-0-16-0-e2e86ca6ec47)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
