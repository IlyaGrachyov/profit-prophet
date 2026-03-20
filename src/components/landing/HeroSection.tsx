import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const bullets = [
  { icon: TrendingDown, text: "Снижение стоимости лида до 2 раз" },
  { icon: TrendingUp, text: "Рост конверсии в продажу" },
  { icon: Bot, text: "Автоматическая передача данных о продажах в Meta" },
];

const HeroSection = () => (
  <section className="bg-hero relative overflow-hidden min-h-[90vh] flex items-center">
    {/* Decorative circles */}
    <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-glow/5 blur-3xl" />
    <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-glow/5 blur-3xl" />

    <div className="container relative z-10 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-glow/30 text-glow text-sm font-medium tracking-wide">
          WhatsApp + CRM + Meta Ads
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-hero-foreground mb-6">
          Вы теряете до{" "}
          <span className="text-gradient-accent">30–50% рекламного бюджета</span>
          <br />
          потому что Facebook не знает, кто у вас покупает
        </h1>

        <p className="text-lg md:text-xl text-hero-muted mb-10 max-w-2xl leading-relaxed">
          Интегрируем WhatsApp + CRM + Meta Ads и обучаем алгоритм приводить клиентов, которые реально платят
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="flex items-center gap-2 text-hero-muted"
            >
              <b.icon className="w-5 h-5 text-glow flex-shrink-0" />
              <span className="text-sm">{b.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#cta">
            <Button size="lg" className="bg-gradient-accent text-accent-foreground font-semibold text-lg px-8 py-6 rounded-xl animate-pulse-glow hover:opacity-90 transition-opacity">
              Получить аудит и расчёт ROI
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
