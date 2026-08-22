import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudiesPreview = () => (
  <SectionWrapper>
    <SectionHeading
      badge="Case Studies"
      title="How We Approach Common Deployment Challenges"
      description="Representative scenarios explain how products, workflows, and integration decisions come together at a site."
    />
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {caseStudies.slice(0, 3).map((cs) => (
        <Link key={cs.id} to={`/case-studies#${cs.slug}`} className="group overflow-hidden rounded-[1.7rem] border border-border bg-card card-hover">
          <div className="h-2 bg-gradient-to-r from-accent to-cyan" />
          <div className="p-6">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">{cs.industry}</span>
            <h3 className="mt-2 mb-3 line-clamp-2 font-heading font-semibold text-foreground">{cs.title}</h3>
            <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">{cs.problem}</p>
            <div className="mb-4 space-y-2">
              {cs.results.slice(0, 2).map((result) => (
                <div key={result} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span className="text-foreground">{result}</span>
                </div>
              ))}
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-all group-hover:gap-2">
              View Scenario <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </Link>
      ))}
    </div>
    <div className="mt-10 text-center">
      <Link to="/case-studies">
        <Button variant="outline" size="lg" className="rounded-full">View All Scenarios</Button>
      </Link>
    </div>
  </SectionWrapper>
);

export default CaseStudiesPreview;
