import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ProductVisual from "@/components/ProductVisual";

const featuredIds = ["1", "4", "5", "8"];
const featured = products.filter((product) => featuredIds.includes(product.id));

const FeaturedProducts = () => (
  <SectionWrapper className="relative overflow-hidden bg-[linear-gradient(180deg,hsl(var(--background)),hsl(var(--secondary)))]">
    <div className="section-glow -right-32 top-24 bg-cyan/10" />
    <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
      <SectionHeading badge="Featured Hardware" title="Technology Selected for the Job It Must Do" description="Explore representative systems across identity, access control, vehicle management, and checkpoint screening." centered={false} />
      <Link to="/products" className="mb-12 hidden lg:block"><Button variant="outline" size="lg" className="rounded-full bg-white">Explore Full Catalog <ArrowRight className="h-4 w-4" /></Button></Link>
    </div>
    <div className="relative grid gap-5 sm:grid-cols-2 xl:grid-cols-12">
      {featured.map((product, index) => {
        const primary = index === 0;
        return (
          <Link key={product.id} to={`/products/${product.slug}`} className={`group relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.1)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.17)] ${primary ? "sm:col-span-2 xl:col-span-6" : "xl:col-span-2"}`}>
            <div className={`relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.13),transparent_38%),hsl(var(--secondary))] ${primary ? "aspect-[16/8]" : "aspect-[4/3] xl:aspect-[3/4]"}`}>
              <ProductVisual product={product} imageClassName="group-hover:scale-[1.06]" />
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/75 bg-white/80 text-foreground shadow-sm backdrop-blur transition group-hover:bg-accent group-hover:text-accent-foreground"><ArrowUpRight className="h-4 w-4" /></div>
            </div>
            <div className={primary ? "p-7" : "p-5"}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">{product.subcategory}</span>
              <h3 className={`mt-2 font-heading font-semibold text-foreground ${primary ? "text-2xl" : "text-lg"}`}>{product.name}</h3>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">{product.shortDescription}</p>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent to-cyan transition-transform duration-500 group-hover:scale-x-100" />
          </Link>
        );
      })}
    </div>
    <Link to="/products" className="mt-8 block text-center lg:hidden"><Button variant="outline" size="lg" className="rounded-full bg-white">Explore Full Catalog <ArrowRight className="h-4 w-4" /></Button></Link>
  </SectionWrapper>
);

export default FeaturedProducts;
