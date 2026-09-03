---
title: "GDPR and the Ænix platforms"
description: "Which GDPR Article 32 measures the Aenix platforms supply — residency, encryption, access control, tenant separation, erasure — and which stay with you."
page_type: "solution-landing"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "gdpr kubernetes platform"
secondary_keywords: ["article 32 technical measures kubernetes", "gdpr data residency self-hosted cloud", "right to erasure backups kubernetes", "gdpr chapter v third country transfer cloud"]
hreflang_de: /de/compliance/dsgvo/
related_pages:
  - /compliance/pci-dss/
  - /compliance/dora/
  - /solutions/data-sovereignty/
  - /products/private-cloud-platform/
  - /industries/healthcare/
direct_answer: |
  **Personal data on an Ænix platform stays where you put it. The platforms run on your own hardware in a facility you choose: no control plane in someone else's cloud, no vendor account, no telemetry channel required for the software to work. On top of that they supply the measures GDPR Article 32 asks about — encryption in transit and for backups, centralized identity through Keycloak, tenant isolation enforced by Cilium network policy, audit logging, backup and restore. Some measures are available but off until you enable them, notably volume encryption at rest, and this page marks each one. Compliance itself belongs to the organisation holding the data: why it holds it, on what legal basis, for how long. A platform supplies measures and makes them demonstrable — Aenix makes no claim that any configuration satisfies a supervisory authority.**
quick_facts:
  - label: "Data residency"
    value: "Your hardware, your facility. No vendor control plane, no standing vendor access, no telemetry required to run."
  - label: "Encrypted by default"
    value: "Backups (Velero with the kopia uploader); Kubernetes secrets in etcd where the API server runs with --encryption-provider-config."
  - label: "Opt-in encryption"
    value: "Volume encryption at rest via LINSTOR and LUKS — a StorageClass decision that belongs at design time."
  - label: "Access control"
    value: "Keycloak OIDC single sign-on (not the default), tenant-scoped RBAC, no `get secrets` verb on the tenant role."
  - label: "Separation"
    value: "Cilium network policies deny cross-tenant traffic on creation — verifiable in a minute, and not the same thing as separation of processing."
  - label: "Largest gap"
    value: "Integrity monitoring. No IDS, file-integrity monitoring or change detection ships with the platform."
  - label: "Certification"
    value: "None. There is no GDPR certification for a platform, and Aenix holds no ISO 27001 or SOC 2 certificate."
faq:
  - q: "Is the Aenix platform GDPR compliant?"
    a: "The question does not apply to infrastructure. An organisation is compliant; a platform supplies measures. The Aenix platforms supply encryption, access control, tenant separation, audit logging, backup and restore, and full control over where data physically resides. The lawful basis, the records of processing, the impact assessments and the breach notifications remain with whoever determines the purposes and means of the processing."
  - q: "Do these measures describe Cozystack or the Aenix platforms?"
    a: "Both, because they are the same software. The Aenix Public Cloud Platform, Private Cloud Platform and AI Platform are distributions of Cozystack, the Apache 2.0 CNCF project Aenix creates and maintains, and the observations on this page were made against a Cozystack v1.6 reference cluster. Several settings — the etcd encryption provider in particular — come from the Talos machine configuration applied at install time rather than from the software, so confirm them on your own cluster."
  - q: "Does self-hosting avoid third-country transfer problems?"
    a: "It removes the platform itself from the Chapter V analysis: the software runs on your hardware and needs no vendor access to operate. It does not close the question. Under the EDPB's reading, remote access from a third country is itself a transfer, so support engineers, an integrator's staff, out-of-hours administrators and anything you connect for observability still count. Whether your own applications and integrations move data elsewhere is a separate analysis."
  - q: "Is personal data encrypted at rest by default?"
    a: "For the storage that actually holds personal data — the volumes behind databases and virtual machines — no. Volume encryption is opt-in per StorageClass and belongs in the design rather than in a later change. Backups are encrypted by default. Kubernetes secrets are encrypted in etcd when the API server runs with --encryption-provider-config, which comes from the Talos machine configuration, and secrets hold credentials rather than the personal data your records of processing describe."
  - q: "Does running the platform ourselves introduce a processor?"
    a: "Running open-source software on your own hardware adds no third party to the processing: there is no service, no account and no data leaving your infrastructure, so there is nobody to appoint under Article 28. Your own role is unchanged — controller for data whose purposes and means you determine, processor only where you host on behalf of another controller. If you contract Aenix or an integrator to operate the platform, that is a processor or sub-processor relationship and needs an Article 28 agreement."
  - q: "How do we handle erasure when the data is also in backups?"
    a: "Backups exist precisely so that deletions can be undone, so erasure from them is not a technical switch. The commonly used position — described as workable by several supervisory authorities without being settled across the EEA — is documented retention: state how long backups live, put the data beyond use in the meantime, ensure erased data ages out within that window, and do not reintroduce it selectively on restore. The platform lets you set backup retention deliberately and point backups at storage you control; the reasoning and the position are yours to record."
---

**Personal data on an Ænix platform stays where you put it.** The platforms are built on Kubernetes, KubeVirt and Talos Linux and run on your own hardware: no control plane in someone else's cloud, no vendor account, no service to sign up for. On top of that they bring the measures Article 32 asks about — encryption in transit and for backups, centralized identity, tenant isolation enforced by network policy, audit logging, backup and restore.

That is a strong starting position, and this page walks through it measure by measure. It also marks the places where a control is available but off until you enable it, and the two or three questions a data protection officer will raise that no infrastructure can answer for you. Better to meet those here than in a meeting.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Talk to an engineer</a>
  <a class="cta-secondary" href="/compliance/">All compliance evidence →</a>
</div>

---

## One framing worth keeping

Compliance belongs to the organisation holding the data — why it holds it, on what legal basis, for how long. A platform supplies measures and makes them demonstrable. The useful answer to "is this platform GDPR compliant" is what follows below, not a yes that falls apart under the first question.

**And one note on provenance.** The observations here were made against **Cozystack v1.6**, the open-source, Apache 2.0, CNCF engine that Ænix creates and maintains and that all three Ænix platforms are distributions of. There is no separate closed build behaving differently, which is why the measures transfer directly. What Ænix adds around the engine — the Talos machine configuration, the reference architecture, operations — is where several of the settings below actually come from, and each is flagged.

---

## Data residency: where the data physically lives

Residency is usually the first question, and the easiest one to answer well.

The platform installs on your own hardware, in a facility you choose. There is no control plane in someone else's cloud, no vendor who needs standing access in order for the platform to work, and no telemetry channel to a vendor required for it to run. For Chapter V — transfers of personal data to third countries — that removes the largest single element from the analysis.

It does not close it. Under the EDPB's reading, remote access from a third country is itself a transfer, so support engineers, an integrator's staff, out-of-hours administrators and anything you connect for observability all still count. The outbound paths the cluster does use — container registries, certificate authorities, time sources and update channels — are worth listing once, because they say where the environment reaches even when the personal data does not. If you operate in several jurisdictions, tenants and node placement let you keep processing in one of them rather than spreading it across all of them.

For the architectural version of this discussion — customer-controlled keys, jurisdictional residency, supervisory access — see [data sovereignty](/solutions/data-sovereignty/).

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Which Article 32 measures the platform covers

### Encryption of personal data

Three layers, and they behave differently.

**Kubernetes secrets** are encrypted in etcd where the API server runs with `--encryption-provider-config`. That setting comes from the Talos machine configuration supplied at install time, so confirm it on your own cluster.

**Volumes** — the disks behind databases and virtual machines, which is where personal data actually sits — are not encrypted unless you ask. LINSTOR supports at-rest encryption with LUKS, enabled by setting a passphrase and creating a StorageClass that includes the LUKS layer. Decide it at design time: converting a populated volume later means migrating the data.

Two consequences belong in the same decision, because they cut against Article 32(1)(b) and (c) rather than for them. The passphrase is a single shared secret with no rotation procedure, split knowledge or dual control, so key management is a process you build around it. And it must be entered by hand after every restart of the LINSTOR controller — encrypted volumes do not come back on their own, which turns an unattended restart into an availability event.

**Backups** are encrypted by default. Velero uses the kopia uploader, so backup data is written to object storage under a repository key held in the cluster.

For personal data held by the identity layer specifically, v1.6 added an optional encrypting proxy in front of the Keycloak database, giving column-level encryption backed by a static key or Vault Transit. It is off until you enable it.

### Confidentiality and access control

Authentication can be centralized in Keycloak through OIDC, which puts joiners, leavers, multi-factor authentication and password policy in one place instead of scattering them across kubeconfig files. It is not the default — a fresh cluster authenticates with a cluster credential, which is a shared account and unsuitable for anything holding personal data. Enable OIDC before the environment carries real data.

Authorization is scoped to the tenant, and more tightly than teams expect: a tenant user can create databases and virtual machines through the platform API yet cannot read raw Kubernetes secrets. Check it rather than take it on trust — as the tenant user, against the tenant namespace:

```bash
kubectl auth can-i --list -n tenant-a
kubectl auth can-i get secrets -n tenant-a
```

The second returns `no`. Read that as least privilege at the API surface rather than as a confidentiality boundary — a principal who can schedule workloads in a namespace can mount that namespace's secrets into a pod, so the boundary holds only as far as you also restrict workload creation.

### Separation of processing

Tenants are isolated from each other at the network layer by Cilium policies created together with the tenant, and that isolation is enforced rather than declared. You can verify it in a minute — start a pod in one tenant and try to reach it from another, with a same-tenant probe as the positive control: the cross-tenant probe returns `000`, the same-tenant one `200`. The commands are on the [PCI DSS page](/compliance/pci-dss/).

Read it for what it is. Network separation is not separation of processing in the sense a data protection officer means. The control plane, etcd, LINSTOR and the identity layer are shared services, platform administrators see across every tenant, and platform-managed backups land in a single `cozy-backups` bucket in `tenant-root` separated between tenants by object path rather than by credentials or by key. Tenant egress to the internet is not restricted by default either, so an exfiltration path stays open until you add a `SecurityGroup` or an egress allow-list.

If you process personal data for several controllers, treat the tenant as a strong first boundary and document the shared components and the administrators who cross it — that is the part a data protection officer will ask about.

### Integrity of processing systems

Article 32(1)(b) names integrity alongside confidentiality, availability and resilience, and this is the measure with the largest gap. Immutable node images and digest-pinned platform components make undetected drift harder, and the audit log records who changed what through the API. But no intrusion detection, no file-integrity monitoring and no change-detection mechanism ship with the platform. Nothing prevents you running one, and if your risk assessment calls for it, that is an addition you make rather than a control you inherit.

### Ability to restore availability after an incident

Article 32(1)(c) asks for the ability to restore access to personal data in a timely manner. Velero ships with the platform for scheduled backups, volume snapshots and cluster state, and restores are worth rehearsing rather than assuming — a backup nobody has restored is a hope, not a measure. The [DORA page](/compliance/dora/) covers where backups should land and why the default location is not the right answer for a regulated environment.

### Regular testing of measures

Article 32(1)(d) asks for a process of testing and evaluating effectiveness. The [CIS Benchmark page](/compliance/cis-benchmark/) shows one such test run against a live cluster, with the failures sorted into real deviations and artefacts of the architecture. Nothing prevents you from running it on your own schedule; the manifest is published there.

</div>
</div>

---

## The right to erasure, and where it gets awkward

The right to erasure is where infrastructure and law meet uncomfortably, so it is worth being concrete rather than reassuring.

Deleting a database row is straightforward. Deleting it from **backups** is not: backups exist precisely so that deletions can be undone. The commonly used position — one several supervisory authorities have described as workable, without it being settled across the EEA — is documented retention: state how long backups live, put the data beyond use in the meantime, ensure erased data ages out within that window, and do not reintroduce it selectively on restore. Record the reasoning, tell the data subject when the erasure will complete, and check the position against your own authority's guidance rather than against this page. The platform does not solve this for you — but it does let you set backup retention deliberately and point backups at storage you control.

**Audit logs** create a second version of the same problem. Start from the fact that the audit log is already a store of personal data: at the default `level: Metadata` it records usernames, groups and source IP addresses, which are personal data about your administrators regardless of what the requests contained. It needs an entry in your Article 30 records, a retention period and an access rule of its own — the default retention on the cluster examined here is thirty days.

The trap sits one level up. Raising the policy to `RequestResponse` to satisfy some other framework writes request bodies — secret values, and whatever personal data your users put in annotations — into the same file. Split the policy by resource instead: `RequestResponse` where knowing what changed is the point, `Metadata` for secrets and for anything carrying personal data.

---

## What stays with you

No infrastructure product supplies any of the following: the lawful basis for processing, records of processing activities under Article 30, data protection impact assessments where Article 35 requires them, notification of a personal data breach to the supervisory authority within 72 hours under Article 33, responses to data subject requests, the appointment of a data protection officer where Article 37 requires one, and the Article 28 agreement with anyone who processes personal data on your behalf.

The platform is a tool. The obligations sit with whoever determines the purposes and means of the processing.

---

## Where this sits next to the other frameworks

Financial entities will be reading this alongside [DORA](/compliance/dora/); anyone handling card data alongside [PCI DSS](/compliance/pci-dss/), where the same audit-policy decision appears with the opposite pressure. Essential and important entities under NIS2 will find the regulator-facing programme on the [NIS2 solution page](/solutions/nis2-compliance/). The overlap is real and deliberate: one architecture, several regimes reading it differently.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Talk to an engineer</a>
  <a class="cta-secondary" href="/solutions/data-sovereignty/">Data sovereignty →</a>
</div>

---

## Notes

This page describes Cozystack v1.6 — the engine the Ænix platforms are built from — as observed on a reference cluster in August 2026, and is informational. It is not legal advice, not an assessment, and not a warranty that any configuration satisfies a supervisory authority. Your installation may differ, particularly in the Talos machine configuration that supplies several of the settings above.
