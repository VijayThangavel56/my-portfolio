// src/components/portfolio/hero/HeroImage.jsx
const HeroImage = ({ profileImage, profileName }) => {
  const defaultImage = "/vijay.jpg";  
  return (
    <div className="flex-1 flex justify-center relative" data-aos="fade-left">
      {/* Layered Glow Rings */}
      <div className="absolute w-80 h-80 rounded-full border border-fuchsia-400 opacity-30 animate-spin-slow"></div>
      <div className="absolute w-72 h-72 rounded-full border border-sky-400 opacity-30 animate-spin-reverse-slow"></div>
      <div className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500 blur-3xl opacity-40 animate-pulse-slow"></div>

      <img
        src={profileImage || defaultImage}  
        alt={profileName || "Profile Image"}
        className="w-64 h-64 object-cover rounded-full border-4 border-fuchsia-400 shadow-xl relative z-10 hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
};
export default HeroImage;