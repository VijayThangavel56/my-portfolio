import React, { useState,useEffect } from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
import { LogOut, User, PlusSquare, Folder, FileText, X } from "lucide-react";
import { toast } from "react-toastify";

const sessionStore = {
  getItem: (key) => sessionStorage.getItem(key),
  setItem: (key, value) => sessionStorage.setItem(key, value),
  removeItem: (key) => sessionStorage.removeItem(key),
};

function Dashboard() {
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

    // 1. Convert file to Base64
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result; // "data:application/pdf;base64,..."

      // 2. Prepare data to save in JSON server
      const updatedResume = {
        file: base64String,
        lastUpdated: new Date().toISOString(),
      };

      // 3. Save to JSON server
      await fetch("http://localhost:5000/resume", {
        method: "PUT", // or POST if creating
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedResume),
      });

      setUploadProgress(100);
      setUploadStatus("Upload successful!");
      toast.success("Resume saved successfully!");

      setTimeout(() => {
        setIsResumeModalOpen(false);
        setUploadStatus(null);
        setUploadProgress(0);
      }, 1500);
    };

    reader.readAsDataURL(resumeFile); // start reading file
  } catch (error) {
    console.error("Error saving resume:", error);
    setUploadStatus("Upload failed. Please try again.");
    toast.error("Failed to save resume");
  }
};

  

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-300">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-slate-900 border-b border-slate-800 shadow-md">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-sky-400 mb-4 md:mb-0">
          Dashboard
        </h1>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
          <NavLink
            to="personal-info"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                isActive
                  ? "bg-sky-600 text-white"
                  : "bg-slate-700 hover:bg-slate-600 text-slate-300"
              }`
            }
          >
            <User size={20} /> <span className="hidden sm:inline">Personal Info</span>
          </NavLink>

          <NavLink
            to="addskills"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                isActive
                  ? "bg-sky-600 text-white"
                  : "bg-slate-700 hover:bg-slate-600 text-slate-300"
              }`
            }
          >
            <PlusSquare size={20} /> <span className="hidden sm:inline">Add Skill</span>
          </NavLink>

          <NavLink
            to="addprojects"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
                isActive
                  ? "bg-sky-600 text-white"
                  : "bg-slate-700 hover:bg-slate-600 text-slate-300"
              }`
            }
          >
            <Folder size={20} /> <span className="hidden sm:inline">Add Project</span>
          </NavLink>

          <button
            onClick={() => setIsResumeModalOpen(true)}
            className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300"
          >
            <FileText size={20} /> <span className="hidden sm:inline">Upload Resume</span>
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg font-semibold bg-red-600 hover:bg-red-700 text-white transition-colors duration-300"
          >
            <LogOut size={20} /> <span className="hidden sm:inline">Log Out</span>
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <Outlet />
      </main>

      {/* Resume Upload Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-xl shadow-2xl border border-slate-700 w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b border-slate-700">
              <h3 className="text-xl font-semibold text-white">Upload Resume</h3>
              <button
                onClick={() => {
                  setIsResumeModalOpen(false);
                  setUploadStatus(null);
                  setUploadProgress(0);
                }}
                className="text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleResumeUpload} className="p-6">
              <div className="mb-6">
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  Select PDF File
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="block w-full text-sm text-slate-400
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-lg file:border-0
                    file:text-sm file:font-semibold
                    file:bg-slate-700 file:text-slate-300
                    hover:file:bg-slate-600"
                />
                {resumeFile && (
                  <p className="mt-2 text-sm text-slate-400">
                    Selected: {resumeFile.name}
                  </p>
                )}
              </div>

              {uploadProgress > 0 && (
                <div className="mb-4">
                  <div className="w-full bg-slate-700 rounded-full h-2.5">
                    <div
                      className="bg-sky-500 h-2.5 rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-right text-xs text-slate-400 mt-1">
                    {uploadProgress}%
                  </p>
                </div>
              )}

              {uploadStatus && (
                <p
                  className={`mb-4 text-sm ${
                    uploadStatus === "Upload successful!"
                      ? "text-green-400"
                      : "text-rose-400"
                  }`}
                >
                  {uploadStatus}
                </p>
              )}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsResumeModalOpen(false);
                    setUploadStatus(null);
                    setUploadProgress(0);
                  }}
                  className="px-4 py-2 rounded-lg font-medium text-slate-300 bg-slate-700 hover:bg-slate-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!resumeFile || uploadStatus === "Uploading..."}
                  className={`px-4 py-2 rounded-lg font-medium text-white transition-colors ${
                    !resumeFile || uploadStatus === "Uploading..."
                      ? "bg-sky-700 cursor-not-allowed"
                      : "bg-sky-600 hover:bg-sky-700"
                  }`}
                >
                  {uploadStatus === "Uploading..." ? "Uploading..." : "Upload"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;