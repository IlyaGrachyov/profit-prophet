import { motion } from "framer-motion";
import { TrendingDown, TrendingUp, Target, RefreshCw } from "lucide-react";

const cards = [
  { icon: TrendingDown, title: "Снижение CAC", desc: "Стоимость привлечения клиента падает за счёт обучения алгоритма" },
  { icon: TrendingUp, title: "Рост ROI рекламы", desc: "Больше продаж при том же бюджете" },
  { icon: Target, title: "Качественные лиды", desc: "Meta находит людей, похожих на ваших покупателей" },
  { icon: RefreshCw, title: "Самообучающаяся реклама", desc: "Система становится эффективнее с каждой продажей" },
];

const ResultsSection = () => (
  <section id="results" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block mb-4 text-glow font-semibold text-sm uppercase tracking-wider">Результат</span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Что вы получаете в деньгах
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-card shadow-card hover:shadow-glow transition-shadow duration-300 text-center group"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-glow/10 flex items-center justify-center group-hover:bg-glow/20 transition-colors">
              <c.icon className="w-7 h-7 text-glow" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;
