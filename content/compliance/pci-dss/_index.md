---
title: "PCI DSS on the Ænix platforms"
description: "Which PCI DSS 4.0.1 requirements the Aenix platforms cover by default, which are one setting away, and which stay yours — with commands to verify each control."
page_type: "solution-landing"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "pci dss kubernetes platform"
secondary_keywords: ["pci dss 4.0.1 requirements kubernetes", "cardholder data environment kubernetes segmentation", "pci dss vmware replacement", "pci dss audit scope container platform"]
hreflang_de: /de/compliance/pci-dss/
related_pages:
  - /compliance/cis-benchmark/
  - /compliance/gdpr/
  - /industries/financial-services/
  - /products/private-cloud-platform/
  - /alternatives/vmware-alternative/
direct_answer: |
  **The Ænix platforms provide most of the technical controls a PCI DSS v4.0.1 assessment depends on, and several are active on a fresh installation: tenant network isolation enforced by Cilium policies, privileged workloads refused by admission, automatic TLS for published services, and encrypted backups. Others ship but stay off until you enable them — single sign-on with MFA, volume encryption, restricted egress, encrypted east-west traffic, longer audit retention — and each is a configuration option rather than a development project. No platform passes a PCI DSS audit: a Qualified Security Assessor certifies a scoped cardholder data environment, not a product, and Aenix claims no PCI DSS certification. The controls below were verified against Cozystack v1.6, the open-source engine the Ænix platforms are built from, with commands you can run on your own cluster.**
quick_facts:
  - label: "Standard"
    value: "PCI DSS v4.0.1, all twelve requirements mapped."
  - label: "Active on a fresh install"
    value: "Tenant segmentation, immutable OS with no SSH, privileged workloads rejected, automatic TLS, encrypted backups, tenant-scoped RBAC."
  - label: "One setting away"
    value: "Keycloak SSO with MFA, LUKS volume encryption, egress allow-lists, Cilium transparent encryption, twelve-month audit retention, restricted Pod Security, internal time source."
  - label: "Stays with you"
    value: "Requirement 5 (malware), 11.5 (intrusion and change detection), 12 (organisational policy), plus scanning and penetration testing cadence."
  - label: "Certification"
    value: "None. PCI DSS certification applies to a cardholder data environment and is signed by a QSA — no platform holds one."
  - label: "Where the evidence comes from"
    value: "Cozystack v1.6 on a reference cluster — the same engine the Ænix platforms ship, verifiable with the commands on this page."
  - label: "Common starting point"
    value: "Teams replacing VMware vSphere, where the CDE was scoped around clusters, VLANs and vCenter roles."
faq:
  - q: "Is the Aenix platform PCI DSS certified?"
    a: "No, and no infrastructure platform is. PCI DSS certification applies to a cardholder data environment, is scoped by the entity that owns it, and is signed by a Qualified Security Assessor. A vendor advertising a PCI DSS certified platform is describing something that does not exist. What Aenix says is narrower and verifiable: the infrastructure controls an assessment leans on — segmentation, hardened configuration, encryption, centralized identity, audit logging — are present, most are on before you touch anything, and every one can be checked against your own cluster with the commands on this page."
  - q: "Were these controls tested on the Aenix platform or on Cozystack?"
    a: "On Cozystack, the Apache 2.0 CNCF engine that Aenix creates and maintains and that all three Aenix platforms are distributions of. There is no separate closed build to test. The distinction that does matter is configuration: settings such as --encryption-provider-config, the audit policy and the time source come from the Talos machine configuration applied at install time, which is part of what Aenix supplies and operates, so verify them on your own cluster rather than assuming them."
  - q: "How does the platform affect PCI DSS audit scope?"
    a: "That is what segmentation is for, and here isolation is enforced rather than declared: creating a tenant provisions Cilium network policies that deny traffic from other tenants by default. But putting the cardholder data environment in its own tenant does not by itself take the rest of the cluster out of scope — the control plane, Cilium, LINSTOR, Keycloak and the nodes are shared services supporting the CDE, and assessors normally treat them as in scope. Segmentation limits which workloads are in scope, not which platform components. Agree the boundary with your assessor early and use the verification commands as evidence."
  - q: "Is cardholder data encrypted at rest by default?"
    a: "For Kubernetes secrets, yes, where the API server runs with --encryption-provider-config. For volumes — the disks behind databases and virtual machines, which is where cardholder data actually sits — no. LINSTOR supports at-rest encryption with LUKS as a StorageClass option, and the decision belongs at design time: converting a populated volume later means migrating the data. Backups are encrypted by default through the kopia uploader."
  - q: "Can we use our own certificate authority and identity provider?"
    a: "Yes. cert-manager works with an internal authority as well as with Let's Encrypt, and Keycloak federates with corporate directories and external identity providers. Enabling OIDC is an installation-time step and belongs before the environment carries cardholder data — a fresh cluster authenticates with a static cluster credential, which is a shared account and something Requirement 8.2.2 does not allow."
  - q: "Can the platform run on our own hardware for PCI DSS scope?"
    a: "Yes. The platforms install on bare metal in your own facility, which keeps data residency and physical security under your control — both of which an assessor will ask about. Requirement 9 is yours either way, but it is yours in a building you already control rather than in a shared-responsibility matrix."
---

**Most of the technical controls a PCI DSS v4.0.1 assessment depends on are present on the Ænix platforms, and several are active on a fresh install: tenant network isolation, privilege restrictions on workloads, automatic TLS for published services, encrypted backups.**

Others ship but are not switched on, because most clusters do not need them: single sign-on, volume encryption, restricted egress, encrypted east-west traffic, longer audit retention. Each is a configuration option rather than a development project, and this page says which is which, requirement by requirement — along with the parts an assessment leaves to you.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Talk to an engineer</a>
  <a class="cta-secondary" href="/compliance/">All compliance evidence →</a>
</div>

---

## Will this pass our audit?

The question comes up in the first meeting, every time a cardholder data environment moves to a new platform. **No platform passes an audit.** A Qualified Security Assessor certifies a scoped environment — your systems, your processes, your evidence. What a platform can do is provide the technical controls the assessment depends on, and make them easy to demonstrate.

Finding out during an assessment that a control was never switched on is expensive, so every opt-in item below is marked as one.

### Where the evidence comes from

The controls on this page were verified against **Cozystack v1.6** on a reference cluster, and the verification commands are the ones you would run yourself. Cozystack is the open-source, Apache 2.0, CNCF engine that Ænix creates and maintains; the Ænix Public Cloud Platform, Private Cloud Platform and AI Platform are distributions of it. There is no separate closed build with different behaviour, which is why the mapping carries across without a caveat.

The caveat that does apply is configuration. Several settings an assessor will ask about — `--encryption-provider-config`, `--anonymous-auth=false`, `--profiling=false`, the audit policy, the time source — come from the Talos machine configuration applied at install time rather than from the software. That configuration is part of what Ænix supplies and operates. Verify it on your own cluster instead of taking a published number for it.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## The twelve requirements, mapped

"Default" means the control is active on a fresh installation. "Built in, off by default" means the platform ships it and you turn it on — configuration, not development.

| PCI DSS v4.0.1 requirement | Coverage | Notes |
|---|---|---|
| 1 — Network security controls | **Default** | Tenants are isolated from each other by Cilium policies created with the tenant |
| 2 — Secure configurations | **Default** | Immutable OS with no SSH; privileged containers rejected by admission |
| 3 — Protect stored data | **Default + one option** | Secrets encrypted in etcd, backups encrypted by Velero; volume encryption is a StorageClass away |
| 4 — Encrypt data in transit | **Default + one option** | cert-manager issues and renews TLS for published services; Cilium adds transparent east-west encryption when you enable it |
| 5 — Protect against malware | **Yours** | Malware controls belong to the workloads you run, not to the platform |
| 6 — Secure systems and software | **Shared** | Components pinned to immutable digests; patching cadence is yours |
| 7 — Restrict access by need to know | **Default** | Tenant-scoped RBAC; a tenant user cannot read cluster secrets |
| 8 — Identify and authenticate users | **Built in, off by default** | Anonymous API access is disabled; SSO requires enabling the Keycloak OIDC integration — a default install authenticates with a cluster token |
| 9 — Restrict physical access | **Yours** | The platform installs on your own hardware, in your own facility |
| 10 — Log and monitor access | **Default, retention is a setting** | API audit log and centralized log storage ship with the platform |
| 11 — Test security regularly | **Shared** | Nothing blocks scanning or penetration testing; scheduling and scope are yours |
| 11.5 — Intrusion and change detection | **Yours** | No IDS or file-integrity monitoring ships with the platform; nothing prevents running one |
| 12 — Organizational policy | **Yours** | No infrastructure product can supply this |

</div>
</div>

---

## What you switch on for a cardholder environment

Nothing in this list needs custom development or a support contract. Each item is a setting, and each belongs at design time rather than after the environment carries card data.

| Control | How it is enabled |
|---|---|
| Single sign-on with MFA | Enable the Keycloak OIDC integration at install time; MFA and password policy are Keycloak settings |
| Volume encryption at rest | Create a StorageClass with the LUKS layer, after setting a LINSTOR passphrase |
| Restricted outbound traffic | A `SecurityGroup`, or a `CiliumNetworkPolicy` egress allow-list, on the tenant |
| Encrypted east-west traffic | Turn on Cilium transparent encryption — WireGuard or IPsec |
| Twelve-month audit retention | Raise the audit log retention and point the archive at storage you control |
| `restricted` Pod Security | Label the tenant namespace; the admission plugin is already running |
| Internal time source | Set `machine.time` in the Talos machine configuration |
| Column-level encryption for identity data | Enable the Keycloak database encryption proxy, with a static key or Vault Transit |

---

## Migrating a PCI DSS scope from VMware

Teams replacing VMware vSphere usually have a cardholder data environment already scoped around clusters, VLANs and vCenter roles, and the first question is what the equivalent boundary looks like afterwards.

The virtual machines keep running — KubeVirt runs them as Kubernetes workloads — and the scoping boundary becomes the tenant. Segmentation moves from VLANs and distributed firewall rules to Cilium network policies created together with the tenant; vCenter roles and permissions move to Keycloak groups mapped onto tenant-scoped RBAC. The requirements below are the same ones your assessor evaluated against vSphere. See the [VMware alternative](/alternatives/vmware-alternative/) page for the migration mechanics.

---

## Requirement 1: segmentation and audit scope

Segmentation is where most platform evaluations begin, because it sets the size of your audit scope. Putting the CDE in its own tenant gives you a defensible segmentation boundary, but it does not by itself take the rest of the cluster out of scope: the control plane, Cilium, LINSTOR, Keycloak and the nodes are shared services supporting the CDE, and assessors normally treat them as in scope. **Segmentation limits which workloads are in scope, not which platform components.**

A tenant is not a naming convention. Creating one provisions a set of Cilium network policies alongside it, and those policies deny traffic from other tenants by default. Nothing to write by hand, nothing to remember.

Verify it yourself in about a minute. Start a pod in one tenant, then try to reach it from another:

```bash
kubectl -n tenant-a run target --image=nginx:alpine --restart=Never
kubectl -n tenant-a wait --for=condition=Ready pod/target --timeout=60s
TARGET_IP=$(kubectl -n tenant-a get pod target -o jsonpath='{.status.podIP}')

# positive control: reachable from inside the same tenant
kubectl -n tenant-a run probe --rm -i --restart=Never --image=curlimages/curl:8.11.1 -- \
  curl -s -m 5 -o /dev/null -w '%{http_code}\n' "http://${TARGET_IP}/"

# the actual test: blocked from another tenant
kubectl -n tenant-b run probe --rm -i --restart=Never --image=curlimages/curl:8.11.1 -- \
  curl -s -m 5 -o /dev/null -w '%{http_code}\n' "http://${TARGET_IP}/"
```

The cross-tenant probe returns `000`. Run the same probe from inside `tenant-a` as a positive control: it must return `200`, which proves the target is serving and the `000` came from policy rather than from a pod that was never ready.

Note what the default policies do **not** do. Outbound traffic from a tenant to the internet is not restricted, while Requirement 1.3.2 expects outbound from the CDE to be limited to what is necessary. A cardholder environment therefore needs explicit egress rules — a `SecurityGroup`, or a `CiliumNetworkPolicy` with an egress allow-list — on top of the tenant defaults. Cozystack v1.6 adds a tenant-facing `SecurityGroup` API for teams that need finer rules inside their own tenant without asking a platform administrator.

---

## Requirement 2: secure configuration and no vendor defaults

Platform nodes run [Talos Linux](https://www.talos.dev/), an immutable operating system with no shell, no SSH daemon and no package manager. Configuration arrives through an API and is declared, not typed. A whole family of findings — stale local accounts, drifted configuration, someone's forgotten debugging change — becomes far harder to produce. Node-level access still exists through the Talos API, and it deserves the same treatment as any other administrative interface.

The container-specific requirement here is that workloads cannot escalate privileges. Pod Security admission *enforces* `baseline` and only *warns* at `restricted`. Baseline rejects the obvious escapes — privileged containers, host namespaces, hostPath — but still permits running as root and does not require a seccomp profile. Hardening benchmarks an assessor is likely to cite expect `restricted`, so label the namespaces holding the cardholder environment accordingly:

```bash
kubectl label namespace tenant-cde \
  pod-security.kubernetes.io/enforce=restricted --overwrite
```

At the default `baseline` level, a workload that asks for privileges is refused at the door:

```
Error from server (Forbidden): violates PodSecurity "baseline:latest":
host namespaces (hostNetwork=true, hostPID=true), privileged
```

Anonymous API access is disabled and the profiling endpoint is off. Both come from the machine configuration — check them rather than assume them. The [CIS Benchmark page](/compliance/cis-benchmark/) covers the hardening posture in full, including the four deviations it found.

---

## Requirement 3: encrypting stored data — secrets yes, volumes not by default

Two layers matter here, and they behave differently.

**Kubernetes secrets** are encrypted in etcd when the API server runs with `--encryption-provider-config`. That flag comes from the Talos machine configuration supplied at install time rather than from the platform software — so verify it on your own cluster instead of assuming it. Note the limits of the control too: it protects etcd data on disk and in etcd backups, does nothing against a principal who can read the Secret through the API, and buys little if the encryption key sits on the same control-plane node as etcd.

**Volumes** — the disks behind virtual machines and databases — are not encrypted unless you ask. LINSTOR supports at-rest encryption with LUKS: set a passphrase, then create a StorageClass that includes the LUKS layer:

```yaml
# local (non-replicated)
parameters:
  linstor.csi.linbit.com/layerList: "luks storage"
  linstor.csi.linbit.com/encryption: "true"

# replicated — the DRBD layer comes first
parameters:
  linstor.csi.linbit.com/layerList: "drbd luks storage"
  linstor.csi.linbit.com/encryption: "true"
```

Two operational consequences to plan for. The passphrase must be entered by hand after every LINSTOR controller restart (`linstor encryption enter-passphrase`); encrypted volumes do not come back on their own, which turns an unattended restart into an availability event. And the mechanism is a single shared passphrase with no rotation procedure, no split knowledge and no dual control, so Requirements 3.6 and 3.7 have to be met by the key-management process you build around it.

Decide this before the environment is built: converting a populated volume later means migrating the data.

### Backups

Velero is the platform's backup layer and uses the kopia uploader, so backup data is encrypted in the object store with a repository key held in the cluster. That covers the copies, but it does not answer where they live: platform-managed backups land in a shared `cozy-backups` bucket in `tenant-root`, separated between tenants by object path. If cardholder data is backed up, agree with your assessor whether that bucket falls inside your scope, and consider pointing the BackupClass at storage with its own key management.

For personal data held by the identity layer, v1.6 introduced an encrypting proxy in front of the Keycloak database, backed by a static key or Vault Transit. It is off until you enable it.

---

## Requirement 4: encrypting data in transit

cert-manager is part of the platform, with issuers configured for Let's Encrypt or your own authority. Certificates are requested and renewed automatically, which removes the most common cause of a transit-encryption finding: an expired certificate nobody owned. From v1.6 an operator-provided wildcard certificate propagates to every tenant termination point, so tenants inherit valid TLS instead of arranging it themselves.

Requirement 4 is about open public networks, but assessors ask about the internal path too, and two flows are unencrypted until you act on them: pod-to-pod traffic inside the cluster, for which Cilium offers transparent WireGuard or IPsec encryption that is off by default, and DRBD replication between storage nodes. If the network carrying either one is not fully under your control, turn on transparent encryption and put replication on its own isolated network.

---

## Requirements 7 and 8: tenant RBAC and single sign-on

Authentication can be centralized in Keycloak, and this is not the default. A fresh cluster authenticates with a static cluster credential — a shared account, which Requirement 8.2.2 does not allow. Enabling OIDC is an installation-time step, and it belongs before the environment carries cardholder data. Multi-factor authentication, password policy and idle-session timeout are then Keycloak configuration rather than development work. Once enabled, the API server accepts OIDC tokens and reads group membership from the token, so joiners and leavers are handled in one place and the directory you already run stays the source of truth.

Authorization is scoped to the tenant, and more tightly than teams expect. A tenant user can create databases and virtual machines through the platform API, yet the tenant role carries no `get secrets` verb. Check it rather than take it on trust — as the tenant user, against the tenant namespace:

```bash
kubectl auth can-i --list -n tenant-a
kubectl auth can-i get secrets -n tenant-a
```

The second returns `no`. Treat that as least privilege at the API surface rather than as a confidentiality boundary: anyone who can schedule workloads in a namespace can mount that namespace's secrets into a pod. Where it matters, restrict workload creation as well.

Quotas are hierarchical, so a sub-tenant cannot exceed its parent's budget — useful when a CDE must be capped as well as isolated.

---

## Requirement 10: audit logging and retention

The API server writes an audit log to a file on the control-plane node, governed by a policy you supply, and rotates it by age. Centralized log collection and metrics storage ship with the platform for workloads — but shipping the API audit log into them is not wired up by default, and Requirement 10.3.3 expects audit logs to reach a separate, centrally managed server promptly.

Two more things to check rather than assume:

**The contents of the audit policy.** A `Metadata`-level policy will not produce the per-event detail Requirement 10.2.1 expects — but raising everything to `RequestResponse` is the wrong correction, because request bodies carry Secret values and personal data, and the audit log then becomes another store of the data you are protecting. Split it by resource: `RequestResponse` for role bindings and admission configuration, `Metadata` for Secrets. The [GDPR page](/compliance/gdpr/) explains why the maximal policy trades one finding for another.

**Protection of the trail itself.** Requirements 10.3.2 through 10.3.4 require the log to be unmodifiable and watched by a change-detection mechanism, neither of which the platform provides.

One number needs your attention. Requirement 10.5.1 expects twelve months of audit history, three of them immediately available. The default audit retention on the cluster examined here is thirty days. Raise it during design and point the archive at storage you control.

### Time synchronization

Requirement 10.6 is easy to miss and cheap to satisfy. Talos synchronizes node time through `machine.time`, and the default is a public NTP pool. For a cardholder environment, point every node at the same designated internal source that itself syncs to an accepted external reference, keep the setting under configuration management so nobody can change it on a live node, and confirm that changes to it land in the audit trail.

---

## Requirements 6 and 11: patching and security testing

Platform component images are pinned to immutable digests, so a release is reproducible and what you tested is what you run. Releases are frequent and changelogs name every bumped component, so you can show an assessor exactly what changed and when. Security advisories are published openly, including exposure assessments for CVEs that turn out not to affect the platform — a public record that is directly usable in the vulnerability-management part of your programme.

The rest is yours: scanning schedules, penetration testing, and the review cadence your assessor expects. A container registry with built-in scanning is available from the catalog. The [CIS Benchmark page](/compliance/cis-benchmark/) is one worked example of a security test executed against a live cluster, with the raw report turned into something an assessor can use.

---

## Getting help with an assessment

Cozystack is Apache 2.0 and its source is public, so nothing above has to be taken on trust. If you are preparing for an assessment and want the control mapping reviewed against your scope, that is what [enterprise support](/products/cozystack-enterprise-support/) and the [platform readiness assessment](/services/platform-readiness-assessment/) cover. For financial entities also in scope for DORA, the [DORA readiness engagement](/solutions/dora-compliance/) maps the same architecture against that regulation rather than repeating the work.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Talk to an engineer</a>
  <a class="cta-secondary" href="/products/private-cloud-platform/">Ænix Private Cloud Platform →</a>
</div>

---

## Notes

This page is informational. It is not legal advice, not an assessment, not a certification, and not a warranty that any configuration will satisfy a Qualified Security Assessor. Statements describe Cozystack v1.6 — the engine the Ænix platforms are built from — as observed on a reference cluster in August 2026; your installation may differ, particularly in the Talos machine configuration.
