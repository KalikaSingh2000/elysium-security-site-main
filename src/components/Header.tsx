import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Biometric Devices", href: "/products?category=biometric" },
      { name: "Access Control", href: "/products?category=access-control" },
      { name: "Vehicle Security", href: "/products?category=vehicle-security" },
      { name: "Screening Devices", href: "/products?category=screening" },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    children: [
      { name: "Attendance & Payroll", href: "/solutions/attendance-payroll" },
      { name: "Visitor Management", href: "/solutions/visitor-management" },
      { name: "Parking Automation", href: "/solutions/parking-automation" },
      { name: "Crowd Management", href: "/solutions/crowd-management" },
      { name: "Screening & Security", href: "/solutions/screening-security" },
    ],
  },
  { name: "Insights", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className={`mx-auto max-w-[1440px] rounded-[1.35rem] border border-white/80 bg-white/90 text-foreground backdrop-blur-2xl transition-all duration-500 ${isScrolled ? "shadow-[0_20px_60px_rgba(15,23,42,0.16)]" : "shadow-[0_14px_40px_rgba(15,23,42,0.1)]"}`}>
        <div className={`flex items-center justify-between px-4 transition-all duration-500 sm:px-6 ${isScrolled ? "h-[68px]" : "h-[76px]"}`}>
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Elysium Security home">
            <BrandLogo imageClassName="!h-11 !max-w-[4.5rem]" />
            <div className="hidden min-[460px]:block">
              <div className="font-heading text-base font-bold tracking-tight text-foreground sm:text-lg">Elysium Security</div>
              <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:text-[10px]">Integrated Protection Systems</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <div key={item.name} className="group relative" onMouseEnter={() => item.children && setOpenDropdown(item.name)} onMouseLeave={() => setOpenDropdown(null)} onFocus={() => item.children && setOpenDropdown(item.name)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpenDropdown(null); }}>
                <Link to={item.href} aria-haspopup={item.children ? "menu" : undefined} aria-expanded={item.children ? openDropdown === item.name : undefined} className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${location.pathname === item.href ? "bg-primary text-white" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
                  {item.name}{item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div role="menu" className="absolute left-0 top-full mt-3 w-64 rounded-[1.25rem] border border-border bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
                    {item.children.map((child) => <Link role="menuitem" key={child.name} to={child.href} className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-accent">{child.name}</Link>)}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="hidden sm:block"><Button variant="hero" size="sm" className="rounded-full px-5">Start a Project <ArrowUpRight className="h-4 w-4" /></Button></Link>
            <button className="rounded-full border border-border p-2.5 text-foreground lg:hidden" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-border px-4 pb-5 pt-3 lg:hidden">
            {navigation.map((item) => <div key={item.name}><Link to={item.href} className="block rounded-xl px-3 py-3 font-medium text-foreground hover:bg-secondary">{item.name}</Link>{item.children && <div className="grid grid-cols-2 gap-1 px-3 pb-2">{item.children.map((child) => <Link key={child.name} to={child.href} className="rounded-lg px-2 py-2 text-xs leading-5 text-muted-foreground hover:bg-secondary hover:text-foreground">{child.name}</Link>)}</div>}</div>)}
            <Link to="/contact" className="mt-3 block rounded-full bg-accent px-4 py-3 text-center font-semibold text-accent-foreground sm:hidden">Start a Project</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
