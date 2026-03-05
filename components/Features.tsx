export default function Features(){

  const features=[
    "AI Team Builder",
    "AI Manager Workflow",
    "47 Specialized Agents",
    "Real-time Execution",
    "Marketing Automation",
    "Research Automation"
  ]

  return(

    <section className="py-24 border-t border-zinc-800">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((f,i)=>(
            <div key={i} className="bg-zinc-900 p-6 rounded-xl">
              {f}
            </div>
          ))}

        </div>

      </div>

    </section>
  )

}
