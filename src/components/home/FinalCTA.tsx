import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => (
  <section className="relative overflow-hidden py-20" style={{ background: "var(--gradient-hero)" }}>
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="hero-scanline absolute inset-x-0 top-12 h-px opacity-60" />
    </div>
    <div className="section-container relative z-10 text-center">
      <h2 className="mb-6 text-3xl font-heading font-bold text-primary-foreground md:text-5xl">
        Plan Your Next Security Upgrade With Confidence
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/70">
        Share your site, operational challenge, or expansion plan. We will help you identify
        the right combination of access, attendance, parking, and screening systems.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/contact">
          <Button variant="hero" size="lg" className="px-8 text-base shadow-[0_20px_40px_rgba(255,108,31,0.28)]">
            Request a Site Assessment <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
        <Link to="/request-demo">
          <Button variant="hero-outline" size="lg" className="text-base px-8">
            Request a Demo
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default FinalCTA;
