// src/components/layout/Header.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Get in Touch", href: "#contact" },
    { name: "Login", href: "/login" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-md shadow-lg border-b border-fuchsia-500/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl md:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-fuchsia-400 to-sky-400 text-transparent bg-clip-text hover:from-fuchsia-300 hover:to-sky-300 transition-all duration-300"
        >
          Portfolio
        </a>

        {/* Desktop Nav */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-4 md:space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`relative text-slate-300 hover:text-fuchsia-400 transition-colors ${
                    !item.isExternal && "after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-fuchsia-400 after:to-sky-400 hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="sm:hidden text-slate-300 hover:text-fuchsia-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-900/95 backdrop-blur-lg border-t border-fuchsia-500/20">
          <ul className="flex flex-col space-y-3 px-4 py-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-2 text-slate-300 hover:text-fuchsia-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  target={item.isExternal ? "_blank" : "_self"}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}