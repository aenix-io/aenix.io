#!/usr/bin/env python3
"""Generate 1200x630 OG cards for role / tool / partner landing pages.
Brand: deep teal bg #0F4C5C, orange accent #E36414, cream text #F8F4F0.
Run: python3 scripts/generate-og-cards.py  -> writes static/img/og/*.png
"""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "static", "img", "og")
os.makedirs(OUT, exist_ok=True)

FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_R = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
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


for c in CARDS:
    print("wrote", make(*c) + ".png")
print("done:", len(CARDS), "cards ->", os.path.normpath(OUT))
