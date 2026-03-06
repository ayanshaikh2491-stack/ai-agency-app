"use client"

import { useState } from "react"

export default function ManagerEngine(){

const [message,setMessage] = useState("")
const [chat,setChat] = useState<any[]>([])
const [team,setTeam] = useState<string[]>([])
const [manager,setManager] = useState("website")

async function sendMessage(){

if(!message) return

const res = await fetch("/api/run-manager",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
message,
manager
})
})

const data = await res.json()

setChat(prev=>[
...prev,
{user:message},
{manager:data.reply}
])

setTeam(data.team || [])

setMessage("")
}

return(

<div className="max-w-xl mx-auto">

<h2 className="text-2xl mb-4">Manager Chat</h2>

<div className="flex gap-2 mb-4 flex-wrap">

{["website","automation","marketing","design","research","operations"].map((m)=>(
<button
key={m}
onClick={()=>setManager(m)}
className={`px-3 py-1 border ${manager===m?"border-purple-600":""}`}
>
{m}
</button>
))}

</div>

<div className="space-y-2 mb-6">

{chat.map((m,i)=>(
<div key={i}>
{m.user && <p><b>User:</b> {m.user}</p>}
{m.manager && <p><b>Manager:</b> {m.manager}</p>}
</div>
))}

</div>

<div className="flex gap-2">

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
className="flex-1 bg-gray-900 p-2"
placeholder="Type message"
/>

<button
onClick={sendMessage}
className="bg-purple-600 px-4 py-2"
>
Send
</button>

</div>

<div className="grid grid-cols-3 gap-4 mt-8">

{team.map((agent,i)=>(
<div key={i} className="border p-3 text-center">
<p>{agent}</p>
<p className="text-xs text-gray-400">Ready for work</p>
</div>
))}

</div>

</div>

)

}
