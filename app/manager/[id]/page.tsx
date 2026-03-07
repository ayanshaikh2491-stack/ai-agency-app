"use client"

import { useState } from "react"

export default function ManagerPage({params}:{params:{id:string}}){

const [messages,setMessages] = useState<any[]>([])
const [input,setInput] = useState("")
const [team,setTeam] = useState<any[]>([])

async function send(){

if(!input) return

const userMessage = {role:"user",text:input}

setMessages(prev=>[...prev,userMessage])

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
{role:"manager",text:data.reply}
])

if(data.team){
setTeam(data.team)
}

}

return(

<div className="max-w-2xl mx-auto p-6 text-white">

<h1 className="text-2xl mb-6 capitalize">
{params.id} Manager
</h1>

<div className="space-y-3">

{messages.map((m,i)=>(
<div
key={i}
className={m.role==="manager"
?"bg-purple-900 p-4 rounded"
:"bg-zinc-800 p-4 rounded"}
>
<strong>{m.role}:</strong> {m.text}
</div>
))}

</div>

<div className="flex gap-3 mt-6">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
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

<div
key={i}
className="bg-zinc-900 border border-zinc-700 p-4 rounded-lg"
>

<p className="font-bold">{agent.name}</p>

<p className="text-sm text-gray-400">
{agent.role}
</p>

<p className="text-xs text-gray-500 mt-2">
Hello, I will handle this part of the project.
</p>

</div>

))}

</div>

</div>

)}

</div>

)

}
