---
title: "Kubernetes-in-Kubernetes and PXE bootable server farm"
description: "The comprehensive data center automation project, implementing infrastructure-as-code, stateless PXE-based server farm, software-defined storage, and declarative workload management."
aliases:
  - "/kubernetes-in-kubernetes-and-pxe-bootable-server-farm/"
image: "/images/uploads/2023/12/d0ef24a4-35e7-435c-9d1d-e19c81b3de75.webp"
---


## Objective

This project aimed to maximize the efficiency of WEDOS's data centers, with a focus on utilizing oil cooling technology and automating server management processes.

At the time of implementation, WEDOS operated two data centers. The second data center, fully built with oil cooling, was designed primarily for the Top-load HPE Moonshot 1500 Chassis, each housing 45 HPE ProLiant m710x Server Blades.

The entire data center was constructed using these servers.

![WEDOS Data Center](/images/uploads/2023/12/wedos5.jpg)

![WEDOS Oil Cooling](/images/uploads/2023/12/wedos6-1.jpg)

![WEDOS Servers](/images/uploads/2023/12/wedos4.jpg)

## Implementation

A distinctive feature of the implemented system was its stateless automatic provisioning. Servers booted from a network-boot server and connected to the assigned Kubernetes cluster, which then scheduled user workloads on them. Some servers were dedicated to cloud platform, while others managed hosting workloads like web servers, databases, and mail servers. Due to stateless nature the servers can be simple updated by reboot operation, during next-booting process they will fetch new images from the network-boot server.

To manage the entire infrastructure, the Kubefarm project was developed. It facilitated the launch of Kubernetes control planes for user servers, provided DHCP configuration, and operated a network boot server for node loading.

![Kubefarm Architecture](https://kubernetes.io/images/blog/2021-12-22-kubernetes-in-kubernetes-and-pxe-bootable-server-farm/scheme04.svg)

![ArgoCD Applications](/images/uploads/2023/12/argocd02.png)

## Outcomes

The result was a fully managed infrastructure-as-a-code. System images for servers were compiled using Dockerfile too, allowing seamless cluster updates and convenient management through a specially developed utility, moonshotctl. This approach significantly enhanced the data center's operational efficiency and resource management.

The project was open sourced, and the expertise was transferred as much as possible to the infrastructure team, where the project is used and developed to this day.

## Demonstration

![Kubernetes Blog Post](/images/uploads/2023/12/Screenshot-2023-12-24-at-23-53-22-Kubernetes-in-Kubernetes-and-the-WEDOS-PXE-bootable-server-farm.png)

## Additional Links

- [Kubernetes Blog: Kubernetes-in-Kubernetes and PXE bootable server farm](https://kubernetes.io/blog/2021/12/22/kubernetes-in-kubernetes-and-pxe-bootable-server-farm/)
- [Kubefarm on GitHub](https://github.com/kubefarm/kubefarm)
- [Kubernetes-in-Kubernetes on GitHub](https://github.com/kubefarm/kubernetes-in-kubernetes)

## Presentations

- [Configuring routing for MetalLB in L2 mode](https://itnext.io/configuring-routing-for-metallb-in-l2-mode-7ea26e19219e)
