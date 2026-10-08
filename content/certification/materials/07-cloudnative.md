---
title: "How it all actually works"
description: "Desired state, operators and GitOps — the four ideas everything else rests on."
lesson: 7
weight: 7
layout: "cert-lesson"
language: "en"
url: "/certification/materials/cloud-native/"
hreflang_ru: "/ru/certification/materials/cloud-native/"
page_type: "flag-page"
---

The last lesson is about ideas, not components. They underlie everything covered so far, and
the questions about them are phrased simply: “why does it work this way”.

## You describe the outcome, not the actions

The familiar approach to administration is a sequence of steps: install, configure, start,
check. Here it is different: you describe **how things should be** — the desired state — and
the system decides on its own what to do to get there.

The difference shows when something breaks. A script that ran yesterday will not help today:
it has already been executed. A description of the desired state, on the other hand, is in
effect all the time — if reality drifts away from it, reality is brought back.

<figure>
<svg viewBox="0 0 560 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reconciliation loop">
  <circle cx="280" cy="90" r="66" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="5 5"/>
  <rect x="196" y="8" width="168" height="38" rx="7" fill="#dbeafe" stroke="#2563eb"/>
  <text x="280" y="32" text-anchor="middle" font-family="sans-serif" font-size="12.5" fill="#1e3a8a">1. Read how it should be</text>
  <rect x="368" y="70" width="170" height="38" rx="7" fill="#e0e7ff" stroke="#4f46e5"/>
  <text x="453" y="94" text-anchor="middle" font-family="sans-serif" font-size="12.5" fill="#312e81">2. Look at how it is</text>
  <rect x="196" y="134" width="168" height="38" rx="7" fill="#dcfce7" stroke="#16a34a"/>
  <text x="280" y="158" text-anchor="middle" font-family="sans-serif" font-size="12.5" fill="#14532d">3. Close the gap</text>
  <rect x="22" y="70" width="170" height="38" rx="7" fill="#f1f5f9" stroke="#64748b"/>
  <text x="107" y="94" text-anchor="middle" font-family="sans-serif" font-size="12.5" fill="#0f172a">4. Repeat forever</text>
</svg>
<figcaption>This loop runs continuously — both in Kubernetes controllers and in the platform's operators.</figcaption>
</figure>

Hence self-healing: a deleted replica of an application comes back not because someone
noticed it was missing, but because reality diverged from the description.

## What a manifest is made of

The description of the desired state lives in a YAML file called a **manifest**. Whatever
object you describe — a tenant, a database, a virtual machine — there are always four
top-level fields, and mixing them up in the exam is a bad idea.

| Field | What it holds |
|---|---|
| `apiVersion` | which API version the type belongs to, for example `apps.cozystack.io/v1alpha1` |
| `kind` | the type itself: `Tenant`, `Bucket`, `VMInstance` |
| `metadata` | identity data: name, namespace, labels, annotations |
| `spec` | **the desired state** — everything the object should become |

The fifth field, `status`, you never write: the controller fills it in, and it says how
things actually are. Hence a simple rule for reading any object: **`spec` is your
requirement, `status` is the platform's answer to it.** The reconciliation loop above is
exactly the continuous bringing of one in line with the other.

```yaml
apiVersion: apps.cozystack.io/v1alpha1
kind: Bucket
metadata:
  name: images          # what the object is called
  namespace: tenant-lab # where it lives
spec:                   # what it should become
  replicas: 2
```

## New object types and operators

`kubectl get tenants` works even though Kubernetes itself has no tenants. It works because
Cozystack **extends the Kubernetes API**, and the API server knows the `Tenant` type.

The API is extended in two different ways, and the exam distinguishes between them.

**Defining your own type — a CRD** (custom resource definition). You register a new type,
and from then on its objects are stored and served by the regular API server along with the
built-in ones. This is how, for example, backups (`backups.cozystack.io`) and gateways
(`gateway.cozystack.io`) are implemented in the platform.

**An aggregated API server.** A separate program takes over an entire API group, and the
main API server forwards requests to it. In Cozystack this is `cozystack-api` in the
`cozy-system` namespace, and it is the one responsible for the most visible groups —
`apps.cozystack.io` (tenants, buckets, databases, clusters), `core.cozystack.io`,
`sdn.cozystack.io`. You will not find a CRD named `tenants.apps.cozystack.io` in the cluster:
this type is not registered, it is **served** by the aggregated server.

Which component is responsible for which group is visible with a single command — the
`SERVICE` column shows either the program's address or the word `Local`, meaning “the regular
API server, type from a CRD”:

```bash
kubectl get apiservices | grep cozystack
```

But a type on its own does nothing: it is a record the cluster agrees to store. The work is
done by an **operator** — a program that watches objects of its type and brings the world
into line.

Hence the practical conclusion: if an object has been created and nothing happened, the
question is not for the object but for the operator. Either it is not running, or it failed.

## GitOps

Since state is described as text, the text can be stored in version control. Git then
becomes the single source of truth, and a dedicated program makes sure the cluster matches
it.

The platform uses **FluxCD** and applies this approach **to itself**: its components are
described and deployed the same way you would deploy your own application.

One caveat, so as not to overstate things. The desired state of the platform itself is
defined not by your repository but by the **Platform Package** — the YAML configuration of
the installation; FluxCD pulls the charts from an OCI registry. An agent inside the cluster
continuously brings the cluster to the described state, so a change made bypassing the
description does not live long.

FluxCD has two objects you need to know by name. `HelmRepository` is the source the charts
come from. `HelmRelease` (short name `hr`) is the statement “this chart, of this version,
with these values, must be installed and stay installed”.

### How to temporarily disable reconciliation

Continuous reconciliation gets in the way in exactly one case: when you need to fix
something by hand. A change made bypassing the description will be rolled back by the
controller within a few seconds — that is what it exists for.

For this case `HelmRelease` has a switch, `spec.suspend`. For a release switched to
`suspend`, the controller **stops reconciling**: it does not reinstall the chart, does not
roll back changes, and does not touch the object at all. Meanwhile **the workload keeps
running** — pods are not deleted, the application responds — and your manual changes are
kept until reconciliation is switched back on.

```bash
kubectl patch hr <name> -n <namespace> --type merge -p '{"spec":{"suspend":true}}'
```

The reverse operation is `"suspend": false`. At the moment it is turned back on, the
controller reconciles the object anew, and everything you fixed by hand bypassing the
description is rolled back. That is why `suspend` is a diagnostic tool for the duration of an
investigation, not a way to live with manual changes.

## Helm

One object is one object. An application is usually a dozen: a deployment, a service,
configuration, secrets, access rules.

**Helm** packages such a set into a **chart** — templates plus values. By changing the
values, you get different installations from one package.

In the platform, Helm is not a recommendation but a load-bearing structure: every item in the
managed applications catalog is a chart, and ordering a service deploys exactly that chart.
The platform itself is also installed with a Helm chart — with a single
`helm upgrade --install` command using the `cozy-installer` chart into the `cozy-system`
namespace.

The result is the following chain, and it is worth memorizing in full:

<p style="text-align:center;font-family:monospace;font-size:15px;margin:1.6em 0">
object → HelmRelease → chart → operator → running pods
</p>

Everything the platform does goes through it. You ordered a database — it went through it.
You created a tenant — it went through it. The platform installed itself — that too.

## Kubernetes vocabulary that will be asked here too

This exam domain is described as “the seventh topic plus basic terminology”, so it is worth
going over seven terms out loud. The English names are exactly the ones that will appear in the
questions.

| Object | What it is and why |
|---|---|
| `Namespace` | a named space that groups resources; each tenant has its own |
| `Pod` | the smallest unit of workload — one container or several together |
| `Deployment` | describes what is desired: which image, how many replicas, how to update |
| `ReplicaSet` | its executor: keeps the required number of pods; it is rarely touched by hand |
| `Service` | a stable name and address in front of a changing set of pods |
| `PVC` | a claim for persistent storage that survives a pod restart |
| `Secret` | stores sensitive data: passwords, tokens, keys |

`Service` has three types: **ClusterIP** — the address is visible only inside the cluster,
this is the default type; **NodePort** — opens a port on every node, good for testing;
**LoadBalancer** — asks the platform for an external address; on your own hardware it is
provided by MetalLB from lesson five.

And five commands the exam asks about by their exact spelling:

- `kubectl get pods -A` — all pods in all namespaces at once
- `kubectl describe pod <name>` — pod details and, most importantly, its events
- `kubectl api-resources` — which resource types the cluster knows at all, including those
  added by the platform
- `kubectl apply -f manifest.yaml --dry-run=server` — submit the manifest to the server for
  validation without saving anything
- `helm upgrade --install` — idempotent: installs if the release does not exist, upgrades if
  it does

<div class="exam-box">
<h4>What the exam will ask</h4>
<ul>
<li>That it is the desired state that is described, not a sequence of actions.</li>
<li>That a controller continuously compares the desired state with the actual one and closes the gap.</li>
<li>That an object's desired state lives in <code>spec</code>, the actual state in
<code>status</code>, while <code>apiVersion</code>, <code>kind</code> and <code>metadata</code>
are responsible for the API version, the type and the name.</li>
<li>That a CRD adds a type, while the work is done by an operator.</li>
<li>That <code>kubectl get tenants</code> works because Cozystack extends the Kubernetes API:
the <code>Tenant</code> type is served by the aggregated server <code>cozystack-api</code>,
not by a CRD.</li>
<li>That <code>suspend</code> on a HelmRelease stops reconciliation but does not delete the
workload: pods keep running, manual changes are kept until reconciliation is turned back on.</li>
<li>That the platform applies GitOps to itself via FluxCD.</li>
<li>That the platform's desired state is defined by the Platform Package, and FluxCD takes the
charts from an OCI registry.</li>
<li>The two FluxCD objects: <code>HelmRepository</code> — the source of charts,
<code>HelmRelease</code> — the statement about an installed chart.</li>
<li>That a chart is the unit of packaging, and every item in the managed applications catalog is a chart.</li>
<li>That Cozystack itself is installed with the <code>cozy-installer</code> Helm chart.</li>
<li>The chain: object → HelmRelease → chart → operator → pods.</li>
<li>What Namespace, Pod, Deployment, ReplicaSet, Service, PVC and Secret are — one sentence
for each.</li>
<li>The three Service types: ClusterIP, NodePort, LoadBalancer.</li>
<li>Commands: <code>kubectl get pods -A</code>, <code>kubectl describe pod</code> for events,
<code>kubectl api-resources</code>, <code>--dry-run=server</code>,
<code>helm upgrade --install</code>.</li>
</ul>
</div>

<p class="doclink">Further reading:
<a href="https://cozystack.io/docs/v1.6/" target="_blank" rel="noopener">platform overview</a> ·
<a href="https://fluxcd.io/flux/concepts/" target="_blank" rel="noopener">FluxCD concepts</a></p>
