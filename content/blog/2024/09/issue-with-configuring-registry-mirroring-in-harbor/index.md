---
title: "Issue with Configuring Registry Mirroring in Harbor"
description: "Harbor proxies docker.io, ghcr.io and other registries only as separate projects, which breaks Docker registry mirrors. How we worked around it."
date: "2024-09-10"
author: "Andrei Kvapil"
hreflang_de: "/de/blog/2024/09/registry-mirroring-harbor-konfigurieren/"
type: "article"
topics: ["DevOps", "Kubernetes"]
language: "en"
cover_image: "/img/blog/medium/issue-with-configuring-registry-mirroring-in-harbor/cover.jpg"
source_url: "https://medium.com/p/dd200311885f"
---

![Registry mirroring in Harbor](/img/blog/medium/issue-with-configuring-registry-mirroring-in-harbor/cover.jpg)

Today, there was an interesting case with setting up registry mirroring in Harbor. Harbor allows you to create a proxy repository for popular services like docker.io, ghcr.io, quay.io, and gcr.io.

The problem is that they can only be set up as separate projects, meaning that in order to pull Alpine from ghcr.io through your Harbor, instead of:

```
docker pull ghcr.io/linuxcontainers/alpine:latest
```

you will have to do:

```
docker pull myharbor.org/ghcr-proxy/linuxcontainers/alpine:latest
```

In other words, the path for images changes, and you won’t be able to specify `myharbor.org` in the configuration for registry mirrors in Docker, which looks like the following and does not accept settings for the modified path:

```
{
  "registry-mirrors": ["https://myharbor.org"]
}
```

The solution is quite simple — set up overrides in Nginx so that when pulling from a specific subdomain:

```
docker pull ghcr-proxy-myharbor.org/linuxcontainers/alpine:latest
```

the image pull actually happens from:

```
myharbor.org/ghcr-proxy/linuxcontainers/alpine:latest
```

in this way, you can set up multiple registry mirrors for different projects in Harbor:

```
{
  "registry-mirrors": ["https://ghcr-proxy-myharbor.org", "https://docker-proxy-myharbor.org"]
}
```

and the images will be pulled through them automatically in a transparent mode, even if you run:

```
docker pull ghcr.io/linuxcontainers/alpine:latest
```

the first attempt to pull the image will go through the caching Harbor.

In fact, this issue has been around for several years, and there is a GitHub issue where enthusiasts have shared ready-made solutions that allow this to be done entirely automatically.

The [following configuration](https://github.com/goharbor/harbor/issues/8082#issuecomment-2258660093) worked for me without any problems.

By [Andrei Kvapil](https://medium.com/@kvaps) on [September 10, 2024](https://medium.com/p/dd200311885f).

[Canonical link](https://medium.com/p/dd200311885f)

Exported from [Medium](https://medium.com) on October 5, 2026.
