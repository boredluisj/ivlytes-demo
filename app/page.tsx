import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { ServicesBento } from "@/components/ServicesBento";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialMarquee } from "@/components/TestimonialMarquee";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { WaveDivider } from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-teal-200">
      <Header />
      <Hero />
      <StatsBand />
      <ServicesBento />
      <WaveDivider flip />
      <AboutSection />
      <WaveDivider />
      <TestimonialMarquee />
      <CTASection />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
