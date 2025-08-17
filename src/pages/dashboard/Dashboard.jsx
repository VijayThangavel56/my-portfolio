import React from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
import { LogOut, User, PlusSquare, Folder, FileText } from "lucide-react";
import ResumeUploadModal from "../../components/dashboard/Resume/ResumeUploadModal";
import { useDashboardData } from "../../hooks/DashboardHooks/useDashboardData";

function Dashboard() {
  const {
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
  } = useDashboardData();

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-300">
      {/* Header */}
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


      {/* Modal */}
      <ResumeUploadModal
        isOpen={isResumeModalOpen}
        onClose={() => {
          setIsResumeModalOpen(false);
          setUploadStatus(null);
          setUploadProgress(0);
        }}
        resumeFile={resumeFile}
        handleFileChange={handleFileChange}
        handleResumeUpload={handleResumeUpload}
        uploadProgress={uploadProgress}
        uploadStatus={uploadStatus}
      />
    </div>
  );
}

export default Dashboard;
