import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/home/ContactForm";
import { Building2, ClipboardCheck, Headphones, MapPin } from "lucide-react";

const contactReasons = [
  { icon: ClipboardCheck, title: "New project", text: "Plan an access, attendance, parking, or screening deployment." },
  { icon: Building2, title: "Multi-site rollout", text: "Discuss standards, integration, and phased deployment across locations." },
  { icon: Headphones, title: "Service requirement", text: "Share the installed system and the support outcome you need." },
];

const Contact = () => (
  <>
    <Header />
    <main>
      <section className="pb-16 pt-32" style={{ background: "var(--gradient-hero)" }}>
        <div className="section-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <span className="eyebrow border-white/20 bg-white/10 text-orange-200">Contact Elysium Security</span>
            <h1 className="mt-6 text-4xl font-heading text-white md:text-6xl">Start with your site. We’ll help shape the system.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">Use the enquiry form for project planning, product guidance, multi-location requirements, or service discussions.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80">
            <MapPin className="h-4 w-4 text-accent" /> Serving organizations across India
          </div>
        </div>
      </section>

      <section className="section-container -mt-6 grid gap-4 md:grid-cols-3">
        {contactReasons.map((item) => (
          <div key={item.title} className="rounded-[1.4rem] border border-border bg-card p-5 shadow-card">
            <item.icon className="h-6 w-6 text-accent" />
            <h2 className="mt-4 text-lg font-heading text-foreground">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </section>

      <ContactForm />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Contact;
