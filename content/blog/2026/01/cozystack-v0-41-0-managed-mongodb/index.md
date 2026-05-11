---
title: "Cozystack v0.41.0 — managed MongoDB"
description: "This version features MongoDB as a new managed application, significantly expanding our database offerings alongside existing PostgreSQL…"
date: "2026-01-23"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "Talos", "LINSTOR", "Observability", "etcd"]
language: "en"
cover_image: "https://cdn-images-1.medium.com/max/1200/1*PKML-xY94j4iWwjUpKo1Yg.png"
source_url: "https://medium.com/@tym83/cozystack-v0-41-0-managed-mongodb-d93ce116eb88"
---

---

### Cozystack v0.41.0 — managed MongoDB

This version features MongoDB as a new managed application, significantly expanding our database offerings alongside existing PostgreSQL, MySQL, and Redis services. This release also brings crucial stability enhancements for core Kubernetes components, storage system improvements, and updated documentation.

![image](https://cdn-images-1.medium.com/max/800/1*PKML-xY94j4iWwjUpKo1Yg.png)

### Spotlight: MongoDB Managed Application.

Cozystack now offers MongoDB as a robust, fully managed database service. Users can now deploy production-ready MongoDB instances through the application catalog. The service provides enterprise-grade capabilities such as automated ReplicaSet configuration for high availability, seamless integration with Cozystack’s storage backends to ensure data persistence, full control over resource allocation (configurable CPU, memory, and storage), and native monitoring integration.

You can deploy MongoDB through the Cozystack dashboard or using the standard application deployment workflow.

### Improvements

**[linstor] Update piraeus-server patches with critical fixes:** Backported critical patches to piraeus-server that address storage stability issues and improve DRBD resource handling. These patches fix edge cases in device management and ensure more reliable storage operations ([@kvaps](https://github.com/kvaps) in [#1850](https://github.com/cozystack/cozystack/pull/1850), [#1852](https://github.com/cozystack/cozystack/pull/1852)).

**[linstor] Refactor node-level RWX validation:** Refactored the node-level ReadWriteMany (RWX) validation logic in LINSTOR CSI. The validation has been moved to the CSI driver level with a custom linstor-csi image build, providing more reliable RWX volume handling and clearer error messages when RWX requirements cannot be satisfied ([@kvaps](https://github.com/kvaps) in [#1856](https://github.com/cozystack/cozystack/pull/1856), [#1857](https://github.com/cozystack/cozystack/pull/1857)).

**[kubernetes] Increase default apiServer resourcesPreset to large:** Increased the default resource preset for kube-apiserver to large to ensure more reliable operation under higher workloads and prevent resource constraints ([@kvaps](https://github.com/kvaps) in [#1875](https://github.com/cozystack/cozystack/pull/1875), [#1882](https://github.com/cozystack/cozystack/pull/1882)).

**[kubernetes] Increase kube-apiserver startup probe threshold:** Increased the startup probe threshold for kube-apiserver to allow more time for the API server to become ready, especially in scenarios with slow storage or high load ([@kvaps](https://github.com/kvaps) in [#1876](https://github.com/cozystack/cozystack/pull/1876), [#1883](https://github.com/cozystack/cozystack/pull/1883)).

**[etcd] Increase probe thresholds for better recovery:** Increased etcd probe thresholds to provide more time for recovery operations, improving cluster resilience during network issues or temporary slowdowns ([@kvaps](https://github.com/kvaps) in [#1874](https://github.com/cozystack/cozystack/pull/1874), [#1878](https://github.com/cozystack/cozystack/pull/1878)).

### Fixes

This release includes fixes to prevent buggy ReadWriteMany (RWX) validation from causing volume provisioning issues, resolves bugs in the Watch API’s resourceVersion and bookmark handling for correct API client synchronization, and corrects the display of load balancer IP addresses in the dashboard’s services view.

### Dependencies

Cilium CNI was upgraded to v1.18.6 to incorporate the latest security and performance improvements, and Talos Linux was updated to v1.11.6 with the newest security patches.

### Documentation

The documentation has been updated and made clearer as well! We added a [comprehensive guide](https://cozystack.io/docs/virtualization/cloneable-vms/) for cloning and managing virtual machines, simplified the NFS driver setup instructions, updated the installation steps for [Hetzner](https://cozystack.io/docs/install/providers/hetzner/#11-install-boot-to-talos-in-rescue-mode) and [Servers.com](https://cozystack.io/docs/install/providers/servers-com/), and [included details](https://cozystack.io/docs/install/providers/hetzner/#32-create-a-load-balancer-with-robotlb) on setting up public IPs with Hetzner RobotLB.

**All changes and improvements: **[0.41.0](https://github.com/cozystack/cozystack/releases/tag/v0.41.0), [0.41.1](https://github.com/cozystack/cozystack/releases/tag/v0.41.1), [0.41.2](https://github.com/cozystack/cozystack/releases/tag/v0.41.2)

Huge thanks to everyone who contributed to the 0.41 line: [@IvanHunters](https://github.com/IvanHunters), [@kvaps](https://github.com/kvaps), [@sircthulhu](https://github.com/sircthulhu), [@matthieu-robin](https://github.com/matthieu-robin)

#### Join the community

- [Telegram group](http://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) group (Get invite at [https://slack.kubernetes.io](https://slack.kubernetes.io/))

By [Timur Tukaev](https://medium.com/@tym83) on [January 23, 2026](https://medium.com/p/d93ce116eb88).

[Canonical link](https://medium.com/@tym83/cozystack-v0-41-0-managed-mongodb-d93ce116eb88)

Exported from [Medium](https://medium.com) on May 11, 2026.
