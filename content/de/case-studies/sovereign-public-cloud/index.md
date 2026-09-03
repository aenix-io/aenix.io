---
title: "Eine souveräne Public Cloud auf Bare Metal"
description: "Ein Schweizer Provider migrierte von einem Hypervisor-Stack auf eine vollwertige kommerzielle Public Cloud mit Cozystack — Multi-Region über drei Rechenzentren, synchrone Replikation und Verschlüsselung."
hero_subtitle: "Kommerzielle Public Cloud auf Bare Metal, Multi-Region"
date: 2026-06-15
lastmod: 2026-06-15
page_type: "case-study"
language: "de"
hreflang_en: "/case-studies/sovereign-public-cloud/"
images: ["img/og/og-case-sovereign-public-cloud.png"]
related_pages:
  - /de/produkte/public-cloud-platform/
  - /de/loesungen/data-sovereignty/
  - /de/branchen/hosting-anbieter/
  - /de/dienstleistungen/sovereign-cloud-builder/
---

<div class="cs-tags">
  <span class="cs-tag">Souveränität</span>
  <span class="cs-tag">3 RZ · DRBD</span>
  <span class="cs-tag">GPU in Produktion</span>
  <span class="cs-tag">Disaster Recovery</span>
  <span class="cs-tag">Verschlüsselung</span>
</div>

**Ein Schweizer Cloud-Provider migrierte von einem Hypervisor-Stack und baute auf Cozystack eine vollwertige kommerzielle Public Cloud auf — VMs, Managed Kubernetes, Datenbanken und GPUs auf eigener Infrastruktur, ohne Hyperscaler. Der Compute-Cluster ist über drei Schweizer Rechenzentren geografisch verteilt und synchron repliziert; ein schwerwiegender 20-stündiger Storage-Vorfall während eines Upgrades wurde ohne Datenverlust behoben.**

<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">3 RZ</div><div class="cs-stat__label">synchrone Storage-Replikation über die Rechenzentren, etcd über drei Standorte</div></div>
  <div class="cs-stat"><div class="cs-stat__num">20 h → 0</div><div class="cs-stat__label">Stunden Vorfall — kein Datenverlust</div></div>
  <div class="cs-stat"><div class="cs-stat__num">10+</div><div class="cs-stat__label">Mandanten in Produktion; öffentliche Website in drei Sprachen</div></div>
</div>

## Über das Projekt

Der Kunde ist ein Schweizer Cloud-Provider. Vor dem Projekt lief er auf einem Hypervisor-Stack (Harvester) und, historisch bedingt, auf einer Jelastic/Virtuozzo-Legacy — daher der Schmerz mit Vendor-Lock-in, Lizenzierung und der Unfähigkeit, Funktionen schnell zu ergänzen. Vor Cozystack evaluierte er OpenShift und OpenStack und erwog, eine eigene Plattform zu bauen — „uns fehlten die Kapazität und die Leute".

Das Ziel — eine vollwertige kommerzielle Public Cloud unter eigener Marke: VMs, Managed Kubernetes, Datenbanken und GPUs, vollständig auf eigener Infrastruktur, ohne Hyperscaler. Für den Schweizer Markt (öffentlicher Sektor, Finanzwesen) geht es dabei um Souveränität: die Daten müssen im Land bleiben und verschlüsselt sein, und der Provider muss auf einem offenen CNCF-Projekt eine vertragliche SLA anbieten. Zwei Auslieferungsformate: eine Public Cloud und eine On-Prem-Appliance für große Kunden (Banken, Behörden) mit Tausenden VMs.

## Ziele und Anforderungen

- Den Hypervisor-Stack vollständig verlassen und eine Public Cloud auf Cozystack aufbauen.
- Ein Betreibermodell wie bei den großen Clouds: der Admin stellt Mandanten und Sub-Mandanten bereit (Kunde → dessen prod/dev/test) mit Rollentrennung.
- Managed Services: VMs (mit Upload eigener Images/Templates für Windows/Linux), Kubernetes, Datenbanken, S3-Objektspeicher, GPU.
- Multi-Region und Ausfallsicherheit: mehrere Rechenzentren, synchrone Replikation, Toleranz gegenüber dem Ausfall eines Knotens und eines ganzen Rechenzentrums.
- Souveränität und Verschlüsselung: At-Rest-Volume-Verschlüsselung, verschlüsselte Replikation und Inter-RZ-Verkehr, ein abgesichertes S3, ein Weg zu BYOK.
- Transparentes Billing (nach dedizierten Ressourcen, wie bei den großen Clouds).

## Vorgeschlagene Lösung

- **Compute & Services** — VMs auf KubeVirt, Mandanten-Kubernetes-Cluster (Control Plane über Kamaji), Managed-Datenbanken, Objektspeicher auf SeaweedFS. Zwei Cluster: Compute und ein separater Storage-Cluster (S3-Backend).
- **Multi-Region** — der Compute-Cluster ist geografisch über drei Schweizer Rechenzentren verteilt: synchrone LINSTOR/DRBD-Volume-Replikation über die Rechenzentren, geografisch verteiltes etcd, Replikationsfaktor 3 (eine Replik pro Rechenzentrum).
- **Storage** — LINSTOR/DRBD auf ZFS, vier Klassen (lokal / repliziert × verschlüsselt via LUKS, Master-Passphrase pro Cluster), BYOK auf der Roadmap (OpenBao); RWX für Mandanten-Cluster über LINSTOR-NFS; für Backup-Buckets — Object Lock und Versionierung (unveränderliche Kopien).
- **Networking** — Kube-OVN + Cilium + MetalLB; VPC, Firewall-Gateways, redundante Uplinks mit Policy-Routing.
- **Billing** — ein eigenes System: Verkauf dedizierter vCPU/RAM (wie bei den großen Clouds), stündliches Metering in eine externe Datenbank.

Das Engagement wuchs zu laufendem Support und Co-Development: die Ingenieure des Kunden wurden Cozystack-Maintainer.

{{< placeholder-image width="1200" height="640" label="Souveräne Grenze (Schweiz): Compute-Cluster geografisch über drei Rechenzentren verteilt mit synchroner DRBD-Replikation und etcd über drei Standorte; ein separater SeaweedFS-Objektspeicher-Cluster hält unveränderliche Backups; durchgängige Verschlüsselung at-rest / in-transit" >}}

## Umsetzung: neue Anforderungen und wie wir sie gelöst haben

- **Verschlüsselung für regulatorische Anforderungen.** Mit dem Onboarding von Kunden aus regulierten Branchen kamen Anfragen auf: verschlüsselte Storage-Klassen, ein verschlüsselter S3-Endpunkt, verschlüsselte DRBD-Replikation und Inter-RZ-Verkehr. Ein Teil ist ausgeliefert, ein Teil (Bucket-Verschlüsselung, BYOK) wird upstream vorangetrieben.
- **Echte DR-Übungen.** Der Kunde testet die Ausfallsicherheit regelmäßig „im Ernst" — er schaltet Knoten ab, um zu sehen, was passiert. Das brachte nicht offensichtliche Kaskaden ans Licht (z. B. die Empfindlichkeit des Netzwerk-Controllers gegenüber Leader-Verlust). Wir führten Backups ein (Velero auf Plattform- und Mandantenebene), Snapshots der Mandanten-Cluster und einen Schutz-Webhook, der verhindert, dass kritische Objekte (Volumes, Namespaces, Load Balancer) versehentlich gelöscht werden.
- **Ein schwerer Vorfall — ohne Datenverlust behoben.** Während eines großen Upgrades trat ein kaskadierender Storage-Ausfall auf: eine DRBD-Race-Condition, der Verlust einiger Patches in einem Zwischenschritt, Erschöpfung der Netzwerk-Ports aufgrund von OS-Standardwerten sowie ein Breaking Change in der Netzwerkschicht. Das Team arbeitete rund um die Uhr etwa 20 Stunden und stellte die Cloud **ohne Datenverlust** wieder her; die gefundenen Bugs flossen upstream (LINSTOR und dessen CSI-Treiber; der KubeVirt-CSI-Treiber).
- **Operative Reife.** Wir bauten einen Prozess darum: vor Änderungen informieren, Upgrades auf Staging „nachvollziehbar" proben und dann auf Prod wiederholen, nicht-deklarative Befehle vermeiden, KI-gestützte Vorfallanalyse und fertige Runbooks (DRBD-Recovery, Cozystack-Upgrade).
- **Proaktive Sicherheit.** Zu Schwachstellen im Linux-Kernel schickten wir vorab Analysen mit der Einschätzung, ob die Plattform betroffen ist, samt Gegenmaßnahmen. Ein externer Pentest fand ein Cross-Tenant-Listing-Leck (ein Mandant konnte die Objektliste eines anderen sehen) — behoben.
- **Ein Strom von Enterprise-Funktionen auf Anfrage.** GPUs der nächsten Generation, Scheduling von Windows-VMs mit Lizenzierung pro Knoten, UEFI/Secure Boot, garantierte IOPS, Network Policies auf Mandantenebene, OIDC/SSO pro Mandant, Golden Images und Air-Gap, White-Labeling, CIS-Hardening.

## Ergebnisse und aktueller Stand

- Die Public Cloud ist in Produktion: VMs, Kubernetes und GPUs werden verkauft, echte Kunden onboarden (mehr als ein Dutzend Mandanten). Eine öffentliche Website in drei Sprachen, Konferenzteilnahmen, Vorträge über den Weg „Vendor-Lock-in → Souveränität → Cozystack".
- Der Compute-Cluster ist geografisch über drei Schweizer Rechenzentren verteilt mit synchroner Replikation über die Rechenzentren; die Architektur ist darauf ausgelegt, den Ausfall eines ganzen Rechenzentrums zu überstehen.
- Beide Cluster (Compute und Storage) sind nach den Vorfällen stabil — Wiederherstellung ohne Datenverlust.
- Billing nach dedizierten Ressourcen (einschließlich S3), Backups (Velero + unveränderliche Buckets) und Volume-Verschlüsselung sind im Betrieb; der Kunde betreibt sein eigenes Kubernetes-natives Dashboard und ist ein aktiver Cozystack-Co-Contributor.

## Roadmap

- BYOK und Bucket-Verschlüsselung (Förderung der Upstream-Arbeit), OIDC/SSO und Network Policies pro Mandant.
- Garantierte IOPS und Block-Storage der nächsten Generation; Umstellung der Service-Ankündigung von MetalLB auf Cilium BGP.
- Ausbau der Rechenzentrums-Präsenz; Sub-Mandanten-Billing; GPU-Inferenz als Service; Verlagerung der Image-Registry auf einen separaten Cluster.

## Warum dieser Fall wichtig ist

<div class="cs-why card-grid">
  <div class="card"><div class="card-body"><h3 class="card-title">Eine vollständige souveräne Public Cloud auf Bare Metal</h3><p class="card-description">Migration von einem Hypervisor zu Cozystack und einer kommerziellen Cloud auf Talos, ohne Hyperscaler.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Multi-Region-Ausfallsicherheit</h3><p class="card-description">Drei geografisch getrennte Rechenzentren, synchrone Replikation über die Rechenzentren und geografisch verteiltes etcd; darauf ausgelegt, den Ausfall eines ganzen Rechenzentrums zu überstehen.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Ein 20-stündiger Vorfall, null Datenverlust</h3><p class="card-description">Ein transparentes Post-Mortem und upstream eingebrachte Fixes — so sieht es aus, eine SLA auf der Produktion des Kunden zu halten.</p></div></div>
  <div class="card"><div class="card-body"><h3 class="card-title">Ein reifes Enterprise-Set</h3><p class="card-description">Verschlüsselung at-rest/in-transit, SSO und Network Policies pro Mandant, Windows-Lizenzierung, Performance-Garantien, Billing nach Instanztypen.</p></div></div>
</div>

---

*Diese Fallstudie wird in anonymisierter Form veröffentlicht (Tier-3-Evidenz): der Provider wird über sein Profil beschrieben, nicht namentlich. Für ein Referenzgespräch unter NDA zu einer aktiven Opportunity [sprechen Sie mit dem Aenix-Vertrieb](/de/kontakt/).*

*Aenix ist das Team hinter [Cozystack](https://cozystack.io) — einem CNCF-Projekt (heute Sandbox; Incubating erwartet für Spätsommer 2026), Apache 2.0. Aenix kommerzialisiert es als Ænix Platform, als drei Plattformen auf einer Engine: Public Cloud, Private Cloud und AI — kombinierbar statt sich gegenseitig ausschließend.*
