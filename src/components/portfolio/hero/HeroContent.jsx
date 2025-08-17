// src/components/portfolio/hero/HeroContent.jsx
export const HeroContent = ({ profileName }) => (
  <div className="text-center md:text-left flex-1" data-aos="fade-right">
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight bg-gradient-to-r from-fuchsia-400 via-pink-400 to-sky-400 text-transparent bg-clip-text animate-gradient">
      Hi, I'm <span className="text-fuchsia-400">{profileName}</span>
    </h1>
    <p className="mt-3 text-xl md:text-2xl font-light text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0">
      A passionate developer crafting beautiful, high-performance web applications with a focus on elegant design and clean code.
    </p>

    <a
      href="#projects"
      className="mt-8 inline-block px-12 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-fuchsia-500/50 hover:shadow-2xl"
    >
      🚀 Explore My Work
    </a>
  </div>
);

