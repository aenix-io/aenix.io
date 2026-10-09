---
title: "Ehrliche TCO-Modelle für Cloud Repatriation — welche Zahlen Sie wirklich vergleichen sollten"
seo_title: "Cloud Repatriation: ehrliche TCO-Modelle"
description: "Warum TCO-Modelle zur Cloud Repatriation oft falsch liegen: versteckte Kostenposten auf beiden Seiten, kritische Annahmen und Entscheidungen pro Workload."
slug: "cloud-repatriation-tco-modell-ehrliche-zahlen"
date: "2026-05-05"
lastmod: "2026-10-09"
cover_image: "/img/blog/covers/de/cloud-repatriation-tco-modell-ehrliche-zahlen.jpg"
author: "Timur Tukaev"
type: "article"
topics: ["Cloud Repatriation", "Financial Services", "Platform Engineering", "Backup and DR", "Observability"]
language: "de"
hreflang_en: "/blog/2026/05/cloud-repatriation-tco-modeling-honest-numbers/"
companion_landing: "/de/loesungen/cloud-repatriation/"
faq:
  - q: "Warum ist der Vergleich der Cloud-Rechnung mit einem Hardware-Angebot keine gültige TCO?"
    a: "Weil beide Zahlen Unterschiedliches abdecken. Die Cloud-Rechnung bündelt Hardware, Rechenzentrum, Managed Services und einen Teil der Betriebsarbeit, ein Hardware-Angebot deckt nur die Server ab. Ein ehrliches Modell bepreist denselben Workload zweimal und führt auf beiden Seiten jeden Kostenposten: Egress, Commitments, ungenutzte Kapazität und Managed-Service-Aufschläge auf der Cloud-Seite; Hardware-Erneuerung, Rechenzentrum, Netzwerk, Storage-Replikation, Backup und DR, Personal, Plattform-Subscription und Migration auf der Zielseite."
  - q: "Kann ich den TCO-Rechner von Ænix für einen Ausstieg aus der Public Cloud verwenden?"
    a: "Nein. Der TCO-Rechner vergleicht On-Prem-Plattformen und behandelt Hardware und Rechenzentrum auf beiden Seiten als identisch, deshalb lässt er sie weg; die Public Cloud liegt außerhalb seines Umfangs. Für einen Cloud-Ausstieg bepreist der Cloud-Repatriation-Rechner einen Workload zweimal — Hyperscaler-Preise mit Ihren Rabatten gegenüber Cozystack auf eigener oder gemieteter Hardware, inklusive Strom, Colocation, Netzwerk und Betriebspersonal."
  - q: "Welche Annahmen sollte ein TCO-Modell zur Repatriierung einem Stresstest unterziehen?"
    a: "Die Dauerauslastung der Ziel-Hardware, das Wachstum der Workloads (es bestimmt, wann Sie Hardware kaufen und erneuern), das Egress-Volumen, den Rabatt, den Sie beim Hyperscaler tatsächlich erhalten, und den Betriebsaufwand für die neue Plattform. Weisen Sie für jedes Szenario den Break-even-Punkt und die Amortisation aus statt einer einzigen Prozentzahl."
  - q: "Sollte die Entscheidung für den gesamten Bestand auf einmal fallen?"
    a: "Nein. Eine TCO auf Portfolio-Ebene fällt oft nahezu neutral aus, während sich einzelne Workloads stark unterscheiden. Die größten Workloads mit konstanter Last tragen meist den Großteil der Kostenbilanz; elastische, kleine oder Hyperscaler-spezifische Workloads gehören oft in die Cloud. Ordnen Sie jeden Workload ein: jetzt zurückholen, später zurückholen oder bleiben lassen."
  - q: "Was kostet die Zielplattform mit Ænix?"
    a: "Cozystack ist Open Source unter Apache 2.0. Die Subscription für die Ænix Public Cloud Platform, die auch den Support für selbst betriebenes Cozystack abdeckt, beginnt bei 1.250 US-Dollar pro 10 Nodes und Monat bei jährlicher Abrechnung (Basic). Ænix Private Cloud Platform und Ænix AI Platform werden per RFP angeboten. Die Migration ist in den Rechnern mit indikativen 8.000 US-Dollar plus 140 US-Dollar pro VM angesetzt; das endgültige Angebot folgt nach dem Scoping."
quiz:
  title: "Wissens-Check: ehrliche TCO für Cloud Repatriation"
  questions:
    - q: "Was ist laut Artikel die richtige Vergleichseinheit in einem TCO-Modell zur Repatriierung?"
      options:
        - { text: "Die gesamte monatliche Cloud-Rechnung gegenüber einem Hardware-Angebot", correct: false }
        - { text: "Derselbe Workload, zweimal bepreist, mit jedem Kostenposten auf beiden Seiten", correct: true }
        - { text: "Der Listenpreis pro vCPU-Stunde gegenüber dem Preis pro physischem Core", correct: false }
        - { text: "Die Cloud-Ausgaben des Vorjahres gegenüber dem Hardware-Budget des nächsten Jahres", correct: false }
      explanation: "Der Artikel zeigt, dass Rechnung und Hardware-Angebot Unterschiedliches abdecken. Ein ehrliches Modell bepreist denselben Workload zweimal — als Hyperscaler-Workload zu Ihren tatsächlichen Konditionen und als Workload auf Hardware unter Ihrer Kontrolle — mit denselben Kostenposten auf beiden Seiten."
    - q: "Warum ist der TCO-Rechner von Ænix das falsche Werkzeug für einen Ausstieg aus der Public Cloud?"
      options:
        - { text: "Er deckt nur VMware-Umgebungen ab", correct: false }
        - { text: "Er ignoriert die Personalkosten", correct: false }
        - { text: "Er behandelt Hardware und Rechenzentrum auf beiden Seiten als identisch und klammert die Public Cloud aus", correct: true }
        - { text: "Er setzt die Migration mit null an", correct: false }
      explanation: "Der TCO-Rechner vergleicht On-Prem-Plattformen. Seine Methodik lässt Hardware und Rechenzentrum weg, weil sie auf beiden Seiten gleich sind, und führt die Public Cloud ausdrücklich als außerhalb des Umfangs. Ein Cloud-Ausstieg verändert genau diese Posten — dafür gibt es den Cloud-Repatriation-Rechner."
    - q: "Wie modelliert die Methodik des TCO-Rechners den Storage bei der Hardware-Dimensionierung?"
      options:
        - { text: "Brutto-Storage entspricht dem nutzbaren Storage", correct: false }
        - { text: "Brutto-Storage entspricht dem nutzbaren Storage mal Replikationsfaktor", correct: true }
        - { text: "Der Storage wird aus der Cloud-Rechnung abgeleitet", correct: false }
      explanation: "Die Dimensionierungskette der Methodik setzt den Brutto-Storage als nutzbare Kapazität mal plattformspezifischem Replikationsfaktor an, neben einer CPU-Überbuchung von 3:1, einer RAM-Zielauslastung von 85 % und N+1-Reserve. Wer die Replikation weglässt, unterschätzt die Zielkosten besonders leicht."
    - q: "Was sagt der Artikel über ein TCO-Ergebnis auf Portfolio-Ebene?"
      options:
        - { text: "Es ist die einzige Zahl, die der Vorstand braucht", correct: false }
        - { text: "Es fällt oft nahezu neutral aus, während sich einzelne Workloads stark unterscheiden", correct: true }
        - { text: "Es spricht immer für die Repatriierung", correct: false }
        - { text: "Es spricht immer für den Verbleib in der Cloud", correct: false }
      explanation: "Der Durchschnitt über den gesamten Bestand verdeckt die Entscheidung. Die größten Workloads mit konstanter Last tragen meist den Großteil der Kostenbilanz, elastische oder Hyperscaler-spezifische gehören oft in die Cloud — deshalb empfiehlt der Artikel die Einordnung pro Workload."
    - q: "Welches Ergebnis aus einer veröffentlichten Ænix-Fallstudie zitiert der Artikel für GPU-Workloads?"
      options:
        - { text: "GPUs auf einer souveränen Cloud waren rund fünfmal günstiger als im vorherigen Hyperscaler-Setup", correct: true }
        - { text: "Die GPU-Kosten sanken über alle Workloads um 95 %", correct: false }
        - { text: "Die GPU-Kosten blieben gleich, aber der Egress fiel weg", correct: false }
      explanation: "In der Fallstudie „Von der Public Cloud zu Bare Metal“ stellte eine SaaS-Plattform für akademisches Rechnen fest, dass GPUs auf einer souveränen Cloud rund fünfmal günstiger waren als im vorherigen Hyperscaler-Setup, unter Berücksichtigung der Marge des früheren Modells. Der Artikel betont, dass dies ein GPU-spezifisches Ergebnis ist und keine Zahl, die sich auf einen ganzen Bestand übertragen lässt."
---

Die meisten Business Cases für eine Repatriierung beginnen mit zwei Zahlen auf einer Folie: der monatlichen Cloud-Rechnung und einem Angebot für Server. Die zweite ist kleiner, die Folie sagt „zurückholen“ — und achtzehn Monate später fragt die Finanzabteilung, warum die Einsparungen nie in den Büchern angekommen sind.

Das Problem sind nicht falsche Zahlen. Sie beantworten unterschiedliche Fragen. Die Rechnung bündelt Hardware, Rechenzentrum, Managed Services und einen Teil der Betriebsarbeit in einer Zeile. Das Hardware-Angebot deckt das Blech ab. Beides zu vergleichen ist, als würde man eine Hotelrechnung mit dem Preis eines Bettes vergleichen.

Dieser Artikel behandelt die Struktur eines ehrlichen Modells — welche Kostenposten auf welche Seite gehören und welche Annahmen über das Ergebnis entscheiden. Eine beispielhafte Einsparquote enthält er bewusst nicht. Jede solche Zahl hängt von Ihren Workloads, Ihren Rabatten und Ihrem Team ab, und eine Prozentzahl aus dem Bestand eines anderen Unternehmens ist der schnellste Weg zu einer falschen Entscheidung.

## Einen Workload vergleichen, zweimal bepreist

Die Vergleichseinheit ist der Workload, nicht der gesamte Bestand. Nehmen Sie einen Service — seine vCPU und seinen RAM, Block- und Object Storage, die Managed-Datenbanken und Kubernetes-Cluster, die er nutzt, seine GPUs, seinen Egress und den Traffic zwischen Zonen — und bepreisen Sie ihn zweimal: einmal so, wie er heute läuft, zu den Konditionen, die Sie tatsächlich zahlen, und einmal so, wie er auf Hardware unter Ihrer Kontrolle laufen würde.

Genau so ist der [Cloud-Repatriation-Rechner](/de/cloud-rechner/) auf dieser Website aufgebaut. Er bepreist den Footprint zu Hyperscaler-Listenpreisen abzüglich Ihrer Commitment- und Enterprise-Rabatte und anschließend als Cozystack auf eigener oder gemieteter Hardware, inklusive Strom, PUE, Colocation, Netzwerk und des Betriebspersonals, das die Plattform braucht. Jeder Preis trägt Quelle und Datum, und das Ergebnis ist eine mehrjährige Einsparung mit dem Amortisationszeitpunkt der Migration statt einer Schlagzeilen-Prozentzahl. Sie können jeder Eingabe widersprechen — aber Sie sehen alle.

Wer denselben Workload zweimal bepreist, muss auf beiden Seiten dieselben Kostenkategorien ansetzen. Die meisten schlechten Modelle scheitern daran, dass eine Seite vollständig ist und die andere nicht.

## Die Cloud-Seite: was die Rechnung verbirgt

Die Rechnung ist die Zahl, die am leichtesten zu beschaffen und am leichtesten falsch zu lesen ist. Vier Posten verdienen eine eigene Zeile.

**Egress und Traffic zwischen Zonen.** Daten, die den Provider verlassen, und Daten, die zwischen Availability Zones fließen, werden nach Volumen abgerechnet. Diese Kosten verstecken sich in den Positionen einzelner Services und wachsen mit Backups, Observability-Pipelines und Replikation. Weisen Sie sie explizit aus; es ist zugleich der Posten, der sich beim Umzug am stärksten verändert.

**Commitments.** Reserved Instances und Savings Plans senken den Stückpreis nur für Kapazität, die Sie tatsächlich nutzen. Modellieren Sie den Rabatt, den Sie realisieren, nicht den aus dem Vertrag. Halten Sie auch die Ablaufdaten fest: Sie ändern die Summe nicht, entscheiden aber darüber, wann ein Workload umziehen kann, ohne Kapazität doppelt zu bezahlen. Der [Leitfaden zur Repatriierung](/de/blog/2026/05/reverse-cloud-migration-leitfaden/) beschreibt die Reihenfolge entlang dieser Fristen.

**Ungenutzte und überdimensionierte Ressourcen.** Instanzen, die größer sind als die Last oder laufen, während niemand sie nutzt, sind echte Ausgaben. Es sind zugleich Ausgaben, die [Cloud-Kostenoptimierung](/de/loesungen/cloud-kostenoptimierung/) beseitigen kann, ohne irgendetwas umzuziehen. Zählen Sie ehrlich: Wenn Right-Sizing am bisherigen Ort den größten Teil der Lücke schließt, ist das ein Ergebnis und kein Versagen des Modells.

**Managed-Service-Aufschlag und die Menschen drumherum.** Eine Managed-Datenbank oder ein Managed-Kubernetes-Service kostet mehr als die darunterliegende Compute-Leistung, nimmt Ihnen aber auch Betriebsarbeit ab. Bepreisen Sie, was diesen Service auf der Zielseite ersetzt — einen Managed Service aus dem Plattformkatalog oder eine Datenbank, die Ihr Team selbst betreibt —, statt den Posten zu streichen. Dasselbe gilt für Engineering-Zeit, die in Cloud-spezifische Infrastruktur fließt: IAM-Policies, Account-Struktur, Provider-Tooling. Ein Teil dieser Zeit wird nach dem Umzug frei, ein Teil wird durch Plattformarbeit ersetzt.

## Die Zielseite: die Posten, die im zweiten Jahr zuschlagen

Eine Schätzung für die Zielseite, die zu gut aussieht, lässt meist einen dieser Posten aus.

**Hardware und ihre Erneuerung.** Der Kaufpreis ist nur der Anfang. Bei einem Horizont von fünf Jahren sollten Sie prüfen, ob eine Erneuerung hineinfällt, und sie gegebenenfalls einpreisen. Dimensionieren Sie den Cluster sauber: Die [Methodik des TCO-Rechners](/tco-calculator/methodology/) zeigt eine Dimensionierungskette, die sich zu übernehmen lohnt — CPU-Überbuchung von 3:1, eine RAM-Zielauslastung von 85 %, Brutto-Storage gleich nutzbarer Kapazität mal Replikationsfaktor und N+1-Reserve für Hochverfügbarkeit von mindestens 15 %. Ohne Replikation oder Reserve fällt die Zahl der Nodes zu niedrig aus.

**Rechenzentrum und Netzwerk.** Strom multipliziert mit dem PUE, Colocation oder eigene Rechenzentrumsfläche, Uplinks und Bandbreite sowie der Traffic zwischen Standorten, wenn Sie mehr als einen betreiben.

**Backup und DR.** Eine zweite Kopie der Daten braucht irgendwo Kapazität, und ein zweiter Standort kostet ein zweites Rechenzentrum. Bepreisen Sie das Design, das Sie tatsächlich betreiben werden. Cozystack unterstützt gestreckte und standortübergreifende Layouts sowie Backup und Restore mit Runbooks; ein automatisches Failover zwischen Standorten bietet es nicht. Budgetieren Sie also den Betriebsablauf, nicht einen Knopf.

**Personal.** Dieser Posten wird meist geschätzt. Die Methodik hinter dem TCO-Rechner modelliert ihn als Engineering-Tage pro Monat — eine Basis von 0,25 Tagen pro Node und Monat für den Node-Betrieb, skaliert mit einem Orchestrierungsfaktor, plus Tage für jeden Service, den das Team selbst betreibt, etwa 0,75 Tage pro selbst betriebenem Kubernetes-Cluster und 0,5 Tage pro selbst betriebener Produktionsdatenbank. Das sind anpassbare Feldschätzungen von Ænix, aber entscheidend ist die Form: Der Betriebsaufwand skaliert mit den Nodes und mit dem, was Sie von Hand betreiben, nicht mit der Zahl der VMs. Ein Katalog von Managed Services verlagert Arbeit von Ihrem Team auf die Plattform.

**Plattform-Subscription.** Cozystack ist Open Source unter Apache 2.0, es gibt also keine Lizenz pro Core oder pro VM. Bezahlt werden Support und kommerzielle Module. Die Subscription für die Ænix Public Cloud Platform — dieselben Stufen decken den Support für selbst betriebenes Cozystack ab — beginnt bei 1.250 US-Dollar pro 10 Nodes und Monat bei jährlicher Abrechnung (Basic); die vollständige Übersicht finden Sie auf der [Preisseite](/de/preise/). [Ænix Private Cloud Platform](/de/produkte/private-cloud-platform/) und [Ænix AI Platform](/de/produkte/ai-platform/) werden per RFP angeboten.

**Migration und Parallelbetrieb.** Die Rechner setzen für die Migration indikativ einmalig 8.000 US-Dollar plus 140 US-Dollar pro VM an; das endgültige Angebot folgt nach dem Scoping. Während des Umzugs bezahlen Sie beide Umgebungen. Der TCO-Rechner bepreist diesen Parallelbetrieb standardmäßig nicht, Sie müssen ihn also selbst ergänzen.

## Den richtigen Rechner für die Frage wählen

Zwei Rechner auf dieser Website wirken passend, beantworten aber unterschiedliche Fragen. Der [TCO-Rechner](/tco-calculator/) vergleicht On-Prem-Plattformen — VMware, Nutanix, OpenShift, Proxmox, OpenStack und weitere gegenüber Cozystack — und lässt Hardware und Rechenzentrum weg, weil sie auf beiden Seiten identisch sind. Seine eigene Methodik führt die Public Cloud als außerhalb des Umfangs. Wer damit einen Cloud-Ausstieg begründet, lässt genau die Posten weg, die sich ändern.

Für einen Cloud-Ausstieg nutzen Sie den [Cloud-Repatriation-Rechner](/de/cloud-rechner/) für einzelne Workloads und das [Cloud-Repatriation-TCO-Worksheet](/de/ressourcen/cloud-repatriation-tco-worksheet/) für den gesamten Bestand. Das Worksheet führt durch den aktuellen Cloud-Zustand, die Zielarchitektur, die Einordnung pro Workload, einen Fünfjahresverlauf mit Break-even-Punkt und eine Entscheidung zwischen Bleiben, teilweiser und vollständiger Repatriierung.

Eine Gewohnheit des TCO-Rechners lohnt sich unabhängig vom Werkzeug: Seine Methodik veröffentlicht eine Plausibilitätstabelle, die auch die Szenarien enthält, in denen Cozystack verliert. Ein Modell, das Ihnen keinen verlorenen Fall zeigen kann, wurde nicht getestet.

## Die Annahmen prüfen, die das Ergebnis bewegen

Eine einzelne TCO-Zahl ist eine Prognose, aus der man die Unsicherheit entfernt hat. Rechnen Sie mindestens drei Szenarien und beobachten Sie, welche Eingaben das Ergebnis kippen.

**Auslastung.** Eigene Hardware kostet dasselbe, ob sie ausgelastet oder halb leer läuft. Pendelt sich Ihr Ziel-Cluster bei einer niedrigeren Dauerauslastung ein als angenommen, steigen die Kosten pro Workload entsprechend.

**Wachstum.** Schnelles Wachstum zieht Hardware-Käufe und Erneuerungen nach vorn, langsames lässt Kapazität ungenutzt. Beides verändert den Cashflow-Verlauf.

**Egress-Volumen.** Weil Egress mit Backups, Analytics und Kunden-Traffic wächst, trifft ein Prognosefehler hier die Cloud-Seite stärker als jeder andere Posten.

**Rabatte.** Wenn Sie bei der Verlängerung einen besseren Enterprise-Rabatt aushandeln können, rechnen Sie das Modell damit neu. Die Repatriierung muss sich gegen Ihren besten realistischen Cloud-Preis durchsetzen, nicht gegen den Listenpreis.

**Personal.** Variieren Sie den Betriebsaufwand. Wenn der Business Case nur trägt, solange die Plattform fast keine Engineering-Zeit braucht, trägt er nicht.

Weisen Sie für jedes Szenario den Break-even-Punkt und die Amortisation aus. Ein Business Case, der sich in jedem Szenario amortisiert, ist belastbar; einer, der sich nur im optimistischen Szenario rechnet, ist eine Verhandlungstaktik.

## Pro Workload entscheiden

Auf Portfolio-Ebene fällt das Ergebnis oft nahezu neutral aus, und dieser Durchschnitt verdeckt die Entscheidung. Die größten Workloads mit konstanter Last tragen meist den Großteil der Kostenbilanz. Kleine Services, elastische Lastspitzen und alles, was tief in die proprietären Dienste eines Providers eingebaut ist, kosten beim Umzug oft mehr, als sie einsparen.

Ordnen Sie deshalb jeden Workload ein — jetzt zurückholen, später zurückholen oder bleiben lassen — und sortieren Sie nach Nettoertrag und Risiko. Eine teilweise Repatriierung ist ein häufiges und legitimes Ergebnis.

GPU-Workloads verdienen eine eigene Zeile, weil sich ihre Wirtschaftlichkeit von allgemeiner Compute-Leistung unterscheidet. Zwei veröffentlichte Fallstudien zeigen die Bandbreite. In [Von der Public Cloud zu Bare Metal](/de/case-studies/multicloud-academic-gpu/) verlagerte eine SaaS-Plattform für akademisches Rechnen ihren Betrieb von einem Hyperscaler auf eigenes Bare Metal mit Cozystack; GPUs auf einer souveränen Cloud waren rund fünfmal günstiger als im vorherigen Setup, unter Berücksichtigung der Marge des früheren Modells. In [8xH100-Inferenz auf eigenem Bare Metal](/de/case-studies/bare-metal-gpu-inference/) holte ein Anbieter einer mobilen App seine Inferenz aus einer stundenweise gemieteten GPU-Cloud und berichtet von einer zwei- bis dreifach besseren GPU-Effizienz. Beides sind GPU-Workloads mit konstanter Last; keine der beiden Zahlen lässt sich auf einen ganzen Bestand übertragen.

## Wann sich die Repatriierung nicht lohnt

Rechnen Sie damit, dass das Modell „bleiben“ sagt. Das ist die wahrscheinliche Antwort, wenn die Workloads elastisch und spitzenlastig sind, wenn der Bestand klein ist und das Team aus einer Handvoll Leuten besteht, wenn die Architektur von Diensten abhängt, die es nur beim Hyperscaler gibt, oder wenn niemand die Zielplattform anschließend betreiben wird. In diesen Fällen optimieren Sie die Cloud-Ausgaben und prüfen das Modell bei der nächsten Verlängerung der Commitments erneut.

## Das Modell durchrechnen

Beginnen Sie mit dem [Worksheet](/de/ressourcen/cloud-repatriation-tco-worksheet/) und dem [Cloud-Repatriation-Rechner](/de/cloud-rechner/) und füllen Sie beide gemeinsam mit Finanzbereich und Platform Engineering aus — jede Seite erkennt die blinden Flecken der anderen. Wenn Sie eine zweite Meinung samt Zielarchitektur wünschen, bearbeitet das [Platform Readiness Assessment](/de/dienstleistungen/platform-readiness-assessment/) den Kosten-Workstream zum Festpreis in 14 oder 28 Tagen und endet mit einer Rangfolge pro Workload. Details zur Zusammenarbeit finden Sie auf der Seite [Cloud Repatriation](/de/loesungen/cloud-repatriation/); die Open-Source-Plattform selbst ist unter [cozystack.io](https://cozystack.io) dokumentiert — das CNCF-Sandbox-Projekt, das Ænix geschaffen hat und mitpflegt.
