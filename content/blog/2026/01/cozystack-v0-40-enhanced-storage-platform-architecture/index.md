---
title: "Cozystack v0.40 — Enhanced Storage & Platform Architecture"
description: "In version 0.40, we’ve focused on improving storage efficiency and platform architecture. Key updates include the LINSTOR scheduler for…"
date: "2026-01-19"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "LINSTOR", "Observability", "Storage", "etcd"]
language: "en"
source_url: "https://medium.com/@tym83/cozystack-v0-40-enhanced-storage-platform-architecture-9c5ab48abd68"
---

---

### Cozystack v0.40 — Enhanced Storage & Platform Architecture

In version 0.40, we’ve focused on improving storage efficiency and platform architecture. Key updates include the LINSTOR scheduler for smarter pod placement, SeaweedFS traffic locality, a valuesFrom configuration mechanism, LINSTOR auto-diskful, and automated versioning tools.

![image](https://cdn-images-1.medium.com/max/800/1*rjM-h-08RaKjwq9Jc9se6g.png)

### Spotlight: Optimized Pod Placement with LINSTOR Schedule

Cozystack now includes a custom Kubernetes scheduler extender to help Kubernetes make better placement decisions for pods that use LINSTOR storage. When a pod requests LINSTOR-backed storage, the scheduler communicates with the LINSTOR controller to find nodes that have local replicas of the requested volumes. This way, pods are scheduled on nodes with existing data to minimize network traffic and improve I/O performance.

The scheduler features an admission webhook that automatically routes pods that require LINSTOR CSI volumes to the custom scheduler, ensuring seamless integration with no manual config required. This feature significantly improves performance for workloads using LINSTOR storage by reducing network latency and improving data locality.

Learn more about LINSTOR in the [documentation](https://cozystack.io/docs/operations/storage/linstor/).

### SeaweedFS Traffic Locality

SeaweedFS has been upgraded to version 4.05 with new traffic locality capabilities that optimize S3 service traffic distribution. The update includes a new admin component with a web-based UI and authentication support, as well as a worker component for distributed operations. These enhancements improve S3 service performance and provide better visibility through enhanced Grafana dashboard panels for buckets, API calls, costs, and performance metrics.

The traffic locality feature ensures that S3 requests are routed to the nearest available volume servers, cutting down latency and improving overall performance for distributed storage operations. We’ve also added TLS support for management components to keep your storage operations secure.

### ValuesFrom Configuration Mechanism

Cozystack now uses FluxCD’s valuesFrom mechanism. By moving away from Helm lookup functions, we’ve made config propagation much cleaner and eliminated the need for force reconcile controllers. Configuration from ConfigMaps (cozystack, cozystack-branding, cozystack-scheduling) and namespace service references (etcd, host, ingress, monitoring, seaweedfs) is now centrally managed through a cozystack-values Secret in each namespace.

For users, this means simpler Helm templates and faster reconciliation. Configuration is now more transparent, as HelmReleases automatically pull exactly what they need from the centralized secret.

### LINSTOR Auto-diskful

The LINSTOR integration now includes automatic diskful functionality that converts diskless nodes to diskful when they hold DRBD resources in Primary state for an extended period (30 minutes). This feature addresses scenarios where workloads are scheduled on nodes without local storage replicas by automatically creating local disk replicas when needed, improving I/O performance for long-running workloads.

When enabled with cleanup options, the system can automatically remove disk replicas that are no longer needed, preventing storage waste from temporary replicas. This intelligent storage management reduces network traffic for frequently accessed data while maintaining efficient storage utilization.

### Automated Version Management Systems

Cozystack now features automated version management for PostgreSQL, Kubernetes, MariaDB, and Redis. It tracks upstream versions and provides means for automated version updates, ensuring that platform users always have access to the latest stable versions while maintaining compatibility with existing deployments.

Integrated with the Cozystack API and dashboard, these systems provide administrators with full visibility into available versions and upgrade paths. This infrastructure establishes the foundation for future automated upgrade workflows and comprehensive version compatibility management across the platform.

All changes and improvements: [v0.40.2](https://github.com/cozystack/cozystack/releases/tag/v0.40.2), [v0.40.1](https://github.com/cozystack/cozystack/releases/tag/v0.40.1), [v0.40.0](https://github.com/cozystack/cozystack/releases/tag/v0.40.0)

Huge thanks to everyone who contributed to the 0.40 line: [@IvanHunters](https://github.com/IvanHunters), [@insignia96](https://github.com/insignia96), [@kvaps](https://github.com/kvaps), [@lllamnyp](https://github.com/lllamnyp), [@nbykov0](https://github.com/nbykov0), [@scooby87](https://github.com/scooby87).

### Cozystack v0.39: Streamlined Management & Enhanced Telemetry

Release v0.39 focuses on consolidating platform management and boosting observability with unified monitoring dashboards. It also introduces more robust handling of storage and network resources. Major highlights include the shift to Grafana Alloy for metrics collection, improved stability, and a focus on the overall reliability of all platform components.

We’ve overhauled our monitoring stack: Grafana Alloy now replaces the previous Prometheus agent and node-exporter setup. As a more modern and versatile tool for metrics, logs, and traces, Alloy provides a more flexible way to handle telemetry. The new telemetry is built directly into the Cozystack dashboard, giving you full visibility into cluster components from the moment you install it.

All changes and improvements: [v0.39.5](https://github.com/cozystack/cozystack/releases/tag/v0.39.5), [v0.39.4](https://github.com/cozystack/cozystack/releases/tag/v0.39.4), [v0.39.3](https://github.com/cozystack/cozystack/releases/tag/v0.39.3), [v0.39.2](https://github.com/cozystack/cozystack/releases/tag/v0.39.2), [v0.39.1](https://github.com/cozystack/cozystack/releases/tag/v0.39.1)

Huge thanks to everyone who contributed to the 0.39 line!

#### Join the community

- [Telegram group](http://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) group (Get invite at [https://slack.kubernetes.io](https://slack.kubernetes.io/))

By [Timur Tukaev](https://medium.com/@tym83) on [January 19, 2026](https://medium.com/p/9c5ab48abd68).

[Canonical link](https://medium.com/@tym83/cozystack-v0-40-enhanced-storage-platform-architecture-9c5ab48abd68)

Exported from [Medium](https://medium.com) on May 11, 2026.
