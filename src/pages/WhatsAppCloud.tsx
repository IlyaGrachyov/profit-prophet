import Seo from "@/components/Seo";
import WhatsAppNavbar from "@/components/whatsapp/Navbar";
import Hero from "@/components/whatsapp/Hero";
import Problems from "@/components/whatsapp/Problems";
import Solution from "@/components/whatsapp/Solution";
import HowItWorks from "@/components/whatsapp/HowItWorks";
import Products from "@/components/whatsapp/Products";
import Pricing from "@/components/whatsapp/Pricing";
import WhyUs from "@/components/whatsapp/WhyUs";
import Steps from "@/components/whatsapp/Steps";
import FinalCta from "@/components/whatsapp/FinalCta";
import WhatsAppFooter from "@/components/whatsapp/Footer";

const WhatsAppCloud = () => (
  <div className="scroll-smooth">
    <Seo
      title="WhatsApp Cloud в Казахстане — подключение WhatsApp Business API | Bitrix24"
      description="Официальный бизнес-партнёр Meta в Казахстане: подключение WhatsApp Business API, звонки SIP, CTWA Tracker и интеграция с Bitrix24 CRM. Пробный период 5 дней бесплатно."
      path="/whatsapp-cloud"
    />
    <WhatsAppNavbar />
    <main>
      <Hero />
      <Problems />
      <Solution />
      <HowItWorks />
      <Products />
      <Pricing />
      <WhyUs />
      <Steps />
      <FinalCta />
    </main>
    <WhatsAppFooter />
  </div>
);

export default WhatsAppCloud;
