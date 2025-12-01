import React from 'react';
import { Icons } from './Icons';

interface SummaryProps {
  text: string;
  onPrint: () => void;
}

const Summary: React.FC<SummaryProps> = ({ text, onPrint }) => {
  return (
    <div className="bg-medido-purple text-white rounded-[40px] p-8 md:p-12 shadow-xl relative overflow-hidden">
      {/* Decorative Circles matching Medido branding style */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-medido-peach/10 rounded-full -ml-10 -mb-10 pointer-events-none"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <h2 className="text-4xl font-extrabold mb-6 flex items-center gap-3">
             Executive Profile
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/90 font-medium">
            {text}
          </p>
          <div className="mt-8 no-print">
             <button 
               onClick={onPrint}
               className="bg-white text-medido-purple px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg transform active:scale-95"
             >
               Download CV <Icons.Briefcase size={18} />
             </button>
          </div>
        </div>
        
        {/* Visual representation of Team/Leadership in Landscape */}
        <div className="hidden lg:block lg:col-span-2 h-full min-h-[300px] bg-white/10 rounded-3xl relative overflow-hidden group border border-white/10 no-print">
            <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
               alt="Engineering Team Leadership" 
               className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="bg-medido-purple/90 backdrop-blur-md rounded-2xl p-4 text-white border border-white/20">
                    <p className="font-bold text-sm text-medido-peach">Leadership Philosophy</p>
                    <p className="text-xs mt-1 leading-snug">"Calm, pragmatic leadership. Building a community of leaders. Should I do this now?"</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;