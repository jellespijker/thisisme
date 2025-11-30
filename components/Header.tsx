import React from 'react';
import { Profile } from '../types';
import { Icons } from './Icons';

interface HeaderProps {
  profile: Profile;
}

const Header: React.FC<HeaderProps> = ({ profile }) => {
  return (
    <>
      {/* Hero Section - The "Peach" Block */}
      <header className="bg-medido-peach text-medido-purple pt-20 pb-24 px-6 lg:px-12 relative overflow-hidden">
        
        {/* Medido Brand Logo positioned absolutely */}
        <div className="absolute top-8 left-6 lg:left-12 z-20">
           <img 
             src="https://medido.com/hs-fs/hubfs/Medido/Medido-logo.png?width=160&height=68&name=Medido-logo.png" 
             alt="Medido Logo" 
             className="h-10 w-auto"
           />
        </div>

        <div className="max-w-screen-2xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-medido-purple text-sm font-bold shadow-sm mb-2">
                 Candidate for Manager Cloud
               </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                {profile.name}
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-xl leading-relaxed opacity-90">
                {profile.title}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 no-print">
                <a href={`mailto:${profile.contact.email}`} className="inline-flex items-center justify-center gap-2 bg-medido-purple text-white px-8 py-4 rounded-full font-bold hover:bg-medido-purple/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <Icons.Mail size={20} />
                  Contact Me
                </a>
                <div className="flex gap-2">
                  <a href={profile.contact.linkedin} className="p-4 bg-white/20 hover:bg-white/40 text-medido-purple rounded-full transition-all">
                    <Icons.Linkedin size={24} />
                  </a>
                  <a href={profile.contact.github} className="p-4 bg-white/20 hover:bg-white/40 text-medido-purple rounded-full transition-all">
                    <Icons.Github size={24} />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 pt-8 text-medido-purple/80 font-medium text-sm">
                 <div className="flex items-center gap-2">
                    <Icons.Phone size={18} /> {profile.contact.phone}
                 </div>
                 <div className="flex items-center gap-2">
                    <Icons.MapPin size={18} /> {profile.contact.location}
                 </div>
              </div>
            </div>
            
            {/* Stats / Impact Visuals - Mimicking Medido Logo */}
            <div className="hidden lg:flex items-center justify-center no-print relative min-h-[400px]">
              {/* Container for the logo-mimicking shapes */}
              <div className="relative w-[340px] h-[340px]">
                
                {/* Top Petal - Teal - ISO */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-medido-teal rounded-[2.5rem] flex flex-col items-center justify-center text-center p-4 text-white shadow-lg hover:scale-105 transition-transform z-20">
                   <div className="text-3xl font-black mb-1">ISO</div>
                   <div className="text-xs font-bold opacity-90 leading-tight">27001 & Compliance</div>
                </div>

                {/* Left Petal - Stone/Grey - 10+ Years */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-40 h-40 bg-medido-stone rounded-[2.5rem] flex flex-col items-center justify-center text-center p-4 text-white shadow-lg hover:scale-105 transition-transform z-10">
                   <div className="text-3xl font-black mb-1">10+</div>
                   <div className="text-xs font-bold opacity-90 leading-tight">Years Leading Tech</div>
                </div>

                {/* Right Petal - Pink - IoT */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-40 h-40 bg-medido-pink rounded-[2.5rem] flex flex-col items-center justify-center text-center p-4 text-medido-purple shadow-lg hover:scale-105 transition-transform z-10">
                   <div className="text-3xl font-black mb-1">IoT</div>
                   <div className="text-xs font-bold opacity-90 leading-tight">Cyber-Physical Systems</div>
                </div>

                {/* Bottom Petal - Orange - Cloud */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-medido-orange rounded-[2.5rem] flex flex-col items-center justify-center text-center p-4 text-white shadow-lg hover:scale-105 transition-transform z-20">
                   <div className="text-3xl font-black mb-1">Cloud</div>
                   <div className="text-xs font-bold opacity-90 leading-tight">Native Architecture</div>
                </div>
                
                {/* Center Core - Overlap Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-medido-purple/20 rounded-full blur-xl z-0"></div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;