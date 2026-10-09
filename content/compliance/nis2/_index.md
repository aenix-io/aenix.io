---
title: "NIS2 evidence from the Ænix platform layer"
seo_title: "NIS2 Article 21 evidence for the Kubernetes platform"
description: "NIS2 Article 21(2)(a)–(j) mapped to what the Ænix platforms provide and what stays with you, plus Article 23 reporting inputs and supply-chain facts."
page_type: "solution-landing"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "nis2 kubernetes platform"
secondary_keywords: ["nis2 article 21 technical measures", "nis2 article 23 incident reporting evidence", "nis2 supply chain security open source", "nis2 implementing regulation 2024/2690 cloud"]
hreflang_de: /de/compliance/nis2/
related_pages:
  - /solutions/nis2-compliance/
  - /resources/nis2-compliance-checklist/
  - /compliance/dora/
  - /compliance/cis-benchmark/
  - /compliance/iso-27001/
  - /products/private-cloud-platform/
direct_answer: |
  **This page is the platform-side half of a NIS2 conversation: for each of the ten measures in Article 21(2) of Directive (EU) 2022/2555, what the Ænix platforms supply, what ships but stays off until you enable it, and what remains the entity's own work. The platform supports incident handling, business continuity, access control, encryption and vulnerability management with concrete mechanisms — tenant network isolation, an immutable node OS, replicated storage, encrypted backups, Keycloak single sign-on with multi-factor authentication, audit logs and alerting. It also feeds the Article 23 reporting clock with the records an early warning and a final report draw on. It cannot hold the obligation: NIS2 binds essential and important entities and their management bodies (Article 20), not software. The platforms are built to support NIS2-aligned architectures; Ænix makes no claim that a platform is "NIS2 compliant".**
quick_facts:
  - label: "What this page is"
    value: "Platform-side control evidence. The assessment engagement lives on the NIS2 compliance solution page."
  - label: "Legal basis"
    value: "Directive (EU) 2022/2555. Member States had to transpose it by 17 October 2024 and apply it from 18 October 2024 (Article 41)."
  - label: "Measures mapped"
    value: "Article 21(2), points (a) to (j): each one split into platform-provided, opt-in, and the entity's own responsibility."
  - label: "Reporting"
    value: "Article 23(4): early warning within 24 hours, incident notification within 72 hours, final report one month after the notification. The platform supplies logs, metrics and alerts; the entity classifies and notifies."
  - label: "Cloud and hosting providers"
    value: "Cloud computing, data-centre and managed service providers are listed in Annex I; Implementing Regulation (EU) 2024/2690 sets their technical requirements for Article 21(2)."
  - label: "Supplier certification"
    value: "AENIX s.r.o. holds ISO/IEC 27001:2022 for its ISMS (certificate № SIC.MS.008.ISO/IEC27001.5719, valid through 26 February 2027). The platforms themselves are not certified."
  - label: "Not provided"
    value: "Governance, risk analysis, incident classification and notification, training and HR security — and automated cross-site VM failover."
faq:
  - q: "Is the Ænix platform NIS2 compliant?"  # content-rules: allow compliant-claim
    a: "The question does not apply to a platform. NIS2 places obligations on essential and important entities and makes their management bodies accountable under Article 20. A platform is part of the network and information systems those entities secure. What the Ænix platforms do is supply technical measures for several Article 21(2) points and make them demonstrable. There is no NIS2 certificate for a platform, and Ænix does not claim one."
  - q: "Which Article 21(2) measures does the platform actually cover?"
    a: "It contributes most to (b) incident handling, (c) business continuity, (e) secure maintenance and vulnerability handling, (h) cryptography, (i) access control and (j) multi-factor authentication. It contributes evidence, but not the substance, to (a) risk analysis and (f) effectiveness assessment. Points (d) supply chain and (g) cyber hygiene and training are mostly organisational. The table on this page gives the split point by point."
  - q: "Does the platform report incidents to the CSIRT for us?"
    a: "No. Deciding whether an incident is significant under Article 23(3) and notifying the CSIRT or competent authority is the entity's decision and duty. The platform shortens the path to that decision: metrics, logs, alerts and the Kubernetes API audit log give you the timeline, scope and indicators an early warning and a final report need — provided retention is set long enough before the incident happens."
  - q: "We are a hosting or cloud provider. Does NIS2 apply to us?"
    a: "Probably, if you operate in the EU and meet the size thresholds: cloud computing service providers, data-centre service providers and managed service providers are listed in Annex I. For those entities, Commission Implementing Regulation (EU) 2024/2690 lays down the technical and methodological requirements of the Article 21(2) measures and further criteria for when an incident is significant. Your national transposition decides the details; confirm your classification with counsel."
  - q: "How does Ænix fit into our supply-chain assessment under Article 21(2)(d)?"
    a: "Downloading and running Apache 2.0 Cozystack creates no supplier relationship. Buying an Ænix subscription, support or services does, and then Ænix is a direct supplier you assess under Article 21(3). Useful inputs: AENIX s.r.o. holds ISO/IEC 27001:2022 for its ISMS, the engine's source and security advisories are public, and remote access to your clusters happens only with your approval."
  - q: "How is this different from the NIS2 compliance solution page?"
    a: "Different questions. The solution page describes a fixed-price readiness engagement that maps your organisation and architecture against NIS2 and produces a remediation plan. This page describes what the infrastructure itself provides and where its limits are. Read the solution page for the programme and this one for the artefacts it draws on."
---

**NIS2 asks essential and important entities for "appropriate and proportionate technical, operational and organisational measures". Infrastructure can carry a good part of the technical ones. It cannot carry the operational or organisational ones, and no platform vendor should tell you otherwise.** This page shows the split, measure by measure.

---

## What this page is, and what it is not

This is the **platform-side** half. The organisational half is a fixed-price engagement described on the **[NIS2 compliance](/solutions/nis2-compliance/)** page: classifying your entity, mapping your current controls, a gap analysis, and a remediation plan. The free **[NIS2 compliance checklist](/resources/nis2-compliance-checklist/)** is the short version.

**On provenance.** The mechanisms below are those of **Cozystack v1.6**, the open-source, Apache 2.0, CNCF engine that Ænix created and co-maintains with maintainers from other companies, and that the Ænix Public Cloud Platform, Private Cloud Platform and AI Platform are built on. They are the same mechanisms measured on the [PCI DSS](/compliance/pci-dss/), [GDPR](/compliance/gdpr/), [DORA](/compliance/dora/) and [CIS Benchmark](/compliance/cis-benchmark/) pages, which carry the verification commands and test runs. The proprietary Ænix modules (WHMCS integration, billing and portal components) run on top of the engine and do not change these controls.

**And who carries the obligation.** Directive (EU) 2022/2555 had to be transposed into national law by 17 October 2024 (Article 41). It binds essential and important entities in the sectors of Annexes I and II. Cloud computing, data-centre and managed service providers are among them, in Annex I. For them, Commission Implementing Regulation (EU) 2024/2690 sets out the technical and methodological requirements of each Article 21(2) measure. Software is not in scope. The entities that run it are.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Article 21(2), point by point

Article 21(2) lists ten measures that the Article 21(1) measures "shall include at least". Here they are in the Directive's order. **Provided** means active on a standard installation. **Opt-in** means it ships but you enable it. **Yours** means no infrastructure can do it for you.

| Art. 21(2) | Measure (Directive wording, abridged) | What the platform supplies | What stays with you |
|---|---|---|---|
| (a) | Policies on risk analysis and information system security | **Evidence, not policy.** Declarative state as manifests: an exact, versioned inventory of tenants, services and their configuration. | The risk analysis, the security policy and its approval by the management body. |
| (b) | Incident handling | **Provided:** metrics, log aggregation, alerting and dashboards; Kubernetes API audit log under a policy you supply. | Detection rules for your threats, on-call, triage, classification and the response playbook. |
| (c) | Business continuity, backup management, disaster recovery, crisis management | **Provided:** LINSTOR/DRBD replicated storage where the StorageClass asks for it, live migration, Velero backups encrypted by default, stretched multi-site clusters. **Not provided:** automated cross-site VM failover. | Backup target outside the protected cluster, restore drills against an RTO/RPO, the continuity and crisis plan. |
| (d) | Supply chain security | **Provided:** open source code under Apache 2.0, public security advisories, components pinned to immutable image digests. | Supplier inventory and assessment under Art. 21(3), including Ænix if you buy from Ænix, and your hardware and data-centre suppliers. |
| (e) | Security in acquisition, development and maintenance, incl. vulnerability handling and disclosure | **Provided:** immutable Talos Linux nodes with no SSH and no shell; releases with changelogs naming every bumped component; openly published advisories. | Your upgrade cadence, vulnerability management for your own workloads and images, your disclosure process. |
| (f) | Policies and procedures to assess effectiveness | **Evidence:** reproducible test runs, e.g. the published kube-bench run and conformance runs, repeatable on your own cluster. | The assessment programme, internal audit and its schedule. |
| (g) | Basic cyber hygiene and cybersecurity training | **Partly provided:** privileged workloads refused by admission, tenant isolation by default. | Hygiene practices and the training programme, including management-body training under Art. 20(2). |
| (h) | Cryptography and, where appropriate, encryption | **Provided:** TLS for published services through cert-manager, encrypted backups, Kubernetes secrets encrypted in etcd when the API server runs with an encryption provider. **Opt-in:** LUKS volume encryption, Cilium transparent encryption (WireGuard or IPsec) for east-west traffic. | The cryptography policy, key custody and the decision which data classes need volume encryption. |
| (i) | HR security, access control policies, asset management | **Provided:** tenant-scoped RBAC; Cilium network policies isolating tenants on creation. **Opt-in:** Keycloak SSO federated with your directory. | Joiner-mover-leaver process, access reviews, the asset register beyond the platform. |
| (j) | Multi-factor or continuous authentication; secured communications | **Opt-in:** MFA through Keycloak once the OIDC integration is enabled at installation; a default install authenticates with a cluster credential. | Enforcing MFA for every administrator, secured voice, video and emergency communications. |

</div>
</div>

Two points in that table deserve more than a cell.

**Point (c) and failover.** The platform keeps data available through replication and moves workloads without downtime during maintenance. It does not fail virtual machines over between sites automatically after an unplanned outage. Within a site, after an unplanned node loss, virtual machines do not restart on their own either, because the platform ships no fencing: once an operator marks the failed node out of service (or an external fencing mechanism does), KubeVirt restarts them on healthy nodes, with their data if their disks sit on replicated storage. Worker nodes of tenant Kubernetes clusters are replaced automatically. Building the fencing step and cross-site failover into a procedure is configuration and rehearsal work. See [disaster recovery](/solutions/disaster-recovery/). The second gap is backup location. Platform-managed backups default to a shared bucket inside the cluster they protect. Point the BackupClass at storage outside the cluster, with its own credentials, and write that into the backup policy.

**Point (j) and the default install.** Single sign-on and MFA are available but not active by default. Enable the Keycloak OIDC integration before the platform carries production workloads; MFA and password policy are then Keycloak settings. The [PCI DSS page](/compliance/pci-dss/) gives the commands to verify it.

---

## Article 23: what the platform contributes to reporting

Article 23(4) sets the clock once you become aware of a significant incident:

- **Early warning** without undue delay and in any event **within 24 hours**, saying whether the incident is suspected to be malicious or could have a cross-border impact.
- **Incident notification** within **72 hours**, with an initial assessment of severity and impact and, where available, indicators of compromise.
- **Final report** not later than **one month** after the incident notification, with a detailed description, the likely root cause, the mitigation measures applied and ongoing, and the cross-border impact where applicable.

The decision that an incident is significant, the classification and the notification belong to the entity. Under Article 23(3) an incident is significant if it caused or can cause severe operational disruption or financial loss, or considerable damage to others. For cloud, data-centre and managed service providers, Implementing Regulation (EU) 2024/2690 adds concrete thresholds.

What the platform contributes is the record. Each deadline requires facts, and you can only report facts you have collected:

**Alerting and metrics** give you the moment of detection and the blast radius. Awareness starts the 24-hour clock, so how fast an alert reaches a person matters.

**Centralised logs** give you the sequence of events across tenants and services for the 72-hour assessment.

**The Kubernetes API audit log** records who changed what on the control plane, under a policy you supply. Two settings decide whether it is useful in a final report. **Retention**: the default on the reference cluster is thirty days. That is long enough for a 72-hour notification. It may be too short for an investigation that starts weeks later, so raise it or ship the log to storage you control, immutable if your policy requires it. **The policy**: do not raise everything to full request and response capture. That writes secrets and personal data into the log. The [GDPR page](/compliance/gdpr/) and [CIS Benchmark page](/compliance/cis-benchmark/) give the workable split.

**Per-tenant isolation** limits the scope you have to report. When tenants are separated by network policy and RBAC, an incident in one tenant is easier to show as contained. That helps with Article 23(1)'s duty to tell affected recipients of your services, and with assessing cross-border impact.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Supply-chain security, including Ænix as a supplier

Article 21(2)(d) and Article 21(3) ask you to consider "the vulnerabilities specific to each direct supplier and service provider" and the quality of their products and secure development practices. Here are the facts to put in that assessment.

**The engine is open source.** Cozystack is Apache 2.0 and hosted by the CNCF. You can read, audit and build the code without asking anyone. Continuity does not depend on one company. If an Ænix subscription ends, the open-source platform keeps running on your hardware. Only the proprietary modules and Ænix support stop.

**It runs on your hardware.** There is no vendor control plane in someone else's account, and no standing vendor access. When Ænix supports you, remote access to your clusters happens only with your approval.

**Changes are traceable.** Component images are pinned to immutable digests, so a release is reproducible. Changelogs name every bumped component. Security advisories are published openly, including assessments of CVEs that turn out not to affect the platform. You can use that record directly in vulnerability handling under point (e).

**Ænix as a direct supplier.** If you buy a subscription, support or services, Ænix is a supplier you assess. AENIX s.r.o. holds **ISO/IEC 27001:2022** certification for its information security management system ([certificate details](/compliance/iso-27001/)). That certifies how the company works, not a product. Ænix holds no SOC 2 report.

**Upstream components.** The platform assembles CNCF and other open-source projects: Kubernetes, KubeVirt, Cilium, LINSTOR/DRBD, Talos Linux, Keycloak and others. Their maintainers are not your contractual suppliers. Their security record still belongs in your risk analysis, and Article 22's coordinated EU assessments of critical supply chains may cover some of them.

</div>
</div>

---

## Article 20: governance stays with the management body

Article 20(1) requires the management bodies of essential and important entities to **approve** the cybersecurity risk-management measures, **oversee** their implementation, and makes them **liable** for infringements. Article 20(2) requires their members to follow training.

No platform feature fills that role. A platform can make the measures cheaper to implement and easier to evidence. Approving them, overseeing them and answering for them stay with your board. If you want help preparing the material a management body approves, that is part of the [NIS2 readiness engagement](/solutions/nis2-compliance/).

<div class="cta-row">
  <a class="cta-primary" href="/solutions/nis2-compliance/">NIS2 readiness engagement</a>
  <a class="cta-secondary" href="/compliance/">All compliance evidence →</a>
</div>

---

## Sources

- [Directive (EU) 2022/2555 (NIS2), EUR-Lex](https://eur-lex.europa.eu/eli/dir/2022/2555/oj): Articles 20, 21, 22, 23, 41 and Annex I.
- [Commission Implementing Regulation (EU) 2024/2690, EUR-Lex](https://eur-lex.europa.eu/eli/reg_impl/2024/2690/oj): technical and methodological requirements and significant-incident criteria for cloud, data-centre and managed service providers, among others.
- Platform mechanisms and their verification: [PCI DSS](/compliance/pci-dss/), [GDPR](/compliance/gdpr/), [DORA](/compliance/dora/), [CIS Benchmark](/compliance/cis-benchmark/), [ISO/IEC 27001](/compliance/iso-27001/).

## Notes

This page describes Cozystack v1.6, the engine the Ænix platforms are built from, and is informational. It is not legal advice, not an assessment and not a statement that any configuration satisfies a competent authority. NIS2 is a directive: the obligations that bind you are those of your Member State's transposing law, which can go further than the Directive. Whether NIS2 applies to you, and as an essential or an important entity, is a question for your own counsel.
