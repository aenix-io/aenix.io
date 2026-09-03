---
title: "Produktions-Kubernetes-Cluster — Architekturentscheidungen, Sizing und Operations 2026"
description: "Begleitung zur Kubernetes-Consulting-Page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["OpenShift", "Kubernetes", "Cozystack", "Cilium", "LINSTOR", "GitOps"]
language: "de"
companion_landing: "/de/dienstleistungen/kubernetes-consulting/"
quiz:
  title: "Wissens-Check: Produktions-Kubernetes-Cluster"
  questions:
    - q: "Wie viele Architekturentscheidungen benennt der Artikel als die entscheidenden?"
      options:
        - { text: "Drei", correct: false }
        - { text: "Zehn", correct: true }
        - { text: "Fünfzehn", correct: false }
      explanation: "Zehn Entscheidungen: (1) Distribution, (2) Mandantenfähigkeit, (3) Networking und CNI, (4) Storage, (5) Identität und Secrets, (6) GitOps-Engine, (7) Observability-Stack, (8) Backup und Disaster Recovery, (9) Ingress und Lastverteilung, (10) Lifecycle-Management."
    - q: "Welches CNI ist 2026 der Standard für neue Umgebungen?"
      options:
        - { text: "Flannel", correct: false }
        - { text: "Cilium", correct: true }
        - { text: "Calico", correct: false }
      explanation: "Cilium hat sich als Standard für 2026 durchgesetzt: eBPF-basiert, mit nativen L4/L7-Policies, eingebauter Observability und Service-Mesh-Funktionen in einem. Calico ist seit Langem stark bei BGP, Flannel ist einfacher, aber funktionsarm. In Cozystack steht Cilium neben Kube-OVN, das die VM-nahen Netzwerkfunktionen übernimmt."
    - q: "Was ist der häufigste Fehler beim Cluster-Lifecycle?"
      options:
        - { text: "Zu häufige und zu schnell ausgerollte Upgrades", correct: false }
        - { text: "Upgrade-Schulden durch fehlende Upgrade-Disziplin", correct: true }
        - { text: "Ein zu umfangreicher Testaufwand vor jedem Release", correct: false }
      explanation: "Häufige Fehler: ein Dev-Cluster wird zum Produktivsystem hochskaliert, für Observability ist kein Budget eingeplant, Sicherheit kommt als Nachgedanke, Upgrade-Schulden häufen sich, weil die Upgrade-Praxis fehlt, und es gibt kein verantwortliches Plattformteam."
    - q: "Welche Betriebspraktiken empfiehlt der Artikel für Produktionscluster?"
      options:
        - { text: "Regelmäßige Backups genügen als Betriebsdisziplin", correct: false }
        - { text: "SLOs, Runbooks, Kapazitätsplanung, Upgrade-Disziplin, Incident Response", correct: true }
        - { text: "Monitoring genügt, solange die Dashboards grün sind", correct: false }
      explanation: "Betriebspraktiken: SLOs und Fehlerbudgets, dokumentierte Runbooks, Kapazitätsplanung, Upgrade-Disziplin mit einem Kubernetes-Minor-Release je Quartal, geübte Incident Response und eine gepflegte Sicherheitslage mit Pod Security Standards und Network Policies."
    - q: "Welche GitOps-Engines sind produktionsreife Optionen?"
      options:
        - { text: "Ausschließlich Spinnaker", correct: false }
        - { text: "Sowohl Argo CD als auch Flux", correct: true }
        - { text: "Ausschließlich Argo CD", correct: false }
      explanation: "Sowohl Argo CD als auch Flux sind produktionsreif und CNCF-graduiert. Argo CD bietet eine reichhaltige Oberfläche, ein großes Plugin-Ökosystem und Mandantenfähigkeit über Projects. Flux liegt näher am Upstream-Kubernetes, ist eng mit dem Helm-Controller verzahnt und hat einen leichteren Betriebsaufwand. In Cozystack ist Flux der Standard."
---

Begleitung zur **[Kubernetes-Consulting-Page](/de/dienstleistungen/kubernetes-consulting)**.

## 10 Architekturentscheidungen, die zählen

1. Distribution (vanilla / OpenShift / Cozystack / vendor-led)
2. Multi-Tenancy (soft, hard via Tenant CRD, cluster pro tenant)
3. Networking / CNI (Cilium ist 2026 Standard)
4. Storage (LINSTOR, Ceph, vendor SAN)
5. Identität und Secrets
6. GitOps-Engine (Argo CD oder Flux)
7. Observability-Stack (VictoriaMetrics + VictoriaLogs)
8. Backup und DR (Velero + per-app PITR)
9. Ingress und Load Balancing
10. Lifecycle-Management

## Operative Praktiken

- SLOs und Error Budgets
- Dokumentierte Runbooks
- Capacity Planning
- Upgrade-Disziplin (Kubernetes minor jedes Quartal)
- Incident Response
- Sicherheitsposture (Pod Security Standards, Network Policies)

## Häufige Fehler

- Dev-Cluster auf Prod skaliert
- Kein Observability-Budget
- Sicherheit als Nachgedanke
- Upgrade-Schulden
- Kein Plattform-Team

---

*Ænix ist das Team hinter Cozystack.*

