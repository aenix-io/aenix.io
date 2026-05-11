---
title: "Cozystack v0.20 Release: Terraform, Keycloak, and Stability & Security Improvements"
description: "This release focuses on enhancing stability while addressing a significant number of bugs and introducing new features."
date: "2024-12-12"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Multi-tenancy", "Observability", "Terraform"]
language: "en"
source_url: "https://medium.com/@tym83/cozystack-v0-20-release-terraform-keycloak-and-stability-security-improvements-55dd25335e6e"
---

---

### Cozystack v0.20 Release: Terraform, Keycloak, and Stability & Security Improvements

[This release](https://github.com/aenix-io/cozystack/releases/tag/v0.20.0) focuses on enhancing stability while addressing a significant number of bugs and introducing new features.

![image](https://cdn-images-1.medium.com/max/800/1*26UVJiADy26X-QtmslpZqw.png)

### What’s new

- Kube-OVN updated to the latest stable release.
- Improved logic in KubeVirt CCM, delivering more reliable load balancers for tenant Kubernetes clusters.
- Resolved user permissions issues in OIDC.
- Added a dedicated cluster admin group.
- Fixed alerts and dashboards in Grafana.
- NATs now supports enabling JetStream and passing configuration files.
- Introduced Terraform support for interacting with our API.

In [v0.19](https://github.com/aenix-io/cozystack/releases/tag/v0.19.0), we introduced OIDC support, along with the integration of Keycloak. However, due to the need for stability improvements, we did not announce v0.19 separately. With this release, Keycloak is bundled with Cozystack, providing seamless OIDC support.

### OIDC functionality

- Automatically configured with a “Cozy” realm, allowing the creation of local users and integration with external OIDC providers.
- Each tenant receives 4 default groups, and the tenant application offers an auto-generated kubeconfig file pre-configured for authentication via Keycloak.
- Added support for Keycloak as Code using the Keycloak Operator.
- Automatic integration of Keycloak with Kubernetes clusters and the Kubernetes Dashboard.
- The Talm has been updated to v0.6.6, adding support for configuring the API Server for OIDC.

For more details, check out the project on [GitHub](https://github.com/aenix-io/cozystack/releases/tag/v0.20.0).

### Feel free to join our community spaces:

- [Telegram](https://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1)
- [Community Meeting Calendar](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

By [Timur Tukaev](https://medium.com/@tym83) on [December 12, 2024](https://medium.com/p/55dd25335e6e).

[Canonical link](https://medium.com/@tym83/cozystack-v0-20-release-terraform-keycloak-and-stability-security-improvements-55dd25335e6e)

Exported from [Medium](https://medium.com) on May 11, 2026.
