---
title: "Ænix Billing — minutengenaue Verbrauchsabrechnung für Managed PostgreSQL, Redis, Kafka und ClickHouse auf Cozystack"
description: "Ænix Billing rechnet Managed Postgres, Redis, Kafka und ClickHouse auf Cozystack minutengenau nach CPU, Memory und Speicher ab — Kubernetes-native API."
slug: "aenix-billing-pay-per-minute-managed-services-cozystack"
date: "2026-05-13"
author: "Timur Tukaev"
type: "announcement"
topics: ["Cozystack", "Kubernetes", "Multi-tenancy", "Platform Engineering", "Billing"]
language: "de"
companion_landing: "/de/produkte/aenix-platform/isp-edition/"
companion_label: "ISP Edition ansehen →"
cover_image: ""
---

{{< placeholder-image width="1200" height="630" label="Ænix Billing — Cover-Bild (1200×630)" >}}

**Sie liefern einem Tenant einen Managed-Postgres- oder ClickHouse-Cluster in zwei Minuten aus. Jetzt müssen Sie abrechnen — minutengenau, aufgeschlüsselt nach CPU, Memory und Speicher, cent-genau abstimmbar. AWS RDS kann das. GCP kann das. Auf eigener Hardware? Bisher: ein eigenes Prometheus-Skript, ein monatlicher Tabellen-Export und ein Vertriebsgespräch, das erklärt, "warum die Zahl so groß ist". Ænix Billing schließt diese Lücke.**

## Was Ænix Billing ist

Ein nativer Kubernetes-Extension-API-Server, der die `billing.aenix.io/v1alpha1`-API bereitstellt. Sie fragen ihn genauso ab wie die reguläre Kubernetes-API — mit `kubectl`, kubeconfig-RBAC, Ihrem bestehenden Tooling — und erhalten einen strukturierten `UsageReport` für jeden Tenant, jeden Workload, jedes Zeitfenster.

Unter der Haube:

- **Cozystack Workload CRD** — jeder Managed-Service (Postgres Primary, Redis Sentinel, ClickHouse Shard, KubeVirt-VM, Kubernetes-Worker, S3-Bucket) ist ein `Workload`-Objekt.
- **Billing-Controller** — wandelt `Workload`-State in Prometheus-Metriken um: operative Lebensdauer, Owner-Tenant, Kind/Typ, Ressourcenreservierungen.
- **VictoriaMetrics** — speichert Metriken mit Stream-Aggregation. (Aenix und Cozystack standardisieren auf VictoriaMetrics + VictoriaLogs, nicht Prometheus/Loki.)
- **Billing-API-Server** — bedient die API und berechnet das bestimmte Integral der Reservierungen über das angefragte Zeitfenster.

Die Form: ein schlanker Extension-API-Server, ein kleiner Controller, Ihr bestehender Metrics-Store. Keine neue Abhängigkeit zu betreiben. Ihr Plattform-Team betreibt all diese Komponenten bereits.

## Was abgerechnet wird

Jeder Consumer (ein einzelner Postgres-Pod, eine Redis-Instanz, eine ClickHouse-Replica) wird gemeldet mit:

- `vCPUHours` oder `CPUHours` — umschaltbar, je nachdem ob Sie physische oder virtualisierte CPU abrechnen
- `MemoryGiBHours` (oder dezimal `MemoryGBHours`)
- `EphemeralStorageGiBHours`
- `PersistentVolumeGBHours` — aufgeschlüsselt nach Storage-Class (NVMe vs HDD vs repliziert)
- `IPAddressHours` — abgeleitet aus MetalLB-IP-Pool-Labels
- `LifetimeHours` — reine Laufzeit, unabhängig von Reservierungen
- `S3StorageGBHours` und `S3PhysicalStorageGBHours` — für Object-Storage-Tenants

`Workload`-Metadaten reisen mit dem Report mit — `kind: postgres`, `type: master` vs. `replica`, der Owner-Tenant, eigene Cozystack-Labels — sodass Preisregeln so feingranular sein können wie Sie wollen. Replicas zum halben Preis von Primaries abrechnen. NVMe-Volumes 3× HDD-Volumes. Einem strategischen Tenant 20 % Rabatt geben. Die Daten sind da; die Policy ist Ihre.

## Wie Sie abfragen

Ein `UsageReport` ist ein Kubernetes-Objekt. Sie bauen die Anfrage wie jede andere CRD:

```yaml
apiVersion: billing.aenix.io/v1alpha1
kind: UsageReport
query:
  tenant: tenant-acme
  includeSubTenants: true
  startTimestamp: 2026-04-01T00:00:00Z
  endTimestamp:   2026-05-01T00:00:00Z
```

```bash
kubectl create -f report.yaml -o yaml
```

Sie erhalten dasselbe Objekt zurück mit befülltem `report.consumers[]` — ein Eintrag pro Postgres-Replica, Redis-Pod, ClickHouse-Shard, K8s-Worker — jeder mit eigener Verbrauchsaufschlüsselung.

- `includeSubTenants: true` zieht rekursiv jeden verschachtelten Tenant
- `excludeTenants:` filtert interne Namespaces heraus
- `workload: postgres-myapp-1` schränkt auf einen einzelnen Cluster ein
- Zeitfenster auf einen Abrechnungsmonat, einen einzelnen Tag oder die Lebensdauer eines Tenants — die API akzeptiert jedes RFC3339-Intervall

Derselbe `kubectl get`-Mechanismus, der eine Pod-Liste zieht, zieht jetzt Tenant-Rechnungspositionen. RBAC funktioniert genauso — das Billing-Team bekommt eine kubeconfig, die auf die Billing-API beschränkt ist; mehr nicht.

## Warum das für Hosting-Provider relevant ist

Sie hosten bereits Managed Postgres, Redis, Kafka, ClickHouse, S3 und Kubernetes über Cozystack. Mit Ænix Billing bekommen Sie das fehlende Stück — präzise Buchhaltung pro Tenant, pro Workload, pro Ressource, die direkt in Ihre Rechnungsstellung einfließt. Keine Tabellen. Keine quartalsweise Abstimmung. Keine "warum ist meine Rechnung so hoch"-Diskussionen mit Kunden.

Drei Dinge ändern sich für das Operations-Team:

1. **Billing ist kein separates System mehr.** Dieselbe API wie der Rest der Plattform. Dasselbe RBAC. Dasselbe kubectl. Nichts Neues zu lernen oder zu betreiben.
2. **Reklamationen sinken.** Die Rechnungspositionen mappen 1:1 auf die Ressourcen, die Cozystack tatsächlich geschedult hat. Der Kunde kann dieselbe Abfrage laufen lassen, dieselben Zahlen sehen, cent-genau abstimmen.
3. **Preisexperimente sind günstig.** Sie wollen A/B-testen, eine bestimmte Service-Klasse nach `MemoryGiBHours` statt `vCPUHours` abzurechnen? Nicht den Billing-Pipeline-Code ändern — die Policy ändern, die denselben Report konsumiert.

## Wie es sich von AWS RDS / GCP-Abrechnung unterscheidet

AWS RDS und Cloud SQL rechnen minutengenau gegen eine Managed-Service-Preisliste ab — der Provider besitzt die Preisliste und der Kunde akzeptiert die Rechnungspositionen als verbindlich. **Sie sind dieser Provider** auf Cozystack. Ænix Billing liefert dieselbe Minutengenauigkeit, mit Preismodell und Ressourcen-Taxonomie unter Ihrer Kontrolle. Die Daten liegen offen, die Policy gehört Ihnen.

Für Hosting-Provider auf Bare Metal — Hetzner, OVH, regionale Rechenzentren, Sovereign-Cloud-Betreiber — ist das der Unterschied zwischen "mit Hyperscalern auf Funktion konkurrieren" und "mit Hyperscalern nur auf Preis konkurrieren". Die Funktion war bisher die Lücke.

## Distribution

Ænix Billing ist ein proprietäres Modul und wird als Teil von **Ænix Enterprise** zusammen mit Cozystack ausgeliefert. Die Cozystack-Plattform bleibt Apache-2.0 und CNCF-gesteuert. Die Billing-Schicht erscheint unter einer kommerziellen Lizenz für Aenix-Kunden.

Wenn Sie ein Hosting-Geschäft oder eine Private Cloud auf Cozystack betreiben und Billing out of the box wollen, [vereinbaren Sie einen Discovery-Call](/de/kontakt/) — wir besprechen Scope, Pricing und Rollout.

## Community

- **Cozystack** — [cozystack.io](https://cozystack.io)
- **GitHub** — [github.com/cozystack](https://github.com/cozystack)
- **Telegram** — [t.me/cozystack](https://t.me/cozystack)
- **CNCF Slack** — [#cozystack](https://kubernetes.slack.com/archives/C06L3CPRVN1) (Einladung nötig? [slack.kubernetes.io](https://slack.kubernetes.io))
- **Community-Meetings** — [Kalender](https://cozystack.io/community/)
