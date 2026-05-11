---
title: "Cozystack — was es ist, Architektur und 2026-Positionierung"
description: "Begleitung zur Cozystack-Page."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["VMware", "OpenStack", "Proxmox", "OpenShift", "Kubernetes", "Cozystack"]
language: "de"
companion_landing: "/de/produkte/cozystack/"
quiz:
  title: "Wissens-Check: Cozystack-Architektur"
  questions:
    - q: "Wie viele architektonische Hauptentscheidungen werden für Cozystack im Artikel beschrieben?"
      options:
        - { text: "Drei", correct: false }
        - { text: "Sieben", correct: true }
        - { text: "Zwölf", correct: false }
      explanation: "Sieben Wahlen: KubeVirt für Virtualisierung, Talos Linux als OS, LINSTOR als Standard-Storage, Cilium für Networking, Tenant CRD für Multi-Tenancy, Flux für GitOps, VictoriaMetrics + VictoriaLogs für Observability."
    - q: "Warum ist Talos Linux das Standard-OS für Cozystack?"
      options:
        - { text: "Talos ist der einzige Linux mit KubeVirt-Unterstützung", correct: false }
        - { text: "Minimal und immutable Linux für Kubernetes — kein SSH, Konfiguration über API, operativ einfacher und sicherer", correct: true }
        - { text: "Talos ist die günstigste kommerzielle Lizenz", correct: false }
      explanation: "Talos ist minimal und immutable — kein SSH, Konfiguration über API, kein Paketmanager, keine Shell. Operativ einfacher und sicherer als allgemeines Linux für Kubernetes-Hosts."
    - q: "Wann ist Cozystack die richtige Antwort?"
      options:
        - { text: "Service-Provider-Modell, regulierte Multi-Tenant, KI/GPU at scale, Greenfield Private Cloud, VMware-Ausstieg", correct: true }
        - { text: "Nur SMB-Single-Tenant", correct: false }
        - { text: "Nur ROBO/Edge", correct: false }
      explanation: "Cozystack passt für: Service-Provider-Modell, regulierte Multi-Tenant, KI/GPU at scale, Greenfield Private Cloud, VMware-Ausstieg. Für SMB-Single-Tenant ist Proxmox VE besser geeignet."
    - q: "Was ersetzt Cilium im Vergleich zu VMware-Bereitstellungen?"
      options:
        - { text: "vCenter", correct: false }
        - { text: "NSX (Networking) — eBPF-basiert mit nativen L4/L7-Policies und Observability", correct: true }
        - { text: "vSphere", correct: false }
      explanation: "Cilium ersetzt NSX-Funktionalität in Cozystack-Bereitstellungen. eBPF-basiert mit nativen L4/L7-Policies und Observability — ohne NSX-Lizenzkosten."
    - q: "Wie verhält sich Cozystack zu OpenStack architektonisch?"
      options:
        - { text: "Beide sind 2010er-Architektur", correct: false }
        - { text: "Kubernetes-nativ, leichteres operatives Footprint", correct: true }
        - { text: "Cozystack ist ein OpenStack-Fork", correct: false }
      explanation: "Cozystack ist Kubernetes-nativ mit leichterem operativen Footprint vs OpenStack (operativ schwer, 50+ Komponenten). vs OpenShift: Apache 2.0 ohne Vendor-Lock-in. vs Proxmox: für Multi-Tenant-Skala."
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
