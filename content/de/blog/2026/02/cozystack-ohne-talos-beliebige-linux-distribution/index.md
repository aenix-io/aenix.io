---
title: "Cozystack ist nicht mehr an Talos gebunden: Installation auf jeder Linux-Distribution"
seo_title: "Cozystack läuft jetzt auf jeder Linux-Distribution"
description: "Cozystack lässt sich jetzt auf einem bestehenden Kubernetes-Cluster mit beliebiger Linux-Distribution installieren. Wann Generic Kubernetes statt Talos passt."
slug: "cozystack-ohne-talos-beliebige-linux-distribution"
date: "2026-02-23"
cover_image: "/img/blog/covers/de/cozystack-ohne-talos-beliebige-linux-distribution.jpg"
author: "Timur Tukaev"
type: "tutorial"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Cilium", "Talos", "LINSTOR"]
language: "de"
hreflang_en: "/blog/2026/02/cozystack-is-no-longer-tied-to-talos-deploy-on-any-linux-distro-now/"
quiz:
  title: "Testen Sie sich: Cozystack auf jedem Linux"
  questions:
    - q: "Was ist laut Artikel jetzt mit Cozystack in Bezug auf Linux-Distributionen möglich?"
      options:
        - { text: "Cozystack unterstützt als Betriebssystem weiterhin nur Talos", correct: false }
        - { text: "Jeder bestehende Kubernetes-Cluster lässt sich in Cozystack verwandeln", correct: true }
        - { text: "Cozystack setzt jetzt Ubuntu LTS als Host-Distribution voraus", correct: false }
      explanation: "Cozystack geht über Talos Linux hinaus. Jeder bestehende K8s-Cluster lässt sich, unabhängig von der zugrunde liegenden Linux-Distribution, mit dem gesamten Cozystack-Stack in eine vollwertige Cloud-Plattform verwandeln."
    - q: "Welcher dieser Punkte wird als Grund genannt, für Cozystack Generic Kubernetes statt Talos zu wählen?"
      options:
        - { text: "Talos wurde von den Cozystack-Maintainern abgekündigt", correct: false }
        - { text: "Talos ist in Benchmarks schneller als jede Alternative", correct: false }
        - { text: "Unternehmensvorgaben schreiben eine Liste freigegebener Distributionen vor", correct: true }
      explanation: "Genannte Gründe: Unternehmensvorgaben mit strengen Sicherheitsrichtlinien oder freigegebenen Distributionen, keine Einarbeitung in Talos, betriebssystemspezifische Anforderungen (Treiber, Kernel-Module, Pakete), Ausbau bestehender K8s-Cluster und Einschränkungen der Infrastruktur (manche Public Clouds, in denen sich das Betriebssystem nicht ersetzen lässt)."
    - q: "Welcher Kubernetes-Installer wird in der Schritt-für-Schritt-Anleitung für Ubuntu/Debian genannt?"
      options:
        - { text: "Nur kops mit Terraform", correct: false }
        - { text: "k3s, alternativ kubeadm oder RKE2", correct: true }
        - { text: "Nur VMware Tanzu Standard Edition", correct: false }
      explanation: "Die Schritt-für-Schritt-Anleitung installiert Cozystack auf Ubuntu/Debian mit k3s (alternativ kubeadm oder RKE2). Die Methode lässt sich auf andere Linux-Distributionen übertragen; offizielle Anleitungen für weitere verbreitete Distributionen sind geplant."
    - q: "Zu welcher CNCF-Stufe gehört Cozystack?"
      options:
        - { text: "CNCF Sandbox, unter Apache 2.0", correct: true }
        - { text: "CNCF Graduated seit der letzten TOC-Abstimmung", correct: false }
        - { text: "CNCF Incubating mit abgeschlossener Governance", correct: false }
      explanation: "Cozystack ist ein CNCF-Sandbox-Projekt und steht unter der Lizenz Apache 2.0. (Cozystack hat sich außerdem für CNCF Incubation beworben; der Antrag ist in der Due Diligence.)"
    - q: "Welche Storage- und Networking-Schichten nennt die Ankündigung ausdrücklich als Teil von Cozystack auf Generic K8s?"
      options:
        - { text: "Nur Ceph für Storage und Calico für Networking", correct: false }
        - { text: "Nur NFS für Storage und flannel als CNI des Clusters", correct: false }
        - { text: "Linstor für Storage, Kube-OVN für Networking, KubeVirt für Virtualisierung", correct: true }
      explanation: "Der Artikel nennt ausdrücklich: Linstor für Storage, Kube-OVN für Networking, KubeVirt für Virtualisierung, DBaaS sowie Services per Mausklick wie Kafka, Cilium, Grafana, Victoria Metrics und weitere."
---



Cozystack geht über Talos Linux hinaus. Sie können jetzt jeden bestehenden K8s-Cluster, unabhängig von der Linux-Distribution, auf der er läuft, in eine vollwertige Cloud-Plattform mit dem gesamten Funktionsumfang von Cozystack verwandeln: Linstor für Storage, Kube-OVN für Networking, KubeVirt für Virtualisierung, DBaaS und eine Vielzahl von Services per Mausklick wie Kafka, Cilium, Grafana, Victoria Metrics und weitere.

![Cozystack auf jeder Linux-Distribution](/img/blog/medium/cozystack-is-no-longer-tied-to-talos-deploy-on-any-linux-distro-now/cover.jpg)

> ***Was ist Cozystack***

> *Cozystack ist eine umfassende Open-Source-Plattform zum Aufbau von Bare-Metal-Clouds, mit der sich Managed Kubernetes, Database-as-a-Service (DBaaS), Application-as-a-Service (AaaS) und virtuelle Maschinen auf Basis von KubeVirt schnell bereitstellen lassen. Kafka, MongoDB, PostgreSQL, Cilium, Grafana, VictoriaMetrics und weitere Services lassen sich damit per Mausklick ausrollen. Auch GPU-Workloads in virtuellen Maschinen und K8s-Clustern werden unterstützt. Cozystack ist ein CNCF-Sandbox-Projekt und steht unter der Lizenz Apache 2.0.*

## Wann lohnt sich Generic Kubernetes für Cozystack?

- **Unternehmensvorgaben:** Ihr Unternehmen hat strenge Sicherheitsrichtlinien oder eine Liste freigegebener Linux-Distributionen.
- **Keine Einarbeitung in Talos:** Vielleicht sehen Sie keinen Sinn darin, eine völlig neue Technologie zu erlernen oder sich auf die besondere Arbeitsweise von Talos Linux einzustellen. Wenn Sie Ihr Team nicht umschulen und bei bewährten Technologien bleiben möchten, in denen Sie bereits tiefe Erfahrung haben, deckt die Unterstützung für Generic K8s genau das ab.
- **Betriebssystemspezifische Anforderungen:** Ihr Workload benötigt bestimmte Linux-Treiber, Kernel-Module oder Systempakete, die in Talos nicht verfügbar sind.
- **Ausbau bestehender Cluster:** Sie haben bereits einen K8s-Cluster, brauchen aber eine benutzerfreundliche Oberfläche, S3-kompatiblen Objektspeicher oder die Möglichkeit, VMs neben Containern zu betreiben.
- **Einschränkungen der Infrastruktur:** Sie nutzen bestimmte Public Clouds oder spezielle Hardware, bei denen sich das Betriebssystem nicht durch Talos Linux ersetzen lässt.

## Probieren Sie es selbst aus

Wir haben [eine Schritt-für-Schritt-Anleitung](https://cozystack.io/docs/v1.6/install/kubernetes/generic/) vorbereitet, mit der Sie Cozystack auf Ubuntu/Debian mit k3s (alternativ kubeadm oder RKE2) installieren. Die Methode lässt sich auf andere Linux-Distributionen übertragen, und offizielle Anleitungen für weitere verbreitete Distributionen wollen wir bald veröffentlichen.

## Werden Sie Teil der Cozystack-Community

- [Telegram](https://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) (im [Kubernetes-Slack](https://slack.kubernetes.io/))
- [Kalender der Community-Meetings](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

Von [Timur Tukaev](https://medium.com/@tym83) am [23. Februar 2026](https://medium.com/p/dd8cd8b05b7e).

[Kanonischer Link](https://medium.com/@tym83/cozystack-is-no-longer-tied-to-talos-deploy-on-any-linux-distro-now-dd8cd8b05b7e)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
