#!/usr/bin/env python3
"""Social cards (1200x630) for the AenixCon microsite in its own identity.

AenixCon has its own look — Figma "AenixCon 2026 — Identity v2": deep navy
canvas, one cropped gradient arc (signal green -> accent blue -> violet),
the Aenix wordmark + CON lockup, DM Mono eyebrows, uppercase Inter headline.
These cards are intentionally NOT produced by generate-og-cards.py (the /con
entry was removed there), so a site-wide regeneration won't turn them back
into the generic isometric-server cover.

Run: python3 scripts/generate-con-og.py [card ...] -> static/img/og/<card>.jpg
Requires: Chrome / Chromium on PATH (or the macOS app), Pillow, playwright (pip).
Fonts are embedded from the repo, no network needed.
"""
import base64
import os
import shutil
import sys
import tempfile

from PIL import Image
from playwright.sync_api import sync_playwright

ROOT = os.path.join(os.path.dirname(__file__), "..")
OUT = os.path.join(ROOT, "static", "img", "og")
INTER = os.path.join(ROOT, "static", "fonts", "inter-var-latin.woff2")
DM_MONO = os.path.join(ROOT, "scripts", "og-src", "fonts", "dm-mono-500-latin.woff2")

# (file, eyebrow, headline lines, lead, footer left)
CARDS = [
    ("og-aenixcon",
     "Online · December 10–11, 2026 · Free",
     ["Build the layers", "others depend on."],
     "Two days, two tracks, one community for people building open clouds.",
     "Build  /  Run  /  Scale  /  Open"),
    ("og-aenixcon-cfp",
     "CFP open · Closes November 1, 2026",
     ["Speak at", "AenixCon 2026."],
     "Submit your talk by November 1.<br>Decisions by November 5.",
     "Online · December 10–11 · Free"),
]

CHROME_CANDIDATES = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "chrome",
    "/opt/pw-browsers/chromium-1194/chrome-linux/chrome",
]

WORDMARK = ('<svg class="word" viewBox="0 0 77.0043 24.0638" aria-hidden="true"><path fill-rule="evenodd" d="'
            'M0 23.9286L.0548 23.8413 14.9969.0637 15.0135.037H34.1111V.094L36.0777 2.1341 34.1111 4.175V4.2319H20.6964'
            'L21.8775 9.6831H34.0779V13.9116H22.8021L24.0709 19.7337H34.1111V23.9286H20.2154L20.2059 23.8836 19.103 18.7683'
            'H8.7069L5.6713 23.9006 5.6548 23.9286H0ZM18.2003 14.5734L16.3148 5.8982 11.1733 14.5734H18.2003ZM53.5263 7.1567'
            'V2.9942H58.5991V7.1567H53.5263ZM53.7081 23.9829V9.7707H58.4172V23.9829H53.7081ZM59.6102 23.9285L59.6872 23.8352 '
            '65.7119 16.569 60.0675 9.7389 59.9899 9.6456H65.2812L65.2984 9.6674 68.304 13.474 71.2864 9.6675 71.3036 9.6456'
            'H76.595L76.5179 9.7389 70.8753 16.5668 76.9267 23.8351 77.0043 23.9285H71.6839L71.6667 23.9071 68.2809 19.6744 '
            '64.9187 23.9069 64.9016 23.9285H59.6102ZM36.3792 23.8712V23.9281H41.0486V15.9794C41.0486 15.3538 41.1777 '
            '14.8066 41.4342 14.3361 41.6907 13.8653 42.0449 13.5086 42.4969 13.2645 42.9707 13.0007 43.524 12.8681 44.1596 '
            '12.8681 44.6554 12.8681 45.057 12.9628 45.3674 13.1481 45.6979 13.3153 45.9407 13.6006 46.0977 14.0123 46.2754 '
            '14.4086 46.3654 14.9278 46.3654 15.5761V23.9281H51.0349V15.3746C51.0349 14.0257 50.8435 12.9131 50.4567 12.0394 '
            '50.0705 11.1461 49.4895 10.4832 48.7129 10.0542 47.9375 9.6062 46.9519 9.3843 45.7589 9.3843 44.5831 9.3843 '
            '43.5275 9.6456 42.5934 10.1691 41.9312 10.5343 41.3862 11.0165 40.9586 11.6152V9.6723H36.3792V23.8712Z"/></svg>')

HTML = """<!doctype html><html lang="en"><head><meta charset="utf-8"><style>
@font-face{{font-family:"Inter";src:url(data:font/woff2;base64,{inter}) format("woff2");font-weight:100 900}}
@font-face{{font-family:"DM Mono";src:url(data:font/woff2;base64,{mono}) format("woff2");font-weight:500}}
html,body{{margin:0;width:1200px;height:630px;overflow:hidden;background:#050b1a}}
.card{{position:relative;width:1200px;height:630px;box-sizing:border-box;padding:64px 72px;overflow:hidden;
  display:flex;flex-direction:column;background:#050b1a;color:#f5f7fa;font-family:"Inter",sans-serif;
  -webkit-font-smoothing:antialiased}}
.kv{{position:absolute;inset:0;width:1200px;height:630px}}
.top,.body,.foot{{position:relative}}
.lockup{{position:relative;width:{lw}px;height:{lh}px}}
.word{{position:absolute;left:0;top:0;width:{ww}px;fill:#f5f7fa}}
.con{{position:absolute;left:{cl}px;top:{ct}px;padding:{cpy}px {cpx}px;border-radius:999px;background:#d4f6b2;
  color:#050b1a;font:700 {cfs}px/1 "Inter",sans-serif}}
.body{{margin-top:auto}}
.eyebrow{{font:500 20px/28px "DM Mono",monospace;letter-spacing:1.2px;text-transform:uppercase;color:#d4f6b2;white-space:pre;margin:0}}
h1{{margin:20px 0 0;font-size:{hs}px;line-height:1.02;font-weight:700;letter-spacing:-.02em;text-transform:uppercase}}
.lead{{margin:22px 0 0;max-width:620px;font-size:24px;line-height:32px;color:#8492a6}}
.foot{{margin-top:40px;display:flex;justify-content:space-between;align-items:baseline;
  font:500 18px/24px "DM Mono",monospace;letter-spacing:1px;text-transform:uppercase;white-space:pre}}
.foot .l{{color:#01a5ff}}.foot .r{{color:#f5f7fa}}
</style></head><body><div class="card">
<svg class="kv" viewBox="0 0 1200 630"><defs><linearGradient id="g" x1="700" y1="420" x2="1640" y2="740" gradientUnits="userSpaceOnUse">
<stop stop-color="#D4F6B2"/><stop offset=".38" stop-color="#01A5FF"/><stop offset="1" stop-color="#661BE1" stop-opacity=".18"/></linearGradient></defs>
<circle cx="1190" cy="600" r="430" fill="none" stroke="url(#g)" stroke-width="30"/></svg>
<div class="top"><div class="lockup">{word}<span class="con">CON</span></div></div>
<div class="body"><p class="eyebrow">●  {eyebrow}</p><h1>{headline}</h1><p class="lead">{lead}</p></div>
<div class="foot"><span class="l">{footer}</span><span class="r">aenix.io/con</span></div>
</div></body></html>"""


def find_chrome():
    for c in CHROME_CANDIDATES:
        p = c if os.path.sep in c and os.path.exists(c) else shutil.which(c)
        if p:
            return p
    raise SystemExit("Chrome/Chromium not found. Install it or add to PATH.")


def b64(path):
    return base64.b64encode(open(path, "rb").read()).decode()


def main():
    chrome = find_chrome()
    inter, mono = b64(INTER), b64(DM_MONO)
    s = 1.6  # lockup scale vs the 174px site header lockup
    geo = dict(lw=round(174 * s), lh=round(36 * s), ww=round(77 * s), cl=round(82.9 * s), ct=round(1.7 * s),
               cpy=round(3.7 * s, 1), cpx=round(5.9 * s, 1), cfs=round(11.1 * s, 1))
    os.makedirs(OUT, exist_ok=True)
    only = set(sys.argv[1:])
    for fn, eyebrow, lines, lead, footer in CARDS:
        if only and fn not in only:
            continue
        html = HTML.format(inter=inter, mono=mono, word=WORDMARK, eyebrow=eyebrow, headline="<br>".join(lines),
                           hs=76 if max(map(len, lines)) <= 14 else 64, lead=lead, footer=footer, **geo)
        with tempfile.TemporaryDirectory() as tmp:
            png = os.path.join(tmp, "card.png")
            with sync_playwright() as pw:
                browser = pw.chromium.launch(executable_path=chrome, args=["--no-sandbox"])
                page = browser.new_page(viewport={"width": 1200, "height": 630}, device_scale_factor=1)
                page.set_content(html)
                page.evaluate("document.fonts.ready")
                page.screenshot(path=png)
                browser.close()
            out = os.path.join(OUT, fn + ".jpg")
            Image.open(png).convert("RGB").save(out, quality=90, optimize=True, progressive=True)
        print("wrote", os.path.relpath(out, ROOT))


if __name__ == "__main__":
    main()
