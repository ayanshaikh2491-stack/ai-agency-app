"use client"

import { useState } from "react"
import ChatBox from "@/components/ui/ChatBox"

export default function Home() {
  const [selectedPersona, setSelectedPersona] = useState("Strategy Lead")

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10 space-y-10">
      
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold">
          Organic Social Media Growth That Converts
        </h1>
        <p className="text-gray-400">
          Talk directly with our growth experts.
        </p>
      </section>

      <section className="flex gap-4 justify-center">
        <button
          onClick={() => setSelectedPersona("Strategy Lead")}
          className="px-4 py-2 bg-purple-600 rounded"
        >
          Strategy Lead
        </button>

        <button
          onClick={() => setSelectedPersona("Content Director")}
          className="px-4 py-2 bg-blue-600 rounded"
        >
          Content Director
        </button>

        <button
          onClick={() => setSelectedPersona("Conversion Specialist")}
          className="px-4 py-2 bg-green-600 rounded"
        >
          Conversion Specialist
        </button>
      </section>

      <ChatBox persona={selectedPersona} />

    </main>
  )
}
