#!/usr/bin/env python3
"""Generate the campaign-style 1200x630 OG cards for the VMware->Cozystack
workshop landing (RU + EN). Dark navy + blue->violet glow, typographic — matches
the redesigned campaign page rather than the site's default teal OG template.

These two cards are intentionally NOT produced by scripts/generate-og-cards.py
(their entries were removed there) so this bespoke style is preserved.

Run: python3 scripts/generate-workshop-og.py  -> writes static/img/og/*.png
"""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(__file__), "..", "static", "img", "og")
os.makedirs(OUT, exist_ok=True)

# Fonts: Inter (site font) ships woff2-latin only (no Cyrillic), so use Arial,
# which has Cyrillic + the Æ ligature and reads close to the site's Inter.
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"

W, H = 1200, 630
NAVY = (11, 15, 26)        # #0B0F1A
BLUE = (71, 150, 234)      # #4796EA
CYAN = (145, 219, 235)     # #91DBEB
VIOLET = (60, 27, 191)     # #3C1BBF
WHITE = (241, 245, 249)    # #F1F5F9
MUTED = (148, 163, 184)    # #94A3B8

CARDS = [
    ("og-workshop-tour-ru",
     "ТАШКЕНТ · БИШКЕК · АЛМАТЫ · АСТАНА · БЕСПЛАТНО",
     "Миграция с VMware на open source: практический воркшоп"),
    ("og-workshop-tour",
     "TASHKENT · BISHKEK · ALMATY · ASTANA · FREE",
     "Migrating off VMware to open source: a hands-on workshop"),
]


def radial(cx, cy, rx, ry, color, max_a):
    """Soft radial glow, computed small then upscaled (cheap, smooth)."""
    sw, sh = 160, 84
    layer = Image.new("RGBA", (sw, sh), (0, 0, 0, 0))
    px = layer.load()
    for y in range(sh):
        for x in range(sw):
            dx = (x / sw - cx) / rx
            dy = (y / sh - cy) / ry
            d = (dx * dx + dy * dy) ** 0.5
            a = max(0.0, 1.0 - d)
            a = a * a
            if a > 0:
                px[x, y] = (color[0], color[1], color[2], int(a * max_a))
    return layer.resize((W, H), Image.BILINEAR)


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
    img = Image.new("RGBA", (W, H), NAVY + (255,))
    # blue glow upper-right, violet glow lower-left (campaign feel; text stays left)
    img = Image.alpha_composite(img, radial(0.78, 0.30, 0.5, 0.7, BLUE, 150))
    img = Image.alpha_composite(img, radial(0.12, 1.02, 0.55, 0.6, VIOLET, 120))
    d = ImageDraw.Draw(img)
    margin = 80

    # accent bar + wordmark (top-left)
    d.rectangle([margin, 92, margin + 60, 100], fill=BLUE)
    d.text((margin, 116), "ÆNIX", font=ImageFont.truetype(FONT_BOLD, 46), fill=WHITE)

    # eyebrow (cities), letter-spaced manually
    eb = ImageFont.truetype(FONT_BOLD, 24)
    eb_y = 244
    x = margin
    for ch in eyebrow:
        d.text((x, eb_y), ch, font=eb, fill=CYAN)
        x += d.textlength(ch, font=eb) + 2

    # headline: autoshrink so the whole block clears the footer
    head_y = 300
    footer_y = H - 64
    max_h = footer_y - 26 - head_y
    size = 76
    while size > 34:
        tf = ImageFont.truetype(FONT_BOLD, size)
        lines = wrap(d, title, tf, W - 2 * margin)
        if len(lines) * int(size * 1.16) <= max_h:
            break
        size -= 3
    tf = ImageFont.truetype(FONT_BOLD, size)
    lines = wrap(d, title, tf, W - 2 * margin)
    y = head_y
    for ln in lines:
        d.text((margin, y), ln, font=tf, fill=WHITE)
        y += int(size * 1.16)

    # footer
    d.text((margin, footer_y), "aenix.io  ·  built on Cozystack (CNCF)",
           font=ImageFont.truetype(FONT_REG, 26), fill=MUTED)
    # bottom accent gradient bar
    for i in range(W):
        t = i / W
        c = tuple(int(BLUE[j] + (VIOLET[j] - BLUE[j]) * t) for j in range(3))
        d.line([(i, H - 6), (i, H)], fill=c)

    img.convert("RGB").save(os.path.join(OUT, fn + ".png"))
    print("wrote", fn + ".png", size)


for fn, eb, ti in CARDS:
    make(fn, eb, ti)
