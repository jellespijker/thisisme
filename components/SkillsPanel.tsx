import React from 'react';
import { SkillCategory } from '../types';
import SectionHeader from './SectionHeader';
import { Icons } from './Icons';
import SkillBadge from './SkillBadge';

interface SkillsPanelProps {
  skills: SkillCategory[];
}

const SkillsPanel: React.FC<SkillsPanelProps> = ({ skills }) => {
  return (
    <div>
      <SectionHeader title="Skills" icon={<Icons.Terminal size={28} />} />
      
      <div className="space-y-6">
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