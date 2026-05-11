---
title: "Deploy Cozystack on any Kubernetes with Ansible"
description: "For teams that can’t adopt the full Cozystack stack with Talos Linux — whether due to corporate policies, existing infrastructure, or OS-specific..."
date: "2026-03-04"
author: "Timur Tukaev"
type: "tutorial"
topics: ["DevOps", "Open Source", "Ansible", "Kubernetes", "Platform Engineering", "Cozystack"]
language: "en"
cover_image: "https://cdn-images-1.medium.com/max/1200/1*TRGnafeMsVruWze2D0p6DA.png"
source_url: "https://blog.aenix.io/deploy-cozystack-on-any-kubernetes-with-ansible-b28e61f586f9"
quiz:
  title: "Test yourself: Cozystack via Ansible"
  questions:
    - q: "What is the official Ansible collection that deploys Cozystack on generic Kubernetes called?"
      options:
        - { text: "cozystack.installer", correct: true }
        - { text: "cozystack.bootstrap", correct: false }
        - { text: "aenix.deploy", correct: false }
      explanation: "cozystack.installer automates complete Cozystack deployment on generic Kubernetes (k3s, kubeadm, or RKE2) — turning a single ansible-playbook run into a fully configured cloud platform."
    - q: "Which Kubernetes installers does the Ansible collection support?"
      options:
        - { text: "k3s, kubeadm, or RKE2", correct: true }
        - { text: "Only k3s with embedded etcd", correct: false }
        - { text: "Only kubeadm with stacked control plane", correct: false }
      explanation: "cozystack.installer supports k3s, kubeadm, and RKE2 — the three most common generic Kubernetes installation paths on regular Linux distributions."
    - q: "Which audience is named as the FIRST target user for the Ansible installer?"
      options:
        - { text: "Hobbyists running Kubernetes on home-lab hardware", correct: false }
        - { text: "Universities running short-lived teaching clusters", correct: false }
        - { text: "Regulated environments with a mandated Linux distribution", correct: true }
      explanation: "Four target audiences listed: (1) regulated environments with mandated Linux distros, (2) existing K8s clusters wanting Cozystack capabilities without rebuild, (3) multi-environment teams (define config once), (4) CI/CD workflows (integrate Cozystack provisioning into automation)."
    - q: "How does the article suggest installing the collection?"
      options:
        - { text: "apt-get install cozystack from the OS package archive", correct: false }
        - { text: "helm install cozystack via the official Helm chart", correct: false }
        - { text: "ansible-galaxy collection install from the GitHub repo", correct: true }
      explanation: "The install command: `ansible-galaxy collection install git+https://github.com/cozystack/ansible-cozystack.git`. The repository includes a complete example — from bare Ubuntu nodes to a running Cozystack platform in one command."
    - q: "Why does this exist alongside the Talos-based Cozystack default?"
      options:
        - { text: "Talos was deprecated by the upstream maintainers", correct: false }
        - { text: "For teams that can't adopt Talos due to policy or infra constraints", correct: true }
        - { text: "Ansible is faster than the Talos installer in every benchmark", correct: false }
      explanation: "For teams that can't adopt full Cozystack stack with Talos — due to corporate policies (mandated Linux distros), existing infrastructure (already-built K8s clusters), or OS-specific requirements (specific kernel modules / drivers / packages) — the Ansible collection brings the same Cozystack experience to existing clusters."
---

For teams that can’t adopt the full Cozystack stack with Talos Linux — whether due to corporate policies, existing infrastructure, or OS-specific requirements — we now offer an official Ansible collection that brings the same Cozystack experience to your existing clusters.

![image](https://cdn-images-1.medium.com/max/1024/1*TRGnafeMsVruWze2D0p6DA.png)

cozystack.installer automates the complete Cozystack deployment on generic Kubernetes — k3s, kubeadm, or RKE2 — turning a single ansible-playbook run into a fully configured cloud platform.

📌 Who is this for
1. Regulated environments: Your company mandates a specific Linux distribution and replacing the OS is not an option.
2. Existing clusters: You already have Kubernetes running and want to add Cozystack capabilities — S3 storage, DBaaS, VMs, a management UI — without rebuilding from scratch.
3. Multi-environment teams: Define your config once and replicate across dev, staging, and production with a single playbook.
4. CI/CD workflows: Integrate Cozystack provisioning into your existing automation pipelines.

👉 Try it yourself

```
ansible-galaxy collection install git+https://github.com/cozystack/ansible-cozystack.git
```

The repository includes a complete example — from bare Ubuntu nodes to a running Cozystack platform in one command.

🔗 [https://github.com/cozystack/ansible-cozystack](https://github.com/cozystack/ansible-cozystack)

---

[🤖 Deploy Cozystack on any Kubernetes with Ansible](https://blog.aenix.io/deploy-cozystack-on-any-kubernetes-with-ansible-b28e61f586f9) was originally published in [Ænix](https://blog.aenix.io) on Medium, where people are continuing the conversation by highlighting and responding to this story.
