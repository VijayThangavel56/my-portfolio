export const SocialLinkCard = ({ icon, label, href, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group p-8 bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-700 hover:border-fuchsia-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl ${color}`}
  >
    <div className="flex flex-col items-center gap-4">
      <div className="p-4 bg-slate-800 rounded-full group-hover:bg-gradient-to-r group-hover:from-fuchsia-500 group-hover:to-cyan-500 transition-all duration-300">
        {icon}
      </div>
      <span className="font-semibold">{label}</span>
    </div>
  </a>
);