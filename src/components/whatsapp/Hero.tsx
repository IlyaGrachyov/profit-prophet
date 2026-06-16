import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Phone, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const trust = ["Meta Business Partner", "WhatsApp Business API", "Bitrix24 CRM"];

const chat = [
  { from: "them", text: "Здравствуйте! Расскажите про подключение WhatsApp 👋", time: "10:24" },
  { from: "me", text: "Официальный номер + интеграция с Bitrix24. Подключим за 1 день ✅", time: "10:24" },
  { from: "them", text: "Отлично, оставляю заявку!", time: "10:25" },
];

const Hero = () => (
  <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
    {/* Soft gradient backdrop */}
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_70%_0%,hsl(145_80%_42%/0.12),transparent_70%),radial-gradient(50%_50%_at_0%_30%,hsl(160_70%_45%/0.10),transparent_70%)]" />
    <div className="absolute top-24 -right-20 w-96 h-96 rounded-full bg-glow/10 blur-3xl -z-10" />

    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      {/* Left: copy */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-glow/30 bg-glow/5 text-foreground text-sm font-medium">
          <BadgeCheck className="w-4 h-4 text-glow" />
          Официальный бизнес-партнёр Meta
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground mb-6">
          WhatsApp Cloud <br />
          <span className="text-gradient-accent">в Казахстане</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
          Подключение WhatsApp Business API, звонки SIP и интеграция с Bitrix24 CRM.
          Официально, надёжно, без риска блокировки.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <a href="#cta">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-accent text-accent-foreground font-semibold text-base px-8 py-6 rounded-xl shadow-glow hover:opacity-90 transition-opacity"
            >
              Получить консультацию
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </a>
          <a href="#pricing">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto font-semibold text-base px-8 py-6 rounded-xl border-2"
            >
              Попробовать бесплатно
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {trust.map((t) => (
            <span key={t} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-glow" />
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Right: glass chat + CRM mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative mx-auto max-w-sm">
          {/* Phone / chat card */}
          <div className="rounded-[2rem] border border-white/50 bg-white/70 backdrop-blur-xl shadow-card overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 bg-gradient-accent text-accent-foreground">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
                <MessageCircle className="w-5 h-5" />
              </span>
              <div>
                <div className="font-semibold text-sm leading-tight">Ваш бизнес</div>
                <div className="text-xs opacity-80">официальный номер · online</div>
              </div>
              <BadgeCheck className="w-5 h-5 ml-auto" />
            </div>
            <div className="p-4 space-y-3 bg-[hsl(140_30%_97%)] min-h-[260px]">
              {chat.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.4 }}
                  className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3.5 py-2 rounded-2xl text-sm shadow-sm ${
                      m.from === "me"
                        ? "bg-gradient-accent text-accent-foreground rounded-br-sm"
                        : "bg-white text-foreground rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                    <span className={`block text-[10px] mt-1 ${m.from === "me" ? "text-white/70" : "text-muted-foreground"}`}>
                      {m.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating CRM lead card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="absolute -bottom-6 -left-6 w-56 rounded-2xl border border-white/50 bg-white/80 backdrop-blur-xl shadow-card p-4"
          >
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-glow animate-pulse" />
              Bitrix24 · Новый лид
            </div>
            <div className="text-sm font-bold text-foreground">Заявка из WhatsApp</div>
            <div className="text-xs text-muted-foreground mt-0.5">Источник: CTWA · Meta Ads</div>
            <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-glow">
              <Phone className="w-3.5 h-3.5" /> Звонок из карточки
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
