import React from 'react';
import { Project } from '../types';
import SectionHeader from './SectionHeader';
import { Icons } from './Icons';

interface ProjectsPanelProps {
  projects: Project[];
}

const ProjectsPanel: React.FC<ProjectsPanelProps> = ({ projects }) => {
  return (
    <div>
      <SectionHeader title="Products & Projects" icon={<Icons.Rocket size={28} />} />
      
      <div className="space-y-4">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-medido-purple text-lg leading-tight group-hover:text-medido-peach transition-colors">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {project.name} <Icons.Link size={14} className="opacity-50" />
                  </a>
                ) : (
                  project.name
                )}
              </h3>
            </div>
            
            <div className="text-sm font-bold text-medido-stone mb-3 uppercase tracking-wide">
              {project.role}
            </div>
            
            <p className="text-medido-purple/80 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            
            {project.tech && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 text-xs font-semibold rounded-md bg-medido-gray text-medido-purple/70">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPanel;