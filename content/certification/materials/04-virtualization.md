---
title: "Virtual machines"
description: "How a virtual machine becomes an ordinary Kubernetes workload, why the disk is separate from the machine, and where the honest limits are."
lesson: 4
weight: 4
layout: "cert-lesson"
language: "en"
url: "/certification/materials/virtualization/"
hreflang_ru: "/ru/certification/materials/virtualization/"
page_type: "flag-page"
---

This is the topic where a VMware administrator has the easiest time — and also where they most often
get caught, because familiar analogies only half work here.

## The machine as an ordinary workload

Virtualization is provided by **KubeVirt**. Its idea is this: a virtual machine is a
process that runs inside a pod and is managed like everything else in the cluster.

From this follows something that sounds unusual to a person from the vSphere world. The Kubernetes
scheduler picks a node for a machine the same way it does for an application. Resources are accounted with the same
requests and limits. Permissions are granted with the same RBAC.

The hypervisor, meanwhile, is a real one — KVM, the same as in any Linux.

## Two objects instead of one

This is the main difference from the familiar model, and it gets asked.

<figure>
<svg viewBox="0 0 600 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The disk and the machine as separate objects">
  <rect x="30" y="30" width="200" height="60" rx="8" fill="#f1f5f9" stroke="#64748b"/>
  <text x="130" y="54" text-anchor="middle" font-family="monospace" font-size="14" font-weight="700" fill="#0f172a">VMDisk</text>
  <text x="130" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#475569">the disk — on its own</text>
  <rect x="330" y="30" width="200" height="60" rx="8" fill="#dbeafe" stroke="#2563eb"/>
  <text x="430" y="54" text-anchor="middle" font-family="monospace" font-size="14" font-weight="700" fill="#1e3a8a">VMInstance</text>
  <text x="430" y="74" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#1e40af">the machine — refers to the disk</text>
  <path d="M330 60 L235 60" stroke="#2563eb" stroke-width="2" marker-end="url(#b)"/>
  <text x="282" y="52" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#2563eb">by name</text>
  <text x="280" y="130" text-anchor="middle" font-family="sans-serif" font-size="12.5" fill="#475569">The disk outlives the machine: delete the machine and the disk stays.</text>
  <text x="280" y="152" text-anchor="middle" font-family="sans-serif" font-size="12.5" fill="#475569">It can be attached to another one or deleted separately.</text>
  <defs><marker id="b" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
    <path d="M0 0 L8 4 L0 8 z" fill="#2563eb"/></marker></defs>
</svg>
<figcaption>In vSphere a disk is a property of the machine. Here it is an object in its own right.</figcaption>
</figure>

The disk is created separately and lives a life of its own. It gets its contents in one of four
ways, and they are worth telling apart: download from a URL (`http`), a clone of a prepared platform
image (`image`), an upload of a file from your own machine (`upload`), and the empty source `{}` —
a blank disk with no contents, for when you just need space for data.

The third object of the model is **`VMImage`**, a prepared image that the platform stores itself.
A team publishes, say, Ubuntu once, and new disks clone it via
`source.image.name` instead of pulling the file from the internet every time.

Underneath, all of this is ordinary Kubernetes storage: the disk exists as a `PersistentVolumeClaim`, and
the image is poured into it by the **CDI** component (`Containerized Data Importer`) through a
`DataVolume` object. Nobody touches these by hand here, but those are exactly what you will meet on the lower layers.

The machine's size is set not with numbers but with a named **instance type** such as
`u1.medium` — this is KubeVirt's own mechanism, with series U, O, CX, M and RT. Do not confuse it with
tenant and managed application presets: the string `u1.medium` is valid in both places, but the
systems are different. Look at what the question is sizing: a tenant and an application take a preset,
a `VMInstance` takes an instance type.

## How to get inside

This is where habits end and the specifics begin.

**cloud-init** is the standard mechanism of cloud images: on first boot the system reads a
description and configures itself. Password, keys, packages, commands. It is the closest analog of
a Customization Specification, only described as text next to the machine itself.

**virtctl** is a separate utility for the console, the screen and port forwarding. There are three ways in, and
they refer to the machine by its bare name:

```bash
virtctl console <name>             # text console over the serial port
virtctl vnc <name>                 # graphical screen, also the way into Windows
virtctl ssh <user>@<name>          # everyday work with a Linux guest
```

The scenario from the questions goes like this: networking inside the machine is broken, SSH does not respond — what
will work? **`virtctl console`**: the serial console does not depend on the guest network,
which is why it remains the last resort, including when investigating early boot.

A separate caveat about restricted access. A tenant is granted the console as a subresource of the
**running instance**, not of the machine object as a whole, and under such permissions the target is named
with a type prefix: `virtctl console --namespace=tenant-acme vmi/vm-instance-app`. A bare name in
this case points to the wrong thing and returns a denial.

## What it can and cannot do

The exam likes questions about capabilities — and here it is important not to confuse what the platform does not
do with what it does differently.

**Live migration exists.** A running machine moves to another node without stopping — this is
used when a node has to be taken down for maintenance.

**Snapshots exist.** They are provided by the storage layer.

**GPU passthrough exists**, and it is configured automatically. The list of devices that
are allowed to be passed through is set by the platform, not by the tenant.

It is also worth remembering **what exactly changed in version 1.5** — a separate question is built
on it. Passthrough itself existed before, but node preparation had to be done
by hand: labeling the nodes with GPUs and writing the allowed devices directly into the KubeVirt
settings with `kubectl patch`. In 1.5, exactly this was automated. A node group in which
GPUs are declared now gets the required label by itself, and the platform fills in the list of
allowed devices by itself. The statement "passthrough only appeared in 1.5" is wrong — what appeared is
**automatic node preparation**, not the capability itself.

What truly does not exist is **automatic load balancing between nodes**. In vSphere
this is DRS's job: it decides on its own that a machine should be moved, and moves it. There is nothing like that here.
Capacity planning and moving machines during maintenance are done deliberately, not on their
own.

The difference is subtle, but it is exactly what questions are built on: migration as a **tool** exists, migration
as **always-on automation** does not.

### If a node dies

The question every team asks before moving off vSphere: will the machines restart on
another node by themselves? The honest answer for version 1.5 is **no**, and it is also the correct answer on the exam.

The reason is not something left unfinished, but the design. When a node stops responding, the cluster does not know
what happened to it: whether it shut down, or lost its network and keeps running. For an ordinary application
there is no difference — an extra copy bothers no one. For a virtual machine with a disk the difference is
fundamental: starting a second copy of the same machine while the first may still be writing to the
disk means data corruption. That is why safe automatic restart requires **fencing** —
guaranteed shutdown of the suspect node before the machine is brought up again. The
distribution ships no such mechanism, and recovery after a node failure still involves manual steps.

Live migration does not help here and cannot help: it moves a **running** machine off a
**live** node. It is a planned evacuation before maintenance, not a response to an outage.

Separately — so as not to mix two different things. In **tenant Kubernetes clusters** the worker
nodes are virtual machines too, but there node health checks and replacement of broken ones do work
and are enabled by default. Only this is not "restarting the same machine" but **replacement**: the faulty
machine is deleted and a new, clean one is created in its place. For a tenant cluster node this is fine —
its state is not stored in the cluster. For your own virtual machine with data on its disk it is
unacceptable, and that is exactly why the same mechanism is not applied to it.

The machine is running. Packets reach it over the network — and there are four components there that are easy
to mix up with one another.

<div class="exam-box">
<h4>What the exam will ask</h4>
<ul>
<li>That virtualization is provided by KubeVirt, and a machine is an ordinary cluster workload.</li>
<li>That the disk and the machine are two separate objects, and the disk outlives the machine.</li>
<li>The four disk content sources: <code>http</code>, <code>image</code>,
<code>upload</code> and the empty <code>{}</code> — a blank disk.</li>
<li>That <code>VMImage</code> is the third object of the model: a prepared image from which
disks are cloned.</li>
<li>That the disk exists as a PVC, and CDI pours the image into it through a <code>DataVolume</code>.</li>
<li>That the machine's size is set by a KubeVirt instance type (series U/O/CX/M/RT), not by a tenant preset.</li>
<li>That initial configuration goes through cloud-init.</li>
<li>Three ways in: <code>virtctl console</code>, <code>virtctl vnc</code>,
<code>virtctl ssh</code> — and that with broken networking in the machine, the console will work.</li>
<li>That the <code>vmi/</code> prefix is needed under restricted tenant permissions — because access is to the
subresource of the running instance.</li>
<li>That live migration, snapshots and GPU passthrough exist.</li>
<li>That there is no automatic balancing between nodes like DRS.</li>
<li>That 1.5 automated <b>node preparation</b> for GPU passthrough — node labeling
and the list of allowed devices — not passthrough itself.</li>
<li>That there is <b>no</b> automatic restart of a virtual machine on another node after a failure: that
requires fencing, which the distribution does not ship, and recovery still involves manual steps.</li>
</ul>
</div>

<p class="doclink">Further reading:
<a href="https://cozystack.io/docs/v1.6/virtualization/" target="_blank" rel="noopener">virtualization</a> ·
<a href="https://cozystack.io/docs/v1.6/storage/" target="_blank" rel="noopener">storage</a></p>
