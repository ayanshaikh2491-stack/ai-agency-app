"use client"

import ChatUI from "./ChatBox"
import { Globe, Search, Settings, Megaphone, Instagram, Layout } from "lucide-react"
import Link from "next/link"

export default function Hero(){

return(

<section className="max-w-6xl mx-auto px-6 py-24 text-center">

{/* TITLE */}

<h1 className="text-5xl md:text-6xl font-bold leading-tight">

Build Your AI Execution Team

</h1>

<p className="text-gray-400 mt-6 max-w-2xl mx-auto">

Describe your business problem and our AI managers will assemble a team of specialized AI agents to execute marketing, research, development and automation.

</p>


{/* AI MANAGER INTRO */}

<div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-left max-w-3xl mx-auto">

<p className="text-purple-400 font-semibold mb-2">

AI Website Manager

</p>

<p className="text-gray-300 text-sm leading-relaxed">

Hello.

My name is Arjun Mehta.

I am the Website Development Manager of this AI execution team.

My responsibility is to understand your business idea, product or problem and coordinate the correct AI agents to execute the work.

Our agency operates with a system of specialized AI agents responsible for development, marketing, automation, research and content.

Tell me what you want to build or improve and I will assemble the right AI team.

</p>

</div>


{/* CHAT INTERFACE */}

<div className="mt-10">

<ChatUI/>

</div>


{/* MANAGER SELECTION */}

<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-14">

<Link href="/manager/website" className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:bg-zinc-800 transition">

<Layout size={20}/>

<p className="mt-2 text-sm">Website Manager</p>

</Link>


<Link href="/manager/seo" className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:bg-zinc-800 transition">

<Search size={20}/>

<p className="mt-2 text-sm">SEO Manager</p>

</Link>


<Link href="/manager/automation" className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:bg-zinc-800 transition">

<Settings size={20}/>

<p className="mt-2 text-sm">Automation Manager</p>

</Link>


<Link href="/manager/marketing" className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:bg-zinc-800 transition">

<Megaphone size={20}/>

<p className="mt-2 text-sm">Marketing Manager</p>

</Link>


<Link href="/manager/social" className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl hover:bg-zinc-800 transition">

<Instagram size={20}/>

<p className="mt-2 text-sm">Social Media Manager</p>

</Link>

</div>


{/* STATS */}

<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 text-center">

<div>
<p className="text-3xl font-bold">47</p>
<p className="text-gray-400 text-sm mt-1">AI Agents</p>
</div>

<div>
<p className="text-3xl font-bold">1</p>
<p className="text-gray-400 text-sm mt-1">AI Manager</p>
</div>

<div>
<p className="text-3xl font-bold">10x</p>
<p className="text-gray-400 text-sm mt-1">Execution Speed</p>
</div>

<div>
<p className="text-3xl font-bold">24/7</p>
<p className="text-gray-400 text-sm mt-1">Automation</p>
</div>

</div>

</section>

)

  }
