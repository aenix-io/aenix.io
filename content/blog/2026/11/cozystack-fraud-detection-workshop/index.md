---
title: "Build your own fraud detection on Cozystack: a legacy card switch, GitOps, an LLM and managed services"
seo_title: "Hands-on Cozystack workshop: real-time card fraud detection"
description: "A two-hour hands-on Cozystack workshop: real-time card fraud detection around a legacy switch with Kafka, Redis, PostgreSQL, Flux, ClickHouse and a local LLM."
date: "2026-11-26"
cover_image: "/img/blog/covers/cozystack-fraud-detection-workshop.jpg"
author: "Timur Tukaev"
type: "tutorial"
topics: ["Cozystack", "Kubernetes", "Financial Services", "KubeVirt", "Platform Engineering", "AI/ML"]
language: "en"
hreflang_de: "/de/blog/2026/11/cozystack-workshop-betrugserkennung-kartenzahlungen/"
primary_keyword: "Cozystack workshop"
keywords: ["Cozystack workshop", "real-time fraud detection", "card fraud detection on Kubernetes", "stand-in processing", "Kafka on Kubernetes", "managed PostgreSQL failover", "KubeVirt live migration", "Flux GitOps", "ClickHouse Kafka engine", "local LLM llama.cpp", "HorizontalPodAutoscaler Kafka partitions"]
direct_answer: "**This is a two-hour hands-on Cozystack workshop that builds real-time card fraud detection around a legacy payment switch.** The switch runs unchanged in a KubeVirt virtual machine and sends every payment to Kafka; a scoring service in a managed Kubernetes cluster checks it against the card's recent history in Redis and answers within 400 ms, otherwise the switch decides on its own (stand-in processing). A journal goes through Kafka to PostgreSQL and a dashboard, and a small language model running in the same cluster explains every decline. All managed services are ordered from the Cozystack catalog through Git with Flux, analysts get ClickHouse and an S3 bucket, and the final part survives ten times the traffic, a PostgreSQL primary failure and a live migration of the switch VM."
quick_facts:
  - label: "Format"
    value: "Hands-on workshop in text form, about two hours plus half an hour of setup, all from the terminal"
  - label: "Requirements"
    value: "Cozystack 1.7 or newer with platform admin rights; kubectl, virtctl, git and curl on your machine"
  - label: "Managed services used"
    value: "Kubernetes, Kafka (KRaft), Redis, PostgreSQL (CloudNativePG), ClickHouse, S3 bucket, a KubeVirt VM"
  - label: "Language model"
    value: "Qwen2.5 0.5B Instruct on llama.cpp, CPU only, inside the tenant's own cluster"
  - label: "Resources at peak"
    value: "About 10 GiB of RAM and about 20 vCPU for the whole system"
  - label: "Materials"
    value: "github.com/aenix-org/cozystack-workshop, folder fraud/, in English and Russian"
faq:
  - q: "What do I need to run this workshop myself?"
    a: "A Cozystack 1.7 or newer installation where you have platform admin rights, the replicated StorageClass and the ubuntu-24.04 VM image (both ship with a standard install), plus kubectl, virtctl, git and curl on your computer. Setup takes about half an hour, the workshop itself about two hours."
  - q: "What is stand-in processing?"
    a: "It is how card processing keeps working when the fraud check is slow. If the scoring service does not answer within 400 ms, the switch decides on its own using its built-in rule. Payments keep flowing, but during that time fraudulent ones can slip through unchecked."
  - q: "Does card data leave the cluster when the language model explains a decline?"
    a: "No. The explainer is Qwen2.5 0.5B Instruct running on llama.cpp on an ordinary CPU inside the tenant's own Kubernetes cluster, next to the other services. It does not call any external API."
  - q: "Why does the scorer stop scaling at eight replicas?"
    a: "The auth.requests topic has eight partitions, and within one Kafka consumer group each partition is read by exactly one consumer at a time. Replicas beyond eight get no partition and sit idle. The scaling limit was set when the topic was created."
  - q: "What happens to payments when the PostgreSQL primary fails?"
    a: "CloudNativePG promotes the hot replica within seconds. The switch never talks to the database directly; its journal waits in Kafka, and the cases service writes the backlog as soon as the database is back. The reconciliation line on the dashboard returns to missing: 0 within a minute."
  - q: "Does a live migration of the switch VM interrupt payments?"
    a: "No. Memory is copied to the new node while the VM keeps running, the disk stays on replicated storage reachable from both nodes, and the IP address does not change. A few authorizations go unanswered for a couple of seconds and terminals resend them with the same transaction ID; terminal errors stay at zero."
quiz:
  title: "Test yourself: fraud detection on Cozystack"
  questions:
    - q: "How long does the switch wait for the scoring service before deciding on its own?"
      options:
        - { text: "100 ms", correct: false }
        - { text: "400 ms", correct: true }
        - { text: "2 seconds", correct: false }
      explanation: "If the scorer has not answered within 400 milliseconds, the switch falls back to its hard-coded rule. Banks call this stand-in processing."
    - q: "What happened after the Redis instance was deleted by hand while its manifest was still in Git?"
      options:
        - { text: "Nothing, it stayed deleted until someone noticed", correct: false }
        - { text: "Flux recreated it within about a minute", correct: true }
        - { text: "Cozystack restored it from a backup the next night", correct: false }
      explanation: "Once a minute Flux compares Git with the platform and recreates anything missing, so manual changes that contradict the repository do not last."
    - q: "Why did twelve scorer replicas do no more work than eight?"
      options:
        - { text: "The tenant CPU quota capped the extra pods", correct: false }
        - { text: "The HorizontalPodAutoscaler ignored the extra replicas", correct: false }
        - { text: "The auth.requests topic has eight partitions", correct: true }
      explanation: "Within one consumer group each partition is read by a single consumer, so a ninth replica has no partition to read."
    - q: "Why was no journal entry lost when the PostgreSQL primary failed?"
      options:
        - { text: "The journal in Kafka is the source of truth and the database catches up", correct: true }
        - { text: "The switch buffered entries in its own memory", correct: false }
        - { text: "The dashboard wrote the missing entries itself", correct: false }
      explanation: "The cases service held the messages in Kafka while the database was down and wrote them all once the new primary was up."
    - q: "Why is ClickHouse Keeper disabled in the analytics manifest?"
      options:
        - { text: "Keeper is not available in the Cozystack catalog", correct: false }
        - { text: "There is only one replica, and Keeper is needed for several replicas to coordinate", correct: true }
        - { text: "It conflicts with the Kafka table engine", correct: false }
      explanation: "Keeper lets several ClickHouse replicas agree with each other. With a single replica it only wastes resources, as the Cozystack ClickHouse docs explain."
---

This is not a case study. It is a workshop packed into a blog post, one you can run on your own Cozystack installation to see how the platform works and where it could fit in your own projects. In about two hours, without leaving the terminal, we will build a system that catches card fraud in real time, and then we will give it a really bad day: ten times the usual traffic, a crashed primary database server and a live migration of a virtual machine while payments are flowing through it.

Everything runs on [Cozystack](https://cozystack.io), an open-source platform for building clouds and a CNCF Incubating project. Cozystack turns your servers into a ready-made cloud with managed Kubernetes, databases, message brokers, GPU as a Service and more.

A quick note before we start: the fraud detection here is a teaching example, not a product. It exists to give the story a plot. The real goal is to get to know the platform up close and see how it fits your own work.

## What we will build

When you pay by card in a store, the terminal asks the bank that issued the card whether the payment can go through. The program that answers is called a switch. In many banks it is a legacy application that has run on the same virtual machine for years, and nobody wants to touch it (if it works, don't fix it). Our switch is no different. It approves every payment under $5,000, which makes life very easy for fraudsters.

Of course, we are not going to rewrite the switch. Instead, we will build a payment check around it. Here is roughly what that looks like:

{{< figure src="fraud-scheme.png" alt="Architecture: card terminals send payments to a legacy switch VM, the switch publishes them to Kafka, a scorer in Kubernetes checks card history in Redis and replies through Kafka within 400 ms; a journal flows through Kafka to the cases service, PostgreSQL and the dashboard, and a small language model explains declines" caption="The switch stays as it is; everything else is built around it" >}}

The switch sends every payment to Kafka. The scoring service (`scorer` in the code) checks it against the card's recent payment history, which lives in Redis, and posts its decision back to Kafka. The switch writes every decision to a journal, no matter who made it, and the `cases` service moves each journal entry into PostgreSQL, from where it shows up on the fraud team's dashboard. On top of that, a language model explains in plain words why a payment was declined. Front-line support needs this, because customers will call the bank asking why their card did not work, and someone has to give them an answer.

This design has three important properties.

First, the switch never waits longer than it can afford. If the scorer has not answered within 400 milliseconds, the switch decides on its own, using the logic hard-coded into it. Banks call this stand-in processing, and it is what separates a slow fraud check from a processing outage. When the check is too slow, fraudulent payments slip through during peak hours. When processing stops, nothing goes through at all, including honest customers buying groceries.

Second, the journal is written regardless of who made the decision, so you can always compare what the switch told the terminals with what ended up in the database. The two must match.

Third, card data stays inside our cluster. Even the language model that writes explanations for support staff runs inside the cluster next to the other services and never calls out to the internet.

## Materials and documentation

The full guide, with every command and file, is in the public [aenix-org/cozystack-workshop](https://github.com/aenix-org/cozystack-workshop) repository, in the [`fraud/`](https://github.com/aenix-org/cozystack-workshop/tree/master/fraud) folder. It is available [in English](https://github.com/aenix-org/cozystack-workshop/blob/master/fraud/README.md) and [in Russian](https://github.com/aenix-org/cozystack-workshop/blob/master/fraud/README.ru.md). The same repository has materials from our other workshops and labs:

- [`en/laptop/`](https://github.com/aenix-org/cozystack-workshop/tree/master/en/laptop) is a workshop on moving a virtual machine from VMware to Cozystack;
- [`en/laptop/labs/`](https://github.com/aenix-org/cozystack-workshop/tree/master/en/laptop/labs) has sixteen short labs, from ordering your own Kubernetes cluster from the catalog to OpenBao, ClickHouse, MongoDB and live migration of virtual machines;
- [`fraud/app/`](https://github.com/aenix-org/cozystack-workshop/tree/master/fraud/app) holds the source code of every part of the fraud system, including the [scoring rules](https://github.com/aenix-org/cozystack-workshop/blob/master/fraud/app/internal/scoring/rules.go), which are the most fun to experiment with.

Along the way we will lean on the [Cozystack documentation](https://cozystack.io/docs/v1.7/).

All commands in this post run from the `fraud/` folder of the cloned repository. In the terminal recordings you will see `~/workshop` instead: that is what the folder was called on the environment where I recorded everything.

## Setting up the environment

This post grew out of a workshop we have already run in several cities, and there our team prepared everything in advance. Each participant got a ready tenant with the legacy switch VM already running, a Kubernetes cluster, a GitLab account and a login on a bastion VM with all the tools installed (virtctl, kubectl and so on). Here you will do that preparation yourself, on your own Cozystack cluster and your own laptop. It takes about half an hour.

You will need Cozystack 1.7 or newer and platform admin rights, because we are going to create a tenant. If you do not have Cozystack yet, start with the [getting started guide](https://cozystack.io/docs/v1.7/getting-started/). The cluster needs the `replicated` StorageClass and the `ubuntu-24.04` image in the VM image catalog; a standard Cozystack install has both. On your computer you need `kubectl`, `virtctl`, `git` and `curl`. I gave the tenant a generous quota of 160 vCPU and 96 GiB of memory. The whole system, even at peak, uses about 10 GiB of RAM and around 20 vCPU.

### The tenant and a working copy of the manifests

All the YAML manifests for setup live in [`fraud/instructor/`](https://github.com/aenix-org/cozystack-workshop/tree/master/fraud/instructor). They use the placeholder `dallasXX` instead of a tenant name, so first pick a name and make a copy of the manifests with the placeholder replaced. In the examples the tenant is called `fraud1`, and by Cozystack convention its namespace is `tenant-fraud1`:

```bash
git clone https://github.com/aenix-org/cozystack-workshop.git
cd cozystack-workshop/fraud
export NAME=fraud1 T=tenant-fraud1
mkdir -p ~/fraud-env
for f in instructor/*.yaml; do
  sed "s/tenant-dallasXX/$T/g; s/dallasXX/$NAME/g" "$f" > ~/fraud-env/$(basename "$f")
done
```

The tenant is created inside the root tenant, `tenant-root`. It will not need its own monitoring in this guide, so we turn that off to save memory. You can do this in the Cozystack dashboard or with a single command as the admin:

```bash
kubectl apply -f - <<EOF
apiVersion: apps.cozystack.io/v1alpha1
kind: Tenant
metadata: {name: $NAME, namespace: tenant-root}
spec:
  monitoring: false
  resourceQuotas: {cpu: "160", memory: 96Gi}
EOF
kubectl -n tenant-root get tenants.apps.cozystack.io $NAME -w
```

Once the tenant reaches `READY True`, create a separate kubectl context for it. Every command in this post that talks to the platform goes through the `tenant` context. The easiest way is to copy the admin context and make the tenant's namespace its default:

```bash
kubectl config set-context tenant \
  --cluster=$(kubectl config view --minify -o jsonpath='{.contexts[0].context.cluster}') \
  --user=$(kubectl config view --minify -o jsonpath='{.contexts[0].context.user}') \
  --namespace=$T
```

### The switch and your own cluster

Now let's create the switch VM and the cluster. `switch-vm.yaml` describes the switch's virtual machine. Its disk is created from the `ubuntu-24.04` image, and on first boot cloud-init downloads, installs and starts the `auth-switch` service. At the end of the same file is the `switch` service that terminals use to reach the machine. `cluster.yaml` orders a managed Kubernetes cluster called `fraud` from the Cozystack catalog. Since version 1.7, a cluster's worker nodes are described by a separate `KubernetesNodes` application, and our file asks for one node, with autoscaling allowed to add a second one under load:

```bash
kubectl --context tenant apply -f ~/fraud-env/switch-vm.yaml -f ~/fraud-env/cluster.yaml
kubectl --context tenant get vminstances,kubernetes -w
```

The VM starts in a couple of minutes; the cluster takes a little longer. When it reaches `READY True`, grab its kubeconfig from the secret Cozystack creates and name the context `fraud`:

```bash
kubectl --context tenant get secret kubernetes-fraud-admin-kubeconfig \
  -o jsonpath='{.data.admin\.conf}' | base64 -d > ~/fraud-env/fraud.kubeconfig
KUBECONFIG=~/fraud-env/fraud.kubeconfig kubectl config rename-context \
  "$(KUBECONFIG=~/fraud-env/fraud.kubeconfig kubectl config current-context)" fraud
export KUBECONFIG=~/.kube/config:~/fraud-env/fraud.kubeconfig
kubectl --context fraud get nodes
```

You can also download the same file from the cluster's page in the Cozystack console, under Secrets. It points to the cluster API at an external address like `https://kubernetes-fraud.<tenant domain>`, so it works from your own computer too.

### Traffic and the model

Two more files go into the nested cluster. `terminals.yaml` creates the `fraud` namespace and, inside it, the `endpoints` ConfigMap with the addresses of Kafka, Redis, PostgreSQL and the switch in your tenant (these addresses are why we substituted the tenant name earlier), the `traffic` ConfigMap set to twenty payments per second, and the `terminals` pod that plays the role of the stores. `prepull.yaml` runs a one-off job that pulls the llama.cpp image onto the node in advance, so you do not have to wait for it in part two.

```bash
kubectl --context fraud apply -f ~/fraud-env/terminals.yaml -f ~/fraud-env/prepull.yaml
```

Our imaginary terminals start sending payments right away: the switch is already running and, for now, approves everything.

### A Git repository and Flux

In part one the platform will take the descriptions of our services from Git, so it is best to create the repository now. Any Git host the cluster can reach over HTTPS will do: GitLab, GitHub or Gitea. The repository needs a `platform/` folder, and we put both files we just applied by hand into it right away. That way, on its very first run Flux finds a description of what is already running in Git and does not delete anything to bring the cluster in line with the repository.

```bash
git clone https://<your-git>/<you>/fraud-infra.git ~/fraud-infra
mkdir -p ~/fraud-infra/platform
cp ~/fraud-env/cluster.yaml ~/fraud-infra/platform/kubernetes.yaml
cp ~/fraud-env/switch-vm.yaml ~/fraud-infra/platform/switch-vm.yaml
cd ~/fraud-infra && git add platform && git commit -m "Initial infrastructure" && git push
```

So that the platform can read the repository, create a read-only token on your Git host. In GitLab, a deploy token or a project access token with the `read_repository` scope will do. Then create three Flux objects in the tenant's namespace: a secret with the token, a `GitRepository` source and a `Kustomization` that applies the `platform/` folder. Flux itself is already running in the platform. The `serviceAccountName` field points to the service account Cozystack creates for every tenant. Thanks to that, Flux applies the files with the tenant's permissions rather than the platform admin's, and cannot do anything the tenant itself is not allowed to do.

```bash
kubectl --context tenant create secret generic git-flux --from-literal=username=<login> --from-literal=password=<token>
kubectl --context tenant apply -f - <<EOF
apiVersion: source.toolkit.fluxcd.io/v1
kind: GitRepository
metadata: {name: infra}
spec:
  interval: 1m
  url: https://<your-git>/<you>/fraud-infra.git
  ref: {branch: main}
  secretRef: {name: git-flux}
---
apiVersion: kustomize.toolkit.fluxcd.io/v1
kind: Kustomization
metadata: {name: platform}
spec:
  interval: 1m
  sourceRef: {kind: GitRepository, name: infra}
  path: ./platform
  prune: false
  targetNamespace: $T
  serviceAccountName: $T
EOF
kubectl --context tenant get kustomization platform
```

When `platform` shows `READY True`, everything is wired up: once a minute Flux pulls the latest `main` and applies the `platform/` folder.

### The fraud team's dashboard

The fraud dashboard is a web page we will deploy in part two. The simplest way to open it is a port forward: run `kubectl --context fraud -n fraud port-forward svc/dashboard 8080` and open `http://localhost:8080` in your browser. If you want a permanent address, as we had at the workshop, put your domain into `~/fraud-env/dashboard-ingress.yaml` and apply the file through the `tenant` context: it publishes the dashboard through the platform's ingress with a Let's Encrypt certificate. In this post I use the address of my own environment, `https://fraud.austin03.workshop.aenix.io`; yours will be `localhost:8080` or your own domain.

## Part 0. Looking around: a switch that approves everything

After setup we have two kubectl contexts:

```
$ kubectl config get-contexts
CURRENT   NAME     CLUSTER    AUTHINFO      NAMESPACE
          fraud    fraud      fraud-admin   fraud
*         tenant   platform   austin03      tenant-austin03
```

Through the `tenant` context we talk to the Cozystack platform and order virtual machines, databases and the cluster itself. Through the `fraud` context we work with the nested Kubernetes cluster where the fraud services will run. Let's see what we already have:

```
$ kubectl --context tenant get vminstances,kubernetes
NAME     READY   AGE   VERSION
switch   True    26m   f379a04795e8

NAME    READY   AGE   VERSION
fraud   True    26m   7c18a8ec4e4d

$ kubectl --context tenant get resourcequota
NAME           REQUEST                                                         LIMIT                                                 AGE
tenant-quota   requests.cpu: 4525m/16, ...                                     limits.cpu: 30258m/160, limits.memory: 42104Mi/96Gi    29m

$ kubectl --context fraud -n fraud get pods
NAME                        READY   STATUS      RESTARTS   AGE
prepull-explainer-2s24n     0/1     Completed   0          23m
terminals-7cf5b9b59-6hfzv   1/1     Running     0          23m
```

The switch and the cluster are in place, part of the quota is already in use, and the `terminals` pod is running in the `fraud` namespace. It plays the role of stores across the country and sends the switch twenty payments per second. The `prepull-explainer` pod in `Completed` state is left over from setup: it is the job that pulled the llama.cpp image onto the node in advance.

Now let's look inside the switch VM. Open the console with `virtctl --context tenant console vm-instance-switch`, or with the button on the VM's page (the VNC tab) in the Cozystack dashboard. The login and password, `ubuntu`/`ubuntu`, are set by cloud-init in `switch-vm.yaml`; if the screen stays blank, press Enter. Let's look at the switch's log:

```
$ journalctl -u auth-switch --no-pager -n 3
Nov 23 03:28:34 switch auth-switch[650]: 5s: 100 authorizations, 0 declined, stand-in 0.0%, p99 0 ms
Nov 23 03:28:39 switch auth-switch[650]: 5s: 100 authorizations, 0 declined, stand-in 0.0%, p99 0 ms
```

In five seconds the switch handled a hundred authorizations, declined none of them and spent zero milliseconds on each. It does not consult anyone and approves anything up to $5,000.

{{< figure src="ch0-lookaround.gif" alt="Terminal recording: two kubectl contexts, the switch VM and the fraud cluster are ready, the tenant quota, terminals already sending payments" caption="Looking around: both contexts, the switch and the cluster are in place, and payments are already flowing" >}}

Now let's make sure fraudulent payments get through such a switch. The `fraud/manifests/` folder has an attack manifest that runs three schemes at once. The first is card testing: fraudsters check stolen cards with tiny payments. In the second, a card that was just used in Lagos pays for something in Chicago two minutes later, though no human can cover that distance so fast; this is called impossible travel. In the third, fraudsters try sixty card numbers from one bank in a row, walking through its BIN range.

```
$ kubectl --context fraud apply -f manifests/04-attack.yaml
job.batch/attack created

$ kubectl --context fraud -n fraud logs job/attack --tail=4
attack: impossible travel on card …4653 from Charlotte
attack: impossible travel on card …5504 from Chicago
5s: sent 30, approved 30, declined 0, errors 0, timeouts 0, p99 10.1 ms
5s: sent 21, approved 21, declined 0, errors 0, timeouts 0, p99 10.1 ms
```

The switch approved all thirty fraudulent payments, because none of them was over $5,000. That is our starting point: the system technically works, but it protects nobody.

In the recording of the attack, watch the `approved` column: every payment is approved.

{{< figure src="ch0b-attack.gif" alt="Terminal recording: an attack on the switch without any fraud check, every payment approved" caption="An attack on a switch with no fraud check: every payment goes through" >}}

## Part 1. Infrastructure in a Git repository

Everything we order from the platform is described in files in Git. We connected the repository to Flux during setup, so about a minute after changes land in `main`, Flux applies them as the tenant's service account and the service we ordered starts being created.

From here on we work in the clone of the repository, `~/fraud-infra`, and order three managed services from the Cozystack catalog. Redis will remember each card's recent activity: how often, where and for how much it was used. Kafka will carry the switch's requests, the scorer's decisions and the payment journal. PostgreSQL, with two instances, a primary and a replica, will store every transaction and a record of every check.

We will create Redis in the Cozystack dashboard first. Then we move the same declaration into Git, and from that moment the repository becomes the source of truth. The form in the dashboard asks for the name `features`, one replica, a `1Gi` disk on `replicated` storage and authentication turned off. In Git it looks like this:

```yaml
# platform/redis.yaml
apiVersion: apps.cozystack.io/v1alpha1
kind: Redis
metadata:
  name: features
spec:
  replicas: 1
  size: 1Gi
  storageClass: replicated
  authEnabled: false
```

Kafka and PostgreSQL we write straight in YAML, following the documentation ([Kafka](https://cozystack.io/docs/v1.7/applications/kafka/), [PostgreSQL](https://cozystack.io/docs/v1.7/applications/postgres/)). In Cozystack 1.7, Kafka runs in KRaft mode without ZooKeeper, so the declaration only has the broker and the topics:

```yaml
# platform/kafka.yaml
apiVersion: apps.cozystack.io/v1alpha1
kind: Kafka
metadata:
  name: kafka
spec:
  kafka:
    replicas: 1
    size: 5Gi
    storageClass: replicated
    resourcesPreset: c1.small
  topics:
    - {name: auth.requests, partitions: 8, replicas: 1, config: {}}
    - {name: auth.decisions, partitions: 8, replicas: 1, config: {}}
    - {name: auth.journal, partitions: 8, replicas: 1, config: {}}
```

Note that the `auth.requests` topic has eight partitions. Why that matters will become clear in part four.

In the PostgreSQL declaration we ask for two instances, a `fraud` user and a `fraud` database that the user owns. There is no need to set a password: Cozystack generates one and puts it into the `postgres-cases-credentials` secret, from which we will hand it to the services in part two.

```yaml
# platform/postgres.yaml
apiVersion: apps.cozystack.io/v1alpha1
kind: Postgres
metadata:
  name: cases
spec:
  replicas: 2
  size: 2Gi
  storageClass: replicated
  resourcesPreset: t1.micro
  users:
    fraud: {}
  databases:
    fraud:
      roles:
        admin: [fraud]
```

Add the files to the repository, push them to `main` and watch what happens on the platform:

```
$ kubectl --context tenant get kafka,redis,postgres
NAME    READY     AGE   VERSION
kafka   Unknown   42s   744a68a3a447

NAME       READY   AGE   VERSION
features   True    42s   a0db0b4ba6d4

NAME    READY     AGE   VERSION
cases   Unknown   42s   ebc4944b1a9e
```

{{< figure src="ch1a-order.gif" alt="Terminal recording: manifests committed and pushed to Git, and a minute later Kafka, Redis and PostgreSQL start coming up" caption="Ordering services through Git: push, and a minute later the resources start coming up" >}}

Redis came up almost at once, PostgreSQL is still assembling its cluster, and Kafka can take noticeably longer than the rest. While they start, let's see what the platform did with our declarations. Each one became a Helm release, and each release in turn created resources for the operator that runs that service. PostgreSQL is run by the CloudNativePG operator, which decides on its own which pod is the primary and which is the replica:

```
$ kubectl --context tenant get hr
NAME                 AGE   READY   STATUS
kafka-kafka          6m    True    ...
kubernetes-fraud     ...
postgres-cases       ...

$ kubectl --context tenant get pods -l cnpg.io/cluster=postgres-cases -L role
NAME                            READY   STATUS      RESTARTS   AGE     ROLE
postgres-cases-1                1/1     Running     0          119s    primary
postgres-cases-1-initdb-kx66m   0/1     Completed   0          2m24s
postgres-cases-2-join-lkqts     1/1     Running     0          98s
```

Now for the most telling GitOps experiment: what happens if someone changes by hand something that is described in Git? Let's delete Redis and leave its declaration in the repository:

```
$ kubectl --context tenant delete redis features
redis.apps.cozystack.io "features" deleted

$ kubectl --context tenant get redis -w
NAME       READY     AGE    VERSION
           Unknown   292y   <unknown>     <-- the object is deleted
features   Unknown   0s     <unknown>     <-- ...and immediately created again
features   True      56s    a0db0b4ba6d4
```

About a minute later Redis was back. Once a minute Flux compares what is in Git with what is on the platform and recreates anything missing, so manual changes that contradict the repository do not last long.

{{< figure src="ch1b-watch.gif" alt="Terminal recording: Redis deleted by hand is recreated by Flux about a minute later" caption="Redis deleted by hand comes back in about a minute" >}}

## Part 2. The switch starts asking before it approves

The data services are ready, and now we deploy three applications into our own cluster: the scorer itself, the `cases` service that writes the journal into the database, and the fraud dashboard. All three are deliberately simple. They are a stripped-down model of a real fraud system.

First, let's hand the database password to the services. Cozystack generated it when it created PostgreSQL and keeps it on the platform, and the `cases` service and the dashboard need it. This command copies the `fraud` user's password from the platform secret into a `cases-db` secret in the nested cluster:

```bash
kubectl --context fraud -n fraud create secret generic cases-db \
  --from-literal=password="$(kubectl --context tenant get secret postgres-cases-credentials -o jsonpath='{.data.fraud}' | base64 -d)"
```

Now we can deploy the applications:

```
$ kubectl --context fraud apply -f manifests/02-scoring.yaml
deployment.apps/scorer created
deployment.apps/cases created
deployment.apps/dashboard created
service/dashboard created
```

The scorer already knows where to find Kafka, Redis and PostgreSQL: their addresses are in the `endpoints` ConfigMap we created during setup. Tenant services are reachable from the nested cluster by their usual names, because the `fraud` cluster runs on the same network. The switch in the VM, however, knows nothing about the scorer yet. So let's open the VM console with virtctl again, give the switch the Kafka address and restart it:

```bash
sudo sed -i 's#^KAFKA_BOOTSTRAP=.*#KAFKA_BOOTSTRAP=kafka-kafka-kafka-bootstrap:9092#' /etc/auth-switch/env
sudo systemctl restart auth-switch
journalctl -u auth-switch --no-pager -n 3
```

The broker's short name is enough, because the tenant's domain is in the VM's DNS search list, so `kafka-kafka-kafka-bootstrap` resolves to the right address.

```
switch started in SCORING mode
HTTP listening on :8080
5s: 111 authorizations, 0 declined, stand-in 0.0%, p99 272 ms
```

`SCORING mode` means the switch now sends every payment to Kafka and waits for the scorer's decision, and if there is no answer within 400 milliseconds, it decides on its own using its old rule. Latency is noticeable for the first few seconds, while connections to Kafka are still being set up. Within half a minute things settle down, and you can see that in the dashboard's metrics. I read them from my environment's address; for you it will be `http://localhost:8080/metrics` through the port forward, or your own domain.

```
$ curl -s https://fraud.austin03.workshop.aenix.io/metrics | grep "^fraud_" | head -12
fraud_authorizations_per_second 9.7        # still ramping up to ~20
fraud_declines_per_second 0.3
fraud_stand_in_ratio 0
fraud_decision_latency_p50_seconds 0.0117  # ~12 milliseconds per decision
fraud_transactions_stored 582
fraud_alerts_total 18
fraud_scorer_lag_messages 8
fraud_cases_lag_messages 6
fraud_journal_entries 588
fraud_journal_missing 6
```

The recording shows the whole switch-over: the applications deploy, the switch moves to Kafka and starts working in `SCORING` mode, and the first metrics appear.

{{< figure src="ch2a-scoring.gif" alt="Terminal recording: the switch moves to Kafka and decisions take about 12 ms" caption="Turning the check on: the switch moves to Kafka, decisions take about 12 ms" >}}

Now every payment goes through Kafka to the scorer and back, and the terminal gets an answer in about twelve milliseconds. The journal barely lags behind the flow of payments: the six entries that have not reached the database yet disappear from the `fraud_journal_missing` counter within a minute.

What is left is to teach the system to explain its declines. A support agent needs a reason they can read out to a customer who calls asking why their card payment failed. That reason is written by a small language model, Qwen2.5 0.5B Instruct, run by llama.cpp. The model runs on an ordinary CPU inside our cluster and does not call any external service; on startup the pod downloads its weights once, about 400 MB. The llama.cpp image is already on the node thanks to the setup job, so the only wait is for the weights:

```
$ kubectl --context fraud apply -f manifests/03-explainer.yaml
$ kubectl --context fraud -n fraud rollout status deploy/explainer --timeout=5m
deployment "explainer" successfully rolled out
```

The explainer's address was set in `cases` from the start, and `cases` was waiting for it to appear. With normal traffic there are only a handful of declines, so the model only gets real work during an attack. Let's run the attack again:

```
$ kubectl --context fraud apply -f manifests/04-attack.yaml
job.batch/attack created

$ kubectl --context fraud -n fraud logs job/attack -f
attack: card testing on card …1176: 36 probes of $0.50–$3.00
attack: impossible travel on card …4653 from Charlotte
...
5s: sent 30, approved 24, declined 6, errors 0, timeouts 0, p99 125.0 ms
5s: sent 21, approved 6, declined 6, errors 0, timeouts 0, p99 125.0 ms
5s: sent 12, approved 0, declined 6, errors 0, timeouts 0, p99 125.0 ms
```

The first few test payments go through, because a single tiny payment looks like any other and the pattern only shows after several attempts. But by the middle of the attack the scorer is declining every fraudulent payment: it spots card testing at about the sixth payment and the BIN range walk at about the eighth card. The `fraud_alerts_total` counter has grown to 23, and for 19 of them the model has already written an explanation a human can understand.

The rules the scorer uses live in a short Go file, [`rules.go`](https://github.com/aenix-org/cozystack-workshop/blob/master/fraud/app/internal/scoring/rules.go). If you want to change the thresholds, start there, not in the YAML.

The same attack that sailed through in part zero is now declined after the first few attempts:

{{< figure src="ch2b-explainer-attack.gif" alt="Terminal recording: the repeated attack, first attempts approved, then fraudulent payments declined" caption="The repeated attack: the first attempts get through, then fraudulent payments are declined" >}}

## Part 3. The analysts want ClickHouse and an S3 bucket

The fraud check works, and then, as always, the analysts show up. They want to run any query they like against the payment journal without putting load on the system payments go through. In a public cloud we would open the console, find a managed ClickHouse and order it in a couple of clicks. Here we do the same thing with one file in the same repository:

```yaml
# platform/clickhouse.yaml
apiVersion: apps.cozystack.io/v1alpha1
kind: ClickHouse
metadata:
  name: analytics
spec:
  replicas: 1
  shards: 1
  resourcesPreset: t1.medium
  size: 5Gi
  storageClass: replicated
  clickhouseKeeper:
    enabled: false
  users:
    fraud:
      password: Fraud2026
```

ClickHouse Keeper lets several ClickHouse replicas coordinate with each other, but we have only one replica, so we turn it off. The ClickHouse docs for Cozystack say so, and details like this are what separate someone who read the documentation from someone who copied the first manifest they found. Push the file, wait a couple of minutes and connect to ClickHouse with its own client, `clickhouse-client`, which is already installed in the pod:

```
$ kubectl --context tenant exec -it chi-clickhouse-analytics-clickhouse-0-0-0 -c clickhouse -- \
    clickhouse-client --user fraud --password Fraud2026
```

The operator names ClickHouse pods `chi-<name>-clickhouse-<shard>-<replica>`. If your pod is named differently, find it with `kubectl --context tenant get pods | grep chi-`.

ClickHouse reads Kafka by itself, with no extra code. The SQL file `manifests/05-analytics.sql` creates three objects. The first, a table on the Kafka engine, reads the `auth.journal` topic. The second, the `payments` table on the MergeTree engine, stores the payments. The third, a materialized view, moves every new row from the first table into the second:

```sql
CREATE TABLE journal_stream (raw String) ENGINE = Kafka
SETTINGS kafka_broker_list = 'kafka-kafka-kafka-bootstrap:9092',
         kafka_topic_list = 'auth.journal', kafka_group_name = 'clickhouse-analytics',
         kafka_format = 'JSONAsString', kafka_max_block_size = 1000, kafka_poll_max_batch_size = 1000;

CREATE TABLE payments (...) ENGINE = MergeTree ...;

CREATE MATERIALIZED VIEW payments_stream_mv TO payments
AS SELECT ... FROM journal_stream;
```

The easiest way to load the file is with the same client, on standard input:

```bash
kubectl --context tenant exec -i chi-clickhouse-analytics-clickhouse-0-0-0 -c clickhouse -- \
  clickhouse-client --user fraud --password Fraud2026 --multiquery < manifests/05-analytics.sql
```

A couple of minutes later the `payments` table is answering queries and holds everything the switch has seen since the check was turned on:

```
$ clickhouse-client ... -q "SELECT count(*) AS stored_payments FROM payments"
329860   -- the journal has been growing since the check was turned on, so your number will differ

$ clickhouse-client ... -q "SELECT merchant, count(*) AS declines FROM payments
    WHERE decision = 'DECLINE' GROUP BY merchant ORDER BY declines DESC LIMIT 10"
```

{{< figure src="ch5a-clickhouse.gif" alt="Terminal recording: ClickHouse reading Kafka directly, the number of stored payments and the merchants with the most declines" caption="ClickHouse reads Kafka directly: stored payments and the merchants with the most declines" >}}

The file has three more example queries: merchants with the most declines, declines per minute, and the share of payments the switch approved without a check, also per minute. They all work on the same data the scorer uses for its decisions. ClickHouse, the dashboard and `cases` each read the journal in their own Kafka consumer group, so they do not get in each other's way.

The last step in this part is an S3 bucket for reports. It is also ordered with a declaration in Git: `platform/bucket.yaml` describes a `reports` bucket with one user, `analytics`.

```yaml
# platform/bucket.yaml
apiVersion: apps.cozystack.io/v1alpha1
kind: Bucket
metadata:
  name: reports
spec:
  users:
    analytics: {}
```

A bucket user here is not a person but a separate pair of S3 access keys that opens only this bucket. Cozystack creates the keys and puts them into the `bucket-reports-analytics-credentials` secret. The easiest place to read them is the Cozystack dashboard, on the `reports` bucket's page under Secrets. For the query you need `accessKey`, `secretKey` and `bucketName`, plus your platform's object storage address; on my environment that is `s3.workshop.aenix.io`. The query below has placeholders instead of the keys:

```sql
INSERT INTO FUNCTION s3('https://s3.workshop.aenix.io/<bucket>/daily-report.csv',
                        '<accessKey>', '<secretKey>', 'CSVWithNames')
SETTINGS s3_truncate_on_insert=1
SELECT merchant, count(*) AS declines FROM payments
WHERE decision = 'DECLINE' GROUP BY merchant ORDER BY declines DESC LIMIT 10;
```

```
$ clickhouse-client ... -q "SELECT count(*) FROM s3('...daily-report.csv', ...)"
10
```

The recording shows the report being exported to the bucket and the check that it arrived:

{{< figure src="ch5b2-bucket-export.gif" alt="Terminal recording: a report exported from ClickHouse to an S3 bucket with one INSERT and read back" caption="Exporting a report from ClickHouse to S3 with a single INSERT, then checking it" >}}

You can also open the report in a browser, in the object storage UI, which uses the same login as the Cozystack dashboard. Getting from a stream of payments in Kafka to a finished CSV file took one SQL file and not a single service of our own.

## Part 4. A very bad day: Black Friday, a database server failure and a VM migration

In the last part we test the system the way real life would, on the worst possible day for a bank. There are three trials, and they come almost back to back.

### 4.1. Black Friday and autoscaling

First, we describe the autoscaling. It is an ordinary `HorizontalPodAutoscaler` that targets an average of 250 millicores of CPU per pod and scales the scorer between one and eight replicas:

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: scorer
  namespace: fraud
spec:
  scaleTargetRef: {apiVersion: apps/v1, kind: Deployment, name: scorer}
  minReplicas: 1
  maxReplicas: 8
  metrics:
    - type: Resource
      resource:
        name: cpu
        target: {type: AverageValue, averageValue: 250m}
```

This object belongs to our own cluster, not to the platform, so we save it as `hpa.yaml` and apply it through the `fraud` context. The terminals read their traffic rate from a ConfigMap, and you can raise it without a restart: Kubernetes passes the new value to the pod within a minute.

```
$ kubectl --context fraud -n fraud patch configmap traffic -p '{"data":{"rate":"200"}}'
configmap/traffic patched
```

For the next few minutes, keep an eye on both the autoscaler and the dashboard:

```
$ kubectl --context fraud -n fraud get hpa scorer -w
scorer   Deployment/scorer   cpu: 182m/250m   1   8   1   15s
scorer   Deployment/scorer   cpu: 476m/250m   1   8   1   105s
scorer   Deployment/scorer   cpu: 491m/250m   1   8   2   2m
scorer   Deployment/scorer   cpu: 468m/250m   1   8   4   2m30s
```

A single scorer replica cannot handle ten times the traffic. Its CPU use goes far past the 250 millicore target, answers stop fitting into 400 milliseconds, and the switch starts deciding on its own. At that moment the dashboard shows 148 authorizations per second, 95% of them handled by the switch in stand-in mode. Decision latency hits the same 400 milliseconds, and the scorer's queue grows to fifteen hundred messages. In a real bank, these are the minutes when fraudulent payments go through unchecked.

Then the autoscaler kicks in. A minute and a half later two scorer replicas are running, two and a half minutes later four, and the queue is gone before you have worked out what is going on. If you pin the replica count at 12 (set both `minReplicas` and `maxReplicas` to 12), you will find that only eight replicas actually work, and the other four report `scored 0`. The reason is that the `auth.requests` topic has eight partitions, and within one Kafka consumer group each partition is read by only one consumer at a time. The scaling limit was set when the topic was created, and adding pods will not get around it. It is like a supermarket with eight checkouts: calling in a ninth cashier will not make the line move faster, because there is no free till for them.

When we bring the rate back to normal, `rate: 20`, the autoscaler scales the scorer back down to one replica on its own within about five minutes.

{{< figure src="ch6a-hpa.gif" alt="Terminal recording: CPU use goes past 250m and the scorer grows from one replica to two and then four" caption="Black Friday: CPU goes past 250m, and the scorer grows from one replica to two, then four" >}}

### 4.2. The primary database server fails

The second trial is the kind of failure you prepare for in advance: the server running the PostgreSQL primary goes down. CloudNativePG keeps a hot replica for us. Let's find the primary and delete its pod, as if the server had suddenly lost power. The `--grace-period=5` flag cuts the time for a clean shutdown to five seconds:

```
$ kubectl --context tenant get pods -l cnpg.io/cluster=postgres-cases -L role
postgres-cases-1   1/1   Running   0   5h   primary
postgres-cases-2   1/1   Running   0   5h   replica

$ kubectl --context tenant delete pod postgres-cases-1 --grace-period=5
pod "postgres-cases-1" deleted

$ kubectl --context tenant get pods -l cnpg.io/cluster=postgres-cases -L role -w
postgres-cases-2   1/1   Running      0   5h   primary        <-- a few seconds later
postgres-cases-1   0/1   Init:0/1     0   1s
postgres-cases-1   1/1   Running      0   27s   replica       <-- back as a replica
```

The switch-over took a few seconds. The operator promoted the replica to primary, and the deleted pod came back as a replica of the new primary. Now let's see how this affected payments. For a few seconds the dashboard showed the database as unavailable and the queue of entries waiting for the database grew a little, but that was all. The switch never talks to the database directly, and its journal waited calmly in Kafka the whole time. In the `cases` log it looks like this:

```
database unavailable, holding 140 messages, retrying
```

As soon as the database was available again, `cases` wrote all the pending messages into it. The reconciliation line on the dashboard compares the number of entries the switch wrote with the number of rows in the database, and within a minute it was back to `missing: 0`. Not a single entry was lost, because our main source of truth is the journal in Kafka, and the database simply catches up with it.

{{< figure src="ch6b-failover-migrate.gif" alt="Terminal recording: the PostgreSQL primary fails, the replica is promoted in seconds and pending entries are written to the database" caption="Losing the PostgreSQL primary: the replica takes over in seconds and pending entries are written to the database" >}}

### 4.3. The switch moves to another server without stopping

Banks usually run the last trial at night, during a maintenance window. The server the switch runs on needs maintenance, so we ask the platform to move the running virtual machine to another node:

```
$ kubectl --context tenant get vmi vm-instance-switch -o wide
vm-instance-switch   Running   10.244.44.136   ws3   ...

$ virtctl migrate vm-instance-switch
VM vm-instance-switch was scheduled to migrate

$ kubectl --context tenant get vmim -w
kubevirt-migrate-vm-bz5dk   Scheduling
kubevirt-migrate-vm-bz5dk   Scheduled
kubevirt-migrate-vm-bz5dk   PreparingTarget
kubevirt-migrate-vm-bz5dk   TargetReady
kubevirt-migrate-vm-bz5dk   Running
kubevirt-migrate-vm-bz5dk   Succeeded          <-- in under a minute

$ kubectl --context tenant get vmi vm-instance-switch -o wide
vm-instance-switch   Running   10.244.44.136   ws1   ...
```

While the machine keeps running, its memory is copied to the new server. The disk does not need to move, because it sits on replicated storage that both servers can reach. The VM's address stays the same, the switch does not restart, and the terminals keep sending payments before, during and after the move. The price of the move is a couple of seconds while the VM's network is set up on the new server. During those seconds a few authorizations go unanswered, and the terminals resend them with the same transaction ID, just as real store terminals do. The dashboard shows these payments under Repeated by the terminal, and Terminal errors stays at zero the whole time.

## What's next

You can go two ways from here. You can change the thresholds and weights in [`rules.go`](https://github.com/aenix-org/cozystack-workshop/blob/master/fraud/app/internal/scoring/rules.go), rebuild the image and see how the system handles the same attack. Or you can work through the rest of the [cozystack-workshop](https://github.com/aenix-org/cozystack-workshop) repository: [sixteen labs](https://github.com/aenix-org/cozystack-workshop/tree/master/en/laptop/labs), from your own cluster from the catalog to OpenBao and live migration of virtual machines, and the [VMware migration workshop](https://github.com/aenix-org/cozystack-workshop/tree/master/en/laptop), built the same way.
