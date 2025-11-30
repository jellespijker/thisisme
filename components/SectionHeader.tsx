import React from 'react';

interface SectionHeaderProps {
  title: string;
  icon?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-medido-purple tracking-tight">
        {title}
      </h2>
      <div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full w-24 bg-medido-peach rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionHeader;