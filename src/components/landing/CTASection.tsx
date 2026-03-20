import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CTASection = () => {
  const [form, setForm] = useState({ name: "", phone: "", budget: "" });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const params = new URLSearchParams({
        "fields[TITLE]": `Заявка с сайта: ${form.name}`,
        "fields[UF_CRM_5F100653C8C97]": form.name,
        "fields[UF_CRM_LEAD_1773830562571]": form.phone,
        "fields[UF_CRM_1773900058]": form.budget ? `Бюджет: ${form.budget}` : "",
        "fields[PHONE][0][VALUE]": form.phone,
        "fields[PHONE][0][VALUE_TYPE]": "WORK",
      });
      await fetch(
        `https://crm.profi-soft.kz/rest/5877/m4hhacmfv8f1znkb/crm.lead.add.json?${params.toString()}`
      );
      toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      setForm({ name: "", phone: "", budget: "" });
    } catch {
      toast.error("Ошибка при отправке. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cta" className="py-20 md:py-28 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-glow/3 blur-3xl" />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">
            Узнайте, сколько вы теряете прямо сейчас
          </h2>
          <p className="text-hero-muted mb-10">
            Оставьте заявку — мы проведём аудит вашей рекламы и рассчитаем потенциальный ROI
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <Input
                placeholder="Ваше имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="bg-hero-foreground/10 border-hero-muted/20 text-hero-foreground placeholder:text-hero-muted/60 h-12"
              />
            </div>
            <div>
              <Input
                placeholder="Телефон"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                className="bg-hero-foreground/10 border-hero-muted/20 text-hero-foreground placeholder:text-hero-muted/60 h-12"
              />
            </div>
            <div>
              <Input
                placeholder="Бюджет на рекламу (KZT)"
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="bg-hero-foreground/10 border-hero-muted/20 text-hero-foreground placeholder:text-hero-muted/60 h-12"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-accent text-accent-foreground font-semibold text-lg py-6 rounded-xl animate-pulse-glow hover:opacity-90 transition-opacity"
            >
              Получить расчёт ROI
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
