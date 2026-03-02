import Sidebar from "@/components/dashboard/Sidebar";
import Stats from "@/components/dashboard/Stats";
import ProjectCard from "@/components/dashboard/ProjectCard";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-8">
          Internal Dashboard
        </h1>

        <Stats />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <ProjectCard name="ART&ZU" status="Active" />
          <ProjectCard name="Client Brand" status="Pending" />
        </div>
      </div>
    </div>
  );
}
