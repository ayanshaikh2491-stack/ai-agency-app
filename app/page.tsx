import Hero from "@/components/ui/animated-shader-hero";

export default function Home() {
  return (
    <Hero
      trustBadge={{
        text: "Trusted by forward-thinking teams."
      }}
      headline={{
        line1: "Launch Your",
        line2: "Workflow Into Orbit"
      }}
      subtitle="Supercharge productivity with AI-powered automation built for modern teams."
      buttons={{
        primary: {
          text: "Get Started"
        },
        secondary: {
          text: "Explore"
        }
      }}
    />
  );
}
