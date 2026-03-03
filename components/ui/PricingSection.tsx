export default function PricingSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 mb-12">
          Choose a plan that fits your business growth goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Starter Plan */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-purple-500 transition">
            <h3 className="text-2xl font-semibold mb-4">Starter</h3>
            <p className="text-4xl font-bold mb-6">₹9,999</p>
            <ul className="space-y-3 text-gray-400 mb-8">
              <li>✔ 12 Posts / Month</li>
              <li>✔ Basic Content Strategy</li>
              <li>✔ Hashtag Research</li>
              <li>✔ Monthly Report</li>
            </ul>
            <button className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-semibold transition">
              Get Started
            </button>
          </div>

          {/* Growth Plan */}
          <div className="bg-zinc-900 p-8 rounded-2xl border-2 border-blue-500 scale-105">
            <h3 className="text-2xl font-semibold mb-4">Growth</h3>
            <p className="text-4xl font-bold mb-6">₹19,999</p>
            <ul className="space-y-3 text-gray-400 mb-8">
              <li>✔ 20 Posts / Month</li>
              <li>✔ Advanced Strategy</li>
              <li>✔ Content Calendar</li>
              <li>✔ Performance Optimization</li>
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition">
              Most Popular
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-green-500 transition">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-6">₹39,999</p>
            <ul className="space-y-3 text-gray-400 mb-8">
              <li>✔ Unlimited Content</li>
              <li>✔ Dedicated Manager</li>
              <li>✔ Paid Ads Strategy</li>
              <li>✔ Weekly Performance Calls</li>
            </ul>
            <button className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-xl font-semibold transition">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
