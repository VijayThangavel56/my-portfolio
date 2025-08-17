// hooks/useDashboardData.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { useResumeService } from "../../services/DashboardServices/useResumeService";

const sessionStore = {
  getItem: (key) => sessionStorage.getItem(key),
  setItem: (key, value) => sessionStorage.setItem(key, value),
  removeItem: (key) => sessionStorage.removeItem(key),
};

export function useDashboardData() {
      const { uploadResume } = useResumeService();
  const navigate = useNavigate();
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleLogout = () => {
    sessionStore.removeItem("userId");
    navigate("/");
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleResumeUpload = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setUploadStatus("Please select a file first");
      return;
    }

    try {
      setUploadStatus("Uploading...");
      setUploadProgress(0);

      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result;

        const updatedResume = {
          file: base64String,
          lastUpdated: new Date().toISOString(),
        };

        await uploadResume(updatedResume);

        setUploadProgress(100);
        setUploadStatus("Upload successful!");
        toast.success("Resume saved successfully!");

        setTimeout(() => {
          setIsResumeModalOpen(false);
          setUploadStatus(null);
          setUploadProgress(0);
        }, 1500);
      };

      reader.readAsDataURL(resumeFile);
    } catch (error) {
      console.error("Error saving resume:", error);
      setUploadStatus("Upload failed. Please try again.");
      toast.error("Failed to save resume");
    }
  };

  return {
    isResumeModalOpen,
    setIsResumeModalOpen,
    resumeFile,
    handleFileChange,
    handleResumeUpload,
    uploadProgress,
    uploadStatus,
    setUploadStatus,
    setUploadProgress,
    handleLogout,
  };
}
