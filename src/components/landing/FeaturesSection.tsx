import { motion } from "framer-motion";
import { MessageSquare, BarChart3, Workflow, Bot, PieChart } from "lucide-react";

const features = [
  { icon: MessageSquare, text: "Интеграция WhatsApp Cloud с CRM" },
  { icon: BarChart3, text: "Настройка передачи конверсий в Meta" },
  { icon: Workflow, text: "Автоматизация воронки продаж" },
  { icon: Bot, text: "Подключение AI-бота (опционально)" },
  { icon: PieChart, text: "Настройка аналитики и ROI" },
];

const FeaturesSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block mb-4 text-glow font-semibold text-sm uppercase tracking-wider">Функции</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Что мы внедряем</h2>
      </motion.div>

      <div className="max-w-2xl mx-auto space-y-4">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-4 p-5 rounded-xl bg-card shadow-card hover:shadow-glow transition-shadow"
          >
            <div className="w-10 h-10 rounded-lg bg-glow/10 flex items-center justify-center flex-shrink-0">
              <f.icon className="w-5 h-5 text-glow" />
            </div>
            <p className="text-foreground font-medium">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
