import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionWrapper from "@/components/SectionWrapper";
import { getProductBySlug } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import ProductVisual from "@/components/ProductVisual";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setSelectedImage(product?.image ?? "");
  }, [product?.image]);

  if (!product) {
    return (
      <>
        <Header />
        <div className="section-container pt-32 pb-16 text-center">
          <h1 className="text-2xl font-heading font-bold">Product Not Found</h1>
          <Link to="/products" className="mt-4 inline-block text-accent">Back to Products</Link>
        </div>
        <Footer />
      </>
    );
  }

  const displayedProduct = selectedImage ? { ...product, image: selectedImage } : product;

  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-16" style={{ background: "var(--gradient-hero)" }}>
          <div className="section-container">
            <Link to="/products" className="mb-6 inline-flex items-center gap-1 text-sm text-primary-foreground/70 transition-colors hover:text-accent">
              <ArrowLeft className="h-4 w-4" /> Back to Products
            </Link>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-accent">{product.subcategory}</span>
                <h1 className="mt-2 mb-4 text-3xl font-heading font-bold text-primary-foreground md:text-4xl">{product.name}</h1>
                <p className="mb-6 text-lg text-primary-foreground/70">{product.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="hero"
                    className="rounded-full"
                    onClick={() => document.getElementById("enquiry-form")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get Quote
                  </Button>
                  <Link to="/solutions"><Button variant="hero-outline" className="rounded-full border-white/25 text-white hover:bg-white hover:text-primary">View Integrated Solutions</Button></Link>
                </div>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-primary-foreground/10 p-3 backdrop-blur-sm md:p-5">
                <div className="overflow-hidden rounded-[1.6rem] bg-white">
                  <ProductVisual product={displayedProduct} className="min-h-[420px]" contain />
                </div>
                {product.gallery.length > 1 && (
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {product.gallery.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        aria-label={`View ${product.name} image ${index + 1}`}
                        onClick={() => setSelectedImage(image)}
                        className={`aspect-square overflow-hidden rounded-lg border bg-white p-1 transition ${
                          selectedImage === image
                            ? "border-accent ring-2 ring-accent/30"
                            : "border-white/20 hover:border-white/50"
                        }`}
                      >
                        <img
                          src={image}
                          alt=""
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <SectionWrapper>
          <h2 className="mb-8 text-2xl font-heading font-bold text-foreground">Key Features</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-[1.2rem] border border-border bg-card p-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-secondary">
          <h2 className="mb-8 text-2xl font-heading font-bold text-foreground">Technical Specifications</h2>
          <p className="-mt-5 mb-6 max-w-3xl text-sm leading-6 text-muted-foreground">Specifications can vary by model, firmware, configuration, and manufacturer revision. Confirm final specifications in the project quotation before purchase.</p>
          <div className="overflow-hidden rounded-[1.6rem] border border-border bg-card">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <tr key={key} className={index % 2 === 0 ? "bg-card" : "bg-secondary/50"}>
                    <td className="w-1/3 px-6 py-3 text-sm font-medium text-foreground">{key}</td>
                    <td className="px-6 py-3 text-sm text-muted-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <h2 className="mb-8 text-2xl font-heading font-bold text-foreground">Use Cases</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {product.useCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-3 rounded-[1.2rem] border border-border bg-card p-4">
                <div className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span className="text-foreground">{useCase}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {product.faqs.length > 0 && (
          <SectionWrapper className="bg-secondary">
            <h2 className="mb-8 text-2xl font-heading font-bold text-foreground">Frequently Asked Questions</h2>
            <div className="mx-auto max-w-3xl space-y-3">
              {product.faqs.map((faq, index) => (
                <div key={faq.question} className="overflow-hidden rounded-[1.2rem] border border-border bg-card">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium text-foreground">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                  {openFaq === index && <div className="px-5 pb-5 text-muted-foreground">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </SectionWrapper>
        )}

        <SectionWrapper id="enquiry-form">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-2 text-center text-2xl font-heading font-bold text-foreground">Enquire About {product.name}</h2>
            <p className="mb-8 text-center text-muted-foreground">
              Share your application and site requirements so the right configuration can be evaluated.
            </p>
            <form name="product-enquiry" method="POST" action="/thank-you" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-5 rounded-[1.8rem] border border-border bg-card p-8">
              <input type="hidden" name="form-name" value="product-enquiry" />
              <input type="hidden" name="product" value={product.name} />
              <p className="hidden"><Label htmlFor="product-bot">Do not fill this out</Label><Input id="product-bot" name="bot-field" /></p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="product-name">Full name</Label><Input id="product-name" name="name" autoComplete="name" required /></div>
                <div className="space-y-2"><Label htmlFor="product-email">Work email</Label><Input id="product-email" name="email" type="email" autoComplete="email" required /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="product-phone">Phone number</Label><Input id="product-phone" name="phone" type="tel" autoComplete="tel" required /></div>
              <div className="space-y-2"><Label htmlFor="product-message">Application and requirements</Label><Textarea id="product-message" name="message" rows={4} required /></div>
              <Button type="submit" variant="hero" size="lg" className="w-full rounded-full">Submit Enquiry</Button>
            </form>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ProductDetail;
