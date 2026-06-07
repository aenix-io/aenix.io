---
title: "Cozystack — Open-Source-Cloud-Plattform auf Kubernetes"
description: "Cozystack ist die von Aenix gebaute Open-Source-Cloud-Plattform und CNCF Project-Projekt. Sie betreibt virtuelle Maschinen, Container, verwaltete..."
related_pages:
  - /de/produkte/private-cloud
  - /de/dienstleistungen/platform-engineering
language: "de"
direct_answer: |
  **Cozystack ist die von Aenix entwickelte Open-Source-Cloud-Plattform und ein CNCF-Projekt, mit der Unternehmen auf eigener Hardware eine private Cloud betreiben. Auf einer Kubernetes-nativen Steuerungsebene laufen virtuelle Maschinen (KubeVirt), Container, verwaltete Datenbanken, S3-kompatibler Object-Storage und GPU-Workloads — mit echter Mandantenfähigkeit über das Tenant-CRD. Cozystack steht unter Apache-2.0-Lizenz, ist eine Kubernetes Certified Distribution und folgt den OpenSSF Best Practices. Die Plattform richtet sich an Hosting-Provider, ISPs und Unternehmen, die VMware ablösen oder Cloud-Repatriierung umsetzen. Aenix selbst verkauft keine Lizenzen, sondern die produktisierte Ænix Platform plus Engineering- und Support-Engagement.**

quick_facts:
  - label: "Was es ist"
    value: "Open-Source-Cloud-Plattform auf Kubernetes für VMs, Container, verwaltete Datenbanken, Object-Storage und GPU-Workloads auf eigener Hardware"
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Zielgruppe"
    value: "Hosting-Provider, ISPs und Unternehmen, die VMware ablösen oder eine souveräne private Cloud betreiben wollen"
  - label: "Kernfunktionen"
    value: "KubeVirt-VMs + Container, Tenant-CRD-Mandantenfähigkeit, Cilium-Networking (eBPF), LINSTOR/DRBD-Storage, S3, GPU-as-a-Service"
  - label: "Hersteller"
    value: "Aenix — Open-Core-Unternehmen hinter Cozystack; verkauft die Ænix Platform plus Services, keine Lizenzen"
  - label: "Engagement"
    value: "Support-Tiers Community (kostenlos), Standard (Geschäftszeiten) und Enterprise (24×7 SLA)"

faq:
  - q: "Ist Cozystack wirklich kostenlos?"
    a: "Ja. Die Cozystack-Plattform ist Open Source unter Apache-2.0-Lizenz und kann frei deployt, angepasst und geforkt werden. Es gibt keine CPU- oder Core-basierte Lizenzierung. Kosten entstehen nur, wenn Sie bei Aenix kommerziellen Support oder Engineering-Engagement beauftragen."
  - q: "Worin unterscheiden sich Cozystack und Aenix?"
    a: "Cozystack ist das gemeinschaftlich verwaltete CNCF-Open-Source-Projekt unter Apache 2.0. Aenix ist das kommerzielle Unternehmen, das Cozystack entwickelt und unterstützt. Aenix verkauft die produktisierte Ænix Platform plus Engineering- und Support-Engagement — keine Lizenzen für Cozystack."
  - q: "Kann Cozystack virtuelle Maschinen und Container gemeinsam betreiben?"
    a: "Ja. Über KubeVirt laufen virtuelle Maschinen und Kubernetes-Container nebeneinander auf einer einzigen Kubernetes-API. Das erlaubt es, klassische VM-Workloads (etwa nach einem VMware-Ausstieg) und Cloud-native Anwendungen auf derselben Plattform zu konsolidieren."
  - q: "Wie funktioniert die Mandantenfähigkeit?"
    a: "Cozystack nutzt ein Tenant-CRD, um Mandanten auf der Kubernetes-Steuerungsebene zu isolieren. Hosting-Provider und Unternehmen können so getrennte, isolierte Umgebungen pro Kunde oder Team bereitstellen — eine Voraussetzung für Multi-Tenant-Public-Clouds und interne Plattformen."
  - q: "Welche Technologien stecken unter der Haube?"
    a: "Cozystack baut auf KubeVirt für VMs, Cilium (eBPF) für Networking, LINSTOR/DRBD für replizierten Block-Storage sowie VictoriaMetrics und VictoriaLogs für Observability. Verwaltete Datenbanken umfassen PostgreSQL, MySQL, Redis, RabbitMQ, Kafka und ClickHouse."
  - q: "Was kostet kommerzieller Support bei Aenix?"
    a: "Aenix bietet gestaffelten Support: Community ist kostenlos, Standard deckt Support zu Geschäftszeiten ab und Enterprise bietet 24×7-SLA. Für die produktisierte Ænix Platform gibt es Preisstufen ab Basic (1.250 $/Monat für 10 Nodes) über Standard und Plus bis Enterprise nach Vereinbarung."
---

**Cozystack ist die von Aenix gebaute Open-Source-Cloud-Plattform und CNCF Project-Projekt. Sie betreibt virtuelle Maschinen, Container, verwaltete Datenbanken, S3-Object-Storage und GPU-Workloads auf Ihrer eigenen Hardware unter einer Kubernetes-nativen Steuerungsebene mit Multi-Mandanten-Isolation. Apache-2.0-Lizenz, Kubernetes Certified Distribution, OpenSSF Best Practices.**

<div class="cta-row">
  <a class="cta-primary" href="/contact/?type=architecture-review">Architektur-Review buchen</a>
  <a class="cta-secondary" href="https://cozystack.io">cozystack.io →</a>
</div>

---

## Was Cozystack bietet

- KubeVirt VMs + Kubernetes Container auf einer Plattform
- Mandantenfähige Steuerungsebene (Tenant CRD)
- Verwaltete Datenbanken — PostgreSQL, MySQL, Redis, RabbitMQ, Kafka, ClickHouse
- S3-kompatibler Object-Storage
- GPU-as-a-Service (NVIDIA vGPU + MIG, validiert auf A100/H100/H200/L40S/Blackwell)
- Cilium-Networking
- LINSTOR-Storage
- Observability (VictoriaMetrics + VictoriaLogs)
- Backup und DR (Velero)
- Self-Service-Portal (cozyportal) + WHMCS-Integration

---

## Cozystack-Projekt vs Aenix-Unternehmen

- **Cozystack** ist gemeinschaftlich verwaltetes CNCF Project-Projekt. Apache 2.0. Jeder kann deployen, beitragen, forken.
- **Aenix** ist das kommerzielle Unternehmen, das Cozystack baut und unterstützt. Verkauft Engagement, keine Lizenzen.

---

## Pricing

Cozystack-Plattform ist Open Source und kostenlos.

Aenix bietet Support-Tiers:
- **Community** — kostenlos
- **Standard** — Geschäftszeiten-Support
- **Enterprise** — 24×7 SLA

/contact/

---

*Cozystack ist ein CNCF Project-Projekt. Aenix ist das Unternehmen dahinter.*

<!-- Keyword: cozystack DE 10 (brand). Word count: ~350. -->
