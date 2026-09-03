---
title: "Webinar: add Kubernetes, databases and GPU to your price list"
description: "A free live webinar with Andrei Kvapil, creator of Cozystack: how a working hosting or cloud provider widens the catalog — managed Kubernetes, databases, S3 and GPU — beside the platform they already run, keeping their billing and their panel."
language: "en"
layout: "event-landing"
bodyClass: "webinar-landing"
primary_keyword: "managed services for hosting providers"
secondary_keywords: ["sell managed kubernetes", "managed database hosting provider", "gpu as a service provider", "cozystack webinar", "cloud service catalog"]
images: ["img/og/og-webinar-en.png"]
hide_child_cards: true
hero_eyebrow: "Free live webinar · Online · Wednesday 19 August 2026 · 16:00 CEST (14:00 UTC)"
hero_title: "Add Kubernetes, databases and GPU to your price list"
hero_tagline: "One hour with Andrei Kvapil, the creator of Cozystack: how a working provider widens the catalog on the racks it already owns — beside the platform it already runs, keeping its own billing and its own panel."
hero_chips:
  - "Free with registration"
  - "60 minutes, live Q&A"
  - "Recording to every registrant"
  - "Bring your stack — questions answered live"
hero_primary: { text: "Save my seat", href: "#register" }
hero_secondary: { text: "See the agenda", href: "#agenda" }
speaker_photo: "images/webinars/andrei-kvapil.png"
inshort_title: "About the webinar"
quick_facts_style: "rows"
# NOTE: Event JSON-LD intentionally left off — the site's ld+json string values
# render double-quoted on this build. Date lives in the visible copy.
event:
  name: "Add Kubernetes, databases and GPU to your price list — a live webinar"
  language: "en"
  mode: "online"
  performer: "Andrei Kvapil"
  performer_role: "Creator and maintainer of Cozystack, founder of Aenix"
  price: 0
direct_answer: |
  **This is a free live webinar for hosting providers, cloud providers, data centre operators, MSPs and telecoms that already sell infrastructure and are deciding what to sell next. Andrei Kvapil — the creator of Cozystack, an open-source cloud platform and CNCF Sandbox project — walks through how a working provider widens its catalog with managed Kubernetes, managed databases, S3-compatible object storage and GPU: what runs beside the current stack, what happens to billing and to the customer panel, how customers move across one at a time, and what the first ninety days look like. Attendance is free with registration, and every registrant receives the recording.**

quick_facts:
  - label: "Format"
    value: "A live online webinar, about 60 minutes: a practical walkthrough followed by a live Q&A with the speaker"
  - label: "Date"
    value: "Wednesday 19 August 2026, 16:00 CEST (14:00 UTC) — online. Register to get the calendar invite and the recording."
  - label: "Price"
    value: "Free with registration; every registrant receives the recording"
  - label: "Language"
    value: "English"
  - label: "Who it's for"
    value: "Founders, CTOs, COOs and product leaders at hosting providers, cloud providers, data centres, MSPs and telecoms that already sell infrastructure"
  - label: "Host"
    value: "Andrei Kvapil — creator and maintainer of Cozystack (CNCF Sandbox project), founder of Aenix"
  - label: "After the webinar"
    value: "The recording, plus a practical view of a catalog and migration plan you can adapt to your own stack"

faq:
  - q: "We already run a cloud platform. Is this relevant?"
    a: "That is who it is built for. Most of the hour is about adding a second platform beside an existing one, widening the catalog and moving customers gradually — not about starting from zero."
  - q: "Do we have to migrate off VMware, OpenStack or Proxmox?"
    a: "No. The two run side by side for as long as you want. Several providers keep the old stack for the workloads that are happiest there and sell the new services from the new one."
  - q: "What happens to our billing?"
    a: "It stays yours. WHMCS has a ready integration, anything else connects over the platform API, and usage metering exports into whatever you invoice from today. Your customer database stays the source of truth."
  - q: "We wrote our own control panel. Do we throw it away?"
    a: "No. The platform exposes a REST API and its own panel is optional. Andrei covers both patterns: keeping your panel as the customer-facing surface, or white-labelling ours."
  - q: "Can we sell GPU from the same platform?"
    a: "Yes. Whole-card passthrough, vGPU and MIG on supported cards, so one card can serve more than one tenant. Andrei covers what each mode gives you and what you can put in a customer contract."
  - q: "How many engineers does it take to run?"
    a: "Fewer than OpenStack. The platform is one coherent Kubernetes-native stack rather than a dozen services you integrate yourself, and upgrades are a release rather than a project."
  - q: "What does a pilot involve?"
    a: "One node's worth of hardware to start, access, and someone to accept the result against criteria agreed by both sides. The pilot environment becomes your production — you add nodes as you grow into it."
  - q: "Will there be a recording?"
    a: "Yes, to everyone who registers. The Q&A is the exception — that part only happens live."

final_cta:
  heading: "Bring your stack to the Q&A"
  text: "Wednesday 19 August 2026 · 16:00 CEST (14:00 UTC) · online. Attendance is free — with registration; every registrant gets the calendar invite and the recording."
  button: "Save my seat"
  href: "#register"
---

<section class="ws-section ws-story wb-story" aria-labelledby="wb-story-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-story-h">Your infrastructure already earns. The question is what else it could sell</h2>
<p class="ws-lead">You own the racks, you run the platform, and you have the customer relationships. What customers ask for keeps widening — managed Kubernetes, managed databases, object storage, GPU, self-service, predictable billing — and every service you cannot offer is a conversation that ends somewhere else. This session is about closing that gap without rebuilding the business underneath it.</p>
</div>

<div class="ws-wrap ws-story__row">
<div class="ws-story__text">
<h3 class="wb-story__h3">Where this usually starts</h3>
<p>A customer asks whether you do managed Postgres, and the answer is no. A renewal quote arrives with a number on it that changes the maths on your VM margin. The platform works, but keeping it working is somebody's entire job. Or the panel your team wrote years ago still runs provisioning, and every new service turns into another month of glue code.</p>
<p>None of these calls for a rebuild. They call for <strong>one more platform beside what you run, and a way to sell what it can do.</strong></p>
</div>
<div class="ws-story__visual">
<ul class="wb-starts" aria-hidden="true">
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="catalog" >}}</span>
<span class="wb-start__label">A thin catalog</span>
<span class="wb-start__sub">VMs sell, everything else goes elsewhere</span>
</li>
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="stack" >}}</span>
<span class="wb-start__label">A platform that got expensive</span>
<span class="wb-start__sub">Licensing, overhead, manual work</span>
</li>
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="rocket" >}}</span>
<span class="wb-start__label">A catalog customers can buy</span>
<span class="wb-start__sub">On the racks you already own</span>
</li>
</ul>
</div>
</div>

<div class="ws-wrap ws-story__row ws-story__row--reverse">
<div class="ws-story__text">
<h3 class="wb-story__h3">What lands in your price list</h3>
<p>Cozystack is an open-source cloud platform and CNCF Sandbox project that turns your hardware into a catalog: virtual machines, managed Kubernetes, managed databases, S3-compatible object storage and GPU — each one ordered from a self-service panel, provisioned automatically, backed up and monitored. You set the price.</p>
<p>On top of it, Ænix modules turn the platform into a business: <strong>billing and usage metering, a hosting panel, WHMCS and custom integrations, and a migration plan that moves customers one at a time.</strong></p>
</div>
<div class="ws-story__visual ws-story__visual--platform">
<div class="ws-platform wb-platform">
<div class="ws-platform__head">{{< cozy-mark >}}</div>
<span class="wb-platform__cap">Open-source foundation</span>
<ul class="ws-platform__layers">
<li><span class="ws-platform__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/></svg></span>Managed Kubernetes</li>
<li><span class="ws-platform__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6"/><path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3"/></svg></span>Managed databases</li>
<li><span class="ws-platform__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg></span>Virtual machines</li>
<li><span class="ws-platform__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17.5 18H7Z"/></svg></span>S3-compatible storage</li>
<li><span class="ws-platform__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg></span>GPU · passthrough, vGPU, MIG</li>
</ul>
<div class="wb-platform__plus"><span>+ Ænix modules</span></div>
<ul class="wb-platform__modules">
<li><span class="wb-mod__ic">{{< ws-icon name="billing" >}}</span>Billing &amp; usage metering</li>
<li><span class="wb-mod__ic">{{< ws-icon name="catalog" >}}</span>Hosting panel</li>
<li><span class="wb-mod__ic">{{< ws-icon name="stack" >}}</span>WHMCS &amp; custom integrations</li>
</ul>
</div>
</div>
</div>

<div class="ws-wrap">
<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">20+</div><div class="cs-stat__label">managed services in the catalog, ready to price and sell</div></div>
  <div class="cs-stat"><div class="cs-stat__num">1 GPU → many tenants</div><div class="cs-stat__label">whole-card passthrough, vGPU and MIG on supported cards</div></div>
  <div class="cs-stat"><div class="cs-stat__num">€0</div><div class="cs-stat__label">per-core hypervisor licensing — Apache 2.0, CNCF Sandbox project</div></div>
</div>
</div>
</section>

<section class="ws-section wb-proof" aria-labelledby="wb-proof-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-proof-h">European providers already running this</h2>
<p class="ws-lead">Not pilots. Production platforms selling to real customers, built on the same foundation the session walks through.</p>

<div class="wb-cover__grid">
<article class="wb-cover__item">
<span class="wb-cover__num">01</span>
<span class="wb-cover__icon">{{< ws-icon name="shield" >}}</span>
<div class="cs-stat__num" style="font-size:1.9rem;margin:.2rem 0 .1rem">3 data centres</div>
<div class="cs-stat__label" style="margin-bottom:1rem">Switzerland · synchronous replication · more than a dozen tenants in production</div>
<p class="wb-cover__text"><strong>A Swiss cloud provider</strong> moved off a hypervisor stack and a Jelastic/Virtuozzo legacy onto a full commercial public cloud — virtual machines, managed Kubernetes, databases and GPU, sold under its own brand. Its own engineers became Cozystack maintainers.</p>
</article>
<article class="wb-cover__item">
<span class="wb-cover__num">02</span>
<span class="wb-cover__icon">{{< ws-icon name="growth" >}}</span>
<div class="cs-stat__num" style="font-size:1.9rem;margin:.2rem 0 .1rem">5× cheaper GPU</div>
<div class="cs-stat__label" style="margin-bottom:1rem">~11,000 active users moved with no downtime</div>
<p class="wb-cover__text"><strong>A European academic-computing platform</strong> moved off a public hyperscaler onto owned bare metal and kept a single Cluster API spanning bare metal, a hyperscaler and a sovereign Swiss cloud — with fractional GPU sharing across jobs.</p>
</article>
</div>

<p class="wb-cover__note"><span class="wb-cover__note-ic">{{< ws-icon name="chat" >}}</span><span>Both are anonymised at the customer's request. Andrei walks through what each of them actually did — and what he would do differently on your stack.</span></p>
</div>
</section>

<section class="ws-section wb-cover" id="agenda" aria-labelledby="wb-cover-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-cover-h">What we'll cover</h2>
<p class="ws-lead">Forty-five minutes of practice, then your questions.</p>
<ol class="wb-cover__grid">
<li class="wb-cover__item">
<span class="wb-cover__num">01</span>
<span class="wb-cover__icon">{{< ws-icon name="catalog" >}}</span>
<p class="wb-cover__text"><strong>The catalog, and what it earns.</strong> Managed Kubernetes, databases, object storage and GPU as sellable SKUs: what each takes to turn on, what to price it against, and which ones sell first.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">02</span>
<span class="wb-cover__icon">{{< ws-icon name="layers" >}}</span>
<p class="wb-cover__text"><strong>A second platform beside your current one.</strong> How Cozystack sits next to VMware, OpenStack, Proxmox or Virtuozzo without a cutover: where the two stacks touch on the network, on storage and at the load balancer.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">03</span>
<span class="wb-cover__icon">{{< ws-icon name="plan" >}}</span>
<p class="wb-cover__text"><strong>Moving customers across, one at a time.</strong> Migration in practice — what moves cleanly, how long a per-customer move takes, and the workloads Andrei would leave exactly where they are.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">04</span>
<span class="wb-cover__icon">{{< ws-icon name="billing" >}}</span>
<p class="wb-cover__text"><strong>Billing, metering and your panel.</strong> Usage metering out of the platform and into your invoicing. WHMCS as a worked example, custom panels over the API, and tenant lifecycle tied to payment status.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">05</span>
<span class="wb-cover__icon">{{< ws-icon name="vm" >}}</span>
<p class="wb-cover__text"><strong>GPU as a product.</strong> Renting a whole card or a slice of one: passthrough, vGPU and MIG, what each isolates, and what you can put in a customer contract.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">06</span>
<span class="wb-cover__icon">{{< ws-icon name="rocket" >}}</span>
<p class="wb-cover__text"><strong>The pilot, and the first ninety days.</strong> One node, roughly two weeks to a working environment, and the pilot becomes your production — no reinstall, acceptance criteria agreed by both sides.</p>
</li>
</ol>
<p class="wb-cover__note"><span class="wb-cover__note-ic">{{< ws-icon name="chat" >}}</span><span>The session ends with a <strong>live Q&amp;A</strong>. Questions submitted at registration get priority — and this part only happens live.</span></p>
</div>
</section>

<section class="ws-section ws-outcomes wb-outcomes" aria-labelledby="wb-outcomes-h">
<div class="ws-outcomes__bg" aria-hidden="true"></div>
<div class="ws-wrap">
<h2 class="ws-h2 ws-h2--light" id="wb-outcomes-h">What you'll leave with</h2>
<div class="ws-outcomes__grid">
<article class="ws-outcome ws-outcome--hero">
<span class="ws-outcome__num">01</span>
<span class="ws-outcome__icon">{{< ws-icon name="catalog" >}}</span>
<p class="ws-outcome__text"><strong>A realistic next catalog</strong> — the services worth adding first, and what each one is worth to you.</p>
</article>
<article class="ws-outcome">
<span class="ws-outcome__num">02</span>
<span class="ws-outcome__icon">{{< ws-icon name="billing" >}}</span>
<p class="ws-outcome__text"><strong>A clear-eyed view of billing</strong>, usage metering and panel integration — how they work in practice.</p>
</article>
<article class="ws-outcome">
<span class="ws-outcome__num">03</span>
<span class="ws-outcome__icon">{{< ws-icon name="map" >}}</span>
<p class="ws-outcome__text"><strong>A migration path</strong> that keeps your customers online and your calendar your own.</p>
</article>
<article class="ws-outcome ws-outcome--hero">
<span class="ws-outcome__num">04</span>
<span class="ws-outcome__icon">{{< ws-icon name="plan" >}}</span>
<p class="ws-outcome__text"><strong>A pilot you can actually start</strong> — one node, two weeks, and it becomes your production.</p>
</article>
</div>
<div class="ws-cta-center"><a class="cta-primary cta-accent" href="#register">Save my seat</a></div>
</div>
</section>

<section class="ws-section wb-audience" aria-labelledby="wb-audience-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-audience-h">Who should attend</h2>
<p class="ws-lead">Providers that already sell infrastructure and are deciding what to sell next. If your platform today is VMware, OpenStack, Proxmox, Virtuozzo, CloudStack, OpenNebula or something you wrote yourself, the session is built around your situation.</p>
<ul class="wb-audience__tiles">
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="server" >}}</span>Hosting providers</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="cloud" >}}</span>Cloud providers</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="datacenter" >}}</span>Data centre operators</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="msp" >}}</span>MSPs</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="telecom" >}}</span>Telecom companies</li>
</ul>
<p class="wb-audience__roles-label">Especially the people who own the service catalog and the number under it:</p>
<ul class="wb-audience__roles">
<li>Founders</li>
<li>CTOs</li>
<li>COOs</li>
<li>Product leaders</li>
</ul>
</div>
</section>

<section class="ws-section ws-speaker wb-speaker" aria-labelledby="wb-speaker-h">
<div class="ws-wrap ws-speaker__grid">
<div class="ws-speaker__photo">{{< workshop-photo src="images/webinars/andrei-kvapil.png" alt="Andrei Kvapil" >}}</div>
<div class="ws-speaker__info">
<h2 class="ws-h2" id="wb-speaker-h">Your speaker</h2>
<div class="ws-speaker__name">Andrei Kvapil</div>
<div class="ws-speaker__role">Creator of Cozystack · Founder of Aenix</div>
<p class="ws-speaker__bio">Andrei created Cozystack, the open-source cloud platform and CNCF Sandbox project, after more than fifteen years of building clouds and high-load infrastructure. He contributes to Kubernetes, KubeVirt, Cilium and LINSTOR, and speaks at KubeCon and other industry events. At Aenix, he helps providers across Europe turn their infrastructure into commercial cloud services.</p>
<div class="wb-speaker__links">
<a class="wb-speaker__link" href="https://github.com/kvaps" target="_blank" rel="noopener">
<svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
GitHub</a>
<a class="wb-speaker__link" href="https://www.linkedin.com/in/kvaps/" target="_blank" rel="noopener">
<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
LinkedIn</a>
</div>
</div>
</div>
</section>

<section class="ws-section ws-register" id="register" aria-labelledby="wb-register-h">
<div class="ws-register__bg" aria-hidden="true"></div>
<div class="ws-wrap ws-register__inner">
<h2 class="ws-h2 ws-h2--light" id="wb-register-h">Registration</h2>
<p class="ws-register__lead">Wednesday 19 August 2026 · 16:00 CEST (14:00 UTC) · online. Attendance is free — with registration: you get the calendar invite and the recording.</p>
<div class="ws-register__form">

{{< clickmeeting room="18263597110070205" >}}

</div>
</div>
</section>
