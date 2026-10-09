---
title: "FreeIPA aus einem CentOS-7-LXC-Container auf Rocky Linux migrieren und neuer COSI-Treiber für SeaweedFS"
seo_title: "FreeIPA auf Rocky Linux und COSI-Treiber für SeaweedFS"
description: "Zwei Neuigkeiten von Ænix: ein Bericht über den Umzug von FreeIPA aus einem CentOS-7-LXC-Container auf Rocky Linux und ein neuer COSI-Treiber für SeaweedFS."
slug: "freeipa-migration-rocky-linux-cosi-treiber-seaweedfs"
date: "2024-08-01"
cover_image: "/img/blog/covers/de/freeipa-migration-rocky-linux-cosi-treiber-seaweedfs.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Cozystack", "Migration", "Storage", "FreeIPA"]
language: "de"
hreflang_en: "/blog/2024/08/migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-and-new-cosi-driver-for-seaweedfs/"
quiz:
  title: "Testen Sie Ihr Wissen: COSI-Treiber für SeaweedFS"
  questions:
    - q: "Wofür steht COSI und was leistet es?"
      options:
        - { text: "Common Open Storage Init: ein Bootstrap-Framework für S3 im Cluster", correct: false }
        - { text: "Centralized Object Storage Index: ein Verzeichnis von S3-Endpunkten", correct: false }
        - { text: "Container Object Storage Interface: eine Kubernetes-API für S3-Buckets", correct: true }
      explanation: "COSI steht für Container Object Storage Interface für Kubernetes. Es führt die Ressourcen BucketClaim, Bucket und BucketAccess für die deklarative Bereitstellung von S3-Buckets und die Zugriffsverwaltung ein, nach dem Vorbild von PVCs."
    - q: "Welche drei CRDs führt COSI ein?"
      options:
        - { text: "BucketClaim, Bucket, BucketAccess", correct: true }
        - { text: "Pod, Service, Deployment", correct: false }
        - { text: "Tenant, Namespace, ResourceQuota", correct: false }
      explanation: "BucketClaim (Anforderung), Bucket (bereitgestellter Bucket), BucketAccess (Zugriffsbindung). Das Muster entspricht PersistentVolumeClaim/PersistentVolume/Secret bei Storage."
    - q: "Was hat Ænix mit dem selbst entwickelten COSI-Treiber für SeaweedFS gemacht?"
      options:
        - { text: "Ihn proprietär in der Cozystack-Distribution behalten", correct: false }
        - { text: "Ihn als Open Source veröffentlicht und der SeaweedFS-Community geschenkt", correct: true }
        - { text: "Den Code als Teil von OpenShift Data an Red Hat verkauft", correct: false }
      explanation: "Ænix hat den COSI-Treiber als Open Source entwickelt und der SeaweedFS-Community geschenkt. Das Projekt liegt jetzt unter der SeaweedFS-Organisation, und das offizielle SeaweedFS-Chart wurde um COSI-Unterstützung erweitert."
    - q: "Warum war die geplante S3-Bucket-Unterstützung in Cozystack für diesen Treiber relevant?"
      options:
        - { text: "Reiner Zufall, die beiden Projekte entwickelten sich unabhängig", correct: false }
        - { text: "Cozystack-Tenants können Buckets jetzt direkt aus Kubernetes bestellen", correct: true }
        - { text: "Der Treiber ersetzt SeaweedFS vollständig durch eine neue Storage-Schicht", correct: false }
      explanation: "Ænix arbeitete an der S3-Bucket-Unterstützung in Cozystack (PR #131). Mit dem COSI-Treiber können Cozystack-Tenants Buckets automatisch direkt aus Kubernetes bestellen, statt sie außerhalb bereitzustellen."
    - q: "Worum ging es im zugehörigen Artikel derselben Ankündigung?"
      options:
        - { text: "Einen Rückblick auf die letzte KubeCon EU", correct: false }
        - { text: "Die Release Notes und Highlights von Cozystack v1.0", correct: false }
        - { text: "Die Migration von FreeIPA aus CentOS-7-LXC auf Rocky Linux", correct: true }
      explanation: "Der erste Teil des Beitrags verweist auf einen ausführlichen Artikel von Andrei Kvapil zur FreeIPA-Migration: ein LXC-Container auf CentOS 7, der seit mehreren Monaten nicht funktionierte, das Debugging von Zertifikaten und die Migration auf Rocky Linux."
---




Hallo zusammen! Wir freuen uns, Ihnen unsere neuesten Neuigkeiten vorzustellen.

**Erstens haben wir einen neuen Artikel veröffentlicht**, in dem es um das Update einer veralteten FreeIPA-Installation in einem großen Unternehmen geht. Diese FreeIPA-Instanz lief in einem LXC-Container auf CentOS 7 und funktionierte seit mehreren Monaten nicht mehr. Unser Gründer Andrei Kvapil hat das Problem wie ein Ninja gelöst.

Details: [FreeIPA tips and tricks: migrating FreeIPA from CentOS 7 LXC to Rocky Linux](/blog/2024/08/freeipa-tips-and-tricks-migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-debugging/) (auf Englisch)

**Zweitens stellen wir Ihnen gern den neuen COSI-Treiber für SeaweedFS vor**. [COSI](https://github.com/kubernetes-sigs/container-object-storage-interface) ist ein einheitliches Container Object Storage Interface für Kubernetes. Es führt [neue Ressourcen](https://github.com/seaweedfs/seaweedfs-cosi-driver/tree/main/examples) wie BucketClaim, Bucket und BucketAccess ein, mit denen sich S3-Buckets deklarativ bereitstellen und Zugriffe verwalten lassen, nach demselben Prinzip wie bei PVCs.

[Wir arbeiten daran](https://github.com/aenix-io/cozystack/pull/131), S3-Buckets in Cozystack zu unterstützen, und mit diesem Treiber können Sie Buckets automatisch direkt aus Kubernetes bestellen.

Auch dieses Projekt haben wir als Open Source entwickelt und schenken es nun der SeaweedFS-Community. Es ist bereits unter das Dach der Organisation umgezogen, und das offizielle SeaweedFS-Chart wurde um COSI-Unterstützung erweitert.

Details: [https://github.com/seaweedfs/seaweedfs-cosi-driver](https://github.com/seaweedfs/seaweedfs-cosi-driver/)

Von [Timur Tukaev](https://medium.com/@tym83) am [1. August 2024](https://medium.com/p/be886a6de46a).

[Kanonischer Link](https://medium.com/@tym83/migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-and-new-cosi-driver-for-seaweedfs-be886a6de46a)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
