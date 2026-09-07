import { Link } from "react-router-dom";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { siteConfig, whatsappLink } from "@/lib/siteConfig";

const footerLinks = {
  Products: [
    { name: "Biometric & Attendance", href: "/products?category=biometric-attendance" },
    { name: "Entrance Control", href: "/products?category=entrance-control" },
    { name: "Vehicle Access & Gate Automation", href: "/products?category=vehicle-access" },
    { name: "Perimeter Security", href: "/products?category=perimeter-security" },
    { name: "Security Screening", href: "/products?category=security-screening" },
  ],
  Solutions: [
    { name: "Attendance & Payroll", href: "/solutions/attendance-payroll" },
    { name: "Visitor Management", href: "/solutions/visitor-management" },
    { name: "Parking Automation", href: "/solutions/parking-automation" },
    { name: "Screening & Security", href: "/solutions/screening-security" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Industries", href: "/industries" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms" },
    { name: "Resources", href: "/downloads" },
  ],
};

const Footer = () => (
  <footer className="relative overflow-hidden bg-[#060d19] text-white">
    <div className="hero-grid absolute inset-0 opacity-[0.025]" />
    <div className="absolute -right-48 top-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[140px]" />
    <div className="section-container relative py-16 md:py-20">
      <div className="grid gap-8 border-b border-white/10 pb-14 lg:grid-cols-[1fr_auto] lg:items-end">
        <div><div className="text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-200">Ready when your site is</div><h2 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">Turn separate security products into one clear operation.</h2></div>
        <Link to="/request-demo" className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-accent px-7 font-semibold text-accent-foreground transition-all hover:-translate-y-1 hover:bg-cyan-400">Request a Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
      </div>

      <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <BrandLogo showWordmark wordmarkClassName="text-white [&_div:last-child]:text-white/50" imageClassName="!h-20 !max-w-[9rem]" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">{siteConfig.tagline}</p>
          <div className="mt-6 space-y-3 text-sm">
            <a href={siteConfig.phoneHref} className="flex items-center gap-2 text-white/70 transition-colors hover:text-cyan-200">
              <Phone className="h-4 w-4 shrink-0" /> {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-white/70 transition-colors hover:text-cyan-200">
              <Mail className="h-4 w-4 shrink-0" /> {siteConfig.email}
            </a>
            <a
              href={whatsappLink(`Hi ${siteConfig.companyName}, I'd like to enquire about your security and access control solutions.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 transition-colors hover:text-cyan-200"
            >
              <MessageCircle className="h-4 w-4 shrink-0" /> Chat on WhatsApp
            </a>
            {/* Physical address and social links go here once supplied by Elysium Solution India. */}
          </div>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => <div key={title}><h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">{title}</h3><ul className="mt-5 space-y-3">{links.map((link) => <li key={link.name}><Link to={link.href} className="text-sm text-white/60 transition-colors hover:text-cyan-200">{link.name}</Link></li>)}</ul></div>)}
      </div>

      <div className="flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.</p><p>{siteConfig.tagline} · India</p></div>
    </div>
  </footer>
);

export default Footer;
