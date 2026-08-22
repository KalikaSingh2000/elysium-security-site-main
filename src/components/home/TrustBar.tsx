import SectionWrapper from "@/components/SectionWrapper";

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

const TrustBar = () => (
  <SectionWrapper className="!py-10">
    <div className="section-shell overflow-hidden px-6 py-6">
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
