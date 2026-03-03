"use client";

import { useState } from "react";
import PricingSection from "../components/ui/PricingSection";

export default function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="bg-black text-white min-h-screen relative">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Build Your <span className="text-purple-500">AI Team</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          AI Managers & AI Agents that automate marketing, sales and operations
          like a real digital team.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl transition">
            Get Started
          </button>

          <button className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-zinc-900 transition">
            View Pricing
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-14">
          Our AI Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition">
            <h3 className="text-2xl font-semibold mb-4">AI Manager</h3>
            <p className="text-gray-400">
              Strategy, automation and business intelligence powered by AI.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500 transition">
            <h3 className="text-2xl font-semibold mb-4">AI Team</h3>
            <p className="text-gray-400">
              Multiple AI agents working like digital team members.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-green-500 transition">
            <h3 className="text-2xl font-semibold mb-4">Custom Automation</h3>
            <p className="text-gray-400">
              Tailored AI workflows built specifically for your business.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <PricingSection />

      {/* FLOATING CHAT BUTTON */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-xl transition"
      >
        💬
      </button>

      {/* CHAT BOX */}
      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-80 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-2xl">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm text-gray-400">AI Manager</p>
            <button
              onClick={() => setChatOpen(false)}
              className="text-gray-500 hover:text-white text-sm"
            >
              ✕
            </button>
          </div>

          <div className="bg-black p-3 rounded-xl text-sm text-gray-300 mb-3">
            How can I help your business today?
          </div>

          <input
            type="text"
            placeholder="Type your message..."
            className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-2 text-sm outline-none"
          />
        </div>
      )}
    </main>
  );
}
