export default function HowItWorks(){

  const steps=[
    "Describe the team you need",
    "AI manager creates the team",
    "Agents execute tasks automatically"
  ]

  return(

    <section className="py-24 max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="grid md:grid-cols-3 gap-8 text-center">

        {steps.map((s,i)=>(
          <div key={i}>

            <div className="text-4xl font-bold mb-4">
              {i+1}
            </div>

            <p className="text-gray-400">{s}</p>

          </div>
        ))}

      </div>

    </section>
  )
}
