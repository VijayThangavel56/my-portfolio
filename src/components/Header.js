export default function Header() {
  return (
       <header className="sticky top-0 z-50 bg-slate-900/50 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold hover:text-teal-400 transition-colors">Your Name</a>
          <nav className="hidden sm:block">
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors">Get in Touch</a></li>
            </ul>
          </nav>
        </div>
      </header>
  );
}