"use client"

import { useState } from "react"
import { Send } from "lucide-react"

export default function ChatUI() {

  const [message,setMessage] = useState("")
  const [reply,setReply] = useState("")
  const [loading,setLoading] = useState(false)

  async function sendMessage(){

    if(!message.trim()) return

    try{

      setLoading(true)

      const res = await fetch("/api/run-manager",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({ message })
      })

      const data = await res.json()

      console.log("API Response:",data)

      setReply(data.reply)

      setMessage("")

    }catch(err){

      console.error("Send error:",err)

    }finally{

      setLoading(false)

    }

  }

  return (

    <div className="w-full max-w-xl mx-auto">

      <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6">

        <input
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==="Enter"){
              sendMessage()
            }
          }}
          placeholder="Ask anything..."
          className="w-full bg-transparent text-white outline-none"
        />

        <div className="flex justify-end mt-4">

          <button
            onClick={sendMessage}
            className="p-3 bg-purple-600 rounded-xl hover:bg-purple-700"
          >
            <Send size={18}/>
          </button>

        </div>

        {loading && (
          <p className="text-gray-400 mt-4">
            Manager thinking...
          </p>
        )}

        {reply && (
          <div className="mt-4 text-white">
            <strong>Manager:</strong> {reply}
          </div>
        )}

      </div>

    </div>

  )

}
