---
title: "Cozystack v0.11: S3 Buckets, Better Tenant Isolation and UI Enhancements"
seo_title: "Cozystack v0.11: S3 buckets and tenant isolation"
description: "The Cozystack v0.11 release is now available for download, installation, or updating current installations."
date: "2024-08-15"
cover_image: "/img/blog/medium/cozystack-v0-11/01.jpg"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "Cilium", "Talos", "LINSTOR", "Multi-tenancy"]
language: "en"
source_url: "https://medium.com/@tym83/cozystack-v0-11-76ab57a84842"
companion_landing: "/products/cozystack-enterprise-support/"
companion_label: "Need SLA-backed support for Cozystack? See enterprise support →"
---




The [Cozystack v0.11 release](https://github.com/aenix-io/cozystack/releases/tag/v0.11.0) is now available for download, installation, or updating current installations.

![Cozystack v0.11 release announcement banner](/img/blog/medium/cozystack-v0-11/01.jpg)

**Key changes:**
 — **Added S3 support.** Implemented the basic SeaweedFS functionality in Cozystack. Developed a Kubernetes-COSI driver for automatic S3 bucket provisioning. Added support for automatic volume resizing in the SeaweedFS chart.
 — **Network isolation between tenants.** Significant work was done to enhance network isolation between tenants, bugs were fixed, and network policies were completely revamped.
 — **UI update.** All service icons have been replaced. The dashboard has been redesigned to display only the necessary information in ResourceView. There is now an option to specify which htcehcs to display by listing them in a special role -dashboard-resources.
 — **Added a ******[Development Guide section](https://cozystack.io/docs/development) to the documentation and updated [the installation guide for Hetzner](https://cozystack.io/docs/talos/installation/hetzner).
 — **Cilium updated to v1.16**, which includes [our patch](https://github.com/cilium/cilium/pull/32730) for automatic device detection.
 — **Resolved garbage collector issues** in tenant Kubernetes clusters.
 — **Fixed issues** with forwarding HTTP and HTTPS traffic using ingress in tenant Kubernetes clusters.
 — **Added snapshot-controller** and object-storage-controller.
 — **LINSTOR updated to v1.28**.
 — **Talos Linux updated to v1.7.6**.
 — **Kube-OVN** now built from the stable base.
 — **Refined the logic for substituting image digests** in values, resulting in fewer modifications to the original charts.

Join our open source community: [https://t.me/cozystack](https://t.me/cozystack).

By [Timur Tukaev](https://medium.com/@tym83) on [August 15, 2024](https://medium.com/p/76ab57a84842).

[Canonical link](https://medium.com/@tym83/cozystack-v0-11-76ab57a84842)

Exported from [Medium](https://medium.com) on May 11, 2026.
