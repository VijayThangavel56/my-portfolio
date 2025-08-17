export default function Header() {
   return (
    <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-md shadow-lg border-b border-fuchsia-500/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a
          href="#hero"
          className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-fuchsia-400 to-sky-400 text-transparent bg-clip-text hover:from-fuchsia-300 hover:to-sky-300 transition-all duration-300"
        >
          Vijay Thangavel
        </a>

        {/* Desktop Nav */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-6">
            {["About", "Skills", "Projects", "Get in Touch", "Login"].map((item) => (
              <li key={item}>
                {item === "Login" ? (
                  <a
                    href="/login"
                    className="text-slate-300 hover:text-fuchsia-400 transition-colors"
                  >
                    {item}
                  </a>
                ) : (
                  <a
                    href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                    className="relative text-slate-300 hover:text-fuchsia-400 transition-colors after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-fuchsia-400 after:to-sky-400 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="sm:hidden text-slate-300 hover:text-fuchsia-400 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}