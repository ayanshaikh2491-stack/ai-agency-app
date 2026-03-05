export default function Benefits() {

  const benefits = [
    {
      title: "Build AI Teams Instantly",
      desc: "Generate specialized AI agents for any business task"
    },
    {
      title: "AI Manager Coordination",
      desc: "One AI manager controls the entire team"
    },
    {
      title: "Replace Freelancers",
      desc: "Automate marketing, research and content"
    },
    {
      title: "Scale Workflows",
      desc: "Run multiple projects simultaneously"
    }
  ]

  return (
    <section className="py-24 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-12">
        Why Use AI Execution Teams
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {benefits.map((b,i)=>(
          <div key={i} className="border border-zinc-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">{b.title}</h3>
            <p className="text-gray-400 mt-2">{b.desc}</p>
          </div>
        ))}

      </div>

    </section>
  )
}
