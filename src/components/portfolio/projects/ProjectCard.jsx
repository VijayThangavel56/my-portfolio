// src/components/portfolio/projects/ProjectCard.jsx
import { ExternalLink } from "lucide-react";

 export const ProjectCard = ({ project, index }) => {
   if (!project) {
    return (
      <div className="bg-slate-900/50 rounded-2xl p-6 text-center">
        <p className="text-slate-400">Project data not available</p>
      </div>
    );
  }

  return (
    <div className={`group relative bg-slate-900/50 backdrop-blur rounded-2xl overflow-hidden border border-slate-700 hover:border-fuchsia-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/20 ${
      project.featured ? "md:col-span-2 lg:col-span-1" : ""
    }`}
    style={{
      animation: `fadeInUp 0.6s ease ${index * 0.1}s forwards`,
      opacity: 0,
    }}>
    {project.featured && (
      <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full text-xs font-bold">
        Featured
      </div>
    )}

    <div className="relative overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a
          href={project.link}
          className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-colors"
        >
          <ExternalLink className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>

    <div className="p-6 space-y-4">
      <h3 className="text-xl font-bold text-slate-200 group-hover:text-fuchsia-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-600 hover:border-fuchsia-400/50 hover:text-fuchsia-400 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);
};
