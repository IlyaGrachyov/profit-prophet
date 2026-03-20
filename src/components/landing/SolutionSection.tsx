import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Database, HandCoins, BarChart3, Users, Sparkles } from "lucide-react";

const steps = [
  { icon: Users, label: "Трафик", color: "text-hero-foreground bg-primary" },
  { icon: MessageSquare, label: "WhatsApp", color: "text-accent-foreground bg-glow" },
  { icon: Database, label: "CRM", color: "text-primary-foreground bg-primary" },
  { icon: HandCoins, label: "Сделка", color: "text-accent-foreground bg-glow" },
  { icon: BarChart3, label: "Данные → Meta", color: "text-primary-foreground bg-primary" },
  { icon: Sparkles, label: "Meta обучается", color: "text-accent-foreground bg-glow" },
];

const SolutionSection = () => (
  <section id="solution" className="py-20 md:py-28 bg-hero relative overflow-hidden">
    <div className="absolute inset-0 bg-glow/3 blur-3xl" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="inline-block mb-4 text-glow font-semibold text-sm uppercase tracking-wider">Решение</span>
        <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground">
          Как мы это решаем
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-2 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-2"
          >
            <div className={`flex items-center gap-2 px-5 py-3 rounded-xl ${s.color} font-semibold text-sm`}>
              <s.icon className="w-5 h-5" />
              {s.label}
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="w-5 h-5 text-hero-muted hidden md:block" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="text-center mt-12 text-glow font-semibold text-lg"
      >
        → Meta приводит более качественных клиентов
      </motion.p>
    </div>
  </section>
);

export default SolutionSection;
