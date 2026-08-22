import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { ClipboardCheck, Globe, Headphones, Layers, Shield, Target, Users, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

const principles = [
  { icon: Shield, title: "Integrity", desc: "Recommendations are tied to the operating need, with clear scope and accountable handover." },
  { icon: Target, title: "Operational fit", desc: "We design around throughput, risk, staffing, integrations, and day-to-day usability." },
  { icon: Users, title: "Coordinated delivery", desc: "Planning, hardware, software, installation, testing, and training are treated as one system." },
  { icon: Wrench, title: "Maintainability", desc: "Documentation, service access, and future expansion are considered before installation begins." },
  { icon: Layers, title: "Integration", desc: "Identity, access, screening, reporting, and support work better as connected layers." },
  { icon: Globe, title: "Scalable execution", desc: "The approach can support one site or a coordinated multi-location deployment." },
];

const approach = [
  { icon: ClipboardCheck, title: "Understand the site", text: "Map entry points, user groups, peak traffic, risks, and reporting requirements." },
  { icon: Layers, title: "Design the system", text: "Select the right hardware, software, integrations, workflows, and deployment sequence." },
  { icon: Headphones, title: "Support the operation", text: "Test, train, document, hand over, and plan the service model needed after go-live." },
];

const About = () => (
  <>
    <Header />
    <main>
      <section className="mesh-section overflow-hidden pb-20 pt-32">
        <div className="section-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <span className="eyebrow">About Elysium Security</span>
            <h1 className="mt-6 text-4xl font-heading leading-[1.02] text-foreground md:text-6xl">Security integration built around real operations</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Elysium Security helps organizations plan and deploy systems for workforce identity, pedestrian and vehicle access, parking, visitor flow, and security screening.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Site-led planning", "Hardware + software", "Installation + training", "Lifecycle support"].map((item) => <span key={item} className="rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground">{item}</span>)}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white p-3 shadow-xl">
            <img src={heroImage} alt="Integrated physical security systems" className="min-h-[380px] w-full rounded-[1.5rem] object-cover" />
            <div className="absolute inset-x-8 bottom-8 rounded-[1.25rem] border border-white/20 bg-slate-950/75 p-5 text-white backdrop-blur-md">
              <div className="text-xs uppercase tracking-[0.24em] text-orange-200">Our focus</div>
              <div className="mt-2 text-lg font-semibold">Systems that remain clear, usable, and supportable after handover.</div>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <SectionHeading badge="How We Work" title="From security requirement to operating system" description="A practical engagement model helps reduce ambiguity and keeps every decision connected to the site." />
        <div className="grid gap-5 md:grid-cols-3">
          {approach.map((item, index) => (
            <div key={item.title} className="editorial-panel p-7">
              <div className="flex items-center justify-between"><item.icon className="h-7 w-7 text-accent" /><span className="text-xs font-semibold tracking-[0.28em] text-muted-foreground">0{index + 1}</span></div>
              <h2 className="mt-8 text-xl font-heading text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="mesh-section">
        <SectionHeading badge="Operating Principles" title="What customers should expect from the engagement" description="Clear decisions, coordinated execution, and a system designed for long-term use." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {principles.map((value) => (
            <div key={value.title} className="editorial-panel p-6"><value.icon className="h-8 w-8 text-accent" /><h3 className="mt-7 text-xl font-heading text-foreground">{value.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{value.desc}</p></div>
          ))}
        </div>
      </SectionWrapper>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default About;
