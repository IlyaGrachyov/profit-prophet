import { motion } from "framer-motion";
import { XCircle, AlertTriangle } from "lucide-react";

const problems = [
  "Вы получаете лиды, но не понимаете их качество",
  "Facebook оптимизируется по кликам, а не по продажам",
  "CRM и реклама не связаны",
  "Менеджеры закрывают сделки, но данные не возвращаются в рекламу",
];

const ProblemSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 mb-4 text-warning">
          <AlertTriangle className="w-5 h-5" />
          <span className="font-semibold text-sm uppercase tracking-wider">Проблема</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Почему ваша реклама сливает бюджет
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3 p-5 rounded-xl bg-card shadow-card"
          >
            <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <p className="text-foreground font-medium">{p}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-block px-6 py-4 rounded-xl bg-destructive/10 border border-destructive/20">
          <p className="text-destructive font-semibold text-lg">
            В результате — вы платите за трафик, который не покупает
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
