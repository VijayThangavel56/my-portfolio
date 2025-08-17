import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { useSkillService } from "../../services/DashboardServices/useSkillsService";

const initialSkill = { name: "", icon: "" };

export const useSkillData = () => {
  const { fetchSkills, addSkill, updateSkill, deleteSkill } = useSkillService();
  const [skills, setSkills] = useState([]);
  const [modalState, setModalState] = useState({
    type: "",
    isOpen: false,
    skillData: initialSkill,
  });
  const [deleteState, setDeleteState] = useState({ isOpen: false, id: null });

  /* --- Fetch --- */
  const loadSkills = useCallback(async () => {
    try {
      const data = await fetchSkills();
      setSkills(data || []);
    } catch {
      toast.error("Failed to fetch skills.");
    }
  }, []);

  useEffect(() => {
    loadSkills();
  }, [loadSkills]);

  /* --- Form Handlers --- */
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setModalState((prev) => ({
      ...prev,
      skillData: { ...prev.skillData, [name]: value },
    }));
  };

  const openModal = (type, skill = initialSkill) =>
    setModalState({ type, isOpen: true, skillData: skill });

  const closeModal = () =>
    setModalState({ type: "", isOpen: false, skillData: initialSkill });

  const handleFormSubmit = async () => {
    const { type, skillData } = modalState;
    try {
      if (type === "add") {
        const created = await addSkill(skillData);
        setSkills((prev) => [...prev, created]);
        toast.success("Skill added successfully!");
      } else if (type === "update") {
        const updated = await updateSkill(skillData.id, skillData);
        setSkills((prev) =>
          prev.map((s) => (s.id === updated.id ? updated : s))
        );
        toast.success("Skill updated successfully!");
      }
      closeModal();
    } catch {
      toast.error(`Failed to ${type} skill.`);
    }
  };

  /* --- Delete Handlers --- */
  const handleDeleteClick = (id) => setDeleteState({ isOpen: true, id });

  const confirmDelete = async () => {
    try {
      await deleteSkill(deleteState.id);
      setSkills((prev) => prev.filter((s) => s.id !== deleteState.id));
      toast.success("Skill deleted successfully!");
    } catch {
      toast.error("Failed to delete skill.");
    } finally {
      setDeleteState({ isOpen: false, id: null });
    }
  };

  return {
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
  };
};
