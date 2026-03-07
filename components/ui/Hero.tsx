"use client"

import ChatUI from "./ChatBox"
import { Globe, Search, Settings, Megaphone, Instagram, Layout } from "lucide-react"
import Link from "next/link"

export default function Hero() {

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">

      <h1 className="text-5xl font-bold leading-tight">
        Build Your AI Execution Team
      </h1>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Describe what you need. Our AI managers will build the right team for your business.
      </p>


      {/* Manager Introduction */}

      <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-left max-w-2xl mx-auto">

        <p className="text-purple-400 font-semibold mb-2">
          AI Website Manager
        </p>

        <p className="text-gray-300 text-sm leading-relaxed">
          Hello sir, my name is Alex. I am the website manager of this AI execution team.

          My role is to understand your business idea, product, or problem and coordinate
          the right AI agents to execute the work.

          I manage a team of specialized agents including marketing, research, automation,
          development, and social media agents.

          Just tell me what you want to build, automate, or grow,
          and I will assemble the right AI team to help you.
        </p>

      </div>


      {/* Chat UI */}

      <div className="mt-10">
        <ChatUI />
      </div>


      {/* Managers */}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-14">

        <Link href="/manager/website" className="bg-zinc-900 p-4 rounded-xl flex items-center gap-2 justify-center">
          <Layout size={20}/>
          Website Manager
        </Link>

        <Link href="/manager/seo" className="bg-zinc-900 p-4 rounded-xl flex items-center gap-2 justify-center">
          <Search size={20}/>
          SEO Manager
        </Link>

        <Link href="/manager/automation" className="bg-zinc-900 p-4 rounded-xl flex items-center gap-2 justify-center">
          <Settings size={20}/>
          Automation Manager
        </Link>

        <Link href="/manager/marketing" className="bg-zinc-900 p-4 rounded-xl flex items-center gap-2 justify-center">
          <Megaphone size={20}/>
          Marketing Manager
        </Link>

        <Link href="/manager/add" className="bg-zinc-900 p-4 rounded-xl flex items-center gap-2 justify-center">
          <Globe size={20}/>
          Facebook Ads Manager
        </Link>

        <Link href="/manager/social" className="bg-zinc-900 p-4 rounded-xl flex items-center gap-2 justify-center">
          <Instagram size={20}/>
          Social Media Manager
        </Link>

      </div>

    </section>
  )

        }
