import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Play, Sparkles, Brain, GraduationCap, BookOpen, Building2,
  Users, Wallet, Library, Home, Cpu, Briefcase, FlaskConical, FileText,
  Calendar, BarChart3, ShieldCheck, Bot, ClipboardCheck, Check, X,
  ChevronDown, Github, Twitter, Linkedin, Moon, Sun, Menu, Zap, Database,
  Network, Layers, Globe, TrendingUp, Award, Target, Activity, MessageSquare,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VECTOR UniversityOS — The AI Operating System for Universities" },
      { name: "description", content: "From admission to graduation. From records to intelligence. The AI-native platform unifying SIS, LMS, ERP, evaluation, accreditation, and analytics." },
      { property: "og:title", content: "VECTOR UniversityOS" },
      { property: "og:description", content: "The AI-Powered Operating System for Modern Universities." },
    ],
  }),
  component: Landing,
});

// ============ LOGO ============
function VectorLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="vlg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5B4CFF" />
          <stop offset="60%" stopColor="#8A7BFF" />
          <stop offset="100%" stopColor="#36CFC9" />
        </linearGradient>
      </defs>
      <path d="M4 6 L20 34 L36 6" stroke="url(#vlg)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <circle cx="20" cy="20" r="3" fill="url(#vlg)"/>
    </svg>
  );
}

// ============ THEME TOGGLE ============
function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark"); else root.classList.remove("dark");
  }, [dark]);
  return { dark, toggle: () => setDark(d => !d) };
}

// ============ NAV ============
function Nav({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#platform", label: "Platform" },
    { href: "#polaris", label: "POLARIS AI" },
    { href: "#analytics", label: "Analytics" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-7xl px-6 transition-all ${scrolled ? "glass rounded-2xl" : ""}`} style={{ width: scrolled ? "calc(100% - 3rem)" : "100%" }}>
        <div className={`flex items-center justify-between ${scrolled ? "py-2 px-2" : ""}`}>
          <a href="#" className="flex items-center gap-2.5">
            <VectorLogo className="h-8 w-8" />
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-base tracking-tight">VECTOR</span>
              <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">UniversityOS</span>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-accent transition-colors">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="#cta" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
              Book Demo <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2"><Menu className="h-5 w-5" /></button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden mt-3 flex flex-col gap-1 pb-2">
            {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 text-sm hover:bg-accent rounded-lg">{l.label}</a>)}
          </div>
        )}
      </div>
    </header>
  );
}

// ============ HERO ============
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative pt-40 pb-32 overflow-hidden grid-bg">
      {/* glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-[#5B4CFF]/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-[#36CFC9]/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-[#36CFC9] animate-pulse" />
          Introducing POLARIS — Multi-Agent Academic Intelligence
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
          className="flex justify-center mb-8">
          <div className="relative">
            <VectorLogo className="h-20 w-20 animate-float" />
            <div className="absolute inset-0 blur-2xl opacity-60 -z-10"><VectorLogo className="h-20 w-20" /></div>
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95]">
          The AI Operating System<br />
          for <span className="gradient-text">Universities</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed">
          Unify student information, learning management, academic ERP, AI evaluation,
          accreditation, analytics, and campus operations in one institutional intelligence platform.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#cta" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-primary hover:scale-105 transition-transform">
            Book a Demo <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="#platform" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-accent transition-colors">
            Explore Platform
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Play className="h-4 w-4" /> Watch Product Tour
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Assess <span className="text-[#5B4CFF] mx-2">•</span> Adapt <span className="text-[#5B4CFF] mx-2">•</span> Advance
        </motion.div>

        {/* dashboard preview */}
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 mx-auto max-w-6xl">
          <DashboardPreview />
        </motion.div>
      </motion.div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="relative rounded-2xl glass p-2 glow-primary">
      <div className="rounded-xl bg-background/80 overflow-hidden border border-border/50">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/50">
          <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#36CFC9]/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-success/60" />
          <div className="ml-4 text-xs text-muted-foreground font-mono">vector.university/dashboard</div>
        </div>
        <div className="grid grid-cols-12 gap-4 p-6">
          <div className="col-span-3 space-y-3">
            {[
              { icon: GraduationCap, label: "Students" },
              { icon: BookOpen, label: "Courses" },
              { icon: Brain, label: "POLARIS" },
              { icon: BarChart3, label: "Analytics" },
              { icon: ShieldCheck, label: "Accreditation" },
            ].map((it, i) => (
              <div key={i} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs ${i === 2 ? "bg-primary/15 text-primary" : "text-muted-foreground"}`}>
                <it.icon className="h-3.5 w-3.5" /> {it.label}
              </div>
            ))}
          </div>
          <div className="col-span-9 grid grid-cols-3 gap-4">
            {[
              { label: "Active Students", value: "48,392", trend: "+12.4%" },
              { label: "AI Evaluations", value: "1.2M", trend: "+34.1%" },
              { label: "Accreditation Ready", value: "98%", trend: "+2.1%" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-border/50 p-4 bg-card/50">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</div>
                <div className="mt-2 text-2xl font-bold font-display">{s.value}</div>
                <div className="mt-1 text-xs text-success">{s.trend}</div>
              </div>
            ))}
            <div className="col-span-3 rounded-xl border border-border/50 p-4 bg-card/50">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-medium">Outcome Attainment by Program</div>
                <div className="text-[10px] text-muted-foreground">Last 30 days</div>
              </div>
              <div className="flex items-end gap-1.5 h-24">
                {[60, 75, 45, 90, 65, 80, 70, 95, 55, 85, 72, 88, 78, 92].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-[#5B4CFF] to-[#36CFC9]" style={{ height: `${h}%`, opacity: 0.4 + (h / 200) }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ COUNTER ============
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const dur = 1800;
    const tick = () => {
      const p = Math.min(1, (Date.now() - start) / dur);
      setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, to]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

// ============ METRICS ============
function Metrics() {
  const stats = [
    { value: 480000, suffix: "+", label: "Students Managed" },
    { value: 12000000, suffix: "+", label: "Assignments Evaluated" },
    { value: 24000, suffix: "+", label: "Courses Delivered" },
    { value: 120, suffix: "+", label: "Institutions Supported" },
    { value: 8200000, suffix: "+", label: "Documents Archived" },
    { value: 3400, suffix: "+", label: "Accreditation Reports" },
  ];
  return (
    <section className="py-24 border-y border-border/50 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Trusted at scale</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Powering the world's most ambitious universities</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border/50 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <div key={i} className="bg-background p-6 text-center">
              <div className="text-2xl md:text-3xl font-bold font-display gradient-text">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ WHAT IS VECTOR ============
function WhatIsVector() {
  const oldStack = ["ERP", "LMS", "Library", "Payroll", "Accreditation", "Analytics", "Hostel", "Payments"];
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-20">
          <div className="text-xs uppercase tracking-[0.3em] text-[#36CFC9] mb-4">What is VECTOR</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
            One platform. <span className="gradient-text">Every academic system.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Most universities run eight disconnected systems. Faculty re-enter data. Students hunt for information. Accreditation takes months.
            VECTOR replaces that chaos with a single AI-native operating system.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* before */}
          <div className="relative">
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Before VECTOR</div>
            <div className="grid grid-cols-2 gap-3">
              {oldStack.map((s, i) => (
                <div key={i} className="rounded-xl border border-border/50 bg-card/30 p-4 text-sm text-muted-foreground flex items-center justify-between">
                  <span>{s}</span>
                  <X className="h-4 w-4 text-destructive/60" />
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Siloed data. Manual reconciliation. No intelligence layer.</p>
          </div>

          {/* after */}
          <div className="relative">
            <div className="text-xs uppercase tracking-wider text-[#36CFC9] mb-4">With VECTOR</div>
            <div className="rounded-2xl gradient-border p-8 bg-card glow-primary">
              <div className="flex items-center gap-3 mb-6">
                <VectorLogo className="h-10 w-10" />
                <div>
                  <div className="font-display font-bold">VECTOR UniversityOS</div>
                  <div className="text-xs text-muted-foreground">Unified intelligence layer</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {oldStack.map((s, i) => (
                  <div key={i} className="rounded-lg bg-primary/10 px-3 py-2 text-xs flex items-center gap-2">
                    <Check className="h-3 w-3 text-[#36CFC9]" /> {s}
                  </div>
                ))}
                <div className="rounded-lg bg-primary/20 px-3 py-2 text-xs flex items-center gap-2 col-span-2">
                  <Sparkles className="h-3 w-3 text-[#36CFC9]" /> + POLARIS AI Engine
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ MODULES ============
const MODULES = [
  { icon: GraduationCap, name: "Student Information", desc: "Complete SIS with admissions, records, transcripts, and lifecycle management." },
  { icon: BookOpen, name: "Learning Management", desc: "Modern LMS with adaptive learning paths and integrated assessments." },
  { icon: Building2, name: "Academic ERP", desc: "Finance, HR, procurement, and operations purpose-built for higher education." },
  { icon: Wallet, name: "Payroll", desc: "Faculty and staff payroll with statutory compliance and grant tracking." },
  { icon: Library, name: "Library", desc: "Digital catalog, circulation, e-resources, and research repositories." },
  { icon: Home, name: "Hostel", desc: "Allocation, mess management, and resident lifecycle automation." },
  { icon: Cpu, name: "Resource Management", desc: "Labs, equipment, classrooms, and asset utilization tracking." },
  { icon: Briefcase, name: "Placement", desc: "Recruiter engagement, student readiness, and outcome tracking." },
  { icon: FlaskConical, name: "Research", desc: "Grants, publications, IP, and faculty research portfolios." },
  { icon: FileText, name: "Document Management", desc: "Auto-archived evidence linked to courses, students, and accreditation." },
  { icon: Calendar, name: "Events", desc: "Academic calendar, scheduling, and institutional events." },
  { icon: BarChart3, name: "Analytics", desc: "Real-time institutional intelligence across every dimension." },
  { icon: ShieldCheck, name: "Accreditation", desc: "NBA, NAAC, ABET-ready dashboards with automated evidence." },
  { icon: Bot, name: "AI Assistant", desc: "Copilots for students, faculty, and administrators." },
  { icon: ClipboardCheck, name: "POLARIS Evaluation", desc: "Multi-agent AI grading with rubric and Bloom-level analysis." },
];

function Modules() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="platform" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#36CFC9] mb-4">The Platform</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">The complete <span className="gradient-text">University OS</span></h2>
          <p className="mt-6 text-lg text-muted-foreground">Fifteen integrated modules. One shared data model. Zero silos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODULES.map((m, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              whileHover={{ y: -4 }}
              className="group text-left rounded-2xl glass p-6 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#5B4CFF]/20 to-[#36CFC9]/20 flex items-center justify-center group-hover:from-[#5B4CFF]/40 group-hover:to-[#36CFC9]/40 transition-all">
                  <m.icon className="h-5 w-5 text-primary" />
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
              </div>
              <div className="font-display font-semibold mb-1">{m.name}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{m.desc}</div>
            </motion.button>
          ))}
        </div>

        {active !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-background/80 backdrop-blur-md" onClick={() => setActive(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="max-w-lg w-full rounded-2xl glass p-8" onClick={e => e.stopPropagation()}>
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#5B4CFF] to-[#36CFC9] flex items-center justify-center mb-4">
                {(() => { const Icon = MODULES[active].icon; return <Icon className="h-6 w-6 text-white" />; })()}
              </div>
              <h3 className="text-2xl font-bold font-display mb-2">{MODULES[active].name}</h3>
              <p className="text-muted-foreground mb-6">{MODULES[active].desc}</p>
              <button onClick={() => setActive(null)} className="text-sm text-primary hover:underline">Close</button>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

// ============ POLARIS ============
function Polaris() {
  const steps = [
    { icon: MessageSquare, label: "Question" },
    { icon: FileText, label: "Answer" },
    { icon: ClipboardCheck, label: "Rubric" },
    { icon: Brain, label: "AI Evaluation" },
    { icon: Layers, label: "Bloom Analysis" },
    { icon: Target, label: "CO Mapping" },
    { icon: Target, label: "PO Mapping" },
    { icon: ShieldCheck, label: "Audit Trail" },
    { icon: Award, label: "Accreditation Evidence" },
  ];
  return (
    <section id="polaris" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#5B4CFF]/10 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium mb-6">
            <Sparkles className="h-3 w-3 text-[#36CFC9]" /> Flagship AI Engine
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Meet <span className="gradient-text">POLARIS</span></h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            The multi-agent academic intelligence engine that evaluates, maps, and accredits every learning artifact at university scale.
          </p>
        </div>

        <div className="rounded-3xl glass p-8 md:p-12 glow-primary">
          <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
            {steps.map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center gap-2 relative">
                <div className="h-12 w-12 rounded-xl gradient-border bg-card flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-[11px] font-medium text-muted-foreground leading-tight">{s.label}</div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-2 w-2 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { v: "<30s", l: "Per-evaluation latency" },
              { v: "99.2%", l: "Rubric alignment" },
              { v: "100%", l: "Audit-ready evidence" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-background/40 p-6 border border-border/50">
                <div className="text-3xl font-bold font-display gradient-text">{s.v}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ EXPERIENCES ============
function Experiences() {
  const tabs = [
    {
      key: "student", label: "Student",
      title: "Your academic life, in one place",
      features: ["Academic progress", "Attendance", "Assignments", "Grades & feedback", "Fees & library", "Hostel services", "AI academic assistant", "Document requests"],
    },
    {
      key: "teacher", label: "Faculty",
      title: "Teach with AI superpowers",
      features: ["Course management", "Attendance", "AI-graded assignments", "Smart gradebook", "Outcome analytics", "CO/PO attainment", "Assessment management", "Research portfolio"],
    },
    {
      key: "admin", label: "Administrator",
      title: "Run the institution from one screen",
      features: ["Student management", "Faculty management", "Fees & payroll", "Hostel & library", "Resource scheduling", "Accreditation", "Institutional analytics", "Board reports"],
    },
  ];
  const [active, setActive] = useState(0);
  const t = tabs[active];
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-[#36CFC9] mb-4">Built for every role</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">One platform. <span className="gradient-text">Three experiences.</span></h2>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab, i) => (
            <button key={tab.key} onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${active === i ? "bg-primary text-primary-foreground" : "glass hover:bg-accent"}`}>
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{t.title}</h3>
            <div className="grid grid-cols-2 gap-3">
              {t.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="h-5 w-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  {f}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl glass p-2 glow-primary">
            <div className="rounded-xl bg-background/60 p-6 min-h-[360px]">
              <div className="flex items-center justify-between mb-6">
                <div className="text-xs text-muted-foreground">{t.label} Dashboard</div>
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-success" />
                  <div className="text-[10px] text-muted-foreground">Live</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {t.features.slice(0, 4).map((f, i) => (
                  <div key={i} className="rounded-lg border border-border/50 p-3 bg-card/40">
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{f}</div>
                    <div className="mt-1 text-lg font-bold font-display">{["94%", "12", "4.8", "$2.1k"][i]}</div>
                    <div className="mt-2 h-1 rounded-full bg-border overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#5B4CFF] to-[#36CFC9]" style={{ width: `${60 + i * 10}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-border/50 p-4 bg-card/40">
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="h-4 w-4 text-primary" />
                  <div className="text-xs font-medium">AI {t.label} Copilot</div>
                </div>
                <div className="text-xs text-muted-foreground italic">"{["How am I performing this semester?", "Generate a quiz from chapter 4.", "Show me students at risk of dropping out."][active]}"</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============ ANALYTICS ============
function Analytics() {
  const cards = [
    { icon: TrendingUp, label: "Student Success", v: "94.2%" },
    { icon: Users, label: "Faculty Performance", v: "4.7/5" },
    { icon: Target, label: "Outcome Attainment", v: "88%" },
    { icon: Activity, label: "Risk Detection", v: "312 flagged" },
    { icon: BarChart3, label: "Enrollment Trends", v: "+18% YoY" },
    { icon: Cpu, label: "Resource Utilization", v: "76%" },
  ];
  return (
    <section id="analytics" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#36CFC9] mb-4">Analytics Command Center</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Institutional intelligence, <span className="gradient-text">in real time.</span></h2>
          <p className="mt-6 text-lg text-muted-foreground">Every academic activity becomes evidence. Every signal becomes a decision.</p>
        </div>

        <div className="rounded-2xl glass p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {cards.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border/50 bg-card/30 p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/15 flex items-center justify-center">
                    <c.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-[10px] text-success">● LIVE</div>
                </div>
                <div className="text-xs text-muted-foreground">{c.label}</div>
                <div className="mt-1 text-2xl font-bold font-display">{c.v}</div>
                <div className="mt-3 flex items-end gap-0.5 h-8">
                  {Array.from({ length: 18 }).map((_, j) => (
                    <div key={j} className="flex-1 rounded-sm bg-gradient-to-t from-primary/40 to-[#36CFC9]/60" style={{ height: `${20 + Math.random() * 80}%` }} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ WHY VECTOR ============
function WhyVector() {
  const rows = [
    "AI Evaluation", "Accreditation Automation", "Student AI Assistant",
    "Outcome Mapping", "Institutional Intelligence", "Document Evidence",
    "Campus Operations", "Predictive Analytics",
  ];
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#36CFC9] mb-4">Why VECTOR</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Not another ERP. <span className="gradient-text">A new category.</span></h2>
        </div>
        <div className="rounded-2xl glass overflow-hidden">
          <div className="grid grid-cols-4 border-b border-border/50">
            <div className="p-6 text-xs uppercase tracking-wider text-muted-foreground">Capability</div>
            <div className="p-6 text-center text-sm text-muted-foreground">Traditional ERP</div>
            <div className="p-6 text-center text-sm text-muted-foreground">Traditional LMS</div>
            <div className="p-6 text-center text-sm font-display font-bold gradient-text">VECTOR OS</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className={`grid grid-cols-4 ${i !== rows.length - 1 ? "border-b border-border/50" : ""}`}>
              <div className="p-5 text-sm font-medium">{r}</div>
              <div className="p-5 flex justify-center"><X className="h-4 w-4 text-muted-foreground/50" /></div>
              <div className="p-5 flex justify-center"><X className="h-4 w-4 text-muted-foreground/50" /></div>
              <div className="p-5 flex justify-center"><Check className="h-4 w-4 text-[#36CFC9]" /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ TECH STACK ============
function TechStack() {
  const groups = [
    { icon: Layers, title: "Frontend", items: ["React", "TypeScript", "Tailwind", "ShadCN", "Framer Motion"] },
    { icon: Database, title: "Backend", items: ["FastAPI", "Python", "PostgreSQL", "Redis"] },
    { icon: Brain, title: "AI Layer", items: ["POLARIS Engine", "Gemma", "Multi-Agent Eval", "Vector Search"] },
    { icon: BarChart3, title: "Intelligence", items: ["Recharts", "Business Intelligence", "Accreditation Engine"] },
  ];
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#36CFC9] mb-4">Architecture</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Built on a <span className="gradient-text">modern foundation</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((g, i) => (
            <div key={i} className="rounded-2xl glass p-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#5B4CFF]/20 to-[#36CFC9]/20 flex items-center justify-center mb-4">
                <g.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="font-display font-semibold mb-3">{g.title}</div>
              <div className="space-y-1.5">
                {g.items.map((it, j) => (
                  <div key={j} className="text-sm text-muted-foreground font-mono">{it}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ ROADMAP ============
function Roadmap() {
  const phases = [
    { tag: "Phase 1", title: "Academic Intelligence", desc: "POLARIS evaluation, SIS, LMS, gradebook, outcome mapping." },
    { tag: "Phase 2", title: "University Operations", desc: "Hostel, library, payroll, finance, resource management." },
    { tag: "Phase 3", title: "Institutional Intelligence", desc: "Accreditation automation, predictive analytics, board reporting." },
    { tag: "Phase 4", title: "Global Expansion", desc: "Multi-tenant, multilingual, regional compliance, international accreditations." },
  ];
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#36CFC9] mb-4">Roadmap</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">The path to <span className="gradient-text">AI-native universities</span></h2>
        </div>
        <div className="relative">
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden md:block" />
          <div className="grid md:grid-cols-4 gap-6">
            {phases.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative">
                <div className="relative z-10 h-6 w-6 rounded-full bg-gradient-to-br from-[#5B4CFF] to-[#36CFC9] mx-auto mb-6 ring-4 ring-background" />
                <div className="rounded-2xl glass p-6 text-center">
                  <div className="text-xs uppercase tracking-wider text-[#36CFC9] mb-2">{p.tag}</div>
                  <div className="font-display font-semibold mb-2">{p.title}</div>
                  <div className="text-sm text-muted-foreground">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ TESTIMONIALS ============
function Testimonials() {
  const items = [
    { q: "VECTOR cut our accreditation prep from 9 months to 3 weeks. The evidence is automatic.", a: "Dr. Anika Rao", r: "Vice Chancellor, Pratham University" },
    { q: "POLARIS evaluates 40,000 assignments overnight with rubric alignment our faculty trust.", a: "Prof. Marcus Chen", r: "Dean of Engineering, Northcrest Institute" },
    { q: "For the first time, I can see every student, every course, every outcome in one view.", a: "Dr. Sofía Marín", r: "Registrar, San Telmo University" },
    { q: "It replaced six vendors. The data finally makes decisions instead of reports.", a: "Rajesh Iyer", r: "CIO, Aurora Tech University" },
  ];
  return (
    <section className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#36CFC9] mb-4">Leaders speak</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Trusted by university <span className="gradient-text">leadership</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl glass p-8">
              <div className="text-xl leading-relaxed font-display mb-6">"{t.q}"</div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#5B4CFF] to-[#36CFC9]" />
                <div>
                  <div className="font-medium text-sm">{t.a}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PRICING ============
function Pricing() {
  const tiers = [
    { name: "Starter", price: "Custom", desc: "For emerging colleges getting started.", features: ["Up to 2,000 students", "Core SIS + LMS", "Basic analytics", "Email support"], cta: "Contact Sales", featured: false },
    { name: "Professional", price: "Custom", desc: "For established universities scaling operations.", features: ["Up to 20,000 students", "Full platform + POLARIS", "Accreditation modules", "Priority support", "Dedicated CSM"], cta: "Book Demo", featured: false },
    { name: "Enterprise", price: "Custom", desc: "For multi-campus systems and global institutions.", features: ["Unlimited students", "All modules + custom AI", "SLA + dedicated infra", "24/7 support", "On-prem option", "Strategic partnership"], cta: "Talk to Sales", featured: true },
  ];
  return (
    <section id="pricing" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#36CFC9] mb-4">Pricing</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Tailored for <span className="gradient-text">every institution</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className={`relative rounded-2xl p-8 ${t.featured ? "gradient-border bg-card glow-primary" : "glass"}`}>
              {t.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold text-primary-foreground tracking-wider uppercase">Most Popular</div>}
              <div className="font-display font-bold text-xl mb-2">{t.name}</div>
              <div className="text-sm text-muted-foreground mb-6">{t.desc}</div>
              <div className="text-4xl font-bold font-display mb-6">{t.price}</div>
              <a href="#cta" className={`block text-center rounded-full px-4 py-2.5 text-sm font-medium mb-6 ${t.featured ? "bg-primary text-primary-foreground" : "glass hover:bg-accent"}`}>{t.cta}</a>
              <div className="space-y-3">
                {t.features.map((f, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-[#36CFC9] mt-0.5 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ FAQ ============
function FAQ() {
  const items = [
    { q: "What is VECTOR UniversityOS?", a: "A unified AI-native operating system that replaces fragmented ERP, LMS, accreditation, and analytics tools with a single platform purpose-built for higher education." },
    { q: "How is it different from an LMS?", a: "An LMS handles courses. VECTOR handles the entire institution — admissions, finance, hostels, library, faculty, research, accreditation — with an intelligence layer on top." },
    { q: "How does POLARIS work?", a: "POLARIS is a multi-agent AI engine that evaluates student work against rubrics, maps responses to Bloom levels, links to course and program outcomes, and produces accreditation-ready evidence automatically." },
    { q: "How does accreditation automation work?", a: "Every academic activity — assignments, attendance, achievements, certificates — is stored as structured evidence and auto-mapped to NBA, NAAC, ABET, and other framework requirements." },
    { q: "Can we migrate from existing systems?", a: "Yes. We offer guided migration from SAP, PeopleSoft, Moodle, Canvas, and custom systems with dedicated migration engineering." },
    { q: "Is VECTOR available on-premises?", a: "Enterprise customers can deploy on dedicated cloud or fully on-premises infrastructure with the same feature set." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-32 relative">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#36CFC9] mb-4">FAQ</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Common <span className="gradient-text">questions</span></h2>
        </div>
        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl glass overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                <span className="font-medium">{it.q}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{it.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CTA ============
function CTA() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[#5B4CFF]/20 blur-[120px] pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <VectorLogo className="h-16 w-16 mx-auto mb-8 animate-float" />
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Build the <span className="gradient-text">university of the future</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Transform academic management, evaluation, analytics, and accreditation through AI.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground glow-primary hover:scale-105 transition-transform">
            Request Demo <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:bg-accent">
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  const cols = [
    { title: "Platform", links: ["SIS", "LMS", "POLARIS AI", "Analytics", "Accreditation"] },
    { title: "Company", links: ["About", "Team", "Careers", "Press", "Contact"] },
    { title: "Resources", links: ["Documentation", "Changelog", "Roadmap", "Blog", "Webinars"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR", "DPA"] },
  ];
  return (
    <footer className="border-t border-border/50 py-16 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <VectorLogo className="h-8 w-8" />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold">VECTOR</span>
                <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">UniversityOS</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The AI operating system for modern universities. Assess. Adapt. Advance.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="p-2 rounded-lg glass hover:bg-accent"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-lg glass hover:bg-accent"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-lg glass hover:bg-accent"><Github className="h-4 w-4" /></a>
            </div>
          </div>
          {cols.map((c, i) => (
            <div key={i}>
              <div className="font-medium text-sm mb-4">{c.title}</div>
              <div className="space-y-2">
                {c.links.map(l => <a key={l} href="#" className="block text-sm text-muted-foreground hover:text-foreground">{l}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-muted-foreground">© 2026 VECTOR UniversityOS. All rights reserved.</div>
          <div className="text-xs text-muted-foreground tracking-[0.3em] uppercase">Assess • Adapt • Advance</div>
        </div>
      </div>
    </footer>
  );
}

// ============ PAGE ============
function Landing() {
  const { dark, toggle } = useTheme();
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav dark={dark} toggle={toggle} />
      <Hero />
      <Metrics />
      <WhatIsVector />
      <Modules />
      <Polaris />
      <Experiences />
      <Analytics />
      <WhyVector />
      <TechStack />
      <Roadmap />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
