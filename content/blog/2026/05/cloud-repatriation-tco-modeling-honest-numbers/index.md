---
title: "Honest TCO modelling for cloud repatriation — what numbers to actually compare"
seo_title: "Cloud repatriation TCO: which numbers to compare"
description: "Why most cloud repatriation TCO models are wrong: the cost lines both sides hide, the assumptions to stress-test, and why the decision is made per workload."
date: "2026-05-05"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/cloud-repatriation-tco-modeling-honest-numbers.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Cloud Repatriation", "Financial Services", "Platform Engineering", "Backup and DR", "Observability"]
language: "en"
hreflang_de: "/de/blog/2026/05/cloud-repatriation-tco-modell-ehrliche-zahlen/"
companion_landing: "/solutions/cloud-repatriation/"
faq:
  - q: "Why is comparing the cloud bill with a hardware quote not a valid TCO?"
    a: "Because the two numbers cover different things. The cloud bill bundles hardware, facilities, managed services and part of the operations work, while a hardware quote covers only servers. An honest model prices the same workload twice, with every cost line present on both sides: egress, commitments, idle capacity and managed-service premiums on the cloud side; hardware refresh, facilities, network, storage replication, backup and DR, people, platform subscription and migration on the destination side."
  - q: "Can I use the Ænix TCO calculator for a public-cloud exit?"
    a: "No. The TCO calculator compares on-prem platforms and treats hardware and facilities as identical on both sides, so it leaves them out; public cloud is outside its scope. For a public-cloud exit, the cloud repatriation calculator prices one workload twice — hyperscaler rates with your discounts against Cozystack on owned or rented hardware, including power, colocation, network and operations staffing."
  - q: "Which assumptions should a repatriation TCO model stress-test?"
    a: "Steady-state utilisation of the destination hardware, workload growth (which decides when you buy and refresh hardware), egress volume, the discount level you actually get from the hyperscaler, and the operations effort for the new platform. Report the break-even point and payback under each scenario rather than one headline percentage."
  - q: "Should the decision be made for the whole estate at once?"
    a: "No. A portfolio-level TCO often comes out close to neutral, while individual workloads differ a lot. The largest steady-state workloads usually carry the bulk of the cost case; elastic, small or hyperscaler-specific workloads often belong in the cloud. Classify each workload as repatriate now, later or stay."
  - q: "What does the destination platform cost with Ænix?"
    a: "Cozystack is open source under Apache 2.0. The Ænix Public Cloud Platform subscription, which also covers support for self-run Cozystack, starts at $1,250 per 10 nodes per month on annual billing (Basic). Ænix Private Cloud Platform and Ænix AI Platform are quoted per RFP. Migration in the calculators is an indicative $8,000 plus $140 per VM; the final quote follows scoping."
quiz:
  title: "Test yourself: honest cloud repatriation TCO"
  questions:
    - q: "What is the right unit of comparison in a repatriation TCO model, according to the article?"
      options:
        - { text: "The whole monthly cloud invoice against one hardware quote", correct: false }
        - { text: "The same workload, priced twice with every cost line on both sides", correct: true }
        - { text: "The list price per vCPU-hour against the price per physical core", correct: false }
        - { text: "Last year's cloud spend against next year's hardware budget", correct: false }
      explanation: "The article argues that the invoice and a hardware quote cover different things. An honest model prices the same workload twice — as a hyperscaler workload at your effective rates and as a workload on hardware you control — with the same set of cost lines on both sides."
    - q: "Why is the Ænix TCO calculator the wrong tool for a public-cloud exit?"
      options:
        - { text: "It only covers VMware environments", correct: false }
        - { text: "It ignores personnel costs", correct: false }
        - { text: "It treats hardware and facilities as identical on both sides and excludes public cloud", correct: true }
        - { text: "It prices migration at zero", correct: false }
      explanation: "The TCO calculator compares on-prem platforms. Its methodology excludes hardware and facilities because they are the same on both sides, and lists public cloud as out of scope. A cloud exit changes exactly those lines, which is why the cloud repatriation calculator exists."
    - q: "How does the TCO calculator methodology model storage when sizing hardware?"
      options:
        - { text: "Raw storage equals usable storage", correct: false }
        - { text: "Raw storage equals usable storage times the replication factor", correct: true }
        - { text: "Storage is sized from the cloud invoice", correct: false }
      explanation: "The sizing chain in the methodology takes raw storage as usable capacity times the per-platform replication factor, alongside a 3:1 CPU oversubscription, an 85% RAM target and N+1 headroom. Skipping replication is one of the easiest ways to understate destination cost."
    - q: "What does the article say about a portfolio-level TCO result?"
      options:
        - { text: "It is the only number the board needs", correct: false }
        - { text: "It often comes out close to neutral while individual workloads differ a lot", correct: true }
        - { text: "It always favours repatriation", correct: false }
        - { text: "It always favours staying in the cloud", correct: false }
      explanation: "Averaging the whole estate hides the decision. The largest steady-state workloads usually carry the bulk of the cost case, while elastic or hyperscaler-specific ones often belong in the cloud — so the article recommends classifying per workload."
    - q: "Which result from a published Ænix case study does the article cite for GPU workloads?"
      options:
        - { text: "GPUs on a sovereign cloud came out roughly 5× cheaper than the previous hyperscaler setup", correct: true }
        - { text: "GPU cost dropped by 95% across every workload", correct: false }
        - { text: "GPU cost stayed the same but egress disappeared", correct: false }
      explanation: "In the 'From public cloud to bare metal' case study, an academic-computing SaaS found GPUs on a sovereign cloud roughly 5× cheaper than its previous hyperscaler setup, accounting for the prior model's margin. The article stresses that this is a GPU-specific result, not a figure to apply to a whole estate."
---

Most repatriation business cases start with two numbers on one slide: the monthly cloud invoice and a quote for servers. The second is smaller, the slide says "repatriate", and eighteen months later the finance team asks why the savings never showed up in the accounts.

The problem is not that the numbers are wrong. They answer different questions. The invoice bundles hardware, facilities, managed services and a slice of operations work into one line. The hardware quote covers metal. Comparing them is like comparing a hotel bill with the price of a bed.

This article is about the structure of an honest model — which cost lines belong on each side and which assumptions decide the answer. It deliberately contains no example savings percentage. Any such number depends on your workloads, your discounts and your team, and a percentage borrowed from someone else's estate is the fastest way to a wrong decision.

## Compare one workload, priced twice

The unit of comparison is a workload, not the estate. Take one service — its vCPU and RAM, block and object storage, the managed databases and Kubernetes clusters it uses, its GPUs, its egress and cross-zone traffic — and price it twice: once as it runs today at the rates you actually pay, once as it would run on hardware you control.

That is how the [cloud repatriation calculator](/cloud-calculator/) on this site is built. It prices the footprint against hyperscaler list rates with your commitment and enterprise discounts applied, then against Cozystack on owned or rented hardware including power, PUE, colocation, network and the operations staffing the platform takes. Every rate carries its source and date, and the output is a multi-year saving with a migration payback point rather than a headline percentage. You can disagree with any input; you can see all of them.

Pricing the same workload twice forces you to put the same categories of cost on both sides. Most bad models fail because one side is complete and the other is not.

## The cloud side: what the invoice hides

The invoice is the easiest number to get and the easiest to misread. Four lines deserve their own row.

**Egress and cross-zone traffic.** Data leaving the provider, and data moving between availability zones, is billed by volume. It hides inside service line items and grows with backups, observability pipelines and replication. Pull it out explicitly; it is also the line that changes most when you move.

**Commitments.** Reserved instances and savings plans lower the unit price only for capacity you actually use. Model the discount you realise, not the one in the contract. Record the expiry dates too: they do not change the total, but they decide when a workload can move without paying for capacity twice. The repatriation [playbook](/blog/2026/05/reverse-cloud-migration-playbook/) covers sequencing around them.

**Idle and over-sized resources.** Instances that are larger than the load, or that run when nobody uses them, are real spend. They are also spend that [cost optimisation](/solutions/cloud-cost-optimization/) can remove without moving anything. Count them honestly: if right-sizing in place closes most of the gap, that is a result, not a failure of the model.

**Managed-service premium and the people around it.** A managed database or Kubernetes service costs more than the compute under it, but it also removes operations work. Price what replaces it on the destination side — a managed service from the platform catalogue or a database your team runs itself — instead of dropping the line. The same goes for engineering time spent on cloud-specific plumbing: IAM policies, account structure, provider tooling. Some of that time is freed after a move; some is replaced by platform work.

## The destination side: the lines that bite in year two

A destination estimate that looks too good usually is missing one of these.

**Hardware and its refresh.** Purchase price is only the start. If your horizon is five years, ask whether a refresh falls inside it and price it if it does. Size the cluster properly: the [TCO calculator methodology](/tco-calculator/methodology/) shows a sizing chain worth copying — CPU oversubscription of 3:1, a RAM target of 85% utilisation, raw storage equal to usable capacity times the replication factor, and N+1 high-availability headroom with a minimum of 15%. Leave out replication or headroom and the node count comes out too low.

**Facilities and network.** Power multiplied by PUE, colocation or your own data-centre space, uplinks and bandwidth, and traffic between sites if you run more than one.

**Backup and DR.** A second copy of the data needs capacity somewhere, and a second site costs a second set of facilities. Price the design you will actually run. Cozystack supports stretched and multi-site layouts and backup and restore with runbooks; it does not provide automated cross-site failover, so budget the operational procedure, not a button.

**People.** This line is usually guessed. The methodology behind the TCO calculator models it as engineering days per month — a base of 0.25 day per node per month for node operations, scaled by an orchestration factor, plus days for each service the team runs itself, such as 0.75 day per self-run Kubernetes cluster and 0.5 day per self-run production database. These are Ænix field estimates and adjustable, but the shape is the point: operations effort scales with nodes and with what you run by hand, not with VM count. A managed-services catalogue moves work from your team to the platform.

**Platform subscription.** Cozystack is open source under Apache 2.0, so there is no per-core or per-VM licence. What you pay for is support and commercial modules. The Ænix Public Cloud Platform subscription — the same tiers cover support for self-run Cozystack — starts at $1,250 per 10 nodes per month on annual billing (Basic); the full matrix is on the [pricing page](/pricing/). [Ænix Private Cloud Platform](/products/private-cloud-platform/) and [Ænix AI Platform](/products/ai-platform/) are quoted per RFP.

**Migration and dual-run.** The calculators use an indicative one-time migration figure of $8,000 plus $140 per VM; the final quote follows scoping. During the move you pay for both environments. The TCO calculator does not price this dual-run by default, so add it yourself.

## Use the right calculator for the question

Two calculators on this site look relevant, and they answer different questions. The [TCO calculator](/tco-calculator/) compares on-prem platforms — VMware, Nutanix, OpenShift, Proxmox, OpenStack and others against Cozystack — and excludes hardware and facilities because they are identical on both sides. Its own methodology lists public cloud as out of scope. Using it to justify a cloud exit would leave out exactly the lines that change.

For a cloud exit, use the [cloud repatriation calculator](/cloud-calculator/) for single workloads and the [Cloud Repatriation TCO Worksheet](/resources/cloud-repatriation-tco-worksheet/) for the whole estate. The worksheet walks through current cloud state, destination architecture, per-workload classification, a five-year trajectory with the break-even point, and a stay / partial / full decision.

One habit from the TCO calculator is worth adopting whatever tool you use: its methodology publishes a sanity table that includes the scenarios where Cozystack loses. A model that cannot show you a losing case has not been tested.

## Stress the assumptions that move the answer

A single TCO number is a forecast with the uncertainty removed. Run at least three scenarios and watch which inputs swing the result.

**Utilisation.** Owned hardware costs the same whether it runs busy or half-empty. If your destination cluster settles at a lower steady-state utilisation than you assumed, the cost per workload rises with it.

**Growth.** Fast growth pulls hardware purchases and refreshes forward; slow growth leaves capacity idle. Both change the cash curve.

**Egress volume.** Because egress grows with backups, analytics and customer traffic, a forecast error here hits the cloud side harder than any other line.

**Discounts.** If you can negotiate a better enterprise discount at renewal, rerun the model with it. Repatriation should win against your best realistic cloud price, not against list price.

**People.** Vary the operations effort. If the case only works when the platform needs almost no engineering time, it does not work.

Report the break-even point and payback for each scenario. A case that pays back in every scenario is strong; one that pays back only in the optimistic one is a negotiation tactic.

## Decide per workload

At portfolio level, the answer is often close to neutral, and that average hides the decision. The largest steady-state workloads usually carry the bulk of the cost case. Small services, elastic spike workloads and anything built deep into one provider's proprietary services often cost more to move than they save.

So classify every workload as repatriate now, repatriate later or stay, and rank by net return and risk. Partial repatriation is a common and valid outcome.

GPU workloads deserve their own row because their economics differ from general compute. Two published case studies show the range. In [From public cloud to bare metal](/case-studies/multicloud-academic-gpu/), an academic-computing SaaS moved off a hyperscaler onto owned bare metal on Cozystack and found GPUs on a sovereign cloud roughly 5× cheaper than the previous setup, accounting for the prior model's margin. In [8xH100 inference on your own bare metal](/case-studies/bare-metal-gpu-inference/), a mobile app moved inference off a per-hour GPU rental and reports 2–3× better GPU efficiency. Both are steady GPU workloads; neither number transfers to a whole estate.

## When repatriation does not pay

Be ready for the model to say "stay". That is the likely answer when workloads are elastic and spiky, when the estate is small and the team is a handful of people, when the architecture depends on hyperscaler-only services, or when nobody will run the destination platform afterwards. In those cases, tune the cloud spend and revisit the model at the next commitment renewal.

## Running the model

Start with the [worksheet](/resources/cloud-repatriation-tco-worksheet/) and the [cloud repatriation calculator](/cloud-calculator/), and fill them in together with finance and platform engineering — each side catches the other's blind spots. If you want a second opinion with a destination architecture attached, the [Platform Readiness Assessment](/services/platform-readiness-assessment/) runs the cost workstream at a fixed price over 14 or 28 days and ends with a per-workload ranking. Engagement details are on the [cloud repatriation page](/solutions/cloud-repatriation/); the open-source platform itself is documented at [cozystack.io](https://cozystack.io), the CNCF Sandbox project Ænix created and co-maintains.
