import Hero from "@/components/ui/Hero"
import TrustProof from "@/components/TrustProof"
import Benefits from "@/components/Benefits"
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import AgentsPreview from "@/components/AgentsPreview"
import VideoProof from "@/components/VideoProof"
import PricingSection from "@/components/ui/PricingSection"
import Footer from "@/components/ui/Footer"

export default function Home() {

  return (

    <main className="bg-black text-white min-h-screen">

      <Hero />

      <TrustProof />

      <Benefits />

      <Features />

      <HowItWorks />

      <AgentsPreview />

      <VideoProof />

      <PricingSection />

      <Footer />

    </main>

  )

}
