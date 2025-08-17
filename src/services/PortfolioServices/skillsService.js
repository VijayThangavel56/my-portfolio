// src/services/skillsService.js
import { useApi } from "../../hooks/useApi";

export const useSkillsService = () => {
  const api = useApi();

  const fetchSkills = async () => {
    const response = await api.get("/skills");
    return response || [];
  };

  return {
    fetchSkills
  };
};