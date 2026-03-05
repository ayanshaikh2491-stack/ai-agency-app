import ChatBox from "./ChatBox"

export default function Hero(){

  return(

    <section className="py-20 text-center">

      <h1 className="text-4xl font-bold">
        Build Your AI Execution Team
      </h1>

      <p className="mt-4 text-gray-400">
        Describe the team you need. Our AI manager builds agents automatically.
      </p>

      <div className="mt-12">
        <ChatBox />
      </div>

    </section>

  )

}
