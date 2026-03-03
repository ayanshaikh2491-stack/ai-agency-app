export default function Pricing() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-16">
        Pricing Plans
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div className="border border-gray-800 rounded-xl p-8 bg-slate-900">
          <h3 className="text-xl font-bold mb-4">Starter</h3>
          <p className="text-3xl mb-6">₹5,000 / month</p>
        </div>

        <div className="border border-gray-800 rounded-xl p-8 bg-slate-900">
          <h3 className="text-xl font-bold mb-4">Pro</h3>
          <p className="text-3xl mb-6">₹15,000 / month</p>
        </div>

        <div className="border border-gray-800 rounded-xl p-8 bg-slate-900">
          <h3 className="text-xl font-bold mb-4">Enterprise</h3>
          <p className="text-3xl mb-6">Custom pricing</p>
        </div>

      </div>
    </main>
  )
}
