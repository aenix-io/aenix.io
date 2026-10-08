---
title: "Networking"
description: "Four components, each with its own job: who carries packets inside, who separates tenant networks, who hands out external addresses and who lets HTTP in."
lesson: 5
weight: 5
layout: "cert-lesson"
language: "en"
url: "/certification/materials/networking/"
hreflang_ru: "/ru/certification/materials/networking/"
page_type: "flag-page"
---

The networking part looks complicated until you break it down by job. There are four
components, and each has its own work to do — the exam asks about the division of roles, not
about settings.

<figure>
<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Who is responsible for what in the network">
  <rect x="20" y="20" width="600" height="52" rx="8" fill="#dcfce7" stroke="#16a34a"/>
  <text x="130" y="42" font-family="sans-serif" font-size="14" font-weight="700" fill="#14532d">Ingress / Gateway</text>
  <text x="130" y="60" font-family="sans-serif" font-size="12" fill="#166534">lets HTTP in from outside, separately for each tenant</text>
  <rect x="20" y="82" width="600" height="52" rx="8" fill="#fef3c7" stroke="#d97706"/>
  <text x="130" y="104" font-family="sans-serif" font-size="14" font-weight="700" fill="#78350f">MetalLB</text>
  <text x="130" y="122" font-family="sans-serif" font-size="12" fill="#92400e">hands out external addresses on your own hardware, without a cloud load balancer</text>
  <rect x="20" y="144" width="600" height="52" rx="8" fill="#e0e7ff" stroke="#4f46e5"/>
  <text x="130" y="166" font-family="sans-serif" font-size="14" font-weight="700" fill="#312e81">Kube-OVN</text>
  <text x="130" y="184" font-family="sans-serif" font-size="12" fill="#3730a3">separate tenant networks, VPC, address assignment</text>
  <rect x="20" y="206" width="600" height="40" rx="8" fill="#dbeafe" stroke="#2563eb"/>
  <text x="130" y="231" font-family="sans-serif" font-size="14" font-weight="700" fill="#1e3a8a">Cilium</text>
  <text x="255" y="231" font-family="sans-serif" font-size="12" fill="#1e40af">carries packets between pods, enforces network policies</text>
</svg>
<figcaption>Bottom to top: from packets between pods to the entry point from outside.</figcaption>
</figure>

## Cilium — the foundation

It makes sure pods can see each other, and it handles network policies. It runs on **eBPF** —
a technology that lets programs run directly in the Linux kernel, without switching to user
space for every packet.

The practical consequence: network rules are applied in the kernel, without long `iptables`
chains, and they do not degrade as their number grows.

It is Cilium that enforces the isolation between tenants discussed in the second lesson.

There is also a third role that is easy to miss: Cilium **replaces kube-proxy**
(`kube-proxy replacement`). Normally Kubernetes services are handled by kube-proxy via
iptables; here the right destination is looked up in a hash table, and the cost is the same
no matter how many services there are. On a platform with hundreds of tenants this is
noticeable.

The division of labor between it and Kube-OVN is worth remembering, because both are called
“the network”: **Cilium is the primary CNI**; it gives pods their network and enforces
policies for everyone. **Kube-OVN runs on top** and is responsible for the overlay network,
address assignment and tenant VPCs.

## Kube-OVN — tenant networks

Kube-OVN builds an **overlay network** (`overlay`) on top of the nodes' physical network and
adds two properties to it that the exam asks about more often than anything else.

**Centralized address assignment** (`centralized IPAM`): addresses are handed out from one
place rather than separately on each node, and by default the whole cluster lives in one
shared pod range.

**Stable pod addresses** (`stable pod IPs`): a pod keeps its address when it moves to another
node. For a container this is a convenience; for a virtual machine it is a necessity: guest
systems, licences and firewall rules are usually tied to the address, and changing the
address on every migration would break them.

Kube-OVN also provides **VPCs** — private networks with their own address space. Both VPC and
the virtual router (`virtual-router`) are items in the managed applications catalog: a tenant
orders them the same way as a database.

The closest analogy from the familiar world is the VPC at cloud providers, or NSX networks.

## MetalLB — external addresses

In a public cloud, a service of type `LoadBalancer` gets its address from the provider. On
your own hardware there is no provider, and without MetalLB such a service hangs in pending
forever.

MetalLB holds a pool of addresses, hands them out to services and then announces them to the
network — either via ARP, or via BGP if the network is built on routing. Starting with
version 1.5, the BGP side is handled by **FRR-K8s** (`FRR-K8s`) — it is the one that
announces routes to the physical routers.

It is what you need for a virtual machine or an application to get an address reachable from
outside the cluster.

## Ingress — the entry point for HTTP

For web applications, giving each one its own address is wasteful. **Ingress** accepts
requests on a shared address and distributes them by host names and paths.

A platform specific: **each tenant has its own entry point (ingress)**. This is not a shared
controller for the whole cluster — a tenant with `ingress` enabled gets its own
`ingress-nginx`, with its own rules, its own external address from MetalLB and its own
certificates. A tenant without one uses its parent's, just as with the other services.

## TenantGateway — the Gateway API path

Kubernetes is gradually moving from the old Ingress to the **Gateway API** — a more
expressive standard for routing traffic. In the platform it appeared in version 1.5 as the
`TenantGateway` object.

Packets through it are carried by **Cilium**: there is no nginx on this path at all. And it
is not a replacement for `ingress-nginx` but an alternative — in 1.5 both options coexist.

`TenantGateway` can issue certificates in two validation modes. **HTTP-01** — the certificate
authority fetches a token over plain HTTP, so the domain must be visible from the internet.
**DNS-01** — validation via a DNS record; only this mode works for wildcard certificates like
`*.apps.example.com` and for entry points that are not exposed to the outside.

## Names and certificates

Three helpers that usually go unnoticed as long as they work.

**CoreDNS** resolves names inside the cluster — that is why application settings say
`postgres-db-rw` rather than an address: the name survives the database moving to another
node, the address does not.

**ExternalDNS** watches published services and entry points and creates records for them at
your DNS provider by itself. An application gets published, the name starts resolving — no
need to file a ticket with the network team.

**cert-manager** issues certificates and renews them by itself, without reminders.

All of this works right up until the first failure. How to find out about a failure and what
is worth preparing in advance is the next lesson.

<div class="exam-box">
<h4>What the exam will ask</h4>
<ul>
<li>That Cilium carries packets between pods and runs on eBPF.</li>
<li>That Cilium replaces kube-proxy.</li>
<li>That Kube-OVN provides separate tenant networks and VPCs.</li>
<li>That Kube-OVN has centralized address assignment and one shared pod range per cluster.</li>
<li>That a pod keeps its address when moving to another node — and why this is critical for VMs.</li>
<li>That VPC and the virtual router (<code>virtual-router</code>) are items in the managed applications catalog.</li>
<li>That MetalLB hands out external addresses on your own hardware, announcing them via ARP or BGP.</li>
<li>That since version 1.5, BGP in MetalLB is handled by FRR-K8s.</li>
<li>That the HTTP entry point — <code>ingress-nginx</code> — is set up separately for each
tenant.</li>
<li>That <code>TenantGateway</code> appeared in 1.5, it is the Gateway API, and its packets are carried by
Cilium.</li>
<li>Two certificate issuance modes: HTTP-01 and DNS-01; wildcard — DNS-01 only.</li>
<li>That DNS records for published applications are created by ExternalDNS.</li>
<li>That names inside the cluster are resolved by CoreDNS, and certificates are issued by cert-manager.</li>
<li>Why application settings use service names rather than addresses.</li>
</ul>
</div>

<p class="doclink">More:
<a href="https://cozystack.io/docs/v1.6/networking/" target="_blank" rel="noopener">platform networking</a></p>
