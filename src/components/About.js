import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

export default function About() {
  return (
  <section id="about" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-teal-400">About Me</h2>
          <p className="text-lg text-slate-400 leading-relaxed text-center">
            I am a dedicated and results-driven developer with a strong foundation in both front-end and back-end technologies. My goal is to create user-friendly, visually appealing, and highly performant web experiences that solve real-world problems. With a keen eye for detail and a love for clean code, I thrive in collaborative environments where I can learn and grow with a team.
          </p>
          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-block px-8 py-3 bg-slate-700 hover:bg-slate-600 text-teal-400 font-semibold rounded-full shadow-lg transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

  );
}
