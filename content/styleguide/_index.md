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

`.trust-badges`

<div class="trust-badges">
CNCF Project · Apache 2.0 · Sample credential · Another credential
</div>

---

## Block 2 — Bold-lead card grid

`.grid-2x2` / `.gap-cards-2` / `.cta-cards` — paragraphs with a bold lead become cards.

<div class="grid-2x2">

**First card lead**
Supporting sentence that explains the point in one or two lines.

**Second card lead**
Supporting sentence that explains the point in one or two lines.

**Third card lead**
Supporting sentence that explains the point in one or two lines.

**Fourth card lead**
Supporting sentence that explains the point in one or two lines.

</div>

---

## Block 3 — Capability grid (3-up)

`.capability-grid-3x3`

<div class="capability-grid-3x3">

**Capability one**
What it does, in a sentence.

**Capability two**
What it does, in a sentence.

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

Anchored heading id (`#quick-facts` pattern) + strong-led list renders as a divided panel.

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

`.lead-magnet-form` — framed panel for download forms.

<div class="lead-magnet-form">

Sample form area — the Pipedrive embed renders here on real pages.

</div>

---

*Bands (alternating section backgrounds), the framed closing CTA, the edition tab selector, and the process strip are homepage/template-level components — see the homepage for live references. FAQ and Quick-facts GEO panels render automatically on landing types from frontmatter.*
