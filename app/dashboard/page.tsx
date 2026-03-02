"use client"
import { useState } from "react"

export default function DashboardPage() {
  const [result, setResult] = useState("")

  const testEngine = async () => {
    const res = await fetch("/api/engine", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: "Test marketing strategy",
        persona: "research"
      })
    })

    const data = await res.json()
    setResult(data.reply)
  }

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <button
        onClick={testEngine}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Test Engine
      </button>

      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          {result}
        </div>
      )}
    </div>
  )
}
