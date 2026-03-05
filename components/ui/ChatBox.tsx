"use client"

import { useState } from "react"

export default function ChatBox(){

const [message,setMessage] = useState("")
const [team,setTeam] = useState<any[]>([])

async function buildTeam(){

const res = await fetch("/api/manager",{
method:"POST",
body:JSON.stringify({prompt:message})
})

const data = await res.json()

setTeam(data.team)

}

return(

<div>

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Describe your AI team..."
className="w-full p-3 rounded bg-zinc-800"
/>

<button
onClick={buildTeam}
className="mt-4 bg-purple-600 px-6 py-2 rounded"
>
Build AI Team
</button>


<div className="mt-8">

{team.map((m,i)=>(

<div key={i} className="bg-zinc-900 p-6 rounded-xl mb-6">

<h3 className="text-xl font-bold">{m.name}</h3>

<p className="text-purple-400">{m.role}</p>

<p className="text-gray-400 text-sm">
Department: {m.department}
</p>

<p className="mt-3">{m.intro}</p>

<div className="mt-4">

<p className="font-semibold mb-2">Agents</p>

<ul className="text-gray-400">

{m.agents.map((a:any,j:number)=>(
<li key={j}>• {a}</li>
))}

</ul>

</div>

</div>

))}

</div>

</div>

)

}
