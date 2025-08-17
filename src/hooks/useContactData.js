// src/hooks/useContactData.js
import { useEffect, useState } from "react";
import { useContactService } from "../services/PortfolioServices/contactService";

export const useContactData = () => {
  const { fetchProfile } = useContactService();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const profileData = await fetchProfile();
        setProfile(profileData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  return { profile, loading, error };
};