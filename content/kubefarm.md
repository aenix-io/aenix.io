---
title: "Kubefarm"
description: "Kubefarm combines everything you need to spawn multiple Kubernetes-in-Kubernetes clusters, along with the network booting infrastructure."
url: "/kubefarm/"
hero: true
---

Kubefarm combines everything you need to spawn multiple Kubernetes-in-Kubernetes clusters, along with the network booting configurations to simplify bootstraping your physical servers from scratch.

The project's goals are to provide a simple and unified way to deploy Kubernetes on bare metal.

![Kubefarm Architecture](https://gist.githubusercontent.com/kvaps/c969930f561b24c1f4c09802d5e225c8/raw/6347f81814d1eb56ccd2d4cbdb2a8617965cfa9d/kubefarm.png)

## Fast & Simple

There is no installation process, so you just run your physical servers, andd during boot, they download the system image over the network and run it! Similar to docker containers that have overlayfs root.
You don't have to think about redundancy and performing updates for your OS anymore! A simple reboot is enough to apply the new image!

## Declarative

You can spawn new Kubernetes clusters and PXE-servers just using Helm, very quickly! Just provide all the parameters in the wonderfully simple Yaml format.

## Customizable

You can build your own image for the physical servers simply by just using a Dockerfile. The default image is based on Ubuntu. You can put anything you need! Simply add any additional packages and custom kernel modules, and initiate the build!

## Secure

You can deploy as many clusters as you want! All of them will have a separate control-plane, non visible to its consumers. Cert-manager will take care of the certificates.

## Known Components

The whole setup consists of a few components:

1. **Kubernetes-in-Kubernetes** – Kubernetes control-plane packed to a Helm-chart. It is based on the official Kubernetes static pod manifests and using the official Kubernetes docker images.
2. **Dnsmasq-controller** – A simple wrapper for Dnsmasq, which automates the configuration using Kubernetes CRDs and will perform leader-election for DHCP high availability.
3. **LTSP** – Network boot server and boot time configuration framework for clients. It allows you to boot the OS over the network, directly to RAM and perform initial configurations for each server.

## Screenshots

![Kubefarm Node Booting Process](/images/uploads/2023/12/Screenshot-2023-12-19-at-21-19-03-Kubefarm-Node-Booting-Process.png)

![Kubefarm Installing Kubernetes-in-Kubernetes](/images/uploads/2023/12/Screenshot-2023-12-19-at-21-17-44-Kubefarm-Installing-Kubernetes-in-Kubernetes.png)

## Integrations

Read the article: [Kubernetes-in-Kubernetes and the WEDOS PXE bootable server farm](/case-studies/kubernetes-in-kubernetes-and-pxe-bootable-server-farm/)

[REQUEST A DEMO →](/contact/) · [SOURCE CODE →](https://github.com/kubefarm/kubefarm)
