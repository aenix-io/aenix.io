---
title: "Migrating FreeIPA from CentOS 7 LXC container to Rocky Linux and new COSI driver for SeaweedFS"
description: "Hi there! We are glad to share our last updates."
date: "2024-08-01"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Cozystack", "Migration", "Storage", "FreeIPA"]
language: "en"
source_url: "https://medium.com/@tym83/migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-and-new-cosi-driver-for-seaweedfs-be886a6de46a"
quiz:
  title: "Test yourself: COSI driver for SeaweedFS"
  questions:
    - q: "What does COSI stand for and what does it do?"
      options:
        - { text: "Container Object Storage Interface — unified Kubernetes API for declarative S3-bucket provisioning and access management", correct: true }
        - { text: "Common Open Storage Init", correct: false }
        - { text: "Centralized Open Storage Interface", correct: false }
      explanation: "COSI = Container Object Storage Interface for Kubernetes. It introduces BucketClaim, Bucket, and BucketAccess resources for declarative S3 bucket provisioning and access management — based on the PVC pattern."
    - q: "Which three CRDs does COSI introduce?"
      options:
        - { text: "Pod, Service, Deployment", correct: false }
        - { text: "BucketClaim, Bucket, BucketAccess", correct: true }
        - { text: "Tenant, Namespace, Quota", correct: false }
      explanation: "BucketClaim (request), Bucket (provisioned bucket), BucketAccess (access binding). The pattern is analogous to PersistentVolumeClaim/PersistentVolume/Secret for storage."
    - q: "What did Aenix do with the SeaweedFS COSI driver they developed?"
      options:
        - { text: "Kept it proprietary inside Cozystack", correct: false }
        - { text: "Open-sourced it and gifted it to the SeaweedFS community — moved under the SeaweedFS organisation umbrella", correct: true }
        - { text: "Sold it to Red Hat", correct: false }
      explanation: "Aenix developed the COSI driver in open source and gifted it to the SeaweedFS community. The project moved under the SeaweedFS organisation; the official SeaweedFS chart was expanded to include COSI support."
    - q: "Why was Cozystack adding S3 bucket support relevant to this driver?"
      options:
        - { text: "Coincidence", correct: false }
        - { text: "Cozystack needed S3 buckets for tenants to order automatically from Kubernetes — the COSI driver enables this", correct: true }
        - { text: "It replaces SeaweedFS entirely", correct: false }
      explanation: "Aenix was working on S3 bucket support in Cozystack (PR #131). The COSI driver allows Cozystack tenants to automatically order buckets directly from Kubernetes, instead of provisioning out-of-band."
    - q: "What was the related article in the same announcement about?"
      options:
        - { text: "Migrating FreeIPA from CentOS 7 LXC container to Rocky Linux + cert recovery — by Andrei Kvapil", correct: true }
        - { text: "Cozystack v1.0 release", correct: false }
        - { text: "KubeCon recap", correct: false }
      explanation: "The first part of the post points readers to a long-form FreeIPA migration article by Andrei Kvapil — covering an LXC container on CentOS 7 that had been non-functional for several months, debugging certificates, and migration to Rocky Linux."
---

---

### Migrating FreeIPA from CentOS 7 LXC container to Rocky Linux and new COSI driver for SeaweedFS

Hi there! We are glad to share our last updates.

**First, we published new article** about updating an outdated FreeIPA in a large enterprise. This FreeIPA instance was installed in an LXC container on CentOS 7 and had been non-functional for several months. Our founder, Andrei Kvapil solved this problem like a ninja.

Details: [https://blog.aenix.io/freeipa-tips-and-tricks-migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-debugging-b8b923499b96](https://blog.aenix.io/freeipa-tips-and-tricks-migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-debugging-b8b923499b96)

**Second, we are pleased to introduce the new COSI driver for SeaweedFS**. [COSI](https://container-object-storage-interface.github.io/) is a unified Container Object Storage Interface for Kubernetes. It introduces [new resources](https://github.com/seaweedfs/seaweedfs-cosi-driver/tree/main/examples) such as BucketClaim, Bucket, and BucketAccess for the declarative provisioning of S3 buckets and access management based on the PVC principle.

[We are working](https://github.com/aenix-io/cozystack/pull/131) on adding support for S3 buckets in Cozystack, and this driver will allow you to automatically order buckets directly from Kubernetes.

This is another project that we have developed in open source and are now gifting to the SeaweedFS community. The project has already been moved under the umbrella of the organization, and the official SeaweedFS chart has been expanded to include COSI support.

Details: [https://github.com/seaweedfs/seaweedfs-cosi-driver](https://github.com/seaweedfs/seaweedfs-cosi-driver/)

By [Timur Tukaev](https://medium.com/@tym83) on [August 1, 2024](https://medium.com/p/be886a6de46a).

[Canonical link](https://medium.com/@tym83/migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-and-new-cosi-driver-for-seaweedfs-be886a6de46a)

Exported from [Medium](https://medium.com) on May 11, 2026.
