export default function ServicesSection() {
  return (
    <section className="py-24 px-8 bg-slate-950 border-t border-slate-800">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Our Growth Services
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Structured organic systems that grow your brand,
          build authority and generate real sales.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* Service 1 */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-indigo-500 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4">
            Organic Growth Strategy
          </h3>
          <p className="text-slate-400 text-sm">
            Custom content roadmap, niche positioning and engagement model.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-indigo-500 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4">
            Content System
          </h3>
          <p className="text-slate-400 text-sm">
            Reels, Shorts and content formats designed for algorithm growth.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-indigo-500 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4">
            Sales & Conversion Flow
          </h3>
          <p className="text-slate-400 text-sm">
            Turn followers into buyers using funnel structure and DM systems.
          </p>
        </div>

      </div>
    </section>
  );
}
