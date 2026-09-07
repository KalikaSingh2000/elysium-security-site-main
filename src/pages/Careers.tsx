import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Wrench, Users } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const Careers = () => (
  <>
    <Header />
    <main>
      <section className="pb-16 pt-32" style={{ background: "var(--gradient-hero)" }}><div className="section-container text-center"><span className="eyebrow border-white/20 bg-white/10 text-cyan-200">Careers</span><h1 className="mx-auto mt-6 max-w-3xl text-4xl font-heading text-white md:text-6xl">Build dependable systems with us</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">{siteConfig.companyName} brings together solution planning, technical execution, project coordination, and customer support.</p></div></section>
      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-3">
          {[{ icon: Briefcase, title: "Solution thinking", text: "Translate operational needs into practical system choices." }, { icon: Wrench, title: "Technical ownership", text: "Install, test, document, and support work that customers depend on." }, { icon: Users, title: "Customer context", text: "Communicate clearly across security, facilities, IT, HR, and operations teams." }].map((item) => <div key={item.title} className="editorial-panel p-7"><item.icon className="h-8 w-8 text-accent" /><h2 className="mt-7 text-xl font-heading text-foreground">{item.title}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p></div>)}
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-[1.75rem] border border-border bg-card p-8 text-center shadow-card"><h2 className="text-2xl font-heading text-foreground">There are no published openings at the moment</h2><p className="mx-auto mt-3 max-w-xl leading-7 text-muted-foreground">If you would like to introduce yourself for future sales, engineering, project, or support opportunities, use the contact form and identify your enquiry as career-related.</p><Link to="/contact" className="mt-7 inline-block"><Button variant="hero" size="lg">Contact {siteConfig.companyName} <ArrowRight className="h-4 w-4" /></Button></Link></div>
      </SectionWrapper>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Careers;
