---
title: "Produktions-Kubernetes-Cluster — Architekturentscheidungen, Sizing und Operations 2026"
description: "Begleitung zur Kubernetes-Consulting-Page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["OpenShift", "Kubernetes", "Cozystack", "Cilium", "LINSTOR", "GitOps"]
language: "de"
companion_landing: "/de/dienstleistungen/kubernetes-consulting/"
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
