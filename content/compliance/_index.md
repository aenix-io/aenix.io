---
title: "Compliance evidence for the Ænix platforms"
description: "Which controls the Aenix platforms provide by default, which are opt-in, and which stay with you — across PCI DSS, GDPR, DORA, CIS and Kubernetes conformance."
hero_subtitle: "What the platform controls, what you switch on, and what stays yours"
language: "en"
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "kubernetes compliance evidence"
secondary_keywords: ["cis kubernetes benchmark results", "pci dss kubernetes", "gdpr kubernetes platform", "dora ict third-party risk platform", "kubernetes conformance cozystack"]
hreflang_de: /de/compliance/
related_pages:
  - /solutions/dora-compliance/
  - /solutions/nis2-compliance/
  - /solutions/data-sovereignty/
  - /products/private-cloud-platform/
  - /products/cozystack-enterprise-support/
direct_answer: |
  **This section publishes the control-level evidence behind the Ænix Public Cloud Platform, Ænix Private Cloud Platform and Ænix AI Platform: which technical controls are active on a fresh installation, which ship but stay off until you enable them, and which no infrastructure product can hold for you. It covers PCI DSS v4.0.1, GDPR Article 32, DORA, the CIS Kubernetes Benchmark and CNCF Kubernetes conformance. Every measured result on these pages was produced by running the tool against Cozystack — the open-source, Apache 2.0, CNCF engine the Ænix platforms are built from — not against a separate closed build, because no separate closed build exists. Auditors do not certify a platform; they certify the environment you build on it. These pages exist so you can tell an assessor which half is which.**
quick_facts:
  - label: "What this section is"
    value: "Per-framework control mapping plus the raw test runs behind it — reproducible on your own cluster."
  - label: "Frameworks covered"
    value: "PCI DSS v4.0.1, GDPR (Article 32 and erasure), DORA, CIS Kubernetes Benchmark v1.12, CNCF Kubernetes conformance."
  - label: "What was tested"
    value: "Cozystack v1.6 / v1.6.1 on Talos Linux — the same engine the three Ænix platforms ship, not a separate build."
  - label: "Certifications held"
    value: "None claimed. Aenix holds no ISO 27001 or SOC 2 certificate, and no platform can hold a PCI DSS or GDPR certification."
  - label: "Conformance"
    value: "Tenant Kubernetes clusters pass the CNCF conformance suite in full on Kubernetes v1.31 through v1.35."
  - label: "CIS Benchmark"
    value: "54 pass, 24 fail, 53 warn on the management cluster — with every failure sorted into deviation, control met otherwise, or not applicable."
  - label: "Licence of the engine"
    value: "Apache 2.0. Source, advisories and test manifests are public, so nothing here has to be taken on trust."
faq:
  - q: "Are these benchmark results for Cozystack or for the Aenix platforms?"
    a: "For Cozystack, and that is the honest and useful answer. The Aenix Public Cloud Platform, Private Cloud Platform and AI Platform are distributions of Cozystack, the Apache 2.0 CNCF project Aenix creates and maintains. There is no separate closed-source engine to test. A control that passes on Cozystack passes on the platform built from it; a deviation on Cozystack is a deviation on the platform. Where a result depends on the Talos machine configuration or the reference architecture Aenix supplies around the engine rather than on the software itself, each page says so explicitly."
  - q: "Is the Aenix platform certified — ISO 27001, SOC 2, PCI DSS?"
    a: "No. Aenix holds no ISO 27001 or SOC 2 certificate, and does not claim one. PCI DSS certification applies to a scoped cardholder data environment and is signed by a Qualified Security Assessor, not granted to a platform. The CIS Benchmark has no pass or fail verdict to award at all — it is a list of controls. What the platforms do is supply and evidence the technical controls those programmes depend on, and support your certification work; that is a narrower claim, and it is the one we make."
  - q: "Can we reproduce these results on our own cluster?"
    a: "Yes, and you should before an assessment. The CIS Benchmark page publishes the exact kube-bench job manifest, pinned image version and benchmark revision used for the published run. The Kubernetes conformance page publishes the Sonobuoy invocation. The PCI DSS and GDPR pages give kubectl commands that verify tenant isolation and RBAC scope directly. Your installation may produce different numbers, particularly where the Talos machine configuration differs."
  - q: "How does this section relate to the DORA and NIS2 solution pages?"
    a: "Different questions. The DORA and NIS2 solution pages describe the engagement — a fixed-price readiness assessment that maps your architecture against the regulation and produces a remediation plan. This section is the platform-side evidence an assessment draws on: which controls exist, how they were measured, and what the measurement did not cover. Read the solution page for the programme, these pages for the artefacts."
  - q: "Does a hosted platform's Kubernetes certification transfer to our installation?"
    a: "No. A CNCF listing describes one named product at one named version, submitted by one entity. Running the same open-source platform yourself is not covered by someone else's certification, which is why self-hosted conformance runs are published separately with their own artefacts."
---

**Auditors do not certify a platform. They certify the environment you build on it — your systems, your processes, your evidence. So the useful question is never "is the platform compliant", it is "which controls does this platform give me, which do I have to switch on, and which stay mine".**

These pages answer that one framework at a time, for the three Ænix platforms and for Cozystack underneath them. Each separates what is enforced on a fresh installation, what ships but is off until you enable it, and what no infrastructure product can do for you.

<div class="cta-row">
  <a class="cta-primary" href="/contact/">Talk to an engineer</a>
  <a class="cta-secondary" href="/services/platform-readiness-assessment/">Platform readiness assessment →</a>
</div>

---

## Where these numbers come from

Every measured result in this section — the kube-bench run, the conformance runs, the verification commands — was produced against **Cozystack**, the open-source engine, on a reference cluster. Not against a separate proprietary Ænix build.

That is deliberate, and it is the reason the results transfer:

- **There is no separate engine.** The Ænix Public Cloud Platform, Ænix Private Cloud Platform and Ænix AI Platform are distributions of Cozystack. Ænix creates and maintains Cozystack — it is a CNCF project under Apache 2.0 — and the platforms ship the same releases. Nothing is forked away and re-tested behind a licence.
- **So the mapping is one-to-one.** A control that passes on Cozystack passes on a platform built from it. A deviation on Cozystack is a deviation on the platform. There is no gap for a marketing claim to hide in.
- **What Ænix adds sits around the engine, not inside it.** The Talos machine configuration applied at install time, the reference architecture, the operational runbooks, and support during the assessment. Several of the settings these pages discuss — `--encryption-provider-config`, the audit policy, the authorization configuration, the time source — come from that machine configuration rather than from Cozystack itself. Where that is the case, the page says so and tells you how to verify it on your own cluster.
- **Which is also why your numbers may differ.** The same benchmark on your installation is a different run. Treat the published figures as a reference point and a method, not as a certificate covering your environment.

The alternative framing — publishing these as results for a proprietary product — would be a claim we could not evidence and an assessor could not verify. The source is public; the manifests are on the pages.

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Frameworks

- **[PCI DSS](/compliance/pci-dss/)** — a requirement-by-requirement mapping of all twelve PCI DSS v4.0.1 requirements: what is active by default, what is one setting away, what stays with you, with commands to verify each control on your own cluster.
- **[GDPR](/compliance/gdpr/)** — the Article 32 technical measures the platform supplies, where personal data physically sits, and the parts of the right to erasure that infrastructure cannot settle.
- **[CIS Kubernetes Benchmark](/compliance/cis-benchmark/)** — the full kube-bench run: 54 pass, 24 fail, 53 warn, with every failure sorted into a real deviation, a control met another way, or a check that does not apply on an immutable node.
- **[DORA](/compliance/dora/)** — the platform-side evidence for resilience, backup and restore, incident records and the ICT third-party risk chapter, where self-hosted open source changes the answer.
- **[Kubernetes conformance](/compliance/kubernetes-conformance/)** — CNCF conformance results for both shapes the platform is used in: self-hosted tenant clusters passing in full across five Kubernetes releases, and a hosted platform in the CNCF record.

</div>
</div>

---

## What we do not claim

Precision here is worth more than reassurance, because an assessor will test every sentence.

| Claim we do **not** make | What is true instead |
|---|---|
| "Ænix is ISO 27001 certified" | Aenix holds no ISO 27001 certificate. The platforms are built to support an ISMS — audit logging, access control, change control through declarative configuration — and Ænix supports customers' certification work. That is a different claim. |
| "Ænix is SOC 2 attested" | There is no SOC 2 report. Where a customer needs one for their own service running on the platform, the platform supplies control evidence; the report is theirs. |
| "The platform is PCI DSS certified" | No platform is. A Qualified Security Assessor certifies a scoped cardholder data environment. The platform supplies the technical controls the assessment leans on. |
| "The platform is GDPR compliant" | Compliance belongs to the controller. The platform supplies Article 32 measures and makes them demonstrable. |
| "The platform is CIS certified" | The CIS Benchmark awards no verdict. It is a list of controls, and compliance is a judgment about a specific cluster. |
| "The platform is DORA compliant" | DORA binds financial entities, not platforms. The platform is part of the ICT estate those entities manage. |

---

## The regulatory engagements

The pages above are evidence. If what you need is the programme around it — a gap analysis, a control-level map of what you can demonstrate today, a remediation plan — those live under solutions:

- **[DORA compliance](/solutions/dora-compliance/)** — fixed-price readiness engagement for financial entities and the ICT third parties serving them: ICT third-party risk, concentration risk, exit-feasibility, resilience testing. Free [DORA compliance checklist](/resources/dora-compliance-checklist/).
- **[NIS2 compliance](/solutions/nis2-compliance/)** — the equivalent for essential and important entities under NIS2. Free [NIS2 compliance checklist](/resources/nis2-compliance-checklist/).
- **[Data sovereignty](/solutions/data-sovereignty/)** — customer-controlled keys, customer-controlled hardware, jurisdictional residency.

The split is deliberate: the solution pages answer "what does the regulation require of us and where are we short", these pages answer "what does the infrastructure actually do, and how was that measured".

---

## Reproduce it before you cite it

Nothing in this section requires trust. Cozystack is Apache 2.0 and its source, security advisories and release changelogs are public at [cozystack.io](https://cozystack.io/). The kube-bench job manifest, the Sonobuoy invocation and the isolation probes are published on the pages that use them, with pinned tool versions, because an unpinned tool is not evidence.

If you want the control mapping reviewed against your own scope before an assessment, that is what [enterprise support](/products/cozystack-enterprise-support/) and the [platform readiness assessment](/services/platform-readiness-assessment/) are for.

---

## Notes

This section describes Cozystack v1.6 and v1.6.1 as observed on reference clusters in August 2026, and the Ænix platforms built from those releases. It is informational: not legal advice, not an assessment, not a certification, and not a warranty that any configuration will satisfy an assessor or a supervisory authority. Your installation may differ, particularly in the Talos machine configuration.
