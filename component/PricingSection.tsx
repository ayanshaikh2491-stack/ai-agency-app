export default function PricingSection() {
  return (
    <section className="py-20 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl">
            Starter - ₹5,000
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl">
            Pro - ₹15,000
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl">
            Enterprise - Custom
          </div>
        </div>
      </div>
    </section>
  );
}
