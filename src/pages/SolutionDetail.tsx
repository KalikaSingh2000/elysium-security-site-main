import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionWrapper from "@/components/SectionWrapper";
import { getSolutionBySlug } from "@/data/solutions";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, AlertTriangle } from "lucide-react";
import SolutionVisual from "@/components/SolutionVisual";
import ProductVisual from "@/components/ProductVisual";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SolutionDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const solution = getSolutionBySlug(slug || "");
  const relatedProducts = solution
    ? solution.relatedProducts.map((id) => products.find((product) => product.id === id)).filter(Boolean)
    : [];

  if (!solution) {
    return (
      <>
        <Header />
        <div className="section-container pt-32 pb-16 text-center">
          <h1 className="text-2xl font-heading font-bold">Solution Not Found</h1>
          <Link to="/solutions" className="mt-4 inline-block text-accent">Back to Solutions</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16" style={{ background: "var(--gradient-hero)" }}>
          <div className="section-container">
            <Breadcrumb className="mb-6">
              <BreadcrumbList className="text-primary-foreground/60">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild className="hover:text-white">
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild className="hover:text-white">
                    <Link to="/solutions">Solutions</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">{solution.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <Link to="/solutions" className="mb-6 inline-flex items-center gap-1 text-sm text-primary-foreground/70 transition-colors hover:text-accent">
              <ArrowLeft className="h-4 w-4" /> Back to Solutions
            </Link>
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.92fr]">
              <div>
                <h1 className="mb-4 text-3xl font-heading font-bold text-primary-foreground md:text-5xl">{solution.name}</h1>
                <p className="mb-8 max-w-3xl text-lg text-primary-foreground/70">{solution.shortDescription}</p>
                <Link to="/contact">
                  <Button variant="hero" size="lg" className="rounded-full">
                    Request a Site Assessment <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <SolutionVisual solution={solution} />
            </div>
          </div>
        </section>

        <SectionWrapper>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-heading font-bold text-foreground">The Problem</h2>
              <p className="leading-8 text-muted-foreground">{solution.problem}</p>
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-heading font-bold text-foreground">Key Challenges</h2>
              <div className="space-y-3">
                {solution.challenges.map((challenge) => (
                  <div key={challenge} className="flex items-start gap-3 rounded-[1.2rem] border border-border bg-card p-4">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                    <span className="text-foreground">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-secondary">
          <h2 className="mb-4 text-2xl font-heading font-bold text-foreground">Our Solution</h2>
          <p className="mb-10 max-w-4xl leading-8 text-muted-foreground">{solution.solution}</p>
          <h3 className="mb-6 text-xl font-heading font-semibold text-foreground">Key Benefits</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solution.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-[1.2rem] border border-border bg-card p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <h2 className="mb-8 text-center text-2xl font-heading font-bold text-foreground">How It Works</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {solution.workflow.map((step) => (
              <div key={step.step} className="rounded-[1.7rem] border border-border bg-card p-6 text-center card-hover">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-xl font-bold text-accent">
                  {step.step}
                </div>
                <h3 className="mb-2 font-heading font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {relatedProducts.length > 0 && (
          <SectionWrapper className="bg-secondary">
            <h2 className="mb-8 text-center text-2xl font-heading font-bold text-foreground">Products Used in This Solution</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((product) => product && (
                <Link key={product.id} to={`/products/${product.slug}`} className="group overflow-hidden rounded-[1.6rem] border border-border bg-card card-hover">
                  <div className="aspect-[4/3] bg-secondary">
                    <ProductVisual product={product} imageClassName="group-hover:scale-[1.04]" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">{product.subcategory}</span>
                    <h3 className="mt-1 font-heading text-sm font-semibold text-foreground">{product.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </SectionWrapper>
        )}

        <section className="py-16" style={{ background: "var(--gradient-hero)" }}>
          <div className="section-container text-center">
            <h2 className="mb-4 text-3xl font-heading font-bold text-primary-foreground">Ready to Implement {solution.name}?</h2>
            <p className="mb-8 text-primary-foreground/70">Get a customized proposal for your organization.</p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="rounded-full">Request a Site Assessment</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default SolutionDetail;
