import React from 'react';
import ReactMarkdown from 'react-markdown';
import { JobRole, ExperiencePoint } from '../types';
import { Icons } from './Icons';
import SkillBadge from './SkillBadge';

interface ExperienceCardProps {
  job: JobRole;
  isLatest?: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ job, isLatest = false }) => {
  
  const renderHighlights = (highlights: ExperiencePoint[]) => (
    <div className="space-y-4 text-medido-purple/80 text-lg leading-relaxed">
      {highlights.map((highlight, idx) => (
        <div key={idx} className="flex items-start gap-3">
            <div className="mt-2.5 min-w-[8px] h-[8px] rounded-full bg-medido-peach shrink-0" />
          <div className="w-full">
            {highlight.title && <strong className="text-medido-purple font-bold block mb-1">{highlight.title}</strong>}
            <ReactMarkdown 
              components={{
                a: ({node, ...props}) => (
                  <a 
                    {...props} 
                    className="text-medido-purple font-bold underline decoration-medido-peach/50 hover:decoration-medido-peach hover:text-medido-peach transition-colors" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                  />
                ),
                p: ({node, ...props}) => <p {...props} className="m-0 inline" />
              }}
            >
              {highlight.description}
            </ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`p-8 rounded-3xl transition-all hover:shadow-lg border ${isLatest ? 'bg-white border-medido-peach/50 shadow-md' : 'bg-white border-transparent hover:border-gray-200'}`}>
      
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div className="flex gap-4">
          <div>
            <h3 className="text-2xl font-bold text-medido-purple">{job.title}</h3>
            {job.website ? (
              <a href={job.website} target="_blank" rel="noopener noreferrer" className="text-xl text-medido-purple/70 font-bold mt-1 hover:text-medido-peach transition-colors inline-flex items-center gap-2 group">
                {job.company} <Icons.Link size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ) : (
              <div className="text-xl text-medido-purple/70 font-bold mt-1">{job.company}</div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:items-end">
          <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${isLatest ? 'bg-medido-purple text-white' : 'bg-medido-gray text-medido-purple'}`}>
            {job.period}
          </span>
          {job.location && (
            <span className="text-medido-purple/50 text-sm mt-2 flex items-center gap-1 font-semibold">
              <Icons.MapPin size={14} /> {job.location}
            </span>
          )}
        </div>
      </div>

      {job.responsibility && (
        <div className="mb-6 p-4 bg-medido-gray rounded-2xl border border-gray-100">
          <span className="font-bold text-medido-purple">Scope:</span> <span className="text-medido-purple/80">{job.responsibility}</span>
        </div>
      )}

      {/* Legacy/General Highlights */}
      {job.highlights && renderHighlights(job.highlights)}

      {/* Leadership Highlights */}
      {job.leadershipHighlights && (
        <div className="mb-6">
          <h4 className="flex items-center gap-2 text-medido-purple font-bold text-lg mb-3 uppercase tracking-wide opacity-80">
            <Icons.Users size={18} /> Leadership Focus
          </h4>
          {renderHighlights(job.leadershipHighlights)}
        </div>
      )}

      {/* Engineering Highlights */}
      {job.engineeringHighlights && (
        <div className="mt-6">
          <h4 className="flex items-center gap-2 text-medido-purple font-bold text-lg mb-3 uppercase tracking-wide opacity-80">
            <Icons.Code size={18} /> Engineering Focus
          </h4>
          {renderHighlights(job.engineeringHighlights)}
        </div>
      )}

      {job.techStack && (
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
          {job.techStack.map((tech, idx) => (
            <SkillBadge key={idx} skill={tech} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;