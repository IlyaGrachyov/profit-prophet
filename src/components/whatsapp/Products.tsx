import { motion } from "framer-motion";
import {
  Check,
  BadgeCheck,
  Server,
  Network,
  PhoneCall,
  Database,
  Target,
  TrendingUp,
  Eye,
  Wallet,
  Bot,
  History,
  Plug,
  ShieldCheck,
  Workflow,
} from "lucide-react";

/* ---------- Reusable section shell ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

/* ---------- 1. WhatsApp Cloud API ---------- */
const cloudFeatures = [
  "Официальный белый номер (верификация бизнеса)",
  "Исходящие сообщения по шаблонам — рассылки клиентам",
  "Входящие диалоги — обработка в Bitrix24 CRM",
  "Без риска блокировки: официальный Meta API",
  "Пробный период на первый номер — 5 дней",
];

const CloudApi = () => (
  <div id="cloud-api" className="container py-20 md:py-28 scroll-mt-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-glow/10 text-glow text-xs font-semibold uppercase tracking-wider">
          <BadgeCheck className="w-4 h-4" /> Сообщения
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">WhatsApp Cloud API</h2>
        <ul className="space-y-3 mb-8">
          {cloudFeatures.map((f) => (
            <li key={f} className="flex items-start gap-3 text-foreground/90">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-gradient-accent text-accent-foreground flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </span>
              <span className="text-sm md:text-base">{f}</span>
            </li>
          ))}
        </ul>
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-glow/30 bg-glow/5 text-sm font-medium text-foreground">
          <ShieldCheck className="w-5 h-5 text-glow" />
          Тариф: от <span className="font-bold">11 000 ₸/мес</span> · 110 000 ₸/год за номер
        </div>
      </motion.div>

      {/* Template message mockup */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="rounded-3xl border border-white/50 bg-white/70 backdrop-blur-xl shadow-card p-6"
      >
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm font-semibold text-foreground">Шаблон рассылки</span>
          <span className="flex items-center gap-1 text-xs font-medium text-glow">
            <BadgeCheck className="w-4 h-4" /> Одобрено Meta
          </span>
        </div>
        <div className="space-y-3">
          <div className="bg-[hsl(140_30%_97%)] rounded-2xl rounded-tl-sm p-4 text-sm text-foreground">
            Здравствуйте, {"{{1}}"}! 🎉 Ваш заказ №{"{{2}}"} готов к выдаче. Подтвердите получение
            или задайте вопрос — мы на связи.
          </div>
          <div className="flex gap-2">
            <span className="flex-1 text-center text-xs font-semibold text-glow border border-glow/30 rounded-lg py-2">
              Подтвердить
            </span>
            <span className="flex-1 text-center text-xs font-semibold text-glow border border-glow/30 rounded-lg py-2">
              Связаться
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 mt-6">
          {[
            { v: "98%", l: "доставка" },
            { v: "0", l: "блокировок" },
            { v: "5 дней", l: "бесплатно" },
          ].map((s) => (
            <div key={s.l} className="text-center rounded-xl bg-muted/60 py-3">
              <div className="text-lg font-bold text-foreground">{s.v}</div>
              <div className="text-[11px] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
);

/* ---------- 2. WhatsApp Business Calling SIP ---------- */
const sipFlow = [
  { icon: PhoneCall, label: "WhatsApp Cloud API" },
  { icon: Server, label: "Наш сервер" },
  { icon: Network, label: "SIP-транк" },
  { icon: Database, label: "Asterisk / CRM" },
];

const sipRequirements = [
  "Привязанная банковская карта в Facebook Business Manager",
  "Лимит исходящих сообщений от 1 000 в сутки",
  "Верификация бизнеса Meta",
];

const CallingSip = () => (
  <div id="sip" className="bg-hero scroll-mt-20">
    <div className="container py-20 md:py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-2xl mb-12"
      >
        <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-glow/15 text-glow text-xs font-semibold uppercase tracking-wider">
          <PhoneCall className="w-4 h-4" /> Звонки SIP
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-4">
          WhatsApp Business Calling
        </h2>
        <p className="text-hero-muted text-lg">
          Принимайте и совершайте звонки WhatsApp прямо из вашей АТС или CRM через SIP.
        </p>
      </motion.div>

      {/* Flow diagram */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-14">
        {sipFlow.map((s, i) => (
          <div key={i} className="flex flex-col lg:flex-row items-center gap-4 w-full lg:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex items-center gap-3 w-full lg:w-52 p-5 rounded-2xl border border-hero-muted/20 bg-white/5 backdrop-blur-md"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-accent text-accent-foreground flex-shrink-0">
                <s.icon className="w-5 h-5" />
              </span>
              <span className="text-sm font-semibold text-hero-foreground">{s.label}</span>
            </motion.div>
            {i < sipFlow.length - 1 && (
              <span className="hidden lg:block w-8 h-px bg-gradient-to-r from-glow to-transparent" />
            )}
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="p-7 rounded-2xl border border-hero-muted/20 bg-white/5 backdrop-blur-md"
        >
          <h3 className="text-lg font-bold text-hero-foreground mb-4">Обязательные условия</h3>
          <ul className="space-y-3">
            {sipRequirements.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm text-hero-muted">
                <Check className="w-4 h-4 text-glow flex-shrink-0 mt-0.5" />
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-7 rounded-2xl border border-glow/30 bg-gradient-to-br from-glow/15 to-transparent backdrop-blur-md flex flex-col justify-center"
        >
          <h3 className="text-lg font-bold text-hero-foreground mb-4">Стоимость</h3>
          <div className="flex gap-8">
            <div>
              <div className="text-2xl font-bold text-hero-foreground">11 000 ₸</div>
              <div className="text-xs text-hero-muted">мес / номер</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-hero-foreground">110 000 ₸</div>
              <div className="text-xs text-hero-muted">год / номер</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

/* ---------- 3. CTWA Tracker ---------- */
const ctwaKpis = [
  { icon: Eye, value: "100%", label: "Видно источник клиента", sub: "кампания и креатив" },
  { icon: Wallet, value: "₸/лид", label: "Стоимость лида", sub: "в реальных деньгах" },
  { icon: TrendingUp, value: "+ROI", label: "Оптимизация бюджета", sub: "в пользу работающих каналов" },
];

const CtwaTracker = () => (
  <div id="ctwa" className="container py-20 md:py-28 scroll-mt-20">
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-2xl mb-12"
    >
      <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-glow/10 text-glow text-xs font-semibold uppercase tracking-wider">
        <Target className="w-4 h-4" /> CTWA Tracker
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        Отслеживание конверсий из рекламы
      </h2>
      <p className="text-muted-foreground text-lg">
        Click to WhatsApp — реклама в Facebook/Instagram, которая ведёт пользователя прямо в диалог
        WhatsApp с вашим бизнесом. Вы видите весь путь до продажи.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-6 mb-10">
      {ctwaKpis.map((k, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-7 rounded-2xl border border-border bg-card shadow-card hover:shadow-glow transition-shadow"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-accent text-accent-foreground mb-4 shadow-glow">
            <k.icon className="w-6 h-6" />
          </div>
          <div className="text-2xl font-bold text-gradient-accent mb-1">{k.value}</div>
          <div className="font-semibold text-foreground">{k.label}</div>
          <div className="text-sm text-muted-foreground">{k.sub}</div>
        </motion.div>
      ))}
    </div>

    {/* Mini analytics bar chart mockup */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="rounded-2xl border border-border bg-card shadow-card p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <span className="font-semibold text-foreground">Заявки по кампаниям</span>
        <span className="text-xs text-muted-foreground">за 30 дней</span>
      </div>
      <div className="flex items-end gap-3 h-40">
        {[
          { h: "55%", l: "Instagram" },
          { h: "80%", l: "Facebook" },
          { h: "40%", l: "Reels" },
          { h: "95%", l: "Stories" },
          { h: "65%", l: "Поиск" },
        ].map((b, i) => (
          <motion.div
            key={b.l}
            initial={{ height: 0 }}
            whileInView={{ height: b.h }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            className="flex-1 rounded-t-lg bg-gradient-accent relative group"
          >
            <span className="absolute -bottom-6 left-0 right-0 text-center text-[11px] text-muted-foreground">
              {b.l}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="h-6" />
      <p className="text-xs text-muted-foreground mt-2">
        Стоимость: 11 000 ₸/мес за номер · 250 000 ₸/год за портал · Пробный период 7 дней
      </p>
    </motion.div>
  </div>
);

/* ---------- 4. Bitrix24 integration ---------- */
const bitrixFeatures = [
  { icon: Database, title: "Все диалоги в CRM", text: "Переписка с клиентами напрямую в открытых линиях Bitrix24." },
  { icon: Target, title: "Сделки и лиды автоматически", text: "Каждый новый диалог автоматически создаёт лид или сделку." },
  { icon: History, title: "История общения", text: "Полная переписка прикреплена к карточке клиента в CRM." },
  { icon: Bot, title: "Роботы и триггеры", text: "Автоматические рассылки по шаблонам из воронки Bitrix24." },
  { icon: PhoneCall, title: "Звонки через CRM", text: "Нажал кнопку в карточке — позвонил клиенту в WhatsApp." },
  { icon: Plug, title: "Self-hosted вариант", text: "Можно установить на вашем сервере для полного контроля данных." },
];

const Bitrix = () => (
  <div id="bitrix" className="bg-muted/40 scroll-mt-20">
    <div className="container py-20 md:py-28">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-glow/10 text-glow text-xs font-semibold uppercase tracking-wider">
          <Workflow className="w-4 h-4" /> Bitrix24
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Интеграция WhatsApp + Bitrix24 CRM
        </h2>
        <p className="text-muted-foreground text-lg">
          Вся работа с клиентами — в одном окне CRM. Автоматизация продаж от первого сообщения до сделки.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bitrixFeatures.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group p-7 rounded-2xl border border-border bg-card shadow-card hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-glow/10 text-glow mb-5 group-hover:bg-gradient-accent group-hover:text-accent-foreground transition-colors">
              <f.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Products = () => (
  <section id="products">
    <CloudApi />
    <CallingSip />
    <CtwaTracker />
    <Bitrix />
  </section>
);

export default Products;
