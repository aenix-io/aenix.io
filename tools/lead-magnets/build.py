#!/usr/bin/env python
"""Render the Aenix compliance checklists to PDF with WeasyPrint."""
import pathlib
import sys

from weasyprint import HTML, CSS

BUILD = pathlib.Path(__file__).resolve().parent
OUT = pathlib.Path("/Users/tym83/projects/aenix.io/static/downloads")

CSS_TEXT = (BUILD / "checklist.css").read_text(encoding="utf-8")

DOCS = {
    "dora-en.html": ("aenix-dora-compliance-checklist.pdf", "en",
                     "DORA Compliance Cloud Architecture Checklist — Ænix"),
    "dora-de.html": ("aenix-dora-compliance-checklist-de.pdf", "de",
                     "DORA-Compliance Cloud-Architektur-Checkliste — Ænix"),
    "nis2-en.html": ("aenix-nis2-compliance-checklist.pdf", "en",
                     "NIS2 Compliance Readiness Checklist — Ænix"),
    "nis2-de.html": ("aenix-nis2-compliance-checklist-de.pdf", "de",
                     "NIS2-Compliance-Readiness-Checkliste — Ænix"),
}

SHELL = """<!DOCTYPE html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<title>{title}</title>
<style>{css}</style>
</head>
<body>
{body}
</body>
</html>
"""

for src, (pdf_name, lang, title) in DOCS.items():
    body = (BUILD / src).read_text(encoding="utf-8")
    html = SHELL.format(lang=lang, title=title, css=CSS_TEXT, body=body)
    (BUILD / (src + ".full")).write_text(html, encoding="utf-8")
    target = OUT / pdf_name
    HTML(string=html, base_url=str(BUILD)).write_pdf(target)
    print(f"wrote {target}")
