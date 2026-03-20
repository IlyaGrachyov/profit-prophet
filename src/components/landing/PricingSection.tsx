import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Start",
    badge: "🥉",
    features: ["1 номер WhatsApp", "Базовая интеграция с CRM", "Без передачи конверсий"],
    highlighted: false,
  },
  {
    name: "Growth",
    badge: "🥈",
    features: ["Несколько номеров WhatsApp", "Отслеживание конверсий", "Интеграция с рекламой Meta"],
    highlighted: true,
  },
  {
    name: "Scale",
    badge: "🥇",
    features: ["Всё из Growth", "AI-бот для обработки заявок", "Полная аналитика", "Оптимизация рекламы"],
    highlighted: false,
  },
];

const serviceTable = [
  { service: "WhatsApp Cloud (сообщения)", trial: false, price: "1 250 000", currency: "Тенге", period: "1/Год", desc: "Установка сервера интеграции WhatsApp Cloud с Битрикс24" },
  { service: "WhatsApp Cloud (сообщения)", trial: true, price: "0", currency: "—", period: "5/День", desc: "Пробный на 1 первый номер" },
  { service: "WhatsApp Cloud (сообщения)", trial: false, price: "35 000", currency: "Тенге", period: "1/День", desc: "Подключение номера к WhatsApp Cloud и верификация" },
  { service: "WhatsApp Cloud (сообщения)", trial: false, price: "11 000", currency: "Тенге", period: "1/Месяц", desc: "Подключение одного номера WhatsApp через API на 1 месяц" },
  { service: "WhatsApp Cloud (сообщения)", trial: false, price: "110 000", currency: "Тенге", period: "1/Год", desc: "Ежегодный тариф на подключение 1-го номера WhatsApp Cloud" },
  { service: "WhatsApp Cloud (сообщения)", trial: false, price: "250 000", currency: "Тенге", period: "1/Год", desc: "Отслеживание конверсий CTWA (Ads that click to WhatsApp)" },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block mb-4 text-glow font-semibold text-sm uppercase tracking-wider">Тарифы</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Выберите подходящий вариант</h2>
      </motion.div>

      {/* Packages */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`p-7 rounded-2xl bg-card shadow-card relative ${pkg.highlighted ? "border-2 border-glow shadow-glow" : "border border-border"}`}
          >
            {pkg.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-accent text-accent-foreground text-xs font-bold flex items-center gap-1">
                <Star className="w-3 h-3" /> Популярный
              </div>
            )}
            <div className="text-3xl mb-2">{pkg.badge}</div>
            <h3 className="text-xl font-bold text-foreground mb-4">{pkg.name}</h3>
            <ul className="space-y-3 mb-6">
              {pkg.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-glow flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#cta">
              <Button className={`w-full ${pkg.highlighted ? "bg-gradient-accent text-accent-foreground hover:opacity-90" : ""}`} variant={pkg.highlighted ? "default" : "outline"}>
                Узнать цену
              </Button>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Services table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-foreground text-center mb-8">Стоимость услуг</h3>
        <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-4 font-semibold text-foreground">Услуга</th>
                <th className="text-center p-4 font-semibold text-foreground">Пробный</th>
                <th className="text-right p-4 font-semibold text-foreground">Цена</th>
                <th className="text-center p-4 font-semibold text-foreground">Валюта</th>
                <th className="text-center p-4 font-semibold text-foreground">Период</th>
                <th className="text-left p-4 font-semibold text-foreground">Описание</th>
              </tr>
            </thead>
            <tbody>
              {serviceTable.map((row, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="p-4 text-foreground font-medium">{row.service}</td>
                  <td className="p-4 text-center">
                    {row.trial ? (
                      <span className="text-glow font-bold">✅ Да</span>
                    ) : (
                      <span className="text-destructive">❌ Нет</span>
                    )}
                  </td>
                  <td className="p-4 text-right font-semibold text-foreground">{row.price}</td>
                  <td className="p-4 text-center text-muted-foreground">{row.currency}</td>
                  <td className="p-4 text-center text-muted-foreground">{row.period}</td>
                  <td className="p-4 text-muted-foreground max-w-xs">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
