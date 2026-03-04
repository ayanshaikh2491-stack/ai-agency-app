"use client";

import HeroChat from "@/components/HeroChat";
import TeamPanel from "@/components/TeamPanel";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import VideoProof from "@/components/VideoProof";

export default function Home() {

return (

<main className="bg-black text-white min-h-screen">

<HeroChat />

<TeamPanel />

<TrustSection />

<Testimonials />

<VideoProof />

<Features />

</main>

)

}
