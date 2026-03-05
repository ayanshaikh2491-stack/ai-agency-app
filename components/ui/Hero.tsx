import ChatUI from "./ChatUI"

export default function Hero(){

  return(

    <section className="max-w-6xl mx-auto px-6 py-28 text-center">

      <h1 className="text-6xl font-bold text-white leading-tight">
        Build Your AI Execution Team
      </h1>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Describe the team you need and our AI manager will assemble the right specialists for your business.
      </p>

      <div className="mt-14">
        <ChatUI/>
      </div>

    </section>

  )

}
