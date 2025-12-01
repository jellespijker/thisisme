import React, { useState } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import ExperienceCard from './components/ExperienceCard';
import SkillsPanel from './components/SkillsPanel';
import ProjectsPanel from './components/ProjectsPanel';
import ArchitecturePanel from './components/ArchitecturePanel';
import SectionHeader from './components/SectionHeader';
import ChatWidget from './components/ChatWidget';
import { Icons } from './components/Icons';
import { cvData } from './constants';

const App: React.FC = () => {
  const [showPreviousExperience, setShowPreviousExperience] = useState(false);

  const handlePrintCV = () => {
    // We do not expand previous experience automatically to keep the print version short (max 3 pages).
    // If the user wants the full history, they can manually expand it before printing.
    window.print();
  };

  const architectureCert = cvData.certifications.find(c => c.name.toLowerCase().includes("software architecture"));

  return (
    <div className="min-h-screen bg-white text-medido-purple selection:bg-medido-peach selection:text-medido-purple">
      <Header profile={cvData.profile} />

      <main className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
        
        {/* --- PRINT LAYOUT: PAGE 1 --- */}
        <div className="hidden print:block mb-4">
            {/* 1. Executive Profile (Full Width with Image) */}
            <Summary text={cvData.profile.summary} onPrint={handlePrintCV} />
            
            <div className="mt-6 space-y-4">
               {/* 2. Professional Experience Header */}
               <SectionHeader title="Professional Experience" icon={<Icons.Briefcase size={28} />} />
               
               {/* 3. First Job (Full Width) */}
               <ExperienceCard job={cvData.experience[0]} isLatest={true} />
            </div>

            {/* Force Page Break after Page 1 content */}
            <div className="break-after-page"></div>
        </div>
        {/* --- END PRINT PAGE 1 --- */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Web Only: Summary (Hidden in print because it's on Page 1) */}
            <div className="print:hidden">
               <Summary text={cvData.profile.summary} onPrint={handlePrintCV} />
            </div>
            
            <section>
              {/* Web Only: Header (Hidden in print because it's on Page 1) */}
              <div className="print:hidden">
                <SectionHeader title="Professional Experience" icon={<Icons.Briefcase size={28} />} />
              </div>

              <div className="space-y-2">
                {cvData.experience.map((job, index) => (
                  // For Print: Skip the first job because it is already rendered on Page 1
                  <div key={index} className={index === 0 ? 'print:hidden' : ''}>
                    <ExperienceCard job={job} isLatest={index === 0} />
                  </div>
                ))}
              </div>
            </section>

            <section className={showPreviousExperience ? 'print-section' : ''}>
               <button 
                  onClick={() => setShowPreviousExperience(!showPreviousExperience)}
                  className="w-full py-4 flex items-center justify-center gap-3 text-medido-purple font-bold border-2 border-dashed border-medido-purple/20 hover:border-medido-purple hover:bg-medido-purple/5 rounded-2xl transition-all group text-lg no-print"
               >
                  {showPreviousExperience ? 'Hide' : 'Show'} Previous Experience
                  <Icons.Briefcase size={20} className={`transform transition-transform group-hover:rotate-12 ${showPreviousExperience ? 'rotate-180' : ''}`} />
               </button>

               {showPreviousExperience && (
                 <div className="mt-8 pt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    <SectionHeader title="Previous History" icon={<Icons.Briefcase size={28} />} />
                    <div className="space-y-2">
                      {cvData.previousExperience.map((job, index) => (
                        <ExperienceCard key={`prev-${index}`} job={job} />
                      ))}
                    </div>
                 </div>
               )}
            </section>
          </div>

          {/* Sidebar Column - Starts on Page 2 in Print */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Skills Panel - Default Vertical Stack for Sidebar */}
            <SkillsPanel skills={cvData.skills} variant="default" />
            
            {/* Architecture Section */}
            <ArchitecturePanel 
              initiatives={cvData.architecture} 
              certificate={architectureCert} 
            />
            
            {/* Projects Section */}
            <ProjectsPanel projects={cvData.projects} />

            {/* Education Section */}
            <div>
              <SectionHeader title="Education" icon={<Icons.Book size={28} />} />
              <div className="bg-medido-gray rounded-3xl p-8 border border-gray-100">
                <div className="space-y-10">
                  {cvData.education.map((edu, idx) => (
                    <div key={idx} className="relative pl-6 border-l-4 border-medido-peach">
                      <h4 className="text-medido-purple font-bold text-lg leading-tight">{edu.degree}</h4>
                      {edu.website ? (
                        <a href={edu.website} target="_blank" rel="noopener noreferrer" className="text-medido-purple/80 font-medium mt-1 hover:text-medido-peach flex items-center gap-1 group">
                          {edu.school} <Icons.Link size={12} className="opacity-0 group-hover:opacity-100" />
                        </a>
                      ) : (
                        <p className="text-medido-purple/80 font-medium mt-1">{edu.school}</p>
                      )}
                      <p className="text-medido-purple/60 text-sm mt-1 font-mono">{edu.year}</p>
                      {edu.details.length > 0 && (
                         <ul className="mt-3 space-y-2">
                           {edu.details.map((detail, dIdx) => (
                             <li key={dIdx} className="text-sm text-medido-purple/70 flex items-start gap-2">
                                <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-medido-peach shrink-0"></span>
                                {detail}
                             </li>
                           ))}
                         </ul>
                      )}
                      {edu.thesisLink && (
                        <a href={edu.thesisLink} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-medido-purple bg-medido-peach/20 px-2 py-1 rounded hover:bg-medido-peach/40 transition-colors">
                          <Icons.Book size={12} /> View Thesis
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications & Volunteering */}
            <div className="space-y-12">
               <div>
                <SectionHeader title="Certifications" icon={<Icons.Award size={28} />} />
                <div className="bg-white rounded-3xl p-6 border-2 border-medido-purple/10">
                  <ul className="space-y-6">
                    {cvData.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="p-3 bg-medido-peach/20 rounded-xl text-medido-purple">
                          <Icons.Award size={24} />
                        </div>
                        <div>
                          <div className="text-medido-purple font-bold leading-tight">{cert.name}</div>
                          <div className="text-medido-purple/60 text-sm mt-1">{cert.issuer}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
               </div>

               <div>
                <SectionHeader title="Volunteering" icon={<Icons.Users size={28} />} />
                <ul className="space-y-8">
                  {cvData.volunteer.map((vol, idx) => (
                    <li key={idx}>
                       <div className="text-medido-purple font-bold text-lg">{vol.role}</div>
                       <div className="text-medido-peach font-bold text-base">{vol.organization}</div>
                       <div className="text-medido-purple/50 text-sm mb-3 font-medium">{vol.period}</div>
                       <p className="text-medido-purple/80 text-base leading-relaxed">{vol.description}</p>
                    </li>
                  ))}
                </ul>
               </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="bg-medido-purple text-white py-16 mt-20 no-print">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Medido & Jelle Spijker</h2>
          <p className="text-white/70">Connecting technology with care.</p>
          <div className="mt-8 pt-8 border-t border-white/20 text-white/50 text-sm">
            <p>© {new Date().getFullYear()} Jelle Spijker. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div className="chat-widget">
        <ChatWidget />
      </div>
    </div>
  );
};

export default App;