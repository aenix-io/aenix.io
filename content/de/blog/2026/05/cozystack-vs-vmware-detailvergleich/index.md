---
title: "Cozystack vs. VMware — der Detailvergleich für Platform Engineers"
description: "Cozystack und VMware Schicht für Schicht verglichen — Compute, Storage, Netzwerk, Mandantenfähigkeit — mit Folgen für den Betrieb und Migrationsmustern."
slug: "cozystack-vs-vmware-detailvergleich"
date: "2026-05-07"
cover_image: "/img/blog/covers/de/cozystack-vs-vmware-detailvergleich.jpg"
author: "Aenix Team"
type: "article"
topics: ["VMware", "Kubernetes", "Cozystack", "KubeVirt", "Cilium", "LINSTOR"]
language: "de"
hreflang_en: "/blog/2026/05/cozystack-vs-vmware-deep-dive/"
companion_landing: "/de/vergleichen/cozystack-vs-vmware/"
quiz:
  title: "Wissens-Check: Cozystack vs. VMware im Detail"
  questions:
    - q: "Wie wird KubeVirt in der Compute-Schicht im Verhältnis zu vSphere/ESXi charakterisiert?"
      options:
        - { text: "KubeVirt ist konzeptionell Typ 2, im Betrieb aber Typ-1-ähnlich", correct: true }
        - { text: "KubeVirt basiert auf einem Microkernel-Hypervisor-Design", correct: false }
        - { text: "KubeVirt ist eine Paravirtualisierungsschicht oberhalb der Gäste", correct: false }
      explanation: "KubeVirt ist konzeptionell Typ 2 (KVM als Pods), im Betrieb aber Typ-1-ähnlich. Unter der Haube arbeitet Standard-QEMU/KVM mit breiter Unterstützung für Gastbetriebssysteme. Live-Migration funktioniert für CPU-Workloads; dass GPU-Live-Migration nicht geht, ist eine branchenweite Einschränkung und kein KubeVirt-spezifisches Problem."
    - q: "Was sagt der Artikel über die Migration von NSX-lastigen Umgebungen zu Cilium?"
      options:
        - { text: "Alle NSX-Regeln lassen sich direkt eins zu eins abbilden", correct: false }
        - { text: "Cilium importiert NSX-Regeln automatisch bei der Installation", correct: false }
        - { text: "Die Policies müssen neu entworfen werden, eine 1:1-Abbildung gibt es nicht", correct: true }
      explanation: "Die Migration aus einer NSX-lastigen Umgebung zu Cilium erfordert ein Redesign der Policies — keine 1:1-Abbildung. Das Architekturmodell ist ein anderes. Die meisten Teams planen das im Architektur-Review, bevor sie sich auf eine Migration festlegen."
    - q: "Wie lange brauchen VMware-geschulte Engineers laut Artikel, um sich in das kubectl-zentrierte Modell einzuarbeiten?"
      options:
        - { text: "Ein bis zwei Tage Selbststudium", correct: false }
        - { text: "Vier bis acht Wochen mit gezieltem Training", correct: true }
        - { text: "Mindestens zwölf Monate Einarbeitung im laufenden Betrieb", correct: false }
      explanation: "Der Wechsel vom vCenter-zentrierten zum kubectl-zentrierten Betrieb ist eine echte Lernkurve. Die meisten Engineers arbeiten sich mit gezieltem Training in 4–8 Wochen ein. Aenix führt das Training als Teil der Professional Services durch."
    - q: "Wie vergleicht der Artikel SRM mit Velero plus PITR pro Anwendung für geschäftskritisches DR?"
      options:
        - { text: "Beides funktioniert; man tauscht Plug-and-Play gegen Transparenz", correct: true }
        - { text: "SRM ist die einzige praktikable Option für DR in der Produktion", correct: false }
        - { text: "Velero ist im großen Maßstab in Benchmarks schneller als SRM", correct: false }
      explanation: "Beides funktioniert für geschäftskritisches DR. SRM ist eine ausgereifte, vom Hersteller verwaltete DR-Orchestrierung nach dem Plug-and-Play-Prinzip. Velero plus PITR pro Anwendung (PostgreSQL usw.) hat mehr bewegliche Teile, ist dafür aber transparenter und besser anpassbar."
    - q: "Wie lange dauert laut Schätzung eine typische Migration von 100 VMs von VMware zu Cozystack?"
      options:
        - { text: "Rund zwei Wochen konzentrierter Cutover-Arbeit", correct: false }
        - { text: "Rund drei Jahre schrittweiser Migration", correct: false }
        - { text: "Sieben bis zehn Monate insgesamt", correct: true }
      explanation: "Eine typische Migration von 100 VMs von VMware zu Cozystack dauert insgesamt 7–10 Monate (Discovery, paralleles Deployment, Image-Migration in Kohorten, Netzwerk- und Storage-Cutover, DR-Cutover, Abschaltung). Treiber sind die Regressionstests und die Parallelbetriebsfenster, nicht die reine Migrationsgeschwindigkeit."
---


Dieser Artikel setzt voraus, dass Sie beide Plattformen kennen. Eine breitere Orientierung zum Ausstieg aus VMware finden Sie unter **[VMware-Alternative](/de/alternativen/vmware-alternative/)** oder **[VMware-Migration](/de/migration/vmware/)**.

## Compute-Schicht

**VMware vSphere/ESXi:** ausgereifter Typ-1-Hypervisor. Starkes Lifecycle-Management für VMs, Live-Migration mit Shared Storage, vMotion. Enge Integration der VMware Tools in die Gastsysteme.

**Cozystack KubeVirt:** qemu/KVM, verpackt in Pods. KVM selbst ist ein Hypervisor im Kernel-Modus, der Gast läuft also weiterhin auf den Virtualisierungserweiterungen der Hardware — der Pod ist eine Hülle für Scheduling und Lifecycle, keine zusätzliche Emulationsschicht. Live-Migration (CPU; GPU-Live-Migration ist eine branchenweite Einschränkung). Unter der Haube Standard-QEMU/KVM; breite Unterstützung für Gastbetriebssysteme.

In der Praxis liefern beide VM-Workloads in Produktionsqualität. Das KubeVirt-Modell bringt zusätzlich die betriebliche Integration in Kubernetes mit (deklarative VM-Konfiguration, GitOps-Lifecycle, natives Ingress, Observability).

## Storage-Schicht

**VMware vSAN:** in vSphere integrierter Software-defined Storage. Im Betrieb reibungslos, eng integriert. An die VMware-Lizenzierung gebunden.

**Cozystack LINSTOR:** replizierter Open-Source-Blockspeicher, ausgerollt über den Piraeus-Operator. LINSTOR nutzt DRBD für die synchrone Replikation; Object Storage ist eine eigene Schicht (SeaweedFS). Mehr Verantwortung im Betrieb, mehr architektonische Flexibilität.

Für die meisten Workloads erreicht LINSTOR die betrieblichen Eigenschaften von vSAN. Wo zusätzlich Object Storage im S3-Stil gebraucht wird, liefert Cozystack SeaweedFS als verwalteten Bucket-Service mit.

## Netzwerkschicht

**VMware NSX:** Software-defined Networking. Verteilte virtuelle L2-Switches, L3-Routing, Mikrosegmentierung, Edge Gateway. Ausgereift, aber komplex.

**Cozystack Cilium:** eBPF-basiertes CNI mit L4/L7-Policies, Observability, Service-Mesh-Integration, MetalLB / BGP. Neuere Architektur, oft einfacher.

Die Migration aus einer NSX-lastigen Umgebung zu Cilium erfordert ein Redesign der Policies — eine 1:1-Abbildung gibt es nicht. Das Architekturmodell ist ein anderes.

## Mandantenschicht

**VMware vCloud Director:** ausgereiftes Multi-Tenant-Overlay auf vSphere. Funktionen für Service Provider (Organisationen, vDC, Kataloge).

**Cozystack Tenant CRD:** Kubernetes-native Abstraktion für Mandantenfähigkeit. Verschachtelte Tenants, Quotas pro Tenant, mandantenbezogenes Audit, abrechnungsfreundlich.

Das Mandantenmodell ist konzeptionell ein anderes — vCD-Organisationen gegenüber Instanzen des Tenant CRD. Bei der Migration muss die Mandantenstruktur auf das Kubernetes-native Äquivalent neu abgebildet werden.

## Folgen für den Betrieb

### Tagesgeschäft

**VMware:** vCenter-UI für Ad-hoc-Aufgaben; PowerCLI / Ansible für die Automatisierung. SSH ist nicht das Standardmodell.

**Cozystack:** kubectl plus GitOps als Standardmodell. Cozystack-Dashboard-UI für Tenant-Aufgaben. Review von GitOps-PRs als Change-Management.

Der Wechsel vom vCenter-zentrierten zum kubectl-zentrierten Arbeiten ist für VMware-geschulte Teams eine echte Lernkurve im Betrieb. Die meisten Engineers arbeiten sich mit gezieltem Training in 4–8 Wochen ein.

### Upgrades

**VMware:** zuerst Upgrade von vCenter, dann ESXi-Upgrade Host für Host (rollierend). Ausgereifter Prozess.

**Cozystack:** Upgrade von Talos OS, von Kubernetes und vom Cozystack-Operator. GitOps-gesteuert. Rollierend Host für Host.

Beide arbeiten mit Rolling Upgrades. Im Betrieb ähnlich im Geist, aber mit unterschiedlichem Tooling.

### Backup / DR

**VMware Site Recovery Manager:** ausgereifte DR-Orchestrierung. Im großen Maßstab erprobt.

**Cozystack Velero plus PITR pro Anwendung:** Velero übernimmt das Backup auf Cluster-Ebene; anwendungsspezifische Muster (PostgreSQL PITR usw.) kommen darüber. Mehr bewegliche Teile, mehr Flexibilität.

Für geschäftskritisches DR funktioniert beides. Das Muster ist ein anderes — SRM ist eine vom Hersteller verwaltete Plug-and-Play-Lösung; der Velero-Stack ist transparenter und besser anpassbar.

## Migrationsmuster

Die Migration von VMware zu Cozystack in der Produktion:

1. **Discovery** — Inventar von vSphere/VCF; Klassifizierung der Workloads.
2. **Cozystack-Fundament** — paralleles Deployment; kein Tenant von VMware.
3. **Image-Migration** — KubeVirt CDI importiert VMDK- oder qcow2-Images. Bei Windows-VMs werden die VMware Tools vor dem ersten Start unter KubeVirt bereinigt.
4. **Netzwerk-Cutover** — Abbildung der VLANs in Cilium; die Gleichwertigkeit der Policies wird gegen die NSX-Regeln validiert.
5. **Storage-Cutover** — vSAN → LINSTOR (DRBD); Datenmigration während des Cutovers der jeweiligen Kohorte.
6. **DR-Cutover** — Velero ersetzt SRM; wird pro Kohorte getestet.
7. **Abschaltung von VMware** — gestaffelt, sobald die Kohorten abgeschlossen sind.

Typische Gesamtdauer vom Assessment bis zur Abschaltung: 7–10 Monate bei weniger als 100 VMs, 10–16 Monate bei 100–500 und 16–25 Monate bei 500–2000 VMs. Treiber ist selten die reine Kopiergeschwindigkeit — es sind die Regressionstests und die Parallelbetriebsfenster, denen die Verantwortlichen der Anwendungen zustimmen.

## Wann der Vergleich zählt

Diese Detailtiefe ist hilfreich, wenn:

- ein Architektur-Review läuft
- die Umsetzung in Phase 2 geplant wird
- konkrete betriebliche Fragen anstehen (Storage-Performance, Netzwerklatenz usw.)
- Schulungen für das Team geplant werden

Für eine Bewertung auf höherer Ebene ist **[VMware-Alternative](/de/alternativen/vmware-alternative/)** der passendere Einstieg.
