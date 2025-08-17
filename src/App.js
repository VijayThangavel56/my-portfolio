// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./auth/Login";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import Dashboard from "./pages/dashboard/Dashboard";
import PersonalInfoPage from "./pages/dashboard/PersonalInfoPage";
import AddSkillPage from "./pages/dashboard/AddSkillPage";
import ProjectsPage from "./pages/dashboard/ProjectsPage";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-inter">
      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        toastClassName="bg-slate-800 text-slate-200"
        progressClassName="bg-gradient-to-r from-fuchsia-500 to-cyan-500"
      />

      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/login" element={<Login />} />

          {/* Dashboard Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<PersonalInfoPage />} />
            <Route path="personal-info" element={<PersonalInfoPage />} />
            <Route path="addskills" element={<AddSkillPage />} />
            <Route path="addprojects" element={<ProjectsPage />} />
          </Route>

          {/* 404 Fallback */}
          <Route 
            path="*" 
            element={
              <div className="text-center text-red-400 py-20">
                404 - Page not found
              </div>
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
