---
title: "Cozystack v0.16.0: Alert System with Telegram Notifications and More Improvements"
seo_title: "Cozystack v0.16: alerting with Telegram notifications"
description: "Cozystack v0.16.0 adds an alert system based on the open-source tool Alerta, with notifications to Telegram, plus a set of other platform improvements."
date: "2024-10-03"
author: "Timur Tukaev"
hreflang_de: "/de/blog/2024/10/cozystack-v0-16-alerting-telegram/"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Cilium", "GitOps", "Observability"]
language: "en"
cover_image: "/img/blog/medium/the-open-source-platform-cozystack-version-0-16-0/cover.png"
source_url: "https://medium.com/@tym83/the-open-source-platform-cozystack-version-0-16-0-e2e86ca6ec47"
companion_landing: "/products/cozystack-enterprise-support/"
companion_label: "Need SLA-backed support for Cozystack? See enterprise support →"
---



Key Highlights Cozystack now features an alert system based on the open-source tool [Alerta](https://alerta.io/), with the ability to configure notifications directly to Telegram. Additionally, you can receive alerts from k8s-prometheus stack, all Grafana dashboards have been updated, as well as Grafana itself and the grafana-operator.

![Alerta interface with Cozystack alerts](/img/blog/medium/the-open-source-platform-cozystack-version-0-16-0/cover.png)

Alerta interface

> Cozystack is an Open Source platform designed for building cloud infrastructure on bare metal, enabling rapid deployment of managed Kubernetes, database as a service, applications as a service, and virtual machines based on KubeVirt. Within the platform, you can deploy services like Kafka, FerretDB, PostgreSQL, Cilium, Grafana, Victoria Metrics, and others with just a single click.

Other changes:

- Nginx-ingress updated to version v1.11.2 and issue with accessing nginx-ingress from inside the cluster was resolved
- Flux and flux-operator updated to the latest versions
- Updated Kamaji to the latest version and fixed issue with controller restarts
- Added endpointslice controller to CCM; ordered services now send traffic only to nodes that serve them
- Talos Linux updated to version v1.8.0
- Cilium updated to the latest patch version (v1.16.2)

![New Grafana dashboard in Cozystack v0.16](/img/blog/medium/the-open-source-platform-cozystack-version-0-16-0/02.jpg)

New dashboards

![New Grafana dashboard in Cozystack v0.16](/img/blog/medium/the-open-source-platform-cozystack-version-0-16-0/03.jpg)

New dashboards

![New Grafana dashboard in Cozystack v0.16](/img/blog/medium/the-open-source-platform-cozystack-version-0-16-0/04.jpg)

New dashboards

*For more details, visit the ***[GitHub page](https://github.com/aenix-io/cozystack/releases/tag/v0.16.0)*.*

By [Timur Tukaev](https://medium.com/@tym83) on [October 3, 2024](https://medium.com/p/e2e86ca6ec47).

[Canonical link](https://medium.com/@tym83/the-open-source-platform-cozystack-version-0-16-0-e2e86ca6ec47)

Exported from [Medium](https://medium.com) on May 11, 2026.
