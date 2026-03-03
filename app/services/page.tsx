"use client";

import { useRouter } from "next/navigation";

type Agent = {
  name: string;
  role: string;
  category: string;
};

export default function ServicesPage() {
  const router = useRouter();

  const agents: Agent[] = [

    // CORE
    { name: "Arjun Rao", role: "Master Orchestrator", category: "Core System" },
    { name: "Vivaan Mehta", role: "Workflow Architect", category: "Core System" },
    { name: "Aanya Kapoor", role: "Data Intelligence Analyst", category: "Core System" },
    { name: "Ishaan Verma", role: "Quality Control Lead", category: "Core System" },

    // DEVELOPMENT
    { name: "Rohan Sharma", role: "Website Builder", category: "Development" },
    { name: "Priya Iyer", role: "UI/UX Designer", category: "Development" },
    { name: "Karan Malhotra", role: "Backend Architect", category: "Development" },
    { name: "Neel Desai", role: "Performance Optimizer", category: "Development" },
    { name: "Manav Khanna", role: "Security Engineer", category: "Development" },
    { name: "Tanvi Reddy", role: "Frontend Specialist", category: "Development" },

    // AI AUTOMATION
    { name: "Siddharth Jain", role: "Automation Specialist", category: "AI Automation" },
    { name: "Ritika Bansal", role: "Chatbot Architect", category: "AI Automation" },
    { name: "Kabir Sinha", role: "Prompt Engineer", category: "AI Automation" },
    { name: "Devansh Kulkarni", role: "API Specialist", category: "AI Automation" },

    // MARKETING
    { name: "Ananya Singh", role: "Brand Strategist", category: "Marketing" },
    { name: "Om Prakash", role: "SEO Strategist", category: "Marketing" },
    { name: "Rudra Sen", role: "Reels Script Writer", category: "Marketing" },
    { name: "Shivani Nanda", role: "Hashtag Strategist", category: "Marketing" },

    // SALES
    { name: "Rahul Chawla", role: "Sales Script Writer", category: "Sales" },
    { name: "Aniket Roy", role: "Pricing Strategist", category: "Sales" },
    { name: "Yash Arora", role: "Revenue Planner", category: "Sales" },
  ];

  const categories = Array.from(new Set(agents.map(a => a.category)));

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-center mb-16">
        Our AI Workforce
      </h1>

      {categories.map((cat) => (
        <div key={cat} className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-purple-400">
            {cat}
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

            {agents
              .filter(a => a.category === cat)
              .map((agent) => (
                <div
                  key={agent.name}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-purple-500 transition duration-300"
                >

                  {/* Professional Avatar */}
                  <img
                    src={`https://ui-avatars.com/api/?name=${agent.name}&background=111827&color=ffffff&size=128`}
                    alt={agent.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />

                  <h3 className="text-center font-semibold">
                    {agent.name}
                  </h3>

                  <p className="text-center text-sm text-gray-400 mb-4">
                    {agent.role}
                  </p>

                  <button
                    onClick={() =>
                      router.push(`/agent/${agent.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`)
                    }
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-2 rounded-xl font-medium"
                  >
                    Chat →
                  </button>

                </div>
              ))}

          </div>
        </div>
      ))}

    </div>
  );
}
