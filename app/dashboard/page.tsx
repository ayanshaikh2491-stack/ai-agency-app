"use client"

import { useState } from "react"

export default function Dashboard() {
  const [response, setResponse] = useState("")

  const testEngine = async () => {
    const res = await fetch("/api/engine", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Test message",
        persona: "Strategy Lead"
      })
    })

    const data = await res.json()
    setResponse(data.reply)
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <button
        onClick={testEngine}
        className="px-4 py-2 bg-white text-black rounded"
      >
        Test Engine
      </button>

      {response && (
        <div className="bg-black p-4 rounded border">
          {response}
        </div>
      )}
    </main>
  )
}
