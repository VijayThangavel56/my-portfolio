// src/components/portfolio/skills/SkillsGrid.jsx
import { SkillCard } from "./SkillCard";

export const SkillsGrid = ({ skills }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
    {skills.map((skill, index) => (
      <SkillCard key={skill.name} skill={skill} index={index} />
    ))}
  </div>
);