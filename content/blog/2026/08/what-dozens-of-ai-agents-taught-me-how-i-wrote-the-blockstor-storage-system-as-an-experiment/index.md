---
title: "What dozens of AI agents taught me: how I wrote the Blockstor storage system as an experiment"
description: "Andrei Kvapil on building Blockstor as a clean-room, Kubernetes-native block storage orchestrator by driving up to 60 AI agents with TDD and hard exit gates."
date: "2026-08-10"
author: "Andrei Kvapil"
type: "article"
topics: ["Kubernetes", "LINSTOR", "Storage", "AI/ML", "Cozystack", "Open Source"]
language: "en"
cover_image: "https://cdn-images-1.medium.com/max/1200/1*ep6GUdvlFLIwsXN-U0ovnQ.png"
source_url: "https://blog.aenix.io/what-dozens-of-ai-agents-taught-me-how-i-wrote-the-blockstor-storage-system-as-an-experiment-921f7d3a1137"
hreflang_de: /de/blog/2026/08/was-mich-dutzende-ki-agenten-gelehrt-haben-blockstor-speichersystem/
---

---

A couple of months ago I decided to run an experiment: build a clean-room implementation of LINSTOR from scratch, working only from its references and public API types. It started as a Friday joke. I wanted to spend as little time on it as possible, leave it running in the background, and see where it went. The point was to find out how far a modern model can get on its own, with no human in the loop.

![image](https://cdn-images-1.medium.com/max/800/1*ep6GUdvlFLIwsXN-U0ovnQ.png)

Spoiler: full autonomy didn’t happen, and I ended up wrestling with the project quite a bit. But the process pulled me in completely, and the end result beat every expectation I had.

> People in the community kept asking how it actually went. Fair question — building this taught me a great deal about driving models effectively, and it turned up a pile of working methods and patterns that have since made me much more productive in everyday work too.

### What Blockstor is

I called the project Blockstor. It’s a block device orchestrator. Roughly: you request a replicated volume of the size you need, and that volume gets created on several nodes in ZFS or LVM and set up for replication with DRBD — a smart, network-aware take on RAID 1. The system supports snapshots, replica reallocation, resize, automatic failover, and more.

Blockstor is not a storage system designed and written on a blank page. I built the experiment on LINSTOR — a mature distributed block storage manager that I’ve run in production myself for years.

LINSTOR was close to an ideal storage system for me, because its API types are Kubernetes-like. Its backend logic, though, is organized in a rather peculiar way. The main problem, as I see it, is the request-based model: for most API calls it goes out to the nodes in real time and polls their current state to build a response. To my mind that’s an unacceptable pattern for a distributed system, because it doesn’t hold up at scale. The absence of a reconciliation loop also makes automatic recovery hard. I’m not going to second-guess the developers’ decisions — I’m sure they had their reasons. But given how committed I am to Kubernetes patterns, I asked myself how I — an experienced architect and developer — would write a system like this in Kubernetes-native logic.

Rewrites from one language to another aren’t rare, by the way. That, for example, is how the rusternetes project came about: Kubernetes being rewritten from Go to Rust. But how is that even possible? Kubernetes has an enormous codebase with an enormous number of person-hours in it. How do you convince yourself that the resulting “AI slop” works correctly? And can you rely on it at all, let alone run it in production?

### TDD

The answer lies in how Kubernetes itself is developed in the open. Free, community-driven projects have a body of established practice, and contributors do their best to follow it.

All kinds of people contribute to projects like these, at every skill level. That makes tests critical: tests are what keep functionality someone contributed from breaking later. Say you land a new feature, it passes every test, and it goes into the project. Later someone lands another feature. If a test for your feature fails while theirs is being checked, that means the new functionality has a problem that breaks yours — and the system automatically refuses to let the change through. Over time, tests in public projects have become so important that they’re now valued more highly than the code itself. Tests like these are exactly what makes rewriting X in Y possible.

The rusternetes project claims:

> *Actively conformance-tested against the official Kubernetes e2e test suite — currently passing 94% of conformance tests (415/441) across 160 rounds of testing.*

So passing the tests is the primary yardstick for whether a project counts as a Kubernetes replacement.

> *When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck.*
>
> *— The famous [duck test](https://en.wikipedia.org/wiki/Duck_test)*

### Hooks and setup

For the same reason, the first thing I did was force the model into test-driven development (TDD), where tests are written before the implementation. Tests let you pin down the conformance requirements you need. They also give me confidence that new functionality arriving during development won’t break what already works.

On a colleague’s advice I wired in golangci-lint right away and made it mandatory for the model to run all code through it. [@lexfrei](https://github.com/lexfrei) — the colleague in question — argues that this step saves a substantial number of tokens.

### The exit gate and a deterministic result

This is probably the first and most important lesson: you can tell a model “keep writing until the tests pass”, and that’s a good condition on the artifact it produces. That’s exactly the method I used to build this project. With one catch: I had no tests, because LINSTOR doesn’t publish a test suite for its own functionality.

All I had to go on was years of running LINSTOR, dozens of my own talks and articles, and the Apache 2.0 code of projects in the LINSTOR ecosystem — golinstor, the Container Storage Interface (CSI) driver, Piraeus-operator, and their API contracts. LINSTOR itself is licensed under GPL, which rules out using its code to build an Apache 2.0 project on top of it. That was the central challenge, and it’s precisely why I went the clean-room route.

So my main job became defining those exit gates. Get them right and I don’t have to police the whole resulting codebase: if the code satisfies the conditions I set myself, that is the evidence the job is done.

### The API as a contract

I like the type definitions LINSTOR uses in its API. On top of that, both the official CSI driver and Piraeus-operator work with those types, and I had no wish to rewrite either of them.

From experience, designing APIs is one of the most painful jobs in this profession. You can always change backend logic. Ship one breaking change to the API and everything falls apart on the client side. So an API should change rarely, in exceptional cases only — and the risk of getting it wrong at the very start is high. That’s why I decided to use exactly the types the original project uses, and map them onto Kubernetes-first CustomResourceDefinition (CRD) types.

While building Cozystack and selling solutions based on it, we’ve run into the same question from prospects more than once: what’s the story with your API? What if we put you into production, build a solution around you, and then your API changes and we have to rewrite our half of the project?

As a reminder: LINSTOR’s code is published under GPLv3, and I planned to publish Blockstor under Apache 2.0. Reusing the original code was off the table. So the first task was to find compatible contracts in the Kubernetes tooling around it: the [golinstor](https://github.com/LINBIT/golinstor) library, linstor-csi, and Piraeus-operator, all distributed under Apache 2.0, plus the official LINSTOR documentation, licensed under CC BY-SA.

That gave me my first contract: the API must be compatible with the LINSTOR Go library, linstor-csi, and Piraeus-operator.

### The test environment

The model needed somewhere to work and somewhere to test what it produced. For the test environment I picked a beefy bare-metal node and a generated test suite that brought up a Kubernetes cluster on Talos inside virtual machines (VMs) and deployed Blockstor into the cluster. That choice was deliberate: Blockstor needs the DRBD module, and DRBD has a habit of hanging when it’s configured wrong, so I needed a fast way to stand up and recreate a broken environment. Blockstor’s architecture also stores configuration as Kubernetes CRDs, so using Talos closed the question of bootstrapping Kubernetes itself.

### The first result

When the first proof of concept (PoC) was ready, the model had built me a working prototype, guided only by the sources above and its own dataset. For the interaction model, though, it had implemented the very same request-based model as the original LINSTOR — presumably picked up from the project’s documentation. And it already worked! I could talk to the API using the official CLI, though there were hundreds of bugs and gaps.

To fix that, I asked the model to freeze the API contracts as tests and rewrite the logic on controller-runtime, the way I needed it. With a clear, deterministic goal, the architecture that came back began to resemble what I actually wanted: fully asynchronous, with the API translator as a separate pluggable module.

Later I had the model implement a set of end-to-end (e2e) tests that requested volumes through the official CSI plugin and the Kubernetes kubernetes-csi/csi-test framework. In other words, the model kept working until Blockstor provisioned volumes and snapshots through standard Kubernetes abstractions. After a while, I had a working prototype. The system was still a long way from stable, though, which left me with a question: how do you reach the stability I needed when there are no tests to start from?

This is where all my material went in — my articles on debugging LINSTOR, my talks, my Claude Code debugging skills, our plunger scripts integrated into Cozystack, and bugs reported on GitHub. I made the model study all of it and compile a set of issues that had to be tested and that our system had to satisfy. Out came a huge Markdown file. I reviewed it and sent the model off to test and fix every problem it had caught, on the test rig. There were many such iterations, and each one took a colossal amount of time. Most of the time the model would bring up the environment, run tests, fix errors, re-provision the environment — and all of that took time.

Eventually I started asking how to speed the process up.

### Speeding up development

That’s where the idea of parallelizing agents came from. Some problems could be closed out at the unit-test level. Others could only be verified on a real environment. Running the same set of bugs through again and again, I arrived at this method:

1. I ask one agent to gather the references and put together a plan of sorts for the bugs.
2. Once I have the huge document, I ask the model to dispatch a batch of agents, each working a specific bug.
3. In the code, every agent gets its own isolated environment and its own worktree, where it submits its fixes.
4. Each agent’s job is to study the problem, bring up an environment, prepare a fix and tests, and hand all of it back to the main agent.
5. The main agent pulls the work from every agent into the main tree — and that repeats for several iterations.
6. In the end, the number of agents running at once reached 60: 30 at the unit-test level, 30 on e2e in a concrete environment.

After a while the project started to look like something you could actually use. Plenty of things still weren’t stable.

### The marathon continues

While nursing this whole zoo along, I was already doing integration testing myself and checking the results by hand. I’d ask Claude for access to an environment, drive the linstor CLI manually, and try to reproduce the bugs, of which there were still plenty.

At that point I had to stop building large blocks and start digging into far more meticulous testing of the user journey. The bulk of the problems went away once I made the agents implement tests using the official CLI and laid out the user journey for Day-2 operations from the official LINSTOR documentation. In some places, though, the model started spinning its wheels: over all that time it never got every test passing reliably, and I had to step in personally. Drawing on what I know, I asked it to walk me through each problem, then put a set of leading questions to it about the architecture.

### The fine-tuning stage

A lot of my questions came down to the asynchronous nature of the controllers. DRBD is by nature fussy about when, how, and at what point configuration gets applied, so it was critical to build a stable state machine — one that would let the reconciliation loop through to a specific action only when the conditions were met.

The main problem here was snapshot logic. To create a snapshot, LINSTOR first freezes I/O at the DRBD level, then sends the command simultaneously to the several nodes holding the backing device in ZFS. Once the operation succeeds, LINSTOR unfreezes DRBD. All of it has to happen instantly, and on error the state has to roll back automatically so that the container or VM never blocks while working with its data.

The second problem was how to skip the initial sync of a new replica. I knew the observable behavior from years of operating LINSTOR: the first replica records its current generation identifier, and later replicas take that as their starting value and sync from there.

First I tried to reconstruct the exact command sequence from observed behavior alone, running operations against a live controller and capturing the commands. But the mechanics aren’t documented publicly, and observation on its own didn’t add up. So I fell back on the clean-room technique. One agent — the “dirty room” — reconstructed a functional specification from the original sources: which commands run, and under what conditions. It recorded those functional facts and nothing else, carrying over no code and no expression of it. The second agent — the “clean room” — had no access to anyone else’s sources in the first place, and implemented the approach from scratch, strictly from the specification.

One more problem was consistent node-id allocation — every DRBD replica needs a unique number in the cluster, from 1 to 8 — along with allocating TCP ports for replication, which in the current implementation is no longer tied to DRBD and is handed out from a per-node pool instead. This is exactly where the state machine above paid off.

### Building the CI system

By now it was clear the experiment was reaching its final stage, and I started thinking about the project’s future. To finish it and get to production, we needed a serious continuous integration (CI) system that would guarantee no untested code in the codebase. Given the volume of tests, we couldn’t let a run stretch over several hours, so they had to be parallelized the same way.

And we built one: for every pull request it ran a big pile of tests across six or seven runners in parallel and returned “ok” or “not ok”.

I worked in that mode for several more rounds, until CI was genuinely green and stable. Then we switched from local worktrees to pull requests on GitHub.

### The final stage

Data loss is not acceptable, so before declaring the project finished I had to check thoroughly that Blockstor behaves correctly and reliably on that front. Reading and reviewing all the generated code was beyond both my energy and my capacity. On the other hand, Blockstor — like LINSTOR — is essentially an orchestrator. The data itself is stored by ZFS and DRBD, and I had no doubts about their reliability. What mattered was confirming that the controller really does configure resources correctly and survives dropouts.

But how do you establish whether the current code can be trusted with production? It’s an ambiguous and difficult question. And how do you get a deterministic answer to it? Here I used one more pattern I worked out over the course of the project.

My colleague @lexfrei had mentioned earlier that models are terrified of being told their actions could lead to serious financial losses. I decided to use that as an exit gate. I launched an agent responsible for releasing the code to production and had it work under conditions where its life and financial well-being “depended” on the final result. It drew up an acceptance plan with a long list of items, including a 24-hour burn-run on real infrastructure. A second agent tried to satisfy those requirements. That went on for several more days and several releases, until the agent in charge of shipping to production finally gave its blessing.

A system nobody uses can’t be called stable, though. So the next step was integrating Blockstor with Cozystack. Our test suite covers many functions at once: requesting volumes with and without DRBD, RWX, snapshots, and other details. The new agent’s job was to prepare a draft pull request, turn the tests green, and get through the final stage.

As of July 15, 2026, that pull request isn’t merged yet — but there’s a good chance you’ll soon have a new Kubernetes-native storage backend in Cozystack. Watch this space.

> **Editor’s note (September 2026):** Blockstor is still a separate experimental project — [github.com/cozystack/blockstor](https://github.com/cozystack/blockstor), Apache 2.0 — and it does not ship in Cozystack. LINSTOR/DRBD via Piraeus remains the storage Cozystack ships and its default backend. Blockstor sits on the roadmap as an opt-in backend for 2027.

### The main takeaway

Blockstor still has experimental status. But the experience let me speed up and automate work on other projects considerably, and I now apply it every day.

Plenty of people still think of AI as an autocomplete tool. For me that stopped being true a long time ago. AI-first development isn’t occasionally asking a model to write a function. It’s rebuilding your entire engineering process around agents, context, tests, skills, plans, review, and automation.

Working that way, you can take on tasks that used to look too big for a small team — experimenting with a Kubernetes-native implementation of a LINSTOR-class storage system, for instance. But it only works on one condition: you need discipline. Without a plan, AI creates chaos far faster than a human can. With a plan, tests, agents, and proper review, AI becomes a force multiplier for engineering.

And this, I think, is what building complex infrastructure looks like from here on: not one engineer against an enormous codebase, but an engineer as the architect of a process, with a swarm of specialized agents working around them. The engineer’s job isn’t to watch each agent. It’s to build a system where the agents watch themselves and come to a human only with what genuinely needs one.

### Join the community

- [Blockstor on GitHub](https://github.com/cozystack/blockstor)
- [Cozystack on GitHub](https://github.com/cozystack/cozystack)
- Telegram [group](https://t.me/cozystack)
- Slack [group](https://kubernetes.slack.com/archives/C06L3CPRVN1) (Get invite at [https://slack.kubernetes.io](https://slack.kubernetes.io/))
- [Community Meeting Calendar](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

---

[What dozens of AI agents taught me: how I wrote the Blockstor storage system as an experiment](https://blog.aenix.io/what-dozens-of-ai-agents-taught-me-how-i-wrote-the-blockstor-storage-system-as-an-experiment-921f7d3a1137) was originally published in [Ænix](https://blog.aenix.io) on Medium, where people are continuing the conversation by highlighting and responding to this story.
