import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/data/industries";
import { Building2, Factory, GraduationCap, Heart, Landmark, Train, Home, ShoppingBag, Truck, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Building2, Factory, GraduationCap, Heart, Landmark, Train, Home, ShoppingBag, Truck };

const IndustriesGrid = () => (
  <SectionWrapper className="relative overflow-hidden">
    <div className="section-glow -left-40 bottom-0 bg-accent/10" />
    <SectionHeading badge="Industries" title="Different Environments. One Clear Security Standard." description="Adapt access, attendance, parking, visitor, and screening workflows to the realities of each operating environment." />
    <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {industries.map((ind) => {
        const Icon = iconMap[ind.icon] || Building2;
        return (
          <Link key={ind.id} to={`/industries#${ind.slug}`} className="group relative overflow-hidden rounded-[1.35rem] border border-border bg-white p-5 text-left shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-all duration-300 group-hover:rotate-3 group-hover:bg-accent group-hover:shadow-accent">
              <Icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">Industry</div>
            <h3 className="mt-1 font-heading font-semibold text-foreground">{ind.name}</h3>
            <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-cyan transition-transform duration-500 group-hover:scale-x-100" />
          </Link>
        );
      })}
    </div>
  </SectionWrapper>
);

export default IndustriesGrid;
