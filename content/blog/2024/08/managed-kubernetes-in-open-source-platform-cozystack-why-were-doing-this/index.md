---
title: "Managed Kubernetes in open source platform Cozystack: why we’re doing this"
description: "Managed Kubernetes Service is a Kubernetes API in your cloud, allowing your users to request services and utilize resources from your…"
date: "2024-08-23"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Cozystack", "Multi-tenancy", "Observability", "Terraform"]
language: "en"
cover_image: "https://cdn-images-1.medium.com/max/1200/0*2NqXHHzohclI0ZPo.png"
source_url: "https://medium.com/@tym83/managed-kubernetes-in-open-source-platform-cozystack-why-were-doing-this-94d42c7c48da"
quiz:
  title: "Test yourself: managed Kubernetes in Cozystack"
  questions:
    - q: "Why does Kubernetes require a separate cluster per user in the managed-Kubernetes model?"
      options:
        - { text: "Kubernetes operates on a single-tenant basis", correct: true }
        - { text: "Billing pipelines are simpler with one cluster per user", correct: false }
        - { text: "Helm releases conflict when shared across tenants", correct: false }
      explanation: "Managed Kubernetes provides a Kubernetes API in your cloud for users. Kubernetes operates single-tenant, meaning a separate cluster is required per user — that is the architectural assumption."
    - q: "According to the article, what kind of services do users now expect from every modern cloud?"
      options:
        - { text: "Just VMs and block storage for self-management", correct: false }
        - { text: "Only AI inference endpoints with token-based pricing", correct: false }
        - { text: "Kubernetes, object storage, monitoring, managed databases", correct: true }
      explanation: "Leading cloud providers reshaped expectations: users expect Kubernetes, Simple Storage Services, Monitoring, Managed Databases, etc. Just selling VMs is no longer enough — users build infrastructure from these services as building blocks."
    - q: "What does the article identify as the typical mistake when teams build managed Kubernetes themselves?"
      options:
        - { text: "Picking Cilium over Calico for the cluster CNI", correct: false }
        - { text: "Data stored inside VMs and broken cluster auto-scaling", correct: true }
        - { text: "Over-allocating GPUs to small inference jobs", correct: false }
      explanation: "Common mistakes from misunderstanding Kubernetes concepts and end-user needs: data stored inside VMs (which breaks the K8s flexibility model) and cluster auto-scaling that doesn't actually work properly. The result is most Kubernetes installations are not fully functional as managed services."
    - q: "Why is administering managed Kubernetes-as-a-service rare expertise?"
      options:
        - { text: "Hyperscalers hold patents over the operator pattern", correct: false }
        - { text: "Certification requires 10+ years of CKA-level practice", correct: false }
        - { text: "Few know how to build a full managed K8s service", correct: true }
      explanation: "Many know how to USE Kubernetes; fewer know how to ADMINISTER it on premises; and almost no one knows how to BUILD a full-featured managed Kubernetes service. The gap is structural; this is why most attempts replicate hyperscaler outcomes only partially."
    - q: "What change in market behaviour is the article observing?"
      options:
        - { text: "A decrease in traditional VM sales in favour of smarter services", correct: true }
        - { text: "Users buying more virtual machines per workload than before", correct: false }
        - { text: "A return to physical servers and bare-metal-only deployments", correct: false }
      explanation: "The article opens with: have you noticed a decrease in traditional virtual-machine sales? Users want smarter services to deploy applications, manage infrastructure as code with tools like Terraform, and consume managed services as building blocks rather than handling manual VM and database configuration."
---

---

### Managed Kubernetes in open source platform Cozystack: why we’re doing this

![image](https://cdn-images-1.medium.com/max/800/0*2NqXHHzohclI0ZPo.png)

**Managed Kubernetes Service** is a Kubernetes API in your cloud, allowing your users to request services and utilize resources from your cloud. Kubernetes operates on a single-tenant basis, meaning a separate cluster is required for each user.

In the modern world, Kubernetes has become the de facto standard for deploying server workloads. Nearly every modern application is developed with the understanding that it will be running in Kubernetes. This shift has established new standards for infrastructure provisioning.

Have you noticed a decrease in traditional virtual machine sales? Users are now seeking smarter services to deploy their applications. They want to manage their infrastructure as code using modern tools like Terraform. Users no longer need to handle the manual configuration of virtual machines and databases. They can simple purchase managed services and not worry about anything. They can build their infrastructure out of such services using them just like building blocks.

Leading cloud providers have changed the way of providing infrastructure so the industry will never be the same again. Now, users expect a specific set of services from every modern cloud: Kubernetes, Simple Storage Services, Monitoring and Managed Databases, and so on.

![image](https://cdn-images-1.medium.com/max/800/0*Y7h9hdzJb4-mTPIe.png)

Kubernetes plays a key role here because it offers a convenient and unified way to consume cloud resources and running user workloads in any cloud. For the user, Kubernetes is the same everywhere. But not for the administrator. As Kubernetes is a popular service among cloud providers, many people know how to work with it. Fewer people know how to administer it on premises, and almost no one knows how to build a full-featured managed Kubernetes service.

Many try to replicate the success of leading cloud providers, but most Kubernetes installations are not fully functional. As a result of such integrations they make many mistakes, eg. the data usually stored inside virtual machines breaking the flexibility, and cluster auto-scaling does not work properly. This is all due to a lack of understanding of Kubernetes concepts and the needs of end-users.

We have been using Kubernetes in production environments and managing it for many years. We know what your users realy want and what truly managed Kubernetes should be like. Our portfolio includes cases of organizing automatic Kubernetes provisioning on bare-metal servers, as well in virtual machines. We have extensive experience in building private and public clouds for Kubernetes, and we know how to do it right. Entrust us with the creation of your own managed Kubernetes service for your users and become a reliable Kubernetes provider today.

By [Timur Tukaev](https://medium.com/@tym83) on [August 23, 2024](https://medium.com/p/94d42c7c48da).

[Canonical link](https://medium.com/@tym83/managed-kubernetes-in-open-source-platform-cozystack-why-were-doing-this-94d42c7c48da)

Exported from [Medium](https://medium.com) on May 11, 2026.
