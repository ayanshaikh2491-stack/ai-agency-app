import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Build Your <span className="text-purple-500">AI Team</span>
            <br /> Not Just Another Tool.
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            We design AI Managers and AI Agents that automate your marketing,
            sales and operations — like a real digital team.
          </p>

          <div className="flex gap-4">
            <Link
              href="/pricing"
              className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl"
            >
              View Plans
            </Link>

            <button className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-zinc-900">
              Book Strategy Call
            </button>
          </div>
        </div>

        {/* MINI CHAT PREVIEW */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
          <p className="text-sm text-gray-400 mb-3">AI Manager</p>

          <div className="bg-black p-4 rounded-xl text-sm text-gray-300 mb-3">
            Generate 30 Instagram ideas for a gym business.
          </div>

          <div className="bg-purple-600/20 p-4 rounded-xl text-sm">
            Done. Creating high-converting content strategy...
          </div>
        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Our AI Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition">
            <h3 className="text-2xl font-semibold mb-4">AI Team Automation</h3>
            <p className="text-gray-400">
              Replace repetitive tasks with automated AI workflows.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-blue-500 transition">
            <h3 className="text-2xl font-semibold mb-4">AI Manager System</h3>
            <p className="text-gray-400">
              Your personal AI strategist for marketing & operations.
            </p>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-green-500 transition">
            <h3 className="text-2xl font-semibold mb-4">Custom AI Agents</h3>
            <p className="text-gray-400">
              Tailored AI solutions built specifically for your business.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
