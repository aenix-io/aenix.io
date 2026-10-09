#!/usr/bin/env python3
"""Build the downloadable CCF study-materials PDFs from the site itself.

The PDF is the all-in-one materials page printed by Chromium, so the lessons
are written once (content/**/certification/materials/*.md) and the PDF can never
drift from the web edition. The print stylesheet in assets/css/cert.css adds the
cover, page numbers and hides the site chrome.

    python3 -m venv .venv-pdf && .venv-pdf/bin/pip install playwright
    .venv-pdf/bin/playwright install chromium
    .venv-pdf/bin/python scripts/build-ccf-pdf.py            # both editions
    .venv-pdf/bin/python scripts/build-ccf-pdf.py --lang en  # one edition

Output:
    static/certification/ccf-materials.pdf      English edition
    static/ru/certification/ccf-materials.pdf   Russian edition
"""

import argparse
import functools
import http.server
import subprocess
import sys
import tempfile
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent

EDITIONS = {
    "en": ("/certification/materials/all/", "static/certification/ccf-materials.pdf"),
    "ru": ("/ru/certification/materials/all/", "static/ru/certification/ccf-materials.pdf"),
}


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


def build_site(dest: Path, base_url: str) -> None:
    subprocess.run(
        ["hugo", "--quiet", "--destination", str(dest), "--baseURL", base_url],
        cwd=ROOT,
        check=True,
    )


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--lang", choices=[*EDITIONS, "all"], default="all")
    args = ap.parse_args()
    langs = list(EDITIONS) if args.lang == "all" else [args.lang]

    with tempfile.TemporaryDirectory(prefix="ccf-pdf-") as tmp:
        site = Path(tmp)
        handler = functools.partial(QuietHandler, directory=str(site))
        server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
        origin = f"http://127.0.0.1:{server.server_address[1]}"
        build_site(site, origin + "/")
        threading.Thread(target=server.serve_forever, daemon=True).start()

        try:
            with sync_playwright() as pw:
                browser = pw.chromium.launch()
                page = browser.new_page()
                # Only the local build: no analytics, no consent banner scripts.
                page.route(
                    "**/*",
                    lambda route: route.continue_()
                    if route.request.url.startswith(origin)
                    and "/js/consent.js" not in route.request.url
                    else route.abort(),
                )
                for lang in langs:
                    path, out = EDITIONS[lang]
                    page.goto(origin + path, wait_until="networkidle")
                    page.evaluate("document.fonts.ready")
                    page.emulate_media(media="print")
                    target = ROOT / out
                    target.parent.mkdir(parents=True, exist_ok=True)
                    page.pdf(
                        path=str(target),
                        prefer_css_page_size=True,
                        print_background=True,
                        tagged=True,
                        outline=True,
                    )
                    print(f"{lang}: {out} ({target.stat().st_size // 1024} KiB)")
                browser.close()
        finally:
            server.shutdown()
    return 0


if __name__ == "__main__":
    sys.exit(main())
