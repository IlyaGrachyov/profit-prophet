import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CaseSection = () => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block mb-4 text-glow font-semibold text-sm uppercase tracking-wider">Кейс</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Как меняется экономика</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card shadow-card border-2 border-destructive/20"
        >
          <div className="text-destructive font-bold text-sm uppercase tracking-wider mb-4">❌ Без системы</div>
          <div className="space-y-3 text-foreground">
            <p className="text-2xl font-bold">100 лидов → 10 продаж</p>
            <p className="text-muted-foreground">Конверсия: 10%</p>
            <div className="pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground">Стоимость клиента</p>
              <p className="text-3xl font-bold text-destructive">5 000 ₸</p>
            </div>
          </div>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-card shadow-card border-2 border-glow/30 relative"
        >
          <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-accent text-accent-foreground text-xs font-bold">
            Экономия 2×
          </div>
          <div className="text-glow font-bold text-sm uppercase tracking-wider mb-4">✅ С системой</div>
          <div className="space-y-3 text-foreground">
            <p className="text-2xl font-bold">80 лидов → 20 продаж</p>
            <p className="text-muted-foreground">Конверсия: 25%</p>
            <div className="pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground">Стоимость клиента</p>
              <p className="text-3xl font-bold text-glow">50 000 ₸</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CaseSection;
