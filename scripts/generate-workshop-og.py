#!/usr/bin/env python3
"""Generate the campaign-style 1200x630 OG cards for the VMware->Cozystack
workshop landing (RU + EN).

The template itself lives in scripts/lib/og_card.py and is shared with every
other card on the site (generate-og-cards.py); this script only lists the
campaign cards and their texts. These two cards are intentionally NOT produced by
generate-og-cards.py (their entries were removed there).

Run: python3 scripts/generate-workshop-og.py [card ...]  -> writes static/img/og/*.png
     (pass card names, e.g. og-workshop-fr, to regenerate only those)
Requires: Google Chrome / Chromium on PATH (or the macOS app, or CHROME=...);
          internet only for the Cyrillic glyphs of the RU card.
"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "lib"))
sys.dont_write_bytecode = True
import og_card  # noqa: E402  the shared brand card template

ROOT = os.path.join(os.path.dirname(__file__), "..")
OUT = os.path.join(ROOT, "static", "img", "og")

CARDS = [
    ("og-workshop-ru",
     "Ташкент · Бишкек · Алматы · Астана",
     "Миграция с VMware на open source: практический воркшоп"),
    ("og-workshop-en",
     "Tashkent · Bishkek · Almaty · Astana",
     "Migrating off VMware to open source: a hands-on workshop"),
    ("og-workshop-fr",
     "Paris · 19 octobre 2026",
     "Quitter VMware pour l\u2019open source\u00a0: atelier pratique",
     "construit sur Cozystack (CNCF)"),
    ("og-workshop-europe-en",
     "Europe · October–November 2026",
     "Migrating off VMware to open source: a hands-on workshop"),
    ("og-workshop-usa-en",
     "United States · November–December 2026",
     "Migrating off VMware to open source: a hands-on workshop"),
    ("og-tour-2026-en",
     "Europe · United States · Oct–Dec 2026",
     "Meet Timur Tukaev on the Cozystack Tour 2026",
     "book a meeting, a talk or a coffee"),
]


def main():
    chrome = og_card.find_chrome()
    os.makedirs(OUT, exist_ok=True)
    only = set(sys.argv[1:])
    for fn, eyebrow, title, *rest in CARDS:
        if only and fn not in only:
            continue
        footer = rest[0] if rest else og_card.DEFAULT_FOOTER
        og_card.render(os.path.join(OUT, fn + ".png"), title, eyebrow, footer,
                       lang=fn.rsplit("-", 1)[-1], chrome=chrome)
        print("wrote", fn + ".png")


if __name__ == "__main__":
    main()
