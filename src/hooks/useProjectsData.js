// src/hooks/useProjectsData.js
import { useEffect, useState } from "react";
import { useProjectsService } from "../services/PortfolioServices/projectsService";

export const useProjectsData = () => {
  const { fetchProjects } = useProjectsService();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  return { projects, loading, error };
};