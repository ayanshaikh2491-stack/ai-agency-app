"use client"

import { useState } from "react"
import { ArrowUp, Image, Mic } from "lucide-react"

export default function ChatUI() {

  const [message,setMessage] = useState("")
  const [messages,setMessages] = useState<any[]>([])

  const sendMessage = async () => {

    if(!message) return

    const userMessage = {
      role:"user",
      text:message
    }

    setMessages([...messages,userMessage])

    const res = await fetch("/api/run-manager",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        message:message,
        manager:"website"
      })
    })

    const data = await res.json()

    const aiMessage = {
      role:"manager",
      text:data.result || "Manager is thinking..."
    }

    setMessages(prev => [...prev,aiMessage])

    setMessage("")
  }


  return (
    <div className="w-full max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl p-6">

      <div className="space-y-3 mb-6">

        {messages.map((m,i)=>(
          <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
            <span className="bg-purple-600 px-3 py-2 rounded-lg text-sm inline-block">
              {m.text}
            </span>
          </div>
        ))}

      </div>


      <div className="flex gap-2">

        <input
          type="text"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder="Describe what you want to build..."
          className="flex-1 bg-zinc-800 p-3 rounded-lg outline-none"
        />

        <input
          type="file"
          className="hidden"
          id="fileUpload"
        />

        <label htmlFor="fileUpload" className="bg-zinc-800 p-3 rounded-lg cursor-pointer">
          <Image size={18}/>
        </label>

        <button
          onClick={sendMessage}
          className="bg-purple-600 hover:bg-purple-500 p-3 rounded-lg"
        >
          <ArrowUp size={18}/>
        </button>

      </div>

    </div>
  )

}
