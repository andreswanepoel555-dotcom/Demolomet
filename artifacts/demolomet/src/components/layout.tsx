import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm" : "bg-background border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-primary">DEMOLOMET</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact">
              <Button className="font-bold uppercase tracking-wide">Get a Quote</Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl font-bold uppercase tracking-wide ${
                      location === link.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full font-bold uppercase tracking-wide mt-4">Get a Quote</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="text-2xl font-black tracking-tighter text-primary mb-6 block">DEMOLOMET</span>
              <p className="text-muted-foreground mb-6">
                South African scrap metal and demolition experts based in the North West province. We tear things down to build something better.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Contact Us</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li><strong className="text-foreground block">Phone:</strong> 072 879 4946</li>
                <li><strong className="text-foreground block">Email:</strong> dalmain@demolomet.co.za</li>
                <li><strong className="text-foreground block">Contact Person:</strong> Dalmain</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
             <div>
                <h4 className="font-bold mb-2">Location 1</h4>
                <p className="text-sm text-muted-foreground mb-2">Plot 523 Van Der Hoff Ave, Rietfontein, Hartbeespoort Dam</p>
             </div>
             <div>
                <h4 className="font-bold mb-2">Location 2</h4>
                <p className="text-sm text-muted-foreground mb-2">15 Theuns Mulder Street, Brits Industrial, Brits</p>
             </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Demolomet. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/27728794946"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 animate-[pulse_2s_infinite] hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}
