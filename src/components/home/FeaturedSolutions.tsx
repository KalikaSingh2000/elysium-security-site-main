import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { solutions } from "@/data/solutions";
import { ArrowUpRight } from "lucide-react";
import SolutionVisual from "@/components/SolutionVisual";

const FeaturedSolutions = () => (
  <SectionWrapper>
    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><SectionHeading badge="Integrated Solutions" title="Designed Around the Outcome, Not the Device" description="Combine products, software, workflows, and support into one site-specific operating system." centered={false} /><Link to="/solutions" className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-accent">Explore every solution <ArrowUpRight className="h-4 w-4" /></Link></div>
    <div className="grid gap-5 lg:grid-cols-2">
      {solutions.slice(0, 4).map((solution, index) => <Link key={solution.id} to={`/solutions/${solution.slug}`} className="group grid overflow-hidden rounded-[1.6rem] border border-border bg-white shadow-[0_16px_42px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)] sm:grid-cols-[0.9fr_1.1fr]"><SolutionVisual solution={solution} className="min-h-[290px] rounded-none" /><div className="flex flex-col justify-between p-6 md:p-7"><div><div className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">Solution 0{index + 1}</div><h3 className="mt-4 text-2xl font-heading font-semibold leading-tight text-foreground">{solution.name}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{solution.shortDescription}</p></div><div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors group-hover:text-accent">Explore solution <ArrowUpRight className="h-4 w-4" /></div></div></Link>)}
    </div>
  </SectionWrapper>
);

export default FeaturedSolutions;
