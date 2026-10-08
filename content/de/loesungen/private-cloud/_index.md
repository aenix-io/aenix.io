---
title: "Was ist eine Private-Cloud-Plattform — Open Source, Kubernetes-nativ, mandantenfähig"
seo_title: "Was ist eine Private-Cloud-Plattform? Ein Leitfaden"
description: "Was eine Private-Cloud-Plattform leisten muss und wie die Kubernetes-native Open-Source-Option im Vergleich zu VMware VCF, OpenStack und OpenShift abschneidet."
primary_keyword: "was ist eine private cloud plattform"
secondary_keywords: ["private cloud plattform", "open source private cloud", "kubernetes private cloud", "vmware cloud foundation alternative"]
related_pages: ["/de/produkte/private-cloud-platform/", "/de/dienstleistungen/private-cloud-consulting/", "/de/loesungen/data-sovereignty/", "/de/loesungen/cloud-repatriation/", "/de/alternativen/vmware-alternative/", "/de/produkte/cozystack/"]
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /solutions/private-cloud-platform/
direct_answer_image: "/images/cozystack-screenshot.png"
direct_answer_image_alt: "Private-Cloud-Konsole von Cozystack — Self-Service-Marktplatz"
direct_answer: |
  **Eine Private-Cloud-Plattform ist die Softwareschicht, die Hardware im Besitz oder unter der Kontrolle einer Organisation in eine Self-Service-Cloud verwandelt: Compute, Storage, Networking, Mandantenfähigkeit, verwaltete Datendienste und eine Bereitstellungsoberfläche — gesteuert von der Organisation selbst statt von einem Hyperscaler. Sie ersetzt den VMware-Cloud-Foundation-Stack für Teams, die das Betriebsmodell der Cloud wollen, aber keinen Cloud-Vermieter. Die Kubernetes-native Open-Source-Option in dieser Kategorie ist Cozystack — ein CNCF-Sandbox-Projekt unter Apache 2.0 ohne Lizenzkosten pro CPU oder Core. Es vereint KubeVirt-Virtualisierung für VMs und Container, Cilium-Networking (eBPF), replizierten Storage mit LINSTOR/DRBD, eine mandantenfähige Control Plane über das Tenant-CRD, verwaltete Datenbanken, S3-Object-Storage mit SeaweedFS und NVIDIA-GPUs auf Bare Metal. Ænix hat Cozystack initiiert und pflegt es gemeinsam mit Maintainern anderer Unternehmen; die Ænix Private Cloud Platform ist der unterstützte Aufbau für regulierte Organisationen und wird per RFP angeboten.**
quick_facts:
  - label: "Was es ist"
    value: "Die Softwareschicht, die eigene Hardware in eine Self-Service-Cloud verwandelt — Compute, Storage, Networking, Mandantenfähigkeit und verwaltete Datendienste unter Ihrer eigenen Governance."
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; der Antrag auf CNCF Incubation befindet sich in der Due-Diligence-Prüfung)"
  - label: "Für wen"
    value: "Service Provider, regulierte Unternehmen (DORA, branchenspezifische Vorgaben), Telekommunikationsbetreiber, öffentlicher Sektor sowie KI- und GPU-Betreiber."
  - label: "Kern-Stack"
    value: "KubeVirt für VMs und Container, Cilium (eBPF) für Networking, LINSTOR/DRBD für replizierten Storage, Tenant-CRD für Mandantenfähigkeit."
  - label: "Kommerzielles Angebot"
    value: "Ænix Private Cloud Platform — der unterstützte Aufbau auf Cozystack für regulierte Organisationen, darauf ausgelegt, die Arbeit an DORA und NIS2 zu unterstützen. Angebot per RFP nach der Bedarfsklärung; siehe Preisseite."
  - label: "Bereitstellung"
    value: "Selbst aus dem Open-Source-Projekt installieren (Dokumentation auf cozystack.io) oder mit Ænix: Assessment über 14 oder 28 Tage und Aufbau in 3–12 Monaten; Air-Gap-Installationen werden unterstützt."
faq:
  - q: "Was ist der Unterschied zwischen Cozystack und Ænix?"
    a: "Cozystack ist die Open-Source-Plattform und ein CNCF-Sandbox-Projekt unter Apache 2.0 mit Maintainern aus mehreren Unternehmen. Ænix hat Cozystack initiiert, pflegt es mit und verkauft Abonnements — Support, kommerzielle Module und Services —, darunter die Ænix Private Cloud Platform. Sie können Cozystack auch komplett ohne Ænix betreiben."
  - q: "Wie unterscheidet sich eine Private Cloud mit Cozystack von VMware Cloud Foundation?"
    a: "Cozystack ersetzt den gesamten VCF-Stack durch ein Kubernetes-natives Gegenstück unter Apache 2.0. Es nutzt KubeVirt statt vSphere/ESXi, Cilium statt NSX und ein Tenant-CRD statt vCloud Director und kennt kein Abonnement pro CPU oder Core. Der Betriebsaufwand ist geringer, und es entsteht kein Vendor-Lock-in."
  - q: "Wie unterscheidet sich Cozystack von OpenStack?"
    a: "Beide sind Open-Source-Plattformen für Private Clouds. OpenStack ist älter, breiter angelegt und im Betrieb aufwendiger; Cozystack ist Kubernetes-nativ, fokussierter und schlanker im Betrieb. OpenStack bleibt stark, wo bereits tiefes OpenStack-Know-how vorhanden ist."
  - q: "Unterstützt Cozystack Air-Gap-Installationen?"
    a: "Ja. Für Cozystack gibt es einen dokumentierten Ablauf für Air-Gap-Installationen. Damit eignet es sich für das Gesundheitswesen, den öffentlichen Sektor und andere abgeschottete Umgebungen, in denen keine ausgehenden Verbindungen erlaubt sind."
  - q: "Was kostet der Betrieb einer Private-Cloud-Plattform mit Cozystack?"
    a: "Cozystack selbst ist Open Source unter Apache 2.0 und kann kostenlos auf eigener Hardware betrieben werden, ohne Abrechnung pro CPU, VM oder Core — die Kosten sind Hardware plus das Plattform-Team. Die Ænix Private Cloud Platform wird nach einem Platform Readiness Assessment per RFP angeboten. Support-Stufen für selbst betriebenes Cozystack beginnen laut veröffentlichter Preisliste bei 1.250 USD pro 10 Nodes und Monat (Basic, jährliche Abrechnung)."
  - q: "Kann Cozystack virtuelle Maschinen und Container gleichzeitig betreiben?"
    a: "Ja. Cozystack betreibt mit KubeVirt KVM-basierte VMs (mit Live-Migration, Snapshots und Templates) neben Kubernetes-Containern unter einer einzigen Kubernetes-API. Getrennte Plattformen für VMs und Container sind nicht nötig."
aliases:
  - /de/produkte/private-cloud/
---

<!-- BLOCK 1: HERO -->


**Eine Private-Cloud-Plattform ist die Software, die eigene Hardware in eine Self-Service-Cloud verwandelt — Compute, Storage, Networking, Mandantenfähigkeit, verwaltete Datendienste und eine Bereitstellungsoberfläche, unter Ihrer eigenen Governance. Diese Seite erklärt, was die Kategorie leisten muss und wie die Kubernetes-native Open-Source-Option im Vergleich zu VMware Cloud Foundation, OpenStack und OpenShift Virtualization abschneidet.**

Die Open-Source-Referenzimplementierung ist hier [Cozystack](/de/produkte/cozystack/) — ein CNCF-Sandbox-Projekt unter Apache 2.0, von Ænix initiiert und gemeinsam mit Maintainern anderer Unternehmen gepflegt; [Produktivprojekte](/de/case-studies/) sind als Fallstudien dokumentiert.

> **Sie wollen kaufen statt lernen?** Die unterstützte kommerzielle Version für eine regulierte Umgebung ist die **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** — Architektur, Aufbau, Support und Preise finden Sie auf der Produktseite. Infrastrukturverantwortliche können mit dem [Leitfaden für Infrastrukturverantwortliche](/de/fuer/leiter-infrastruktur/) beginnen.

<div class="cta-row">
  <a class="cta-primary" href="/de/produkte/private-cloud-platform/">Zur Ænix Private Cloud Platform →</a>
  <a class="cta-secondary" href="https://cozystack.io">cozystack.io →</a>
</div>

<div class="trust-badges">
CNCF-Sandbox-Projekt · CNCF Certified Kubernetes · OpenSSF Best Practices · Apache 2.0
</div>

<!-- /BLOCK 1 -->

---

<!-- BLOCK 2: WHO -->

## Wer eine Private-Cloud-Plattform betreibt

- **Service Provider** — betreiben mandantenfähige Cloud-Produkte für Unternehmenskunden
- **Banken und Versicherungen** — regulierte Workloads unter DORA und branchenspezifischen Vorgaben
- **Telekommunikationsbetreiber** — Markteinführung souveräner Cloud-Produkte
- **KI- und GPU-Betreiber** — dauerhaft ausgelastete GPU-Workloads, bei denen sich Hyperscaler wirtschaftlich nicht rechnen
- **Öffentlicher und öffentlichkeitsnaher Sektor** — Infrastruktur mit Souveränitätsauflagen unter Vergaberecht
- **Plattform-Teams in Unternehmen** — interne Entwicklerplattformen mit Isolation zwischen Geschäftsbereichen

<!-- /BLOCK 2 -->

---

<!-- BLOCK 3: WHAT'S IN THE PLATFORM -->

## Was eine Private-Cloud-Plattform leisten muss

<div class="grid-2x2">

**1. Compute — VMs und Container auf einer Plattform**
KubeVirt für VMs (KVM-basiert, mit Live-Migration, Snapshots und Templates) und Kubernetes-Container nebeneinander. Keine separate VM-Plattform, keine separate Container-Plattform.

**2. Storage — replizierter Block-Storage und S3-Object-Storage**
LINSTOR (DRBD) für replizierten Block-Storage im großen Maßstab; SeaweedFS für S3-kompatiblen Object Storage für Anwendungen und Backups.

**3. Networking — eBPF-nativ**
Cilium als CNI: L4/L7-Policies, Observability, MetalLB-Integration, Unterstützung für BGP-Fabrics. Funktionen auf NSX-Niveau ohne NSX-Lizenzkosten.

**4. Mandantenfähige Control Plane**
Tenant-CRD-Modell mit verschachtelten Tenants, Quotas, RBAC und Audit pro Tenant. Geeignet für das Service-Provider-Modell (mehrere Kunden) ebenso wie für Unternehmen mit mehreren Geschäftsbereichen.

**5. Verwaltete Datendienste**
PostgreSQL (CloudNativePG), MariaDB, MongoDB, ClickHouse, Valkey, OpenSearch, Kafka, NATS, RabbitMQ und Qdrant — bereitgestellt als vollwertige Plattformdienste, nicht als nachträglich angeflanschte Helm-Charts.

**6. GPUs**
NVIDIA-GPUs für Rechenzentren werden über den NVIDIA GPU Operator unterstützt: Passthrough ganzer GPUs an VMs, NVIDIA vGPU für VMs (erfordert eine NVIDIA-vGPU-Lizenz), ganze GPUs für Pods über das Device Plugin und anteilige Nutzung für Pods über HAMi. MIG und Time-Slicing stehen auf der Roadmap.

**7. Observability**
VictoriaMetrics und VictoriaLogs sind enthalten — ressourcenschonend und souveränitätsfreundlich. Grafana optional obendrauf.

**8. Backup und DR**
Velero, S3 und Point-in-Time-Recovery pro Datenbank für die verwalteten Dienste. Backups sollten in Object Storage außerhalb des Clusters landen, den sie schützen. Ein automatisches standortübergreifendes VM-Failover gibt es nicht; Multi-Site-Designs sind Engineering-Leistung.

**9. Self-Service-Portal und Abrechnung**
Cozystack Dashboard für die Bereitstellung von Diensten. Betreiber, die ihren Tenants Leistungen in Rechnung stellen, ergänzen die [WHMCS-Integration](/de/produkte/whmcs-integration/), ein proprietäres Ænix-Modul, das nicht Teil des Open-Source-Projekts Cozystack ist.

</div>

<!-- /BLOCK 3 -->

---

<!-- BLOCK 4: HOW IT'S DIFFERENT -->

## Die Optionen im Vergleich

| | VMware (VCF) | OpenStack | OpenShift Virtualization | **Cozystack** |
|---|---|---|---|---|
| **Lizenz** | Nur Abonnement | Apache 2.0 | Red Hat, kommerziell | **Apache 2.0** |
| **Compute** | vSphere + ESXi | Nova + KVM | KubeVirt | **KubeVirt** |
| **Mandantenfähigkeit** | vCloud Director | Keystone-Projekte | Namespaces | **Tenant-CRD (Kubernetes-nativ)** |
| **Verwaltete Datenbanken** | Eingeschränkt | DBaaS optional | Verfügbar | **Vollwertig integriert** |
| **Self-Service-Portal** | vCD | Horizon | Console | **Cozystack Dashboard** |
| **Betriebsaufwand** | Hoch (VCF) | Hoch (OpenStack) | Mittel (OpenShift) | **Gering (Kubernetes-nativ, eine Plattform)** |
| **Herstellerbeziehung** | Closed Source, US-Hersteller | Foundation, Hersteller-Distributionen | Red Hat | **Open Source, kein Vendor-Lock-in** |
| **Am besten geeignet für** | Bestehende VMware-Umgebungen | Große Telcos / Teams mit OpenStack-Erfahrung | Bestehende Red-Hat-Kunden | **Service Provider, regulierte mandantenfähige Umgebungen, souveräne Cloud** |

<!-- /BLOCK 4 -->

---

<!-- BLOCK 5: HOW TO START -->

## Wie Sie starten

Zwei Wege:

- **Selbst installieren** — Cozystack ist Open Source. Dokumentation zu Architektur, Installation und Betrieb: **[cozystack.io](https://cozystack.io)**. Community-Support im Kanal #cozystack im Kubernetes Slack und auf Telegram.
- **Das unterstützte Produkt kaufen** — die **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** ergänzt eine Architektur, die darauf ausgelegt ist, die Arbeit an DORA und NIS2 zu unterstützen, Multi-DC-Designs und Runbooks, optionale Volume-Verschlüsselung mit gemeinsam mit Ihnen festgelegtem Schlüsselmanagement, Audit-Logging mit konfigurierbarer Aufbewahrung, Support mit SLA und Developer Self-Service. Die Umsetzung läuft über **[Private-Cloud-Consulting](/de/dienstleistungen/private-cloud-consulting/)**.

Für Motive wie Souveränität, DORA, Rückholung aus der Public Cloud oder KI sind diese Lösungsseiten relevant:

- **[Datensouveränität](/de/loesungen/data-sovereignty/)**
- **[DORA-Compliance](/de/loesungen/dora-compliance/)**
- **[Cloud-Repatriierung](/de/loesungen/cloud-repatriation/)**
- **[Sovereign AI](/de/loesungen/sovereign-ai/)**
- **[VMware-Alternative](/de/alternativen/vmware-alternative/)**

<!-- /BLOCK 5 -->

---

<!-- BLOCK 6: PROOF -->

## Unternehmen, die Plattformen mit Ænix betreiben

{{< clients >}}

Hosting-Anbieter, die die Ænix Public Cloud Platform produktiv betreiben. Projekte in regulierten Branchen, bei Telcos und mit GPUs sind in anonymisierter Form auf der Seite mit den [Fallstudien](/de/case-studies/) dokumentiert.

{{< quote-carousel >}}

<!-- /BLOCK 6 -->

---

<!-- BLOCK 7: COST -->

## Was es kostet

Cozystack selbst ist **Open Source unter Apache 2.0** und kostenlos im Betrieb: keine Abrechnung pro CPU, VM oder Core. Die eigentlichen Kosten einer Private-Cloud-Plattform sind die Hardware und das Plattform-Team, das sie betreibt — genau das bemisst ein Assessment.

Ænix verkauft darüber hinaus zwei Dinge: Support im Abonnement für Organisationen, die Cozystack selbst betreiben, laut veröffentlichter Preisliste ab 1.250 USD pro 10 Nodes und Monat, und die **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** als Programm für regulierte Umgebungen, angeboten per RFP. Beides finden Sie auf der **[Preisseite](/de/preise/)**.

<!-- /BLOCK 7 -->

---

<!-- BLOCK 8: FAQ -->

---

<!-- BLOCK 9: BOTTOM CTA -->

<a id="discovery"></a>
## Jetzt starten

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

Oder:
- **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** — das unterstützte Produkt für regulierte Umgebungen
- **[cozystack.io](https://cozystack.io)** — Installation und Dokumentation
- **[Private-Cloud-Consulting](/de/dienstleistungen/private-cloud-consulting/)** — Engineering-Leistungen
- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — Vorgehen beim Assessment
- **[Private-Cloud-Anbieter im Vergleich](/de/blog/2026/05/private-cloud-anbieter-vergleich/)** — ausführlicher Leitfaden

<!-- /BLOCK 9 -->

---

*Ænix hat Cozystack initiiert (CNCF-Sandbox-Projekt, CNCF Certified Kubernetes Distribution, OpenSSF Best Practices) und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Ænix verkauft auf dieser Engine drei Plattformen: Public Cloud Platform, Private Cloud Platform und AI Platform.*
