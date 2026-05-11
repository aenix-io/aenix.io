---
title: "Cozystack — was es ist, Architektur und 2026-Positionierung"
description: "Begleitung zur Cozystack-Page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["VMware", "OpenStack", "Proxmox", "OpenShift", "Kubernetes", "Cozystack"]
language: "de"
companion_landing: "/de/produkte/cozystack/"
---

Begleitung zur **[Cozystack-Page](/de/produkte/cozystack)**.

## Architektonische Entscheidungen und warum

### Wahl 1: KubeVirt für Virtualisierung
KubeVirt führt VMs als Kubernetes-Ressourcen aus. Pods, die qemu/KVM einwickeln, mit allen Vorteilen des Kubernetes-Ökosystems.

### Wahl 2: Talos Linux als OS
Minimal, immutable Linux für Kubernetes. Kein SSH; Konfiguration über API.

### Wahl 3: LINSTOR als Standard-Storage
DRBD-basiert, repliziertes Block-Storage mit guten operativen Eigenschaften.

### Wahl 4: Cilium für Networking
eBPF-basiert mit nativen L4/L7-Policies und Observability.

### Wahl 5: Tenant CRD für Multi-Tenancy
Native Kubernetes-Ressource für Mandantengrenzen.

### Wahl 6: Flux für GitOps
Leichtgewichtig, am Upstream-Kubernetes-Weg ausgerichtet.

### Wahl 7: VictoriaMetrics + VictoriaLogs für Observability
Geringerer Overhead als Prometheus + Loki at scale.

## Cozystack vs OpenStack vs OpenShift

- vs OpenStack: Kubernetes-nativ, leichteres operatives Footprint
- vs OpenShift: Apache 2.0, kein Vendor-Lock-in
- vs Proxmox: für Multi-Tenant-Skala

## Wann Cozystack die richtige Antwort ist

- Service-Provider-Modell
- Regulierte Multi-Tenant
- KI/GPU at scale
- Greenfield Private Cloud
- VMware-Ausstieg

---

*Cozystack ist ein CNCF Project-Projekt. Aenix ist das Unternehmen dahinter.*

<!-- Word count: ~350. -->
