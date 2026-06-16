import { motion } from "framer-motion";
import { MessageSquare, PhoneCall, Target, Workflow, ArrowUpRight } from "lucide-react";

const products = [
  {
    icon: MessageSquare,
    title: "WhatsApp Cloud API",
    desc: "Официальный API, белый номер, рассылки по шаблонам.",
    points: ["Верификация бизнеса Meta", "Без риска блокировки"],
    href: "#cloud-api",
  },
  {
    icon: PhoneCall,
    title: "WhatsApp Calling SIP",
    desc: "Звонки WhatsApp с интеграцией в АТС или CRM через SIP.",
    points: ["Asterisk / SIP-транк", "Запись и контроль"],
    href: "#sip",
  },
  {
    icon: Target,
    title: "CTWA Tracker",
    desc: "Отслеживание конверсий из рекламы прямо в WhatsApp.",
    points: ["Источник каждого лида", "Стоимость лида в деньгах"],
    href: "#ctwa",
  },
  {
    icon: Workflow,
    title: "Интеграция Bitrix24",
    desc: "Полная интеграция диалогов и звонков с CRM Bitrix24.",
    points: ["Авто-создание лидов", "Роботы и триггеры"],
    href: "#bitrix",
  },
];

const Solution = () => (
  <section id="solution" className="py-20 md:py-28 bg-muted/40">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-block mb-4 text-glow font-semibold text-sm uppercase tracking-wider">
          Наше решение
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          WhatsApp Business Platform
        </h2>
        <p className="text-muted-foreground text-lg">
          Официально, надёжно, интегрировано — четыре продукта для роста продаж.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <motion.a
            key={i}
            href={p.href}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative p-7 rounded-2xl border border-border bg-card shadow-card hover:shadow-glow hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-x-0 -top-px h-1 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-accent text-accent-foreground mb-5 shadow-glow group-hover:scale-110 transition-transform">
              <p.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-1">
              {p.title}
              <ArrowUpRight className="w-4 h-4 text-glow opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
            <ul className="space-y-1.5">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-glow" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.a>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mt-10"
      >
        Пробный период на каждое подключение · Поддержка 24/7 · Алматы, Казахстан
      </motion.p>
    </div>
  </section>
);

export default Solution;
