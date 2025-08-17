// src/services/projectsService.js
import { useApi } from "../../hooks/useApi";

export const useProjectsService = () => {
  const api= useApi();

  const fetchProjects = async () => {
    const response = await api.get("/projects");
    return response || [];
  };

  return {
    fetchProjects
  };
};