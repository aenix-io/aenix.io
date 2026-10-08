---
title: "Tenants and access"
description: "How the platform divides itself among tenants, where quotas come from, and why a tenant is more than just a namespace."
lesson: 2
weight: 2
layout: "cert-lesson"
language: "en"
url: "/certification/materials/tenants/"
hreflang_ru: "/ru/certification/materials/tenants/"
page_type: "flag-page"
---

The second-heaviest topic of the exam — and arguably the most useful in practice. If the first
lesson explained what the platform is made of, this one explains how it is divided among people.

## A tenant is an object, not a folder

In familiar Kubernetes, isolation begins and ends with a namespace. Here it is different: **a
tenant is a platform object**, and creating one brings a whole set of consequences with it.

You create it the same way as everything else:

```yaml
apiVersion: apps.cozystack.io/v1alpha1
kind: Tenant
metadata:
  name: acme
  namespace: tenant-root
```

In response, the platform creates a namespace, grants permissions, applies network policies,
sets up quotas and, if requested, brings up its own monitoring and storage inside.

The tenant also gets its own domain, built by the rule `<name>.<parent domain>`. The platform
lives at `cloud.example.com` — so tenant `alpha` gets `alpha.cloud.example.com`, and its child
`beta` gets `beta.alpha.cloud.example.com`. If needed, the domain can be overridden manually.

## Tenants nest inside each other

This is what sets the model apart from a flat list of namespaces: tenants form a tree.

<figure>
<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tenant tree">
  <rect x="240" y="14" width="160" height="42" rx="7" fill="#dbeafe" stroke="#2563eb"/>
  <text x="320" y="34" text-anchor="middle" font-family="monospace" font-size="13" font-weight="700" fill="#1e3a8a">tenant-root</text>
  <text x="320" y="49" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#1e40af">platform root</text>
  <line x1="320" y1="56" x2="320" y2="76" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="150" y1="76" x2="490" y2="76" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="150" y1="76" x2="150" y2="96" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="490" y1="76" x2="490" y2="96" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="70" y="96" width="160" height="42" rx="7" fill="#e0e7ff" stroke="#4f46e5"/>
  <text x="150" y="116" text-anchor="middle" font-family="monospace" font-size="13" fill="#312e81">tenant-acme</text>
  <text x="150" y="131" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#3730a3">customer</text>
  <rect x="410" y="96" width="160" height="42" rx="7" fill="#e0e7ff" stroke="#4f46e5"/>
  <text x="490" y="116" text-anchor="middle" font-family="monospace" font-size="13" fill="#312e81">tenant-beta</text>
  <text x="490" y="131" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#3730a3">customer</text>
  <line x1="150" y1="138" x2="150" y2="162" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="70" y="162" width="160" height="42" rx="7" fill="#f1f5f9" stroke="#64748b"/>
  <text x="150" y="182" text-anchor="middle" font-family="monospace" font-size="13" fill="#0f172a">tenant-acme-dev</text>
  <text x="150" y="197" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#475569">customer's department</text>
</svg>
<figcaption>A tenant lives inside its parent. The namespace name is made of the word tenant- and the name.</figcaption>
</figure>

The naming rule is asked about, and it is a little trickier than it looks: the namespace name is
built from the word `tenant-` and **the whole chain of ancestors joined by hyphens, except the
root**.

| Tenant path | Namespace |
|---|---|
| `root/acme` | `tenant-acme` |
| `root/alpha/beta` | `tenant-alpha-beta` |
| `root/a/b/c` | `tenant-a-b-c` |

The root does not make it into the name — `tenant-root-alpha-beta` would be a wrong answer.

The same rule gives a restriction on names: **a hyphen in a tenant name is forbidden**, because
it is reserved as the ancestor separator. There is no tenant `acme-dev` — there is `dev` inside
`acme`, and it lives in `tenant-acme-dev`.

In the object itself these two names sit in different fields, and the difference between them is
asked about too: `metadata.namespace` is the **parent's** namespace, where the CR itself lives,
while the tenant's own namespace is written by the platform into `status.namespace`. That also
gives you the way to list the children — `kubectl get tenants -n tenant-alpha` shows the CRs
created inside `alpha`.

Why this matters: a provider hands a tenant to a customer, and the customer divides it among its
own departments — without coming to the provider for every new environment.

## What is inherited and what is enabled

A tenant has exactly four switches, and the exam asks for their literal names: `etcd` — its own
etcd cluster, `monitoring` — its own monitoring, `ingress` — its own ingress controller with TLS,
`seaweedfs` — its own S3 object storage. Each can be enabled or left disabled.

The key idea the exam likes to test: **if a service is disabled, the tenant goes up the tree to
the nearest ancestor that has it enabled**. Not necessarily to the parent and not necessarily to
the root — to the nearest one. It is not left without the service; it inherits it. A tenant
without its own monitoring sends metrics to the parent's monitoring; a tenant without its own
storage puts files into the parent's.

Enabling your own makes sense when you need real isolation — for example, a customer must not
see other customers' metrics even theoretically. The cost is resources: every enabled service is
processes that actually run.

## Quotas and overcommit

A tenant is assigned a limit on CPU and memory:

```yaml
spec:
  resourceQuotas:
    cpu: 16
    memory: 32Gi
```

Resource sizes are set with a **preset** in the format `<series>.<size>`. The series fixes the
CPU-to-memory ratio: `t1` — 1:0.5, `c1` — 1:1, `s1` — 1:2, `u1` — 1:4, `m1` — 1:8. Sizes range
from `nano` to `4xlarge`, so `u1.medium` is the universal series in a medium size.

If a `resources` block is written explicitly next to the preset, it wins:

```yaml
resources:
  cpu: 4
  memory: 8Gi
```

And the trap that all of this is asked about for: tenant and application presets are **not the
same thing** as KubeVirt instance types for virtual machines, with the series `U`, `O`, `CX`,
`M` and `RT`. The string `u1.medium` is valid in both systems and means different things, so
check which object the question is about.

And now the thing practically everyone trips over — **overcommit** (`cpuAllocationRatio`,
**10** by default).

It works like this: when you run a workload with a limit of four CPUs, the platform asks the
scheduler not for four, but for **the limit divided by the ratio** — that is, four tenths. A
small amount is guaranteed, and a lot can be taken when needed.

The formula is short, and it is worth memorizing verbatim:

<p style="text-align:center;font-family:monospace;font-size:15px;margin:1.5em 0">
request = limit ÷ cpuAllocationRatio
</p>

The point is that applications almost never consume their limit. Handing out guarantees at the
upper bound means keeping half of the hardware idle. But if you do not know about the ratio, the
scheduler's behavior seems senseless: you asked for four cores, and less than half of one is
reserved.

It matters where this ratio lives: it is configured at the level of **the whole platform**, not
in an individual tenant. One for everyone — do not pick it as a tenant property in the answer
options.

## Isolation

By default tenants cannot see each other: network policies forbid traffic between namespaces.
And this is not a switch — **isolation cannot be disabled**. The `isolated` flag existed before
version 1.0 and has been removed; if it shows up in the answer options, it is a trap.

Pods are cut off not only from their neighbors. By default they cannot reach either
`kube-apiserver` or the tenant's own `etcd`. If access is needed, it is opened selectively, with
labels on the pod:

```yaml
policy.cozystack.io/allow-to-apiserver: "true"
policy.cozystack.io/allow-to-etcd: "true"
```

The value is the string `"true"`, and that is asked about too.

## How people get inside

Three paths, and this is asked about too.

**Dashboard** — the platform's web interface. Sign-in is through **Keycloak**, that is, with a
corporate account rather than a separate password.

**kubeconfig** — the access file issued to a tenant. Inside it is not a certificate but a call
to an external program: on the first request `kubectl` opens a browser, you sign in through
Keycloak, and the issued token is valid until it expires. This, by the way, is why you need to
install `kubelogin`: without it `kubectl` does not know how to log in.

**Terraform** — the same API, only declaratively.

### Where the kubeconfig file itself comes from

A tenant is not handed a ready-made kubeconfig file — the platform administrator builds it with
a script from the documentation. You do not need to know that script by heart, but **what it
builds the file from** is asked about.

Every tenant has a secret with the same name in its namespace: for tenant `alpha` it is the
secret `alpha` in the `tenant-alpha` namespace. The script takes three things from it:

| What is taken | From which field | Why |
|---|---|---|
| access token | `token` | the tenant presents itself to the API server with it |
| certificate authority certificate | `ca.crt` | `kubectl` uses it to verify the server is genuine |
| default namespace | `namespace` | so you do not have to write `-n` in every command |

The address of the API server itself the script takes not from the secret but from the current
kubeconfig of the administrator who runs the script. In total, the file is built from **the
token, the CA certificate and the server address** — and in this variant neither Keycloak nor
`kubelogin` is required: the token is already inside the file.

An important consequence follows: **a tenant kubeconfig is a secret in exactly the same sense
as a password.** Whoever gets the file gets the tenant's permissions too, until the token is
revoked.

Permissions inside a tenant are granted with ordinary Kubernetes roles. The platform has no
separate permission system, and that is the answer to a popular trick question.

The tenant is created, quotas are assigned, people are let inside. Now they need to order
something.

<div class="exam-box">
<h4>What the exam will ask</h4>
<ul>
<li>That a tenant is a platform object, not just a namespace.</li>
<li>That the namespace name = <code>tenant-</code> plus the chain of ancestors joined by hyphens, without the root.</li>
<li>That a hyphen in a tenant name is forbidden.</li>
<li>That tenants nest inside each other, and a nested one is created inside its parent.</li>
<li>That a disabled service is inherited from the nearest ancestor that has it enabled — not necessarily from the parent.</li>
<li>The names of the four switches verbatim: <code>etcd</code>, <code>monitoring</code>,
<code>ingress</code>, <code>seaweedfs</code>.</li>
<li>That a tenant's domain is built as <code>&lt;name&gt;.&lt;parent domain&gt;</code>.</li>
<li>That <code>metadata.namespace</code> is the parent's namespace, and
<code>status.namespace</code> is the tenant's own.</li>
<li>That the script from the documentation builds a tenant kubeconfig from <b>the token, the CA certificate and the
server address</b>: the first two from the tenant's secret of the same name, the address from the
administrator's kubeconfig.</li>
<li>The preset format <code>&lt;series&gt;.&lt;size&gt;</code>: t1 (1:0.5), c1 (1:1), s1 (1:2), u1
(1:4), m1 (1:8);
sizes from nano to 4xlarge.</li>
<li>That an explicitly set <code>resources</code> block overrides the preset.</li>
<li>That tenant presets are not KubeVirt instance types (U, O, CX, M, RT): <code>u1.medium</code>
exists in both
systems.</li>
<li>That a workload's request = its limit divided by <code>cpuAllocationRatio</code> (10 by
default).</li>
<li>That <code>cpuAllocationRatio</code> is configured at the platform level, not for an individual
tenant.</li>
<li>That isolation cannot be disabled, and the <code>isolated</code> flag was removed in version 1.0.</li>
<li>The label names verbatim: <code>policy.cozystack.io/allow-to-apiserver</code> and <code>allow-to-etcd</code>; the value is the string <code>"true"</code>.</li>
<li>That sign-in goes through Keycloak, and permissions through ordinary RBAC.</li>
</ul>
</div>

<p class="doclink">Learn more:
<a href="https://cozystack.io/docs/v1.6/guides/tenants/" target="_blank" rel="noopener">tenants</a> ·
<a href="https://cozystack.io/docs/v1.6/operations/" target="_blank" rel="noopener">platform operations</a></p>
