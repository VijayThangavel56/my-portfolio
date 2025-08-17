// src/services/DashboardServices/useResumeService.js
import { useApi } from "../../hooks/useApi";

export const useResumeService = () => {
  const api = useApi();

  const uploadResume = async (updatedResume) => {
    return await api.put("/resume", updatedResume);
  };

  return { uploadResume };
};
