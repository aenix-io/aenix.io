---
title: "Highly efficient backup system for virtual machines and databases"
description: "Development of a large-scale backup system for virtual machines. The implementation of this system reduced the cost of storing backup copies by up to 75%!"
aliases:
  - "/highly-efficient-backup-system-for-virtual-machines-and-databases/"
image: "/images/uploads/2023/12/a0dc3433-ffe7-4c92-b2e7-81f8df67a7cc.webp"
---

Development of a large-scale backup system for virtual machines. The implementation of this system reduced the cost of storing backup copies by up to 75%!

## Objective

The goal was to create an efficient backup system capable of reading data in real-time from the disks of virtual machines across several hundred servers and transferring it to a backup servers.

## Researched

## Used technologies

![Backup Architecture](https://miro.medium.com/v2/resize:fit:1200/0*A6SRoMPAkAf-RnRB.png)

![Backup Details](https://miro.medium.com/v2/resize:fit:720/0*uJ7As9uTvB-gvQLe.png)

## Outcomes

This project successfully established a robust and scalable backup solution, enhancing data security and recovery capabilities across a large server network. The use of open-source tools like Restic and the ZFS file system, combined with the orchestration power of Kubernetes, resulted in a highly reliable and efficient backup system suitable for virtual machines backed by block storage.

The same approach was later adapted for the efficient backup of databases, demonstrating its versatility and scalability.

## Additional links

- [Backup storage for thousands of virtual machines using free tools](https://itnext.io/backup-storage-for-thousands-of-virtual-machines-using-free-tools-b3909004bef2)
- [Database backup approach](https://kvaps.medium.com/4bc1e8f083c1)
