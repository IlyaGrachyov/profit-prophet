import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Решение", href: "#solution" },
  { label: "Результаты", href: "#results" },
  { label: "Тарифы", href: "#pricing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/90 backdrop-blur-md border-b border-hero-muted/10">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="text-hero-foreground font-display font-bold text-xl">
          gulin.kz
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-hero-muted hover:text-hero-foreground transition-colors text-sm font-medium">
              {l.label}
            </a>
          ))}
          <a href="#cta">
            <Button size="sm" className="bg-gradient-accent text-accent-foreground font-semibold hover:opacity-90">
              Получить аудит
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-hero-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-hero border-t border-hero-muted/10 p-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-hero-muted hover:text-hero-foreground text-sm font-medium py-2">
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)}>
            <Button size="sm" className="w-full bg-gradient-accent text-accent-foreground font-semibold">
              Получить аудит
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
