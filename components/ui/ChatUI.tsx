"use client"

import { Plus, Zap, Globe, Image, Code, Play, Mic, ArrowUp } from "lucide-react"

export default function ChatUI() {
  return (
    <div className="w-full max-w-3xl">

      <div className="bg-gradient-to-b from-[#1e1e1e] to-[#2a2a2a] backdrop-blur-md border border-zinc-700 rounded-[24px] p-6 shadow-xl">

        <input
          type="text"
          placeholder="Ask anything..."
          className="w-full bg-transparent text-gray-200 text-lg outline-none placeholder-gray-500"
        />

        <div className="flex items-center justify-between mt-6">

          <div className="flex gap-3">

            <IconBtn><Plus size={18}/></IconBtn>
            <IconBtn><Zap size={18}/></IconBtn>
            <IconBtn><Globe size={18}/></IconBtn>
            <IconBtn><Image size={18}/></IconBtn>
            <IconBtn><Code size={18}/></IconBtn>
            <IconBtn><Play size={18}/></IconBtn>

          </div>

          <div className="flex gap-3">

            <IconBtn><Mic size={18}/></IconBtn>

            <button className="bg-purple-600 hover:bg-purple-500 rounded-lg p-3">
              <ArrowUp size={18}/>
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

function IconBtn({children}:{children:any}) {
  return (
    <button className="bg-zinc-800 hover:bg-zinc-700 transition rounded-lg p-3">
      {children}
    </button>
  )
}
