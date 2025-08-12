import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return <div className="text-center text-red-400 py-20">Project not found</div>;
  }

  return (
    <motion.div
      className="min-h-screen bg-slate-900 text-slate-200 py-12 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-5xl">
        <Link
          to="/#projects"
          className="text-sky-400 hover:text-sky-500 mb-6 inline-block"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-bold text-fuchsia-400 mb-4">
          {project.title}
        </h1>
        <p className="text-lg mb-8">{project.fullDescription}</p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {project.gallery.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt=""
              className="rounded-lg cursor-pointer hover:scale-105 transition"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.img
              src={selectedImage}
              alt=""
              className="max-h-[80%] max-w-[90%] rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            />
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
