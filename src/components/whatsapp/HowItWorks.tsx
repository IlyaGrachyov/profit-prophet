import { motion } from "framer-motion";
import { Users, Megaphone, MessageCircle, Database, Headset, Handshake, ChevronRight } from "lucide-react";

const flow = [
  { icon: Users, label: "Клиент", sub: "видит вас" },
  { icon: Megaphone, label: "Реклама", sub: "Meta Ads / CTWA" },
  { icon: MessageCircle, label: "WhatsApp", sub: "официальный диалог" },
  { icon: Database, label: "CRM", sub: "Bitrix24 лид" },
  { icon: Headset, label: "Менеджер", sub: "берёт в работу" },
  { icon: Handshake, label: "Продажа", sub: "закрытая сделка" },
];

const HowItWorks = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block mb-4 text-glow font-semibold text-sm uppercase tracking-wider">
          Как работает система
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Путь клиента — от рекламы до продажи
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-3 lg:gap-1">
        {flow.map((step, i) => (
          <div key={i} className="flex flex-col lg:flex-row items-center gap-3 lg:gap-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col items-center gap-3 w-40 p-6 rounded-2xl border border-border bg-card/70 backdrop-blur-sm shadow-card text-center"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-accent text-accent-foreground shadow-glow">
                <step.icon className="w-7 h-7" />
              </span>
              <div>
                <div className="font-bold text-foreground">{step.label}</div>
                <div className="text-xs text-muted-foreground">{step.sub}</div>
              </div>
            </motion.div>

            {i < flow.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.1 }}
                className="text-glow"
              >
                <ChevronRight className="w-6 h-6 rotate-90 lg:rotate-0 animate-pulse" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
