---
title: "Cozystack v0.20: Terraform, Keycloak sowie mehr Stabilität und Sicherheit"
seo_title: "Cozystack v0.20: Terraform, Keycloak und Stabilität"
description: "Das Release v0.20 von Cozystack setzt auf mehr Stabilität, behebt eine große Zahl von Fehlern und bringt neue Funktionen wie Terraform-Support und Keycloak."
slug: "cozystack-v0-20-terraform-keycloak-stabilitaet-sicherheit"
date: "2024-12-12"
cover_image: "/img/blog/covers/de/cozystack-v0-20-terraform-keycloak-stabilitaet-sicherheit.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Multi-tenancy", "Observability", "Terraform"]
language: "de"
hreflang_en: "/blog/2024/12/cozystack-v0-20-release-terraform-keycloak-and-stability-security-improvements/"
companion_landing: "/de/produkte/cozystack-enterprise-support/"
companion_label: "Enterprise-Support für Cozystack ansehen →"
---

[Dieses Release](https://github.com/aenix-io/cozystack/releases/tag/v0.20.0) setzt den Schwerpunkt auf mehr Stabilität, behebt eine beträchtliche Zahl von Fehlern und bringt neue Funktionen mit.

![Release Cozystack v0.20](/img/blog/medium/cozystack-v0-20-release-terraform-keycloak-and-stability-security-improvements/cover.png)

## Was ist neu

- Kube-OVN wurde auf das neueste stabile Release aktualisiert.
- Verbesserte Logik im KubeVirt CCM sorgt für zuverlässigere Load Balancer in Tenant-Kubernetes-Clustern.
- Probleme mit Benutzerberechtigungen in OIDC wurden behoben.
- Es gibt jetzt eine eigene Gruppe für Cluster-Administratoren.
- Alerts und Dashboards in Grafana wurden korrigiert.
- NATS unterstützt jetzt das Aktivieren von JetStream und die Übergabe von Konfigurationsdateien.
- Neu ist Terraform-Unterstützung für die Arbeit mit unserer API.

In [v0.19](https://github.com/aenix-io/cozystack/releases/tag/v0.19.0) haben wir OIDC-Unterstützung samt Keycloak-Integration eingeführt. Weil zunächst noch Stabilitätsverbesserungen nötig waren, haben wir v0.19 nicht gesondert angekündigt. Mit diesem Release wird Keycloak zusammen mit Cozystack ausgeliefert und bietet nahtlose OIDC-Unterstützung.

## OIDC-Funktionen

- Automatisch eingerichtet mit einem Realm „Cozy“, in dem sich lokale Benutzer anlegen und externe OIDC-Provider anbinden lassen.
- Jeder Tenant erhält vier Standardgruppen, und die Tenant-Anwendung stellt eine automatisch erzeugte kubeconfig-Datei bereit, die bereits für die Authentifizierung über Keycloak konfiguriert ist.
- Unterstützung für „Keycloak as Code“ über den Keycloak Operator.
- Automatische Integration von Keycloak mit Kubernetes-Clustern und dem Kubernetes Dashboard.
- Talm wurde auf v0.6.6 aktualisiert und kann jetzt den API-Server für OIDC konfigurieren.

Weitere Details finden Sie im Projekt auf [GitHub](https://github.com/aenix-io/cozystack/releases/tag/v0.20.0).

## Treten Sie unserer Community bei:

- [Telegram](https://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)
- [Kalender der Community-Meetings](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

Von [Timur Tukaev](https://medium.com/@tym83) am [12. Dezember 2024](https://medium.com/p/55dd25335e6e).

[Kanonischer Link](https://medium.com/@tym83/cozystack-v0-20-release-terraform-keycloak-and-stability-security-improvements-55dd25335e6e)

Exportiert von [Medium](https://medium.com) am 11. Mai 2026.
