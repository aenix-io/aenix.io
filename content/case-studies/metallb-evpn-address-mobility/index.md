---
title: "When the return packet takes the wrong door"
description: "A hosting provider's public IPs were pinned to a rack and half their traffic died silently. vlan-router made MetalLB L2 routing declarative and the address follow the workload."
hero_subtitle: "MetalLB L2 routing automated, and the address survives a move"
date: 2026-08-21
lastmod: 2026-08-21
page_type: "case-study"
language: "en"
hreflang_de: "/de/case-studies/metallb-evpn-address-mobility/"
images: ["img/og/og-case-metallb-evpn-address-mobility.png"]
primary_keyword: "metallb l2 asymmetric routing"
secondary_keywords:
  - "metallb evpn vxlan"
  - "kubernetes bare metal public ip"
  - "policy routing kubernetes node"
  - "evpn type-2 route kubernetes"
  - "loadbalancer ip mobility"
related_pages:
  - /products/public-cloud-platform/
  - /industries/hosting-providers/
  - /products/cozystack/
  - /services/kubernetes-consulting/
faq:
  - q: "What exactly breaks with MetalLB in L2 mode?"
    a: "Assigning an external address to a node is close to `ip addr add 1.2.3.4/32 dev lo`. The kernel treats it as a host route and answers ARP for it regardless of which interface the address conceptually belongs to. Inbound traffic arrives via the public subnet's gateway and the reply leaves via the node's default gateway, because nothing told the kernel otherwise. ARP answers instantly, TCP never completes, and everything looks configured."
  - q: "Isn't there a known fix for the routing half?"
    a: "Yes, and we published it in 2020: give the public subnet its own routing table, put a default route in it via the correct gateway, and add a policy rule so traffic sourced from that subnet consults that table — plus the exception rule sending traffic toward the cluster's own pod network back to the main table. The recipe is correct. It is also six commands per subnet per node, applied by hand, lost on reinstall, and silently missing on any node added later."
  - q: "Why did the address have to stop belonging to a VLAN?"
    a: "Because a VLAN is an L2 broadcast domain, which in practice means a rack. The fabric beyond the rack could already move an address anywhere it had a VTEP; the nodes were the part of the path that could not. A migrating tenant VM, a rebooting announcing node, a GPU machine moved to newer hardware — each takes the address out from under live traffic. For a provider whose customer bought a VM with that IP, that is a ticket, not a nuance."
  - q: "How does the address follow the workload?"
    a: "For VXLAN networks the controller embeds a BGP speaker, one instance per network, and announces the addresses living on its node as EVPN Type-2 routes plus Type-3 for BUM traffic, consuming what its peers announce and programming the node's forwarding database. When a workload moves, the new node announces the address, the old one withdraws it, and the fabric converges on its own. Reachability is carried by a routing protocol instead of being implied by a cable."
  - q: "Can this coexist with the segments that cannot move yet?"
    a: "That was a requirement — no provider migrates every customer subnet in one night. Three modes share one configuration format: VXLAN with EVPN for the general case, VXLAN without BGP where MAC learning is enough, and plain VLAN for segments that stay as they are. All three run side by side on the same nodes."
---

<div class="cs-tags">
  <span class="cs-tag">Networking</span>
  <span class="cs-tag">MetalLB L2</span>
  <span class="cs-tag">EVPN · VXLAN</span>
  <span class="cs-tag">Policy routing</span>
  <span class="cs-tag">Hosting provider</span>
</div>

**A hosting provider runs Cozystack on bare metal: tenant VMs, GPU machines, managed Kubernetes clusters and LoadBalancer services, all needing routable public addresses from several provider-owned subnets. Two problems sat on top of each other — return traffic left through the wrong gateway, and a public address was pinned to a rack. We built vlan-router, a controller that turns the manual routing recipe into declared state and makes each node a participant in the provider's EVPN fabric, so an address follows its workload.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">6 commands</div><div class="cs-stat__label">per subnet per node, by hand — replaced by a few lines of YAML in one place</div></div>
  <div class="cs-stat"><div class="cs-stat__num">EVPN Type-2</div><div class="cs-stat__label">routes announced per node, so the address moves with the workload</div></div>
  <div class="cs-stat"><div class="cs-stat__num">3 modes</div><div class="cs-stat__label">VXLAN+EVPN, VXLAN without BGP, plain VLAN — side by side during migration</div></div>
</div>

## The client's problem

The provider's network is an EVPN fabric, and that was a constraint rather than something we chose. Public addresses reach the racks over VXLAN, and reachability inside the fabric is carried by BGP: an address's MAC is announced as an EVPN route, and the fabric forwards to whichever VTEP claims it. Announcing a public address outward means participating in that — which is precisely what a Kubernetes node was not doing. The task was not to design an addressing model; it was to make the nodes speak the one the fabric already required.

**Asymmetric routing, older than Kubernetes.** When MetalLB in L2 mode assigns an external address to a node, the effect is close to `ip addr add 1.2.3.4/32 dev lo`. The kernel takes it as a host route and answers ARP for it regardless of which interface the address conceptually belongs to. Inbound traffic arrives through the gateway of the public subnet, and the reply leaves through the node's default gateway, because nothing told the kernel otherwise. The connection dies silently in one direction.

> arping answers instantly, and TCP never completes. Everything looks configured; nothing works.

**An address tied to a segment.** Addresses were handed to nodes on VLANs, and a VLAN is an L2 broadcast domain — in practice, a rack. The fabric beyond the rack could already move an address anywhere it had a VTEP; the nodes were the part of the path that could not. A tenant VM that migrates, a LoadBalancer whose announcing node reboots, a GPU machine moved to newer hardware: each takes the address out from under the traffic. For a provider whose customer bought "a VM with this IP", that is a ticket.

## Why the known fix wasn't enough

The routing half has a known answer, which we published back in 2020. Give the public subnet its own routing table, point a default route in it at the correct gateway, and add a policy rule so traffic sourced from that subnet consults that table:

```bash
ip link add link eth0 name eth0.100 type vlan id 100
ip route add 1.2.3.0/24 dev eth0.100 table 100
ip route add default via 1.2.3.1 table 100
ip rule add from 1.2.3.0/24 lookup 100
ip rule add from 1.2.3.0/24 to 10.112.0.0/12 lookup main
```

That last rule matters more than it looks: without it, policy routing also captures traffic from the public address to the cluster's own pod network, and pods stop talking to each other for reasons nobody suspects.

The recipe is correct. It is also six commands per subnet per node, applied by hand, lost on reinstall, and silently absent on any node added later. And it solves only the routing half — the address is still pinned to a VLAN, so it still cannot follow a workload.

## What was built

**vlan-router** — a controller running as a DaemonSet on every node, which turns that manual recipe into declared state and extends it so the address stops belonging to a segment.

- **Creates the interfaces.** A VLAN sub-interface on a parent bond, or a VXLAN interface with a given VNI, MTU and port. Whatever is declared, it brings up and keeps up.
- **Works out its own identity.** Rather than being told its address per node, a node finds its own VXLAN source address by matching its interfaces against the declared node network. One configuration therefore applies unchanged to every node, and a reinstalled node returns with the correct identity by itself.
- **Builds the routing table.** For each network: a connected route for the subnet and a default route via its gateway, both in a dedicated table — numbered from the VNI or the VLAN ID, so the table number and the segment are one fact rather than two that must be kept in sync.
- **Installs the policy rules, including the exception.** Traffic sourced from the public subnet consults that network's table; traffic from that subnet toward the cluster's declared pod and service networks goes back to the main table at higher precedence. The rule from the article, applied automatically for every network, on every node.
- **Makes the node a VTEP in the provider's fabric.** For VXLAN networks the controller embeds a BGP speaker — one instance per network, in-process — and announces the addresses living on its node as EVPN Type-2 routes, plus Type-3 for BUM traffic. It also consumes what its peers announce and programs the node's forwarding database accordingly. Nothing here invents a mechanism: it is the same EVPN the fabric was already speaking, now spoken by the node as well. When a workload moves, the node it lands on announces the address, the previous node withdraws it, and the fabric converges on its own.
- **Announces to the upstream gateway when needed.** The provider's router is theirs, not ours, and some gateways will not forward to an address they have not recently heard from. The controller watches MetalLB's `ServiceL2Status` to learn which node currently owns which LoadBalancer address and, where enabled, sends periodic ARP for it from that node. MetalLB keeps deciding ownership; this makes the rest of the network agree.
- **Supports the migration, not just the destination.** Three modes share one configuration format — VXLAN with EVPN, VXLAN without BGP where MAC learning suffices, and plain VLAN for segments that must stay as they are.
- **Cleans up after itself.** Interfaces, routes and rules created by a previous generation of the configuration are tracked and removed when the configuration changes, instead of accumulating as residue.

Running a separate BGP instance per network is what allows several independent EVPN fabrics on one node without their routing tables meeting. Each listens on a local port derived from its VNI, which has the useful side effect that the ordinary `gobgp` CLI works inside the container — an operator inspects a live session with the tool they already know.

```yaml
podNetworks: [10.244.0.0/16, 10.96.0.0/16]

networks:
  - type: vxlan
    vxlan:
      vni: 228
      nodeNet: 10.0.7.0/24
      bgp:
        myAsn: 65001
        peerAsn: 65001
        peers: [10.0.7.19, 10.0.7.20]
    routing:
      cidr: 203.0.113.0/24
      gateway: 203.0.113.1
      arpAnnouncer: true

  - type: vlan
    vlan:
      parent: bond0
      id: 220
    routing:
      cidr: 198.51.100.0/24
      gateway: 198.51.100.1
```

## One thing worth knowing about the migration

The fabric already spoke EVPN, but it had never had to forward to an address that moved. Letting the nodes claim addresses changes what the upstream devices are allowed to assume, and that is where the surprises live.

During the rollout, traffic to one tenant address stopped arriving while ARP for that same address answered perfectly — the familiar signature again, one layer higher. Every check on our side passed: the EVPN route was present, the remote VTEP was known, the forwarding entry existed. The gateway knew the MAC and still would not forward. The cause was upstream: the address had been configured with a MAC binding made in a world where an address lived behind exactly one port, and that assumption no longer held once the workload could appear behind any node. Removing the binding fixed it.

Most of this kind of migration is finding assumptions like that one — made reasonably, years earlier, by someone who had no reason to expect the address would ever move.

## Result

- Public addresses are no longer tied to a segment. Tenant VMs, including GPU machines that must move between chassis as hardware is replaced, keep their addresses across nodes.
- Return traffic leaves through the gateway that received it.
- The legacy VLAN kept only for backwards compatibility could be retired.
- Several public networks run on the same nodes with independent routing tables and no interference with cluster-internal traffic.
- Six commands per subnet per node became a few lines of YAML in one place — applied identically everywhere, reapplied automatically after a reinstall, and correct on a node added six months later by someone who never read the article.

## Why this case matters

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">The fabric was a constraint, not a choice</h3><p class="card-description">The provider's EVPN network already worked. The job was making Kubernetes nodes speak it, rather than proposing a network the customer would have to rebuild.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">A runbook is not a solution</h3><p class="card-description">The manual recipe was correct and had been published for years. It still lost on every reinstall and was missing on every node added later.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Migration runs in both models at once</h3><p class="card-description">VXLAN with EVPN, VXLAN without BGP and plain VLAN side by side on the same nodes, because nobody moves every customer subnet in one night.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">The hard part is upstream assumptions</h3><p class="card-description">A years-old MAC binding, made when an address could only live behind one port, was the bug. Finding those is most of the work.</p></div></div>
</div>

---

*This case study is published in anonymized form (Tier-3 evidence): the customer is described by profile, not by name. A customer reference is available under NDA on request — [talk to Ænix sales](/contact/).*

*Ænix is the team behind [Cozystack](https://cozystack.io) — a CNCF project (Sandbox today; Incubating expected late summer 2026), Apache 2.0. Ænix commercializes it as Ænix Platform, as three platforms on one engine — Public Cloud, Private Cloud and AI — that combine rather than exclude each other.*
