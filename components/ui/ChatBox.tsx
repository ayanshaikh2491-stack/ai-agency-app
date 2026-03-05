"use client"

import { useState } from "react"

export default function ChatBox() {

  const [message,setMessage] = useState("")
  const [team,setTeam] = useState<any[]>([])

  const buildTeam = async () => {

    const res = await fetch("/api/run-manager",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        message
      })
    })

    const data = await res.json()

    setTeam(data.reply || [])
  }

  return (

    <div className="p-6 border rounded-xl">

      <textarea
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="Describe the AI team you need..."
        className="w-full p-4 bg-black border rounded-lg"
      />

      <button
        onClick={buildTeam}
        className="mt-4 px-6 py-2 bg-purple-600 rounded-lg"
      >
        Build AI Team
      </button>

      <div className="grid grid-cols-2 gap-4 mt-8">

        {team.map((agent,i)=>(
          <div key={i} className="p-4 border rounded-lg">

            <h3 className="font-bold">
              {agent.agent}
            </h3>

            <p className="text-sm text-gray-400">
              {agent.result}
            </p>

          </div>
        ))}

      </div>

    </div>

  )

}
