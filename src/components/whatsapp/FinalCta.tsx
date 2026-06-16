import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, BadgeCheck, Clock, Gift } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WHATSAPP_PHONE = "77759432255"; // +7 775 943 22 55

const perks = [
  { icon: Clock, text: "Подключим за 1 рабочий день" },
  { icon: Gift, text: "Пробный период — бесплатно" },
  { icon: BadgeCheck, text: "Официальный партнёр Meta" },
];

const FinalCta = () => {
  const [form, setForm] = useState({ name: "", phone: "", company: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Заполните имя и телефон");
      return;
    }
    const text = `Здравствуйте! Хочу подключить WhatsApp Cloud.%0AИмя: ${encodeURIComponent(
      form.name,
    )}%0AТелефон: ${encodeURIComponent(form.phone)}%0AКомпания: ${encodeURIComponent(
      form.company || "—",
    )}`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, "_blank");
    toast.success("Заявка отправлена! Открываем WhatsApp для связи.");
    setForm({ name: "", phone: "", company: "" });
  };

  return (
    <section id="cta" className="py-20 md:py-28 scroll-mt-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-hero p-8 md:p-14">
          {/* glow accents */}
          <div className="absolute -top-20 -right-10 w-80 h-80 rounded-full bg-glow/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 w-80 h-80 rounded-full bg-glow/10 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-hero-foreground mb-4 leading-tight">
                Подключите официальный WhatsApp Business уже сегодня
              </h2>
              <p className="text-hero-muted text-lg mb-8">
                Получите бесплатный пробный период и консультацию специалиста.
              </p>
              <ul className="space-y-3">
                {perks.map((p) => (
                  <li key={p.text} className="flex items-center gap-3 text-hero-foreground">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-glow/15 text-glow flex-shrink-0">
                      <p.icon className="w-5 h-5" />
                    </span>
                    <span className="text-sm md:text-base">{p.text}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-hero-muted text-sm">
                Или напишите напрямую:{" "}
                <a
                  href={`https://wa.me/${WHATSAPP_PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-glow font-semibold hover:underline"
                >
                  +7 775 943 22 55
                </a>{" "}
                · profi-soft.kz
              </p>
            </motion.div>

            {/* Right form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 md:p-8 space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="name" className="text-hero-foreground">
                  Имя
                </Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Как к вам обращаться"
                  className="bg-white/90 border-0 h-12 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-hero-foreground">
                  Телефон
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="bg-white/90 border-0 h-12 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-hero-foreground">
                  Компания
                </Label>
                <Input
                  id="company"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Название компании (необязательно)"
                  className="bg-white/90 border-0 h-12 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-accent text-accent-foreground font-semibold text-base py-6 rounded-xl shadow-glow hover:opacity-90 transition-opacity"
              >
                Получить подключение
                <Send className="w-5 h-5 ml-1" />
              </Button>
              <p className="text-center text-xs text-hero-muted">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
