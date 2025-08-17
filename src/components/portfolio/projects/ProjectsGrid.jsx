// src/components/portfolio/projects/ProjectsGrid.jsx
import { ProjectCard } from "./ProjectCard";

export const ProjectsGrid = ({ projects = [] }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400">No projects found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard 
          key={project?.id || index} 
          project={project} 
          index={index} 
        />
      ))}
    </div>
  );
};