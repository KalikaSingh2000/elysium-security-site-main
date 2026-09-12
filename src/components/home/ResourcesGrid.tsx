import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Download, FileText } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";

const resources = [
  {
    name: "Insights & Guides",
    href: "/blog",
    description: "Explore practical guides to security systems, access control, and automation.",
    icon: BookOpen,
    action: "Read our guides",
  },
  {
    name: "Case Studies",
    href: "/case-studies",
    description: "See how security and automation solutions support different operating environments.",
    icon: FileText,
    action: "Explore case studies",
  },
  {
    name: "Downloads",
    href: "/downloads",
    description: "Browse product resources and request technical information for your project.",
    icon: Download,
    action: "Browse resources",
  },
];

const ResourcesGrid = () => (
  <SectionWrapper className="bg-secondary/40">
    <SectionHeading
      badge="Resources"
      title="Knowledge to Plan Your Next Project"
      description="Find guides, case studies, and product information to help you choose the right security solution."
    />
    <div className="grid gap-5 md:grid-cols-3">
      {resources.map(({ name, href, description, icon: Icon, action }) => (
        <Link
          key={href}
          to={href}
          className="group flex h-full flex-col rounded-[1.35rem] border border-border bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:p-8"
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="font-heading text-xl font-semibold text-foreground">{name}</h3>
          <p className="mb-6 mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent">
            {action} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </Link>
      ))}
    </div>
  </SectionWrapper>
);

export default ResourcesGrid;
