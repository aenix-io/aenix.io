---
title: "RWX (ReadWriteMany) volumes in Cozystack — native shared storage for your workloads"
description: "Starting with Cozystack v1.0, you can use ReadWriteMany (RWX) persistent volumes out of the box. This means multiple pods and VMs can mount the same volume..."
date: "2026-04-07"
author: "Timur Tukaev"
type: "article"
topics: ["Platform Engineering", "CNCF", "Storage", "DevOps", "Kubernetes", "Cozystack"]
language: "en"
cover_image: "https://cdn-images-1.medium.com/max/1200/1*StrJHMn6Ie1s_vkNrX_-UQ.png"
source_url: "https://blog.aenix.io/rwx-readwritemany-volumes-in-cozystack-native-shared-storage-for-your-workloads-485de0775faa"
---

Starting with Cozystack v1.0, you can use ReadWriteMany (RWX) persistent volumes out of the box. This means multiple pods and VMs can mount the same volume simultaneously — a capability essential for shared filesystems, multi-replica applications, and cross-VM data sharing.

![image](https://cdn-images-1.medium.com/max/1024/1*StrJHMn6Ie1s_vkNrX_-UQ.png)

Under the hood, RWX is powered by LINSTOR + NFS-Ganesha: each RWX PVC automatically provisions a dedicated NFS server backed by replicated block storage, with CiliumNetworkPolicy handling traffic isolation. For tenants, it’s as simple as creating a standard PVC with accessModes: [ReadWriteMany] and storageClassName: nfs.

What this unlocks:
→ Multi-replica deployments sharing persistent state
→ Shared data across multiple VMs in tenant Kubernetes clusters
→ Volume snapshots, expansion, and cloning — all supported per volume
→ No external NFS infrastructure needed — everything runs inside Cozystack

What is Cozystack? Cozystack is a free and open-source PaaS platform and framework for building clouds. It enables you to run a full-featured cloud platform on bare metal with managed Kubernetes, VMs, databases, and storage — all powered by proven CNCF technologies like Talos Linux, KubeVirt, Flux CD, and LINSTOR.

📖 Documentation: [https://cozystack.io/docs/v1/storage/nfs/](https://cozystack.io/docs/v1/storage/nfs/)
🔧 Feature PR: [https://github.com/cozystack/cozystack/pull/2042](https://github.com/cozystack/cozystack/pull/2042)

— -
🌐 Website: [https://cozystack.io](https://cozystack.io)
💻 GitHub: [https://github.com/cozystack/cozystack](https://github.com/cozystack/cozystack)

---

[RWX (ReadWriteMany) volumes in Cozystack — native shared storage for your workloads](https://blog.aenix.io/rwx-readwritemany-volumes-in-cozystack-native-shared-storage-for-your-workloads-485de0775faa) was originally published in [Ænix](https://blog.aenix.io) on Medium, where people are continuing the conversation by highlighting and responding to this story.
