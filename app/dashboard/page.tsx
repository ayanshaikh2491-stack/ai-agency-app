import Sidebar from "@/components/ui/dashboard/Sidebar";
import Stats from "@/components/ui/dashboard/Stats";
import ProjectCard from "@/components/ui/dashboard/ProjectCard";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-8">
          Agency Dashboard
        </h1>

        {/* Stats Section */}
        <Stats />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <ProjectCard name="Client A" status="Active" />
          <ProjectCard name="Client B" status="Pending" />
          <ProjectCard name="Client C" status="Completed" />
        </div>

      </div>
    </div>
  );
}
