"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../components/ui/Button";

const navItems = [
  { label: "Коттеджи", href: "#cottages" },
  { label: "Снегоходы", href: "#snowmobiles" },
  { label: "Ресторан", href: "#restaurant" },
  { label: "Катер", href: "#boat" },
  { label: "Лодки", href: "#boat-rental" },
  { label: "Карта", href: "#map" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1f1813] backdrop-blur-xl shadow-2xl shadow-black/20 py-2"
          : "bg-linear-to-b from-black/50 to-transparent py-4"
      }`}
      data-testid="nav-main"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="font-serif text-lg md:text-xl font-light tracking-[0.15em] text-white hover:text-primary transition-colors duration-300"
            data-testid="link-logo"
          >
            LUXE <span className="text-primary">LUMIVAARA</span>
          </a>

          <div className="hidden lg:flex items-center gap-0">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-5 py-3 text-xs font-bold tracking-[0.15em] uppercase text-white hover:text-destructive transition-all duration-300 group"
                data-testid={`link-nav-${item.href.replace("#", "")}`}
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-primary transition-all duration-300 group-hover:w-6" />
              </a>
            ))}
          </div>

          <a
            href="#booking"
            onClick={(e) => handleNavClick(e, "#booking")}
            className="hidden lg:block px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase text-primary border border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            data-testid="link-nav-booking"
          >
            Бронирование
          </a>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-background/98 backdrop-blur-xl border-t border-white/10 mt-4">
          <div className="px-6 py-6 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-4 text-sm font-light tracking-widest uppercase text-foreground/70 hover:text-primary border-b border-white/5 transition-colors"
                data-testid={`link-mobile-nav-${item.href.replace("#", "")}`}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#booking"
              onClick={(e) => handleNavClick(e, "#booking")}
              className="block mt-4 px-4 py-4 text-sm font-medium tracking-widest uppercase text-center text-primary border border-primary/50"
            >
              Бронирование
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
