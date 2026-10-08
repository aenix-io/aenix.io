---
title: "Cloud-Plattform für Transport und Logistik — an NIS2 ausgerichtet, edge-fähig, bereit für KI"
seo_title: "Cloud-Plattform für Transport und Logistik mit NIS2"
description: "Cloud für Fracht, Häfen und Depots unter NIS2: Das TOS behält seine VM, Gate- und Telematikdaten bleiben lokal, und der Standort läuft auch ohne Uplink."
related_pages:
  - /de/loesungen/nis2-compliance/
  - /de/loesungen/data-sovereignty/
  - /de/produkte/private-cloud-platform/
  - /de/produkte/cozystack/
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /industries/transport-logistics/
direct_answer: |
  **Transport- und Logistikunternehmen, die unter NIS2 als wesentliche Einrichtungen gelten (der Verkehrssektor steht in Anhang I), brauchen eine Cloud-Plattform, die in der Zentrale, an regionalen Standorten und am Edge — Depots, Häfen, Terminals und Fahrzeuge — einheitlich unter einem Betriebsmodell läuft. Ænix setzt das mit Cozystack um, dem Open-Source-Projekt der CNCF (Sandbox), das Ænix initiiert hat und gemeinsam mit anderen pflegt, und mit der Ænix Private Cloud Platform darauf. Cozystack betreibt virtuelle Maschinen und Container über KubeVirt auf einer Kubernetes-API, mit Cilium-eBPF-Networking und LINSTOR/DRBD-Storage, und unterstützt air-gapped OT-Systeme wie Bahnsignaltechnik und Hafenautomatisierung. Die integrierte Mandantenfähigkeit über Tenant-CRDs trennt Geschäftsbereiche wie Güterverkehr, Personenverkehr und Intermodal, während KI-Infrastruktur Routenplanung, Nachfrageprognosen und Predictive Maintenance bedient. Die Plattform ist von Grund auf darauf ausgelegt, die Risikomanagementmaßnahmen von NIS2 (Artikel 21) zu unterstützen, statt sie nachträglich aufzusetzen.**
quick_facts:
  - label: "Was es ist"
    value: "Eine einheitliche Cloud-Plattform auf Kubernetes-Basis für Transport- und Logistikunternehmen über Zentrale, regionale Standorte und Edge (Depots, Häfen, Terminals, Fahrzeuge)."
  - label: "Für wen"
    value: "Betreiber im Luft-, Schienen-, Wasser- und Straßengüterverkehr, Logistikdienstleister, Last-Mile- und Flottenbetreiber sowie Hafen- und Terminalbetreiber — viele davon wesentliche Einrichtungen nach NIS2."
  - label: "Lizenz"
    value: "Apache 2.0 (keine Lizenzkosten pro CPU oder Core)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Antrag auf Incubation in der Due-Diligence-Prüfung)"
  - label: "Relevante Regulierung"
    value: "NIS2 — der Verkehrssektor steht in Anhang I (Sektoren mit hoher Kritikalität); die Plattform ist darauf ausgelegt, die Maßnahmen nach Artikel 21 zu unterstützen. Die AENIX s.r.o. ist für ihr eigenes ISMS nach ISO/IEC 27001:2022 zertifiziert."
  - label: "Kernfunktion"
    value: "VMs und Container auf einer Kubernetes-API (KubeVirt), Cilium-eBPF-Networking, LINSTOR/DRBD-Storage und Air-Gap-Unterstützung für OT-Systeme wie Bahnsignaltechnik und Hafenautomatisierung."
  - label: "Kommerzielles Angebot"
    value: "Die Ænix Private Cloud Platform wird nach einem Platform Readiness Assessment zum Festpreis (14 oder 28 Tage) per RFP angeboten."
faq:
  - q: "Fällt der Verkehrssektor unter NIS2?"
    a: "Ja. Der Verkehrssektor (Luft, Schiene, Wasser und Straße) gilt nach NIS2 Anhang I als wesentlicher Sektor. Ænix gestaltet die Plattform so, dass die Kontrollen zur Unterstützung von NIS2 — Isolation der Tenants, Network Policies und Souveränitätsoptionen — fester Bestandteil der Architektur sind, statt nachträglich ergänzt zu werden."
  - q: "Kann dieselbe Plattform in der Zentrale, an regionalen Standorten und am Edge laufen?"
    a: "Ja. Cozystack betreibt Zentrale, regionale Standorte und Edge-Standorte wie Depots, Häfen, Terminals und Fahrzeuge über eine Kubernetes-API, sodass Teams jeden Standort nach einem Modell betreiben statt mit getrennten Stacks für Cloud und Edge."
  - q: "Wie geht die Plattform mit OT-Systemen wie Bahnsignaltechnik oder Hafenautomatisierung um?"
    a: "Cozystack unterstützt Air-Gap-Deployments, sodass OT-Systeme wie Bahnsignaltechnik und Hafenautomatisierung von externen Netzen isoliert laufen und trotzdem dieselben Plattformwerkzeuge und dasselbe Betriebsmodell nutzen wie der Rest der Infrastruktur."
  - q: "Können verschiedene Geschäftsbereiche die Plattform sicher gemeinsam nutzen?"
    a: "Ja. Cozystack nutzt eine Tenant-CRD für Mandantenfähigkeit und trennt so Geschäftsbereiche — etwa Güterverkehr, Personenverkehr und Intermodal — auf gemeinsamer Infrastruktur mit isolierten Namespaces und Policy-Grenzen."
  - q: "Unterstützt die Plattform KI-Workloads für Routenplanung und Predictive Maintenance?"
    a: "Ja. Die Plattform stellt GPU-Infrastruktur (NVIDIA GPU Operator) für Routenoptimierung, Nachfrageprognosen und Predictive Maintenance bereit und betreibt diese Workloads neben VMs und Containern auf derselben Kubernetes-API."
  - q: "Passt die Plattform für einen VMware-Ausstieg oder die Modernisierung von OpenStack?"
    a: "Ja. Cozystack steht unter Apache 2.0 ohne Lizenzkosten pro CPU oder Core und betreibt VMs über KubeVirt — deshalb ist es ein häufiges Ziel für Transportunternehmen, die VMware verlassen oder eine OpenStack-basierte Infrastruktur modernisieren."
---

**Transport und Logistik fallen als wesentlicher Sektor unter NIS2 (Anhang I, mit Luft, Schiene, Wasser und Straße), und es ist der Sektor, in dem die Rechenleistung der Fracht folgt: Ein Terminal, ein Depot, ein Rangierbahnhof und ein Fahrzeug müssen jeweils weiterarbeiten, wenn die Verbindung zur Zentrale ausfällt. Die architektonische Konsequenz: Gemessen wird die Plattform an der Autonomie der Standorte, nicht an zentraler Eleganz.**

> **Passt zu:** **[Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/)** — Architektur über mehrere Rechenzentren und Edge, darauf ausgelegt, NIS2 zu unterstützen, mit Souveränitätsoption für grenzüberschreitende Logistikdaten. Die AENIX s.r.o. ist für ihr eigenes ISMS nach ISO/IEC 27001:2022 zertifiziert ([Zertifikat](/de/compliance/iso-27001/)).

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
  <a class="cta-secondary" href="/de/blog/2026/05/transport-logistik-cloud-architektur-nis2/">Transport-Architektur →</a>
</div>

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wer zu uns kommt und warum

Betreiber im Luft-, Schienen-, Wasser- und Straßengüterverkehr, multimodale Logistikdienstleister, Hafen- und Terminalbetreiber, Last-Mile- und Flottenbetreiber. Vier Auslöser dominieren:

- **NIS2 als wesentliche Einrichtung** — der Verkehr steht in Anhang I, also sind Risikomanagement, Sicherheit der Lieferkette und Meldepflichten verbindlich, und die Nachweise müssen irgendwoher kommen.
- **Ein VMware-Ausstieg, der TOS oder WMS nicht beschädigen darf** — die vom Hersteller unterstützte VM-Appliance ist die Einschränkung, nicht die containerisierten Dienste drumherum.
- **Edge-Compute, das eine schlechte Verbindung überstehen muss** — Depots, Häfen, Terminals und Fahrzeuge, wo Autonomie wichtiger ist als zentrale Konsistenz.
- **Grenzüberschreitende Logistikdaten** — Frachtdaten überqueren mit jeder Sendung Grenzen; Datenresidenz muss sich daraus ergeben, wo ein Workload fest platziert ist, nicht aus einer Vertragsklausel.

</div>
</div>

---

## Was an einem Standort tatsächlich läuft — und was passiert, wenn die Verbindung abreißt

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Zentrale + regionale Standorte</b><div class="diagram__chips"><span>TMS</span><span>Planung</span><span>Standortübergreifende Aggregation</span></div></div>
<div class="diagram__conn">laufen auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack / Ænix Private Cloud Platform</b><div class="diagram__chips"><span>Eine Kubernetes-API</span><span>KubeVirt-VMs + Container</span><span>Tenant-CRD</span></div></div>
<div class="diagram__conn">erweitert auf</div>
<div class="diagram__node"><b>Standort-Cluster</b><div class="diagram__chips"><span>TOS / WMS</span><span>Gate und OCR</span><span>Telematikdaten</span></div></div>
<div class="diagram__conn">abgegrenzt von</div>
<div class="diagram__node"><b>OT</b><div class="diagram__chips"><span>Signaltechnik</span><span>Kran- und AGV-Steuerung</span></div></div>
</div>
</div>

**Das Terminal Operating System ist der schwierige Fall.** Ein TOS oder WMS ist eine zustandsbehaftete, latenzkritische Anwendung, die der Hersteller auf einem bestimmten Betriebssystem unterstützt und oft als VM-Appliance ausliefert. Genau daran scheitert eine reine Container-Plattform schon am Tor. Auf Cozystack läuft es als KubeVirt-VM auf dem Standort-Cluster, neben den containerisierten Diensten, in einem Netz und mit einer Backup-Klasse — der Hersteller behält seine Support-Matrix, und Sie müssen keinen zweiten Hypervisor mehr nur dafür betreiben.

**Gate, OCR und Telematik sind Datenaufnahme am Edge, keine Analytik.** Gate-Automatisierung, OCR für Kennzeichen und Containernummern, Anbindung der Fahrzeugwaage und Fahrzeugtelematik erzeugen einen hochfrequenten lokalen Datenstrom, der nutzlos ist, wenn er erst zur Zentrale und zurück muss. Er wird auf dem Standort-Cluster verarbeitet und als zusammengefasste Ereignisse nach oben weitergegeben — so bleiben auch die WAN-Kosten über einige hundert Depots im Rahmen.

**Die OT-Grenze ist eine Grenze, keine Verschmelzung.** Bahnsignaltechnik, Kran- und AGV-Steuerung und Stellwerkslogik bleiben in ihrem eigenen Netz, unter eigenem Change-Management und eigenem Sicherheitsnachweis. Die Plattform sitzt darüber, übernimmt Daten über definierte Übergänge, die per Cilium Network Policy durchgesetzt werden, und läuft air-gapped, wo das Sicherheitskonzept des Standorts es verlangt. Nichts an der Plattform liegt im Pfad einer Sicherheitsfunktion.

**Fällt der Uplink aus, arbeitet der Standort weiter.** Workloads am Standort laufen aus lokalem Storage, und ihr Zustand wird innerhalb des Standorts repliziert statt zur Zentrale. Was stoppt, sind die Replikation nach oben, zentrale Dashboards und netzweite Planung; kehrt die Verbindung zurück, werden gepufferte Daten nachgeliefert und der Standort synchronisiert sich wieder. Lkw warten nicht auf eine WAN-Leitung — genau deshalb passt ein Edge-Dienst eines Hyperscalers schlecht zu einem Terminal.

**Mandantenfähigkeit ist der Weg, wie Güterverkehr, Personenverkehr und Intermodal sich die Plattform teilen.** Eine Tenant-CRD-Grenze pro Geschäftsbereich, pro Standort oder pro Joint-Venture-Partner, mit Quotas und Audit, die auch standhalten, wenn eine NIS2-Aufsicht fragt, wer worauf zugreifen konnte.

---

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Gespräch vereinbaren</a>
</div>

- **[Artikel zur Transport-Architektur](/de/blog/2026/05/transport-logistik-cloud-architektur-nis2/)**
- **[NIS2-Compliance](/de/loesungen/nis2-compliance/)**
- **[Souveräne KI](/de/loesungen/sovereign-ai/)**
- **[Fallstudien](/de/case-studies/)** — neun Projekte, anonymisiert und ausführlich beschrieben

---

*Ænix hat Cozystack (CNCF-Sandbox-Projekt) initiiert und pflegt es gemeinsam mit Maintainern anderer Unternehmen. Darauf aufbauend bieten wir drei Plattformen an — Public Cloud, Private Cloud und AI.*
