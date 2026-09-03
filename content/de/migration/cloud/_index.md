---
title: "Cloud Migration — strategische Migration zu privater oder hybrider Infrastruktur"
description: "Cloud Migration ist 2026 nicht mehr \"alles in die Public Cloud\" — es ist eine strategische Entscheidung, welche Workloads wo am besten laufen. Aenix führt..."
related_pages: ["/de/alternativen/vmware-alternative", "/de/loesungen/cloud-repatriation", "/de/produkte/private-cloud-platform/"]
language: "de"
quick_facts_style: "rows"
faq_style: "rows"
hreflang_en: /migration/cloud/
direct_answer: |
  **Cloud Migration bedeutet 2026 nicht mehr "alles in die Public Cloud", sondern die strategische Entscheidung, welche Workloads wo am besten laufen. Aenix führt strukturierte Migrationen für Unternehmen, Hosting-Anbieter und regulierte Organisationen im DACH-Raum durch: von Public-Cloud-Repatriierung über VMware-Ausstieg unter Broadcom-Druck bis zur Greenfield-Private-Cloud. Zielplattform ist die Ænix Platform auf Basis von Cozystack, einem CNCF-Sandbox-Projekt unter Apache 2.0. Cozystack vereint virtuelle Maschinen (KubeVirt) und Container über eine einzige Kubernetes-API, mit Cilium-Networking (eBPF) und LINSTOR-Storage. Jedes Engagement folgt der Abfolge Assessment, Implementation und optionalem Operate, mit Aenix-Ingenieuren integriert in Ihr Team.**

quick_facts:
  - label: "Was es ist"
    value: "Strukturierte, strategische Migration von Workloads zu privater oder hybrider Infrastruktur — Public-Cloud-Repatriierung, VMware-Ausstieg oder Greenfield-Private-Cloud."
  - label: "Lizenz"
    value: "Apache 2.0 (keine CPU-/Core-basierte Lizenzierung)"
  - label: "Status"
    value: "Cozystack ist ein CNCF-Projekt (Sandbox seit 28.02.2025; Incubating erwartet Spätsommer 2026)"
  - label: "Für wen"
    value: "Hosting-Anbieter, regulierte Unternehmen, große Betreiber, Produkt-Engineering- und KI-lastige Teams im DACH-Raum."
  - label: "Engagement"
    value: "Assessment (14-28 Tage), Implementation (3-18 Monate), Operate optional (managed oder in-house)."
  - label: "Technologie"
    value: "Ænix Platform auf Cozystack — VMs und Container über eine Kubernetes-API (KubeVirt), Cilium-Networking (eBPF), LINSTOR/DRBD-Storage, Tenant-CRD-Mandantenfähigkeit."
  - label: "Typische Treiber"
    value: "Broadcom-Subscription-Druck, Public-Cloud-Kosten, Souveränitätsanforderungen (DORA, NIS2) und dauerhaft ausgelastete GPU-Kapazität."

faq:
  - q: "Was kostet eine Cloud-Migration mit Aenix?"
    a: "Die Migration selbst läuft als Assessment- und Implementation-Engagement. Der laufende Plattformbetrieb folgt den Ænix-Platform-Preisstufen: Basic 1.250 $/Monat (10 Nodes), Standard 3.000 $, Plus 5.500 $ und Enterprise nach Vereinbarung. Den konkreten Umfang klären wir im 30-minütigen Discovery-Call."
  - q: "Muss ich alle Workloads gleichzeitig migrieren?"
    a: "Nein. Aenix startet mit einem Assessment (14-28 Tage), in dem Workloads klassifiziert, TCO modelliert und eine Zielarchitektur definiert werden. Die Migration erfolgt schrittweise über 3 bis 18 Monate, sodass kritische Systeme kontrolliert und ohne großen Big-Bang umziehen."
  - q: "Welche Migrationsmuster deckt Aenix ab?"
    a: "Vier Hauptmuster: VMware-Ausstieg unter Broadcom-Subscription-Druck, Public-Cloud-Repatriierung wegen Kosten oder Souveränität, souveränitätsgetriebene Migration (DORA, NIS2) und Greenfield-Projekte mit moderner, Kubernetes-nativer Architektur."
  - q: "Bin ich an einen Anbieter gebunden?"
    a: "Nein. Die Zielplattform basiert auf Cozystack, einem CNCF-Sandbox-Projekt unter Apache 2.0 ohne CPU- oder Core-basierte Lizenzierung. Es gibt keinen proprietären Lock-in; Sie können die Plattform auch in-house weiterbetreiben, statt das optionale Operate-Engagement zu nutzen."
  - q: "Können VMs und Container gemeinsam migriert werden?"
    a: "Ja. Cozystack betreibt virtuelle Maschinen (über KubeVirt) und Container über eine einzige Kubernetes-API. So lassen sich bestehende VM-Workloads aus VMware sowie containerisierte Anwendungen auf derselben Plattform konsolidieren."
  - q: "Hilft eine Migration bei DORA- und NIS2-Anforderungen?"
    a: "Ja. Souveränitätsanforderungen sind ein häufiger Migrationstreiber. Eine private oder hybride Cozystack-Plattform gibt Ihnen Kontrolle über Datenstandort und Betrieb — relevant für DORA, NIS2 und sektorale Vorgaben. Details unter Data Sovereignty."
---

**Cloud Migration ist 2026 eine Workload-Placement-Entscheidung, kein Wettlauf in die Public Cloud. Ænix führt strukturierte Cloud-Migrationen durch — Public-Cloud-Repatriierung, VMware-Exit und Greenfield-Private-Cloud-Aufbauten — bei denen das Ziel aus dem Workload abgeleitet und nicht vorab angenommen wird.**

Das Team, das Ihre Migration ausliefert, ist dasselbe Team hinter [Cozystack](/de/produkte/cozystack/) — der Open-Source-Plattform, auf der die meisten Private-Cloud-Migrationen landen. Wir arbeiten für Assessment, Sequenzierung und Implementierung an der Seite Ihrer Engineers.

> **Passt zu:** einer der **[Ænix Plattformen](/de/produkte/)** — das Ziel folgt dem Käuferprofil. Wer Cloud an externe Kunden verkauft (Hoster, MSPs, Telcos, nationale Betreiber), landet auf der **[Public Cloud Platform](/de/produkte/public-cloud-platform/)**; regulierte Organisationen, die Cloud für die eigenen Entwickler betreiben, auf der **[Private Cloud Platform](/de/produkte/private-cloud-platform/)**, deren Self-Service-Schicht die interne PaaS ersetzt; GPU- und Inferenz-Bestände auf der **[AI Platform](/de/produkte/ai-platform/)**.

<div class="cta-row">
  <a class="cta-primary" href="/de/kontakt/">Discovery-Call buchen</a>
  <a class="cta-secondary" href="/de/roi-rechner/">TCO modellieren →</a>
</div>


---

## Wann eine Cloud-Migration sinnvoll ist

Eine Migration lohnt die Störung, wenn ein konkreter Auslöser sie treibt. Die häufigsten 2026:

- **VMware-Exit** unter Broadcom-Subscription-Druck — Verlängerungserhöhungen um das 2-5-Fache, Bruch von ELAs und verpflichtendes VCF-Bundling drängen Infrastruktur-Teams zu einer Plattform, die sie kontrollieren. Siehe **[VMware Alternative](/de/alternativen/vmware-alternative/)** für das Ziel und den dedizierten **[VMware-Migrations-Hub](/de/migration/vmware/)** für die Kohorten-Sequenzierung, die an Subscription-Abläufen ausgerichtet ist.
- **Public-Cloud-Repatriierung**, getrieben von Kosten oder Souveränität — Steady-State-Workloads, die im Hyperscaler günstig zu starten waren, werden im Maßstab teuer, und Data-Residency-Regeln erfordern zunehmend kundenkontrollierte Infrastruktur. Siehe **[Cloud Repatriation](/de/loesungen/cloud-repatriation/)**.
- **Souveränitätsanforderungen** — DORA, NIS2 und sektorale Regeln zwingen kritische Workloads auf Infrastruktur mit klarer Jurisdiktion und Audit-Trail. Siehe **[Data Sovereignty](/de/loesungen/data-sovereignty/)**.
- **KI- und GPU-Ökonomie** — dauerhaft ausgelastete Inferenz- und Trainings-Workloads sind auf eigenen GPUs bei angemessener Auslastung deutlich günstiger als auf gemieteter Hyperscaler-Kapazität. Siehe **[Sovereign AI](/de/loesungen/sovereign-ai/)**.
- **Greenfield-Projekte** — eine neue Plattform ohne Legacy-Bestand, bei der moderne Architektur ab Tag eins auf einer **[Private-Cloud-Plattform](/de/loesungen/private-cloud/)** übernommen werden kann.

Wenn zwei oder mehr davon zutreffen, verstärkt eine strukturierte Migration den Nutzen. Wenn keines zutrifft und Ihr aktuelles Setup komfortabel ist, ist „bleiben und optimieren“ die ehrliche Empfehlung — und eine, die wir regelmäßig aussprechen.

---

## Wie Ænix bei einer Cloud-Migration vorgeht

Das Engagement ist bewusst gestaffelt, sodass Sie inkrementell committen, mit einem Entscheidungs-Gate vor der teuren Phase.

- **Platform Readiness Assessment (14-28 Tage)** — vollständiges Workload-Inventar, Klassifizierung (jetzt migrieren / später migrieren / bleiben / die Plattform neu aufzusetzen), ehrliche TCO-Modellierung und eine schriftliche Zielarchitektur. Dies ist die Methodik hinter jeder Migration; siehe **[Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/)**.
- **Pilot** — eine repräsentative Kohorte wandert auf die Zielplattform und läuft parallel zur Quelle, bis sie validiert ist. Das beweist die Architektur und die Aufwandsschätzungen an realen Workloads, bevor skaliert wird.
- **Aufbau und Migration (3-18 Monate)** — Ænix-Engineers integriert mit Ihrem Team, migrieren Workloads Kohorte für Kohorte, mit durchgängigem Wissenstransfer. Der Betrieb kann in-house bleiben oder als verwaltetes Engagement fortgeführt werden.

### Workload-Placement-Framework

Das Assessment sortiert jeden Workload entlang zweier Achsen: wie gut er technisch auf eine Private-Plattform passt und was er dort kostet, wo er heute läuft. Aus diesem Raster fallen vier Ergebnisse — **jetzt migrieren** (klarer technischer und wirtschaftlicher Gewinn), **später migrieren** (Fit ist gut, aber Sequenzierung oder Verträge diktieren das Timing), **die Plattform neu aufzusetzen** (braucht ein Redesign vor dem Umzug) und **bleiben** (bereits am richtigen Ort). Die Strategie ist die Summe dieser Entscheidungen pro Workload, kein Top-down-Zielprozentsatz.

### Was am Platz bleibt

Ein ehrlicher Migrationsplan lässt Workloads in Ruhe, wenn ihr Umzug Risiko ohne Ertrag hinzufügt. Bursty, unvorhersehbare Workloads gehören oft in die Public Cloud, wo Elastizität günstig ist. Managed Services ohne On-Premises-Äquivalent sind einen Neubau möglicherweise nicht wert. Anwendungen mitten im Rewrite sollten auf die neue Architektur warten, statt zweimal zu migrieren. Ænix hat keine Hyperscaler-Partner-Ökonomie und keinen Anreiz zur Über-Migration, daher ist „an Ort und Stelle belassen“ eine Empfehlung, die wir ohne Zögern aussprechen, wenn die Zahlen sie stützen.

---

## Wie die Migration selbst abläuft

Die Ausführung folgt einem kohorten-basierten Muster statt eines einzelnen Cutovers. Workloads werden nach Abhängigkeit und Risiko in Kohorten gruppiert, und jede Kohorte wandert auf die Zielplattform, während die Quelle weiterläuft. Quelle und Ziel laufen parallel, bis die Kohorte validiert ist — funktional, auf Performance und auf Datenintegrität — und erst dann wird die Quelle stillgelegt. Nichts wird auf das Versprechen hin abgeschaltet, dass die neue Umgebung funktionieren wird.

Für Bestände, die einen Legacy-Virtualisierungs-Stack verlassen, ist die Image-Konvertierung automatisiert: der Containerized Data Importer von KubeVirt liest Virtual-Machine-Images in die Zielplattform ein, und Windows-Gäste erhalten ihr In-Guest-Tooling vor dem ersten Boot auf dem neuen Hypervisor bereinigt. Networking und Storage werden neu entworfen statt kopiert — eine auf Cilium und LINSTOR aufgebaute Private-Plattform verhält sich anders als NSX und vSAN, und dieses Redesign zu überspringen ist eine der häufigsten Ursachen für Post-Migrations-Fragilität.

Die Sequenzierung respektiert, was Sie bereits bezahlt haben. Wenn Verträge oder Subscriptions noch Laufzeit haben, wandern die betroffenen Kohorten zuletzt, sodass der Plan nie eine Abschreibung zugesagter Ausgaben erzwingt. Ein Bestand von 100 Workloads wird typischerweise in Monaten abgeschlossen, nicht in Jahren; größere Bestände laufen in Kohorten über ein längeres Fenster, während die Quellumgebung Kohorte für Kohorte ausläuft.

<div class="arch-section__fig">
<div class="diagram">
<div class="diagram__node"><b>Quellumgebung</b><div class="diagram__chips"><span>Public Cloud</span><span>Legacy-Virtualisierungs-Stack</span></div></div>
<div class="diagram__conn">wandert durch</div>
<div class="diagram__node"><b>Kohorten-basierte Migration</b><div class="diagram__chips"><span>Parallelbetrieb-Validierung</span><span>Automatisierte Image-Konvertierung</span></div></div>
<div class="diagram__conn">landet auf</div>
<div class="diagram__node diagram__node--brand"><b>Cozystack</b><div class="diagram__chips"><span>KubeVirt</span><span>Cilium</span><span>LINSTOR</span></div></div>
<div class="diagram__conn">abgeschlossen mit</div>
<div class="diagram__node"><b>Quelle stillgelegt</b><div class="diagram__chips"><span>Kohorte für Kohorte</span><span>Keine Abschreibung zugesagter Ausgaben</span></div></div>
</div>
</div>

---

<div class="band-fullbleed band-fullbleed--tint">
<div class="band-fullbleed__inner">

## Wo Cloud-Migrationen häufig ins Stocken geraten

Die meisten gescheiterten Migrationen teilen eine kleine Menge von Ursachen, und die Assessment-Phase existiert, um sie früh zu erkennen:

- **Keine ehrliche TCO vor dem Umzug.** Hardware-Refresh, Kapazität des Plattform-Teams und die operative Lernkurve bleiben im Modell außen vor, und das Projekt stockt, wenn sich die Ökonomie anders als im Pitch entwickelt.
- **Big-Bang-Cutover.** Ein „alles an einem Wochenende verschieben“ überlebt den Kontakt mit einem Enterprise-Bestand selten. Kohorten-basierte Migration mit validiertem Parallelbetrieb ist das Muster, das funktioniert.
- **Ein unterdimensionierte Zielplattform.** Workloads landen auf einer Private-Plattform, die nie für die Produktion gebaut wurde; operative Altlasten häufen sich an, und das Team gibt der Migration die Schuld, obwohl das eigentliche Problem die Reife des Ziels ist.
- **Übersprungenes Network- und Storage-Redesign.** Wer Netzwerk und Storage der Zielplattform als Kopie der Quelle behandelt, handelt sich Instabilität ein. Sie werden für das Ziel frisch konstruiert.

</div>
</div>

---

## Modellieren Sie die Zahlen, bevor Sie sich festlegen

Die Migrations-Ökonomie sieht im Abstrakten attraktiv aus und entscheidet sich in der Praxis an Details — Hardware-Refresh, Kapazität des Plattform-Teams und die operative Lernkurve verschieben das Ergebnis alle. Bevor Sie sich festlegen, modellieren Sie das Delta mit den **[ROI- und TCO-Rechnern](/de/roi-rechner/)**: VMware-Exit-Ersparnis, DIY-versus-Ænix-Plattform-TCO, Hosting-Unit-Economics und GPU-/KI-Inferenz-ROI, jeweils mit editierbaren Eingaben und Live-Ergebnissen.

Für ein durchgerechnetes Beispiel eines Mixed-Placement-Ergebnisses siehe die **[Multi-Cloud-Academic-GPU-Case-Study](/de/case-studies/multicloud-academic-gpu/)** — bei der die richtige Antwort eine Mischung aus eigener GPU-Kapazität und beibehaltener Cloud war, kein pauschaler Umzug in die eine oder andere Richtung.


---

*Ænix ist das Team hinter Cozystack (CNCF-Projekt), und wir bieten Ænix Platform an — unser kommerzielles produktisiertes Angebot auf Basis von Cozystack.*
