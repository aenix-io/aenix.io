---
title: "Webinar: Der Cluster, der den Ausfall eines Rechenzentrums übersteht"
description: "Live-Webinar mit Andrei Kvapil: ein verteilter Kubernetes-Cluster auf eigener Hardware, der den Ausfall eines Rechenzentrums übersteht – Metro-Stretch und DR."
language: "de"
hreflang_en: "/webinars/distributed-cluster/"
layout: "event-landing"
bodyClass: "webinar-landing"
primary_keyword: "verteilter kubernetes cluster"
secondary_keywords: ["metro stretch cluster", "kubernetes disaster recovery", "zwei rechenzentren witness quorum", "cozystack webinar verteilter cluster", "georedundante private cloud"]
images: ["img/og/og-webinar-en.png"]
hide_child_cards: true
hero_eyebrow: "Kostenloses Live-Webinar · Online · Mittwoch, 30. September 2026 · 16:00 Uhr MESZ (14:00 UTC)"
hero_title: "Der Cluster, der den Ausfall eines Rechenzentrums übersteht"
hero_tagline: "Eine Stunde mit Andrei Kvapil, dem Schöpfer von Cozystack: echte Georesilienz auf eigener Hardware – Metro-Stretch, zwei Rechenzentren plus Witness und DR über ein entferntes Rechenzentrum –, von Hardware und Netzwerk bis zu Storage, GPU und Datenbanken, die selbstständig umschalten. Gezeigt an einem echten Produktiv-Cluster über drei Rechenzentren."
hero_chips:
  - "Kostenlos nach Anmeldung"
  - "60 Minuten, Live-Fragerunde"
  - "Aufzeichnung für alle Angemeldeten"
  - "Bringen Sie Ihren Stack mit – Fragen werden live beantwortet"
hero_primary: { text: "Platz sichern", href: "#register" }
hero_secondary: { text: "Zur Agenda", href: "#agenda" }
speaker_photo: "images/webinars/andrei-kvapil.png"
inshort_title: "Über das Webinar"
quick_facts_style: "rows"
event:
  name: "Der Cluster, der den Ausfall eines Rechenzentrums übersteht – ein Live-Webinar"
  language: "en"
  mode: "online"
  performer: "Andrei Kvapil"
  performer_role: "Schöpfer und Maintainer von Cozystack, Gründer von Aenix"
  price: 0
direct_answer: |
  **Dies ist ein kostenloses Live-Webinar für Infrastruktur-Teams in Unternehmen sowie für Clouds, Hoster und Rechenzentrumsbetreiber, die eine nachweisbare Georesilienz brauchen. Andrei Kvapil – Schöpfer von Cozystack, einer Open-Source-Cloud-Plattform und einem CNCF-Sandbox-Projekt – baut live einen verteilten Kubernetes-Cluster: die drei Topologien für drei Latenzstufen (Metro-Stretch mit RPO=0, zwei Rechenzentren plus Witness und DR über ein entferntes Rechenzentrum), die Quorum-Mathematik, um den Verlust eines Standorts zu überstehen, synchronen Storage über Rechenzentren hinweg, Live-Migration von VMs und Datenbanken, GPU über Standorte hinweg sowie die echten DR-Übungen, bei denen ein komplettes Rechenzentrum absichtlich abgeschaltet wurde. Gezeigt an einem echten Produktiv-Cluster, der sich über drei Rechenzentren erstreckt. Die Teilnahme ist nach Anmeldung kostenlos, und alle Angemeldeten erhalten die Aufzeichnung.**

quick_facts:
  - label: "Format"
    value: "Live-Online-Webinar, rund 60 Minuten: ein praxisnaher Durchgang mit Live-Demos, anschließend eine Live-Fragerunde mit dem Referenten"
  - label: "Termin"
    value: "Mittwoch, 30. September 2026 · 16:00 Uhr MESZ (14:00 UTC) – online. Nach der Anmeldung erhalten Sie die Kalendereinladung und die Aufzeichnung."
  - label: "Preis"
    value: "Kostenlos nach Anmeldung; alle Angemeldeten erhalten die Aufzeichnung"
  - label: "Sprache"
    value: "Englisch"
  - label: "Zielgruppe"
    value: "Architekten, SREs, CTOs und Infrastrukturverantwortliche, die DR verantworten – und Anbieter, die georedundante Services verkaufen"
  - label: "Referent"
    value: "Andrei Kvapil – Schöpfer und Maintainer von Cozystack (CNCF-Sandbox-Projekt), Gründer von Aenix"
  - label: "Nach dem Webinar"
    value: "Die Aufzeichnung, dazu eine Landkarte der drei Topologien und eine Readiness-Checkliste, an der Sie Ihre eigenen Rechenzentren messen können"

faq:
  - q: "Ist das ein echtes Produktivsystem oder eine Labor-Demo?"
    a: "Echte Produktion. Im Mittelpunkt steht ein Cozystack-Cluster, der sich über drei Rechenzentren erstreckt, dazu die realen DR-Übungen, die wir mit dem Anbieter durchgeführt haben – einschließlich dessen, was kaputtging und was wir behoben haben."
  - q: "Brauche ich drei Rechenzentren, damit sich das lohnt?"
    a: "Nein. Wir behandeln Teams mit einem Standort, die ihren ersten zweiten Standort planen, Setups mit zwei Rechenzentren plus Witness und den vollständigen Stretch über drei Standorte – so können Sie sich auf der Landkarte einordnen, wo auch immer Sie beginnen."
  - q: "Worin unterscheidet sich das von VMware vSAN Stretched Cluster + SRM?"
    a: "Dieselbe Metro-Stretch-Resilienz, ohne Lizenzierung pro Sockel oder Vendor-Lock-in, auf einem Open-Source-Kern, den Sie auf eigener Hardware betreiben können. Wir vergleichen die Ansätze ehrlich."
  - q: "Kann man wirklich ein Rechenzentrum ohne jeden Datenverlust verlieren?"
    a: "In einer synchronen Metro-Stretch-Topologie – Rechenzentren in Metro-Entfernung, also mit etwa ein paar Millisekunden Round-Trip – ja, RPO=0. Wir zeigen das live und sagen klar, ab welchen Entfernungen synchrone Replikation nicht mehr funktioniert und was Sie stattdessen einsetzen."
  - q: "Wie sieht es mit GPU und Datenbanken über Standorte hinweg aus?"
    a: "Wir behandeln beides: GPU-Sharing innerhalb eines Standorts und Cloud-Burst zu anderen Standorten oder in eine Public Cloud, außerdem Managed-Datenbanken, die Replikate pro Zone platzieren und beim Verlust eines Standorts automatisch umschalten."
  - q: "Welcher Storage – DRBD oder Ceph?"
    a: "Beides. Wir vergleichen synchrones DRBD und Ceph über Rechenzentren hinweg – Replikationsmodell, Quorum, dedizierte Storage-Netze und das Tuning, das verhindert, dass Latenz falsche Failover auslöst."
  - q: "Gibt es eine Aufzeichnung?"
    a: "Ja, für alle, die sich anmelden. Ausnahme ist die Fragerunde – diesen Teil gibt es nur live."

final_cta:
  heading: "Bringen Sie Ihre Rechenzentren mit in die Fragerunde"
  text: "Mittwoch, 30. September 2026 · 16:00 Uhr MESZ (14:00 UTC) · online. Die Teilnahme ist kostenlos – nach Anmeldung; alle Angemeldeten erhalten die Kalendereinladung und die Aufzeichnung."
  button: "Platz sichern"
  href: "#register"
---

<section class="ws-section ws-story wb-story" aria-labelledby="wb-story-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-story-h">Ein Rechenzentrum ist ein Risiko. Was passiert, wenn dort das Licht ausgeht?</h2>
<p class="ws-lead">Kunden und Regulierer verlangen zunehmend Georesilienz, und „wir haben Backups“ ist keine Antwort, wenn ein ganzer Standort ausfällt. Ein verteilter Cluster ist aber kein Häkchen auf einer Liste – es sind drei verschiedene Architekturen für drei Latenzstufen, und der Unterschied zwischen ihnen ist der Unterschied zwischen RPO=0 und einem Split-Brain-Ausfall. Diese Session ist ehrliches Engineering: wo die Nahtstellen liegen und wie man sie zusammenhält.</p>
</div>

<div class="ws-wrap ws-story__row">
<div class="ws-story__text">
<h3 class="wb-story__h3">Wo es meistens anfängt</h3>
<p>Alles läuft in einem einzigen Rechenzentrum, und ein Ausfall von Strom, Netzwerk oder Kühlung reißt das ganze Geschäft mit – während der DR-Plan ein Runbook ist, das nie jemand geprobt hat. Oder es gibt einen zweiten Standort, aber Resilienz bedeutet dort VMware vSAN Stretched Cluster und SRM-Lizenzen oder einen OpenStack-Aufbau, der ein komplettes Team braucht, nur um am Leben zu bleiben.</p>
<p>Keiner dieser Fälle erfordert einen Neuaufbau. Gefragt ist <strong>Georesilienz auf eigener Hardware – ohne Lizenzierung pro Sockel und ohne eine Plattform, die Sie nicht betreiben können.</strong></p>
</div>
<div class="ws-story__visual">
<ul class="wb-starts" aria-hidden="true">
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="datacenter" >}}</span>
<span class="wb-start__label">Ein Standort, ein Risiko</span>
<span class="wb-start__sub">Ein einziger Ausfall reißt das Geschäft mit</span>
</li>
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="billing" >}}</span>
<span class="wb-start__label">DR, das teuer ist und bindet</span>
<span class="wb-start__sub">Lizenzierung pro Sockel oder ein Stack, den Sie nicht betreiben können</span>
</li>
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="shield" >}}</span>
<span class="wb-start__label">Übersteht den Verlust eines Rechenzentrums</span>
<span class="wb-start__sub">Auf eigener Hardware, RPO=0</span>
</li>
</ul>
</div>
</div>

<div class="ws-wrap ws-story__row ws-story__row--reverse">
<div class="ws-story__text">
<h3 class="wb-story__h3">Was das Ganze zusammenhält</h3>
<p>Cozystack ist eine Open-Source-Cloud-Plattform und ein CNCF-Sandbox-Projekt, das eine einzige Kubernetes-API über mehrere Standorte hinweg betreibt – virtuelle Maschinen, Managed-Datenbanken, Storage und Netzwerk als deklarative Ressourcen, von drei Nodes bis zu drei Rechenzentren. Nodes treten über die API bei, Storage und Topologie sind Ressourcen, und DR wird als Code beschrieben.</p>
<p>Darauf setzt der Unterschied auf, auf den es ankommt: <strong>Defaults und Runbooks, geschmiedet in echten Disaster-Recovery-Übungen mit einem Anbieter im Produktivbetrieb</strong> – synchroner Storage, Quorum-Tuning, topologiebewusste Platzierung –, sodass Sie mit dem starten, was einen echten Ausfall bereits überstanden hat.</p>
</div>
<div class="ws-story__visual ws-story__visual--platform">
<div class="ws-platform wb-platform">
<div class="ws-platform__head">{{< cozy-mark >}}</div>
<span class="wb-platform__cap">Eine API über alle Standorte</span>
<ul class="ws-platform__layers">
<li><span class="ws-platform__ic">{{< ws-icon name="datacenter" >}}</span>Metro-Stretch · zwei RZ + Witness · entferntes RZ</li>
<li><span class="ws-platform__ic">{{< ws-icon name="layers" >}}</span>Synchroner Storage · DRBD oder Ceph</li>
<li><span class="ws-platform__ic">{{< ws-icon name="vm" >}}</span>Live-Migration · VMs, Datenbanken, Workloads</li>
<li><span class="ws-platform__ic">{{< ws-icon name="cloud" >}}</span>GPU über Standorte hinweg &amp; Cloud-Burst</li>
</ul>
<div class="wb-platform__plus"><span>+ Härtung aus der Produktion</span></div>
<ul class="wb-platform__modules">
<li><span class="wb-mod__ic">{{< ws-icon name="shield" >}}</span>Defaults für Quorum &amp; Witness</li>
<li><span class="wb-mod__ic">{{< ws-icon name="map" >}}</span>Topologiebewusste Platzierung</li>
<li><span class="wb-mod__ic">{{< ws-icon name="plan" >}}</span>Runbooks aus echten DR-Übungen</li>
</ul>
</div>
</div>
</div>

<div class="ws-wrap">
<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">RPO 0</div><div class="cs-stat__label">ein ganzes Rechenzentrum verlieren, aber keine Daten – mit synchronem Metro-Stretch</div></div>
  <div class="cs-stat"><div class="cs-stat__num">3 Rechenzentren</div><div class="cs-stat__label">eine Kubernetes-API, ein Quorum, das den Verlust jedes einzelnen Standorts übersteht</div></div>
  <div class="cs-stat"><div class="cs-stat__num">€0</div><div class="cs-stat__label">Lizenzkosten pro Sockel – Apache 2.0, CNCF-Sandbox-Projekt</div></div>
</div>
</div>
</section>

<section class="ws-section wb-proof" aria-labelledby="wb-proof-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-proof-h">Verteilt, in Produktion – nicht auf Folien</h2>
<p class="ws-lead">Echte Plattformen mit echten Kunden, gebaut auf demselben Fundament, das die Session Schritt für Schritt zeigt.</p>

<div class="wb-cover__grid">
<article class="wb-cover__item">
<span class="wb-cover__num">01</span>
<span class="wb-cover__icon">{{< ws-icon name="shield" >}}</span>
<div class="cs-stat__num" style="font-size:1.9rem;margin:.2rem 0 .1rem">3 Rechenzentren</div>
<div class="cs-stat__label" style="margin-bottom:1rem">Schweiz · synchrone Replikation · mehr als ein Dutzend Tenants in Produktion</div>
<p class="wb-cover__text"><strong>Ein Schweizer Cloud-Anbieter</strong> betreibt einen Cozystack-Cluster, der sich über drei Rechenzentren erstreckt, mit topologiebewusster Platzierung und synchronem Storage. Gemeinsam haben wir echte DR-Übungen durchgeführt – inklusive der absichtlichen Abschaltung eines kompletten Rechenzentrums – und aus dem, was dabei kaputtging, Plattform-Defaults gemacht.</p>
</article>
<article class="wb-cover__item">
<span class="wb-cover__num">02</span>
<span class="wb-cover__icon">{{< ws-icon name="cloud" >}}</span>
<div class="cs-stat__num" style="font-size:1.9rem;margin:.2rem 0 .1rem">Eine API, drei Clouds</div>
<div class="cs-stat__label" style="margin-bottom:1rem">~11.000 aktive Nutzer · Bare Metal, Hyperscaler und souveräne Cloud</div>
<p class="wb-cover__text"><strong>Eine europäische Plattform für akademisches Rechnen</strong> betreibt eine einzige Cluster API über eigenes Bare Metal, einen Public Hyperscaler und eine souveräne Schweizer Cloud – Workloads, auch GPU-Workloads, werden bei Bedarf auf andere Standorte ausgelagert und nach der Lastspitze wieder zurückgeholt.</p>
</article>
</div>

<p class="wb-cover__note"><span class="wb-cover__note-ic">{{< ws-icon name="chat" >}}</span><span>Beide sind auf Wunsch der Kunden anonymisiert. Andrei zeigt, was beide tatsächlich umgesetzt haben – und was er auf Ihrem Stack anders machen würde.</span></p>
</div>
</section>

<section class="ws-section wb-cover" id="agenda" aria-labelledby="wb-cover-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-cover-h">Was wir behandeln</h2>
<p class="ws-lead">Live-Demos statt Folien – danach Ihre Fragen.</p>
<ol class="wb-cover__grid">
<li class="wb-cover__item">
<span class="wb-cover__num">01</span>
<span class="wb-cover__icon">{{< ws-icon name="datacenter" >}}</span>
<p class="wb-cover__text"><strong>Drei Topologien und wann welche passt.</strong> Metro-Stretch (RPO=0), zwei Rechenzentren plus Witness und DR über ein entferntes Rechenzentrum – einschließlich der Fälle, in denen Stretching ein Anti-Pattern ist.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">02</span>
<span class="wb-cover__icon">{{< ws-icon name="shield" >}}</span>
<p class="wb-cover__text"><strong>Quorum-Mathematik, auf die Sie sich verlassen können.</strong> Wie viele Nodes den Verlust eines Rechenzentrums überstehen, warum zwei Standorte einen Witness brauchen und wie sich etcd verhält, wenn das Netzwerk getrennt wird.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">03</span>
<span class="wb-cover__icon">{{< ws-icon name="layers" >}}</span>
<p class="wb-cover__text"><strong>Storage über Standorte hinweg.</strong> Synchrones DRBD vs. Ceph, dedizierte Storage-Netze und das Tuning, das verhindert, dass Latenz falsche Failover auslöst.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">04</span>
<span class="wb-cover__icon">{{< ws-icon name="vm" >}}</span>
<p class="wb-cover__text"><strong>Laufende Workloads verschieben.</strong> Live-Migration von VMs, Datenbank-Switchover, Pod-Rescheduling und Rebalancing von Queues – und die ehrlichen Grenzen bei GPU-Workloads (eine VM mit Passthrough-GPU lässt sich nicht live migrieren).</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">05</span>
<span class="wb-cover__icon">{{< ws-icon name="cloud" >}}</span>
<p class="wb-cover__text"><strong>GPU und Cloud-Burst.</strong> GPUs innerhalb eines Standorts bündeln und bei Bedarf auf andere Standorte oder in eine Public Cloud ausweichen – GPU-Nodes direkt in Ihren Cluster bestellen.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">06</span>
<span class="wb-cover__icon">{{< ws-icon name="plan" >}}</span>
<p class="wb-cover__text"><strong>DR-Übungen mit einem echten Anbieter.</strong> Wie wir absichtlich ein Rechenzentrum abgeschaltet haben, was kaputtging, was wir nachjustiert haben und wie daraus ein Produkt-Default wurde.</p>
</li>
</ol>
<p class="wb-cover__note"><span class="wb-cover__note-ic">{{< ws-icon name="chat" >}}</span><span>Zum Abschluss gibt es eine <strong>Live-Fragerunde</strong>. Fragen, die Sie schon bei der Anmeldung einreichen, kommen zuerst dran – und diesen Teil gibt es nur live.</span></p>
</div>
</section>

<section class="ws-section ws-outcomes wb-outcomes" aria-labelledby="wb-outcomes-h">
<div class="ws-outcomes__bg" aria-hidden="true"></div>
<div class="ws-wrap">
<h2 class="ws-h2 ws-h2--light" id="wb-outcomes-h">Was Sie mitnehmen</h2>
<div class="ws-outcomes__grid">
<article class="ws-outcome ws-outcome--hero">
<span class="ws-outcome__num">01</span>
<span class="ws-outcome__icon">{{< ws-icon name="map" >}}</span>
<p class="ws-outcome__text"><strong>Eine Landkarte der drei Topologien</strong> – und wann welche passt, einschließlich der Fälle, in denen Stretching tabu ist.</p>
</article>
<article class="ws-outcome">
<span class="ws-outcome__num">02</span>
<span class="ws-outcome__icon">{{< ws-icon name="shield" >}}</span>
<p class="ws-outcome__text"><strong>Die Quorum-Mathematik</strong>, um den Verlust von einem oder zwei Rechenzentren zu überstehen, einschließlich des Musters zwei RZ + Witness.</p>
</article>
<article class="ws-outcome">
<span class="ws-outcome__num">03</span>
<span class="ws-outcome__icon">{{< ws-icon name="layers" >}}</span>
<p class="ws-outcome__text"><strong>Einen klaren Blick auf Storage und Live-Migration</strong> unter realer Netzwerklatenz – und die Stellschrauben, mit denen Sie beides justieren.</p>
</article>
<article class="ws-outcome ws-outcome--hero">
<span class="ws-outcome__num">04</span>
<span class="ws-outcome__icon">{{< ws-icon name="plan" >}}</span>
<p class="ws-outcome__text"><strong>Eine Readiness-Checkliste</strong>, an der Sie Ihre eigenen Rechenzentren messen können, bevor Sie bauen.</p>
</article>
</div>
<div class="ws-cta-center"><a class="cta-primary cta-accent" href="#register">Platz sichern</a></div>
</div>
</section>

<section class="ws-section wb-audience" aria-labelledby="wb-audience-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-audience-h">Für wen das Webinar gedacht ist</h2>
<p class="ws-lead">Infrastruktur-Teams in Unternehmen, die nachweisbare Georesilienz brauchen, sowie Clouds, Hoster und Rechenzentrumsbetreiber, die georedundante Services verkaufen wollen. Wenn Sie VMware vSAN Stretched Cluster und SRM, einen OpenStack-Aufbau oder Multi-AZ bei einem Hyperscaler vergleichen, ist die Session genau auf Ihre Situation zugeschnitten.</p>
<ul class="wb-audience__tiles">
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="server" >}}</span>Infrastruktur-Teams in Unternehmen</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="cloud" >}}</span>Cloud-Anbieter</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="datacenter" >}}</span>Rechenzentrumsbetreiber</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="server" >}}</span>Hosting-Anbieter</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="msp" >}}</span>MSPs</li>
</ul>
<p class="wb-audience__roles-label">Vor allem die Menschen, die Resilienz und DR verantworten:</p>
<ul class="wb-audience__roles">
<li>Architekten</li>
<li>SREs</li>
<li>CTOs</li>
<li>Infrastrukturverantwortliche</li>
</ul>
</div>
</section>

<section class="ws-section ws-speaker wb-speaker" aria-labelledby="wb-speaker-h">
<div class="ws-wrap ws-speaker__grid">
<div class="ws-speaker__photo">{{< workshop-photo src="images/webinars/andrei-kvapil.png" alt="Andrei Kvapil" >}}</div>
<div class="ws-speaker__info">
<h2 class="ws-h2" id="wb-speaker-h">Ihr Referent</h2>
<div class="ws-speaker__name">Andrei Kvapil</div>
<div class="ws-speaker__role">Schöpfer von Cozystack · Gründer von Aenix</div>
<p class="ws-speaker__bio">Andrei hat Cozystack, die Open-Source-Cloud-Plattform und das CNCF-Sandbox-Projekt, nach mehr als fünfzehn Jahren Erfahrung im Aufbau von Clouds und Hochlast-Infrastruktur ins Leben gerufen. Er trägt zu Kubernetes, KubeVirt, Cilium und LINSTOR bei und spricht auf der KubeCon und anderen Branchenveranstaltungen. Bei Aenix hilft er Anbietern in ganz Europa, georesiliente Infrastruktur auf eigener Hardware aufzubauen.</p>
<div class="wb-speaker__links">
<a class="wb-speaker__link" href="https://github.com/kvaps" target="_blank" rel="noopener">
<svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>
GitHub</a>
<a class="wb-speaker__link" href="https://www.linkedin.com/in/kvaps/" target="_blank" rel="noopener">
<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
LinkedIn</a>
</div>
</div>
</div>
</section>

<section class="ws-section ws-register" id="register" aria-labelledby="wb-register-h">
<div class="ws-register__bg" aria-hidden="true"></div>
<div class="ws-wrap ws-register__inner">
<h2 class="ws-h2 ws-h2--light" id="wb-register-h">Anmeldung</h2>
<p class="ws-register__lead">Mittwoch, 30. September 2026 · 16:00 Uhr MESZ (14:00 UTC) · online. Die Teilnahme ist kostenlos – nach Anmeldung: Sie erhalten die Kalendereinladung und die Aufzeichnung.</p>
<div class="ws-register__form">

{{< clickmeeting room="18263597110070205" >}}

</div>
</div>
</section>
