---
title: "Internal developer portal vs internal developer platform — and Backstage's place in 2026"
description: "This is the long-form companion to our Backstage alternative page. It clarifies the terminology, walks through where Backstage fits, and compares Backstage..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Backstage", "Kubernetes", "Platform Engineering", "Compliance", "Observability"]
language: "en"
companion_landing: "/alternatives/backstage-alternative/"
quiz:
  title: "Test yourself: portal vs platform (and Backstage)"
  questions:
    - q: "In the article's framing, what is the right minimum scale to consider Backstage?"
      options:
        - { text: "Any size", correct: false }
        - { text: "200+ engineers, 100+ services, 5+ engineers on the platform team to maintain it", correct: true }
        - { text: "50 engineers", correct: false }
      explanation: "Backstage works well at: 200+ engineers, 100+ services, platform team has 5+ engineers who can dedicate time to maintenance, plugin ecosystem matches your tooling, and customisation is a priority. Below this, operational cost overshoots value."
    - q: "When does the article say a portal becomes valuable, regardless of choice?"
      options:
        - { text: "Always — every team needs one", correct: false }
        - { text: "Service count is large (50+), team is large, cross-team service discovery is real, or compliance/audit requires service catalog", correct: true }
        - { text: "Only when budget allows", correct: false }
      explanation: "Portal becomes valuable when service count (50+) exceeds what engineers can hold in their heads, team size is large with non-platform-fluent engineers, cross-team service discovery is real, or compliance/audit requires a service catalog."
    - q: "For organisations that don't need a portal at all, what does the article suggest as adequate?"
      options:
        - { text: "Custom UI", correct: false }
        - { text: "IaC repository + Markdown documentation + GitOps interface", correct: true }
        - { text: "Spreadsheet", correct: false }
      explanation: "For under ~100 engineers (small services count, fluent platform team), no portal: IaC repo + Markdown docs + GitOps interface. Strengths: zero operational cost beyond Git. Weakness: discoverability scales poorly past 30-50 services."
    - q: "What is Port (port.io)'s positioning in the article?"
      options:
        - { text: "Open-source self-hosted", correct: false }
        - { text: "SaaS internal developer portal — quicker to deploy than Backstage; SaaS dependency = sovereignty implications", correct: true }
        - { text: "CI/CD pipeline runner", correct: false }
      explanation: "Port is SaaS — no self-hosting; quicker to deploy than Backstage; opinionated. Trade-offs: SaaS dependency (sovereignty implications); less customizable than Backstage. Best for mid-size orgs willing to use SaaS."
    - q: "What clean shorthand does the article use to describe the platform vs portal split?"
      options:
        - { text: "\"A platform without a portal still works. A portal without a platform is wallpaper.\"", correct: true }
        - { text: "\"Portal is content, platform is form.\"", correct: false }
        - { text: "\"Both are equal.\"", correct: false }
      explanation: "The article's memorable framing: \"A platform without a portal still works. A portal without a platform is wallpaper.\" Capability stack vs UI/catalog layer — confusing them is why so many Backstage-first projects stall."
---

**This is the long-form companion to our [Backstage alternative page](/alternatives/backstage-alternative). It clarifies the terminology, walks through where Backstage fits, and compares Backstage with Port, Cortex, custom builds, and "no portal" — for engineering leaders making the decision.**

The "IDP" acronym is overloaded. It means both:

- **Internal developer platform** — the underlying capability stack (Kubernetes, IaC, observability, golden paths).
- **Internal developer portal** — the UI/catalog layer (Backstage, Port, custom).

Most discussions confuse these. The actual question — "do we need Backstage?" — has different answers depending on which IDP you're talking about.

## Platform vs portal

A platform without a portal still works. A portal without a platform is wallpaper.

**Platform** answers: "What capabilities can product teams self-serve?"
- Environment provisioning
- Application deployment
- Database / queue / cache provisioning
- Observability onboarding
- Secrets, identity, network access

**Portal** answers: "How do product teams discover and access those capabilities?"
- Service catalog
- Documentation entry point
- Self-service forms / actions
- Cost / SLO dashboards per service

The platform is required for self-service to work. The portal is required for discoverability when service count grows past what teams can hold in their heads.

## When you need a portal

A portal becomes valuable when:

- **Service count is large** — 50+ services where engineers can't navigate all of them.
- **Team size is large** — many engineers, many of whom aren't yet platform-fluent.
- **Cross-team service discovery is real** — engineers from team A consume services from team B.
- **Compliance / audit requires service catalog** — regulator-ready service inventory.

When none of these hold (small org, small service count, fluent platform team), a portal adds maintenance cost without much benefit.

## Portal options compared

### Backstage (CNCF Incubating)

**What:** Open-source service catalog + plugin ecosystem. Originally built by Spotify, now CNCF.

**Strengths:** Mature, broad plugin ecosystem, customizable, strong community.

**Weaknesses:** Operational cost is real — running Backstage means maintaining plugins, integrating with internal tools, evolving with Backstage's release cadence. Underestimated by many adopters.

**Best for:** Mid-to-large engineering orgs (200+ engineers) with platform-team capacity to maintain Backstage as a product.

### Port (port.io)

**What:** SaaS internal developer portal.

**Strengths:** No self-hosting; quicker to deploy than Backstage; opinionated.

**Weaknesses:** SaaS dependency (sovereignty implications); less customizable than Backstage.

**Best for:** Mid-size orgs willing to use SaaS, wanting to skip Backstage's operational cost.

### Cortex / Compass / custom variants

Adjacent options with different trade-offs. Cortex is engineering-effectiveness-focused; Compass is Atlassian-native; custom is "build it yourself."

### No portal

**What:** IaC repository + Markdown documentation + GitOps interface.

**Strengths:** Zero operational cost beyond Git. No portal-specific maintenance.

**Weaknesses:** Discoverability scales poorly past 30-50 services.

**Best for:** Smaller orgs (under ~100 engineers) where the portal cost would exceed its value.

## Backstage's actual best fit

Backstage works well when:

- 200+ engineers, 100+ services
- Platform team has 5+ engineers who can dedicate time to maintenance
- Plugin ecosystem matches your tooling
- Customization is a priority (you'll write or extend plugins)

When those don't hold — the operational cost overshoots the value, and a lighter-weight option fits better.

## CNOE — the open-source platform-engineering reference

The CNCF CNOE (Cloud Native Operational Excellence) project is worth mentioning. It's an opinionated reference architecture combining Backstage, Argo CD, Crossplane, External Secrets, and other CNCF tools into a coherent platform pattern. For organizations that want a "platform-in-a-box" using CNCF projects, CNOE is the structured starting point.

CNOE is complementary to Cozystack: CNOE focuses on the developer portal + tooling layer; Cozystack focuses on the underlying multi-tenant Kubernetes-native platform with virtualization. Both can coexist.

## How to decide

A practical decision tree:

1. **Do you have a working platform underneath?** If no, build that first. Portal adoption assumes platform exists.
2. **Service count over 50? Engineering org over 100?** If yes, a portal helps. If no, a portal is over-engineering.
3. **Backstage operational cost realistic?** If yes (large team, plugin-friendly culture), Backstage. If no, Port or Cortex.
4. **SaaS acceptable?** If yes, Port or Cortex. If no, Backstage or custom.
5. **Will you actually customize?** If yes, Backstage. If no, Port.

The decision is smaller than vendors make it sound. The bigger architectural decision is the platform underneath.

## How to start

For platform-first engagement see **[Internal Developer Platform services](/services/internal-developer-platform/)** or the broader **[Platform Engineering services](/services/platform-engineering/)**. Aenix builds the platform; portal decision follows.

---

*Aenix is the team behind Cozystack (CNCF Project), and we offer Ænix Platform — our commercial productized offering based on Cozystack.*

<!-- SEO: title "Internal Developer Portal vs Platform — and Where Backstage Fits | Aenix"
Word count: ~1300. -->
