---
title: "Virtuozzo migration — three products, three different exits"
description: "Migrating off Virtuozzo: Application Management (ex-Jelastic) is a re-platform, Infrastructure is real OpenStack, and the container line has no successor."
date: 2026-09-03
lastmod: 2026-09-03
language: "en"
hreflang_de: /de/migration/virtuozzo/
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "virtuozzo migration"
secondary_keywords: ["jelastic migration", "virtuozzo application platform alternative", "virtuozzo hybrid server end of life", "openvz container migration", "ploop convert qcow2"]
related_pages:
  - /tco-calculator/vs-virtuozzo/
  - /products/public-cloud-platform/
  - /products/private-cloud-platform/
  - /products/cozystack
  - /services/platform-readiness-assessment
  - /migration/openstack/
direct_answer: |
  **Migrating off Virtuozzo means naming the right product first, because the three exit in completely different ways. Virtuozzo Server, formerly Hybrid Server, is the OpenVZ-derived host running system containers and KVM guests; it passed end of maintenance in July 2024, and Virtuozzo Server 9 is a different product that does not implement system containers at all, so the container line has no successor. Virtuozzo Infrastructure, formerly Hybrid Infrastructure, is the IaaS and is a real OpenStack deployment underneath, which makes it the one path where standard tooling applies. Virtuozzo Application Management, formerly Application Platform and before that Jelastic, is a PaaS whose environment export is a topology JSON that imports only into another Virtuozzo installation; there is no lift-and-shift, and the honest path is a re-platform onto Kubernetes. Aenix runs all three onto Cozystack, an Apache 2.0 CNCF project.**
quick_facts:
  - label: "Renamed in 2026"
    value: "Hybrid Infrastructure is now Virtuozzo Infrastructure, Application Platform is now Virtuozzo Application Management, Hybrid Server is now Virtuozzo Server. Search under both names."
  - label: "The container line has no successor"
    value: "Virtuozzo Server 7 passed end of maintenance in July 2024. Virtuozzo Server 9 descends from OnApp, states that system containers are not implemented including vzctl and vzpkg, and does not support in-place upgrade from 7.x."
  - label: "Virtuozzo Infrastructure"
    value: "A real OpenStack deployment — Kolla-Ansible, Keystone v3 on port 5000, Nova, Cinder, Neutron, Glance, Octavia, Magnum — with KVM compute and Virtuozzo Storage underneath."
  - label: "Application Management"
    value: "A PaaS built on system containers, with Docker nested inside them. Environment export is a topology JSON that imports only into another Virtuozzo installation of the same or higher version."
  - label: "ploop has no converter"
    value: "prl_disk_tool does compact, merge and resize only. Getting data out of a container disk means mounting the ploop and copying the filesystem."
  - label: "Forklift coverage"
    value: "No Virtuozzo source provider exists. On Virtuozzo Infrastructure the OpenStack provider is the candidate path and must be tested; the guaranteed fallback is qcow2 export into KubeVirt CDI."
  - label: "Cost reference"
    value: "Virtuozzo Infrastructure licensing modelled at $100/core/yr list and around $75/core/yr typical negotiated in the five-year TCO comparison."
quick_facts_source: "[Virtuozzo product lifecycle policy](https://www.virtuozzo.com/server-docs/product-lifecycle-policy/), [Virtuozzo Infrastructure docs](https://www.virtuozzo.com/infrastructure-docs/), [Virtuozzo Application Management docs](https://www.virtuozzo.com/application-management-docs/)"
faq:
  - q: "Which Virtuozzo product am I actually migrating?"
    a: "Ask what the users see. Virtual machines and volumes from a self-service portal, with S3 and a Kubernetes service alongside, means Virtuozzo Infrastructure, the IaaS, formerly Hybrid Infrastructure. Application environments assembled from a topology wizard with app-server, database and load-balancer layers means Virtuozzo Application Management, the PaaS, formerly Application Platform and originally Jelastic. Admins logging into hosts to run system containers and KVM guests side by side means Virtuozzo Server, formerly Hybrid Server. The three share almost nothing at migration time, and estimating the wrong one produces a plan that does not survive first contact. Note that Virtuozzo renamed all three in 2026, so search results mix old and new names."
  - q: "Is there a deadline on Virtuozzo Server?"
    a: "The published lifecycle table puts Virtuozzo Server 7 at general availability in July 2016 and end of maintenance in July 2024, which has passed — those estates get security fixes only. The end-of-life date carries a footnote saying it is subject to change and will be set at least a year after a release of Virtuozzo Infrastructure that introduces a direct upgrade path from Virtuozzo Server 7. That upgrade path has not shipped. Separately, Virtuozzo Server 9 is a different lineage: its release notes state that system containers are not implemented, including vzctl and vzpkg, and that in-place upgrade from 7.x is not supported. The absence of a forward path is a stronger planning signal than any date on the table."
  - q: "How does Virtuozzo Infrastructure migrate?"
    a: "Like an OpenStack cloud, because it is one. Virtuozzo describes it as OpenStack orchestration with KVM virtualization, its administrators reconfigure it by editing nova.conf, cinder.conf and neutron.conf under /etc/kolla/config and running kolla-ansible, and its own documentation drives it with the stock openstack client against Keystone v3 on port 5000. That makes Konveyor Forklift's OpenStack source provider the candidate path — cold migration only — and it must be tested against your specific version, since Forklift documents OpenStack 16.1 or later in RHOSP terms and Virtuozzo does not publish which upstream release it tracks. The fallback that always works is exporting a volume to qcow2 with vinfra service compute image save and importing it as a KubeVirt DataVolume."
  - q: "Can we lift and shift out of Virtuozzo Application Management?"
    a: "No. The environment export produces a JSON file and, in the vendor's own words, it must be migrated to a platform installation of the same or higher version — another Virtuozzo installation, not Kubernetes. It also needs port 7979 open on the source, and it explicitly does not export data from Elastic VPS, Maven, Docker or Windows-based containers, which come across as empty shells. Virtuozzo's own pages disagree on whether private data is included at all, so the conservative planning assumption is topology only. Treat the export as an inventory, not a migration: real data comes out through SSH and rsync, FTP where the node type allows it, and native database dumps."
  - q: "How bad is the Application Management re-platform in practice?"
    a: "The application code is usually fine; the platform behaviour is the work. What you hand the platform today is already an artifact — a WAR or JAR, PHP source, a Node application, a Docker image — and that is exactly what a container build consumes, so the effort is packaging and wiring rather than rewriting. Three things have no equivalent and must be designed around: automatic vertical scaling of a live container, which Kubernetes does not do and which becomes a sizing exercise per application; the cloudlet as a billing unit, at 128 MiB of RAM and 400 MHz of CPU, billed on the greater of peak RAM or average CPU, which means a migration is also a repricing; and the topology wizard your support team provisions with, which becomes a service catalogue and a retraining cost."
  - q: "What happens to our OpenVZ system containers?"
    a: "They are system containers running full init systems, not OCI images, and no converter exists. Two paths are legitimate. Wrapping each as a KubeVirt virtual machine preserves the multi-process guest exactly and is bounded, predictable work, paid for in density. Rebuilding the workload as a container image is denser and cheaper to run afterwards but is per-workload effort and needs someone who knows what the workload does. Virtuozzo's own documentation concedes the mismatch, noting that applications may have problems moving to application containers because of statelessness and single-process expectations, and that this is especially relevant for orchestrators like Kubernetes. Either way the data path is the same: mount the ploop image and copy the filesystem out, because prl_disk_tool has no format conversion."
  - q: "Does Forklift support Virtuozzo?"
    a: "No. Forklift's source providers are VMware vSphere, oVirt/RHV, OpenStack, OVA files created by vSphere, and remote KubeVirt clusters, with Hyper-V and AWS EC2 in technology preview. There is no Virtuozzo provider, and the OVA route is closed twice over — Forklift accepts only vSphere-created OVAs, and Virtuozzo has no OVA export. On Virtuozzo Infrastructure the OpenStack provider is the lever because the API is genuinely OpenStack. For Virtuozzo Server and Application Management, Aenix engineering builds the export and conversion path as part of the engagement."
service:
  type: "Virtuozzo Migration"
  areaServed: ["EU", "DACH", "Central Asia"]
  audience: "Hosting providers, MSPs, service providers running Virtuozzo"
---

**"Migrating off Virtuozzo" is three different projects wearing one name. Get the product right before anyone estimates anything, and note that Virtuozzo renamed all three in 2026, so your own documentation and every search result you find will mix the old and new names.**

> **Pairs with:** **[Ænix Public Cloud Platform](/products/public-cloud-platform/)** if you resell Virtuozzo capacity to customers, which is the majority case — the product is sold largely through regional hosting providers who rebrand it; **[Ænix Private Cloud Platform](/products/private-cloud-platform/)** if it runs internal workloads. Model the money first with the **[Virtuozzo vs Cozystack five-year TCO](/tco-calculator/vs-virtuozzo/)**.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
  <a class="cta-secondary" href="/services/platform-readiness-assessment/">Platform Readiness Assessment →</a>
</div>

---

## Identify which product you have

| Current name | Formerly | What it is | Exit character |
|---|---|---|---|
| **Virtuozzo Infrastructure** | Virtuozzo Hybrid Infrastructure | IaaS: VMs, volumes, S3, a Kubernetes service, self-service portal | OpenStack-shaped. Standard tooling applies. |
| **Virtuozzo Application Management** | Virtuozzo Application Platform, originally Jelastic | PaaS: application environments from a topology wizard, automatic scaling | Re-platform. There is no disk-level exit. |
| **Virtuozzo Server** | Virtuozzo Hybrid Server | Bare-metal host running system containers and KVM guests side by side | Split. KVM guests move mechanically, containers do not. |
| **Virtuozzo Cloud Management** | — | Multi-tenant billing and provisioning layer above the other two | Re-point, like any billing integration. |

Many providers run two of these together — Application Management installed on hosts that are themselves Virtuozzo Server, or on top of a Virtuozzo Infrastructure cluster. Scope each separately. One blended estimate across a PaaS and an IaaS is how these projects end up at double their number.

One dependency worth surfacing early: Application Management's hardware hosts have to provide the system-container runtime, which means Virtuozzo 7, CentOS 7 or RHEL 7 underneath. A PaaS estate therefore inherits the Virtuozzo Server problem described below, even when nobody thinks of themselves as running Virtuozzo Server.

---

## The real deadline is the missing upgrade path

Virtuozzo's published lifecycle table puts **Virtuozzo Server 7 at general availability in July 2016 and end of maintenance in July 2024** — already passed. The end-of-life date on that table carries a footnote stating it is subject to change and will be set at least one year after a release of Virtuozzo Infrastructure that introduces a direct upgrade path from Virtuozzo Server 7.

Read that footnote carefully, because it says two things at once: the vendor's intended destination for the container product is its own IaaS, and **that upgrade path does not exist yet**.

The second signal is stronger. Virtuozzo Server 9 is not the successor to Virtuozzo Server 7 — it is a different lineage, descending from the OnApp cloud management platform, and its documented upgrade path is from Virtuozzo OnApp 7. Its release notes state that **system containers are not implemented in the release, including the `vzctl` and `vzpkg` tools**, and that **in-place upgrade from Virtuozzo Server 7.x is not supported**.

So an operator on Virtuozzo Server 7 today is past maintenance, on a product whose container capability has no announced successor, with no vendor-provided forward path. That is a stronger planning input than any date, and it is the reason most Virtuozzo migrations arrive as an obligation rather than an optimisation.

For completeness: the lifecycle policy publishes **no end-of-life dates at all** for Virtuozzo Infrastructure or Application Management, and Virtuozzo Infrastructure is actively developed. Neither of those products is being sunset. This section is about the container line specifically.

---

## Path 1 — Virtuozzo Infrastructure

The most tractable of the three, because this is not an OpenStack lookalike. It is OpenStack.

The evidence is operational rather than promotional: administrators reconfigure it by editing `nova.conf`, `cinder.conf` and `neutron.conf` under `/etc/kolla/config` and running Kolla-Ansible, the documented projects include Nova, Cinder, Neutron, Glance, Keystone, Octavia and Magnum, and Virtuozzo's own documentation tells you to point the stock `openstack` client at Keystone v3 on port 5000. Compute runs a QEMU/KVM hypervisor; storage is Virtuozzo's own software-defined layer with metadata and chunk services.

What follows:

- **Compute and images.** Both sides are KVM, so guest disks import into KubeVirt without a guest rebuild. [Konveyor Forklift](https://github.com/kubev2v/forklift), which ships in the Ænix platform, has an OpenStack source provider, and that is the candidate path — **tested in the assessment, not assumed**. Two reasons to test rather than promise: Forklift documents OpenStack 16.1 or later in Red Hat OpenStack Platform version terms and Virtuozzo does not publish which upstream release it tracks, and Forklift's OpenStack path snapshots the attached image, which needs Glance and Cinder to behave conventionally on the Virtuozzo storage backend. Note also that **from OpenStack, Forklift performs cold migration only** — every instance needs a genuine power-off window.
- **The fallback that always works.** Virtuozzo documents a volume-to-image export: snapshot the volume, register it as an image, and run `vinfra service compute image save --file <name>.qcow2 <id>`. That produces an ordinary qcow2 file, which KubeVirt CDI imports as a DataVolume from HTTP, S3, a registry or a PVC. It is slower to orchestrate than a Forklift plan and has no unknowns in it. Any credible programme plan carries both routes and picks after the pilot.
- **Storage.** Virtuozzo Storage does not come with you. It is replaced by LINSTOR/DRBD, or Ceph if you prefer a distributed cluster. This is a data move and it sizes the programme more than compute does.
- **Networking and tenancy.** The same redesign as any OpenStack exit: tenant networks, floating addresses and security groups become Cilium policy, LB IPAM and BGP or L2 announcements; the project model becomes the Tenant CRD. The **[OpenStack migration hub](/migration/openstack/)** covers this service by service and applies directly here.
- **S3.** Object endpoints are customer-facing and long-lived. Plan them as their own workstream with their own cutover.

---

## Path 2 — Virtuozzo Server

One host, two kinds of workload, and they behave nothing alike.

**KVM guests** move like any other KVM guest, once the disk is in a portable format.

**System containers** are the problem. An OpenVZ-derived container runs a full init system and multiple processes, shares the host kernel, and is managed as a machine. It is not an OCI image and no converter produces one. Virtuozzo's own documentation concedes the mismatch, noting that applications may have problems moving to application containers because of statelessness and single-process expectations, and that this is *especially* relevant for orchestrators such as Kubernetes.

Two honest options, chosen per workload rather than per estate:

- **Wrap it as a VM.** The container's filesystem becomes a disk image running as a KubeVirt VM. The multi-process guest is preserved exactly, the work is bounded and predictable, and you pay in density — a full virtual machine where a container used to be. For undocumented workloads, applications nobody owns, and anything where identical behaviour is contractual, this is the right answer and not a failure.
- **Rebuild it as a container image.** Take the application out and build an image around it. Cleaner, denser, cheaper to run afterwards, but per-workload effort. What breaks in a naive `tar` and `docker import`: systemd as PID 1, multi-process assumptions, `/etc/fstab`, venet networking, and anything relying on the shared kernel.

Most estates split: a long tail of near-identical containers gets rebuilt from one common base image, and the handful of unusual ones become VMs. The assessment draws that line against your real inventory.

**The disk-level reality, and a tooling correction.** Container and VM disks use the ploop `.hdd` layout — a directory containing `DiskDescriptor.xml` and the image data, not a single file. There is **no supported format conversion**: `prl_disk_tool` offers compact, merge and resize, and nothing else. The working route is to mount the image read-only (`ploop mount -m /mnt/x -r .../DiskDescriptor.xml`) and copy the filesystem out. Two tool names in circulation are wrong and will waste a day: `vzdump` is a Proxmox VE tool, not a Virtuozzo one, and `vzmigrate` is not the current command — `prlctl migrate` is, and it moves guests between Virtuozzo hosts, not out of Virtuozzo. Native backups are a proprietary format under `/vz/vmprivate/backups` that third-party tools cannot open.

---

## Path 3 — Virtuozzo Application Management (formerly Jelastic)

The important fact first, because it changes every estimate: **the environment export produces a JSON file, and the vendor's own instruction is that it be migrated to a platform installation of the same or higher version.** It is a portability feature inside the product family, not a way out of it. There is no disk-level exit and no tool that makes one.

Three specific limits to plan against rather than discover:

1. Export requires **port 7979** open on the source platform, and Virtuozzo names partner installations where import to other platforms does not work at all.
2. Export **omits data from Elastic VPS, Maven, Docker and Windows-based containers**. Those layers come across as empty shells with the topology preserved and nothing inside.
3. Virtuozzo's own pages **contradict each other** on whether private data is exported at all — the export page offers a Private Data option while the migration overview says only topology is exported and the target is created from scratch. The conservative planning assumption is topology only.

Which makes the export useful as an **inventory**, not a migration. Real data comes out through the ordinary channels: SSH and rsync via the platform's SSH gate, FTP where the node type supports it, and native database dumps. There is a REST API and a platform CLI covering environment lifecycle, which is what you automate the extraction with.

The architecture is worth stating plainly because it explains the constraint. Workloads run in **system containers** — the Virtuozzo implementation, the same lineage as Virtuozzo Server. Docker is **nested inside** those system containers: a custom image's filesystem is unpacked into the system container runtime rather than run as an OCI container, and only an allow-list of base operating systems is supported. So "we already use Docker here" makes the rebuild easier, because you have an image to start from, but it does not mean the workload is already portable.

The mapping to Kubernetes:

| Application Management | Destination |
|---|---|
| Environment | Namespace or tenant, topology expressed as a Helm release |
| Application server layer (Java, PHP, Node.js, Python, Ruby, .NET, Go) | Deployment plus Service, built from the same artifact you deploy today |
| Database layer (MySQL, PostgreSQL, MongoDB) | Managed database instance in the tenant catalogue; data moves by logical dump or replica |
| Load balancer layer (NGINX, HAProxy, Varnish) | Ingress, or a Service of type LoadBalancer |
| Shared storage (NFSv4) node | ReadWriteMany volume |
| Custom Docker images, Docker Engine layer, built-in Kubernetes cluster | You already have images. Easiest cohort, and the natural pilot. |
| Cloudlet resource model | Requests and limits, plus the horizontal autoscaler |
| Vertical auto-scaling of a live container | No equivalent. Horizontal scaling plus honest sizing — see below. |

**What makes this cheaper than it sounds.** What you hand the platform is already an artifact — a WAR or JAR, PHP source, a Node application, a Docker image. That is exactly what a container build consumes. The work is packaging and wiring, not rewriting application code.

**What makes it non-trivial anyway.** Three platform behaviours have to be designed around rather than ported:

1. **Automatic vertical scaling.** The platform grows a running container's CPU and memory in place. Kubernetes scales out, not up. For steady web tiers that is an improvement; for a single large stateful process it is a real sizing exercise, per application.
2. **The cloudlet as a billing unit.** A cloudlet is 128 MiB of RAM and 400 MHz of CPU, and billing takes the greater of peak-RAM or average-CPU cloudlets rather than the sum. If you resell, your entire price list is denominated in a unit that does not exist on the destination. The migration is also a repricing, with its own commercial timeline.
3. **The topology wizard.** Support provisions environments by clicking. Replacing it with a service catalogue is a product decision and a retraining cost, and it belongs in the plan from week one.

---

## Tooling, stated plainly

[Konveyor Forklift](https://github.com/kubev2v/forklift) ships in the Ænix platform and does the VM transfer work on the sources it supports: VMware vSphere, oVirt/RHV, OpenStack, OVA files created by vSphere, and remote KubeVirt clusters, with Hyper-V and AWS EC2 in technology preview. **There is no Virtuozzo source provider**, and the OVA route is closed twice over — Forklift accepts only vSphere-created OVAs, and Virtuozzo has no OVA export.

- On **Virtuozzo Infrastructure**, the OpenStack provider is the lever, tested rather than assumed, with qcow2 export into CDI as the guaranteed fallback.
- On **Virtuozzo Server** and **Application Management**, Ænix engineering builds the export and conversion path as part of the engagement. We would rather say that than imply a generic tool covers a case it does not.

---

## How Ænix engages

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Virtuozzo estate</b><div class="diagram__chips"><span>Server: containers + KVM</span><span>Infrastructure: IaaS</span><span>Application Management: PaaS</span></div></div>
<div class="diagram__conn">split by product, then</div>
<div class="diagram__node"><b>Per-path migration</b><div class="diagram__chips"><span>OpenStack import or qcow2 export</span><span>Container wrap or rebuild</span><span>PaaS re-platform</span></div></div>
<div class="diagram__conn">lands on</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium eBPF</span><span>LINSTOR</span></div></div>
</div>
</div>

1. **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** — inventory split by product; container-by-container triage into wrap or rebuild; Forklift's OpenStack provider tested against your actual Virtuozzo Infrastructure version with the qcow2 fallback proven alongside it; tenant and address design; and for Application Management a repricing model next to the technical plan.
2. **Pilot cohort** — the easiest real workload first. On Application Management estates that is the Docker and Kubernetes environments, where images already exist.
3. **Rolling migration** — cohort by cohort with parallel-run validation, Virtuozzo hosts rebuilt into the target cluster as they free up.
4. **Operations** — your team with **[Cozystack enterprise support](/products/cozystack-enterprise-support/)** behind it, or operated by Ænix.

Model the cost side before committing: the **[Virtuozzo vs Cozystack five-year TCO](/tco-calculator/vs-virtuozzo/)** compares at 50, 200 and 1,000 VMs, with Virtuozzo licensing at $100 per core per year list and around $75 typical negotiated.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Book a call</a>
</div>

---

*Ænix is the team behind Cozystack (CNCF project, Apache 2.0).*
