import { useProjectsData } from "../../hooks/useProjectsData";
import { ProjectsGrid } from "./projects/ProjectsGrid";

export default function Projects() {
  const { projects, loading, error } = useProjectsData();

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {loading && <div className="text-center">Loading projects...</div>}
        {error && <div className="text-red-500 text-center">Error loading projects</div>}
        {!loading && !error && <ProjectsGrid projects={projects} />}
 
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </section>
  );
}