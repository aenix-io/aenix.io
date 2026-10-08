---
title: "RWX-Volumes (ReadWriteMany) in Cozystack — nativer Shared Storage für Ihre Workloads"
description: "Seit Cozystack v1.0 gibt es ReadWriteMany-Volumes (RWX) von Haus aus: Mehrere Pods und VMs binden dasselbe Volume gleichzeitig ein, ohne externes NFS."
slug: "rwx-readwritemany-volumes-cozystack-shared-storage"
date: "2026-04-07"
cover_image: "/img/blog/covers/de/rwx-readwritemany-volumes-cozystack-shared-storage.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Platform Engineering", "CNCF", "Storage", "DevOps", "Kubernetes", "Cozystack"]
language: "de"
hreflang_en: "/blog/2026/04/rwx-readwritemany-volumes-in-cozystack-native-shared-storage-for-your-workloads/"
quiz:
  title: "Wissens-Check: RWX-Volumes in Cozystack"
  questions:
    - q: "Ab welcher Cozystack-Version werden RWX-Volumes (ReadWriteMany) von Haus aus unterstützt?"
      options:
        - { text: "v1.0", correct: true }
        - { text: "v0.20", correct: false }
        - { text: "v2.0", correct: false }
      explanation: "Seit Cozystack v1.0 lassen sich ReadWriteMany-Persistent-Volumes (RWX) von Haus aus nutzen. Mehrere Pods und VMs können dasselbe Volume gleichzeitig einbinden."
    - q: "Welcher Technologie-Stack steckt unter der Haube hinter RWX?"
      options:
        - { text: "Ein gemeinsamer NFSv4-Server pro Cluster, der auf einem Control-Plane-Node läuft und in jeden Tenant-Namespace exportiert wird", correct: false }
        - { text: "iSCSI-Exporte mit Multipath über einen gemeinsamen LVM-Pool, wobei Volumes am Target pro Tenant abgeschottet werden", correct: false }
        - { text: "Ein eigener NFS-Server pro RWX-PVC auf repliziertem Block-Storage, isoliert per CiliumNetworkPolicy", correct: true }
      explanation: "Der kubevirt-csi-driver stellt für jeden RWX-PVC einen eigenen NFS-Server bereit, gestützt auf per DRBD replizierten Block-Storage (LINSTOR). CiliumNetworkPolicy sorgt für die Trennung des Traffics zwischen Tenants."
    - q: "Wie fordert ein Tenant ein RWX-Volume an?"
      options:
        - { text: "Er legt einen Standard-PVC mit ReadWriteMany und storageClassName nfs an", correct: true }
        - { text: "Er eröffnet ein Ticket beim Plattform-Team, damit ein Operator die Freigabe einrichtet", correct: false }
        - { text: "Er nutzt ein proprietäres, nur Admins vorbehaltenes CRD, das mit dem Operator ausgeliefert wird", correct: false }
      explanation: "Tenants legen einen Standard-PVC mit accessModes: [ReadWriteMany] und storageClassName: nfs an. Externe NFS-Infrastruktur ist nicht nötig — alles läuft innerhalb von Cozystack."
    - q: "Welcher Anwendungsfall wird NICHT als durch RWX ermöglicht genannt?"
      options:
        - { text: "Deployments mit mehreren Replikas, die sich persistenten Zustand teilen", correct: false }
        - { text: "Live-Migration von GPUs zwischen physischen Hosts", correct: true }
        - { text: "Gemeinsame Daten über mehrere VMs in Tenant-K8s-Clustern", correct: false }
        - { text: "Snapshots, Erweiterung und Klonen pro Volume", correct: false }
      explanation: "RWX ermöglicht: Deployments mit mehreren Replikas und gemeinsamem persistentem Zustand; gemeinsame Daten über mehrere VMs in Tenant-K8s-Clustern; Snapshots, Erweiterung und Klonen pro Volume; keine externe NFS-Infrastruktur. Die Live-Migration von GPUs ist eine davon unabhängige, branchenweite Einschränkung."
    - q: "Wie beschreibt der Artikel in dieser Ankündigung, was Cozystack ist?"
      options:
        - { text: "Ein lizenziertes, rein kommerzielles Orchestrierungsprodukt", correct: false }
        - { text: "Ein verwaltetes AWS-Frontend mit gehosteter Control Plane", correct: false }
        - { text: "Ein freies Open-Source-PaaS-Framework für den Aufbau von Clouds", correct: true }
      explanation: "Der Standardtext lautet: Cozystack ist eine freie Open-Source-PaaS-Plattform und ein Framework für den Aufbau von Clouds. Sie betreibt eine vollwertige Cloud auf Bare Metal mit Managed Kubernetes, VMs, Datenbanken und Storage — auf Basis bewährter CNCF-Technologien (Talos, KubeVirt, Flux CD, LINSTOR)."
---

Seit Cozystack v1.0 können Sie ReadWriteMany-Persistent-Volumes (RWX) von Haus aus nutzen. Mehrere Pods und VMs können also dasselbe Volume gleichzeitig einbinden — eine unverzichtbare Fähigkeit für gemeinsame Dateisysteme, Anwendungen mit mehreren Replikas und den Datenaustausch zwischen VMs.

![Bild](/img/blog/medium/rwx-readwritemany-volumes-in-cozystack-native-shared-storage-for-your-workloads/cover.jpg)

Unter der Haube stellt der kubevirt-csi-driver für jeden RWX-PVC einen eigenen NFS-Server bereit, gestützt auf per DRBD replizierten Block-Storage (LINSTOR); CiliumNetworkPolicy übernimmt die Isolation des Traffics. Für Tenants ist es so einfach, wie einen Standard-PVC mit accessModes: [ReadWriteMany] und storageClassName: nfs anzulegen.

*Update (September 2026, Cozystack v1.6):* Im Management-Cluster müssen RWX-Volumes auf einer DRBD-gestützten LINSTOR-StorageClass liegen — linstor-csi lehnt RWX auf Klassen ohne DRBD ab. Soll stattdessen ein bestehender externer NFS-Export eingebunden werden, übernimmt das das optionale Paket `cozystack.nfs-driver` (csi-driver-nfs). Siehe die aktuelle [Storage-Dokumentation](https://cozystack.io/docs/v1.6/storage/).

Was das ermöglicht:
→ Deployments mit mehreren Replikas, die sich persistenten Zustand teilen
→ Gemeinsame Daten über mehrere VMs in Tenant-Kubernetes-Clustern
→ Snapshots, Erweiterung und Klonen von Volumes — alles pro Volume unterstützt
→ Keine externe NFS-Infrastruktur nötig — alles läuft innerhalb von Cozystack

Was ist Cozystack? Cozystack ist eine freie Open-Source-PaaS-Plattform und ein Framework für den Aufbau von Clouds. Damit betreiben Sie eine vollwertige Cloud-Plattform auf Bare Metal mit Managed Kubernetes, VMs, Datenbanken und Storage — alles auf Basis bewährter CNCF-Technologien wie Talos Linux, KubeVirt, Flux CD und LINSTOR.

Dokumentation: [https://cozystack.io/docs/v1.6/storage/nfs/](https://cozystack.io/docs/v1.6/storage/nfs/)
Feature-PR: [https://github.com/cozystack/cozystack/pull/2042](https://github.com/cozystack/cozystack/pull/2042)

— -
Website: [https://cozystack.io](https://cozystack.io)
GitHub: [https://github.com/cozystack/cozystack](https://github.com/cozystack/cozystack)

---

Dieser Beitrag ist eine deutsche Fassung des Artikels [RWX (ReadWriteMany) volumes in Cozystack — native shared storage for your workloads](https://blog.aenix.io/rwx-readwritemany-volumes-in-cozystack-native-shared-storage-for-your-workloads-485de0775faa), zuerst erschienen bei [Ænix](https://blog.aenix.io) auf Medium.
