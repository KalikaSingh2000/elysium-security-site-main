import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileCheck2, ScanLine, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const resources = [
  { title: "Biometric & Workforce Systems", desc: "Compare face, fingerprint, and palm recognition options with attendance and payroll workflows.", icon: BookOpen, href: "/products?category=biometric" },
  { title: "Pedestrian & Vehicle Access", desc: "Review turnstiles, gates, barriers, readers, and the integration decisions around each entry point.", icon: ShieldCheck, href: "/products?category=access-control" },
  { title: "Security Screening", desc: "Explore baggage scanners, metal detectors, UVSS, and layered checkpoint planning.", icon: ScanLine, href: "/solutions/screening-security" },
];

const Downloads = () => (
  <>
    <Header />
    <main>
      <section className="pb-16 pt-32" style={{ background: "var(--gradient-hero)" }}>
        <div className="section-container text-center"><span className="eyebrow border-white/20 bg-white/10 text-orange-200">Resources</span><h1 className="mt-6 text-4xl font-heading text-white md:text-6xl">Product guidance without dead-end downloads</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">Start with the product and solution pages below. For project-specific specifications, request the exact datasheets your evaluation requires.</p></div>
      </section>
      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource) => (
            <Link key={resource.title} to={resource.href} className="group editorial-panel p-7 card-hover"><resource.icon className="h-9 w-9 text-accent" /><h2 className="mt-7 text-xl font-heading text-foreground">{resource.title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{resource.desc}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all group-hover:gap-3">Explore <ArrowRight className="h-4 w-4" /></span></Link>
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper className="bg-secondary">
        <div className="section-shell grid gap-8 p-7 md:grid-cols-[auto_1fr_auto] md:items-center md:p-10"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10"><FileCheck2 className="h-7 w-7 text-accent" /></div><div><h2 className="text-2xl font-heading text-foreground">Need a technical datasheet or comparison?</h2><p className="mt-2 text-muted-foreground">Tell us the product, application, site conditions, and integration needs so we can share relevant information instead of a generic brochure.</p></div><Link to="/contact"><Button variant="hero" size="lg">Request Technical Information <ArrowRight className="h-4 w-4" /></Button></Link></div>
      </SectionWrapper>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Downloads;
