
import ProfileForm from "../../components/dashboard/personal-info/ProfileForm";
import { useProfileData } from "../../hooks/DashboardHooks/useProfileData";
 
function PersonalInfoPage() {
  const { formData, setFormData, saveProfile, loading, error } = useProfileData();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveProfile();
  };

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <main className="flex-grow min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 to-slate-950">
      <section className="w-full max-w-4xl">
        <div className="bg-slate-800 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden">
          <div className="bg-gradient-to-r from-fuchsia-600 to-cyan-600 p-10">
            <h2 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-md">
              Personal Details
            </h2>
            <p className="text-fuchsia-100 mt-2 text-lg font-light">
              Fill in your information to create your profile.
            </p>
          </div>

          <ProfileForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </section>
    </main>
  );
}

export default PersonalInfoPage;
