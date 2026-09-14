import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import SearchCommand from "@/components/SearchCommand";
import { siteConfig } from "@/lib/siteConfig";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Products",
    href: "/products",
    children: [
      { name: "Biometric & Attendance", href: "/products?category=biometric-attendance" },
      { name: "Entrance Control", href: "/products?category=entrance-control" },
      { name: "Vehicle Access & Gate Automation", href: "/products?category=vehicle-access" },
      { name: "Perimeter Security", href: "/products?category=perimeter-security" },
      { name: "Security Screening", href: "/products?category=security-screening" },
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
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    const handleOutsideClick = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className={`mx-auto max-w-[1440px] rounded-[1.35rem] border border-white/80 bg-white/90 text-foreground backdrop-blur-2xl transition-all duration-500 ${isScrolled ? "shadow-[0_20px_60px_rgba(15,23,42,0.16)]" : "shadow-[0_14px_40px_rgba(15,23,42,0.1)]"}`}>
        <div className={`flex items-center justify-between px-4 transition-all duration-500 sm:px-6 ${isScrolled ? "h-[72px]" : "h-[84px]"}`}>
          <Link to="/" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3" aria-label={`${siteConfig.companyName} home`}>
            <BrandLogo imageClassName="!h-11 !max-w-[5rem] shrink-0 sm:!h-16 sm:!max-w-[7.5rem]" />
            <div className="min-w-0">
              <div className="truncate font-heading text-sm font-bold tracking-tight text-foreground sm:text-lg">{siteConfig.companyName}</div>
              <div className="mt-0.5 truncate text-[8px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px] sm:tracking-[0.25em]">{siteConfig.tagline}</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <div key={item.name} className="group relative" onMouseEnter={() => item.children && setOpenDropdown(item.name)} onMouseLeave={() => setOpenDropdown(null)} onFocus={() => item.children && setOpenDropdown(item.name)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpenDropdown(null); }}>
                <Link to={item.href} aria-haspopup={item.children ? "menu" : undefined} aria-expanded={item.children ? openDropdown === item.name : undefined} className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${location.pathname === item.href ? "bg-primary text-white" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`}>
                  {item.name}{item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div role="menu" className="absolute left-0 top-full mt-3 w-72 rounded-[1.25rem] border border-border bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.18)]">
                    {item.children.map((child) => <Link role="menuitem" key={child.name} to={child.href} className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-accent">{child.name}</Link>)}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <SearchCommand />
            </div>
            <Link to="/request-demo" className="hidden sm:block"><Button variant="hero" size="sm" className="rounded-full px-5">Request a Quote <ArrowUpRight className="h-4 w-4" /></Button></Link>
            <button className="rounded-full border border-border p-2.5 text-foreground lg:hidden" aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-border px-4 pb-5 pt-3 lg:hidden">
            <div className="mb-2 md:hidden">
              <SearchCommand />
            </div>
            {navigation.map((item) => <div key={item.name}><Link to={item.href} className="block rounded-xl px-3 py-3 font-medium text-foreground hover:bg-secondary">{item.name}</Link>{item.children && <div className="grid grid-cols-2 gap-1 px-3 pb-2">{item.children.map((child) => <Link key={child.name} to={child.href} className="rounded-lg px-2 py-2 text-xs leading-5 text-muted-foreground hover:bg-secondary hover:text-foreground">{child.name}</Link>)}</div>}</div>)}
            <Link to="/request-demo" className="mt-3 block rounded-full bg-accent px-4 py-3 text-center font-semibold text-accent-foreground sm:hidden">Request a Quote</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
