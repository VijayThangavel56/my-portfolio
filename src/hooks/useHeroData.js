// src/hooks/useHeroData.js
import { useEffect, useState } from "react";
import { useHeroService } from "../services/PortfolioServices/heroService";

export const useHeroData = () => {
  const { fetchProfile } = useHeroService();
  const [profileName, setProfileName] = useState(null);
  const[profileImage,setProfileImage]=useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchProfile();
        setProfileName(data.name);
        setProfileImage(data.profileImage);
      } catch (err) {
        setError(err.message || "Failed to load hero data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
   return { profileName,profileImage, loading, error };
};
