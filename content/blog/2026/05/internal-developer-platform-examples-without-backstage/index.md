---
title: "Internal developer platform examples — 6 architectural patterns without Backstage lock-in"
description: "This is the long-form companion to our internal developer platform services page. It walks through real internal developer platform examples — what to..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["Backstage", "Kubernetes", "KubeVirt", "Sovereignty", "Multi-tenancy", "Platform Engineering"]
language: "en"
companion_landing: "/services/internal-developer-platform/"
quiz:
  title: "Test yourself: IDPs (without Backstage as the centerpiece)"
  questions:
    - q: "What does \"IDP vs IDP problem\" mean in the article?"
      options:
        - { text: "Identity-provider vs internal-developer-platform naming clash", correct: false }
        - { text: "Two competing product lines in the IDP market category", correct: false }
        - { text: "The acronym hides platform vs portal — two different layers", correct: true }
      explanation: "The article makes the \"platform vs portal\" distinction explicit. The same acronym means both internal developer platform (capability stack) and internal developer portal (UI/catalog layer). A platform without a portal still works; a portal without a platform is wallpaper."
    - q: "How many production IDP patterns does the article enumerate?"
      options:
        - { text: "Six distinct patterns", correct: true }
        - { text: "Three distinct patterns", correct: false }
        - { text: "Ten distinct patterns", correct: false }
      explanation: "Six patterns: (1) multi-tenant Kubernetes-native cloud platform, (2) GitOps-first per-team Kubernetes, (3) service-template plus golden-path, (4) PaaS-lite layered on Kubernetes, (5) Backstage-first with capability operators, (6) external-services-as-platform."
    - q: "For Pattern 4 (PaaS-lite layered on Kubernetes), what is the trade-off?"
      options:
        - { text: "Highest cognitive overhead but maximum flexibility", correct: false }
        - { text: "Lowest cognitive overhead, less flexibility for edge cases", correct: true }
        - { text: "Requires Cozystack as the underlying distribution", correct: false }
      explanation: "PaaS-lite (Knative or Cloud-Foundry-style abstractions on Kubernetes) gives product teams a `git push → deploy` experience. Lowest cognitive overhead; trade-off is reduced flexibility for non-standard cases that need raw Kubernetes access."
    - q: "For Pattern 5 (Backstage-first with capability operators), what additional discipline does the article say platform teams must invest in?"
      options:
        - { text: "A dedicated SRE team for the portal itself", correct: false }
        - { text: "Catalog hygiene, deprecations, and roadmap discipline", correct: true }
        - { text: "An annual hardware refresh for the portal nodes", correct: false }
      explanation: "Backstage as the catalog with capability operators behind each entry works well — but only if the platform team invests in product-management practices: catalog hygiene, deprecation policies, roadmap for what gets added next."
    - q: "According to the tools section, what is positioned as the de facto orchestration layer for modern internal developer platforms?"
      options:
        - { text: "HashiCorp Nomad as the orchestrator", correct: false }
        - { text: "OpenStack with Heat orchestration", correct: false }
        - { text: "Kubernetes (distribution per op model)", correct: true }
      explanation: "Kubernetes is named as the de facto orchestration layer. Distribution choice (Cozystack for multi-tenant plus virtualization, OpenShift for enterprise commercial, vanilla for simplicity, Talos as the OS underneath) depends on operational model."
---

**This is the long-form companion to our [internal developer platform services page](/services/internal-developer-platform/). It walks through real internal developer platform examples — what to build, what to skip, what tools matter, and how to do it without making Backstage the centerpiece of your architecture.**

Most articles about internal developer platforms in 2026 are still framed as "how to use Backstage." That framing is wrong. Backstage is a useful tool when the catalog discipline is mature; it is not the platform. The platform sits underneath, and the architecture decisions that matter are made there.

This is what working internal developer platforms actually look like.

## The IDP vs IDP problem

The terminology is confusingly overloaded. "IDP" gets used for both:

- **Internal developer platform** — the capability stack: compute, storage, networking, identity, observability, deployment automation, golden paths.
- **Internal developer portal** — the UI/catalog layer: Backstage, Port, Cortex, custom dashboards. Sits on top of the platform.

A platform without a portal still works. A portal without a platform is wallpaper.

In practice, organizations get confused, buy a portal, and discover that adoption stalls because the underlying capabilities aren't actually self-service — they're just better-documented from the catalog.

This article focuses on platform; portal layer is a smaller, secondary decision.

## Six IDP patterns from production

### Pattern 1: Multi-tenant Kubernetes-native cloud platform

**What:** Single Kubernetes cluster (or fleet) with hard-multi-tenancy. Tenant CRD, per-tenant quotas, RBAC, observability scope. KubeVirt for VM workloads, regular containers for everything else, managed databases as Kubernetes-native services.

**Used by:** Service providers (multi-customer), enterprises with strong BU separation, sovereign-cloud builders.

**Example stack:** [Cozystack](/products/cozystack/) (open-source CNCF Project).

**Why it works:** Single platform serves both VM-heavy and container-heavy workloads. Multi-tenancy is structural, not bolted-on.

### Pattern 2: GitOps-first per-team Kubernetes

**What:** Each product team gets its own Kubernetes namespace (or cluster), provisioned via IaC. GitOps engine (Argo CD or Flux) deploys applications. Platform team maintains the foundation; product teams own their namespace.

**Used by:** Mid-size organizations (50-500 engineers) with disciplined GitOps culture.

**Example stack:** Vanilla Kubernetes + Flux + Crossplane + Argo Workflows.

**Why it works:** Lightweight platform team, high product-team autonomy, clear isolation boundaries.

### Pattern 3: Service-template + golden-path platform

**What:** Pre-built service templates (HTTP API, batch worker, scheduled job) with embedded observability, deployment, and alerting. New service = run a template; everything below is automatic.

**Used by:** Engineering organizations with high service-creation rate.

**Example stack:** Cookiecutter or similar templates + Helm charts + Argo CD + auto-instrumented observability.

**Why it works:** Reduces time-to-first-production-deploy to hours; standardizes operational surface.

### Pattern 4: PaaS-lite layered on Kubernetes

**What:** Heroku-like developer experience built on Kubernetes. `git push` → CI builds → image pushes → automatic deploy. No Kubernetes manifests in product-team-facing surface.

**Used by:** Organizations where Kubernetes literacy isn't universal across product teams.

**Example stack:** Knative + custom controllers, or Cloud Foundry-style abstractions on Kubernetes.

**Why it works:** Lowest cognitive overhead for product teams. Trade-off: less flexibility for non-standard cases.

### Pattern 5: Backstage-first with capability operators

**What:** Backstage as the entry point; product teams pick from the catalog. Behind each catalog entry, a Kubernetes operator provisions the requested resource (database, queue, environment). Platform team maintains the operators.

**Used by:** Organizations with strong product-management discipline at platform-team level.

**Example stack:** Backstage + Crossplane + custom Kubernetes operators per service type.

**Why it works:** Catalog-first UX is intuitive for product teams; operators provide robust automation.

**Trade-off:** Platform team must invest in product-management practices (catalog hygiene, deprecations, roadmap).

### Pattern 6: External-services-as-platform

**What:** Platform team provides catalog of external SaaS services (managed databases, observability, identity) via standardized integration. The "platform" is mostly integration glue + provisioning automation.

**Used by:** Cloud-native organizations comfortable with hyperscaler-managed services and SaaS dependencies.

**Example stack:** Crossplane (with cloud providers + SaaS providers) + Backstage catalog.

**Why it works:** Smallest platform-team footprint; rides hyperscaler reliability.

**Trade-off:** Vendor lock-in, sovereignty concerns, cost ceiling.

## Tools that show up across patterns

The tooling landscape has converged. Across the 6 patterns above:

### Compute / orchestration
**Kubernetes** is the de facto orchestration layer. Distribution choice depends on operational model:
- **Cozystack** for multi-tenant + virtualization (open-source, CNCF Project)
- **OpenShift** for enterprise commercial
- **Vanilla Kubernetes** for simplicity
- **Talos** as the OS underneath

### IaC
**Terraform / OpenTofu** for cloud and infrastructure. **Crossplane** for Kubernetes-native infrastructure abstraction. **Pulumi** as a TypeScript-friendly alternative.

### GitOps
**Argo CD** and **Flux** are the two production-grade GitOps engines. Both work; Flux is closer to upstream Kubernetes way; Argo CD has stronger UI ergonomics.

### Internal developer portal
**Backstage** dominates. Alternatives: Port, Cortex, Compass, custom. Smaller-scale: a Markdown documentation site backed by a service-catalog YAML in Git.

### Observability
**VictoriaMetrics + VictoriaLogs** (open-source, low-overhead). **Prometheus + Loki** (still common). Commercial: Datadog, New Relic, Splunk Cloud — but check sovereignty implications.

### Secrets and identity
**External Secrets Operator** + cloud-provider secret stores or HashiCorp Vault. **SPIFFE/SPIRE** for service identity at scale.

### CI/CD
**GitHub Actions** for source-of-truth; **Argo Workflows** or **Tekton** for Kubernetes-native pipelines.

## How to pick a pattern

The decision tree:

1. **Multi-tenancy needed?** (Service-provider model, hard BU separation, regulated multi-tenant.)
   - Yes → Pattern 1 (Multi-tenant Kubernetes-native, Cozystack-style).
   - No → continue.

2. **Strong product-team autonomy desired?** (Mature engineering culture, GitOps discipline.)
   - Yes → Pattern 2 (GitOps-first per-team).
   - No → continue.

3. **High service-creation rate?** (>10 new services per month, microservices-heavy.)
   - Yes → Pattern 3 (Service-template + golden path).
   - No → continue.

4. **Kubernetes literacy uneven across product teams?**
   - Yes → Pattern 4 (PaaS-lite on Kubernetes).
   - No → continue.

5. **Strong product-management discipline at platform-team level + appetite for catalog UX?**
   - Yes → Pattern 5 (Backstage-first with capability operators).
   - No → Pattern 6 (External-services-as-platform).

This is a heuristic, not a formula. Real engagements often hybrid two patterns.

## What about the portal?

Once the platform pattern is chosen, the portal decision is smaller:

- **Backstage** when service catalog discipline is real, the platform has 50+ catalog entries (services + capabilities), and a platform team can sustain Backstage's plugin maintenance.
- **Port / Cortex / Compass** when Backstage seems too much engineering effort and a SaaS portal is acceptable.
- **Custom Markdown site + YAML catalog** for organizations under 100 engineers; sufficient and cheaper.
- **No portal** for very small platforms; the IaC repo is the documentation.

A portal is a service-discovery and self-service entry point. It's not the platform; not the differentiator.

## Common architectural mistakes

### Mistake 1: starting with the portal
Buying Backstage before the platform exists puts the cart before the horse. Adoption stalls because the catalog points to weeks-long ticket processes.

### Mistake 2: too many opinions, too rigid
Golden paths should be golden, not gold-plated. Product teams need escape hatches for non-standard cases.

### Mistake 3: under-invested platform-team headcount
Platform team that absorbs both build and on-call duties for shared services becomes ticket support. Build velocity collapses.

### Mistake 4: vendor-led platform-in-a-box
Buying a "complete IDP solution" rebuilds the lock-in problem with a different vendor.

### Mistake 5: building for engineering elegance, not adoption
Platform team's customers are product teams. Architecture optimized for engineering elegance often produces a platform nobody adopts.

## How to start

If your organization fits the IDP profile, the structured next step is an assessment of current platform maturity and a target architecture. Aenix runs this as **[Platform Readiness Assessment](/services/platform-readiness-assessment/)** with IDP-emphasis.

For services details see the **[internal developer platform services page](/services/internal-developer-platform/)**.

---

## Want to dig deeper?

- **[Internal developer platform services](/services/internal-developer-platform/)** — engagement details
- **[Platform engineering services](/services/platform-engineering/)** — broader scope
- **[Platform engineering vs DevOps vs SRE](/blog/2026/05/platform-engineering-vs-devops-vs-sre/)** — terminology
- **[Cozystack](/products/cozystack/)** — multi-tenant Kubernetes-native foundation

---

*Aenix is the platform engineering team behind Cozystack — a CNCF Project, Kubernetes Certified Distribution, OpenSSF Best Practices.*

<!--
SEO meta description (≤155 chars):
"Internal developer platform examples 2026: 6 architectural patterns, tools, decision tree, common mistakes. Without Backstage lock-in."
Word count: ~2900.
-->
