---
title: "kubectl-node-shell plugin updated to v1.11.0"
seo_title: "kubectl-node-shell plugin v1.11.0 released"
description: "kubectl-node-shell v1.11.0 opens a shell on any cluster node through the Kubernetes API, with new namespace options, image pull secrets and volume mounts."
date: "2024-12-02"
cover_image: "/img/blog/covers/kubectl-node-shell-plugin-updated-to-v1110.jpg"
author: "Andrei Kvapil"
type: "announcement"
topics: ["Kubernetes", "DevOps", "Open Source", "Cloud"]
language: "en"
source_url: "https://medium.com/p/3c3bb0a77f25"
canonical: "https://medium.com/p/3c3bb0a77f25"
---

We have updated the kubectl-node-shell plugin to [v1.11.0](https://github.com/kvaps/kubectl-node-shell/releases/tag/v1.11.0).

> The kubectl-node-shell plugin allows you to log into a node in a cluster without SSH, using only the Kubernetes API. This is convenient for debugging any managed Kubernetes cluster. For example, AWS does not provide SSH access to nodes when using managed K8s.

- Added options: no-mount, `-- no-net`, `-- no-ipc`,`--no-uts` to disable automatic entry into the specified Linux namespaces.
- Added variable: `KUBECTL_NODE_SHELL_IMAGE_PULL_SECRET_NAME` to specify a pullSecret for pulling the image.
- Added ability to attach volumes using the `-m` option; attached volumes can be found in the `/opt-pvc` directory.

*Many thanks to* [*jmcshane*](https://github.com/jmcshane)*,* [*huandu*](https://github.com/huandu)*, and bernardgut who added these wonderful features to the new version of the plugin.*

By [Andrei Kvapil](https://medium.com/@kvaps) on [December 2, 2024](https://medium.com/p/3c3bb0a77f25).

[Canonical link](https://medium.com/p/3c3bb0a77f25)

Exported from [Medium](https://medium.com) on October 5, 2026.
