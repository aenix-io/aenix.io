---
title: "White-label cloud playbook — for MSPs and resellers in 2026"
seo_title: "White-label cloud playbook for MSPs and resellers"
description: "How MSPs and resellers launch a cloud under their own brand: who owns what, branding, billing through WHMCS or your own system, and the support split."
date: "2026-05-31"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/white-label-cloud-msp-reseller-playbook.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Cozystack", "Multi-tenancy", "Hosting", "Observability"]
language: "en"
hreflang_de: "/de/blog/2026/05/white-label-cloud-playbook-msp-reseller/"
companion_landing: "/services/white-label-cloud/"
faq:
  - q: "Is white-labeling a paid Ænix feature?"
    a: "No. White-labeling is an open-source Cozystack feature: logo, page title, footer, favicon and the name on the login pages are set in the platform configuration. What the Ænix subscription adds is support for configuring it, included from the Standard tier ($3,000 per 10 nodes per month on annual billing)."
  - q: "Can every sub-reseller get its own branded portal?"
    a: "Not out of the box. Cozystack branding is configured platform-wide, so all tenants of one installation see the same Dashboard branding. Sub-resellers get their own tenants, quotas and customers; if each one needs a distinct look, settle how in the readiness assessment."
  - q: "Do I have to use WHMCS?"
    a: "No. The Ænix WHMCS integration is one option, with WHMCS either as the customer-facing front or as the billing back-end behind the Cozystack Dashboard. The Ænix billing system is the other, and you can also feed per-tenant usage data into a billing system of your own. The WHMCS integration and the billing system are proprietary Ænix modules included in every Public Cloud Platform tier."
  - q: "Who supports my end customers?"
    a: "You do. The MSP owns the customer relationship and first-line support under its brand. Ænix supports the platform behind you according to your tier — response times, incident coverage and remote access to your clusters with your approval are listed on the pricing page."
  - q: "What happens to my cloud if the Ænix subscription ends?"
    a: "The open-source Cozystack platform keeps running on your hardware, with your tenants and workloads. The proprietary commercial modules and Ænix support stop, so billing would have to move to another system."
quiz:
  title: "Test yourself: white-label cloud for MSPs"
  questions:
    - q: "According to the article, which part of a white-label cloud is proprietary Ænix software?"
      options:
        - { text: "The Cozystack Dashboard branding settings", correct: false }
        - { text: "The WHMCS integration and the Ænix billing system", correct: true }
        - { text: "The nested Tenant model for resellers", correct: false }
        - { text: "The managed services catalog", correct: false }
      explanation: "White-labeling, nested tenants and the managed services catalog are open-source Cozystack. The WHMCS integration and the Ænix billing system are proprietary Ænix modules, included in every Public Cloud Platform tier."
    - q: "How is Dashboard branding scoped in Cozystack, per the article?"
      options:
        - { text: "Platform-wide: all tenants of one installation see the same branding", correct: true }
        - { text: "Per tenant: every tenant sets its own logo and colours", correct: false }
        - { text: "Per namespace: each project inside a tenant can rebrand", correct: false }
      explanation: "Branding lives in the platform configuration, so one installation carries one brand. That is fine for an MSP selling under its own name, and a question for the assessment if every sub-reseller wants a distinct look."
    - q: "Which two WHMCS integration modes does the article describe?"
      options:
        - { text: "WHMCS as the customer-facing front, or the Cozystack Dashboard as the front with WHMCS as billing back-end", correct: true }
        - { text: "WHMCS for VMs only, or WHMCS for Kubernetes only", correct: false }
        - { text: "WHMCS hosted by Ænix, or WHMCS hosted by the end customer", correct: false }
      explanation: "The billing section describes the two modes: customers order in the WHMCS storefront you already run, or they use the branded Dashboard while WHMCS handles invoicing behind it."
    - q: "From which support tier is white-label configuration included?"
      options:
        - { text: "Basic, $1,250 per 10 nodes per month", correct: false }
        - { text: "Standard, $3,000 per 10 nodes per month", correct: true }
        - { text: "Plus, $5,500 per 10 nodes per month", correct: false }
        - { text: "Enterprise only, priced individually", correct: false }
      explanation: "The feature itself is open source, but Ænix support for configuring it starts at Standard ($3,000 per 10 nodes per month on annual billing), which also includes platform installation."
    - q: "If the Ænix subscription ends, what does the article say happens?"
      options:
        - { text: "The cloud stops and tenants must be migrated off within 30 days", correct: false }
        - { text: "Cozystack keeps running; the commercial modules and Ænix support stop", correct: true }
        - { text: "Only the branding reverts, everything else keeps working unchanged", correct: false }
      explanation: "The ownership section: the open-source platform keeps running on your hardware with your tenants. Billing through the proprietary modules and Ænix support end, so billing has to move elsewhere."
---

A managed service provider already has the hard part of a cloud business: customers who trust it, contracts, a support desk and an invoice they pay every month. What it usually lacks is a cloud product of its own to put on that invoice. Reselling a hyperscaler fills the gap on paper, but the account, the console, the quotas and the support path all live with someone else, and the margin is whatever the partner tier allows.

A white-label cloud flips that. The customer logs into a portal with your name on it, orders virtual machines, Kubernetes clusters or a managed PostgreSQL, and gets an invoice from you. This playbook is about the mechanics of running that business: who owns which part, how branding actually works, how billing is wired, and how support is split between you and Ænix. Why MSPs are adding cloud in the first place, and how to sequence that change inside a managed-services business, is covered in the companion piece on [MSP cloud platform modernization](/blog/2026/05/msp-cloud-platform-modernization/).

## Who owns what

It pays to settle ownership before the first line of architecture, because every later decision about pricing, support and exit follows from it.

You own the brand, the customer relationship, the contracts, the price list and the hardware, whether bought or leased. Your customers never sign anything with Ænix, and they don't need to know which platform runs underneath.

The platform itself is [Cozystack](/products/cozystack/), an open-source project under Apache 2.0 in the CNCF Sandbox, which Ænix created and co-maintains with maintainers from other companies. There is no per-CPU or per-core fee, so your margin doesn't shrink as customer workloads grow. What Ænix sells on top is a subscription — the [Ænix Public Cloud Platform](/products/public-cloud-platform/) — which combines a support tier with proprietary commercial modules: the billing system and the WHMCS integration.

That split also defines your exit. If the subscription ends, the open-source platform keeps running on your hardware with your tenants and workloads; the commercial modules and Ænix support stop. You would need to move billing elsewhere, but you would not need to migrate a single customer VM.

## The tenant hierarchy is the reseller model

A reseller business needs at least three levels: the operator of the platform, the reseller, and the reseller's customers. In Cozystack this is not a billing trick layered on top; it is how tenants work. A tenant can contain other tenants, so the hierarchy runs from the provider tenant at the top, through an MSP or reseller tenant, down to one tenant per end customer. A customer can split its own tenant further, for example into production and test.

Each tenant has its own quotas, network isolation, access rights and monitoring scope. That gives you three things a reseller needs. You can cap what a customer consumes without touching anyone else. You can hand a customer administrator rights to their own tenant without exposing a neighbour. And you can see, per tenant, what is running and how it behaves, which is what per-customer SLA tracking is built on.

If you sell through your own partners, the same nesting gives you sub-resellers: a partner gets a tenant, creates tenants for its customers inside it, and stays within the limits you set. The [anonymised sovereign public cloud case study](/case-studies/sovereign-public-cloud/) shows this operator model in production: an admin provisions tenants and sub-tenants with role separation, the way the big clouds do.

## Branding: what changes and what doesn't

White-labeling is an open-source Cozystack feature, not something a paid tier switches on. The [Cozystack white-labeling documentation](https://cozystack.io/docs/v1.4/operations/configuration/white-labeling/) lists what you can change: the logo, the browser and page titles, the footer text, the favicon and the tenant label in the Dashboard, plus the name shown on the login and account pages. The Dashboard is served on your own domain, so a customer sees your cloud from the sign-in page onward.

Two limits are worth knowing before you promise anything in a sales deck. Colours are not a branding field in their own right; an SVG logo can adapt to light and dark themes, but there is no colour palette switch. And branding is configured platform-wide, so every tenant of one installation sees the same brand. For an MSP selling under its own name that is exactly what you want. If you plan to give each sub-reseller its own distinct portal, raise it early and settle how in the assessment rather than discovering it after launch.

Ænix support for configuring white-labeling is included from the Standard tier. On Basic the feature works the same; you configure it yourself.

## Curating the catalogue

The Cozystack catalogue is broad: virtual machines (Linux and Windows, with custom images), tenant Kubernetes clusters, managed PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ and NATS, S3-compatible object storage and GPU workloads. You don't have to sell all of it, and you shouldn't.

Expose only what your team can stand behind at 3 am. If nobody on your side has run Kafka in production, hide it until someone has; a service you can't support turns into a support ticket you can't close. Most MSPs start with VMs, Kubernetes and one or two databases they already know, then widen the catalogue as their team learns the rest. GPU is a configuration decision on the same platform when demand appears, not a second procurement.

## Billing: WHMCS, Ænix billing, or your own

Billing is where white-label projects stall most often, because it touches finance, contracts and the customer portal at once. There are three workable paths, and the choice depends on what you already run.

**The Ænix WHMCS integration.** If your customers already order and pay through WHMCS, the [WHMCS integration](/products/whmcs-integration/) adds cloud services to the panel you have. It works in two modes: WHMCS stays the customer-facing storefront and Cozystack provisions behind it, or the branded Cozystack Dashboard becomes the front and WHMCS acts as the billing back-end. Either way, usage is metered by the platform and invoiced from WHMCS, so there is no second billing system to reconcile.

**The Ænix billing system.** If you don't have a billing platform worth keeping, the Public Cloud Platform includes a full billing back-end and front-end: usage metering, invoicing, payment processing through Stripe and regional providers, pre-paid balances and post-paid invoices, channel-partner billing and reseller margin handling. Usage is reported per tenant, per workload and per resource, and a report can include all nested sub-tenants, which is what a reseller invoice needs. The [Ænix Billing announcement](/blog/2026/05/aenix-billing-per-minute-managed-services-cozystack/) walks through the usage API in detail.

Both modules are proprietary Ænix software and are included in every Public Cloud Platform tier; there is no separate charge.

**Your own billing.** Some providers already run their own invoicing and keep it. The Swiss provider in the case study above did exactly that: an in-house system that sells dedicated vCPU and RAM, with hourly metering written to an external database. That path works; you trade the out-of-the-box modules for full control and take on the integration work.

Whichever path you choose, the tenant lifecycle stays on the platform: overdue accounts can be suspended and resources blocked without an engineering ticket.

## The support split

Your customers call you. That is the point of a white-label cloud, and it means you own first-line support: account questions, "my VM is slow", onboarding, and the triage that decides whether a problem sits in the customer's workload or in the platform.

Ænix sits behind you on the platform. What that looks like depends on the tier you buy, and the [pricing page](/pricing/#support) is the single source for the details: incident coverage, service-desk hours, response times and the out-of-scope rate. From Standard, the subscription includes platform installation, supervised upgrades and remote access to your clusters with your approval. If you need round-the-clock coverage without staffing a full on-call rota yourself, Plus adds 24×7 support. Organisations that want even less operational load can choose a hybrid model in which Ænix operates the control plane under SLA while you own the data plane.

Write the split down in your own customer contracts. Your SLA to customers should be one you can keep given the response times you have bought, plus the time your own team needs to triage.

## The economics, briefly

Your costs are the subscription (published per 10 nodes per month), hardware or leased bare metal, colocation, bandwidth and the people who run the service and talk to customers. Your revenue is what you charge per service, and the margin lives in managed services rather than in raw vCPU, where you would be competing with hyperscaler list prices.

Rather than quote a rule-of-thumb markup that would not fit your cost base, model it with your own numbers in the [hosting-provider unit economics calculator](/isp-calculator/). The [Public Cloud Platform economics article](/blog/2026/05/isp-edition-economics-hosting-providers/) works through per-tenant cost, break-even and the failure modes in detail.

## When this doesn't fit

If you want to sell cloud without operating any of it, a white-label platform is the wrong tool; you would carry hardware, operations and first-line support either way. The [Ænix Partner Program](/partners/) is the better fit there: you resell Ænix subscriptions and support with up to 40% margin, and Ænix delivers the platform.

If VPS resale is your whole business and the margin satisfies you, a VPS control panel is cheaper and simpler. This model pays off when you want to sell managed databases, Kubernetes and GPU without building each one yourself.

And if every sub-reseller needs a visually distinct portal on day one, check that requirement against the platform-wide branding before you commit to dates.

## How an engagement runs

It starts with a free 30-minute discovery call to check fit. Then comes the fixed-price [Platform Readiness Assessment](/services/platform-readiness-assessment/), 14 days focused or 28 days full, which covers the product, the reseller model and the architecture. Once your hardware is ready, the platform is live in weeks through the productized installer; branding, catalogue curation, billing integration and the operations workflow are set up in parallel. Optional managed services can carry you through the ramp-up.

You can see what your customers would see in the [live demo](/demo/), which runs the customer portal and the operator back-office on demo data in your browser. The [white-label cloud service page](/services/white-label-cloud/) summarises the engagement, and the [MSP industry page](/industries/msp/) explains why the tenancy model carries the whole argument.
