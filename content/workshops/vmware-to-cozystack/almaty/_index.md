---
title: "VMware to Cozystack workshop in Almaty — free, hands-on"
description: "Free hands-on workshop in Almaty: migrate a live VM off VMware to open-source Cozystack, then keep a 30-day lab, maintainer chat, and a certification path."
language: "en"
hreflang_ru: "/ru/workshops/vmware-to-cozystack/almaty/"
primary_keyword: "vmware migration workshop almaty"
secondary_keywords: ["vmware alternative kazakhstan", "cozystack workshop", "vmware exit training", "kubevirt hands-on workshop"]
related_pages: ["/migration/vmware/", "/compare/cozystack-vs-vmware/", "/alternatives/vmware-alternative/"]
images: ["img/og/og-workshop-almaty.png"]
event:
  name: "VMware to Cozystack — hands-on workshop, Almaty"
  city: "Almaty"
  country: "KZ"
  language: "ru"
  capacity: 20
  price: 0
direct_answer: |
  **The VMware to Cozystack workshop in Almaty is a free half-day hands-on training for teams facing Broadcom's new VMware economics. Led by Timur Tukaev — Cozystack maintainer, community manager, and Aenix co-founder — it takes VMware administrators, infrastructure leads, and DevOps engineers through migrating a real virtual machine off a live ESXi and assembling self-service infrastructure on Cozystack, an open-source (Apache 2.0) cloud platform and CNCF project. About 70% of the time is practice in a personal tenant on a live cluster. Every participant keeps a demo environment and a direct chat with Cozystack maintainers for 30 days afterwards, and can earn an official Cozystack certificate by completing take-home labs. Attendance is free; seats are limited to 20.**

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
    a: "The workshop is delivered in Russian. Commands, documentation, and take-home materials are in English. This page has a [Russian version](/ru/workshops/vmware-to-cozystack/almaty/)."
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
---

{{< design-note kind="illustration" >}}
Hero illustration: dark, technical, no stock-photo people. Suggested: a terminal
window mid-`virt-v2v` next to the Cozystack dashboard, or an abstract
"two worlds" bridge (vSphere UI fading into a Kubernetes-native dashboard).
Venue photo block can be added to the event-meta strip once the venue is confirmed.
{{< /design-note >}}

**Broadcom changed VMware's economics: perpetual licenses are gone, subscriptions start at 72 cores, and renewals arrive at 150–1500% of the old price. This workshop is a practical answer — in half a day you migrate a real VM off a live ESXi and rebuild core virtualization workflows on an open-source platform, with your own hands.**

<div class="event-meta">
  <div class="event-meta__item"><span class="event-meta__label">Date</span><span class="event-meta__value">August 2026, TBA</span></div>
  <div class="event-meta__item"><span class="event-meta__label">City</span><span class="event-meta__value">Almaty, Kazakhstan</span></div>
  <div class="event-meta__item"><span class="event-meta__label">Seats</span><span class="event-meta__value">20</span></div>
  <div class="event-meta__item"><span class="event-meta__label">Price</span><span class="event-meta__value">Free</span></div>
  <div class="event-meta__item"><span class="event-meta__label">Language</span><span class="event-meta__value">Russian</span></div>
</div>

<div class="cta-row">
  <a class="cta-primary" href="#register">Reserve a free seat</a>
  <a class="cta-secondary" href="/workshops/vmware-to-cozystack/">All tour cities</a>
</div>

---

## Why this workshop exists

- **Perpetual licenses are gone.** VMware is subscription-only now, with a 72-core minimum per order — small and mid-size estates pay for capacity they don't have.
- **Renewals jumped 150–1500%.** Documented cases range from AT&T's lawsuit to CISPE members' public complaints. Your renewal is a question of *when*, not *if*.
- **vSphere 7 general support ended on October 2, 2025.** Staying means paying for extended support or running unpatched.
- **The exit fear is real, too.** "Kubernetes will devalue my 15 years of VMware" is the reason most teams stall. This workshop is built to remove exactly that fear — by translation, not replacement.

None of this is your team's fault. The question is only whether the next renewal finds you with or without a tested alternative.

## What you will do

Roughly 30% explanation, 70% hands-on in your personal tenant on a live cluster. Every concept is introduced as a translation from vSphere: you already know the meaning, you're adding the vocabulary.

<div class="agenda">
  <div class="agenda__row"><div class="agenda__time">00:00</div><div class="agenda__body"><strong>Reality check<span class="agenda__tag">talk</span></strong>What VMware costs after Broadcom — and what "just staying" actually costs. The only slide-heavy block of the day.</div></div>
  <div class="agenda__row"><div class="agenda__time">00:15</div><div class="agenda__body"><strong>The translation map<span class="agenda__tag">hands-on</span></strong>vSphere → Cozystack, primitive by primitive: vSAN → LINSTOR, NSX → Cilium, vMotion → live migration, vRealize → self-service catalog. You find each one live in your own tenant.</div></div>
  <div class="agenda__row"><div class="agenda__time">00:40</div><div class="agenda__body"><strong>Migrate a VM from VMware<span class="agenda__tag">hands-on</span></strong>Live export from a running ESXi, virt-v2v conversion, then every participant launches the migrated VM in their tenant and gets an answer from the application inside it.</div></div>
  <div class="agenda__row"><div class="agenda__time">01:30</div><div class="agenda__body"><strong>Self-service platform<span class="agenda__tag">hands-on</span></strong>Managed PostgreSQL in three minutes, LoadBalancer with a public IP, out-of-the-box Grafana monitoring, Velero backup — and the whole stack brought up from one Git manifest.</div></div>
  <div class="agenda__row"><div class="agenda__time">02:20</div><div class="agenda__body"><strong>Honest limitations<span class="agenda__tag">discussion</span></strong>What does not migrate 1:1 — HA auto-restart, DRS, Oracle/SAP licensing — and when we advise you not to migrate at all. Bring your scariest VM and get a verdict.</div></div>
  <div class="agenda__row"><div class="agenda__time">02:40</div><div class="agenda__body"><strong>Bringing it home<span class="agenda__tag">talk</span></strong>A pilot playbook for your own datacenter: choosing a non-critical first workload, phasing around your renewal date, take-home labs and the certificate path.</div></div>
  <div class="agenda__row"><div class="agenda__time">03:15</div><div class="agenda__body"><strong>Open networking<span class="agenda__tag">45 min</span></strong>Individual cases, questions, coffee. The team stays in the room.</div></div>
</div>

## Who should come

<div class="persona-cards">
  <div class="persona-card"><h3>VMware administrator / sysadmin</h3><ul>
    <li>Your vSphere experience is the foundation here — the whole day is a translation, not a restart from zero.</li>
    <li>You personally migrate a VM off ESXi and leave with a vSphere → Cozystack cheat sheet.</li>
    <li>30 days of demo environment and maintainer chat to keep practicing after.</li>
  </ul></div>
  <div class="persona-card"><h3>Infrastructure team lead</h3><ul>
    <li>See the full migration path end to end — including the honest gaps, stated first.</li>
    <li>Take home the economics logic and a phased pilot plan aligned with your renewal date.</li>
    <li>Best attended in a pair with one of your engineers: you leave with proof and a plan.</li>
  </ul></div>
  <div class="persona-card"><h3>CTO / IT director</h3><ul>
    <li>The exit-vs-renewal economics without marketing numbers — ranges, assumptions, and where the model breaks.</li>
    <li>Vendor-risk questions answered directly: Apache 2.0 code, CNCF governance, support not locked to one company.</li>
    <li>A trained engineer and a written verdict on your hardest workloads — same day.</li>
  </ul></div>
  <div class="persona-card"><h3>Kubernetes / DevOps engineer</h3><ul>
    <li>VMs as first-class Kubernetes objects: KubeVirt, GitOps with Flux, one API for VMs and containers.</li>
    <li>The infrastructure stack your virtualization team might actually agree to share with you.</li>
    <li>Managed databases, S3, and tenant isolation out of the box — no assembly required.</li>
  </ul></div>
</div>

## What you take home

- A **personal demo environment for 30 days** — keep experimenting on a real cluster after the workshop.
- A **support chat with Cozystack maintainers for 30 days** — direct answers from the people who write the platform, not a ticket queue.
- **Take-home labs** that extend what you built in the room.
- An **official Cozystack certificate** after completing the labs — free, and something your CV and your hiring manager both understand.
- A **vSphere → Cozystack translation card** with working commands.
- An **honest FAQ and objection map** for the internal discussions that start when you get back.

## What we will not promise

Cozystack is not a 1:1 VMware replacement, and pretending otherwise would waste your time:

- **HA auto-restart** of VMs from a failed host is not a single out-of-the-box switch — it is assembled explicitly, and we show how and at what cost.
- **There is no DRS analogue** for proactive load balancing of running VMs.
- **Oracle, SAP, and some Microsoft licensing** needs per-vendor scoping — some workloads are cheaper to leave where they are.

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

## Reserve your seat in Almaty {#register}

Free, 20 seats, first come — first served. Come in a pair if you can: an engineer plus an infrastructure lead get the most out of the day, because one leaves with proof and the other with a plan.

{{< pipedrive-form type="workshop" city="almaty" >}}
