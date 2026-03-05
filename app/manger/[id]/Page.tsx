"use client"

import { useState,useEffect } from "react"

export default function ManagerPage({params}:{params:{id:string}}){

const [messages,setMessages] = useState<any[]>([])
const [input,setInput] = useState("")

useEffect(()=>{

const intro:any = {

website:"Hi, I'm your Website Manager. I can build or copy websites.",

seo:"Hi, I'm your SEO Manager. I help websites rank on Google.",

automation:"Hi, I'm your Automation Manager.",

marketing:"Hi, I'm your Marketing Manager.",

ads:"Hi, I'm your Facebook Ads Manager.",

social:"Hi, I'm your Social Media Manager."

}

setMessages([
{role:"manager",text:intro[params.id] || "Hello I'm your manager"}
])

},[])

function send(){

if(!input) return

setMessages([
...messages,
{role:"user",text:input},
{role:"manager",text:"Let me analyze your task and assign agents."}
])

setInput("")

}

return(

<div className="max-w-2xl mx-auto p-6 text-white">

<h1 className="text-xl mb-6">AI Manager</h1>

<div className="space-y-4">

{messages.map((m,i)=>(
<div key={i}>
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
className="bg-purple-600 px-5 rounded"
>
Send
</button>

</div>

</div>

)

}
