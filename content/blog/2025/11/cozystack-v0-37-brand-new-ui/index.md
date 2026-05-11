---
title: "Cozystack v0.37: Brand New UI"
description: "In the new release, the Cozystack developer community unveiled a completely new UI based on the openapi-ui project. The maintainers fully…"
date: "2025-11-04"
author: "Timur Tukaev"
type: "announcement"
topics: ["Kubernetes", "Cozystack", "KubeVirt", "Cilium", "Multi-tenancy", "CNCF"]
language: "en"
source_url: "https://medium.com/@tym83/cozystack-v0-37-brand-new-ui-dd4ad96eac57"
---

---

### Cozystack v0.37: Brand New UI

In the new release, the Cozystack developer community unveiled a completely new UI based on the openapi-ui project. The maintainers fully rewrote the platform’s frontend, delivered numerous improvements, and fixed issues that existed in the previous Kubeapps-based UI. Let’s see what’s inside.

![image](https://cdn-images-1.medium.com/max/800/1*WLZZyy9BhhuQQ69f3jRGWQ.png)

> **What’s Cozystack
**Cozystack is an open-source platform that lets you build a bare-metal cloud for fast rollout of managed Kubernetes, Database-as-a-Service, Applications-as-a-Service, and virtual machines powered by KubeVirt. With a click, you can deploy services like Kafka, FerretDB, PostgreSQL, Cilium, Grafana, VictoriaMetrics, and more. Cozystack is a CNCF Sandbox project.

### Main Cozystack dashboard changes

#### Cluster selector

A cluster selector has been added. Today, the dashboard operates in single-cluster mode (one dashboard per cluster). The same UI will power multi-cluster mode in future releases.

#### Namespace navigation (Tenant Namespace)

On the cluster view, you now see all namespaces you’re entitled to. The list is built via the Kubernetes API aggregation layer (tenant namespace), so only namespaces you have access to are shown.

![image](https://cdn-images-1.medium.com/max/800/1*OGeLo4NF3nd7Uwb7xbpCdw.png)

#### Application categories

Existing applications are split into three categories. In upcoming releases, categories will be optional — you’ll be able to deploy only selected groups and skip others.

![image](https://cdn-images-1.medium.com/max/800/1*JxQiidEBWtrGT4Tot2IJhQ.png)

#### Richer resource pages

Every resource page now includes:
- a resource table and basic metadata,
- Conditions,
- Workloads (what’s currently running),
- Ingresses, Services, Secrets,
- the resource YAML.

#### OpenAPI-driven configurators

Resource creation uses forms auto-generated from the Kubernetes OpenAPI spec. Field definitions and validation come directly from the spec — no YAML comments needed.

#### Spec generation from Helm

New application specs are generated from Helm charts using the cozy-values generator. Fields you add in the form are reflected live in the resulting YAML.

![image](https://cdn-images-1.medium.com/max/800/1*ZQcrO_HxYeyZstxrgkiP4g.png)

#### Tenant administration separated

Tenant management modules have moved to a dedicated Administration section: create sub-tenants and deploy tenant-specific modules/apps there (subject to your role and permissions).

#### VM features groundwork

A VNC console tab for virtual machines is planned and will appear as an additional tab. Certain resource types (e.g., KubeVirt VMs) will gain specialized tabs/fields.

#### New Cozystack UI Video Demo

#### Cozystack in 5 Minutes

#### New Components Versions

- Flux Operator 0.29.0
- Cilium v1.17.8
- Velero v1.17.0
- openapi-ui v1.0.3
- LINSTOR v1.32.3
- SeaweedFS v3.99

All changes: [v0.37.0](https://github.com/cozystack/cozystack/releases/tag/v0.37.0), [v0.37.1](https://github.com/cozystack/cozystack/releases/tag/v0.37.1), [v0.37.2](https://github.com/cozystack/cozystack/releases/tag/v0.37.2), [v0.37.3](https://github.com/cozystack/cozystack/releases/tag/v0.37.3), [v0.37.4](https://github.com/cozystack/cozystack/releases/tag/v0.37.4)

### Join the community

- [Telegram](http://t.me/cozystack) group
- [Slack](https://kubernetes.slack.com/archives/C06L3CPRVN1) group (Get invite at [https://slack.kubernetes.io](https://slack.kubernetes.io/))

By [Timur Tukaev](https://medium.com/@tym83) on [November 4, 2025](https://medium.com/p/dd4ad96eac57).

[Canonical link](https://medium.com/@tym83/cozystack-v0-37-brand-new-ui-dd4ad96eac57)

Exported from [Medium](https://medium.com) on May 11, 2026.
