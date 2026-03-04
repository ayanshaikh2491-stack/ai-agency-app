import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import ChatBox from "@/components/ui/ChatBox";

import TeamPlanner from "@/components/TeamPlanner";
import Features from "@/components/Features";
import VideoProof from "@/components/VideoProof";

import ServicesSection from "@/components/ui/ServicesSection";
import PricingSection from "@/components/ui/PricingSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />

      <div className="max-w-6xl mx-auto py-20">
        <ChatBox persona="default" />
      </div>

      <TeamPlanner />

      <Features />

      <VideoProof />

      <ServicesSection />

      <PricingSection />

      <Footer />

    </main>
  );
}
