---
title: "Managed applications catalog"
description: "What you can order from the platform, what happens after you click the button, and why it is always the same mechanism."
lesson: 3
weight: 3
layout: "cert-lesson"
language: "en"
url: "/certification/materials/catalog/"
hreflang_ru: "/ru/certification/materials/catalog/"
page_type: "flag-page"
---

The catalog is usually the reason people take the platform in the first place. Instead of "please set up PostgreSQL for us",
a person opens a list and orders a database the way they would order a virtual machine.

## What is on the list

The catalog is split into four groups, and the exam names them in English: `Databases`,
`Messaging`, `Platform services`, and `Networking services`.

| Group | Items |
|---|---|
| Databases | PostgreSQL, MariaDB, MongoDB, ClickHouse, FoundationDB, Redis, Qdrant |
| Messaging | Kafka, NATS, RabbitMQ |
| Platform services | Harbor, OpenBao, Bucket, Tenant, Monitoring, Etcd, Ingress |
| Networking services | VPN, TCP balancer, HTTP cache, virtual-router, VPC |

Virtual machines and Kubernetes clusters live in the same API group, but the exam assigns them to
other domains — virtualization and multi-tenancy — rather than to the catalog.

One item in platform services comes as a surprise: **`Tenant` is a catalog application too**.
That is exactly how nested tenants are created — an administrator orders a child tenant from
the catalog, just as they would order a database.

The list grows from version to version, and there is no point memorizing all of it. What gets asked is something else —
**that they are all built the same way**.

## One mechanism for everything

This is worth understanding once, so you never have to come back to it.

<figure>
<svg viewBox="0 0 660 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="How an order turns into a running service">
  <rect x="10" y="70" width="130" height="56" rx="8" fill="#dbeafe" stroke="#2563eb"/>
  <text x="75" y="93" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#1e3a8a">Your order</text>
  <text x="75" y="110" text-anchor="middle" font-family="monospace" font-size="11" fill="#1e40af">kind: Postgres</text>
  <path d="M145 98 L185 98" stroke="#64748b" stroke-width="2" marker-end="url(#a)"/>
  <rect x="190" y="70" width="130" height="56" rx="8" fill="#e0e7ff" stroke="#4f46e5"/>
  <text x="255" y="93" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#312e81">HelmRelease</text>
  <text x="255" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#3730a3">Flux deploys the chart</text>
  <path d="M325 98 L365 98" stroke="#64748b" stroke-width="2" marker-end="url(#a)"/>
  <rect x="370" y="70" width="130" height="56" rx="8" fill="#f1f5f9" stroke="#64748b"/>
  <text x="435" y="93" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#0f172a">Operator</text>
  <text x="435" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">from the chart, runs the DB</text>
  <path d="M505 98 L545 98" stroke="#64748b" stroke-width="2" marker-end="url(#a)"/>
  <rect x="550" y="70" width="100" height="56" rx="8" fill="#dcfce7" stroke="#16a34a"/>
  <text x="600" y="93" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="700" fill="#14532d">Pods</text>
  <text x="600" y="110" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#166534">database is up</text>
  <defs><marker id="a" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
    <path d="M0 0 L8 4 L0 8 z" fill="#64748b"/></marker></defs>
</svg>
<figcaption>The same path for a database, a queue, a virtual machine and a cluster.</figcaption>
</figure>

You create an object. The platform creates a `HelmRelease` for it, Flux deploys the chart —
and the chart in turn brings the **operator**, which from then on runs your database: it watches
replication, takes backups, and switches the primary copy over on failure.

The platform does not write its own database engines — it uses well-known operators. Their names come up in questions:

| Service | Operator |
|---|---|
| PostgreSQL | CloudNativePG |
| Kafka | Strimzi |
| MongoDB | Percona |
| ClickHouse | Altinity |

Remember the order of the links exactly this way: the operator comes **from** the chart, it does not
precede it.

Two practical conclusions follow from this, and both show up in questions. First: **the dashboard does nothing
special** — clicking the button assembles exactly the same object and sends it to the
API. Second: if a service has not come up, look at the `HelmRelease` instead of guessing from the pods.

Which application types exist on a particular cluster is shown by a single command:

```bash
kubectl api-resources | grep apps.cozystack
```

The platform writes the result back into the object itself — into `status.conditions`. A healthy
application has `Ready: True` there; if it does not, go further down the chain, to the `HelmRelease`.

## Three paths to the same thing

**The dashboard** is a form with fields. The fields come from the application's definition, so the list
of parameters always matches the platform version.

**kubectl** is the same object as text. This path matters not because it is more convenient, but because
the definition can be reviewed, stored in Git and rolled back. A button click cannot be rolled back.

**Terraform** is for those whose infrastructure is already described in it. The official provider is called
`cozystack/cozystack`; the name is worth remembering, it gets asked.

And a warning common to all three paths: `kubectl delete` on an application object wipes out the
application entirely — together with its pods and data. Treat this command the same way you would treat
deleting a database.

## What you set when ordering

Each service has its own set of fields, but three things are almost always there.

**Size** (`resourcesPreset`) — how many resources to give. It is set not with numbers but with a ready-made preset such as
`t1.micro` or `u1.medium`: the platform substitutes concrete values behind it.

**Storage** (`storageClass`) — how much space and of which class. `replicated` keeps several copies on
different nodes; `local` is faster but lives on a single one.

**Users and databases** — the platform creates them itself. That is exactly why the schema file
you apply afterwards contains no commands to create the database and the user: they have already been run.

The platform generates passwords itself and puts them in a secret. In the dashboard it is visible on the
`Secrets` tab of the application itself.

## High availability is not free

When ordering a service, you choose the number of replicas. One replica is a training setup: the node goes away, and the service
goes with it. With two or more, the platform itself keeps track of which one is primary and switches over on failure.

This is also where a common trap lives: **service high availability and data safety are different
things**. Replicas save you from a node failure, but not from a dropped table. For the latter you need
backups, and they have a lesson of their own.

## What version 1.5 brought

Three facts from this release are asked about directly. Encryption of client connections (`TLS`)
arrived for four services: Kafka, NATS, Qdrant and PostgreSQL. Backups of managed
applications started working out of the box — previously an administrator first had to set up
storage for them. And `ApplicationDefinition` appeared: the mechanism registers a new application type in the catalog
on top of a Helm chart, and that type immediately gets its own API object, a form in the
dashboard and the same chain with a `HelmRelease`. This is how organizations add their own
services to the shared catalog — the catalog is not a closed list.

We have covered the catalog, but one of its items — virtual machines — deserves a separate look:
it has a model of its own, and habits from vSphere let you down here.

<div class="exam-box">
<h4>What the exam will ask</h4>
<ul>
<li>The four catalog groups: <code>Databases</code>, <code>Messaging</code>,
<code>Platform services</code>, <code>Networking services</code> — and what belongs where.</li>
<li>That <code>Tenant</code> is itself a catalog item, and nested tenants are created through it.</li>
<li>The operators by name: CloudNativePG — PostgreSQL, Strimzi — Kafka, Percona — MongoDB,
Altinity — ClickHouse.</li>
<li>That ordering any service means an object in the API, and the dashboard merely assembles it for you.</li>
<li>That the list of types is shown by <code>kubectl api-resources | grep apps.cozystack</code>.</li>
<li>That readiness is read from <code>status.conditions</code> — it should show
<code>Ready: True</code>.</li>
<li>That <code>kubectl delete</code> on the object deletes the application along with its data.</li>
<li>The Terraform provider name is <code>cozystack/cozystack</code>.</li>
<li>What is new in 1.5: TLS for Kafka, NATS, Qdrant and PostgreSQL; backups out of the box;
<code>ApplicationDefinition</code> for extending the catalog.</li>
<li>The chain: object → HelmRelease → chart → operator → running pods.</li>
<li>That troubleshooting starts with the state of the HelmRelease.</li>
<li>That the platform creates users and databases and puts passwords in a secret.</li>
<li>The difference between <code>replicated</code> and <code>local</code>.</li>
<li>That the number of replicas protects against a node failure but does not replace backups.</li>
</ul>
</div>

<p class="doclink">Further reading:
<a href="https://cozystack.io/docs/v1.6/applications/" target="_blank" rel="noopener">managed applications</a> ·
<a href="https://cozystack.io/docs/v1.6/kubernetes/" target="_blank" rel="noopener">Kubernetes clusters</a></p>
