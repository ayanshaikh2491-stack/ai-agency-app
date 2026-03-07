"use client"

import { useState } from "react"

export default function ManagerPage({ params }: { params:{id:string}}){

const [messages,setMessages] = useState<any[]>([])
const [input,setInput] = useState("")

const intro:any = {
seo:"Hi, I'm your SEO Manager. My SEO team is ready to rank your website.",
website:"Hi, I'm your Website Manager. Our developers are ready to build your site.",
automation:"Hi, I'm your Automation Manager. Workflow team ready.",
marketing:"Hi, I'm your Marketing Manager. Campaign team ready.",
ads:"Hi, I'm your Ads Manager. Paid ads team ready.",
social:"Hi, I'm your Social Media Manager. Content team ready."
}

async function send(){

if(!input) return

const userMsg = {role:"user",text:input}

setMessages(prev=>[...prev,userMsg])

setInput("")

const res = await fetch("/api/run-manager",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
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

}

return(

<div className="max-w-3xl mx-auto p-8 text-white">

{/* Manager Header */}

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6">

<h1 className="text-2xl font-bold capitalize mb-2">
{params.id} Manager
</h1>

<p className="text-purple-400">
{intro[params.id]}
</p>

</div>

{/* Chat Messages */}

<div className="space-y-4 mb-6">

{messages.map((m,i)=>(
<div
key={i}
className={`p-3 rounded-lg max-w-xl ${
m.role==="user"
?"bg-zinc-800 ml-auto"
:"bg-purple-900/40"
}`}
>

<b>{m.role}:</b> {m.text}

</div>
))}

</div>

{/* Chat Input */}

<div className="flex gap-3">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
className="flex-1 bg-zinc-900 border border-zinc-700 p-3 rounded-lg"
placeholder="Type your message"
/>

<button
onClick={send}
className="bg-purple-600 px-6 rounded-lg"
>
Send
</button>

</div>

</div>

)

}
