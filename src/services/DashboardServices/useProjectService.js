import { useApi } from "../../hooks/useApi";


export function useProjectService() {
  const api = useApi();


  const getProjects =async()=>{
     const response = await api.get("/projects");
    return response || [];
  }

  const createProject = (project) => api.post("/projects", project);

  const updateProject = (id, project) => api.put(`/projects/${id}`, project);

  const deleteProject = (id) => api.del(`/projects/${id}`);

  return { getProjects, createProject, updateProject, deleteProject };
}
