import React, { useState } from 'react';
import { FunctionProfileId, IndustryId } from '../types';
import { FUNCTION_PROFILES, INDUSTRIES } from '../profiles';
import { FilterState, isFocused } from '../utils/filtering';
import { Icons } from './Icons';

interface FilterBarProps {
  filter: FilterState;
  onProfileChange: (profile: FunctionProfileId) => void;
  onIndustryToggle: (industry: IndustryId) => void;
  onClear: () => void;
  onPrint: () => void;
}

/**
 * Sticky control bar letting recruiters tailor the CV to a function profile
 * and/or industries. Hidden on print — it drives the print output instead.
 */
const FilterBar: React.FC<FilterBarProps> = ({ filter, onProfileChange, onIndustryToggle, onClear, onPrint }) => {
  const [copied, setCopied] = useState(false);
  const focused = isFocused(filter);

  const copyShareLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable (e.g. non-secure context); ignore */
    }
  };

  return (
    <div className="no-print sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b border-medido-purple/10 shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-3 flex flex-col gap-2.5">
        {/* Row 1: function profiles + actions */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-medido-purple/50 mr-1 shrink-0">
            View as
          </span>
          {FUNCTION_PROFILES.map(p => (
            <button
              key={p.id}
              onClick={() => onProfileChange(p.id)}
              aria-pressed={filter.profile === p.id}
              className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all border ${
                filter.profile === p.id
                  ? 'bg-medido-purple text-white border-medido-purple shadow-md'
                  : 'bg-white text-medido-purple border-medido-purple/15 hover:border-medido-purple/40 hover:-translate-y-0.5'
              }`}
            >
              {p.label}
            </button>
          ))}

          <div className="flex-1" />

          <div className="flex items-center gap-2">
            {focused && (
              <>
                <button
                  onClick={copyShareLink}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold text-medido-purple bg-medido-peach/20 hover:bg-medido-peach/40 transition-colors"
                  title="Copy a link that opens the CV with these filters applied"
                >
                  <Icons.Link size={14} /> {copied ? 'Link copied!' : 'Share view'}
                </button>
                <button
                  onClick={onClear}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-bold text-medido-purple/60 hover:text-medido-purple transition-colors"
                >
                  <Icons.Close size={14} /> Reset
                </button>
              </>
            )}
            <button
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 bg-medido-purple text-white px-4 py-1.5 rounded-full text-sm font-bold hover:bg-medido-purple/90 transition-all shadow-md"
              title={focused ? 'Print / save the focused CV as PDF (max 3 pages)' : 'Print / save the complete CV as PDF'}
            >
              <Icons.Briefcase size={14} /> {focused ? 'Export focused PDF' : 'Export PDF'}
            </button>
          </div>
        </div>

        {/* Row 2: industries */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-medido-purple/50 mr-1 shrink-0">
            Industry
          </span>
          {INDUSTRIES.filter(ind => !ind.hidden).map(ind => {
            const active = filter.industries.includes(ind.id);
            return (
              <button
                key={ind.id}
                onClick={() => onIndustryToggle(ind.id)}
                aria-pressed={active}
                className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all border ${
                  active
                    ? 'bg-medido-peach text-medido-purple border-medido-peach shadow-sm'
                    : 'bg-white text-medido-purple/70 border-medido-purple/15 hover:border-medido-peach/60'
                }`}
              >
                {ind.label}
              </button>
            );
          })}
          {focused && (
            <span className="text-xs text-medido-purple/50 font-medium ml-2">
              Focused view — unrelated entries are condensed, facts stay unchanged.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
