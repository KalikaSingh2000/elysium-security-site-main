import { Link } from "react-router-dom";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { ArrowUpRight, Fingerprint, DoorOpen, Car, ShieldAlert, ScanLine } from "lucide-react";

const categories = [
  { name: "Biometric & Attendance", icon: Fingerprint, desc: "Face, fingerprint, and palm systems connected to attendance workflows.", href: "/products?category=biometric-attendance", image: "/uploads/products/fingerprint-biometric.png" },
  { name: "Entrance Control", icon: DoorOpen, desc: "Turnstiles, flap barriers, and speed gates for controlled pedestrian movement.", href: "/products?category=entrance-control", image: "/uploads/products/flap-barrier-gate-01.jpg" },
  { name: "Vehicle Access & Gate Automation", icon: Car, desc: "Boom barriers and gate operators with RFID and ANPR integration.", href: "/products?category=vehicle-access", image: "/uploads/products/boom-barrier-01.jpg" },
  { name: "Perimeter Security", icon: ShieldAlert, desc: "Bollards, road blockers, and vehicle screening for sensitive entry points.", href: "/products?category=perimeter-security", image: "/uploads/products/hydraulic-bollard-01.jpg" },
  { name: "Security Screening", icon: ScanLine, desc: "X-ray baggage scanners and metal detection for layered checkpoints.", href: "/products?category=security-screening", image: "/uploads/products/esi-bg-5030.jpg" },
];

const CoreCategories = () => (
  <SectionWrapper className="relative overflow-hidden">
    <div className="section-glow -left-32 top-10 bg-accent/10" />
    <SectionHeading badge="What We Offer" title="One Security Ecosystem. Every Critical Entry Point." description="Build a connected operating layer for people, vehicles, visitors, attendance, parking, and screening." />
    <div className="relative grid gap-5 lg:grid-cols-12">
      {categories.map((cat, index) => {
        const featured = index < 2;
        return (
          <Reveal key={cat.name} delay={index * 80} className={featured ? (index === 0 ? "lg:col-span-7" : "lg:col-span-5") : "sm:col-span-1 lg:col-span-4"}>
            <Link
              to={cat.href}
              className="group relative block h-full overflow-hidden rounded-[1.75rem] border border-white/70 bg-slate-950 shadow-[0_20px_55px_rgba(15,23,42,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_28px_70px_rgba(15,23,42,0.2)]"
            >
              <div className={featured ? "relative min-h-[360px]" : "relative min-h-[285px]"}>
                <img src={cat.image} alt={cat.name} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:saturate-[1.08]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/5" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.28),transparent_32%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md"><cat.icon className="h-6 w-6 text-cyan-200" /></div>
                    <ArrowUpRight className="h-5 w-5 text-white/60 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200" />
                  </div>
                  <h3 className={`${featured ? "text-2xl md:text-3xl" : "text-xl"} font-heading font-semibold text-white`}>{cat.name}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">{cat.desc}</p>
                </div>
              </div>
            </Link>
          </Reveal>
        );
      })}
    </div>
  </SectionWrapper>
);

export default CoreCategories;
