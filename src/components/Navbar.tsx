import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Packages", path: "/packages" },
  { label: "Systems", path: "/systems" },
  { label: "Hosting", path: "/hosting" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-display text-xl font-bold gradient-text">
          Abancool
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-3 py-2 text-sm rounded-md transition-colors ${
                location.pathname === l.path
                  ? "text-accent bg-accent/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:0111679286" className="flex items-center gap-1.5 text-sm text-accent">
            <Phone className="w-4 h-4" /> 0111 679 286
          </a>
          <Link to="/contact">
            <Button size="sm" className="gradient-blue text-primary-foreground font-semibold">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="lg:hidden glass-strong border-t border-white/10 px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`block py-2.5 text-sm ${
                location.pathname === l.path ? "text-accent" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}>
            <Button size="sm" className="gradient-blue text-primary-foreground w-full mt-2">
              Get a Quote
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
