import SectionWrapper from "@/components/SectionWrapper";
import { ClipboardCheck, Globe, Layers, Wrench, Users, ShieldCheck, ArrowUpRight } from "lucide-react";

const reasons = [
  { icon: ClipboardCheck, title: "Site-Led Planning", desc: "Recommendations begin with entry points, traffic flow, risk, compliance, and operating constraints." },
  { icon: Users, title: "One Delivery Team", desc: "Planning, installation, configuration, testing, and user training stay coordinated." },
  { icon: Globe, title: "India-Wide Coordination", desc: "A delivery approach suited to single-site and multi-location requirements." },
  { icon: Layers, title: "Hardware + Software", desc: "Physical devices and intelligent software designed as one connected operating layer." },
  { icon: Wrench, title: "Maintainable Installations", desc: "Documentation, handover, service access, and future expansion considered from the start." },
  { icon: ShieldCheck, title: "Operational Reliability", desc: "Systems configured around the availability and continuity your operation requires." },
];

const WhyChooseUs = () => (
  <SectionWrapper className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fafc,#eef5f8)]">
    <div className="hero-grid absolute inset-0 opacity-[0.025] [filter:invert(1)]" />
    <div className="section-glow -right-40 top-0 bg-cyan/10" />
    <div className="relative mb-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <div>
        <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-accent">Why Elysium</span>
        <h2 className="mt-6 text-4xl font-heading leading-[1.05] text-foreground md:text-6xl">Built for the moment security becomes operational.</h2>
      </div>
      <div className="lg:pb-2"><p className="max-w-xl text-lg leading-8 text-muted-foreground">The difference is not one device. It is how planning, installation, software, people, and long-term support work together under real site conditions.</p><div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">From survey to support <ArrowUpRight className="h-4 w-4" /></div></div>
    </div>
    <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {reasons.map((item, index) => (
        <div key={item.title} className={`group relative overflow-hidden rounded-[1.6rem] border border-border bg-white/90 p-7 shadow-[0_16px_40px_rgba(15,23,42,0.07)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] ${index < 2 ? "lg:col-span-2" : ""}`}>
          <div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/10 bg-accent/10"><item.icon className="h-6 w-6 text-accent" /></div><span className="text-xs font-semibold tracking-[0.28em] text-muted-foreground/50">0{index + 1}</span></div>
          <h3 className="mt-8 text-xl font-heading text-foreground">{item.title}</h3>
          <p className="mt-3 max-w-xl leading-7 text-muted-foreground">{item.desc}</p>
          <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-orange-300 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default WhyChooseUs;
