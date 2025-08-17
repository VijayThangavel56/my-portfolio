// src/components/portfolio/Hero.jsx
import { useEffect, useState } from "react";
import { useHeroData } from "../../hooks/useHeroData";
import { HeroContent } from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";
 

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { profileName,profileImage, loading, error } = useHeroData();

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (error) return <div className="text-red-500 text-center">Error loading profile</div>;
  if (loading) return <div className="text-center">Loading...</div>;

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen z-10 px-4 overflow-hidden"
    >
      {/* Decorative Background Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-fuchsia-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-sky-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full animate-fadeIn">
        <HeroContent profileName={profileName} />
        <HeroImage profileImage={profileImage} profileName={profileName} />
      </div>
    </section>
  );
}