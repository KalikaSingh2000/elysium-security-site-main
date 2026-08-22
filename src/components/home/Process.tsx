import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Search, BarChart3, PenTool, Rocket, Headphones } from "lucide-react";

const steps = [
  { icon: Search, title: "Discover", desc: "Map entry points, security gaps, users, throughput, and operational realities." },
  { icon: BarChart3, title: "Analyze", desc: "Shape the system around risk, flow, integration, and reporting needs." },
  { icon: PenTool, title: "Design", desc: "Define layouts, hardware, workflows, software, and acceptance criteria." },
  { icon: Rocket, title: "Deploy", desc: "Install, configure, test, train, and hand over with minimal disruption." },
  { icon: Headphones, title: "Support", desc: "Maintain system continuity with documentation and post-go-live support." },
];

const Process = () => (
  <SectionWrapper className="bg-secondary">
    <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <div className="lg:sticky lg:top-28"><SectionHeading badge="Our Process" title="A Clear Path From Site Survey to Support" description="Every stage has a purpose, an owner, and a defined outcome." centered={false} /></div>
      <div className="relative">
        <div className="absolute bottom-10 left-7 top-10 w-px bg-gradient-to-b from-accent via-cyan to-transparent md:left-9" />
        <div className="space-y-4">
          {steps.map((step, index) => <div key={step.title} className="group relative ml-16 rounded-[1.35rem] border border-border bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.06)] transition-all duration-500 hover:translate-x-1 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(15,23,42,0.11)] md:ml-20 md:grid md:grid-cols-[auto_1fr] md:gap-6"><div className="absolute -left-[3.75rem] top-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-slate-950 text-orange-200 shadow-lg md:-left-[4.7rem] md:h-14 md:w-14"><step.icon className="h-5 w-5" /></div><div className="hidden text-[10px] font-bold uppercase tracking-[0.24em] text-accent md:block">0{index + 1}</div><div><h3 className="text-xl font-heading font-semibold text-foreground">{step.title}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{step.desc}</p></div></div>)}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Process;
