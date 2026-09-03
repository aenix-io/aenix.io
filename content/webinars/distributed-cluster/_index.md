---
title: "Webinar: the cluster that survives a datacenter outage"
description: "A free live webinar with Andrei Kvapil, creator of Cozystack: build a distributed Kubernetes cluster on your own hardware that survives losing a whole datacenter — metro-stretch, two-DC + witness, storage, GPU and live migration."
language: "en"
layout: "event-landing"
bodyClass: "webinar-landing"
primary_keyword: "distributed kubernetes cluster"
secondary_keywords: ["metro stretch cluster", "kubernetes disaster recovery", "two datacenter witness quorum", "cozystack distributed webinar", "geo-redundant private cloud"]
images: ["img/og/og-webinar-en.png"]
hide_child_cards: true
hero_eyebrow: "Free live webinar · Online · Wednesday 30 September 2026 · 16:00 CEST (14:00 UTC)"
hero_title: "The cluster that survives a datacenter outage"
hero_tagline: "One hour with Andrei Kvapil, the creator of Cozystack: build real geo-resilience on your own hardware — metro-stretch, two datacenters plus a witness, and remote-DC DR — from hardware and network to storage, GPU and databases that fail over on their own. Shown on a real production cluster across three datacenters."
hero_chips:
  - "Free with registration"
  - "60 minutes, live Q&A"
  - "Recording for every registrant"
  - "Bring your stack — questions answered live"
hero_primary: { text: "Save my seat", href: "#register" }
hero_secondary: { text: "See the agenda", href: "#agenda" }
speaker_photo: "images/webinars/andrei-kvapil-hero.png"
inshort_title: "About the webinar"
quick_facts_style: "rows"
event:
  name: "The cluster that survives a datacenter outage — a live webinar"
  language: "en"
  mode: "online"
  performer: "Andrei Kvapil"
  performer_role: "Creator and maintainer of Cozystack, founder of Ænix"
  price: 0
direct_answer: |
  **This is a free live webinar for enterprise infrastructure teams and for clouds, hosting providers and datacenter operators that need geo-resilience they can prove. Andrei Kvapil — the creator of Cozystack, an open-source cloud platform and CNCF Sandbox project — builds a distributed Kubernetes cluster live: the three topologies for three levels of latency (metro-stretch with RPO=0, two datacenters plus a witness, and remote-DC DR), the quorum math for surviving a lost site, synchronous storage across datacenters, live migration of VMs and databases, GPU across sites, and the real DR drills where a whole datacenter was powered off on purpose. Shown on a real production cluster stretched across three datacenters. Attendance is free with registration, and every registrant receives the recording.**

quick_facts:
  - label: "Format"
    value: "A live online webinar, about 60 minutes: a practical walkthrough with live demos, followed by a live Q&A with the speaker"
  - label: "Date"
    value: "Wednesday 30 September 2026, 16:00 CEST (14:00 UTC) — online. Register to get the calendar invite and the recording."
  - label: "Price"
    value: "Free with registration; every registrant receives the recording"
  - label: "Language"
    value: "English"
  - label: "Who it's for"
    value: "Architects, SREs, CTOs and infrastructure leaders who sign off on DR — and providers selling geo-redundant services"
  - label: "Host"
    value: "Andrei Kvapil — creator and maintainer of Cozystack (CNCF Sandbox project), founder of Ænix"
  - label: "After the webinar"
    value: "The recording, plus a map of the three topologies and a readiness checklist you can score your own datacenters against"

faq:
  - q: "Is this a real production system or a lab demo?"
    a: "Real production. The core case is a Cozystack cluster stretched across three datacenters, plus the actual DR drills we ran with the provider — including what broke and what we fixed."
  - q: "Do I need three datacenters to get value?"
    a: "No. We cover single-site teams planning their first second site, two-DC plus witness setups, and full three-site stretch — so you can place yourself on the map wherever you start."
  - q: "How is this different from VMware vSAN stretched + SRM?"
    a: "The same metro-stretch resilience, without per-socket licensing or vendor lock-in, on an open-source core you can run on your own hardware. We compare the approaches honestly."
  - q: "Can you really lose a datacenter with zero data loss?"
    a: "In a synchronous metro-stretch topology — datacenters within metro distance, roughly a couple of milliseconds round-trip — yes, RPO=0. We show it live and are explicit about where synchronous replication stops working over longer distances, and what you use instead."
  - q: "What about GPU and databases across sites?"
    a: "We cover both: GPU sharing within a site and cloud-burst to other sites or a public cloud, and managed databases that place replicas per zone and switch over automatically when a site is lost."
  - q: "Which storage — DRBD or Ceph?"
    a: "Both. We compare synchronous DRBD and Ceph across datacenters — the replication model, the quorum, dedicated storage networks and the tuning that keeps latency from triggering false failovers."
  - q: "Will there be a recording?"
    a: "Yes, to everyone who registers. The Q&A is the exception — that part only happens live."

final_cta:
  heading: "Bring your datacenters to the Q&A"
  text: "Wednesday 30 September 2026 · 16:00 CEST (14:00 UTC) · online. Attendance is free — with registration; every registrant gets the calendar invite and the recording."
  button: "Save my seat"
  href: "#register"
---

<section class="ws-section ws-story wb-story" aria-labelledby="wb-story-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-story-h">One datacenter is one risk. What happens when it goes dark?</h2>
<p class="ws-lead">Customers and regulators increasingly demand geo-resilience, and "we have backups" is not an answer when a whole site goes offline. But a distributed cluster is not a checkbox — it is three different architectures for three levels of latency, and the difference between them is the difference between RPO=0 and a split-brain outage. This session is the honest engineering: where the seams are, and how to hold them.</p>
</div>

<div class="ws-wrap ws-story__row">
<div class="ws-story__text">
<h3 class="wb-story__h3">Where this usually starts</h3>
<p>Everything runs in a single datacenter, and a power, network or cooling failure takes the whole business with it — while the DR plan is a runbook nobody has rehearsed. Or there is a second site, but resilience means VMware vSAN stretched and SRM licensing, or an OpenStack build that needs a full team just to stay alive.</p>
<p>None of these calls for a rebuild. They call for <strong>geo-resilience on hardware you own — without per-socket licensing or a platform you can't operate.</strong></p>
</div>
<div class="ws-story__visual">
<ul class="wb-starts" aria-hidden="true">
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="datacenter" >}}</span>
<span class="wb-start__label">One site, one risk</span>
<span class="wb-start__sub">A single failure takes the business with it</span>
</li>
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="billing" >}}</span>
<span class="wb-start__label">DR that's costly and locked in</span>
<span class="wb-start__sub">Per-socket licensing or a stack you can't run</span>
</li>
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="shield" >}}</span>
<span class="wb-start__label">Survives a lost datacenter</span>
<span class="wb-start__sub">On hardware you own, RPO=0</span>
</li>
</ul>
</div>
</div>

<div class="ws-wrap ws-story__row ws-story__row--reverse">
<div class="ws-story__text">
<h3 class="wb-story__h3">What holds it together</h3>
<p>Cozystack is an open-source cloud platform and CNCF Sandbox project that runs one Kubernetes API across sites — virtual machines, managed databases, storage and networking as declarative resources, from three nodes to three datacenters. Nodes join through the API, storage and topology are resources, and DR is described as code.</p>
<p>On top of it sits the difference that matters: <strong>defaults and runbooks forged in real disaster-recovery drills with a production provider</strong> — synchronous storage, quorum tuning, topology-aware placement — so you start from what already survived a real outage.</p>
</div>
<div class="ws-story__visual ws-story__visual--platform">
<div class="ws-platform wb-platform">
<div class="ws-platform__head">{{< cozy-mark >}}</div>
<span class="wb-platform__cap">One API across sites</span>
<ul class="ws-platform__layers">
<li><span class="ws-platform__ic">{{< ws-icon name="datacenter" >}}</span>Metro-stretch · two-DC + witness · remote-DC</li>
<li><span class="ws-platform__ic">{{< ws-icon name="layers" >}}</span>Synchronous storage · DRBD or Ceph</li>
<li><span class="ws-platform__ic">{{< ws-icon name="vm" >}}</span>Live migration · VMs, databases, workloads</li>
<li><span class="ws-platform__ic">{{< ws-icon name="cloud" >}}</span>GPU across sites &amp; cloud-burst</li>
</ul>
<div class="wb-platform__plus"><span>+ Production hardening</span></div>
<ul class="wb-platform__modules">
<li><span class="wb-mod__ic">{{< ws-icon name="shield" >}}</span>Quorum &amp; witness defaults</li>
<li><span class="wb-mod__ic">{{< ws-icon name="map" >}}</span>Topology-aware placement</li>
<li><span class="wb-mod__ic">{{< ws-icon name="plan" >}}</span>Runbooks from real DR drills</li>
</ul>
</div>
</div>
</div>

<div class="ws-wrap">
<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">RPO 0</div><div class="cs-stat__label">lose a whole datacenter and lose no data, on synchronous metro-stretch</div></div>
  <div class="cs-stat"><div class="cs-stat__num">~11,000 users</div><div class="cs-stat__label">served across bare metal, a hyperscaler and a sovereign cloud under one API</div></div>
  <div class="cs-stat"><div class="cs-stat__num">€0</div><div class="cs-stat__label">per-socket licensing — Apache 2.0, CNCF Sandbox project</div></div>
</div>
</div>
</section>

<section class="ws-section wb-proof" aria-labelledby="wb-proof-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-proof-h">Distributed, in production — not on slides</h2>
<p class="ws-lead">Real platforms serving real customers, built on the same foundation the session walks through.</p>

<div class="wb-cover__grid">
<article class="wb-cover__item">
<span class="wb-cover__num">01</span>
<span class="wb-cover__icon">{{< ws-icon name="shield" >}}</span>
<div class="cs-stat__num" style="font-size:1.9rem;margin:.2rem 0 .1rem">3 datacenters</div>
<div class="cs-stat__label" style="margin-bottom:1rem">Switzerland · synchronous replication · more than a dozen tenants in production</div>
<p class="wb-cover__text"><strong>A Swiss cloud provider</strong> runs one Cozystack cluster stretched across three datacenters, with topology-aware placement and synchronous storage. Together we ran real DR drills — powering off a whole datacenter on purpose — and turned what broke into platform defaults.</p>
</article>
<article class="wb-cover__item">
<span class="wb-cover__num">02</span>
<span class="wb-cover__icon">{{< ws-icon name="cloud" >}}</span>
<div class="cs-stat__num" style="font-size:1.9rem;margin:.2rem 0 .1rem">One API, three clouds</div>
<div class="cs-stat__label" style="margin-bottom:1rem">~11,000 active users · bare metal, hyperscaler and sovereign cloud</div>
<p class="wb-cover__text"><strong>A European academic-computing platform</strong> keeps a single Kubernetes API spanning owned bare metal, a public hyperscaler and a sovereign cloud — bursting workloads, including GPU, across sites on demand and pulling them back when the spike passes.</p>
</article>
</div>

<p class="wb-cover__note"><span class="wb-cover__note-ic">{{< ws-icon name="chat" >}}</span><span>Both are anonymized at the customer's request. Andrei walks through what each of them actually did — and what he would do differently on your stack.</span></p>
</div>
</section>

<section class="ws-section wb-cover" id="agenda" aria-labelledby="wb-cover-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-cover-h">What we'll cover</h2>
<p class="ws-lead">Live demos, not slides — then your questions.</p>

<ul class="wb-topo">
<li class="wb-topo__item">
<div class="wb-topo__viz">
<svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
<g stroke="var(--ws-cyan, #91dbeb)" stroke-width="2" stroke-linecap="round" opacity=".75">
<line x1="84" y1="28" x2="176" y2="28"/>
<line x1="60" y1="48" x2="112" y2="70"/>
<line x1="200" y1="48" x2="148" y2="70"/>
</g>
<g fill="rgba(1,165,255,.08)" stroke="rgba(1,165,255,.38)" stroke-width="1.5">
<rect x="12" y="8" width="72" height="40" rx="8"/>
<rect x="176" y="8" width="72" height="40" rx="8"/>
<rect x="94" y="70" width="72" height="40" rx="8"/>
</g>
<g fill="var(--ws-blue, #01a5ff)">
<g opacity=".7"><rect x="24" y="17" width="48" height="4" rx="2"/><rect x="188" y="17" width="48" height="4" rx="2"/><rect x="106" y="79" width="48" height="4" rx="2"/></g>
<g opacity=".5"><rect x="24" y="26" width="48" height="4" rx="2"/><rect x="188" y="26" width="48" height="4" rx="2"/><rect x="106" y="88" width="48" height="4" rx="2"/></g>
<g opacity=".3"><rect x="24" y="35" width="48" height="4" rx="2"/><rect x="188" y="35" width="48" height="4" rx="2"/><rect x="106" y="97" width="48" height="4" rx="2"/></g>
</g>
</svg>
</div>
<h3 class="wb-topo__name">Metro-stretch</h3>
<p class="wb-topo__desc">Three sites close enough to replicate synchronously, running as one cluster.</p>
<dl class="wb-topo__specs">
<div class="wb-topo__spec"><dt>Distance</dt><dd>metro, roughly 1–2&nbsp;ms round-trip</dd></div>
<div class="wb-topo__spec"><dt>Quorum</dt><dd>three voting sites — any one can be lost</dd></div>
<div class="wb-topo__spec"><dt>Data loss</dt><dd><strong>RPO&nbsp;0</strong>, failover without a decision</dd></div>
</dl>
</li>
<li class="wb-topo__item">
<div class="wb-topo__viz">
<svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
<g stroke="var(--ws-violet, #a78bfa)" stroke-width="1.75" stroke-linecap="round" stroke-dasharray="4 5" opacity=".7">
<line x1="52" y1="62" x2="114" y2="36"/>
<line x1="208" y1="62" x2="146" y2="36"/>
</g>
<line x1="84" y1="82" x2="176" y2="82" stroke="var(--ws-cyan, #91dbeb)" stroke-width="2" stroke-linecap="round" opacity=".75"/>
<circle cx="130" cy="26" r="15" fill="rgba(167,139,250,.1)" stroke="rgba(167,139,250,.45)" stroke-width="1.5"/>
<circle cx="130" cy="26" r="4.5" fill="var(--ws-violet, #a78bfa)" opacity=".85"/>
<g fill="rgba(1,165,255,.08)" stroke="rgba(1,165,255,.38)" stroke-width="1.5">
<rect x="12" y="62" width="72" height="40" rx="8"/>
<rect x="176" y="62" width="72" height="40" rx="8"/>
</g>
<g fill="var(--ws-blue, #01a5ff)">
<g opacity=".7"><rect x="24" y="71" width="48" height="4" rx="2"/><rect x="188" y="71" width="48" height="4" rx="2"/></g>
<g opacity=".5"><rect x="24" y="80" width="48" height="4" rx="2"/><rect x="188" y="80" width="48" height="4" rx="2"/></g>
<g opacity=".3"><rect x="24" y="89" width="48" height="4" rx="2"/><rect x="188" y="89" width="48" height="4" rx="2"/></g>
</g>
</svg>
</div>
<h3 class="wb-topo__name">Two datacenters + witness</h3>
<p class="wb-topo__desc">Two full sites plus a third tiny location that does nothing but hold a vote.</p>
<dl class="wb-topo__specs">
<div class="wb-topo__spec"><dt>Distance</dt><dd>metro or remote — the witness is what changes</dd></div>
<div class="wb-topo__spec"><dt>Quorum</dt><dd><strong>the witness breaks the tie</strong> when a site drops</dd></div>
<div class="wb-topo__spec"><dt>Data loss</dt><dd>RPO&nbsp;0 while replication stays synchronous</dd></div>
</dl>
</li>
<li class="wb-topo__item">
<div class="wb-topo__viz">
<svg viewBox="0 0 260 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
<defs>
<marker id="wb-topo-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
<path d="M0 1 L9 5 L0 9 z" fill="var(--ws-violet, #a78bfa)" opacity=".8"/>
</marker>
</defs>
<g stroke="var(--ws-violet, #a78bfa)" stroke-width="2" stroke-linecap="round" stroke-dasharray="5 6" opacity=".7">
<line x1="84" y1="60" x2="112" y2="60"/>
<line x1="148" y1="60" x2="170" y2="60" marker-end="url(#wb-topo-arrow)"/>
</g>
<g stroke="rgba(255,255,255,.24)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
<path d="M120 50 l7 10 -7 10"/>
<path d="M132 50 l7 10 -7 10"/>
</g>
<g fill="rgba(1,165,255,.08)" stroke="rgba(1,165,255,.38)" stroke-width="1.5">
<rect x="12" y="40" width="72" height="40" rx="8"/>
</g>
<rect x="176" y="40" width="72" height="40" rx="8" fill="rgba(167,139,250,.07)" stroke="rgba(167,139,250,.35)" stroke-width="1.5"/>
<g fill="var(--ws-blue, #01a5ff)">
<g opacity=".7"><rect x="24" y="49" width="48" height="4" rx="2"/></g>
<g opacity=".5"><rect x="24" y="58" width="48" height="4" rx="2"/></g>
<g opacity=".3"><rect x="24" y="67" width="48" height="4" rx="2"/></g>
</g>
<g fill="var(--ws-violet, #a78bfa)">
<g opacity=".55"><rect x="188" y="49" width="48" height="4" rx="2"/></g>
<g opacity=".4"><rect x="188" y="58" width="48" height="4" rx="2"/></g>
<g opacity=".25"><rect x="188" y="67" width="48" height="4" rx="2"/></g>
</g>
</svg>
</div>
<h3 class="wb-topo__name">Remote-DC DR</h3>
<p class="wb-topo__desc">One site replicates to a distant one, too far away for synchronous writes.</p>
<dl class="wb-topo__specs">
<div class="wb-topo__spec"><dt>Distance</dt><dd>beyond the synchronous range — tens of ms</dd></div>
<div class="wb-topo__spec"><dt>Quorum</dt><dd>each site keeps its own; no stretched vote</dd></div>
<div class="wb-topo__spec"><dt>Data loss</dt><dd><strong>RPO&nbsp;&gt;&nbsp;0</strong>, failover is a decision you make</dd></div>
</dl>
</li>
</ul>
<ol class="wb-cover__grid">
<li class="wb-cover__item">
<span class="wb-cover__num">01</span>
<span class="wb-cover__icon">{{< ws-icon name="datacenter" >}}</span>
<p class="wb-cover__text"><strong>Three topologies, and when each applies.</strong> Metro-stretch (RPO=0), two datacenters plus a witness, and remote-DC DR — including when stretching is an anti-pattern.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">02</span>
<span class="wb-cover__icon">{{< ws-icon name="shield" >}}</span>
<p class="wb-cover__text"><strong>Quorum math you can trust.</strong> How many nodes survive losing one datacenter, why two sites need a witness, and how etcd behaves when the network cuts.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">03</span>
<span class="wb-cover__icon">{{< ws-icon name="layers" >}}</span>
<p class="wb-cover__text"><strong>Storage across sites.</strong> Synchronous DRBD vs Ceph, dedicated storage networks, and the tuning that keeps latency from triggering false failovers.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">04</span>
<span class="wb-cover__icon">{{< ws-icon name="vm" >}}</span>
<p class="wb-cover__text"><strong>Moving live workloads.</strong> VM live-migration, database switchover, pod rescheduling and queue rebalancing — and the honest limits for GPU workloads (a VM with a passthrough GPU can't live-migrate).</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">05</span>
<span class="wb-cover__icon">{{< ws-icon name="cloud" >}}</span>
<p class="wb-cover__text"><strong>GPU and cloud-burst.</strong> Pooling GPUs within a site, and bursting to other sites or a public cloud — ordering GPU nodes straight into your cluster.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">06</span>
<span class="wb-cover__icon">{{< ws-icon name="plan" >}}</span>
<p class="wb-cover__text"><strong>DR drills with a real provider.</strong> How we deliberately powered off a datacenter, what broke, what we tuned, and how it became a product default.</p>
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
<span class="ws-outcome__icon">{{< ws-icon name="map" >}}</span>
<p class="ws-outcome__text"><strong>A map of the three topologies</strong> — and when each one fits, including when stretching is an anti-pattern.</p>
</article>
<article class="ws-outcome">
<span class="ws-outcome__num">02</span>
<span class="ws-outcome__icon">{{< ws-icon name="shield" >}}</span>
<p class="ws-outcome__text"><strong>The quorum math</strong> for surviving one or two lost datacenters, including the two-DC + witness pattern.</p>
</article>
<article class="ws-outcome">
<span class="ws-outcome__num">03</span>
<span class="ws-outcome__icon">{{< ws-icon name="layers" >}}</span>
<p class="ws-outcome__text"><strong>A clear view of storage and live migration</strong> under real network latency — and the knobs that tune them.</p>
</article>
<article class="ws-outcome ws-outcome--hero">
<span class="ws-outcome__num">04</span>
<span class="ws-outcome__icon">{{< ws-icon name="plan" >}}</span>
<p class="ws-outcome__text"><strong>A readiness checklist</strong> to score your own datacenters against before you build.</p>
</article>
</div>
<div class="ws-cta-center"><a class="cta-primary cta-accent" href="#register">Save my seat</a></div>
</div>
</section>

<section class="ws-section wb-audience" aria-labelledby="wb-audience-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-audience-h">Who should attend</h2>
<p class="ws-lead">Enterprise infrastructure teams that need geo-resilience they can prove, and clouds, hosting providers and datacenter operators that want to sell geo-redundant services. If you're comparing VMware vSAN stretched and SRM, an OpenStack build, or multi-AZ on a hyperscaler, the session is built around your situation.</p>
<ul class="wb-audience__tiles">
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="server" >}}</span>Enterprise infrastructure teams</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="cloud" >}}</span>Cloud providers</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="datacenter" >}}</span>Datacenter operators</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="server" >}}</span>Hosting providers</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="msp" >}}</span>MSPs</li>
</ul>
<p class="wb-audience__roles-label">Especially the people who sign off on resilience and DR:</p>
<ul class="wb-audience__roles">
<li>Architects</li>
<li>SREs</li>
<li>CTOs</li>
<li>Infrastructure leaders</li>
</ul>
</div>
</section>

<section class="ws-section ws-speaker wb-speaker" aria-labelledby="wb-speaker-h">
<div class="ws-wrap ws-speaker__grid">
<div class="ws-speaker__photo">{{< workshop-photo src="images/webinars/andrei-kvapil.png" alt="Andrei Kvapil" >}}</div>
<div class="ws-speaker__info">
<h2 class="ws-h2" id="wb-speaker-h">Your speaker</h2>
<div class="ws-speaker__name">Andrei Kvapil</div>
<div class="ws-speaker__role">Creator of Cozystack · Founder of Ænix</div>
<p class="ws-speaker__bio">Andrei created Cozystack, the open-source cloud platform and CNCF Sandbox project, after more than fifteen years of building clouds and high-load infrastructure. He contributes to Kubernetes, KubeVirt, Cilium and LINSTOR, and speaks at KubeCon and other industry events. At Ænix, he helps providers across Europe build geo-resilient infrastructure on hardware they own.</p>
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
<p class="ws-register__lead">Wednesday 30 September 2026 · 16:00 CEST (14:00 UTC) · online. Attendance is free — with registration: you get the calendar invite and the recording.</p>
<div class="ws-register__form">

{{< clickmeeting room="18263597110070205" >}}

</div>
</div>
</section>
