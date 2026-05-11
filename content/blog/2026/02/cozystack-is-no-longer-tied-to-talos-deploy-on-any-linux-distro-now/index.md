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
