---
title: "VMware-Ablösung nach Broadcom — Leitfaden für DACH-Service-Provider, Banken und souveräne Clouds"
description: "Dies ist die ausführliche Begleitung zu unserer fokussierte Seite zur VMware-Alternative-Page. Sie führt durch den Wandel unter Broadcom, was eine glaubwürdige..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["DORA", "NIS2", "VMware", "Kubernetes", "Cozystack", "KubeVirt"]
language: "de"
companion_landing: "/de/alternativen/vmware-alternative/"
quiz:
  title: "Wissens-Check: VMware-Ablösung nach Broadcom"
  questions:
    - q: "Welche Preiserhöhungen bei VCF-Verlängerungen beobachtet der Artikel?"
      options:
        - { text: "10–25 Prozent über den bisherigen Ausgaben", correct: false }
        - { text: "Das Zwei- bis Fünffache der bisherigen Ausgaben", correct: true }
        - { text: "Das Sechs- bis Zehnfache der bisherigen Ausgaben", correct: false }
      explanation: "Verlängerungsangebote kamen mit dem Zwei- bis Fünffachen der bisherigen Ausgaben zurück, nachdem Broadcom die Dauerlizenzierung durch VCF-Abonnementpakete ersetzt hat."
    - q: "Welche Cozystack-Komponente entspricht im Mapping dem vCenter?"
      options:
        - { text: "KubeVirt, das die virtuellen Maschinen ausführt", correct: false }
        - { text: "Die Cozystack Control Plane mit Kubernetes-API und Dashboard", correct: true }
        - { text: "Cilium, das den Netzwerk-Datenpfad und die Policies trägt", correct: false }
        - { text: "LINSTOR, das den replizierten Blockspeicher bereitstellt", correct: false }
      explanation: "Im Architektur-Mapping entspricht die Cozystack Control Plane, also die Kubernetes-API zusammen mit dem Cozystack Dashboard, dem vCenter. KubeVirt ersetzt vSphere und ESXi, Cilium ersetzt NSX, LINSTOR ersetzt vSAN."
    - q: "Welche zwei Bereiche brauchen beim Wechsel zu Cozystack ein Redesign statt einer 1:1-Abbildung?"
      options:
        - { text: "Storage und CPU-Architektur", correct: false }
        - { text: "Networking und das Modell der Mandantenfähigkeit", correct: true }
        - { text: "Backup und Energiemanagement", correct: false }
      explanation: "Das Networking ist grundlegend anders — Cilium arbeitet eBPF-basiert, NSX nicht — und das Mandantenmodell ist konzeptionell anders: das Kubernetes-native Tenant CRD gegenüber den Organisationen im vCloud Director. Beides wird im Architektur-Review vor der Migration entschieden."
    - q: "In welcher Reihenfolge läuft eine echte Migration von VMware zu Cozystack?"
      options:
        - { text: "Erst das Abschalten von VMware, dann die Migration der Workloads", correct: false }
        - { text: "Discovery, paralleler Aufbau, Image-Migration, Cutover, Abschaltung", correct: true }
        - { text: "Ein Big-Bang-Cutover an einem einzigen Wochenende", correct: false }
      explanation: "Sechs Stufen: Discovery, paralleler Aufbau von Cozystack neben der bestehenden VMware-Umgebung, VM-Image-Migration, Cutover von Netz und Storage, Validierung samt DR-Cutover, dann die Abschaltung von VMware. Kein Big Bang: die Workloads ziehen in Kohorten um, jede wird parallel verifiziert."
    - q: "Wie lange dauert die Migration kleinerer Bestände unter 200 VMs mit einfachem Networking?"
      options:
        - { text: "1–2 Wochen", correct: false }
        - { text: "6–12 Wochen", correct: true }
        - { text: "2–3 Jahre", correct: false }
      explanation: "Kleinere Bestände: 6 bis 12 Wochen von Discovery bis Abschaltung. Größere und komplexere Bestände mit vCloud Director, viel NSX oder regulierten Workloads brauchen 3 bis 9 Monate in Kohorten. Treiber sind die Regressionstests und die Parallelbetriebsfenster, nicht die reine Migrationsgeschwindigkeit."
---

**Dies ist die ausführliche Begleitung zu unserer [fokussierte Seite zur VMware-Alternative-Page](/de/alternativen/vmware-alternative). Sie führt durch den Wandel unter Broadcom, was eine glaubwürdige VMware-Ablösung in der Produktion tatsächlich bedeutet, und wie eine echte Migration End-to-End abläuft.**

Nach Broadcom ist die VMware-Rechnung unkalkulierbar geworden. Subscription-only-Lizenzierung, verpflichtende VCF-Bündelung, Preiserhöhungen von 2-5× bei Verlängerung und das Ende der ewigen Lizenzen haben die Kalkulation für jedes Infrastruktur-Team grundlegend verändert.

Diese Veränderung hat einen dokumentierten Wandel ausgelöst — Service Provider, Banken, öffentlicher Sektor und KI/GPU-Betreiber bewerten Alternativen.

## Warum die VMware-Ablösung jetzt anläuft

Drei unabhängige Druckpunkte treffen die gleiche Architektur gleichzeitig:

**Kostenklippe nach dem Verlängerungszyklus.** VMware-Ausgaben, die 2020-2022 akzeptabel wirkten, haben sich über mehrere Jahre kumuliert. Verlängerungszyklen treffen jetzt auf Vorstände, die diesen Verlauf nicht genehmigt haben.

**Regulatorischer Druck.** DORA seit Januar 2025; NIS2 in der Umsetzung in den EU-Mitgliedstaaten; sektorale Regeln im Finanzdienstleistungssektor; explizite souveräne Cloud-Mandate in Deutschland (BSI C5), Frankreich (SecNumCloud) und anderen Märkten.

**KI-Workload-Ökonomie.** GenAI-Inferenz im großen Maßstab hat Egress-, GPU-Pricing- und Datenresidenz-Profile, die Hyperscaler nicht optimiert haben.

## Architektur-Mapping: VMware → Cozystack

| VMware/VCF-Komponente | Cozystack-Äquivalent |
|---|---|
| vSphere/ESXi | KubeVirt auf Talos |
| vCenter | Cozystack Control Plane (Kubernetes API + Cozystack Dashboard) |
| vSAN | LINSTOR (DRBD) |
| NSX | Cilium (eBPF) |
| vCloud Director | Tenant CRD + Cozystack Dashboard |
| vRealize/Aria Operations | VictoriaMetrics + VictoriaLogs + Grafana |
| Site Recovery Manager | Velero + S3 + PostgreSQL PITR |
| Tanzu Kubernetes Grid | Tenant Kubernetes (nativ) |
| VMware Cloud Foundation | Cozystack (vollständiges Stack-Äquivalent) |

Zwei Bereiche erfordern Redesign anstelle eines 1:1-Mappings: **Networking** (Cilium ist grundlegend anders als NSX) und **Multi-Mandanten-Modell** (Cozystack-Mandanten sind Kubernetes-nativ).

## Wie eine echte VMware-Migration abläuft

Migrationspfade sind workload-abhängig. Für die meisten Teams ist dies die realistische Reihenfolge.

### 1. Discovery und Assessment
Strukturierte Bewertung des aktuellen vSphere/VCF/vCD-Bestands: Workload-Anzahl, OS-Mix, vSAN/NSX-Abhängigkeiten, Integrationen, Mandantenmodell.

### 2. Cozystack parallel deployed
Cozystack wird auf neuer oder umgewidmeter Hardware neben dem bestehenden VMware-Bestand installiert. Kein Big-Bang-Cutover.

### 3. VM-für-VM-Image-Migration zu KubeVirt
Für die meisten VMs ist die Migration eine Disk-Image-Kopie. KubeVirt CDI plus ein Set spezieller Migrations-Skripte. Für Windows-VMs läuft ein automatischer Cleanup-Pass vor dem Boot auf KubeVirt.

### 4. Netzwerk- und Speicher-Cutover
Networking: VLAN-Mapping in Cilium mit Policy-Parität gegen NSX-Regeln. Storage: Disks in LINSTOR importieren.

### 5. Validierung und DR-Cutover
Jede migrierte Workload läuft parallel auf Cozystack bis zur Validierung. DR-Pläne (Velero, PostgreSQL PITR) ersetzen SRM-Playbooks vor dem finalen Cutover.

### 6. VMware-Decommission
Lizenzen enden zu ihren eigenen Bedingungen. Hardware in den Cozystack-Cluster umgewidmet.

## Souveränität-by-Architecture

Cozystack ist Open Source unter Apache 2.0. Ihre Binaries, Ihre Hardware, Ihre Datenebene. Ænix liefert Air-Gap-Installations-Workflows und ein Beratungssupport-Modell, das keinen direkten Kunden-Umgebungszugriff erfordert.

Architektonische Implikationen:
- **Tenant CRD** — jeder Mandant ist ein Kubernetes-Objekt
- **Air-Gap-Install** unterstützt
- **Kein Phone-Home** standardmäßig deaktiviert
- **DORA/NIS2-konforme Steuerelemente** — operative Resilienz, Lieferantenrisikodokumentation
- **Ænix-Support-Modell** — Beratung + Runbooks + GitOps-PR-Review (kein kubectl-Zugriff erforderlich)

## Migrations-Zeitplan

- **Kleinere Bestände** (unter 200 VMs, einfaches Networking): 6-12 Wochen von Discovery bis Decommission
- **Größere oder komplexere Bestände** (vCD, NSX-lastig, regulierte Workloads): 3-9 Monate, in Kohorten

## Wie geht es weiter?

Für eine spezifische Bewertung Ihres VMware-Ausstiegs siehe **[fokussierte Seite zur VMware-Alternative](/de/alternativen/vmware-alternative)** oder **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.

---

*Ænix ist das Team hinter Cozystack — CNCF-Projekt, Kubernetes Certified Distribution.*

