export default function AgentsPreview(){

  const agents=[
    "Research AI",
    "SEO AI",
    "Content AI",
    "Growth AI",
    "Ads AI",
    "Strategy AI"
  ]

  return(

    <section className="py-24 border-t border-zinc-800">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Your AI Team
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {agents.map((a,i)=>(
            <div key={i} className="bg-zinc-900 p-6 rounded-xl text-center">

              <div className="text-4xl mb-3">
                🤖
              </div>

              {a}

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}
