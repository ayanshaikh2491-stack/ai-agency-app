"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Send } from "lucide-react"

export default function ChatUI(){

const router = useRouter()

const [message,setMessage] = useState("")

const managers = [
{ id:"website", name:"Website Manager" },
{ id:"seo", name:"SEO Manager" },
{ id:"automation", name:"Automation Manager" },
{ id:"marketing", name:"Marketing Manager" },
{ id:"ads", name:"Facebook Ads Manager" },
{ id:"social", name:"Social Media Manager" }
]

function openManager(id:string){

router.push(`/manager/${id}`)

}

function startChat(){

if(!message.trim()) return

localStorage.setItem("firstMessage",message)

router.push("/manager/general")

}

return(

<div className="w-full max-w-2xl mx-auto">

<div className="bg-zinc-900 border border-zinc-700 rounded-3xl p-6">

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Ask anything..."
className="w-full bg-transparent text-white outline-none"
/>

<div className="flex justify-end mt-4">

<button
onClick={startChat}
className="bg-purple-600 p-3 rounded-xl"
>
<Send size={18}/>
</button>

</div>

</div>

{/* Manager Teams */}

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">

{managers.map((m)=>(

<div
key={m.id}
onClick={()=>openManager(m.id)}
className="cursor-pointer bg-zinc-900 border border-zinc-700 p-4 rounded-xl hover:bg-zinc-800"
>

<p className="text-white">{m.name}</p>

</div>

))}

</div>

</div>

)

}
