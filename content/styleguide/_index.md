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

`.capability-grid-3x3` — with an icon chip matching each card's meaning (`<span class="card-ico">` line inserted above the bold lead; text lines untouched).

<div class="capability-grid-3x3">

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></span>
**Capability one**
What it does, in a sentence.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></span>
**Capability two**
What it does, in a sentence.

<span class="card-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
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

