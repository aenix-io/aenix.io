import Image from "next/image";

function Header() {
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, borderBottom: "1px solid rgba(255,255,255,0.05)", backdropFilter: "blur(20px)", background: "rgba(6,11,24,0.7)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Ænix" width={120} height={52} priority />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Products", href: "#products" },
            { label: "Services", href: "#services" },
            { label: "Case Studies", href: "#cases" },
            { label: "About", href: "#about" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://github.com/aenix-io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="#contact"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 9999, padding: "8px 24px", fontSize: 14, fontWeight: 600, color: "white", background: "linear-gradient(135deg, #3b8bff, #00d4ff)", textDecoration: "none" }}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060b18] via-[#0a1128] to-[#060b18]" />

        {/* Cosmic ring - centered on content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[700px] md:h-[700px] animate-spin-slow">
          <div className="absolute inset-0 rounded-full border border-primary/30" />
          <div className="absolute inset-[10%] rounded-full border border-cyan/20" />
          <div className="absolute inset-[20%] rounded-full border border-purple/20" />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-purple/15 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-cyan/10 blur-[60px]" />
      </div>

      {/* Comets */}
      {/* Comet 1: flies right-down, tail trails behind (left-up) */}
      <div className="absolute animate-comet-1" style={{ top: "15%", left: "-5%", zIndex: 6, pointerEvents: "none", transform: "rotate(15deg)" }}>
        <div style={{ position: "relative", width: 6, height: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", boxShadow: "0 0 12px 4px rgba(0,212,255,0.8), 0 0 30px 8px rgba(59,139,255,0.4)" }} />
          {/* Tail going left = behind the direction of travel */}
          <div style={{ position: "absolute", top: 2, right: "100%", width: 120, height: 2, borderRadius: 4, background: "linear-gradient(270deg, rgba(0,212,255,0.8), transparent)" }} />
        </div>
      </div>
      {/* Comet 2: flies left-down, tail trails behind (right-up) */}
      <div className="absolute animate-comet-2" style={{ top: "55%", right: "-5%", zIndex: 6, pointerEvents: "none", transform: "rotate(-10deg)" }}>
        <div style={{ position: "relative", width: 4, height: 4 }}>
          <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#fff", boxShadow: "0 0 8px 3px rgba(139,92,246,0.7), 0 0 24px 6px rgba(59,139,255,0.3)" }} />
          {/* Tail going right = behind the direction of travel */}
          <div style={{ position: "absolute", top: 1, left: "100%", width: 80, height: 2, borderRadius: 4, background: "linear-gradient(90deg, rgba(139,92,246,0.7), transparent)" }} />
        </div>
      </div>

      {/* Stars */}
      <div className="absolute" style={{ inset: 0, zIndex: 5, pointerEvents: "none" }}>
        {[
          { top: "12%", left: "8%", size: 3, delay: 0, dur: 3, color: "#fff" },
          { top: "18%", left: "75%", size: 2, delay: 1.2, dur: 4, color: "#00d4ff" },
          { top: "28%", left: "20%", size: 2, delay: 0.5, dur: 3.5, color: "#fff" },
          { top: "15%", left: "55%", size: 4, delay: 2, dur: 5, color: "#3b8bff" },
          { top: "35%", left: "90%", size: 2, delay: 0.8, dur: 3, color: "#fff" },
          { top: "60%", left: "5%", size: 3, delay: 1.5, dur: 4, color: "#00d4ff" },
          { top: "70%", left: "85%", size: 2, delay: 3, dur: 5, color: "#8b5cf6" },
          { top: "75%", left: "30%", size: 2, delay: 0.3, dur: 3.5, color: "#fff" },
          { top: "80%", left: "65%", size: 3, delay: 2.5, dur: 4, color: "#3b8bff" },
          { top: "45%", left: "12%", size: 2, delay: 1.8, dur: 3, color: "#fff" },
          { top: "50%", left: "88%", size: 3, delay: 0.7, dur: 5, color: "#00d4ff" },
          { top: "88%", left: "45%", size: 2, delay: 3.5, dur: 4, color: "#fff" },
          { top: "22%", left: "42%", size: 2, delay: 2.2, dur: 3, color: "#8b5cf6" },
          { top: "65%", left: "50%", size: 2, delay: 1, dur: 4.5, color: "#fff" },
        ].map((star, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              background: star.color,
              boxShadow: `0 0 ${star.size * 3}px ${star.size}px ${star.color}40`,
              animation: `twinkle ${star.dur}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 animate-float" style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <p style={{ color: "#00d4ff", fontSize: 13, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 28 }}>
          Open Source Cloud Engineering
        </p>
        <h1 className="font-sans" style={{ fontSize: 88, fontWeight: 800, lineHeight: 0.95, marginBottom: 36, color: "white" }}>
          We build
          <br />
          <span className="text-gradient">clouds</span>
        </h1>
        <p style={{ fontSize: 20, color: "#7a8ba8", maxWidth: 560, margin: "0 auto", marginBottom: 48, lineHeight: 1.7 }}>
          Amplify your data center with cloud transformation.
          <br />
          Kubernetes, virtualization, and infrastructure — done right.
        </p>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", alignItems: "center" }}>
          <a
            href="#contact"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 9999, padding: "18px 44px", fontSize: 18, fontWeight: 600, color: "white", background: "linear-gradient(135deg, #3b8bff, #00d4ff)", textDecoration: "none" }}
          >
            Let&apos;s Talk
          </a>
          <a
            href="#services"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 9999, padding: "18px 44px", fontSize: 18, fontWeight: 600, color: "#e8edf5", border: "1px solid rgba(59,139,255,0.4)", textDecoration: "none" }}
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon,
  color,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <div
      className="group relative rounded-2xl p-[1px] transition-all duration-500"
      style={{
        background: `linear-gradient(180deg, ${color}33 0%, transparent 40%)`,
      }}
    >
      <div className="relative h-full rounded-2xl bg-[#0b1121] p-8 overflow-hidden">
        {/* Hover glow */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ background: color, opacity: undefined }}
        />
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full blur-[80px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none"
          style={{ background: color }}
        />

        {/* Icon */}
        <div
          className="relative"
          style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
            border: `1px solid ${color}30`,
            background: `${color}15`,
            overflow: "hidden",
          }}
        >
          <div style={{ color }}>{icon}</div>
        </div>

        {/* Content */}
        <h3 className="relative font-sans text-[17px] font-semibold text-white mb-2 leading-snug">
          {title}
        </h3>
        <p className="relative text-[#7a8ba8] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

const servicesData = [
  {
    title: "Bring Cloud To Your Home",
    description: "Amplify your bare metal infrastructure with modern and reliable cloud patterns.",
    color: "#3b8bff",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: "Consulting Services",
    description: "Expertise in Open Source cloud platforms, databases, software-defined storage and networking.",
    color: "#00d4ff",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinejoin="round" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeLinejoin="round" /></svg>,
  },
  {
    title: "SRE Expertise",
    description: "Diagnose complex software and hardware issues with optimization recommendations.",
    color: "#8b5cf6",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><circle cx="12" cy="12" r="3" /><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" strokeLinecap="round" /></svg>,
  },
  {
    title: "Technology Assessment",
    description: "Evaluate Open Source technologies for performance and reliability in your business.",
    color: "#06b6d4",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: "Research & Development",
    description: "Architecting and developing infrastructure components tailored to your needs.",
    color: "#f59e0b",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: "Designing K8s Apps",
    description: "Reliability, scalability and performance with designs optimized for Kubernetes.",
    color: "#10b981",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" strokeLinejoin="round" /><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
];

function ServicesSection() {
  return (
    <section id="services" className="relative py-28">
      <div
        className="absolute top-0 left-1/2 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,139,255,0.08), transparent 70%)", transform: "translateX(-50%)" }}
      />

      <div className="relative" style={{ maxWidth: 1100, margin: "0 auto", paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#00d4ff", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            What We Do
          </p>
          <h2 className="font-sans" style={{ fontSize: 44, fontWeight: 700, color: "white" }}>
            Our Services
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {servicesData.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OpenSourceBanner() {
  return (
    <section className="relative overflow-hidden" style={{ padding: "80px 0" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(59,139,255,0.3), transparent)" }} />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px", textAlign: "center", position: "relative" }}>
        <h2 className="font-sans" style={{ fontSize: 52, fontWeight: 700, color: "white" }}>
          We{" "}
          <span className="text-gradient-cyan" style={{ display: "inline-block" }}>&#10084;</span>
          {" "}and DO{" "}
          <span className="text-gradient">Open Source</span>
        </h2>
      </div>
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(59,139,255,0.3), transparent)" }} />
    </section>
  );
}

function CozystackSection() {
  return (
    <section id="products" className="relative overflow-hidden" style={{ padding: "100px 0" }}>
      {/* Background glow */}
      <div className="absolute rounded-full blur-[150px]" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, background: "rgba(107,63,160,0.1)" }} />

      <div className="relative" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div className="relative rounded-3xl overflow-hidden" style={{ background: "linear-gradient(135deg, #0b1121, #0f1a35, #0b1121)", border: "1px solid #1a2540", padding: "64px" }}>
          {/* Decorative corner glows */}
          <div className="absolute rounded-full blur-[80px]" style={{ top: -100, right: -100, width: 256, height: 256, background: "rgba(59,139,255,0.1)" }} />
          <div className="absolute rounded-full blur-[60px]" style={{ bottom: -80, left: -80, width: 192, height: 192, background: "rgba(0,212,255,0.1)" }} />

          <div className="relative" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <p style={{ color: "#00d4ff", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
                Featured Product
              </p>
              <h2 className="font-sans" style={{ fontSize: 48, fontWeight: 700, color: "white", marginBottom: 20 }}>
                Cozystack
              </h2>
              <p style={{ color: "#7a8ba8", fontSize: 17, lineHeight: 1.7, marginBottom: 32 }}>
                Free and Open Source PaaS platform for seamless management of
                virtual machines, managed Kubernetes, and
                Databases-as-a-Service.
              </p>
              <div style={{ display: "flex", gap: 16 }}>
                <a
                  href="/cozystack/"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 9999, padding: "12px 28px", fontSize: 14, fontWeight: 600, color: "white", background: "linear-gradient(135deg, #3b8bff, #00d4ff)", textDecoration: "none" }}
                >
                  Request a Demo
                </a>
                <a
                  href="/cozystack/"
                  style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 9999, padding: "12px 28px", fontSize: 14, fontWeight: 600, color: "#e8edf5", border: "1px solid rgba(59,139,255,0.4)", textDecoration: "none" }}
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Visual element */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
                <div
                  className="absolute inset-4 rounded-full border border-cyan/20 animate-spin-slow"
                  style={{ animationDirection: "reverse", animationDuration: "25s" }}
                />
                <div className="absolute inset-8 rounded-full border border-purple/30 animate-spin-slow" style={{ animationDuration: "20s" }} />

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
                    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 text-cyan">
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Floating nodes */}
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-primary/60 animate-pulse-glow"
                    style={{
                      top: `${50 + 45 * Math.sin((i * Math.PI) / 2)}%`,
                      left: `${50 + 45 * Math.cos((i * Math.PI) / 2)}%`,
                      transform: "translate(-50%, -50%)",
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const caseStudies = [
  { title: "Kubernetes-in-Kubernetes and PXE Bootable Server Farm", tag: "Infrastructure", color: "#3b8bff" },
  { title: "Full Feature CSI Driver for Shared SAN in Kubernetes", tag: "Storage", color: "#00d4ff" },
  { title: "Virtualization Subsystem for Deckhouse Kubernetes Platform", tag: "Virtualization", color: "#8b5cf6" },
];

function CaseStudiesSection() {
  return (
    <section id="cases" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#00d4ff", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
            Portfolio
          </p>
          <h2 className="font-sans" style={{ fontSize: 44, fontWeight: 700, color: "white" }}>
            Featured Works
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {caseStudies.map((study, i) => (
            <div
              key={i}
              style={{ background: "#0b1121", border: "1px solid #1a2540", borderRadius: 16, padding: 32, position: "relative", overflow: "hidden" }}
            >
              <div style={{ height: 3, width: 48, borderRadius: 4, marginBottom: 24, background: study.color }} />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: study.color, marginBottom: 12, display: "block" }}>
                {study.tag}
              </span>
              <h3 className="font-sans" style={{ fontSize: 18, fontWeight: 600, color: "white", lineHeight: 1.4 }}>
                {study.title}
              </h3>
              <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#7a8ba8" }}>
                <span>View case study</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const partners = [
  "CloudNativePG", "LINBIT", "Kube-OVN", "Cilium", "Strimzi", "Kamaji",
  "VictoriaMetrics", "Flux", "Talos", "SeaweedFS", "FerretDB", "NGINX",
];

function PartnersSection() {
  return (
    <section style={{ padding: "60px 0" }}>
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(59,139,255,0.3), transparent)" }} />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px" }}>
        <p className="font-sans" style={{ textAlign: "center", color: "#7a8ba8", fontSize: 12, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32 }}>
          Technology Partners
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px 40px" }}>
          {partners.map((partner) => (
            <span
              key={partner}
              className="font-sans"
              style={{ color: "rgba(122,139,168,0.5)", fontSize: 17, fontWeight: 500, cursor: "default" }}
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(59,139,255,0.3), transparent)" }} />
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="relative overflow-hidden" style={{ padding: "100px 0" }}>
      {/* Background */}
      <div className="absolute rounded-full blur-[120px]" style={{ top: 0, left: "50%", transform: "translateX(-50%)", width: 800, height: 400, background: "rgba(59,139,255,0.06)" }} />

      <div style={{ position: "relative", maxWidth: 700, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <h2 className="font-sans" style={{ fontSize: 48, fontWeight: 700, color: "white", marginBottom: 20, lineHeight: 1.15 }}>
          Let&apos;s work together on your next{" "}
          <span className="text-gradient">cloud project</span>
        </h2>
        <p style={{ color: "#7a8ba8", fontSize: 17, marginBottom: 40 }}>
          Get a reliable and experienced partner to meet your business needs in
          systems architecture and design.
        </p>
        <a
          href="/contact/"
          style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 9999, padding: "14px 40px", fontSize: 16, fontWeight: 600, color: "white", background: "linear-gradient(135deg, #3b8bff, #00d4ff)", textDecoration: "none" }}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}

function Footer() {
  const footerLinks = [
    { title: "Products", items: ["Cozystack", "Kubernetes Deep Dive", "Ænix Cloud"] },
    { title: "Company", items: ["About Us", "Case Studies", "Conferences", "Blog"] },
    { title: "Connect", items: ["GitHub", "Contact", "Pricing"] },
  ];

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: "48px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          <div>
            <Image src="/logo.png" alt="Ænix" width={100} height={44} />
            <p style={{ color: "#7a8ba8", fontSize: 14, marginTop: 16, lineHeight: 1.6 }}>
              Amplify your data center with cloud transformation.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-sans" style={{ fontWeight: 600, color: "white", fontSize: 14, marginBottom: 16 }}>
                {section.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.items.map((item) => (
                  <li key={item} style={{ marginBottom: 10 }}>
                    <a href="#" style={{ color: "#7a8ba8", fontSize: 14, textDecoration: "none" }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(59,139,255,0.3), transparent)", marginBottom: 32 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ color: "#7a8ba8", fontSize: 12 }}>
            &copy; {new Date().getFullYear()} Ænix. All rights reserved.
          </p>
          <a
            href="https://github.com/aenix-io"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: "#7a8ba8" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <OpenSourceBanner />
        <CozystackSection />
        <CaseStudiesSection />
        <PartnersSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
