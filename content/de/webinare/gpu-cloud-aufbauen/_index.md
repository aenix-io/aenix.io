---
title: "Webinar: Bauen Sie die GPU-Cloud, die Sie bisher mieten"
description: "Kostenloses Live-Webinar mit Andrei Kvapil: eigene GPUs zur mandantenfähigen KI-Cloud machen – Sharing, Inferenz und Abrechnung pro Token, aus Open Source."
language: "de"
hreflang_en: "/webinars/build-your-gpu-cloud/"
layout: "event-landing"
bodyClass: "webinar-landing"
primary_keyword: "gpu cloud aufbauen"
secondary_keywords: ["gpu sharing kubernetes", "mandantenfähige gpu plattform", "inference as a service", "cozystack gpu webinar", "gpu as a service open source"]
images: ["img/og/og-webinar-en.png"]
hide_child_cards: true
hero_eyebrow: "Kostenloses Live-Webinar · Online · Donnerstag, 10. September 2026 · 16:00 Uhr MESZ (14:00 UTC)"
hero_title: "Bauen Sie die GPU-Cloud, die Sie bisher mieten"
hero_tagline: "Eine Stunde mit Andrei Kvapil, dem Schöpfer von Cozystack: Machen Sie aus den GPUs, die Sie bereits besitzen, eine mandantenfähige Plattform, die Ihre Teams nutzen – oder Ihre Kunden kaufen – können, vom Bare Metal bis zum abgerechneten Inferenz-Endpunkt, komplett aus Open Source zusammengesetzt."
hero_chips:
  - "Kostenlos nach Anmeldung"
  - "50 Minuten, Live-Fragerunde"
  - "Aufzeichnung für alle Angemeldeten"
  - "Bringen Sie Ihren Stack mit – Fragen werden live beantwortet"
hero_primary: { text: "Platz sichern", href: "#register" }
hero_secondary: { text: "Zur Agenda", href: "#agenda" }
speaker_photo: "images/webinars/andrei-kvapil.png"
inshort_title: "Über das Webinar"
quick_facts_style: "rows"
event:
  name: "Bauen Sie die GPU-Cloud, die Sie bisher mieten – ein Live-Webinar"
  language: "en"
  mode: "online"
  performer: "Andrei Kvapil"
  performer_role: "Schöpfer und Maintainer von Cozystack, Gründer von Aenix"
  price: 0
direct_answer: |
  **Dies ist ein kostenloses Live-Webinar für Plattform-Teams in Unternehmen sowie für Cloud-, Telekommunikations- und GPU-Anbieter, die ein souveränes KI-Angebot aufbauen. Andrei Kvapil – Schöpfer von Cozystack, einer Open-Source-Cloud-Plattform und einem CNCF-Sandbox-Projekt – zeigt den gesamten Weg vom Bare Metal bis zum abgerechneten Inferenz-Endpunkt: wie aus einem Node mit GPUs GPU-fähige Tenant-Cluster werden, die vier Wege, eine einzelne Karte zuzuteilen, Inferenz mit vLLM und NVIDIA Dynamo sowie die Abrechnung nach GPU-Stunden oder nach Tokens – alles aus Open Source zusammengesetzt. Die interne KI-Plattform und die kommerzielle GPU-Cloud erweisen sich dabei als derselbe Stack. Die Teilnahme ist nach Anmeldung kostenlos, und alle Angemeldeten erhalten die Aufzeichnung.**

quick_facts:
  - label: "Format"
    value: "Live-Online-Webinar, rund 50 Minuten: ein praxisnaher Durchgang mit Live-Demos, anschließend eine Live-Fragerunde mit dem Referenten"
  - label: "Termin"
    value: "Donnerstag, 10. September 2026 · 16:00 Uhr MESZ (14:00 UTC) – online. Nach der Anmeldung erhalten Sie die Kalendereinladung und die Aufzeichnung."
  - label: "Preis"
    value: "Kostenlos nach Anmeldung; alle Angemeldeten erhalten die Aufzeichnung"
  - label: "Sprache"
    value: "Englisch"
  - label: "Zielgruppe"
    value: "Platform Engineers, Architekten, CTOs und Infrastrukturverantwortliche, denen die GPUs gehören – und Anbieter, die eine KI-Cloud aufbauen"
  - label: "Referent"
    value: "Andrei Kvapil – Schöpfer und Maintainer von Cozystack (CNCF-Sandbox-Projekt), Gründer von Aenix"
  - label: "Nach dem Webinar"
    value: "Die Aufzeichnung, dazu eine klare Landkarte einer GPU-Plattform und eine Entscheidungsmatrix für GPU-Sharing, die Sie auf Ihren eigenen Cluster übertragen können"

faq:
  - q: "Geht es um das Training von Modellen oder um den Betrieb der Infrastruktur?"
    a: "Um Infrastruktur. Wir behandeln die Plattform unter Ihren KI-Workloads – GPU-Sharing, Mandantenfähigkeit, Inferenz-Serving und Abrechnung –, nicht Modelltraining, MLOps-Pipelines oder Modellqualität."
  - q: "Wir wollen nur eine interne Plattform, keine kommerzielle Cloud. Lohnt sich das trotzdem?"
    a: "Ja. Eine interne GPU-Plattform ist derselbe Stack wie eine kommerzielle KI-Cloud, nur ohne den zweiten Zähler. Alles zu Sharing, Mandantenfähigkeit und Inferenz gilt unmittelbar auch für den internen Aufbau."
  - q: "Brauchen wir NVIDIA-GPUs?"
    a: "Die Live-Demos laufen auf NVIDIA – GPU Operator, MIG, vGPU und Dynamo. Zum Stand bei AMD und anderen Beschleunigern sprechen wir in der Fragerunde."
  - q: "Lässt sich Inferenz auf einem offenen Stack wirklich pro Token abrechnen?"
    a: "Ja, und wir zeigen es live: Ein KI-Gateway vor dem Modell vergibt API-Schlüssel, zählt Input- und Output-Tokens und liefert einen 429 (Kontingent überschritten), sobald ein Budget aufgebraucht ist. Die verwendeten offenen Komponenten nennen wir beim Namen."
  - q: "Behandeln Sie auch Multi-Node-Training und den GPU-Interconnect?"
    a: "Kurz, ja. Wir zeigen, wo das Fabric eine Rolle spielt – NVLink innerhalb eines Nodes, GPUDirect RDMA über InfiniBand oder RoCE zwischen Nodes – und die ehrliche Grenze: Eng gekoppeltes Multi-Node-Training übersteht keine WAN-Latenz und bleibt daher innerhalb eines Standorts."
  - q: "Wie schneidet das im Vergleich zu Run:ai oder OpenShift AI ab?"
    a: "Wir vergleichen die Ansätze – eine Plattform kaufen, Kapazität mieten oder Open Source zusammensetzen – hinsichtlich Lizenzierung, GPU-Sharing, Tenant-Isolation, Inferenz und Abrechnung, einschließlich der ehrlichen Zielkonflikte."
  - q: "Gibt es eine Aufzeichnung?"
    a: "Ja, für alle, die sich anmelden. Ausnahme ist die Fragerunde – diesen Teil gibt es nur live."

final_cta:
  heading: "Bringen Sie Ihre GPUs mit in die Fragerunde"
  text: "Donnerstag, 10. September 2026 · 16:00 Uhr MESZ (14:00 UTC) · online. Die Teilnahme ist kostenlos – nach Anmeldung; alle Angemeldeten erhalten die Kalendereinladung und die Aufzeichnung."
  button: "Platz sichern"
  href: "#register"
---

<section class="ws-section ws-story wb-story" aria-labelledby="wb-story-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-story-h">Die GPUs stehen schon im Rack. Jetzt sollen sie Geld verdienen</h2>
<p class="ws-lead">Jedes Team will KI-Infrastruktur, und der Markt verkauft sie als Produkt, das man im Ganzen kauft. In Wirklichkeit ist eine GPU-Plattform ein Stapel von Schichten – Sharing, Mandantenfähigkeit, Inferenz, Abrechnung –, und für jede davon gibt es bereits ein ausgereiftes Open-Source-Projekt. Die Lücke ist nicht die Hardware, sondern das Zusammensetzen – und genau das zeigt diese Session.</p>
</div>

<div class="ws-wrap ws-story__row">
<div class="ws-story__text">
<h3 class="wb-story__h3">Wo es meistens anfängt</h3>
<p>Teure Karten laufen mit zwanzig oder dreißig Prozent Auslastung, während ein Team auf das andere wartet – weil es kein Sharing, keine Kontingente und kein Self-Service gibt. Oder das Budget versickert in GPU-Instanzen beim Hyperscaler, für Arbeit, die auf Hardware in Ihren eigenen Racks laufen könnte, ohne dass die Daten das Haus verlassen. Oder das Plattform-Team soll „die GPUs verteilen“ und stellt fest, dass es dafür keinen sauberen Weg gibt.</p>
<p>Keiner dieser Fälle erfordert neue Hardware. Gefragt ist <strong>ein Weg, die Karten, die Sie bereits besitzen, in eine Plattform zu verwandeln, die Teams nutzen – oder Kunden kaufen – können.</strong></p>
</div>
<div class="ws-story__visual">
<ul class="wb-starts" aria-hidden="true">
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="vm" >}}</span>
<span class="wb-start__label">Ungenutztes Silizium</span>
<span class="wb-start__sub">Karten bei 20–30 %, kein Sharing, kein Self-Service</span>
</li>
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="billing" >}}</span>
<span class="wb-start__label">Die eigenen Workloads zurückmieten</span>
<span class="wb-start__sub">GPU-Rechnungen beim Hyperscaler für Arbeit, die Sie selbst betreiben könnten</span>
</li>
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="rocket" >}}</span>
<span class="wb-start__label">Eine GPU-Cloud in Ihren Racks</span>
<span class="wb-start__sub">Geteilt, abgerechnet, Self-Service</span>
</li>
</ul>
</div>
</div>

<div class="ws-wrap ws-story__row ws-story__row--reverse">
<div class="ws-story__text">
<h3 class="wb-story__h3">Was aus Karten eine Plattform macht</h3>
<p>Cozystack ist eine Open-Source-Cloud-Plattform und ein CNCF-Sandbox-Projekt, das aus einem Node mit GPUs GPU-fähige Tenant-Cluster, Managed-Datenbanken, S3-kompatiblen Storage und Inferenz macht – jeweils als Kubernetes-Ressource hinter einer einzigen API. Teams erhalten einen eigenen Cluster statt eines Namespace, und die Karten sind darin sichtbar.</p>
<p>Darauf machen die Ænix-Module aus der Plattform ein Geschäft: <strong>Abrechnung nach GPU-Stunden und pro Token, Tenant-Kontingente, ein Self-Service-Panel und die Integrationen, die aus reinem Verbrauch eine Rechnung machen.</strong></p>
</div>
<div class="ws-story__visual ws-story__visual--platform">
<div class="ws-platform wb-platform">
<div class="ws-platform__head">{{< cozy-mark >}}</div>
<span class="wb-platform__cap">Open-Source-Fundament</span>
<ul class="ws-platform__layers">
<li><span class="ws-platform__ic">{{< ws-icon name="vm" >}}</span>GPU-fähige Tenant-Cluster</li>
<li><span class="ws-platform__ic">{{< ws-icon name="layers" >}}</span>GPU-Sharing · Passthrough, vGPU, MIG, fraktional</li>
<li><span class="ws-platform__ic">{{< ws-icon name="rocket" >}}</span>Managed Inferenz · vLLM, NVIDIA Dynamo</li>
<li><span class="ws-platform__ic">{{< ws-icon name="stack" >}}</span>Managed-Datenbanken &amp; S3-kompatibler Storage</li>
</ul>
<div class="wb-platform__plus"><span>+ Ænix-Module</span></div>
<ul class="wb-platform__modules">
<li><span class="wb-mod__ic">{{< ws-icon name="billing" >}}</span>Abrechnung nach GPU-Stunden &amp; pro Token</li>
<li><span class="wb-mod__ic">{{< ws-icon name="catalog" >}}</span>Self-Service-Panel &amp; Kontingente</li>
<li><span class="wb-mod__ic">{{< ws-icon name="stack" >}}</span>Eigene Integrationen über die API</li>
</ul>
</div>
</div>
</div>

<div class="ws-wrap">
<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">4 Wege</div><div class="cs-stat__label">eine Karte zuzuteilen – Passthrough, vGPU, MIG, fraktional</div></div>
  <div class="cs-stat"><div class="cs-stat__num">1 GPU → viele Tenants</div><div class="cs-stat__label">vGPU, MIG und fraktionales Sharing auf unterstützten Karten</div></div>
  <div class="cs-stat"><div class="cs-stat__num">€0</div><div class="cs-stat__label">Hypervisor-Lizenzkosten pro Core – Apache 2.0, CNCF-Sandbox-Projekt</div></div>
</div>
</div>
</section>

<section class="ws-section wb-proof" aria-labelledby="wb-proof-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-proof-h">Anbieter, die GPUs bereits darauf betreiben</h2>
<p class="ws-lead">Keine Piloten, sondern produktive Plattformen mit echten Nutzern – gebaut auf demselben Fundament, das die Session Schritt für Schritt zeigt.</p>

<div class="wb-cover__grid">
<article class="wb-cover__item">
<span class="wb-cover__num">01</span>
<span class="wb-cover__icon">{{< ws-icon name="growth" >}}</span>
<div class="cs-stat__num" style="font-size:1.9rem;margin:.2rem 0 .1rem">5× günstigere GPU</div>
<div class="cs-stat__label" style="margin-bottom:1rem">~11.000 aktive Nutzer ohne Ausfallzeit migriert</div>
<p class="wb-cover__text"><strong>Eine europäische Plattform für akademisches Rechnen</strong> ist von einem Public Hyperscaler auf eigenes Bare Metal umgezogen – mit fraktionalem GPU-Sharing über Jobs hinweg und einer einzigen Cluster API, die Bare Metal, einen Hyperscaler und eine souveräne Schweizer Cloud umspannt. Auf gemietete GPUs weicht sie nur bei Lastspitzen aus.</p>
</article>
<article class="wb-cover__item">
<span class="wb-cover__num">02</span>
<span class="wb-cover__icon">{{< ws-icon name="shield" >}}</span>
<div class="cs-stat__num" style="font-size:1.9rem;margin:.2rem 0 .1rem">GPU im Katalog</div>
<div class="cs-stat__label" style="margin-bottom:1rem">Schweiz · verkauft unter der eigenen Marke des Anbieters</div>
<p class="wb-cover__text"><strong>Ein Schweizer Cloud-Anbieter</strong> verkauft GPUs neben virtuellen Maschinen, Managed Kubernetes und Datenbanken von einer Plattform aus – als ganze Karte und geteilt, gemessen und abgerechnet über das eigene Panel. Seine eigenen Engineers sind zu Cozystack-Maintainern geworden.</p>
</article>
</div>

<p class="wb-cover__note"><span class="wb-cover__note-ic">{{< ws-icon name="chat" >}}</span><span>Beide sind auf Wunsch der Kunden anonymisiert. Andrei zeigt, was beide mit ihren GPUs tatsächlich umgesetzt haben – und was er auf Ihrem Stack anders machen würde.</span></p>
</div>
</section>

<section class="ws-section wb-cover" id="agenda" aria-labelledby="wb-cover-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-cover-h">Was wir behandeln</h2>
<p class="ws-lead">Live-Demos statt Folien – danach Ihre Fragen.</p>
<ol class="wb-cover__grid">
<li class="wb-cover__item">
<span class="wb-cover__num">01</span>
<span class="wb-cover__icon">{{< ws-icon name="server" >}}</span>
<p class="wb-cover__text"><strong>Vom Bare Metal zum GPU-fähigen Tenant.</strong> Ein Node mit GPUs tritt dem Cluster bei, die Treiber werden ausgerollt, und ein Team erhält einen eigenen Cluster – keinen Namespace –, in dem die Karten sichtbar sind.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">02</span>
<span class="wb-cover__icon">{{< ws-icon name="layers" >}}</span>
<p class="wb-cover__text"><strong>Vier Wege, eine GPU zuzuteilen.</strong> Eine ganze Karte (Passthrough) oder drei Wege, sie zu teilen – vGPU, MIG und fraktional (HAMi) – im direkten Vergleich, mit dem Auslastungsgraphen, der zeigt, wie aus ungenutztem Silizium Geld wird.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">03</span>
<span class="wb-cover__icon">{{< ws-icon name="rocket" >}}</span>
<p class="wb-cover__text"><strong>Vom Modell zum Endpunkt.</strong> vLLM in einem Tenant, dann NVIDIA Dynamo – disaggregiertes Prefill/Decode und KV-Cache-bewusstes Routing – mit Latenz vorher/nachher unter paralleler Last auf derselben Hardware.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">04</span>
<span class="wb-cover__icon">{{< ws-icon name="stack" >}}</span>
<p class="wb-cover__text"><strong>Drei Türen zu einer API.</strong> Bestellen Sie einen GPU-Cluster über eine UI, über die CLI oder mit einem Git-Commit – jedes Mal dieselbe Ressource, kein Portal auf einem Portal.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">05</span>
<span class="wb-cover__icon">{{< ws-icon name="billing" >}}</span>
<p class="wb-cover__text"><strong>Zwei Zähler auf einem Cluster.</strong> GPU-Stunden für die Vermietung von Kapazität und Input-/Output-Tokens für den Verkauf von Inferenz – der Moment, in dem interne Infrastruktur zum Produkt wird, mit einem 429, sobald ein Budget aufgebraucht ist.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">06</span>
<span class="wb-cover__icon">{{< ws-icon name="growth" >}}</span>
<p class="wb-cover__text"><strong>Wenn Ihr Dienst nicht im Katalog ist.</strong> Einmal paketieren und per Knopfdruck deployen – plus die Frage, wo Queues (Kueue, Volcano, KAI) beim verteilten Training ins Spiel kommen.</p>
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
<span class="ws-outcome__icon">{{< ws-icon name="layers" >}}</span>
<p class="ws-outcome__text"><strong>Eine Landkarte einer GPU-Plattform, Schicht für Schicht</strong> – und das Open-Source-Projekt, das jede Schicht füllt.</p>
</article>
<article class="ws-outcome">
<span class="ws-outcome__num">02</span>
<span class="ws-outcome__icon">{{< ws-icon name="map" >}}</span>
<p class="ws-outcome__text"><strong>Eine einseitige Entscheidungsmatrix</strong> für GPU-Sharing: Passthrough vs. vGPU vs. MIG vs. fraktional – und wann welche Variante gewinnt.</p>
</article>
<article class="ws-outcome">
<span class="ws-outcome__num">03</span>
<span class="ws-outcome__icon">{{< ws-icon name="billing" >}}</span>
<p class="ws-outcome__text"><strong>Einen nüchternen Blick auf die Abrechnung</strong> – pro GPU-Stunde und pro Token – und wo die ehrlichen Grenzen liegen.</p>
</article>
<article class="ws-outcome ws-outcome--hero">
<span class="ws-outcome__num">04</span>
<span class="ws-outcome__icon">{{< ws-icon name="plan" >}}</span>
<p class="ws-outcome__text"><strong>Ein Referenz-Runbook</strong> für den gesamten Weg, damit Ihr Team ihn auf dem eigenen Cluster nachbauen kann.</p>
</article>
</div>
<div class="ws-cta-center"><a class="cta-primary cta-accent" href="#register">Platz sichern</a></div>
</div>
</section>

<section class="ws-section wb-audience" aria-labelledby="wb-audience-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-audience-h">Für wen das Webinar gedacht ist</h2>
<p class="ws-lead">Teams in Unternehmen, denen ein Stapel GPUs übergeben wurde, verbunden mit dem Auftrag, etwas Sinnvolles daraus zu machen – und Cloud-, Telekommunikations- und GPU-Anbieter, die ein souveränes KI-Angebot aufbauen. Wenn Sie einen Open-Source-Aufbau gegen Run:ai, OpenShift AI oder schlicht das Mieten beim Hyperscaler abwägen, ist die Session genau auf Ihre Situation zugeschnitten.</p>
<ul class="wb-audience__tiles">
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="server" >}}</span>Plattform- &amp; Infrastruktur-Teams</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="cloud" >}}</span>Cloud- &amp; GPU-Anbieter</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="datacenter" >}}</span>Rechenzentrumsbetreiber</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="telecom" >}}</span>Telekommunikationsunternehmen</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="lab" >}}</span>KI- &amp; Forschungsplattformen</li>
</ul>
<p class="wb-audience__roles-label">Vor allem die Menschen, denen die GPUs und die Entscheidung gehören:</p>
<ul class="wb-audience__roles">
<li>Platform Engineers</li>
<li>Architekten</li>
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
<p class="ws-speaker__bio">Andrei hat Cozystack, die Open-Source-Cloud-Plattform und das CNCF-Sandbox-Projekt, nach mehr als fünfzehn Jahren Erfahrung im Aufbau von Clouds und Hochlast-Infrastruktur ins Leben gerufen. Er trägt zu Kubernetes, KubeVirt, Cilium und LINSTOR bei und spricht auf der KubeCon und anderen Branchenveranstaltungen. Bei Aenix hilft er Teams, aus ihren GPUs und ihrer Hardware kommerzielle Cloud-Services zu machen.</p>
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
<p class="ws-register__lead">Donnerstag, 10. September 2026 · 16:00 Uhr MESZ (14:00 UTC) · online. Die Teilnahme ist kostenlos – nach Anmeldung: Sie erhalten die Kalendereinladung und die Aufzeichnung.</p>
<div class="ws-register__form">

{{< clickmeeting room="18263597110070205" >}}

</div>
</div>
</section>
