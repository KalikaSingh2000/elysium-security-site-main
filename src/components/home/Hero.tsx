import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, CheckCircle2, Headphones, Network, Radar, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";
import { siteConfig } from "@/lib/siteConfig";

const capabilities = [
  { icon: ShieldCheck, label: "Site-led", detail: "Security planning" },
  { icon: Network, label: "Integrated", detail: "Hardware + software" },
  { icon: Headphones, label: "Lifecycle", detail: "Service + support" },
];

const Hero = () => (
  <section className="relative min-h-[900px] overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f5f8fb_52%,#edf4f8_100%)] text-foreground lg:min-h-screen">
    <div className="absolute inset-0 hero-grid opacity-[0.035] [filter:invert(1)]" />
    <div className="absolute -left-32 top-12 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[130px]" />
    <div className="absolute -right-40 bottom-0 h-[620px] w-[620px] rounded-full bg-cyan/10 blur-[150px]" />
    <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white/80 to-transparent" />

    <div className="section-container relative z-10 pb-16 pt-32 sm:pt-36 lg:pb-20 lg:pt-40">
      <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] xl:gap-20">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent backdrop-blur-md"><Radar className="h-3.5 w-3.5" /> Security infrastructure, intelligently integrated</div>
          <h1 className="mt-7 max-w-4xl font-heading text-[clamp(3.2rem,6vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
            Control every
            <span className="block text-foreground/50">critical movement.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{siteConfig.companyName} connects people, vehicles, visitors, attendance, parking, and screening into one carefully planned security operation.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact"><Button variant="hero" size="lg" className="h-14 rounded-full px-7 text-base">Request a Site Assessment <ArrowRight className="h-4 w-4" /></Button></Link>
            <Link to="/solutions"><Button variant="hero-outline" size="lg" className="h-14 rounded-full border-primary/20 px-7 text-base text-primary hover:bg-primary hover:text-white">Explore Solutions</Button></Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
            {["Access & attendance", "Vehicle control", "Security screening"].map((item) => <span key={item} className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" />{item}</span>)}
          </div>
        </div>

        <div className="relative animate-fade-up lg:animate-fade-up-delay-2">
          <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-accent/10 via-transparent to-cyan/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white/80 p-3 shadow-[0_40px_100px_rgba(15,23,42,0.18)] backdrop-blur-md">
            <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] sm:min-h-[600px]">
              <img src={heroImage} alt="Integrated security technology environment" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07101f] via-[#07101f]/15 to-transparent" />
              <div className="hero-scanline pointer-events-none absolute inset-x-0 top-1/3 h-px opacity-70" />
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/60 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                </span>
                Integrated command layer
              </div>
              <div className="absolute inset-x-5 bottom-5 rounded-[1.35rem] border border-white/10 bg-slate-950/75 p-5 backdrop-blur-xl sm:p-6">
                <div className="flex items-start justify-between gap-6"><div><div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-200">Designed around your operation</div><h2 className="mt-3 text-2xl font-heading leading-tight sm:text-3xl">Identity, access, screening, and movement—working as one.</h2></div><ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-cyan-200" /></div>
              </div>
            </div>
          </div>
          <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl backdrop-blur-xl xl:block"><Radar className="h-6 w-6 text-cyan-200" /><div className="mt-3 text-sm font-semibold">Live site context</div><div className="mt-1 text-xs text-white/50">Risk · flow · reporting</div></div>
        </div>
      </div>

      <div className="mt-14 grid overflow-hidden rounded-[1.6rem] border border-border bg-white/80 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:grid-cols-3 lg:mt-16">
        {capabilities.map((item, index) => <div key={item.label} className={`flex items-center gap-4 p-5 sm:p-6 ${index > 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""}`}><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10"><item.icon className="h-5 w-5 text-accent" /></div><div><div className="font-heading text-lg font-semibold text-foreground">{item.label}</div><div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.detail}</div></div></div>)}
      </div>
    </div>
  </section>
);

export default Hero;
