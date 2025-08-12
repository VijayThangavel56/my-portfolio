import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Hero() {
  return (
     <section id="hero" className="flex items-center justify-center min-h-screen">
        <div className="text-center px-4 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-teal-400">Pavan MG</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light text-slate-400">
            A passionate developer building elegant and efficient web applications.
          </p>
          <a
            href="#projects"
            className="mt-8 inline-block px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-full shadow-lg transition-all"
          >
            View My Work
          </a>
        </div>
      </section>
  );
}
