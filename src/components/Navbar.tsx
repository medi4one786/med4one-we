import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import med4oneLogo from "@/assets/med4one-logo.png";
import med4oneLogoWebp from "@/assets/med4one-logo.webp";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions", dropdown: [
      { name: "PharmacyOS", href: "/pharmacyos", desc: "Run your pharmacy smarter" },
      { name: "AI Solutions", href: "/ai", desc: "Intelligence behind every decision" },
      { name: "Business Intelligence", href: "/bi", desc: "Turn data into decisions" },
      { name: "Multi-Store", href: "/multi-store", desc: "One command centre for every store" },
      { name: "Enterprise", href: "/enterprise", desc: "Technology that grows with your business" },
    ]},
    { name: "Product Tour", href: "/product-tour" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources", dropdown: [
      { name: "Blog", href: "/blog" },
      { name: "FAQs", href: "/faq" },
      { name: "Help Centre", href: "/help" },
      { name: "Documentation", href: "/docs" },
    ]},
    { name: "About", href: "/about", dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Vision & Mission", href: "/about" },
      { name: "Security", href: "/security" },
      { name: "Careers", href: "/careers" },
    ]},
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b py-2 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <picture>
              <source srcSet={med4oneLogoWebp} type="image/webp" sizes="(max-width: 768px) 120px, 160px" />
              <img
                src={med4oneLogo}
                alt="Med4One Health Services logo"
                width={513}
                height={160}
                fetchPriority="high"
                decoding="async"
                className="h-8 w-auto md:h-10 lg:h-11 object-contain transition-transform duration-300 hover:scale-105"
              />
            </picture>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <div className="flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 text-[13px] xl:text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                    activeProps={{ className: "text-primary font-semibold" }}
                  >
                    {link.name}
                    {link.dropdown && <span className="text-[10px] opacity-50 group-hover:rotate-180 transition-transform">▼</span>}
                  </Link>
                  {link.dropdown && (
                    <div className="absolute top-full left-0 w-80 bg-background border rounded-xl shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 py-3">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-6 py-2.5 hover:bg-primary/5 transition-colors group/item"
                        >
                          <div className="text-sm font-semibold text-foreground group-hover/item:text-primary">{sub.name}</div>
                          {"desc" in sub && <div className="text-xs text-muted-foreground mt-0.5">{sub.desc}</div>}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 xl:gap-4">
              <Button variant="ghost" size="sm" className="text-sm" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-sm px-5" asChild>
                <a href="/#demo">Book a Demo</a>
              </Button>
            </div>
          </div>

          {/* Tablet/Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2 md:gap-4">
            <Button variant="default" size="sm" className="hidden sm:flex h-9 px-4 text-xs font-semibold" asChild>
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
            <button
              className="p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] md:top-[68px] bg-background z-40 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-3">
                  <Link
                    to={link.href}
                    className="text-lg font-bold border-b border-primary/10 pb-2"
                    onClick={() => !link.dropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-primary/5">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="text-base text-muted-foreground py-1 active:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex flex-col gap-4 border-t pt-8">
              <Link
                to="/login"
                className="text-lg font-medium py-3 border rounded-xl px-4 text-center hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Button className="h-14 text-lg font-bold rounded-xl" asChild>
                <Link to="/book-demo" onClick={() => setIsOpen(false)}>Book a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

