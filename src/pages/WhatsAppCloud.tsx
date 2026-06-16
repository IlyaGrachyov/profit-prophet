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
