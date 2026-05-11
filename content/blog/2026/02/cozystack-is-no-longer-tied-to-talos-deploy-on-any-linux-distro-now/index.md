---
title: "Cozystack is no longer tied to Talos! Deploy on any Linux distro now"
description: "Cozystack is expanding beyond Talos Linux. This means you can now transform any existing K8s cluster — regardless of the underlying Linux…"
date: "2026-02-23"
author: "Timur Tukaev"
type: "tutorial"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Cilium", "Talos", "LINSTOR"]
language: "en"
cover_image: "https://cdn-images-1.medium.com/max/1200/1*nMttTSsu5Os7m1Pku0zBNA.png"
source_url: "https://medium.com/@tym83/cozystack-is-no-longer-tied-to-talos-deploy-on-any-linux-distro-now-dd8cd8b05b7e"
quiz:
  title: "Test yourself: Cozystack on any Linux"
  questions:
    - q: "What does the article say is now possible with Cozystack regarding Linux distributions?"
      options:
        - { text: "Cozystack still only supports Talos", correct: false }
        - { text: "You can transform any existing Kubernetes cluster — regardless of underlying Linux distribution — into a Cozystack cloud platform", correct: true }
        - { text: "Cozystack now requires Ubuntu", correct: false }
      explanation: "Cozystack expanded beyond Talos Linux. Any existing K8s cluster — regardless of underlying Linux distro — can be transformed into a fully featured cloud platform with the entire Cozystack stack."
    - q: "Which one of these is named as a reason to choose Generic Kubernetes over Talos for Cozystack?"
      options:
        - { text: "Talos is faster than every alternative", correct: false }
        - { text: "Corporate compliance requires a pre-approved list of Linux distributions", correct: true }
        - { text: "Talos is no longer supported", correct: false }
      explanation: "Reasons listed: corporate compliance with strict security policies / pre-approved distros, skipping the Talos learning curve, OS-specific requirements (drivers, kernel modules, packages), enhancing existing K8s clusters, infrastructure constraints (some public clouds where replacing the OS isn't an option)."
    - q: "Which Kubernetes installer is named in the step-by-step guide for Ubuntu/Debian?"
      options:
        - { text: "k3s (also kubeadm and RKE2)", correct: true }
        - { text: "Only kops", correct: false }
        - { text: "Only Tanzu", correct: false }
      explanation: "The step-by-step guide installs Cozystack on Ubuntu/Debian using k3s (also kubeadm or RKE2). The method can be adapted to other Linux distros; official guides for more popular distros are planned."
    - q: "Cozystack is part of which CNCF tier?"
      options:
        - { text: "CNCF Graduated", correct: false }
        - { text: "CNCF Sandbox (under Apache 2.0)", correct: true }
        - { text: "CNCF Incubating (final)", correct: false }
      explanation: "Cozystack is a CNCF Sandbox project, distributed under the Apache 2.0 license. (Aenix has also applied for CNCF Incubating, with a decision pending.)"
    - q: "Which storage and networking layers does the announcement explicitly name as part of Cozystack on generic K8s?"
      options:
        - { text: "Linstor storage + Kube-OVN networking + KubeVirt virtualization", correct: true }
        - { text: "Only Ceph + Calico", correct: false }
        - { text: "Just NFS + flannel", correct: false }
      explanation: "The article explicitly names: Linstor storage, Kube-OVN networking, KubeVirt virtualization, DBaaS, and one-click services like Kafka, Cilium, Grafana, Victoria Metrics, etc."
---

---

### Cozystack is no longer tied to Talos! Deploy on any Linux distro now

Cozystack is expanding beyond Talos Linux. This means you can now transform any existing K8s cluster — regardless of the underlying Linux distribution it is running on — into a fully featured cloud platform with the entire Cozystack power: Linstor storage, Kube-OVN networking, KubeVirt virtualization, DBaaS, and a variety of one-click services like Kafka, Cilium, Grafana, Victoria Metrics, and more.

![image](https://cdn-images-1.medium.com/max/800/1*nMttTSsu5Os7m1Pku0zBNA.png)

> ***What is Cozystack***

> *Cozystack is a comprehensive open-source platform for building bare-metal clouds to quickly deploy managed Kubernetes, database-as-a-service (DBaaS), application-as-a-service (AaaS), and virtual machines based on KubeVirt. With it, you can deploy Kafka, FerretDB, PostgreSQL, Cilium, Grafana, Victoria Metrics, and other services with a single click. It also handles GPU workloads in both virtual machines and K8s clusters. Cozystack is a CNCF Sandbox project, distributed under the Apache 2.0 license.*

#### **When should you use Generic Kubernetes for Cozystack?**

- **Corporate compliance:** Your company has strict security policies or a pre-approved list of allowed Linux distributions.
- **Skipping the Talos learning curve:** Perhaps you don’t see the point in mastering a whole new tech or dealing with the unique workflow of Talos Linux. If you’d rather skip retraining your team and stick with the proven technologies you already have deep expertise in, Generic K8s support has you covered.
- **OS-specific requirements:** If your workload requires specific Linux drivers, kernel modules, or system packages unavailable in Talos.
- **Enhancing existing clusters:** If you already have a K8s cluster but need a user-friendly UI, S3-compatible object storage, or the ability to run VMs alongside containers.
- **Infrastructure constraints:** If you are using some public clouds or specific hardware where replacing the underlying OS with Talos Linux is not an option.

#### **Try it yourself**

We’ve prepared [a step-by-step guide](https://cozystack.io/docs/v1/install/kubernetes/generic/) for installing Cozystack on Ubuntu/Debian using k3s (as well as kubeadm or RKE2). This method can be adapted to other Linux distributions, and we plan to release official guides for more popular distros soon.

#### Join the Cozystack Community

- [Telegram](https://t.me/cozystack)
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) (in the [Kubernetes Slack](https://communityinviter.com/apps/kubernetes/community))
- [Community Meeting Calendar](https://calendar.google.com/calendar?cid=ZTQzZDIxZTVjOWI0NWE5NWYyOGM1ZDY0OWMyY2IxZTFmNDMzZTJlNjUzYjU2ZGJiZGE3NGNhMzA2ZjBkMGY2OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t)

By [Timur Tukaev](https://medium.com/@tym83) on [February 23, 2026](https://medium.com/p/dd8cd8b05b7e).

[Canonical link](https://medium.com/@tym83/cozystack-is-no-longer-tied-to-talos-deploy-on-any-linux-distro-now-dd8cd8b05b7e)

Exported from [Medium](https://medium.com) on May 11, 2026.
