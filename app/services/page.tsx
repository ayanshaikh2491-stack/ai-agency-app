"use client";

import { useRouter } from "next/navigation";

export default function ServicesPage() {
  const router = useRouter();

  const team = [
    // Core System
    { name: "Orion Blake", role: "Master Orchestrator" },
    { name: "Atlas Reed", role: "Workflow Architect" },
    { name: "Nova Quinn", role: "Data Intelligence Analyst" },
    { name: "Sentinel Cruz", role: "Quality Control Lead" },

    // Development
    { name: "Ryan Cole", role: "Website Builder" },
    { name: "Ethan Brooks", role: "Backend Architect" },
    { name: "Liam Carter", role: "Deployment Manager" },
    { name: "Lucas Grant", role: "Performance Optimizer" },
    { name: "Nathan Scott", role: "Security Engineer" },
    { name: "Aiden Moore", role: "UI/UX Designer" },

    // AI & Automation
    { name: "Zane Walker", role: "Workflow Automation Specialist" },
    { name: "Logan Hayes", role: "Lead Qualification AI" },
    { name: "Caleb Stone", role: "AI Chatbot Architect" },
    { name: "Mason Reed", role: "Prompt Engineering Expert" },
    { name: "Oliver Blake", role: "Funnel Automation Engineer" },
    { name: "Daniel Frost", role: "API & Integration Specialist" },

    // Sales & Business
    { name: "Victor Kane", role: "Offer Structuring Expert" },
    { name: "Leo Bennett", role: "Pricing Strategist" },
    { name: "Xavier Cole", role: "High-Ticket Script Writer" },
    { name: "Jordan Miles", role: "Follow-Up Automation" },
    { name: "Connor Drake", role: "Revenue Scaling Planner" },

    // Marketing
    { name: "Adrian Knox", role: "Brand Positioning Specialist" },
    { name: "Dylan Hart", role: "Viral Script Writer" },
    { name: "Hunter Wells", role: "Paid Ads Copy Specialist" },
    { name: "Miles Turner", role: "SEO Strategist" },
    { name: "Ryder Cole", role: "Hook & Attention Engineer" },
    { name: "Tristan Fox", role: "Trend Research Analyst" },
    { name: "Elliot Chase", role: "Caption Optimization Expert" },
    { name: "Sebastian Ray", role: "Funnel Strategy Consultant" },

    // Instagram Division
    { name: "Blake Turner", role: "Instagram Algorithm Analyst" },
    { name: "Jayden Cole", role: "Reels Retention Engineer" },
    { name: "Carter Knox", role: "Engagement Loop Designer" },
    { name: "Evan Brooks", role: "Reach Compliance Specialist" },
    { name: "Austin Hale", role: "Hashtag Discoverability Expert" },

    // Facebook
    { name: "Noah Bennett", role: "Organic Distribution Specialist" },
    { name: "Aaron Miles", role: "Community Growth Strategist" },
    { name: "Tyler Grant", role: "Facebook Ads Optimizer" },
    { name: "Brandon Scott", role: "Feed Visibility Engineer" },

    // Twitter
    { name: "Julian Cross", role: "Viral Thread Architect" },
    { name: "Marcus Lane", role: "Engagement Velocity Engineer" },
    { name: "Cole Mercer", role: "Trend Leveraging Specialist" },
    { name: "Ethan Vale", role: "Authority Building Strategist" },

    // LinkedIn
    { name: "Calvin Rhodes", role: "B2B Positioning Specialist" },
    { name: "Dominic Frost", role: "Inbound Lead Designer" },
    { name: "Owen Parker", role: "LinkedIn Distribution Optimizer" },
    { name: "Henry Lawson", role: "Strategic Network Builder" },

    // Analytics
    { name: "Asher Knight", role: "Business Growth Analyst" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Meet Our AI Workforce</h1>
        <p className="text-gray-400">
          A specialized digital team designed to scale your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {team.map((member, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-purple-500 transition"
          >
            <img
              src={`https://i.pravatar.cc/150?img=${index + 10}`}
              alt={member.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />

            <h3 className="text-center text-lg font-semibold">
              {member.name}
            </h3>

            <p className="text-center text-sm text-purple-400 mb-4">
              {member.role}
            </p>

            <button
              onClick={() => router.push("/workspace")}
              className="w-full bg-white text-black py-2 rounded-xl font-medium"
            >
              Start Conversation →
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}
