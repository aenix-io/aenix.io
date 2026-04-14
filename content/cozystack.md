---
title: "Cozystack"
description: "Free and Open Source PaaS-platform for seamless management of virtual machines, managed Kubernetes, and Databases-as-a-Service."
url: "/cozystack/"
hero: true
images:
  managed_services: "/images/uploads/2025/07/Group-568118.png"
  databases: "/images/uploads/2025/07/databases.png"
  public_cloud: "/images/uploads/2024/02/case-public-cloud.png"
  private_cloud: "/images/uploads/2024/02/case-private-cloud.png"
  distribution: "/images/uploads/2024/02/case-distribution.png"
  dashboard:
    - "/images/uploads/2024/02/cozystack-dashboard1.png"
    - "/images/uploads/slider4/cozystack-dashboard2.png"
    - "/images/uploads/2024/02/cozystack-dashboard3.png"
    - "/images/uploads/slider4/cozystack-dashboard4.png"
    - "/images/uploads/2024/02/cozystack-dashboard5.png"
---

Cozystack is a free PaaS platform and framework for building clouds.

With Cozystack, you can transform your bunch of servers into an intelligent system with a simple REST API for spawning Kubernetes clusters, Database-as-a-Service, virtual machines, load balancers, HTTP caching services, and other services with ease.

You can use Cozystack to build your own cloud or to provide cost-effective development environments.

## Managed services with just a click

![Managed Services](/images/uploads/2025/07/Group-568118.png)

Are you searching for a solution to leverage the benefits of managed services on-premises? We provide a complete solution to run in your infrastructure:

### Truly managed Kubernetes

Managing Kubernetes clusters on-premises often is challenging. We offer a simple, full-featured Kubernetes solution that just works, like in every cloud, but on your bare metal servers.

Learn more about managed Kubernetes in [our article](/managed-kubernetes/).

### Databases-as-a-Service

![Databases-as-a-Service](/images/uploads/2025/07/databases.png)

Easily manage databases with a simple interface. Create databases, manage users and access rights, set up automatic backups, and monitor performance through user-friendly dashboards. Stay informed with configurable alerts to keep your databases running smoothly.

## Using Cozystack to build public cloud

![Public Cloud](/images/uploads/2024/02/case-public-cloud.png)

Cozystack positions itself as a kind of framework for building public clouds. The key word here is framework. In this case, it's important to understand that Cozystack is made for cloud providers, not for end users.

Despite having a graphical interface, the current security model does not imply public user access to your management cluster.

Instead, end users get access to their own Kubernetes clusters, can order LoadBalancers and additional services from it, but they have no access and know nothing about your management cluster powered by Cozystack.

Thus, to integrate with your billing system, it's enough to teach your system to go to the management Kubernetes and place a YAML file signifying the service you're interested in. Cozystack will do the rest of the work for you.

## Using Cozystack to build private cloud

![Private Cloud](/images/uploads/2024/02/case-private-cloud.png)

One of the use cases is a self-portal for users within your company, where they can order the service they're interested in or a managed database.

You can implement best GitOps practices, where users will launch their own Kubernetes clusters and databases for their needs with a simple commit of configuration into your infrastructure Git repository.

Thanks to the standardization of the approach to deploying applications, you can expand the platform's capabilities using the functionality of standard Helm charts.

## Using Cozystack as Kubernetes distribution

![Kubernetes Distribution](/images/uploads/2024/02/case-distribution.png)

We created Cozystack primarily for our own needs, having vast experience in building reliable systems on bare metal infrastructure. This experience led to the formation of a separate boxed product, which is aimed at standardizing and providing a ready-to-use tool for managing your infrastructure.

Currently, Cozystack already solves a huge scope of infrastructure tasks: starting from provisioning bare metal servers, having a ready monitoring system, fast and reliable storage, a network fabric with the possibility of interconnect with your infrastructure, the ability to run virtual machines, databases, and much more right out of the box.

All this makes Cozystack a convenient platform for delivering and launching your application on Bare Metal.

## Easy to install

With talos-bootstrap, we provide the ultimate easy installation method, allowing you to bootstrap Cozystack using PXE or ISO method on a set of your servers out-of-nothing in a bare data center. Using immutable OS allows us to maintain system consistency and ensure that everything will work as expected.

Example: bootstrap Cozystack cluster in 5 minutes:

## Easy to integrate

We provide a native Kubernetes RESTful API, widely recognized for its declarativity. Therefore, to integrate with your billing, it's enough to instruct your system to submit a specific YAML manifest defining the desired service to the Kubernetes API. Cozystack will do the rest of the work for you.

## Easy to extend

Each package in the platform consists of a set of YAML files. Therefore, anyone with some familiarity with Kubernetes primitives can modify or expand the platform. Delivery of packages to the system is handled by FluxCD, a well-known and widely used tool in the community.

## Cost efficiency and high performance

We care about performance. That's why we adopt the most performant technologies balancing stability and functionality. Moreover, our unique tenant model enables efficient allocation of cloud resources for the control plane, ensuring cost-efficiency and the necessary level of security.

## Dashboard

![Dashboard](/images/uploads/2024/02/cozystack-dashboard1.png)

While the primary goal of the platform is to provide a beautiful API, it also has a dashboard for deploying applications. The Web UI facilitates a quick dive into the platform and provides a visual demonstration of its capabilities.

## Monitoring included

Each instance of each service is accompanied by a set of pre-configured dashboards and alerts. You can create separate monitoring hubs for every tenant or combine them into one.
