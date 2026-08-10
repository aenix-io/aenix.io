#!/usr/bin/env python3
"""Generate the campaign-style 1200x630 OG cards for the VMware->Cozystack
workshop landing (RU + EN).

Renders an HTML card via headless Chrome so it uses the real Aenix logo
(static/images/logo-full-white.svg) and the brand font Inter (Cyrillic from
Google Fonts) — matching the redesigned campaign page. Dark navy + blue->violet
glow, typographic. These two cards are intentionally NOT produced by
generate-og-cards.py (their entries were removed there).

Run: python3 scripts/generate-workshop-og.py  -> writes static/img/og/*.png
Requires: Google Chrome / Chromium on PATH (or the macOS app), internet for fonts.
"""
import os
import shutil
import subprocess
import tempfile

ROOT = os.path.join(os.path.dirname(__file__), "..")
OUT = os.path.join(ROOT, "static", "img", "og")
LOGO = os.path.join(ROOT, "static", "images", "logo-full-white.svg")

CARDS = [
    ("og-workshop-ru",
     "Ташкент · Бишкек · Алматы · Астана",
     "Миграция с VMware на open source: практический воркшоп"),
    ("og-workshop-en",
     "Tashkent · Bishkek · Almaty · Astana",
     "Migrating off VMware to open source: a hands-on workshop"),
    ("og-webinar-en",
     "Free live webinar · Online · with Andrei Kvapil",
     "Launch or upgrade a public cloud your customers can buy"),
]

CHROME_CANDIDATES = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "chrome",
]


def find_chrome():
    for c in CHROME_CANDIDATES:
        if os.path.sep in c:
            if os.path.exists(c):
                return c
        else:
            p = shutil.which(c)
            if p:
                return p
    raise SystemExit("Chrome/Chromium not found. Install it or add to PATH.")


HTML = """<!doctype html><html lang="{lang}"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap" rel="stylesheet">
<style>
  html,body{{margin:0;height:630px;overflow:hidden}}
  .card{{width:1200px;height:630px;box-sizing:border-box;position:relative;overflow:hidden;
    background:#0B0F1A;color:#F1F5F9;padding:70px 80px;display:flex;flex-direction:column;
    font-family:'Inter',system-ui,'Helvetica Neue',Arial,sans-serif;}}
  .card::before{{content:"";position:absolute;inset:0;
    background:
      radial-gradient(44% 58% at 80% 26%, rgba(71,150,234,.32), transparent 70%),
      radial-gradient(52% 55% at 4% 106%, rgba(60,27,191,.34), transparent 66%);}}
  .card::after{{content:"";position:absolute;left:0;right:0;bottom:0;height:6px;
    background:linear-gradient(90deg,#4796EA,#3C1BBF);}}
  .logo{{position:relative;z-index:1}}
  .logo svg{{height:56px;width:auto;display:block}}
  .spacer{{flex:1}}
  .eyebrow{{position:relative;z-index:1;color:#91DBEB;font-weight:700;font-size:25px;
    letter-spacing:.12em;text-transform:uppercase;margin:0 0 24px}}
  .title{{position:relative;z-index:1;font-weight:800;font-size:{size}px;line-height:1.1;
    letter-spacing:-.02em;margin:0;max-width:1040px}}
  .footer{{position:relative;z-index:1;margin-top:30px;color:#94A3B8;font-size:24px}}
  .footer b{{color:#cbd5e1;font-weight:600}}
</style></head><body>
<div class="card">
  <div class="logo">{logo}</div>
  <div class="spacer"></div>
  <div class="eyebrow">{eyebrow}</div>
  <h1 class="title">{title}</h1>
  <div class="footer"><b>aenix.io</b> &nbsp;·&nbsp; built on Cozystack (CNCF)</div>
</div></body></html>"""


def main():
    chrome = find_chrome()
    logo_svg = open(LOGO, encoding="utf-8").read().strip()
    os.makedirs(OUT, exist_ok=True)
    for fn, eyebrow, title in CARDS:
        size = 60 if len(title) > 46 else 66
        html = HTML.format(lang=("ru" if fn.endswith("-ru") else "en"),
                           logo=logo_svg, eyebrow=eyebrow, title=title, size=size)
        with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False, encoding="utf-8") as f:
            f.write(html)
            html_path = f.name
        out_png = os.path.join(OUT, fn + ".png")
        subprocess.run([
            chrome, "--headless=new", "--disable-gpu", "--hide-scrollbars",
            "--force-device-scale-factor=1", "--window-size=1200,630",
            "--default-background-color=00000000",
            "--virtual-time-budget=5000",
            "--screenshot=" + out_png, "file://" + html_path,
        ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        os.unlink(html_path)
        print("wrote", fn + ".png", "size", size)


if __name__ == "__main__":
    main()
