"use client"

import { Layout, Search, Settings, Megaphone, Instagram } from "lucide-react"
import Link from "next/link"
import ChatUI from "./ChatBox"

export default function Hero(){

return(

<section className="max-w-6xl mx-auto px-6 py-24 text-center">

<h1 className="text-5xl md:text-6xl font-bold">
Build Your AI Execution Team
</h1>

<p className="text-gray-400 mt-6 max-w-2xl mx-auto">
Describe your business problem and our AI managers will assemble a team of AI agents to execute the work.
</p>

{/* CHAT BOX */}

<div className="mt-12">
<ChatUI/>
</div>

{/* MANAGER CARDS */}

<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-14">

<Link href="/manager/website" className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:bg-zinc-800">
<Layout size={20}/>
<p className="mt-2 text-sm">Website Manager</p>
</Link>

<Link href="/manager/seo" className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:bg-zinc-800">
<Search size={20}/>
<p className="mt-2 text-sm">SEO Manager</p>
</Link>

<Link href="/manager/automation" className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:bg-zinc-800">
<Settings size={20}/>
<p className="mt-2 text-sm">Automation Manager</p>
</Link>

<Link href="/manager/marketing" className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:bg-zinc-800">
<Megaphone size={20}/>
<p className="mt-2 text-sm">Marketing Manager</p>
</Link>

<Link href="/manager/social" className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:bg-zinc-800">
<Instagram size={20}/>
<p className="mt-2 text-sm">Social Media Manager</p>
</Link>

</div>

</section>

)

}
