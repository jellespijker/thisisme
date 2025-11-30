import React from 'react';
import { ArchitectureInitiative, Certification } from '../types';
import SectionHeader from './SectionHeader';
import { Icons } from './Icons';

interface ArchitecturePanelProps {
  initiatives: ArchitectureInitiative[];
  certificate?: Certification;
}

const ArchitecturePanel: React.FC<ArchitecturePanelProps> = ({ initiatives, certificate }) => {
  return (
    <div>
      <SectionHeader title="Software Architecture" icon={<Icons.Network size={28} />} />
      
      {/* Certificate Highlight */}
      {certificate && (
        <div className="bg-gradient-to-r from-medido-purple to-medido-purple/90 text-white p-5 rounded-3xl mb-6 shadow-md relative overflow-hidden group border-2 border-transparent hover:border-medido-peach transition-all">
          <div className="absolute -top-4 -right-4 text-white/5 group-hover:text-white/10 transition-colors transform rotate-12">
            <Icons.Award size={100} />
          </div>
          <div className="relative z-10 flex items-start gap-4">
            <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-sm">
                <Icons.Award size={32} className="text-medido-peach" />
            </div>
            <div>
                <div className="text-xs font-bold text-medido-peach uppercase tracking-wider mb-1">Certified Professional</div>
                <div className="font-bold text-lg leading-tight pr-8">{certificate.name}</div>
                <div className="text-white/70 text-sm mt-1">{certificate.issuer}</div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {initiatives.map((item, idx) => (
           <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
             <h3 className="font-bold text-medido-purple text-lg mb-2 group-hover:text-medido-peach transition-colors">
                {item.name}
             </h3>
             <p className="text-medido-purple/80 text-sm mb-4 leading-relaxed">
               {item.description}
             </p>
             <div className="flex flex-wrap gap-2">
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