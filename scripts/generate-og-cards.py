#!/usr/bin/env python3
"""Generate 1200x630 OG cards for role / tool / partner landing pages.
Brand: deep teal bg #0F4C5C, orange accent #E36414, cream text #F8F4F0.
Run: python3 scripts/generate-og-cards.py  -> writes static/img/og/*.png
"""
import glob
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "static", "img", "og")
os.makedirs(OUT, exist_ok=True)

def _font(*candidates):
    """First font that exists — the script runs on Linux CI and on macOS laptops."""
    for path in candidates:
        if os.path.exists(path):
            return path
    raise SystemExit("no usable font found; tried: " + ", ".join(candidates))


_LIBREOFFICE = "/opt/homebrew/Caskroom/libreoffice/*/LibreOffice.app/Contents/Resources/fonts/truetype"

FONT = _font(
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    *glob.glob(f"{_LIBREOFFICE}/DejaVuSans-Bold.ttf"),
)
FONT_R = _font(
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    *glob.glob(f"{_LIBREOFFICE}/DejaVuSans.ttf"),
)
BG = (15, 76, 92)        # #0F4C5C
ACCENT = (227, 100, 20)  # #E36414
CREAM = (248, 244, 240)  # #F8F4F0
MUTED = (181, 201, 207)  # #B5C9CF
W, H = 1200, 630

# (filename, eyebrow, title)
CARDS = [
    ("og-for", "BY ROLE", "Find your entry point"),
    ("og-head-of-infrastructure", "FOR HEADS OF INFRASTRUCTURE", "Exit VMware on your terms"),
    ("og-head-of-platform-engineering", "FOR PLATFORM ENGINEERING", "An IDP without the lock-in"),
    ("og-cto", "FOR CTOs & VPs OF ENGINEERING", "Control your cloud economics"),
    ("og-head-of-cloud", "FOR HEADS OF CLOUD · SI / MSP", "A cloud you resell or build"),
    ("og-head-of-alliances", "FOR HEADS OF ALLIANCES", "An open cloud line, up to 40% margin"),
    ("og-ciso", "FOR CISOs & COMPLIANCE LEADS", "Sovereignty you can evidence"),
    ("og-head-of-ai-ml", "FOR HEADS OF AI / ML", "GPU infrastructure you control"),
    ("og-vmware-exit-partners", "VMWARE EXIT FOR INTEGRATORS & MSPs", "Turn the renewal into margin"),
    ("og-vmware-cost-calculator", "TOOL", "VMware cost calculator"),
    ("og-ibm-migration", "IBM AIX / POWER MIGRATION", "Exit Power to an open cloud"),
    ("og-vmware-replacement-broadcom", "VMWARE REPLACEMENT", "Life after Broadcom"),
    # Customer case studies (shared EN + DE)
    ("og-case-bare-metal-gpu-inference", "CUSTOMER CASE · AI INFERENCE", "GPU inference on your own bare metal"),
    ("og-case-bare-metal-kubernetes-messaging-saas", "CUSTOMER CASE · SAAS PLATFORM", "Bare-metal Kubernetes for a SaaS"),
    ("og-case-unified-cloud-portal-financial-group", "CUSTOMER CASE · SELF-SERVICE PORTAL", "One portal over three infrastructures"),
    ("og-case-private-cloud-in-a-bank", "CUSTOMER CASE · BANKING", "A private cloud inside a bank"),
    ("og-case-internal-data-and-ai-platform", "CUSTOMER CASE · DATA & AI", "An internal data and AI platform"),
    ("og-case-metallb-evpn-address-mobility", "CUSTOMER CASE · NETWORKING", "When the return packet takes the wrong door"),
    # Calculators (hub, spokes, methodology)
    ("og-tco-calculator", "TCO CALCULATOR", "Cozystack vs 13 on-prem platforms"),
    ("og-tco-vs-vmware", "TCO · VS VMWARE", "VMware VCF, VVF and vSphere vs Cozystack"),
    ("og-tco-vs-nutanix", "TCO · VS NUTANIX", "Nutanix quote sensitivity vs Cozystack"),
    ("og-tco-vs-openshift", "TCO · VS OPENSHIFT", "OpenShift subscriptions vs Cozystack"),
    ("og-tco-vs-proxmox", "TCO · VS PROXMOX", "Where Proxmox VE stays cheaper"),
    ("og-tco-vs-openstack", "TCO · VS OPENSTACK", "OpenStack operations vs Cozystack"),
    ("og-tco-vs-cloudstack", "TCO · VS CLOUDSTACK", "CloudStack vs Cozystack"),
    ("og-tco-vs-opennebula", "TCO · VS OPENNEBULA", "OpenNebula vs Cozystack"),
    ("og-tco-vs-harvester", "TCO · VS HARVESTER", "Harvester vs Cozystack"),
    ("og-tco-vs-rancher", "TCO · VS RANCHER", "Rancher vs Cozystack"),
    ("og-tco-vs-virtuozzo", "TCO · VS VIRTUOZZO", "Virtuozzo vs Cozystack"),
    ("og-tco-methodology", "TCO · METHODOLOGY", "Every price, its source and its date"),
    ("og-cloud-calculator", "REPATRIATION CALCULATOR", "Your cloud bill vs your own hardware"),
    ("og-isp-calculator", "UNIT ECONOMICS", "What a node earns, not what it costs"),
    # DE
    ("og-fuer-de", "NACH ROLLE", "Ihr Einstieg zu Aenix"),
    ("og-leiter-infrastruktur-de", "FÜR INFRASTRUKTURLEITER", "VMware ablösen, zu Ihren Bedingungen"),
    ("og-leiter-platform-engineering-de", "FÜR PLATFORM ENGINEERING", "Eine IDP ohne Lock-in"),
    ("og-cto-de", "FÜR CTOs & VP ENGINEERING", "Cloud-Ökonomie zurückgewinnen"),
    ("og-leiter-cloud-de", "FÜR CLOUD-LEITER · SI / MSP", "Eine Cloud zum Wiederverkauf"),
    ("og-leiter-allianzen-de", "FÜR ALLIANZ-LEITER", "Offene Cloud-Linie, bis 40% Marge"),
    ("og-ciso-de", "FÜR CISOs & COMPLIANCE", "Belegbare Souveränität"),
    ("og-leiter-ai-ml-de", "FÜR AI / ML-LEITER", "GPU-Infrastruktur, die Sie kontrollieren"),
    ("og-vmware-exit-partners-de", "VMWARE-AUSSTIEG FÜR INTEGRATOREN", "Verlängerung zu Marge"),
    ("og-vmware-kostenrechner-de", "TOOL", "VMware-Kostenrechner"),
    ("og-ibm-migration-de", "IBM AIX / POWER MIGRATION", "Von Power zur offenen Cloud"),
    # Workshop landing (og-workshop-tour[-ru]) uses a bespoke campaign style —
    # generated by scripts/generate-workshop-og.py, NOT this default template.
]


def wrap(draw, text, font, max_w):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if draw.textlength(t, font=font) <= max_w:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def make(fn, eyebrow, title):
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    margin = 80
    # accent bar top-left
    d.rectangle([margin, 96, margin + 64, 104], fill=ACCENT)
    # wordmark
    wm = ImageFont.truetype(FONT, 40)
    d.text((margin, 120), "ÆNIX", font=wm, fill=CREAM)
    # eyebrow
    eb = ImageFont.truetype(FONT, 28)
    d.text((margin, 250), eyebrow, font=eb, fill=ACCENT)
    # title (wrap, autoshrink)
    size = 76
    while size > 40:
        tf = ImageFont.truetype(FONT, size)
        lines = wrap(d, title, tf, W - 2 * margin)
        if len(lines) <= 3:
            break
        size -= 4
    y = 300
    for ln in lines:
        d.text((margin, y), ln, font=tf, fill=CREAM)
        y += int(size * 1.18)
    # footer
    ff = ImageFont.truetype(FONT_R, 26)
    d.text((margin, H - 80), "aenix.io   ·   built on Cozystack (CNCF)", font=ff, fill=MUTED)
    img.save(os.path.join(OUT, fn + ".png"), "PNG")
    return fn


def make_default():
    """Site-wide fallback OG card: static/img/aenix-social-card.png.

    layouts/partials/seo/head.html falls back to img/aenix-social-card.png for
    every page without an `images:` entry — the large majority of the site — and
    jsonld-blogposting.html uses the same path for schema.org `image`. The file
    must therefore exist, or those pages advertise a 404 to every social
    scraper. Copy is the site title + params.description from hugo.yaml; keep
    them in sync.
    """
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    margin = 80
    d.rectangle([margin, 96, margin + 64, 104], fill=ACCENT)
    d.text((margin, 120), "ÆNIX", font=ImageFont.truetype(FONT, 40), fill=CREAM)
    d.text((margin, 250), "TURNKEY CLOUD PLATFORM ON COZYSTACK (CNCF)",
           font=ImageFont.truetype(FONT, 28), fill=ACCENT)
    tf = ImageFont.truetype(FONT, 64)
    y = 300
    for ln in wrap(d, "Sell cloud, run your own, or run AI on your own GPUs", tf, W - 2 * margin):
        d.text((margin, y), ln, font=tf, fill=CREAM)
        y += int(64 * 1.18)
    d.text((margin, H - 80), "aenix.io   ·   built on Cozystack (CNCF)",
           font=ImageFont.truetype(FONT_R, 26), fill=MUTED)
    path = os.path.join(os.path.dirname(__file__), "..", "static", "img", "aenix-social-card.png")
    img.save(path, "PNG")
    return os.path.normpath(path)


for c in CARDS:
    print("wrote", make(*c) + ".png")
print("wrote", make_default())
print("done:", len(CARDS), "cards ->", os.path.normpath(OUT))
