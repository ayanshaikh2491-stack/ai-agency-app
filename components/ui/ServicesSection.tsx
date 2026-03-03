export default function ServicesSection() {
  return (
    <section className="py-20 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 p-6 rounded-xl">
            Social Media Growth
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl">
            SEO Optimization
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl">
            Website Development
          </div>
        </div>
      </div>
    </section>
  );
}
