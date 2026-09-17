#!/usr/bin/env python3
"""Generate 1200x630 cover images for blog posts that have no `cover_image`.

Companion SEO articles were authored in bulk without a cover, so the blog grid
rendered them with the generic wireframe placeholder — which reads as a broken
image next to the imported posts that carry a Medium cover. This tool gives each
of them a branded card built from its own title and first topic, and writes the
`cover_image` frontmatter field back so Hugo picks it up.

Brand matches scripts/generate-og-cards.py and static/img/aenix-social-card.png:
deep teal bg #0F4C5C, orange accent #E36414, cream text #F8F4F0.

Run: python3 scripts/generate-blog-covers.py         # all posts missing a cover
     python3 scripts/generate-blog-covers.py --dry-run
Idempotent: a post that already has a non-empty cover_image is skipped, so it is
safe to re-run when new posts land. Writes static/img/blog/covers/<slug>.png.
"""
import glob
import os
import re
import sys

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.normpath(os.path.join(os.path.dirname(__file__), ".."))
CONTENT = os.path.join(ROOT, "content", "blog")
OUT = os.path.join(ROOT, "static", "img", "blog", "covers")
WEB_PREFIX = "/img/blog/covers"
os.makedirs(OUT, exist_ok=True)


def _font(*candidates):
    """First font that exists — the tool runs on Linux CI and macOS laptops."""
    for path in candidates:
        if path and os.path.exists(path):
            return path
    raise SystemExit("no usable font found; tried: " + ", ".join(c for c in candidates if c))


_LIBREOFFICE = "/opt/homebrew/Caskroom/libreoffice/*/LibreOffice.app/Contents/Resources/fonts/truetype"
_HOME = os.path.expanduser("~")

FONT = _font(
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    *glob.glob(f"{_LIBREOFFICE}/DejaVuSans-Bold.ttf"),
    f"{_HOME}/Library/Fonts/Lato-Bold.ttf",
    "/Library/Fonts/Arial Bold.ttf",
)
FONT_R = _font(
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    *glob.glob(f"{_LIBREOFFICE}/DejaVuSans.ttf"),
    f"{_HOME}/Library/Fonts/Lato-Regular.ttf",
    "/Library/Fonts/Arial.ttf",
)

BG = (15, 76, 92)        # #0F4C5C
ACCENT = (227, 100, 20)  # #E36414
CREAM = (248, 244, 240)  # #F8F4F0
MUTED = (181, 201, 207)  # #B5C9CF
W, H = 1200, 630


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


def make(slug, eyebrow, title, watermark):
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    margin = 80

    # Faint oversized topic word, bottom-right, so 50+ teal cards do not read as
    # one repeated image in the grid — each gets a distinct large silhouette.
    if watermark:
        wm_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        wd = ImageDraw.Draw(wm_layer)
        wf = ImageFont.truetype(FONT, 150)
        tw = wd.textlength(watermark, font=wf)
        wd.text((W - tw - 40, H - 210), watermark, font=wf, fill=(255, 255, 255, 12))
        img = Image.alpha_composite(img.convert("RGBA"), wm_layer).convert("RGB")
        d = ImageDraw.Draw(img)

    # accent bar + wordmark
    d.rectangle([margin, 96, margin + 64, 104], fill=ACCENT)
    d.text((margin, 120), "ÆNIX", font=ImageFont.truetype(FONT, 40), fill=CREAM)
    # eyebrow
    d.text((margin, 236), eyebrow, font=ImageFont.truetype(FONT, 28), fill=ACCENT)
    # title: autoshrink so it fits BOTH <=4 lines AND the vertical band above the
    # footer — capping line count alone let long titles overrun the footer line.
    top, bottom = 288, H - 104
    for size in range(72, 29, -4):
        tf = ImageFont.truetype(FONT, size)
        lines = wrap(d, title, tf, W - 2 * margin)
        line_h = int(size * 1.16)
        if len(lines) <= 4 and len(lines) * line_h <= (bottom - top):
            break
    if len(lines) > 4:
        lines = lines[:4]
        lines[3] = lines[3].rstrip(" .,-—") + "…"
    y = top
    for ln in lines:
        d.text((margin, y), ln, font=tf, fill=CREAM)
        y += line_h
    # footer
    d.text((margin, H - 72), "aenix.io   ·   built on Cozystack (CNCF)",
           font=ImageFont.truetype(FONT_R, 26), fill=MUTED)

    img.save(os.path.join(OUT, slug + ".png"), "PNG")


_FIELD_RE = {
    "title": re.compile(r'^title:\s*"?(.*?)"?\s*$', re.M),
    "cover_image": re.compile(r'^cover_image:\s*"?(.*?)"?\s*$', re.M),
}
_TOPICS_RE = re.compile(r'^topics:\s*\[(.*?)\]', re.M)


def _field(fm, name):
    m = _FIELD_RE[name].search(fm)
    return m.group(1).strip() if m else ""


def _first_topic(fm):
    m = _TOPICS_RE.search(fm)
    if not m:
        return ""
    first = m.group(1).split(",")[0].strip().strip('"').strip("'")
    return first


def _inject_cover(path, fm_text, body, web_path):
    """Set cover_image. Replace an existing (e.g. empty) key in place — adding a
    second one produces a duplicate YAML key and fails the Hugo build — otherwise
    add the line right after date: (or at the end of the frontmatter)."""
    line = f'cover_image: "{web_path}"'
    if re.search(r'^cover_image:.*$', fm_text, re.M):
        fm_text = re.sub(r'^cover_image:.*$', line, fm_text, count=1, flags=re.M)
    elif re.search(r'^date:.*$', fm_text, re.M):
        fm_text = re.sub(r'(^date:.*$)', r'\1\n' + line, fm_text, count=1, flags=re.M)
    else:
        fm_text = fm_text.rstrip() + "\n" + line + "\n"
    with open(path, "w", encoding="utf-8") as fh:
        fh.write("---\n" + fm_text.strip("\n") + "\n---\n" + body)


def main():
    dry = "--dry-run" in sys.argv
    # --regen rebuilds the PNGs for covers this tool already owns (cover_image
    # under WEB_PREFIX) after a template/layout change, without re-touching
    # frontmatter that is already correct.
    regen = "--regen" in sys.argv
    made = skipped = 0
    for path in sorted(glob.glob(os.path.join(CONTENT, "**", "index.md"), recursive=True)):
        text = open(path, encoding="utf-8").read()
        parts = text.split("---", 2)
        if len(parts) < 3:
            continue
        fm_text, body = parts[1], parts[2]
        cover = _field(fm_text, "cover_image")
        if cover and not (regen and cover.startswith(WEB_PREFIX)):
            skipped += 1
            continue
        needs_inject = not cover
        slug = os.path.basename(os.path.dirname(path))
        title = _field(fm_text, "title") or slug.replace("-", " ").title()
        topic = _first_topic(fm_text)
        eyebrow = (topic.upper() if topic else "AENIX") + " · ARTICLE"
        watermark = topic if topic else "AENIX"
        web_path = f"{WEB_PREFIX}/{slug}.png"
        print(("[dry] " if dry else "wrote ") + f"{slug}.png  <- {title[:60]}")
        if not dry:
            make(slug, eyebrow, title, watermark)
            if needs_inject:
                _inject_cover(path, fm_text, body, web_path)
        made += 1
    print(f"\n{'would generate' if dry else 'generated'} {made} cover(s), "
          f"skipped {skipped} with existing cover -> {os.path.relpath(OUT, ROOT)}")


if __name__ == "__main__":
    main()
