import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { siteConfig } from "@/lib/siteConfig";

const Terms = () => (
  <>
    <Header />
    <main>
      <section className="pt-32 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="section-container text-center">
          <h1 className="text-4xl font-heading font-bold text-primary-foreground">Terms of Service</h1>
          <p className="text-primary-foreground/70 mt-4">Last updated: July 2026</p>
        </div>
      </section>
      <SectionWrapper>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { title: "Acceptance of Terms", content: "By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our website." },
            { title: "Services", content: `${siteConfig.companyName} provides information about security hardware, software solutions, integration, deployment, and related services. Final scope, specifications, availability, and commercial terms are defined in the applicable proposal or agreement.` },
            { title: "Intellectual Property", content: `Unless otherwise stated, the website's original text, brand assets, interface, and other owned materials belong to ${siteConfig.companyName} or its licensors and are protected by applicable law.` },
            { title: "Warranty & Liability", content: "Product warranties and service obligations are governed by the applicable manufacturer terms and the written agreement for each project. Website information is general and does not replace a signed proposal or contract." },
            { title: "Payment Terms", content: "Payment terms are as specified in individual quotations and purchase orders. All prices are subject to applicable taxes." },
            { title: "Installation & Support", content: "Installation services are provided as per the scope agreed in the project proposal. Annual maintenance contracts are available separately." },
            { title: "Governing Law", content: "These Terms are governed by the laws of India. The specific jurisdiction for a commercial engagement is defined in the applicable signed agreement." },
            { title: "Contact", content: "For questions about these Terms, use the enquiry form on the Contact page and identify the request as legal or contractual." },
          ].map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-heading font-bold text-foreground mb-2">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </main>
    <Footer />
  </>
);

export default Terms;
