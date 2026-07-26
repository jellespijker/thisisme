import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import Timeline from './components/Timeline';
import SkillsPanel from './components/SkillsPanel';
import ProjectsPanel from './components/ProjectsPanel';
import ArchitecturePanel from './components/ArchitecturePanel';
import SectionHeader from './components/SectionHeader';
import { Icons } from './components/Icons';
import RecommendationsPanel from './components/RecommendationsPanel';
import { cvData } from './constants';
import { getProfile } from './profiles';
import {
  DEFAULT_FILTER,
  deriveCV,
  FilterState,
  filterStateFromUrl,
  filterStateToSearch,
} from './utils/filtering';
import { track, telemetryConfigured } from './utils/telemetry';
import { FunctionProfileId, IndustryId } from './types';

const App: React.FC = () => {
  const [filter, setFilter] = useState<FilterState>(() =>
    typeof window === 'undefined' ? DEFAULT_FILTER : filterStateFromUrl(window.location.search)
  );

  const derived = useMemo(() => deriveCV(cvData, filter), [filter]);

  // Keep the URL shareable and the tab title tailored to the active profile.
  useEffect(() => {
    const search = filterStateToSearch(filter);
    const url = `${window.location.pathname}${search}${window.location.hash}`;
    window.history.replaceState(null, '', url);

    const profile = getProfile(filter.profile);
    document.title =
      filter.profile === 'all'
        ? 'Jelle Spijker | Engineering Leadership, Architecture & AI'
        : `Jelle Spijker | ${profile.label}`;
  }, [filter]);

  // Support back/forward navigation between filter states.
  useEffect(() => {
    const onPopState = () => setFilter(filterStateFromUrl(window.location.search));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // One page-view beacon per visit.
  useEffect(() => {
    track('page_view');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateFilter = useCallback((next: FilterState) => {
    setFilter(next);
    track('filter_change', {
      profile: next.profile,
      industries: next.industries.join(',') || 'none',
    });
  }, []);

  // Clicking a visible chip exits any hidden spotlight view — the reader is now
  // driving the public filters, so drop the secret emphasis.
  const handleProfileChange = useCallback(
    (profile: FunctionProfileId) => updateFilter({ ...filter, profile, spotlight: undefined }),
    [filter, updateFilter]
  );

  const handleIndustryToggle = useCallback(
    (industry: IndustryId) =>
      updateFilter({
        ...filter,
        spotlight: undefined,
        industries: filter.industries.includes(industry)
          ? filter.industries.filter(i => i !== industry)
          : [...filter.industries, industry],
      }),
    [filter, updateFilter]
  );

  const handleClear = useCallback(() => updateFilter(DEFAULT_FILTER), [updateFilter]);

  const handlePrintCV = useCallback(() => {
    track('print', {
      profile: filter.profile,
      industries: filter.industries.join(',') || 'none',
    });
    window.print();
  }, [filter]);

  const focused = derived.focused;

  return (
    <div className={`min-h-screen bg-white text-medido-purple selection:bg-medido-peach selection:text-medido-purple ${focused ? 'cv-focused' : ''} ${filter.spotlight ? 'cv-spotlight' : ''}`}>
      <FilterBar
        filter={filter}
        onProfileChange={handleProfileChange}
        onIndustryToggle={handleIndustryToggle}
        onClear={handleClear}
        onPrint={handlePrintCV}
      />

      <Header profile={cvData.profile} pills={derived.pills} summary={derived.summary} onPrint={handlePrintCV} />

      <main className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">

        {/* Professional Experience Section */}
        <section className="mb-20">
          <SectionHeader title="Professional Experience" icon={<Icons.Briefcase size={28} />} />
          <Timeline
            mode="professional"
            focused={focused}
            experience={derived.experience}
            previousExperience={derived.previousExperience}
            education={derived.education}
            certifications={derived.certifications}
          />
        </section>

        {/* Education & Courses Section */}
        <section className="mb-20">
          <SectionHeader title="Education & Courses" icon={<Icons.Book size={28} />} />
          <Timeline
            mode="educational"
            focused={focused}
            experience={derived.experience}
            previousExperience={derived.previousExperience}
            education={derived.education}
            certifications={derived.certifications}
          />
        </section>

        {/* Full-width Stack of Supplementary Sections */}
        <div className="space-y-20 mt-20">

          <SkillsPanel skills={derived.skills} variant="full" />

          <ProjectsPanel projects={derived.projects} />

          <ArchitecturePanel initiatives={derived.architecture} />

          <RecommendationsPanel recommendations={derived.recommendations} />

          {derived.volunteer.length > 0 && (
            <div className={derived.volunteer.every(v => v.printHidden) ? 'print:hidden' : ''}>
              <SectionHeader title="Volunteering & Open Source" icon={<Icons.Users size={28} />} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {derived.volunteer.map(({ item: vol, printHidden }, idx) => (
                  <div key={idx} className={`volunteering-item bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all ${printHidden ? 'print:hidden' : ''}`}>
                      <div className="text-medido-purple font-bold text-lg">{vol.role}</div>
                      <div className="text-medido-peach font-bold text-base mt-0.5">{vol.organization}</div>
                      <div className="text-medido-purple/50 text-sm mb-3 font-medium">{vol.period}</div>
                      <p className="text-medido-purple/80 text-base leading-relaxed">{vol.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      <footer className="bg-medido-purple text-white py-16 mt-20 no-print">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Jelle Spijker | Software Leadership & Architecture</h2>
          <p className="text-white/70">Connecting physical craftsmanship with cloud scale.</p>
          <div className="mt-8 pt-8 border-t border-white/20 text-white/50 text-sm space-y-3">
            {telemetryConfigured() && (
              <p className="max-w-3xl mx-auto">
                A note on telemetry: this site sends a small, cookie-free visit signal (page view,
                filter choice, PDF export) to my own Home Assistant server at home — no third-party
                analytics, no cross-visit tracking, and browser Do&nbsp;Not&nbsp;Track / Global Privacy
                Control settings are honored.
              </p>
            )}
            <p>© {new Date().getFullYear()} Jelle Spijker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
