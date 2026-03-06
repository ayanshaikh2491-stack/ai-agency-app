"use client"

import { useState, useEffect } from "react"

export default function ManagerPage({ params }: { params: { id: string } }) {

  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const intro: any = {
      website: "Hi, I'm your Website Manager. I can build or copy websites and manage products.",
      seo: "Hi, I'm your SEO Manager. I help websites rank on Google.",
      automation: "Hi, I'm your Automation Manager. I automate workflows.",
      marketing: "Hi, I'm your Marketing Manager. I plan growth strategies.",
      ads: "Hi, I'm your Facebook Ads Manager. I run ad campaigns.",
      social: "Hi, I'm your Social Media Manager. I grow Instagram and Facebook pages."
    }

    setMessages([
      {
        role: "manager",
        text: intro[params.id] || "Hello, I'm your AI Manager. Tell me what you want to build."
      }
    ])

  }, [params.id])

  async function send() {

    if (!input.trim()) return

    const userMessage = input

    setMessages(prev => [
      ...prev,
      { role: "user", text: userMessage }
    ])

    setInput("")
    setLoading(true)

    try {

      const res = await fetch("/api/run-manager", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userMessage })
      })

      const data = await res.json()

      setMessages(prev => [
        ...prev,
        { role: "manager", text: data.reply }
      ])

    } catch (err) {

      setMessages(prev => [
        ...prev,
        { role: "manager", text: "Error contacting AI manager." }
      ])

    } finally {
      setLoading(false)
    }

  }

  return (

    <div className="max-w-2xl mx-auto p-6 text-white">

      <h1 className="text-2xl mb-6 font-semibold">
        AI Manager
      </h1>

      <div className="space-y-4 min-h-[300px]">

        {messages.map((m, i) => (

          <div key={i}>

            <strong className="capitalize">
              {m.role}:
            </strong>{" "}

            <span className="text-gray-300">
              {m.text}
            </span>

          </div>

        ))}

        {loading && (
          <p className="text-gray-400">
            Manager is thinking...
          </p>
        )}

      </div>

      <div className="flex gap-3 mt-6">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==="Enter"){
              send()
            }
          }}
          className="flex-1 bg-zinc-900 border border-zinc-700 p-3 rounded"
          placeholder="Type your message..."
        />

        <button
          onClick={send}
          className="bg-purple-600 hover:bg-purple-700 px-5 rounded"
        >
          Send
        </button>

      </div>

    </div>

  )

}
