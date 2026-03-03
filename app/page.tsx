import Hero from "../components/ui/Hero";
import ServicesSection from "../components/ui/ServicesSection";
import PricingSection from "../components/ui/PricingSection";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <ServicesSection />
      <PricingSection />
    </main>
  );
}
