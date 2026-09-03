---
title: "OpenStack-Migration — Dienst für Dienst auf eine Kubernetes-Steuerebene"
description: "OpenStack zu Cozystack: Was mechanisch umzieht, was neu entworfen wird (Neutron), was gar nicht mitkommt (Ironic, Heat) — und wann Bleiben richtig ist."
date: 2026-09-03
lastmod: 2026-09-03
language: "de"
hreflang_en: /migration/openstack/
quick_facts_style: "rows"
faq_style: "rows"
primary_keyword: "openstack migration"
secondary_keywords: ["openstack ablösen", "openstack zu kubernetes", "openstack modernisierung", "openstack betrieb kosten"]
related_pages:
  - /de/alternativen/openstack-alternative
  - /de/produkte/public-cloud-platform/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack
  - /de/dienstleistungen/platform-readiness-assessment
  - /de/migration/vmware/
direct_answer: |
  **Eine OpenStack-Migration überführt Compute, Mandanten, Storage und Netzwerk aus einer OpenStack-Cloud auf eine Kubernetes-native Steuerebene. Aenix führt diese Migrationen auf Cozystack durch, ein Apache-2.0-lizenziertes CNCF-Projekt, das VMs und Container über eine gemeinsame Kubernetes-API betreibt. Die Zuordnung ist ungleichmäßig und sollte vor der Aufwandsschätzung bekannt sein: Nova und Glance ziehen mechanisch um, weil beide Seiten auf libvirt/KVM laufen; Cinder behält entweder Ceph oder wechselt auf LINSTOR; Keystone-Projekte werden auf das Tenant-CRD neu modelliert; Neutron ist ein echter Neuentwurf auf Cilium, keine Konvertierung. Heat-Templates und Horizon-Anpassungen werden neu gebaut, nicht portiert, und für Ironic gibt es keine direkte Entsprechung. Mittelgroße Umgebungen brauchen 4 bis 12 Monate. Wo das Team Tiefe hat und der Upgrade-Pfad regelmäßig geübt wird, ist Bleiben die richtige Entscheidung.**
quick_facts:
  - label: "Worum es geht"
    value: "Kohortenbasierte Migration von OpenStack auf eine Kubernetes-native Steuerebene (Cozystack) — Compute, Mandanten, Storage, Netzwerk."
  - label: "Zieht mechanisch um"
    value: "Nova zu KubeVirt und Glance zu CDI-DataVolumes — beide Seiten sind libvirt/KVM, Images kommen ohne Eingriff ins Gastsystem an."
  - label: "Muss neu entworfen werden"
    value: "Neutron auf Cilium (Mandantennetze, Floating IPs, Security Groups) und die Keystone-Projektbäume auf das Tenant-CRD."
  - label: "Kommt nicht mit"
    value: "Heat-Templates und Horizon-Anpassungen werden neu gebaut; für Ironic-Bare-Metal-Provisioning gibt es keine direkte Entsprechung."
  - label: "Typische Dauer"
    value: "4 bis 12 Monate für mittelgroße Umgebungen; 12 bis 18 Monate bei komplexer Provider-Netz-Topologie oder mandantenseitig genutzter OpenStack-API."
  - label: "Lizenz"
    value: "Cozystack ist Apache 2.0, ohne CPU- oder Core-basierte Lizenzierung; CNCF-Projekt (Sandbox seit 28.02.2025)."
  - label: "Wann nicht migrieren"
    value: "Besetztes Betriebsteam, geübter Upgrade-Pfad und intensive Nutzung von Ironic, Octavia, Manila oder Designate — dann auf OpenStack bleiben."
faq:
  - q: "Welche OpenStack-Dienste lassen sich sauber abbilden und welche nicht?"
    a: "Nova bildet auf KubeVirt ab, Glance auf CDI-DataVolumes — ohne Eingriff ins Gastsystem, weil beide Plattformen libvirt/KVM nutzen. Cinder behält entweder Ceph RBD oder wechselt auf LINSTOR/DRBD. Keystone-Projekte werden auf das Tenant-CRD neu modelliert. Neutron ist ein Neuentwurf auf Cilium, keine Konvertierung. Heat-Templates, Horizon-Anpassungen und Ceilometer-gestützte Abrechnungsanbindungen werden neu gebaut. Für Ironic-Bare-Metal-Provisioning existiert keine direkte Entsprechung."
  - q: "Was ist der schwierigste Teil einer OpenStack-Migration?"
    a: "Das Netzwerk. Mandantennetze, Router, Floating IPs, Security Groups und Provider-VLANs sind ein Adressierungs- und Policy-Modell, nicht bloß Verkabelung. Cilium erreicht dieselben Ergebnisse über andere Primitive: Network Policy statt Security Groups, LB-IPAM mit BGP oder L2-Announcements statt Floating IPs. Kundensichtbare Adressen müssen den Umzug überleben oder nach einem abgestimmten Plan umnummeriert werden. Wird dieser Teil zu klein geschätzt, bleibt die Migration genau hier stehen."
  - q: "Wie lange dauert eine OpenStack-zu-Cozystack-Migration?"
    a: "Vier bis zwölf Monate für mittelgroße Umgebungen. Auf zwölf bis achtzehn Monate wächst sie dort, wo eine komplexe Provider-Netz-Topologie im Spiel ist oder Mandanten die OpenStack-API direkt nutzen und für ihre eigene Automatisierung eine Abkündigungsfrist brauchen."
  - q: "Müssen wir Ceph aufgeben?"
    a: "Nein. Ein bestehendes Ceph-Cluster kann über den Ceph-CSI-Treiber weiter genutzt werden und ist oft die richtige Wahl, wenn die Investition getätigt ist und das Leistungsprofil passt. LINSTOR/DRBD ist die Alternative, wenn Sie repliziertes lokales NVMe statt eines verteilten Storage-Clusters wollen. Das ist eine Architekturentscheidung im Assessment, kein erzwungener Austausch."
  - q: "Was passiert mit Heat-Templates und Terraform gegen die OpenStack-API?"
    a: "Sie werden gegen die Kubernetes-API neu geschrieben. Heat-Stacks lassen sich nicht konvertieren; das Äquivalent ist Helm plus GitOps-Reconciliation. Für eine interne Cloud ist das Schulungs- und Refactoring-Aufwand. Für eine öffentliche Cloud, deren Kunden gegen Ihre OpenStack-Endpunkte automatisieren, ist es eine Produktentscheidung, die ab Tag eins eine veröffentlichte Abkündigungsfrist braucht."
  - q: "Wann sollten wir auf OpenStack bleiben?"
    a: "Wenn ein besetztes Betriebsteam den Release-Zyklus kennt, der Upgrade-Pfad regelmäßig geübt statt theoretisch ist und Sie die breitere Dienstepalette wirklich nutzen — Ironic für Bare Metal, Octavia, Manila, Designate, Barbican. OpenStack kann Dinge, die eine Kubernetes-native Plattform nicht kann. Der Migrationsgrund ist operativ: hängengebliebene Upgrades, ein Bus-Faktor von ein oder zwei Personen, ein schmaler genutzter Dienstumfang oder Container, die längst den Großteil der Last stellen."
  - q: "Brauchen wir während der Migration doppelte Hardware?"
    a: "Nein. Cozystack wird parallel zu OpenStack aufgebaut, aber nur mit Reserve für die jeweils größte laufende Kohorte. Sobald eine Kohorte abgeschlossen und ihre OpenStack-Seite freigegeben ist, werden die Knoten geleert und in den Zielcluster überführt. Die Kapazität wandert also mit, statt über die gesamte Laufzeit doppelt vorgehalten zu werden."
service:
  type: "OpenStack Migration"
  areaServed: ["EU", "DACH", "Zentralasien"]
  audience: "Hosting-Anbieter, Telcos, nationale Betreiber, regulierte Unternehmen"
---

**OpenStack ist keine gescheiterte Plattform. Es ist eine Plattform, deren Betriebskosten in knappen Fachkräften bezahlt werden. Diese Seite beschreibt, wann dieser Tausch nicht mehr aufgeht, was der Wechsel auf eine Kubernetes-native Steuerebene Dienst für Dienst bedeutet — und welche Teile wirklich schwierig sind.**

> **Passt zu:** **[Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/)**, wenn die OpenStack-Cloud an externe Kunden verkauft wird (Hoster, MSPs, Telcos, nationale Betreiber); **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)**, wenn sie interne Verbraucher unter DORA-, NIS2- oder sektorspezifischen Auflagen bedient.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/alternativen/openstack-alternative">OpenStack-Alternative →</a>
</div>

---

## Wann Sie nicht migrieren sollten

Das gehört an den Anfang, weil die meisten Texte zu OpenStack es auslassen.

Bleiben Sie auf OpenStack, wenn Sie ein funktionierendes Betriebsteam haben, das den Release-Zyklus kennt, Sie auf einem gepflegten Release stehen, Ihr Upgrade-Pfad geübt statt theoretisch ist und Sie genug von der Dienstepalette nutzen — Ironic für Bare Metal, Octavia, Manila, Designate, Barbican —, dass ein Ersatz den Neubau mehrerer dieser Dienste bedeuten würde. OpenStack kann Dinge, die Kubernetes-native Plattformen nicht können: Multi-Hypervisor-Compute, ausgereiftes Bare-Metal-Provisioning und eine API-Oberfläche, die ein Jahrzehnt an Werkzeugen bereits spricht.

Der Grund für eine Migration ist betrieblich, nicht technisch-überlegen. Er wird stark, wenn:

- **Upgrades hängen.** Die Umgebung liegt zwei oder mehr Releases zurück, das Upgrade ist ein Projekt statt eines Wartungsfensters, und jedes Aufschieben verschlimmert das nächste.
- **Das Team ein Bus-Faktor-Problem ist.** Ein oder zwei Personen tragen die gesamte Steuerebene. OpenStack-Kompetenz wird vom Markt nicht in dem Tempo nachgeliefert, in dem sie abfließt.
- **Der genutzte Dienstumfang schmal ist.** In der Praxis laufen viele Clouds auf Keystone, Nova, Glance, Cinder, Neutron und Horizon — und sonst nichts. Diesen Umfang ersetzt eine Kubernetes-Steuerebene ohne Verlust.
- **Container bereits die Mehrheit der Last stellen.** Sie betreiben Kubernetes auf OpenStack-VMs, bezahlen zwei Steuerebenen und debuggen über beide hinweg.
- **Sich die Distributionsökonomie geändert hat.** Das herstellergestützte OpenStack-Abonnement wurde zu einem Preis verlängert, der nicht mehr zum Wert des Supports passt.

Trifft nichts davon zu, lautet die ehrliche Empfehlung: bleiben und stattdessen in die Upgrade-Pipeline investieren.

---

## Zuordnung Dienst für Dienst

Hier entscheidet sich der Umfang. Jedes OpenStack-Projekt hat ein Ziel, kein Ziel oder einen Neuentwurf.

| OpenStack | Ziel in Cozystack | Charakter der Migration |
|---|---|---|
| Keystone (Identität, Domains, Projekte) | Tenant-CRD plus Kubernetes-RBAC, OIDC gegen Ihren bestehenden IdP | Neumodellierung. Projektbäume bilden sich nicht eins zu eins ab; die Mandantenhierarchie wird im Assessment entworfen. |
| Nova (Compute) | KubeVirt-VMs im selben Cluster wie Container | Mechanisch. Beide Seiten sind libvirt/KVM. |
| Glance (Images) | CDI-DataVolumes mit Object Storage als Quelle | Mechanisch. QCOW2 und raw kommen mit. |
| Cinder (Block) | LINSTOR/DRBD, oder das bestehende Ceph-Cluster über den Ceph-CSI-Treiber weiter nutzen | Mechanisch, wenn Ceph bleibt; Datenumzug bei Konsolidierung auf LINSTOR. |
| Neutron (Netzwerk) | Cilium (eBPF) mit L2-Announcements oder BGP; MetalLB, wo bereits Standard | Neuentwurf. Der schwierige Teil — siehe unten. |
| Swift / Ceph RGW (Object) | S3-kompatibler Object Storage auf der Plattform, oder RGW behalten | Meist behalten. Object-Endpunkte sind langlebig und kundensichtbar. |
| Octavia (Load Balancing) | Kubernetes-Services vom Typ LoadBalancer plus Ingress-Schicht | Neuentwurf. Die Semantik pro Mandant unterscheidet sich. |
| Ironic (Bare Metal) | Keine direkte Entsprechung | Lücke. Wenn Ironic tragend ist, behalten Sie es — oder diesen Teil von OpenStack. |
| Magnum (Kubernetes as a Service) | Mandanten-Kubernetes-Cluster mit gehosteten Steuerebenen | Vereinfachung. Genau darauf ist die Plattform gebaut. |
| Trove (DBaaS) | Managed-Datenbank-Anwendungen im Mandantenkatalog | Ersatz, keine Migration. Daten ziehen per Dump oder Replikat um. |
| Heat (Orchestrierung) | Helm plus GitOps-Reconciliation | Neubau. Heat-Templates lassen sich nicht konvertieren. |
| Horizon (Dashboard) | Cozystack-Mandanten-Dashboard | Ersatz. Schulen statt portieren. |
| Ceilometer / Gnocchi | Prometheus-kompatibler Metrik-Stack mit Langzeitspeicher | Ersatz. Abrechnungsanbindungen müssen umgehängt werden. |

Zwei Zeilen verdienen Nachdruck, weil dort Migrationen aus dem Ruder laufen.

**Neutron ist der Neuentwurf.** Mandantennetze, Router, Floating IPs, Security Groups und Provider-VLANs sind ein Adressierungs- und Policy-Modell, nicht bloß Verkabelung. Cilium erreicht dieselben Ergebnisse über andere Primitive: Network Policy statt Security Groups, LB-IPAM mit BGP oder L2-Announcements statt Floating IPs und L3-Agent. Kundensichtbare Adressen müssen den Umzug überleben oder nach einem Plan umnummeriert werden, dem Ihre Kunden zugestimmt haben. Planen Sie hier echte Entwurfszeit ein; das Überspringen ist der häufigste Grund für eine steckengebliebene OpenStack-Migration.

**Heat und Horizon kommen nicht mit.** Alles, was ein Mandant gegen die OpenStack-API automatisiert hat — Terraform-Provider, Heat-Stacks, interne Skripte —, wird gegen die Kubernetes-API neu geschrieben. Für eine interne Cloud sind das Schulungskosten. Für eine öffentliche Cloud mit API-nutzenden Kunden ist es eine Produktentscheidung mit Abkündigungsfrist, und die gehört an Tag eins in den Plan, nicht in Monat neun.

---

## Ablauf der Migration

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>OpenStack</b><div class="diagram__chips"><span>Nova / KVM</span><span>Keystone-Projekte</span><span>Neutron-Mandantennetze</span></div></div>
<div class="diagram__conn">bewertet, dann verschoben durch</div>
<div class="diagram__node"><b>Kohorten-Migration</b><div class="diagram__chips"><span>Disk-Import nach KubeVirt</span><span>Tenant-CRD-Mapping</span><span>Adressplan</span></div></div>
<div class="diagram__conn">landet auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium eBPF</span><span>LINSTOR oder Ceph</span></div></div>
<div class="diagram__conn">endet mit</div>
<div class="diagram__node"><b>OpenStack-Decommission</b><div class="diagram__chips"><span>pro Kohorte, nach Validierung</span></div></div>
</div>
</div>

1. **Architektur-Review (2-4 Wochen).** Vollständige Dienstinventur — welche OpenStack-Projekte tatsächlich genutzt werden, welche mandantensichtbare APIs haben, hinter welchen Integrationen hängen. Entwurf des Mandantenmodells. Adressplan. Ergebnis ist eine schriftliche Zielarchitektur und eine Kohortenfolge — und der Punkt, an dem ein Nein noch günstig ist.
2. **Parallel-Deployment.** Cozystack wird neben der laufenden OpenStack-Cloud aufgebaut, nicht darauf. Beide Steuerebenen bestehen für die Dauer nebeneinander; es gibt keinen Moment, in dem die gesamte Umgebung an einem einzigen Cutover hängt.
3. **Kohorten-Migration.** Workloads ziehen in definierten Gruppen um — typischerweise nach Mandant, bei einer internen Cloud nach Anwendungsschicht. Jede Kohorte wird im Parallel-Run validiert, bevor ihre OpenStack-Seite freigegeben wird. Compute zuerst, Storage folgt dem Compute, das Netzwerk wird pro Kohorte gegen den abgestimmten Adressplan umgeschaltet.
4. **Decommission.** OpenStack-Knoten werden geleert und in den neuen Cluster überführt, sobald Kohorten abgeschlossen sind. Die Umgebung braucht damit nicht über die gesamte Laufzeit doppelte Hardware, sondern nur Reserve für die jeweils größte laufende Kohorte.

**Typische Dauer:** 4 bis 12 Monate für mittelgroße Umgebungen; 12 bis 18 Monate, wenn Neutron eine komplexe Provider-Netz-Topologie trägt oder Mandanten die OpenStack-API direkt nutzen.

---

## Was sauber umzieht und was nicht

**Zieht sauber um.** VM-Disks — beide Seiten sind KVM, ein QCOW2- oder raw-Image importiert ohne Änderung am Gastsystem in ein KubeVirt-DataVolume. Linux-Gäste booten in der Regel beim ersten Versuch. Ceph, wenn Sie es behalten. Object-Storage-Endpunkte. Alles bereits Containerisierte.

**Braucht Entwurfsarbeit.** Die Mandantenhierarchie, falls Sie Keystone-Domains und verschachtelte Projekte genutzt haben. Load-Balancer-Semantik. Quota- und Rate-Limit-Modelle. Alles, was einen Floating-IP-Pool voraussetzt.

**Muss neu gebaut werden.** Heat-Stacks. Horizon-Anpassungen. Abrechnungs- und Metering-Anbindungen, die Ceilometer lesen und auf die neue Metrikquelle umgehängt werden müssen — bei einem Service-Provider ist das nach dem Netzwerk der längste Einzelposten, und weil er den Umsatz betrifft, wird er früh eingeplant statt spät.

**Zieht womöglich gar nicht um.** Ironic-verwaltetes Bare Metal. Windows-Gäste brauchen dieselbe VirtIO-Treiberbehandlung wie bei jeder Virtualisierungsmigration. Als Hersteller-VM ausgelieferte Appliances brauchen die Freigabe ihres Herstellers für den neuen Hypervisor, bevor Sie mit ihnen planen.

Den Plattformvergleich hinter diesen Entscheidungen finden Sie unter **[OpenStack-Alternative](/de/alternativen/openstack-alternative/)**. Die Kostenseite modellieren Sie mit dem **[ROI- und TCO-Rechner](/de/roi-rechner/)**.

---

## Wie Ænix arbeitet

- **Platform Readiness Assessment** (Festpreis, vorab vereinbart) — Dienstinventur, Zielarchitektur, Mandanten- und Adressentwurf, Kohortenplan, Risikoregister. Siehe **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.
- **Pilot-Kohorte** — die erste Mandantengruppe migriert mit Ænix-Ingenieuren im Team; daraus entstehen die Runbooks für den Rest.
- **Rollende Migration** — Kohorte für Kohorte, im Parallel-Run validiert, mit OpenStack-Hardware, die in den Zielcluster nachwandert.
- **Betrieb** — entweder betreibt Ihr Team die Plattform mit **[Cozystack Enterprise Support](/de/produkte/cozystack-enterprise-support/)** im Rücken, oder Ænix betreibt sie.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
</div>

---

*Ænix ist das Team hinter Cozystack (CNCF-Projekt, Apache 2.0).*
