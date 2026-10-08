---
title: "Cheat sheet"
description: "One page for the whole exam: what is responsible for what, what it gets swapped for in the answer options, and how to prepare day by day."
lesson: 8
weight: 8
layout: "cert-lesson"
language: "en"
url: "/certification/materials/cheatsheet/"
hreflang_ru: "/ru/certification/materials/cheatsheet/"
page_type: "flag-page"
---

The last page before the exam. Reading it instead of the lessons is pointless — it does not
explain, it reminds. But skimming it half an hour before your attempt is exactly right.

## What is responsible for what

The third column matters more than the first two: the exam builds wrong answer options out of
substitutions, and almost all of them come from this list.

| Task | Component | What it gets swapped for in the options |
|---|---|---|
| Node operating system | Talos Linux | Ubuntu, CoreOS |
| Virtual machines | KubeVirt | Proxmox, oVirt |
| Control plane of tenant clusters | Kamaji | Cluster API on its own |
| Block storage | LINSTOR / DRBD | Ceph, Longhorn |
| Object storage | SeaweedFS | MinIO, Ceph RGW |
| Pod network, policies | Cilium | Calico, Flannel |
| Tenant networks, VPC | Kube-OVN | Cilium, Calico |
| External addresses | MetalLB | cloud load balancer |
| Metrics | VictoriaMetrics | **Prometheus** |
| Logs | VictoriaLogs | **Loki**, Elasticsearch |
| Dashboards | Grafana | Kibana |
| Alerts | VMAlert → Alerta | Alertmanager |
| Configuration delivery | FluxCD | ArgoCD |
| Sign-in | Keycloak | Dex |
| External DNS records | ExternalDNS | CoreDNS |
| Certificates | cert-manager | ExternalDNS |

In bold — the two most common traps. Prometheus and Loki are not in the platform at all.

## Numbers that get asked

| What | Value |
|---|---|
| Minimum nodes | 3 |
| Per node | 8 cores, 24 GB of memory |
| Disks per node | 50 GB + 256 GB |
| Latency between nodes | under 10 ms |
| Network | a single L2 segment |
| `cpuAllocationRatio` | 10 by default |
| Namespace name length | up to 63 characters |

## Names to know verbatim

**Installation variants:** `isp-full`, `isp-full-generic`, `isp-hosted`, `default`.
The old names `paas-full` and `distro-full` were replaced in version 1.5 — in the answer options they are a trap.

**Tenant switches:** `etcd`, `monitoring`, `ingress`, `seaweedfs`.

**Access labels:** `policy.cozystack.io/allow-to-apiserver`,
`policy.cozystack.io/allow-to-etcd`. The value is the string `"true"`.

**Backup objects:** `BackupClass`, `Plan`, `BackupJob`, `Backup`, `RestoreJob`.
The ready-made class is `cozy-default`.

**Platform API group:** `apps.cozystack.io/v1alpha1`. It is served by the **aggregated
API server** `cozystack-api` in `cozy-system` — not a CRD. That is why `kubectl get tenants` works.

**Manifest fields:** `apiVersion` — the API version, `kind` — the type, `metadata` — name and labels,
`spec` — **the desired state**, `status` — the actual state, written by the controller.

**A tenant's kubeconfig** is assembled from a **token**, a **CA certificate** and the **server address**:
the first two come from the tenant's secret of the same name, the address from the administrator's kubeconfig.

**`suspend` on a HelmRelease** — the controller stops reconciling; pods keep running,
manual changes are kept until reconciliation is turned back on.

## Chains

<p style="font-family:monospace;font-size:14px;line-height:2">
Layers: Talos → Kubernetes → Cozystack<br>
Order: object → HelmRelease → chart → operator → pods<br>
Metric: pod → vmagent → VictoriaMetrics → Grafana<br>
Log: pod → fluent-bit → VictoriaLogs → Grafana<br>
Alert: VMAlert → Alerta → email and messengers<br>
Namespace name: tenant- + chain of ancestors without the root
</p>

## What exists and what does not

**Exists:** live migration of machines, snapshots, GPU passthrough, scheduled backups,
separate tenant networks.

**Does not exist:** automatic balancing across nodes, like DRS. Incremental backups of
virtual machines. The ability to disable tenant isolation. **Automatic restart of a virtual
machine on another node after a failure** — that requires fencing, which is not included.

**Changed in 1.5:** **node preparation** for GPU passthrough has been automated — node
labeling and the list of allowed devices. Passthrough itself existed before.

## Five-day preparation plan

| Day | What to do |
|---|---|
| 1 | Lesson 7 — it is about the ideas everything rests on. Then lesson 1 |
| 2 | Lesson 2 — the densest one. Go over whatever you missed on day one |
| 3 | Lessons 3 and 4 |
| 4 | Lessons 5 and 6 |
| 5 | [Practice questions](/certification/practice/) several times, catch up on weak topics, this cheat sheet |

If you do not have five days — read straight through in an evening, run the practice
questions until you stop making mistakes, and go take the exam.

## How the exam works

60 questions, 90 minutes. In English — if it is not your native language, request an extra
30 minutes in advance. Some questions have several correct answers, and they count only if
answered in full. The result is pass or fail, with an overall score and a breakdown by topic.
Two attempts, one week apart.

The passing score is not published. Prepare to know the material, not to hit a number.
