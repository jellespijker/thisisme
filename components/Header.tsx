import React from 'react';
import { Profile } from '../types';
import { Icons } from './Icons';

interface HeaderProps {
  profile: Profile;
  onPrint: () => void;
}

const Header: React.FC<HeaderProps> = ({ profile, onPrint }) => {
  return (
    <>
      {/* Hero Section - The "Peach" Block */}
      <header className="cv-header bg-medido-peach text-medido-purple py-12 px-6 lg:px-12 mt-6 lg:mt-12 mx-6 lg:mx-12 rounded-3xl relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-96 h-94 bg-white/10 rounded-full -mr-24 -mt-24 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-medido-purple/5 rounded-full -ml-16 -mb-16 pointer-events-none" />

        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center header-grid">
            
            {/* Left Column: Name & Metadata */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-medido-purple text-xs font-black shadow-sm tracking-wide">
                Engineering Manager | Software Architect
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-none">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl font-bold leading-tight opacity-90 text-medido-purple">
                {profile.title}
              </p>
              
              <div className="flex flex-wrap gap-4 text-medido-purple/80 font-semibold text-sm">
                <div className="flex items-center gap-2">
                  <Icons.Phone size={16} /> {profile.contact.phone}
                </div>
                <div className="flex items-center gap-2">
                  <Icons.MapPin size={16} /> {profile.contact.location}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button 
                  onClick={onPrint}
                  className="no-print inline-flex items-center gap-2 bg-medido-purple text-white px-6 py-3 rounded-full font-bold hover:bg-medido-purple/90 transition-all shadow-md hover:-translate-y-0.5"
                >
                  <Icons.Briefcase size={16} /> Download CV
                </button>
                <a 
                  href="https://jellespijker.github.io/thisisme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden print:inline-flex items-center gap-2 bg-medido-purple text-white px-6 py-3 rounded-full font-bold border border-medido-purple/10 shadow-sm"
                >
                  <Icons.Sparkles size={16} /> Interactive CV
                </a>
                <a 
                  href={`mailto:${profile.contact.email}`} 
                  className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-medido-purple px-6 py-3 rounded-full font-bold transition-all shadow-sm hover:-translate-y-0.5 border border-medido-purple/10"
                >
                  <Icons.Mail size={16} /> Email Me
                </a>
                <a 
                  href={profile.contact.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/30 hover:bg-white/50 text-medido-purple rounded-full transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Icons.Linkedin size={20} />
                </a>
                <a 
                  href={profile.contact.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/30 hover:bg-white/50 text-medido-purple rounded-full transition-all"
                  aria-label="GitHub Profile"
                >
                  <Icons.Github size={20} />
                </a>
              </div>
            </div>
            
            {/* Right Column: Executive Profile glassmorphic card */}
            <div className="lg:col-span-7">
              <div className="bg-white/40 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/30 shadow-md">
                <h2 className="text-2xl font-black mb-4 flex items-center gap-2 text-medido-purple">
                  <Icons.Sparkles size={20} className="text-medido-purple" /> Executive Profile
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-medido-purple/90 font-medium">
                  {profile.summary}
                </p>
              </div>
            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;