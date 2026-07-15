---
title: "VMware to Cozystack workshop in Bishkek — free, hands-on"
description: "Free hands-on workshop in Bishkek: migrate a real VM off VMware to open-source Cozystack, then keep a 30-day lab, maintainer chat, and a certification path."
language: "en"
layout: "event-landing"
hreflang_ru: "/ru/workshops/vmware-to-cozystack/bishkek/"
primary_keyword: "vmware migration workshop bishkek"
secondary_keywords: ["vmware alternative kyrgyzstan", "cozystack workshop", "vmware exit training", "kubevirt hands-on workshop"]
related_pages: ["/migration/vmware/", "/compare/cozystack-vs-vmware/", "/alternatives/vmware-alternative/"]
images: ["img/og/og-workshop-bishkek.png"]
hero_eyebrow: "Hands-on workshop · Bishkek · August 2026"
hero_from: "VMware"
hero_to: "Cozystack"
hero_tagline: "Migrate a real VM off a live ESXi with your own hands — in half a day. Free, and honest about the limits."
hero_chips:
  - "August 2026 · date TBA"
  - "Bishkek, Kyrgyzstan"
  - "20 seats"
  - "Free"
  - "In Russian"
hero_primary: { text: "Reserve a free seat", href: "#register" }
hero_secondary: { text: "See the program", href: "#program" }
inshort_title: "In short"
quick_facts_style: "rows"
translation:
  - { from: "vSphere / ESXi", to: "KubeVirt" }
  - { from: "vSAN", to: "LINSTOR" }
  - { from: "NSX", to: "Cilium" }
  - { from: "vMotion", to: "Live Migration" }
  - { from: "vCenter", to: "Dashboard + API" }
  - { from: "Veeam", to: "Velero" }
translation_note: "You already know the meaning — the workshop adds the vocabulary. Every pair above is something you verify live, in your own tenant."
stats:
  - { number: "150–1500%", label: "documented VMware renewal increases — from AT&T's lawsuit to CISPE members" }
  - { number: "72 cores", label: "minimum per subscription order, whatever your actual estate" }
  - { number: "Oct 2, 2025", label: "vSphere 7 general support ended — extended support or no patches" }
event:
  name: "VMware to Cozystack — hands-on workshop, Bishkek"
  city: "Bishkek"
  country: "KG"
  language: "ru"
  capacity: 20
  price: 0
direct_answer: |
  **The VMware to Cozystack workshop in Bishkek is a free half-day hands-on training for teams facing Broadcom's new VMware economics. Led by Timur Tukaev — Cozystack maintainer, community manager, and Aenix co-founder — it takes VMware administrators, infrastructure leads, and DevOps engineers through migrating a real virtual machine off a live ESXi and assembling self-service infrastructure on Cozystack, an open-source (Apache 2.0) cloud platform and CNCF project. About 70% of the time is practice in a personal tenant on a live cluster. Every participant keeps a demo environment and a direct chat with Cozystack maintainers for 30 days afterwards, and can earn an official Cozystack certificate by completing take-home labs. Attendance is free; seats are limited to 20.**

quick_facts:
  - label: "Format"
    value: "Half-day hands-on workshop — roughly 30% explanation, 70% practice in a personal tenant on a live cluster, plus 45 minutes of open networking"
  - label: "Date"
    value: "August 2026 — exact date and venue announced shortly"
  - label: "Price"
    value: "Free. 20 seats, registration required"
  - label: "Language"
    value: "Russian (commands, docs, and take-home materials in English)"
  - label: "Who it's for"
    value: "VMware administrators and engineers, sysadmins, infrastructure leads, CTOs and IT directors, Kubernetes / DevOps engineers"
  - label: "After the workshop"
    value: "30-day demo environment, support chat with Cozystack maintainers, take-home labs, path to an official Cozystack certificate"
  - label: "Host"
    value: "Timur Tukaev — Cozystack maintainer, community manager of the project, Aenix co-founder"

faq:
  - q: "How much does the workshop cost?"
    a: "Nothing. The workshop is free; you only need to register. Seats are limited to 20 so that every participant gets real hands-on time and an assistant nearby when something breaks."
  - q: "I run VMware but have never touched Kubernetes. Will I keep up?"
    a: "Yes — the workshop is designed for exactly this profile. Everything is taught as a translation from vSphere concepts you already know: vSAN becomes LINSTOR, vMotion becomes live migration, vRealize becomes a self-service catalog. Your VMware experience is the foundation, not a handicap, and teaching assistants help anyone who gets stuck."
  - q: "What language is the workshop in?"
    a: "The workshop is delivered in Russian. Commands, documentation, and take-home materials are in English. This page has a [Russian version](/ru/workshops/vmware-to-cozystack/bishkek/)."
  - q: "What do I need to bring?"
    a: "A laptop with a modern browser — that's all. Each participant gets a personal tenant on a live Cozystack cluster with a web terminal; nothing needs to be installed."
  - q: "Is this a sales presentation?"
    a: "No. It is a hands-on training: you spend most of the time in a terminal and a dashboard, not looking at slides. The program includes an explicit block on Cozystack's honest limitations and on cases where we advise you not to migrate. No contracts and no pressure — an optional free review of your infrastructure is available afterwards if you want one."
  - q: "What exactly will I do with my own hands?"
    a: "Import a VM exported from a live ESXi (virt-v2v conversion to qcow2, then launch), deploy a managed PostgreSQL in about three minutes, publish a service through a LoadBalancer, open out-of-the-box Grafana monitoring for your tenant, see Velero backup in action, and finally bring up the whole stack from a single Git manifest."
  - q: "What happens after the workshop?"
    a: "You keep your demo environment for 30 days, join a support chat where Cozystack maintainers answer questions for 30 days, and receive take-home labs. Completing the labs earns you an official Cozystack certificate — also free."
  - q: "We run Oracle RAC / SAP / licensed Windows workloads. Will they migrate?"
    a: "Maybe not — and we will tell you honestly. ISV licensing (Oracle counts every core in the cluster on a non-approved hypervisor; SAP and Microsoft keep certified-platform lists) is one of the real constraints covered in the limitations block. Bring your scariest VM and get a straight verdict."
  - q: "Can I bring my manager or a colleague?"
    a: "Please do. The workshop works best in pairs — an engineer plus an infrastructure lead — because you leave with both the hands-on proof and the person who can act on it."
  - q: "Can you send an official invitation letter for my employer?"
    a: "Yes — on request after registration we will send an official invitation letter addressed to your employer, so justifying half a day out of the office takes one email."
---

None of this pricing story is your team's fault. The question is only whether the next renewal finds you with a tested alternative — or without one.

## What you will do {#program}

Roughly 30% explanation, 70% hands-on in your personal tenant on a live cluster. Every concept is a translation from vSphere: you know the meaning, you add the vocabulary.

<div class="agenda">
  <div class="agenda__row"><div class="agenda__time">00:00</div><div class="agenda__body"><strong>Reality check<span class="agenda__tag">talk</span></strong>What VMware costs after Broadcom — and what "just staying" actually costs. The only slide block of the day.</div></div>
  <div class="agenda__row"><div class="agenda__time">00:15</div><div class="agenda__body"><strong>The translation map<span class="agenda__tag">hands-on</span></strong>vSphere → Cozystack, primitive by primitive — you find each one live in your own tenant.</div></div>
  <div class="agenda__row"><div class="agenda__time">00:40</div><div class="agenda__body"><strong>Migrate a VM from VMware<span class="agenda__tag">hands-on</span></strong>Live export from a running ESXi, virt-v2v conversion — your migrated VM answers requests in your tenant.</div></div>
  <div class="agenda__row"><div class="agenda__time">01:30</div><div class="agenda__body"><strong>Self-service platform<span class="agenda__tag">hands-on</span></strong>Managed PostgreSQL in three minutes, LoadBalancer, Grafana monitoring, Velero backup — then the whole stack from one Git manifest.</div></div>
  <div class="agenda__row"><div class="agenda__time">02:20</div><div class="agenda__body"><strong>Honest limitations<span class="agenda__tag">discussion</span></strong>What does not migrate 1:1 — and when we advise you not to migrate. Bring your scariest VM, get a verdict.</div></div>
  <div class="agenda__row"><div class="agenda__time">02:40</div><div class="agenda__body"><strong>Bringing it home<span class="agenda__tag">talk</span></strong>A pilot playbook for your own datacenter: first workload, phasing around your renewal, labs and the certificate path.</div></div>
  <div class="agenda__row"><div class="agenda__time">03:15</div><div class="agenda__body"><strong>Open networking<span class="agenda__tag">45 min</span></strong>Individual cases, questions, coffee. The team stays in the room.</div></div>
</div>

## Who should come

<div class="persona-cards">
  <div class="persona-card"><h3>VMware administrator / sysadmin</h3><ul>
    <li>The whole day is a translation from vSphere, not a restart from zero.</li>
    <li>You personally migrate a VM off ESXi and keep the cheat sheet.</li>
    <li>30 days of demo environment and maintainer chat afterwards.</li>
  </ul></div>
  <div class="persona-card"><h3>Infrastructure team lead</h3><ul>
    <li>The full migration path — including the honest gaps, stated first.</li>
    <li>Economics logic and a phased pilot plan tied to your renewal date.</li>
    <li>Best attended in a pair with one of your engineers.</li>
  </ul></div>
  <div class="persona-card"><h3>CTO / IT director</h3><ul>
    <li>Exit-vs-renewal economics without marketing numbers.</li>
    <li>Vendor risk answered directly: Apache 2.0, CNCF, no single-company support lock.</li>
    <li>A trained engineer and a straight verdict on your hardest workloads — same day.</li>
  </ul></div>
  <div class="persona-card"><h3>Kubernetes / DevOps engineer</h3><ul>
    <li>VMs as first-class Kubernetes objects: KubeVirt, GitOps, one API.</li>
    <li>A stack your virtualization team might actually agree to share.</li>
    <li>Managed databases, S3, tenant isolation out of the box.</li>
  </ul></div>
</div>

## What you take home

- A **personal demo environment for 30 days** on a real cluster.
- A **support chat with Cozystack maintainers** — answers from the people who write the platform.
- **Take-home labs** that extend what you built in the room.
- An **official Cozystack certificate** after the labs — free.
- A **vSphere → Cozystack translation card** with working commands.
- An **honest FAQ and objection map** for the discussions back at work.

<div class="cta-row">
  <a class="cta-primary" href="#register">Reserve a free seat</a>
</div>

## What we will not promise

Cozystack is not a 1:1 VMware replacement, and pretending otherwise would waste your time:

- **HA auto-restart** of VMs from a failed host is assembled explicitly, not a built-in switch — we show how and at what cost.
- **There is no DRS analogue** for proactive balancing of running VMs.
- **Oracle, SAP, and some Microsoft licensing** needs per-vendor scoping — some workloads are cheaper to leave in place.

If migration doesn't make sense for your estate, we will say so at the workshop — selling you a stuck pilot helps nobody.

## Your host

<div class="speaker-card">
  <div class="speaker-card__photo">{{< placeholder-image width="400" height="400" label="Timur Tukaev — photo" >}}</div>
  <div>
    <h3 class="speaker-card__name">Timur Tukaev</h3>
    <div class="speaker-card__role">Cozystack maintainer · community manager · Aenix co-founder</div>
    <div class="speaker-card__bio">
      <p>Timur is a maintainer and the community manager of Cozystack, an open-source cloud platform and CNCF project, and a co-founder of Aenix — the company that builds and supports it. He works daily with teams leaving VMware across Europe and Central Asia, from first assessment to production.</p>
      <p>The workshop format is his: no marketing slides, 70% terminal time, and the platform's weak points stated before its strong ones.</p>
    </div>
  </div>
</div>

Verify the platform before you come: the code, release cadence, and contributors are public at [github.com/cozystack/cozystack](https://github.com/cozystack/cozystack), docs at [cozystack.io](https://cozystack.io/docs/).

## Reserve your seat in Bishkek {#register}

Free, 20 seats, first come, first served. Registering now holds your seat: the exact date and venue go to registrants first, and freeing the seat takes one reply if the date doesn't work.

Come in a pair if you can — an engineer plus an infrastructure lead: one leaves with proof, the other with a plan. Not the right person for this? Forward the page to your VMware admin or infrastructure lead.

{{< pipedrive-form type="workshop" city="bishkek" >}}

Other tour stops: [all cities](/workshops/vmware-to-cozystack/).
