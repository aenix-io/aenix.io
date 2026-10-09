#!/usr/bin/env python3
"""Social preview (OG) images, 1200x630, in the style of the blog covers.

Two kinds of image:

* Named cards (CARDS below) for landing pages that set `images:` in their front
  matter, plus the site-wide fallback static/img/aenix-social-card.jpg.
* One card per page that has neither `images:` nor `cover_image:`, written to
  static/img/og/pages/<key>.jpg, where <key> is the page's path with "/"
  replaced by "--" ("home" for the front page). layouts/partials/seo/head.html
  picks that file up by the same key, so no front matter has to change.

Drawing is shared with scripts/generate-blog-covers.py: the same isometric
scenes, palette, Inter font and Cozystack / Aenix marks.

Run: python3 scripts/generate-og-cards.py            # named cards + default + every page
     python3 scripts/generate-og-cards.py --cards    # named cards and the default only
     python3 scripts/generate-og-cards.py --pages    # per-page cards only (builds the site with hugo)
     python3 scripts/generate-og-cards.py --static   # the shareable static pages only
"""
import hashlib
import html as H
import importlib.util
import os
import re
import shutil
import subprocess
import sys
import tempfile
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), ".."))
OUT = os.path.join(ROOT, "static", "img", "og")
PAGES_OUT = os.path.join(OUT, "pages")
DEFAULT_CARD = os.path.join(ROOT, "static", "img", "aenix-social-card.jpg")

sys.dont_write_bytecode = True  # importing the covers script must not leave __pycache__ in scripts/
_spec = importlib.util.spec_from_file_location("covers", os.path.join(os.path.dirname(__file__), "generate-blog-covers.py"))
covers = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(covers)

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
    ("og-isp-calculator-de", "UNIT ECONOMICS · HOSTING", "Was ein Node einbringt, nicht was er kostet"),
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
    # Product line + pricing. These pages already declare
    # images: ["img/og/<slug>.png"], so without these entries the commercially
    # most important pages on the site advertised a 404 to every social scraper.
    # Copy is taken from each page's own published title — do not invent new
    # positioning here; if a page is retitled, retitle its card to match.
    ("products", "PRODUCTS", "Three platforms on one engine"),
    ("public-cloud-platform", "ÆNIX PUBLIC CLOUD PLATFORM", "For everyone who sells cloud"),
    ("private-cloud-platform", "ÆNIX PRIVATE CLOUD PLATFORM", "Run your own cloud, on your own terms"),
    ("ai-platform", "ÆNIX AI PLATFORM", "Sovereign AI and GPU infrastructure"),
    ("cozystack-enterprise-support", "ENTERPRISE SUPPORT", "Enterprise support for Cozystack"),
    ("pricing", "PRICING", "Ænix Platform pricing"),
    # Case studies whose pages reference a card that was never generated
    ("og-case-ai-universal-installer", "CUSTOMER CASE · AI PLATFORM",
     "An AI platform shipped into the customer's environment"),
    ("og-case-multicloud-academic-gpu", "CUSTOMER CASE · ACADEMIC GPU",
     "From public cloud to bare metal, bursting on demand"),
    ("og-case-sovereign-public-cloud", "CUSTOMER CASE · SOVEREIGN CLOUD",
     "A sovereign public cloud on bare metal"),    # Product and pricing pages
    ("ai-platform", "PRODUCT", "Ænix AI Platform — sovereign AI and GPU infrastructure"),
    ("cozystack-enterprise-support", "PRODUCT", "Enterprise support for Cozystack"),
    ("pricing", "PRICING", "Ænix Platform pricing"),
    ("private-cloud-platform", "PRODUCT", "Ænix Private Cloud Platform"),
    ("products", "PRODUCTS", "Ænix products"),
    ("public-cloud-platform", "PRODUCT", "Ænix Public Cloud Platform — for everyone who sells cloud"),
]


SMALL = {"of", "for", "and", "on", "to", "the", "in", "vs", "a", "an", "by", "&", "und", "für", "von", "mit", "zu", "im", "der", "die", "das"}
ACRONYMS = {"AI", "ML", "KI", "GPU", "TCO", "IDP", "SI", "MSP", "MSPS", "CTO", "CTOS", "CISO", "CISOS", "VPS", "DORA", "NIS2",
            "IBM", "AIX", "ROI", "API", "EU", "OSS", "CNCF", "IT", "OT", "SRE", "LLM", "VM", "VMS", "VCF", "VVF", "ISP", "SAAS"}


def pill_case(text):
    """'FOR CTOs & VPs OF ENGINEERING' -> 'For CTOs & VPs of Engineering'."""
    out = []
    for i, w in enumerate(text.split()):
        core = re.sub(r"[^\w]", "", w)
        if any(c.islower() for c in w) or core.upper() in ACRONYMS or not core:
            out.append(w)
        elif i and w.lower() in SMALL:
            out.append(w.lower())
        else:
            out.append(w[:1] + w[1:].lower())
    return " ".join(out)


def seed_of(name):
    return int(hashlib.sha1(name.encode()).hexdigest()[:8], 16)


def make(fn, eyebrow, title, out=None):
    out = out or os.path.join(OUT, fn + ".jpg")
    motif = covers.motif_for(fn, title + " " + eyebrow)
    covers.render(title, pill_case(eyebrow), motif, out, seed_of(fn), seed_of(fn) % 4)
    return out


DEFAULT_SRC = os.path.join(ROOT, "scripts", "og-src", "aenix-social-banner.png")


def make_default():
    """Site-wide fallback and front-page card: the brand banner (designed, not
    generated). Converted from the 1200x630 PNG source to an optimized JPG."""
    from PIL import Image
    Image.open(DEFAULT_SRC).convert("RGB").save(DEFAULT_CARD, quality=86, optimize=True, progressive=True)
    return DEFAULT_CARD


# --- per-page cards ------------------------------------------------------------------------------
SECTIONS = {  # first path segment -> (EN label, DE label, motif)
    "services": ("Services", "Dienstleistungen", None), "dienstleistungen": ("Services", "Dienstleistungen", None),
    "solutions": ("Solutions", "Lösungen", None), "loesungen": ("Solutions", "Lösungen", None),
    "industries": ("Industries", "Branchen", None), "branchen": ("Industries", "Branchen", None),
    "resources": ("Resources", "Ressourcen", None), "ressourcen": ("Resources", "Ressourcen", None),
    "alternatives": ("Alternatives", "Alternativen", "compare"), "alternativen": ("Alternatives", "Alternativen", "compare"),
    "compare": ("Comparison", "Vergleich", "compare"), "vergleichen": ("Comparison", "Vergleich", "compare"),
    "migration": ("Migration", "Migration", "migration"),
    "compliance": ("Compliance", "Compliance", "security"),
    "certification": ("Certification", "Zertifizierung", "devx"),
    "products": ("Product", "Produkt", None), "produkte": ("Product", "Produkt", None),
    "topics": ("Topic", "Thema", None),
    "case-studies": ("Customer case", "Kundenfall", None),
    "workshop": ("Workshop", "Workshop", "migration"), "workshops": ("Workshop", "Workshop", "migration"),
    "webinars": ("Webinar", "Webinar", None), "web0826": ("Webinar", "Webinar", None),
    "blog": ("Blog", "Blog", None), "authors": ("Blog", "Blog", None), "types": ("Blog", "Blog", None),
    "pricing": ("Pricing", "Preise", "cost"), "preise": ("Pricing", "Preise", "cost"),
    "roi-calculator": ("ROI calculator", "ROI-Rechner", "cost"), "roi-rechner": ("ROI calculator", "ROI-Rechner", "cost"),
    "about": ("About", "Über uns", None), "ueber-uns": ("About", "Über uns", None),
    "contact": ("Contact", "Kontakt", None), "kontakt": ("Contact", "Kontakt", None),
    "partners": ("Partners", "Partner", None), "partner": ("Partners", "Partner", None),
    "conferences": ("Events", "Konferenzen", None), "konferenzen": ("Events", "Konferenzen", None),
    "kubernetes-deep-dive": ("Deep dive", "Deep Dive", "devx"),
    "idp": ("Platform Engineering", "Platform Engineering", "devx"),
    "quiz": ("Quiz", "Quiz", None), "demo": ("Demo", "Demo", None),
    "oss-contribution": ("Open source", "Open Source", "devx"),
    "privacy-policy": ("Legal", "Rechtliches", None), "impressum": ("Legal", "Rechtliches", None),
}


def page_key(rel):
    key = rel.strip("/").replace("/", "--")
    return key or "home"


def _meta(html_text, prop):
    m = re.search(r'<meta (?:property|name)="%s" content="([^"]*)"' % re.escape(prop), html_text)
    return H.unescape(m.group(1)) if m else ""


def _split(title, desc):
    """Title and a short second line: the title's own subtitle, else the first sentence of the description."""
    head, sub = covers.split_title(title)
    if sub or not desc:
        return head, sub
    desc = re.split(r"(?<=[.!?])\s", desc.strip(), maxsplit=1)[0]
    if len(desc) > 120:
        desc = desc[:120].rsplit(" ", 1)[0].rstrip(",;:—-") + "…"
    return title, desc


def build_site():
    tmp = tempfile.mkdtemp(prefix="aenix-og-")
    res = subprocess.run(["hugo", "--quiet", "-d", tmp], cwd=ROOT, capture_output=True, text=True)
    if res.returncode:
        raise SystemExit("hugo build failed:\n" + res.stderr[-3000:])
    return tmp


def page_jobs(public):
    """Pages whose preview falls back to the site default today."""
    jobs = []
    default_url = "img/aenix-social-card.jpg"
    for root, dirs, files in os.walk(public):
        dirs[:] = [d for d in dirs if d != "page"]  # paginator copies share their section's card
        if "index.html" not in files:
            continue
        text = open(os.path.join(root, "index.html"), encoding="utf-8", errors="ignore").read()
        if 'http-equiv="refresh"' in text[:800]:
            continue
        og = _meta(text, "og:image")
        rel = "/" + os.path.relpath(root, public).replace(os.sep, "/") + "/"
        rel = "/" if rel == "/./" else rel
        if not (og.endswith(default_url) or "/img/og/pages/" in og):
            continue
        if rel == "/":  # the front page uses the brand banner (the site default)
            continue
        parts = rel.strip("/").split("/")
        lang = "de" if parts[0] == "de" else "en"
        section = parts[1] if lang == "de" and len(parts) > 1 else parts[0]
        en_label, de_label, motif = SECTIONS.get(section, ("Ænix Platform", "Ænix Platform", None))
        label = de_label if lang == "de" else en_label
        title = _meta(text, "og:title") or "Ænix"
        if section == "topics" and len(parts) > 1:
            title = f"{title} — articles, guides and news"
        head, sub = _split(title, _meta(text, "og:description"))
        pill = label if label.startswith("Ænix") else "Ænix · " + label
        jobs.append((page_key(rel), pill, head, sub, motif))
    return jobs


def render_page(job):
    key, pill, title, sub, motif = job
    out = os.path.join(PAGES_OUT, key + ".jpg")
    covers.render(title, pill, motif or covers.motif_for(key, title), out, seed_of(key), seed_of(key) % 4, sub=sub)
    return key


def generate_pages():
    public = build_site()
    try:
        jobs = page_jobs(public)
    finally:
        shutil.rmtree(public, ignore_errors=True)
    os.makedirs(PAGES_OUT, exist_ok=True)
    keep = {j[0] + ".jpg" for j in jobs} | {page_key(p[0]) + ".jpg" for p in STATIC_PAGES}
    for f in os.listdir(PAGES_OUT):  # pages that now have their own image or no longer exist
        if f not in keep:
            os.remove(os.path.join(PAGES_OUT, f))
    with ThreadPoolExecutor(max_workers=6) as pool:
        for i, key in enumerate(pool.map(render_page, jobs), 1):
            if i % 25 == 0:
                print(f"  {i}/{len(jobs)}")
    print(f"pages: {len(jobs)} cards -> {os.path.relpath(PAGES_OUT, ROOT)}")


# Hand-written HTML pages under static/ that people share as links. Their card
# is rendered like any other page and the tags are written into the file.
STATIC_PAGES = [  # (path under static/, pill, card title)
    ("links/cozystack", "Cozystack", "Cozystack — Free and open-source platform for building clouds"),
    ("links/andrei.kvapil", "Ænix", "Andrei Kvapil — Chief Executive Officer at Ænix"),
    ("links/timur.tukaev", "Ænix", "Timur Tukaev — Chief Operating Officer at Ænix"),
    ("links/cloudfest2026", "CloudFest 2026", "Meet Ænix at CloudFest 2026 — Booth Z22, live demos and architecture discussions"),
    ("links/cloudfest2026/americas", "CloudFest Americas 2026", "Ænix at CloudFest Americas 2026 — Book a meeting with our team"),
    ("con", "AenixCon 2026", "AenixCon 2026 — The open cloud-native conference, December 10–11, online"),
]
SITE = "https://aenix.io"


def generate_static_pages():
    os.makedirs(PAGES_OUT, exist_ok=True)
    for path, pill, title in STATIC_PAGES:
        key = page_key(path)
        out = os.path.join(PAGES_OUT, key + ".jpg")
        covers.render(title, pill, covers.motif_for(key, title), out, seed_of(key), seed_of(key) % 4)
        html_path = os.path.join(ROOT, "static", path, "index.html")
        text = open(html_path, encoding="utf-8").read()
        text = re.sub(r'\n?<meta (?:property|name)="(?:og:image(?::width|:height)?|og:url|twitter:card|twitter:image)" content="[^"]*">', "", text)
        url = f"{SITE}/img/og/pages/{key}.jpg"
        tags = (f'<meta property="og:url" content="{SITE}/{path}/">\n'
                f'<meta property="og:image" content="{url}">\n'
                '<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n'
                '<meta name="twitter:card" content="summary_large_image">\n'
                f'<meta name="twitter:image" content="{url}">')
        if 'property="og:title"' not in text:
            m = re.search(r"<title>([^<]*)</title>", text)
            d = re.search(r'<meta name="description" content="([^"]*)"', text)
            tags = (f'<meta property="og:title" content="{m.group(1) if m else title}">\n'
                    + (f'<meta property="og:description" content="{d.group(1)}">\n' if d else "")
                    + '<meta property="og:type" content="website">\n' + tags)
        text = text.replace("</head>", tags + "\n</head>", 1)
        open(html_path, "w", encoding="utf-8").write(text)
    print(f"static pages: {len(STATIC_PAGES)} cards")


def main():
    args = sys.argv[1:]
    if "--static" in args:
        return generate_static_pages()
    if "--pages" not in args:
        for c in CARDS:
            make(*c)
        make_default()
        print(f"cards: {len(CARDS)} + default")
    if "--cards" not in args:
        generate_pages()
        generate_static_pages()


if __name__ == "__main__":
    main()
