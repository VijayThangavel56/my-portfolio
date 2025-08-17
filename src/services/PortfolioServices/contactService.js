// src/services/contactService.js
import { useApi } from "../../hooks/useApi";

export const useContactService = () => {
  const api= useApi();

  const fetchProfile = async () => {
    const response = await api.get("/profile");
    return response;
  };

  return {
    fetchProfile
  };
};