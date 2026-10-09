---
title: "Cozystack joins the CNCF Kubernetes AI Conformance program"
seo_title: "Cozystack joins CNCF Kubernetes AI Conformance"
description: "Cozystack v1.6.1 was accepted into the CNCF Kubernetes AI Conformance program for Kubernetes v1.35, with all 12 requirements implemented. What was tested and what it means."
slug: "cozystack-cncf-kubernetes-ai-conformance"
date: "2026-10-09"
cover_image: "/img/blog/covers/cozystack-cncf-kubernetes-ai-conformance.jpg"
author: "Timur Tukaev"
hreflang_de: "/de/blog/2026/10/cozystack-cncf-kubernetes-ai-conformance/"
type: "announcement"
topics: ["Cozystack", "CNCF", "AI and ML", "GPU", "Kubernetes"]
language: "en"
companion_landing: "/products/ai-platform/"
companion_label: "See Ænix AI Platform →"
direct_answer: "**Cozystack was accepted into the CNCF Kubernetes AI Conformance program on 14 September 2026: version 1.6.1, on Kubernetes v1.35, with all 12 requirements of the program implemented.** It is listed alongside GKE, EKS, AKS, OpenShift, RKE2 and other platforms. The program checks that a Kubernetes platform provides what AI and ML workloads rely on — accelerator access, inference traffic management, gang scheduling, operators for training frameworks, and observability — and Cozystack's evidence, including two limitations, is published on cozystack.io."
quick_facts:
  - label: "Program"
    value: "CNCF Kubernetes AI Conformance, Kubernetes v1.35"
  - label: "Version"
    value: "Cozystack v1.6.1"
  - label: "Accepted"
    value: "14 September 2026"
  - label: "Requirements"
    value: "12 of 12 implemented"
  - label: "Evidence"
    value: "cozystack.io/compliance/ai-conformance/"
faq:
  - q: "Is this the same as being a Certified Kubernetes distribution?"
    a: "No, it builds on it. Certified Kubernetes checks that the API behaves like Kubernetes; AI Conformance checks that the platform offers the capabilities AI and ML workloads need on top of that. Cozystack holds both."
  - q: "Does it mean any GPU and any AI framework is supported?"
    a: "No. It confirms a set of platform capabilities. In tenant Kubernetes clusters, the NVIDIA GPU Operator exposes MIG partitions on cards that support MIG, and HAMi provides time-sliced sharing; virtual machines get whole GPUs through passthrough or NVIDIA vGPU with your NVIDIA licence. The details are on the Ænix AI Platform page."
  - q: "Who made the submission?"
    a: "Ænix engineers prepared the submission for the Cozystack project, which Ænix created and co-maintains with maintainers from other companies."
---

When a GPU cloud or an enterprise ML team shortlists platforms, one of the first filters is now a list kept by the CNCF: which Kubernetes platforms have shown that they provide what AI workloads actually depend on. Being missing from that list says "unverified", whatever the platform can do. **Since 14 September 2026, Cozystack is on it: version 1.6.1 was accepted into the CNCF Kubernetes AI Conformance program for Kubernetes v1.35, with all 12 requirements implemented.**

The v1.35 list includes GKE, EKS, AKS, OpenShift, RKE2, Rafay and k0rdent among others — the platforms our customers compare us with.

## What the program checks

Plain Kubernetes conformance answers whether a cluster behaves like Kubernetes. AI Conformance asks a narrower, more practical question: can you run training and inference on it without assembling the missing pieces yourself? Its twelve requirements cover how accelerators are exposed, shared and kept with the right drivers, how inference traffic is routed, whether a distributed job can be scheduled all at once or not at all, whether node pools with GPUs scale with demand, whether operators for frameworks like Ray work with their webhooks and custom resources, and whether accelerator and workload metrics reach the monitoring stack.

Nine of the requirements are met by how Cozystack is configured out of the box. The other three we proved by running them on a tenant cluster with Kubernetes v1.35.6:

- **Inference traffic.** Through the Gateway API with Cilium, a weighted 80/20 split between two model versions sent 26 of 30 requests to the first and 4 to the second, and header-based routing sent requests to the version named in the header.
- **Gang scheduling.** With Kueue and a queue quota of two CPUs, a job of two pods was admitted whole; a job of four pods that did not fit the quota stayed at zero pods instead of starting half of them and holding the resources.
- **Operators.** Kueue's controller and webhooks and KubeRay brought a Ray cluster to ready.

## What we wrote down as limitations

Conformance submissions are public, and we kept ours honest. Two points are recorded in it as they are. The default KubeRay installation does not deploy its own webhooks, so the webhook part of the operator requirement rests on Kueue, whose mutating webhook suspends batch jobs until they are admitted. And Dynamic Resource Allocation is served by the API, but no DRA driver is installed, so device classes and resource slices stay empty until a driver is added.

The full evidence, requirement by requirement, is on [cozystack.io](https://cozystack.io/compliance/ai-conformance/), and our overview of Cozystack's conformance results is on the [Kubernetes conformance page](/compliance/kubernetes-conformance/).

## What it means for Ænix customers

Every tenant cluster on the [Ænix AI Platform](/products/ai-platform/) and the other Ænix platforms is created by the same Cozystack engine that passed the program, so the capabilities checked here are the ones you get. For a GPU cloud selling capacity to its own customers, this is the mark tenders increasingly ask for; how such a cloud is built on Cozystack is described on the [GPU as a service page](/solutions/gpu-as-a-service/).

The submission was prepared by Ænix engineers for the Cozystack project, which Ænix created and co-maintains with maintainers from other companies.
