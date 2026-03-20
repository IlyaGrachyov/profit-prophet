import { motion } from "framer-motion";
import { Megaphone, GraduationCap, Briefcase, ShoppingCart, Users } from "lucide-react";

const audiences = [
  { icon: Megaphone, text: "Бизнес с рекламой в Meta" },
  { icon: GraduationCap, text: "Онлайн-школы" },
  { icon: Briefcase, text: "Услуги" },
  { icon: ShoppingCart, text: "E-commerce" },
  { icon: Users, text: "Любой бизнес с лидами" },
];

const AudienceSection = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block mb-4 text-glow font-semibold text-sm uppercase tracking-wider">Аудитория</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Для кого</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {audiences.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card shadow-card"
          >
            <a.icon className="w-5 h-5 text-glow" />
            <span className="text-foreground font-medium">{a.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
