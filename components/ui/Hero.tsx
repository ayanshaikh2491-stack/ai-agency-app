import ChatUI from "./ChatUI"

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">

      <h1 className="text-5xl font-bold leading-tight">
        Build Your AI Execution Team
      </h1>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Describe the team you need. Our AI manager builds and coordinates specialized agents to execute tasks automatically.
      </p>

      <div className="mt-12 flex justify-center">
        <ChatUI />
      </div>

    </section>
  )
}
