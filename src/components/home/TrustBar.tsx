import SectionWrapper from "@/components/SectionWrapper";
import CountUp from "@/components/CountUp";
import { products, productCategories } from "@/data/products";
import { solutions } from "@/data/solutions";
import { industries } from "@/data/industries";

const trustItems = [
  "Corporate Campuses",
  "Factories & Plants",
  "Hospitals",
  "Universities",
  "Government Sites",
  "Transport Hubs",
  "Warehouses",
  "Commercial Towers",
];

const stats = [
  { value: products.length, suffix: "+", label: "Products in catalog" },
  { value: productCategories.length, suffix: "", label: "Product categories" },
  { value: solutions.length, suffix: "", label: "Integrated solutions" },
  { value: industries.length, suffix: "", label: "Industries served" },
];

const TrustBar = () => (
  <SectionWrapper className="!py-10">
    <div className="section-shell overflow-hidden px-6 py-6">
      <div className="mb-6 grid grid-cols-2 gap-4 border-b border-border/70 pb-6 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <div className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
          Designed for complex operating environments
        </p>
        <p className="text-sm text-muted-foreground">
          Site-specific planning for people, vehicles, assets, and checkpoints.
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="flex flex-wrap gap-3">
          {trustItems.map((name) => (
            <div key={name} className="rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground shadow-[0_14px_24px_rgba(15,23,42,0.06)]">
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default TrustBar;
