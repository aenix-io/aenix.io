#!/usr/bin/env python3
"""Architecture diagrams for the customer case studies, in English and German.

Each diagram is a list of rows drawn top to bottom. A row holds boxes and
arrows side by side; a box has a title, an optional line of detail and an
optional set of chips. The page is HTML laid out with flexbox in the blog
covers' palette and the site's Inter font, screenshotted by headless Chrome
at 2x for sharp text.

Run: python3 scripts/generate-case-diagrams.py            # every diagram
     python3 scripts/generate-case-diagrams.py <slug> ...  # selected cases
Writes static/img/case-studies/<slug>-<lang>.webp
"""
import html as H
import os
import shutil
import subprocess
import sys
import tempfile
import urllib.parse

from PIL import Image

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), ".."))
OUT = os.path.join(ROOT, "static", "img", "case-studies")
W, H_ = 1200, 1600  # tall canvas; the image is cropped to the diagram


def _chrome():
    if os.environ.get("CHROME"):
        return os.environ["CHROME"]
    for c in ("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", shutil.which("google-chrome"),
              shutil.which("google-chrome-stable"), shutil.which("chromium")):
        if c and os.path.exists(c):
            return c
    raise SystemExit("no Chrome found; set CHROME")


# --- building blocks ---------------------------------------------------------------------------
def box(title, detail="", chips=(), kind="", flex=1):
    return {"t": "box", "title": title, "detail": detail, "chips": list(chips), "kind": kind, "flex": flex}


def arrow(label="", down=False):
    return {"t": "arrow", "label": label, "down": down}


def down(label=""):
    return [arrow(label, down=True)]


# --- diagrams ----------------------------------------------------------------------------------
# kind: "" plain, "hl" highlighted (the platform), "ext" customer / external systems, "muted" before-state
D = {}

D["sovereign-public-cloud"] = {
    "en": ("Sovereign boundary · Switzerland", [
        [box("Data center 1", "compute nodes", ["DRBD replica", "etcd member"], "hl"),
         box("Data center 2", "compute nodes", ["DRBD replica", "etcd member"], "hl"),
         box("Data center 3", "compute nodes", ["DRBD replica", "etcd member"], "hl")],
        down("synchronous storage replication and etcd quorum across three sites"),
        [box("Separate object-storage cluster", "SeaweedFS S3", ["immutable backups", "object lock"], "ext", 2),
         box("Encryption", "throughout the platform", ["at rest", "in transit"], "", 1)],
    ]),
    "de": ("Souveräne Grenze · Schweiz", [
        [box("Rechenzentrum 1", "Compute-Knoten", ["DRBD-Replikat", "etcd-Mitglied"], "hl"),
         box("Rechenzentrum 2", "Compute-Knoten", ["DRBD-Replikat", "etcd-Mitglied"], "hl"),
         box("Rechenzentrum 3", "Compute-Knoten", ["DRBD-Replikat", "etcd-Mitglied"], "hl")],
        down("synchrone Speicherreplikation und etcd-Quorum über drei Standorte"),
        [box("Separater Objektspeicher-Cluster", "SeaweedFS S3", ["unveränderliche Backups", "Object Lock"], "ext", 2),
         box("Verschlüsselung", "durchgängig", ["at rest", "in transit"], "", 1)],
    ]),
}

D["ai-universal-installer"] = {
    "en": ("One distribution · platform layers · geo-distributed GPU", [
        [box("Client's products", "AI services delivered to end customers", [], "ext")],
        down(),
        [box("Multi-tenancy", "isolated tenants with their own quotas and access")],
        down(),
        [box("Cozystack framework", "", ["Kubernetes", "virtual machines", "storage", "networking", "managed services"], "hl", 3),
         arrow("encrypted mesh"),
         box("Geo-distributed GPU cluster", "", ["sites in several regions"], "", 2)],
        down(),
        [box("Hardware", "the customer's own servers", [], "muted")],
    ]),
    "de": ("Eine Distribution · Plattformschichten · Geo-GPU", [
        [box("Produkte des Kunden", "KI-Dienste für Endkunden", [], "ext")],
        down(),
        [box("Mandantenfähigkeit", "isolierte Mandanten mit eigenen Quotas und Zugriffen")],
        down(),
        [box("Cozystack-Framework", "", ["Kubernetes", "virtuelle Maschinen", "Storage", "Netzwerk", "Managed Services"], "hl", 3),
         arrow("verschlüsseltes Mesh"),
         box("Geografisch verteilter GPU-Cluster", "", ["Standorte in mehreren Regionen"], "", 2)],
        down(),
        [box("Hardware", "eigene Server des Kunden", [], "muted")],
    ]),
}

D["unified-cloud-portal-financial-group"] = {
    "en": ("One portal over three infrastructures", [
        [box("Frontend portals", "", ["Accounting", "Console", "Support"]),
         arrow(),
         box("Kubernetes API server", "aggregation layer and unified data bus", ["RBAC", "audit", "real-time watch"], "hl"),
         arrow(),
         box("Backend", "API services and controllers", ["accounting", "files (S3)", "usage & tariffs", "notifications", "logging"]),
         arrow(),
         box("Existing infrastructure", "", ["OpenNebula", "VMware", "Kubernetes-as-a-Service", "external databases"], "ext")],
    ]),
    "de": ("Ein Portal über drei Infrastrukturen", [
        [box("Frontend-Portale", "", ["Accounting", "Console", "Support"]),
         arrow(),
         box("Kubernetes-API-Server", "Aggregationsebene und einheitlicher Datenbus", ["RBAC", "Audit", "Echtzeit-Watch"], "hl"),
         arrow(),
         box("Backend", "API-Services und Controller", ["Accounting", "Dateien (S3)", "Verbrauch & Tarife", "Benachrichtigungen", "Logging"]),
         arrow(),
         box("Bestehende Infrastruktur", "", ["OpenNebula", "VMware", "Kubernetes-as-a-Service", "externe Datenbanken"], "ext")],
    ]),
}

D["multicloud-academic-gpu"] = {
    "en": ("One management cluster · one Cluster API", [
        [box("Management cluster", "Cozystack · Talos · Kamaji", ["tenant control planes", "Cluster API", "autoscaling"], "hl")],
        down("Cluster API adds and removes nodes where capacity is needed"),
        [box("Bare metal", "own servers", ["production", "staging"]),
         box("Public hyperscaler", "", ["on-demand GPU / CPU", "torn down after peaks"]),
         box("Sovereign cloud", "OpenStack", ["cheaper GPUs", "regulated customers"])],
        down("WireGuard mesh joins every site into one network"),
        [box("External Ceph", "shared files (CephFS)", ["reached over the mesh"], "ext")],
    ]),
    "de": ("Ein Management-Cluster · eine Cluster API", [
        [box("Management-Cluster", "Cozystack · Talos · Kamaji", ["Mandanten-Control-Planes", "Cluster API", "Autoscaling"], "hl")],
        down("Cluster API fügt Knoten dort hinzu, wo Kapazität gebraucht wird"),
        [box("Bare Metal", "eigene Server", ["Produktion", "Staging"]),
         box("Öffentlicher Hyperscaler", "", ["GPU / CPU bei Bedarf", "nach Lastspitzen abgebaut"]),
         box("Souveräne Cloud", "OpenStack", ["günstigere GPUs", "regulierte Kunden"])],
        down("WireGuard-Mesh verbindet alle Standorte zu einem Netz"),
        [box("Externes Ceph", "gemeinsame Dateien (CephFS)", ["über das Mesh erreichbar"], "ext")],
    ]),
}

D["bare-metal-gpu-inference"] = {
    "en": ("One 8×H100 bare-metal node, layer by layer", [
        [box("Client ML workers", "", ["inference models", "RabbitMQ queues", "sync and async requests"], "ext")],
        down(),
        [box("Nested tenant Kubernetes", "", ["GPUs passed through", "NVIDIA GPU Operator inside"])],
        down(),
        [box("Isolated tenant", "", ["dedicated etcd", "secrets", "registry", "monitoring"])],
        down(),
        [box("Cozystack over k3s / generic Linux", "", ["LINSTOR", "Cilium + Kube-OVN", "KubeVirt", "vfio-pci passthrough", "MetalLB"], "hl")],
        down(),
        [box("Bare metal", "", ["8× NVIDIA H100 80GB", "NVLink", "2 TB RAM"], "muted")],
    ]),
    "de": ("Ein Bare-Metal-Knoten mit 8×H100, Schicht für Schicht", [
        [box("ML-Worker des Kunden", "", ["Inferenzmodelle", "RabbitMQ-Queues", "sync und async"], "ext")],
        down(),
        [box("Verschachteltes Mandanten-Kubernetes", "", ["durchgereichte GPUs", "NVIDIA GPU Operator darin"])],
        down(),
        [box("Isolierter Mandant", "", ["eigenes etcd", "Secrets", "Registry", "Monitoring"])],
        down(),
        [box("Cozystack über k3s / generisches Linux", "", ["LINSTOR", "Cilium + Kube-OVN", "KubeVirt", "vfio-pci-Passthrough", "MetalLB"], "hl")],
        down(),
        [box("Bare Metal", "", ["8× NVIDIA H100 80GB", "NVLink", "2 TB RAM"], "muted")],
    ]),
}

D["private-cloud-in-a-bank"] = {
    "en": ("Bank private cloud · inside the bank's existing controls", [
        [box("Internal teams", "", ["web console", "public API"]),
         arrow(),
         box("Cozystack platform · per tenant", "", ["RBAC", "quotas", "firewall", "load balancer", "ACL", "backup policy", "threshold monitoring"], "hl", 2),
         arrow(),
         box("Bank systems", "", ["Keycloak · group & role mapping", "external Ceph storage"], "ext")],
        down("usage reports"),
        [box("", "", [], "spacer"), box("Internal chargeback", "consumption per service and per user", [], "", 2), box("", "", [], "spacer")],
    ]),
    "de": ("Private Cloud in der Bank · innerhalb der bestehenden Kontrollen", [
        [box("Interne Teams", "", ["Webkonsole", "öffentliche API"]),
         arrow(),
         box("Cozystack-Plattform · je Tenant", "", ["RBAC", "Quotas", "Firewall", "Load Balancer", "ACL", "Backup-Policy", "Schwellwert-Monitoring"], "hl", 2),
         arrow(),
         box("Systeme der Bank", "", ["Keycloak · Gruppen- und Rollen-Mapping", "externer Ceph-Speicher"], "ext")],
        down("Verbrauchsberichte"),
        [box("", "", [], "spacer"), box("Interne Leistungsverrechnung", "Verbrauch je Dienst und je Nutzer", [], "", 2), box("", "", [], "spacer")],
    ]),
}

D["internal-data-and-ai-platform"] = {
    "en": ("Internal data and AI platform", [
        [box("Data services", "", ["S3 object storage", "databases", "model artefacts"], "ext", 2),
         box("GitOps pipelines", "", ["declarative delivery"], "ext", 1)],
        down(),
        [box("One scheduler", "places pods and virtual machines", [], "hl", 2),
         box("Usage metrics", "", ["billing", "quotas", "inventory"], "", 1)],
        down(),
        [box("GPU pools", "", ["time-slicing", "per-tenant quotas"], "", 1),
         box("GPU lifecycle", "", ["automated provisioning", "passthrough to VM and Kubernetes", "driver management", "autoscaling", "decommissioning", "rolling upgrades"], "", 2)],
    ]),
    "de": ("Interne Daten- und KI-Plattform", [
        [box("Datendienste", "", ["S3-Objektspeicher", "Datenbanken", "Modell-Artefakte"], "ext", 2),
         box("GitOps-Pipelines", "", ["deklarative Auslieferung"], "ext", 1)],
        down(),
        [box("Ein Scheduler", "platziert Pods und virtuelle Maschinen", [], "hl", 2),
         box("Verbrauchsmetriken", "", ["Billing", "Quotas", "Inventar"], "", 1)],
        down(),
        [box("GPU-Pools", "", ["Time-Slicing", "Quotas je Tenant"], "", 1),
         box("GPU-Lifecycle", "", ["automatisiertes Provisioning", "Passthrough zu VM und Kubernetes", "Treiberverwaltung", "Autoscaling", "Außerbetriebnahme", "Rolling Upgrades"], "", 2)],
    ]),
}

D["bare-metal-kubernetes-messaging-saas"] = {
    "en": ("Consolidation · 13 hypervisor hosts onto one cluster", [
        [box("Before", "13 Proxmox hosts", ["manual operations"], "muted", 1),
         arrow(),
         box("One Cozystack cluster on Talos · 8 nodes", "", ["3 control-plane nodes · HA etcd", "5 dual-NVMe workers"], "hl", 3)],
        down(),
        [box("Customer workloads", "~25,000 per-customer containers, unchanged", ["KubeVirt VMs", "local subnet"]),
         box("Managed databases", "", ["MongoDB", "PostgreSQL", "RabbitMQ", "LINSTOR / DRBD over ZFS"]),
         box("API services", "", ["nested Kubernetes", "ArgoCD"]),
         box("Object storage", "SeaweedFS S3", ["media", "backups"], "ext")],
    ]),
    "de": ("Konsolidierung · 13 Hypervisor-Hosts auf einen Cluster", [
        [box("Vorher", "13 Proxmox-Hosts", ["manueller Betrieb"], "muted", 1),
         arrow(),
         box("Ein Cozystack-Cluster auf Talos · 8 Knoten", "", ["3 Control-Plane-Knoten · HA-etcd", "5 Dual-NVMe-Worker"], "hl", 3)],
        down(),
        [box("Kunden-Workloads", "~25.000 kundenspezifische Container, unverändert", ["KubeVirt-VMs", "lokales Subnetz"]),
         box("Verwaltete Datenbanken", "", ["MongoDB", "PostgreSQL", "RabbitMQ", "LINSTOR / DRBD über ZFS"]),
         box("API-Dienste", "", ["verschachteltes Kubernetes", "ArgoCD"]),
         box("Objektspeicher", "SeaweedFS S3", ["Medien", "Backups"], "ext")],
    ]),
}


# --- rendering ---------------------------------------------------------------------------------
def _block(b):
    if b["t"] == "arrow":
        if b["down"]:
            lab = f'<span class="al">{H.escape(b["label"])}</span>' if b["label"] else ""
            return f'<div class="down"><span class="dv">↓</span>{lab}</div>'
        lab = f'<span class="al">{H.escape(b["label"])}</span>' if b["label"] else ""
        return f'<div class="arr">{lab}<span>→</span></div>'
    if b["kind"] == "spacer":
        return f'<div class="spacer" style="flex:{b["flex"]}"></div>'
    chips = "".join(f'<span class="chip">{H.escape(c)}</span>' for c in b["chips"])
    det = f'<div class="d">{H.escape(b["detail"])}</div>' if b["detail"] else ""
    tt = f'<div class="t">{H.escape(b["title"])}</div>' if b["title"] else ""
    return f'<div class="box {b["kind"]}" style="flex:{b["flex"]}">{tt}{det}<div class="chips">{chips}</div></div>'


def page(label, rows):
    fonts = urllib.parse.quote(os.path.join(ROOT, "static/fonts"))
    aenix = open(os.path.join(ROOT, "static/images/logo-full-white.svg")).read()
    body = []
    for r in rows:
        if len(r) == 1 and r[0]["t"] == "arrow" and r[0]["down"]:
            body.append(_block(r[0]))
        else:
            body.append('<div class="row">' + "".join(_block(b) for b in r) + "</div>")
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
@font-face {{ font-family: Inter; font-weight: 700; src: url(file://{fonts}/inter-700-latin.woff2); }}
@font-face {{ font-family: Inter; font-weight: 500; src: url(file://{fonts}/inter-500-latin.woff2); }}
html,body {{ margin:0; width:{W}px; background:#fff; }}
.c {{ box-sizing:border-box; width:{W}px; min-height:560px; padding:36px 40px 36px; font-family:Inter,sans-serif; color:#fff;
  display:flex; flex-direction:column;
  background: radial-gradient(ellipse 620px 420px at 1000px 120px, rgba(46,92,255,.45), transparent 70%),
              radial-gradient(ellipse 600px 380px at 120px 640px, rgba(120,60,255,.30), transparent 70%),
              linear-gradient(115deg, #050a2e 0%, #0a1460 50%, #1430b8 100%); }}
.top {{ display:flex; justify-content:space-between; align-items:center; margin-bottom:18px; }}
.lab {{ font-weight:700; font-size:16px; letter-spacing:.22em; text-transform:uppercase; color:#9fb4ff; }}
.top svg {{ height:28px; width:auto; opacity:.9; }}
.grid {{ flex:1; display:flex; flex-direction:column; justify-content:center; gap:8px; }}
.row {{ display:flex; gap:12px; align-items:stretch; }}
.box {{ box-sizing:border-box; min-width:0; background:rgba(255,255,255,.07); border:1.5px solid rgba(160,185,255,.35);
  border-radius:14px; padding:14px 16px; }}
.box.hl {{ background:linear-gradient(135deg, rgba(90,110,255,.55), rgba(40,150,255,.45)); border-color:rgba(190,210,255,.8);
  box-shadow:0 0 28px rgba(70,120,255,.45); }}
.box.ext {{ background:rgba(20,170,220,.12); border-color:rgba(80,210,240,.55); }}
.box.muted {{ background:rgba(255,255,255,.04); border-color:rgba(255,255,255,.22); border-style:dashed; }}
.spacer {{ min-width:0; }}
.t {{ font-weight:700; font-size:23px; line-height:1.2; }}
.d {{ font-weight:500; font-size:18px; color:#c9d6ff; margin-top:4px; line-height:1.3; }}
.chips {{ display:flex; flex-wrap:wrap; gap:6px; margin-top:8px; }}
.chips:empty {{ display:none; }}
.chip {{ font-weight:500; font-size:16px; padding:5px 11px; border-radius:999px; background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.22); color:#eef2ff; white-space:nowrap; }}
.arr {{ display:flex; flex-direction:column; justify-content:center; align-items:center; color:#7fd8ff; font-size:32px; font-weight:700; padding:0 2px; }}
.down {{ display:flex; justify-content:center; align-items:center; gap:10px; color:#7fd8ff; font-weight:700; font-size:26px; height:32px; }}
.al {{ font-weight:500; font-size:16px; color:#9fdcff; letter-spacing:.01em; }}
</style></head><body><div class="c"><div class="top"><span class="lab">{H.escape(label)}</span>{aenix}</div>
<div class="grid">{''.join(body)}</div></div></body></html>"""


def render(label, rows, out_png):
    with tempfile.TemporaryDirectory() as tmp:
        src, png = os.path.join(tmp, "d.html"), os.path.join(tmp, "d.png")
        open(src, "w", encoding="utf-8").write(page(label, rows))
        cmd = [_chrome(), "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=2",
               f"--window-size={W},{H_}", "--allow-file-access-from-files", f"--screenshot={png}",
               "--virtual-time-budget=2000", "file://" + src]
        if hasattr(os, "geteuid") and os.geteuid() == 0:
            cmd.insert(1, "--no-sandbox")
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode or not os.path.exists(png):
            raise SystemExit(f"Chrome failed on {out_png}:\n{res.stderr[-2000:]}")
        img = Image.open(png).convert("RGB")
        # The diagram sits on a white page; crop to it.
        from PIL import ImageChops
        bg = Image.new("RGB", img.size, (255, 255, 255))
        img = img.crop(ImageChops.difference(img, bg).getbbox())
        img.save(out_png, "WEBP", quality=90, method=6)


def main():
    only = sys.argv[1:]
    os.makedirs(OUT, exist_ok=True)
    for slug, langs in D.items():
        if only and slug not in only:
            continue
        for lang, (label, rows) in langs.items():
            out = os.path.join(OUT, f"{slug}-{lang}.webp")
            render(label, rows, out)
            print(os.path.relpath(out, ROOT))


if __name__ == "__main__":
    main()
