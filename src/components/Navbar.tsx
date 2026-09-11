import { Link, useRouterState } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import med4oneLogo from "@/assets/med4one-logo.png";
import med4oneLogoWebp from "@/assets/med4one-logo.webp";

type SubLink = { name: string; href: string; desc?: string };
type NavLink = { name: string; href: string; dropdown?: SubLink[] };

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  {
    name: "Solutions",
    href: "/solutions",
    dropdown: [
      { name: "PharmacyOS", href: "/pharmacyos", desc: "Run your pharmacy smarter" },
      { name: "AI Solutions", href: "/ai", desc: "Intelligence behind every decision" },
      { name: "Business Intelligence", href: "/bi", desc: "Turn data into decisions" },
      { name: "Multi-Store", href: "/multi-store", desc: "One command centre for every store" },
      { name: "Enterprise", href: "/enterprise", desc: "Technology that grows with your business" },
    ],
  },
  {
    name: "Products",
    href: "/product-tour",
    dropdown: [
      { name: "Product Tour", href: "/product-tour", desc: "See Med4One module by module" },
      { name: "Pricing", href: "/pricing", desc: "Plans for every pharmacy size" },
    ],
  },
  { name: "AI", href: "/ai" },
  {
    name: "Resources",
    href: "/resources",
    dropdown: [
      { name: "Blog", href: "/blog" },
      { name: "FAQs", href: "/faq" },
      { name: "Help Centre", href: "/help" },
      { name: "Documentation", href: "/docs" },
    ],
  },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Vision & Mission", href: "/about" },
      { name: "Security", href: "/security" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [headerHeight, setHeaderHeight] = useState(64);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure header height so the overlay always sits directly below it
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setHeaderHeight(el.getBoundingClientRect().height);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [scrolled]);

  // Reset all menu state on navigation
  useEffect(() => {
    setIsOpen(false);
    setOpenDesktop(null);
    setOpenAccordion(null);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Escape closes everything
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setOpenDesktop(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Outside click closes desktop dropdowns
  useEffect(() => {
    if (!openDesktop) return;
    const onDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenDesktop(null);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [openDesktop]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setOpenAccordion(null);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const mobileMenu = (
    <div
      className="lg:hidden fixed inset-x-0 bottom-0 z-[95] bg-background overflow-y-auto overscroll-contain animate-in fade-in slide-in-from-top-4 duration-200"
      style={{ top: headerHeight }}
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
    >
      <div className="container mx-auto px-6 py-6 flex flex-col gap-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col gap-2">
              {link.dropdown ? (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenAccordion((cur) => (cur === link.name ? null : link.name))
                    }
                    aria-expanded={openAccordion === link.name}
                    className="flex items-center justify-between text-lg font-bold border-b border-primary/10 pb-2 text-left"
                  >
                    <span className={isActive(link.href) ? "text-primary" : ""}>{link.name}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        openAccordion === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`flex-col gap-2 pl-4 border-l-2 border-primary/5 ${
                      openAccordion === link.name ? "flex" : "hidden md:flex"
                    }`}
                  >

                      <Link
                        to={link.href}
                        className="text-base text-muted-foreground py-1 active:text-primary"
                        onClick={closeMenu}
                      >
                        {link.name} Overview
                      </Link>
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="text-base text-muted-foreground py-1 active:text-primary"
                          onClick={closeMenu}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.href}
                  className={`text-lg font-bold border-b border-primary/10 pb-2 ${
                    isActive(link.href) ? "text-primary" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-4 border-t pt-6">
          <Link
            to="/login"
            className="text-lg font-medium py-3 border rounded-xl px-4 text-center hover:bg-muted transition-colors"
            onClick={closeMenu}
          >
            Login
          </Link>
          <a
            href="/#demo"
            onClick={closeMenu}
            className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-14 rounded-xl text-lg font-bold transition-colors"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header
        ref={headerRef}
        data-nav-root
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-background/95 backdrop-blur-md border-b py-2 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              aria-label="Med4One home"
              onClick={() => {
                setIsOpen(false);
                setOpenDesktop(null);
              }}
              className="relative z-[101] flex items-center gap-2"
            >
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
                  <div key={link.name} className="relative">
                    {link.dropdown ? (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDesktop((cur) => (cur === link.name ? null : link.name))
                        }
                        aria-expanded={openDesktop === link.name}
                        className={`flex items-center gap-1 text-[13px] xl:text-sm font-medium transition-colors py-2 ${
                          isActive(link.href)
                            ? "text-primary font-semibold"
                            : "text-foreground/80 hover:text-primary"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-3.5 w-3.5 opacity-60 transition-transform ${
                            openDesktop === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        className={`flex items-center gap-1 text-[13px] xl:text-sm font-medium transition-colors py-2 ${
                          isActive(link.href)
                            ? "text-primary font-semibold"
                            : "text-foreground/80 hover:text-primary"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                    {link.dropdown && openDesktop === link.name && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-background border rounded-xl shadow-xl z-[101] py-3">
                        {link.dropdown.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => setOpenDesktop(null)}
                            className="block px-6 py-2.5 hover:bg-primary/5 transition-colors group/item"
                          >
                            <div className="text-sm font-semibold text-foreground group-hover/item:text-primary">
                              {sub.name}
                            </div>
                            {sub.desc && (
                              <div className="text-xs text-muted-foreground mt-0.5">{sub.desc}</div>
                            )}
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
                <a
                  href="/#demo"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-5 rounded-md text-sm font-medium transition-colors"
                >
                  Book a Demo
                </a>
              </div>
            </div>

            {/* Tablet/Mobile Actions */}
            <div className="flex lg:hidden items-center gap-2 md:gap-4">
              <a
                href="/#demo"
                className="hidden sm:inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 rounded-md text-xs font-semibold transition-colors"
              >
                Book a Demo
              </a>
              <button
                type="button"
                className="relative z-[101] p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {mounted && isOpen ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
