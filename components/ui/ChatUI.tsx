"use client"

import { useState } from "react"

type Agent = {
  agent: string
}

export default function ChatUI() {

  const [message,setMessage] = useState("")
  const [reply,setReply] = useState("")
  const [agents,setAgents] = useState<Agent[]>([])
  const [loading,setLoading] = useState(false)

  async function sendMessage(){

    if(!message.trim()) return

    setLoading(true)

    try{

      const res = await fetch("/api/chat",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({ message })
      })

      const data = await res.json()

      setReply(data.reply)

      if(data.agents){
        setAgents(data.agents)
      }

      setMessage("")

    }catch(err){
      console.log("API error",err)
    }

    setLoading(false)
  }

  return (

    <div className="max-w-2xl mx-auto p-6">

      <div className="bg-zinc-900 p-6 rounded-xl">

        <input
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder="Ask anything..."
          className="w-full p-3 rounded bg-zinc-800 text-white"
        />

        <button
          onClick={sendMessage}
          className="mt-4 px-4 py-2 bg-purple-600 rounded"
        >
          Send
        </button>

        {loading && (
          <p className="mt-4 text-gray-400">
            Manager thinking...
          </p>
        )}

        {reply && (
          <div className="mt-6">
            <p className="text-white">
              <strong>Manager:</strong> {reply}
            </p>
          </div>
        )}

      </div>

      {agents.length > 0 && (
        <div className="mt-10 grid grid-cols-2 gap-4">

          {agents.map((a,index)=>(
            <div
              key={index}
              className="bg-zinc-900 p-4 rounded-xl border border-zinc-700"
            >
              <p className="text-white">
                {a.agent}
              </p>
            </div>
          ))}

        </div>
      )}

    </div>

  )

}
