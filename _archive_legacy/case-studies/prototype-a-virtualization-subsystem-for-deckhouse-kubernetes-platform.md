---
title: "Prototype a virtualization subsystem for Deckhouse Kubernetes platform"
description: "Development of a Kubernetes-native cloud virtualization system, tailored to integrate with the Deckhouse Kubernetes platform, enabling compatibility with its existing modules."
aliases:
  - "/prototype-a-virtualization-subsystem-for-deckhouse-kubernetes-platform/"
image: "/images/uploads/2023/12/5248ce00-9428-4fb8-9aa7-215209b86d39.webp"
---


## Objective

The goal was to implement cloud system functionality on the Deckhouse Kubernetes platform, ensuring maximum compatibility and management through Kubernetes objects.

## Researched

Several open-source cloud platforms, including OpenStack, OpenNebula, CloudStack, Ganeti, and KubeVirt, were evaluated. After thorough comparison, KubeVirt was chosen as the most suitable solution.

![KubeVirt Architecture](https://miro.medium.com/v2/resize:fit:1200/0*1A2KX0mHjTsez1er.png)

## Implementation

## Outcomes

After the release of the alpha version, the development transferred to a dedicated virtualization team. This included the complete transfer of expertise and assistance in designing the API for the next version.

## Additional Links

- [Deckhouse v1.43 introduces the next generation virtualization system](https://blog.deckhouse.io/deckhouse-v1-43-introduces-the-next-generation-virtualization-system-347bd758021a)
- [KubeVirt PR #7648](https://github.com/kubevirt/kubevirt/pull/7648)
- [KubeVirt PR #7768](https://github.com/kubevirt/kubevirt/pull/7768)

## Presentation
