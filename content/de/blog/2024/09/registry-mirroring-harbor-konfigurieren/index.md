---
title: "Registry-Mirroring in Harbor: ein Konfigurationsproblem und die Lösung"
seo_title: "Registry-Mirroring in Harbor konfigurieren"
description: "Harbor stellt docker.io, ghcr.io und andere Registries nur als eigene Projekte bereit, was Docker-Registry-Mirrors bricht. So haben wir das Problem umgangen."
slug: "registry-mirroring-harbor-konfigurieren"
date: "2024-09-10"
cover_image: "/img/blog/covers/de/registry-mirroring-harbor-konfigurieren.jpg"
author: "Andrei Kvapil"
type: "article"
topics: ["DevOps", "Kubernetes"]
language: "de"
hreflang_en: "/blog/2024/09/issue-with-configuring-registry-mirroring-in-harbor/"
---

![Registry-Mirroring in Harbor](/img/blog/medium/issue-with-configuring-registry-mirroring-in-harbor/cover.jpg)

Heute hatten wir einen interessanten Fall beim Einrichten von Registry-Mirroring in Harbor. Harbor kann für gängige Dienste wie docker.io, ghcr.io, quay.io und gcr.io ein Proxy-Repository anlegen.

Das Problem: Diese Proxys lassen sich nur als eigene Projekte einrichten. Um Alpine von ghcr.io über Ihr Harbor zu ziehen, schreiben Sie also nicht mehr

```
docker pull ghcr.io/linuxcontainers/alpine:latest
```

sondern

```
docker pull myharbor.org/ghcr-proxy/linuxcontainers/alpine:latest
```

Der Pfad zu den Images ändert sich also, und Sie können `myharbor.org` nicht in der Docker-Konfiguration für Registry-Mirrors eintragen. Diese sieht so aus und kennt keine Einstellung für einen geänderten Pfad:

```
{
  "registry-mirrors": ["https://myharbor.org"]
}
```

Die Lösung ist recht einfach: In Nginx werden Umschreibungen eingerichtet, sodass ein Pull von einer bestimmten Subdomain

```
docker pull ghcr-proxy-myharbor.org/linuxcontainers/alpine:latest
```

tatsächlich von

```
myharbor.org/ghcr-proxy/linuxcontainers/alpine:latest
```

bedient wird. Auf diese Weise können Sie mehrere Registry-Mirrors für verschiedene Projekte in Harbor einrichten:

```
{
  "registry-mirrors": ["https://ghcr-proxy-myharbor.org", "https://docker-proxy-myharbor.org"]
}
```

Die Images werden dann automatisch und transparent über diese Mirrors gezogen. Selbst wenn Sie

```
docker pull ghcr.io/linuxcontainers/alpine:latest
```

ausführen, läuft der erste Versuch, das Image zu ziehen, über das cachende Harbor.

Tatsächlich besteht dieses Problem schon seit mehreren Jahren, und in einem GitHub-Issue haben Enthusiasten fertige Lösungen geteilt, mit denen sich das vollständig automatisieren lässt.

Bei mir hat [diese Konfiguration](https://github.com/goharbor/harbor/issues/8082#issuecomment-2258660093) ohne Probleme funktioniert.

Von [Andrei Kvapil](https://medium.com/@kvaps) am [10. September 2024](https://medium.com/p/dd200311885f).

[Kanonischer Link](https://medium.com/p/dd200311885f)

Exportiert von [Medium](https://medium.com) am 5. Oktober 2026.
