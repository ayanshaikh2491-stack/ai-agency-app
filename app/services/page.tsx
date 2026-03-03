"use client";

import { useRouter } from "next/navigation";

type Agent = {
  name: string;
  role: string;
  category: string;
  gender: "male" | "female";
};

export default function ServicesPage() {
  const router = useRouter();

  const agents: Agent[] = [

    // CORE
    { name: "Arjun Rao", role: "Master Orchestrator", category: "Core System", gender: "male" },
    { name: "Vivaan Mehta", role: "Workflow Architect", category: "Core System", gender: "male" },
    { name: "Aanya Kapoor", role: "Data Intelligence Analyst", category: "Core System", gender: "female" },
    { name: "Ishaan Verma", role: "Quality Control Lead", category: "Core System", gender: "male" },

    // DEVELOPMENT
    { name: "Rohan Sharma", role: "Website Builder", category: "Development", gender: "male" },
    { name: "Priya Iyer", role: "UI/UX Designer", category: "Development", gender: "female" },
    { name: "Karan Malhotra", role: "Backend Architect", category: "Development", gender: "male" },
    { name: "Neel Desai", role: "Performance Optimizer", category: "Development", gender: "male" },
    { name: "Manav Khanna", role: "Security Engineer", category: "Development", gender: "male" },
    { name: "Tanvi Reddy", role: "Frontend Specialist", category: "Development", gender: "female" },

    // AI & AUTOMATION
    { name: "Siddharth Jain", role: "Automation Specialist", category: "AI Automation", gender: "male" },
    { name: "Aryan Gupta", role: "Lead Qualification AI", category: "AI Automation", gender: "male" },
    { name: "Ritika Bansal", role: "Chatbot Architect", category: "AI Automation", gender: "female" },
    { name: "Kabir Sinha", role: "Prompt Engineer", category: "AI Automation", gender: "male" },
    { name: "Devansh Kulkarni", role: "API Specialist", category: "AI Automation", gender: "male" },
    { name: "Sanya Kapoor", role: "Funnel Automation", category: "AI Automation", gender: "female" },

    // SALES
    { name: "Harsh Vaidya", role: "Offer Structuring", category: "Sales", gender: "male" },
    { name: "Rahul Chawla", role: "Sales Script Writer", category: "Sales", gender: "male" },
    { name: "Mehul Shah", role: "Follow-Up Automation", category: "Sales", gender: "male" },
    { name: "Aniket Roy", role: "Pricing Strategist", category: "Sales", gender: "male" },
    { name: "Yash Arora", role: "Revenue Planner", category: "Sales", gender: "male" },

    // MARKETING
    { name: "Ananya Singh", role: "Brand Strategist", category: "Marketing", gender: "female" },
    { name: "Om Prakash", role: "SEO Strategist", category: "Marketing", gender: "male" },
    { name: "Rudra Sen", role: "Reels Script Writer", category: "Marketing", gender: "male" },
    { name: "Ira Mukherjee", role: "Hook Specialist", category: "Marketing", gender: "female" },
    { name: "Aarav Joshi", role: "Trend Research", category: "Marketing", gender: "male" },
    { name: "Krishna Pillai", role: "Ads Copy Specialist", category: "Marketing", gender: "male" },
    { name: "Shivani Nanda", role: "Hashtag Strategist", category: "Marketing", gender: "female" },
    { name: "Vihaan Arvind", role: "Funnel Strategist", category: "Marketing", gender: "male" },

    // INSTAGRAM
    { name: "Reyansh Tiwari", role: "Algorithm Analyst", category: "Instagram Growth", gender: "male" },
    { name: "Atharv Patil", role: "Reels Retention", category: "Instagram Growth", gender: "male" },
    { name: "Rhea Bhatia", role: "Engagement Designer", category: "Instagram Growth", gender: "female" },
    { name: "Nikhil Bedi", role: "Reach Compliance", category: "Instagram Growth", gender: "male" },
    { name: "Simran Kaur", role: "Discoverability Expert", category: "Instagram Growth", gender: "female" },

    // FACEBOOK
    { name: "Laksh Malhotra", role: "Organic Distribution", category: "Facebook Growth", gender: "male" },
    { name: "Kriti Ahuja", role: "Community Growth", category: "Facebook Growth", gender: "female" },
    { name: "Varun Talwar", role: "Ads Optimizer", category: "Facebook Growth", gender: "male" },
    { name: "Pooja Sethi", role: "Feed Engineer", category: "Facebook Growth", gender: "female" },

    // TWITTER
    { name: "Advik Bhardwaj", role: "Thread Architect", category: "Twitter Growth", gender: "male" },
    { name: "Amitesh Rao", role: "Velocity Engineer", category: "Twitter Growth", gender: "male" },
    { name: "Rajat Mehra", role: "Authority Builder", category: "Twitter Growth", gender: "male" },
    { name: "Tanya Oberoi", role: "Trend Leveraging", category: "Twitter Growth", gender: "female" },

    // LINKEDIN
    { name: "Saurabh Tripathi", role: "B2B Strategist", category: "LinkedIn Authority", gender: "male" },
    { name: "Mohit Arora", role: "Distribution Optimizer", category: "LinkedIn Authority", gender: "male" },
    { name: "Ishika Sood", role: "Network Builder", category: "LinkedIn Authority", gender: "female" },
    { name: "Keshav Bhat", role: "Lead Designer", category: "LinkedIn Authority", gender: "male" },
  ];

  const categories = [...new Set(agents.map(a => a.category))];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-center mb-16">
        Our AI Workforce
      </h1>

      {categories.map((cat, i) => (
        <div key={i} className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-purple-400">
            {cat}
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

            {agents
              .filter(a => a.category === cat)
              .map((agent, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-purple-500 transition"
                >

                  <img
                    src={`https://api.dicebear.com/7.x/adventurer/png?seed=${agent.name}&gender=${agent.gender}`}
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
                    className="w-full bg-white text-black py-2 rounded-xl font-medium"
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
