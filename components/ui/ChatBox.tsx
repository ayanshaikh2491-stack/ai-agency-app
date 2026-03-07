"use client"

import { useState } from "react"

export default function ChatUI(){

const [message,setMessage] = useState("")
const [reply,setReply] = useState("")

async function send(){

if(!message) return

const res = await fetch("/api/run-manager",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify({message,manager:"website"})
})

const data = await res.json()

setReply(data.reply)

setMessage("")

}

return(

<div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Ask anything..."
className="w-full bg-black border border-zinc-700 p-3 rounded"
/>

<button
onClick={send}
className="bg-purple-600 mt-4 px-6 py-2 rounded"
>
Send
</button>

{reply && (
<p className="mt-4 text-gray-300">
{reply}
</p>
)}

</div>

)

}
