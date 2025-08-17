// src/components/portfolio/skills/SkillCard.jsx
export const SkillCard = ({ skill, index }) => (
  <div
    className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-900 shadow-md border border-slate-800 hover:border-fuchsia-400/50 transform hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-fuchsia-500/20 group"
    style={{
      animation: `fadeInUp 0.5s ease ${index * 0.1}s forwards`,
      opacity: 0
    }}
  >
    {skill.icon && (
      <div className="h-16 w-16 mb-2">
        <img 
          src={skill.icon} 
          alt={`${skill.name} logo`} 
          className="rounded-xl w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
        />
      </div>
    )}
    <p className="text-center text-lg font-semibold text-slate-200 group-hover:text-fuchsia-400 transition-colors">
      {skill.name}
    </p>
  </div>
);