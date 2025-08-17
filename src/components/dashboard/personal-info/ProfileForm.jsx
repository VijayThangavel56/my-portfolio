import { useState } from "react";
import FileUpload from "./FileUpload";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import SocialInput from "./SocialInput";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";

function ProfileForm({ formData, setFormData, onSubmit, loading }) {
  const [previewUrl, setPreviewUrl] = useState(formData.profileImage || null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64File = reader.result;
        setPreviewUrl(base64File);
        setFormData({ ...formData, profileImage: base64File }); // Save base64
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={onSubmit} className="p-8 space-y-8">
      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          id="name"
          label="Full Name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <FormInput
          id="introduction"
          label="Introduction"
          value={formData.introduction}
          onChange={handleChange}
          placeholder="e.g., Software Engineer"
          required
        />
      </div>

      <FormTextarea
        id="description"
        label="Description"
        value={formData.description}
        onChange={handleChange}
        placeholder="A brief description about yourself..."
        required
      />

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          id="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          required
        />
        <FormInput
          id="phone"
          type="tel"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <FormInput
          id="location"
          label="Location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g., San Francisco, CA"
          required
        />

        <FileUpload 
          id="profileImage"
          type="file"
          label="Profile Image"
          value={formData.profileImage}
          onFileChange={handleFileChange}
          placeholder="Profile Image"
          previewUrl={previewUrl}
        />
      </div>

      {/* Social Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        <SocialInput
          id="github"
          label="GitHub"
          value={formData.github}
          onChange={handleChange}
          placeholder="GitHub URL"
          Icon={Github}
        />
        <SocialInput
          id="linkedin"
          label="LinkedIn"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn URL"
          Icon={Linkedin}
        />
        <SocialInput
          id="twitter"
          label="Twitter"
          value={formData.twitter}
          onChange={handleChange}
          placeholder="Twitter URL"
          Icon={Twitter}
        />
        <SocialInput
          id="website"
          label="Website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Website URL"
          Icon={Globe}
        />
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-xl 
                     text-white font-semibold shadow-lg hover:from-fuchsia-700 hover:to-cyan-700 
                     transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Details"}
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
