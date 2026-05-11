---
title: "Migrating FreeIPA from CentOS 7 LXC container to Rocky Linux and new COSI driver for SeaweedFS"
description: "Hi there! We are glad to share our last updates."
date: "2024-08-01"
author: "Timur Tukaev"
type: "article"
topics: ["Kubernetes", "Cozystack", "Migration", "Storage", "FreeIPA"]
language: "en"
source_url: "https://medium.com/@tym83/migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-and-new-cosi-driver-for-seaweedfs-be886a6de46a"
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
