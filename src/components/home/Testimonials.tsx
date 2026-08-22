import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { ClipboardCheck, Headphones, Waypoints } from "lucide-react";

const expectations = [
  { icon: ClipboardCheck, title: "Clear scope", text: "Products, integrations, responsibilities, and acceptance criteria are documented before deployment." },
  { icon: Waypoints, title: "Connected delivery", text: "Hardware, software, site work, testing, and training are coordinated as one operating system." },
  { icon: Headphones, title: "Supportable handover", text: "Operators receive the guidance and documentation needed to run the system with confidence." },
];

const Testimonials = () => (
  <SectionWrapper className="bg-secondary">
    <SectionHeading badge="Delivery Commitments" title="What Every Engagement Should Make Clear" />
    <div className="grid gap-5 md:grid-cols-3">{expectations.map((item) => <div key={item.title} className="editorial-panel p-7"><item.icon className="h-8 w-8 text-accent" /><h3 className="mt-7 text-xl font-heading text-foreground">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p></div>)}</div>
  </SectionWrapper>
);

export default Testimonials;
