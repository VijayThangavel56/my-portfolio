const ProjectModal = ({ isOpen, onClose, project, onFormChange,onFileChange, onSubmit, modalType }) => {
  if (!isOpen) return null;

  const isUpdate = modalType === "update";
  const modalTitle = isUpdate ? "Update Project" : "Add Project";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-slate-800 p-6 rounded-xl shadow-2xl max-w-lg w-full">
        <h3 className="text-xl font-bold text-white mb-4">{modalTitle}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            type="text"
            name="title"
            placeholder="Project Title"
            value={project.title}
            onChange={onFormChange}
            className="w-full p-3 rounded-lg border border-slate-700 bg-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <textarea
            required
            name="description"
            placeholder="Project Description"
            value={project.description}
            onChange={onFormChange}
            className="w-full p-3 rounded-lg border border-slate-700 bg-slate-700 text-white placeholder-slate-500 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
           {/* Image Upload (File Input) */}
          <div>
            <label className="block text-slate-300 mb-1">Upload Project Image</label>
            <input
              type="file"
              name="imageFile"
              accept="image/*"
              onChange={onFileChange}
              className="w-full text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg 
                         file:border-0 file:text-sm file:font-semibold
                         file:bg-fuchsia-600 file:text-white
                         hover:file:bg-fuchsia-700 cursor-pointer"
            />
            {/* Show preview if exists */}
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt="Preview"
                className="mt-3 rounded-lg max-h-40 object-contain border border-slate-700"
              />
            )}
          </div>
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma-separated, e.g., React, .NET Core)"
            value={project.tags}
            onChange={onFormChange}
            className="w-full p-3 rounded-lg border border-slate-700 bg-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <input
            type="text"
            name="link"
            placeholder="Project Link"
            value={project.link}
            onChange={onFormChange}
            className="w-full p-3 rounded-lg border border-slate-700 bg-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="featured"
              checked={project.featured}
              onChange={onFormChange}
              className="h-4 w-4 text-fuchsia-500 border-slate-700 bg-slate-800 rounded focus:ring-fuchsia-500"
            />
            <label htmlFor="featured" className="text-slate-300">Featured Project</label>
          </div>
          <div className="flex justify-end space-x-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-700 font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
            >
              {isUpdate ? "Update Project" : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectModal;