---
title: "Cloud-Plattform für Hosting-Anbieter — über VPS hinaus modernisieren, Cloud-Produkte starten"
seo_title: "Public-Cloud-Plattform für Hosting-Anbieter"
description: "Vom VPS zum Cloud-Produkt: Mandantenisolation, WHMCS-Billing in zwei Modi, Managed Databases, S3 und GPU — ohne Lizenzkosten pro CPU, die die Marge schmälern."
related_pages:
  - /de/dienstleistungen/public-cloud-builder/
  - /de/dienstleistungen/white-label-cloud/
  - /de/produkte/public-cloud-platform/
  - /de/partner/
  - /de/produkte/cozystack/
  - /de/migration/virtuozzo/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /industries/hosting-providers/
direct_answer: |
  **Mit einer Cloud-Plattform für Hosting-Anbieter kann ein klassisches Shared-, VPS- oder Dedicated-Server-Geschäft Cloud-Produkte auf Hyperscaler-Niveau einführen und dabei seine direkten Kundenbeziehungen, seine Preisgestaltung und seine Marge behalten. Ænix setzt das mit Cozystack um, einem Kubernetes-nativen Open-Source-CNCF-Sandbox-Projekt, das Ænix initiiert hat und gemeinsam mit Maintainern anderer Unternehmen pflegt. Es betreibt VMs (über KubeVirt) und Container auf einer API, mit Cilium-eBPF-Networking, LINSTOR/DRBD-Storage und Mandantenisolation über die Tenant-CRD. Als Produkt ist es die Ænix Public Cloud Platform (mit dem produktisierten Installer live innerhalb weniger Wochen, sobald die Hardware bereitsteht), mit WHMCS-integriertem Billing, Sperren und Stilllegen von Mandanten, einem Service-Katalog über VMs hinaus (Managed Databases, S3, GPU) und Migrationswerkzeugen für VMware, OpenStack und Virtuozzo. Durch die Apache-2.0-Lizenz fallen keine Gebühren pro CPU an, die Hosting-Marge bleibt erhalten.**
quick_facts:
  - label: "Was es ist"
    value: "Eine Kubernetes-native Open-Source-Cloud-Plattform, mit der Hosting-Anbieter mandantenfähige Cloud-Produkte über VPS hinaus einführen — gebaut auf Cozystack, als Produkt die Ænix Public Cloud Platform."
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung)"
  - label: "Zielgruppe"
    value: "Klassische Hosting-Anbieter, regionale und souveräne Cloud-Anbieter, spezialisierte Hoster (Gaming, KI, Finanzdienstleistungen) und Anbieter von Bare Metal as a Service."
  - label: "Kernfunktionen"
    value: "Mandantenfähigkeit über die Tenant-CRD, WHMCS-Billing-Integration (zwei Modi), Service-Katalog mit VMs, Containern, Managed Databases, S3 und GPU sowie Migrationswerkzeuge für VMware, OpenStack und Virtuozzo."
  - label: "Technologie"
    value: "KubeVirt für VMs und Container auf einer Kubernetes-API, Cilium-(eBPF-)Networking, LINSTOR/DRBD-Storage."
  - label: "Kommerzieller Einstieg"
    value: "Support-Stufen ab 1.250 USD pro 10 Nodes und Monat (Basic, jährliche Abrechnung), Support für die White-Label-Konfiguration ab Standard (3.000 USD); das Partnerprogramm bietet bis zu 40 % Marge auf Ænix-Plattform-Abonnements und Support."
faq:
  - q: "Warum sollte ein Hosting-Anbieter von VPS auf eine Kubernetes-native Cloud-Plattform wechseln?"
    a: "Kunden erwarten zunehmend Cloud-Funktionen, die mit Hyperscalern mithalten — Managed Databases, Object Storage, GPU und Self-Service. Eine Kubernetes-native Plattform bündelt diese in einem Service-Katalog, während der Anbieter seine direkte Kundenbeziehung und seine Preisgestaltung behält."
  - q: "Unterstützt Cozystack virtuelle Maschinen und Container?"
    a: "Ja. Cozystack nutzt KubeVirt, um VMs und Container auf einer Kubernetes-API zu betreiben. Ein Anbieter bedient so klassische VM-Kunden und moderne Container-Workloads mit derselben Plattform und demselben Betriebsteam."
  - q: "Wie funktioniert die Billing-Integration für Hosting-Anbieter?"
    a: "Die Ænix Public Cloud Platform enthält eine WHMCS-Integration in zwei Modi: die native Cozystack-Oberfläche und ein kundenseitiges Frontend auf Basis des Cozystack Dashboard. Außerdem lassen sich Mandanten abhängig vom Abrechnungsstatus sperren und stilllegen."
  - q: "Gibt es Lizenzkosten pro CPU oder Core?"
    a: "Nein. Cozystack steht unter Apache 2.0, es fallen also keine Gebühren pro CPU oder Core an. Das erhält die Hosting-Marge im Vergleich zu proprietären Virtualisierungsplattformen, die pro Sockel oder Core lizenzieren."
  - q: "Kann ein Anbieter bestehende Workloads von VMware, OpenStack oder Virtuozzo migrieren?"
    a: "Ja. Die Ænix Public Cloud Platform bringt Migrationswerkzeuge für VMware, OpenStack und Virtuozzo mit, sodass Anbieter bestehende Kunden-Workloads auf die neue Plattform übernehmen können."
  - q: "Wie werden Kunden voneinander isoliert?"
    a: "Cozystack bietet über die Tenant-CRD eine Isolation auf Produktionsniveau: Jeder Kunde erhält eine abgegrenzte, isolierte Umgebung auf gemeinsamer Infrastruktur — die Grundlage, um Cloud-Produkte sicher an viele Kunden zu verkaufen."
---

**Hosting-Kunden erwarten 2026 Cloud-Funktionen, die mit Hyperscalern mithalten — kombiniert mit der Nähe zum Kunden und der Preisflexibilität, die Hosting-Anbieter bereits haben. Die architektonische Antwort ist eine Kubernetes-native Plattform mit Mandantenisolation, Billing-Integration und einem Service-Katalog über VMs hinaus — genau dafür ist Cozystack entworfen.**

> **Passende Plattform:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** — moderne Alternative zu OpenStack für Hosting-Anbieter. WHMCS-integriertes Billing, Sperren und Stilllegen von Mandanten, schnelle Bereitstellung neuer Funktionen, produktisierter Installer, Migrationswerkzeuge für VMware, OpenStack und Virtuozzo ([Virtuozzo-Migration](/de/migration/virtuozzo/)). Sie verkaufen heute Cloud über VMware Cloud Director? Siehe [die VMware-Cloud-Director-Alternative für Service Provider](/de/alternativen/vmware-cloud-director-alternative/). Support-Stufen ab 1.250 USD pro 10 Nodes und Monat; Support für die White-Label-Konfiguration ab Standard (3.000 USD). Hosting-Anbieter, die sie produktiv betreiben: GoHost.kz, HDReady, Beby Cloud, HiKube, UseTech, Cloupard, Cloudsy. Im **[Partnerprogramm](/de/partner/)** erhalten Sie bis zu 40 % Marge auf Ænix-Plattform-Abonnements und Support.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/hosting-anbieter-plattform-modernisierung/">Modernisierung der Hosting-Plattform →</a>
</div>

**Sehen Sie sich das Kundenportal selbst an.** Die Live-Demo zeigt das Kundenportal und das Operator-Backoffice der Ænix Public Cloud Platform (wechseln Sie zu Admin, um Kunden, Rechnungen und Preise zu sehen). Sie läuft vollständig in Ihrem Browser mit Demodaten — ohne Anmeldung, ohne Cluster, ohne Einrichtung.

**Rechnen Sie zuerst das Geschäftsmodell durch.** Der [Rechner für die Unit Economics von Hosting-Anbietern](/isp-calculator/) schätzt Umsatz und Amortisation, und das [Webinar „Launch your public cloud“](/webinars/launch-public-cloud/) zeigt einen Provider-Launch Schritt für Schritt. Verantwortliche für Cloud-Produkte beginnen am besten mit dem [Leitfaden für Cloud-Leitungen](/de/fuer/leiter-cloud/).

<div class="cta-row">
  <a class="cta-primary" href="/demo/" target="_blank" rel="noopener">Live-Demo öffnen →</a>
</div>


---

## Für wen die Seite gedacht ist

- Klassische Hosting-Anbieter (Shared, VPS, Dedicated Server), die modernisieren
- Regionale Cloud-Anbieter, die lokale Souveränitätsvorgaben bedienen
- Spezialisierte Hosting-Anbieter (Gaming, KI, Finanzdienstleistungen)
- Anbieter von Bare Metal as a Service

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Weshalb Hosting-Anbieter zu uns kommen

- **Vom VPS zum Cloud-Produkt** — mandantenfähige, Kubernetes-native Plattform
- **Erweiterung des Service-Katalogs** — VMs, Container, Managed Databases, S3 und GPU auf einer Plattform
- **WHMCS-Integration** — produktionsreif, zwei Integrationsmodi
- **Kundenportal** — Cozystack Dashboard, pro Anbieter anpassbar
- **Start souveräner Cloud-Produkte** — für regionale Märkte

Für ein vertriebsgeführtes Projekt siehe **[Public Cloud Builder](/de/dienstleistungen/public-cloud-builder/)** und **[White-Label-Cloud](/de/dienstleistungen/white-label-cloud/)**.

</div>
</div>

---

## Warum Cozystack zu Hosting-Anbietern passt

- **Mandantenfähigkeit über die Tenant-CRD** — Kundenisolation auf Produktionsniveau
- **WHMCS-Integration** — zwei Modi (native Oberfläche und Frontend auf Basis des Cozystack Dashboard)
- **Open-Source-Plattform** — keine Lizenzkosten pro CPU, die Hosting-Marge bleibt erhalten
- **Service-Katalog** — weit über VMs hinaus (Managed Databases, S3, GPU)
- **Einfacher Betrieb** — eine Plattform, ein Team

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>WHMCS-Billing</b><div class="diagram__chips"><span>Zwei Integrationsmodi</span><span>Sperren/Stilllegen von Mandanten</span></div></div>
<div class="diagram__conn">provisioniert über</div>
<div class="diagram__node diagram__node--brand"><b>Ænix Public Cloud Platform</b><div class="diagram__chips"><span>Cozystack Dashboard</span><span>Migrationswerkzeuge</span></div></div>
<div class="diagram__conn">stellt bereit</div>
<div class="diagram__node"><b>Cozystack-Service-Katalog</b><div class="diagram__chips"><span>VMs</span><span>Managed Databases</span><span>S3</span><span>GPU</span></div></div>
<div class="diagram__conn">isoliert Kunden über</div>
<div class="diagram__node"><b>Tenant-CRD</b><div class="diagram__chips"><span>Isolation auf Produktionsniveau</span></div></div>
</div>
</div>

Produktive Referenzen: regionale Hosting-Anbieter, die die Ænix Public Cloud Platform betreiben. Die am nächsten liegende beschriebene Fallstudie: [ein Anbieter, der eine kommerzielle Public Cloud über drei Rechenzentren betreibt](/de/case-studies/sovereign-public-cloud/).

---

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

- **[Public Cloud Builder](/de/dienstleistungen/public-cloud-builder/)** — Projektleistung
- **[White-Label-Cloud](/de/dienstleistungen/white-label-cloud/)** — unter eigener Marke für Reseller
- **[Artikel: Modernisierung der Plattform für Hosting-Anbieter](/de/blog/2026/05/hosting-anbieter-plattform-modernisierung/)**
- **[Virtuozzo-Migration](/de/migration/virtuozzo/)** — einen Virtuozzo-Bestand umziehen
- **[Rechner für Hosting-Anbieter](/isp-calculator/)** — Unit Economics
- **[Webinar „Launch your public cloud“](/webinars/launch-public-cloud/)**

---

*Ænix hat Cozystack initiiert (CNCF-Sandbox-Projekt) und pflegt es gemeinsam mit Maintainern anderer Unternehmen.*
