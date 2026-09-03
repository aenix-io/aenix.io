---
title: "CloudStack-Migration — Service-Provider-Cloud auf Kubernetes umstellen"
description: "Apache CloudStack zu Cozystack: Angebote und Zonen, der Virtual-Router-Neuentwurf, Accounts als Mandanten, Abrechnung — und wann CloudStack bleiben sollte."
date: 2026-09-03
lastmod: 2026-09-03
language: "de"
hreflang_en: /migration/cloudstack/
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "cloudstack migration"
secondary_keywords: ["apache cloudstack ablösen", "cloudstack zu kubernetes", "cloudstack alternative", "hosting plattform modernisieren"]
related_pages:
  - /de/produkte/public-cloud-platform/
  - /de/produkte/whmcs-integration/
  - /de/produkte/cozystack
  - /de/dienstleistungen/platform-readiness-assessment
  - /de/alternativen/vmware-alternative
  - /de/migration/openstack/
direct_answer: |
  **Eine CloudStack-Migration überführt eine mandantenfähige Service-Provider-Cloud von Apache CloudStack auf eine Kubernetes-native Steuerebene. Aenix führt diese Migrationen auf Cozystack durch, ein Apache-2.0-lizenziertes CNCF-Projekt, das VMs und Container über eine gemeinsame Kubernetes-API betreibt. Bei KVM-basiertem CloudStack ziehen die Disks mechanisch um: QCOW2-Volumes auf NFS- oder Ceph-Primary-Storage importieren ohne Eingriff ins Gastsystem nach KubeVirt. Die Arbeit steckt in allem drumherum — Domains, Accounts und Projects werden auf das Tenant-CRD neu modelliert, Service- und Disk-Offerings werden zu Katalogdefinitionen, und der CloudStack Virtual Router wird durch Cilium ersetzt, womit DHCP, Source NAT, Port Forwarding, VPN und Load Balancing neu entworfen statt konvertiert werden. Abrechnungsanbindungen, die die CloudStack-API aufrufen, müssen umgehängt werden. Mittelgroße Anbieter brauchen vier bis zwölf Monate. CloudStack wird aktiv gepflegt — der Grund für den Wechsel ist Konsolidierung, nicht Verfall.**
quick_facts:
  - label: "Worum es geht"
    value: "Kohortenbasierte Migration einer mandantenfähigen CloudStack-Cloud auf eine Kubernetes-native Plattform (Cozystack) — Compute, Mandanten, Netzwerk, Abrechnung."
  - label: "Zieht mechanisch um"
    value: "KVM-Gäste — QCOW2-Volumes von NFS- oder Ceph-Primary-Storage importieren ohne Neuaufbau des Gastsystems nach KubeVirt."
  - label: "Muss neu entworfen werden"
    value: "Der CloudStack Virtual Router (DHCP, Source NAT, Port Forwarding, Site-to-Site-VPN, LB) hat keine einzelne Entsprechung; seine Funktionen verteilen sich auf Cilium und Plattformdienste."
  - label: "Mandanten-Mapping"
    value: "Domains, Accounts und Projects werden auf das Tenant-CRD neu modelliert; Service- und Disk-Offerings werden zu Katalogdefinitionen."
  - label: "Kommerzielle Anbindungen"
    value: "WHMCS, HostBill und eigene Portale rufen die CloudStack-API auf und müssen umgehängt werden — nach dem Netzwerk der längste Einzelposten."
  - label: "Typische Dauer"
    value: "Vier bis zwölf Monate für einen mittelgroßen Anbieter; länger, wenn Kunden eigene CloudStack-API-Schlüssel halten."
  - label: "Wann nicht migrieren"
    value: "Stabile KVM-Umgebung, VMs als gesamtes Produkt, keine Nachfrage nach Containern oder Managed Services — CloudStack wird aktiv gepflegt, Bleiben ist vertretbar."
faq:
  - q: "Ist Apache CloudStack tot? Warum überhaupt migrieren?"
    a: "Nein. CloudStack ist ein aktives Apache-Projekt mit regelmäßigem Release-Zyklus und hat während des VMware-Exodus nach der Broadcom-Übernahme sogar Nutzer gewonnen. Der Grund für eine Migration ist nicht Verfall, sondern Konsolidierung: Anbieter, deren Kunden inzwischen Managed Kubernetes, Managed Datenbanken und Object Storage neben den VMs erwarten, betreiben am Ende CloudStack plus einen separaten Kubernetes-Stack plus separaten Storage — und bezahlen drei Steuerebenen. Eine Kubernetes-native Plattform führt das zu einer zusammen."
  - q: "Was zieht sauber aus CloudStack um und was nicht?"
    a: "Auf KVM ziehen die Disks mechanisch um — QCOW2-Volumes von NFS- oder Ceph-Primary-Storage importieren ohne Eingriff ins Gastsystem nach KubeVirt. Templates und ISOs aus dem Secondary Storage kommen als Image-Quellen mit. Nicht mit kommen: der Virtual Router, dessen Funktionen für DHCP, Source NAT, Port Forwarding, VPN und Load Balancing über Cilium und Plattformdienste neu entworfen werden; die CloudStack-API, an der jede Kundenautomatisierung hängt; und Network Offerings als CloudStack-spezifische Abstraktion."
  - q: "Was passiert mit unserer WHMCS- oder HostBill-Anbindung?"
    a: "Sie wird umgehängt. Provisioning-Module, die über die CloudStack-API Instanzen anlegen, Volumes vergrößern und Usage-Records lesen, müssen künftig die neue Plattform ansprechen. Aenix liefert für genau diesen Weg eine WHMCS-Integration; das Usage-Metering wechselt von den CloudStack-Usage-Records auf den Metrik-Stack der Plattform. Weil hier der Umsatz hängt, wird dieser Schritt früh im Programm eingeplant und nicht ans Ende geschoben."
  - q: "Wir betreiben CloudStack auf VMware, nicht auf KVM. Ändert das etwas?"
    a: "Ja, meist zum Besseren: Es wird zu einer VMware-Migration mit einer CloudStack-förmigen Mandantenschicht darüber. Die Gast-Disks werden mit demselben Werkzeug bewegt wie bei jedem vSphere-Ausstieg — Konveyor Forklift, das in der Ænix-Plattform enthalten ist —, während Accounts, Offerings und Abrechnungsanbindung separat neu modelliert werden. Die Mechanik auf Disk-Ebene beschreibt der VMware-Migrations-Hub."
  - q: "Wie lange dauert eine CloudStack-Migration?"
    a: "Vier bis zwölf Monate für einen mittelgroßen Anbieter. Die Variablen sind die Zahl der Mandanten, wie viel vom Funktionsumfang des Virtual Routers pro Kunde tatsächlich genutzt wird, und ob Kunden eigene CloudStack-API-Schlüssel halten. Letzteres bringt eine veröffentlichte Abkündigungsfrist in den Plan und ist der Hauptgrund, wenn eine Migration über zwölf Monate hinausläuft."
  - q: "Welche Ænix Plattform ist das Ziel?"
    a: "In nahezu allen Fällen die Ænix Public Cloud Platform, denn CloudStack-Betreiber verkaufen Infrastruktur an externe Kunden und brauchen Mandantenmodell, Servicekatalog und Abrechnungsanbindung auch nach dem Wechsel. Die Ænix Private Cloud Platform passt nur dort, wo CloudStack als interne Private Cloud statt als kommerzielles Angebot betrieben wurde."
service:
  type: "CloudStack Migration"
  areaServed: ["EU", "DACH", "Zentralasien"]
  audience: "Hosting-Anbieter, MSPs, regionale Cloud-Betreiber"
---

**Apache CloudStack stirbt nicht — es ist ein aktives Apache-Projekt, das während des VMware-Exodus sogar Nutzer gewonnen hat. Anbieter verlassen es aus einem anderen Grund: Ihre Kunden wollen inzwischen Managed Kubernetes, Datenbanken und Object Storage neben den VMs, und CloudStack plus separater Kubernetes-Stack bedeutet zwei Steuerebenen bezahlen und beide besetzen.**

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)** — CloudStack-Umgebungen werden fast immer an externe Kunden verkauft, also sind Mandantenmodell, Servicekatalog und Abrechnung die Teile, die den Wechsel überleben müssen. Siehe auch **[WHMCS-Integration](/de/produkte/whmcs-integration/)**, wenn über WHMCS abgerechnet wird.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/dienstleistungen/platform-readiness-assessment/">Platform Readiness Assessment →</a>
</div>

---

## Wann CloudStack bleiben sollte

Wenn Ihr Produkt virtuelle Maschinen sind, Ihre Umgebung stabil auf KVM läuft, Ihre Kunden weder Container noch Managed Data Services nachfragen und Ihr Team die Codebasis kennt, gibt es keinen Migrationsgrund. CloudStack wird gepflegt, das Modell aus Zonen, Pods und Clustern skaliert, und ein funktionierendes IaaS durch ein gleichwertiges IaaS zu ersetzen bringt nichts.

Der Grund entsteht, wenn das Produkt breiter werden muss. Wer 2026 ausschließlich VMs verkauft, konkurriert über den Preis mit allen anderen, die ausschließlich VMs verkaufen. Sobald Managed Kubernetes, Managed PostgreSQL, S3-kompatibler Storage oder GPU-Kapazität auf der Roadmap stehen, lautet die Frage nicht mehr „welches IaaS", sondern „wie viele Steuerebenen will ich betreiben".

---

## Wie die Zuordnung tatsächlich aussieht

| CloudStack | Ziel in Cozystack | Charakter der Migration |
|---|---|---|
| KVM-Gäste, QCOW2 auf NFS- oder Ceph-Primary-Storage | KubeVirt-VMs, Disk-Import über CDI | Mechanisch. Kein Neuaufbau bei Linux; Windows braucht VirtIO-Behandlung. |
| Templates und ISOs im Secondary Storage | Image-Quellen für DataVolumes | Mechanisch. |
| Domains, Accounts, Projects | Tenant-CRD-Hierarchie plus Kubernetes-RBAC und OIDC | Neumodellierung. Domain-Baum und Mandantenbaum sind beide hierarchisch, aber nicht gleich geschnitten. |
| Service- und Disk-Offerings | Katalogdefinitionen und Storage-Klassen | Neumodellierung. Unkompliziert, aber jedes genutzte Offering muss erfasst werden — Anbieter finden regelmäßig Offerings, an deren Verkauf sich niemand erinnert. |
| Virtual Router (DHCP, Source NAT, Port Forwarding, Static NAT, Site-to-Site-VPN, LB) | Cilium plus Plattformdienste; kein einzelnes Ersatzobjekt | **Neuentwurf.** Der größte Einzelposten. |
| Isolated Networks, VPCs, Network Offerings | Cilium-Networking mit Policy pro Mandant; LB-IPAM mit BGP oder L2-Announcements | Neuentwurf, gekoppelt an den Adressplan. |
| Security Groups (Basic Zones) | Kubernetes Network Policy | Neumodellierung. Gleiche Absicht, andere Ausdrucksform. |
| Primary Storage (NFS / Ceph RBD) | LINSTOR/DRBD oder Ceph über Rook behalten | Ceph behalten oder Daten umziehen. Eine Entwurfsentscheidung, kein erzwungener Wechsel. |
| Secondary Storage | Object Storage auf der Plattform | Meist ein direkter Umzug. |
| SystemVMs (SSVM, Console Proxy) | Plattformkomponenten; Konsole über das Mandanten-Dashboard | Ersetzt, nicht migriert. |
| CloudStack-API | Kubernetes-API und Mandanten-Dashboard | Neubau für alle, die dagegen automatisieren. |
| Usage Records | Metrik-Stack der Plattform | Umhängen. Betrifft die Abrechnung — früh einplanen. |

**Der Virtual Router ist der Neuentwurf.** In CloudStack ist er eine Appliance pro Netz, die DHCP, DNS-Forwarding, Source NAT, Port Forwarding, Static NAT, Load Balancing und Site-to-Site-VPN erledigt. Auf einer Kubernetes-nativen Plattform liegen diese Funktionen an verschiedenen Stellen: Adressvergabe und Policy in Cilium, externe Adressen über LB-IPAM mit BGP- oder L2-Announcements, VPN als expliziter Dienst dort, wo ein Kunde ihn wirklich braucht. Die meisten Anbieter stellen im Assessment fest, dass über den gesamten Kundenstamm nur zwei oder drei Funktionen des Virtual Routers real genutzt werden — die Inventur muss aber pro Kunde erfolgen, denn der eine Mandant mit Site-to-Site-VPN ist meist derjenige, der am meisten zahlt.

**Kundenseitige API-Schlüssel bestimmen den Zeitplan.** Wenn Ihre Kunden ausschließlich das Portal nutzen, ist die API-Oberfläche eine interne Angelegenheit und Sie planen die Migration selbst. Halten Kunden eigene CloudStack-API-Schlüssel und automatisieren damit, führen Sie eine öffentliche API-Abkündigung durch — mit einer Kommunikationsfrist in Quartalen. Diese Unterscheidung verändert die Form des gesamten Programms und gehört in die erste Woche des Assessments.

---

## Ablauf der Migration

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Apache CloudStack</b><div class="diagram__chips"><span>KVM / QCOW2</span><span>Domains, Accounts, Projects</span><span>Virtual Router</span></div></div>
<div class="diagram__conn">bewertet, dann verschoben durch</div>
<div class="diagram__node"><b>Kohorten-Migration</b><div class="diagram__chips"><span>Disk-Import nach KubeVirt</span><span>Tenant-CRD-Mapping</span><span>Abrechnung umhängen</span></div></div>
<div class="diagram__conn">landet auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium eBPF</span><span>LINSTOR oder Ceph</span></div></div>
<div class="diagram__conn">danach</div>
<div class="diagram__node"><b>Katalog-Erweiterung</b><div class="diagram__chips"><span>Managed Kubernetes</span><span>Managed Datenbanken</span><span>S3, GPU</span></div></div>
</div>
</div>

1. **Architektur-Review.** Offering-Inventur, Nutzung der Virtual-Router-Funktionen pro Kunde, Umfang der kundenseitigen API-Schlüssel, Abrechnungsanbindungen, Adressplan. Ergebnis ist eine Zielarchitektur und eine Kohortenfolge Kunde für Kunde.
2. **Parallel-Deployment.** Die neue Plattform entsteht neben den laufenden CloudStack-Zonen. Beide laufen für die Dauer nebeneinander.
3. **Abrechnung und Portal zuerst.** Provisioning und Metering werden umgehängt, bevor Kunden-Workloads umziehen, damit migrierte Kunden vom ersten Tag auf der neuen Plattform korrekt abgerechnet werden. Diese Reihenfolge ist Absicht: Wer die Abrechnung ans Ende schiebt, migriert Kunden, die er nicht fakturieren kann.
4. **Kohorten-Migration.** Kunden ziehen in Gruppen um, die kleinsten und tolerantesten zuerst. Jede Kohorte wird im Parallel-Run validiert, bevor ihre CloudStack-Seite freigegeben wird.
5. **Decommission und Katalog-Erweiterung.** Freigewordene CloudStack-Hosts werden in den Zielcluster überführt, und der Servicekatalog wächst über VMs hinaus — genau deshalb hat sich die Migration gelohnt.

**Typische Dauer:** vier bis zwölf Monate für einen mittelgroßen Anbieter.

---

## Wie Ænix arbeitet

- **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)** — Offering- und Virtual-Router-Inventur, Mandanten- und Adressentwurf, Umfang der Abrechnungsanbindung, Kohortenplan, Risikoregister.
- **Pilot-Kohorte** — die erste Kundengruppe migriert mit Ænix-Ingenieuren im Team; daraus entstehen die Runbooks für den Rest.
- **Rollende Migration** — Kohorte für Kohorte, im Parallel-Run validiert, mit nachwandernder Hardware.
- **Betrieb** — Ihr Team mit **[Cozystack Enterprise Support](/de/produkte/cozystack-enterprise-support/)** im Rücken, oder Betrieb durch Ænix.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

---

*Ænix ist das Team hinter Cozystack (CNCF-Projekt, Apache 2.0).*
