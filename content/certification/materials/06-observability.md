---
title: "Observability and backups"
description: "Who collects metrics and logs, where to look at them, and how a backup differs from fault tolerance."
lesson: 6
weight: 6
layout: "cert-lesson"
language: "en"
url: "/certification/materials/observability/"
hreflang_ru: "/ru/certification/materials/observability/"
page_type: "flag-page"
---

Two topics in one lesson, because both are about the same thing: what to do when something
has gone wrong — and what you managed to prepare in advance.

## Metrics and logs

The stack here is not the one people expect out of habit, and this is the exam's favorite
trap.

| What is collected | With what |
|---|---|
| Metrics | **VictoriaMetrics** |
| Logs | **VictoriaLogs** |
| Dashboards | **Grafana** |
| Alerts | **Alerta** |

There is no Prometheus, Loki or Elasticsearch in the platform. VictoriaMetrics does
understand the PromQL query language, though — so familiar queries work, while the storage
is different: more compact and cheaper at large volumes.

Metrics are collected by the **vmagent** agent, which lives next to the workload and sends
what it collects to the storage. The storage itself is deployed as a **`VMCluster`** — a
clustered VictoriaMetrics installation managed by an operator. Logs are collected by
**fluent-bit** — the same role, only for text.

The alerting chain is short, and the exam asks about its order: **VMAlert** evaluates rules
against the metrics in VictoriaMetrics → **Alerta** gathers the firings in one place,
removes duplicates and routes them → email, SMS, messengers. Alerta is there so that a
single incident does not arrive as eight emails from eight sources.

Grafana ships with ready-made dashboards, and the exam asks about them by group name:
**Cluster Overview** — the health of the cluster as a whole, **Node Metrics** — CPU, memory,
disk and network per node, **ETCD** — the state of the etcd store, **Storage** — the health
of LINSTOR and SeaweedFS, **Tenant Applications** — workloads and managed applications per
tenant. There are also dashboards for entry-point traffic and for managed databases.

<figure>
<svg viewBox="0 0 620 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The path of a metric from a pod to a graph">
  <rect x="15" y="60" width="120" height="50" rx="7" fill="#f1f5f9" stroke="#64748b"/>
  <text x="75" y="82" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a">Your pods</text>
  <text x="75" y="99" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">expose metrics</text>
  <path d="M140 85 L178 85" stroke="#64748b" stroke-width="2" marker-end="url(#c)"/>
  <rect x="183" y="60" width="120" height="50" rx="7" fill="#e0e7ff" stroke="#4f46e5"/>
  <text x="243" y="82" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="#312e81">vmagent</text>
  <text x="243" y="99" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#3730a3">collects and sends</text>
  <path d="M308 85 L346 85" stroke="#64748b" stroke-width="2" marker-end="url(#c)"/>
  <rect x="351" y="60" width="130" height="50" rx="7" fill="#dbeafe" stroke="#2563eb"/>
  <text x="416" y="82" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#1e3a8a">VictoriaMetrics</text>
  <text x="416" y="99" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1e40af">stores</text>
  <path d="M486 85 L524 85" stroke="#64748b" stroke-width="2" marker-end="url(#c)"/>
  <rect x="529" y="60" width="80" height="50" rx="7" fill="#dcfce7" stroke="#16a34a"/>
  <text x="569" y="82" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#14532d">Grafana</text>
  <text x="569" y="99" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#166534">draws</text>
  <defs><marker id="c" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
    <path d="M0 0 L8 4 L0 8 z" fill="#64748b"/></marker></defs>
</svg>
<figcaption>Logs follow the same path, only with fluent-bit instead of vmagent and VictoriaLogs instead of VictoriaMetrics.</figcaption>
</figure>

Remember inheritance from the second lesson: a tenant without its own monitoring sends
metrics to its parent. But turning collection on **after the fact is useless** — there is
nowhere to get records for the past from, so this should be decided when the cluster is
created, not when a graph is suddenly needed.

## Backups

There are two different mechanisms here, and mixing them up is a sure way to get a question
wrong.

**Backups of managed services** (backup). **Four objects** are at work here, and mixing them
up is a sure way to get it wrong:

| Object | What it does |
|---|---|
| `BackupClass` | where and how to store backups. Created by the platform administrator, applies to the whole cluster |
| `Plan` | the schedule: take backups on such-and-such a timetable |
| `BackupJob` | a one-off run, here and now |
| `Backup` | the result — the backup itself |

The key pair is `Plan` and `BackupJob`. You need a backup **every night** — that is a `Plan`.
You need a backup **right now, before an upgrade** — that is a `BackupJob`. Restoring is a
separate object, `RestoreJob`.

Starting with version 1.5, the platform has a ready-made `cozy-default` — a backup class that
works right away, without configuring storage.

**Velero.** One level up: it backs up the cluster's own objects and volumes. This is about
restoring the platform, not an individual database. Since version 1.5 it is not an option but
a standard component — installed by default.

It is configured with two objects: `BackupStorageLocation` — where to store backups, and
`VolumeSnapshotLocation` — where to keep volume snapshots. For a Kubernetes cluster inside a
tenant, Velero is enabled with a single field: `spec.addons.velero.enabled`.

## Where the boundary lies

The most valuable thing in this topic is understanding what backups do **not** do.

A backup of a managed application takes **only the data**. It does not include the
application's HelmRelease, the CR object you created in the managed applications catalog, or
the secrets created by the database operator.

Hence the restore rule: the target application must exist **before** you restore. A restore
pours data into an existing database; it does not rebuild the application from scratch.

There are no incremental backups of virtual machines: the platform does not do changed block
tracking, and every backup is a full one. If you are used to incremental chains, you will have
to recalculate backup windows and storage capacity.

Backups are not fault tolerance. Replicas save you from a node failure, backups from deleted
data. These are different troubles, and one does not replace the other.

A backup that has never been restored is not a backup but a hope. Restores have to be tried
before they are needed.

And most importantly: a backup is kept in object storage. If that storage lives in the same
cluster as the data, it will not save you from losing the whole cluster. For real protection,
the storage must be outside.

We have covered what the platform is made of and what it can do. One last question remains —
why it is built exactly this way.

<div class="exam-box">
<h4>What the exam will ask</h4>
<ul>
<li>That metrics are stored by VictoriaMetrics and logs by VictoriaLogs. Not Prometheus and not Loki.</li>
<li>That VictoriaMetrics is PromQL-compatible.</li>
<li>That metrics are collected by vmagent and stored by VMCluster.</li>
<li>The alerting order: VMAlert → Alerta → email, SMS, messengers.</li>
<li>The standard dashboard groups: Cluster Overview, Node Metrics, ETCD, Storage,
Tenant Applications.</li>

<li>The four objects: <code>BackupClass</code>, <code>Plan</code> (schedule), <code>BackupJob</code> (one-off run), <code>Backup</code> (result).</li>
<li>That a scheduled backup is a <code>Plan</code>, not a <code>BackupJob</code>.</li>
<li>That <code>cozy-default</code> works out of the box since version 1.5.</li>
<li>That Velero works at the platform level, not at the level of an individual service.</li>
<li>That Velero became a standard component in version 1.5, and in a tenant cluster it is enabled
with the <code>spec.addons.velero.enabled</code> field.</li>
<li>That <code>BackupStorageLocation</code> sets where backups are stored, and
<code>VolumeSnapshotLocation</code> where volume snapshots are kept.</li>
<li>What a “data only” backup does not take: the HelmRelease, the CR object, the operator's secrets.</li>
<li>That the target application must exist before the restore.</li>
<li>That there are no incremental backups of virtual machines — every backup is a full one.</li>
<li>That replicas and backups solve different problems.</li>
</ul>
</div>

<p class="doclink">More:
<a href="https://cozystack.io/docs/v1.6/operations/services/monitoring/" target="_blank" rel="noopener">monitoring</a> ·
<a href="https://cozystack.io/docs/v1.6/operations/services/" target="_blank" rel="noopener">cluster services</a></p>
