import { Github} from 'lucide-react';


export default function Skills() {
   const skills = [
    { name: 'HTML5', icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#e34c26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-html"><path d="M11 19h-1.5a4.5 4.5 0 0 1-4.5-4.5V9.5a4.5 4.5 0 0 1 4.5-4.5h1.5zM13 19h1.5a4.5 4.5 0 0 0 4.5-4.5V9.5a4.5 4.5 0 0 0-4.5-4.5H13zM10.5 5.5v13M13.5 5.5v13" /></svg> },
    { name: 'CSS3', icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#264de4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-css"><path d="M12 11V5h-3.5a1.5 1.5 0 0 0 0 3H9.5a1.5 1.5 0 0 1 0 3H12zM12 11h-2.5a1.5 1.5 0 0 1 0 3H12v4" /></svg> },
    { name: 'JavaScript', icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f0db4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-javascript"><path d="M11 5v14h3a5 5 0 0 0 0-10h-3zM13 11a2 2 0 1 0 0-4h-2.5" /></svg> },
    { name: 'React', icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-react"><path d="M18.8 13.4a8 8 0 0 0-13.6 0M12 21a8 8 0 0 0 0-16a8 8 0 0 0 0 16zM12 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8z" /></svg> },
    { name: 'Bootstrap', icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#7952b3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bootstrap"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg> },
    { name: 'Sass', icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#cd6799" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sass"><path d="M11 12H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zM18 12c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg> },
    { name: 'Git', icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#f1502f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-git"><path d="M12 5l-2 2-2-2M12 19l2-2 2 2M12 5v14M10 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM14 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM10 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM14 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" /></svg> },
    { name: 'Vscode', icon: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#007acc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-vscode"><path d="M18.8 13.4a8 8 0 0 0-13.6 0M12 21a8 8 0 0 0 0-16a8 8 0 0 0 0 16zM12 13a4 4 0 1 0 0-8a4 4 0 0 0 0 8z" /></svg> },
    { name: 'Github', icon: <Github size={36} color="#000000" /> },
    { name: 'Tailwind CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/><path d="M9.5 14.5c.25.5.5.5.5.5s-.25.5-.5.5c-.25 0-.5-.5-.5-.5s.25-.5.5-.5zm-1-1.5c.5-.25.5-.5.5-.5s.5-.25.5-.5c0-.25-.25-.5-.5-.5s-.5.25-.5.5z"/><path d="M12 17c.5 0 .5-.25.5-.5s.25-.5.5-.5c0-.25-.25-.5-.5-.5s-.5.25-.5.5c0 .25.25.5.5.5z"/><path d="M14.5 14.5c.25.5.5.5.5.5s-.25.5-.5.5c-.25 0-.5-.5-.5-.5s.25-.5.5-.5z"/><path d="M16 11c.5-.25.5-.5.5-.5s.5-.25.5-.5c0-.25-.25-.5-.5-.5s-.5.25-.5.5z"/><path d="M16 8c.5.5.5.5.5.5s-.25.5-.5.5c-.25 0-.5-.5-.5-.5s.25-.5.5-.5z"/><path d="M9.5 9c.25.5.5.5.5.5s-.25.5-.5.5c-.25 0-.5-.5-.5-.5s.25-.5.5-.5z"/><path d="M7 11.5c.5-.25.5-.5.5-.5s.5-.25.5-.5c0-.25-.25-.5-.5-.5s-.5.25-.5.5z"/><path d="M12 7c.5 0 .5-.25.5-.5s.25-.5.5-.5c0-.25-.25-.5-.5-.5s-.5.25-.5.5c0 .25.25.5.5.5z"/><path d="M14.5 9c.25.5.5.5.5.5s-.25.5-.5.5c-.25 0-.5-.5-.5-.5s.25-.5.5-.5z"/><path d="M16 14c.5.5.5.5.5.5s-.25.5-.5.5c-.25 0-.5-.5-.5-.5s.25-.5.5-.5z"/><path d="M9 12.5c.5.5.5.5.5.5s-.25.5-.5.5c-.25 0-.5-.5-.5-.5s.25-.5.5-.5z"/></svg>},
  ];
  return (
   <section id="skills" className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">My Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-center">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-800 shadow-lg border border-slate-700 hover:shadow-xl transition-all">
                {skill.icon}
                <p className="mt-3 text-lg font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
