---
title: "Styleguide — approved content blocks"
description: "Internal component showcase for the aenix.io redesign. Not linked, not indexed."
language: "en"
page_type: "flag-page"
robots: "noindex, nofollow"
hide_closing_cta: true
build:
  list: never
---

**Internal page.** Every approved semantic block, numbered. Reference blocks by number when requesting batch page work (e.g. "apply blocks 3 + 7 to all services landings"). Sample copy below is illustrative only.

---

## Block 1 — Trust badge strip

`.trust-badges` — keep the plain `·`-separated line in markdown (SEO text untouched); JS splits it into one pill per credential with a matching icon. Without JS it renders as a quiet centered line.

<div class="trust-badges">
CNCF Project · Apache 2.0 · OpenSSF Best Practices · GDPR Compliant · Kubernetes Certified Distribution
</div>

---

## Block 2 — Bold-lead card grid

`.bold-grid` — one lead card plus three supporting cards with icon chips; not uniform by design. Three arrangements, chosen by what the section says. (Legacy equal grid `.grid-2x2` stays on pages until reassigned.)

**Variant A — full-width lead on top, heading/body split, three below:**

<div class="bold-grid bold-grid--hero">
<div class="bold-card bold-card--lead">
<span class="chip-label">Core platform</span>
<div class="bold-split">
<h3>Infrastructure that scales with your ambition.</h3>
<div>
<p>Elastic compute, global routing, and zero-trust security — unified under a single control plane built for teams that cannot afford downtime.</p>
<div class="bold-card__actions"><a class="cta-primary" href="#">Start building →</a><a class="cta-secondary" href="#">View docs</a></div>
</div>
</div>
</div>
<div class="bold-grid__row">
<div class="bold-card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></span><h3>Real-time observability</h3><p>Full-stack metrics, logs, and traces with sub-second latency across all services.</p><a href="#">Learn more →</a></div>
<div class="bold-card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><h3>Zero-trust security</h3><p>Identity-aware access, continuous verification, encrypted at every network layer.</p><a href="#">Learn more →</a></div>
<div class="bold-card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></span><h3>Automated compliance</h3><p>Continuous policy enforcement across SOC 2, ISO 27001, and GDPR controls.</p><a href="#">Learn more →</a></div>
</div>
</div>

**Variant B — lead card left, three compact cards stacked right:**

<div class="bold-grid bold-grid--side">
<div class="bold-card bold-card--lead">
<span class="chip-label">Core platform</span>
<h3>Infrastructure that scales with your ambition.</h3>
<p>Elastic compute, global routing, and zero-trust security — unified under a single control plane built for teams that cannot afford downtime.</p>
<div class="bold-card__actions"><a class="cta-primary" href="#">Start building →</a><a class="cta-secondary" href="#">View docs</a></div>
</div>
<div class="bold-card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></span><h3>Real-time observability</h3><p>Full-stack metrics, logs, and traces with sub-second latency across all services.</p></div>
<div class="bold-card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><h3>Zero-trust security</h3><p>Identity-aware access, continuous verification, encrypted at every network layer.</p></div>
<div class="bold-card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></span><h3>Automated compliance</h3><p>Continuous policy enforcement across SOC 2, ISO 27001, and GDPR controls.</p></div>
</div>

**Variant C — Z-pattern with a stat panel top-right and a duo card below:**

<div class="bold-grid bold-grid--z">
<div class="bold-card bold-card--lead">
<span class="chip-label">Core platform</span>
<h3>Infrastructure that scales with your ambition.</h3>
<p>Elastic compute, global routing, and zero-trust security — unified under a single control plane built for teams that cannot afford downtime.</p>
<div class="bold-card__actions"><a class="cta-primary" href="#">Start building →</a><a class="cta-secondary" href="#">View docs</a></div>
</div>
<div class="bold-stats">
<div><span class="bold-stat__value">99.99%</span><span class="bold-stat__label">Uptime SLA — guaranteed by contract</span></div>
<div><span class="bold-stat__value">23</span><span class="bold-stat__label">Global regions, 140+ PoPs</span></div>
</div>
<div class="bold-grid__bottom">
<div class="bold-card"><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></span><h3>Real-time observability</h3><p>Full-stack metrics, logs, and traces with sub-second latency across all services.</p></div>
<div class="bold-card bold-card--duo">
<div><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><h3>Zero-trust security</h3><p>Identity-aware access, continuous verification, encrypted at every network layer.</p></div>
<div><span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg></span><h3>Automated compliance</h3><p>Continuous policy enforcement across SOC 2, ISO 27001, and GDPR controls.</p></div>
</div>
</div>
</div>

---

## Block 3 — Capability grid (3-up)

`.capability-grid-3x3` — with an icon chip matching each card's meaning (`<span class="card-ico">` line inserted above the bold lead; text lines untouched). Optional: pin an uppercase category label top-right with `<span class="cap-cat">` (mono, muted) — the `.card-ico` stays top-left.

<div class="capability-grid-3x3">

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span><span class="cap-cat">Compute</span>
**Capability one**
What it does, in a sentence.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span><span class="cap-cat">Network</span>
**Capability two**
What it does, in a sentence.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span><span class="cap-cat">Security</span>
**Capability three**
What it does, in a sentence.

</div>

---

## Block 4 — Pricing cards (paired heading + body)

`.pricing-cards-2` — flat `### heading` + paragraph pairs become equal-height cards; the last bold line pins to the bottom as the price.

<div class="pricing-cards-2">

### Option A (focused)
What this tier covers, in one or two sentences.
**€X,XXX**

### Option B (full)
What this tier covers, in one or two sentences, slightly longer to show equal heights.
**€XX,XXX**

</div>

---

## Block 5 — Fit grid (lead + list, two columns)

`.fit-grid`

<div class="fit-grid">

**Strong fit — most of these apply:**

- You run your own infrastructure
- You have platform engineers on staff
- Compliance is a board-level topic

**Weaker fit — talk to us first:**

- Everything already lives in one hyperscaler
- No in-house operations team

</div>

**Variant B — editorial (`.who-for--editorial`): full-width heading, hairline, long copy left, compact lists right:**

<div class="who-for who-for--editorial">
<p class="who-for__label">Who it&rsquo;s for</p>
<h3>Built for teams that cannot compromise on reliability.</h3>
<div class="who-for__rule"></div>
<div class="who-for__body">
<div class="who-for__copy">
<p>Architected for organizations where infrastructure downtime translates directly to revenue loss, regulatory risk, or reputational damage.</p>
<p>Whether you run financial services, healthcare systems, or critical SaaS — built for contexts where reliability is a first-class requirement, not a bonus feature.</p>
</div>
<div class="who-for__fit">
<ul>
<li>Financial services and fintech</li>
<li>Healthcare and life sciences</li>
<li>Government and public sector</li>
</ul>
<ul class="who-for__not">
<li>Personal hobby projects</li>
<li>Ad-hoc scripts and experiments</li>
</ul>
</div>
</div>
</div>

---

## Block 6 — Horizontal timeline

`.timeline-horizontal` — bold-led steps in a row.

<div class="timeline-horizontal">

**Day 0 — Kickoff**
Scope confirmed, access granted.

**Days 1–9 — Analysis**
Parallel workstream review.

**Day 10 — Readout**
Written report and executive session.

</div>

---

## Block 7 — Fact panel (label: value rows)

Anchored heading id (`#quick-facts` pattern) + strong-led list renders as a divided panel. Approved — but where the page allows, prefer the V_2 rows treatment (Block 16).

## Quick facts

- **Founded:** Sample value
- **License:** Apache 2.0
- **Scale:** From X to Y

---

## Block 8 — Factoid callout

`{{</* factoid */>}}` shortcode.

{{< factoid number="92%" label="of sample metrics fit in one line" source="Styleguide" >}}

---

## Block 9 — Pull quote

{{< quote author="Jane Sample" role="CTO, Example Corp" >}}
A short quotation that demonstrates the pull-quote treatment.
{{< /quote >}}

---

## Block 10 — Client logo strip

`{{</* clients */>}}` — the seven approved production customers.

{{< clients >}}

---

## Block 11 — Comparison table

Standard markdown table (scrolls inside its own box on mobile).

| Column A | Column B |
|---|---|
| Open-source foundation | Commercial productization |
| Community support | Enterprise SLA |

---

## Block 12 — Blockquote

> A standard quote panel with the quiet frame treatment.
>
> <em>— Attribution line</em>

---

## Block 13 — Spoiler / collapsible

{{< spoiler title="What is a collapsible block?" kind="term" >}}
Hidden-by-default detail that expands on click.
{{< /spoiler >}}

---

## Block 14 — Lead magnet panel

`.lead-magnet-split` — label, heading, and supporting line left; primary button and a quiet text link right. On download pages the Pipedrive embed keeps the same frame via `.lead-magnet-form`.

<div class="lead-magnet-split">
<div>
<p class="lead-magnet-split__label">Get started today</p>
<h3>Ready to run on infrastructure that won&rsquo;t let you down?</h3>
<p>Talk to a solutions engineer and get a custom architecture review — free, no commitment.</p>
</div>
<div class="lead-magnet-split__actions">
<a class="cta-primary" href="#">Book a demo →</a>
<a class="hero-text-link" href="#">Read the architecture docs →</a>
</div>
</div>

---

*Bands (alternating section backgrounds), the framed closing CTA, the edition tab selector, and the process strip are homepage/template-level components — see the homepage for live references. FAQ and Quick-facts GEO panels render automatically on landing types from frontmatter.*

---

# Direction V_2 + V_3 (Figma «КЛОД»)

Composition from the Figma component library; typography, colors, and buttons are ours. Sample copy only.

---

## Block 15 — Vertical timeline (V_2)

`.timeline-vertical` — same content shape as the horizontal one (bold-led paragraphs).

<div class="timeline-vertical">

**Provision in minutes**
Create your organization, configure billing, and spin up the first cluster from a single dashboard.

**Automated setup**
Networking, security groups, and observability pipelines based on your declared profile.

**Scale without friction**
From ten to ten thousand instances with the same SLA and security posture.

</div>

---

## Block 16 — Facts: V_2 rows

`.facts-rows` — uppercase label left, bold value right.

<ul class="facts-rows">
<li><strong>Global regions</strong> <span>23</span></li>
<li><strong>Uptime SLA</strong> <span>99.99%</span></li>
<li><strong>Compliance</strong> <span>SOC 2, ISO 27001, HIPAA</span></li>
<li><strong>Data residency</strong> <span>EU, US, APAC, sovereign</span></li>
</ul>

**Variant `--def`** — what the GEO quick-facts partial emits with `quick_facts_style: rows`; long values sit left-aligned in a definition-style grid:

<ul class="facts-rows facts-rows--def">
<li><strong>What it is</strong> <span>A structured engagement that moves selected workloads from public cloud to private cloud, hybrid, or on-prem.</span></li>
<li><strong>License</strong> <span>Apache 2.0 (no per-CPU / per-core licensing)</span></li>
<li><strong>Engagement</strong> <span>14-day or 28-day, fixed-price, single invoice</span></li>
</ul>

---

## Block 17 — Facts: V_3 stat grid

`.facts-grid` — values read first, labels caption them.

<div class="facts-grid">
<div><span class="facts-grid__value">23</span><span class="facts-grid__label">Global regions</span></div>
<div><span class="facts-grid__value">140+</span><span class="facts-grid__label">Points of presence</span></div>
<div><span class="facts-grid__value">99.99%</span><span class="facts-grid__label">Uptime SLA</span></div>
<div><span class="facts-grid__value">99.999999999%</span><span class="facts-grid__label">Data durability</span></div>
<div><span class="facts-grid__value">&lt; 15 min</span><span class="facts-grid__label">Support response</span></div>
<div><span class="facts-grid__value">SOC2 · ISO · HIPAA</span><span class="facts-grid__label">Compliance certs</span></div>
</div>

---

## Block 18 — Facts: V_3 product passport

`.facts-passport` — identity header with a chip, then two-column spec rows.

<div class="facts-passport">
<div class="facts-passport__head">
<span class="facts-passport__title">Sample Platform</span>
<span class="facts-passport__meta">Enterprise edition · v4.2</span>
<span class="facts-passport__chip">Certified</span>
</div>
<div class="facts-passport__rows">
<div><span>Global regions</span><span>23</span></div>
<div><span>Data durability</span><span>99.999999999%</span></div>
<div><span>Points of presence</span><span>140+</span></div>
<div><span>Support response</span><span>&lt; 15 min</span></div>
<div><span>Uptime SLA</span><span>99.99%</span></div>
<div><span>Compliance</span><span>SOC2 · ISO · HIPAA</span></div>
</div>
</div>

---

## Block 19 — Facts: V_3 spec sheet

`.facts-spec` — grouped by category, no outer frame.

<div class="facts-spec">
<p class="facts-spec__cat">Infrastructure</p>
<div class="facts-spec__row"><span>Global regions</span><span>23</span></div>
<div class="facts-spec__row"><span>Points of presence</span><span>140+</span></div>
<p class="facts-spec__cat">Reliability &amp; SLA</p>
<div class="facts-spec__row"><span>Uptime SLA</span><span>99.99%</span></div>
<div class="facts-spec__row"><span>Data durability</span><span>99.999999999%</span></div>
<p class="facts-spec__cat">Security &amp; compliance</p>
<div class="facts-spec__row"><span>Support response</span><span>&lt; 15 min</span></div>
<div class="facts-spec__row"><span>Compliance certs</span><span>SOC2 · ISO · HIPAA</span></div>
</div>

---

## Block 20 — Fact callout, V_2 hero number

`.factoid--hero` modifier on the factoid shortcode output.

<div class="factoid factoid--hero">
<div class="factoid__number">99.99%</div>
<div class="factoid__label">Uptime SLA — guaranteed by contract, not marketing copy</div>
</div>

---

## Block 21 — Pull quote, V_2 editorial

`.pull-quote--editorial` modifier.

<div class="pull-quote pull-quote--editorial">
<p class="pull-quote__body">Sample provisioning time went from three weeks to forty minutes. That is what happens when you build the right abstractions.</p>
<span class="pull-quote__attribution">
<span class="pull-quote__author">Jane Sample</span>
<span class="pull-quote__role">VP of Engineering, Example Corp</span>
</span>
</div>

---

## Block 22 — Who it&rsquo;s for (V_2)

`.who-for` — heading and intro left, fit lists right.

<div class="who-for">
<div class="who-for__copy">
<h3>Built for teams that cannot compromise on reliability.</h3>
<p>Architected for organizations where infrastructure downtime translates directly to revenue loss, regulatory risk, or reputational damage.</p>
</div>
<div class="who-for__fit">
<p class="who-for__label">Best fit for</p>
<ul>
<li>Financial services and fintech</li>
<li>Healthcare and life sciences</li>
<li>Government and public sector</li>
</ul>
<p class="who-for__label">Not designed for</p>
<ul class="who-for__not">
<li>Personal hobby projects</li>
<li>Ad-hoc scripts and experiments</li>
</ul>
</div>
</div>

---

## Block 23 — FAQ, V_2 open rows

`.faq-rows` wrapper around the standard FAQ items.

<div class="faq-rows">
<details class="faq-item"><summary><h3>How does compliance work across jurisdictions?</h3></summary><div class="faq-answer">A unified framework maps controls across standards; residency policies are enforced at the platform level.</div></details>
<details class="faq-item"><summary><h3>What is the migration path?</h3></summary><div class="faq-answer">Cohort-based migration with automated image conversion.</div></details>
<details class="faq-item"><summary><h3>Can it run air-gapped?</h3></summary><div class="faq-answer">Yes, with a documented offline install workflow.</div></details>
</div>

---

## Block 24 — Comparison: V_3 split cards

`.compare-cards` — no table, each card tells its own story.

<div class="compare-cards">
<div class="compare-cards__pro">
<h3>The complete platform.</h3>
<ul>
<li>23 regions, 140+ points of presence</li>
<li>99.99% uptime SLA, all infrastructure</li>
<li>Single control plane, one API</li>
</ul>
<a class="cta-primary" href="#">Get started →</a>
</div>
<div class="compare-cards__con">
<h3>Scattered tooling.</h3>
<ul>
<li>Coverage varies by region and service</li>
<li>SLAs often 99.9% with exclusions</li>
<li>Requires integrating multiple tools</li>
</ul>
</div>
</div>

---

## Block 25 — Comparison: elevated column (V_3)

`.compare-elevated` wrapper on a markdown table — the second column is persistently elevated.

<div class="compare-elevated">

| Feature | Sample | Vendor A | Vendor B |
|---|---|---|---|
| Global regions | 23 | 33 | 60+ |
| Uptime SLA | 99.99% | 99.99% | 99.9% |
| Dedicated support | Included | Paid add-on | Paid add-on |
| Transparent pricing | Yes | No | No |

</div>

**Variant `--col3`** — when the highlighted product sits in the third column:

<div class="compare-elevated compare-elevated--col3">

| Feature | Other | Sample | 
|---|---|---|
| License | Free | Commercial |
| SLA | Community | Enterprise tiers |

</div>

---

## Block 26 — Lead magnet, V_2 split + pricing tiers

`.lead-magnet-split` and `.pricing-tiers` (our buttons).

<div class="lead-magnet-split">
<div>
<p class="lead-magnet-split__label">Get started today</p>
<h3>Ready to run on infrastructure that won&rsquo;t let you down?</h3>
<p>Talk to a solutions engineer and get a custom architecture review — free, no commitment.</p>
</div>
<div class="lead-magnet-split__actions">
<a class="cta-primary" href="#">Book a demo →</a>
<a class="hero-text-link" href="#">Read the architecture docs →</a>
</div>
</div>

<div class="pricing-tiers">
<div class="pricing-tier">
<div class="pricing-tier__price">$299 <small>/mo</small></div>
<p class="pricing-tier__desc">For teams beginning their journey.</p>
<ul>
<li>Up to 10 compute instances</li>
<li>Standard support (48h SLA)</li>
</ul>
<a class="cta-secondary" href="#">Get started</a>
</div>
<div class="pricing-tier pricing-tier--featured">
<div class="pricing-tier__price">$899 <small>/mo</small></div>
<p class="pricing-tier__desc">For scaling production workloads.</p>
<ul>
<li>Up to 50 compute instances</li>
<li>Priority support (4h SLA)</li>
<li>Full observability stack</li>
</ul>
<a class="cta-primary" href="#">Start free trial</a>
</div>
<div class="pricing-tier">
<div class="pricing-tier__price">Custom</div>
<p class="pricing-tier__desc">For mission-critical requirements.</p>
<ul>
<li>Unlimited compute</li>
<li>Dedicated support engineer</li>
</ul>
<a class="cta-secondary" href="#">Contact sales</a>
</div>
</div>

---

## Block 27 — platform cards

`.edition-cards` — h3-led product sections wrapped into cards (insert-only wrappers); the first card is the flagship and spans the full row.

<div class="edition-cards">
<div class="edition-card">
<h3>Sample Flagship platform</h3>
<p>For large operators, banks running their own cloud, and national telcos.</p>
<p>Multi-hypervisor control plane with users, projects, quotas, and multi-region support.</p>
<p><strong>Engagement size:</strong> Multi-year programs.</p>
<a href="#">Flagship platform details →</a>
</div>
<div class="edition-card">
<h3>Sample Second platform</h3>
<p>For hosting providers, MSPs, and regional clouds.</p>
<p>Modern alternative to legacy stacks with billing and migration tooling.</p>
<p><strong>Engagement size:</strong> Entry from a monthly support tier.</p>
<a href="#">Second platform details →</a>
</div>
<div class="edition-card">
<h3>Sample Third platform</h3>
<p>For regulated enterprises facing compliance pressure.</p>
<p>Private and hybrid sovereign cloud with multi-DC setups.</p>
<p><strong>Engagement size:</strong> Multi-year platform builds.</p>
<a href="#">Third platform details →</a>
</div>
</div>

---

## Block 28 — Answer split (direct answer + illustration)

`direct_answer_image` frontmatter switch — the GEO direct answer stays within ~8 of 12 grid columns; an on-topic image fills the free space. Text remains first in the DOM.

<div class="seo-direct-answer answer-split">
<div class="answer-split__text">
<strong>Sample platform is a turnkey cloud-in-a-box. It packages an open-source engine and adds the commercial layer an operator needs: portals, billing, payments, and enterprise support — offered in editions matching distinct buyer profiles.</strong>
</div>
<figure class="answer-split__media">
<img src="/images/cozystack-screenshot.png" alt="Sample platform console" loading="lazy">
</figure>
</div>


---

# New content & long-text blocks (Figma «Финал, все блоки»)

Long-text and documentation-page patterns from the final Figma frame. Composition is from Figma; typography, colors, and buttons are ours. Sample copy is fictional.

---

## Block 29 — Long-form editorial

`.longform` — the canonical long-SEO-text treatment: eyebrow, big title, a lead paragraph that stays visible, and the remainder collapsed behind a native `<details>` "Read more". `.longform__lead` is bright; body paragraphs inside `<details>` are muted. Max-width 720px.

<div class="longform">
<span class="kicker">What is elastic cloud compute</span>
<h3 class="longform__title">On-demand compute capacity that scales with your workload — automatically.</h3>
<p class="longform__lead">Elastic cloud compute refers to the ability to provision, scale, and deprovision virtual computing resources in response to real-time demand. Unlike fixed-capacity infrastructure, elastic compute removes the need to predict peak load in advance — your platform scales up during traffic spikes and scales down automatically when demand subsides, so you pay only for what you use.</p>
<details class="longform__more">
<summary>Read more</summary>
<p>On the Ænix platform, elastic compute is built on a multi-region, bare-metal substrate that provides consistent performance guarantees regardless of workload type. Compute instances are provisioned in under 90 seconds, with workload-aware scheduling that optimizes placement across availability zones to maximize fault tolerance and minimize latency.</p>
<p>Auto-scaling policies can target any platform metric — CPU, memory, request rate, queue depth, or custom telemetry signals — and capacity is billed per second with no minimum commitment.</p>
</details>
</div>

---

## Block 30 — Editorial split

`.editorial-split` — text left (kicker, heading, one bright + one muted paragraph, `.cta-row`), media right (framed `<img>` or a diagram card). Collapses to one column below 860px with the media below the text.

<div class="editorial-split">
<div class="editorial-split__text">
<span class="kicker">How it works</span>
<h3>Every request flows through a unified platform layer.</h3>
<p>Ænix routes all traffic through a global edge network before it reaches your application layer. Security checks, authentication, rate limiting, and routing happen at the edge — before a single packet reaches your compute resources.</p>
<p>The control plane manages all components — compute, network, security, and storage — through a single API surface. No separate consoles, no patchwork of third-party tools.</p>
<div class="cta-row"><a class="cta-primary" href="#">View architecture →</a><a class="cta-secondary" href="#">Read the docs</a></div>
</div>
<div class="editorial-split__media">
<div class="diagram">
<div class="diagram__node"><b>Your Application</b><div class="diagram__chips"><span>Web</span><span>Mobile</span><span>API Clients</span></div></div>
<div class="diagram__conn">HTTPS / gRPC</div>
<div class="diagram__node diagram__node--brand"><b>Ænix Edge Network · 140+ PoPs</b><div class="diagram__chips"><span>DDoS Protection</span><span>TLS Termination</span><span>Rate Limiting</span></div></div>
<div class="diagram__row"><div class="diagram__node"><b>Compute</b><div class="diagram__chips"><span>Auto-scale</span></div></div><div class="diagram__node"><b>Security</b><div class="diagram__chips"><span>Zero-Trust</span></div></div><div class="diagram__node"><b>Observ.</b><div class="diagram__chips"><span>OTel</span></div></div></div>
<div class="diagram__node"><b>Distributed Data Layer</b><div class="diagram__chips"><span>Object Store</span><span>Relational</span><span>Time-series</span></div></div>
</div>
</div>
</div>

---

## Block 31 — Architecture section

`.arch-section` — heading + lead (prose width), then a full-track `.arch-section__fig` figure card holding a diagram (or SVG/`<img>`), then `.arch-section__notes` (three notes with optional icon, bold title, muted description). Notes stack to one column below 700px.

<div class="arch-section">
<span class="kicker">Platform architecture</span>
<h3>One platform. Every layer. Zero stitching.</h3>
<p class="arch-section__lead">Ænix was designed as a vertically integrated infrastructure stack — not a collection of loosely coupled services. Every layer from edge to storage was built to interoperate natively.</p>
<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__row"><div class="diagram__node"><b>Web Applications</b></div><div class="diagram__node"><b>Mobile Clients</b></div><div class="diagram__node"><b>API Integrations</b></div></div>
<div class="diagram__conn">All traffic</div>
<div class="diagram__node diagram__node--brand"><b>Global Edge Network</b><div class="diagram__chips"><span>140+ PoPs</span><span>DDoS Protection</span><span>TLS Termination</span><span>Rate Limiting</span><span>Geo Routing</span></div></div>
<div class="diagram__node"><b>Core Platform</b><div class="diagram__chips"><span>Compute · Auto-scale</span><span>Security · Zero-Trust</span><span>Observability · OTel</span><span>Platform · IaC</span></div></div>
<div class="diagram__row"><div class="diagram__node"><b>Object Storage · 11-nines</b></div><div class="diagram__node"><b>Relational DB · HA</b></div><div class="diagram__node"><b>Time-series · TSDB</b></div></div>
</div>
</div>
<div class="arch-section__notes">
<div class="arch-section__note"><h4><span class="card-ico-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>Global by default</h4><p>All regions share the same architecture and SLA. No degraded tiers.</p></div>
<div class="arch-section__note"><h4><span class="card-ico-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>Security-first</h4><p>Zero-trust controls are applied at every layer, not bolted on after.</p></div>
<div class="arch-section__note"><h4><span class="card-ico-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></span>Observable end-to-end</h4><p>Every request is traceable from edge to data layer without agents.</p></div>
</div>
</div>

---

## Block 32 — Screenshot in a browser frame

`.browser-frame` — the approved way to show product UI: a real console screenshot inside a browser chrome (dots + URL) with a centered caption. Usable directly in `.page-content` or wrapped in `.screenshot-section` for the intro + caption.

<div class="screenshot-section">
<div class="block-intro">
<span class="kicker">Ænix console</span>
<h3>One dashboard for your entire infrastructure footprint.</h3>
<p>The Ænix console provides real-time visibility into compute, networking, security, and cost — without switching between multiple tools or cloud providers.</p>
</div>
<div class="browser-frame">
<div class="browser-frame__bar"><span class="browser-frame__dots"><span></span><span></span><span></span></span><span class="browser-frame__url">console.aenix.io / marketplace</span></div>
<img src="/images/cozystack-screenshot.png" alt="Aenix Console — service marketplace">
</div>
<p class="screenshot-section__caption">Ænix Console · Service marketplace · Production environment</p>
</div>

---

## Block 33 — Documentation highlight

`.doc-highlight` — a quick-start panel: brand kicker + title left, a `.doc-highlight__badge` pill right, numbered `.doc-highlight__step` rows each with a fenced code block (rendered via chroma), and a bottom `.doc-highlight__note` callout with inline `<code>` chips.

<div class="doc-highlight">
<div class="doc-highlight__head">
<div>
<span class="kicker kicker--brand">Quick start</span>
<h3>Deploy your first cluster</h3>
</div>
<span class="doc-highlight__badge">5 min</span>
</div>

<div class="doc-highlight__step">
<div class="doc-highlight__num">1</div>
<div>
<p class="doc-highlight__step-title">Initialize your project</p>

```console
$ aenix init --name my-cluster --region us-east-1
✓ Project initialized
✓ Config written to aenix.yaml
```

</div>
</div>

<div class="doc-highlight__step">
<div class="doc-highlight__num">2</div>
<div>
<p class="doc-highlight__step-title">Configure your cluster</p>

```yaml
# aenix.yaml
cluster:
  name: my-cluster
  region: us-east-1
  nodes:
    min: 2
    max: 20
    type: c4.xlarge
  compliance: soc2
```

</div>
</div>

<div class="doc-highlight__step">
<div class="doc-highlight__num">3</div>
<div>
<p class="doc-highlight__step-title">Review and deploy</p>

```console
$ aenix cluster deploy --env production
✓ Validating configuration...
✓ Policy check passed
✓ Deploying to us-east-1...
Cluster ready in 84 seconds.
```

</div>
</div>

<div class="doc-highlight__note">
<span class="doc-highlight__note-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
<div>
<strong>IAM permissions required</strong>
<p>The deploying user must have the <code>cluster:create</code> and <code>iam:passRole</code> permissions in their Ænix organization policy.</p>
</div>
</div>
</div>

---

## Block 34 — Resource cards

`.resource-cards` — auto-fit grid of `.resource-card`; each has a category kicker + small icon top row, an h3, a muted description, and a bottom-pinned "Read more →" link.

<div class="resource-cards">
<div class="resource-card">
<div class="resource-card__top"><span class="kicker">Architecture guide</span><span class="card-ico-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></span></div>
<h3>Ænix Platform Architecture</h3>
<p>A technical deep-dive into the platform layers, data flows, and availability model.</p>
<a class="resource-card__link" href="#">Read more →</a>
</div>
<div class="resource-card">
<div class="resource-card__top"><span class="kicker">Migration guide</span><span class="card-ico-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span></div>
<h3>Migrating from AWS to Ænix</h3>
<p>Step-by-step guidance for moving production workloads with zero downtime.</p>
<a class="resource-card__link" href="#">Read more →</a>
</div>
<div class="resource-card">
<div class="resource-card__top"><span class="kicker">Whitepaper</span><span class="card-ico-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span></div>
<h3>Zero-Trust Security on Ænix</h3>
<p>How Ænix implements identity-based access across compute, network, and storage layers.</p>
<a class="resource-card__link" href="#">Read more →</a>
</div>
<div class="resource-card">
<div class="resource-card__top"><span class="kicker">Video</span><span class="card-ico-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg></span></div>
<h3>Getting Started in 15 Minutes</h3>
<p>A walkthrough of the Ænix Console — from signup to first deployed cluster.</p>
<a class="resource-card__link" href="#">Read more →</a>
</div>
<div class="resource-card">
<div class="resource-card__top"><span class="kicker">Checklist</span><span class="card-ico-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span></div>
<h3>Production Readiness Checklist</h3>
<p>Verify your Ænix deployment meets security, reliability, and compliance requirements.</p>
<a class="resource-card__link" href="#">Read more →</a>
</div>
<div class="resource-card">
<div class="resource-card__top"><span class="kicker">Reference</span><span class="card-ico-sm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></span></div>
<h3>Ænix API Reference</h3>
<p>Complete reference documentation for the Ænix REST and gRPC APIs.</p>
<a class="resource-card__link" href="#">Read more →</a>
</div>
</div>

---

## Block 35 — Checklist

`.checklist` — supports an explicit `<ul class="checklist">` and Goldmark task lists. Any `- [ ]` / `- [x]` task list inside `.page-content` is auto-styled: the native disabled checkbox is hidden and our own box is drawn, checked items strike through. Manual variant: add `.is-done` to an `<li>`.

<p class="kicker">Pre-production checklist</p>

### Before you go live on Ænix

- [x] **Enable multi-region replication** Configure at least two regions for all production workloads to meet 99.99% SLA requirements.
- [x] **Configure IAM policies** Apply least-privilege access to all service accounts. Use Ænix policy templates as a baseline.
- [x] **Enable audit logging** Turn on platform-level audit logs and configure export to your SIEM or long-term storage bucket.
- [ ] **Set up alerting** Create alerts for SLA breach thresholds, anomalous spend, and security policy violations.
- [ ] **Review compliance posture** Run the compliance scanner and resolve any open findings before moving production traffic.
- [ ] **Test failover procedures** Simulate a regional failure using Ænix fault injection to verify your runbooks and recovery time.

**Explicit `<ul class="checklist">` variant** (manual `.is-done`):

<ul class="checklist">
<li class="is-done"><strong>Enable multi-region replication</strong><span>Configure at least two regions for all production workloads.</span></li>
<li><strong>Set up alerting</strong><span>Create alerts for SLA breach thresholds and anomalous spend.</span></li>
</ul>

---

## Block 36 — Metrics grid

`.metrics-grid` — one panel divided by vertical hairlines; each `.metric` has a big value, a label, and a mono note. Complements the single Fact Callout (Block 8 / 20). Two columns below 760px, one below 460px.

<div class="metrics-grid">
<div class="metric"><span class="metric__value">99.99%</span><span class="metric__label">Uptime SLA</span><span class="metric__note">guaranteed by contract</span></div>
<div class="metric"><span class="metric__value">23</span><span class="metric__label">Global regions</span><span class="metric__note">across 6 continents</span></div>
<div class="metric"><span class="metric__value">140+</span><span class="metric__label">Points of presence</span><span class="metric__note">sub-10ms latency</span></div>
<div class="metric"><span class="metric__value">&lt; 15min</span><span class="metric__label">Support response</span><span class="metric__note">priority tier</span></div>
</div>

---

## Block 37 — Quote with person

`.quote-person` — a framed testimonial with an avatar, distinct from the frameless pull-quote (Block 9 / 21). No decorative quote mark.

<div class="quote-person">
<p class="quote-person__body">"We evaluated five enterprise cloud platforms over three months. Ænix was the only one where the compliance story held up under scrutiny — SOC 2, HIPAA, and ISO from a single vendor, with audit artifacts we could actually give to our legal team."</p>
<div class="quote-person__cite">
<span class="quote-person__avatar">JM</span>
<span><span class="quote-person__name">James Monroe</span><span class="quote-person__role">Chief Infrastructure Officer, Veridian Health Systems</span></span>
</div>
</div>

---

## Block 37b — Quote carousel

`{{</* quote-carousel */>}}` — rotating testimonials from a single source (`data/testimonials.yaml`). Auto-advances (~6.5s), pauses on hover/focus, disabled under `prefers-reduced-motion`; dots jump between quotes. Every quote stays in the DOM for SEO/GEO — only the active one is shown. Add one entry to the data file and it appears in this carousel on every page that uses it. Replaces the old `{{QUOTE_X}}` / placeholder-quote slots site-wide.

{{< quote-carousel >}}

---

## Block 38 — FAQ with summary

`.faq-rows` accordion (Block 23) followed by a `.faq-summary` CTA panel: bold title + muted line left, `.cta-row` actions right. Collapses to one column below 760px.

<div class="faq-rows">
<details class="faq-item"><summary><h3>How does Ænix handle compliance across multiple jurisdictions?</h3></summary><div class="faq-answer">A unified control framework maps each requirement to platform-level controls, and data-residency policies are enforced per region so workloads never leave their declared boundary.</div></details>
<details class="faq-item"><summary><h3>What is the migration path from AWS or Azure?</h3></summary><div class="faq-answer">Cohort-based migration with automated image conversion and a dual-run window, so production traffic shifts over only after parity checks pass.</div></details>
<details class="faq-item"><summary><h3>Can Ænix operate in air-gapped or private cloud environments?</h3></summary><div class="faq-answer">Yes — a documented offline install ships the full control plane into disconnected or sovereign environments with no outbound calls.</div></details>
</div>

<div class="faq-summary">
<div>
<h3 class="faq-summary__title">Still have questions?</h3>
<p>Our solutions engineers answer technical questions before you commit to anything.</p>
</div>
<div class="cta-row"><a class="cta-primary" href="#">Talk to us →</a><a class="cta-secondary" href="#">Browse docs</a></div>
</div>

---

## Block 39 — Full-bleed section band

`.band-fullbleed` (+ `--tint` / `--accent`) — a full-viewport-width colored band for inner pages. The background reaches both screen edges while inner content stays on the same 800px track as the rest of the page, so the content width never jumps. Use it to break a long page into rhythm sections instead of one flat wall.

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

**Tinted band.** The background spans the full screen width; this text stays aligned to the same column as every other block on the page. Good for separating a major section without changing the content measure.

</div>
</div>

<div class="band-fullbleed band-fullbleed--accent">
<div class="band-fullbleed__inner">

**Accent band.** A quiet brand-blue wash for the one section you most want to lift off the page.

</div>
</div>

---

## Block 40 — Answer clamp (retired)

`.answer-clamp` used to truncate long GEO answers to about seven lines behind a "Show more" toggle. It was removed from `seo/geo-intro.html` in the information-architecture pass: `direct_answer` is spec'd at 75-150 words, so the clamp fired on 157 of 164 pages and cut a median 30% off the paragraph — always the tail, which is the "how Aenix helps" sentence. Direct answers now render in full.

The `.answer-clamp` / `.answer-clamp__body` class names survive only because the stylesheet hangs paragraph margins off them. `.answer-clamp__toggle` and the `is-clampable` rules in `aenix-seo-extensions.css`, plus the clamp handler in `main.js`, are now dead code and can be deleted.

---

## Block 41 — Advantage panel

`.advantage-panel` — a strong-led markdown list joined into one quiet panel with hairline dividers between rows. Use it for a short "why us / what's the difference" list so it reads as one considered block instead of loose bullets.

<div class="advantage-panel">

- **First advantage.** One or two sentences explaining the point without overstating it.
- **Second advantage.** Another row; the hairline divider keeps them visually grouped.
- **Third advantage.** The last row drops its divider so the panel closes cleanly.

</div>

---

## Reference — Illustration Guidelines

Not a numbered block — a rule for writers and designers on which visuals belong in this system.

<div class="block-intro">
<span class="kicker">Visual content system</span>
<h3>Illustrations that explain, not decorate.</h3>
<p>Every visual element in this design system must serve a technical purpose. If removing an illustration would not reduce the reader's understanding of the content, it should not be there.</p>
</div>

<div class="illo-guide">
<div class="illo-guide__col">
<p class="illo-guide__head illo-guide__head--ok">✓ Allowed illustration types</p>
<ul class="illo-guide__list">
<li><strong>Architecture diagrams</strong><span>Platform layers, component relationships, data flows.</span></li>
<li><strong>Infrastructure diagrams</strong><span>Region topology, PoP maps, network paths.</span></li>
<li><strong>Workflow diagrams</strong><span>Deployment pipelines, CI/CD flows, approval chains.</span></li>
<li><strong>Platform layer diagrams</strong><span>Stack breakdowns, service boundaries, API surfaces.</span></li>
<li><strong>Product screenshots</strong><span>Real console UI inside a browser frame with caption.</span></li>
<li><strong>Comparison diagrams</strong><span>Side-by-side technical comparisons with labeled axes.</span></li>
<li><strong>Simple technical monochrome</strong><span>Line-only technical illustrations explaining concepts.</span></li>
</ul>
</div>
<div class="illo-guide__col">
<p class="illo-guide__head illo-guide__head--no">✕ Do not use</p>
<ul class="illo-guide__list illo-guide__list--no">
<li>AI-generated people or office workers</li>
<li>Generic business photography</li>
<li>Decorative 3D blobs or random geometry</li>
<li>Futuristic artwork with no technical meaning</li>
<li>Cartoon or illustrated characters</li>
<li>Stock photo emotion scenes</li>
</ul>
</div>
<div class="illo-guide__callout">
<span class="illo-guide__callout-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span>
<div>
<strong>When in doubt</strong>
<p>If an illustration requires an explanation of what it is — rather than what it means — replace it with a labeled architecture diagram or remove it entirely.</p>
</div>
</div>
</div>

---

## Reference — Long-form content guidelines

Not a numbered block — the rule for pacing long SEO text with visuals so pages never read as walls of text.

<div class="block-intro">
<span class="kicker">Content pacing</span>
<h3>Break long text with visuals; keep the entry light.</h3>
</div>

<ol class="rules-list">
<li>Never render more than 2–3 paragraphs without visual interruption.</li>
<li>Insert callouts, diagrams, comparison blocks, metrics, screenshots or collapsible sections between long text segments.</li>
<li>Keep the first paragraph always visible; collapse additional explanatory content when appropriate.</li>
<li>Use illustrations to explain concepts, not to decorate the page.</li>
<li>Prefer technical diagrams, architecture sketches, UI screenshots and comparison visuals over generic marketing imagery.</li>
<li>For secondary pages, diagrams should be simple, monochrome or brand-colored, and support the text rather than dominate it.</li>
</ol>

<div class="rule-required">
<span class="rule-required__ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.27"/></svg></span>
<div>
<span class="rule-required__label">Required</span>
<p>Every page longer than ~1500 px must contain at least one illustration and at least one collapsible long-form section.</p>
</div>
</div>

---

## Reference — Long-form content pattern

Not a numbered block — how a full documentation page is assembled from the blocks above. A complete page sequences **Block 29** (lead visible, remainder collapsed) then **Block 33** (quick-start callout) then **Block 31** (architecture diagram) then **Block 35** (pre-flight checklist): lead, callout, diagram, checklist. Compact live example:

<div class="longform">
<span class="kicker">Platform documentation</span>
<h3 class="longform__title">Elastic Cloud Compute on Ænix</h3>
<p class="longform__lead">Ænix elastic compute provides on-demand virtual machines, container orchestration, and bare-metal instances across 23 global regions — all managed through a unified control plane.</p>
<details class="longform__more">
<summary>Read more</summary>
<p>Unlike traditional cloud platforms that require over-provisioning to handle peak demand, Ænix elastic compute scales in response to real workload signals. Capacity is provisioned in under 90 seconds, and auto-scaling policies can target any platform metric — CPU, memory, request rate, queue depth, or custom telemetry signals.</p>
</details>
</div>

<div class="doc-highlight__note">
<span class="doc-highlight__note-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>
<div>
<strong>SLA coverage</strong>
<p>The 99.99% uptime SLA applies to all instance types, including auto-scaled nodes and spot instances provisioned through the capacity optimizer. Credits are applied automatically — no ticket required.</p>
</div>
</div>
