export default function PricingSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-400 mb-12">
          Choose the best plan for your business.
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* STARTER */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
            <h3 className="text-xl mb-2 text-gray-400">AI Manager</h3>
            <p className="text-4xl font-bold mb-6">₹9,999</p>

            <ul className="space-y-3 text-gray-400 mb-8 text-left">
              <li>✔ Strategy Planning</li>
              <li>✔ Content Automation</li>
              <li>✔ Monthly Reports</li>
              <li>✔ Email Support</li>
            </ul>

            <a
              href="/register"
              className="block w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl text-center"
            >
              Get Started →
            </a>
          </div>

          {/* PRO */}
          <div className="bg-zinc-900 border-2 border-purple-600 p-8 rounded-2xl relative">
            <span className="absolute top-4 right-4 bg-purple-600 text-xs px-3 py-1 rounded-full">
              Most Popular
            </span>

            <h3 className="text-xl mb-2 text-gray-400">AI Team</h3>
            <p className="text-4xl font-bold mb-6">₹19,999</p>

            <ul className="space-y-3 text-gray-400 mb-8 text-left">
              <li>✔ Multi AI Agents</li>
              <li>✔ Advanced Automation</li>
              <li>✔ Dedicated Manager</li>
              <li>✔ Priority Support</li>
            </ul>

            <a
              href="/register"
              className="block w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl text-center"
            >
              Get Started →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
