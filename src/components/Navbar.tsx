import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";


const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Car Resale", href: "#cars" },
  { label: "Restoration", href: "#restoration" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 border-b border-border" : "bg-transparent"
      }`}
      style={scrolled ? { backdropFilter: "blur(12px)" } : {}}
    >
      <div className="container-luxury flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.png" alt="The Caar Den Logo" className="h-8 sm:h-10 w-auto object-contain" />
          <div className="font-display text-lg font-bold tracking-wider leading-tight hidden sm:block">
            <span className="text-foreground">THE CAAR </span>
            <span className="text-destructive font-black">DEN.</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-body font-medium text-silver/80 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+917538863909" className="flex items-center gap-2 text-sm text-silver/80 hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>075388 63909</span>
          </a>
          <a href="#booking">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-sm font-semibold tracking-wide">
              Book Now
            </Button>
          </a>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/95 border-t border-border" style={{ backdropFilter: "blur(12px)" }}>
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-body font-medium text-silver/80 hover:text-primary transition-colors tracking-wide uppercase py-2"
              >
                {l.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setMobileOpen(false)}>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body text-sm font-semibold mt-2">
                Book Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
