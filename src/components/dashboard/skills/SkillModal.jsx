import React from "react";

const SkillModal = ({ isOpen, onClose, skill, onFormChange, onSubmit, type }) => {
  if (!isOpen) return null;
  const isUpdate = type === "update";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div className="bg-slate-800 p-6 rounded-xl shadow-lg max-w-lg w-full">
        <h3 className="text-lg font-semibold text-white mb-4">
          {isUpdate ? "Update Skill" : "Add Skill"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Skill Name (e.g., React)"
            value={skill.name}
            onChange={onFormChange}
            className="w-full p-3 rounded-lg border border-slate-700 bg-slate-700 text-white focus:ring-2 focus:ring-fuchsia-500"
          />
          <textarea
            name="icon"
            placeholder="SVG Icon Code or Image URL"
            value={skill.icon}
            onChange={onFormChange}
            className="w-full p-3 rounded-lg border border-slate-700 bg-slate-700 text-white focus:ring-2 focus:ring-fuchsia-500 min-h-[100px]"
          />
          <div className="flex justify-end space-x-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-600 text-white rounded hover:bg-slate-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-fuchsia-600 text-white rounded hover:bg-fuchsia-700"
            >
              {isUpdate ? "Update Skill" : "Add Skill"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SkillModal;
