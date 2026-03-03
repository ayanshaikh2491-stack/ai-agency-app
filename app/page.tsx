"use client";

import PricingSection from "../components/ui/PricingSection";
import { useState } from "react";

export default function HomePage() {
  const [message, setMessage] = useState("");

  return (
    <main className="bg-black text-white min-h-screen">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28 text-center">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          What do you want to <span className="text-purple-500">build?</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Describe your goal and our AI Manager will assemble the perfect AI team for you.
        </p>

        {/* AI INPUT BOX */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex items-center gap-3 shadow-2xl">

            <button className="p-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition">
              📎
            </button>

            <input
              type="text"
              placeholder="Build a website, run ads, automate workflow..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
            />

            <button className="bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-xl transition">
              →
            </button>

          </div>
        </div>

      </section>


      {/* ================= SERVICES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">
          Our AI Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition">
            <h3 className="text-2xl font-semibold mb-4">AI Manager</h3>
            <p className="text-gray-400">
              Strategy, planning and execution handled by an intelligent AI manager.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500 transition">
            <h3 className="text-2xl font-semibold mb-4">AI Team</h3>
            <p className="text-gray-400">
              Specialized AI agents working together like a real digital team.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-green-500 transition">
            <h3 className="text-2xl font-semibold mb-4">Custom Automation</h3>
            <p className="text-gray-400">
              Tailored workflows and integrations built for your business.
            </p>
          </div>

        </div>
      </section>


      {/* ================= PRICING ================= */}
      <PricingSection />

    </main>
  );
}
