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
