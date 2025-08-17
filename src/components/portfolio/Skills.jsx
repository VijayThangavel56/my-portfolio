import { useSkillsData } from "../../hooks/useSkillsData";
import { SkillsGrid } from "./skills/SkillsGrid";

 

export default function Skills() {
  const { skills, loading, error } = useSkillsData();

  return (
    <section id="skills" className="relative py-20 z-10 bg-slate-950">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-sky-400">
          My Skills
        </h2>

        {loading && <div className="text-center">Loading skills...</div>}
        {error && <div className="text-red-500 text-center">Error loading skills</div>}
        {!loading && !error && <SkillsGrid skills={skills} />}
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
}