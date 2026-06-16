import { motion } from "framer-motion";
import { FileText, Plug, Workflow, BarChart3 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Заявка",
    text: "Свяжитесь с нами: сайт, WhatsApp или Telegram. Уточняем задачи и выбираем нужные услуги.",
  },
  {
    num: "02",
    icon: Plug,
    title: "Подключение",
    text: "Подключаем ваш номер к WhatsApp Business API. Пробный период 5 дней — сразу в работе.",
  },
  {
    num: "03",
    icon: Workflow,
    title: "Интеграция CRM",
    text: "Настраиваем интеграцию с Bitrix24: открытые линии, роботы, автоматизация воронки.",
  },
  {
    num: "04",
    icon: BarChart3,
    title: "Аналитика",
    text: "Подключаем CTWA Tracker для отслеживания рекламных конверсий и звонки SIP по необходимости.",
  },
];

const Steps = () => (
  <section id="steps" className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block mb-4 text-glow font-semibold text-sm uppercase tracking-wider">
          Как начать работу
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Запуск за 4 простых шага
        </h2>
      </motion.div>

      <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* connecting line */}
        <div className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-px bg-gradient-to-r from-glow/30 via-glow/50 to-glow/30" />

        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="relative text-center"
          >
            <div className="relative z-10 mx-auto mb-5 flex items-center justify-center w-16 h-16">
              <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border shadow-card text-glow">
                <s.icon className="w-7 h-7" />
              </span>
              <span className="absolute -top-2 -right-1 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-accent text-accent-foreground text-xs font-bold shadow-glow">
                {s.num}
              </span>
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Steps;
