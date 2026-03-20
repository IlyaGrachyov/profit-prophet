import { motion } from "framer-motion";

const steps = [
  "Анализ текущей рекламы",
  "Подключение WhatsApp и CRM",
  "Настройка передачи конверсий",
  "Запуск",
  "Оптимизация рекламы",
];

const ProcessSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block mb-4 text-glow font-semibold text-sm uppercase tracking-wider">Процесс</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Как это работает</h2>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center gap-5 mb-4 last:mb-0"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm flex-shrink-0">
              {i + 1}
            </div>
            <div className="flex-1 p-4 rounded-xl bg-card shadow-card">
              <p className="text-foreground font-medium">{s}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
