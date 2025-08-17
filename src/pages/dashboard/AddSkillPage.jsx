import { BiPencil, BiTrash, BiPlus } from "react-icons/bi";
import SkillModal from "../../components/dashboard/skills/SkillModal";
import ConfirmModal from "../../components/dashboard/skills/ConfirmModal";
import { useSkillData } from "../../hooks/DashboardHooks/useSkillData";
import SkillsGrid from "../../components/dashboard/skills/SkillsGrid";

function AddSkillPage() {
  const {
    skills,
    modalState,
    deleteState,
    setDeleteState,
    handleFormChange,
    openModal,
    closeModal,
    handleFormSubmit,
    handleDeleteClick,
    confirmDelete,
  } = useSkillData();
  console.log(skills);
  return (
    <main className="flex-grow min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-950">
      <section className="w-full max-w-4xl">
        {/* Add Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={() => openModal("add")}
            className="flex items-center space-x-2 bg-gradient-to-r from-fuchsia-600 to-cyan-600 hover:from-fuchsia-700 hover:to-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg"
          >
            <BiPlus size={20} />
            <span>Add Skill</span>
          </button>
        </div>
        <div className="bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
          <div className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 p-10">
            <h2 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-md">
            My Skills & Expertise
            </h2>
            <p className="text-fuchsia-100 mt-2 text-lg font-light">
    Highlighting the technologies and tools I excel at to deliver high-quality projects.
            </p>
          </div>
       
        <div className="container mx-auto px-4 py-12">
          <SkillsGrid
            skills={skills}
            openModal={openModal}
            handleDeleteClick={handleDeleteClick}
          />
        </div>

        <SkillModal
          isOpen={modalState.isOpen}
          onClose={closeModal}
          skill={modalState.skillData}
          onFormChange={handleFormChange}
          onSubmit={handleFormSubmit}
          type={modalState.type}
        />

        <ConfirmModal
          isOpen={deleteState.isOpen}
          onClose={() => setDeleteState({ isOpen: false, id: null })}
          onConfirm={confirmDelete}
          message="Are you sure you want to delete this skill?"
        />
         </div>
      </section>
    </main>
  );
}

export default AddSkillPage;
