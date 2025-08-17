// src/hooks/useProjectData.js
import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { useProjectService } from "../../services/DashboardServices/useProjectService";

export function useProjectData() {
  const { getProjects, createProject, updateProject, deleteProject } = useProjectService();
  const [projects, setProjects] = useState([]);

  const fetchProjects = useCallback(async () => {
    try {
      const fetched = await getProjects();
      setProjects(
        fetched.map((proj) => ({
          ...proj,
          tags: Array.isArray(proj.tags) ? proj.tags.join(", ") : proj.tags,
        }))
      );
    } catch {
      toast.error("Failed to fetch projects.");
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  // Convert file to base64
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const addProject = async (project) => {
    try {
      let base64Image = null;

      if (project.imageUrl) {
        base64Image = await toBase64(project.imageUrl);
      }

      const created = await createProject({
        ...project,
        imageUrl: base64Image || project.imageUrl, // fallback if no new file
      });

      setProjects((prev) => [
        ...prev,
        { ...created, tags: created.tags.join(", ") },
      ]);
      toast.success("Project added!");
    } catch {
      toast.error("Failed to add project.");
    }
  };

  const editProject = async (id, project) => {
    try {
        debugger
      let base64Image = null;

      if (project.imageUrl instanceof File) {
      base64Image = await toBase64(project.imageUrl);
    }


      const updated = await updateProject(id, {
        ...project,
        imageUrl: base64Image || project.imageUrl,
      });

      setProjects((prev) =>
        prev.map((p) =>
          p.id === updated.id ? { ...updated, tags: updated.tags.join(", ") } : p
        )
      );
      toast.success("Project updated!");
    } catch {
      toast.error("Failed to update project.");
    }
  };

  const removeProject = async (id) => {
    try {
      await deleteProject(id);
      setProjects((prev) => prev.filter((p) => p.id !== id));
      toast.success("Project deleted!");
    } catch {
      toast.error("Failed to delete project.");
    }
  };

  return { projects, addProject, editProject, removeProject, fetchProjects };
}
