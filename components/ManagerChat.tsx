"use client"

import { useState } from "react"

export default function ManagerChat(){

const [message,setMessage] = useState("")
const [chat,setChat] = useState<any[]>([])

async function sendMessage(){

if(!message) return

const res = await fetch("/api/run-manager",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body: JSON.stringify({
message,
manager:"seo"
})

})

const data = await res.json()

const reply = data?.reply || "Manager failed to respond"

setChat([...chat,{user:message},{manager:reply}])

setMessage("")

}

return(

<div className="max-w-xl mx-auto">

<h2 className="text-2xl mb-4">Manager Chat</h2>

<div className="space-y-2 mb-6">

{chat.map((m,i)=>(

<div key={i}>

{m.user && <p><b>user:</b> {m.user}</p>}

{m.manager && <p><b>manager:</b> {m.manager}</p>}

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

</div>

)

}
