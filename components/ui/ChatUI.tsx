"use client"

import { useState } from "react"
import {
  Globe,
  Palette,
  Search,
  Settings,
  Megaphone,
  Instagram,
  Send,
  Plus
} from "lucide-react"

export default function ChatUI(){

const [message,setMessage] = useState("")
const [reply,setReply] = useState("")

async function sendMessage(){

if(!message) return

const res = await fetch("/api/chat",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body: JSON.stringify({ message })
})

const data = await res.json()

setReply(data.reply)

}

return(

<div className="w-full max-w-2xl mx-auto">

<div className="bg-gradient-to-b from-zinc-900 to-zinc-800 border border-zinc-700 rounded-3xl p-6 shadow-xl">

<input
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Ask anything..."
className="w-full bg-transparent text-white placeholder-gray-400 text-lg outline-none"
/>

<div className="flex items-center justify-between mt-5">

<div className="flex gap-3">

<button className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700">
<Plus size={18}/>
</button>

<button className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700">
<Globe size={18}/>
</button>

<button className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700">
<Palette size={18}/>
</button>

<button className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700">
<Search size={18}/>
</button>

<button className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700">
<Settings size={18}/>
</button>

<button className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700">
<Megaphone size={18}/>
</button>

<button className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700">
<Instagram size={18}/>
</button>

</div>

<button
onClick={sendMessage}
className="p-3 rounded-xl bg-purple-600 hover:bg-purple-700"
>
<Send size={18}/>
</button>

</div>

{reply && (

<div className="mt-6 text-gray-300">
Manager: {reply}
</div>

)}

</div>

</div>

)

}
