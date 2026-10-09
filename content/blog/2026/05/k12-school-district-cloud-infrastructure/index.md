---
title: "K-12 school district cloud infrastructure — when sovereignty matters more than convenience"
seo_title: "K-12 school district cloud infrastructure"
description: "When a school district or education authority needs its own cloud, who should build and run it, and the tenant model that fits districts, schools and classes."
date: "2026-05-15"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/k12-school-district-cloud-infrastructure.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Cozystack", "Sovereignty", "AI and ML", "Multi-tenancy", "Compliance"]
language: "en"
companion_landing: "/industries/education-k12/"
quiz:
  title: "Test yourself: K-12 cloud infrastructure"
  questions:
    - q: "What does the article name as the primary infrastructure concern that separates K-12 districts from universities?"
      options:
        - { text: "Research computing and GPU capacity for faculty labs", correct: false }
        - { text: "Teaching Kubernetes and cloud-native skills in the curriculum", correct: false }
        - { text: "Student-data privacy, across many schools on long budget cycles", correct: true }
      explanation: "Universities run research computing and often teach cloud-native skills. K-12 districts do neither; their primary concern is the privacy of student data, spread across tens of thousands of students in many schools, bought on three-to-five-year procurement cycles."
    - q: "According to the article, who usually builds and runs a school cloud when one is warranted?"
      options:
        - { text: "Each school's own IT staff, one cluster per school", correct: false }
        - { text: "A shared-service centre, a regional provider or an integrator", correct: true }
        - { text: "The EdTech vendor whose learning platform the district uses", correct: false }
      explanation: "Individual districts rarely have the platform team. The realistic operators are public-sector IT and shared-service centres running cloud for their own schools, regional cloud and hosting providers offering an education cloud to many districts, and system integrators delivering a platform into an authority's environment."
    - q: "How does the article map an education authority onto Cozystack tenancy?"
      options:
        - { text: "Nested tenants: authority, then district, then school, then class or project", correct: true }
        - { text: "One shared namespace for every school with labels per class", correct: false }
        - { text: "A separate physical cluster provisioned for every school", correct: false }
      explanation: "Cozystack tenants nest, so one platform holds the authority at the root, a tenant per district or school below it and, where needed, tenants for classes or EdTech projects — each with its own quotas, RBAC, network policy and monitoring."
    - q: "What does the article say about encrypting student data at rest?"
      options:
        - { text: "Every volume is encrypted by default with keys held by Ænix", correct: false }
        - { text: "Volume encryption is opt-in per storage class, with a passphrase the authority holds", correct: true }
        - { text: "Encryption is handled by a hardware security module in each school", correct: false }
      explanation: "Volume encryption (LUKS on LINSTOR) is opt-in per storage class and uses a passphrase the authority holds. It has to be decided at design time, because converting a populated volume later means migrating the data."
    - q: "When does the article say a sovereign platform is the wrong answer for a district?"
      options:
        - { text: "When the district serves more than 10,000 students", correct: false }
        - { text: "When student data includes grades and attendance records", correct: false }
        - { text: "When there is no residency mandate, no own EdTech and no team to run it", correct: true }
      explanation: "Without a residency mandate, without its own platform development and without anyone to operate the platform — directly or through a shared-service centre or provider — a district is better served by managed SaaS and standard EdTech tools."
faq:
  - q: "Does every school district need its own cloud platform?"
    a: "No. Most districts are better served by managed SaaS and standard EdTech tools. A sovereign platform is warranted when a national or regional rule requires student data to stay in jurisdiction, when the authority has publicly committed to local residency, or when it builds its own learning or analytics platform."
  - q: "Who should run a school cloud — the district or someone else?"
    a: "Usually someone with a platform team: a municipal or regional shared-service centre running cloud for its own schools, a regional cloud or hosting provider offering an education cloud to many districts, or a system integrator delivering the platform into the authority's environment and handing it over."
  - q: "How are districts, schools and classes kept apart on one platform?"
    a: "With nested Cozystack tenants. The authority sits at the root, each district or school gets its own tenant, and classes or EdTech projects can get tenants below that. Every tenant has its own quotas, RBAC, network policy and monitoring, so a school administers its own resources without seeing another school's."
  - q: "Does the platform take care of GDPR or FERPA for the district?"
    a: "No. The obligations stay with the district or authority. The architecture is built to support them: student data on hardware the authority controls, opt-in volume encryption with a passphrase the authority holds, audit logs with configurable retention that can be shipped to the authority's own archive, and backups pointed at storage it controls."
  - q: "What does it cost and how long does it take?"
    a: "Cozystack is Apache 2.0 with no per-core licence. Ænix Private Cloud Platform is quoted per RFP after a fixed-price Platform Readiness Assessment of 14 or 28 days, followed by a 3–12 month build depending on scope. Ænix Public Cloud Platform subscriptions, for providers selling an education cloud, start at $1,250 per 10 nodes per month on annual billing."
hreflang_de: /de/blog/2026/05/k12-schultraeger-cloud-infrastruktur/
---

Most school districts should not build a cloud. They should buy managed SaaS and spend scarce IT budget on classrooms. This article is about the exceptions — the districts, consortia and education authorities for which running their own platform is the right answer — and about a question that usually gets skipped: if a school cloud is warranted, who actually builds and runs it?

Rarely the district itself — and that shapes the architecture.

## Why K-12 is a different problem from a university

A university runs research computing, GPU labs for faculty and, more and more often, teaches cloud-native skills on real infrastructure — we covered that case in [cloud-native research and teaching infrastructure](/blog/2026/05/cloud-native-research-and-teaching-infrastructure/). A school district does none of that.

What a district does have is student data, and a lot of it: enrolment, grades, attendance, special-needs records — about minors. A large district or a regional authority serves somewhere between 10,000 and well over 100,000 students across dozens or hundreds of schools. Each school has little or no IT staff of its own. And the money arrives on three-to-five-year procurement cycles, so a platform decision has to survive several budget rounds without being re-bought.

Privacy first, many small sites, long cycles: a different architecture than research computing.

## When a sovereign platform is warranted

Three situations justify it.

The first is regulation. Some EU member states and some jurisdictions outside the EU require student data to stay within the country, or within infrastructure the public body controls, under national privacy rules that sit on top of GDPR. In the US the equivalent pressure comes from FERPA and state student-privacy laws. Where the rule is explicit, the question is settled.

The second is public commitment. A district or authority may have promised parents, a school board or a parliament that student data stays local. That is not law, but it is a liability, and it constrains procurement as firmly as law does.

The third is building your own. Some authorities develop their own learning platform, student information system or analytics layer instead of licensing one.

If none of the three applies, the honest recommendation is managed SaaS and standard EdTech tools.

## Who actually builds and runs a school cloud

Procurement documents are often written as if each district will operate its own platform. A district with a two-person IT team cannot run a multi-tenant cloud with storage replication, upgrades and on-call, and it should not try. In practice the operator is one of three kinds of organisation.

### Public-sector IT and shared-service centres

Municipal IT departments, county or regional education authorities, ministries of education and the shared-service centres that serve several of them already run infrastructure for many schools. For them a school cloud is an internal platform: they run it for their own districts and schools, not for sale. That is the profile of [Ænix Private Cloud Platform](/products/private-cloud-platform/) — a private cloud for organisations that run cloud for themselves, quoted per RFP. The procurement side of these programmes, from RFI to tender, is covered in [sovereign cloud procurement for the public sector](/blog/2026/05/public-sector-sovereign-cloud-procurement/).

### Regional cloud and hosting providers

A regional provider can offer an education cloud to many districts at once, in the country and under the jurisdiction those districts need. Here the districts are customers, so the provider needs what a commercial cloud needs: a branded self-service portal, billing, and a catalogue of services it can actually support. That is [Ænix Public Cloud Platform](/products/public-cloud-platform/), and the branded-portal model is described in [white-label cloud](/services/white-label-cloud/). White-labeling itself is an open-source Cozystack feature; the subscription decides how much of it Ænix supports.

### System integrators

Integrators often hold the authority's framework contract and need a platform they can deploy into its environment, build their services on, and hand over. A published case shows exactly that pattern: an integrator [built a corporate AI platform on Cozystack and shipped the same distribution into a state-owned customer's environment](/case-studies/ai-universal-installer/), with data staying inside the customer's boundary. The customer there is not a school system, but the delivery model is the same.

All three run the same engine — [Cozystack](/products/cozystack/), the CNCF Sandbox project Ænix created and co-maintains, whose Incubation application is in due diligence. What differs is who consumes the capacity.

## The architecture: one platform, nested tenants

The core design decision is to run one platform for the whole authority and use tenancy, not separate clusters, to keep districts, schools and classes apart. Separate clusters per school multiply the operational load; one shared namespace gives no real isolation.

In Cozystack a tenant is a boundary for quotas, RBAC, network policy, storage and monitoring, and tenants nest. An authority sits at the root. Each district, or each school in a single district, gets its own tenant. Below a school, a class, a pilot project or an in-house EdTech team can get a tenant of its own. A school administrator manages what is inside the school's tenant without seeing the school next door, and central IT keeps control of the boundaries. That is the same split that made self-service acceptable in a regulated organisation in [a private cloud inside a bank](/case-studies/private-cloud-in-a-bank/): freedom inside the tenant, control at the boundary. In that case the platform also integrated with the identity system the organisation already ran instead of creating a second one, which is what a school system needs as well.

### What runs inside the tenants

Legacy student information systems and Windows-based administrative applications run as virtual machines (KubeVirt) on the same platform as containers. An authority developing its own learning platform gets tenant Kubernetes clusters for its developers. Managed services from the catalogue — PostgreSQL, MariaDB, Valkey, Kafka, ClickHouse, S3-compatible object storage — cover the databases and file storage that a learning platform needs, without each project running its own. Replicated block storage on LINSTOR keeps a disk failure from becoming an outage at exam time, and backups go to storage outside the cluster they protect.

Configuration can be declared and reconciled through GitOps, so a hundred school tenants live in a repository rather than in someone's memory. Monitoring and logs are included and scoped per tenant.

### Student data: residency, encryption and logs

The platform runs on hardware the authority or its provider controls, in the jurisdiction the procurement requires, and it can be installed and updated fully air-gapped when a ministry needs that.

Volume encryption at rest is opt-in per storage class, using LUKS on LINSTOR with a passphrase the authority holds. Decide it at design time: converting a populated volume later means migrating the data. Audit logs have configurable retention (30 days by default) and can be shipped to the authority's SIEM or to an immutable archive it controls. The [GDPR evidence page](/compliance/gdpr/) states plainly what the platform provides and what stays with you — erasure from backups, for example, is a retention policy you document, not a switch.

GDPR and FERPA obligations stay with the district or authority; the platform is built to support them, not to discharge them.

### AI and analytics on student data

Learning analytics and AI assistants are where student data most easily drifts to an external endpoint; running them locally keeps it in place. In tenant Kubernetes clusters, the NVIDIA GPU Operator exposes MIG partitions on MIG-capable cards and HAMi provides time-sliced sharing. Virtual machines get whole GPUs through passthrough, or NVIDIA vGPU with the authority's own NVIDIA vGPU licence. GPU usage is measured per tenant, which matters when several districts share the hardware. The [Ænix AI Platform](/products/ai-platform/) uses the same tenant boundaries.

## Consortia: shared core, per-district isolation

Small districts that cannot justify a platform alone can pool one. The pattern is a shared core run by a lead authority or a shared-service centre, with each district in its own tenant and its own sub-tenants for schools. Procurement is joint; operations are central; data control stays at district level, because the tenant boundary is where access, network policy and storage end.

The awkward part of a consortium is splitting the cost. Per-tenant usage reports give a basis for internal chargeback between districts, as they did between teams in the bank case; a provider-run consortium can invoice through its billing system instead.

## Budget cycles and procurement

A three-to-five-year cycle punishes per-core licences that grow with every server and platforms that must be replaced halfway through. Cozystack is Apache 2.0 with no per-core licensing, and it keeps running without Ænix, which gives procurement a documented exit path.

What Ænix sells on top is a subscription — support, commercial modules and services — not a licence. For providers, [Public Cloud Platform subscriptions](/pricing/) start at $1,250 per 10 nodes per month on annual billing. For an authority running its own platform, Private Cloud Platform is quoted per RFP. The usual sequence is a free 30-minute discovery call, a fixed-price [Platform Readiness Assessment](/services/platform-readiness-assessment/) of 14 or 28 days, then a 3–12 month build depending on scope, often starting with one district or one workload class. A provider building an education cloud on Public Cloud Platform goes live in weeks once the hardware is ready.

## Common pitfalls

Four mistakes recur in school platform projects.

Underestimating EdTech integration. The learning platform, the student information system, identity and the vendor tools that exchange data with them are where the time goes — inventory them before sizing anything.

Leaving audit readiness until later. Log retention, backup retention, who can read what, and where the data lives are design inputs for GDPR or FERPA, not documents written after go-live.

Accepting a vendor-led "education cloud" that only one vendor can operate. A platform that cannot be run by anyone else turns the next budget cycle into a negotiation you have already lost.

Re-architecting mid-cycle. A platform chosen for the current budget round, not the next two, forces the expensive re-planning a long cycle should prevent.

## When this doesn't fit

A single district with no residency mandate, no in-house development and nobody able to operate a platform for it should not build one; managed SaaS is cheaper and safer. Neither should an authority that only needs office and classroom collaboration tools. And a sovereign platform without anyone accountable for operating it — a shared-service centre, a provider or an integrator with a support contract — is a liability, not an asset.

## Where to go next

- [Cloud platform for K-12 education](/industries/education-k12/) — when the platform fits school districts, in brief
- [Public sector](/industries/public-sector/) — procurement, NIS2 and air-gapped deployments
- [Data sovereignty](/solutions/data-sovereignty/) — residency and key custody in detail
- [Case studies](/case-studies/) — nine anonymised deployments with architecture and figures

---

*Ænix created Cozystack, a CNCF Sandbox project, and co-maintains it with maintainers from other companies. Project documentation is at [cozystack.io](https://cozystack.io).*
