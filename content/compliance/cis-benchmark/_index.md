---
title: "CIS Kubernetes Benchmark results for the Ænix platforms"
description: "Full kube-bench run behind the Aenix platforms: CIS v1.12 against Cozystack v1.6 on Talos — 54 pass, 24 fail, and why only four failures are real."
page_type: "solution-landing"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "cis kubernetes benchmark results"
secondary_keywords: ["kube-bench talos linux", "cis benchmark kubernetes 1.12", "kubernetes hardening evidence", "cis kubernetes benchmark failures explained"]
hreflang_de: /de/compliance/cis-benchmark/
related_pages:
  - /compliance/pci-dss/
  - /compliance/kubernetes-conformance/
  - /solutions/dora-compliance/
  - /products/private-cloud-platform/
  - /products/cozystack-enterprise-support/
direct_answer: |
  **The Ænix platforms start from a hardened position, and the published CIS Kubernetes Benchmark run says so: 54 controls pass on a management cluster nobody tuned for the test. The run is CIS Kubernetes Benchmark v1.12, executed with kube-bench v0.12.0 against Cozystack v1.6 on Kubernetes v1.34.3 — Cozystack being the open-source engine the Ænix Public Cloud, Private Cloud and AI platforms are built from, so the result carries directly. Totals: 54 pass, 24 fail, 53 warn. Most failures are architectural rather than security gaps: about fifteen are file-permission checks with no subject on an immutable Talos node, three test an `--authorization-mode` flag that structured authorization replaced, one wants a kubelet unit file Talos does not use, and one wants a kube-proxy that Cilium replaced. Four deviations are genuinely open — 1.2.5, 1.3.7, 1.4.2 and 1.2.30 — and each is discussed below.**
quick_facts:
  - label: "Benchmark"
    value: "CIS Kubernetes Benchmark v1.12, run with kube-bench v0.12.0 on 18 August 2026."
  - label: "Target"
    value: "Cozystack v1.6 on Kubernetes v1.34.3 — the same engine the Ænix platforms ship."
  - label: "Scope"
    value: "Management cluster only: the Talos nodes and the Kubernetes control plane the platform itself runs on."
  - label: "Result"
    value: "54 pass, 24 fail, 53 warn (manual checks)."
  - label: "Genuinely open deviations"
    value: "Four: 1.2.5, 1.3.7, 1.4.2 and 1.2.30. Three of them are deliberate architectural choices; one is an unchanged default."
  - label: "etcd section"
    value: "Section 2 passes in full — 7 of 7, including client and peer certificates, --client-cert-auth, and no --auto-tls."
  - label: "Verdict awarded"
    value: "None. The CIS Benchmark has no pass or fail verdict to grant; compliance is a judgment about a specific cluster."
faq:
  - q: "Is this a CIS Benchmark run of Cozystack or of the Aenix platform?"
    a: "Of Cozystack, on purpose. The Aenix platforms are distributions of Cozystack — the Apache 2.0 CNCF project Aenix creates and maintains — so there is no separate closed engine to benchmark. A control that passes on Cozystack passes on the platform built from it, and a deviation on one is a deviation on the other. The qualifier that matters more is scope: this run covers the management cluster, and several of the settings it measures come from the Talos machine configuration applied at install time rather than from the software, so a run on your own installation can legitimately differ."
  - q: "Is the platform CIS Kubernetes Benchmark certified?"
    a: "No, and nothing is. The benchmark has no pass or fail verdict to award — it is a list of controls, and compliance is a judgment about a specific cluster made by whoever assesses it. On the run published here, 54 controls pass and four deviations are worth closing. Of the remaining twenty, about fifteen test file modes on an immutable node, three test a flag that structured authorization replaced, one wants a kubelet unit file Talos has no use for, and one wants a kube-proxy that Cilium replaced."
  - q: "Why do so many CIS checks fail on Talos Linux?"
    a: "Because most of section 1.1 checks file permissions and ownership under /etc/kubernetes, and Talos keeps no such files. Those controls assume a kubeadm cluster where an administrator edits manifests on disk. Talos renders control-plane pods from its own configuration and issues credentials through its API, so admin.conf, scheduler.conf and controller-manager.conf simply do not exist. The risk the controls address — an attacker or a mistake altering control-plane configuration on disk — is handled by immutability rather than by file modes."
  - q: "Can we run kube-bench ourselves?"
    a: "Yes, and you should before an assessment. The job manifest used to produce this page is published below, with the image pinned to a version and the benchmark revision passed explicitly, because kube-bench otherwise picks a revision from the detected Kubernetes version and a different pick produces different totals. Run it in a namespace only cluster administrators can reach, never inside a tenant, and remove that namespace afterwards."
  - q: "Does a CIS report satisfy an auditor?"
    a: "Not on its own. An unannotated kube-bench report is worse than nothing: the assessor sees red lines and the meeting turns into an architecture lecture instead of a security review. What works is the report plus a mapping — for each failure, whether it is a real deviation, a control met by other means, or a check that does not apply. That mapping is what this page is."
  - q: "Are tenant Kubernetes clusters covered by these numbers?"
    a: "No. This is the management cluster. Tenant Kubernetes clusters run their control planes as Kamaji Deployments with their own API server flags and their own etcd, so sections 1, 2 and 3 have to be evaluated separately for them. If tenant clusters fall inside your assessment scope, ask for that run as well."
---

**54 CIS controls pass on a cluster nobody tuned for the test. The node operating system is immutable and has no shell, privileged workloads are refused by admission, every etcd control passes, and tenants are created with network isolation already applied.**

This page publishes the full run rather than the flattering part of it. A raw kube-bench report also lists two dozen failures, and the useful work is telling them apart: most are the benchmark looking for files an immutable node does not keep, or testing a flag that newer Kubernetes releases replaced. Four are worth your attention, and each is covered below with the reasoning behind it.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Talk to an engineer</a>
  <a class="cta-secondary" href="/compliance/">All compliance evidence →</a>
</div>

---

## What was measured, and on what

CIS Kubernetes Benchmark v1.12, executed by [kube-bench](https://github.com/aquasec/kube-bench) v0.12.0 against **Cozystack v1.6 on Kubernetes v1.34.3**, on 18 August 2026. Control-plane checks ran on a control-plane node, worker checks on a worker.

**Read the target carefully, because it is the point.** The run is against Cozystack — the open-source, Apache 2.0, CNCF-hosted engine that Ænix creates and maintains — and not against a separate proprietary product. There is no separate proprietary product: the Ænix Public Cloud Platform, Ænix Private Cloud Platform and Ænix AI Platform are distributions of that same engine. So a control that passes here passes on the platform, and a deviation here is a deviation there. What Ænix supplies around the engine — the Talos machine configuration applied at install time, the reference architecture, the runbooks — is exactly where several of the settings below come from, which is why the same benchmark on your installation is a different run and may produce different totals.

**Scope: the management cluster** — the Talos nodes and the Kubernetes control plane the platform itself runs on. Tenant Kubernetes clusters are not covered by these numbers. Their control planes are Kamaji Deployments with their own API server flags and their own etcd, so sections 1, 2 and 3 must be evaluated separately for them.

| Section | Pass | Fail | Warn |
|---|---|---|---|
| 1 — Control plane security configuration | 29 | 22 | 9 |
| 2 — etcd node configuration | 7 | 0 | 0 |
| 3 — Control plane configuration | 1 | 0 | 4 |
| 4 — Worker node security configuration | 17 | 2 | 6 |
| 5 — Kubernetes policies | 0 | 0 | 34 |
| **Total** | **54** | **24** | **53** |

Section 2 is worth a moment: every etcd flag check passes — client and peer certificates, `--client-cert-auth`, no `--auto-tls`. The one etcd-related failure sits in section 1 and concerns the data directory owner; it is discussed below.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Why most failures are not findings

### The benchmark is looking for kubeadm

Fifteen of the twenty-four failures are file checks — permissions and ownership of the API server, controller manager, scheduler and etcd pod manifests, and of `admin.conf`, `scheduler.conf` and `controller-manager.conf`.

Every one of them reports an empty value. Look at the node and you see why:

```
# /etc/kubernetes on a Talos control-plane node
bootstrap-kubeconfig
kubeconfig-kubelet
kubelet.yaml
manifests/     <- empty
pki/
```

The `manifests` directory exists and holds nothing: Talos renders the control-plane pods from its own configuration under `/system`, not from files an administrator edits, and `/etc/kubernetes/manifests` is left for static pods *you* choose to add. The administrator kubeconfigs the benchmark looks for are absent entirely, because credentials are issued through the Talos API instead of being left on disk.

Check it on your own node rather than taking this on trust:

```bash
talosctl -n <control-plane-ip> list -l /etc/kubernetes /etc/kubernetes/manifests
```

The honest reading is not "fifteen controls failed" but "fifteen controls are inapplicable, and the risk they exist to manage — an attacker or a mistake altering control-plane configuration on disk — is handled by immutability instead of by file modes".

One check in the same group, 1.1.12, fails for a different reason. The etcd data directory exists and is readable — check 1.1.11 confirms it is mode 0700 — but etcd runs as root, there is no system `etcd` account on a Talos node, and the scanning container cannot resolve the numeric owner to a name. The intent of the control, restricting who can read the etcd data directory, is met; the literal `etcd:etcd` ownership it asks for cannot exist on a system with no user accounts.

### Three checks predate structured authorization

Checks 1.2.6, 1.2.7 and 1.2.8 require the `--authorization-mode` flag to exclude `AlwaysAllow` and to include `Node` and `RBAC`. Kubernetes 1.30 introduced a structured authorization configuration file, Talos uses it, so the flag is absent and the checks fail.

The configuration itself is exactly what the benchmark wants:

```yaml
apiVersion: apiserver.config.k8s.io/v1beta1
kind: AuthorizationConfiguration
authorizers:
- name: node
  type: Node
- name: rbac
  type: RBAC
```

Both authorizers are enabled and `AlwaysAllow` is nowhere. This is not a case of running an out-of-date benchmark: CIS v1.12 is the current revision and covers Kubernetes 1.32 through 1.34, while structured authorization reached general availability in 1.32. The control simply still tests for a flag that a conformant modern cluster is entitled not to have. Expect more false positives of this shape. Disproving them means reading the configuration, not rerunning the tool.

### Both worker failures are architectural

Check 4.1.1 wants a kubelet service file, which Talos does not use. Check 4.3.1 wants the kube-proxy metrics endpoint bound to localhost — and there is no kube-proxy to bind: the platform runs Cilium with `kube-proxy-replacement` enabled, so the component the check targets is not installed.

The exposure the control was written about did not vanish, though. It moved to the Cilium agent's own metrics and health ports on each node, which the benchmark does not examine at all. Bind those to the node's internal address and firewall them the way you would have treated kube-proxy.

</div>
</div>

---

## What actually needs attention

Four failures survive the sort. None is exotic, and all four are settings in the Talos machine configuration rather than platform changes. Three of the four are deliberate choices by the maintainers rather than oversights, and knowing the reasoning is more useful than knowing the score.

| Check | What it means | How to treat it |
|---|---|---|
| **1.2.5** — `--kubelet-certificate-authority` not set | The API server presents a client certificate to the kubelet but does not verify the kubelet's serving certificate against a CA | Deliberate: on bare metal there is no metadata service to issue and distribute kubelet serving certificates. Closing it means building that mechanism |
| **1.3.7** — controller manager `--bind-address=0.0.0.0` | The secure port (10257) listens on every interface rather than loopback, and exposes metrics only. Metrics require authentication and authorization; `/healthz`, `/readyz` and `/livez` do not | Deliberate: this is how metrics are collected today. The cleaner shape is loopback plus an authorizing proxy in front |
| **1.4.2** — scheduler `--bind-address=0.0.0.0` | The same, on port 10259 | As above |
| **1.2.30** — `--service-account-extend-token-expiration` not `false` | Extended service account token lifetime remains on, a compatibility default for older clients | Not a considered decision — the default was simply never changed |

If your assessor treats any of these as a finding, the answer is a compensating control plus a plan, not a denial. The first three are each a day or two of engineering to close properly; the fourth is a flag.

**One caution before acting on 1.2.5.** The flag alone is not the fix, and on its own it breaks things. By default the kubelet serves a self-signed certificate, so an API server told to verify it against a CA stops being able to run `kubectl logs`, `exec`, `port-forward` or metrics-server. Closing this control is a three-part change — enable `serverTLSBootstrap` on the kubelet, run a signer that approves kubelet serving CSRs, and only then set `--kubelet-certificate-authority`. Do it on a test cluster and check `kubectl logs` against every node before calling it done.

**On 1.3.7 and 1.4.2**, the benchmark's remediation is `--bind-address=127.0.0.1`, and applying it literally has a cost: Prometheus scrapes the controller manager and scheduler across nodes, and loopback-only endpoints stop being scrapable. The proportionate answer is to leave the bind address alone, close ports 10257 and 10259 to everything but the monitoring path using the Talos ingress firewall, and record that as a compensating control rather than as a passed check.

**On 1.2.30**, watch `serviceaccount_stale_tokens_total` on the API server before switching extended token expiration off: while it is above zero, something still depends on the compatibility behaviour.

### Where these settings live

All four sit in the Talos machine configuration applied at install time. That configuration is part of what Ænix supplies and operates around the engine — which is also why the same run on your cluster may differ from the published one. Verify what yours actually runs before changing anything:

```bash
talosctl -n <control-plane-ip> get authorizationconfig -o yaml
```

---

## The audit policy: the check kube-bench leaves to you

Check 3.2.2 — "ensure that the audit policy covers key security concerns" — is a manual check, so kube-bench reports a warning and moves on. It is worth doing by hand.

On the cluster examined here the audit policy is set to `level: Metadata`. That records who called what and when, but not request or response bodies. For day-to-day operations it is a reasonable default; for a regime that expects reconstruction of what actually changed — PCI DSS requirement 10.2.1, for one — it is not enough on its own.

Resist the obvious fix. Raising everything to `RequestResponse` writes the bodies of every request into the audit log, and those bodies contain Secret values, tokens and whatever personal data your users put in annotations. The log stops being a record of access and becomes a second copy of the data it was meant to protect — now in a file with different retention, different access control and quite possibly a different compliance scope. Kubernetes' own reference policy keeps Secrets and ConfigMaps at `Metadata` for exactly this reason.

The workable shape is per-resource. Log role bindings, webhook configurations and admission policy at `RequestResponse`, because knowing what changed there is the point; keep Secrets at `Metadata`, because knowing that a Secret was read is useful and knowing its contents is a liability. Decide the split deliberately and write down why — an assessor will accept a reasoned policy far more readily than a maximal one. See the [PCI DSS page](/compliance/pci-dss/) for how audit logging fits a compliance programme more broadly, and the [GDPR page](/compliance/gdpr/) for why a maximal policy creates a second problem.

---

## Which of the 53 manual checks the platform already answers

Warnings are manual checks: the benchmark cannot decide them, so a human must. Thirty-four of them are section 5, on RBAC, Pod Security and network policies, and several are already answered by how a tenant is built:

- **Pod Security admission enforces `baseline` and warns at `restricted`.** That answers the section 5.2 checks on privileged containers, host namespaces and hostPath — but not the ones on running as root, dropped capabilities and seccomp profiles, which need `restricted`, a namespace label away.
- **Every tenant is created with Cilium network policies** that deny traffic from other tenants, which you can verify with a cross-tenant probe — the commands are on the [PCI DSS page](/compliance/pci-dss/).
- **The tenant role carries no `get secrets` verb.** Read that as least privilege at the API surface rather than as a confidentiality boundary: anyone who can schedule a workload in a namespace can mount that namespace's secrets into a pod.

The remaining warnings — client certificates and service account tokens used as user credentials, in particular — depend on how you run the cluster, not on how it ships.

---

## How to run kube-bench on your own cluster

Two things to get right before you run it. Pass `--benchmark` explicitly — otherwise kube-bench picks one from the detected Kubernetes version, and a different pick produces a different set of checks and different totals. And pin the image: `latest` is not evidence, and an assessor is entitled to ask which version of which tool produced the report.

```bash
kubectl create namespace kube-bench
kubectl label namespace kube-bench pod-security.kubernetes.io/enforce=privileged
```

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: kube-bench-master
  namespace: kube-bench
spec:
  backoffLimit: 1
  template:
    spec:
      hostPID: true
      nodeName: <your-control-plane-node>
      restartPolicy: Never
      automountServiceAccountToken: false
      containers:
        - name: kube-bench
          image: docker.io/aquasec/kube-bench:v0.12.0   # pin a version, or a digest
          command: ["kube-bench"]
          args:
            - "run"
            - "--benchmark"
            - "cis-1.12"
            - "--targets"
            - "master,controlplane,etcd,policies"
            - "--json"
          volumeMounts:
            - { name: var-lib-etcd,    mountPath: /var/lib/etcd,    readOnly: true }
            - { name: var-lib-kubelet, mountPath: /var/lib/kubelet, readOnly: true }
            - { name: etc-kubernetes,  mountPath: /etc/kubernetes,  readOnly: true }
            - { name: usr-bin,         mountPath: /usr/local/mount-from-host/bin, readOnly: true }
      volumes:
        - { name: var-lib-etcd,    hostPath: { path: /var/lib/etcd } }
        - { name: var-lib-kubelet, hostPath: { path: /var/lib/kubelet } }
        - { name: etc-kubernetes,  hostPath: { path: /etc/kubernetes } }
        - { name: usr-bin,         hostPath: { path: /usr/bin } }
```

For worker checks, run the same job on a worker with `--targets node` and drop the etcd mount.

Treat this job as what it is: a privileged, short-lived diagnostic. It runs with `hostPID`, in a namespace where Pod Security enforcement is switched off, and it mounts `/var/lib/kubelet` — which holds the node's kubelet client key and the projected service account tokens of every pod on that node. Anyone who can exec into the pod inherits the node's identity. Run it in a namespace only cluster administrators can reach, never inside a tenant, collect the JSON, and remove the namespace as soon as you have it:

```bash
kubectl delete namespace kube-bench
```

The exception this job needs from admission is deliberate and temporary — it changes nothing about enforcement in the namespaces where workloads actually run.

---

## Where this fits

A CIS run is one test of one cluster at one moment. It says nothing about whether the cluster behaves as Kubernetes should — that is [Kubernetes conformance](/compliance/kubernetes-conformance/) — and nothing about the organisational half of a compliance programme, which is where [DORA](/compliance/dora/) and the [DORA readiness engagement](/solutions/dora-compliance/) pick up. For financial entities and for essential and important entities under NIS2, the regulator-facing work sits on the [DORA](/solutions/dora-compliance/) and [NIS2](/solutions/nis2-compliance/) solution pages; this page is one of the artefacts those engagements produce.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Ask for the raw report</a>
  <a class="cta-secondary" href="/services/platform-readiness-assessment/">Platform readiness assessment →</a>
</div>

---

## Notes

This page describes Cozystack v1.6 on Kubernetes v1.34.3 as observed on a single reference cluster — the management cluster only — measured with CIS Kubernetes Benchmark v1.12 via kube-bench v0.12.0 on 18 August 2026. The Ænix platforms are distributions of that engine, which is why the result is presented here; the qualifier is that your installation may differ, particularly in the Talos machine configuration, which supplies several of the settings discussed above. This page is informational, not an assessment and not a certification.
