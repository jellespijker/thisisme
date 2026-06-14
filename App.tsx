import React, { useState } from 'react';
import Header from './components/Header';
import ExperienceCard from './components/ExperienceCard';
import Timeline from './components/Timeline';
import SkillsPanel from './components/SkillsPanel';
import ProjectsPanel from './components/ProjectsPanel';
import ArchitecturePanel from './components/ArchitecturePanel';
import SectionHeader from './components/SectionHeader';
import { Icons } from './components/Icons';
import RecommendationsPanel from './components/RecommendationsPanel';
import { cvData } from './constants';

const App: React.FC = () => {
  const [showPreviousExperience, setShowPreviousExperience] = useState(false);

  const handlePrintCV = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-medido-purple selection:bg-medido-peach selection:text-medido-purple">
      <Header profile={cvData.profile} onPrint={handlePrintCV} />

      <main className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
        

        
        {/* Professional Experience Section */}
        <section className="mb-20">
          <SectionHeader title="Professional Experience" icon={<Icons.Briefcase size={28} />} />
          <Timeline 
            mode="professional"
            experience={cvData.experience} 
            previousExperience={cvData.previousExperience} 
            education={cvData.education} 
            certifications={cvData.certifications}
          />
        </section>

        {/* Education & Courses Section */}
        <section className="mb-20">
          <SectionHeader title="Education & Courses" icon={<Icons.Book size={28} />} />
          <Timeline 
            mode="educational"
            experience={cvData.experience} 
            previousExperience={cvData.previousExperience} 
            education={cvData.education} 
            certifications={cvData.certifications}
          />
        </section>

        {/* Full-width Stack of Supplementary Sections */}
        <div className="space-y-20 mt-20">
          
          <SkillsPanel skills={cvData.skills} variant="full" />
          
          <ProjectsPanel projects={cvData.projects} />
          
          <ArchitecturePanel initiatives={cvData.architecture} />
          
          <RecommendationsPanel recommendations={cvData.recommendations} />
          
          <div>
            <SectionHeader title="Volunteering & Open Source" icon={<Icons.Users size={28} />} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cvData.volunteer.map((vol, idx) => (
                <div key={idx} className="volunteering-item bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <div className="text-medido-purple font-bold text-lg">{vol.role}</div>
                    <div className="text-medido-peach font-bold text-base mt-0.5">{vol.organization}</div>
                    <div className="text-medido-purple/50 text-sm mb-3 font-medium">{vol.period}</div>
                    <p className="text-medido-purple/80 text-base leading-relaxed">{vol.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <footer className="bg-medido-purple text-white py-16 mt-20 no-print">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Jelle Spijker | Software Leadership & Architecture</h2>
          <p className="text-white/70">Connecting physical craftsmanship with cloud scale.</p>
          <div className="mt-8 pt-8 border-t border-white/20 text-white/50 text-sm">
            <p>© {new Date().getFullYear()} Jelle Spijker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;