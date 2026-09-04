---
title: "Cozystack 1.5: Gateway API, default backups, Flux sharding, and TLS for managed services"
description: "Cozystack v1.5.0 adds opt-in Gateway API via Cilium, a default BackupClass, Flux v2.8 with sharding, TLS for managed databases, and GPU passthrough."
slug: "cozystack-1-5-gateway-api-default-backups-and-tls-for-managed-services"
date: "2026-06-22"
author: "Timur Tukaev"
type: "announcement"
topics: ["Cozystack", "Kubernetes", "Cilium", "KubeVirt", "GPU", "Platform Engineering"]
language: "en"
hreflang_de: "/de/blog/2026/06/cozystack-1-5-gateway-api-standard-backups-tls-fuer-managed-services/"
companion_landing: "/products/cozystack-enterprise-support/"
companion_label: "See enterprise support for Cozystack →"
cover_image: ""
---

{{< placeholder-image width="1200" height="630" label="Cozystack v1.5.0 — cover image (1200×630)" >}}

Cozystack v1.5.0 was published on 22 June 2026. It rolls up every fix from the v1.4.1 to v1.4.4 patch line and pushes the platform in five directions: a second ingress path via Gateway API, backups that work without per-app S3 configuration, stricter and shardable Flux reconciliation, TLS on externally published managed services, and GPU passthrough that no longer needs a manual `kubectl patch`.

This release also has a real upgrade surface. Read the next section before you plan the window.

## Read this before upgrading

**Do not install v1.5.0, v1.5.1 or v1.5.2 today. Go to v1.5.4.** The v1.5.0 SeaweedFS chart bump (4.05 to 4.31) renamed SeaweedFS workloads from chart-based names to release-based names. StatefulSet names are immutable, so Helm could not rename in place — it stood up a second, duplicate set beside the running one. On a cluster with more nodes than master replicas the empty duplicate schedules successfully, both generations carry identical pod labels, and the `seaweedfs-s3` Service load-balances across two filers writing into the same metadata store. That is a data-integrity incident, not a cosmetic duplicate. A related defect in migration 43 could prune the `seaweedfs-db` CNPG cluster — the index for every object in a tenant's S3 — for any instance not literally named `seaweedfs`.

Both are fixed in v1.5.4 (19 August 2026), which pins `fullnameOverride: seaweedfs`, adopts the running workloads in place, and ships a fail-closed audit script. v1.5.4 is the final release of the 1.5 line and the only one worth deploying.

Five further changes need attention on any 1.5 upgrade:

- **Kubernetes 1.33 or newer is required on the management cluster**, and on any tenant cluster that enables the Flux addon. Flux v2.8's helm-controller v1.5 requires it. Upgrade Kubernetes first.
- **`upgrade.force: true` is gone.** Immutable-field changes no longer self-heal. If a chart upgrade changes a StatefulSet `volumeClaimTemplates` or `serviceName`, the apply fails; recreate the object by hand with `kubectl delete sts <name> --cascade=orphan` and let Flux reconcile.
- **GPU VM operators must move custom host devices first.** With `cozystack.gpu-operator` enabled, the bundle now owns `KubeVirt.spec.configuration.permittedHostDevices` and overwrites it on the first reconcile. Move hand-edited entries into `.gpu.permittedHostDevices` before upgrading and confirm every `resourceName` matches what the nodes advertise.
- **MetalLB moves to the FRR-K8s BGP backend and HTTPS-only metrics.** MetalLB v0.15.2 to v0.16.1 adopts the upstream-default FRR-K8s backend; classic FRR mode is deprecated. `kube-rbac-proxy` is replaced by native TLS plus RBAC, so any scrape config pointing at the old plain-HTTP metrics endpoints must be updated. The host-network port denylist is rotated to match, including the new `/healthz` and `/readyz` port 17472.
- **Externally published databases and messaging gain TLS automatically.** Instances with `external: true` flip to TLS-on after upgrade. The trust anchor is a self-signed CA, so external clients must retrieve and pin it. Cluster-internal instances are unaffected.

One more, if you plan to go on to 1.6 later: v1.5.4 is the first 1.5.x release stamped migration `targetVersion: 46`, and the pin it applies to the CAPI `KubeadmConfigTemplate` objects is what keeps a later 1.6 upgrade from pruning them out from under a live, mid-rollover MachineSet. Reaching 1.6 from anything older on the 1.5 line is the path that hurts.

## Gateway API via Cilium

Cozystack-native services can now be published through the Gateway API backed by Cilium, as an opt-in alternative to the per-tenant ingress-nginx controllers. It is materialised per tenant by a new `gateway.cozystack.io/v1alpha1 TenantGateway` CRD reconciled by `cozystack-controller`.

Enable it platform-wide with `publishing.gateway.enabled=true`. A tenant then either gets its own Gateway, LoadBalancer IP and certificate with `tenant.spec.gateway=true`, or inherits the nearest ancestor's Gateway through the same label-based selector model that already drives ingress inheritance. Two certificate solver modes ship: HTTP-01 (the default — a per-app certificate, no platform configuration for new apps) and DNS-01 (opt-in — one wildcard certificate covering an apex, with Cloudflare, Route 53, DigitalOcean and RFC 2136 providers).

Defaults stay on ingress-nginx, so existing clusters do not change behaviour. Two side effects do land on everyone:

- Cilium Envoy and Gateway API support are now always enabled. That is an extra `cilium-envoy` DaemonSet, roughly 100 MB RAM per node at idle. Budget for it on dense nodes.
- `cozystack-api` now invokes admission (`createValidation` / `deleteValidation`) on Create **and** Delete for `apps.cozystack.io/*`. Any custom ValidatingAdmissionPolicy or webhook on those kinds now fires on all three verbs.

Reference: [Gateway API guide](https://cozystack.io/docs/v1.5/networking/gateway-api/).

## Backups that work out of the box

Previous releases installed the backup machinery. v1.5 closes the gap between "installed" and "working without per-app S3 configuration".

A platform-managed default `BackupClass` named `cozy-default` now ships, backed by a system bucket `cozy-backups`. Applications opt in with `useSystemBucket`, after which the platform projects shared backup credentials into the tenant namespace with RBAC isolation and projection metrics, and skips per-release credential Secrets entirely. Default strategies are provided for every backup-capable app — Velero for VMDisk and VMInstance, CNPG for PostgreSQL, Altinity for ClickHouse, plus MariaDB, FoundationDB and etcd — and a Velero `BackupStorageLocation` is wired to the system bucket. The legacy per-tenant S3 fields on Postgres and ClickHouse are deprecated in favour of this flow.

**Velero is now a default system package**, not an optional one. This fixes a deterministic failure: the default `backupstrategy-controller` hard-depends on Velero, so on clusters without it the controller sat in `DependenciesNotReady` and kept the platform HelmRelease from ever reaching Ready. Existing clusters get Velero in the `cozy-velero` namespace on upgrade. If you do not back up VMs, opt out via `bundles.disabledPackages`.

Two new strategies join the catalog. An **etcd** strategy (cluster-scoped `strategy.backups.cozystack.io Etcd`, S3-only) with a snapshot BackupJob and a destructive in-place RestoreJob. And a generic, application-agnostic **Job** strategy: the operator supplies a Kubernetes Job template, Cozystack renders and runs it as a one-shot backup, then re-renders it with `.Mode == "restore"` for recovery. Cross-namespace restore is not supported by the Job strategy.

References: [application backup and recovery](https://cozystack.io/docs/v1.5/applications/backup-and-recovery/), [managed app backup configuration](https://cozystack.io/docs/v1.5/operations/services/managed-app-backup-configuration/).

## Flux v2.8 and helm-controller sharding

Flux moves from v2.7.3 to v2.8.0 across both the embedded management-cluster Flux and the optional tenant Flux addon; the flux-operator and flux-instance charts go v0.33.0 to v0.50.0.

helm-controller v1.5 ships Server-Side Apply with `--force-conflicts` and kstatus-based health checking by default. Two practical consequences: chart fields that v2.7 silently dropped are now hard errors (fixed in this release for foundationdb, kafka, kubevirt-instancetypes, vm-instance and the platform chart), and parent HelmReleases now wait for every child resource to be Ready before reporting Ready themselves. Correctness improves; first-install timings get longer and stricter, which is why several packages gained explicit `spec.timeout` and `dependsOn` entries in the same release.

Alongside it, a new **flux-shard-operator** spreads tenant HelmReleases across multiple helm-controller shards, so one noisy tenant — the canonical case being a HelmRelease stuck in infinite remediation — can no longer degrade reconciliation for everyone else. Placement is per tenant: all of a tenant's HelmReleases share one shard, assigned greedily by least load, with a CREATE-time mutating webhook stamping the shard label. It defaults to `shardCount: auto`, which sizes shards from the tenant HelmRelease count — small clusters stay on a single shard, large fleets shard out automatically — and an integer pins the count. The hand-rolled `flux-tenants` deployment is drained and retired by migration 44.

## TLS for managed databases and messaging

Four managed-app charts gain TLS through a single `tls.enabled` value with consistent tri-state semantics. Unset, it inherits `external`: TLS is on when the service is published externally and off when it is cluster-internal. An explicit `true` or `false` always wins. In every case the trust anchor is a chart- or operator-managed self-signed CA that clients retrieve and pin — there is no publicly trusted CA in this path.

- **Kafka** serves TLS on its external LoadBalancer listener (port 9094), certificates managed end to end by the Strimzi operator. Clients trust via the operator-published `<release>-cluster-ca-cert` and `<release>-clients-ca-cert` Secrets. The external listener is now gated only on `external: true`, decoupled from `tls.enabled`.
- **NATS** and **Qdrant** use a self-contained cert-manager chain (self-signed Issuer, CA, leaf) rendered in the tenant namespace. NATS covers client connections and cluster routes; Qdrant covers REST and gRPC. Clients trust the `<release>-ca` Secret.
- **PostgreSQL** already served TLS unconditionally via CNPG, so `tls.enabled` here injects the external hostname into the operator-managed server certificate's SANs when `external: true` — which is what makes `sslmode=verify-full` work against the external endpoint. Clients read `ca.crt` from the `<release>-credentials` Secret.

The TLS work in this release stops at these four charts. The other managed services — MariaDB, Valkey, ClickHouse, OpenSearch, RabbitMQ, MongoDB — are unchanged.

## GPU passthrough without manual patching

GPU enablement is wired across all three paths a GPU can reach a workload, each of which previously needed manual reconciliation.

For **tenant Kubernetes**, node groups declaring `gpus` automatically get the `gpu=on` kubelet label, so HAMi's device plugin schedules and advertises `nvidia.com/gpu`. The tenant GPU operator loads the driver with `NVreg_NvLinkDisable=1`, which fixes single-SXM-GPU passthrough that previously hung at "Fabric State: In Progress" with CUDA reporting "system not yet initialized". Both defaults are overridable via `addons.gpuOperator.valuesOverride`.

For **KubeVirt VMs**, enabling `cozystack.gpu-operator` auto-populates the KubeVirt CR: it injects the `HostDevices` feature gate and fills `permittedHostDevices` (plus `mediatedDevicesConfiguration` for vGPU) from shipped NVIDIA default tables. GPU VMs now schedule without a manual patch — at the cost of the ownership change listed in the upgrade notes above.

A third **`container` variant** of the gpu-operator is added for hosts where the NVIDIA driver and container toolkit are already installed by the OS; it exposes GPUs to ordinary containerized pods through the device plugin only.

GPU sharing in Cozystack remains NVIDIA GPU Operator plus HAMi. Reference: [GPU sharing and operator variants](https://cozystack.io/docs/v1.5/kubernetes/gpu-sharing/).

## Also in v1.5.0

- **Deletion protection.** Objects labelled `platform.cozystack.io/no-delete=true` cannot be deleted. The check runs in-process in the kube-apiserver through a ValidatingAdmissionPolicy — no webhook, no DaemonSet, no TLS, no extra image. Protected in this release: the `cozy-system` and `tenant-root` namespaces, the `tenant-root` HelmRelease, the `cozystack-version` ConfigMap, the `cozystack-packages` OCIRepository, the cert-manager ClusterIssuers, the LinstorCluster, and the packages CRDs. To delete one, remove the label first: `kubectl label <kind> <name> platform.cozystack.io/no-delete-`. Requires Kubernetes 1.30+.
- **Runtime-populated dashboard dropdowns.** A namespaced, read-only `Option` resource (`core.cozystack.io/v1alpha1`), computed on read by a privileged in-process provider registry, plus an `x-cozystack-options` schema keyword that charts declare. GPU devices, KubeVirt instancetypes and preferences, Multus networks, VM images, storage pools, storage classes, backup classes and plans become real dropdowns in the Cozystack Dashboard instead of free text or stale static enums. Tenants get read-only access to options in their own namespace.
- **Tenants can start, stop and restart their own VMs.** The missing `update` on the `virtualmachines/start`, `/stop` and `/restart` KubeVirt subresources is granted at `cozy:tenant:use:base`; the dashboard power buttons previously returned 403 for every tenant role.
- **Tenant Overview Grafana dashboard** for platform admins, deployed only to the root Grafana in `cozy-monitoring` and never to per-tenant Grafanas, plus a **Cluster Usage** admin page backed by a dedicated `cozystack-dashboard-cluster-usage` ClusterRole (cluster-wide and per-node utilization, GPUs included). The sidebar entry is fail-closed without the binding.
- **`storageClass` marked immutable on 16 stateful apps** — changing it never migrates data, because PVCs pin `storageClassName` at creation. Enforcement in v1.5.0 is UI-only: the aggregated apiserver does not yet evaluate the CEL rule on Update, so a direct `kubectl patch` is still accepted.
- Notable fixes: `cozystack-api` now publishes free-form `.spec` as `x-kubernetes-preserve-unknown-fields` rather than `additionalProperties: true`, which was crashing kube-controller-manager cluster-wide with a nil-pointer panic in the VAP type-checker; tenant kubeconfigs use the root host for the Keycloak OIDC issuer, so `kubectl oidc-login` no longer fails TLS verification for non-root tenants; `config_path` registry configuration works on containerd 2.x tenant nodes; RWX Block volumes are routed to the upstream hotplug detach path instead of the NFS-cleanup branch; OpenSearch is finally referenced by the PaaS bundle.

## Platform components

| Component | Change |
|---|---|
| Flux | v2.7.3 → v2.8.0 (flux-operator/flux-instance charts v0.33.0 → v0.50.0) |
| MetalLB | v0.15.2 → v0.16.1, FRR-K8s default backend, HTTPS-only metrics |
| SeaweedFS | 4.05 → 4.31 (see the upgrade warning above) |
| etcd-operator | v0.4.3 → v0.4.5 (v0.4.5 fixes a restore-datadir path that made restore non-functional) |
| ouroboros | v0.7.2 → v0.8.0 |
| seaweedfs-cosi-driver | v0.3.1, with stale-socket self-heal |
| kuberture | new optional system package v0.1.1 |
| Go toolchain | 1.26.4, `golang.org/x/net` v0.55.0 |

`kuberture` is off by default. It bridges an external-dns gap — external-dns cannot read EndpointSlices — by watching the `default/kubernetes` API-server EndpointSlice and emitting annotated headless Services that external-dns consumes to publish the Kubernetes API endpoint to DNS. Enable via `bundles.enabledPackages` with at least one `config.outputs` entry.

## The 1.5 patch line

- **v1.5.1** (23 June 2026) fixes a v1.5.0 regression: persistent EFI/TPM state was restored for the `windows.11`, `windows.2k22` and `windows.2k25` KubeVirt preferences, which made KubeVirt provision a ReadWriteOnce `persistent-state-for-<vm>` PVC on the `replicated` StorageClass. That pins the VM to its node and blocks live migration and node drains — on clusters using `evictionStrategy: LiveMigrate` it can stall a cluster upgrade outright. Secure Boot and the vTPM still work; only the state persistence across reboots is dropped.
- **v1.5.2** (3 July 2026) covers ten fixes, including a Kamaji DataStore deletion deadlock that wedged tenant namespaces, a victoria-metrics-operator dependency that could never resolve when `certManager.enabled: false`, and single-replica MariaDB instances being rejected by the operator webhook.
- **v1.5.3** was tagged but its GitHub release was left a draft and never published. No operator received it.
- **v1.5.4** (19 August 2026) is the final 1.5 release and the one to deploy.

## Upgrading

```bash
kubectl annotate namespace cozy-system helm.sh/resource-policy=keep --overwrite
kubectl annotate configmap -n cozy-system cozystack-version helm.sh/resource-policy=keep --overwrite

helm upgrade cozystack oci://ghcr.io/cozystack/cozystack/cozy-installer \
  --version 1.5.4 \
  --namespace cozy-system
```

The annotations are required, not optional — without them, removing or upgrading the installer release can delete the `cozy-system` namespace and everything in it. Reuse your existing values. Full procedure and post-upgrade checks: [upgrade guide](https://cozystack.io/docs/v1.5/operations/cluster/upgrade/).

## Where Ænix fits

Cozystack is a CNCF Sandbox project under Apache 2.0, and the upgrade paths above are the same for everyone running it. Ænix maintains the project and sells [enterprise support for Cozystack](/products/cozystack-enterprise-support/) — including upgrade planning for the sharp edges in this release — for teams that would rather not carry the platform alone.

## Release links

- [Cozystack v1.5.0 on GitHub](https://github.com/cozystack/cozystack/releases/tag/v1.5.0)
- [Cozystack v1.5.4 on GitHub](https://github.com/cozystack/cozystack/releases/tag/v1.5.4)
- [Cozystack v1.5 documentation](https://cozystack.io/docs/v1.5/)
- [Telegram](https://t.me/cozystack) and [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) (invite at [slack.kubernetes.io](https://slack.kubernetes.io/))
