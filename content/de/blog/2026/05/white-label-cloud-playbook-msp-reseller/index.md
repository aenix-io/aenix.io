---
title: "White-Label-Cloud-Playbook — für MSPs und Reseller 2026"
seo_title: "White-Label-Cloud: Playbook für MSPs und Reseller"
description: "Wie MSPs und Reseller eine Cloud unter eigener Marke starten: Zuständigkeiten, Branding, Abrechnung über WHMCS oder eigenes System und die Support-Aufteilung."
slug: "white-label-cloud-playbook-msp-reseller"
date: "2026-05-31"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/de/white-label-cloud-playbook-msp-reseller.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Cozystack", "Multi-tenancy", "Hosting", "Observability"]
language: "de"
hreflang_en: "/blog/2026/05/white-label-cloud-msp-reseller-playbook/"
companion_landing: "/de/dienstleistungen/white-label-cloud/"
faq:
  - q: "Ist White-Labeling eine kostenpflichtige Funktion von Ænix?"
    a: "Nein. White-Labeling ist eine Open-Source-Funktion von Cozystack: Logo, Seitentitel, Fußzeile, Favicon und der Name auf den Login-Seiten werden in der Plattformkonfiguration festgelegt. Die Ænix-Subskription ergänzt den Support für diese Konfiguration, enthalten ab der Standard-Stufe (3.000 $ pro 10 Nodes und Monat bei jährlicher Abrechnung)."
  - q: "Kann jeder Sub-Reseller ein eigenes gebrandetes Portal erhalten?"
    a: "Nicht ohne Weiteres. Das Branding von Cozystack wird plattformweit konfiguriert, alle Tenants einer Installation sehen also dasselbe Dashboard-Branding. Sub-Reseller erhalten eigene Tenants, Quotas und Kunden; braucht jeder ein eigenes Erscheinungsbild, klären Sie den Weg dorthin im Readiness Assessment."
  - q: "Muss ich WHMCS verwenden?"
    a: "Nein. Die Ænix-WHMCS-Integration ist eine Option — mit WHMCS als kundenseitigem Frontend oder als Billing-Backend hinter dem Cozystack Dashboard. Die andere ist das Ænix-Billing-System, und Sie können die Nutzungsdaten pro Tenant auch in ein eigenes Abrechnungssystem einspeisen. WHMCS-Integration und Billing-System sind proprietäre Ænix-Module und in jeder Stufe der Public Cloud Platform enthalten."
  - q: "Wer betreut meine Endkunden?"
    a: "Sie selbst. Der MSP verantwortet die Kundenbeziehung und den First-Level-Support unter seiner Marke. Ænix unterstützt die Plattform dahinter gemäß Ihrer Stufe — Reaktionszeiten, abgedeckte Incidents und Remote-Zugriff auf Ihre Cluster mit Ihrer Zustimmung stehen auf der Preisseite."
  - q: "Was passiert mit meiner Cloud, wenn die Ænix-Subskription endet?"
    a: "Die Open-Source-Plattform Cozystack läuft auf Ihrer Hardware weiter, mit Ihren Tenants und Workloads. Die proprietären kommerziellen Module und der Ænix-Support entfallen; die Abrechnung müsste also in ein anderes System umziehen."
quiz:
  title: "Wissens-Check: White-Label-Cloud für MSPs"
  questions:
    - q: "Welcher Teil einer White-Label-Cloud ist laut Artikel proprietäre Ænix-Software?"
      options:
        - { text: "Die Branding-Einstellungen des Cozystack Dashboards", correct: false }
        - { text: "Die WHMCS-Integration und das Ænix-Billing-System", correct: true }
        - { text: "Das verschachtelte Tenant-Modell für Reseller", correct: false }
        - { text: "Der Katalog der Managed Services", correct: false }
      explanation: "White-Labeling, verschachtelte Tenants und der Katalog der Managed Services sind Open-Source-Bestandteile von Cozystack. Die WHMCS-Integration und das Ænix-Billing-System sind proprietäre Ænix-Module, enthalten in jeder Stufe der Public Cloud Platform."
    - q: "Wie ist das Dashboard-Branding in Cozystack laut Artikel abgegrenzt?"
      options:
        - { text: "Plattformweit: Alle Tenants einer Installation sehen dasselbe Branding", correct: true }
        - { text: "Pro Tenant: Jeder Tenant legt eigenes Logo und eigene Farben fest", correct: false }
        - { text: "Pro Namespace: Jedes Projekt innerhalb eines Tenants kann umbranden", correct: false }
      explanation: "Das Branding steht in der Plattformkonfiguration, eine Installation trägt also eine Marke. Für einen MSP, der unter eigenem Namen verkauft, passt das genau; wünscht jeder Sub-Reseller ein eigenes Erscheinungsbild, gehört das ins Assessment."
    - q: "Welche zwei Modi der WHMCS-Integration beschreibt der Artikel?"
      options:
        - { text: "WHMCS als kundenseitiges Frontend oder das Cozystack Dashboard als Frontend mit WHMCS als Billing-Backend", correct: true }
        - { text: "WHMCS nur für VMs oder WHMCS nur für Kubernetes", correct: false }
        - { text: "WHMCS bei Ænix gehostet oder WHMCS beim Endkunden gehostet", correct: false }
      explanation: "Der Abschnitt zur Abrechnung beschreibt beide Modi: Die Kunden bestellen im WHMCS-Shop, den Sie bereits betreiben, oder sie nutzen das gebrandete Dashboard, während WHMCS im Hintergrund die Rechnungen stellt."
    - q: "Ab welcher Support-Stufe ist die White-Label-Konfiguration enthalten?"
      options:
        - { text: "Basic, 1.250 $ pro 10 Nodes und Monat", correct: false }
        - { text: "Standard, 3.000 $ pro 10 Nodes und Monat", correct: true }
        - { text: "Plus, 5.500 $ pro 10 Nodes und Monat", correct: false }
        - { text: "Nur Enterprise, individuell bepreist", correct: false }
      explanation: "Die Funktion selbst ist Open Source, der Ænix-Support für ihre Konfiguration beginnt aber bei Standard (3.000 $ pro 10 Nodes und Monat bei jährlicher Abrechnung), wo auch die Plattforminstallation enthalten ist."
    - q: "Was passiert laut Artikel, wenn die Ænix-Subskription endet?"
      options:
        - { text: "Die Cloud stoppt, und die Tenants müssen binnen 30 Tagen migriert werden", correct: false }
        - { text: "Cozystack läuft weiter; die kommerziellen Module und der Ænix-Support entfallen", correct: true }
        - { text: "Nur das Branding wird zurückgesetzt, alles andere läuft unverändert weiter", correct: false }
      explanation: "Der Abschnitt zu den Zuständigkeiten: Die Open-Source-Plattform läuft mit Ihren Tenants auf Ihrer Hardware weiter. Die Abrechnung über die proprietären Module und der Ænix-Support enden, die Abrechnung muss also umziehen."
---

Ein Managed Service Provider hat den schwierigsten Teil eines Cloud-Geschäfts bereits: Kunden, die ihm vertrauen, Verträge, einen Service Desk und eine Rechnung, die jeden Monat bezahlt wird. Was meist fehlt, ist ein eigenes Cloud-Produkt, das auf dieser Rechnung stehen kann. Der Weiterverkauf eines Hyperscalers schließt die Lücke nur auf dem Papier: Account, Konsole, Quotas und Support-Weg liegen bei jemand anderem, und die Marge ist das, was die Partnerstufe hergibt.

Eine White-Label-Cloud dreht das um. Der Kunde meldet sich in einem Portal mit Ihrem Namen an, bestellt virtuelle Maschinen, Kubernetes-Cluster oder ein Managed PostgreSQL und erhält die Rechnung von Ihnen. Dieses Playbook behandelt die Mechanik eines solchen Geschäfts: wer welchen Teil verantwortet, wie Branding tatsächlich funktioniert, wie die Abrechnung angebunden wird und wie sich der Support zwischen Ihnen und Ænix aufteilt. Warum MSPs überhaupt eine Cloud ins Portfolio nehmen und wie man diesen Wandel in einem Managed-Services-Geschäft staffelt, beschreibt der Begleitartikel zur [Modernisierung der MSP-Cloud-Plattform](/de/blog/2026/05/msp-cloud-plattform-modernisierung/).

## Wer was verantwortet

Die Zuständigkeiten sollten geklärt sein, bevor die erste Architekturentscheidung fällt, denn alles Spätere — Preise, Support, Ausstieg — folgt daraus.

Ihnen gehören die Marke, die Kundenbeziehung, die Verträge, die Preisliste und die Hardware, ob gekauft oder gemietet. Ihre Kunden unterschreiben nichts mit Ænix und müssen nicht wissen, welche Plattform darunter läuft.

Die Plattform selbst ist [Cozystack](/de/produkte/cozystack/), ein Open-Source-Projekt unter Apache 2.0 in der CNCF Sandbox, das Ænix ins Leben gerufen hat und gemeinsam mit Maintainern anderer Unternehmen pflegt. Gebühren pro CPU oder Core gibt es nicht, Ihre Marge schrumpft also nicht, wenn die Workloads Ihrer Kunden wachsen. Ænix verkauft darauf eine Subskription — die [Ænix Public Cloud Platform](/de/produkte/public-cloud-platform/) —, die eine Support-Stufe mit proprietären kommerziellen Modulen kombiniert: dem Billing-System und der WHMCS-Integration.

Diese Aufteilung bestimmt auch Ihren Ausstieg. Endet die Subskription, läuft die Open-Source-Plattform mit Ihren Tenants und Workloads auf Ihrer Hardware weiter; die kommerziellen Module und der Ænix-Support entfallen. Die Abrechnung müssten Sie verlagern, migrieren müssten Sie aber keine einzige Kunden-VM.

## Die Tenant-Hierarchie ist das Reseller-Modell

Ein Reseller-Geschäft braucht mindestens drei Ebenen: den Betreiber der Plattform, den Reseller und dessen Kunden. In Cozystack ist das kein Abrechnungstrick obendrauf, sondern die Art, wie Tenants funktionieren. Ein Tenant kann weitere Tenants enthalten, die Hierarchie reicht also vom Provider-Tenant an der Spitze über einen MSP- oder Reseller-Tenant bis zu einem Tenant pro Endkunde. Ein Kunde kann seinen Tenant weiter unterteilen, etwa in Produktion und Test.

Jeder Tenant hat eigene Quotas, Netzwerkisolation, Zugriffsrechte und einen eigenen Monitoring-Bereich. Das liefert drei Dinge, die ein Reseller braucht. Sie können den Verbrauch eines Kunden begrenzen, ohne jemand anderen zu berühren. Sie können einem Kunden Administratorrechte für seinen eigenen Tenant geben, ohne einen Nachbarn offenzulegen. Und Sie sehen pro Tenant, was läuft und wie es sich verhält — darauf baut das SLA-Tracking pro Kunde auf.

Verkaufen Sie über eigene Partner, ergibt dieselbe Verschachtelung Sub-Reseller: Ein Partner erhält einen Tenant, legt darin Tenants für seine Kunden an und bleibt innerhalb der Grenzen, die Sie setzen. Die [anonymisierte Fallstudie zur souveränen Public Cloud](/de/case-studies/sovereign-public-cloud/) zeigt dieses Betreibermodell in Produktion: Ein Administrator legt Tenants und Sub-Tenants mit Rollentrennung an, so wie es die großen Clouds tun.

## Branding: was sich ändert und was nicht

White-Labeling ist eine Open-Source-Funktion von Cozystack, nichts, was erst eine bezahlte Stufe freischaltet. Die [Cozystack-Dokumentation zum White-Labeling](https://cozystack.io/docs/v1.4/operations/configuration/white-labeling/) führt auf, was sich anpassen lässt: Logo, Browser- und Seitentitel, Fußzeilentext, Favicon und die Tenant-Bezeichnung im Dashboard, dazu der Name auf den Login- und Kontoseiten. Das Dashboard läuft unter Ihrer eigenen Domain, der Kunde sieht also ab der Anmeldeseite Ihre Cloud.

Zwei Grenzen sollten Sie kennen, bevor Sie im Vertriebsdeck etwas versprechen. Farben sind kein eigenes Branding-Feld; ein SVG-Logo kann sich an helles und dunkles Theme anpassen, eine Farbpalette zum Umschalten gibt es aber nicht. Und das Branding wird plattformweit konfiguriert, alle Tenants einer Installation sehen also dieselbe Marke. Für einen MSP, der unter eigenem Namen verkauft, ist genau das gewollt. Wenn Sie jedem Sub-Reseller ein eigenes Portal geben wollen, sprechen Sie das früh an und klären Sie den Weg im Assessment, statt es nach dem Launch festzustellen.

Der Ænix-Support für die Konfiguration des White-Labelings ist ab der Standard-Stufe enthalten. Bei Basic funktioniert die Funktion genauso; die Konfiguration übernehmen Sie selbst.

## Den Katalog kuratieren

Der Katalog von Cozystack ist breit: virtuelle Maschinen (Linux und Windows, mit eigenen Images), Tenant-Kubernetes-Cluster, Managed PostgreSQL, MariaDB, Valkey, ClickHouse, Kafka, RabbitMQ und NATS, S3-kompatibler Object Storage und GPU-Workloads. Sie müssen nicht alles davon verkaufen, und Sie sollten es auch nicht.

Bieten Sie nur an, wofür Ihr Team um drei Uhr nachts geradestehen kann. Hat bei Ihnen noch niemand Kafka in Produktion betrieben, blenden Sie es aus, bis das jemand getan hat; ein Service, den Sie nicht unterstützen können, wird zu einem Ticket, das Sie nicht schließen können. Die meisten MSPs starten mit VMs, Kubernetes und ein oder zwei Datenbanken, die sie bereits kennen, und erweitern den Katalog, während ihr Team den Rest lernt. GPU ist auf derselben Plattform eine Konfigurationsentscheidung, sobald Nachfrage entsteht, keine zweite Beschaffung.

## Abrechnung: WHMCS, Ænix-Billing oder ein eigenes System

An der Abrechnung bleiben White-Label-Projekte am häufigsten hängen, weil sie Finanzen, Verträge und das Kundenportal gleichzeitig berührt. Es gibt drei tragfähige Wege, und welcher passt, hängt davon ab, was Sie bereits betreiben.

**Die Ænix-WHMCS-Integration.** Bestellen und bezahlen Ihre Kunden bereits über WHMCS, ergänzt die [WHMCS-Integration](/de/produkte/whmcs-integration/) Cloud-Services im vorhandenen Panel. Sie arbeitet in zwei Modi: WHMCS bleibt der kundenseitige Shop und Cozystack provisioniert dahinter, oder das gebrandete Cozystack Dashboard wird zum Frontend und WHMCS dient als Billing-Backend. In beiden Fällen misst die Plattform die Nutzung und WHMCS stellt die Rechnung, ein zweites Abrechnungssystem zum Abgleichen gibt es nicht.

**Das Ænix-Billing-System.** Haben Sie keine Abrechnungsplattform, die sich zu behalten lohnt, bringt die Public Cloud Platform ein vollständiges Billing-Backend und -Frontend mit: Nutzungsmessung, Rechnungsstellung, Zahlungsabwicklung über Stripe und regionale Anbieter, Prepaid-Guthaben und Postpaid-Rechnungen, Abrechnung für Channel-Partner und Verwaltung von Reseller-Margen. Die Nutzung wird pro Tenant, pro Workload und pro Ressource ausgewiesen, und ein Report kann alle verschachtelten Sub-Tenants einschließen — genau das, was eine Reseller-Rechnung braucht. Die [Ankündigung von Ænix Billing](/de/blog/2026/05/aenix-billing-pay-per-minute-managed-services-cozystack/) erläutert die Nutzungs-API im Detail.

Beide Module sind proprietäre Ænix-Software und in jeder Stufe der Public Cloud Platform enthalten; separat berechnet werden sie nicht.

**Ein eigenes Abrechnungssystem.** Manche Provider betreiben bereits eine eigene Rechnungsstellung und behalten sie. Der Schweizer Provider aus der oben genannten Fallstudie hat genau das getan: ein selbst entwickeltes System, das dedizierte vCPU und RAM verkauft und stündliche Messwerte in eine externe Datenbank schreibt. Dieser Weg funktioniert; Sie tauschen die fertigen Module gegen volle Kontrolle und übernehmen die Integrationsarbeit selbst.

Welchen Weg Sie auch wählen, der Lebenszyklus der Tenants bleibt auf der Plattform: Überfällige Konten lassen sich sperren und Ressourcen blockieren, ohne ein Ticket an die Technik.

## Die Support-Aufteilung

Ihre Kunden rufen bei Ihnen an. Das ist der Sinn einer White-Label-Cloud und bedeutet, dass Sie den First-Level-Support verantworten: Fragen zum Konto, „meine VM ist langsam“, Onboarding und die Triage, die entscheidet, ob ein Problem im Workload des Kunden oder in der Plattform liegt.

Ænix steht hinter Ihnen auf der Plattformebene. Wie das konkret aussieht, hängt von der gebuchten Stufe ab; die [Preisseite](/de/preise/#support) ist die einzige Quelle für die Details: abgedeckte Incidents, Service-Desk-Zeiten, Reaktionszeiten und der Stundensatz für Arbeiten außerhalb des Umfangs. Ab Standard umfasst die Subskription die Plattforminstallation, begleitete Upgrades und Remote-Zugriff auf Ihre Cluster mit Ihrer Zustimmung. Brauchen Sie eine Abdeckung rund um die Uhr, ohne selbst eine vollständige Rufbereitschaft aufzubauen, ergänzt Plus 24×7-Support. Wer den eigenen Betriebsaufwand noch weiter senken will, kann ein hybrides Modell wählen, in dem Ænix die Control Plane unter SLA betreibt und Sie die Data Plane verantworten.

Halten Sie diese Aufteilung in Ihren eigenen Kundenverträgen fest. Ihr SLA gegenüber den Kunden sollte eines sein, das Sie mit den eingekauften Reaktionszeiten plus der Zeit für die Triage durch Ihr eigenes Team auch halten können.

## Die Wirtschaftlichkeit in Kürze

Ihre Kosten sind die Subskription (veröffentlicht pro 10 Nodes und Monat), Hardware oder gemietetes Bare Metal, Colocation, Bandbreite und die Menschen, die den Service betreiben und mit Kunden sprechen. Ihr Umsatz ist, was Sie pro Service berechnen, und die Marge liegt in Managed Services statt in reiner vCPU, wo Sie mit den Listenpreisen der Hyperscaler konkurrieren würden.

Statt eines Faustwerts für den Aufschlag, der nicht zu Ihrer Kostenbasis passen würde, rechnen Sie mit Ihren eigenen Zahlen im [Rechner für die Unit Economics von Hosting-Anbietern](/de/hosting-anbieter-rechner/). Der [Artikel zur Wirtschaftlichkeit der Public Cloud Platform](/de/blog/2026/05/public-cloud-platform-wirtschaftlichkeit-hosting-anbieter/) geht Kosten pro Tenant, Break-even und typische Fehlerbilder im Detail durch.

## Wann das nicht passt

Wollen Sie Cloud verkaufen, ohne irgendetwas davon zu betreiben, ist eine White-Label-Plattform das falsche Werkzeug; Hardware, Betrieb und First-Level-Support lägen so oder so bei Ihnen. Dann passt das [Ænix-Partnerprogramm](/de/partner/) besser: Sie verkaufen Ænix-Subskriptionen und Support mit bis zu 40 % Marge weiter, und Ænix liefert die Plattform.

Ist der Weiterverkauf von VPS Ihr gesamtes Geschäft und genügt Ihnen die Marge, ist ein VPS-Control-Panel günstiger und einfacher. Dieses Modell zahlt sich aus, wenn Sie Managed-Datenbanken, Kubernetes und GPU verkaufen wollen, ohne jedes davon selbst zu bauen.

Und braucht jeder Sub-Reseller ab dem ersten Tag ein optisch eigenes Portal, prüfen Sie diese Anforderung gegen das plattformweite Branding, bevor Sie Termine zusagen.

## Wie ein Engagement abläuft

Am Anfang steht ein kostenloses 30-minütiges Discovery-Gespräch, um die Eignung zu prüfen. Danach folgt das [Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/) zum Festpreis, 14 Tage fokussiert oder 28 Tage vollständig, das Produkt, Reseller-Modell und Architektur abdeckt. Sobald Ihre Hardware bereitsteht, ist die Plattform über den produktisierten Installer in wenigen Wochen live; Branding, Kuratierung des Katalogs, Anbindung der Abrechnung und die Betriebsabläufe werden parallel eingerichtet. Optionale Managed Services können Sie durch die Hochlaufphase tragen.

Was Ihre Kunden sehen würden, zeigt die [Live-Demo](/demo/): Sie führt das Kundenportal und das Back-Office des Betreibers mit Demodaten im Browser aus. Die [Serviceseite zur White-Label-Cloud](/de/dienstleistungen/white-label-cloud/) fasst das Engagement zusammen, und die [Branchenseite für MSPs](/de/branchen/msp/) erklärt, warum das Tenant-Modell das ganze Argument trägt.
