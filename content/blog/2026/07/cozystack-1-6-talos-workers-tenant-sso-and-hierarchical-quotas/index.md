---
title: "Cozystack 1.6: Talos tenant workers, tenant SSO, SecurityGroups, and hierarchical quotas"
description: "Cozystack v1.6.0 moves tenant workers to Talos via Cluster API and adds tenant OIDC, a SecurityGroup firewall API, hierarchical quotas and etcd v1alpha2."
slug: "cozystack-1-6-talos-workers-tenant-sso-and-hierarchical-quotas"
date: "2026-07-22"
author: "Timur Tukaev"
type: "announcement"
topics: ["Cozystack", "Kubernetes", "Talos", "Multi-tenancy", "KubeVirt", "Platform Engineering"]
language: "en"
hreflang_de: "/de/blog/2026/07/cozystack-1-6-talos-worker-tenant-sso-hierarchische-quotas/"
companion_landing: "/products/cozystack-enterprise-support/"
companion_label: "See enterprise support for Cozystack →"
cover_image: ""
---

{{< placeholder-image width="1200" height="630" label="Cozystack v1.6.0 — cover image (1200×630)" >}}

Cozystack v1.6.0 was published on 22 July 2026. It replaces the Ubuntu and kubeadm bootstrap of tenant Kubernetes workers with Talos Linux driven by Cluster API, completes the etcd-operator `v1alpha2` migration with in-place adoption of live clusters, adds OIDC single sign-on for tenant kube-apiservers and per-instance Grafana, introduces a tenant-facing `SecurityGroup` firewall API, and makes tenant resource quotas hierarchical. It rolls up every fix from v1.5.1 and v1.5.2.

It also carries the largest upgrade surface since v1.0. The platform migration `targetVersion` moves from 45 to 54, so migrations 45 through 53 run as pre-upgrade hooks — and three of them can block or wedge the upgrade if their preconditions are not met. Plan a window and read the checks below.

## Read this before upgrading

**Upgrade to v1.6.2, not v1.6.0.** Three of the fixes that landed after v1.6.0 are the kind that fail silently:

- v1.6.0 shipped a **fail-open** copy of `hack/seaweedfs-naming-audit.sh` — the script whose output gates a runbook step that deletes PVCs. Every `kubectl` call in it was silenced with `2>/dev/null`, so a timeout or an RBAC denial produced an empty "all clean" table byte-identical to an honestly clean fleet. Fixed in v1.6.1. Run the audit from a v1.6.1-or-later checkout, and read the **exit code**, not the table. A clean result from the v1.6.0 copy is not evidence of anything.
- v1.6.2 fixes Velero CRDs staying frozen at whatever version was first installed, because Helm never touches a chart's `crds/` directory on upgrade. Once the Velero image moved to a version with new backup phases, the apiserver rejected phase transitions against the stale CRDs and **backups stopped while the HelmRelease stayed green**.
- v1.6.2 also repairs the default backup `Strategy` CRs and the Velero `BackupStorageLocation`, which were gated on a Helm `lookup` performed while the referenced object was still being created. When the lookup came back empty the objects were skipped permanently, since helm-controller does not re-render a release whose chart and values are unchanged.

If you are coming from the 1.5 line, **go through v1.5.4 first**. v1.5.4 is the first 1.5.x release stamped `targetVersion: 46`, and its slot 45 stamps `helm.sh/resource-policy: keep` onto the CAPI `KubeadmConfigTemplate` objects. 1.6 drops `KubeadmConfigTemplate` from the tenant `kubernetes` chart entirely — workers move to `TalosConfigTemplate` — so without that pin Helm deletes the template while the kubeadm-backed MachineSet is still mid-rollover with its `bootstrap.configRef` pointing at it. Verify before upgrading:

```bash
kubectl get kubeadmconfigtemplates.bootstrap.cluster.x-k8s.io -A \
  -o custom-columns='NS:.metadata.namespace,NAME:.metadata.name,KEEP:.metadata.annotations.helm\.sh/resource-policy'
```

A row showing `<none>` means the pin did not land. Fix it before going to 1.6.

### Pre-upgrade checks

Run these against the management cluster before applying the v1.6 Platform Package.

**1. etcd adoption needs a reachable backup target.** Migration 50 adopts every legacy `etcd.aenix.io/v1alpha1` cluster onto the new operator and takes a mandatory snapshot first. If it cannot resolve the snapshot target it exits 1 and halts the upgrade.

```bash
kubectl get etcdclusters.etcd.aenix.io -A
kubectl get etcds.strategy.backups.cozystack.io cozy-default-etcd
kubectl get secret cozy-backups-creds -n cozy-velero
kubectl get buckets.apps.cozystack.io cozy-backups -n tenant-root
```

If the first command prints nothing, migration 50 is a no-op.

**2. SeaweedFS naming audit.** v1.6.0 pins `fullnameOverride: seaweedfs` and adopts the running workload set in place, but two states cannot be adopted automatically and the chart fails the render rather than guess: class `S` (installed fresh on 1.5.x, data on `data1-seaweedfs-system-volume-*` PVCs) and class `MIXED` (both naming generations present). Both must be recovered before upgrading, following the `seaweedfs-431-rename-recovery` runbook. Class `L` needs nothing. A cluster that went 1.4.x straight to 1.6 never renamed and is unaffected.

**3. Tenant clusters still on Kubernetes v1.30.** v1.30 leaves the Talos-to-Kubernetes support matrix and the chart refuses to render it. Migration 46 patches live CRs to v1.31, but a GitOps-managed CR is overwritten again by the next source reconcile — so bump `spec.version` in Git.

```bash
kubectl get kuberneteses.apps.cozystack.io -A \
  -o custom-columns='NS:.metadata.namespace,NAME:.metadata.name,VERSION:.spec.version'
```

**4. Hand-made tenant StorageClasses that collide.** Remote-accessible LINSTOR StorageClasses are now created inside each tenant cluster under the same name. A manually created tenant StorageClass with a colliding name — typically `replicated` — blocks the propagated class and stalls the tenant CSI release. Delete any such class that is not Helm-managed. Infra classes that must stay node-local need an explicit `linstor.csi.linbit.com/allowRemoteVolumeAccess: "false"`; an absent annotation is treated as remote-accessible.

**5. Deprecated etcd module backup values.** The `backup.*` block on the `etcd` tenant module is removed in this release. Move to a `BackupClass` bound to the `Etcd` strategy first.

**6. Coming from v1.4.x?** The v1.5.0 requirement still applies: Kubernetes 1.33 or newer on the management cluster and on any tenant cluster enabling the Flux addon.

## Talos Linux for tenant Kubernetes workers

Tenant worker nodes no longer boot Ubuntu and bootstrap through kubeadm. Phase 1 of the Kubernetes-app split replaces that path with Talos Linux, driven by `cluster-api-bootstrap-provider-talos` (CABPT v0.6.12) registered as a second bootstrap provider alongside kubeadm, plus a `clastix/talos-csr-signer` sidecar embedded in the Kamaji control-plane pod.

Talos PKI — an Ed25519 CA plus trustd TLS — is generated through cert-manager with stable, lookup-and-reuse Talos secrets. The Kamaji control-plane provider carries an upstream-bound patch exposing `KamajiControlPlane.spec.network.additionalServicePorts`, so trustd (50001/TCP) can be published on the apiserver Service. Workers boot the Talos openstack raw image via a CDI `DataVolume` streamed from the image factory, with the system disk exposed as virtio-blk using `blockSize.custom: logical=512, physical=4096` — so 4Ki-native backends such as LINSTOR/DRBD behave under QEMU's `O_DIRECT` writes while SeaBIOS still boots.

The separate `disk-kubelet` PVC is gone. Talos lays out `EPHEMERAL` itself on the single system disk that `nodeGroups[*].diskSize` now sizes.

What this means operationally:

- **Existing tenants roll over automatically.** Old machines are replaced by Talos workers without manual intervention, and migration 45 pins the outgoing `KubeadmConfigTemplate` objects with `helm.sh/resource-policy: keep` so Helm cannot prune them mid-rollover. But plan for a full worker-pool replacement per tenant cluster: worker disks are reprovisioned and container images re-pulled.
- **Worker MachineHealthCheck remediation is now ON by default.** `maxUnhealthy` moved from a hard-coded `0` to `nodeHealthCheck.maxUnhealthy`, defaulting to `"50%"`. CAPI now deletes and replaces unhealthy worker Machines. Set `nodeHealthCheck.maxUnhealthy: "0%"` to keep the old behaviour until your fleet is stable on Talos. Per-node-group `maxUnhealthy` and `nodeStartupTimeout` overrides also ship, so a stateful group can sit at `0%` while a stateless one tolerates `50%`.
- **The default `md0` node group is no longer merged into every cluster.** `nodeGroups` defaults to `{}` and the built-in `md0` applies only when no node groups are configured. Migration 47 pins `md0` explicitly on existing CRs to preserve live topology; it is fail-closed, aborting the upgrade rather than letting Helm prune a live `md0` MachineDeployment.
- **Fresh clusters with `nodeGroups: {}` come up with zero workers.** The chart no longer manages `MachineDeployment.spec.replicas` — the cluster-autoscaler owns it alone, seeded from `minReplicas: 0`. Supply a node group with `roles: [ingress-nginx]` and `minReplicas >= 1`, or let the autoscaler bring up `md0` once ingress-nginx pods go `Pending`. The upside for existing clusters: `helm upgrade` no longer drains workers back to a hardcoded `replicas: 2` on every platform bump.
- **Air-gapped installations lose the `registries.mirrors` passthrough** to tenant workers — the Helm-rendered `*-patch-containerd` Secret has no consumer in the Talos machine config and was removed. The Talos OS image and installer are overridable via `talos.imageFactoryURL` and `talos.installerRepository`, but in-guest registry mirroring is a Phase 2 follow-up.
- **Worker node disks now default to the application-level `replicated` StorageClass.** A node group leaving `storageClass` empty previously took the management-cluster default; it now falls back to the application `storageClass`, because linstor-csi v1.11.2 rejects ReadWriteMany volumes on a non-DRBD class and worker VMs need RWX to live-migrate. The rendered worker template changes, so each tenant's worker MachineDeployment rolls once.

The tenant `kubernetes` HelmRelease now reports Ready as soon as Helm completes (`DisableWait`) and no longer blocks on worker or addon readiness; worker-rollout health is tracked by `WorkloadMonitor` instead.

## etcd-operator v1alpha2 with in-place adoption

The etcd stack moves to the donated `etcd-operator.cozystack.io/v1alpha2` API — a Membership-API lifecycle replacing the StatefulSet model — served by a Cozystack-authored chart at appVersion v0.5.2, with CRDs split into their own `etcd-operator-crds` package so they can be installed ahead of the controller.

The interesting part is the upgrade. Migration 50 runs as a pre-upgrade hook, while the legacy operator is still the running one, and uses the `etcd-migrate` tool baked into the migrations image to rewrite ownership, labels and CRs so the new operator takes over the live data plane on its first reconcile — no data move, no pod restart. Before touching anything it takes a mandatory snapshot of every adopted cluster to the `cozy-backups` bucket under a system key prefix with tenant-invisible credentials, and it fails loudly rather than adopt without one. It also re-issues each cluster's server and peer certificates with the new operator's native member wildcard SAN, because in `secretRef` TLS mode the operator never mints certs — an adopted cluster whose certs lack the native domain would silently fail TLS the first time a member is replaced, while still reporting `Available=True`.

If migration 50 halts on a cluster that genuinely has no backup storage, the documented escape hatch is:

```bash
kubectl edit package.cozystack.io cozystack.cozystack-platform
```

```yaml
spec:
  components:
    platform:
      values:
        migrations:
          etcdAdoptSkipBackup: true
```

Flux re-renders the platform chart and re-runs the hook, adopting every legacy etcd without a snapshot. **A botched adoption on a tenant control-plane etcd is unrecoverable without a snapshot.** Set the flag back to `false` afterwards, or the next etcd migration skips its snapshot too.

## SecurityGroup: tenant-managed network policy

A new tenant-facing, namespace-scoped firewall resource — `sdn.cozystack.io/v1alpha1 SecurityGroup` — lets tenants manage their applications' network policy without any access to the `cilium.io` API group.

A `SecurityGroup` is a membership group. It owns a membership label (`securitygroup.sdn.cozystack.io/<name>`) that a new `securitygroup-controller` stamps onto the pods of every managed application listed in `spec.attachments`, and removes when an attachment is dropped. The group projects 1:1 onto a `CiliumNetworkPolicy` in the same namespace whose `endpointSelector` is exactly that membership label — so one `SecurityGroup` can cover several applications at once, and `fromSG` / `toSG` peers resolve group-to-group references live in the Cilium dataplane. A finalizer guards the backing policy so member labels are always stripped before it is removed, and the aggregated-API REST storage re-asserts them on every write so a full-replace `PUT` cannot orphan them.

The important limitation: ingress and egress rules only ever **add** allowed traffic. An empty rule list does not isolate the member pods, because effective connectivity remains the union of every policy selecting a pod — including the platform's blanket-allow baseline. Default-deny enforcement is tracked separately as future work. Do not treat a `SecurityGroup` as a segmentation boundary in this release.

## Hierarchical tenant resource quotas

`tenant.spec.resourceQuotas` previously became a plain per-namespace `ResourceQuota` that ignored the tenant tree entirely: a super-admin inside a quota'd tenant could create a sub-tenant with a larger quota, or with no quota at all, and consume more than was allocated. A tenant's declared quota is now the budget for its whole sub-tree.

Enforcement is two cooperating layers, mirroring OpenShift's ClusterResourceQuota split. A declaration-time gate in the aggregated apiserver deterministically rejects a sub-tenant whose declared quota exceeds the parent's remaining budget. A runtime enforcer in `cozystack-controller` maintains a per-namespace `tenant-quota-allocated` ResourceQuota that clamps each pool member to its share, aggregating sub-tree usage so members collectively stay within it — Kubernetes enforces the most restrictive ResourceQuota in a namespace, so this binds without fighting Flux over the chart-rendered `tenant-quota`.

Review sub-tenant quotas before upgrading. A parent quota lowered below the sum of its children emits a `QuotaOvercommitted` event, and `--tenant-quota-buffer-percent` on `cozystack-controller` temporarily inflates pool budgets during rollout so workloads already over a freshly-binding quota keep running. There are no API type changes and no tenant chart changes — the feature works with the existing field.

## OIDC single sign-on for tenant Kubernetes and Grafana

Two symmetric Phase 1 features let a tenant opt an individual workload into the platform's Keycloak `cozy` realm through one flat selector, with no platform-level configuration.

**Tenant kube-apiserver.** Each `Kubernetes` CR gains `spec.oidc.mode: System | CustomConfig | None`, defaulting to `None`. `System` trusts the `cozy` realm via a per-cluster public client and audience binding; `CustomConfig` accepts a tenant-supplied structured `AuthenticationConfiguration`. `spec.oidc.users[]` drives one ClusterRoleBinding per user inside the tenant cluster (`admin` maps to `cluster-admin`, `view` to `view`). In `System` mode a `<release>-oidc-kubeconfig` Secret carrying a ready-to-use `kubectl oidc-login` exec block is surfaced through the Cozystack Dashboard, so a tenant user gets from "cluster exists" to "kubectl works with my SSO identity" without an operator in the loop. The underlying `controlPlane.apiServer.extraArgs`, `extraVolumes` and `extraVolumeMounts` passthrough on `KamajiControlPlane` is also exposed for anyone hand-rolling authentication.

**Grafana.** Each `Monitoring` CR gains the same selector. `System` wires a per-instance confidential Keycloak client with audience binding; authorization is app-side, with `spec.oidc.users: [{email, role: Admin|Editor|Viewer}]` reconciled into Grafana's Main Org by a chart-owned post-install and post-upgrade Job that pre-provisions users, adds them to the org, patches their role and prunes stale members. `CustomConfig` accepts a tenant-supplied `[auth.generic_oauth]` payload, inline as a map or as a Secret with an `auth.ini` key — in the Secret case `spec.oidc.users` is unsupported and the chart fails the render on that combination rather than silently ignoring it. The `admin_user` / `admin_password` Secret remains a documented break-glass path in every mode.

Reference: [enabling OIDC](https://cozystack.io/docs/v1.6/operations/oidc/enable_oidc/).

## Application deletion now reclaims storage

Deleting a managed application used to leave its volumes and operator-generated Secrets behind. A ten-PR sweep across the catalog adds post-delete cleanup hooks and PVC retention policies so a deleted application actually releases what it held: ClickHouse keeper, data and log PVCs; Qdrant's data PVC; OpenBAO's data PVC; the tenant monitoring module's VictoriaMetrics and VictoriaLogs storage and TLS Secrets; the tenant seaweedfs module's volume PVCs; the tenant etcd module's `data-etcd-*` PVCs; Harbor's jobservice and trivy PVCs; MariaDB's operator-generated password Secrets; Bucket and Gateway ACME resources.

**This makes deletion irreversible.** That is the point of the change, but it is a real behaviour change from "delete leaks the volume, and you could recover from it". Harbor's PVCs are force-deleted, overriding `persistence.resourcePolicy=keep`; Harbor's CNPG database PVCs are not touched. Migrations 48 and 51 backfill the release label onto pre-existing ClickHouse keeper and monitoring storage PVCs so already-deployed clusters are covered; both are best-effort, and the worst case if a relabel is skipped is the pre-existing leak.

Back up before deleting. Tell your tenants.

## Also in v1.6.0

- **Wildcard certificates, end to end.** v1.5's `publishing.certificates.wildcardSecretName` covered the root tenant only. The platform controller now replicates that certificate into every tenant namespace that terminates TLS, so per-tenant ingress controllers and Gateways serve it automatically, with no cross-namespace Secret read. A new opt-in `publishing.certificates.wildcard` (default `false`) has the platform mint a single `*.<root-host>` certificate via DNS-01 on the default ingress-nginx path — the practical fix for hitting Let's Encrypt rate limits at scale.
- **Keycloak** gains four independent opt-ins: a KMS-encrypting database proxy for column-level PII encryption at rest, backed by a static KEK or Vault Transit (with Vault Kubernetes and AppRole auth); an `ingress.adminHost` that serves the admin console and Administration REST API on a separate hostname and route, attachable to a private Gateway or ingressClass via `publishing.ingressNameAdmin`; Barman-based S3 backups of the CNPG database; and a selectable realm login theme shipped through platform `branding` values. All are off by default.
- **Immutable tags and rc-to-stable promotion.** A stable release is now the byte-identical promotion of the release candidate that was tested: no tag is ever force-moved, stable is never rebuilt, and images are retagged by digest. The cron-driven `auto-release.yaml` patch-tag workflow is deleted outright.
- **Kamaji defaults to 2 replicas** with soft pod anti-affinity, and its telemetry handler and webhook are removed — cutting apiserver admission p99 for `TenantControlPlane` webhooks by roughly 70% on multi-tenant clusters.
- **Remote-accessible LINSTOR StorageClasses propagate into tenant clusters** under the same name, with the class named by `storageClass` (default `replicated`) becoming the tenant default and the legacy `kubevirt` class kept as an alias.
- The **Cozystack Dashboard** now shows the LoadBalancer external IP on the application Services tab, and renders explicit error and unknown-type states instead of an infinite spinner. The console SPA is now built from in-tree source; the shipped image and digest are unchanged.
- After upgrading, **re-check metrics scrape targets on port 10250** — cert-manager's webhook, external-secrets' webhook and metrics-server's listener all moved off it.

## Platform components

| Component | Change |
|---|---|
| Talos Linux | v1.13.0 → v1.13.6, kernel 6.18.29 → 6.18.38; closes CVE-2026-53359 and CVE-2026-46113 KVM guest-to-host escapes |
| etcd-operator | v0.4.5 → v0.5.2, new `v1alpha2` API |
| Cilium | 1.19.3 → 1.19.5 |
| KubeVirt | v1.8.4 (fixes VMIs stuck `Scheduled` on Kubernetes 1.36; closes CVE-2026-35469) |
| Velero | 1.17.0 → 1.18.1, concurrent backup processing, cache volumes for data movers |
| Vertical Pod Autoscaler | 1.3.0 → 1.5.0, in-place pod resizing promoted to Beta |
| Harbor | 2.14.2 → 2.15.1 |
| Keycloak | 26.5.2 → 26.6.3 |
| LINSTOR | 1.33.2 → 1.33.3, linstor-csi v1.11.2 |
| FoundationDB operator | v2.13.0 → v2.30.0 |
| HAMi | 2.8.1 → 2.9.0 |
| Percona MongoDB operator | 1.21.1 → 1.22.0 |
| OpenBAO | v2.5.0 → v2.5.1 |
| csi-driver-nfs | 4.11.0 → 4.13.3 |
| CoreDNS chart | 1.43.2 → 1.46.0 |
| OpenCost | 1.111.0 → 1.120.3 |

Talos system extensions are refreshed to the 20260622 set, including DRBD 9.3.2 and ZFS 2.4.3. Applying that alone rolls each tenant worker pool once, since the worker template is renamed to carry the new image. Managed Kubernetes patch versions move to v1.32.13, v1.33.13, v1.34.9 and v1.35.6; v1.30 is out of the tenant support matrix.

Two API groups are worth knowing about as non-events. `SecurityGroup` had `spec.targetRef` replaced by the `spec.attachments[]` membership model before release, so only people tracking `main` between 30 June and 16 July 2026 need to rewrite objects. The `network.cozystack.io` group (`ExposureClass` / `ServiceExposure`) was introduced and removed within the cycle and is **not** part of v1.6.0 — native `Service` `type: LoadBalancer` plus `loadBalancerClass` covers the same ground, exposed as `publishing.loadBalancerClass`.

## The 1.6 patch line

- **v1.6.1** (5 August 2026): CNPG operator and CRDs aligned to 1.28.2, fixing a PVC resize deadlock that could leave a single-instance PostgreSQL cluster with zero instances; the `talos-reconcile` Job now renders for the implicit `md0` group, so the first autoscaler-driven scale-up no longer leaves Machines permanently blocked with no matching `TalosConfigTemplate`; the `keycloak-configure` pre-delete Job patches the HelmRelease in the right namespace, unblocking Keycloak uninstall and reinstall; the SeaweedFS naming audit fails closed; etcd-operator to v0.5.4.
- **v1.6.2** (19 August 2026): the backup-strategy lookup gate, the Velero CRD upgrade, and the kube-ovn webhook certificate reload — that last one mattering because `kube-ovn-webhook` loaded its serving certificate once at startup and never re-read it, so after a cert-manager renewal every pod creation in tenant namespaces was rejected under `failurePolicy: Fail`, including `virt-launcher` pods, blocking VMI startup. Also: barman-cloud requests an S3 checksum only when required, so backups to Ceph RGW and some MinIO and R2 builds stop failing outright; sharded helm-controllers no longer crashloop behind an HTTP proxy; `kubectl apply --validate` works again against the `core` and `sdn` API groups.

## Upgrading

```bash
kubectl annotate namespace cozy-system helm.sh/resource-policy=keep --overwrite
kubectl annotate configmap -n cozy-system cozystack-version helm.sh/resource-policy=keep --overwrite

helm upgrade cozystack oci://ghcr.io/cozystack/cozystack/cozy-installer \
  --version 1.6.2 \
  --namespace cozy-system
```

The annotations are required — without them, removing or upgrading the installer release can delete the `cozy-system` namespace and everything in it. Reuse your existing values, watch the migration hooks, and expect the rollouts listed above: tenant worker pools, the dashboard and linstor-gui gatekeepers, the VPA admission controller, and the linstor-scheduler admission Deployment. Full procedure: [upgrade guide](https://cozystack.io/docs/v1.6/operations/cluster/upgrade/).

## Where Ænix fits

Cozystack is a CNCF Sandbox project under Apache 2.0. v1.6 is a good release and a demanding upgrade — the Talos worker rollover, the etcd adoption and the deletion-semantics change all deserve a rehearsal on a non-production cluster first. Ænix maintains the project and sells [enterprise support for Cozystack](/products/cozystack-enterprise-support/), including upgrade planning and hands-on migration for teams running it at scale.

## Release links

- [Cozystack v1.6.0 on GitHub](https://github.com/cozystack/cozystack/releases/tag/v1.6.0)
- [Cozystack v1.6.2 on GitHub](https://github.com/cozystack/cozystack/releases/tag/v1.6.2)
- [Cozystack v1.6 documentation](https://cozystack.io/docs/v1.6/)
- [Telegram](https://t.me/cozystack) and [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) (invite at [slack.kubernetes.io](https://slack.kubernetes.io/))
