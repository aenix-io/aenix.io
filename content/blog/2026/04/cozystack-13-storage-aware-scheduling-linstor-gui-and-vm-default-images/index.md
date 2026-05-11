---
title: "Cozystack 1.3: Storage-Aware Scheduling, LINSTOR GUI, and VM Default Images"
description: "Cozystack v1.3.0 is now available. The release also rolls up every fix shipped in the v1.2.1 → v1.2.4 patch line."
date: "2026-04-27"
author: "Timur Tukaev"
type: "announcement"
topics: ["Platform Engineering", "Kubernetes", "DevOps", "Open Source", "CNCF", "Cozystack"]
language: "en"
source_url: "https://blog.aenix.io/cozystack-1-3-storage-aware-scheduling-linstor-gui-and-vm-default-images-3ad9b04a39de"
---

![image](https://cdn-images-1.medium.com/max/1024/1*lLZdb10kWsO4TwvhRA-CAg.png)

Cozystack v1.3.0 is now available. The release also rolls up every fix shipped in the v1.2.1 → v1.2.4 patch line.

This cycle pushes the platform forward in five clear directions: smarter storage placement, a managed UI for LINSTOR, a built-in catalog of VM base images, deeper application-level observability, and a complete cross-namespace VM backup-restore experience.

> ***What is Cozystack***

> *Cozystack is a comprehensive open-source platform for building bare-metal clouds to quickly deploy managed Kubernetes, database-as-a-service (DBaaS), application-as-a-service (AaaS), and virtual machines based on KubeVirt. With it, you can deploy Kafka, FerretDB, PostgreSQL, Cilium, Grafana, Victoria Metrics, and other services with a single click. It also handles GPU workloads in both virtual machines and K8s clusters. Cozystack is a CNCF Sandbox project, distributed under the Apache 2.0 license.*

### Main highlights

#### Storage-aware scheduling via the LINSTOR extender

The cozystack-scheduler now consults a LINSTOR scheduler extender when placing pods that declare both a SchedulingClass and LINSTOR-backed PVCs. Pods are preferentially scheduled to nodes where their volume replicas already live, cutting cross-node replication traffic and lowering I/O latency for storage-heavy workloads — databases, object stores, VMs.

It builds on the SchedulingClass system introduced in v1.2 and requires no tenant-side configuration. Operators can continue to mix storage locality with the existing data-center / hardware-generation constraints on SchedulingClass.

#### LINSTOR GUI: managed web console for storage administration

A new opt-in linstor-gui package deploys LINBIT’s linstor-gui alongside the LINSTOR controller with mTLS client authentication and a non-root security context. When OIDC is configured, an optional Keycloak-protected ingress (via oauth2-proxy) exposes the UI; access is restricted to members of the cozystack-cluster-admin group, consistent with host-cluster admin RBAC. The CLI workflow is unchanged — the GUI is strictly additive.

#### VM Default Images: out-of-the-box VM provisioning

The new vm-default-images package ships a curated set of cluster-wide VM images (Ubuntu, Debian, CentOS Stream, and others) as pre-populated DataVolumes. Tenants can provision VMs against well-known base images without having to upload them first. The package is opt-in via the iaas bundle and defaults to replicated storage. The vm-disk chart also gains a new “disk” source type for cloning from existing vm-disks in the same namespace.

#### Application-level observability: WorkloadsReady, Events, and S3 metering

Applications now expose a WorkloadsReady condition on their status by aggregating their underlying WorkloadMonitor resources, giving operators a single readiness signal for Deployments, StatefulSets, DaemonSets, and PVCs. The dashboard gains a new Events tab showing namespace-scoped Kubernetes events per application.

The WorkloadMonitor reconciler is extended to track COSI BucketClaim objects as first-class Workloads, and the bucket controller queries SeaweedFS bucket-size metrics from VictoriaMetrics — enabling S3 billing pipelines on par with Pods and PVCs.

#### Cross-namespace VM backup restore and RestoreJob dashboard

The backup system now supports restoring VMInstance backups into a different namespace, with IP/MAC preservation and safe rename semantics. In-place backup and restore flows for VMDisk and VMInstance are improved across the board, and Velero failure messages now propagate to the Application status. The dashboard ships a complete RestoreJob experience: list view, details page, create form, and sidebar entry.

### Also in v1.3.0

- Stricter tenant-name validation — alphanumeric-only at the API level, plus a check that the computed ancestor-chain namespace fits the 63-character Kubernetes limit.
- VMInstance subnets renamed to networks with a dashboard dropdown selector; the old field stays supported via migration 36.
- Custom Keycloak themes can be injected via initContainers; Keycloak-Configure adds email verification and SMTP settings for self-registration flows.
- Host runtime preflight check (make preflight) warns when a standalone containerd or docker is running alongside the embedded k3s runtime.
- System PostgreSQL pinned to 17.7-standard-trixie for Grafana, Alerta, Harbor, Keycloak, and SeaweedFS — preventing drift to PostgreSQL 18.
- kube-ovn upgraded to v1.15.10 with a port-group regression fix that preserves VM LSP membership across live migration.
- All bug fixes from v1.2.1 → v1.2.4 are rolled into v1.3.0.

### Documentation worth knowing about

This release ships with a substantial documentation update. New and rewritten guides that pair directly with the v1.3 features:

- [Custom Keycloak themes / white-labeling](https://cozystack.io/docs/v1.3/operations/configuration/white-labeling/) — image contract, configuration, imagePullSecrets, and theme activation.
- [Network bonding (LACP) configuration](https://cozystack.io/docs/v1.3/install/how-to/bonding/) — setting up LACP for Cozystack installations.
- [Backup and restore for VMInstance and VMDisk](https://cozystack.io/docs/v1.3/virtualization/backup-and-recovery/) — updated for the v1.3 cross-namespace restore flows.
- [External applications via the ApplicationDefinition API](https://cozystack.io/docs/v1.3/applications/external/) — fully rewritten guide using Minecraft server examples.
- [Go types for Cozystack managed applications](https://cozystack.io/docs/v1.3/cozystack-api/go-types/)— using the generated Go module from your own controllers.
- [ApplicationDefinition naming convention](https://cozystack.io/docs/v1.3/cozystack-api/application-definitions/) — how cozystack-api resolves kinds to their backing definitions.
- [Tenant namespace layout and parent / child derivation](https://cozystack.io/docs/v1.3/guides/tenants/) — how nested-tenant namespaces are computed.
- [Talos / talosctl / Cozystack version pairing matrix](https://cozystack.io/docs/v1.3/install/kubernetes/talm/) — definitive compatibility reference.
- [Air-gapped tenant Kubernetes registry mirrors](https://cozystack.io/docs/v1.3/install/kubernetes/air-gapped/) — improved guidance for offline installations.

### Governance

We also welcomed two new maintainers in this cycle: Mattia Eleuteri (@mattia-eleuteri) — CSI, storage, networking and security — and Matthieu Robin (@matthieu-robin) — managed applications, platform quality, and benchmarking.

### Release link

- Cozystack v1.3.0 on GitHub: [https://github.com/aenix-io/cozystack/releases/tag/v1.3.0](https://github.com/aenix-io/cozystack/releases/tag/v1.3.0)

### Join the community

- Telegram [group](https://t.me/cozystack)
- Slack [group](https://kubernetes.slack.com/archives/C06L3CPRVN1) (Get invite at [https://slack.kubernetes.io](https://slack.kubernetes.io/))
- [Community Meeting Calendar](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)
- [Cozysummit Virtual 2026](https://community.cncf.io/events/details/cncf-virtual-project-events-hosted-by-cncf-presents-cozysummit-virtual-2026/)

---

[Cozystack 1.3: Storage-Aware Scheduling, LINSTOR GUI, and VM Default Images](https://blog.aenix.io/cozystack-1-3-storage-aware-scheduling-linstor-gui-and-vm-default-images-3ad9b04a39de) was originally published in [Ænix](https://blog.aenix.io) on Medium, where people are continuing the conversation by highlighting and responding to this story.
