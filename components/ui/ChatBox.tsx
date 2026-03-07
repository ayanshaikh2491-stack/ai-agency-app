"use client"

import { useState } from "react"

export default function ChatUI() {

const [message,setMessage] = useState("")
const [messages,setMessages] = useState<any[]>([])

const sendMessage = async () => {

if(!message) return

setMessages([...messages,{role:"user",content:message}])

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

setMessages(prev => [
...prev,
{role:"manager",content:data.reply}
])

setMessage("")
}

return(

<div className="w-full max-w-3xl mx-auto">

<div className="bg-zinc-900 p-6 rounded-xl space-y-4">

{messages.map((m,i)=>(
<div key={i}
className={m.role==="user"
?"text-right text-gray-300"
:"text-left text-purple-400"}
>
{m.content}
</div>
))}

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Describe what you want to build..."
className="w-full bg-zinc-800 p-3 rounded-lg text-white"
/>

<button
onClick={sendMessage}
className="bg-purple-600 px-4 py-2 rounded-lg mt-2"
>
Send
</button>

</div>

</div>

)

  }
