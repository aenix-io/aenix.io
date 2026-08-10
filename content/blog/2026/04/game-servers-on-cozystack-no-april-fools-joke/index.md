---
title: "Game Servers on Cozystack: No April Fools’ Joke"
description: "Hello, world! We are the team behindCozystack, an open-source platform for building clouds on your own hardware. We want to explain why we decided to target..."
date: "2026-04-01"
author: "Timur Tukaev"
type: "article"
topics: ["Open Source", "Kubernetes", "CNCF", "Cloud", "Game Servers", "Cozystack"]
language: "en"
cover_image: "https://cdn-images-1.medium.com/max/1200/1*54n_wsW7R9MGslexi-xaLg.png"
source_url: "https://blog.aenix.io/game-servers-on-cozystack-no-april-fools-joke-798704b32998"
quiz:
  title: "Test yourself: Cozystack for game servers"
  questions:
    - q: "How many managed services does Cozystack provide out of the box, according to the article?"
      options:
        - { text: "More than 20", correct: true }
        - { text: "About 5 core managed services", correct: false }
        - { text: "Hundreds, including community add-ons", correct: false }
      explanation: "20+ managed services: databases (PostgreSQL, MariaDB, MongoDB), message queues (Kafka, RabbitMQ), caching (Redis), S3 storage, virtual machines, Kubernetes clusters, networking, load balancers. Everything runs on hardware with no extra virtualization layers."
    - q: "Why does the article argue game servers are a particularly demanding workload?"
      options:
        - { text: "They require constant GPU acceleration on every node", correct: false }
        - { text: "Low latency, unpredictable load, strong isolation are all needed", correct: true }
        - { text: "They depend on closed-source kernel patches and tuning", correct: false }
      explanation: "Latency must be minimal; load fluctuates unpredictably; servers must be reliably isolated. The 'noisy neighbour' virtualisation overhead invisible in business apps becomes immediately noticeable in games."
    - q: "After the Cozystack v1.0 release, what mechanism powers external application connections?"
      options:
        - { text: "Hand-rolled bash scripts run from a bastion host", correct: false }
        - { text: "A direct OCI-registry mirror used by Flux CD", correct: false }
        - { text: "Package and PackageSource resources, apt-style for K8s", correct: true }
      explanation: "After v1.0, the platform moved to package-based architecture with Package and PackageSource resources managed by cozystack-operator. Works like apt for Debian, but for Kubernetes — applications are packaged as Helm charts, published as OCI artifacts, described via ApplicationDefinition CRDs."
    - q: "What is 'cozylex'?"
      options:
        - { text: "An eBPF-based networking plugin for game traffic", correct: false }
        - { text: "A repository implementing managed Minecraft for Cozystack", correct: true }
        - { text: "A storage backend tuned for write-heavy game saves", correct: false }
      explanation: "cozylex is the first external-apps repository (built by Aleksei Sviridkin / @lexfrei) that provides managed Minecraft on Cozystack. MinecraftServer CRD = PaperMC servers with auto-updates/backups/limits; MinecraftPlugin CRD = installs plugins from Hangar with auto-updates."
    - q: "What planned product line will the game-servers work become?"
      options:
        - { text: "Cozystack Lite, a stripped-down edition for small studios", correct: false }
        - { text: "PlayPack, a curated bundle of free game-server charts", correct: false }
        - { text: "Game Server Edition, covering Counter-Strike, Rust, FiveM, etc.", correct: true }
      explanation: "The team plans to expand the approach into Game Server Edition, accept Minecraft as an official example of pluggable application, and add Counter-Strike, Rust, FiveM, Factorio, and others."
---

Hello, world! We are the team behind[Cozystack](https://cozystack.io), an open-source platform for building clouds on your own hardware. We want to explain why we decided to target the game server space and what came of it.

![image](https://cdn-images-1.medium.com/max/1024/1*54n_wsW7R9MGslexi-xaLg.png)

### What Is Cozystack

Cozystack is a platform that turns ordinary servers into a full-fledged cloud. The project is part of CNCF Sandbox, is distributed under the open Apache 2.0 license, and is deployed on bare-metal servers.

Out of the box, the platform provides more than 20 managed services: databases (PostgreSQL, MariaDB, MongoDB, etc.), message queues (Kafka, RabbitMQ), caching (Redis), S3 storage, virtual machines, Kubernetes clusters, networking, and load balancers. Everything runs directly on hardware, with no extra virtualization layers.

### Why Game Servers

We did some research and saw steady demand: hosting providers and gaming communities are looking for alternatives with predictable performance, no lock-in to a specific provider, and no complicated licensing.

Game servers are one of the most demanding workloads: latency must be minimal, the load fluctuates unpredictably, and servers must be reliably isolated from one another. That is exactly the scenario Cozystack is well suited for.

Anyone who has hosted game servers in the cloud knows the problem: noisy neighbors, unpredictable jitter, and latency spikes. Virtualization adds a layer that is invisible in business applications but immediately noticeable in games. Cozystack runs on bare metal: a server gets dedicated resources, network packets are processed as close to the hardware as possible, and data is replicated across nodes, so losing one server does not mean losing the game world.

We looked at what the platform already had and realized most of the infrastructure was ready. S3 for maps and assets. Databases for player data and statistics. Redis for sessions. Message queues for inter-server communication. Load balancers, VPN, scheduled backups. All that remained was to add the games themselves.

### How It Works

Cozystack has an **external-apps** mechanism for connecting external application repositories. After the[v1.0 release](https://cozystack.io/blog/2026/03/cozystack-1-0-release/), it was substantially reworked: the platform moved to a package-based architecture with **Package** and **PackageSource** resources managed by cozystack-operator. In essence, it works like apt in Debian, but for Kubernetes:

- Applications are packaged as Helm charts and published as OCI artifacts
- Each application is described through **ApplicationDefinition** — a CRD that automatically appears in the dashboard
- The user deploys a server via the UI or API, just like any other managed service
- The platform manages the lifecycle: updates, backups, monitoring

Anyone can assemble their own application catalog and connect it to Cozystack without touching the core.

### Cozylex: The First Implementation

The first step was the repository[cozylex](https://github.com/lexfrei/cozylex), prepared by our developer[Aleksei Sviridkin](https://github.com/lexfrei), which implements a managed Minecraft server:

- **MinecraftServer** — a CRD for PaperMC servers with automatic updates, backups, and resource limits
- **MinecraftPlugin** — a CRD for installing plugins from Hangar with automatic updates
- Plugins are attached to servers through label selectors, declaratively

Connecting it to a cluster takes a couple of minutes, after which Minecraft appears in the Marketplace alongside PostgreSQL and Redis.

### What Comes Next

We plan to expand this approach and turn it into a separate line — **Game Server Edition**. In the near term, we plan to accept the Minecraft server as an official example of a pluggable application and update the documentation. Next up are Counter-Strike, Rust, FiveM, Factorio, and more.

### In Summary

Game servers are a good stress test for a platform. If it can reliably handle a workload with strict latency and I/O requirements, it can handle anything.

The Cozystack architecture makes it possible to add new service types without reinventing the infrastructure. Everything needed for operation — backups, monitoring, networking, storage — is provided out of the box.

We welcome contributors. The external-apps mechanism lets you add applications without understanding the platform core — knowing Helm and Kubernetes is enough.

**Links:**

- [Cozystack](https://cozystack.io)
- [GitHub](https://github.com/aenix-io/cozystack)
- [Cozylex](https://github.com/lexfrei/cozylex)
- [Documentation](https://cozystack.io/docs/)

---

[Game Servers on Cozystack: No April Fools’ Joke](https://blog.aenix.io/game-servers-on-cozystack-no-april-fools-joke-798704b32998) was originally published in [Ænix](https://blog.aenix.io) on Medium, where people are continuing the conversation by highlighting and responding to this story.
