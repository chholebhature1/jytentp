import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { LargeFormatSection } from "@/components/LargeFormatSection";
import { DigitalDisplaysSection } from "@/components/DigitalDisplaysSection";
import { ClientsSection } from "@/components/ClientsSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { FluidBackground } from "@/components/FluidBackground";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <CustomCursor />
      <FluidBackground />
      <Header />
      <Hero />
      <StatsSection />
      <MarqueeSection />
      <ServicesSection />
      <LargeFormatSection />
      <DigitalDisplaysSection />
      <ClientsSection />
      <AboutSection />
      <Footer />
    </main>
  );
};

export default Index;
