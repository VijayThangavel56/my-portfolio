import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectsSection = ({ projects }) => {
  return (
    <section id="projects" className="relative py-20 bg-slate-900 z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-fuchsia-400">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-slate-950 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-fuchsia-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block font-medium text-sky-400 hover:text-sky-500 transition-colors"
                >
                  View Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
