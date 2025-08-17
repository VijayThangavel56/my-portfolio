
import ProtectedRoute from "../auth/ProtectedRoute";
import ProjectsPage from "../pages/dashboard/ProjectsPage";
import AddSkillPage from "../pages/dashboard/AddSkillPage";
import PersonalInfoPage from "../pages/dashboard/PersonalInfoPage";
import Dashboard from "../pages/dashboard/Dashboard";

export const dashboardRoutes = [
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <PersonalInfoPage /> },
      { path: "personal-info", element: <PersonalInfoPage /> },
      { path: "addskills", element: <AddSkillPage /> },
      { path: "addprojects", element: <ProjectsPage /> },
    ],
  },
];