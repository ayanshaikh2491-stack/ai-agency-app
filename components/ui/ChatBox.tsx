"use client"

import { useState } from "react"

export default function ChatUI(){

const [messages,setMessages] = useState<any[]>([])
const [input,setInput] = useState("")
const [loading,setLoading] = useState(false)

async function send(){

if(!input) return

const userMessage = {role:"user",text:input}

setMessages(prev=>[...prev,userMessage])
setInput("")
setLoading(true)

const res = await fetch("/api/run-manager",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({message:input})
})

const data = await res.json()

setMessages(prev=>[
...prev,
{role:"assistant",text:data.reply}
])

setLoading(false)

}

return(

<div className="max-w-2xl mx-auto">

<div className="space-y-3 mb-6">

{messages.map((m,i)=>(
<div
key={i}
className={
m.role==="assistant"
?"bg-purple-900 p-3 rounded"
:"bg-zinc-800 p-3 rounded text-right"
}
>
{m.text}
</div>
))}

</div>

<div className="flex gap-3">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Describe your business problem..."
className="flex-1 bg-zinc-900 border border-zinc-700 p-3 rounded"
/>

<button
onClick={send}
className="bg-purple-600 px-6 rounded"
>
{loading?"Thinking":"Send"}
</button>

</div>

</div>

)

}
