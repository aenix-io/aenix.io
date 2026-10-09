---
title: "Cozystack mit Ansible auf jedem Kubernetes installieren"
description: "Cozystack mit der Collection ansible-cozystack auf einem bestehenden Kubernetes-Cluster installieren, für Teams, die den Stack nicht auf Talos Linux betreiben."
slug: "cozystack-ansible-beliebiges-kubernetes"
date: "2026-03-04"
cover_image: "/img/blog/covers/de/cozystack-ansible-beliebiges-kubernetes.jpg"
author: "Timur Tukaev"
type: "tutorial"
topics: ["DevOps", "Open Source", "Ansible", "Kubernetes", "Platform Engineering", "Cozystack"]
language: "de"
hreflang_en: "/blog/2026/03/deploy-cozystack-on-any-kubernetes-with-ansible/"
quiz:
  title: "Testen Sie sich: Cozystack per Ansible"
  questions:
    - q: "Wie heißt die offizielle Ansible-Collection, die Cozystack auf Generic Kubernetes ausrollt?"
      options:
        - { text: "cozystack.installer", correct: true }
        - { text: "cozystack.bootstrap", correct: false }
        - { text: "aenix.deploy", correct: false }
      explanation: "cozystack.installer automatisiert die komplette Installation von Cozystack auf Generic Kubernetes (k3s, kubeadm oder RKE2): Ein einziger Lauf von ansible-playbook ergibt eine vollständig konfigurierte Cloud-Plattform."
    - q: "Welche Kubernetes-Installer unterstützt die Ansible-Collection?"
      options:
        - { text: "k3s, kubeadm oder RKE2", correct: true }
        - { text: "Nur k3s mit eingebettetem etcd", correct: false }
        - { text: "Nur kubeadm mit gestackter Control Plane", correct: false }
      explanation: "cozystack.installer unterstützt k3s, kubeadm und RKE2, die drei verbreitetsten Wege, Generic Kubernetes auf gewöhnlichen Linux-Distributionen zu installieren."
    - q: "Welche Zielgruppe wird als ERSTE für den Ansible-Installer genannt?"
      options:
        - { text: "Hobbyisten mit Kubernetes auf Homelab-Hardware", correct: false }
        - { text: "Hochschulen mit kurzlebigen Clustern für die Lehre", correct: false }
        - { text: "Regulierte Umgebungen mit vorgeschriebener Linux-Distribution", correct: true }
      explanation: "Genannt werden vier Zielgruppen: (1) regulierte Umgebungen mit vorgeschriebener Linux-Distribution, (2) bestehende K8s-Cluster, die Cozystack-Funktionen ohne Neuaufbau erhalten sollen, (3) Teams mit mehreren Umgebungen (Konfiguration einmal definieren), (4) CI/CD-Workflows (Bereitstellung von Cozystack in die Automatisierung integrieren)."
    - q: "Wie soll die Collection laut Artikel installiert werden?"
      options:
        - { text: "apt-get install cozystack aus dem Paketarchiv des Betriebssystems", correct: false }
        - { text: "helm install cozystack über das offizielle Helm-Chart", correct: false }
        - { text: "ansible-galaxy collection install aus dem GitHub-Repository", correct: true }
      explanation: "Der Installationsbefehl lautet `ansible-galaxy collection install git+https://github.com/cozystack/ansible-cozystack.git`. Das Repository enthält ein vollständiges Beispiel: von nackten Ubuntu-Nodes zur laufenden Cozystack-Plattform mit einem Befehl."
    - q: "Warum gibt es diesen Weg neben dem Standard, Cozystack auf Talos zu betreiben?"
      options:
        - { text: "Talos wurde von den Upstream-Maintainern abgekündigt", correct: false }
        - { text: "Für Teams, die Talos wegen Richtlinien oder Infrastruktur nicht einsetzen können", correct: true }
        - { text: "Ansible ist in jedem Benchmark schneller als der Talos-Installer", correct: false }
      explanation: "Für Teams, die den vollständigen Cozystack-Stack mit Talos nicht einsetzen können, sei es wegen Unternehmensrichtlinien (vorgeschriebene Linux-Distributionen), bestehender Infrastruktur (bereits aufgebaute K8s-Cluster) oder betriebssystemspezifischer Anforderungen (bestimmte Kernel-Module, Treiber, Pakete), bringt die Ansible-Collection dieselbe Cozystack-Erfahrung auf bestehende Cluster."
---

Für Teams, die den vollständigen Cozystack-Stack mit Talos Linux nicht einsetzen können, sei es wegen Unternehmensrichtlinien, bestehender Infrastruktur oder betriebssystemspezifischer Anforderungen, gibt es jetzt eine offizielle Ansible-Collection, die dieselbe Cozystack-Erfahrung auf Ihre bestehenden Cluster bringt.

![Cozystack mit Ansible auf jedem Kubernetes installieren](/img/blog/medium/deploy-cozystack-on-any-kubernetes-with-ansible/cover.jpg)

cozystack.installer automatisiert die komplette Installation von Cozystack auf Generic Kubernetes (k3s, kubeadm oder RKE2): Ein einziger Lauf von ansible-playbook ergibt eine vollständig konfigurierte Cloud-Plattform.

Für wen ist das gedacht
1. Regulierte Umgebungen: Ihr Unternehmen schreibt eine bestimmte Linux-Distribution vor, und ein Austausch des Betriebssystems kommt nicht infrage.
2. Bestehende Cluster: Sie betreiben bereits Kubernetes und möchten Cozystack-Funktionen ergänzen, also S3-Speicher, DBaaS, VMs und eine Management-Oberfläche, ohne alles neu aufzubauen.
3. Teams mit mehreren Umgebungen: Sie definieren Ihre Konfiguration einmal und übertragen sie mit einem einzigen Playbook auf Dev, Staging und Produktion.
4. CI/CD-Workflows: Sie integrieren die Bereitstellung von Cozystack in Ihre bestehenden Automatisierungs-Pipelines.

Probieren Sie es selbst aus

```
ansible-galaxy collection install git+https://github.com/cozystack/ansible-cozystack.git
```

Das Repository enthält ein vollständiges Beispiel: von nackten Ubuntu-Nodes zur laufenden Cozystack-Plattform mit einem einzigen Befehl.

[https://github.com/cozystack/ansible-cozystack](https://github.com/cozystack/ansible-cozystack)

---

Dieser Beitrag ist eine deutsche Fassung des Artikels [Deploy Cozystack on any Kubernetes with Ansible](https://blog.aenix.io/deploy-cozystack-on-any-kubernetes-with-ansible-b28e61f586f9), zuerst erschienen bei [Ænix](https://blog.aenix.io) auf Medium.
