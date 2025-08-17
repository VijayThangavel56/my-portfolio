import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useProfileService } from "../../services/DashboardServices/useprofileService";

export const useProfileData = () => {
  const { getProfile, updateProfile } = useProfileService();

  const [formData, setFormData] = useState({
    name: "",
    introduction: "",
    description: "",
    email: "",
    phone: "",
    location: "",
    github: "",
    linkedin: "",
    twitter: "",
    website: "",
    profileImage: "", // added this
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const res = await getProfile();
      setFormData({ ...res, profileImage: res.profileImage || "" }); // ensure profileImage exists
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const saveProfile = async () => {
    try {
      await updateProfile(formData);
      toast.success("Profile updated successfully 🎉");
    } catch (err) {
      toast.error("Failed to save profile. Please try again.");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return { formData, setFormData, saveProfile, loading, error };
};
