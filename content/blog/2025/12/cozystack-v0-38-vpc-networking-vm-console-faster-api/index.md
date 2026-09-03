---
title: "📎📎 Cozystack v0.38: VPC networking, VM console & faster API"
description: "This release introduces Virtual Private Cloud (VPC) support, enabling advanced networking capabilities for tenant applications. We’ve also…"
date: "2025-12-17"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "Talos", "LINSTOR", "Multi-tenancy"]
language: "en"
cover_image: "https://cdn-images-1.medium.com/max/1200/1*qaWF3O689jNB1BoAEALD4w.png"
source_url: "https://medium.com/@tym83/cozystack-v0-38-vpc-networking-vm-console-faster-api-34032464b94f"
---

---

### 📎📎 Cozystack v0.38: VPC networking, VM console & faster API

This release introduces Virtual Private Cloud (VPC) support, enabling advanced networking capabilities for tenant applications. We’ve also added VNC console support in the dashboard, made Kubernetes worker versions configurable, and delivered numerous improvements and fixes across the platform.

![image](https://cdn-images-1.medium.com/max/800/1*qaWF3O689jNB1BoAEALD4w.png)

### 🗜 Virtual Private Cloud (VPC) Networking

Cozystack v0.38.0 introduces Virtual Private Cloud (VPC) support, enabling platform administrators to create isolated network segments for tenant applications. VPCs provide network isolation and allow fine-grained control over network topology, subnets, and routing. Each VPC can contain multiple subnets, and administrators can configure subnet details including IP ranges, gateway settings, and DNS configuration.

The VPC feature integrates seamlessly with the Cozystack dashboard, allowing users to view and manage VPCs and their subnets through an intuitive interface. Subnet details are exposed in the dashboard as tables, making it easy to understand network configuration at a glance. VPC configuration is stored in ConfigMaps with predictable naming, ensuring reliable access to subnet information.

This feature is particularly valuable for multi-tenant environments where network isolation is critical, and for applications that require specific network configurations or routing rules.

### 🥁 VNC Console for Virtual Machines

The Cozystack dashboard now includes a built-in VNC console for virtual machines, enabling users to access VM console directly from the web interface without requiring external tools. This feature provides immediate access to virtual machine consoles for troubleshooting, configuration, and maintenance tasks. The VNC console integration streamlines VM management workflows and improves the user experience by keeping all VM operations within the Cozystack dashboard.

### 🪑Additional Repositories

- Introduce boot/install mode: Introduced boot/install mode in boot-to-talos tool.
- Handle valuesFiles from cozypkg.cozystack.io/values-files annotation: added support for handling valuesFiles from annotation in cozypkg.

### 📚 Docs & ecosystem updates

- New and updated [docs for VPC](https://cozystack.io/docs/networking/vpc/#service-details) networking and its configuration.
- [System resource planning](https://cozystack.io/docs/getting-started/requirements/) recommendations and storage updates.
- Improved [OpenAPI UI docs](https://cozystack.io/docs/guides/platform-stack/#openapi-ui), updated managed apps reference, [naming conventions](https://cozystack.io/docs/virtualization/vm-image/#naming-conventions-important), LINSTOR and golden image guides, and other quality-of-life documentation improvements.

### **All changes & improvements**

[v0.38.0](https://github.com/cozystack/cozystack/releases/tag/v0.38.0), [v0.38.1](https://github.com/cozystack/cozystack/releases/tag/v0.38.1), [v0.38.2](https://github.com/cozystack/cozystack/releases/tag/v0.38.2), [v0.38.3](https://github.com/cozystack/cozystack/releases/tag/v0.38.3), [v0.38.4](https://github.com/cozystack/cozystack/releases/tag/v0.38.4)

### **Huge thanks to everyone who contributed to the 0.38 line**

[@IvanHunters](https://github.com/IvanHunters), [@insignia96](https://github.com/insignia96), [@kvaps](https://github.com/kvaps), [@lllamnyp](https://github.com/lllamnyp), [@nbykov0](https://github.com/nbykov0), [@scooby87](https://github.com/scooby87)

### **Special shout-out to our first-time contributor**

[@tabu-a](https://github.com/tabu-a) — welcome aboard! 🚀

### Join the community

- [Telegram group](http://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) group (Get invite at [https://slack.kubernetes.io](https://slack.kubernetes.io))

By [Timur Tukaev](https://medium.com/@tym83) on [December 17, 2025](https://medium.com/p/34032464b94f).

[Canonical link](https://medium.com/@tym83/cozystack-v0-38-vpc-networking-vm-console-faster-api-34032464b94f)

Exported from [Medium](https://medium.com) on May 11, 2026.
