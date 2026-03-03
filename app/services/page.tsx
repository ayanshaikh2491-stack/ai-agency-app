"use client";

import { useRouter } from "next/navigation";

export default function ServicesPage() {
  const router = useRouter();

  const team = [
    { name: "Arjun Rao", role: "Master Orchestrator" },
    { name: "Vivaan Mehta", role: "Workflow Architect" },
    { name: "Aanya Kapoor", role: "Data Intelligence Analyst" },
    { name: "Ishaan Verma", role: "Quality Control Lead" },

    { name: "Rohan Sharma", role: "Website Builder" },
    { name: "Karan Malhotra", role: "Backend Architect" },
    { name: "Aditya Nair", role: "Deployment Manager" },
    { name: "Neel Desai", role: "Performance Optimizer" },
    { name: "Manav Khanna", role: "Security Engineer" },
    { name: "Priya Iyer", role: "UI/UX Designer" },

    { name: "Siddharth Jain", role: "Workflow Automation Specialist" },
    { name: "Aryan Gupta", role: "Lead Qualification AI" },
    { name: "Tanvi Reddy", role: "AI Chatbot Architect" },
    { name: "Kabir Sinha", role: "Prompt Engineering Expert" },
    { name: "Ritika Bansal", role: "Funnel Automation Engineer" },
    { name: "Devansh Kulkarni", role: "API & Integration Specialist" },

    { name: "Harsh Vaidya", role: "Offer Structuring Expert" },
    { name: "Aniket Roy", role: "Pricing Strategist" },
    { name: "Rahul Chawla", role: "High-Ticket Script Writer" },
    { name: "Mehul Shah", role: "Follow-Up Automation" },
    { name: "Yash Arora", role: "Revenue Scaling Planner" },

    { name: "Ananya Singh", role: "Brand Positioning Specialist" },
    { name: "Rudra Sen", role: "Viral Script Writer" },
    { name: "Krishna Pillai", role: "Paid Ads Copy Specialist" },
    { name: "Om Prakash", role: "SEO Strategist" },
    { name: "Ira Mukherjee", role: "Hook & Attention Engineer" },
    { name: "Aarav Joshi", role: "Trend Research Analyst" },
    { name: "Sanya Kapoor", role: "Caption Optimization Expert" },
    { name: "Vihaan Arvind", role: "Funnel Strategy Consultant" },

    { name: "Reyansh Tiwari", role: "Instagram Algorithm Analyst" },
    { name: "Atharv Patil", role: "Reels Retention Engineer" },
    { name: "Rhea Bhatia", role: "Engagement Loop Designer" },
    { name: "Nikhil Bedi", role: "Reach Compliance Specialist" },
    { name: "Shivani Nanda", role: "Hashtag Discoverability Expert" },

    { name: "Laksh Malhotra", role: "Organic Distribution Specialist" },
    { name: "Kriti Ahuja", role: "Community Growth Strategist" },
    { name: "Varun Talwar", role: "Facebook Ads Optimizer" },
    { name: "Pooja Sethi", role: "Feed Visibility Engineer" },

    { name: "Advik Bhardwaj", role: "Viral Thread Architect" },
    { name: "Amitesh Rao", role: "Engagement Velocity Engineer" },
    { name: "Simran Kaur", role: "Trend Leveraging Specialist" },
    { name: "Rajat Mehra", role: "Authority Building Strategist" },

    { name: "Saurabh Tripathi", role: "B2B Positioning Specialist" },
    { name: "Tanya Oberoi", role: "Inbound Lead Designer" },
    { name: "Mohit Arora", role: "LinkedIn Distribution Optimizer" },
    { name: "Ishika Sood", role: "Strategic Network Builder" },

    { name: "Keshav Bhat", role: "Business Growth Analyst" },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Meet Our AI Workforce</h1>
        <p className="text-gray-400">
          Specialized digital experts built to scale your business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {team.map((member, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-purple-500 transition duration-300"
          >
            <img
              src={`https://i.pravatar.cc/150?img=${index + 5}`}
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
