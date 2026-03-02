export default function Stats() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-slate-800 p-6 rounded-xl">
        <h4>Total Clients</h4>
        <p className="text-2xl font-bold mt-2">4</p>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl">
        <h4>Active Projects</h4>
        <p className="text-2xl font-bold mt-2">3</p>
      </div>

      <div className="bg-slate-800 p-6 rounded-xl">
        <h4>Leads</h4>
        <p className="text-2xl font-bold mt-2">12</p>
      </div>
    </div>
  );
}
