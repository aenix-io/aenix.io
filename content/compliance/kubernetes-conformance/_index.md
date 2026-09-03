---
title: "Kubernetes conformance results for the Ænix platforms"
description: "CNCF conformance behind the Aenix platforms: self-hosted tenant clusters pass in full on five Kubernetes releases, plus a hosted platform in the CNCF record."
page_type: "solution-landing"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "kubernetes conformance cozystack"
secondary_keywords: ["cncf certified kubernetes conformance results", "sonobuoy certified-conformance talos", "is it real kubernetes vendor dialect", "kubernetes conformance hosted platform listing"]
hreflang_de: /de/compliance/kubernetes-conformance/
related_pages:
  - /compliance/cis-benchmark/
  - /compliance/pci-dss/
  - /products/public-cloud-platform/
  - /products/private-cloud-platform/
  - /alternatives/openshift-alternative/
direct_answer: |
  **Kubernetes clusters created on the Ænix platforms pass the CNCF conformance suite in full. The suite answers one narrow question, and it is the question every evaluation starts with: is this real Kubernetes, or something Kubernetes-shaped? A conformant cluster runs standard manifests, Helm charts and operators without a vendor dialect. The published runs were executed against Cozystack v1.6.1 — the open-source, Apache 2.0, CNCF engine the Ænix platforms are built from — one run per Kubernetes version against its own tenant cluster, with Sonobuoy in certified-conformance mode: 441 of 441 on v1.35.6, and no failures on v1.34, v1.33, v1.32 or v1.31. A hosted platform built on the same engine, Hikube, is listed in the CNCF conformance repository for v1.33, v1.34 and v1.35. A listing certifies a named product at a named version; a conformance run tells you the software behaves as Kubernetes should.**
quick_facts:
  - label: "Suite"
    value: "CNCF Kubernetes conformance, Sonobuoy v0.57.5 in certified-conformance mode with the e2e plugin."
  - label: "Target"
    value: "Tenant Kubernetes clusters created from the catalog on a Cozystack v1.6.1 installation, 19 August 2026."
  - label: "Result"
    value: "0 failures on every run: 441 passed on v1.35.6, 424 on v1.34.9, 419 on v1.33.13, 411 on v1.32.13, 404 on v1.31.14."
  - label: "CNCF record"
    value: "Hikube, a hosted platform built on the same engine, is listed for v1.33, v1.34 and v1.35 with full test logs."
  - label: "Submissions"
    value: "Self-hosted v1.35 and v1.34 runs are filed with the CNCF conformance repository; the programme accepts only the current release and the two before it."
  - label: "Mark claimed"
    value: "None. Certified Kubernetes is granted to a named product at a named version, and Aenix claims no grant of the mark here."
  - label: "What it does not prove"
    value: "Nothing about security, performance, ingress, CSI drivers, LoadBalancer provisioning, NetworkPolicy enforcement, virtual machines or managed databases."
faq:
  - q: "Is this certified Kubernetes?"
    a: "Clusters created on the platform pass the conformance suite in full — across all five Kubernetes releases offered, in the runs published here, and in the CNCF's own record for v1.33, v1.34 and v1.35 through Hikube, a hosted platform built on the same engine. Submissions for the self-hosted v1.35 and v1.34 runs are filed with the CNCF. The Certified Kubernetes mark itself is granted to a named product at a named version, so listings appear under the names of the entities that submitted them. Nothing on this page is a grant of that mark or a claim to hold one."
  - q: "Were these runs against Cozystack or against the Aenix platform?"
    a: "Against Cozystack v1.6.1, the Apache 2.0 CNCF engine that Aenix creates and maintains and that all three Aenix platforms are distributions of. There is no separate closed build, so a tenant cluster created on an Aenix platform is the same resource that was tested — created from the catalog with kind Kubernetes, two worker nodes, no special build and no laboratory setup."
  - q: "Which Kubernetes versions can we run?"
    a: "Tenant clusters can be created on v1.31 through v1.35. Each version is a separate conformance run against its own cluster and the results are in the table above. Only the three most recent Kubernetes releases can be submitted to the CNCF — the programme accepts the current release and the two before it — so with v1.36 current, v1.35 and v1.34 are filed and the rest are published here. Note that v1.33 and older no longer receive upstream patches: treat them as a migration path, not a destination."
  - q: "Does a hosted platform's certification transfer to our installation?"
    a: "No. A listing describes one product at one version. Running the same open-source platform yourself is not covered by someone else's certification, which is why the self-hosted runs are published separately with their own artefacts."
  - q: "Can we see the raw results?"
    a: "Yes. A conformance submission consists of e2e.log and junit_01.xml from the run. Both are preserved for the Hikube entries in the CNCF repository, and both accompany the self-hosted submissions for v1.35 and v1.34. Artifacts for the older runs are available on request."
  - q: "What does conformance not tell us?"
    a: "It checks portable behaviour where that behaviour is generally available: core APIs, scheduling, service routing, namespace isolation. Alpha and beta APIs sit outside the profile, and so do most extension points a real workload leans on — ingress controllers, CSI drivers and storage classes, LoadBalancer provisioning, NetworkPolicy enforcement, performance and hardening. It says nothing about whether a cluster is secure, fast or well operated, and nothing about virtual machines or managed databases, which are custom resources layered on top."
---

**Kubernetes clusters created on the Ænix platforms pass the CNCF conformance suite in full.** The suite answers one narrow question, and it is the question every evaluation starts with: is this real Kubernetes, or something Kubernetes-shaped? A conformant cluster runs standard manifests, Helm charts and operators without a vendor dialect.

Two independent sets of results are recorded below, from the two shapes the platform is used in — a cluster you run yourself, and a hosted platform built on it.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Talk to an engineer</a>
  <a class="cta-secondary" href="/compliance/">All compliance evidence →</a>
</div>

---

## What was tested

Every run below is a **tenant Kubernetes cluster created from the catalog** on a **Cozystack v1.6.1** installation, tested with Sonobuoy in `certified-conformance` mode against the conformance image pinned to its exact version. All runs took place on 19 August 2026.

Cozystack is the open-source, Apache 2.0, CNCF-hosted engine that Ænix creates and maintains, and the Ænix Public Cloud Platform, Ænix Private Cloud Platform and Ænix AI Platform are distributions of it. There is no separate closed build with a different Kubernetes underneath, which is why these runs are the evidence for the platforms: the cluster tested is the same resource a tenant creates for themselves on any of them.

### Self-hosted

| Kubernetes | Passed | Failed | Specs in suite |
|---|---|---|---|
| v1.35.6 | **441** | 0 | 7355 |
| v1.34.9 | **424** | 0 | 7144 |
| v1.33.13 | **419** | 0 | 6741 |
| v1.32.13 | **411** | 0 | 6624 |
| v1.31.14 | **404** | 0 | 6607 |

Results for v1.35 and v1.34 are submitted to the CNCF conformance repository. The programme accepts the current Kubernetes release and the two before it, and with v1.36 current those are the newest releases the platform offers.

### Hikube, a hosted platform built on the same engine

| Kubernetes | Result | Where |
|---|---|---|
| v1.35 | Passed | [`v1.35/hikube`](https://github.com/cncf/k8s-conformance/tree/master/v1.35/hikube) |
| v1.34 | Passed | [`v1.34/hikube`](https://github.com/cncf/k8s-conformance/tree/master/v1.34/hikube) |
| v1.33 | Passed | [`v1.33/hikube`](https://github.com/cncf/k8s-conformance/tree/master/v1.33/hikube) |

The Hikube entries are formal CNCF submissions, filed by Hidora as a `hosted` platform and stored permanently in the CNCF's own repository with their full test logs. The two sets cover different shapes deliberately: a distribution you install and operate, and a managed service someone else runs for you.

**The distinction between a listing and a run is worth keeping straight.** A CNCF listing certifies a named product at a named version, and the Certified Kubernetes mark belongs to whoever submitted it. A conformance run tells you the software behaves as Kubernetes should — and that is what most evaluations actually need to know.

Note the older releases. Conformance holds on v1.31 as it does on v1.35, which matters if you are migrating from an existing platform: you can move onto the platform at the Kubernetes version you run today and upgrade afterwards, on your own schedule, rather than doing both at once. That said, v1.33 and older no longer receive upstream patches — only the three most recent minor releases do — so treat them as a migration path, not a destination.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## The self-hosted run

Taking the most recent release as the example:

```
Ran 441 of 7355 Specs in 7202.504 seconds
SUCCESS! -- 441 Passed | 0 Failed | 0 Pending | 6914 Skipped

API server:  v1.35.6
Node health: 2/2
Pods health: 17/17
```

A tenant Kubernetes cluster provisioned from the catalog with `kind: Kubernetes`, two worker nodes, tested with Sonobuoy in `certified-conformance` mode against the pinned conformance image for its exact version. Not a special build and not a laboratory setup. The other four runs followed the same recipe against their own clusters.

Two properties of the cluster mattered, and both are worth planning for rather than discovering:

**A dedicated etcd.** By default the tenant clusters on an installation share one etcd, each under its own key prefix. Compaction in etcd is global rather than per-prefix, so the API server runs with `--etcd-compaction-interval=0` — compacting on behalf of one tenant would truncate history for its neighbours. One conformance test waits for a compaction that therefore never arrives, and fails on timeout. Giving the tenant its own etcd removes the constraint.

**Compaction switched on.** With a dedicated etcd, set the interval explicitly through the application spec rather than by patching the deployment:

```yaml
spec:
  controlPlane:
    apiServer:
      extraArgs:
        - --etcd-compaction-interval=5m
```

Decide both at creation time. Moving a live cluster to a different etcd is not a supported migration and leaves the existing nodes unable to receive new pods.

</div>
</div>

---

## Running the suite yourself

Any installation can be tested, and during an evaluation it is a reasonable thing to ask for.

```bash
sonobuoy version    # record it — the tool version is part of the evidence
kubectl version     # the conformance image must match the cluster's minor version

sonobuoy run \
  --mode=certified-conformance \
  --plugin e2e \
  --kube-conformance-image registry.k8s.io/conformance:v1.35.6 \
  --wait
outfile=$(sonobuoy retrieve)
sonobuoy results "$outfile"
sonobuoy delete --wait
```

**Use `--mode=certified-conformance`, and know what it switches back on.** The default mode skips tests tagged `[Disruptive]`; certified mode runs them, because a run with skipped tests is not a valid certification run. Those tests taint nodes, evict pods and restart components deliberately, and they run serially — which is why a certified run takes hours rather than minutes.

**Pass `--plugin e2e` on Talos-based clusters.** Sonobuoy's default plugin set includes `systemd-logs`, which walks every node collecting journal output. Talos Linux has no systemd, so that plugin hangs and the aggregator never reports the run complete. Excluding it costs nothing for a submission: both required artifacts come from the `e2e` plugin.

**Do not trust the progress counter.** `sonobuoy status` may sit at `Passed: 0` with the full count remaining for an entire run while tests finish normally. Follow the e2e pod's log instead, and remember that a quiet log is a good sign — failures are what produce output.

Expect two to three hours, several hundred short-lived pods and namespaces, and at least two schedulable worker nodes. Point your kubeconfig at the tenant cluster rather than at the management cluster: conformance describes the cluster your workloads land in.

---

## What conformance does and does not prove

The suite checks portable behaviour, and only where that behaviour is generally available. Do the core APIs behave as specified, does scheduling work, do services route, do namespaces isolate.

Alpha and beta APIs sit outside the profile, and so do most of the extension points a real workload leans on: ingress controllers, CSI drivers and their storage classes, LoadBalancer provisioning, NetworkPolicy enforcement, performance and hardening. Conformance says code written against the stable Kubernetes API behaves here as the specification says it should. It says nothing about whether a cluster is secure, fast or well operated — for that, see [CIS Benchmark](/compliance/cis-benchmark/) and [PCI DSS](/compliance/pci-dss/).

It also says nothing about virtual machines, managed databases or the rest of the catalog. Those are extensions built on custom resources, and the suite tests the Kubernetes underneath them.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Ask for the raw artefacts</a>
  <a class="cta-secondary" href="/products/public-cloud-platform/">Ænix Public Cloud Platform →</a>
</div>

---

## Notes

The self-hosted runs were executed on 19 August 2026 against a Cozystack v1.6.1 installation — the engine the Ænix platforms are built from — using Sonobuoy v0.57.5 in `certified-conformance` mode with the `e2e` plugin, one run per Kubernetes version against its own tenant cluster. Passed and failed counts are taken from the Ginkgo summary in `e2e.log`.

Submissions for v1.35 and v1.34 are filed with the CNCF conformance repository. Until they are accepted and published there, this page reports conformance runs rather than a completed certification, and makes no claim to the mark.

"Certified Kubernetes" and the Certified Kubernetes logo are marks of The Linux Foundation, licensed to the vendor of a conformant product for the product and version it certified. Nothing here is a certification, a grant of that mark, or a claim that Aenix or the Cozystack project holds one.
