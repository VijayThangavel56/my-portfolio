import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'The description of project goes here. A brief text about the project.',
      imageUrl: 'https://placehold.co/600x400/0f172a/60a5fa?text=Project+1',
      link: '#',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'The description of project goes here. A brief text about the project.',
      imageUrl: 'https://placehold.co/600x400/0f172a/60a5fa?text=Project+2',
      link: '#',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'The description of project goes here. A brief text about the project.',
      imageUrl: 'https://placehold.co/600x400/0f172a/60a5fa?text=Project+3',
      link: '#',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'The description of project goes here. A brief text about the project.',
      imageUrl: 'https://placehold.co/600x400/0f172a/60a5fa?text=Project+4',
      link: '#',
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'The description of project goes here. A brief text about the project.',
      imageUrl: 'https://placehold.co/600x400/0f172a/60a5fa?text=Project+5',
      link: '#',
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'The description of project goes here. A brief text about the project.',
      imageUrl: 'https://placehold.co/600x400/0f172a/60a5fa?text=Project+6',
      link: '#',
    },
  ];

  return (
<section id="projects" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:shadow-xl transition-all"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    className="inline-block font-medium text-teal-400 hover:text-teal-500 transition-colors"
                  >
                    View Project &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
