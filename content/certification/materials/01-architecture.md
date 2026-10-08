---
title: "What Cozystack is made of"
description: "Three layers, four installation variants, and why the platform is just another set of Kubernetes objects."
lesson: 1
weight: 1
layout: "cert-lesson"
language: "en"
url: "/certification/materials/architecture/"
hreflang_ru: "/ru/certification/materials/architecture/"
page_type: "flag-page"
---

Let's start with the question the exam asks more often than any other: **what is Cozystack by
nature?** Not "what is it for", but what exactly it is made of.

The short answer: it is Kubernetes with new object types added. Not a fork, not a layer on top
of someone else's API, not a separate management server. When you ask the platform for a
database, you create an object — just like a pod or a service, except it is called `Postgres`.
From there an operator program watches it and does everything else.

It is worth getting this into your head before anything else, because almost everything else
follows from it. Does `kubectl` work? It does. Does Terraform work? It does. Are permissions
granted through ordinary RBAC? Yes, ordinary RBAC.

## Three layers

The platform is built from three floors, and mixing up their order is the most common mistake
on the exam.

<figure>
<svg viewBox="0 0 620 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The three layers of Cozystack">
  <rect x="60" y="20" width="500" height="64" rx="8" fill="#dbeafe" stroke="#2563eb"/>
  <text x="310" y="48" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="700" fill="#1e3a8a">Cozystack</text>
  <text x="310" y="70" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#1e40af">tenants, databases, VMs, S3 — as Kubernetes objects</text>
  <rect x="60" y="100" width="500" height="64" rx="8" fill="#e0e7ff" stroke="#4f46e5"/>
  <text x="310" y="128" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="700" fill="#312e81">Kubernetes</text>
  <text x="310" y="150" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#3730a3">management cluster: API, scheduler, operators</text>
  <rect x="60" y="180" width="500" height="64" rx="8" fill="#f1f5f9" stroke="#64748b"/>
  <text x="310" y="208" text-anchor="middle" font-family="sans-serif" font-size="17" font-weight="700" fill="#0f172a">Talos Linux</text>
  <text x="310" y="230" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#475569">the operating system on every node</text>
</svg>
<figcaption>Bottom to top: Talos → Kubernetes → Cozystack. Each layer stands on the one below.</figcaption>
</figure>

**Talos Linux** is the node operating system (node OS). What sets it apart is that it has no
command line: no SSH, no console, no package manager. It is configured declaratively, through
its own API: you send a description of the desired state, and the node brings itself into line
with it. The root filesystem is read-only.

For an administrator used to logging into a server and tweaking something, this feels
uncomfortable at first. The point is elsewhere: if you cannot log in and tweak things, the
node's state does not drift over time. Two nodes built from the same description will still be
identical a year later.

What gets installed is not stock Talos but **the platform's own image**: it adds the DRBD
kernel modules — LINSTOR replication depends on them — and ZFS. The regular image does not
have them.

**Kubernetes** is the management cluster, running on top of Talos. Ordinary, unmodified: the
same API, the same controllers.

Two different concepts are easy to confuse here. There is one management cluster — that is the
platform itself. The clusters that tenants order (tenant clusters) are already its product:
their control plane runs as pods inside the management cluster.

**Cozystack** is a set of components installed into that cluster. They are what add the new
object types and watch over them.

## Installation in three stages

The exam asks not about commands but about the order and meaning of the stages.

1. **Talos on the nodes.** The machines boot from the platform image and receive a machine
   configuration. There are three ways to do it: `boot-to-talos` — an installer that writes
   Talos to disk from an already running Linux, booting from an **ISO**, and network boot via
   **PXE**. PXE is served by two temporary containers: **Matchbox** serves the image over HTTP,
   and **dnsmasq** provides DHCP and TFTP.
2. **Kubernetes.** The management cluster is assembled from these nodes. The recommended tool
   is **Talm**, the platform's own Talos configuration manager with Helm-style templates.
3. **Cozystack.** The platform itself is installed into the cluster, and from there it deploys
   its components on its own. It is installed with the `cozy-installer` chart into the
   `cozy-system` namespace, and then a single YAML is applied — the **Platform Package**. This
   is the only point of configuration: the platform domain, the apiserver address, address
   ranges, and the chosen installation variant.

The third stage works in an interesting way: the platform does not install components from a
list; it describes the desired composition and hands it to **FluxCD**. From then on Flux brings
the cluster into line with the description itself and keeps watching that the composition does
not drift. Upgrading the platform means changing the version in the description, not rebuilding
by hand.

Flux installs each platform component as a separate **release** — the object is called
`HelmRelease`, abbreviated to `hr` in commands. So the question "is the platform up" is a
question about releases, not about pods:

```bash
kubectl get hr -A
```

All of them in the `READY True` state — the installation is complete.

## Four installation variants

The platform is not installed as a whole but as one of four sets. You need to know the names
**verbatim** — and here is why this is not nitpicking: in version 1.5 they were renamed, and
the old names (`paas-full`, `distro-full` and the like) live on in other people's articles. It
is easy to mix them up.

| Variant | What it is | When it is your case |
|---|---|---|
| `isp-full` | the whole platform on Talos | your own hardware, you need everything at once |
| `isp-full-generic` | the same, but on someone else's Kubernetes | you already have a cluster: k3s, kubeadm, RKE2 |
| `isp-hosted` | platform services **without** networking, storage and virtualization | on top of managed Kubernetes, where the provider supplies networking and disks |
| `default` | only package sources, nothing enabled | you assemble the platform yourself, component by component |

It is easier to remember as a single phrase: `isp-full` — everything on Talos, `-generic` — the
same on other distributions, `-hosted` — only the platform, the infrastructure underneath is
someone else's, `default` — from scratch and by hand.

You choose once, at installation. Changing the set on a running platform is not a switch; it
is a reinstallation.

The variant sets the default composition, and fine-tuning is done with **packages**. Every
platform component is a package named `cozystack.<component>`, and you can see their state with
a single command:

```bash
kubectl get package
```

Two keys in the Platform Package let you adjust the set: `bundles.enabledPackages` adds
packages on top of the variant, `bundles.disabledPackages` removes them. A caveat that the exam
asks about: packages can be disabled only **before installation**. A component will not be
removed from a running platform this way — you will have to remove it by hand through Helm.

## What it consists of

There are many components, but the exam asks **who is responsible for what**, not for the full
list. Keep this map in your head:

| Task | Component |
|---|---|
| Virtual machines | KubeVirt |
| Control plane of tenant clusters | Kamaji |
| Block storage | LINSTOR / DRBD |
| Object storage (S3) | SeaweedFS |
| Pod networking | Cilium |
| Tenant networking, VPC | Kube-OVN |
| External addresses | MetalLB |
| Metrics | VictoriaMetrics |
| Logs | VictoriaLogs |
| Dashboards | Grafana |
| Configuration delivery | FluxCD |
| Sign-in with user accounts | Keycloak |

The row about **Kamaji** is worth memorizing separately: it runs the control plane of tenant
clusters as pods right in the management cluster — a tenant does not need separate machines for
control-plane nodes.

Note what is **not** on the list: Prometheus and Loki. They are often slipped into answer
options as a trap — metrics and logs here are collected by VictoriaMetrics and VictoriaLogs.

## Hardware requirements

The numbers are asked verbatim, so you will have to learn the minimum profile as it is: **three
nodes**, each with **8 cores**, **24 GB** of memory and **two disks** — 50 GB for the system and
256 GB for data. Two disks are not a whim here: the second one is given to LINSTOR. Fewer than
three nodes gives fault tolerance neither to storage nor to the control plane.

The network is specified no less strictly: all nodes in **one L2 segment**, latency between
them **under 10 ms** round-trip time (RTT).

If the nodes are themselves virtual — a lab in vSphere or Proxmox — enable nested
virtualization and CPU flag passthrough. On bare metal this is not needed. A home lab built to
this minimum is a legitimate way to go through the whole getting-started guide.

The platform is assembled. Next it has to be divided among someone — that is what the next
lesson is about.

<div class="exam-box">
<h4>What the exam will ask</h4>
<ul>
<li>The order of layers from bottom to top: Talos → Kubernetes → Cozystack.</li>
<li>That Talos is managed through an API and has no SSH, and the root is read-only.</li>
<li>That the platform extends Kubernetes with its own object types rather than replacing it.</li>
<li>The names of the four installation variants (bundles) — verbatim.</li>
<li>Who is responsible for what: KubeVirt, LINSTOR, SeaweedFS, Cilium, Kube-OVN, MetalLB.</li>
<li>That metrics are stored by VictoriaMetrics, not Prometheus.</li>
<li>That Kamaji runs the control plane of tenant clusters as pods in the management cluster.</li>
<li>How the management cluster differs from tenant clusters.</li>
<li>That packages are named <code>cozystack.&lt;component&gt;</code>, and <code>kubectl get
package</code> lists them.</li>
<li>The keys <code>bundles.enabledPackages</code> and <code>bundles.disabledPackages</code>; disabling
works only before installation.</li>
<li>That Talm is the recommended tool for the initial Talos configuration and cluster assembly.</li>
<li>Why the platform has its own Talos image: the DRBD and ZFS kernel modules.</li>
<li>Ways to install Talos: boot-to-talos, ISO, PXE (Matchbox serves the image, dnsmasq provides DHCP and
TFTP).</li>
<li>That the platform is installed by <code>cozy-installer</code> into <code>cozy-system</code> and configured by the
Platform Package.</li>
<li>Minimum hardware: 3 nodes, 8 cores, 24 GB, 50 and 256 GB disks, one L2 segment, latency under 10
ms.</li>
<li>That installation readiness is checked by the state of the FluxCD releases.</li>
</ul>
</div>

<p class="doclink">Learn more:
<a href="https://cozystack.io/docs/v1.6/" target="_blank" rel="noopener">platform overview</a> ·
<a href="https://cozystack.io/docs/v1.6/install/" target="_blank" rel="noopener">installation</a> ·
<a href="https://cozystack.io/docs/v1.6/getting-started/" target="_blank" rel="noopener">getting started</a></p>
