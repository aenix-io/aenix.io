---
title: "Webinar: build the GPU cloud you've been renting"
description: "A free live webinar with Andrei Kvapil, creator of Cozystack: turn the GPUs you already own into a multi-tenant AI cloud — sharing, inference and per-token metering, assembled entirely from open source."
language: "en"
layout: "event-landing"
bodyClass: "webinar-landing"
primary_keyword: "build a gpu cloud"
secondary_keywords: ["gpu sharing kubernetes", "multi-tenant gpu platform", "inference as a service", "cozystack gpu webinar", "gpu as a service open source"]
images: ["img/og/og-webinar-en.png"]
hide_child_cards: true
hero_eyebrow: "Free live webinar · Online · Thursday 10 September 2026 · 16:00 CEST (14:00 UTC)"
hero_title: "Build the GPU cloud you've been renting"
hero_tagline: "One hour with Andrei Kvapil, the creator of Cozystack: turn the GPUs you already own into a multi-tenant platform teams can use — or customers can buy — from bare metal to a metered inference endpoint, assembled entirely from open source."
hero_chips:
  - "Free with registration"
  - "50 minutes, live Q&A"
  - "Recording to every registrant"
  - "Bring your stack — questions answered live"
hero_primary: { text: "Save my seat", href: "#register" }
hero_secondary: { text: "See the agenda", href: "#agenda" }
speaker_photo: "images/webinars/andrei-kvapil.png"
inshort_title: "About the webinar"
quick_facts_style: "rows"
event:
  name: "Build the GPU cloud you've been renting — a live webinar"
  language: "en"
  mode: "online"
  performer: "Andrei Kvapil"
  performer_role: "Creator and maintainer of Cozystack, founder of Aenix"
  price: 0
direct_answer: |
  **This is a free live webinar for enterprise platform teams and for cloud, telecom and GPU providers building a sovereign AI offering. Andrei Kvapil — the creator of Cozystack, an open-source cloud platform and CNCF Sandbox project — shows the whole path from bare metal to a metered inference endpoint: turning a node with GPUs into GPU-ready tenant clusters, the four ways to allocate a single card, serving inference with vLLM and NVIDIA Dynamo, and metering it by GPU-hour or by token — all assembled from open source. The internal AI platform and the commercial GPU cloud turn out to be the same stack. Attendance is free with registration, and every registrant receives the recording.**

quick_facts:
  - label: "Format"
    value: "A live online webinar, about 50 minutes: a practical walkthrough with live demos, followed by a live Q&A with the speaker"
  - label: "Date"
    value: "Thursday 10 September 2026, 16:00 CEST (14:00 UTC) — online. Register to get the calendar invite and the recording."
  - label: "Price"
    value: "Free with registration; every registrant receives the recording"
  - label: "Language"
    value: "English"
  - label: "Who it's for"
    value: "Platform engineers, architects, CTOs and infrastructure leaders who own the GPUs — and providers building an AI cloud"
  - label: "Host"
    value: "Andrei Kvapil — creator and maintainer of Cozystack (CNCF Sandbox project), founder of Aenix"
  - label: "After the webinar"
    value: "The recording, plus a clear map of a GPU platform and a decision matrix for sharing GPUs you can adapt to your own cluster"

faq:
  - q: "Is this about training models or running infrastructure?"
    a: "Infrastructure. We cover the platform under your AI workloads — GPU sharing, tenancy, inference serving and metering — not model training, MLOps pipelines or model quality."
  - q: "We only want an internal platform, not a commercial cloud. Is it still useful?"
    a: "Yes. An internal GPU platform is the same stack as a commercial AI cloud, minus the second meter. Everything on sharing, tenancy and inference applies directly to an internal build."
  - q: "Do we need NVIDIA GPUs?"
    a: "The live demos run on NVIDIA — GPU Operator, MIG, vGPU and Dynamo. We'll speak to the state of AMD and other accelerators in the Q&A."
  - q: "Can you really meter inference per token on an open stack?"
    a: "Yes, and we show it live: an AI gateway in front of the model issues API keys, counts input and output tokens, and returns a 429 (over quota) when a budget runs out. We name the open components used."
  - q: "Do you cover multi-node training and the GPU interconnect?"
    a: "Briefly, yes. We show where the fabric matters — NVLink within a node, GPUDirect RDMA over InfiniBand or RoCE across nodes — and the honest limit: tightly coupled multi-node training doesn't survive WAN latency, so it lives inside one site."
  - q: "How does this compare to Run:ai or OpenShift AI?"
    a: "We compare approaches — buying a platform, renting capacity, or assembling open source — across licensing, GPU sharing, tenant isolation, inference and metering, including the honest trade-offs."
  - q: "Will there be a recording?"
    a: "Yes, to everyone who registers. The Q&A is the exception — that part only happens live."

final_cta:
  heading: "Bring your GPUs to the Q&A"
  text: "Thursday 10 September 2026 · 16:00 CEST (14:00 UTC) · online. Attendance is free — with registration; every registrant gets the calendar invite and the recording."
  button: "Save my seat"
  href: "#register"
---

<section class="ws-section ws-story wb-story" aria-labelledby="wb-story-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-story-h">The GPUs are already racked. Now make them earn</h2>
<p class="ws-lead">Every team wants AI infrastructure, and the market sells it as a product you buy whole. In reality a GPU platform is a stack of layers — sharing, tenancy, inference, metering — and each one already has a mature open-source project waiting. The gap is not the hardware. It is the assembly, and that is exactly what this session walks through.</p>
</div>

<div class="ws-wrap ws-story__row">
<div class="ws-story__text">
<h3 class="wb-story__h3">Where this usually starts</h3>
<p>Expensive cards run at twenty or thirty per cent while one team waits on another, because there is no sharing, no quotas and no self-service. Or the budget bleeds into hyperscaler GPU instances for work that could run on hardware in your own racks, with the data staying home. Or the platform team is asked to "hand the GPUs out" and discovers there is no clean way to do it.</p>
<p>None of these calls for new hardware. They call for <strong>a way to turn the cards you already own into a platform teams can use — or customers can buy.</strong></p>
</div>
<div class="ws-story__visual">
<ul class="wb-starts" aria-hidden="true">
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="vm" >}}</span>
<span class="wb-start__label">Idle silicon</span>
<span class="wb-start__sub">Cards at 20–30%, no sharing or self-service</span>
</li>
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="billing" >}}</span>
<span class="wb-start__label">Renting your workloads back</span>
<span class="wb-start__sub">Hyperscaler GPU bills for work you could run at home</span>
</li>
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="rocket" >}}</span>
<span class="wb-start__label">A GPU cloud on your racks</span>
<span class="wb-start__sub">Shared, metered, self-service</span>
</li>
</ul>
</div>
</div>

<div class="ws-wrap ws-story__row ws-story__row--reverse">
<div class="ws-story__text">
<h3 class="wb-story__h3">What turns cards into a platform</h3>
<p>Cozystack is an open-source cloud platform and CNCF Sandbox project that turns a node with GPUs into GPU-ready tenant clusters, managed databases, S3-compatible storage and inference — each one a Kubernetes resource behind one API. Teams get their own cluster, not a namespace, with the cards visible inside.</p>
<p>On top of it, Ænix modules turn the platform into a business: <strong>GPU-hour and per-token metering, tenant quotas, a self-service panel, and the integrations that turn raw consumption into an invoice.</strong></p>
</div>
<div class="ws-story__visual ws-story__visual--platform">
<div class="ws-platform wb-platform">
<div class="ws-platform__head">{{< cozy-mark >}}</div>
<span class="wb-platform__cap">Open-source foundation</span>
<ul class="ws-platform__layers">
<li><span class="ws-platform__ic">{{< ws-icon name="vm" >}}</span>GPU-ready tenant clusters</li>
<li><span class="ws-platform__ic">{{< ws-icon name="layers" >}}</span>GPU sharing · passthrough, vGPU, MIG, fractional</li>
<li><span class="ws-platform__ic">{{< ws-icon name="rocket" >}}</span>Managed inference · vLLM, NVIDIA Dynamo</li>
<li><span class="ws-platform__ic">{{< ws-icon name="stack" >}}</span>Managed databases &amp; S3-compatible storage</li>
</ul>
<div class="wb-platform__plus"><span>+ Ænix modules</span></div>
<ul class="wb-platform__modules">
<li><span class="wb-mod__ic">{{< ws-icon name="billing" >}}</span>GPU-hour &amp; per-token metering</li>
<li><span class="wb-mod__ic">{{< ws-icon name="catalog" >}}</span>Self-service panel &amp; quotas</li>
<li><span class="wb-mod__ic">{{< ws-icon name="stack" >}}</span>Custom integrations over the API</li>
</ul>
</div>
</div>
</div>

<div class="ws-wrap">
<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">4 ways</div><div class="cs-stat__label">to allocate one card — passthrough, vGPU, MIG, fractional</div></div>
  <div class="cs-stat"><div class="cs-stat__num">1 GPU → many tenants</div><div class="cs-stat__label">vGPU, MIG and fractional sharing on supported cards</div></div>
  <div class="cs-stat"><div class="cs-stat__num">€0</div><div class="cs-stat__label">per-core hypervisor licensing — Apache 2.0, CNCF Sandbox project</div></div>
</div>
</div>
</section>

<section class="ws-section wb-proof" aria-labelledby="wb-proof-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-proof-h">Providers already running GPU on this</h2>
<p class="ws-lead">Not pilots. Production platforms serving real users, built on the same foundation the session walks through.</p>

<div class="wb-cover__grid">
<article class="wb-cover__item">
<span class="wb-cover__num">01</span>
<span class="wb-cover__icon">{{< ws-icon name="growth" >}}</span>
<div class="cs-stat__num" style="font-size:1.9rem;margin:.2rem 0 .1rem">5× cheaper GPU</div>
<div class="cs-stat__label" style="margin-bottom:1rem">~11,000 active users moved with no downtime</div>
<p class="wb-cover__text"><strong>A European academic-computing platform</strong> moved off a public hyperscaler onto owned bare metal, with fractional GPU sharing across jobs and a single Cluster API spanning bare metal, a hyperscaler and a sovereign Swiss cloud — bursting to rented GPUs only when demand spikes.</p>
</article>
<article class="wb-cover__item">
<span class="wb-cover__num">02</span>
<span class="wb-cover__icon">{{< ws-icon name="shield" >}}</span>
<div class="cs-stat__num" style="font-size:1.9rem;margin:.2rem 0 .1rem">GPU in the catalog</div>
<div class="cs-stat__label" style="margin-bottom:1rem">Switzerland · sold under the provider's own brand</div>
<p class="wb-cover__text"><strong>A Swiss cloud provider</strong> sells GPU beside virtual machines, managed Kubernetes and databases from one platform — whole-card and shared, metered and billed with its own panel. Its own engineers became Cozystack maintainers.</p>
</article>
</div>

<p class="wb-cover__note"><span class="wb-cover__note-ic">{{< ws-icon name="chat" >}}</span><span>Both are anonymised at the customer's request. Andrei walks through what each of them actually did with GPUs — and what he would do differently on your stack.</span></p>
</div>
</section>

<section class="ws-section wb-cover" id="agenda" aria-labelledby="wb-cover-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-cover-h">What we'll cover</h2>
<p class="ws-lead">Live demos, not slides — then your questions.</p>
<ol class="wb-cover__grid">
<li class="wb-cover__item">
<span class="wb-cover__num">01</span>
<span class="wb-cover__icon">{{< ws-icon name="server" >}}</span>
<p class="wb-cover__text"><strong>From bare metal to a GPU-ready tenant.</strong> A node with GPUs joins the cluster, drivers roll out, and a team gets its own cluster — not a namespace — with the cards visible inside.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">02</span>
<span class="wb-cover__icon">{{< ws-icon name="layers" >}}</span>
<p class="wb-cover__text"><strong>Four ways to allocate a GPU.</strong> One whole card (passthrough) or three ways to share it — vGPU, MIG and fractional (HAMi) — side by side, with the utilization graph that turns idle silicon into money.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">03</span>
<span class="wb-cover__icon">{{< ws-icon name="rocket" >}}</span>
<p class="wb-cover__text"><strong>From a model to an endpoint.</strong> vLLM in a tenant, then NVIDIA Dynamo — disaggregated prefill/decode and KV-cache-aware routing — with before/after latency under concurrent load on the same hardware.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">04</span>
<span class="wb-cover__icon">{{< ws-icon name="stack" >}}</span>
<p class="wb-cover__text"><strong>Three doors to one API.</strong> Order a GPU cluster from a UI, from the CLI, or with a Git commit — the same resource every time, no portal on top of a portal.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">05</span>
<span class="wb-cover__icon">{{< ws-icon name="billing" >}}</span>
<p class="wb-cover__text"><strong>Two meters on one cluster.</strong> GPU-hours for renting capacity, and input/output tokens for selling inference — the moment internal infrastructure becomes a product, with a 429 when a budget runs out.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">06</span>
<span class="wb-cover__icon">{{< ws-icon name="growth" >}}</span>
<p class="wb-cover__text"><strong>When your service isn't in the catalog.</strong> Package it once and deploy it with a button — plus where queues (Kueue, Volcano, KAI) fit for distributed training.</p>
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
<span class="ws-outcome__icon">{{< ws-icon name="layers" >}}</span>
<p class="ws-outcome__text"><strong>A layer-by-layer map of a GPU platform</strong> — and the open-source project that fills each one.</p>
</article>
<article class="ws-outcome">
<span class="ws-outcome__num">02</span>
<span class="ws-outcome__icon">{{< ws-icon name="map" >}}</span>
<p class="ws-outcome__text"><strong>A one-page decision matrix</strong> for sharing GPUs: passthrough vs vGPU vs MIG vs fractional, and when each wins.</p>
</article>
<article class="ws-outcome">
<span class="ws-outcome__num">03</span>
<span class="ws-outcome__icon">{{< ws-icon name="billing" >}}</span>
<p class="ws-outcome__text"><strong>A clear-eyed view of metering</strong> — per GPU-hour and per token — and where the honest limits are.</p>
</article>
<article class="ws-outcome ws-outcome--hero">
<span class="ws-outcome__num">04</span>
<span class="ws-outcome__icon">{{< ws-icon name="plan" >}}</span>
<p class="ws-outcome__text"><strong>A reference runbook</strong> for the whole path, so your team can reproduce it on your own cluster.</p>
</article>
</div>
<div class="ws-cta-center"><a class="cta-primary cta-accent" href="#register">Save my seat</a></div>
</div>
</section>

<section class="ws-section wb-audience" aria-labelledby="wb-audience-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-audience-h">Who should attend</h2>
<p class="ws-lead">Enterprise teams handed a pile of GPUs and told to make them useful, and cloud, telecom and GPU providers building a sovereign AI offering. If you're weighing an open-source build against Run:ai, OpenShift AI, or simply renting from a hyperscaler, the session is built around your situation.</p>
<ul class="wb-audience__tiles">
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="server" >}}</span>Platform &amp; infrastructure teams</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="cloud" >}}</span>Cloud &amp; GPU providers</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="datacenter" >}}</span>Data centre operators</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="telecom" >}}</span>Telecom companies</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="lab" >}}</span>AI &amp; research platforms</li>
</ul>
<p class="wb-audience__roles-label">Especially the people who own the GPUs and the decision:</p>
<ul class="wb-audience__roles">
<li>Platform engineers</li>
<li>Architects</li>
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
<div class="ws-speaker__role">Creator of Cozystack · Founder of Aenix</div>
<p class="ws-speaker__bio">Andrei created Cozystack, the open-source cloud platform and CNCF Sandbox project, after more than fifteen years of building clouds and high-load infrastructure. He contributes to Kubernetes, KubeVirt, Cilium and LINSTOR, and speaks at KubeCon and other industry events. At Aenix, he helps teams turn their GPUs and hardware into commercial cloud services.</p>
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
<p class="ws-register__lead">Thursday 10 September 2026 · 16:00 CEST (14:00 UTC) · online. Attendance is free — with registration: you get the calendar invite and the recording.</p>
<div class="ws-register__form">

{{< clickmeeting room="18263597110070205" >}}

</div>
</div>
</section>
