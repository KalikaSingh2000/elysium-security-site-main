import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionWrapper from "@/components/SectionWrapper";
import ContentImage from "@/components/ContentImage";
import { caseStudies } from "@/data/caseStudies";
import { Check, Quote } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const proofStats = [
  { value: "People", label: "identity and flow" },
  { value: "Vehicles", label: "access and parking" },
  { value: "Assets", label: "screening and control" },
];

const CaseStudies = () => (
  <>
    <Header />
    <main>
      <section className="mesh-section overflow-hidden pb-20 pt-32">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Deployment Scenarios
              </span>
              <h1 className="mt-6 text-4xl font-heading leading-[1.02] text-foreground md:text-6xl">
                Practical blueprints for common security challenges
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                These representative scenarios show how {siteConfig.companyName} approaches planning.
                They are solution examples, not named client endorsements or performance claims.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {proofStats.map((stat) => (
                <div key={stat.label} className="rounded-[1.4rem] bg-slate-950 px-5 py-6 text-white">
                  <div className="text-2xl font-heading">{stat.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="space-y-8">
          {caseStudies.map((study) => (
            <article key={study.id} id={study.slug} className="editorial-panel overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
                <ContentImage
                  src={study.image}
                  alt={study.title}
                  label="Security solution visual"
                  className="min-h-[300px] rounded-none border-0"
                />

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                      {study.industry}
                    </span>
                    <span className="text-sm text-muted-foreground">{study.client}</span>
                  </div>

                  <h2 className="mt-5 text-3xl font-heading leading-tight text-foreground">
                    {study.title}
                  </h2>

                  <div className="mt-8 grid gap-6 md:grid-cols-3">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-destructive">
                        Problem
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {study.problem}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                        Solution
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {study.solution}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground">
                        Designed outcomes
                      </h3>
                      <div className="mt-3 space-y-3">
                        {study.results.map((result) => (
                          <div key={result} className="flex items-start gap-3 text-sm">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-accent" />
                            <span className="leading-7 text-foreground/80">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {study.testimonial && (
                    <div className="mt-8 rounded-[1.4rem] bg-secondary/80 p-5">
                      <Quote className="h-5 w-5 text-accent" />
                      <p className="mt-3 text-base italic leading-7 text-foreground/80">
                        "{study.testimonial}"
                      </p>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {study.testimonialAuthor}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default CaseStudies;
