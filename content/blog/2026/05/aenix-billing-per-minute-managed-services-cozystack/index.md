---
title: "Ænix Billing — per-minute usage-based billing for Managed PostgreSQL, Redis, Kafka and ClickHouse on Cozystack"
description: "Ænix Billing closes the gap between hosting managed Postgres / Redis / Kafka / ClickHouse on Cozystack and charging tenants per-minute, by CPU, memory and disk — through a Kubernetes-native billing API. No spreadsheets, no quarterly reconciliation."
slug: "aenix-billing-per-minute-managed-services-cozystack"
date: "2026-05-13"
author: "Timur Tukaev"
type: "announcement"
topics: ["Cozystack", "Kubernetes", "Multi-tenancy", "Platform Engineering", "Billing"]
language: "en"
companion_landing: "/products/aenix-platform/isp-edition/"
companion_label: "See ISP Edition →"
cover_image: ""
---

{{< placeholder-image width="1200" height="630" label="Ænix Billing — cover image (1200×630)" >}}

**You ship a managed Postgres or ClickHouse cluster to a tenant in two minutes. Now you need to charge them — by the minute, broken down by CPU, memory and disk, reconcilable to the cent. AWS RDS does this. GCP does this. On your own metal? Until now: a custom Prometheus script, a monthly spreadsheet export, and a sales call to explain "why is the number this big". Ænix Billing closes that gap.**

## What Ænix Billing is

A native Kubernetes extension API server that exposes the `billing.aenix.io/v1alpha1` API. You query it the same way you query the regular Kubernetes API — with `kubectl`, kubeconfig RBAC, your existing tooling — and it returns a structured `UsageReport` for any tenant, any workload, any time window.

Under the hood:

- **Cozystack Workload CRD** — every managed service (Postgres primary, Redis sentinel, ClickHouse shard, KubeVirt VM, Kubernetes worker, S3 bucket) is one `Workload` object.
- **Billing controller** — turns `Workload` state into Prometheus metrics: operational lifetime, owner tenant, kind/type, resource reservations.
- **VictoriaMetrics** — stores metrics with stream aggregation. (Aenix and Cozystack standardise on VictoriaMetrics + VictoriaLogs, not Prometheus/Loki.)
- **Billing API server** — serves the API, computes the definite integral of reservations over the requested time window.

The shape: a thin extension-API server, a small controller, your existing metrics store. No new dependency to operate. Your platform team already runs all of these components.

## What gets billed

Every consumer (a single Postgres pod, a Redis instance, a ClickHouse replica) is reported with:

- `vCPUHours` or `CPUHours` — switchable, depending on whether you bill physical or virtualised CPU
- `MemoryGiBHours` (or decimal `MemoryGBHours`)
- `EphemeralStorageGiBHours`
- `PersistentVolumeGBHours` — partitioned by storage class (NVMe vs HDD vs replicated remote)
- `IPAddressHours` — derived from MetalLB IP pool labels
- `LifetimeHours` — pure on-time, independent of reservations
- `S3StorageGBHours` and `S3PhysicalStorageGBHours` — for object storage tenants

`Workload` metadata travels with the report — `kind: postgres`, `type: master` vs `replica`, the owning tenant, custom Cozystack labels — so pricing rules can be as fine-grained as you want. Charge replicas at half the rate of primaries. Charge NVMe-backed volumes 3× HDD-backed. Apply a 20% discount to a strategic tenant. The data is there; the policy is yours.

## How you query it

A `UsageReport` is a Kubernetes object. You build a request like any other CRD:

```yaml
apiVersion: billing.aenix.io/v1alpha1
kind: UsageReport
query:
  tenant: tenant-acme
  includeSubTenants: true
  startTimestamp: 2026-04-01T00:00:00Z
  endTimestamp:   2026-05-01T00:00:00Z
```

```bash
kubectl create -f report.yaml -o yaml
```

You get back the same object with `report.consumers[]` populated — one entry per Postgres replica, Redis pod, ClickHouse shard, K8s worker — each with its own consumption breakdown.

- `includeSubTenants: true` recursively pulls every nested tenant
- `excludeTenants:` filters internal namespaces out
- `workload: postgres-myapp-1` scopes to a single cluster
- Time-window the report to a billing month, a single day, or a tenant's lifetime — the API accepts any RFC3339 interval

The same `kubectl get` mechanism that pulls a list of pods now pulls a tenant's invoice line items. RBAC works the same way — the billing team gets a kubeconfig scoped to the billing API; nothing more.

## Why this matters for hosting providers

You already host managed Postgres, Redis, Kafka, ClickHouse, S3 and Kubernetes via Cozystack. With Ænix Billing you get the missing piece — accurate per-tenant, per-workload, per-resource accounting that plugs into your invoicing. No spreadsheets. No quarterly reconciliation. No "why is my bill big" arguments with customers.

Three things change for the operations team:

1. **Billing is no longer a separate system.** Same API as the rest of the platform. Same RBAC. Same kubectl. Nothing new to learn or run.
2. **Disputes drop.** The line items in an invoice map one-to-one to the resources Cozystack actually scheduled. The customer can run the same query, see the same numbers, reconcile to the cent.
3. **Pricing experiments are cheap.** Want to A/B test charging by `MemoryGiBHours` instead of `vCPUHours` for a specific service tier? Don't change billing pipeline code — change the policy that consumes the same report.

## How it differs from AWS RDS / GCP billing

AWS RDS and Cloud SQL bill per-minute against a managed-service price list — the provider owns the price list and the customer accepts the line items as authoritative. **You are that provider** on Cozystack. Ænix Billing gives you the same per-minute granularity, with the pricing model and the resource taxonomy under your control. The data is exposed, the policy is yours.

For hosting providers running on bare metal — Hetzner, OVH, regional data centres, sovereign cloud builders — this is the difference between competing with hyperscalers on capability vs. competing on price. The capability has been the gap.

## Distribution

Ænix Billing is a proprietary module, distributed as part of **Ænix Enterprise** alongside Cozystack. The Cozystack platform stays Apache-2.0 and CNCF-governed. The billing layer ships under a commercial license to Aenix customers.

If you run a hosting business or a private cloud on Cozystack and want billing working out of the box, [book a discovery call](/contact/) — we'll talk scope, pricing, and rollout.

## Join the community

- **Cozystack** — [cozystack.io](https://cozystack.io)
- **GitHub** — [github.com/cozystack](https://github.com/cozystack)
- **Telegram** — [t.me/cozystack](https://t.me/cozystack)
- **CNCF Slack** — [#cozystack](https://kubernetes.slack.com/archives/C06L3CPRVN1) (need an invite? [slack.kubernetes.io](https://slack.kubernetes.io))
- **Community meetings** — [calendar](https://cozystack.io/community/)
