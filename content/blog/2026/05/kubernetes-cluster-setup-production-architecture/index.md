---
title: "Production Kubernetes cluster setup — architecture decisions, sizing, and operations in 2026"
description: "This is the long-form companion to our Kubernetes consulting services page. It walks through the architecture decisions that matter when setting up..."
date: "2026-05-01"
author: "Aenix Team"
type: "article"
topics: ["OpenShift", "Kubernetes", "Cozystack", "KubeVirt", "Talos", "Sovereignty"]
language: "en"
companion_landing: "/services/kubernetes-consulting/"
quiz:
  title: "Test yourself: production Kubernetes setup"
  questions:
    - q: "Why does the article call distribution choice \"structural\"?"
      options:
        - { text: "It is usually the most expensive single line item", correct: false }
        - { text: "It governs ops model, tenancy, vendor, and cost path", correct: true }
        - { text: "Only CNCF-graduated distros are allowed in production", correct: false }
      explanation: "Distribution choice (vanilla / Cozystack / OpenShift / Rancher / managed) is architectural, not just tooling. It governs the operational model, multi-tenancy approach, storage and networking integration, vendor relationship, and long-term cost trajectory. Getting it wrong is expensive to undo."
    - q: "For most multi-tenant deployments in 2026, which multi-tenancy pattern does the article identify as the default?"
      options:
        - { text: "Hard multi-tenancy via a Tenant CRD", correct: true }
        - { text: "Soft multi-tenancy with namespaces and RBAC", correct: false }
        - { text: "A dedicated cluster per individual tenant", correct: false }
      explanation: "Most 2026 multi-tenant deployments use the Tenant CRD pattern — strong isolation without per-tenant cluster overhead. Cozystack ships this out of the box. Cluster-per-tenant is only used when full physical isolation is required."
    - q: "Which CNI does the article identify as the new default for multi-tenant deployments in 2026?"
      options:
        - { text: "Flannel — simple host-gw networking", correct: false }
        - { text: "Calico — BGP and policy enforcement", correct: false }
        - { text: "Cilium — eBPF, policies, and observability", correct: true }
      explanation: "Cilium has converged as the 2026 default. Its network policies integrate with the multi-tenancy model, observability is native, and it carries the CNCF Graduated badge — network policies plus observability plus service mesh in one."
    - q: "For DR specifically, what production pattern does the article recommend on top of Velero?"
      options:
        - { text: "Velero alone is sufficient for typical DR cases", correct: false }
        - { text: "Per-app patterns like PostgreSQL PITR on top of Velero", correct: true }
        - { text: "Cloud-provider volume snapshots used exclusively", correct: false }
      explanation: "Velero handles Kubernetes-native backup/restore; per-app patterns (PostgreSQL point-in-time recovery, etc.) layered on top give you the recovery point objectives that DR cases actually need."
    - q: "In the bare-metal deployment default for ingress and load balancing, which combination is named?"
      options:
        - { text: "AWS ELB plus NGINX ingress controller", correct: false }
        - { text: "F5 BIG-IP plus Istio service mesh", correct: false }
        - { text: "MetalLB plus Cilium for L2 and L7", correct: true }
      explanation: "Bare-metal deployments default to MetalLB (layer-2 load balancing) plus Cilium (layer-7). Service mesh (Istio/Linkerd) is for advanced traffic management on top."
---

**This is the long-form companion to our [Kubernetes consulting services page](/services/kubernetes-consulting/). It walks through the architecture decisions that matter when setting up Kubernetes for production — distribution choice, networking, storage, identity, observability — and the operational practices that keep a cluster reliable. Written for the platform engineers and architects making these decisions.**

Most Kubernetes-setup tutorials get you a cluster. They don't get you a production-ready cluster. The difference is the dozen architectural decisions that don't show up in a "kubectl apply" workflow but that determine whether your cluster operates well at scale or becomes a permanent maintenance burden.

This article covers what those decisions actually are.

## Decision 1: distribution choice

The question "which Kubernetes distribution" looks like a tooling decision. It's actually an architectural decision because it determines:

- Operational model (managed vs self-managed control plane)
- Multi-tenancy approach
- Storage and networking integration
- Vendor relationship (open-source vs commercial)
- Long-term cost trajectory

Common 2026 options:

- **Vanilla Kubernetes (kubeadm / Cluster API)** — maximum control, maximum operational responsibility. Right for organizations with strong platform-engineering capability.
- **Cozystack** — open-source, CNCF Project, multi-tenant + virtualization (KubeVirt). Right for service providers, sovereign-cloud builders, regulated multi-tenant.
- **OpenShift / OKD** — Red Hat commercial / community. Right for enterprises already on Red Hat with established procurement relationship.
- **Rancher / RKE2** — SUSE-backed, multi-cluster management. Right for distributed cluster fleets.
- **Talos** — minimal Linux + Kubernetes only. Right as the OS layer underneath Cozystack or vanilla Kubernetes.
- **Hyperscaler-managed (EKS / AKS / GKE)** — control plane managed; you operate workloads. Right when sovereignty isn't a constraint and operational simplicity beats cost.

Distribution choice is structural; getting it wrong is expensive to undo.

## Decision 2: multi-tenancy

Kubernetes ships with namespaces, not multi-tenancy. The question is how to bridge the gap.

Patterns:

- **Soft multi-tenancy (namespaces + RBAC)** — single cluster, multiple namespaces, RBAC to separate. Simplest, least isolation. Acceptable for trusting tenants (BUs of one organization).
- **Hard multi-tenancy (Tenant CRD)** — Kubernetes-native tenant abstraction, with namespace, quotas, RBAC, observability scope, audit trail. Right for service-provider model or regulated multi-tenancy. **Cozystack** ships this out of the box.
- **Cluster per tenant** — physical isolation. Highest assurance, highest operational cost. Right for customers requiring full isolation (high-stakes regulated, classified).

The choice depends on the trust model and isolation requirements. Most multi-tenant deployments in 2026 use Tenant CRD pattern — strong isolation without per-tenant cluster overhead.

## Decision 3: networking (CNI)

CNI choice in 2026 has converged on:

- **Cilium** — eBPF-based, network policies + observability + service mesh in one. Default for new deployments. CNCF Graduated.
- **Calico** — long-standing, BGP-friendly, strong on network policies.
- **Flannel** — simpler, less feature-rich.
- **Cloud-provider CNIs** — AWS VPC CNI, Azure CNI, GCP — when running in cloud.

For production multi-tenant deployments, Cilium is increasingly the default — its network policies integrate with the multi-tenancy model and observability is native.

## Decision 4: storage

Storage in Kubernetes is a separate operational discipline. Options:

- **LINSTOR (DRBD)** — replicated block storage. Production-grade for stateful workloads. Cozystack default.
- **Rook + Ceph** — object + block + file storage. Heavier operational footprint; powerful when justified.
- **Longhorn** — Rancher-led replicated block storage. Easier than Ceph, less mature than LINSTOR.
- **Vendor SAN / hyperconverged** — VMware vSAN, NetApp, Pure Storage. Operational handoff to vendor; cost ceiling.
- **Cloud-provider storage** — EBS, Azure Disks, GCP PD — when cloud-managed.

For production stateful workloads on bare metal, LINSTOR or Ceph are the realistic choices. Cozystack ships LINSTOR; it's been validated in production.

## Decision 5: identity and secrets

Workload identity in Kubernetes:

- **SPIFFE/SPIRE** — open-source, workload identity standard. Increasingly default for service-to-service auth.
- **Cloud-provider workload identity** — AWS IAM Roles for Service Accounts, Azure AD Workload Identity, GCP Workload Identity. Locks identity to the cloud provider.
- **OIDC + service accounts** — Kubernetes-native, federated with workforce identity (Keycloak, Okta).

Secrets management:

- **External Secrets Operator** + cloud-provider secret stores (AWS Secrets Manager, Azure Key Vault).
- **HashiCorp Vault** — for organizations already on Vault.
- **Sealed Secrets** — for GitOps-friendly encrypted-at-rest secrets in Git.

The right combination depends on your existing identity infrastructure.

## Decision 6: GitOps engine

Two production-grade options:

- **Argo CD** — UI-rich, plugin ecosystem, multi-tenancy via projects.
- **Flux** — closer to upstream Kubernetes, Helm-controller-native, lighter operational footprint.

Both are CNCF Graduated. Cozystack uses Flux. The choice depends on team familiarity and operational style preferences.

## Decision 7: observability stack

Three serious options for self-hosted:

- **VictoriaMetrics + VictoriaLogs** — low-overhead, single-binary, performant at scale. Cozystack default.
- **Prometheus + Loki** — Grafana ecosystem standard. More memory-intensive; complex at scale.
- **Commercial (Datadog, New Relic, Splunk)** — SaaS, sovereignty implications.

For sovereignty-sensitive or cost-sensitive deployments, VictoriaMetrics + VictoriaLogs has been our default recommendation since ~2024.

## Decision 8: backup and DR

- **Velero** — Kubernetes-native backup, restore to any cluster. CNCF Project.
- **Stash / Kanister** — backup operators with stronger app-aware features.
- **Cloud-provider backup** — managed backup services on hyperscaler clusters.

For DR specifically: per-app patterns (PostgreSQL PITR, etc.) on top of Velero infrastructure is the production pattern.

## Decision 9: ingress and load balancing

- **Cloud LB + ingress controller (NGINX / Traefik / Contour)** — when running in cloud.
- **MetalLB + ingress controller** — bare metal layer-2 load balancing.
- **Cilium L7 load balancing** — when Cilium is the CNI.
- **Service mesh (Istio / Linkerd)** — for advanced traffic management.

Bare-metal deployments default to MetalLB + Cilium today.

## Decision 10: lifecycle management

How clusters get upgraded, scaled, and recovered:

- **Cluster API** — Kubernetes-native cluster lifecycle. Used by Cozystack.
- **Kubeadm + manual upgrades** — works for small fleet.
- **Vendor-managed lifecycle** — OpenShift, Rancher, vendor-led.
- **Hyperscaler-managed** — control plane upgrades automatic.

For production fleets >5 clusters, Cluster API or vendor-managed lifecycle pay back the operational cost.

## Operational practices that matter

Beyond architecture, the practices that determine whether a cluster operates well:

### SLOs and error budgets
Define cluster-level SLOs (control plane availability, ingress availability, etc.). Define workload-level SLOs per service. Use error budgets to drive prioritization.

### Documented runbooks
Common operational scenarios documented: pod failure, node failure, control-plane recovery, certificate rotation, storage failure, network failure. Practice them.

### Capacity planning
Compute, memory, and storage capacity tracked. Forecasted against workload growth. Decisions made before resource exhaustion.

### Upgrade discipline
Kubernetes minor versions every quarter; cluster upgrades quarterly or twice-yearly. Skip-version upgrades are not supported by upstream — keep current.

### Incident response
On-call rotation, incident commander role, blameless post-mortems with documented action items.

### Security posture
Pod Security Standards enforced; network policies as default-deny; secrets in cloud secret stores or Vault; image scanning in CI; runtime threat detection where applicable.

## Common production-readiness failures

### Failure 1: dev cluster scaled to prod
Cluster started for dev; workloads moved to prod without re-architecting. Falls over the first time prod load arrives.

### Failure 2: no observability budget
Prometheus runs out of memory at production scale; metrics retention dropped to 7 days; observability becomes useless. Should have been planned upfront.

### Failure 3: security as afterthought
Pod Security Standards not enforced; network policies absent; secrets in plain ConfigMaps. Audit findings drive emergency remediation.

### Failure 4: upgrade debt
Kubernetes 3-4 minor versions behind; upgrades are big-bang projects; technical debt compounds.

### Failure 5: no platform team
Cluster is "owned" by everyone, operated by no one. Drift accumulates; nobody can confidently change anything.

## How to assess what you have

Before building or scaling, an architecture review is the cheapest insurance. The output is a written assessment of where you stand, where the gaps are, and what production-readiness looks like for your scale.

Aenix runs Kubernetes architecture reviews as a focused 5-10 day engagement, or as part of broader **[Platform Readiness Assessment](/services/platform-readiness-assessment/)**.

## How to start

For details and pricing see the **[Kubernetes consulting services page](/services/kubernetes-consulting/)**.

---

## Want to dig deeper?

- **[Kubernetes consulting services](/services/kubernetes-consulting/)** — engagement details
- **[Platform engineering services](/services/platform-engineering/)** — broader scope
- **[Internal developer platform](/services/internal-developer-platform/)** — IDP layer
- **[Cozystack](/products/cozystack/)** — open-source platform foundation

---

*Aenix is the team behind Cozystack — a CNCF Project, Kubernetes Certified Distribution, OpenSSF Best Practices.*

<!--
SEO meta description (≤155):
"Production Kubernetes cluster setup 2026: architecture decisions (distribution, multi-tenancy, networking, storage), operational practices, common failures."
Word count: ~2700.
-->
