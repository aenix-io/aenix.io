---
title: "Protofire: Erfahrungen mit dem Kubernetes-Betrieb auf Cozystack"
seo_title: "Protofire: Kubernetes-Betrieb mit Cozystack"
description: "Protofire ist von fast hundert AWS-Konten mit ECS auf zwei Kubernetes-Cluster mit Cozystack umgezogen und erwartet 7- bis 10-mal niedrigere Infrastrukturkosten."
slug: "protofire-erfahrung-kubernetes-betrieb-cozystack"
date: "2025-09-10"
cover_image: "/img/blog/covers/de/protofire-erfahrung-kubernetes-betrieb-cozystack.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Cozystack", "Talos", "Financial Services", "CNCF", "Migration"]
language: "de"
hreflang_en: "/blog/2025/09/protofire-experience-operating-kubernetes-with-cozystack/"
quiz:
  title: "Testen Sie Ihr Wissen: Protofire wechselt zu Cozystack"
  questions:
    - q: "Wie sah die Infrastruktur von Protofire vor dem Umstieg auf Cozystack aus?"
      options:
        - { text: "Fast 100 AWS-Konten mit mehreren ECS-Services und verwalteten Datenbanken", correct: true }
        - { text: "Eine On-Premises-Cloud mit OpenStack und selbst betriebenem PostgreSQL und Redis", correct: false }
        - { text: "Bare-Metal-Kubernetes-Cluster mit zustandsbehafteten Services, die von Operatoren verwaltet werden", correct: false }
      explanation: "Die Umgebung bestand aus fast 100 AWS-Konten mit mehreren ECS-Services sowie verwaltetem PostgreSQL, Redis, RabbitMQ und ALBs. Die Migration hat dies unter Kubernetes konsolidiert, ohne die Unterstützung für zustandsbehaftete Services aufzugeben."
    - q: "Welche Kostensenkung erwartet Protofire nach der Migration?"
      options:
        - { text: "Etwa 20 bis 30 Prozent weniger als mit dem bisherigen AWS-Setup", correct: false }
        - { text: "Rund 100-mal weniger nach vollständiger Migration", correct: false }
        - { text: "7- bis 10-mal weniger als mit AWS", correct: true }
      explanation: "Auf Basis seiner Infrastrukturmodellierung und Kostenverfolgung erwartet Protofire im Vergleich zum bisherigen AWS-Setup 7- bis 10-mal niedrigere Ausgaben. Das Team betreibt zwei K8s-Cluster mit jeweils drei Control-Plane- und drei Worker-Nodes."
    - q: "Wie lange braucht Protofire heute, um eine Standardumgebung bereitzustellen und zu konfigurieren?"
      options:
        - { text: "Etwa einen Tag", correct: true }
        - { text: "Weniger als eine Stunde, vollständig automatisiert", correct: false }
        - { text: "Zwei bis drei Wochen pro Umgebung", correct: false }
      explanation: "In der Anfangsphase dauerten Migration und Feinabstimmung jeder Umgebung, einschließlich der Anpassung der Helm-Charts, mehr als einen Tag. Nach mehreren Iterationen stellt Protofire eine Standardumgebung heute in etwa einem Tag bereit und konfiguriert sie. Der Gewinn kam aus der Arbeit am Prozess, nicht aus einem neuen Werkzeug."
    - q: "Warum hat sich Protofire gerade für Cozystack entschieden?"
      options:
        - { text: "Es hatte die günstigste kommerzielle Lizenz auf der Shortlist", correct: false }
        - { text: "Eine nationale Aufsichtsbehörde hat es für die Workloads vorgeschrieben", correct: false }
        - { text: "Wegen des All-in-one-Ansatzes und der Kompatibilität mit Bare-Metal-Hardware", correct: true }
      explanation: "Nach der Bewertung verschiedener Optionen entschied sich Protofire vor allem wegen des All-in-one-Ansatzes und der Kompatibilität mit Bare-Metal-Infrastruktur für Cozystack. Hinzu kamen vorkonfigurierte, Helm-fähige Anwendungen (PostgreSQL, Redis, RabbitMQ, Ingress-NGINX), die die Ersteinrichtung beschleunigten."
    - q: "Welches zusätzliche Observability-Werkzeug hat das Team während der Migration eingeführt?"
      options:
        - { text: "Splunk Enterprise für die zentrale Indexierung von Logs", correct: false }
        - { text: "Loki für die zentrale Log-Erfassung neben Grafana", correct: true }
        - { text: "Datadog Logs mit einem gehosteten Aufbewahrungsplan", correct: false }
      explanation: "Das Team hat seine Observability-Werkzeuge neu aufgestellt und Loki für die zentrale Log-Erfassung eingeführt. Es ergänzt die vorhandenen Metriken und Grafana-Dashboards, die die Plattform bereits mitbringt."
---

Im Rahmen eines Infrastrukturwechsels, der sich über mehrere Monate erstreckte, hat sich unser Team nach alternativen Plattformen für die Container-Orchestrierung umgesehen, um den Betrieb zu vereinfachen und Kosten zu optimieren. Damals bestand unsere Umgebung aus fast hundert AWS-Konten mit mehreren ECS-Services sowie verwaltetem PostgreSQL, Redis, RabbitMQ und ALBs.

Ein Ziel war es, unsere Deployment-Architektur unter Kubernetes zu konsolidieren, zustandsbehaftete Services weiterhin zu unterstützen und dabei keine nennenswerte zusätzliche Betriebskomplexität zu schaffen. Nach der Bewertung verschiedener Optionen haben wir uns für [Cozystack](https://cozystack.io/) entschieden, vor allem wegen des All-in-one-Ansatzes und der Kompatibilität mit Bare-Metal-Infrastruktur.

![Protofire betreibt Kubernetes auf Cozystack](/img/blog/medium/protofire-experience-operating-kubernetes-with-cozystack/cover.png)

Cozystack basiert auf Talos Linux, das unveränderliche und sichere Nodes bereitstellt, und enthält eine Reihe vorkonfigurierter, Helm-fähiger Anwendungen wie PostgreSQL, Redis, RabbitMQ und Ingress-NGINX. Dank dieser integrierten Komponenten konnten wir die Ersteinrichtung beschleunigen und uns trotzdem die Flexibilität für eigene Anpassungen bewahren.

Derzeit betreiben wir zwei Kubernetes-Cluster mit jeweils drei Control-Plane- und drei Worker-Nodes; Kapazität für die Skalierung ist eingeplant. Auf Basis unserer Infrastrukturmodellierung und Kostenverfolgung erwarten wir im Vergleich zu unserem bisherigen AWS-Setup 7- bis 10-mal niedrigere Ausgaben.

In der Anfangsphase dauerten Migration und Feinabstimmung jeder Umgebung, einschließlich der Anpassung der Helm-Charts, mehr als einen Tag. Durch Iteration und Prozessverbesserungen haben wir diese Zeit inzwischen verkürzt: Heute lassen sich Standardumgebungen in etwa einem Tag bereitstellen und konfigurieren.

Im Zuge dessen haben wir auch unsere Observability-Werkzeuge neu aufgestellt. Für die zentrale Log-Erfassung haben wir Loki eingeführt; es ergänzt die vorhandenen Metriken und Grafana-Dashboards, die die Plattform bereits mitbringt.

Dass Cozystack kürzlich in die CNCF Sandbox aufgenommen wurde, hat uns zusätzlich in der Erwartung bestärkt, dass das Projekt langfristig unterstützt wird und technisch ausgereift ist. Aus unserer Sicht hat die Migration spürbare betriebliche und finanzielle Vorteile gebracht und uns geholfen, die interne Bereitstellung und Wartung von Services zu vereinfachen und zu standardisieren.

*Sie haben selbst einen Anwendungsfall? Teilen Sie ihn mit unseren Maintainern! Wir stellen ihn der Community vor.*

Von [Timur Tukaev](https://medium.com/@tym83) am [10. September 2025](https://medium.com/p/1daa682945f5).

[Kanonischer Link](https://medium.com/@tym83/protofire-experience-operating-kubernetes-with-cozystack-1daa682945f5)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
