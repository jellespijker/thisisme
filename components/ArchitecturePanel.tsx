import React from 'react';
import { ArchitectureInitiative } from '../types';
import SectionHeader from './SectionHeader';
import { Icons } from './Icons';

interface ArchitecturePanelProps {
  initiatives: ArchitectureInitiative[];
}

const ArchitecturePanel: React.FC<ArchitecturePanelProps> = ({ initiatives }) => {
  return (
    <div>
      <SectionHeader title="Software Architecture" icon={<Icons.Network size={28} />} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {initiatives.map((item, idx) => (
           <div key={idx} className="project-card bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
             <h3 className="font-bold text-medido-purple text-lg mb-2 group-hover:text-medido-peach transition-colors">
                {item.name}
             </h3>
             <p className="text-medido-purple/80 text-sm mb-4 leading-relaxed">
               {item.description}
             </p>
             <div className="tech-tags-container flex flex-wrap gap-2">
                {item.tech.map((tech, tIdx) => (
                  <span key={tIdx} className="px-2 py-1 text-xs font-semibold rounded-md bg-medido-gray text-medido-purple/70 border border-gray-100">
                    {tech}
                  </span>
                ))}
             </div>
           </div>
        ))}
      </div>
    </div>
  );
};

export default ArchitecturePanel;