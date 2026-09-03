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
    - q: "Wie viele architektonische Hauptentscheidungen beschreibt der Artikel für Cozystack?"
      options:
        - { text: "Drei", correct: false }
        - { text: "Sieben", correct: true }
        - { text: "Zwölf", correct: false }
      explanation: "Sieben Entscheidungen: KubeVirt für Virtualisierung, Talos Linux als Betriebssystem, LINSTOR als Standard-Storage, Cilium für Networking, das Tenant CRD für Mandantenfähigkeit, Flux für GitOps sowie VictoriaMetrics und VictoriaLogs für Observability."
    - q: "Warum ist Talos Linux das Standard-Betriebssystem für Cozystack?"
      options:
        - { text: "Weil Talos das einzige Linux mit KubeVirt-Unterstützung ist", correct: false }
        - { text: "Weil es minimal und unveränderlich ist und über eine API konfiguriert wird", correct: true }
        - { text: "Weil Talos die günstigste kommerzielle Lizenz mitbringt", correct: false }
      explanation: "Talos ist minimal und unveränderlich: kein SSH, kein Paketmanager, keine Shell, Konfiguration ausschließlich über die API. Damit entfallen ganze Fehlerklassen wie Konfigurationsdrift, manuelle Hotfixes und Einzelstück-Knoten. Talos ist der Standard, aber nicht zwingend — mit der Variante isp-full-generic und der Ansible-Collection läuft Cozystack auch auf gewöhnlichem Linux."
    - q: "Wann ist Cozystack die richtige Antwort?"
      options:
        - { text: "Service-Provider, regulierte Mandantenfähigkeit, KI/GPU, VMware-Ausstieg", correct: true }
        - { text: "Ausschließlich Single-Tenant-Umgebungen im Mittelstand", correct: false }
        - { text: "Ausschließlich ROBO- und Edge-Standorte ohne eigenes IT-Team", correct: false }
      explanation: "Cozystack passt für das Service-Provider-Modell, regulierte Mandantenfähigkeit, KI und GPU im großen Maßstab, Greenfield-Private-Cloud und den VMware-Ausstieg. Für Single-Tenant-Umgebungen im Mittelstand ist Proxmox VE die bessere Wahl."
    - q: "Was ersetzt Cilium im Vergleich zu VMware-Umgebungen?"
      options:
        - { text: "vCenter", correct: false }
        - { text: "NSX", correct: true }
        - { text: "vSphere", correct: false }
        - { text: "vSAN", correct: false }
      explanation: "Cilium übernimmt in Cozystack-Umgebungen die Rolle von NSX: eBPF-basiertes Networking mit nativen L4/L7-Policies und eingebauter Observability, ohne NSX-Lizenzkosten. vCenter entspricht der Kubernetes-API mit dem Cozystack Dashboard, vSphere/ESXi entspricht KubeVirt und vSAN entspricht LINSTOR."
    - q: "Wie verhält sich Cozystack architektonisch zu OpenStack?"
      options:
        - { text: "Beide sind Architekturen aus den 2010er-Jahren mit gleichem Zuschnitt", correct: false }
        - { text: "Kubernetes-nativ und mit deutlich leichterem Betriebsaufwand", correct: true }
        - { text: "Cozystack ist ein Fork der OpenStack-Codebasis", correct: false }
      explanation: "Cozystack ist Kubernetes-nativ und hat einen leichteren Betriebsaufwand als OpenStack, das mit 50 und mehr Komponenten betrieblich schwer ist. Gegenüber OpenShift steht Apache 2.0 ohne Vendor-Lock-in, gegenüber Proxmox die Auslegung auf Mandantenfähigkeit im großen Maßstab."
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
Geringerer Overhead als Prometheus + Loki im großen Maßstab.

## Cozystack vs OpenStack vs OpenShift

- vs OpenStack: Kubernetes-nativ, leichteres operatives Footprint
- vs OpenShift: Apache 2.0, kein Vendor-Lock-in
- vs Proxmox: für Multi-Tenant-Skala

## Wann Cozystack die richtige Antwort ist

- Service-Provider-Modell
- Regulierte Multi-Tenant
- KI/GPU im großen Maßstab
- Greenfield Private Cloud
- VMware-Ausstieg

---

*Cozystack ist ein CNCF-Projekt. Ænix ist das Unternehmen dahinter.*

