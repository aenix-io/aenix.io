---
title: "Cozystack"
description: "Free and Open Source PaaS-platform for seamless management of virtual machines, managed Kubernetes, and Databases-as-a-Service."
url: "/cozystack/"
hero: true
images:
  managed_services: "/images/uploads/2026/04/cozystack-managed-services.png"
  managed_kubernetes: "/images/uploads/2026/04/cozystack-managed-kubernetes.png"
  databases: "/images/uploads/2026/04/cozystack-databases.png"
  public_cloud: "/images/uploads/2024/02/case-public-cloud.png"
  private_cloud: "/images/uploads/2024/02/case-private-cloud.png"
  distribution: "/images/uploads/2024/02/case-distribution.png"
  dashboard:
    - "/images/uploads/2024/02/cozystack-dashboard1.png"
    - "/images/uploads/slider4/cozystack-dashboard2.png"
    - "/images/uploads/2024/02/cozystack-dashboard3.png"
    - "/images/uploads/slider4/cozystack-dashboard4.png"
    - "/images/uploads/2024/02/cozystack-dashboard5.png"

features:
  - icon: "install"
    title: "Easy to install"
    description: "Bootstrap Cozystack on bare metal with <strong>talos-bootstrap</strong> via PXE or ISO in minutes. Immutable OS keeps every node consistent."
  - icon: "api"
    title: "Easy to integrate"
    description: "Native Kubernetes RESTful API — submit a YAML manifest from your billing system and Cozystack does the rest."
  - icon: "extend"
    title: "Easy to extend"
    description: "Every package is a set of YAML files delivered by FluxCD. Anyone who knows Kubernetes primitives can modify or add services."
  - icon: "bolt"
    title: "Cost efficiency & performance"
    description: "Best-in-class technologies balanced for stability. A unique tenant model allocates control-plane resources efficiently without compromising isolation."
  - icon: "layers"
    title: "Dashboard included"
    description: "A built-in Web UI for deploying applications — great for quick demos and a visual entry point into the platform's capabilities."
  - icon: "chart"
    title: "Monitoring out of the box"
    description: "Every service ships with pre-configured dashboards and alerts. Run a monitoring hub per tenant or consolidate them all in one."
---

Cozystack is a free PaaS platform and framework for building clouds.

With Cozystack, you can transform your bunch of servers into an intelligent system with a simple REST API for spawning Kubernetes clusters, Database-as-a-Service, virtual machines, load balancers, HTTP caching services, and other services with ease.

You can use Cozystack to build your own cloud or to provide cost-effective development environments.

## Managed services with just a click

![Managed Services](/images/uploads/2026/04/cozystack-managed-services.png)

Are you searching for a solution to leverage the benefits of managed services on-premises? We provide a complete solution to run in your infrastructure.

### Truly managed Kubernetes

Managing Kubernetes clusters on-premises is challenging. We offer a simple, full-featured Kubernetes solution that just works — like in every public cloud, but on your bare-metal servers.

Learn more in [our article on managed Kubernetes](/managed-kubernetes/).

![Truly managed Kubernetes](/images/uploads/2026/04/cozystack-managed-kubernetes.png)

### Databases-as-a-Service

Easily manage databases with a simple interface. Create databases, manage users and access rights, set up automatic backups, and monitor performance through user-friendly dashboards. Stay informed with configurable alerts to keep your databases running smoothly.

![Databases-as-a-Service](/images/uploads/2026/04/cozystack-databases.png)

## Use cases

### Build a public cloud

Cozystack is a framework for cloud providers — not end users. Despite its graphical interface, the current security model does not imply public access to your management cluster.

End users get access to their own Kubernetes clusters and can order LoadBalancers and additional services from them — without visibility into your management plane.

To integrate with billing, your system places a YAML manifest in the management Kubernetes. Cozystack handles the rest.

![Public Cloud](/images/uploads/2024/02/case-public-cloud.png)

### Build a private cloud

Offer a self-service portal to engineers inside your company — they order managed databases or whole Kubernetes clusters on demand.

Adopt GitOps end-to-end: users commit configuration into your infrastructure Git repository and Cozystack reconciles the desired state.

Expand the platform's capabilities using standard Helm charts thanks to a unified deployment approach.

![Private Cloud](/images/uploads/2024/02/case-private-cloud.png)

### Use as a Kubernetes distribution

We built Cozystack for our own needs — drawing on years of running reliable systems on bare-metal infrastructure. What started as internal tooling became a boxed product focused on standardizing how infrastructure is delivered.

Out of the box you get: bare-metal provisioning, a monitoring stack, fast reliable storage, a network fabric with enterprise interconnect, virtual machines, databases — a complete platform ready to host your applications on bare metal.

![Kubernetes Distribution](/images/uploads/2024/02/case-distribution.png)

## Why Cozystack

{{< features >}}

## Dashboard

![Cozystack Dashboard](/images/uploads/2024/02/cozystack-dashboard1.png)

While the primary goal of the platform is to provide a beautiful API, it also ships a dashboard for deploying applications. The Web UI facilitates a quick dive into the platform and a visual demonstration of its capabilities.

{{< action-buttons
  primary_text="REQUEST A DEMO" primary_url="/contact/"
  secondary_text="DOCUMENTATION" secondary_url="https://cozystack.io/docs/" secondary_external="true"
  tertiary_text="SOURCE CODE" tertiary_url="https://github.com/aenix-io/cozystack" tertiary_external="true"
>}}

{{< cta title="Build your cloud with Cozystack" description="Talk to our team about deploying Cozystack on your infrastructure, integrating with your billing, or extending the platform with custom services." button_text="GET IN TOUCH" >}}
