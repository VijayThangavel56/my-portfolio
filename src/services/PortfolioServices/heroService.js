// src/services/heroService.js
import { useApi } from "../../hooks/useApi";

export const useHeroService = () => {
  const api = useApi();

  // Fetch full profile instead of just name → scalable later
  const fetchProfile = async () => {
    const response = await api.get("/profile");
    return response || null; // Return entire profile object
  };

  return {
    fetchProfile
  };
};
