export default function ProjectCard({ name, status }: any) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">
        {name}
      </h3>

      <span className={`px-4 py-2 rounded-full text-sm ${
        status === "Active" ? "bg-green-600" : "bg-yellow-600"
      }`}>
        {status}
      </span>
    </div>
  );
}
