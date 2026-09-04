---
title: "Fokus auf heute: Wie wir aeman gebaut haben, ein Tagesboard für Entwickler auf Basis von GitHub Projects"
description: "Wie Aenix aeman gebaut hat: ein Open-Source-Tagesboard für Entwickler, das GitHub Projects v2 als einzigen Speicher und eine Kubernetes-artige Watch-API nutzt."
date: "2026-07-24"
author: "Andrei Kvapil"
type: "article"
topics: ["Platform Engineering", "Developer Tools", "Open Source", "Kubernetes", "Cozystack"]
language: "de"
cover_image: "https://cdn-images-1.medium.com/max/1200/1*C1MOA-YyrnseDO5ATwQXTQ.png"
source_url: "https://blog.aenix.io/focus-on-today-how-we-built-aeman-a-daily-planning-board-for-engineers-on-top-of-github-projects-c59da4451b8b"
hreflang_en: /blog/2026/07/focus-on-today-how-we-built-aeman-a-daily-planning-board-for-engineers-on-top-of-github-projects/
---

---

Mein Name ist Andrei Kvapil, und ich bin Gründer von Ænix — wir bauen Cozystack, eine Open-Source-Cloud-Plattform, und wir helfen Unternehmen beim Aufbau ihrer Infrastruktur. Wir sind ein vollständig remote arbeitendes Unternehmen: 15 Personen, mehrere Teams (zwei Reliability-Teams, ein Entwicklungsteam, Marketing, Backoffice und weitere), verteilt über mehrere Zeitzonen. Angefangen haben wir in GitHub Projects, aber in dem Moment, in dem wir zu wachsen begannen, sind wir direkt an die Grenzen unseres eigenen Prozesses gestoßen: Aufgaben über Boards und Chats verstreut, das halbe Morgen-Sync damit verbracht herauszufinden, was überhaupt läuft, und ungeplante Arbeit, die ganze Tage auffraß, ohne irgendwo eine Spur zu hinterlassen.

Dieser Artikel erzählt, wie wir das mit aeman gelöst haben — einem Werkzeug, das wir selbst gebaut und kürzlich [als Open Source veröffentlicht](https://github.com/aenix-io/aeman) haben. Ich muss aber weiter vorne anfangen.

![aeman-Board](https://cdn-images-1.medium.com/max/800/1*C1MOA-YyrnseDO5ATwQXTQ.png)

### Woher die Idee kommt

Vor Jahren habe ich in einem anderen Unternehmen gearbeitet, und dort gab es zwei interne Systeme mit den schönen Namen Ford und Nixon. Kollegen haben ausführlich darüber geschrieben, deshalb hier die Kurzfassung. Es sind Boards für die Verfolgung von Tagesaufgaben, auf denen ein Entwickler genau sieht, woran er heute arbeitet. Kein Backlog über drei Monate, keine hundert Kanban-Spalten — Ihr Tag, und sonst nichts. Über Jahre hat dieses System viele Remote-Teams effektiv arbeiten lassen und die Infrastruktur vieler Kunden am Laufen gehalten.

Ich will ehrlich sein: Der Prozess hinter aeman ist nicht vollständig meine Idee. Ich habe ein funktionierendes System zur Prozesssteuerung übernommen, das ich bei meinem früheren Arbeitgeber gesehen hatte, und es auf unsere eigenen Prozesse und Aufgaben übertragen. Unser Board zwingt uns heute dazu, uns auf das Wichtigste zu konzentrieren — auf die geschäftlichen Aufgaben.

Anders als Trello geht dieses Modell davon aus, dass eine Person an einem einzigen Tag an Aufgaben in mehreren Teams arbeiten kann. Und der Tagesplan darf nicht zur Aufgabenwand werden. Wenn ein Entwickler 6 bis 10 Aufgaben eingeplant hat, realistisch aber nur 3 oder 4 abschließen kann, bleibt bei ihm ein dauerhaftes Gefühl von Schuld zurück, während das Management ein falsches Bild von hoher Auslastung bekommt. Außerdem fangen Menschen an, ständig zwischen Aufgaben zu wechseln, und das Gehirn greift naturgemäß nach denen, die sich leichter abschließen lassen. Schwere Aufgaben bleiben dann lange unangetastet liegen. Der Tagesplan muss also kurz und ehrlich sein.

### Warum kein fertiges Werkzeug?

Ich habe versucht, einen solchen Prozess auf vorhandenen Werkzeugen aufzubauen: Trello, Asana, Notion, GitHub Projects — mit unterschiedlichem Erfolg. Notion kam dem am nächsten, aber ich war nicht bereit, das ganze Team allein wegen der Boards in noch ein weiteres System zu ziehen und dafür zu bezahlen. Und mit der Zeit wuchs das Board unweigerlich, bis es nicht mehr auf einen Bildschirm passte.

GitHub Projects erwies sich als die tragfähigste Option. Es ist kostenlos, bietet eine bequeme API und bringt bereits alles mit, was man braucht: Sprints, Prioritäten, Status und weitere Entitäten. Es lässt sich außerdem gut erweitern. Deshalb haben wir lange damit gearbeitet.

Ziemlich schnell wurde aber klar, dass das Problem nicht in den Fähigkeiten des Werkzeugs lag, sondern in der UX. Es kostet viel zu viele zusätzliche Schritte, eine Aufgabe anzulegen, sie jemandem zuzuweisen und die nötigen Felder auszufüllen. Und einen angenehmen Tagesprozess haben wir um GitHub Projects herum nie hinbekommen. Sprints gibt es zwar, aber sie erwiesen sich als zu umständlich: Man kann den laufenden Sprint nicht in einem Schritt schließen und den nächsten mit den übernommenen offenen Aufgaben starten, und man kann eine Aufgabe nicht schnell auf „später“ schieben, damit sie aus dem Blick verschwindet und nicht länger um die Aufmerksamkeit des Entwicklers konkurriert.

Mit der Zeit zeigte sich ein weiteres Problem. Bei jedem Sync schauten wir faktisch auf eine einzige Spalte — **In Progress**. Dort passierte die ganze Arbeit, während die Karten in den anderen Spalten langsam zu einem Aufgabenfriedhof wurden: noch auf dem Board, aber nicht mehr Teil des Tagesprozesses und ohne Bewegung. GitHub Projects erwies sich als ausgezeichneter Ort, um Aufgaben abzulegen, und als schwacher, um den Tagesfokus eines Teams zu steuern.

**Genau deshalb habe ich, als ich mit dem Bau von aeman anfing, GitHub Projects als Backend des neuen Systems gewählt und die Oberfläche und den Workflow darauf aufgesetzt.**

### Die Grundidee: genau die Karten, die Sie heute brauchen

Das Ziel von aeman ist, die heute relevanten Aufgaben sichtbar zu machen und den Entwickler darauf zu fokussieren. Idealerweise verlässt ein Entwickler das Morgen-Sync mit einer Liste von Aufgaben, an denen er an diesem Tag **definitiv** arbeiten wird. Alles andere wandert auf morgen oder auf nächste Woche — und verschwindet physisch vom Board, damit es nicht länger ins Auge fällt.

Die zweite Idee: Ungeplante Arbeit muss sichtbar sein. Jeder kennt Tage, die von einem plötzlichen Incident oder einer dringenden Anfrage aus einem Nachbarteam aufgefressen werden. Üblicherweise wird diese Arbeit nirgends festgehalten, und am Ende des Sprints kann niemand erklären, wo die Zeit geblieben ist. In aeman hat sie eine eigene Zone: Sie tragen sie im Nachhinein als eine Karte ein, und der Tag verschwindet nicht mehr spurlos (Screenshots weiter unten). Beim täglichen Sync lässt sie sich dann besprechen und in den geplanten Block verschieben.

Die dritte Idee: Arbeit in mehreren Teams ist eine Eigenschaft des Modells, kein Filter. In einem kleinen Unternehmen kann ein Entwickler an Aufgaben in mehreren Teams arbeiten — das gilt besonders für Gründer, die ohnehin alles gleichzeitig jonglieren. In aeman sind Teams eine Dimension des Boards: Ein Sprint wird je Team geführt, jedes Team hat seinen eigenen Wochenplan, und das Me-Board sammelt die Karten eines Tages aus allen Teams des Entwicklers auf einmal. Sie müssen nicht zwischen Boards springen, um Ihren Tag zu sehen. Eine Aufgabe wandert außerdem frei zwischen Personen und Teams — sie kann von einem Tag auf den anderen die Zuständigkeit wechseln, und das ist ein normaler Arbeitsmodus, dem das Werkzeug nicht im Weg stehen sollte.

Und die vierte Idee: Ein Team-Lead braucht ein Werkzeug, das den Status jeder Aufgabe innerhalb einer Minute zeigt, ohne Leute mit Rückfragen aus der Arbeit zu reißen.

Philosophisch steht aeman Todoist näher als einem klassischen Kanban-Board. Karten sind bewusst kurz: Im Normalmodus sehen Sie nur den Titel, die Beschreibung öffnet sich per Doppelklick. Die Beschreibung nimmt Links in freier Form auf — Pull Requests, GitHub-Issues, Telegram-Chats, was auch immer — und aeman erkennt sie automatisch und zeigt eine Schaltfläche, um direkt dorthin zu springen. Das hält den Hauptbildschirm sauber, und eine weitere abgeschlossene Aufgabe erzeugt jenes befriedigende Gefühl, das jeder kennt, der einen guten Task-Manager benutzt.

### Wie es aussieht

### Das Me-Board: Ihr Tag

Ein Entwickler öffnet aeman morgens und sieht seinen Tag: Karten, gruppiert in vier farbige Zonen. Das ist nicht die Eisenhower-Matrix, die Aufteilung ist eine andere:

- **Rot** — *urgent*, muss heute erledigt werden
- **Grau** — *planned*, gewöhnliche geplante Arbeit, die auch länger als einen Tag dauern kann
- **Gelb** — *unplanned*, was im Lauf des Tages hereinkam
- **Grün** — *nice to have*, erst dann, wenn alles andere fertig ist

Das Board zieht Karten aus allen Teams des Entwicklers, also aus dem jeweils aktuellen Sprint jedes Teams. Die Teamauswahl am oberen Rand engt die Liste auf ein einzelnes Team ein oder blendet alle Karten aus, die erledigt, blockiert oder im Review sind — es bleibt nur, woran Sie hier und jetzt arbeiten können, wenn Deep Work ansteht. Jede Karte hat einen Fortschrittsregler von 0 bis 100 % in Schritten von 10 % (den Fortschrittsbalken auf „fertig“ zu ziehen, macht erstaunlich viel Freude), eine Stufe (Review / Locked / Recurrent / Done), die den Balken umfärbt, einen Zähler für die Tage in Bearbeitung sowie Links zu einem Issue oder einem PR. Rechts liegt ein Notizbereich: ein persönliches Tagesprotokoll, in dem Sie während der Arbeit festhalten können, was anfällt. So müssen Sie beim nächsten Standup nicht im Gedächtnis kramen — Sie überfliegen die Notizen und berichten, was Sie getan haben. Notizen leben im Kontext des Tages; morgen ist das Board leer, aber Sie können jederzeit einen Tag zurückgehen und sie noch einmal lesen.

![Das Me-Board in aeman](https://cdn-images-1.medium.com/max/800/1*t7GSMyohBoTEF7Eqaq8yJg.png)

### Das Team-Board: das ganze Team auf einen Blick

Die Sicht des Team-Leads: ein Raster aus Personen und Zonen für einen ausgewählten Tag. Spalten sind die Entwickler mit ihren Avataren, Zeilen dieselben farbigen Zonen. Sie sehen sofort, wer woran arbeitet, wo es brennt und wer überlastet ist. Der Team-Lead legt Karten auch von hier aus an: ein paar Klicks, und eine Aufgabe ist erstellt, zugewiesen und priorisiert.

![Das Team-Board in aeman](https://cdn-images-1.medium.com/max/800/1*4bAxYXg2i80DqZ2N3hz5Bg.png)

Im Me-Modus kann der Team-Lead außerdem in die Rolle eines Entwicklers schlüpfen (Schaltfläche **View as**) — das Board mit dessen Augen ansehen und bei Bedarf aufräumen.

### Tagessprints und Carry-over

Unsere Sprints sind kurz — ein Tag — und sie zählen **vorwärts**, nicht rückwärts. Im Morgen-Sync bespricht das Team zuerst, was gestern fertig geworden ist, und dann drückt der Team-Lead auf **Carry over**: Jede unerledigte Karte wandert in den neuen Sprint (heute), erledigte bleiben in der Historie von gestern. Wiederkehrende Aufgaben werden automatisch neu angelegt. Das ist hier die Tagesplanung, und sie dauert Minuten.

Ergibt die Planung, dass eine Aufgabe heute definitiv nicht stattfindet, gibt es die Schaltflächen **+1 day** und **+1 week**: Die Karte verschwindet bis zu ihrem Tag vom Board, und es geht nichts an Historie verloren. Ist der Tag gekommen, taucht sie wieder auf.

![Carry-over in aeman](https://cdn-images-1.medium.com/max/529/1*ADBOkMVY8IheKZ_g6ZOoVQ.png)

### Der Wochenplan

Hier sind wir von der ursprünglichen Idee abgewichen und haben angefangen, unseren eigenen Workflow auf das entstandene Werkzeug zu übertragen.

Die Gründer und ich haben die Woche des Teams früher geplant, indem wir eine neue Liste von Wochenaufgaben in Google Sheets geschrieben und jedem Team eine Nachricht mit dem „Fokus der Woche“ über Slack geschickt haben. Auch dieser Prozess ist inzwischen in aeman umgezogen.

Unter dem Team-Raster liegt der Wochenplan: die geschäftlichen Aufgaben des Teams für die Woche, aufgeteilt in zwei Bahnen, „bis Mittwoch“ und „bis Freitag“. Einmal pro Woche legen die Gründer dort Aufgaben ab, und die Aufgaben warten auf ihren Einsatz. Der Team-Lead zieht eine Plankarte auf einen Entwickler; sie erscheint auf dessen Tagesboard und bleibt zugleich mit einer farbigen Markierung im Plan. Ein gemeinsamer Fortschrittsbalken zeigt, wie das Team in der Woche steht, und das wöchentliche **Carry over** verschiebt alles noch Offene in die nächste Woche.

![Der Wochenplan in aeman](https://cdn-images-1.medium.com/max/800/1*InhqRG9OL-5I0VeCIN0UXA.png)

### Reviews, Teilaufgaben und das Aktivitätsprotokoll

Eine Aufgabe ins Review zu schicken erzeugt eine verknüpfte Karte für den Reviewer, mit einer Rückkopplung: Solange das Review offen ist, steht das Original auf der Stufe Review, und sobald der Reviewer seine eigene Karte auf 100 % bringt, wird das Original automatisch freigegeben. Große Aufgaben zerfallen in Teilaufgaben, deren Fortschritt in die übergeordnete Karte einfließt. Jede Aktion auf dem Board wird in das Aktivitätsprotokoll der Karte geschrieben, sodass sich ihre gesamte Historie im Nachhinein rekonstruieren lässt: wer sie verschoben hat, wann sich der Fortschritt geändert hat und warum sie in einem anderen Sprint gelandet ist.

### Ein Tag mit aeman

So sieht der ganze Ablauf aus:

1. **Morgen-Sync.** Wir öffnen das Team-Board von gestern, der Team-Lead teilt seinen Bildschirm, und wir gehen die Karten durch: was fertig ist, was hängt, Person für Person, wobei der Lead die Status unterwegs korrigiert. Dann drückt er **Carry over**, und alles Unerledigte wandert in den heutigen Tag. Anschließend besprechen wir das Neue: Der Lead legt Karten im Gespräch an und verteilt sie auf Personen und Zonen.
2. **Der Tag.** Alle arbeiten von ihrem eigenen Me-Board aus. Kommt etwas Dringendes herein — eine Karte in die gelbe Zone. Ist etwas blockiert — Stufe Locked, und der Lead sieht es. Der Fortschritt wandert nebenher mit; Gedanken und Erkenntnisse landen in den Notizen des Tages.
3. **Fertig** — die Karte steht auf 100 %, Stufe Done. Braucht sie ein Review, dann **Send to review**, und sie erscheint beim Reviewer.
4. **Morgen** wiederholt sich das Ganze.

Jedes Board ist **live**: Änderungen von Kolleginnen, Kollegen und KI-Agenten erscheinen auf allen Bildschirmen in etwa einer Sekunde, ganz ohne Neuladen. Wie das funktioniert, steht weiter unten.

### Unter der Haube

Jetzt der Teil, für den das Engineering-Publikum gekommen ist.

### GitHub Projects v2 als einziger Speicher

aeman hat überhaupt keine eigene Datenbank. Jede Karte ist ein Item auf einem GitHub-Projects-Board, und jedes Feld — Zone, Fortschritt, Sprint, Wochenplan — ist ein gewöhnliches Projektfeld. aeman legt die benötigten Felder sogar bedarfsgesteuert an: Richten Sie es auf ein beliebiges leeres Projekt, und die erste Änderung erzeugt, was fehlt. Man könnte sagen, aeman ist eine spezialisierte Sicht auf ein GitHub-Board: Dasselbe Board öffnet sich in der nativen Oberfläche von GitHub, die Daten gehören immer Ihnen, und Sie können sich jederzeit von aeman verabschieden, ohne irgendetwas migrieren zu müssen.

![Dasselbe Board in der Oberfläche von GitHub Projects](https://cdn-images-1.medium.com/max/800/1*B5CY3zi_iZz2AnBQJ3TV6w.png)

### Eine API im Kubernetes-Stil

Die API von aeman ist bewusst nach denselben Prinzipien gebaut wie die Kubernetes-API — einem Muster, das sich für die Synchronisation verteilten Zustands bewährt hat. Jede Entität — Card, Sprint, Ordering, Presence — ist eine eigene Ressource mit den vertrauten Feldern kind, metadata und spec.

Der Client folgt dem bekannten Schema **list + watch**. Er holt zunächst einen vollständigen Snapshot des Boards, öffnet dann einen WebSocket und empfängt einen Strom von ADDED-, MODIFIED- und DELETED-Ereignissen. Nach einer vollständigen Resynchronisation sendet der Server einen speziellen Sync-Frame, der signalisiert, dass der lokale Zustand vollständig aktuell ist.

Im Ergebnis arbeitet jeder geöffnete Browser-Tab wie ein Kubernetes-Informer mit eigenem lokalem Cache. Jede Änderung durch andere Nutzer oder durch einen KI-Agenten erscheint auf allen offenen Bildschirmen in etwa einer Sekunde, und die eigenen Änderungen werden Ihnen nicht zurückgespiegelt. GET /api/v1 liefert einen maschinenlesbaren Katalog aller verfügbaren Ressourcen und Endpunkte, sodass Clients und KI-Agenten die Form der API nicht vorab kennen müssen.

### Die GitHub-API ist langsam. Was tun?

Das wichtigste technische Problem des Projekts: GraphQL-Mutationen bei GitHub brauchen Hunderte von Millisekunden, mitunter ganze Sekunden; Lastspitzen laufen in sekundäre Rate Limits; und — Überraschung — die Read-Replicas von GitHub hinken den Schreibvorgängen um mehrere Sekunden hinterher. Schreibt man direkt durch, wird die Oberfläche zur Diaschau: Regler bewegen, warten; Karte ziehen, warten.

Schreibvorgänge in aeman folgen deshalb einem **Write-behind**-Schema, und der Nutzer wartet nie auf GitHub. Jede Änderung wird sofort auf den Server-Cache angewendet, ist auf allen offenen Boards unmittelbar sichtbar und geht erst danach asynchron zu GitHub. Schreibvorgänge laufen über eine Hintergrundwarteschlange mit Rate Limiting und automatischen Wiederholungen bei transienten Fehlern, um den Rate Limits der GitHub-API aus dem Weg zu gehen.

Die Warteschlange kann aufeinanderfolgende Änderungen zusammenfassen, ganz ähnlich wie die DeltaFIFO in Kubernetes. Ändert ein Nutzer dasselbe Kartenfeld mehrfach hintereinander, geht nur der letzte Wert an GitHub. Für Karteninhalte gilt eine andere Regel: Text geht niemals verloren. Bearbeitet ein Nutzer eine Beschreibung oder ergänzt Notizen in schneller Folge, führt die Warteschlange sie zu einer finalen Fassung zusammen und schickt sie in einer einzigen Anfrage. Bis der Schreibvorgang bestätigt ist, existieren neue Notizen unter temporären Bezeichnern, die anschließend automatisch gegen die echten getauscht werden.

Scheitert ein Schreibvorgang auch nach allen Wiederholungen, benachrichtigt der Server alle verbundenen Clients und liest den Board-Zustand erneut aus GitHub. GitHub bleibt die einzige Quelle der Wahrheit. Beim Herunterfahren wartet aeman zunächst, bis die Warteschlange leergelaufen ist, damit bereits gegenüber dem Nutzer bestätigte Änderungen nicht verloren gehen.

GitHub garantiert nicht, dass eine Änderung in dem Moment lesbar ist, in dem sie geschrieben wurde. Manchmal liefert die API unmittelbar nach einem erfolgreichen Schreibvorgang noch eine Weile den alten Zustand zurück. Dadurch könnte ein Nutzer sehen, wie eine gerade verschobene Karte zurückspringt, eine gelöschte Karte wieder auftaucht oder eine neue an der falschen Stelle landet. Um das zu vermeiden, behandelt aeman die eigenen jüngsten Schreibvorgänge für ein kurzes Zeitfenster als vertrauenswürdiger als frische Daten von GitHub. Sobald GitHub den aktuellen Zustand zurückliefert, schaltet das System automatisch wieder darauf um. Im Ergebnis sieht der Nutzer nie, wie die Oberfläche zurückspringt.

### Kommentare und Aktivitätsprotokoll

Auch Notizen und Änderungshistorie liegen in GitHub, ohne separate Datenbank. Bei Entwurfskarten steht das Protokoll direkt im Body des Issues, hinter einer speziellen Markierung `<!-- aeman:log -->`. Ist eine Karte mit einem bestehenden Issue oder Pull Request verknüpft, werden Notizen zu gewöhnlichen GitHub-Kommentaren und sind für alle in der Diskussion sichtbar.

Jede Aktion auf dem Board — eine Karte anlegen, den Fortschritt ändern, zwischen Sprints verschieben, ins Review schicken und so weiter — hält der Server als maschinenlesbare Ereigniszeile fest. Damit Abonnenten nicht unter Dutzenden Benachrichtigungen begraben werden, sammeln sich all diese Ereignisse in einem einzigen Protokollkommentar, der nach und nach ergänzt wird. Das Protokoll ist auf die letzten 200 Ereignisse begrenzt, Notizen von Nutzern werden nie gelöscht.

Das Ergebnis ist eine vollständige Änderungshistorie für jede Karte: wer sie wann verschoben hat, wie sich der Fortschritt entwickelt hat und warum sie in dem einen oder anderen Sprint gelandet ist. Dieses Protokoll ist nicht nur für die Nachvollziehbarkeit nützlich, sondern auch als Datenquelle für Statistiken und Kennzahlen.

### Ein austauschbares Backend

aeman war von Anfang an für ein austauschbares Backend ausgelegt. Heute liegen die Karten in GitHub Projects, das System selbst ist aber nicht an GitHub gebunden. Die gesamte Interaktion mit dem Speicher liegt hinter einem Backend-Interface, sodass die Unterstützung eines neuen Backends darauf hinausläuft, genau dieses eine Interface zu implementieren.

In künftigen Iterationen möchte ich ein Git-Backend ergänzen, das Karten als einfache Dateien im Repository ablegt. Weder die Oberfläche noch die Geschäftslogik der Anwendung müssen sich dafür ändern.

Die Pakete unter pkg/ lassen sich außerdem als gewöhnliche Go-Bibliothek verwenden, womit Sie die Board-Engine in Ihr eigenes Werkzeug einbetten können. Mehr dazu steht in docs/embedding.md.

### MCP für KI-Agenten

Dieselbe Binärdatei kann auch als MCP-Server laufen. Damit werden Claude und andere KI-Agenten zu vollwertigen Teilnehmern des Prozesses: Sie legen Karten an und verschieben sie, hinterlassen Notizen, führen den Carry-over zwischen Sprints aus und erledigen weitere Operationen.

Es gibt keine separate API für KI und keine Sonderrechte. Jede Aktion läuft durch dieselbe Domänenschicht wie eine menschliche Aktion, mit demselben Vertrag und denselben Prüfungen, und die Änderungen sind für alle sofort sichtbar.

Neben dem lokalen Modus bietet aeman einen öffentlich erreichbaren MCP-Server. Entwickler können KI-Clients anbinden, ohne lokal etwas zu installieren, und direkt aus Claude Code und anderen KI-Agenten heraus mit ihren Aufgaben arbeiten.

![aeman, gesteuert von einem KI-Agenten über MCP](https://cdn-images-1.medium.com/max/800/1*VAAJ0kR7KdjF_2OnIgHpnQ.png)

### So probieren Sie es aus

Am einfachsten probieren Sie aeman lokal mit Ihrem eigenen GitHub-Token aus.

```bash
gh auth login # die Scopes project und repo werden benötigt
git clone https://github.com/aenix-io/aeman
cd aeman
make build
./aeman serve
```

Der Browser öffnet sich automatisch unter http://127.0.0.1:8765. Als Board können Sie jedes beliebige GitHub-Projekt verwenden — am besten ein neues, leeres. aeman legt bei der ersten Änderung alle benötigten Felder selbst an.

Für die Teamarbeit gibt es einen Mehrbenutzermodus. Das Repository bringt eine fertige docker-compose.yml mit, die Anmeldung über eine GitHub-OAuth-App wird unterstützt, und jeder Nutzer arbeitet mit seinem eigenen GitHub-Token. Eine ausführliche Anleitung steht in docs/deploy.md.

### Wo wir gelandet sind

Das gesamte Unternehmen lebt inzwischen seit einigen Wochen auf aeman. Produktmanager und Team-Leads haben den neuen Planungsansatz schnell angenommen, wobei es — wie bei jedem neuen Werkzeug — auch Skepsis gab. Der wichtigste Effekt war aber ein anderer: Morgens weiß jeder Entwickler, woran er heute arbeiten wird, ungeplante Arbeit ist nicht länger unsichtbar, und die täglichen Syncs sind sehr viel konstruktiver und fokussierter geworden.

Das Projekt ist Open Source unter der Apache-2.0-Lizenz und auf GitHub verfügbar: [github.com/aenix-io/aeman](https://github.com/aenix-io/aeman).

Wenn Sie aeman ausprobieren, freue ich mich über jede Rückmeldung, über Berichte zu Problemen, auf die Sie stoßen, und über Ihre Geschichten dazu, wie Planung bei Ihnen funktioniert.

---

Dieser Beitrag ist eine deutsche Fassung des Artikels [Focus on today: how we built aeman, a daily planning board for engineers on top of GitHub Projects](https://blog.aenix.io/focus-on-today-how-we-built-aeman-a-daily-planning-board-for-engineers-on-top-of-github-projects-c59da4451b8b), zuerst erschienen bei [Ænix](https://blog.aenix.io) auf Medium.
