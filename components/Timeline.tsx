import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Certification, Education, ExperiencePoint } from '../types';
import { DerivedRole, PrintTrimmed, RoleRenderMode } from '../utils/filtering';
import { Icons } from './Icons';
import SkillBadge from './SkillBadge';

export interface DerivedEducation {
  edu: Education;
  mode: RoleRenderMode;
  printHidden: boolean;
}

export interface DerivedCertification {
  cert: Certification;
  printHidden: boolean;
}

interface TimelineProps {
  experience: DerivedRole[];
  previousExperience: DerivedRole[];
  education: DerivedEducation[];
  certifications?: DerivedCertification[];
  /** True when a profile/industry filter is active — auto-expands matching entries. */
  focused: boolean;
  mode?: 'professional' | 'educational';
}

interface MergedTimelineItem {
  id: string;
  type: 'work' | 'education' | 'previous-work' | 'certification';
  /** 'compact' renders a slim one-line row (entry kept for an honest, gap-free chronology). */
  renderMode: RoleRenderMode;
  /** Row is shown on screen but dropped from the space-constrained print layout. */
  printHidden?: boolean;
  /** Row header prints, but its details are dropped from the print layout. */
  detailsPrintHidden?: boolean;
  title: string;
  subtitle: string;
  period: string;
  location?: string;
  website?: string;
  responsibility?: string;
  highlights?: PrintTrimmed<ExperiencePoint>[];
  leadershipHighlights?: PrintTrimmed<ExperiencePoint>[];
  engineeringHighlights?: PrintTrimmed<ExperiencePoint>[];
  techStack?: string[];
  details?: string[];
  thesisLink?: string;
  credentialId?: string;
  sortValue: number;
}

const Timeline: React.FC<TimelineProps> = ({ experience, previousExperience, education, certifications, focused, mode = 'professional' }) => {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const col1EndRef = useRef<HTMLDivElement>(null);
  const col2StartRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x1: number; y1: number; x2: number; y2: number; y_bottom: number; containerHeight: number } | null>(null);

  // For dynamic height balancing
  const [heights, setHeights] = useState<Record<string, number>>({});
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const observerRef = useRef<ResizeObserver | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getSortValue = React.useCallback((dateStr: string | undefined): number => {
    if (!dateStr) return 0;

    // Split by hyphen or en-dash to isolate the start date
    const parts = dateStr.split(/[–-]/);
    const startPart = parts[0].trim();

    const match = startPart.match(/\b(19\d{2}|20\d{2})\b/);
    if (!match) return 0;
    let val = parseInt(match[1]);

    const months: Record<string, number> = {
      jan: 1, january: 1,
      feb: 2, february: 2,
      mar: 3, march: 3,
      apr: 4, april: 4,
      may: 5,
      jun: 6, june: 6,
      jul: 7, july: 7,
      aug: 8, august: 8,
      sep: 9, september: 9,
      oct: 10, october: 10,
      nov: 11, november: 11,
      dec: 12, december: 12
    };
    const monthMatch = startPart.match(/\b(january|jan|february|feb|march|mar|april|apr|may|june|jun|july|jul|august|aug|september|sep|october|oct|november|nov|december|dec)\b/i);
    if (monthMatch) {
      const mVal = months[monthMatch[1].toLowerCase()];
      val += mVal / 12;
    }

    return val;
  }, []);

  // Build the complete combined timeline based on the specified mode, fully integrated chronologically
  const allTimelineItems = React.useMemo<MergedTimelineItem[]>(() => {
    const items: MergedTimelineItem[] = [];

    const fromDerivedRole = (derived: DerivedRole, id: string, type: 'work' | 'previous-work'): MergedTimelineItem => ({
      id,
      type,
      renderMode: derived.mode,
      title: derived.role.title,
      subtitle: derived.role.company,
      period: derived.role.period,
      location: derived.role.location,
      website: derived.role.website,
      responsibility: derived.responsibility,
      highlights: derived.highlights,
      leadershipHighlights: derived.leadershipHighlights,
      engineeringHighlights: derived.engineeringHighlights,
      techStack: derived.role.techStack,
      sortValue: getSortValue(derived.role.period)
    });

    if (mode === 'professional') {
      items.push(
        ...experience.map((job, idx) => fromDerivedRole(job, `work-${idx}`, 'work')),
        ...previousExperience.map((job, idx) => fromDerivedRole(job, `prev-${idx}`, 'previous-work'))
      );
    } else {
      items.push(
        ...education.map(({ edu, mode: eduMode, printHidden }, idx) => ({
          id: `edu-${idx}`,
          type: 'education' as const,
          renderMode: eduMode,
          // On full rows the flag trims details from print; on compact rows it drops the row.
          printHidden: eduMode === 'compact' ? printHidden : false,
          detailsPrintHidden: eduMode === 'full' ? printHidden : false,
          title: edu.degree,
          subtitle: edu.school,
          period: edu.year,
          website: edu.website,
          details: edu.details,
          thesisLink: edu.thesisLink,
          techStack: edu.techStack,
          sortValue: getSortValue(edu.year)
        })),
        ...(certifications || []).map(({ cert, printHidden }, idx) => ({
          id: `cert-${idx}`,
          type: 'certification' as const,
          renderMode: 'full' as const,
          printHidden,
          title: cert.name,
          subtitle: cert.issuer || '',
          period: cert.date || '',
          details: [
            ...(cert.credentialId ? [`Credential ID: ${cert.credentialId}`] : []),
            ...(cert.details || [])
          ],
          techStack: cert.techStack,
          sortValue: getSortValue(cert.date)
        }))
      );
    }

    return items.sort((a, b) => b.sortValue - a.sortValue);
  }, [mode, experience, previousExperience, education, certifications, getSortValue]);

  // Set default expanded states: in a focused view every full (matching) entry
  // is opened; in the complete view the curated set of key entries is opened.
  useEffect(() => {
    const titlesToExpand = [
      "Manager Firmware & Cloud Development",
      "Manager Cloud & Digital Factory",
      "Team Lead",
      "Software Engineer (C++ / Python)",
      "Mechatronic Engineer R&D",
      "Research and Development Engineer",
      "Certified Professional for Software Architecture Foundation Level",
      "Modern C++ design patterns",
      "Bachelor of Engineering (BEng), Embedded Vision Design (Minor)",
      "Bachelor of Engineering (BEng), Mechanical Engineering"
    ];

    const defaults: Record<string, boolean> = {};
    allTimelineItems.forEach(item => {
      if (focused) {
        if (item.renderMode === 'full') defaults[item.id] = true;
      } else if (titlesToExpand.some(t => item.title.toLowerCase().includes(t.toLowerCase()))) {
        defaults[item.id] = true;
      }
    });

    if (focused) {
      // A changed filter is a new reading context: reset to the tailored defaults.
      setExpandedIds(defaults);
      return;
    }

    setExpandedIds(prev => {
      // Merge defaults, but keep any manually toggled states
      const next = { ...defaults };
      Object.keys(prev).forEach(key => {
        next[key] = prev[key];
      });
      return next;
    });
  }, [allTimelineItems, focused]);

  // Dynamically calculate the split point based on actual element heights
  const midIndex = React.useMemo(() => {
    const defaultSplit = Math.ceil(allTimelineItems.length / 2);
    if (mode !== 'educational') {
      return defaultSplit;
    }

    let bestDiff = Infinity;
    let bestSplit = defaultSplit;

    for (let i = 1; i < allTimelineItems.length; i++) {
      const col1 = allTimelineItems.slice(0, i);
      const col2 = allTimelineItems.slice(i);

      // We use a safe fallback height of 130px (typical card height with margins)
      // to avoid height mismatch calculation issues before cards are observed.
      const h1 = col1.reduce((sum, item) => sum + (heights[item.id] || 130), 0);
      const h2 = col2.reduce((sum, item) => sum + (heights[item.id] || 130), 0) + 24; // +24px for col2 pt-6

      const diff = Math.abs(h1 - h2);
      if (diff < bestDiff) {
        bestDiff = diff;
        bestSplit = i;
      }
    }
    return bestSplit;
  }, [allTimelineItems, heights, mode]);

  // Setup the ResizeObserver once when mode is 'educational'
  useEffect(() => {
    if (mode !== 'educational') {
      setHeights({});
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      return;
    }

    observerRef.current = new ResizeObserver((entries) => {
      setHeights(prev => {
        let changed = false;
        const next = { ...prev };
        for (const entry of entries) {
          const id = entry.target.getAttribute('data-timeline-id');
          if (id) {
            const rect = entry.target.getBoundingClientRect();
            const h = rect.height;
            // Only update height state if there is a significant, noticeable resize (> 0.5px)
            if (Math.abs((next[id] || 0) - h) > 0.5) {
              next[id] = h;
              changed = true;
            }
          }
        }
        return changed ? next : prev;
      });
    });

    // Re-observe any rowRefs that are currently registered
    Object.values(rowRefs.current).forEach(el => {
      if (el && observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [mode]);

  useEffect(() => {
    if (mode !== 'educational') {
      setCoords(null);
      return;
    }

    const updateCoords = () => {
      if (col1EndRef.current && col2StartRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const endRect = col1EndRef.current.getBoundingClientRect();
        const startRect = col2StartRef.current.getBoundingClientRect();
        const col1Rect = col1Ref.current ? col1Ref.current.getBoundingClientRect() : null;

        const x1 = endRect.left - containerRect.left + endRect.width / 2;
        const y1 = endRect.top - containerRect.top + endRect.height / 2;
        const x2 = startRect.left - containerRect.left + startRect.width / 2;
        const y2 = startRect.top - containerRect.top + startRect.height / 2;

        // Calculate the bottom point safely below the last card in Column 1
        const y_bottom = col1Rect
          ? (col1Rect.bottom - containerRect.top + 28)
          : (y1 + 80);

        setCoords({ x1, y1, x2, y2, y_bottom, containerHeight: containerRect.height });
      }
    };

    // Calculate initial coordinates
    updateCoords();

    // Set up ResizeObserver to track layout changes smoothly during transitions
    const resizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(() => {
        updateCoords();
      });
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    if (col1Ref.current) {
      resizeObserver.observe(col1Ref.current);
    }

    window.addEventListener('resize', updateCoords);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateCoords);
    };
  }, [mode, education, certifications, midIndex]);

  const renderHighlights = (highlights: PrintTrimmed<ExperiencePoint>[]) => (
    <div className="space-y-3 text-medido-purple/80 text-base leading-relaxed mt-4">
      {highlights.map(({ item: highlight, printHidden }, idx) => (
        <div key={idx} className={`flex items-start gap-2.5 ${printHidden ? 'print:hidden' : ''}`}>
          <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-medido-peach shrink-0" />
          <div className="w-full">
            {highlight.title && <strong className="text-medido-purple font-bold block text-sm mb-0.5">{highlight.title}</strong>}
            <ReactMarkdown
              components={{
                a: ({ node, ...props }) => (
                  <a
                    {...props}
                    className="text-medido-purple font-bold underline decoration-medido-peach/50 hover:decoration-medido-peach hover:text-medido-peach transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ),
                p: ({ node, ...props }) => <p {...props} className="m-0 inline text-sm" />
              }}
            >
              {highlight.description}
            </ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCardContent = (item: MergedTimelineItem) => {
    const isExpanded = !!expandedIds[item.id];
    const isWork = item.type === 'work' || item.type === 'previous-work';

    const hasLeadership = (item.leadershipHighlights?.length ?? 0) > 0;
    const hasEngineering = (item.engineeringHighlights?.length ?? 0) > 0;
    const hasGeneric = (item.highlights?.length ?? 0) > 0;

    return (
      <div
        onClick={() => toggleExpand(item.id)}
        className={`w-full p-6 lg:p-8 rounded-2xl border transition-all duration-300 hover:shadow-md cursor-pointer group text-left relative overflow-hidden ${
          isWork
            ? isExpanded
              ? 'bg-white border-medido-peach/40 shadow-sm'
              : 'bg-white border-medido-purple/10 hover:border-medido-purple/20'
            : isExpanded
              ? 'bg-medido-peach/[0.06] border-medido-peach/50 shadow-sm'
              : 'bg-medido-peach/[0.03] border-medido-peach/20 hover:border-medido-peach/35'
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <h4 className="text-xl font-extrabold text-medido-purple group-hover:text-medido-peach transition-colors leading-snug">
              {item.title}
            </h4>

            {/* Unified Organization/School and Period info inside card header */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm">
              {item.website ? (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-medido-purple hover:text-medido-peach flex items-center gap-1 group/link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.subtitle} <Icons.Link size={12} className="opacity-60 group-hover/link:opacity-100 transition-opacity" />
                </a>
              ) : (
                <span className="font-bold text-medido-purple/80">{item.subtitle}</span>
              )}

              <span className="text-medido-purple/30">•</span>
              <span className="font-semibold text-medido-purple/60">{item.period}</span>

              {item.location && (
                <>
                  <span className="text-medido-purple/30">•</span>
                  <span className="text-medido-purple/50">{item.location}</span>
                </>
              )}
            </div>
          </div>
          <button className="no-print text-medido-purple/40 group-hover:text-medido-purple shrink-0 mt-1 transition-colors bg-medido-gray hover:bg-medido-purple/5 p-2 rounded-xl border border-medido-purple/5">
            {isExpanded ? <Icons.Minimize size={18} /> : <Icons.Maximize size={18} />}
          </button>
        </div>

        {/* Collapsible area — the `card-details` class force-expands it on print */}
        <div
          className={`card-details transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100 mt-5' : 'max-h-0 opacity-0'} ${item.detailsPrintHidden ? 'print:hidden' : ''}`}
          onClick={(e) => e.stopPropagation()}
        >
          {item.responsibility && (
            <div className="mb-4 p-3.5 bg-medido-gray rounded-xl border border-gray-100 text-sm">
              <span className="font-bold text-medido-purple">Scope:</span> <span className="text-medido-purple/80">{item.responsibility}</span>
            </div>
          )}

          {hasGeneric && renderHighlights(item.highlights!)}

          {hasLeadership && (
            <div className="mt-4">
              <h5 className="flex items-center gap-1.5 text-medido-purple font-bold text-xs uppercase tracking-wider opacity-70">
                <Icons.Users size={14} /> Leadership Focus
              </h5>
              {renderHighlights(item.leadershipHighlights!)}
            </div>
          )}

          {hasEngineering && (
            <div className="mt-4">
              <h5 className="flex items-center gap-1.5 text-medido-purple font-bold text-xs uppercase tracking-wider opacity-70">
                <Icons.Code size={14} /> Engineering Focus
              </h5>
              {renderHighlights(item.engineeringHighlights!)}
            </div>
          )}

          {item.details && item.details.length > 0 && (
            <ul className="mt-3 space-y-2">
              {item.details.map((detail, dIdx) => (
                <li key={dIdx} className="text-sm text-medido-purple/70 flex items-start gap-2">
                  <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-medido-peach shrink-0"></span>
                  {detail}
                </li>
              ))}
            </ul>
          )}

          {item.thesisLink && (
            <div className="mt-4">
              <a href={item.thesisLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-medido-purple bg-medido-peach/20 px-2.5 py-1.5 rounded hover:bg-medido-peach/40 transition-colors">
                <Icons.Book size={12} /> View Thesis
              </a>
            </div>
          )}

          {item.techStack && (
            <div className="tech-tags-container mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
              {item.techStack.map((tech, idx) => (
                <SkillBadge key={idx} skill={tech} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  /** Slim one-line row for entries outside the active filter: keeps the career chronology honest without spending space. */
  const renderCompactContent = (item: MergedTimelineItem) => (
    <div className="compact-item w-full px-6 py-3 rounded-2xl border border-medido-purple/10 bg-medido-gray/60">
      <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
        <span className="font-bold text-medido-purple/80 text-sm">{item.title}</span>
        <span className="text-medido-purple/30 text-sm">•</span>
        <span className="font-semibold text-medido-purple/60 text-sm">{item.subtitle}</span>
        <span className="text-medido-purple/30 text-sm">•</span>
        <span className="text-medido-purple/50 text-sm">{item.period}</span>
      </div>
    </div>
  );

  const renderTimelineRow = (item: MergedTimelineItem, iconRef?: React.RefObject<HTMLDivElement | null>) => {
    const isWork = item.type === 'work' || item.type === 'previous-work';
    const isCompact = item.renderMode === 'compact';

    return (
      <div
        key={item.id}
        ref={el => {
          if (el) {
            rowRefs.current[item.id] = el;
            if (observerRef.current) {
              observerRef.current.observe(el);
            }
          } else {
            delete rowRefs.current[item.id];
          }
        }}
        data-timeline-id={item.id}
        className={`relative flex gap-6 lg:gap-8 items-start ${isCompact ? 'mb-3' : 'mb-5 lg:mb-7'} ${
          isWork ? 'experience-item' : 'education-item'
        } ${
          item.printHidden ? 'print:hidden' : ''
        }`}
      >
        {/* Left Side: Timeline line node containing enlarged icon */}
        <div className="flex flex-col items-center shrink-0 relative z-10">
          <div
            ref={iconRef}
            className={`${isCompact ? 'w-12 h-12 lg:w-14 lg:h-14 scale-[0.6]' : 'w-12 h-12 lg:w-14 lg:h-14'} rounded-full border-4 border-white flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-110 ${
              isWork ? 'bg-medido-purple text-white shadow-medido-purple/20' : 'bg-medido-peach text-medido-purple shadow-medido-peach/20'
            } ${isCompact ? 'opacity-60' : ''}`}
          >
            {isWork ? (
              <Icons.Briefcase className="w-5 h-5 lg:w-6 lg:h-6" />
            ) : item.type === 'certification' ? (
              <Icons.Award className="w-5 h-5 lg:w-6 lg:h-6" />
            ) : (
              <Icons.Book className="w-5 h-5 lg:w-6 lg:h-6" />
            )}
          </div>
        </div>

        {/* Right Side: The full unified card component */}
        <div className="flex-1 min-w-0">
          {isCompact ? renderCompactContent(item) : renderCardContent(item)}
        </div>
      </div>
    );
  };

  if (mode === 'educational') {
    const col1Items = allTimelineItems.slice(0, midIndex);
    const col2Items = allTimelineItems.slice(midIndex);

    return (
      <div ref={containerRef} className="relative w-full py-6">
        {/* On mobile / small viewports: render as a standard single-column timeline */}
        <div className="md:hidden relative print:block">
          <div className="absolute left-[22px] lg:left-[26px] top-0 bottom-0 w-1 bg-gradient-to-b from-medido-purple via-medido-peach to-medido-purple/20 rounded-full" />
          <div className="relative">
            {allTimelineItems.map((item, idx) => {
              const isCol1End = idx === midIndex - 1;
              const isCol2Start = idx === midIndex;
              return renderTimelineRow(
                item,
                isCol1End ? col1EndRef : isCol2Start ? col2StartRef : undefined
              );
            })}
          </div>
        </div>

        {/* On larger viewports: 2-column grid with bottom padding to hold the connector wire safely inside */}
        <div className="hidden md:grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-0 relative pb-16 print:hidden">
          {/* Column 1 */}
          <div ref={col1Ref} className="relative pb-6">
            {/* Column 1 Vertical Line - Fallback, hides when coords are active except on print */}
            <div className={`absolute left-[22px] lg:left-[26px] top-0 w-1 bg-gradient-to-b from-medido-purple to-medido-peach rounded-full transition-opacity duration-300 ${coords ? 'opacity-0 print:opacity-100' : 'opacity-100'}`} style={{ height: 'calc(100% - 52px)' }} />
            <div className="relative">
              {col1Items.map((item, idx) => {
                const isLast = idx === col1Items.length - 1;
                return renderTimelineRow(item, isLast ? col1EndRef : undefined);
              })}
            </div>
          </div>

          {/* Column 2 */}
          <div className="relative pt-6">
            {/* Column 2 Vertical Line - Fallback, hides when coords are active except on print */}
            <div className={`absolute left-[22px] lg:left-[26px] top-6 bottom-0 w-1 bg-gradient-to-b from-medido-peach to-medido-purple/20 rounded-full transition-opacity duration-300 ${coords ? 'opacity-0 print:opacity-100' : 'opacity-100'}`} />
            <div className="relative">
              {col2Items.map((item, idx) => {
                const isFirst = idx === 0;
                return renderTimelineRow(item, isFirst ? col2StartRef : undefined);
              })}
            </div>
          </div>

          {/* Dynamic SVG connecting line and vertical lines, relative to containerRef */}
          {coords && (() => {
            const { x1, y1, x2, y2, y_bottom, containerHeight } = coords;
            // Route the vertical line in the gutter channel to the left of Column 2's icons
            const x_gutter = x2 - 32;
            const r = 16; // Turn corner radius for smooth curves

            // Circuit trace routing path
            const dPath = `
              M ${x1} ${y1}
              L ${x1} ${y_bottom - r}
              Q ${x1} ${y_bottom}, ${x1 + r} ${y_bottom}
              L ${x_gutter - r} ${y_bottom}
              Q ${x_gutter} ${y_bottom}, ${x_gutter} ${y_bottom - r}
              L ${x_gutter} ${y2 - 24 + r}
              Q ${x_gutter} ${y2 - 24}, ${x_gutter + r} ${y2 - 24}
              L ${x2 - r} ${y2 - 24}
              Q ${x2} ${y2 - 24}, ${x2} ${y2 - 24 + r}
              L ${x2} ${y2}
            `.trim().replace(/\s+/g, ' ');

            return (
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 print:hidden">
                {/* Column 1 Solid Line ending EXACTLY at the last icon's center */}
                <line
                  x1={x1}
                  y1={24}
                  x2={x1}
                  y2={y1}
                  stroke="#380559"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Circuit trace */}
                <path
                  d={dPath}
                  stroke="#FFAD7E"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="6 6"
                  className="animate-[dash_2s_linear_infinite]"
                />
                {/* Column 2 Solid Line starting EXACTLY at the first icon's center */}
                <line
                  x1={x2}
                  y1={y2}
                  x2={x2}
                  y2={containerHeight - 16}
                  stroke="#FFAD7E"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            );
          })()}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full py-6">
      {/* Background Vertical Axis Line (aligned precisely with the center of the left icons) */}
      <div className="absolute left-[22px] lg:left-[26px] top-0 bottom-0 w-1 bg-gradient-to-b from-medido-purple via-medido-peach to-medido-purple/20 rounded-full" />

      {/* Timeline Rows */}
      <div className="relative">
        {allTimelineItems.map((item) => renderTimelineRow(item))}
      </div>
    </div>
  );
};

export default Timeline;
