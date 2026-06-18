import Seo from "@/components/Seo";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import ResultsSection from "@/components/landing/ResultsSection";
import CaseSection from "@/components/landing/CaseSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PricingSection from "@/components/landing/PricingSection";
import AISection from "@/components/landing/AISection";
import ProcessSection from "@/components/landing/ProcessSection";
import AudienceSection from "@/components/landing/AudienceSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <>
    <Seo
      title="Marketing Gid — интеграция WhatsApp, CRM и Meta Ads"
      description="Соединяем рекламу, CRM и WhatsApp — обучаем алгоритм Meta приводить клиентов, которые реально платят. Снижение стоимости лида до 2 раз и рост конверсии в продажу."
      path="/"
    />
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <ResultsSection />
    <CaseSection />
    <FeaturesSection />
    <PricingSection />
    <AISection />
    <ProcessSection />
    <AudienceSection />
    <CTASection />
    <Footer />
  </>
);

export default Index;
