"use client"

import ChatUI from "./ChatUI"
import { Globe, Search, Settings, Megaphone, Instagram, Layout } from "lucide-react"
import Link from "next/link"

export default function Hero() {

  return (

    <section className="max-w-6xl mx-auto px-6 py-24 text-center">

      <h1 className="text-5xl font-bold leading-tight">
        Build Your AI Execution Team
      </h1>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Describe what you need. Our AI managers will build the right team for your business.
      </p>

      {/* Chat UI */}
      <div className="mt-10">
        <ChatUI />
      </div>

      {/* 6 Managers */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">

        <Link href="/manager/website" className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-purple-500 flex items-center gap-3">
          <Layout size={20}/>
          Website Manager
        </Link>

        <Link href="/manager/seo" className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-purple-500 flex items-center gap-3">
          <Search size={20}/>
          SEO Manager
        </Link>

        <Link href="/manager/automation" className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-purple-500 flex items-center gap-3">
          <Settings size={20}/>
          Automation Manager
        </Link>

        <Link href="/manager/marketing" className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-purple-500 flex items-center gap-3">
          <Megaphone size={20}/>
          Marketing Manager
        </Link>

        <Link href="/manager/ads" className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-purple-500 flex items-center gap-3">
          <Globe size={20}/>
          Facebook Ads Manager
        </Link>

        <Link href="/manager/social" className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 hover:border-purple-500 flex items-center gap-3">
          <Instagram size={20}/>
          Social Media Manager
        </Link>

      </div>

    </section>

  )

}
