import { useEffect, useState } from "react";
import { useAboutService } from "../services/PortfolioServices/aboutService";

export const useAboutData = () => {
  const { fetchProfile, fetchResume } = useAboutService();
  const [state, setState] = useState({
    profile: null,
    resume: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        const [profileData, resumeData] = await Promise.all([
          fetchProfile(),
          fetchResume(),
        ]);
        if (isMounted) {
          setState({
            profile: profileData,
            resume: resumeData,
            loading: false,
            error: null,
          });
        }
      } catch (err) {
        if (isMounted) {
          setState(prev => ({
            ...prev,
            loading: false,
            error: err,
          }));
        }
      }
    };

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  return state;
};
