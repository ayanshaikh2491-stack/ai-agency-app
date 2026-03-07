"use client"

import { useState, useEffect } from "react"

export default function ManagerPage({params}:{params:{id:string}}){

const [messages, setMessages] = useState<any[]>([])
const [input, setInput] = useState("")
const [team, setTeam] = useState<any[]>([])
const [started, setStarted] = useState(false)

useEffect(()=>{
  if(!started){
    setStarted(true)
    const intro = getIntro(params.id)
    setMessages(intro)
  }
},[])

function getIntro(manager:string){
  const intros:any = {
    website:[
      {role:"manager", text:"Hello. 👋"},
      {role:"manager", text:"My name is Arjun Mehta."},
      {role:"manager", text:"I am your Website Development Manager."},
      {role:"manager", text:"I design and build scalable websites and digital platforms for businesses."},
      {role:"manager", text:"Before we begin — may I know your name?"},
    ],
    seo:[
      {role:"manager", text:"Hello. 👋"},
      {role:"manager", text:"I am your SEO Manager."},
      {role:"manager", text:"I handle search rankings, keyword strategy, and organic growth."},
      {role:"manager", text:"What's your name?"},
    ],
    marketing:[
      {role:"manager", text:"Hello. 👋"},
      {role:"manager", text:"I am your Marketing Manager."},
      {role:"manager", text:"I run campaigns, ads, and growth strategies for your business."},
      {role:"manager", text:"What's your name?"},
    ],
    social:[
      {role:"manager", text:"Hello. 👋"},
      {role:"manager", text:"I am your Social Media Manager."},
      {role:"manager", text:"I handle content, posting strategy, and audience growth."},
      {role:"manager", text:"What's your name?"},
    ],
    automation:[
      {role:"manager", text:"Hello. 👋"},
      {role:"manager", text:"I am your Automation Manager."},
      {role:"manager", text:"I build workflows, bots, and automated systems for your business."},
      {role:"manager", text:"What's your name?"},
    ],
  }
  return intros[manager] || [
    {role:"manager", text:"Hello. 👋"},
    {role:"manager", text:"I am your AI Manager."},
    {role:"manager", text:"What's your name?"},
  ]
}

async function send(){
  if(!input) return

  const userMessage = {role:"user", text:input}
  setMessages(prev=>[...prev, userMessage])
  setInput("")

  const res = await fetch("/api/run-manager",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      message:input,
      manager:params.id
    })
  })

  const data = await res.json()

  setMessages(prev=>[
    ...prev,
    {role:"manager", text:data.reply}
  ])

  if(data.team){
    setTeam(data.team)
  }
}

return(
<div className="max-w-2xl mx-auto p-6 text-white">

  <h1 className="text-2xl mb-6 capitalize">{params.id} Manager</h1>

  <div className="space-y-3">
  {messages.map((m,i)=>(
    <div
      key={i}
      className={m.role==="manager"
        ?"bg-purple-900 p-3 rounded-lg max-w-sm"
        :"bg-zinc-800 p-3 rounded-lg max-w-sm ml-auto text-right"}
    >
      <p className="text-sm">{m.text}</p>
    </div>
  ))}
  </div>

  <div className="flex gap-3 mt-6">
    <input
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      onKeyDown={(e)=>e.key==="Enter" && send()}
      placeholder="Type your message..."
      className="flex-1 bg-zinc-900 border border-zinc-700 p-3 rounded"
    />
    <button
      onClick={send}
      className="bg-purple-600 px-6 rounded"
    >
      Send
    </button>
  </div>

  {team.length > 0 && (
    <div className="mt-10">
      <h2 className="text-xl mb-4">Your AI Team</h2>
      <div className="grid grid-cols-2 gap-4">
      {team.map((agent,i)=>(
        <div key={i} className="bg-zinc-900 border border-zinc-700 p-4 rounded-lg">
          <p className="font-bold">{agent.name}</p>
          <p className="text-sm text-gray-400">{agent.role}</p>
        </div>
      ))}
      </div>
    </div>
  )}

</div>
)
}
