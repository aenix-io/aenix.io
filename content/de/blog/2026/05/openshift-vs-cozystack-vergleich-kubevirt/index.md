---
title: "OpenShift vs Cozystack — Vergleich für Plattformentscheidungen auf Basis von KubeVirt"
description: "Zwei KubeVirt-basierte Plattformen im Vergleich: gemeinsame Grundlagen, echte Unterschiede, wann OpenShift vorne liegt und was eine Migration bedeutet."
slug: "openshift-vs-cozystack-vergleich-kubevirt"
date: "2026-05-19"
cover_image: "/img/blog/covers/de/openshift-vs-cozystack-vergleich-kubevirt.jpg"
author: "Aenix Team"
type: "article"
topics: ["OpenShift", "Kubernetes", "Cozystack", "KubeVirt", "Cilium", "LINSTOR"]
language: "de"
hreflang_en: "/blog/2026/05/openshift-vs-cozystack-comparison/"
companion_landing: "/de/alternativen/openshift-alternative/"
quiz:
  title: "Wissens-Check: OpenShift Virtualization vs Cozystack"
  questions:
    - q: "Welches architektonische Fundament teilen OpenShift Virtualization und Cozystack?"
      options:
        - { text: "KubeVirt — VMs als Kubernetes-Objekte neben Containern", correct: true }
        - { text: "OpenStack (Nova + Neutron) unter einer Kubernetes-Hülle", correct: false }
        - { text: "Reines libvirt mit eigener Ansible-Orchestrierung darüber", correct: false }
      explanation: "Beide basieren auf KubeVirt; beide übernehmen die Betriebsmuster von Kubernetes (deklarative Konfiguration, GitOps, RBAC, Observability); beide unterstützen produktive VM-Workloads mit Live-Migration, Snapshots und Mandantentrennung."
    - q: "Wie lässt sich das kommerzielle Modell von OpenShift Virtualization beschreiben?"
      options:
        - { text: "Open Source unter Community-Governance (Apache 2.0, herstellerneutral)", correct: false }
        - { text: "Kommerzielle Red-Hat-Subscription, pro Core oder pro Sockel", correct: true }
        - { text: "Im ersten Jahr kostenlos, danach kommerzielle Preise pro VM", correct: false }
      explanation: "OpenShift Virtualization ist eine kommerzielle Red-Hat-Subscription mit Preisen pro Core oder pro Sockel; enthalten sind Red-Hat-Support, Zertifizierung und Zugang zum Ökosystem. Cozystack ist Open Source unter Apache 2.0; Aenix bietet optionale kommerzielle Support-Stufen an."
    - q: "Welches Modell der Mandantenfähigkeit nutzt OpenShift im Vergleich zu Cozystack?"
      options:
        - { text: "Beide nutzen dasselbe Tenant CRD mit verschachtelten Tenants", correct: false }
        - { text: "OpenShift: Namespace + Project CRD; Cozystack: Tenant CRD", correct: true }
        - { text: "OpenShift: ein Cluster pro Tenant; Cozystack: ein Namespace pro Tenant", correct: false }
      explanation: "OpenShift arbeitet namespacebasiert mit dem Project CRD; RBAC und Quotas greifen auf Namespace-Ebene — das funktioniert für Unternehmen mit mehreren Geschäftsbereichen. Cozystack nutzt das Tenant CRD mit verschachtelten Tenants, abgegrenztem Audit und abrechnungsfreundlichem Modell — das funktioniert für Service-Provider mit vielen Kunden ebenso wie für Unternehmen mit mehreren Geschäftsbereichen."
    - q: "Wann liegt OpenShift im Vergleich vorne?"
      options:
        - { text: "Bei bestehenden Red-Hat-Verpflichtungen und auf Red Hat standardisierter Beschaffung", correct: true }
        - { text: "Beim Service-Provider-Modell mit vielen Kunden (White-Label-Weiterverkauf)", correct: false }
        - { text: "Bei Open-Source-First-Beschaffung und Souveränitätsvorgaben", correct: false }
      explanation: "OpenShift liegt vorne bei bestehenden Red-Hat-Verpflichtungen, einer auf Red Hat standardisierten Unternehmensbeschaffung, dem integrierten Red-Hat-Ökosystem (Ansible/Satellite/IdM), kommerziellem Support mit SLAs und Compliance-Anforderungen, die das Supportmodell eines großen Herstellers verlangen."
    - q: "Welchen Zeitrahmen nennt der Artikel für die Migration eines mittelgroßen Deployments von OpenShift zu Cozystack?"
      options:
        - { text: "Tage (imagekompatibles Lift-and-Shift auf gemeinsamem KubeVirt)", correct: false }
        - { text: "Über 5 Jahre (mehrphasige Ablösung parallel zum Altbestand)", correct: false }
        - { text: "3–9 Monate für ein mittelgroßes Deployment", correct: true }
      explanation: "Beide basieren auf KubeVirt, daher ist die Migration auf VM-Ebene unkompliziert (Kompatibilität auf Image-Ebene). Die architektonischen Unterschiede liegen im Mandantenmodell, im Networking, im Storage und im Betriebswerkzeug. Realistischer Zeitrahmen: 3–9 Monate für ein mittelgroßes Deployment."
---

OpenShift Virtualization (Red Hat) und Cozystack (Ænix / CNCF-Projekt) sind 2026 die beiden ausgereiftesten Plattformen auf Basis von KubeVirt. Sie teilen architektonische Grundlagen, unterscheiden sich aber im kommerziellen Modell, im betrieblichen Footprint und in der Beziehung zum Hersteller.

## Gemeinsame Grundlagen

Beide Plattformen betreiben KubeVirt für VM-Workloads neben Kubernetes-Containern. Beide übernehmen die Betriebsmuster von Kubernetes (deklarative Konfiguration, GitOps, RBAC, Observability). Beide unterstützen produktive VM-Workloads mit Live-Migration, Snapshots und Mandantentrennung.

## Wo sie sich unterscheiden

### Kommerzielles Modell

**OpenShift Virtualization:** kommerzielle Red-Hat-Subscription. Preise pro Core oder pro Sockel. Enthalten sind Red-Hat-Support, Zertifizierung und Zugang zum Ökosystem.

**Cozystack:** Open Source unter Apache 2.0. Ænix bietet kommerzielle Support-Stufen an; Sie können die Plattform aber auch ohne kommerzielle Beziehung selbst betreiben.

Für Organisationen, deren Beschaffung auf Red Hat standardisiert ist, ist OpenShift administrativ einfacher. Für Organisationen, die Open Source an erste Stelle setzen oder die Wirtschaftlichkeit eines Service-Providers anstreben, passt Cozystack besser.

### Betrieblicher Footprint

**OpenShift:** ein breiter Funktionsumfang — OpenShift Container Platform plus Virtualization plus Service Mesh plus Pipelines plus weitere Add-ons. Funktional reichhaltig; das Team braucht OpenShift-spezifisches Know-how.

**Cozystack:** ein fokussierter Stack — KubeVirt + Cilium + Kube-OVN + LINSTOR + Cozystack Dashboard + Observability. Ein schlankerer betrieblicher Footprint; allgemeines Kubernetes-Betriebswissen lässt sich direkt übertragen.

### Mandantenfähigkeit

**OpenShift:** namespacebasiert mit dem Project CRD; RBAC und Quotas greifen auf Namespace-Ebene. Funktioniert für Unternehmen mit mehreren Geschäftsbereichen.

**Cozystack:** Tenant CRD mit verschachtelten Tenants, abgegrenztem Audit und abrechnungsfreundlichem Modell. Funktioniert für Service-Provider mit vielen Kunden ebenso wie für Unternehmen mit mehreren Geschäftsbereichen.

### Beziehung zum Hersteller

**OpenShift:** Beziehung zu Red Hat / IBM. Die Roadmap wird von den kommerziellen Entscheidungen von Red Hat bestimmt.

**Cozystack:** Open Source unter Community-Governance (CNCF-Projekt). Ænix ist der größte Contributor, aber nicht der Eigentümer. Die Roadmap wird von der Community und den kommerziellen Anwendern geprägt.

### Integration ins Ökosystem

**OpenShift:** integriert sich in das breitere Red-Hat-Ökosystem (Ansible, Satellite, Identity Management usw.).

**Cozystack:** integriert sich in das breitere CNCF-Ökosystem (Alternativen zum Prometheus-Stack, Argo, Crossplane usw.).

## Wann OpenShift vorne liegt

- Bestehende Verpflichtungen gegenüber Red Hat / OpenShift
- Unternehmensbeschaffung, die auf Red Hat standardisiert ist
- Bedarf an einem integrierten Red-Hat-Ökosystem (Ansible Automation Platform usw.)
- Wunsch nach kommerziellem Support mit etablierten SLAs
- Compliance-Anforderungen, die das Supportmodell eines großen Herstellers verlangen

## Wann Cozystack vorne liegt

- Beschaffung nach dem Prinzip Open Source first
- Service-Provider-Modell (Cloud für viele Kunden)
- Souveränitäts- oder Regulierungsanforderungen, bei denen Open Source zählt
- Kostensensibilität im großen Maßstab (keine Subscription pro Core)
- Greenfield ohne bestehende Beziehung zu Red Hat
- Bedarf an einem schlankeren betrieblichen Footprint als beim vollständigen OpenShift

## Migration zwischen beiden

Beide basieren auf KubeVirt, daher ist die Migration auf VM-Ebene unkompliziert (Kompatibilität auf Image-Ebene). Die architektonischen Unterschiede liegen in:

- Mandantenmodell (Project CRD vs Tenant CRD)
- Networking (OpenShift SDN/OVN vs Cilium)
- Storage (OpenShift Container Storage / Ceph vs LINSTOR / DRBD)
- Betriebswerkzeugen (OpenShift CLI/Console vs Cozystack Dashboard/Standard-kubectl)

Realistischer Zeitrahmen für die Migration: 3–9 Monate für ein mittelgroßes Deployment.

## Wie Sie sich entscheiden

Wenn Ihre Situation zu den Stärken von OpenShift passt (Red-Hat-Ökosystem, Unternehmensbeschaffung, breiter Funktionsumfang), wählen Sie OpenShift Virtualization. Wenn Ihre Situation zu den Stärken von Cozystack passt (Open Source, Service-Provider, schlankerer Footprint), wählen Sie Cozystack.

Für eine konkrete Bewertung hilft die Assessment-Phase des jeweiligen Engagements bei der Klärung. Siehe **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.
