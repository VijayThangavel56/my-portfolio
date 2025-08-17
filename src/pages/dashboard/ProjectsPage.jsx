import { useState } from "react";
import { useProjectData } from "../../hooks/DashboardHooks/useProjectData";
import ProjectsTable from "../../components/dashboard/projects/ProjectsTable";
import ProjectModal from "../../components/dashboard/projects/ProjectModal";
import DeleteModal from "../../components/dashboard/projects/DeleteModal";

const initialProjectForm = {
  title: "",
  description: "",
  imageUrl: "",
  tags: "",
  link: "",
  featured: false,
};

function ProjectsPage() {
  const { projects, addProject, editProject, removeProject } = useProjectData();

  const [modalState, setModalState] = useState({
    type: "",
    isOpen: false,
    projectData: initialProjectForm,
  });
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setModalState((prev) => ({
      ...prev,
      projectData: {
        ...prev.projectData,
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const openModal = (type, projectData = initialProjectForm) => {
    setModalState({
      type,
      isOpen: true,
      projectData: {
        ...projectData,
        tags: Array.isArray(projectData.tags)
          ? projectData.tags.join(", ")
          : projectData.tags,
      },
    });
  };

  const closeModal = () =>
    setModalState({ type: "", isOpen: false, projectData: initialProjectForm });

  const handleFormSubmit = () => {
    debugger;
    const { type, projectData } = modalState;
    const formatted = {
      ...projectData,
      tags:
        typeof projectData.tags === "string"
          ? projectData.tags.split(",").map((t) => t.trim())
          : projectData.tags,
    };

    if (type === "add") addProject(formatted);
    if (type === "update") editProject(projectData.id, formatted);

    closeModal();
  };

  const handleDeleteClick = (id) => {
    setProjectToDelete(id);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    removeProject(projectToDelete);
    setDeleteModalOpen(false);
    setProjectToDelete(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setModalState((prev) => ({
      ...prev,
      projectData: { ...prev.projectData, imageUrl: file },
    }));
  };

  return (
    <main className="flex-grow bg-slate-950 min-h-screen font-inter">
   
        <div className="container mx-auto px-4 py-12">
          <ProjectsTable
            projects={projects}
            openModal={openModal}
            handleDeleteClick={handleDeleteClick}
          />
        </div>

        <ProjectModal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          project={modalState.projectData}
          onFormChange={handleFormChange}
          onFileChange={handleFileChange}
          onSubmit={handleFormSubmit}
          modalType={modalState.type}
        />

        <DeleteModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
    </main>
  );
}

export default ProjectsPage;
