---
title: "Kubernetes Deep Dive"
description: "Advanced course for engineers on containerization, networking, storage, security, and GitOps with Cozystack technologies: Talos, LINSTOR, Cilium, KubeVirt, Cluster API, Flux, and other Kubernetes tools."
image: "/images/uploads/2025/07/cover-241.png"
url: "/kubernetes-deep-dive-course/"
hero: true
layout: "course"
---

Advanced course for engineers on containerization, networking, storage, security, and GitOps with Cozystack.

## Course Modules

{{< spoiler title="Module 1: Containerization Under the Hood" >}}
**Topics:**
- Kernel namespaces (PID, NET, MNT, UTS, IPC)
- cgroups v1/v2 and resource limits
- veth pairs, bridges, overlay networks
- iproute2 (ip link|addr|route) and tc
- Manual containerization with nsenter (no Docker)

Outcome: Understand Linux process/traffic isolation, debug network/resource issues, and manually assemble a "container."
{{< /spoiler >}}

{{< spoiler title="Module 2: Image Building & Registry Workflows" >}}
**Topics:**
- OCI image/artifact specs
- Working with registries (Harbor, GHCR, ECR)
- Dockerfile best practices (multi-stage, layer caching)

Outcome: Build secure, optimized images and publish them to repositories.
{{< /spoiler >}}

{{< spoiler title="Module 3: Kubernetes Fundamentals" >}}
**Topics:**
- API objects (Pod → Deployment → ReplicaSet)
- Reconciliation loop: kube-api, scheduler, controller-manager
- etcd and desired state
- CRDs, controller-runtime, operator pattern

Outcome: Describe resources via YAML, troubleshoot lifecycle issues, and write basic controllers.
{{< /spoiler >}}

{{< spoiler title="Module 4: Kubernetes Networking (Core)" >}}
**Topics:**
- CNI plugins and pod network namespaces
- kube-proxy and service networking
- ClusterIP/NodePort/LoadBalancer services
- Service Discovery, DNS, headless services
- ingress-nginx: architecture, annotations, LB

Outcome: Design/debug cluster networking and configure public-facing ingress.
{{< /spoiler >}}

{{< spoiler title="Module 5: Talos Linux Deep Dive" >}}
**Topics:**
- Talos architecture: immutability, secure boot
- Cluster deployment and control-plane upgrades
- talm for configuration management
- Debugging without SSH: talosctl, kubectl-node-shell

Outcome: Deploy/maintain Kubernetes clusters on Talos Linux and troubleshoot node issues.
{{< /spoiler >}}

{{< spoiler title="Module 6: Storage in Kubernetes" >}}
**Topics:**
- CSI architecture, sidecars, VolumeLifecycle
- PV/PVC/StorageClass, reclaim policies, topology-aware volumes
- Snapshots and VolumePopulator
- In-tree vs. CSI drivers

Outcome: Master Kubernetes storage, select drivers, and manage volumes/backups in production.
{{< /spoiler >}}

{{< spoiler title="Module 7: LINSTOR as Kubernetes-Native Storage" >}}
**Topics:**
- DRBD and block device replication
- linstor-controller, satellite, linstor-csi
- Volume/replica/snapshot management
- Quorum, fencing, replica balancing

Outcome: Deploy LINSTOR, ensure HA volumes, and recover from failures.
{{< /spoiler >}}

{{< spoiler title="Module 8: Advanced Kubernetes Networking" >}}
**Topics:**
- Cilium/Kube-OVN: eBPF datapath
- CNI chaining
- MetalLB for external load balancing
- Ingress/egress traffic
- NetworkPolicy (L3/L4 + L7 HTTP)
- Debugging with cilium-dbg, tcpdump -i vxlan

Outcome: Confidently debug Kubernetes networking, enforce security policies, and fix complex issues.
{{< /spoiler >}}

{{< spoiler title="Module 9: RBAC & OIDC" >}}
**Topics:**
- apiserver AuthN/AuthZ
- JWT tokens, certificates
- Keycloak integration
- ServiceAccount and RBAC policies
- oauth-proxy/oidc-proxy

Outcome: Implement SSO authentication and delegate secure access.
{{< /spoiler >}}

{{< spoiler title="Module 10: Kubernetes-Native Virtualization (KubeVirt)" >}}
**Topics:**
- KubeVirt architecture: virt-operator, virt-launcher, libvirt-qemu
- VM lifecycle, hot-plug disks/networks
- Frontend/backend networking
- Storage and live migration

Outcome: Run/debug VMs inside Kubernetes.
{{< /spoiler >}}

{{< spoiler title="Module 11: Kubernetes-in-Kubernetes (Cluster API)" >}}
**Topics:**
- Cluster API: CRDs, providers
- etcd, KubeVirt-CSI, CCM, cluster-autoscaler
- Kamaji, Konnectivity for multi-layer traffic

Outcome: Automate nested Kubernetes cluster lifecycle.
{{< /spoiler >}}

{{< spoiler title="Module 12: GitOps & Application Delivery" >}}
**Topics:**
- CI: buildx, artifact publishing
- CD: ArgoCD vs. FluxCD
- Cozystack's cozypkg for developer workflows

Outcome: Automate CI/CD and release cycles.
{{< /spoiler >}}

{{< spoiler title="Module 13: Observability" >}}
**Topics:**
- Metrics/logs with VictoriaMetrics, Grafana
- Alerting pipeline (IRM via Alerta)
- Incident resolution best practices

Outcome: Master monitoring, logging, and alerting.
{{< /spoiler >}}

{{< spoiler title="Module 14: Cozystack API & Aggregation Layer" >}}
**Topics:**
- Kubernetes API Aggregation Layer
- OpenAPI/Swagger
- Cozystack's Core/System/Apps CRDs

Outcome: Extend Cozystack's platform functionality.
{{< /spoiler >}}

{{< spoiler title="Module 15: Writing Custom Operators" >}}
**Topics:**
- kubebuilder scaffolding, CRD v1
- controller-runtime: reconcile, watches, ownerRef
- Validating/Mutating webhooks
- ChatGPT as a pair-programmer

Outcome: Build operators to automate custom app lifecycles.
{{< /spoiler >}}

{{< spoiler title="Module 16: SeaweedFS & COSI (Object Storage in Kubernetes)" >}}
**Topics:**
- SeaweedFS: master, volume-server, filer-server, S3 gateway
- Replication backends
- COSI (Container Object Storage Interface):
  - S3 bucket provisioning via Kubernetes manifests
  - Temporary credentials for apps
- Debugging with weed shell

Outcome: Deploy S3-compatible storage in-cluster and automate bucket lifecycle.
{{< /spoiler >}}

## Pricing

| Package | Includes | Base Price | Discount | Final Price* |
|---------|----------|-----------|----------|------------|
| Single Module | 1 topic (3h online + HW review) | $400 | — | $400 |
| Any 5 Modules | Custom track | $2,000 | -10% | $1,800 |
| Any 10 Modules | Full DevOps path | $4,000 | -20% | $3,200 |
| Full Course (15) | Complete "Kubernetes Deep Dive" | $6,000 | -25% | $4,500 |

{{< action-buttons primary_text="Enroll Now" primary_url="/contact/" >}}
