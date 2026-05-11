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
quiz:
  title: "Test yourself: RWX volumes in Cozystack"
  questions:
    - q: "Starting from which Cozystack version are RWX (ReadWriteMany) volumes supported out of the box?"
      options:
        - { text: "v0.20", correct: false }
        - { text: "v1.0", correct: true }
        - { text: "v2.0", correct: false }
      explanation: "Starting with Cozystack v1.0, you can use ReadWriteMany (RWX) persistent volumes out of the box. Multiple pods and VMs can mount the same volume simultaneously."
    - q: "What technology stack powers RWX under the hood?"
      options:
        - { text: "NFSv4 + plain Linux NFS server", correct: false }
        - { text: "LINSTOR + NFS-Ganesha — each RWX PVC auto-provisions a dedicated NFS server backed by replicated block storage, with CiliumNetworkPolicy for traffic isolation", correct: true }
        - { text: "iSCSI + multipath", correct: false }
      explanation: "RWX is powered by LINSTOR + NFS-Ganesha. Each RWX PVC automatically provisions a dedicated NFS server backed by replicated block storage. CiliumNetworkPolicy handles traffic isolation between tenants."
    - q: "How does a tenant request an RWX volume?"
      options:
        - { text: "File a ticket with the platform team", correct: false }
        - { text: "Create a standard PVC with accessModes: [ReadWriteMany] and storageClassName: nfs", correct: true }
        - { text: "Use a custom proprietary CRD only available to admins", correct: false }
      explanation: "Tenants create a standard PVC with accessModes: [ReadWriteMany] and storageClassName: nfs. No external NFS infrastructure needed — everything runs inside Cozystack."
    - q: "Which use case is NOT named as unlocked by RWX?"
      options:
        - { text: "Multi-replica deployments sharing persistent state", correct: false }
        - { text: "Shared data across multiple VMs in tenant Kubernetes clusters", correct: false }
        - { text: "GPU live migration between physical hosts", correct: true }
        - { text: "Volume snapshots, expansion, cloning per volume", correct: false }
      explanation: "RWX unlocks: multi-replica deployments sharing persistent state; shared data across multiple VMs in tenant K8s clusters; volume snapshots, expansion, and cloning per volume; no external NFS infrastructure needed. GPU live migration is an unrelated industry-wide limitation."
    - q: "How does the article describe what Cozystack is, in this announcement?"
      options:
        - { text: "A licensed commercial-only product", correct: false }
        - { text: "A free and open-source PaaS platform and framework for building clouds — runs full-featured cloud on bare metal with managed Kubernetes, VMs, databases, storage on Talos / KubeVirt / Flux CD / LINSTOR", correct: true }
        - { text: "A frontend for AWS", correct: false }
      explanation: "The boilerplate: Cozystack is a free and open-source PaaS platform and framework for building clouds. Runs full-featured cloud on bare metal with managed Kubernetes, VMs, databases, and storage — powered by proven CNCF technologies (Talos, KubeVirt, Flux CD, LINSTOR)."
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
