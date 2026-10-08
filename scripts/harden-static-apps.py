#!/usr/bin/env python3
"""Post-process the vendored single-page apps under static/ after a sync.

The apps (live demos, calculators, the modern-cloud quiz) are built in other
repositories and copied in by demo-src/build.sh, idp-demo-src/build.sh and
scripts/sync-tco-calculator.py (the ISP and cloud calculators are copied by
hand from aenix-org/calculators). Their index.html files come without the
things aenix.io needs, so a fresh copy would silently undo them:

  * robots: the raw app URLs are widgets, not pages. Demo shells (including the
    mock "Sign in to cozy" screens) get noindex; calculators and the quiz get
    noindex,indexifembedded so they still count for the Hugo page that embeds
    them.
  * fonts: calculators loaded Inter from fonts.googleapis.com. The site
    self-hosts Inter (/css/fonts.css), so no visitor IP goes to Google.
  * next step: opened full-screen (not inside the site's iframe), a calculator
    shows a slim bar back to a call with an engineer.

Idempotent; run it after every sync:

    python3 scripts/harden-static-apps.py
"""
import re
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent
STATIC = SITE / "static"

DEMOS = ["demo-app", "idp-app"]
WIDGETS = ["cloud-calculator-app", "isp-calculator-app", "tco-calculator-app", "quiz-app"]
CALCULATORS = ["cloud-calculator-app", "isp-calculator-app", "tco-calculator-app"]

GOOGLE_FONTS = re.compile(
    r'\s*<link rel="preconnect" href="https://fonts\.googleapis\.com"\s*/?>'
    r'|\s*<link rel="preconnect" href="https://fonts\.gstatic\.com" crossorigin\s*/?>'
    r'|<link href="https://fonts\.googleapis\.com/css2[^>]*>'
)

BAR = """<!-- aenix:next-step -->
<script>
(function () {
  if (window.top !== window.self) return; /* inside the site page: it has its own CTA */
  var de = /^\\/de\\//.test(document.referrer.replace(/^https?:\\/\\/[^/]+/, ''));
  var bar = document.createElement('div');
  bar.setAttribute('role', 'complementary');
  bar.style.cssText = 'position:fixed;left:0;right:0;bottom:0;z-index:2147483000;display:flex;gap:12px;align-items:center;justify-content:center;flex-wrap:wrap;padding:10px 16px;background:#10182B;border-top:1px solid rgba(255,255,255,.12);font:500 14px/1.4 Inter,system-ui,sans-serif;color:#E2E8F0';
  var t = document.createElement('span');
  t.textContent = de ? 'Sollen wir Ihre Zahlen prüfen?' : 'Want an engineer to check these numbers?';
  var a = document.createElement('a');
  a.href = de ? '/de/kontakt/' : '/contact/';
  a.setAttribute('data-cta', 'calculator-app');
  a.textContent = de ? 'Discovery-Call buchen' : 'Book a call';
  a.style.cssText = 'padding:8px 16px;border-radius:8px;background:#0A6ED1;color:#fff;font-weight:600;text-decoration:none';
  bar.appendChild(t); bar.appendChild(a);
  document.addEventListener('DOMContentLoaded', function () { document.body.appendChild(bar); document.body.style.paddingBottom = '64px'; });
})();
</script>
"""


def set_robots(html: str, content: str) -> str:
    if re.search(r'<meta name="robots"', html):
        return re.sub(r'<meta name="robots" content="[^"]*"\s*/?>', f'<meta name="robots" content="{content}" />', html, count=1)
    return re.sub(r'(<meta charset="[^"]*"\s*/?>)', rf'\1\n    <meta name="robots" content="{content}" />', html, count=1, flags=re.I)


def main() -> int:
    changed = 0
    for app in DEMOS + WIDGETS:
        root = STATIC / app
        if not root.is_dir():
            continue
        robots = "noindex" if app in DEMOS else "noindex,indexifembedded"
        for f in sorted(root.rglob("*.html")):
            if app in DEMOS and "/docs/" in str(f):
                continue  # mock docs tree: robots.txt keeps crawlers out
            html = f.read_text()
            new = set_robots(html, robots)
            if app in CALCULATORS and f.parent == root:
                new = GOOGLE_FONTS.sub("", new)
                if "/css/fonts.css" not in new:
                    new = new.replace("</head>", '    <link rel="stylesheet" href="/css/fonts.css" />\n  </head>', 1)
                if "aenix:next-step" not in new:
                    new = new.replace("</head>", BAR + "  </head>", 1)
            if new != html:
                f.write_text(new)
                changed += 1
                print("updated", f.relative_to(SITE))
    print(f"{changed} file(s) changed")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
