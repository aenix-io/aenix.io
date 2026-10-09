---
title: "Plugin kubectl-node-shell auf v1.11.0 aktualisiert"
seo_title: "kubectl-node-shell v1.11.0 veröffentlicht"
description: "kubectl-node-shell v1.11.0 öffnet eine Shell auf jedem Cluster-Node über die Kubernetes-API – neu sind Namespace-Optionen, Image Pull Secrets und Volume-Mounts."
slug: "kubectl-node-shell-v1-11-0"
date: "2024-12-02"
cover_image: "/img/blog/covers/de/kubectl-node-shell-v1-11-0.jpg"
author: "Andrei Kvapil"
type: "announcement"
topics: ["Kubernetes", "DevOps", "Open Source", "Cloud"]
language: "de"
hreflang_en: "/blog/2024/12/kubectl-node-shell-plugin-updated-to-v1110/"
---

Wir haben das Plugin kubectl-node-shell auf [v1.11.0](https://github.com/kvaps/kubectl-node-shell/releases/tag/v1.11.0) aktualisiert.

> Mit dem Plugin kubectl-node-shell melden Sie sich ohne SSH auf einem Node im Cluster an – allein über die Kubernetes-API. Das ist praktisch, um beliebige Managed-Kubernetes-Cluster zu debuggen. AWS etwa bietet bei Managed K8s keinen SSH-Zugang zu den Nodes.

- Neue Optionen: no-mount, `-- no-net`, `-- no-ipc`,`--no-uts`, mit denen sich der automatische Eintritt in die jeweiligen Linux-Namespaces abschalten lässt.
- Neue Variable: `KUBECTL_NODE_SHELL_IMAGE_PULL_SECRET_NAME` legt ein pullSecret für das Ziehen des Images fest.
- Volumes lassen sich jetzt mit der Option `-m` einhängen; die eingehängten Volumes liegen im Verzeichnis `/opt-pvc`.

*Herzlichen Dank an* [*jmcshane*](https://github.com/jmcshane)*,* [*huandu*](https://github.com/huandu) *und bernardgut, die diese großartigen Funktionen zur neuen Version des Plugins beigesteuert haben.*

Von [Andrei Kvapil](https://medium.com/@kvaps) am [2. Dezember 2024](https://medium.com/p/3c3bb0a77f25).

[Kanonischer Link](https://medium.com/p/3c3bb0a77f25)

Exportiert von [Medium](https://medium.com) am 5. Oktober 2026.
