---
title: "Cozystack wird CNCF-Sandbox-Projekt"
description: "Am 28. Februar 2025 hat das Technical Oversight Committee der CNCF Cozystack als Sandbox-Projekt aufgenommen. Was Cozystack ist und was Sandbox bedeutet."
slug: "cozystack-wird-cncf-sandbox-projekt"
date: "2025-03-13"
cover_image: "/img/blog/covers/de/cozystack-wird-cncf-sandbox-projekt.jpg"
author: "Andrei Kvapil"
type: "announcement"
topics: ["Kubernetes", "Open Source", "CNCF", "Platform Engineering", "DevOps", "Cozystack"]
language: "de"
hreflang_en: "/blog/2025/03/cozystack-becomes-a-cncf-sandbox-project/"
---

Am 28. Februar haben die Mitglieder des Technical Oversight Committee der CNCF [ihre Abstimmung abgeschlossen](https://github.com/cncf/sandbox/issues/322) und [Cozystack](https://cozystack.io), eine Plattform zum Aufbau von Private Clouds und PaaS, einstimmig in die CNCF Sandbox aufgenommen. Derzeit durchläuft das Projekt den [Onboarding-Prozess](https://github.com/cncf/sandbox/issues/351). Sehen wir uns an, was das in der Praxis bedeutet, was Cozystack ist und wofür die CNCF Sandbox steht.

![Cozystack als CNCF-Sandbox-Projekt aufgenommen](/img/blog/medium/cozystack-becomes-a-cncf-sandbox-project/cover.png)

## Was ist Cozystack?

Cozystack ist eine Open-Source-Plattform, mit der Sie eine Bare-Metal-Cloud aufbauen und darauf bewährte Cloud-native und Open-Source-Werkzeuge bereitstellen: Managed-Kubernetes-Cluster, Datenbanken als Service, Anwendungen als Service und virtuelle Maschinen auf Basis von KubeVirt (siehe die [vollständige Liste der Komponenten](https://cozystack.io/docs/components/)). Außerdem bringt Cozystack einen fertigen Stack für Observability und Alerting auf Basis von Victoria Metrics, Victoria Logs, Grafana und Alerta mit.

Service- und Hosting-Provider, Banken, Anbieter von SaaS-Lösungen, Unternehmen aus Medtech und Fintech, AI/ML-Dienste und andere nutzen Cozystack, um ihren Kunden Managed Services, Managed Kubernetes und Datenbanken anzubieten, die direkt auf der Hardware laufen. Das sorgt für maximale Performance und stabile Services. Darüber hinaus lassen sich mit Cozystack geografisch verteilte Cluster aufbauen.

[Ænix](https://aenix.io/) hat die Plattform geschaffen und entwickelt sie als Co-Maintainer weiter. Kernentwickler und Schöpfer von Cozystack ist Andrei Kvapil, in der Engineering-Community unter dem Spitznamen „kvaps“ bekannt. Er trägt aktiv zu Linstor, KubeVirt, Kamaji, Kubernetes, Cilium und weiteren Projekten bei.

## Was ist die CNCF Sandbox, und was bedeutet sie für Anwender?

Die CNCF (Cloud Native Computing Foundation) ist Teil der größeren Linux Foundation, einer Non-Profit-Organisation, die vielversprechende Cloud-native Projekte fördert und betreut, darunter Kubernetes, Envoy, Prometheus, Cilium, Istio, K3s, FluxCD und andere. Die CNCF Sandbox ist der „Einstiegspunkt“ für Projekte, die der CNCF beitreten und ein Teil von ihr werden wollen. Von dort aus durchlaufen Projekte die Stufen Incubating und Graduated.

Die Übergabe des Projekts an die CNCF garantiert allen Anwendern von Cozystack, dass die Plattform dauerhaft unter der Lizenz Apache 2.0 verfügbar bleibt. Ihr droht nicht das Schicksal von Projekten wie Mongo, Redis, Terraform und Vault, deren Lizenzen auf Closed Source umgestellt wurden und nicht mehr den Kriterien der [Open Source Initiative](https://opensource.org) entsprechen. Ab sofort liegen die Rechte an Cozystack bei der CNCF, einer gemeinnützigen Branchenorganisation.

Zudem bietet die Aufnahme in die CNCF die Chance, eine breite Engineering-Community in die Entwicklung und Nutzung von Cozystack einzubinden und die Projektsteuerung transparenter zu machen. Eine wachsende Basis an Contributors und Anwendern wird wiederum die Entwicklung der Plattform und die Erschließung vielfältiger Anwendungsfälle deutlich beschleunigen.

> **Andrei Kvapil, CEO von Ænix und Schöpfer von Cozystack:**
>
> “I believe in honest and genuine open source, in the tools we use to build the platform, and I am happy that we can be useful to the community. In just one year, our small team of excellent engineers, with the support of our clients and the open-source community, has created a project worthy of inclusion in the CNCF. This is truly a significant achievement. Thank you to everyone who believed in us and supported us throughout this time. We will continue to improve the platform and plan to apply for CNCF Incubating status this fall. From an engineering perspective, we are already a mature project and ready for this. The main task now is to refine the project management process and community interaction.”
>
> **Matthew Robin, CEO und Gründer von Hidora:**
>
> *“Cozystack represents a significant advancement in simplifying complex cloud infrastructure deployment. Its integration into the CNCF Sandbox marks an important milestone that will accelerate its adoption and enrich its ecosystem through community collaboration. We are confident that Cozystack will play a key role in democratizing cloud-native technologies for businesses of all sizes.”*
>
> **Kingdon Barrett, Maintainer von FluxCD und Cozystack:**
>
> *“Cozystack combines cutting edge open source cloud native technologies in a way that I could probably set up myself, the hard way, if I wanted to spend 6 months figuring out how they fit together. It’s Talos Linux configured as a cloud on bare metal, ready in half an hour or so!”*

Ænix wird die Plattform weiterhin aktiv entwickeln und sowohl Kunden als auch Anwender aus der Community unterstützen.

## Nützliche Links:

- [Website von Cozystack](https://cozystack.io)
- [GitHub](https://github.com/cozystack)
- [Telegram-Community](https://t.me/cozystack)
- [Slack-Community](https://slack.k8s.io) (Registrierung im [Kubernetes-Slack-Workspace](https://slack.kubernetes.io/) erforderlich)
- [Kalender der Community-Meetings](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)
- Aufzeichnungen der Cozystack Community Meetings auf YouTube
- [Cozystack in der CNCF Landscape](https://landscape.cncf.io)
- [Cozystack in der CNCF Sandbox](https://www.cncf.io/sandbox-projects/)
- [Cozystack auf DevStats](https://devstats.cncf.io)

Von [Andrei Kvapil](https://medium.com/@kvaps) am [13. März 2025](https://medium.com/p/3702b8906971).

[Kanonischer Link](https://medium.com/p/3702b8906971)

Exportiert von [Medium](https://medium.com) am 5. Oktober 2026.
