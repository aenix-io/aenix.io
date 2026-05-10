---
title: "Research and integration of fast and reliable block storage for Deckhouse Kubernetes platform"
description: "Our task was to find an easy-to-use, reliable block-type storage for Kubernetes. Hence we benchmarked several Open Source solutions to see how they behave under various conditions and ultimately choosing to adopt LINSTOR."
aliases:
  - "/research-and-integration-of-fast-and-reliable-block-storage-for-deckhouse-kubernetes-platform/"
image: "/images/uploads/2023/12/d9c97ad4-81c8-47ec-ad45-0767466a9ca5.webp"
---


## Objective

Prior to implementing a cloud virtualization system, it was essential to establish a reliable block storage solution for the data of virtual machines as well container workloads.

## Researched

In collaboration with experts, we developed specialized testing tool set. We conducted an extensive evaluation of various storage solutions, including Ceph, Mayastor, Vitastor, and LINSTOR. The findings from our testing were publicly released and extensively discussed within the community.

![Comparing Storage Performance](https://blog.palark.com/wp-content/uploads/2022/06/Comparing-Ceph-LINSTOR-Mayastor-and-Vitastor-storage-performance-in-Kubernetes-1024x521.png)

![LINSTOR vs Ceph vs Mayastor vs Vitastor](https://linbit.com/wp-content/uploads/2022/06/Comparing-LINSTOR-Ceph-Mayastor-Vitastor.jpg)

## Implementation

The initial implementation of the module included:

![LINSTOR Module](/images/uploads/2023/12/image-11.png)

![Module Architecture](/images/uploads/2023/12/663cf46e-1330-4827-8abc-f2de892f5965.png)

## Outcomes

The LINSTOR module was successfully implemented and has been operational since the stable release of Deckhouse v1.33. There were detailed training and knowledge transfer sessions, as well as several public presentations.

## Additional links

- [Research and integrate a virtualization platform for Kubernetes](/case-studies/research-and-integrate-a-virtualization-platform-for-kubernetes/)
- [Comparing storage performance: LINSTOR, Ceph, Mayastor, Vitastor](https://blog.palark.com/kubernetes-storage-performance-linstor-ceph-mayastor-vitastor/)
- [LINBIT: Comparing storage solutions](https://linbit.com/blog/comparing-linstor-ceph-mayastor-vitastor-storage-performance-in-kubernetes/)
- [LINSTOR DRBD Grafana Dashboard](https://grafana.com/grafana/dashboards/15917-linstor-drbd/)
- [Deckhouse LINSTOR module documentation](https://deckhouse.io/documentation/v1/modules/041-linstor/)

## Presentation
