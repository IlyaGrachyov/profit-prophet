import { motion } from "framer-motion";
import { BadgeCheck, Headset, MapPin, Zap, Lock, Boxes } from "lucide-react";

const reasons = [
  { icon: BadgeCheck, title: "Официальный партнёр Meta", text: "Работаем по WhatsApp Business Platform напрямую — белые номера и верификация." },
  { icon: Headset, title: "Поддержка 24/7", text: "На связи в любое время — помогаем с настройкой, рассылками и интеграцией." },
  { icon: MapPin, title: "Работаем по Казахстану", text: "Алматы и вся страна. Понимаем местный бизнес и специфику рынка." },
  { icon: Zap, title: "Быстрое подключение", text: "Запускаем номер за 1 рабочий день — пробный период сразу в работе." },
  { icon: Lock, title: "Безопасность данных", text: "Self-hosted вариант на вашем сервере для полного контроля переписки." },
  { icon: Boxes, title: "Опыт интеграций", text: "Bitrix24, Asterisk, SIP, CTWA — собираем всё в единую систему продаж." },
];

const WhyUs = () => (
  <section className="py-20 md:py-28 bg-muted/40">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-block mb-4 text-glow font-semibold text-sm uppercase tracking-wider">
          Почему выбирают нас
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Надёжный партнёр для WhatsApp-продаж
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group flex gap-4 p-6 rounded-2xl border border-border bg-card shadow-card hover:shadow-glow transition-all duration-300"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-accent text-accent-foreground flex-shrink-0 shadow-glow group-hover:scale-110 transition-transform">
              <r.icon className="w-6 h-6" />
            </span>
            <div>
              <h3 className="font-bold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
