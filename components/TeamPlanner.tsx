export default function TeamPlanner() {

  return (

    <section className="max-w-6xl mx-auto py-24 px-6">

      <h2 className="text-4xl font-bold mb-6">
        Build Your AI Execution Team
      </h2>

      <p className="text-gray-400 mb-10">
        Describe your goal and our AI manager assembles the perfect execution team.
      </p>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-semibold">AI Strategist</h3>
          <p className="text-sm text-gray-400">
            Plans your growth strategy
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-semibold">Content Creator</h3>
          <p className="text-sm text-gray-400">
            Creates viral content
          </p>
        </div>

      </div>

    </section>

  );

}
