import { motion } from "framer-motion";
import { Check, Star, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Месяц",
    price: "11 000 ₸",
    period: "в месяц / номер",
    icon: null,
    features: ["Официальный номер WhatsApp", "Рассылки по шаблонам", "Интеграция с Bitrix24", "Поддержка 24/7"],
    highlighted: false,
    badge: null,
  },
  {
    name: "Год",
    price: "110 000 ₸",
    period: "в год / номер",
    icon: Star,
    features: ["Всё из месячного тарифа", "Экономия — 2 месяца в подарок", "Приоритетная поддержка", "Помощь с верификацией Meta"],
    highlighted: true,
    badge: "Самый выгодный",
  },
  {
    name: "Пробный период",
    price: "5 дней",
    period: "бесплатно",
    icon: Gift,
    features: ["Первый номер бесплатно", "Полный функционал API", "Без привязки карты", "Запуск сразу в работу"],
    highlighted: false,
    badge: null,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-block mb-4 text-glow font-semibold text-sm uppercase tracking-wider">
          Тарифы
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Прозрачные цены за номер
        </h2>
        <p className="text-muted-foreground text-lg">
          Начните с бесплатного пробного периода — без рисков и обязательств.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative flex flex-col p-8 rounded-3xl bg-card ${
              plan.highlighted
                ? "border-2 border-glow shadow-glow md:-translate-y-3"
                : "border border-border shadow-card"
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-accent text-accent-foreground text-xs font-bold flex items-center gap-1 shadow-glow whitespace-nowrap">
                <Star className="w-3.5 h-3.5" /> {plan.badge}
              </div>
            )}

            <div className="flex items-center gap-2 mb-2">
              {plan.icon && <plan.icon className="w-5 h-5 text-glow" />}
              <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-foreground">{plan.price}</span>
              <span className="block text-sm text-muted-foreground mt-1">{plan.period}</span>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-glow/10 text-glow flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <a href="#cta" className="mt-auto">
              <Button
                className={`w-full ${plan.highlighted ? "bg-gradient-accent text-accent-foreground hover:opacity-90" : ""}`}
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
              >
                {plan.name === "Пробный период" ? "Попробовать бесплатно" : "Выбрать тариф"}
              </Button>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
