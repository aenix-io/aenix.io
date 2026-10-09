---
title: "Cozystack v0.21: New User Dashboard, Talos Linux Updates and More"
seo_title: "Cozystack v0.21: new user dashboard and Talos"
description: "Cozystack v0.21 moves the dashboard onto the Cozystack API instead of FluxCD resources, so users get granular access, and updates Talos Linux."
date: "2024-12-28"
author: "Timur Tukaev"
hreflang_de: "/de/blog/2024/12/cozystack-v0-21-neues-dashboard-talos-linux/"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "Talos", "LINSTOR", "Multi-tenancy", "Observability"]
language: "en"
cover_image: "/img/blog/medium/introducing-the-pre-new-year-release-of-open-source-platform-cozystack-v0-21/cover.png"
source_url: "https://medium.com/@tym83/introducing-the-pre-new-year-release-of-open-source-platform-cozystack-v0-21-22e84c65b29d"
companion_landing: "/products/cozystack-enterprise-support/"
companion_label: "Need SLA-backed support for Cozystack? See enterprise support →"
---



The dashboard now works directly with the Cozystack API instead of relying on FluxCD resources. This enhancement enables the platform to provide a user-friendly graphical interface while integrating with Kubernetes’ standard RBAC model for managing deployment permissions.

![Cozystack v0.21 release](/img/blog/medium/introducing-the-pre-new-year-release-of-open-source-platform-cozystack-v0-21/cover.png)

Each tenant now includes four default groups:
`view`: Read-only access.
`use`: Access to virtual machines and service usage.
`admin`: Ability to deploy core services (MySQL, PostgreSQL, Redis, Kubernetes, virtual machines, etc.).
`super-admin`: Manage child tenants and deploy service-level components (monitoring, etcd, ingress, seaweedfs, etc.).

Group members can access the platform via both Kubernetes and the dashboard.

While we maintain an API-driven philosophy, the dashboard remains an essential feature. It allows users to quickly configure services through a graphical interface, explore how they map to the API, and then transition to Infrastructure as Code (IaC) practices.

![New Cozystack user dashboard](/img/blog/medium/introducing-the-pre-new-year-release-of-open-source-platform-cozystack-v0-21/02.jpg)

**Key Dashboard Improvements
**- Direct interaction with the Cozystack API instead of FluxCD resources.
- Application names in the catalog now reflect their corresponding Kind in the Cozystack API.
- Application prefixes removed — each app now uses its own Kind.
- Namespaces filtered by the tenant- prefix to display only user-specific namespaces while hiding system namespaces.
- Fixed icon rendering issues when OIDC is enabled.
- Cosmetic improvements, including corrected links to documentation.

**Additional Updates
**- Added authorization support for Redis.
- Refactored tenant roles and role bindings, removing permissions for HelmRelease resources and the kubeapps-admin group.
- Fixed Grafana startup issues and updated the plugin URL for VictoriaLogs.
- Updated OpenAPI specifications for List resources in the Cozystack API.
- Talos Linux upgraded to v1.8.4.
- linstor-ha-controller updated to v1.2.3, resolving high availability issues for virtual machines.
- Introduced configurable database size for Grafana.
- Enhanced resource management for VMCluster resources.

*For more details, check out the project on ***[GitHub](https://github.com/aenix-io/cozystack/releases/tag/v0.21.0)*.*

**Feel free to join our community spaces:
**- [Telegram](https://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)
- [Community Meeting Calendar](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

P.S. Happy exploring with Cozystack v0.21!  Your friends and loved ones will appreciate it if you avoid updating Cozystack on the evening of December 31st!

By [Timur Tukaev](https://medium.com/@tym83) on [December 28, 2024](https://medium.com/p/22e84c65b29d).

[Canonical link](https://medium.com/@tym83/introducing-the-pre-new-year-release-of-open-source-platform-cozystack-v0-21-22e84c65b29d)

Exported from [Medium](https://medium.com) on May 11, 2026.
