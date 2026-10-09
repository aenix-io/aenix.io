---
title: "Cozystack v0.11: S3-Buckets, bessere Tenant-Isolation und Verbesserungen an der Oberfläche"
seo_title: "Cozystack v0.11: S3-Buckets und Tenant-Isolation"
description: "Cozystack v0.11 steht zum Download, zur Installation und zum Update bestehender Installationen bereit: S3-Buckets, bessere Tenant-Isolation, neue Oberfläche."
slug: "cozystack-v0-11-s3-buckets-tenant-isolation"
date: "2024-08-15"
cover_image: "/img/blog/covers/de/cozystack-v0-11-s3-buckets-tenant-isolation.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "Cilium", "Talos", "LINSTOR", "Multi-tenancy"]
language: "de"
hreflang_en: "/blog/2024/08/cozystack-v0-11/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack mit SLA ansehen →"
---




Das [Release Cozystack v0.11](https://github.com/aenix-io/cozystack/releases/tag/v0.11.0) steht jetzt zum Download, zur Installation und zum Update bestehender Installationen bereit.

![Banner zur Ankündigung des Release Cozystack v0.11](/img/blog/medium/cozystack-v0-11/01.jpg)

**Die wichtigsten Änderungen:**
 — **S3-Unterstützung hinzugefügt.** Die grundlegende Funktionalität von SeaweedFS ist jetzt in Cozystack umgesetzt. Wir haben einen Kubernetes-COSI-Treiber für die automatische Bereitstellung von S3-Buckets entwickelt. Das SeaweedFS-Chart unterstützt jetzt das automatische Vergrößern von Volumes.
 — **Netzwerkisolation zwischen Tenants.** Wir haben viel Arbeit in eine bessere Netzwerkisolation zwischen Tenants gesteckt, Fehler behoben und die Network Policies komplett überarbeitet.
 — **Neue Oberfläche.** Alle Service-Icons wurden ersetzt. Das Dashboard wurde so umgestaltet, dass es in ResourceView nur noch die nötigen Informationen anzeigt. Welche Elemente angezeigt werden, lässt sich jetzt festlegen, indem man sie in einer speziellen Rolle -dashboard-resources auflistet.
 — **Neuer Abschnitt** [Development Guide](https://cozystack.io/docs/development) in der Dokumentation und aktualisierte [Installationsanleitung für Hetzner](https://cozystack.io/docs/talos/installation/hetzner).
 — **Cilium auf v1.16 aktualisiert**, inklusive [unseres Patches](https://github.com/cilium/cilium/pull/32730) für die automatische Geräteerkennung.
 — **Probleme mit dem Garbage Collector** in Tenant-Kubernetes-Clustern behoben.
 — **Probleme behoben** bei der Weiterleitung von HTTP- und HTTPS-Traffic über Ingress in Tenant-Kubernetes-Clustern.
 — **snapshot-controller** und object-storage-controller hinzugefügt.
 — **LINSTOR auf v1.28 aktualisiert**.
 — **Talos Linux auf v1.7.6 aktualisiert**.
 — **Kube-OVN** wird jetzt aus der stabilen Basis gebaut.
 — **Logik zum Ersetzen von Image-Digests** in den Values verfeinert, sodass die Original-Charts weniger angepasst werden müssen.

Werden Sie Teil unserer Open-Source-Community: [https://t.me/cozystack](https://t.me/cozystack).

Von [Timur Tukaev](https://medium.com/@tym83) am [15. August 2024](https://medium.com/p/76ab57a84842).

[Kanonischer Link](https://medium.com/@tym83/cozystack-v0-11-76ab57a84842)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
