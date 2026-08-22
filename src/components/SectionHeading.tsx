interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ badge, title, description, centered = true }: SectionHeadingProps) => (
  <div className={`mb-12 md:mb-16 ${centered ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}`}>
    {badge && (
      <span className="mb-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_5px_rgba(255,108,31,0.12)]" /> {badge}
      </span>
    )}
    <h2 className="font-heading text-3xl font-semibold leading-[1.04] tracking-[-0.035em] text-foreground md:text-5xl lg:text-[3.5rem]">{title}</h2>
    {description && <p className={`mt-5 text-base leading-8 text-muted-foreground md:text-lg ${centered ? "mx-auto max-w-3xl" : "max-w-2xl"}`}>{description}</p>}
  </div>
);

export default SectionHeading;
