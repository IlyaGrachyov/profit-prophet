import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Проблемы", href: "#problems" },
  { label: "Решение", href: "#solution" },
  { label: "Продукты", href: "#products" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Как начать", href: "#steps" },
];

const WhatsAppNavbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Always return to the main site home page (works even when this landing was
  // opened via a direct/shared link with no in-app history).
  const goHome = () => navigate("/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={goHome}
            aria-label="На главную"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">На главную</span>
          </button>
          <a href="#hero" className="flex items-center gap-2 font-display font-bold text-lg text-foreground">
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
              <MessageCircle className="w-5 h-5" />
            </span>
            WhatsApp Cloud
          </a>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a href="#cta">
            <Button size="sm" className="bg-gradient-accent text-accent-foreground font-semibold hover:opacity-90">
              Получить консультацию
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Меню"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border p-4 space-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-muted-foreground hover:text-foreground text-sm font-medium py-2"
            >
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)}>
            <Button size="sm" className="w-full bg-gradient-accent text-accent-foreground font-semibold">
              Получить консультацию
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
};

export default WhatsAppNavbar;
