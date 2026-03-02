"use client"
import { useState } from "react"

interface ChatBoxProps {
  persona: string
  name: string
}

export default function ChatBox({ persona, name }: ChatBoxProps) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!message || !persona) return

    setMessages(prev => [...prev, "You: " + message])
    setLoading(true)

    try {
      const res = await fetch("/api/engine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, persona })
      })

      const data = await res.json()

      setMessages(prev => [...prev, `${
