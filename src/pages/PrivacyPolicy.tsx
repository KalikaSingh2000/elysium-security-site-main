import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";

const PrivacyPolicy = () => (
  <>
    <Header />
    <main>
      <section className="pt-32 pb-16" style={{ background: "var(--gradient-hero)" }}>
        <div className="section-container text-center">
          <h1 className="text-4xl font-heading font-bold text-primary-foreground">Privacy Policy</h1>
          <p className="text-primary-foreground/70 mt-4">Last updated: July 2026</p>
        </div>
      </section>
      <SectionWrapper>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { title: "Information We Collect", content: "We collect personal information that you provide directly to us, including name, email address, phone number, company name, and any other information you choose to provide when contacting us, requesting a demo, or submitting an enquiry." },
            { title: "How We Use Your Information", content: "We use the information we collect to respond to your enquiries, provide product information, process demo requests, send relevant communications, improve our services, and comply with legal obligations." },
            { title: "Information Sharing", content: "We do not sell or rent your personal information. Information may be processed by service providers that help us operate the website, receive enquiries, and conduct business, subject to appropriate safeguards." },
            { title: "Data Security", content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction." },
            { title: "Cookies", content: "The website may use essential technical storage required for normal operation. If analytics or marketing cookies are added, this policy and the consent experience should be updated before they are enabled." },
            { title: "Your Rights", content: "You may request access to, correction of, or deletion of personal information you submitted, subject to applicable legal and record-keeping requirements." },
            { title: "Contact Us", content: "For privacy questions or requests, use the enquiry form on the Contact page and identify the request as privacy-related." },
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

export default PrivacyPolicy;
