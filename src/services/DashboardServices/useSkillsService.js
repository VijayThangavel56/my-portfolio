import { useApi } from "../../hooks/useApi";

 

export const useSkillService = () => {
  const api =useApi();

  const fetchSkills = async () => {
    return await api.get("/skills");
  };

  const addSkill = async (skill) => {
    return await api.post("/skills", skill);
  };

  const updateSkill = async (id, skill) => {
    return await api.put(`/skills/${id}`, skill);
  };

  const deleteSkill = async (id) => {
    return await api.del(`/skills/${id}`);
  };

  return { fetchSkills, addSkill, updateSkill, deleteSkill };
};
