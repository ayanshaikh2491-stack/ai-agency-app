export default function PricingSection() {
  return (
    <section className="relative bg-black text-white py-28 px-6 overflow-hidden">

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-6xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-400 mb-14">
          Choose the best plan for your needs
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Individuals */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-left">
            <h3 className="text-lg text-gray-400 mb-2">Individuals</h3>
            <p className="text-4xl font-bold mb-6">Free</p>

            <ul className="space-y-3 text-gray-400 mb-8">
              <li>✓ Free email alerts</li>
              <li>✓ 3-minute checks</li>
              <li>✓ Automatic enrichment</li>
              <li>✓ 10 monitors</li>
              <li>✓ Up to 3 seats</li>
            </ul>

            <a href="/auth" className="block w-full bg-white text-black text-center py-3 rounded-xl font-medium">
              Get started →
            </a>
          </div>

          {/* Teams */}
          <div className="bg-zinc-900 border-2 border-white p-8 rounded-2xl text-left relative shadow-2xl">
            <span className="absolute top-4 right-4 bg-orange-500 text-xs px-3 py-1 rounded-full">
              🔥 Most Popular
            </span>

            <h3 className="text-lg text-gray-400 mb-2">Teams</h3>
            <p className="text-4xl font-bold mb-1">US$90</p>
            <p className="text-sm text-gray-500 mb-6">Per month/user</p>

            <ul className="space-y-3 text-gray-400 mb-8">
              <li>✓ Unlimited phone calls</li>
              <li>✓ 30 second checks</li>
              <li>✓ Single-user account</li>
              <li>✓ 20 monitors</li>
              <li>✓ Up to 6 seats</li>
            </ul>

            <a href="/auth" className="block w-full bg-white text-black text-center py-3 rounded-xl font-medium">
              Get started →
            </a>
          </div>

          {/* Organizations */}
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-left">
            <h3 className="text-lg text-gray-400 mb-2">Organizations</h3>
            <p className="text-4xl font-bold mb-1">US$120</p>
            <p className="text-sm text-gray-500 mb-6">Per month/user</p>

            <ul className="space-y-3 text-gray-400 mb-8">
              <li>✓ Unlimited phone calls</li>
              <li>✓ 15 second checks</li>
              <li>✓ 50 monitors</li>
              <li>✓ Up to 10 seats</li>
            </ul>

            <a href="/auth" className="block w-full bg-white text-black text-center py-3 rounded-xl font-medium">
              Get started →
            </a>
          </div>

          {/* Enterprise */}
          <div className="bg-white text-black p-8 rounded-2xl text-left">
            <h3 className="text-lg text-gray-600 mb-2">Enterprise</h3>
            <p className="text-4xl font-bold mb-6">Custom</p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li>✓ Everything in Organizations</li>
              <li>✓ 100 monitors</li>
              <li>✓ 200+ integrations</li>
            </ul>

            <a href="/contact" className="block w-full bg-black text-white text-center py-3 rounded-xl font-medium">
              Contact Us →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
