// src/components/layout/Footer.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/yourusername" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/yourusername" },
    { icon: <Mail size={20} />, href: "mailto:your@email.com" }
  ];

  return (
    <footer className="relative py-8 bg-slate-950 border-t border-fuchsia-500/20 z-10">
      <div className="container mx-auto px-4 text-center">
        
        <p className="text-slate-400">
          &copy; {new Date().getFullYear()} Crafted with passion and precision.
        </p>
      </div>
    </footer>
  );
}