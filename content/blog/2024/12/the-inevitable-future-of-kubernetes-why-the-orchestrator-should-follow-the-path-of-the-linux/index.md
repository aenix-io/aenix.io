---
title: "The Inevitable Future of Kubernetes: Why the Orchestrator Should Follow the Path of the Linux…"
description: "At KubeCon + CloudNativeCon in Chicago on November 9, Tim Hockin, one of the early developers of Kubernetes, delivered a talk (here’s a…"
date: "2024-12-27"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Talos"]
language: "en"
cover_image: "https://cdn-images-1.medium.com/max/1200/0*25rAkaFo6sux9O2L"
source_url: "https://medium.com/@tym83/the-inevitable-future-of-kubernetes-why-the-orchestrator-should-follow-the-path-of-the-linux-367f49916712"
quiz:
  title: "Test yourself: Kubernetes-as-the-Linux-kernel argument"
  questions:
    - q: "Whose KubeCon talk does the article respond to as the entry point?"
      options:
        - { text: "Tim Hockin — proposing a \"complexity budget\" for Kubernetes", correct: true }
        - { text: "Liz Rice — eBPF in production", correct: false }
        - { text: "Kelsey Hightower — Kubernetes the Hard Way retrospective", correct: false }
      explanation: "Tim Hockin, an early Kubernetes developer, gave a talk at KubeCon Chicago (November 9) proposing a \"complexity budget\" — each new feature consumes part of a fixed allocation. The article extends rather than rejects the argument."
    - q: "What is the central analogy of Timur's piece?"
      options:
        - { text: "Kubernetes should evolve like the Linux kernel — a complex foundation managed by specialists, with platforms playing the role of Linux distributions", correct: true }
        - { text: "Kubernetes should follow the Apache HTTPd model", correct: false }
        - { text: "Kubernetes should split into a microkernel architecture", correct: false }
      explanation: "A sysadmin doesn't bypass distributions to assemble Linux from scratch. Kubernetes should be treated the same way: the kernel-equivalent is managed by specialists; opinionated platforms (open-source or proprietary) are the \"distributions.\""
    - q: "Of the components the article lists for a Linux distribution, which is named first?"
      options:
        - { text: "A package manager", correct: true }
        - { text: "A graphical installer", correct: false }
        - { text: "A bootloader", correct: false }
      explanation: "The article lists a package manager as the first key component, followed by kernel + GNU utilities, dedicated repositories, defined release cycles, kernel optimizations, CLI/GUI tools, and a maintaining community."
    - q: "Which CNCF body is named as a candidate for initiating the strategic discussion about Kubernetes' future as a kernel-equivalent?"
      options:
        - { text: "TAG App Delivery + Technical Oversight Committee + maintainers + sponsors", correct: true }
        - { text: "CNCF Foundation Board only", correct: false }
        - { text: "The Cloud Native Buildpacks team", correct: false }
      explanation: "The article names TAG App Delivery, the Technical Oversight Committee, maintainers, and major Kubernetes sponsors as the bodies that should initiate the discussion. Engaging the market and creating guidelines for platform development would follow."
    - q: "What does the article identify as the bottleneck under the current \"Kubernetes as standalone software\" framing?"
      options:
        - { text: "CPU performance", correct: false }
        - { text: "Reliance on engineers and their skillsets — building/maintaining infra requires specialists in Kubernetes itself", correct: true }
        - { text: "Storage costs", correct: false }
      explanation: "Under the current framing, infrastructure depends on engineers who fully understand Kubernetes — a scarce specialty. Few people understand the Linux kernel deeply, but the industry doesn't expect it because distributions abstract that away. The same shift is needed for Kubernetes."
---

---

### The Inevitable Future of Kubernetes: Why the Orchestrator Should Follow the Path of the Linux Kernel

At KubeCon + CloudNativeCon in Chicago on November 9, Tim Hockin, one of the early developers of Kubernetes, [delivered a talk](https://www.youtube.com/watch?v=WqeShpaztZY) (here’s a [summary](https://thenewstack.io/tim-hockin-kubernetes-needs-a-complexity-budget/)) highlighting one of the orchestrator’s major challenges: the relentless growth in complexity. His main point was straightforward: Kubernetes is being applied to an ever-widening range of specialized use cases, such as machine learning.

As a result, user demands on K8s keep increasing, developers strive to keep up, and Kubernetes becomes so complex that it creates two significant problems:

1. Kubernetes developers themselves struggle to navigate the growing feature set and functionality of the project. The codebase becomes overly intricate even for those building it.
2. Engineers implementing and maintaining Kubernetes in organizations find it increasingly difficult to master all its options and configurations.

To address this, Tim proposed introducing a “complexity budget.” This approach would allocate a fixed “budget” for the project’s complexity, where each new feature in a release would consume part of that budget. In his view, this could help control the project’s complexity.

![image](https://cdn-images-1.medium.com/max/800/0*25rAkaFo6sux9O2L)

While this idea is reasonable, I believe the broader ecosystem — including Kubernetes developers, businesses leveraging it, and engineers deploying it — needs to rethink their expectations of an orchestrator in the coming years.

Today, Kubernetes is often seen as a standalone and (loosely speaking) self-sufficient piece of software. Yes, to use it in production, you’ll need to integrate various cloud-native tools like CNI, service meshes, and others. But Kubernetes is still commonly perceived as an application — some even call it the “OS for the cloud.”

In my view, this understanding of Kubernetes is leading the industry into a dead end. It’s clear that the complexity of the orchestrator will continue to grow, and it’s equally clear that Kubernetes will be applied to an increasing number of domains, all of which stand to benefit significantly from its adoption. To remain a successful product and maintain its leadership, Kubernetes must adapt to meet the demands of these domains.

The market needs to start viewing Kubernetes as akin to the Linux Kernel. What do I mean by this? A sysadmin at a small or medium-sized company would hardly consider bypassing a Linux distribution to assemble their own from scratch using the Linux kernel — it’s simply not the norm. Everyone understands the value of choosing a ready-made distribution tailored to their specific needs.

There are general-purpose distributions that work reasonably well across different use cases, but there’s also a vast array of specialized distributions like Talos Linux, Kali Linux, VyOS, DSL, or SLAX, each optimized for particular tasks.

Moreover, distributions come with convenient package managers, making it easy to add the software you need.

Kubernetes needs a similar paradigm shift: instead of being seen as a singular product, it should evolve into the foundation for a diverse ecosystem of tailored distributions, each built to serve specific workloads and industries efficiently.

Broadly speaking, a Linux distribution is made up of several key components:

- A package manager.
- A kernel bundled with GNU utilities.
- Dedicated repositories with vetted and tested software.
- Defined release cycles.
- Kernel optimizations tailored for specific use cases.
- A mix of command-line and graphical interfaces, configuration managers, and other tools.
- A community and/or development team that ensures the system is continuously updated and maintained.

In my view, this model is something the CNCF and the broader market should adopt. To fully meet the diverse needs of modern technological domains, Kubernetes must evolve. It should stop being perceived as a standalone piece of software and transition into the equivalent of the Linux Kernel: a complex foundation known and directly managed by only a limited number of specialists.

In this paradigm, platforms — both open-source and proprietary — will serve as the “Linux distributions” of Kubernetes. These platforms would deliver Kubernetes bundled with an array of extensions, including both cloud-native tools that enhance its core functionality and additional services like databases or Kafka. This would allow the platform to be used directly for building environments tailored to specific tasks.

For example, if you want to run ML/AI workloads, you could choose from a dozen “distributions” pre-configured for this purpose. These would come with Kubernetes and related components optimized with default settings and user-configurable options to fit your needs. Alternatively, you could opt for a general-purpose distribution that can adequately handle a broader range of workloads.

Under such a model, SREs and other technical specialists wouldn’t need to dive deep into Kubernetes internals or handle full-stack infrastructure configuration. Instead, they could focus on solving business-critical, product-oriented challenges — leaving the foundational infrastructure concerns to the platform.

Today, we’re far from this vision. While numerous cloud platforms exist, they’re often perceived as alternatives to vanilla Kubernetes. They’re compared not only against each other but also against Kubernetes itself or against infrastructure built manually from “source components.” Engineers frequently reject pre-built platforms, arguing that they’re poorly designed and claiming they can build something better from scratch.

We also often hear concerns like, “I know how everything works here, but over there, it’s a black box — or worse, an open box where the code is indecipherable.” This mindset reflects the current struggle to move beyond Kubernetes as a standalone tool and embrace it as the kernel of a new ecosystem.

A shift toward a “Linux Kernel for Kubernetes” approach could unlock greater efficiency, scalability, and specialization, making Kubernetes platforms more accessible and impactful for a wide range of industries.

Though many engineers recognize they could configure everything manually, they still choose opinionated distributions because these solutions efficiently handle a defined scope of routine tasks. This frees engineers to focus on solving business-critical challenges rather than infrastructure minutiae. Business leaders and owners also appreciate these preconfigured distributions for their ability to streamline operations and drive value.

However, I believe this view of Kubernetes limits both the orchestrator’s evolution and the growth of the cloud-native ecosystem as a whole. The reliance on engineers and their skillsets becomes the bottleneck for building and maintaining infrastructure.

How many engineers fully understand the intricacies of the Linux Kernel or the specific optimizations applied to a particular Linux distribution? The reason the industry doesn’t expect such knowledge is that the market has accepted Linux distributions as standard units of business value. Breaking this abstraction down into the kernel or its individual components serves no practical purpose.

Of course, large enterprises sometimes create their own distributions — Microsoft, for instance, developed Azure Linux. But for the vast majority of companies, this isn’t necessary or feasible.

Shifting the perception of Kubernetes from a standalone solution to a central component of larger platforms requires several significant steps:

1. CNCF groups like TAG App Delivery, the Technical Oversight Committee, maintainers, and major Kubernetes sponsors could initiate discussions on the future of Kubernetes. These talks should evaluate both opportunities and risks, ultimately shaping a strategic roadmap. Transitioning Kubernetes from standalone software to a component of broader platforms would require major adjustments.
2. CNCF groups should actively engage the market, advocating for a diverse ecosystem of platforms. This includes encouraging competition with existing players and creating guidelines or standards (possibly through a new working group) to simplify platform development. Kubernetes’ future as a central component hinges on enabling other developers to build platforms around it efficiently.
3. Talented engineers and companies that currently build internal platforms could shift toward developing public platforms, whether open-source or proprietary. This diversification would expand the market and foster innovation.
4. Major players in different industries could collaborate on platforms tailored to their unique requirements or create new ones optimized for their markets.
5. CNCF and other open-source organizations should adopt and nurture such projects, helping them grow and allocating time to promote this approach at flagship events like KubeCon.

The result would be a robust ecosystem of ready-made platforms that comprehensively address the needs of companies building public clouds (service and hosting providers) as well as private clouds, bare-metal deployments, and air-gapped environments (end-user companies).

I welcome feedback, clarifications, suggestions, or any thoughts you might have. This isn’t a fully developed, market-tested concept — it’s the beginning of a public dialogue about a critical problem. Let’s discuss and refine these ideas together: timur.tukaev@aenix.io.

By [Timur Tukaev](https://medium.com/@tym83) on [December 27, 2024](https://medium.com/p/367f49916712).

[Canonical link](https://medium.com/@tym83/the-inevitable-future-of-kubernetes-why-the-orchestrator-should-follow-the-path-of-the-linux-367f49916712)

Exported from [Medium](https://medium.com) on May 11, 2026.
