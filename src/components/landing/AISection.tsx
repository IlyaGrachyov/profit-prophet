import { motion } from "framer-motion";
import { Bot, Heart, Plane, MessageCircle, Zap } from "lucide-react";

const points = [
  { icon: Zap, text: "Не болеет" },
  { icon: Plane, text: "Не уходит в отпуск" },
  { icon: MessageCircle, text: "Обрабатывает все обращения" },
  { icon: Heart, text: "Помогает дожимать клиентов" },
];

const AISection = () => (
  <section className="py-20 md:py-28 bg-hero relative overflow-hidden">
    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-glow/5 blur-3xl" />
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <Bot className="w-12 h-12 text-glow mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground">
          AI-команда, которая работает 24/7
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {points.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-2xl border border-glow/10 bg-glow/5"
          >
            <p.icon className="w-8 h-8 text-glow mx-auto mb-3" />
            <p className="text-hero-foreground font-semibold">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AISection;
