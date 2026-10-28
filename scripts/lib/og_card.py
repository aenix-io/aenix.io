"""The brand social-preview (OG) card, 1200x630.

One template for every card on the site: dark navy, blue/violet glow, a
blue->violet bar at the bottom, the real Aenix logo
(static/images/logo-full-white.svg) and Inter. Eyebrow, title and a footer
line are the only things that change from card to card.

Used by scripts/generate-og-cards.py (site default, front page, named cards,
per-page cards) and scripts/generate-workshop-og.py (campaign cards).

Rendering needs headless Chrome / Chromium: on PATH, the macOS app, or the
CHROME environment variable. Inter comes from Google Fonts, as on the campaign
cards the template was taken from; without network the site's own Inter files
(static/fonts, latin + latin-ext) stand in, so EN/DE cards still render.
"""
import html as H
import os
import re
import shutil
import subprocess
import tempfile
import urllib.parse

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), "..", ".."))
LOGO = os.path.join(ROOT, "static", "images", "logo-full-white.svg")
FONTS = urllib.parse.quote(os.path.join(ROOT, "static", "fonts"))

W, H_ = 1200, 630
DEFAULT_FOOTER = "built on Cozystack (CNCF)"
FOOTERS = {"en": DEFAULT_FOOTER, "de": "basiert auf Cozystack (CNCF)"}


def default_footer(lang="en"):
    return FOOTERS.get(lang, DEFAULT_FOOTER)

CHROME_CANDIDATES = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "chrome",
]

TEMPLATE = """<!doctype html><html lang="{lang}"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=block" rel="stylesheet">
<style>
  @font-face{{font-family:'Inter Local';font-weight:100 900;src:url(file://{fonts}/inter-var-latin-ext.woff2) format('woff2');
    unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;}}
  @font-face{{font-family:'Inter Local';font-weight:100 900;src:url(file://{fonts}/inter-var-latin.woff2) format('woff2');
    unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}}
  html,body{{margin:0;height:{h}px;overflow:hidden}}
  .card{{width:{w}px;height:{h}px;box-sizing:border-box;position:relative;overflow:hidden;
    background:#0B0F1A;color:#F1F5F9;padding:70px 80px;display:flex;flex-direction:column;
    font-family:'Inter','Inter Local',system-ui,'Helvetica Neue',Arial,sans-serif;}}
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
    letter-spacing:.12em;margin:0 0 24px;
    white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}
  .title{{position:relative;z-index:1;font-weight:800;font-size:{size}px;line-height:1.1;
    letter-spacing:-.02em;margin:0;max-width:1040px;overflow-wrap:break-word;
    display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:{lines};overflow:hidden}}
  .footer{{position:relative;z-index:1;margin-top:30px;color:#94A3B8;font-size:24px;
    white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}
  .footer b{{color:#cbd5e1;font-weight:600}}
</style></head><body>
<div class="card">
  <div class="logo">{logo}</div>
  <div class="spacer"></div>
  {eyebrow_html}
  <h1 class="title">{title}</h1>
  <div class="footer"><b>aenix.io</b> &nbsp;·&nbsp; {footer}</div>
</div></body></html>"""


def eyebrow_case(text):
    """Upper-case the eyebrow but keep the plural of an acronym readable: 'CTOs', 'VPs', 'MSPs'."""
    out = []
    for w in text.split():
        out.append(w if re.fullmatch(r"[A-Z0-9/&]{2,}s[,.;:]?", w) else w.upper())
    return " ".join(out)


def title_size(title):
    """Font size and line clamp by length, so long page titles still fit in three lines."""
    n = len(title)
    if n <= 46:
        return 66, 2
    if n <= 64:
        return 60, 2
    if n <= 90:
        return 52, 3
    return 46, 3


def _logo():
    return open(LOGO, encoding="utf-8").read().strip()


def card_html(title, eyebrow="", footer=DEFAULT_FOOTER, lang="en", logo=None):
    size, lines = title_size(title)
    eyebrow_html = f'<div class="eyebrow">{H.escape(eyebrow_case(eyebrow))}</div>' if eyebrow else ""
    return TEMPLATE.format(lang=lang, fonts=FONTS, w=W, h=H_, logo=logo or _logo(),
                           eyebrow_html=eyebrow_html, title=H.escape(title),
                           footer=H.escape(footer or DEFAULT_FOOTER), size=size, lines=lines)


def find_chrome():
    env = os.environ.get("CHROME")
    if env:
        return env
    for c in CHROME_CANDIDATES:
        if os.path.sep in c:
            if os.path.exists(c):
                return c
        else:
            p = shutil.which(c)
            if p:
                return p
    raise SystemExit("Chrome/Chromium not found. Install it, add it to PATH or set CHROME=/path/to/chrome.")


def render(out, title, eyebrow="", footer=DEFAULT_FOOTER, lang="en", chrome=None):
    """Render one card to `out`. A .jpg path is written as an optimized JPEG, anything else as PNG."""
    chrome = chrome or find_chrome()
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False, encoding="utf-8") as f:
        f.write(card_html(title, eyebrow, footer, lang))
        html_path = f.name
    png = out if out.lower().endswith(".png") else out + ".tmp.png"
    try:
        subprocess.run([
            chrome, "--headless=new", "--disable-gpu", "--hide-scrollbars",
            "--force-device-scale-factor=1", f"--window-size={W},{H_}",
            "--virtual-time-budget=5000",
            "--screenshot=" + png, "file://" + html_path,
        ], check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    finally:
        os.unlink(html_path)
    if png != out:
        from PIL import Image
        Image.open(png).convert("RGB").save(out, quality=88, optimize=True, progressive=True)
        os.unlink(png)
    return out
