import React from 'react';

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <span className="px-4 py-1.5 text-sm font-bold rounded-full bg-medido-gray text-medido-purple border border-transparent hover:border-medido-peach hover:bg-white transition-all cursor-default">
      {skill}
    </span>
  );
};

export default SkillBadge;