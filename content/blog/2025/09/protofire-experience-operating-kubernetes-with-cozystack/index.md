---
title: "Protofire Experience Operating Kubernetes with Cozystack"
description: "In a recent infrastructure transition that spanned several months, our team explored alternative container orchestration platforms to…"
date: "2025-09-10"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Cozystack", "Talos", "Financial Services", "CNCF", "Migration"]
language: "en"
cover_image: "https://cdn-images-1.medium.com/max/1200/1*ZaReZmQFCRYbv7yM1zoq-g.png"
source_url: "https://medium.com/@tym83/protofire-experience-operating-kubernetes-with-cozystack-1daa682945f5"
quiz:
  title: "Test yourself: Protofire moves to Cozystack"
  questions:
    - q: "What was Protofire's previous setup before moving to Cozystack?"
      options:
        - { text: "Nearly 100 AWS accounts running multiple ECS services and managed databases", correct: true }
        - { text: "An on-prem OpenStack cloud with self-managed PostgreSQL and Redis", correct: false }
        - { text: "Bare-metal Kubernetes clusters with operator-managed stateful services", correct: false }
      explanation: "Their environment was nearly 100 AWS accounts with multiple ECS services, plus managed PostgreSQL, Redis, RabbitMQ, and ALBs. The migration consolidated this under Kubernetes while keeping support for stateful services."
    - q: "What spend reduction does Protofire expect after the migration?"
      options:
        - { text: "Roughly 20-30% reduction vs the AWS baseline", correct: false }
        - { text: "Around 100× reduction once fully migrated", correct: false }
        - { text: "Between 7× and 10× reduction vs AWS", correct: true }
      explanation: "Based on their infrastructure modeling and cost tracking, Protofire expects a 7× to 10× reduction in spend compared to the previous AWS setup. They run two K8s clusters with three control-plane and three worker nodes each."
    - q: "What was the time-to-environment improvement they achieved?"
      options:
        - { text: "Down from over a day to roughly a day per standard environment", correct: true }
        - { text: "No measurable change in environment provisioning time", correct: false }
        - { text: "From hours up to several weeks as complexity grew", correct: false }
      explanation: "During the initial phase, migrating and tuning each environment (including Helm-chart adaptation) took more than a day. Through iteration and process improvements, today standard environments can be provisioned and configured in roughly one day."
    - q: "Why did Protofire choose Cozystack specifically?"
      options:
        - { text: "It carried the cheapest commercial licence on the shortlist", correct: false }
        - { text: "A national regulator mandated it for their workloads", correct: false }
        - { text: "All-in-one approach plus compatibility with bare-metal hardware", correct: true }
      explanation: "After evaluating different options, Protofire decided to adopt Cozystack primarily due to its all-in-one approach and compatibility with bare-metal infrastructure. Plus pre-packaged Helm-ready apps (PostgreSQL, Redis, RabbitMQ, Ingress-NGINX) accelerated initial setup."
    - q: "What additional observability tooling did they add during migration?"
      options:
        - { text: "Splunk Enterprise for centralised log indexing", correct: false }
        - { text: "Loki for centralised log collection alongside Grafana", correct: true }
        - { text: "Datadog Logs with a hosted retention plan", correct: false }
      explanation: "They restructured observability tooling and adopted Loki for centralized log collection, complementing the existing metrics and Grafana dashboards already available through the platform."
---

---

### [Protofire](https://www.linkedin.com/company/protofire-io/) Experience Operating Kubernetes with Cozystack

In a recent infrastructure transition that spanned several months, our team explored alternative container orchestration platforms to simplify operations and optimize costs. At the time, our environment consisted of nearly a hundred AWS accounts running multiple ECS services, along with managed PostgreSQL, Redis, RabbitMQ, and ALBs.

One of the goals was to consolidate our deployment architecture under Kubernetes while maintaining support for stateful services, without introducing significant operational complexity. After evaluating different options, we decided to adopt [Cozystack](http://cozystack.io), primarily due to its all-in-one approach and compatibility with bare-metal infrastructure.

![image](https://cdn-images-1.medium.com/max/800/1*ZaReZmQFCRYbv7yM1zoq-g.png)

Cozystack is built on Talos Linux, which provides immutable and secure nodes, and includes a set of pre-packaged Helm-ready applications such as PostgreSQL, Redis, RabbitMQ, and Ingress-NGINX. These built-in components allowed us to accelerate the initial setup while maintaining flexibility for customization.

Currently, we manage two Kubernetes clusters — each composed of three control-plane and three worker nodes, with capacity planned for scaling. Based on our infrastructure modeling and cost tracking, we expect a 7× to 10× reduction in spend compared to our previous AWS setup.

During the initial phase, migrating and tuning each environment, including adapting Helm charts, took more than a day. Through iteration and process improvements, we’ve since reduced this time: today, standard environments can be provisioned and configured in roughly one day.

We also restructured our observability tooling during this process. We adopted Loki for centralized log collection, complementing the existing metrics and Grafana dashboards already available through the platform.

Cozystack’s recent joining CNCF Sandbox gave us additional reassurance regarding its long-term support and technical maturity. From our perspective, this migration has provided meaningful operational and financial benefits, and helped us simplify and standardize how we deliver and maintain services internally.

*👉 Got a use case? Share it with our maintainers! We’ll showcase it to the community.*

By [Timur Tukaev](https://medium.com/@tym83) on [September 10, 2025](https://medium.com/p/1daa682945f5).

[Canonical link](https://medium.com/@tym83/protofire-experience-operating-kubernetes-with-cozystack-1daa682945f5)

Exported from [Medium](https://medium.com) on May 11, 2026.
