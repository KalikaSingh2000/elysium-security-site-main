import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionWrapper from "@/components/SectionWrapper";
import { productCategories, products } from "@/data/products";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProductVisual from "@/components/ProductVisual";
import Reveal from "@/components/Reveal";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let result = products;
    if (activeCategory !== "all") result = result.filter((product) => product.category === activeCategory);
    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-primary pt-32 pb-16">
          <img
            src="/uploads/products/access-control-product-range-01.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25 md:hidden"
          />
          <img
            src="/uploads/products/access-control-product-range-02.jpg"
            alt=""
            className="absolute inset-0 hidden h-full w-full object-cover opacity-25 md:block"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="section-container relative text-center">
            <span className="eyebrow mb-4">Our Products</span>
            <h1 className="mb-6 text-4xl font-heading font-bold text-primary-foreground md:text-5xl">
              Enterprise Security Hardware Catalog
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70">
              Compare biometric, entrance control, vehicle access, perimeter security, and
              screening devices by application, capabilities, and technical requirements.
            </p>
          </div>
        </section>

        <SectionWrapper>
          <div className="section-shell p-6 md:p-8">
            <div className="mb-10 flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  aria-label="Search products"
                  placeholder="Search products..."
                  className="h-12 rounded-full border-white bg-white pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant={activeCategory === "all" ? "default" : "outline"} size="sm" className="rounded-full" onClick={() => setSearchParams({})}>
                  All
                </Button>
                {productCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    size="sm"
                    className="rounded-full"
                    onClick={() => setSearchParams({ category: category.id })}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            <p className="mb-6 text-sm text-muted-foreground">{filtered.length} products found</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product, index) => (
                <Reveal key={product.id} delay={(index % 8) * 60}>
                  <Link to={`/products/${product.slug}`} className="group block h-full overflow-hidden rounded-[1.8rem] border border-border bg-card card-hover">
                    <div className="aspect-[4/3] bg-secondary">
                      <ProductVisual product={product} imageClassName="group-hover:scale-[1.04]" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-medium uppercase tracking-wider text-accent">{product.subcategory}</span>
                      <h3 className="mt-1 mb-2 font-heading font-semibold text-foreground">{product.name}</h3>
                      <p className="mb-3 line-clamp-2 text-sm text-muted-foreground">{product.shortDescription}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent transition-all group-hover:gap-2">
                        View Details <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Products;
