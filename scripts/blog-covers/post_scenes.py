"""Per-post cover scenes for scripts/generate-blog-covers.py.

The generic motifs (servers, storage, a shield...) made every cover look alike.
Each post here gets its own composition built from objects that say what the
post is about: a bank for financial services, a factory for Industry 4.0, a
pylon for the smart grid, a calendar for a 90-day playbook. Style and palette
stay those of the generator: the same isometric grid, gradients and glow.

POST_SCENES maps a post slug (the English one; German translations are mapped
in DE_TO_EN) to a function that draws on a Scene.
"""
import math


def install(Scene):
    """Add the content objects to the generator's Scene class."""

    def _line(self, a, b, color="#8fd3ff", w=2.5, extra=""):
        return f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" stroke="{color}" stroke-width="{w}" stroke-linecap="round" {extra}/>'

    def _text(self, c, text, size=18, color="#e9fbff", weight=700, family="Inter", dy=6):
        return (f'<text x="{c[0]:.1f}" y="{c[1]+dy:.1f}" text-anchor="middle" font-family="{family}" font-weight="{weight}" '
                f'font-size="{size}" fill="{color}">{text}</text>')

    def windows(self, x, y, z, w, d, h, rows, cols, lit=0.6, seed=1):
        """Window grid on the front (y+d) face of a block."""
        svg = ""
        for r in range(rows):
            for c in range(cols):
                x0 = x + 0.25 + c * (w - 0.5) / cols
                x1 = x0 + (w - 0.5) / cols * 0.6
                z0 = z + 0.3 + r * (h - 0.6) / rows
                z1 = z0 + (h - 0.6) / rows * 0.55
                on = ((r * 7 + c * 3 + seed) % 10) / 10 < lit
                pts = [self.p(x0, y + d, z0), self.p(x1, y + d, z0), self.p(x1, y + d, z1), self.p(x0, y + d, z1)]
                svg += self.poly(pts, "#5cf2ff" if on else "rgba(120,170,255,.25)", "none", 0, 'opacity=".85"' if on else "")
        return svg

    def building(self, x, y, w=2.0, d=2.0, h=3.0, rows=4, cols=3, seed=1):
        self.box(x, y, 0, w, d, h, deco=self.windows(x, y, 0, w, d, h, rows, cols, seed=seed))

    def bank(self, x, y, w=3.4, d=2.4):
        """Classical bank: base, columns, pediment."""
        self.box(x, y, 0, w, d, 0.35, depth=x + y)
        cols = ""
        for i in range(5):
            cx = x + 0.3 + i * (w - 0.6) / 4
            a, b = self.p(cx, y + d - 0.15, 0.35), self.p(cx, y + d - 0.15, 2.1)
            cols += _line(self, a, b, "#bfe9ff", 9) + _line(self, a, b, "#4f7dff", 5)
        self.items.append((x + y + d + 0.1, cols))
        self.box(x, y, 2.1, w, d, 0.3, depth=x + y + 0.2)
        # pediment on the front face
        P = self.p
        tri = [P(x, y + d, 2.4), P(x + w, y + d, 2.4), P(x + w / 2, y + d, 3.3)]
        roof = [P(x, y, 2.4), P(x, y + d, 2.4), P(x + w / 2, y + d, 3.3), P(x + w / 2, y, 3.3)]
        svg = self.poly(roof, "url(#gTop)", "rgba(150,200,255,.55)", 1.2) + self.poly(tri, "url(#gLeft)", "rgba(170,220,255,.8)", 1.5)
        c = P(x + w / 2, y + d, 2.75)
        svg += f'<circle cx="{c[0]:.1f}" cy="{c[1]:.1f}" r="9" fill="none" stroke="#5cf2ff" stroke-width="2" filter="url(#glow)"/>'
        self.items.append((x + y + d + 0.3, svg))

    def factory(self, x, y, w=4.0, d=2.4):
        """Sawtooth-roof plant with a chimney."""
        self.box(x, y, 0, w, d, 1.6, deco=self.windows(x, y, 0, w, d, 1.6, 1, 5, lit=0.8))
        P = self.p
        svg = ""
        n = 3
        for i in range(n):
            x0 = x + i * w / n
            tooth = [P(x0, y + d, 1.6), P(x0 + w / n, y + d, 1.6), P(x0 + w / n, y + d, 2.5)]
            side = [P(x0, y, 1.6), P(x0, y + d, 1.6), P(x0 + w / n, y + d, 2.5), P(x0 + w / n, y, 2.5)]
            svg += self.poly(side, "url(#gTop)", "rgba(150,200,255,.55)", 1.2) + self.poly(tooth, "#5cf2ff", "rgba(190,240,255,.9)", 1, 'opacity=".55"')
        self.items.append((x + y + d + 0.2, svg))
        self.box(x + w - 0.8, y + 0.2, 1.6, 0.5, 0.5, 2.2, depth=x + y + w)
        top = P(x + w - 0.55, y + 0.45, 4.0)
        puffs = "".join(f'<circle cx="{top[0]+k*14:.1f}" cy="{top[1]-12-k*14:.1f}" r="{8+k*3}" fill="rgba(160,210,255,{.35-k*.08:.2f})"/>' for k in range(3))
        self.items.append((x + y + w + 1, puffs))

    def school(self, x, y, w=3.4, d=2.2):
        self.box(x, y, 0, w, d, 1.8, deco=self.windows(x, y, 0, w, d, 1.8, 2, 4, lit=0.7))
        P = self.p
        roof = [P(x, y, 1.8), P(x, y + d, 1.8), P(x + w / 2, y + d, 2.7), P(x + w / 2, y, 2.7)]
        roof2 = [P(x + w, y, 1.8), P(x + w, y + d, 1.8), P(x + w / 2, y + d, 2.7), P(x + w / 2, y, 2.7)]
        gable = [P(x, y + d, 1.8), P(x + w, y + d, 1.8), P(x + w / 2, y + d, 2.7)]
        svg = self.poly(roof, "url(#gTop)", "rgba(150,200,255,.55)", 1.2) + self.poly(roof2, "url(#gRight)", "rgba(150,200,255,.55)", 1.2)
        svg += self.poly(gable, "url(#gLeft)", "rgba(170,220,255,.8)", 1.5)
        # bell tower + flag
        a, b = P(x + w / 2, y + d / 2, 2.7), P(x + w / 2, y + d / 2, 4.0)
        svg += _line(self, a, b, "#bfe9ff", 2.5)
        f = [b, (b[0] + 30, b[1] + 8), (b[0], b[1] + 18)]
        svg += self.poly(f, "#5cf2ff", "none", 0, 'filter="url(#glow)"')
        self.items.append((x + y + d + 0.3, svg))

    def gradcap(self, x, y, z, size=1.6):
        P = self.p
        k = size
        top = [P(x, y - k, z), P(x + k, y, z), P(x, y + k, z), P(x - k, y, z)]
        svg = self.poly(top, "url(#gTop)", "rgba(190,230,255,.9)", 2, 'filter="url(#glow)"')
        a = P(x, y, z)
        svg += f'<path d="M{a[0]-26:.1f},{a[1]+6:.1f} v18 q26,16 52,0 v-18" fill="url(#gLeft)" stroke="rgba(170,220,255,.8)" stroke-width="1.5"/>'
        t1, t2 = P(x + k * 0.7, y, z), P(x + k * 0.7, y, z - 1.0)
        svg += _line(self, t1, t2, "#5cf2ff", 2.5) + f'<circle cx="{t2[0]:.1f}" cy="{t2[1]:.1f}" r="5" fill="#5cf2ff" filter="url(#glow)"/>'
        self.items.append((x + y + 6, svg))

    def pylon(self, x, y, h=4.2):
        P = self.p
        b1, b2, b3, b4 = P(x - 0.5, y, 0), P(x + 0.5, y, 0), P(x - 0.15, y, h), P(x + 0.15, y, h)
        svg = _line(self, b1, b3, "#8fd3ff", 2.5) + _line(self, b2, b4, "#8fd3ff", 2.5)
        for f in (0.25, 0.5, 0.75):
            l1 = P(x - 0.5 + 0.35 * f, y, h * f); r1 = P(x + 0.5 - 0.35 * f, y, h * f)
            svg += _line(self, l1, r1, "#8fd3ff", 1.8)
        for zf, half in ((0.78, 0.9), (0.95, 0.6)):
            a, b = P(x - half, y, h * zf), P(x + half, y, h * zf)
            svg += _line(self, a, b, "#bfe9ff", 2.5)
            for e in (a, b):
                svg += f'<circle cx="{e[0]:.1f}" cy="{e[1]+4:.1f}" r="3.5" fill="#5cf2ff" filter="url(#glow)"/>'
        self.items.append((x + y + 1, svg))
        return P(x - 0.9, y, h * 0.78), P(x + 0.9, y, h * 0.78)

    def wire(self, a, b, sag=18, depth=-40):
        mx, my = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2 + sag
        self.items.append((depth, f'<path d="M{a[0]:.1f},{a[1]:.1f} Q{mx:.1f},{my:.1f} {b[0]:.1f},{b[1]:.1f}" fill="none" stroke="#5cf2ff" stroke-width="1.6" opacity=".8" filter="url(#glow)"/>'))

    def turbine(self, x, y, h=3.6, phase=0):
        P = self.p
        b, t = P(x, y, 0), P(x, y, h)
        svg = _line(self, b, t, "#bfe9ff", 4)
        for i in range(3):
            ang = math.radians(phase + i * 120)
            e = (t[0] + 40 * math.cos(ang), t[1] + 40 * math.sin(ang))
            svg += _line(self, t, e, "#8fd3ff", 5)
        svg += f'<circle cx="{t[0]:.1f}" cy="{t[1]:.1f}" r="5" fill="#5cf2ff" filter="url(#glow)"/>'
        self.items.append((x + y + 1, svg))

    def truck(self, x, y):
        """Box truck driving along +x."""
        self.box(x, y, 0.35, 2.6, 1.1, 1.3, top="url(#gTop)", depth=x + y)
        self.box(x + 2.65, y, 0.35, 0.9, 1.1, 0.9, depth=x + y + 0.1)
        win = [self.p(x + 3.0, y + 1.1, 0.8), self.p(x + 3.45, y + 1.1, 0.8), self.p(x + 3.45, y + 1.1, 1.15), self.p(x + 3.0, y + 1.1, 1.15)]
        svg = self.poly(win, "#5cf2ff", "none", 0, 'opacity=".8"')
        for wx in (x + 0.6, x + 2.0, x + 3.1):
            c = self.p(wx, y + 1.1, 0.2)
            svg += f'<ellipse cx="{c[0]:.1f}" cy="{c[1]:.1f}" rx="10" ry="12" fill="#0c1258" stroke="#8fd3ff" stroke-width="2.5"/>'
        self.items.append((x + y + 1.3, svg))

    def container(self, x, y, z=0, w=2.4, color="url(#gTop)"):
        deco = ""
        for i in range(1, 7):
            a, b = self.p(x + i * w / 7, y + 1.0, z + 0.1), self.p(x + i * w / 7, y + 1.0, z + 0.9)
            deco += _line(self, a, b, "rgba(160,210,255,.45)", 1.4)
        self.box(x, y, z, w, 1.0, 1.0, top=color, deco=deco)

    def document(self, x, y, z, w=2.2, h=2.8, kind="check", title=""):
        """Standing sheet in the x-z plane: checklist, text or chart."""
        P = self.p
        page = [P(x, y, z), P(x + w, y, z), P(x + w, y, z + h), P(x, y, z + h)]
        svg = self.poly(page, "rgba(225,238,255,.95)", "rgba(170,220,255,.9)", 1.5, 'filter="url(#soft)"')
        if title:
            svg += _text(self, P(x + w / 2, y, z + h - 0.3), title, 15, "#1a2a9e", 700)
        rows = 5 if not title else 4
        for k in range(rows):
            zz = z + h - (0.75 if title else 0.45) - k * 0.48
            if kind == "check":
                c = P(x + 0.35, y, zz)
                ok = k < rows - 1
                svg += (f'<rect x="{c[0]-7:.1f}" y="{c[1]-7:.1f}" width="14" height="14" rx="3" fill="{"#2a3fd6" if ok else "none"}" stroke="#2a3fd6" stroke-width="2"/>')
                if ok:
                    svg += f'<path d="M{c[0]-4:.1f},{c[1]:.1f} l3,3 l6,-7" fill="none" stroke="#e9fbff" stroke-width="2.2"/>'
                a, b = P(x + 0.7, y, zz), P(x + 0.7 + (w - 1.0) * (0.6 + 0.3 * (k % 2)), y, zz)
            else:
                a, b = P(x + 0.3, y, zz), P(x + 0.3 + (w - 0.6) * (0.55 + 0.4 * ((k * 3) % 4) / 4), y, zz)
            svg += _line(self, a, b, "#8ea4ff", 3)
        self.items.append((x + y + 3.5, svg))

    def calendar(self, x, y, z, w=2.2, h=2.2, label="90", unit="days"):
        P = self.p
        body = [P(x, y, z), P(x + w, y, z), P(x + w, y, z + h), P(x, y, z + h)]
        head = [P(x, y, z + h * 0.75), P(x + w, y, z + h * 0.75), P(x + w, y, z + h), P(x, y, z + h)]
        svg = self.poly(body, "rgba(225,238,255,.95)", "rgba(170,220,255,.9)", 1.5, 'filter="url(#soft)"')
        svg += self.poly(head, "url(#gDie)", "none", 0)
        for f in (0.3, 0.7):
            a, b = P(x + w * f, y, z + h * 0.68), P(x + w * f, y, z + h * 1.08)
            svg += _line(self, a, b, "#e9fbff", 4)
        svg += _text(self, P(x + w / 2, y, z + h * 0.38), label, 40, "#1a2a9e", 700, dy=10)
        svg += _text(self, P(x + w / 2, y, z + h * 0.12), unit, 14, "#3a4fd0", 500)
        self.items.append((x + y + 3.5, svg))

    def clock(self, x, y, z, r=1.1, label="", hands=(300, 60)):
        c = self.p(x, y, z + r)
        R = r * self.s * 0.8
        svg = (f'<circle cx="{c[0]:.1f}" cy="{c[1]:.1f}" r="{R+6:.1f}" fill="url(#gLeft)" stroke="rgba(170,220,255,.9)" stroke-width="2" filter="url(#soft)"/>'
               f'<circle cx="{c[0]:.1f}" cy="{c[1]:.1f}" r="{R:.1f}" fill="rgba(8,14,50,.9)" stroke="#5cf2ff" stroke-width="2"/>')
        for i in range(12):
            a = math.radians(i * 30)
            svg += _line(self, (c[0] + R * 0.82 * math.cos(a), c[1] + R * 0.82 * math.sin(a)), (c[0] + R * 0.95 * math.cos(a), c[1] + R * 0.95 * math.sin(a)), "#8fd3ff", 2)
        for ang, ln, wd in ((hands[0], 0.5, 4), (hands[1], 0.75, 3)):
            a = math.radians(ang - 90)
            svg += _line(self, c, (c[0] + R * ln * math.cos(a), c[1] + R * ln * math.sin(a)), "#e9fbff", wd)
        if label:
            svg += _text(self, (c[0], c[1] + R * 0.45), label, 14, "#9fe6ff", 700)
        self.items.append((x + y + 4, svg))

    def gauge(self, x, y, z, r=1.4, value=0.8, label=""):
        c = self.p(x, y, z + r * 0.6)
        R = r * self.s * 0.8
        start, end = math.radians(180), math.radians(360)
        def pt(f, rr):
            a = start + (end - start) * f
            return (c[0] + rr * math.cos(a), c[1] + rr * math.sin(a))
        svg = f'<path d="M{pt(0,R+10)[0]:.1f},{c[1]+8:.1f} A{R+10:.1f},{R+10:.1f} 0 0 1 {pt(1,R+10)[0]:.1f},{c[1]+8:.1f} Z" fill="url(#gLeft)" stroke="rgba(170,220,255,.9)" stroke-width="2" filter="url(#soft)"/>'
        a0, a1 = pt(0, R), pt(value, R)
        svg += f'<path d="M{a0[0]:.1f},{a0[1]:.1f} A{R:.1f},{R:.1f} 0 0 1 {pt(1,R)[0]:.1f},{pt(1,R)[1]:.1f}" fill="none" stroke="rgba(120,170,255,.3)" stroke-width="9"/>'
        svg += f'<path d="M{a0[0]:.1f},{a0[1]:.1f} A{R:.1f},{R:.1f} 0 0 1 {a1[0]:.1f},{a1[1]:.1f}" fill="none" stroke="#5cf2ff" stroke-width="9" filter="url(#glow)"/>'
        n = pt(value, R * 0.8)
        svg += _line(self, c, n, "#e9fbff", 4) + f'<circle cx="{c[0]:.1f}" cy="{c[1]:.1f}" r="6" fill="#e9fbff"/>'
        if label:
            svg += _text(self, (c[0], c[1] - R * 0.35), label, 15, "#e9fbff", 700)
        self.items.append((x + y + 4, svg))

    def balance(self, x, y, z=0, left="", right="", tilt=-8):
        """Scales for comparisons; the right pan sits lower (the winner is heavier)."""
        P = self.p
        base, top = P(x, y, z), P(x, y, z + 3.2)
        svg = _line(self, base, top, "#bfe9ff", 5)
        svg += f'<ellipse cx="{base[0]:.1f}" cy="{base[1]:.1f}" rx="34" ry="12" fill="url(#gTop)" stroke="rgba(170,220,255,.8)"/>'
        L = 95
        a = math.radians(tilt)
        lp = (top[0] - L * math.cos(a), top[1] - L * math.sin(a))
        rp = (top[0] + L * math.cos(a), top[1] + L * math.sin(a))
        svg += _line(self, lp, rp, "#bfe9ff", 4)
        for p, lab in ((lp, left), (rp, right)):
            svg += _line(self, p, (p[0] - 26, p[1] + 52), "#8fd3ff", 1.5) + _line(self, p, (p[0] + 26, p[1] + 52), "#8fd3ff", 1.5)
            svg += f'<path d="M{p[0]-34:.1f},{p[1]+52:.1f} q34,22 68,0 z" fill="url(#gDie)" stroke="rgba(190,240,255,.9)" stroke-width="1.5" filter="url(#glow)"/>'
            if lab:
                svg += (f'<g filter="url(#soft)"><rect x="{p[0]-len(lab)*4.6-10:.1f}" y="{p[1]+64:.1f}" width="{len(lab)*9.2+20:.1f}" height="26" rx="13" fill="rgba(10,20,90,.88)" stroke="rgba(140,200,255,.8)"/>'
                        + _text(self, (p[0], p[1] + 77), lab, 14, "#e9f2ff", 500, dy=5) + "</g>")
        svg += f'<circle cx="{top[0]:.1f}" cy="{top[1]:.1f}" r="7" fill="#5cf2ff" filter="url(#glow)"/>'
        self.items.append((x + y + 5, svg))

    def rocket(self, x, y, z, size=1.0):
        c = self.p(x, y, z)
        k = size * 46
        svg = (f'<g transform="translate({c[0]:.1f},{c[1]:.1f}) rotate(35)">'
               f'<path d="M0,{-k*1.6:.1f} C{k*0.55:.1f},{-k*1.1:.1f} {k*0.55:.1f},{k*0.3:.1f} {k*0.35:.1f},{k*0.7:.1f} L{-k*0.35:.1f},{k*0.7:.1f} C{-k*0.55:.1f},{k*0.3:.1f} {-k*0.55:.1f},{-k*1.1:.1f} 0,{-k*1.6:.1f} Z" fill="url(#gTop)" stroke="rgba(190,230,255,.9)" stroke-width="2" filter="url(#soft)"/>'
               f'<circle cx="0" cy="{-k*0.6:.1f}" r="{k*0.22:.1f}" fill="#5cf2ff" stroke="#e9fbff" stroke-width="2" filter="url(#glow)"/>'
               f'<path d="M{-k*0.35:.1f},{k*0.2:.1f} l{-k*0.35:.1f},{k*0.6:.1f} h{k*0.3:.1f} Z M{k*0.35:.1f},{k*0.2:.1f} l{k*0.35:.1f},{k*0.6:.1f} h{-k*0.3:.1f} Z" fill="url(#gDie)"/>'
               f'<path d="M{-k*0.22:.1f},{k*0.75:.1f} Q0,{k*1.9:.1f} {k*0.22:.1f},{k*0.75:.1f} Z" fill="#5cf2ff" opacity=".85" filter="url(#glow)"/></g>')
        self.items.append((x + y + 6, svg))

    def person(self, x, y, color="url(#gTop)"):
        P = self.p
        b = P(x, y, 0)
        h = P(x, y, 1.55)
        svg = (f'<path d="M{b[0]-15:.1f},{b[1]:.1f} v-30 a15,13 0 0 1 30,0 v30 a15,6 0 0 1 -30,0 z" fill="{color}" stroke="rgba(170,220,255,.8)" stroke-width="1.5"/>'
               f'<circle cx="{h[0]:.1f}" cy="{h[1]:.1f}" r="11" fill="url(#gGlobe)" stroke="rgba(170,220,255,.9)" stroke-width="1.5"/>')
        self.items.append((x + y + 0.8, svg))

    def orgchart(self, x, y, z):
        """Flat tree of team boxes floating above the deck."""
        P = self.p
        nodes = [(x + 1.6, y, z + 2.2), (x, y, z + 1.0), (x + 1.6, y, z + 1.0), (x + 3.2, y, z + 1.0)]
        svg = ""
        for n in nodes[1:]:
            svg += _line(self, P(*nodes[0]), P(*n), "#5cf2ff", 2, 'opacity=".8"')
        for i, (nx, ny, nz) in enumerate(nodes):
            c = P(nx, ny, nz)
            svg += f'<rect x="{c[0]-26:.1f}" y="{c[1]-15:.1f}" width="52" height="30" rx="7" fill="{"url(#gDie)" if i == 0 else "url(#gLeft)"}" stroke="rgba(170,220,255,.9)" stroke-width="1.5" filter="url(#soft)"/>'
            svg += f'<circle cx="{c[0]-10:.1f}" cy="{c[1]-2:.1f}" r="5" fill="#e9fbff"/><path d="M{c[0]-18:.1f},{c[1]+10:.1f} a8,6 0 0 1 16,0" fill="#e9fbff"/>'
            svg += _line(self, (c[0] + 2, c[1] - 4), (c[0] + 18, c[1] - 4), "#bfe9ff", 2) + _line(self, (c[0] + 2, c[1] + 4), (c[0] + 14, c[1] + 4), "#bfe9ff", 2)
        self.items.append((x + y + 6, svg))

    def magnifier(self, x, y, z, r=1.0):
        c = self.p(x, y, z)
        R = r * self.s * 0.8
        svg = (f'<circle cx="{c[0]:.1f}" cy="{c[1]:.1f}" r="{R:.1f}" fill="rgba(92,242,255,.12)" stroke="#bfe9ff" stroke-width="7" filter="url(#soft)"/>'
               f'<circle cx="{c[0]:.1f}" cy="{c[1]:.1f}" r="{R:.1f}" fill="none" stroke="#5cf2ff" stroke-width="2" filter="url(#glow)"/>')
        a = (c[0] + R * 0.72, c[1] + R * 0.72)
        svg += _line(self, a, (a[0] + R * 0.8, a[1] + R * 0.8), "#bfe9ff", 12)
        self.items.append((x + y + 7, svg))

    def flag_eu(self, x, y, z=0, h=3.4):
        P = self.p
        b, t = P(x, y, z), P(x, y, z + h)
        svg = _line(self, b, t, "#bfe9ff", 3)
        fw, fh = 92, 60
        svg += f'<path d="M{t[0]:.1f},{t[1]:.1f} q{fw/2:.1f},-10 {fw:.1f},4 v{fh:.1f} q{-fw/2:.1f},-14 {-fw:.1f},-4 z" fill="url(#gTop)" stroke="rgba(190,230,255,.9)" stroke-width="1.5" filter="url(#soft)"/>'
        cx, cy = t[0] + fw / 2, t[1] + fh / 2
        for i in range(12):
            a = math.radians(i * 30)
            svg += f'<circle cx="{cx+20*math.cos(a):.1f}" cy="{cy+20*math.sin(a):.1f}" r="2.8" fill="#ffd95c"/>'
        self.items.append((x + y + 5, svg))

    def pin(self, x, y, z=0, label=""):
        c = self.p(x, y, z)
        svg = (f'<ellipse cx="{c[0]:.1f}" cy="{c[1]:.1f}" rx="12" ry="5" fill="rgba(92,242,255,.35)"/>'
               f'<path d="M{c[0]:.1f},{c[1]:.1f} c-4,-10 -16,-20 -16,-32 a16,16 0 0 1 32,0 c0,12 -12,22 -16,32 z" fill="#5cf2ff" stroke="#e9fbff" stroke-width="1.5" filter="url(#glow)"/>'
               f'<circle cx="{c[0]:.1f}" cy="{c[1]-32:.1f}" r="6" fill="#0c1258"/>')
        if label:
            svg += (f'<g filter="url(#soft)"><rect x="{c[0]-len(label)*4.4-10:.1f}" y="{c[1]-78:.1f}" width="{len(label)*8.8+20:.1f}" height="24" rx="12" fill="rgba(10,20,90,.88)" stroke="rgba(140,200,255,.8)"/>'
                    + _text(self, (c[0], c[1] - 66), label, 13, "#e9f2ff", 500, dy=4) + "</g>")
        self.items.append((x + y + 5, svg))

    def bigcloud(self, x, y, z, scale=1.0, label=""):
        c = self.p(x, y, z)
        k = 60 * scale
        svg = (f'<path d="M{c[0]-k*1.3:.1f},{c[1]+k*0.45:.1f} h{k*2.5:.1f} a{k*0.55:.1f},{k*0.55:.1f} 0 0 0 0,{-k*1.1:.1f} '
               f'a{k*0.8:.1f},{k*0.8:.1f} 0 0 0 {-k*1.5:.1f},{-k*0.2:.1f} a{k*0.55:.1f},{k*0.55:.1f} 0 0 0 {-k*1.0:.1f},{k*1.3:.1f} z" '
               f'fill="url(#gTop)" stroke="rgba(190,230,255,.9)" stroke-width="2" filter="url(#soft)"/>')
        if label:
            svg += _text(self, (c[0], c[1] + k * 0.12), label, 15, "#e9fbff", 700)
        self.items.append((x + y + 6, svg))

    def kube(self, x, y, z, r=0.9):
        """Seven-spoke helm wheel standing on a box top."""
        c = self.p(x, y, z)
        R = r * self.s * 0.75
        pts = [(c[0] + R * math.cos(math.radians(-90 + i * 360 / 7)), c[1] + R * math.sin(math.radians(-90 + i * 360 / 7))) for i in range(7)]
        svg = f'<polygon points="{" ".join(f"{a:.1f},{b:.1f}" for a, b in pts)}" fill="url(#gDie)" stroke="#e9fbff" stroke-width="2" filter="url(#glow)"/>'
        svg += f'<circle cx="{c[0]:.1f}" cy="{c[1]:.1f}" r="{R*0.45:.1f}" fill="none" stroke="#e9fbff" stroke-width="3"/>'
        for a, b in pts:
            svg += _line(self, c, (c[0] + (a - c[0]) * 0.7, c[1] + (b - c[1]) * 0.7), "#e9fbff", 2.5)
        self.items.append((x + y + 6, svg))

    def storefront(self, x, y, w=3.0, d=2.0, label="YOUR BRAND"):
        self.box(x, y, 0, w, d, 2.0, deco=self.windows(x, y, 0, w, d, 1.2, 1, 3, lit=0.9))
        P = self.p
        stripes = ""
        n = 6
        for i in range(n):
            x0, x1 = x + i * w / n, x + (i + 1) * w / n
            pts = [P(x0, y + d, 1.95), P(x1, y + d, 1.95), P(x1, y + d + 0.6, 1.5), P(x0, y + d + 0.6, 1.5)]
            stripes += self.poly(pts, "#5cf2ff" if i % 2 == 0 else "url(#gTop)", "rgba(190,240,255,.8)", 1)
        sign = [P(x + 0.3, y + d, 2.1), P(x + w - 0.3, y + d, 2.1), P(x + w - 0.3, y + d, 2.8), P(x + 0.3, y + d, 2.8)]
        stripes += self.poly(sign, "rgba(8,14,50,.95)", "#5cf2ff", 1.5, 'filter="url(#glow)"')
        stripes += _text(self, P(x + w / 2, y + d, 2.45), label, 13, "#9fe6ff", 700, dy=5)
        self.items.append((x + y + d + 0.5, stripes))

    def pricetag(self, x, y, z, text="€"):
        c = self.p(x, y, z)
        svg = (f'<g transform="translate({c[0]:.1f},{c[1]:.1f}) rotate(-18)" filter="url(#soft)">'
               f'<path d="M-46,-22 h62 l26,22 l-26,22 h-62 z" fill="url(#gDie)" stroke="#e9fbff" stroke-width="2"/>'
               f'<circle cx="18" cy="0" r="5" fill="#0c1258"/>' + _text(self, (-14, 0), text, 18, "#e9fbff", 700) + "</g>")
        self.items.append((x + y + 6, svg))

    def receipt(self, x, y, z, w=1.8, h=2.6):
        P = self.p
        pts = [P(x, y, z), P(x + w, y, z), P(x + w, y, z + h), P(x, y, z + h)]
        svg = self.poly(pts, "rgba(225,238,255,.95)", "rgba(170,220,255,.9)", 1.5, 'filter="url(#soft)"')
        for k in range(5):
            zz = z + h - 0.4 - k * 0.38
            a, b, c = P(x + 0.25, y, zz), P(x + w * 0.6, y, zz), P(x + w - 0.25, y, zz)
            svg += _line(self, a, b, "#8ea4ff", 2.5) + f'<circle cx="{c[0]:.1f}" cy="{c[1]:.1f}" r="3" fill="#2a3fd6"/>'
        tot = P(x + w / 2, y, z + 0.35)
        svg += _text(self, tot, "per min", 13, "#1a2a9e", 700, dy=4)
        self.items.append((x + y + 3.5, svg))

    def steps(self, x, y, n=4, w=1.2, d=2.0, rise=0.6, labels=()):
        for i in range(n):
            self.box(x + i * w, y, 0, w, d, rise * (i + 1), top="url(#gDie)" if i == n - 1 else "url(#gTop)", depth=x + i * w + y)
            if i < len(labels):
                c = self.p(x + i * w + w / 2, y + d / 2, rise * (i + 1))
                self.items.append((999, _text(self, c, labels[i], 15, "#e9fbff", 700, dy=5)))

    def book(self, x, y, z, w=2.4, d=1.7, title=""):
        self.box(x, y, z, w, d, 0.45, top="url(#gTop)", left="rgba(225,238,255,.95)", depth=x + y + z * 0.01)
        if title:
            c = self.p(x + w / 2, y + d / 2, z + 0.46)
            self.items.append((x + y + 4, _text(self, c, title, 15, "#e9fbff", 700, dy=5)))

    def puzzle(self, x, y, z, color="url(#gTop)", flip=False):
        c = self.p(x, y, z)
        k = 34
        sx = -1 if flip else 1
        d = (f"M{c[0]-k:.1f},{c[1]-k:.1f} h{k*0.7:.1f} a{k*0.3:.1f},{k*0.3:.1f} 0 1 1 {k*0.6:.1f},0 h{k*0.7:.1f} "
             f"v{k*0.7:.1f} a{k*0.3:.1f},{k*0.3:.1f} 0 1 {0 if sx > 0 else 1} 0,{k*0.6:.1f} v{k*0.7:.1f} h{-k*2:.1f} z")
        svg = f'<path d="{d}" fill="{color}" stroke="rgba(190,230,255,.9)" stroke-width="2" filter="url(#soft)"/>'
        self.items.append((x + y + 6, svg))

    def bubble(self, x, y, z, text="", w=150):
        c = self.p(x, y, z)
        svg = (f'<g filter="url(#soft)"><rect x="{c[0]-w/2:.1f}" y="{c[1]-34:.1f}" width="{w}" height="50" rx="16" fill="url(#gLeft)" stroke="rgba(170,220,255,.9)" stroke-width="1.8"/>'
               f'<path d="M{c[0]-18:.1f},{c[1]+15:.1f} l-8,18 l24,-18 z" fill="url(#gLeft)" stroke="rgba(170,220,255,.9)" stroke-width="1.8"/></g>')
        if text:
            svg += _text(self, (c[0], c[1] - 9), text, 16, "#e9fbff", 600)
        else:
            for k in range(3):
                svg += f'<circle cx="{c[0]-18+k*18:.1f}" cy="{c[1]-9:.1f}" r="5" fill="#5cf2ff" filter="url(#glow)"/>'
        self.items.append((x + y + 7, svg))

    def chain(self, x, y, z, broken=True):
        c = self.p(x, y, z)
        svg = ""
        for i, dx in enumerate((-46, 0, 46)):
            if broken and i == 1:
                svg += f'<path d="M{c[0]-14:.1f},{c[1]-8:.1f} a14,10 0 0 1 0,16 M{c[0]+14:.1f},{c[1]-8:.1f} a14,10 0 0 0 0,16" fill="none" stroke="#5cf2ff" stroke-width="6" filter="url(#glow)"/>'
                continue
            svg += f'<rect x="{c[0]+dx-24:.1f}" y="{c[1]-13:.1f}" width="48" height="26" rx="13" fill="none" stroke="#bfe9ff" stroke-width="7"/>'
        self.items.append((x + y + 7, svg))

    def play(self, x, y, z, w=3.6, h=2.4):
        """Webinar screen with a play button."""
        self.screen(x, y, z, w, h)
        c = self.p(x + w / 2, y, z + h / 2)
        svg = (f'<circle cx="{c[0]:.1f}" cy="{c[1]:.1f}" r="30" fill="rgba(92,242,255,.25)" stroke="#5cf2ff" stroke-width="2.5" filter="url(#glow)"/>'
               f'<path d="M{c[0]-9:.1f},{c[1]-14:.1f} l24,14 l-24,14 z" fill="#e9fbff"/>')
        self.items.append((x + y + 3.2, svg))

    def gpu_card(self, x, y, z):
        self.box(x, y, z, 3.0, 1.4, 0.4, top="url(#gTop)", depth=x + y + z * 0.01)
        svg = ""
        for fx in (0.85, 2.15):
            c = self.p(x + fx, y + 0.7, z + 0.41)
            svg += f'<ellipse cx="{c[0]:.1f}" cy="{c[1]:.1f}" rx="26" ry="15" fill="rgba(8,14,50,.9)" stroke="#5cf2ff" stroke-width="2" filter="url(#glow)"/>'
            for k in range(5):
                a = math.radians(k * 72)
                svg += _line(self, c, (c[0] + 20 * math.cos(a), c[1] + 11 * math.sin(a)), "#8fd3ff", 2)
        self.items.append((x + y + z * 0.01 + 0.5, svg))

    def antenna(self, x, y, z, h=1.3, waves=3):
        """A whip antenna on top of a machine, with radio waves rising from its tip."""
        P = self.p
        base, tip = P(x, y, z), P(x, y, z + h)
        svg = _line(self, base, tip, "#bfe9ff", 2.5)
        svg += f'<circle cx="{tip[0]:.1f}" cy="{tip[1]:.1f}" r="4.5" fill="#5cf2ff" filter="url(#glow)"/>'
        for k in range(waves):
            r_ = 14 + k * 11
            svg += (f'<path d="M{tip[0]-r_:.1f},{tip[1]-r_*0.15:.1f} a{r_},{r_*0.8:.1f} 0 0 1 {2*r_},0" fill="none" '
                    f'stroke="rgba(92,242,255,{0.85 - k * 0.22:.2f})" stroke-width="2" filter="url(#glow)"/>')
        self.items.append((x + y + z * 0.01 + 4, svg))
        return tip

    def airwave(self, a, b, depth=-45):
        """A radio path between two antenna tips: a dotted arc, brighter in the middle."""
        mx, my = (a[0] + b[0]) / 2, min(a[1], b[1]) - 46
        self.items.append((depth, f'<path d="M{a[0]:.1f},{a[1]:.1f} Q{mx:.1f},{my:.1f} {b[0]:.1f},{b[1]:.1f}" fill="none" '
                                  f'stroke="#5cf2ff" stroke-width="2" stroke-dasharray="2 7" stroke-linecap="round" opacity=".85" filter="url(#glow)"/>'))

    for name, fn in list(locals().items()):
        if callable(fn) and not name.startswith("_") and name != "Scene":
            setattr(Scene, name, fn)


# --- compositions ------------------------------------------------------------------------------
# Scene origin and grid: x, y in about [-0.5, 7], z up. The text sits left of x≈-1.
def _vmware_boxes(s, x, y, label="VMware"):
    s.server(x, y, 0, units=3, legacy=True)
    s.label(x + 1.1, y + 1.1, 2.4, label, 15)


def _versus(s, left, right):
    """Scales in the middle, the incumbent on the left, Cozystack on the right."""
    s.balance(2.8, 2.8, 0, left, right, tilt=-10)
    s.server(-0.2, 4.8, 0, w=1.8, d=1.8, units=2, legacy=True)
    s.server(4.8, -0.2, 0, w=1.8, d=1.8, units=3)
    s.kube(5.7, 0.7, 2.4, 0.6)


POST_SCENES = {}


def scene(*slugs):
    def deco(fn):
        for sl in slugs:
            POST_SCENES[sl] = fn
        return fn
    return deco


@scene("aenix-billing-per-minute-managed-services-cozystack")
def _(s, rng):
    s.receipt(0.2, 0.6, 0.3, 2.0, 2.8)
    s.cylinder(4.0, 1.4, 0, 0.9, 1.4, 2); s.cylinder(5.6, 3.2, 0, 0.9, 1.0, 2)
    s.clock(3.4, 4.8, 0.3, 0.9, "1 min")
    s.coins(1.4, 4.8, 3); s.pricetag(5.8, 0.6, 3.0, "€/min")
    s.link((2.3, 1.6, 0.4), (4.0, 1.4, 0.4))


@scene("ai-ml-edition-sustained-gpu-economics")
def _(s, rng):
    s.gpu_card(0.4, 0.8, 0); s.gpu_card(0.4, 0.8, 0.5); s.gpu_card(0.4, 0.8, 1.0)
    s.bars(4.0, 0.8, [0.8, 1.6, 2.4, 3.2])
    s.gauge(3.8, 4.8, 0.2, 1.2, 0.85, "util")
    s.coins(1.6, 4.6, 3)


@scene("best-vmware-alternatives-2026-detailed-comparison")
def _(s, rng):
    _versus(s, "VMware", "Cozystack")
    s.document(4.6, 4.6, 0.2, 1.8, 2.2)


@scene("build-private-cloud-90-day-playbook")
def _(s, rng):
    s.calendar(0.2, 0.6, 0.3, 2.4, 2.4, "90", "days")
    s.steps(2.6, 3.8, 4, 1.0, 1.8, 0.55)
    s.server(4.8, 0.4, 0, units=4)
    s.kube(5.9, 1.5, 2.9, 0.7)


@scene("build-sovereign-cloud-eu-and-central-asia")
def _(s, rng):
    s.globe(2.6, 2.6, 0.8, 2.0)
    s.pin(0.4, 4.6, 0, "EU"); s.pin(5.4, 1.0, 0, "Central Asia")
    s.server(4.8, 4.4, 0, units=2); s.shield(0.4, 0.6, 0.2, 1.8)


@scene("cloud-cost-optimization-strategies-2026")
def _(s, rng):
    s.bars(0.4, 0.6, [3.0, 2.4, 1.7, 1.0])
    s.arrow((0.8, 4.4), (4.6, 4.4))
    s.coins(5.4, 1.4, 4); s.coins(6.0, 3.4, 2)
    s.magnifier(5.2, 5.0, 1.6, 0.9)


@scene("cloud-native-research-and-teaching-infrastructure")
def _(s, rng):
    s.school(0.0, 0.4, 3.2, 2.2)
    s.gradcap(2.4, 4.4, 2.6, 1.2)
    s.chip(4.6, 3.8, 0, 2.4, "GPU")
    s.server(4.8, 0.2, 0, units=3)


@scene("cloud-readiness-assessment-14-day-methodology")
def _(s, rng):
    s.document(0.0, 0.8, 0.3, 2.2, 2.8, "check", "AUDIT")
    s.calendar(3.0, 0.6, 0.3, 1.8, 1.8, "14", "days")
    s.server(4.4, 3.8, 0, units=3)
    s.magnifier(4.6, 4.2, 2.8, 1.1)


@scene("cloud-repatriation-tco-modeling-honest-numbers")
def _(s, rng):
    s.bigcloud(1.2, 1.0, 3.4, 1.0, "public cloud")
    s.arrow((2.4, 2.6), (4.2, 4.0))
    s.server(4.8, 3.8, 0, units=3)
    s.bars(4.6, 0.2, [2.6, 1.2])
    s.coins(1.0, 5.0, 3)


@scene("cloud-strategy-engagement-vendor-neutral")
def _(s, rng):
    s.balance(2.8, 2.8, 0, "option A", "option B", tilt=0)
    s.document(-0.6, 5.6, 0.2, 2.0, 2.4, "text", "STRATEGY")
    s.chain(5.6, 0.6, 1.0, broken=True)


@scene("cloudstack-migration-cozystack-path")
def _(s, rng):
    _vmware_boxes(s, 0.0, 0.2, "CloudStack")
    s.arrow((2.4, 2.6), (4.0, 3.8))
    s.server(4.4, 3.6, 0, units=3); s.kube(5.5, 4.7, 2.3, 0.7)
    s.steps(0.0, 4.6, 3, 1.0, 1.4, 0.4)


@scene("cozystack-introduction-architecture")
def _(s, rng):
    for i, (z, top) in enumerate(((0, "url(#gTop)"), (0.9, "url(#gTop)"), (1.8, "url(#gDie)"))):
        s.box(0.6, 0.8, z, 4.6, 4.0, 0.7, top=top, depth=0.6 + 0.8 + z * 0.01 + i)
    s.kube(2.9, 2.8, 2.55, 0.9)
    s.label(5.4, 1.0, 2.0, "apps", 14); s.label(5.6, 1.4, 1.1, "platform", 14); s.label(5.8, 1.8, 0.2, "hardware", 14)


@scene("cozystack-vs-vmware-deep-dive")
def _(s, rng):
    _versus(s, "VMware", "Cozystack")
    s.magnifier(5.2, 5.0, 1.4, 0.8)


@scene("data-residency-requirements-2026")
def _(s, rng):
    s.globe(1.4, 1.4, 0.6, 1.8)
    s.pin(4.6, 1.0, 0, "EU"); s.pin(5.8, 3.0, 0, "DE")
    s.server(3.8, 4.2, 0, units=3); s.shield(1.0, 5.0, 0.2, 1.4)


@scene("developer-experience-platform-self-service-paths")
def _(s, rng):
    s.screen(0.0, 0.4, 0.3, 3.4, 2.4)
    s.steps(3.6, 0.6, 3, 1.0, 1.6, 0.6)
    s.person(1.2, 4.8); s.person(2.2, 5.4)
    s.arrow((2.8, 5.0), (5.6, 5.0))
    s.package(5.6, 3.6, 0, 1.4)


@scene("devops-best-practices-2026")
def _(s, rng):
    # an infinity loop drawn as two rings of dashed links
    s.ring(1.8, 3.0, 0.02, 1.6); s.ring(4.6, 3.0, 0.02, 1.6)
    s.screen(0.0, 0.2, 0.3, 3.0, 2.0)
    s.package(3.8, 0.8, 0, 1.3)
    s.gauge(4.8, 4.8, 0.2, 1.1, 0.75, "flow")
    s.server(0.8, 4.6, 0, units=2)


@scene("dora-compliance-checklist-cloud-architecture")
def _(s, rng):
    s.document(0.0, 0.6, 0.3, 2.4, 3.0, "check", "DORA")
    s.bank(3.6, 0.4, 3.0, 2.2)
    s.shield(4.6, 4.6, 0.2, 1.6)
    s.flag_eu(1.4, 5.2, 0, 3.0)


@scene("enterprise-edition-dora-cloud-architecture")
def _(s, rng):
    s.bank(0.0, 0.4, 3.0, 2.2)
    s.server(4.4, 0.6, 0, units=3); s.server(4.4, 3.6, 0, units=2)
    s.document(0.6, 4.6, 0.2, 1.8, 2.2, "check", "NIS2")
    s.shield(3.6, 5.6, 0.2, 1.3)


@scene("enterprise-platform-engineering-org-design")
def _(s, rng):
    s.orgchart(0.6, 2.6, 2.4)
    for i in range(5):
        s.person(0.6 + i * 1.2, 5.6 - (i % 2) * 0.5)
    s.server(4.6, 0.2, 0, units=2)


@scene("financial-services-cloud-tlpt-readiness")
def _(s, rng):
    s.bank(0.0, 0.2, 3.2, 2.2)
    s.shield(4.4, 1.2, 0.2, 2.0)
    s.magnifier(2.0, 4.6, 2.2, 1.0)
    s.document(4.6, 4.6, 0.2, 1.8, 2.2, "check", "TLPT")


@scene("hosting-provider-platform-modernization")
def _(s, rng):
    s.server(0.0, 0.2, 0, w=1.6, d=1.6, units=2, legacy=True); s.label(0.8, 0.8, 1.7, "VPS", 14)
    s.arrow((1.8, 1.8), (3.6, 3.0))
    s.storefront(3.6, 2.6, 3.0, 2.0, "CLOUD")
    s.cylinder(1.0, 4.8, 0, 0.8, 1.2, 2); s.kube(6.0, 1.0, 1.4, 0.6)


@scene("hybrid-cloud-architecture-patterns-2026")
def _(s, rng):
    s.bigcloud(1.2, 1.0, 3.2, 0.9, "public")
    s.server(4.4, 3.8, 0, units=3)
    s.puzzle(2.6, 4.2, 1.6, "url(#gTop)"); s.puzzle(3.4, 3.4, 2.2, "url(#gDie)", flip=True)
    s.link((2.0, 2.4, 1.5), (4.4, 4.4, 1.0))


@scene("idp-edition-developer-velocity-economics")
def _(s, rng):
    s.gauge(1.4, 1.2, 0.4, 1.5, 0.9, "velocity")
    s.screen(3.6, 0.2, 0.3, 3.0, 2.0)
    s.coins(1.0, 5.0, 4); s.bars(3.8, 4.2, [0.8, 1.6, 2.6])


@scene("internal-developer-platform-examples-without-backstage")
def _(s, rng):
    for i in range(3):
        for j in range(2):
            s.package(0.2 + i * 1.8, 0.4 + j * 1.8, 0, 1.3)
    s.screen(0.4, 4.4, 0.3, 3.0, 2.0)
    s.chain(5.6, 5.2, 1.2, broken=True)


@scene("internal-developer-portal-vs-platform")
def _(s, rng):
    s.screen(0.0, 0.4, 0.3, 3.2, 2.4)
    s.label(1.6, 0.4, 3.3, "portal", 15)
    s.box(3.8, 3.0, 0, 3.0, 2.6, 0.6, top="url(#gDie)")
    s.server(4.2, 3.3, 0.6, w=1.0, d=1.0, units=2); s.server(5.5, 3.3, 0.6, w=1.0, d=1.0, units=2)
    s.label(5.3, 5.6, 0.2, "platform", 15)
    s.link((1.6, 1.0, 0.3), (4.4, 3.4, 0.6))


@scene("isp-edition-economics-hosting-providers")
def _(s, rng):
    s.storefront(0.0, 0.4, 3.0, 2.0, "CLOUD")
    s.bars(4.0, 0.6, [0.6, 1.2, 1.9, 2.7])
    s.coins(1.4, 4.6, 4); s.server(4.4, 4.2, 0, units=2)
    s.arrow((2.4, 4.6), (4.0, 4.6))


@scene("k12-school-district-cloud-infrastructure")
def _(s, rng):
    s.school(0.0, 0.4, 3.4, 2.2)
    s.shield(4.6, 1.2, 0.2, 1.8)
    s.server(4.2, 4.2, 0, units=2)
    s.person(1.0, 4.6); s.person(1.8, 5.2); s.person(2.6, 5.8)


@scene("kubernetes-cluster-setup-production-architecture")
def _(s, rng):
    for i in range(3):
        s.server(0.0 + i * 2.2, 0.2, 0, w=1.6, d=1.6, units=2)
        s.label(0.8 + i * 2.2, 0.8, 1.7, "cp" if True else "", 13)
    for i in range(3):
        s.server(0.6 + i * 2.2, 3.4, 0, w=1.6, d=1.6, units=3)
    s.kube(3.4, 6.0, 0.8, 0.9)


@scene("launch-customer-facing-cloud-product")
def _(s, rng):
    s.rocket(1.6, 1.6, 3.2, 1.2)
    s.storefront(3.6, 3.0, 3.0, 2.0, "CLOUD")
    s.box(0.4, 0.4, 0, 2.4, 2.4, 0.5, top="url(#gDie)")
    s.person(1.0, 5.4); s.person(1.8, 6.0)


@scene("manufacturing-cloud-industry-40-edge")
def _(s, rng):
    s.factory(0.0, 0.4, 4.0, 2.4)
    s.tower(5.4, 1.6, 2.8)
    s.server(4.6, 4.2, 0, w=1.6, d=1.6, units=2)
    s.chip(0.8, 4.4, 0, 2.0, "EDGE")
    s.link((1.8, 4.4, 0.3), (4.6, 5.0, 0.6))


@scene("msp-cloud-platform-modernization")
def _(s, rng):
    s.storefront(0.0, 0.4, 3.0, 2.0, "MSP CLOUD")
    s.person(4.2, 1.0); s.person(5.0, 1.6); s.person(5.8, 0.8)
    s.server(3.6, 4.0, 0, units=3)
    s.arrow((1.6, 4.0), (3.4, 4.6))


@scene("nis2-requirements-cloud-infrastructure-checklist")
def _(s, rng):
    s.document(0.0, 0.6, 0.3, 2.4, 3.0, "check", "NIS2")
    s.flag_eu(3.8, 0.8, 0, 3.4)
    s.shield(4.6, 4.4, 0.2, 1.7)
    s.server(1.0, 4.6, 0, units=2)


@scene("nutanix-vs-cozystack-vs-vmware")
def _(s, rng):
    s.balance(2.8, 2.8, 0, "Nutanix · VMware", "Cozystack", tilt=-10)
    s.server(-0.4, 4.4, 0, w=1.5, d=1.5, units=2, legacy=True); s.label(0.35, 5.15, 1.4, "Nutanix", 13)
    s.server(0.8, 5.8, 0, w=1.5, d=1.5, units=2, legacy=True); s.label(1.55, 6.55, 1.4, "VMware", 13)
    s.server(4.8, -0.2, 0, w=1.8, d=1.8, units=3); s.kube(5.7, 0.7, 2.4, 0.6)


@scene("openshift-vs-cozystack-comparison")
def _(s, rng):
    _versus(s, "OpenShift", "Cozystack")


@scene("openstack-migration-cozystack-cohort-playbook")
def _(s, rng):
    _vmware_boxes(s, 0.0, 0.0, "OpenStack")
    for i in range(3):
        s.package(0.4 + i * 1.6, 3.6, 0, 1.0)
    s.arrow((5.0, 4.0), (6.4, 4.0))
    s.server(4.4, 0.2, 0, units=3); s.kube(5.5, 1.3, 2.3, 0.6)


@scene("openstack-vs-cozystack-modernization")
def _(s, rng):
    _versus(s, "OpenStack", "Cozystack")
    s.steps(4.2, 4.6, 3, 0.8, 1.4, 0.5)


@scene("platform-engineering-vs-devops-vs-sre")
def _(s, rng):
    for i, lab in enumerate(("Platform", "DevOps", "SRE")):
        x, y = 0.2 + i * 2.2, 0.6 + i * 0.4
        s.book(x, y, 0, 1.8, 1.4)
        s.book(x + 0.1, y + 0.1, 0.45, 1.6, 1.2)
        s.label(x + 0.9, y + 0.7, 1.4, lab, 15)
    s.person(1.6, 5.0); s.person(2.6, 5.6); s.person(3.6, 6.2)
    s.bubble(4.6, 5.6, 2.4, "?", 70)


@scene("private-cloud-architecture-2026")
def _(s, rng):
    s.box(0.0, 0.2, 0, 6.6, 6.0, 0.15, top="rgba(92,242,255,.10)", left="rgba(20,40,140,.5)", right="rgba(30,60,170,.5)", depth=-90)
    s.server(0.4, 0.6, 0, units=3); s.server(3.0, 0.6, 0, units=3)
    s.cylinder(1.4, 4.6, 0, 0.9, 1.4, 2); s.chip(3.6, 3.8, 0, 2.0, "GPU")
    s.shield(5.8, 5.0, 0.2, 1.3)


@scene("private-cloud-providers-comparison")
def _(s, rng):
    for i, lab in enumerate(("A", "B", "C")):
        s.server(0.0 + i * 2.2, 0.2, 0, w=1.6, d=1.6, units=2 + i)
        s.label(0.8 + i * 2.2, 0.8, 1.4 + i * 0.65, lab, 14)
    s.document(0.4, 4.4, 0.2, 2.4, 2.2, "check", "COMPARE")
    s.magnifier(4.8, 4.8, 1.8, 1.0)


@scene("private-llm-deployment-guide")
def _(s, rng):
    s.server(0.2, 0.4, 0, units=3); s.chip(0.2, 0.4, 2.0, 2.2, "LLM")
    s.bubble(4.2, 2.0, 3.0, "", 120)
    s.bubble(5.4, 4.6, 1.8, "on-prem", 120)
    s.shield(2.4, 5.0, 0.2, 1.3)


@scene("proxmox-migration-when-cozystack-fits")
def _(s, rng):
    s.server(0.0, 0.4, 0, w=1.8, d=1.8, units=3, legacy=True); s.label(0.9, 1.3, 2.3, "Proxmox", 14)
    s.arrow((2.2, 1.6), (3.8, 2.8))
    for i in range(3):
        s.server(3.8 + (i % 2) * 1.6, 2.2 + i * 1.3, 0, w=1.3, d=1.3, units=2)
    s.person(0.6, 4.6); s.person(1.4, 5.2)


@scene("proxmox-vs-vmware-vs-cozystack-comparison")
def _(s, rng):
    _vmware_boxes(s, -0.4, 0.0, "Proxmox")
    _vmware_boxes(s, 2.2, 0.0, "VMware")
    s.server(4.6, 3.8, 0, units=4)
    s.document(0.6, 4.6, 0.2, 2.0, 2.2, "check")


@scene("public-cloud-edition-multi-tenant-cloud-builder")
def _(s, rng):
    s.bigcloud(2.6, 1.6, 3.6, 1.0, "your cloud")
    for i in range(4):
        s.box(0.4 + i * 1.5, 4.4, 0, 1.2, 1.2, 0.6 + 0.3 * (i % 2), top="url(#gDie)" if i == 1 else "url(#gTop)")
        s.person(1.0 + i * 1.5, 6.0)
    s.flag_eu(5.6, 0.4, 0, 2.8)


@scene("public-sector-sovereign-cloud-procurement")
def _(s, rng):
    s.bank(0.0, 0.4, 3.2, 2.2)
    s.document(3.8, 0.4, 0.3, 2.2, 2.8, "text", "TENDER")
    s.shield(4.4, 4.6, 0.2, 1.6)
    s.server(1.0, 4.4, 0, units=2)


@scene("reverse-cloud-migration-playbook")
def _(s, rng):
    s.bigcloud(1.6, 1.2, 3.6, 1.0, "public cloud")
    s.arrow((2.8, 2.8), (4.4, 4.2))
    s.server(4.6, 3.8, 0, units=3)
    s.steps(0.0, 4.4, 3, 1.0, 1.4, 0.45)


@scene("smart-grid-platform-architecture-it-ot")
def _(s, rng):
    a1, b1 = s.pylon(0.6, 1.2, 4.0)
    a2, b2 = s.pylon(3.4, 0.6, 4.0)
    s.wire(b1, a2)
    s.turbine(5.8, 0.6, 3.4, 20)
    s.server(4.2, 4.0, 0, w=1.8, d=1.8, units=2); s.chip(0.6, 4.4, 0, 2.0, "OT")


@scene("sovereign-ai-architecture-decisions")
def _(s, rng):
    s.chip(0.4, 0.8, 0, 3.0, "AI")
    s.shield(4.6, 1.0, 0.2, 2.0)
    for i in range(7):
        c = (4.0 + (i % 4) * 0.8, 4.0 + (i // 4) * 1.0)
        s.box(c[0], c[1], 0, 0.6, 0.6, 0.35 + 0.15 * (i % 3), top="url(#gDie)" if i == 6 else "url(#gTop)")
    s.label(5.4, 6.0, 0.2, "7 decisions", 14)


@scene("sre-engagement-reliability-as-product-discipline")
def _(s, rng):
    s.gauge(1.4, 1.2, 0.4, 1.5, 0.93, "SLO")
    s.server(4.2, 0.4, 0, units=3)
    s.screen(0.2, 4.0, 0.2, 3.0, 2.0)
    s.clock(5.0, 4.8, 0.2, 0.9, "on-call")


@scene("telco-cloud-edge-nfv-modernization")
def _(s, rng):
    s.tower(0.8, 1.0, 3.6); s.tower(5.8, 1.4, 3.0); s.tower(1.2, 5.6, 2.6)
    s.server(2.8, 2.6, 0, units=3); s.kube(3.9, 3.7, 2.3, 0.7)
    s.link((0.8, 1.0, 0.3), (2.8, 2.6, 0.5)); s.link((5.8, 1.4, 0.3), (4.4, 2.8, 0.5))


@scene("transport-logistics-cloud-architecture-nis2")
def _(s, rng):
    s.truck(0.0, 4.6)
    s.container(0.2, 0.6, 0); s.container(0.2, 0.6, 1.0, color="url(#gDie)"); s.container(2.8, 0.6, 0)
    s.tower(5.8, 3.4, 2.8)
    s.shield(5.4, 0.6, 0.2, 1.4)


@scene("vmware-migration-tools-and-strategy")
def _(s, rng):
    _vmware_boxes(s, 0.0, 0.2)
    s.arrow((2.4, 2.6), (4.0, 3.8))
    s.server(4.4, 3.6, 0, units=3)
    s.document(0.4, 4.6, 0.2, 2.0, 2.2, "check", "PLAN")
    s.package(5.4, 0.6, 0, 1.2)


@scene("vmware-replacement-after-broadcom")
def _(s, rng):
    _vmware_boxes(s, 0.0, 0.2)
    s.chain(2.6, 1.2, 2.4, broken=True)
    s.server(4.4, 3.6, 0, units=4); s.kube(5.5, 4.7, 2.9, 0.7)
    s.bank(0.2, 4.2, 2.4, 1.8)


@scene("when-cozystack-fits-smb-and-mid-market")
def _(s, rng):
    s.building(3.4, -0.2, 1.6, 1.6, 2.0, 3, 2)
    s.building(5.4, 1.2, 2.0, 2.0, 3.4, 5, 3, seed=4)
    s.server(4.6, 4.6, 0, w=1.8, d=1.8, units=2)
    s.balance(0.8, 3.4, 0, "fits", "not yet", tilt=6)


@scene("white-label-cloud-msp-reseller-playbook")
def _(s, rng):
    s.storefront(-0.2, 3.6, 2.8, 1.8, "YOUR BRAND")
    s.storefront(3.6, -0.2, 2.8, 1.8, "PARTNER")
    s.server(3.8, 3.8, 0, w=1.8, d=1.8, units=3)
    s.pricetag(2.2, 2.2, 3.6, "%")


@scene("cloud-migration-strategie")
def _(s, rng):
    s.server(0.0, 0.4, 0, units=3, legacy=True)
    s.arrow((2.4, 1.6), (3.8, 2.6))
    s.bigcloud(5.0, 1.6, 3.2, 0.8)
    s.server(4.4, 3.8, 0, units=2)
    s.document(0.4, 4.6, 0.2, 2.0, 2.2, "check", "PLAN")


@scene("migrating-freeipa-from-centos-7-lxc-container-to-rocky-linux-and-new-cosi-driver-for-seaweedfs")
def _(s, rng):
    s.package(0.2, 0.6, 0, 1.6); s.label(1.0, 1.4, 2.1, "CentOS 7", 14)
    s.arrow((2.2, 1.4), (3.8, 2.4))
    s.server(4.0, 1.6, 0, units=3); s.label(5.1, 2.7, 2.6, "Rocky Linux", 14)
    s.cylinder(1.2, 4.8, 0, 0.9, 1.4, 2); s.label(1.2, 4.8, 1.9, "S3", 14)


@scene("kubectl-node-shell-plugin-updated-to-v1110")
def _(s, rng):
    s.screen(0.0, 0.6, 0.3, 3.6, 2.6)
    s.server(4.4, 0.6, 0, units=3)
    s.link((2.0, 0.6, 1.4), (4.4, 1.4, 1.2))
    s.label(1.8, 0.6, 3.3, "kubectl node-shell", 14)
    s.package(4.6, 4.2, 0, 1.2)


@scene("new-cncf-webinar-building-your-own-cloud-platform-with-open-source")
def _(s, rng):
    s.play(0.0, 0.6, 0.3, 3.8, 2.6)
    s.person(4.6, 1.2); s.person(5.4, 1.8)
    s.server(4.4, 4.0, 0, units=2); s.kube(5.5, 5.1, 1.5, 0.6)


@scene("cozystack-1-5-gateway-api-default-backups-and-tls-for-managed-services")
def _(s, rng):
    s.box(0.2, 0.4, 0, 3.0, 1.0, 2.2, depth=0.6)  # gateway arch: two pillars + lintel
    s.box(0.2, 2.6, 0, 3.0, 1.0, 2.2, depth=2.8)
    s.label(1.7, 2.0, 2.6, "Gateway API", 14)
    s.cylinder(4.6, 1.2, 0, 0.9, 1.4, 2); s.label(4.6, 1.2, 1.9, "backup", 13)
    s.shield(5.0, 4.6, 0.2, 1.3)
    s.package(1.0, 4.8, 0, 1.2)


@scene("cozystack-1-6-talos-workers-tenant-sso-and-hierarchical-quotas")
def _(s, rng):
    s.server(0.0, 0.4, 0, units=3); s.label(1.1, 1.5, 2.6, "Talos", 14)
    s.orgchart(3.0, 1.2, 2.0)
    s.shield(1.4, 4.8, 0.2, 1.3)
    s.bars(4.0, 4.4, [1.6, 1.0, 0.6])


# German posts without a link to the English original, by slug.
DE_TO_EN = {
    "aenix-billing-pay-per-minute-managed-services-cozystack": "aenix-billing-per-minute-managed-services-cozystack",
    "cloud-kostenoptimierung-strategien-2026": "cloud-cost-optimization-strategies-2026",
    "cloud-readiness-assessment-methodik": "cloud-readiness-assessment-14-day-methodology",
    "cozystack-einfuehrung-architektur": "cozystack-introduction-architecture",
    "datenresidenz-anforderungen-2026": "data-residency-requirements-2026",
    "devops-best-practices-2026": "devops-best-practices-2026",
    "dora-checkliste-cloud-architektur": "dora-compliance-checklist-cloud-architecture",
    "hosting-anbieter-plattform-modernisierung": "hosting-provider-platform-modernization",
    "hybrid-cloud-architektur-muster-2026": "hybrid-cloud-architecture-patterns-2026",
    "internal-developer-platform-beispiele-ohne-backstage": "internal-developer-platform-examples-without-backstage",
    "k12-schultraeger-cloud-infrastruktur": "k12-school-district-cloud-infrastructure",
    "msp-cloud-plattform-modernisierung": "msp-cloud-platform-modernization",
    "nis2-checkliste-cloud-architektur": "nis2-requirements-cloud-infrastructure-checklist",
    "platform-engineering-vs-devops-vs-sre": "platform-engineering-vs-devops-vs-sre",
    "private-cloud-anbieter-vergleich": "private-cloud-providers-comparison",
    "private-llm-deployment-leitfaden": "private-llm-deployment-guide",
    "produktion-kubernetes-cluster-architektur": "kubernetes-cluster-setup-production-architecture",
    "proxmox-vs-vmware-vs-cozystack": "proxmox-vs-vmware-vs-cozystack-comparison",
    "reverse-cloud-migration-leitfaden": "reverse-cloud-migration-playbook",
    "smart-grid-plattform-architektur-it-ot": "smart-grid-platform-architecture-it-ot",
    "transport-logistik-cloud-architektur-nis2": "transport-logistics-cloud-architecture-nis2",
    "vmware-ablosung-nach-broadcom": "vmware-replacement-after-broadcom",
    "vmware-migration-tools-strategie": "vmware-migration-tools-and-strategy",
    "wann-cozystack-fuer-mittelstand-passt": "when-cozystack-fits-smb-and-mid-market",
    "cloud-migration-strategie": "cloud-migration-strategie",
}


@scene("kubernetes-over-wirths-radio")
def _(s, rng):
    # The control plane: an Oberon workstation with the Kubernetes wheel beside it.
    s.box(0.0, 0.2, 0, 3.6, 1.0, 0.25, depth=0.9)
    s.screen(0.2, 0.2, 0.25, 3.2, 2.3, kind="oberon")
    plane = s.antenna(3.2, 0.2, 2.55, 1.2, 3)
    s.box(0.6, 2.6, 0, 1.6, 1.6, 0.5); s.kube(1.4, 3.4, 0.5, 0.85)
    # Two nodes: smaller Oberon machines, each with its antenna.
    s.box(4.2, 2.4, 0, 2.4, 0.8, 0.2, depth=6.4)
    s.screen(4.3, 2.4, 0.2, 2.2, 1.6, kind="oberon")
    n1 = s.antenna(6.3, 2.4, 1.8, 1.0, 2)
    s.box(3.0, 5.0, 0, 2.4, 0.8, 0.2, depth=7.6)
    s.screen(3.1, 5.0, 0.2, 2.2, 1.6, kind="oberon")
    n2 = s.antenna(5.1, 5.0, 1.8, 1.0, 2)
    # The air between them.
    s.airwave(plane, n1); s.airwave(plane, n2); s.airwave(n1, n2)
    s.chip(0.2, 5.0, 0, 1.8, "RISC5")
