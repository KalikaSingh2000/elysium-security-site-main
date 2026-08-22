import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionWrapper from "@/components/SectionWrapper";
import { solutions } from "@/data/solutions";
import { ArrowRight } from "lucide-react";
import SolutionVisual from "@/components/SolutionVisual";

const Solutions = () => (
  <>
    <Header />
    <main>
      <section className="pt-32 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="section-container text-center">
          <span className="eyebrow mb-4">Solutions</span>
          <h1 className="mb-6 text-4xl font-heading font-bold text-primary-foreground md:text-5xl">
            Integrated Solutions for Every Challenge
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70">
            End-to-end solutions combining hardware, software, and field execution for
            complete security and workforce automation.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {solutions.map((solution) => (
            <Link key={solution.id} to={`/solutions/${solution.slug}`} className="group overflow-hidden rounded-[1.9rem] border border-border bg-card card-hover">
              <SolutionVisual solution={solution} className="rounded-none" />
              <div className="p-7">
                <h3 className="mb-2 font-heading text-xl font-semibold text-foreground">{solution.name}</h3>
                <p className="mb-4 leading-7 text-muted-foreground">{solution.shortDescription}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-all group-hover:gap-2">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Solutions;
