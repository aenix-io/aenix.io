#!/usr/bin/env python3
"""Generate 1200x630 blog covers in the Aenix illustration style.

Each cover is an isometric scene (servers, storage, shields, migration arrows,
edge towers ...) on the brand's deep-blue gradient, with the post's title, a
"Type · Topic" pill, and the Cozystack and Aenix marks: the same look as the
covers the Medium-era posts carry. The scene is chosen from the title (see
MOTIF_RULES), or pinned per post in MOTIF_OVERRIDES.

The page is drawn as HTML/SVG and screenshotted by headless Chrome, which gives
real gradients, glows and the site's own Inter font. Set CHROME to the browser
binary if it is not at a standard path.

Run: python3 scripts/generate-blog-covers.py            # posts without a cover
     python3 scripts/generate-blog-covers.py --regen    # also redraw covers this tool owns
     python3 scripts/generate-blog-covers.py --only <slug> [--only <slug> ...] [--force]
                                   # --force also replaces a cover the tool did not make
Writes static/img/blog/covers/<slug>.jpg and sets cover_image in the post.
Posts whose cover lives elsewhere (Medium images, hand-made art) are left alone.
"""
import glob
import hashlib
import math
import os
import random
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.parse

import yaml
from PIL import Image

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), ".."))
CONTENT = os.path.join(ROOT, "content", "blog")
OUT = os.path.join(ROOT, "static", "img", "blog", "covers")
WEB_PREFIX = "/img/blog/covers"
# German posts get their own covers with German text; a translation reuses the scene of
# its English original so the two covers read as one post.
LANGS = [
    ("en", CONTENT, OUT, WEB_PREFIX),
    ("de", os.path.join(ROOT, "content", "de", "blog"), os.path.join(OUT, "de"), WEB_PREFIX + "/de"),
]
COZY_LOGO = os.path.join(os.path.dirname(__file__), "blog-covers", "cozystack-logo-white.svg")
W, H = 1200, 630


def _chrome():
    if os.environ.get("CHROME"):
        if not os.path.exists(os.environ["CHROME"]):
            raise SystemExit(f"CHROME={os.environ['CHROME']} does not exist")
        return os.environ["CHROME"]
    for c in ("/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", "/Applications/Chromium.app/Contents/MacOS/Chromium",
              shutil.which("google-chrome"), shutil.which("google-chrome-stable"), shutil.which("chromium"),
              shutil.which("chromium-browser")):
        if c and os.path.exists(c):
            return c
    raise SystemExit("headless Chrome not found; set CHROME=/path/to/chrome")


C30, S30 = math.cos(math.radians(30)), math.sin(math.radians(30))


def iso(x, y, z, ox, oy, s):
    return (ox + (x - y) * C30 * s, oy + (x + y) * S30 * s - z * s)


class Scene:
    def __init__(self, ox, oy, s):
        self.ox, self.oy, self.s = ox, oy, s
        self.items = []  # (depth, svg)

    def p(self, x, y, z):
        return iso(x, y, z, self.ox, self.oy, self.s)

    def poly(self, pts, fill, stroke="none", sw=1, extra=""):
        d = " ".join(f"{a:.1f},{b:.1f}" for a, b in pts)
        return f'<polygon points="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round" {extra}/>'

    def box(self, x, y, z, w, d, h, top="url(#gTop)", left="url(#gLeft)", right="url(#gRight)", edge="rgba(150,200,255,.55)", depth=None, deco=""):
        P = self.p
        t = [P(x, y, z + h), P(x + w, y, z + h), P(x + w, y + d, z + h), P(x, y + d, z + h)]
        l = [P(x, y + d, z), P(x + w, y + d, z), P(x + w, y + d, z + h), P(x, y + d, z + h)]
        r = [P(x + w, y, z), P(x + w, y + d, z), P(x + w, y + d, z + h), P(x + w, y, z + h)]
        svg = self.poly(l, left, edge, 1) + self.poly(r, right, edge, 1) + self.poly(t, top, edge, 1.2) + deco
        self.items.append((depth if depth is not None else x + y + z * 0.01, svg))

    def server(self, x, y, z, w=2.2, d=2.2, units=4, uh=0.55, legacy=False):
        for i in range(units):
            zz = z + i * (uh + 0.08)
            deco = ""
            # front (left face, y+d) slot lines + LEDs
            for k in range(3):
                a = self.p(x + 0.25 + k * 0.32, y + d, zz + uh * 0.5)
                deco += f'<circle cx="{a[0]:.1f}" cy="{a[1]:.1f}" r="2.6" fill="{["#5cf2ff","#7d8bff","#5cf2ff"][k]}" filter="url(#glow)"/>'
            a1, a2 = self.p(x + 1.3, y + d, zz + uh * 0.35), self.p(x + w - 0.2, y + d, zz + uh * 0.35)
            a3, a4 = self.p(x + 1.3, y + d, zz + uh * 0.65), self.p(x + w - 0.2, y + d, zz + uh * 0.65)
            deco += f'<line x1="{a1[0]:.1f}" y1="{a1[1]:.1f}" x2="{a2[0]:.1f}" y2="{a2[1]:.1f}" stroke="rgba(160,210,255,.45)" stroke-width="1.4"/>'
            deco += f'<line x1="{a3[0]:.1f}" y1="{a3[1]:.1f}" x2="{a4[0]:.1f}" y2="{a4[1]:.1f}" stroke="rgba(160,210,255,.3)" stroke-width="1.4"/>'
            if legacy:
                self.box(x, y, zz, w, d, uh, top="#5b6280", left="#3a3f58", right="#2c3046", edge="rgba(200,205,230,.35)", depth=x + y + zz * 0.01,
                         deco=deco.replace('#5cf2ff', '#ff9a5c').replace('#7d8bff', '#ffcf5c'))
            else:
                self.box(x, y, zz, w, d, uh, depth=x + y + zz * 0.01, deco=deco)

    def cylinder(self, x, y, z, r=1.0, h=1.6, layers=3):
        cx, cy = self.p(x, y, z)
        rx, ry = r * self.s * C30 * 1.15, r * self.s * S30 * 1.15
        svg = ""
        lh = h / layers
        for i in range(layers):
            zb = z + i * lh
            yb = self.p(x, y, zb)[1]
            yt = self.p(x, y, zb + lh * 0.86)[1]
            svg += (f'<path d="M{cx-rx:.1f},{yt:.1f} L{cx-rx:.1f},{yb:.1f} A{rx:.1f},{ry:.1f} 0 0 0 {cx+rx:.1f},{yb:.1f} '
                    f'L{cx+rx:.1f},{yt:.1f} Z" fill="url(#gCyl)" stroke="rgba(150,200,255,.55)"/>')
            svg += f'<ellipse cx="{cx:.1f}" cy="{yt:.1f}" rx="{rx:.1f}" ry="{ry:.1f}" fill="url(#gTop)" stroke="rgba(170,220,255,.7)"/>'
        self.items.append((x + y + 0.5, svg))

    def chip(self, x, y, z, w=3.0, label=""):
        pins = ""
        for i in range(6):
            t = 0.35 + i * (w - 0.7) / 5
            for (a, b) in [((x + t, y + w), (x + t, y + w + 0.35)), ((x + w, y + t), (x + w + 0.35, y + t))]:
                p1, p2 = self.p(*a, z + 0.15), self.p(*b, z + 0.05)
                pins += f'<line x1="{p1[0]:.1f}" y1="{p1[1]:.1f}" x2="{p2[0]:.1f}" y2="{p2[1]:.1f}" stroke="#8fd3ff" stroke-width="3" stroke-linecap="round"/>'
        self.items.append((x + y - 0.2, pins))
        self.box(x, y, z, w, w, 0.3, depth=x + y)
        # die
        inner = [self.p(x + 0.7, y + 0.7, z + 0.31), self.p(x + w - 0.7, y + 0.7, z + 0.31),
                 self.p(x + w - 0.7, y + w - 0.7, z + 0.31), self.p(x + 0.7, y + w - 0.7, z + 0.31)]
        svg = self.poly(inner, "url(#gDie)", "rgba(120,240,255,.9)", 1.5, 'filter="url(#glow)"')
        if label:
            c = self.p(x + w / 2, y + w / 2, z + 0.31)
            svg += (f'<text x="{c[0]:.1f}" y="{c[1]+6:.1f}" text-anchor="middle" font-family="JetBrains Mono" font-weight="700" '
                    f'font-size="20" fill="#e9fbff" transform="rotate(0)">{label}</text>')
        self.items.append((x + y + 0.1, svg))

    def platform(self, x, y, w, d):
        self.box(x, y, -0.35, w, d, 0.35, top="url(#gPlat)", left="rgba(20,40,140,.85)", right="rgba(30,60,170,.85)", edge="rgba(110,170,255,.5)", depth=-100)
        g = ""
        for i in range(1, int(w)):
            a, b = self.p(x + i, y, 0.001), self.p(x + i, y + d, 0.001)
            g += f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="rgba(130,190,255,.16)"/>'
        for j in range(1, int(d)):
            a, b = self.p(x, y + j, 0.001), self.p(x + w, y + j, 0.001)
            g += f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="rgba(130,190,255,.16)"/>'
        self.items.append((-99, g))

    def link(self, a, b, depth=-50):
        p1, p2 = self.p(*a), self.p(*b)
        self.items.append((depth, f'<line x1="{p1[0]:.1f}" y1="{p1[1]:.1f}" x2="{p2[0]:.1f}" y2="{p2[1]:.1f}" stroke="#5cf2ff" stroke-width="2" stroke-dasharray="6 7" opacity=".75" filter="url(#glow)"/>'))

    def screen(self, x, y, z, w=3.2, h=2.2, kind="ui"):
        """Panel standing in the x-z plane (faces the viewer's left)."""
        P = self.p
        frame = [P(x, y, z), P(x + w, y, z), P(x + w, y, z + h), P(x, y, z + h)]
        inner = [P(x + 0.15, y, z + 0.15), P(x + w - 0.15, y, z + 0.15), P(x + w - 0.15, y, z + h - 0.15), P(x + 0.15, y, z + h - 0.15)]
        svg = self.poly(frame, "url(#gLeft)", "rgba(170,220,255,.8)", 1.5) + self.poly(inner, "rgba(8,14,50,.92)", "rgba(92,242,255,.6)", 1)
        if kind == "oberon":
            # tiled Oberon viewers: two columns of text lines + a track divider
            for col, (x0, x1) in enumerate([(0.35, 1.85), (2.0, w - 0.35)]):
                for k in range(7):
                    zz = z + h - 0.45 - k * 0.24
                    ln = (x1 - x0) * (0.55 + 0.4 * ((k * 37 + col * 11) % 7) / 7)
                    a, b = P(x + x0, y, zz), P(x + x0 + ln, y, zz)
                    svg += f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="#e9fbff" stroke-width="2.2" opacity="{.85 if k==0 else .55}"/>'
            a, b = P(x + 1.92, y, z + 0.2), P(x + 1.92, y, z + h - 0.2)
            svg += f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="#5cf2ff" stroke-width="2"/>'
        else:
            for k in range(5):
                zz = z + h - 0.5 - k * 0.32
                a, b = P(x + 0.4, y, zz), P(x + 0.4 + (w - 0.8) * (0.4 + 0.12 * (k % 4)), y, zz)
                svg += f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="#bfe9ff" stroke-width="3" stroke-linecap="round" opacity=".7"/>'
        self.items.append((x + y + 3, svg))

    def tile(self, cx, cy, glyph, size=58):
        """Flat floating glass icon tile in screen space (like the Medium covers)."""
        r = size / 2
        g = GLYPHS[glyph]
        svg = (f'<g transform="translate({cx-r:.1f},{cy-r:.1f})" filter="url(#soft)">'
               f'<rect width="{size}" height="{size}" rx="12" fill="rgba(25,45,150,.75)" stroke="rgba(120,190,255,.75)" stroke-width="1.5"/>'
               f'<g transform="translate({r},{r}) scale({size/58:.2f})" fill="none" stroke="#9fe6ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">{g}</g></g>')
        self.items.append((999, svg))

    def ring(self, x, y, z, r):
        c = self.p(x, y, z)
        rx, ry = r * self.s * C30 * 1.4, r * self.s * S30 * 1.4
        self.items.append((-60, f'<ellipse cx="{c[0]:.1f}" cy="{c[1]:.1f}" rx="{rx:.1f}" ry="{ry:.1f}" fill="none" stroke="rgba(120,200,255,.35)" stroke-width="1.5" stroke-dasharray="3 9"/>'))

    def arrow(self, a, b, z=0.02, width=0.9, depth=None):
        (x1, y1), (x2, y2) = a, b
        L = math.hypot(x2 - x1, y2 - y1); ux, uy = (x2 - x1) / L, (y2 - y1) / L; px, py = -uy, ux
        hw, hl = width / 2, width * 1.1
        pts = [(x1 + px * hw * .5, y1 + py * hw * .5), (x2 - ux * hl + px * hw * .5, y2 - uy * hl + py * hw * .5),
               (x2 - ux * hl + px * hw, y2 - uy * hl + py * hw), (x2, y2), (x2 - ux * hl - px * hw, y2 - uy * hl - py * hw),
               (x2 - ux * hl - px * hw * .5, y2 - uy * hl - py * hw * .5), (x1 - px * hw * .5, y1 - py * hw * .5)]
        P = [self.p(x, y, z) for x, y in pts]
        self.items.append((min(x1 + y1, x2 + y2) - 0.5 if depth is None else depth, self.poly(P, "url(#gArrow)", "rgba(140,240,255,.9)", 1.5, 'filter="url(#glow)"')))

    def bars(self, x, y, heights, w=0.8, gap=0.35):
        for i, h in enumerate(heights):
            self.box(x + i * (w + gap), y, 0, w, w, h, top="url(#gDie)", depth=x + i * (w + gap) + y + 0.3)

    def coins(self, x, y, n, r=0.55, sym="€"):
        for i in range(n):
            self.cylinder(x, y, i * 0.2, r, 0.2, 1)
        c = self.p(x, y, n * 0.2 + 0.02)
        self.items.append((x + y + 0.6, f'<text x="{c[0]:.1f}" y="{c[1]+6:.1f}" text-anchor="middle" font-family="Inter" font-weight="700" font-size="17" fill="#e9fbff" opacity=".9">{sym}</text>'))

    def shield(self, x, y, z, size=2.6):
        cx, cy = self.p(x, y, z + size)
        k = size * self.s * 0.55
        d = (f"M{cx:.1f},{cy-k*1.1:.1f} l{k:.1f},{k*0.42:.1f} v{k*0.62:.1f} c0,{k*0.75:.1f} {-k*0.55:.1f},{k*1.2:.1f} {-k:.1f},{k*1.45:.1f} "
             f"c{-k*0.45:.1f},{-k*0.25:.1f} {-k:.1f},{-k*0.7:.1f} {-k:.1f},{-k*1.45:.1f} v{-k*0.62:.1f} z")
        svg = (f'<path d="{d}" fill="url(#gShield)" stroke="rgba(150,230,255,.95)" stroke-width="2.5" filter="url(#glow)"/>'
               f'<path d="M{cx-k*0.38:.1f},{cy+k*0.05:.1f} l{k*0.28:.1f},{k*0.3:.1f} l{k*0.52:.1f},{-k*0.55:.1f}" fill="none" stroke="#e9fbff" stroke-width="{k*0.13:.1f}" stroke-linecap="round" stroke-linejoin="round"/>')
        b = self.p(x, y, z)
        svg = f'<ellipse cx="{b[0]:.1f}" cy="{b[1]:.1f}" rx="{k*1.2:.1f}" ry="{k*0.45:.1f}" fill="rgba(92,242,255,.18)"/>' + svg
        self.items.append((x + y + 4, svg))

    def globe(self, x, y, z, r=2.0):
        cx, cy = self.p(x, y, z + r)
        R = r * self.s * 0.75
        g = f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{R:.1f}" fill="url(#gGlobe)" stroke="rgba(150,230,255,.9)" stroke-width="2" filter="url(#glow)"/>'
        for f in (0.35, 0.7):
            g += f'<ellipse cx="{cx:.1f}" cy="{cy:.1f}" rx="{R*f:.1f}" ry="{R:.1f}" fill="none" stroke="rgba(170,230,255,.55)" stroke-width="1.3"/>'
        for f in (-0.5, 0, 0.5):
            g += f'<ellipse cx="{cx:.1f}" cy="{cy+R*f:.1f}" rx="{R*math.sqrt(1-f*f):.1f}" ry="{R*0.12:.1f}" fill="none" stroke="rgba(170,230,255,.45)" stroke-width="1.2"/>'
        g += f'<path d="M{cx+R*0.15:.1f},{cy-R*0.55:.1f} c0,-14 22,-14 22,0 c0,12 -11,22 -11,28 c0,-6 -11,-16 -11,-28 z" fill="#5cf2ff" stroke="#e9fbff" stroke-width="1.5" filter="url(#glow)"/>'
        self.items.append((x + y + 4, g))

    def tower(self, x, y, h=2.6):
        P = self.p
        b1, b2, top = P(x - 0.35, y, 0), P(x + 0.35, y, 0), P(x, y, h)
        svg = (f'<path d="M{b1[0]:.1f},{b1[1]:.1f} L{top[0]:.1f},{top[1]:.1f} L{b2[0]:.1f},{b2[1]:.1f}" fill="none" stroke="#8fd3ff" stroke-width="2.5"/>'
               f'<line x1="{(b1[0]+top[0])/2:.1f}" y1="{(b1[1]+top[1])/2:.1f}" x2="{(b2[0]+top[0])/2:.1f}" y2="{(b2[1]+top[1])/2:.1f}" stroke="#8fd3ff" stroke-width="2"/>'
               f'<circle cx="{top[0]:.1f}" cy="{top[1]:.1f}" r="4" fill="#5cf2ff" filter="url(#glow)"/>')
        for r_ in (12, 22):
            svg += f'<path d="M{top[0]-r_:.1f},{top[1]-r_*0.3:.1f} a{r_},{r_} 0 0 1 {2*r_},0" fill="none" stroke="rgba(92,242,255,.6)" stroke-width="1.5"/>'
        self.items.append((x + y + 1, svg))

    def package(self, x, y, z, w=1.6):
        P = self.p
        a, b = P(x + w / 2, y, z + w), P(x + w / 2, y + w, z + w)
        c, d = P(x, y + w / 2, z + w), P(x + w, y + w / 2, z + w)
        e, f = P(x + w / 2, y + w, z), P(x + w / 2, y + w, z + w)
        deco = (f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="#5cf2ff" stroke-width="2.5"/>'
                f'<line x1="{c[0]:.1f}" y1="{c[1]:.1f}" x2="{d[0]:.1f}" y2="{d[1]:.1f}" stroke="#5cf2ff" stroke-width="2.5"/>'
                f'<line x1="{e[0]:.1f}" y1="{e[1]:.1f}" x2="{f[0]:.1f}" y2="{f[1]:.1f}" stroke="#5cf2ff" stroke-width="2.5"/>')
        self.box(x, y, z, w, w, w, deco=deco, depth=x + y + z * 0.01 + 0.2)

    def label(self, x, y, z, text, size=16):
        c = self.p(x, y, z)
        self.items.append((999, f'<g filter="url(#soft)"><rect x="{c[0]-len(text)*size*0.33-12:.1f}" y="{c[1]-size-4:.1f}" width="{len(text)*size*0.66+24:.1f}" height="{size+14:.1f}" rx="{(size+14)/2:.1f}" fill="rgba(10,20,90,.85)" stroke="rgba(140,200,255,.8)"/>'
                                 f'<text x="{c[0]:.1f}" y="{c[1]+1:.1f}" text-anchor="middle" font-family="Inter" font-weight="500" font-size="{size}" fill="#e9f2ff">{text}</text></g>'))

    def render(self):
        return "\n".join(s for _, s in sorted(self.items, key=lambda t: t[0]))


GLYPHS = {
    "db": '<ellipse cx="0" cy="-11" rx="13" ry="5"/><path d="M-13,-11 v22 a13,5 0 0 0 26,0 v-22"/><path d="M-13,0 a13,5 0 0 0 26,0"/>',
    "chart": '<rect x="-14" y="-14" width="28" height="28" rx="4"/><path d="M-8,6 v-6 M0,6 v-12 M8,6 v-4"/>',
    "lock": '<rect x="-11" y="-3" width="22" height="16" rx="3"/><path d="M-6,-3 v-5 a6,6 0 0 1 12,0 v5"/>',
    "code": '<path d="M-6,-9 l-9,9 l9,9 M6,-9 l9,9 l-9,9"/>',
    "cpu": '<rect x="-10" y="-10" width="20" height="20" rx="3"/><path d="M-5,-14 v4 M0,-14 v4 M5,-14 v4 M-5,10 v4 M0,10 v4 M5,10 v4 M-14,-5 h4 M-14,0 h4 M-14,5 h4 M10,-5 h4 M10,0 h4 M10,5 h4"/>',
    "cloud": '<path d="M-12,8 h22 a8,8 0 0 0 0,-16 a11,11 0 0 0 -21,2 a7,7 0 0 0 -1,14 z"/>',
    "net": '<circle cx="0" cy="-10" r="4"/><circle cx="-11" cy="9" r="4"/><circle cx="11" cy="9" r="4"/><path d="M-2,-6 l-7,11 M2,-6 l7,11 M-7,9 h14"/>',
    "shield": '<path d="M0,-14 l12,5 v7 c0,8 -6,13 -12,16 c-6,-3 -12,-8 -12,-16 v-7 z"/><path d="M-5,0 l4,4 l7,-8"/>',
    "term": '<rect x="-14" y="-11" width="28" height="22" rx="3"/><path d="M-8,-3 l5,4 l-5,4 M1,6 h8"/>',
    "gpu": '<rect x="-15" y="-9" width="30" height="18" rx="3"/><circle cx="-5" cy="0" r="5"/><circle cx="8" cy="0" r="3"/>',
}

DEFS = """
<defs>
 <linearGradient id="gTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4f7dff"/><stop offset="1" stop-color="#2a3fd6"/></linearGradient>
 <linearGradient id="gLeft" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2537b8"/><stop offset="1" stop-color="#131c78"/></linearGradient>
 <linearGradient id="gRight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b2a9e"/><stop offset="1" stop-color="#0c1258"/></linearGradient>
 <linearGradient id="gCyl" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#2537b8"/><stop offset=".6" stop-color="#3550e0"/><stop offset="1" stop-color="#131c78"/></linearGradient>
 <linearGradient id="gPlat" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="rgba(60,100,255,.35)"/><stop offset="1" stop-color="rgba(30,50,180,.15)"/></linearGradient>
 <linearGradient id="gDie" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1fb6ff"/><stop offset="1" stop-color="#3b3fe0"/></linearGradient>
 <linearGradient id="gArrow" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="rgba(92,242,255,.25)"/><stop offset="1" stop-color="#5cf2ff"/></linearGradient>
 <linearGradient id="gShield" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3f6dff"/><stop offset="1" stop-color="#1b1f9e"/></linearGradient>
 <radialGradient id="gGlobe" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#4f8bff"/><stop offset="1" stop-color="#1a1f8c"/></radialGradient>
 <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
 <filter id="soft" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#000530" flood-opacity=".6"/></filter>
</defs>
"""


VARIANTS = {"platform": 3, "compare": 3, "migration": 2, "devx": 3, "security": 2, "sovereign": 2,
            "cost": 2, "edge": 2, "gpu": 2, "storage": 2, "release": 2, "oberon": 1}

# Icons a scene may float above itself; two distinct ones are drawn per cover.
TILE_POOLS = {
    "platform": ("net", "lock", "chart", "cloud", "db"), "compare": ("chart", "net", "cloud"),
    "migration": ("cloud", "chart", "net", "term"), "devx": ("code", "term", "net", "chart"),
    "security": ("lock", "shield", "chart", "term"), "sovereign": ("shield", "lock", "db", "cloud"),
    "cost": ("chart", "cloud", "db"), "edge": ("net", "cpu", "cloud"), "gpu": ("gpu", "cpu", "chart", "cloud"),
    "storage": ("db", "chart", "shield"), "release": ("code", "lock", "net", "cloud"), "oberon": ("term", "cpu", "code"),
}


def scene_for(motif, seed=0, variant=0, source="legacy"):
    rng = random.Random(seed)
    variant %= VARIANTS.get(motif, 1)
    s = Scene(ox=850 + rng.randint(-10, 10), oy=250 + rng.randint(-6, 6), s=45 + rng.choice((-1, 0, 1)))
    s.platform(-1, -1, 9, 8)
    s.ring(3, 3, 0, 4.2)
    v = variant
    if motif == "oberon":
        s.chip(0.2, 3.6, 0, 3.0, "RISC5")
        s.screen(0.0, 0.0, 0.2, 4.4, 3.0, kind="oberon")
        s.server(4.4, 1.2, 0, units=3)
        s.server(4.4, 4.2, 0, units=2)
        s.link((3.4, 5.1, 0.15), (4.4, 5.1, 0.6))
    elif motif == "storage" and v == 0:
        s.server(0.5, 0.5, 0, units=4)
        s.cylinder(4.4, 1.6, 0, 1.0, 1.8)
        s.cylinder(4.4, 4.8, 0, 1.0, 1.2, 2)
        s.server(0.5, 4.2, 0, units=2)
        s.link((2.7, 1.6, 0.5), (3.5, 1.6, 0.5)); s.link((2.7, 5.3, 0.5), (3.5, 4.8, 0.5))
    elif motif == "storage":
        for i, x in enumerate((0.6, 2.8, 5.0)):
            s.cylinder(x, 4.6 - i * 1.4, 0, 0.9, 1.0 + 0.5 * i, 2 + (i > 0))
        s.server(1.2, 0.4, 0, w=2.6, d=2.6, units=3)
        s.link((2.5, 3.0, 0.4), (2.8, 3.2, 0.4))
    elif motif == "gpu" and v == 0:
        s.chip(1.0, 1.0, 0, 3.4, "GPU")
        s.server(4.8, 0.8, 0, units=3); s.server(4.8, 4.0, 0, units=3)
        s.link((4.4, 2.7, 0.2), (4.8, 1.9, 0.6)); s.link((4.4, 2.7, 0.2), (4.8, 5.1, 0.6))
    elif motif == "gpu":
        s.server(0.3, 0.6, 0, w=2.6, d=2.6, units=3); s.chip(0.3, 0.6, 1.9, 2.6, "GPU")
        s.server(4.0, 3.4, 0, w=2.6, d=2.6, units=2); s.chip(4.0, 3.4, 1.26, 2.6, "GPU")
        s.cylinder(5.0, 0.6, 0, 0.9, 1.4, 2)
        s.link((2.9, 1.9, 0.4), (4.0, 4.7, 0.4)); s.link((4.1, 0.6, 0.4), (5.3, 3.4, 0.4))
    elif motif == "migration" and v == 0:
        s.server(-0.4, 4.8, 0, units=3, legacy=True); s.server(1.9, 5.3, 0, w=1.8, d=1.8, units=2, legacy=True)
        s.arrow((2.0, 3.6), (3.7, 1.9), width=1.0)
        s.server(4.2, -0.6, 0, units=4); s.server(4.8, 2.0, 0, w=1.8, d=1.8, units=3)
        s.label(0.7, 5.9, 2.7, source); s.label(5.3, 0.5, 3.4, "Cozystack")
    elif motif == "migration":  # from the back of the floor to the front
        s.server(-0.6, -0.6, 0, w=1.6, d=1.6, units=2, legacy=True); s.server(1.6, -1.0, 0, w=1.4, d=1.4, units=3, legacy=True)
        s.arrow((1.6, 1.6), (3.5, 3.5), width=0.9, depth=99)
        s.server(4.2, 4.2, 0, w=2.2, d=2.2, units=2); s.cylinder(1.2, 5.2, 0, 0.9, 1.2, 2)
        s.label(0.2, 0.2, 1.9, source); s.label(5.3, 5.3, 1.9, "Cozystack")
    elif motif == "compare" and v == 1:
        for i, (u, legacy) in enumerate([(2, True), (3, True), (5, False)]):
            s.server(0.2 + i * 2.4, 2.6 - i * 1.4, 0, w=2.0, d=2.0, units=u, legacy=legacy)
        s.cylinder(1.2, 5.6, 0, 0.8, 0.8, 1); s.cylinder(3.6, 5.2, 0, 0.8, 1.2, 2); s.cylinder(6.0, 4.8, 0, 0.8, 1.8, 3)
    elif motif == "compare" and v == 2:
        s.server(0.0, 0.2, 0, units=2, legacy=True); s.server(0.0, 3.6, 0, units=3, legacy=True)
        s.server(4.4, 1.6, 0, w=2.6, d=2.6, units=5)
        s.link((2.2, 1.3, 0.5), (4.4, 2.4, 0.5)); s.link((2.2, 4.7, 0.5), (4.4, 3.4, 0.5))
        s.label(5.7, 2.9, 3.8, "Cozystack")
    elif motif == "compare":
        s.server(0.0, 0.8, 0, units=2, legacy=True); s.server(2.6, 0.8, 0, units=3, legacy=True); s.server(5.0, 0.8, 0, units=5)
        s.cylinder(1.1, 4.8, 0, 0.9, 0.9, 1); s.cylinder(3.7, 4.8, 0, 0.9, 1.3, 2); s.cylinder(6.1, 4.8, 0, 0.9, 1.9, 3)
    elif motif == "security" and v == 0:
        s.server(0.3, 0.3, 0, units=3); s.server(0.3, 4.2, 0, units=2); s.server(4.8, 4.2, 0, units=2)
        s.shield(4.4, 1.6, 0.6, 2.4); s.ring(4.4, 1.6, 0, 2.6)
    elif motif == "security":
        s.shield(2.8, 2.8, 2.6, 2.6)
        for (x, y, u) in ((4.2, 0.0, 3), (0.0, 4.2, 3), (4.4, 4.4, 2)):
            s.server(x, y, 0, w=1.8, d=1.8, units=u)
        s.ring(2.8, 2.8, 0, 3.4)
    elif motif == "sovereign" and v == 0:
        s.globe(3.6, 2.2, 0.8, 2.2); s.ring(3.6, 2.2, 0, 3.0)
        s.server(0.2, 4.6, 0, units=2); s.server(5.2, 4.6, 0, units=3)
    elif motif == "sovereign":
        s.server(0.2, 0.4, 0, w=2.6, d=2.6, units=4)
        s.shield(4.6, 3.6, 0.4, 2.0)
        s.globe(5.0, 0.0, 1.8, 1.4)
        s.cylinder(1.4, 5.2, 0, 0.9, 1.2, 2)
        s.link((2.8, 2.0, 0.4), (4.0, 3.6, 0.4))
    elif motif == "cost" and v == 0:
        s.bars(0.4, 0.6, [0.8, 1.4, 2.1, 2.9], w=0.85)
        s.coins(5.2, 1.4, 5); s.coins(6.0, 3.0, 3); s.coins(4.8, 3.6, 2, sym="$")
        s.server(0.6, 4.4, 0, units=2)
    elif motif == "cost":
        s.server(0.2, 0.2, 0, w=2.4, d=2.4, units=4)
        s.bars(0.6, 4.4, [2.6, 2.0, 1.4, 0.8], w=0.8)
        s.coins(4.6, 0.8, 6, r=0.65); s.coins(5.6, 2.6, 4, r=0.65, sym="$")
    elif motif == "edge" and v == 0:
        s.server(0.2, 0.4, 0, units=4); s.cylinder(3.0, 1.4, 0, 0.8, 1.2, 2)
        for (x, y) in ((5.0, 0.4), (5.4, 3.6), (1.6, 5.4)):
            s.server(x, y, 0, w=1.2, d=1.2, units=1); s.tower(x + 0.6, y - 0.6)
        s.link((2.4, 1.4, 0.4), (5.0, 1.0, 0.3)); s.link((2.4, 1.4, 0.4), (5.4, 4.2, 0.3)); s.link((1.3, 2.6, 0.4), (2.2, 5.4, 0.3))
    elif motif == "edge":
        s.server(2.0, 2.0, 0, w=2.6, d=2.6, units=3)
        for (x, y) in ((-0.4, -0.4), (5.2, 0.0), (-0.2, 5.4), (5.4, 5.0)):
            s.server(x, y, 0, w=1.1, d=1.1, units=1); s.tower(x + 0.55, y - 0.5, 2.0)
            s.link((x + 0.55, y + 0.55, 0.3), (3.3, 3.3, 0.3))
    elif motif == "devx" and v == 0:
        s.screen(0.0, 0.0, 0.2, 4.4, 3.0)
        s.package(0.6, 4.6, 0); s.package(2.6, 4.6, 0); s.package(4.6, 4.6, 0)
        s.server(5.0, 1.0, 0, units=3)
    elif motif == "devx" and v == 1:
        for i in range(4):
            s.package(-0.2 + i * 1.6, 4.8 - i * 1.6, 0, 1.3)
        s.arrow((0.6, 3.6), (4.2, 0.0), width=0.6)
        s.server(4.4, 2.6, 0, w=2.4, d=2.4, units=3)
    elif motif == "devx":
        s.screen(0.4, 0.4, 0.2, 3.6, 2.6)
        s.screen(4.2, 0.4, 0.2, 2.2, 1.8)
        s.server(1.0, 3.8, 0, units=2); s.server(4.0, 3.8, 0, units=3)
        s.link((2.1, 3.8, 0.6), (5.1, 3.8, 0.6))
    elif motif == "release" and v == 0:
        s.package(0.4, 0.6, 0, 1.8); s.package(0.4, 0.6, 1.8, 1.8); s.package(2.6, 0.6, 0, 1.8)
        s.server(4.8, 0.6, 0, units=4); s.server(4.8, 3.8, 0, units=2)
        s.cylinder(1.8, 4.6, 0, 1.0, 1.4, 2)
        s.link((4.4, 1.5, 0.6), (4.8, 1.5, 0.6))
    elif motif == "release":
        s.server(0.0, 3.4, 0, w=2.6, d=2.6, units=3)
        for i in range(3):
            s.package(3.2 + (i % 2) * 1.0, 0.4 + i * 1.5, 0, 1.4)
        s.package(3.7, 1.15, 1.4, 1.4)
        s.shield(5.8, 5.6, 0.2, 1.4)
        s.link((2.6, 4.7, 0.4), (3.2, 4.0, 0.4))
    elif v == 1:  # platform: rack row around a storage core
        s.server(0.0, 0.0, 0, units=3); s.server(2.6, 0.0, 0, units=4); s.server(4.8, 0.4, 0, w=1.8, d=1.8, units=3)
        s.cylinder(3.4, 4.4, 0, 1.2, 1.6, 2)
        s.server(0.0, 4.0, 0, units=2)
        s.link((3.7, 2.2, 0.4), (3.4, 3.2, 0.4)); s.link((2.2, 5.1, 0.4), (2.2, 4.4, 0.4))
    elif v == 2:  # platform: two clusters linked through the fabric
        s.server(0.2, 0.6, 0, w=2.6, d=2.6, units=4); s.server(0.6, 4.4, 0, w=1.8, d=1.8, units=2)
        s.server(4.6, 0.6, 0, w=1.8, d=1.8, units=3); s.server(4.6, 3.6, 0, w=2.6, d=2.6, units=3)
        s.link((2.8, 1.9, 0.5), (4.6, 1.5, 0.5)); s.link((2.8, 1.9, 0.5), (4.6, 4.9, 0.5)); s.link((2.4, 5.3, 0.5), (4.6, 4.9, 0.5))
    else:  # platform / generic cloud
        s.server(0.3, 0.3, 0, units=4); s.server(3.2, 0.3, 0, units=3); s.server(0.3, 3.6, 0, units=2)
        s.cylinder(4.4, 4.8, 0, 1.0, 1.4, 2)
        s.link((2.5, 1.4, 0.6), (3.2, 1.4, 0.6)); s.link((1.4, 2.5, 0.6), (1.4, 3.6, 0.6))
    for (cx, cy), glyph in zip(((735, 118), (1112, 150)), rng.sample(TILE_POOLS.get(motif, TILE_POOLS["platform"]), 2)):
        s.tile(cx, cy, glyph)
    return s.render()


def split_title(title):
    for sep in (" — ", ": "):
        if sep in title:
            head, sub = title.split(sep, 1)
            if len(head) >= 12:
                return head.strip(), sub.strip()
    return title, ""


PALETTES = [  # (glow, second glow, top-left wash, gradient stops)
    ("rgba(46,92,255,.55)", "rgba(120,60,255,.35)", "rgba(30,60,200,.45)", "#050a2e", "#0a1460", "#1430b8"),
    ("rgba(90,70,255,.55)", "rgba(170,60,255,.35)", "rgba(60,40,200,.45)", "#08062e", "#170f62", "#3a1fb8"),
    ("rgba(30,140,255,.50)", "rgba(40,200,255,.28)", "rgba(20,80,200,.45)", "#03122e", "#062a66", "#0b56c4"),
    ("rgba(20,170,220,.45)", "rgba(60,90,255,.35)", "rgba(10,90,160,.45)", "#031a2b", "#04305a", "#0a4fa8"),
]


def html(title, eyebrow, motif, seed=0, variant=0, source="legacy"):
    import html as H_
    aenix = open(os.path.join(ROOT, "static/images/logo-full-white.svg")).read()
    cozy = open(COZY_LOGO).read()
    fonts = urllib.parse.quote(os.path.join(ROOT, "static/fonts"))
    head, sub = split_title(title)
    n = len(head)
    size = 56 if n <= 30 else 50 if n <= 45 else 44 if n <= 70 else 38 if n <= 100 else 32 if n <= 140 else 28
    if sub:
        sub = sub[0].upper() + sub[1:]
    title_html = H_.escape(head) + (f'<p class="sub">{H_.escape(sub)}</p>' if sub else "")
    eyebrow = H_.escape(eyebrow)
    pal = PALETTES[seed % len(PALETTES)]
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>
@font-face {{ font-family: Inter; font-weight: 700; src: url(file://{fonts}/inter-700-latin.woff2); }}
@font-face {{ font-family: Inter; font-weight: 500; src: url(file://{fonts}/inter-500-latin.woff2); }}
@font-face {{ font-family: 'JetBrains Mono'; font-weight: 700; src: url(file://{fonts}/jetbrains-mono-700-latin.woff2), url(file://{fonts}/jetbrains-mono-400-latin.woff2); }}
html,body {{ margin:0; width:{W}px; height:{H}px; overflow:hidden; background:#04082a; }}
.c {{ position:relative; width:{W}px; height:{H}px; font-family:Inter, sans-serif; color:#fff;
  background:
   radial-gradient(ellipse 620px 480px at 900px 300px, {pal[0]}, transparent 70%),
   radial-gradient(ellipse 500px 380px at 1100px 620px, {pal[1]}, transparent 70%),
   radial-gradient(ellipse 700px 420px at 120px -60px, {pal[2]}, transparent 70%),
   linear-gradient(115deg, {pal[3]} 0%, {pal[4]} 45%, {pal[5]} 100%); }}
.grain {{ position:absolute; inset:0; opacity:.08; background-image:repeating-linear-gradient(0deg, rgba(255,255,255,.5) 0 1px, transparent 1px 3px); mix-blend-mode:overlay; }}
svg.art {{ position:absolute; inset:0; }}
.txt {{ position:absolute; left:64px; top:72px; width:540px; }}
.pill {{ display:inline-block; font-weight:500; font-size:17px; letter-spacing:.02em; padding:7px 14px; border:1.5px solid rgba(255,255,255,.55); border-radius:999px; color:#dfe8ff; background:rgba(255,255,255,.06); }}
h1 {{ overflow-wrap:anywhere; margin:26px 0 0; font-weight:700; font-size:{size}px; line-height:1.14; letter-spacing:-.01em; text-shadow:0 2px 18px rgba(0,0,40,.5); }}
.sub {{ margin:18px 0 0; max-width:470px; font-weight:500; font-size:{22 if len(sub) < 90 else 19}px; line-height:1.35; color:#c9d6ff; text-shadow:none; letter-spacing:0; }}
.cozy {{ position:absolute; left:64px; bottom:46px; height:30px; }}
.cozy svg {{ height:30px; width:auto; }}
.aenix {{ position:absolute; right:56px; bottom:44px; height:36px; }}
.aenix svg {{ height:36px; width:auto; }}
</style></head><body><div class="c"><div class="grain"></div>
<svg class="art" viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg">{DEFS}{scene_for(motif, seed, variant, source)}</svg>
<div class="txt"><span class="pill">{eyebrow}</span><h1>{title_html}</h1></div>
<div class="cozy">{cozy}</div><div class="aenix">{aenix}</div>
</div></body></html>"""



def render(title, eyebrow, motif, out_jpg, seed=0, variant=0, source="legacy"):
    with tempfile.TemporaryDirectory() as tmp:
        page, png = os.path.join(tmp, "cover.html"), os.path.join(tmp, "cover.png")
        with open(page, "w", encoding="utf-8") as fh:
            fh.write(html(title, eyebrow, motif, seed, variant, source))
        cmd = [_chrome(), "--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
               f"--window-size={W},{H}", "--allow-file-access-from-files", f"--screenshot={png}",
               "--virtual-time-budget=2000", "file://" + page]
        if hasattr(os, "geteuid") and os.geteuid() == 0:
            cmd.insert(1, "--no-sandbox")  # Chrome refuses to sandbox as root, e.g. in CI containers
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode or not os.path.exists(png):
            raise SystemExit(f"Chrome failed to render {out_jpg}:\n{res.stderr[-2000:]}")
        Image.open(png).convert("RGB").save(out_jpg, "JPEG", quality=88, optimize=True, progressive=True)


# Scene per post when the title alone would pick the wrong one.
MOTIF_OVERRIDES = {
    "ai-ml-edition-sustained-gpu-economics": "gpu",
    "cloud-native-research-and-teaching-infrastructure": "devx",
    "cloud-repatriation-tco-modeling-honest-numbers": "cost",
    "hosting-provider-platform-modernization": "migration",
    "idp-edition-developer-velocity-economics": "devx",
    "internal-developer-portal-vs-platform": "devx",
    "launch-customer-facing-cloud-product": "platform",
    "msp-cloud-platform-modernization": "migration",
    "proxmox-migration-when-cozystack-fits": "migration",
    "smart-grid-platform-architecture-it-ot": "edge",
    "sovereign-ai-architecture-decisions": "gpu",
    "transport-logistics-cloud-architecture-nis2": "edge",
    "when-cozystack-fits-smb-and-mid-market": "compare",
    # German posts without a link to their English original
    "hosting-anbieter-plattform-modernisierung": "migration",
    "msp-cloud-plattform-modernisierung": "migration",
    "smart-grid-plattform-architektur-it-ot": "edge",
    "transport-logistik-cloud-architektur-nis2": "edge",
    "wann-cozystack-fuer-mittelstand-passt": "compare",
}

MOTIF_RULES = [
    (r"paleocomputing|oberon", "oberon"),
    (r"^cozystack \d+\.\d+", "release"),
    (r" vs |comparison|alternatives|vergleich|alternativen", "compare"),
    (r"(?<!tco )(migration|replacement|repatriation|abl(?:ö|o)sung)(?!.*tco)", "migration"),
    (r"tco|cost|economics|billing|kosten|abrechnung", "cost"),
    (r"dora|nis2|compliance|security|tlpt|sicherheit|checkliste", "security"),
    (r"sovereign|residency|public[- ]sector|souver(?:ä|a)n|datenresidenz", "sovereign"),
    (r"gpu|llm|\bai\b|\bki\b|inference|inferenz", "gpu"),
    (r"edge|telco|industry 4|smart grid|logistics|logistik|industrie", "edge"),
    (r"storage|linstor|backup|seaweedfs|speicher", "storage"),
    (r"developer|entwickler|devops|platform engineering|backstage|\bsre\b|kubectl", "devx"),
]


def motif_for(slug, title):
    if slug in MOTIF_OVERRIDES:
        return MOTIF_OVERRIDES[slug]
    for pattern, motif in MOTIF_RULES:
        if re.search(pattern, title, re.I):
            return motif
    return "platform"


# Pill topic when none of the post's topics appears in its title.
MOTIF_TOPIC = {
    "platform": "Private Cloud", "compare": "Comparison", "migration": "Migration", "devx": "Platform Engineering",
    "security": "Compliance", "sovereign": "Sovereign Cloud", "cost": "Cloud Economics", "edge": "Edge",
    "gpu": "AI/ML", "storage": "Storage", "release": "Cozystack", "oberon": "Paleocomputing",
}


KIND_DE = {"article": "Artikel", "announcement": "Ankündigung", "news": "News", "tutorial": "Anleitung"}
MOTIF_TOPIC_DE = {
    "platform": "Private Cloud", "compare": "Vergleich", "migration": "Migration", "devx": "Platform Engineering",
    "security": "Compliance", "sovereign": "Souveräne Cloud", "cost": "Cloud-Kosten", "edge": "Edge",
    "gpu": "KI/ML", "storage": "Storage", "release": "Cozystack", "oberon": "Paleocomputing",
}


def eyebrow_for(fm, title, motif, lang="en"):
    if lang == "de":
        kind = KIND_DE.get(str(fm.get("type") or "article"), "Artikel")
        return f"{kind} · {MOTIF_TOPIC_DE.get(motif, 'Cozystack')}"
    kind = str(fm.get("type") or "article").replace("-", " ").capitalize()
    if motif in ("release", "oberon"):
        return f"{kind} · {MOTIF_TOPIC[motif]}"
    words = re.findall(r"[a-z0-9/]+", title.lower())

    def in_title(topic):  # "Sovereignty" matches "sovereign", "NIS2" matches "nis2"
        stem = topic.lower()[:max(4, len(topic) - 3)]
        return any(w.startswith(stem) for w in words) or topic.lower() in title.lower()

    hits = [t for t in (fm.get("topics") or []) if isinstance(t, str) and t.lower() != "cozystack" and in_title(t)]
    return f"{kind} · {hits[0] if hits else MOTIF_TOPIC.get(motif, 'Cozystack')}"


def source_label(title):
    """What a migration scene moves away from."""
    return "public cloud" if re.search(r"reverse|repatriation|leaving public cloud", title, re.I) else "legacy"


def _split(text):
    """Front matter text, parsed front matter and body; None if the file has no front matter."""
    m = re.match(r"---\n(.*?\n)---(\n.*)\Z", text, re.S)
    if not m:
        return None
    return m.group(1), yaml.safe_load(m.group(1)) or {}, m.group(2)


def _set_cover(path, fm_text, body, web_path):
    """Set cover_image, replacing an existing key in place (a duplicate key fails the build)."""
    line = f'cover_image: "{web_path}"'
    if re.search(r'^cover_image:.*$', fm_text, re.M):
        fm_text = re.sub(r'^cover_image:.*$', line, fm_text, count=1, flags=re.M)
    elif re.search(r'^date:.*$', fm_text, re.M):
        fm_text = re.sub(r'(^date:.*$)', r'\1\n' + line, fm_text, count=1, flags=re.M)
    else:
        fm_text = fm_text.rstrip("\n") + "\n" + line + "\n"
    with open(path, "w", encoding="utf-8") as fh:
        fh.write("---\n" + fm_text + "---" + body)


def _english_originals():
    """German post path -> slug of the English post it translates (via hreflang links)."""
    origin = {}
    for path in glob.glob(os.path.join(CONTENT, "**", "index.md"), recursive=True):
        parsed = _split(open(path, encoding="utf-8").read())
        de = parsed and parsed[1].get("hreflang_de")
        if de:
            origin[de.strip("/").split("/")[-1]] = os.path.basename(os.path.dirname(path))
    return origin


def _english_titles():
    titles = {}
    for path in glob.glob(os.path.join(CONTENT, "**", "index.md"), recursive=True):
        parsed = _split(open(path, encoding="utf-8").read())
        if parsed:
            titles[os.path.basename(os.path.dirname(path))] = str(parsed[1].get("title") or "")
    return titles


def main():
    args = sys.argv[1:]
    regen, force = "--regen" in args, "--force" in args
    only = {args[i + 1] for i, a in enumerate(args) if a == "--only" and i + 1 < len(args)}
    if "--only" in args and not only:
        raise SystemExit("--only needs a post slug")
    origin, en_titles = _english_originals(), _english_titles()

    posts, en_variant = [], {}
    for lang, content, out_dir, prefix in LANGS:
        os.makedirs(out_dir, exist_ok=True)
        turn = {}
        for path in sorted(glob.glob(os.path.join(content, "**", "index.md"), recursive=True)):
            parsed = _split(open(path, encoding="utf-8").read())
            if not parsed:
                continue
            fm_text, fm, body = parsed
            slug = os.path.basename(os.path.dirname(path))
            cover = str(fm.get("cover_image") or "")
            owned = cover.startswith(prefix + "/")
            title = str(fm.get("title") or slug.replace("-", " ").title())
            en = origin.get(slug) or str(fm.get("hreflang_en") or "").strip("/").split("/")[-1] or None
            if en not in en_titles:
                en = None
            key = en if lang == "de" and en else slug  # scene and seed follow the English original
            motif = motif_for(key, title) if key == slug else motif_for(key, en_titles[en])
            # Covers of one motif take turns through its layouts in date order, counted over every
            # post that has or gets a generated cover, so neighbours in the blog grid differ and a
            # single cover rendered with --only matches a full run.
            variant = None
            if owned or not cover:
                variant = turn.get(motif, 0)
                turn[motif] = variant + 1
            if lang == "en":
                en_variant[slug] = variant or 0
            elif key in en_variant:
                variant = en_variant[key]
            if only:
                if slug not in only:
                    continue
                if cover and not owned and not force:
                    print(f"skip {slug}: its cover ({cover}) is not generated by this tool; add --force to replace it")
                    continue
            elif cover and not (regen and owned):
                continue
            posts.append((lang, out_dir, prefix, path, fm_text, fm, body, slug, key, cover, owned, title, motif, variant or 0))
    missing = only - {p[7] for p in posts}
    if missing:
        print("no such post or skipped: " + ", ".join(sorted(missing)))

    for lang, out_dir, prefix, path, fm_text, fm, body, slug, key, cover, owned, title, motif, variant in posts:
        seed = int(hashlib.sha1(key.encode()).hexdigest()[:8], 16)
        out = os.path.join(out_dir, slug + ".jpg")
        web_path = f"{prefix}/{slug}.jpg"
        render(title, eyebrow_for(fm, title, motif, lang), motif, out, seed, variant, source_label(title))
        if cover != web_path:
            _set_cover(path, fm_text, body, web_path)
            old = os.path.join(ROOT, "static", cover.lstrip("/")) if owned else None
            if old and old != out and os.path.exists(old):
                os.remove(old)
        print(f"{lang} {motif:10} {variant}  {slug}")
    print(f"\ngenerated {len(posts)} cover(s)")


if __name__ == "__main__":
    main()
