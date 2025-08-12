import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Palette } from "lucide-react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced skills with categories
  const skillCategories = [
    {
      title: "Backend",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: ".NET Core MVC", color: "from-purple-500 to-purple-700", level: 90 },
        { name: "REST API", color: "from-green-500 to-green-700", level: 85 },
        { name: "Entity Framework", color: "from-emerald-500 to-emerald-700", level: 88 },
        { name: "SQL Server", color: "from-red-500 to-red-700", level: 85 },
      ]
    },
    {
      title: "Frontend",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React", color: "from-cyan-400 to-cyan-600", level: 92 },
        { name: "Redux Toolkit", color: "from-violet-500 to-violet-700", level: 80 },
        { name: "JavaScript", color: "from-yellow-400 to-yellow-600", level: 90 },
        { name: "jQuery", color: "from-blue-300 to-blue-500", level: 75 },
      ]
    },
    {
      title: "Styling",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "HTML5", color: "from-orange-500 to-orange-700", level: 95 },
        { name: "CSS3", color: "from-blue-500 to-blue-700", level: 88 },
        { name: "Tailwind CSS", color: "from-sky-400 to-sky-600", level: 85 },
        { name: "Bootstrap", color: "from-purple-400 to-purple-600", level: 80 },
      ]
    }
  ];

  // Enhanced projects with better visuals
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with .NET Core API and React frontend, featuring real-time inventory management.",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      tags: [".NET Core", "React", "SQL Server", "Redux"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting.",
      imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      tags: ["React", "Entity Framework", "SignalR"],
      link: "#",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      description: "Interactive financial analytics dashboard with data visualization and real-time market data integration.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      tags: ["React", "Chart.js", "REST API"],
      link: "#",
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Comprehensive LMS with course management, progress tracking, and interactive learning modules.",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&crop=center",
      tags: [".NET MVC", "Bootstrap", "jQuery"],
      link: "#",
    },
    {
      id: 5,
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling, medical records, and telemedicine features.",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      tags: ["React", "Entity Framework", "Security"],
      link: "#",
    },
    {
      id: 6,
      title: "Inventory Management",
      description: "Real-time inventory tracking system with automated reordering, analytics, and multi-location support.",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&crop=center",
      tags: [".NET Core", "SQL Server", "APIs"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-inter overflow-x-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 z-0">
        {/* Animated gradient orbs */}
        <div 
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-fuchsia-500/30 to-purple-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-1/3 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-400/30 to-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-emerald-400/30 to-teal-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl shadow-2xl border-b border-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-cyan-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="#hero"
            className="text-3xl font-black tracking-wider bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text hover:scale-105 transition-transform duration-300"
          >
            Vijay Thangavel
          </a>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="relative text-slate-300 hover:text-fuchsia-400 transition-all duration-300 font-medium group"
                  >
                    {item}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-fuchsia-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button className="md:hidden p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center z-10 px-4">
        <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-fuchsia-400 font-semibold text-xl tracking-wide">Hello, I'm</p>
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text animate-gradient">
                  Vijay
                </span>
                <br />
                <span className="text-slate-200">Thangavel</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-fuchsia-400 to-cyan-400 rounded-full"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl">
              Full Stack Developer crafting <span className="text-fuchsia-400 font-semibold">exceptional digital experiences</span> with cutting-edge technology and creative problem-solving.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/50 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Explore My Work</span>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-slate-600 rounded-full font-bold text-lg hover:border-fuchsia-400 hover:bg-fuchsia-400/10 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Enhanced Photo Section */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 w-80 h-80 rounded-full border-2 border-fuchsia-400/30 animate-spin"></div>
              <div className="absolute inset-2 w-76 h-76 rounded-full border border-cyan-400/30 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
              
              {/* Glow effect */}
              <div className="absolute inset-4 w-72 h-72 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 blur-2xl animate-pulse"></div>
              
              {/* Photo */}
              <div className="relative w-64 h-64 mx-auto">
                <img
                  src="/vijay.jpg"
                  alt="Vijay Thangavel"
                  className="w-full h-full object-cover rounded-full border-4 border-gradient-to-r from-fuchsia-400 to-cyan-400 shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 p-3 bg-slate-900/90 backdrop-blur rounded-full border border-fuchsia-400/50 animate-bounce">
                  <Code className="w-6 h-6 text-fuchsia-400" />
                </div>
                <div className="absolute -bottom-4 -left-4 p-3 bg-slate-900/90 backdrop-blur rounded-full border border-cyan-400/50 animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <Database className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-lg text-slate-300 leading-relaxed space-y-4">
                <p>
                  With <span className="text-fuchsia-400 font-bold text-xl">4+ years</span> of experience in full-stack development, 
                  I specialize in building scalable, secure, and high-performance web applications that drive business success.
                </p>
                <p>
                  My expertise spans <span className="text-cyan-400 font-semibold">.NET Core MVC & API</span>, 
                  <span className="text-fuchsia-400 font-semibold"> ReactJS</span>, and 
                  <span className="text-purple-400 font-semibold"> Entity Framework</span>, with deep knowledge 
                  in Repository Pattern, Unit of Work, and enterprise-grade architectures.
                </p>
                <p>
                  I thrive in Agile environments, delivering clean, maintainable code that aligns with business objectives 
                  while embracing emerging technologies and best practices.
                </p>
              </div>
              
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 text-fuchsia-400 font-semibold rounded-lg hover:from-slate-700 hover:to-slate-600 transition-all duration-300 hover:scale-105 border border-slate-600 hover:border-fuchsia-400/50"
                >
                  <span>Download Resume</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "4+", label: "Years Experience", color: "from-fuchsia-500 to-purple-500" },
                { number: "5+", label: "Projects Completed", color: "from-cyan-500 to-blue-500" },
                { number: "12+", label: "Technologies", color: "from-emerald-500 to-teal-500" },
                { number: "100%", label: "Client Satisfaction", color: "from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <div key={index} className="p-6 bg-slate-800/50 backdrop-blur rounded-xl border border-slate-700 hover:border-fuchsia-400/50 transition-all duration-300 text-center group hover:scale-105">
                  <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} text-transparent bg-clip-text mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="relative py-24 z-10 bg-slate-950">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-slate-700 hover:border-fuchsia-400/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-200">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-700 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animation: `fillBar 1s ease-out ${categoryIndex * 0.2 + skillIndex * 0.1}s forwards`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes fillBar {
            from { width: 0%; }
            to { width: var(--target-width); }
          }
        `}</style>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950 z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative bg-slate-900/50 backdrop-blur rounded-2xl overflow-hidden border border-slate-700 hover:border-fuchsia-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/20 ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{
                  animation: `fadeInUp 0.6s ease ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="p-3 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-200 group-hover:text-fuchsia-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-600 hover:border-fuchsia-400/50 hover:text-fuchsia-400 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full font-bold hover:shadow-2xl hover:shadow-fuchsia-500/50 transition-all duration-300 hover:scale-105"
            >
              <span>View All Projects</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        <style>{`
          @keyframes fadeInUp {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }
        `}</style>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="relative py-24 z-10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-16">
            <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm currently available for new projects and exciting collaborations. 
              Let's create something amazing together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Github size={32} />, label: "GitHub", href: "#", color: "hover:text-purple-400" },
              { icon: <Linkedin size={32} />, label: "LinkedIn", href: "#", color: "hover:text-blue-400" },
              { icon: <Mail size={32} />, label: "Email", href: "#", color: "hover:text-emerald-400" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`group p-8 bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-700 hover:border-fuchsia-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl ${social.color}`}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="p-4 bg-slate-800 rounded-full group-hover:bg-gradient-to-r group-hover:from-fuchsia-500 group-hover:to-cyan-500 transition-all duration-300">
                    {social.icon}
                  </div>
                  <span className="font-semibold">{social.label}</span>
                </div>
              </a>
            ))}
          </div>

          <div className="bg-slate-900/50 backdrop-blur rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Ready to start a project?</h3>
            <p className="text-slate-400 mb-6">Send me a message and let's discuss how we can work together!</p>
            <a
              href="mailto:vijay@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/50 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Start a Conversation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative py-8 bg-slate-950 border-t border-fuchsia-500/20 z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <p className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text">
              Vijay Thangavel
            </p>
          </div>
          <p className="text-slate-400">
            &copy; 2024 Vijay Thangavel. Crafted with passion and precision.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;