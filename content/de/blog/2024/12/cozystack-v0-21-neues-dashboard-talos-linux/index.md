---
title: "Cozystack v0.21: Neues Benutzer-Dashboard, Talos-Linux-Updates und mehr"
seo_title: "Cozystack v0.21: neues Dashboard und Talos Linux"
description: "Cozystack v0.21 stellt das Dashboard von FluxCD-Ressourcen auf die Cozystack-API um, sodass Nutzer granulare Rechte erhalten, und aktualisiert Talos Linux."
slug: "cozystack-v0-21-neues-dashboard-talos-linux"
date: "2024-12-28"
cover_image: "/img/blog/covers/de/cozystack-v0-21-neues-dashboard-talos-linux.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "Talos", "LINSTOR", "Multi-tenancy", "Observability"]
language: "de"
hreflang_en: "/blog/2024/12/introducing-the-pre-new-year-release-of-open-source-platform-cozystack-v0-21/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Cozystack-Support mit SLA gesucht? Enterprise-Support ansehen →"
---

Das Dashboard arbeitet jetzt direkt mit der Cozystack-API, statt auf FluxCD-Ressourcen aufzusetzen. Damit bietet die Plattform eine komfortable grafische Oberfläche und fügt sich zugleich in das Standard-RBAC-Modell von Kubernetes ein, mit dem sich Berechtigungen für Deployments steuern lassen.

![Release Cozystack v0.21](/img/blog/medium/introducing-the-pre-new-year-release-of-open-source-platform-cozystack-v0-21/cover.png)

Jeder Tenant enthält jetzt vier Standardgruppen:
`view`: nur Lesezugriff.
`use`: Zugriff auf virtuelle Maschinen und die Nutzung von Services.
`admin`: darf zentrale Services bereitstellen (MySQL, PostgreSQL, Redis, Kubernetes, virtuelle Maschinen usw.).
`super-admin`: verwaltet untergeordnete Tenants und stellt Komponenten auf Service-Ebene bereit (Monitoring, etcd, Ingress, SeaweedFS usw.).

Gruppenmitglieder greifen sowohl über Kubernetes als auch über das Dashboard auf die Plattform zu.

Auch wenn wir an einem API-zentrierten Ansatz festhalten, bleibt das Dashboard eine zentrale Funktion. Nutzer können Services damit schnell grafisch konfigurieren, nachvollziehen, wie diese auf die API abgebildet werden, und anschließend zu Infrastructure as Code (IaC) übergehen.

![Das neue Cozystack-Benutzer-Dashboard](/img/blog/medium/introducing-the-pre-new-year-release-of-open-source-platform-cozystack-v0-21/02.jpg)

**Die wichtigsten Verbesserungen am Dashboard**

- Direkte Interaktion mit der Cozystack-API statt mit FluxCD-Ressourcen.
- Die Anwendungsnamen im Katalog entsprechen jetzt dem jeweiligen Kind in der Cozystack-API.
- Anwendungspräfixe entfallen – jede Anwendung verwendet ihr eigenes Kind.
- Namespaces werden nach dem Präfix tenant- gefiltert, sodass nur nutzerspezifische Namespaces angezeigt und System-Namespaces ausgeblendet werden.
- Behobene Darstellungsfehler bei Icons, wenn OIDC aktiviert ist.
- Kosmetische Verbesserungen, darunter korrigierte Links zur Dokumentation.

**Weitere Änderungen**

- Autorisierung für Redis hinzugefügt.
- Tenant-Rollen und Role Bindings überarbeitet; die Berechtigungen für HelmRelease-Ressourcen und die Gruppe kubeapps-admin wurden entfernt.
- Startprobleme von Grafana behoben und die Plugin-URL für VictoriaLogs aktualisiert.
- OpenAPI-Spezifikationen für List-Ressourcen in der Cozystack-API aktualisiert.
- Talos Linux auf v1.8.4 aktualisiert.
- linstor-ha-controller auf v1.2.3 aktualisiert; damit sind Probleme mit der Hochverfügbarkeit virtueller Maschinen behoben.
- Die Datenbankgröße für Grafana ist jetzt konfigurierbar.
- Verbessertes Ressourcenmanagement für VMCluster-Ressourcen.

*Weitere Details finden Sie im Projekt auf* ***[GitHub](https://github.com/aenix-io/cozystack/releases/tag/v0.21.0)***.

**Treten Sie unserer Community bei:**

- [Telegram](https://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)
- [Kalender der Community-Meetings](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

P.S. Viel Spaß beim Ausprobieren von Cozystack v0.21! Ihre Freunde und Familie werden es Ihnen danken, wenn Sie Cozystack nicht ausgerechnet am Silvesterabend aktualisieren.

Von [Timur Tukaev](https://medium.com/@tym83) am [28. Dezember 2024](https://medium.com/p/22e84c65b29d).

[Kanonischer Link](https://medium.com/@tym83/introducing-the-pre-new-year-release-of-open-source-platform-cozystack-v0-21-22e84c65b29d)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
