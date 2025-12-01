import React from 'react';
import { SkillCategory } from '../types';
import SectionHeader from './SectionHeader';
import { Icons } from './Icons';
import SkillBadge from './SkillBadge';

interface SkillsPanelProps {
  skills: SkillCategory[];
  variant?: 'default' | 'full';
}

const SkillsPanel: React.FC<SkillsPanelProps> = ({ skills, variant = 'default' }) => {
  // Use a grid for the full width print variant to save vertical space
  const containerClass = variant === 'full' 
    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
    : "space-y-6";

  return (
    <div>
      <SectionHeader title="Skills" icon={<Icons.Terminal size={28} />} />
      
      <div className={containerClass}>
        {skills.map((skillGroup, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-medido-purple text-lg mb-4 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-medido-peach rounded-full"></div>
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, sIdx) => (
                <SkillBadge key={sIdx} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPanel;