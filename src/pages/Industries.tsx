import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/data/industries";
import { products } from "@/data/products";
import { solutions } from "@/data/solutions";
import { Building2, Factory, GraduationCap, Heart, Landmark, Train, Home, ShoppingBag, Truck, AlertTriangle, Check, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

const iconMap: Record<string, LucideIcon> = { Building2, Factory, GraduationCap, Heart, Landmark, Train, Home, ShoppingBag, Truck };

const Industries = () => (
  <>
    <Header />
    <main>
      <section className="pt-32 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="section-container text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-4">Industries</span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">Solutions Tailored to Your Industry</h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">Deep domain expertise across diverse sectors ensures solutions that address your specific challenges.</p>
        </div>
      </section>

      {industries.map((ind, i) => {
        const Icon = iconMap[ind.icon] || Building2;
        const recProducts = ind.recommendedProducts.map(id => products.find(p => p.id === id)).filter(Boolean);
        const recSolutions = ind.recommendedSolutions.map(id => solutions.find(s => s.id === id)).filter(Boolean);
        return (
          <SectionWrapper key={ind.id} id={ind.slug} className={i % 2 === 1 ? "bg-secondary" : ""}>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-foreground">{ind.name}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{ind.description}</p>
                <h3 className="font-heading font-semibold text-foreground mb-3">Pain Points</h3>
                <div className="space-y-2 mb-6">
                  {ind.painPoints.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                {recProducts.length > 0 && (
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-3">Recommended Products</h3>
                    <div className="space-y-2">
                      {recProducts.map((p) => p && (
                        <Link key={p.id} to={`/products/${p.slug}`} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-accent transition-colors text-sm">
                          <Check className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-foreground">{p.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                {recSolutions.length > 0 && (
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-3">Recommended Solutions</h3>
                    <div className="space-y-2">
                      {recSolutions.map((s) => s && (
                        <Link key={s.id} to={`/solutions/${s.slug}`} className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-accent transition-colors text-sm">
                          <Check className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-foreground">{s.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SectionWrapper>
        );
      })}
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Industries;
