---
title: "OpenStack vs Cozystack — Modernisierungsoptionen für OpenStack-Betreiber 2026"
seo_title: "OpenStack vs. Cozystack: Modernisierungswege"
description: "Wo OpenStack weiterhin überzeugt, woher der betriebliche Druck kommt und welche Modernisierungspfade Teams mit OpenStack-Erfahrung offenstehen."
slug: "openstack-vs-cozystack-modernisierung"
date: "2026-05-21"
cover_image: "/img/blog/covers/de/openstack-vs-cozystack-modernisierung.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["OpenStack", "Kubernetes", "Cozystack", "Sovereignty", "Migration"]
language: "de"
hreflang_en: "/blog/2026/05/openstack-vs-cozystack-modernization/"
companion_landing: "/de/alternativen/openstack-alternative/"
quiz:
  title: "Wissens-Check: OpenStack-Modernisierung"
  questions:
    - q: "Welche Cozystack-Komponente übernimmt die Rolle von OpenStack Neutron (Networking)?"
      options:
        - { text: "KubeVirt (Cozystack-Compute, VMs auf Kubernetes)", correct: false }
        - { text: "Cilium (eBPF-Datenpfad, ersetzt das Neutron-Networking)", correct: true }
        - { text: "LINSTOR (Block-Storage-Operator, Gegenstück zu Cinder)", correct: false }
        - { text: "Cozystack Dashboard (Self-Service-Oberfläche für Tenants, Gegenstück zu Horizon)", correct: false }
      explanation: "In der Übersetzungstabelle OpenStack→Cozystack gilt: Nova→KubeVirt, Neutron→Cilium, Cinder→LINSTOR (DRBD-repliziertes Block-Storage), Swift→SeaweedFS, Keystone→K8s RBAC + IdP, Glance→KubeVirt CDI Image Registry, Magnum→nativ (Kubernetes ist die Plattform), Heat→K8s-Operatoren + GitOps, Horizon→Cozystack Dashboard."
    - q: "Warum schrumpft laut Artikel die OpenStack-Expertise am Markt?"
      options:
        - { text: "Neue Engineers lernen Kubernetes, nicht OpenStack", correct: true }
        - { text: "Die Foundation stellt OpenStack 2027 ein (EOL)", correct: false }
        - { text: "OpenStack-Stellen sind schlechter bezahlt als Kubernetes-Plattform-Stellen", correct: false }
      explanation: "Fachkräftemangel: Der Pool an OpenStack-Expertise schrumpft. Neue Engineers werden auf Kubernetes ausgebildet, nicht auf OpenStack. Zusammen mit dem Wildwuchs an Komponenten (über 30 Services in einem typischen Deployment) und aufwendigen Upgrades ergibt das den strukturellen Druck."
    - q: "Welcher Modernisierungspfad gilt als „häufigster Weg zur vollständigen Modernisierung“?"
      options:
        - { text: "Pfad 1 — bleiben und optimieren (OpenStack unbefristet weiterbetreiben)", correct: false }
        - { text: "Pfad 2 — Kubernetes auf OpenStack (Overlay im Stil von Magnum)", correct: false }
        - { text: "Pfad 3 — paralleler Aufbau, Migration in Kohorten, danach Stilllegung", correct: true }
        - { text: "Pfad 4 — vollständiges Lift-and-Shift (Umstellung in einem Durchgang)", correct: false }
      explanation: "Pfad 3 (paralleles Deployment) ist der häufigste Weg zur vollständigen Modernisierung: Cozystack wird neben OpenStack auf neuer Hardware aufgebaut, die Workloads ziehen Kohorte für Kohorte um, und OpenStack wird stillgelegt, sobald die Kohorten abgeschlossen sind."
    - q: "Wo hat OpenStack laut Artikel weiterhin die Nase vorn?"
      options:
        - { text: "Bei NFV/DPDK/SR-IOV im Telco-Maßstab und bei vergaberechtlich vorgegebenen Behörden-Clouds", correct: true }
        - { text: "Bei Single-Tenant-Deployments im Mittelstand (5–20 Nodes)", correct: false }
        - { text: "Bei neuen KI-Workloads auf der grünen Wiese (GPU-Scheduling und Serving)", correct: false }
      explanation: "OpenStack überzeugt weiterhin bei Deployments im Telco-Maßstab (Tausende Nodes mit NFV, DPDK, SR-IOV und Hochdurchsatz-Networking) und bei großen Behörden- bzw. souveränen Clouds, in denen OpenStack per Ausschreibung vorgegeben ist, außerdem bei Organisationen mit mehr als fünf Jahren OpenStack-Expertise."
    - q: "Wie lange dauert eine OpenStack-zu-Cozystack-Migration mittlerer Größe (50–500 Hosts) insgesamt?"
      options:
        - { text: "1–2 Wochen (schnelles Replatforming vor Ort)", correct: false }
        - { text: "4–12 Monate; 12–18 Monate bei komplexen Provider-Netzwerken", correct: true }
        - { text: "Mehr als 5 Jahre (langer Parallelbetrieb beider Plattformen)", correct: false }
      explanation: "Bei mittlerer Größe (50–500 Hosts): Assessment von 14 oder 28 Tagen, Cozystack-Fundament, Migrationskohorten und Stilllegung von OpenStack. Insgesamt 4–12 Monate für ein mittelgroßes Deployment; 12–18 Monate bei komplexen Provider-Netzwerken oder OpenStack-APIs, die Mandanten direkt nutzen."
---


OpenStack ist in Telco- und Behördeninfrastrukturen nach wie vor weit verbreitet. Gleichzeitig steht es unter strukturellem Druck: Der Pool an OpenStack-Engineers schrumpft, die betriebliche Komplexität wächst mit dem Alter eines Deployments, und es gibt Kubernetes-native Alternativen, die es zum Zeitpunkt des OpenStack-Designs noch nicht gab.

## Wo OpenStack weiterhin überzeugt

- **Deployments im Telco-Maßstab** — Tausende Nodes mit telco-spezifischen Funktionen (NFV, DPDK-Integration, SR-IOV, Hochdurchsatz-Networking). Die Expertise ist etabliert, die Herstellerdistributionen sind ausgereift.
- **Behörden- und souveräne Clouds** — große OpenStack-Deployments im öffentlichen Sektor, in denen OpenStack die per Ausschreibung vorgegebene Plattform ist.
- **Bestehende Investitionen** — Organisationen, die seit mehr als fünf Jahren mit OpenStack arbeiten und tiefe Expertise aufgebaut haben. Die Kosten einer Migration können die Kosten des Weiterbetriebs übersteigen.
- **Bestimmte Funktionen** — einige OpenStack-Fähigkeiten (tiefgehende Netzwerkprogrammierbarkeit, spezielle Telco-Features) haben noch keine direkten Kubernetes-Entsprechungen.

## Woher der Druck kommt

- **Fachkräftemangel** — der Pool an OpenStack-Expertise schrumpft. Neue Engineers werden auf Kubernetes ausgebildet, nicht auf OpenStack.
- **Wildwuchs an Komponenten** — über 30 Services in einem typischen OpenStack-Deployment, jeder mit eigenem Lifecycle, eigenem Upgrade-Rhythmus und eigenen Integrationstests.
- **Aufwendige Upgrades** — Major-Upgrades von OpenStack sind betrieblich nach wie vor schwergewichtig.
- **Zersplitterte Herstellerdistributionen** — Red Hat OSP, Mirantis, Canonical und andere, jede mit eigenen Vorstellungen und eigenem Supportmodell.

## Modernisierungspfade

Für OpenStack-Betreiber, die über eine Modernisierung nachdenken:

### Pfad 1: bleiben und optimieren
OpenStack weiterbetreiben und in die Betriebspraxis investieren (Helm-basierte Deployments, GitOps, Automatisierung). Richtig, wenn die OpenStack-Expertise tief ist und die Kosten einer Migration ihren Nutzen übersteigen.

### Pfad 2: Kubernetes auf OpenStack
Kubernetes-Plattformen (Cozystack oder andere) als Tenant auf OpenStack betreiben. Das fügt eine weitere Plattformschicht hinzu; manche Teams halten diesen Weg für einen schrittweisen Übergang trotzdem für praktikabel.

### Pfad 3: paralleles Deployment
Cozystack neben OpenStack auf neuer Hardware aufbauen. Workloads Kohorte für Kohorte migrieren. OpenStack stilllegen, sobald die Kohorten abgeschlossen sind. Der häufigste Weg zur vollständigen Modernisierung.

### Pfad 4: vollständiges Lift-and-Shift auf Kubernetes
Der aggressive Weg — die OpenStack Control Plane durch ein Kubernetes-basiertes Gegenstück (Cozystack) ersetzen. Höheres Risiko, schnelleres Ergebnis.

## Cozystack-Architektur für Teams mit OpenStack-Hintergrund

Einige hilfreiche Entsprechungen:

| OpenStack | Cozystack |
|---|---|
| Nova | KubeVirt |
| Neutron | Cilium |
| Cinder | LINSTOR (DRBD-repliziertes Block-Storage) |
| Swift | SeaweedFS (S3-kompatibel) |
| Keystone | Kubernetes RBAC + Anbindung an den Workforce-IdP |
| Glance | KubeVirt CDI Image Registry |
| Magnum | Nativ — Kubernetes ist die Plattform |
| Heat | Kubernetes-Operatoren + GitOps |
| Horizon | Cozystack Dashboard |
| Ceilometer | VictoriaMetrics + VictoriaLogs |
| Trove | Managed Databases von Cozystack |
| Designate | External-DNS-Operator |
| Octavia | MetalLB / Ingress + Cilium L7 |

Die meisten OpenStack-Engineers empfinden das Betriebsmodell von Cozystack als einfacher — weniger bewegliche Teile, stärker deklarativ, integrierte Observability.

## Praktisches Vorgehen bei der Migration

Für eine OpenStack-zu-Cozystack-Migration mittlerer Größe (50–500 Hosts):

1. **Assessment (14 oder 28 Tage)** — bestehendes OpenStack-Deployment, Klassifizierung der Workloads, Zielarchitektur für Cozystack.
2. **Cozystack-Fundament** — paralleles Deployment auf neuer oder umgewidmeter Hardware.
3. **Migrationskohorten** — die Workloads ziehen Kohorte für Kohorte um. Images werden über KVM→KubeVirt migriert.
4. **Stilllegung von OpenStack** — gestaffelt, sobald die Kohorten abgeschlossen sind.

Gesamtdauer: 4–12 Monate für ein mittelgroßes Deployment; 12–18 Monate bei komplexen Provider-Netzwerken oder OpenStack-APIs, die Mandanten direkt nutzen.
