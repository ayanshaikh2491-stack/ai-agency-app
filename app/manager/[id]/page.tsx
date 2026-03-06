"use client"

import { useState } from "react"

export default function ManagerPage({ params }: { params: { id: string } }) {

  const [messages,setMessages] = useState<any[]>([])
  const [input,setInput] = useState("")

  const intro:Record<string,string> = {
    website:"Hi, I'm your Website Manager. My team is ready. Tell me what we should build.",
    seo:"Hi, I'm your SEO Manager. My SEO team is ready to rank your site.",
    automation:"Hi, I'm your Automation Manager. My workflow team is ready.",
    marketing:"Hi, I'm your Marketing Manager. Campaign team ready.",
    ads:"Hi, I'm your Facebook Ads Manager. Ads team ready.",
    social:"Hi, I'm your Social Media Manager. Content team ready."
  }

  async function send(){

    if(!input) return

    const userMessage = {role:"user",text:input}

    setMessages(prev=>[...prev,userMessage])

    const messageText = input
    setInput("")

    try{

      const res = await fetch("/api/run-manager",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          message:messageText,
          manager:params.id
        })
      })

      const data = await res.json()

      const reply = data?.reply || "Manager failed to respond"

      setMessages(prev=>[
        ...prev,
        {role:"manager",text:reply}
      ])

    }catch(e){

      setMessages(prev=>[
        ...prev,
        {role:"manager",text:"Manager failed to respond"}
      ])

    }

  }

  return(

    <div className="max-w-2xl mx-auto p-6 text-white">

      <h1 className="text-xl mb-4">Manager Chat</h1>

      <div className="mb-6">

        <p className="text-purple-400">
          {intro[params.id] || "Hi, I'm your AI Manager. Tell me what you need."}
        </p>

      </div>

      <div className="space-y-3">

        {messages.map((m,i)=>(
          <div key={i}>
            <strong>{m.role}:</strong> {m.text}
          </div>
        ))}

      </div>

      <div className="flex gap-3 mt-6">

        <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          className="flex-1 bg-zinc-900 border border-zinc-700 p-3 rounded"
          placeholder="Type your message..."
        />

        <button
          onClick={send}
          className="bg-purple-600 px-5 rounded"
        >
          Send
        </button>

      </div>

    </div>

  )

}
