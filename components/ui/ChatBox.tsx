"use client"

import { useState } from "react"

interface ChatBoxProps {
  persona: string
}

export default function ChatBox({ persona }: ChatBoxProps) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([])

  const sendMessage = async () => {
    if (!message || !persona) return

    setMessages(prev => [...prev, "You: " + message])

    const res = await fetch("/api/engine", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, persona })
    })

    const data = await res.json()

    setMessages(prev => [
      ...prev,
      `${persona}: ${data.reply}`
    ])

    setMessage("")
  }

  return (
    <div className="p-4 border rounded-xl space-y-4">
      <div className="h-64 overflow-y-auto border p-3 rounded-md bg-black text-white">
        {messages.map((msg, i) => (
          <p key={i} className="text-sm mb-2">
            {msg}
          </p>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-md border"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-white text-black rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  )
}
