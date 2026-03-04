export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Build Your AI Execution Team
      </h1>

      <p className="text-gray-400 max-w-xl mb-10">
        Describe your business problem and instantly generate an AI team
        that can execute marketing, research and growth.
      </p>

      <div className="flex w-full max-w-2xl bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden">

        <input
          className="flex-1 bg-transparent px-6 py-4 text-lg outline-none"
          placeholder="Example: I need a content marketing team for my startup..."
        />

        <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 font-semibold">
          Build
        </button>

      </div>

    </section>
  );
}
