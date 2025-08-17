// src/components/portfolio/Contact.jsx
import { Github, Linkedin, Mail } from "lucide-react";
import { useContactData } from "../../hooks/useContactData";
import { ContactHeader } from "./contact/ContactHeader";
import { SocialLinkCard } from "./contact/SocialLinkCard";
import { ContactInfo } from "./contact/ContactInfo";
 

export default function Contact() {
  const { profile, loading, error } = useContactData();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-950 text-white">
        <p className="text-xl animate-pulse">Loading contact details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-950 text-white">
        <p className="text-xl text-red-400">Error loading contact details</p>
      </div>
    );
  }
const normalizeUrl = (url) => {
  if (!url) return "";
  return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
};

  const socialLinks = [
    { icon: <Github size={32} />, label: "GitHub", href: normalizeUrl(profile.github), color: "hover:text-purple-400" },
    { icon: <Linkedin size={32} />, label: "LinkedIn", href: normalizeUrl(profile.linkedin), color: "hover:text-blue-400" },
    { icon: <Mail size={32} />, label: "Email", href: `mailto:${profile.email}`, color: "hover:text-emerald-400" },
  ];
console.log(socialLinks);
  return (
    <section id="contact" className="relative py-24 z-10 bg-slate-950 text-slate-300">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <ContactHeader />
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <SocialLinkCard key={index} {...social} />
          ))}
        </div>

        <ContactInfo email={profile.email} phone={profile.phone} location={profile.location} />
      </div>
    </section>
  );
}