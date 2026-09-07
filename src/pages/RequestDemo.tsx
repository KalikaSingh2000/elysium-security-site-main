import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Send, CheckCircle2, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/siteConfig";

const quickActions = [
  { icon: Phone, label: "Call Now", value: siteConfig.phoneDisplay, href: siteConfig.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: siteConfig.phoneDisplay, href: whatsappLink(`Hi ${siteConfig.companyName}, I'd like to request a quote.`), external: true },
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
];

const productOptions = [
  "Biometric attendance",
  "Access control",
  "Vehicle access and parking",
  "Visitor management",
  "Security screening",
  "Integrated or multi-site requirement",
  "Not sure yet",
];

const RequestDemo = () => (
  <>
    <Header />
    <main>
      <section className="pb-16 pt-32" style={{ background: "var(--gradient-hero)" }}>
        <div className="section-container text-center">
          <span className="eyebrow border-white/20 bg-white/10 text-cyan-200">Request a Quote</span>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-heading text-white md:text-6xl">See how the right system fits your operation</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">Request a quote, a focused consultation, or a product demonstration based on your site, workflow, and integration needs.</p>
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                <action.icon className="h-4 w-4 text-cyan-200" /> {action.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-heading text-foreground">What the conversation covers</h2>
            <div className="mt-7 space-y-4">
              {[
                "Your site, users, entry points, and operating constraints",
                "Suitable product and software options",
                "Integration, rollout, training, and support considerations",
                "Clear next steps for a survey or proposal",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="leading-7 text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <form name="demo-request" method="POST" action="/thank-you" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-5 rounded-[1.75rem] border border-border bg-card p-6 shadow-card sm:p-8">
            <input type="hidden" name="form-name" value="demo-request" />
            <p className="hidden"><Label htmlFor="demo-bot">Do not fill this out</Label><Input id="demo-bot" name="bot-field" /></p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="demo-name">Full name</Label><Input id="demo-name" name="name" autoComplete="name" required /></div>
              <div className="space-y-2"><Label htmlFor="demo-company">Company</Label><Input id="demo-company" name="company" autoComplete="organization" required /></div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="demo-email">Work email</Label><Input id="demo-email" name="email" type="email" autoComplete="email" required /></div>
              <div className="space-y-2"><Label htmlFor="demo-phone">Phone number</Label><Input id="demo-phone" name="phone" type="tel" autoComplete="tel" required /></div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="demo-solution">Area of interest</Label><select id="demo-solution" name="solution" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"><option value="">Select one</option>{productOptions.map((option) => <option key={option}>{option}</option>)}</select></div>
              <div className="space-y-2"><Label htmlFor="demo-city">City or project location</Label><Input id="demo-city" name="city" autoComplete="address-level2" required /></div>
            </div>
            <div className="space-y-2"><Label htmlFor="demo-quantity">Quantity or number of sites (if known)</Label><Input id="demo-quantity" name="quantity" placeholder="e.g. 4 units, 1 site" /></div>
            <div className="space-y-2"><Label htmlFor="demo-message">What would you like to evaluate?</Label><Textarea id="demo-message" name="message" rows={4} required /></div>
            <p className="text-xs leading-5 text-muted-foreground">By submitting, you agree that {siteConfig.companyName} may contact you about this request. See our <Link to="/privacy-policy" className="font-medium text-accent hover:underline">Privacy Policy</Link>.</p>
            <Button type="submit" variant="hero" size="lg" className="w-full">Submit Enquiry <Send className="h-4 w-4" /></Button>
          </form>
        </div>
      </SectionWrapper>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default RequestDemo;
