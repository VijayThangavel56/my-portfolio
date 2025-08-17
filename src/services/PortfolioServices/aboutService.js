import { useApi } from "../../hooks/useApi";

export const useAboutService = () => {
  const api = useApi();

  const fetchProfile = async () => {
    return await api.get("/profile"); // returns data directly
  };

  const fetchResume = async () => {
    const response = await api.get("/resume");
    return response?.file || null; // assuming { "file": "resume.pdf" }
  };

  const downloadResume = (resumeUrl) => {
    if (!resumeUrl) return;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return { fetchProfile, fetchResume, downloadResume };
};
