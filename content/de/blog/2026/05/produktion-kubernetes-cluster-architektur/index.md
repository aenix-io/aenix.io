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
    - q: "Wie viele Architekturentscheidungen werden im Artikel als \"die zählen\" identifiziert?"
      options:
        - { text: "Drei", correct: false }
        - { text: "Zehn — Distribution, Multi-Tenancy, CNI, Storage, Identity, GitOps, Observability, Backup, Ingress, Lifecycle", correct: true }
        - { text: "Fünfzehn", correct: false }
      explanation: "10 Entscheidungen: (1) Distribution, (2) Multi-Tenancy, (3) Networking/CNI, (4) Storage, (5) Identity + Secrets, (6) GitOps-Engine, (7) Observability-Stack, (8) Backup + DR, (9) Ingress + Load Balancing, (10) Lifecycle-Management."
    - q: "Welche CNI ist 2026 der Standard für neue Bereitstellungen?"
      options:
        - { text: "Flannel", correct: false }
        - { text: "Cilium", correct: true }
        - { text: "Calico", correct: false }
      explanation: "Cilium hat sich als 2026-Standard durchgesetzt — eBPF-basiert, native L4/L7-Policies, Observability, Service-Mesh in einem. Calico ist langjährig BGP-stark; Flannel einfacher aber feature-arm."
    - q: "Was ist der häufigste Fehler bei Cluster-Lifecycle?"
      options:
        - { text: "Zu schnelle Upgrades", correct: false }
        - { text: "Upgrade-Schulden — Cluster auf alten Kubernetes-Versionen weil Upgrade-Disziplin fehlt", correct: true }
        - { text: "Zu viele Tests", correct: false }
      explanation: "Häufige Fehler: Dev-Cluster auf Prod skaliert, kein Observability-Budget, Sicherheit als Nachgedanke, Upgrade-Schulden (Cluster auf zu alten Versionen weil Upgrade-Praxis fehlt), kein Plattform-Team."
    - q: "Welche operativen Praktiken werden für Produktions-Cluster empfohlen?"
      options:
        - { text: "SLOs + Error Budgets, dokumentierte Runbooks, Capacity Planning, Upgrade-Disziplin (Kubernetes minor jedes Quartal), Incident Response, Sicherheitsposture", correct: true }
        - { text: "Nur Backups", correct: false }
        - { text: "Nur Monitoring", correct: false }
      explanation: "Operative Praktiken: SLOs und Error Budgets, dokumentierte Runbooks, Capacity Planning, Upgrade-Disziplin (Kubernetes minor jedes Quartal), Incident Response, Sicherheitsposture (Pod Security Standards, Network Policies)."
    - q: "Welche GitOps-Engines sind production-grade Optionen?"
      options:
        - { text: "Argo CD oder Flux — beide CNCF Graduated, Cozystack default ist Flux", correct: true }
        - { text: "Nur Spinnaker", correct: false }
        - { text: "Nur Argo CD", correct: false }
      explanation: "Beide Argo CD und Flux sind production-grade und CNCF Graduated. Argo CD: UI-reich, Plugin-Ökosystem, Multi-Tenancy via Projects. Flux: näher am Upstream-Kubernetes, Helm-Controller-nativ, leichteres operatives Footprint. Cozystack default ist Flux."
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

*Aenix ist das Team hinter Cozystack.*

<!-- Word count: ~300. -->
