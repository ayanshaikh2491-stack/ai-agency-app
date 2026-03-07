"use client"

import ChatUI from "./ChatBox"
import { Globe, Search, Settings, Megaphone, Instagram, Layout } from "lucide-react"
import Link from "next/link"

export default function Hero(){

return(
<section className="max-w-6xl mx-auto px-6 py-24 text-center">

  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
    Build Your AI Execution Team
  </h1>

  <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
    Describe your business problem and our AI managers will assemble a team of specialized AI agents to execute marketing, research, development and automation.
  </p>

  <p className="text-gray-500 mt-4 text-sm">
    Select a manager below to get started.
  </p>

  {/* MANAGER SELECTION */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-14">

    <Link href="/manager/website" className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:bg-purple-900 hover:border-purple-700 transition text-left">
      <Layout size={24} className="text-purple-400"/>
      <p className="mt-3 font-semibold">Website Manager</p>
      <p className="text-xs text-gray-400 mt-1">Build websites, platforms & ecommerce</p>
    </Link>

    <Link href="/manager/seo" className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:bg-purple-900 hover:border-purple-700 transition text-left">
      <Search size={24} className="text-purple-400"/>
      <p className="mt-3 font-semibold">SEO Manager</p>
      <p className="text-xs text-gray-400 mt-1">Rankings, keywords & organic growth</p>
    </Link>

    <Link href="/manager/automation" className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:bg-purple-900 hover:border-purple-700 transition text-left">
      <Settings size={24} className="text-purple-400"/>
      <p className="mt-3 font-semibold">Automation Manager</p>
      <p className="text-xs text-gray-400 mt-1">Workflows, bots & automated systems</p>
    </Link>

    <Link href="/manager/marketing" className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:bg-purple-900 hover:border-purple-700 transition text-left">
      <Megaphone size={24} className="text-purple-400"/>
      <p className="mt-3 font-semibold">Marketing Manager</p>
      <p className="text-xs text-gray-400 mt-1">Campaigns, ads & growth strategy</p>
    </Link>

    <Link href="/manager/social" className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:bg-purple-900 hover:border-purple-700 transition text-left">
      <Instagram size={24} className="text-purple-400"/>
      <p className="mt-3 font-semibold">Social Media Manager</p>
      <p className="text-xs text-gray-400 mt-1">Content, posting & audience growth</p>
    </Link>

  </div>

  {/* STATS */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 text-center">
    <div>
      <p className="text-3xl font-bold">47</p>
      <p className="text-gray-400 text-sm mt-1">AI Agents</p>
    </div>
    <div>
      <p className="text-3xl font-bold">5</p>
      <p className="text-gray-400 text-sm mt-1">AI Managers</p>
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
