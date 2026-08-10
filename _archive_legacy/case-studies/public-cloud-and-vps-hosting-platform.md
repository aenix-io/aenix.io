---
title: "Public Cloud and VPS hosting platform"
description: "Development of a cloud virtualization system for VPS hosting and public cloud platform."
aliases:
  - "/public-cloud-and-vps-hosting-platform/"
image: "/images/uploads/2023/12/78f250bb-636e-4db7-a20a-9f2ab1a0b4f8.webp"
---


## Objective

The project aimed to develop a cloud virtualization system for creating VPS hosting and a public cloud platform.

## Implementation

Given the large number of servers, the management of OpenNebula was completely shifted into Kubernetes. This transition was facilitated by the development of the kube-opennebula project, which included fully automatic configuration of OpenNebula with all users, images, and data stores.

A highly-customizable script was used for node configuration, executed by Kubernetes on each node. The storage system initially utilized LINSTOR SDS and was later transitioned to HPE 3par. An extensive API reference was prepared for integration with billing systems and the client's system, covering various scenarios. The project also involved the development of a system for automatic preparation and unification of images. Several storage drivers like linstor_un and 3par were developed, along with a monitoring system and a multitude of plugins.

## Outcomes

The project successfully enabled the maintenance of multiple environments, such as production, devel and staging. The similarity for enviroments allowed for seamless development and integration of new features, significantly enhancing the efficiency and scalability of the cloud infrastructure.

## Screenshots

![Platform Architecture](/images/uploads/2023/12/image.png)

![Management Interface](/images/uploads/2023/12/image-7.png)

## Additional links

- [kube-opennebula on GitHub](https://github.com/kvaps/kube-opennebula)
- [addon-linstor_un on GitHub](https://github.com/OpenNebula/addon-linstor_un)
- [opennebula-images on GitHub](https://github.com/kvaps/opennebula-images)
