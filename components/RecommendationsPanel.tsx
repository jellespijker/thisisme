import React from 'react';
import { Recommendation } from '../types';
import SectionHeader from './SectionHeader';
import { Quote, Linkedin } from 'lucide-react';

interface RecommendationsPanelProps {
  recommendations: Recommendation[];
}

const RecommendationsPanel: React.FC<RecommendationsPanelProps> = ({ recommendations }) => {
  // Helper to get initials
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  // Curated premium gradients for avatars
  const gradients = [
    'from-indigo-500 to-purple-600',
    'from-pink-500 to-rose-500',
    'from-emerald-400 to-teal-600',
  ];

  return (
    <div className="w-full">
      <SectionHeader 
        title="Recommendations" 
        icon={<Quote className="w-7 h-7 text-medido-purple" />} 
      />
      
      <div className="recommendations-grid grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {recommendations.map((rec, idx) => {
          const gradient = gradients[idx % gradients.length];
          return (
            <div 
              key={idx} 
              className="recommendation-card relative flex flex-col justify-between bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-medido-peach/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Decorative Quote Icon in the background */}
              <div className="absolute top-6 right-8 text-gray-50 pointer-events-none select-none print:hidden">
                <Quote className="w-12 h-12 stroke-[1.5]" />
              </div>

              <div>
                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${gradient} flex items-center justify-center text-white font-bold text-base shadow-sm shrink-0`}>
                    {getInitials(rec.name)}
                  </div>
                  <div>
                    <h4 className="text-medido-purple font-bold text-lg leading-tight flex items-center gap-1.5">
                      {rec.linkedin ? (
                        <a 
                          href={rec.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-medido-peach transition-colors inline-flex items-center gap-1.5 group/link"
                        >
                          {rec.name}
                          <Linkedin className="w-4 h-4 text-[#0a66c2] opacity-60 group-hover/link:opacity-100 group-hover/link:scale-110 transition-all duration-200" />
                        </a>
                      ) : (
                        rec.name
                      )}
                    </h4>
                    <p className="text-medido-peach font-semibold text-sm leading-tight mt-0.5">{rec.title}</p>
                    <p className="text-medido-purple/40 text-xs font-medium mt-0.5">{rec.date}</p>
                  </div>
                </div>

                {/* Relationship Badge */}
                <div className="inline-block bg-gray-50 text-medido-purple/60 text-xs px-3 py-1.5 rounded-full font-medium mb-5 border border-gray-100">
                  {rec.relationship}
                </div>

                {/* Recommendation Text */}
                <p className="text-medido-purple/80 text-[15px] leading-relaxed font-normal whitespace-pre-wrap italic">
                  "{rec.text}"
                </p>
              </div>

              {/* Bottom decorative accent line */}
              <div className="w-12 h-1 bg-gradient-to-r from-medido-peach/10 to-medido-peach/50 rounded-full mt-6" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendationsPanel;
