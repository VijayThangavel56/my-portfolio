// src/hooks/useSkillsData.js
import { useEffect, useState } from "react";
import { useSkillsService } from "../services/PortfolioServices/skillsService";
 
export const useSkillsData = () => {
  const { fetchSkills } = useSkillsService();
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const skillsData = await fetchSkills();
        setSkills(skillsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  return { skills, loading, error };
};