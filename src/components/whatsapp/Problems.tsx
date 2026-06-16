import { motion } from "framer-motion";
import { Ban, LineChart, FolderX, Smartphone, PhoneOff } from "lucide-react";

const problems = [
  {
    icon: Ban,
    title: "Серые инструменты — риск бана",
    text: "Неофициальные WhatsApp-боты нарушают правила Meta и приводят к блокировке номера в любой момент.",
  },
  {
    icon: LineChart,
    title: "Нет аналитики и воронки",
    text: "Менеджеры теряют переписку, нельзя отслеживать конверсии и видеть эффективность рекламных кампаний.",
  },
  {
    icon: FolderX,
    title: "Переписка вне CRM",
    text: "Диалоги в личных телефонах, нет истории сделок, руководитель не видит что происходит с клиентами.",
  },
  {
    icon: Smartphone,
    title: "Менеджеры с личных телефонов",
    text: "Уходит сотрудник — уходит и база клиентов. Нет контроля качества и единых стандартов общения.",
  },
  {
    icon: PhoneOff,
    title: "Звонки WhatsApp вручную",
    text: "Сотрудники звонят в WA с личных номеров, без записи, без интеграции с АТС или CRM-системой.",
  },
];

const Problems = () => (
  <section id="problems" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mb-14"
      >
        <span className="inline-block mb-4 text-glow font-semibold text-sm uppercase tracking-wider">
          Проблема
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          WhatsApp без официального API — это потерянные клиенты и риски
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group p-7 rounded-2xl border border-border bg-card/70 backdrop-blur-sm shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-destructive/10 text-destructive mb-5 group-hover:scale-110 transition-transform">
              <p.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Problems;
