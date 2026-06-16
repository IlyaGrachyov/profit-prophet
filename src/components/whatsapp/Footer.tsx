import { MessageCircle, Phone, Globe } from "lucide-react";

const WhatsAppFooter = () => (
  <footer className="bg-hero border-t border-hero-muted/10">
    <div className="container py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-bold text-lg text-hero-foreground">
          <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-accent text-accent-foreground">
            <MessageCircle className="w-5 h-5" />
          </span>
          WhatsApp Cloud · Казахстан
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-hero-muted">
          <a
            href="https://wa.me/77759432255"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-glow transition-colors"
          >
            <Phone className="w-4 h-4" /> +7 775 943 22 55
          </a>
          <a
            href="https://profi-soft.kz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-glow transition-colors"
          >
            <Globe className="w-4 h-4" /> profi-soft.kz
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-hero-muted/10 text-center text-xs text-hero-muted">
        © {new Date().getFullYear()} WhatsApp Cloud Kazakhstan. Официальный бизнес-партнёр Meta ·
        WhatsApp Business API · Bitrix24 CRM.
      </div>
    </div>
  </footer>
);

export default WhatsAppFooter;
