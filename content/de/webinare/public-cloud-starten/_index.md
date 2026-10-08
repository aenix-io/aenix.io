---
title: "Webinar: Kubernetes, Datenbanken und GPU in Ihre Preisliste aufnehmen"
description: "Live-Webinar mit Andrei Kvapil: wie Hosting- und Cloud-Anbieter ihren Katalog um Managed Kubernetes, Datenbanken, S3 und GPU erweitern – mit eigenem Billing."
language: "de"
hreflang_en: "/webinars/launch-public-cloud/"
layout: "event-landing"
bodyClass: "webinar-landing"
primary_keyword: "managed services für hosting anbieter"
secondary_keywords: ["managed kubernetes anbieten", "managed datenbank hosting anbieter", "gpu as a service anbieter", "cozystack webinar", "cloud service katalog"]
images: ["img/og/og-webinar-en.png"]
hide_child_cards: true
hero_eyebrow: "Kostenloses Live-Webinar · Online · Mittwoch, 19. August 2026 · 16:00 Uhr MESZ (14:00 UTC)"
hero_title: "Kubernetes, Datenbanken und GPU in Ihre Preisliste aufnehmen"
hero_tagline: "Eine Stunde mit Andrei Kvapil, dem Schöpfer von Cozystack: wie ein etablierter Anbieter seinen Katalog auf den Racks erweitert, die ihm bereits gehören – neben der Plattform, die er bereits betreibt, mit eigenem Billing und eigenem Panel."
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
# NOTE: Event JSON-LD intentionally left off — the site's ld+json string values
# render double-quoted on this build. Date lives in the visible copy.
event:
  name: "Kubernetes, Datenbanken und GPU in Ihre Preisliste aufnehmen – ein Live-Webinar"
  language: "en"
  mode: "online"
  performer: "Andrei Kvapil"
  performer_role: "Schöpfer und Maintainer von Cozystack, Gründer von Aenix"
  price: 0
direct_answer: |
  **Dies ist ein kostenloses Live-Webinar für Hosting-Anbieter, Cloud-Anbieter, Rechenzentrumsbetreiber, MSPs und Telekommunikationsunternehmen, die bereits Infrastruktur verkaufen und entscheiden, was sie als Nächstes anbieten. Andrei Kvapil – Schöpfer von Cozystack, einer Open-Source-Cloud-Plattform und einem CNCF-Sandbox-Projekt – zeigt, wie ein etablierter Anbieter seinen Katalog um Managed Kubernetes, Managed-Datenbanken, S3-kompatiblen Object Storage und GPU erweitert: was neben dem bestehenden Stack läuft, was mit dem Billing und dem Kundenpanel passiert, wie Kunden einzeln umziehen und wie die ersten neunzig Tage aussehen. Die Teilnahme ist nach Anmeldung kostenlos, und alle Angemeldeten erhalten die Aufzeichnung.**

quick_facts:
  - label: "Format"
    value: "Live-Online-Webinar, rund 60 Minuten: ein praxisnaher Durchgang, anschließend eine Live-Fragerunde mit dem Referenten"
  - label: "Termin"
    value: "Mittwoch, 19. August 2026 · 16:00 Uhr MESZ (14:00 UTC) – online. Nach der Anmeldung erhalten Sie die Kalendereinladung und die Aufzeichnung."
  - label: "Preis"
    value: "Kostenlos nach Anmeldung; alle Angemeldeten erhalten die Aufzeichnung"
  - label: "Sprache"
    value: "Englisch"
  - label: "Zielgruppe"
    value: "Gründer, CTOs, COOs und Produktverantwortliche bei Hosting-Anbietern, Cloud-Anbietern, Rechenzentren, MSPs und Telekommunikationsunternehmen, die bereits Infrastruktur verkaufen"
  - label: "Referent"
    value: "Andrei Kvapil – Schöpfer und Maintainer von Cozystack (CNCF-Sandbox-Projekt), Gründer von Aenix"
  - label: "Nach dem Webinar"
    value: "Die Aufzeichnung, dazu ein praxisnaher Blick auf einen Katalog und einen Migrationsplan, den Sie auf Ihren eigenen Stack übertragen können"

faq:
  - q: "Wir betreiben bereits eine Cloud-Plattform. Ist das für uns relevant?"
    a: "Genau für Sie ist es gemacht. Der größte Teil der Stunde dreht sich darum, eine zweite Plattform neben einer bestehenden aufzubauen, den Katalog zu erweitern und Kunden schrittweise umzuziehen – nicht darum, bei null anzufangen."
  - q: "Müssen wir von VMware, OpenStack oder Proxmox migrieren?"
    a: "Nein. Beide laufen so lange parallel, wie Sie möchten. Mehrere Anbieter behalten den alten Stack für die Workloads, die dort am besten aufgehoben sind, und verkaufen die neuen Services von der neuen Plattform."
  - q: "Was passiert mit unserem Billing?"
    a: "Es bleibt Ihres. Für WHMCS gibt es eine fertige Integration, alles andere wird über die Plattform-API angebunden, und die Verbrauchsmessung lässt sich in das System exportieren, aus dem Sie heute Rechnungen stellen. Ihre Kundendatenbank bleibt die maßgebliche Quelle."
  - q: "Wir haben unser eigenes Control Panel geschrieben. Werfen wir das weg?"
    a: "Nein. Die Plattform stellt eine REST-API bereit, ihr eigenes Panel ist optional. Andrei behandelt beide Muster: Ihr Panel bleibt die Oberfläche für Ihre Kunden, oder Sie nutzen unseres als White-Label-Lösung."
  - q: "Können wir GPU von derselben Plattform verkaufen?"
    a: "Ja. Passthrough ganzer Karten, vGPU und MIG auf unterstützten Karten, sodass eine Karte mehr als einen Tenant bedienen kann. Andrei zeigt, was jeder Modus bietet und was Sie in einen Kundenvertrag schreiben können."
  - q: "Wie viele Engineers braucht der Betrieb?"
    a: "Weniger als OpenStack. Die Plattform ist ein in sich stimmiger, Kubernetes-nativer Stack statt eines Dutzends Dienste, die Sie selbst integrieren, und ein Upgrade ist ein Release statt eines Projekts."
  - q: "Was umfasst ein Pilot?"
    a: "Für den Anfang Hardware im Umfang eines Nodes, Zugang und jemanden, der das Ergebnis anhand gemeinsam vereinbarter Kriterien abnimmt. Die Pilotumgebung wird zu Ihrer Produktion – Sie fügen Nodes hinzu, während Sie hineinwachsen."
  - q: "Gibt es eine Aufzeichnung?"
    a: "Ja, für alle, die sich anmelden. Ausnahme ist die Fragerunde – diesen Teil gibt es nur live."

final_cta:
  heading: "Bringen Sie Ihren Stack mit in die Fragerunde"
  text: "Mittwoch, 19. August 2026 · 16:00 Uhr MESZ (14:00 UTC) · online. Die Teilnahme ist kostenlos – nach Anmeldung; alle Angemeldeten erhalten die Kalendereinladung und die Aufzeichnung."
  button: "Platz sichern"
  href: "#register"
---

<section class="ws-section ws-story wb-story" aria-labelledby="wb-story-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-story-h">Ihre Infrastruktur verdient bereits Geld. Die Frage ist, was sie noch verkaufen könnte</h2>
<p class="ws-lead">Die Racks gehören Ihnen, Sie betreiben die Plattform, und Sie haben die Kundenbeziehungen. Was Kunden nachfragen, wird immer breiter – Managed Kubernetes, Managed-Datenbanken, Object Storage, GPU, Self-Service, planbare Abrechnung –, und jeder Service, den Sie nicht anbieten können, ist ein Gespräch, das woanders endet. In dieser Session geht es darum, diese Lücke zu schließen, ohne das Geschäft darunter neu aufzubauen.</p>
</div>

<div class="ws-wrap ws-story__row">
<div class="ws-story__text">
<h3 class="wb-story__h3">Wo es meistens anfängt</h3>
<p>Ein Kunde fragt, ob Sie Managed Postgres anbieten, und die Antwort lautet Nein. Ein Verlängerungsangebot trifft ein, dessen Summe die Kalkulation Ihrer VM-Marge auf den Kopf stellt. Die Plattform funktioniert, aber sie am Laufen zu halten, ist der Vollzeitjob einer ganzen Person. Oder das Panel, das Ihr Team vor Jahren geschrieben hat, steuert noch immer das Provisioning, und jeder neue Service bedeutet einen weiteren Monat Glue Code.</p>
<p>Keiner dieser Fälle erfordert einen Neuaufbau. Gefragt ist <strong>eine weitere Plattform neben dem, was Sie betreiben, und ein Weg, das zu verkaufen, was sie kann.</strong></p>
</div>
<div class="ws-story__visual">
<ul class="wb-starts" aria-hidden="true">
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="catalog" >}}</span>
<span class="wb-start__label">Ein dünner Katalog</span>
<span class="wb-start__sub">VMs verkaufen sich, alles andere geht woandershin</span>
</li>
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="stack" >}}</span>
<span class="wb-start__label">Eine Plattform, die teuer geworden ist</span>
<span class="wb-start__sub">Lizenzen, Overhead, Handarbeit</span>
</li>
<li class="wb-start">
<span class="wb-start__ic">{{< ws-icon name="rocket" >}}</span>
<span class="wb-start__label">Ein Katalog, den Kunden kaufen können</span>
<span class="wb-start__sub">Auf den Racks, die Ihnen bereits gehören</span>
</li>
</ul>
</div>
</div>

<div class="ws-wrap ws-story__row ws-story__row--reverse">
<div class="ws-story__text">
<h3 class="wb-story__h3">Was in Ihre Preisliste kommt</h3>
<p>Cozystack ist eine Open-Source-Cloud-Plattform und ein CNCF-Sandbox-Projekt, das Ihre Hardware in einen Katalog verwandelt: virtuelle Maschinen, Managed Kubernetes, Managed-Datenbanken, S3-kompatibler Object Storage und GPU – jeweils über ein Self-Service-Panel bestellt, automatisch bereitgestellt, gesichert und überwacht. Den Preis legen Sie fest.</p>
<p>Darauf machen die Ænix-Module aus der Plattform ein Geschäft: <strong>Billing und Verbrauchsmessung, ein Hosting-Panel, WHMCS und eigene Integrationen sowie ein Migrationsplan, der Kunden einzeln umzieht.</strong></p>
</div>
<div class="ws-story__visual ws-story__visual--platform">
<div class="ws-platform wb-platform">
<div class="ws-platform__head">{{< cozy-mark >}}</div>
<span class="wb-platform__cap">Open-Source-Fundament</span>
<ul class="ws-platform__layers">
<li><span class="ws-platform__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/></svg></span>Managed Kubernetes</li>
<li><span class="ws-platform__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6"/><path d="M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3"/></svg></span>Managed-Datenbanken</li>
<li><span class="ws-platform__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg></span>Virtuelle Maschinen</li>
<li><span class="ws-platform__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1.3A3.5 3.5 0 0 1 17.5 18H7Z"/></svg></span>S3-kompatibler Storage</li>
<li><span class="ws-platform__ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6" rx="1"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg></span>GPU · passthrough, vGPU, MIG</li>
</ul>
<div class="wb-platform__plus"><span>+ Ænix-Module</span></div>
<ul class="wb-platform__modules">
<li><span class="wb-mod__ic">{{< ws-icon name="billing" >}}</span>Billing &amp; Verbrauchsmessung</li>
<li><span class="wb-mod__ic">{{< ws-icon name="catalog" >}}</span>Hosting-Panel</li>
<li><span class="wb-mod__ic">{{< ws-icon name="stack" >}}</span>WHMCS &amp; eigene Integrationen</li>
</ul>
</div>
</div>
</div>

<div class="ws-wrap">
<div class="cs-stats">
  <div class="cs-stat"><div class="cs-stat__num">20+</div><div class="cs-stat__label">Managed Services im Katalog, bereit zur Bepreisung und zum Verkauf</div></div>
  <div class="cs-stat"><div class="cs-stat__num">1 GPU → viele Tenants</div><div class="cs-stat__label">Passthrough ganzer Karten, vGPU und MIG auf unterstützten Karten</div></div>
  <div class="cs-stat"><div class="cs-stat__num">€0</div><div class="cs-stat__label">Hypervisor-Lizenzkosten pro Core – Apache 2.0, CNCF-Sandbox-Projekt</div></div>
</div>
</div>
</section>

<section class="ws-section wb-proof" aria-labelledby="wb-proof-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-proof-h">Europäische Anbieter, die das bereits betreiben</h2>
<p class="ws-lead">Keine Piloten, sondern produktive Plattformen, die an echte Kunden verkaufen – gebaut auf demselben Fundament, das die Session Schritt für Schritt zeigt.</p>

<div class="wb-cover__grid">
<article class="wb-cover__item">
<span class="wb-cover__num">01</span>
<span class="wb-cover__icon">{{< ws-icon name="shield" >}}</span>
<div class="cs-stat__num" style="font-size:1.9rem;margin:.2rem 0 .1rem">3 Rechenzentren</div>
<div class="cs-stat__label" style="margin-bottom:1rem">Schweiz · synchrone Replikation · mehr als ein Dutzend Tenants in Produktion</div>
<p class="wb-cover__text"><strong>Ein Schweizer Cloud-Anbieter</strong> ist von einem Hypervisor-Stack und einem Jelastic/Virtuozzo-Altbestand auf eine vollwertige kommerzielle Public Cloud umgestiegen – virtuelle Maschinen, Managed Kubernetes, Datenbanken und GPU, verkauft unter der eigenen Marke. Seine eigenen Engineers sind zu Cozystack-Maintainern geworden.</p>
</article>
<article class="wb-cover__item">
<span class="wb-cover__num">02</span>
<span class="wb-cover__icon">{{< ws-icon name="growth" >}}</span>
<div class="cs-stat__num" style="font-size:1.9rem;margin:.2rem 0 .1rem">5× günstigere GPU</div>
<div class="cs-stat__label" style="margin-bottom:1rem">~11.000 aktive Nutzer ohne Ausfallzeit migriert</div>
<p class="wb-cover__text"><strong>Eine europäische Plattform für akademisches Rechnen</strong> ist von einem Public Hyperscaler auf eigenes Bare Metal umgezogen und betreibt eine einzige Cluster API, die Bare Metal, einen Hyperscaler und eine souveräne Schweizer Cloud umspannt – mit fraktionalem GPU-Sharing über Jobs hinweg.</p>
</article>
</div>

<p class="wb-cover__note"><span class="wb-cover__note-ic">{{< ws-icon name="chat" >}}</span><span>Beide sind auf Wunsch der Kunden anonymisiert. Andrei zeigt, was beide tatsächlich umgesetzt haben – und was er auf Ihrem Stack anders machen würde.</span></p>
</div>
</section>

<section class="ws-section wb-cover" id="agenda" aria-labelledby="wb-cover-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-cover-h">Was wir behandeln</h2>
<p class="ws-lead">Fünfundvierzig Minuten Praxis, danach Ihre Fragen.</p>
<ol class="wb-cover__grid">
<li class="wb-cover__item">
<span class="wb-cover__num">01</span>
<span class="wb-cover__icon">{{< ws-icon name="catalog" >}}</span>
<p class="wb-cover__text"><strong>Der Katalog und was er einbringt.</strong> Managed Kubernetes, Datenbanken, Object Storage und GPU als verkaufsfähige SKUs: was es braucht, um sie einzuschalten, woran Sie den Preis ausrichten und welche sich zuerst verkaufen.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">02</span>
<span class="wb-cover__icon">{{< ws-icon name="layers" >}}</span>
<p class="wb-cover__text"><strong>Eine zweite Plattform neben der bestehenden.</strong> Wie Cozystack ohne harten Umstieg neben VMware, OpenStack, Proxmox oder Virtuozzo läuft: wo sich die beiden Stacks im Netzwerk, beim Storage und am Load Balancer berühren.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">03</span>
<span class="wb-cover__icon">{{< ws-icon name="plan" >}}</span>
<p class="wb-cover__text"><strong>Kunden einzeln umziehen.</strong> Migration in der Praxis – was sich sauber verschieben lässt, wie lange der Umzug pro Kunde dauert und welche Workloads Andrei genau dort lassen würde, wo sie sind.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">04</span>
<span class="wb-cover__icon">{{< ws-icon name="billing" >}}</span>
<p class="wb-cover__text"><strong>Billing, Verbrauchsmessung und Ihr Panel.</strong> Verbrauchsdaten aus der Plattform hinein in Ihre Rechnungsstellung. WHMCS als durchgespieltes Beispiel, eigene Panels über die API und ein Tenant-Lebenszyklus, der an den Zahlungsstatus gekoppelt ist.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">05</span>
<span class="wb-cover__icon">{{< ws-icon name="vm" >}}</span>
<p class="wb-cover__text"><strong>GPU als Produkt.</strong> Eine ganze Karte oder einen Teil davon vermieten: Passthrough, vGPU und MIG, was jeweils isoliert wird und was Sie in einen Kundenvertrag schreiben können.</p>
</li>
<li class="wb-cover__item">
<span class="wb-cover__num">06</span>
<span class="wb-cover__icon">{{< ws-icon name="rocket" >}}</span>
<p class="wb-cover__text"><strong>Der Pilot und die ersten neunzig Tage.</strong> Ein Node, rund zwei Wochen bis zur funktionierenden Umgebung, und der Pilot wird zu Ihrer Produktion – ohne Neuinstallation, mit gemeinsam vereinbarten Abnahmekriterien.</p>
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
<span class="ws-outcome__icon">{{< ws-icon name="catalog" >}}</span>
<p class="ws-outcome__text"><strong>Einen realistischen nächsten Katalog</strong> – die Services, die sich zuerst lohnen, und was jeder davon für Sie wert ist.</p>
</article>
<article class="ws-outcome">
<span class="ws-outcome__num">02</span>
<span class="ws-outcome__icon">{{< ws-icon name="billing" >}}</span>
<p class="ws-outcome__text"><strong>Einen nüchternen Blick auf Billing</strong>, Verbrauchsmessung und Panel-Integration – und wie das in der Praxis funktioniert.</p>
</article>
<article class="ws-outcome">
<span class="ws-outcome__num">03</span>
<span class="ws-outcome__icon">{{< ws-icon name="map" >}}</span>
<p class="ws-outcome__text"><strong>Einen Migrationspfad</strong>, bei dem Ihre Kunden online bleiben und Sie Herr über Ihren Zeitplan.</p>
</article>
<article class="ws-outcome ws-outcome--hero">
<span class="ws-outcome__num">04</span>
<span class="ws-outcome__icon">{{< ws-icon name="plan" >}}</span>
<p class="ws-outcome__text"><strong>Einen Piloten, den Sie wirklich starten können</strong> – ein Node, zwei Wochen, und er wird zu Ihrer Produktion.</p>
</article>
</div>
<div class="ws-cta-center"><a class="cta-primary cta-accent" href="#register">Platz sichern</a></div>
</div>
</section>

<section class="ws-section wb-audience" aria-labelledby="wb-audience-h">
<div class="ws-wrap">
<h2 class="ws-h2" id="wb-audience-h">Für wen das Webinar gedacht ist</h2>
<p class="ws-lead">Anbieter, die bereits Infrastruktur verkaufen und entscheiden, was sie als Nächstes anbieten. Wenn Ihre Plattform heute VMware, OpenStack, Proxmox, Virtuozzo, CloudStack, OpenNebula oder eine Eigenentwicklung ist, ist die Session genau auf Ihre Situation zugeschnitten.</p>
<ul class="wb-audience__tiles">
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="server" >}}</span>Hosting-Anbieter</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="cloud" >}}</span>Cloud-Anbieter</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="datacenter" >}}</span>Rechenzentrumsbetreiber</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="msp" >}}</span>MSPs</li>
<li class="wb-audience__tile"><span class="wb-audience__ic">{{< ws-icon name="telecom" >}}</span>Telekommunikationsunternehmen</li>
</ul>
<p class="wb-audience__roles-label">Vor allem die Menschen, die für den Servicekatalog und die Zahl darunter verantwortlich sind:</p>
<ul class="wb-audience__roles">
<li>Gründer</li>
<li>CTOs</li>
<li>COOs</li>
<li>Produktverantwortliche</li>
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
<p class="ws-speaker__bio">Andrei hat Cozystack, die Open-Source-Cloud-Plattform und das CNCF-Sandbox-Projekt, nach mehr als fünfzehn Jahren Erfahrung im Aufbau von Clouds und Hochlast-Infrastruktur ins Leben gerufen. Er trägt zu Kubernetes, KubeVirt, Cilium und LINSTOR bei und spricht auf der KubeCon und anderen Branchenveranstaltungen. Bei Aenix hilft er Anbietern in ganz Europa, aus ihrer Infrastruktur kommerzielle Cloud-Services zu machen.</p>
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
<p class="ws-register__lead">Mittwoch, 19. August 2026 · 16:00 Uhr MESZ (14:00 UTC) · online. Die Teilnahme ist kostenlos – nach Anmeldung: Sie erhalten die Kalendereinladung und die Aufzeichnung.</p>
<div class="ws-register__form">

{{< clickmeeting room="18263597110070205" >}}

</div>
</div>
</section>
