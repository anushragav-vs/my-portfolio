import type { Milestone, Project } from '../../types';
import {
  Calendar,
  Briefcase,
  CheckCircle,
  Cpu,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface RoadmapNodeProps {
  milestone: Milestone;
  index: number;
  isActive: boolean;
  isPast: boolean;
  onSelectProject?: (project: Project) => void;
}

export const RoadmapNode: React.FC<RoadmapNodeProps> = ({
  milestone,
  index,
  isActive,
  isPast,
  onSelectProject,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      id={`milestone-${milestone.number}`}
      className={`relative w-full py-8 md:py-16 transition-all duration-500 ${
        isActive ? 'opacity-100 scale-100' : isPast ? 'opacity-90' : 'opacity-70'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Milestone Card - Left on even (desktop), right on odd */}
          <div
            className={`md:col-span-6 ${
              isEven ? 'md:order-1' : 'md:order-2 md:text-left'
            } pl-10 md:pl-0`}
          >
            <div
              className={`p-6 sm:p-8 rounded-3xl transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? 'glass-card-elevated border-2 border-aqua-electric shadow-glow-cyan'
                  : 'glass-card border border-aqua-electric/20 hover:border-aqua-electric/40'
              } ${milestone.isFuture ? 'bg-gradient-to-b from-dark-elevated to-dark-primary' : ''}`}
            >
              {/* Corner Glow Accent */}
              {isActive && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-aqua-electric/15 blur-2xl pointer-events-none" />
              )}

              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded-md font-semibold tracking-wider ${
                      isActive
                        ? 'bg-aqua-electric text-dark-primary'
                        : 'bg-dark-elevated text-aqua-electric border border-aqua-electric/30'
                    }`}
                  >
                    MILESTONE {milestone.number}
                  </span>
                  <span className="text-xs font-mono text-aqua-sky flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {milestone.period}
                  </span>
                </div>

                {milestone.badgeText && (
                  <span className="text-[11px] font-mono text-content-secondary px-2.5 py-0.5 rounded-full bg-dark-primary/60 border border-aqua-electric/15">
                    {milestone.badgeText}
                  </span>
                )}
              </div>

              {/* Title & Organization */}
              <div className="space-y-1 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-content-primary">
                  {milestone.title}
                </h3>
                {milestone.organization && (
                  <div className="flex items-center gap-2 text-sm text-aqua-sky font-medium">
                    <Briefcase className="w-4 h-4 text-aqua-electric shrink-0" />
                    <span>{milestone.organization}</span>
                    {milestone.role && (
                      <>
                        <span className="text-content-muted">•</span>
                        <span className="text-content-secondary">{milestone.role}</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Authentic Narrative Quote */}
              <div className="p-4 rounded-xl bg-dark-primary/70 border-l-2 border-aqua-electric mb-5">
                <p className="text-sm font-sans italic text-content-primary/95 leading-relaxed">
                  "{milestone.narrative}"
                </p>
              </div>

              {/* Key Activities List */}
              <div className="space-y-2 mb-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-content-muted">
                  Activities & Focus:
                </h4>
                <ul className="space-y-2">
                  {milestone.activities.map((act, i) => (
                    <li key={i} className="text-xs sm:text-sm text-content-secondary flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-aqua-electric mt-1.5 shrink-0 shadow-glow-sm" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-aqua-electric/15">
                {milestone.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-dark-elevated text-content-secondary border border-aqua-electric/15"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Embedded Project Showcase trigger in Milestone 5 */}
              {milestone.projects && milestone.projects.length > 0 && (
                <div className="mt-6 pt-5 border-t border-aqua-electric/25 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider text-aqua-electric font-semibold flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      Featured Milestone Projects
                    </span>
                    <a
                      href="#projects"
                      className="text-xs font-mono text-aqua-sky hover:underline flex items-center gap-1"
                    >
                      View All <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {milestone.projects.slice(0, 2).map((proj) => (
                      <div
                        key={proj.id}
                        onClick={() => onSelectProject && onSelectProject(proj)}
                        className="p-3.5 rounded-xl bg-dark-elevated/80 border border-aqua-electric/20 hover:border-aqua-electric/50 transition-all cursor-pointer flex items-center justify-between group"
                      >
                        <div className="space-y-0.5">
                          <h5 className="text-sm font-semibold text-content-primary group-hover:text-aqua-electric transition-colors">
                            {proj.title}
                          </h5>
                          <p className="text-xs text-content-secondary line-clamp-1">
                            {proj.summary}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-aqua-sky group-hover:translate-x-1 transition-transform shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Center Timeline Node Marker (Desktop center, Mobile left-aligned) */}
          <div className="hidden md:flex md:col-span-1 justify-center items-center order-2">
            <div
              className={`relative flex items-center justify-center w-12 h-12 rounded-2xl border-2 transition-all duration-300 ${
                isActive
                  ? 'bg-aqua-electric text-dark-primary border-aqua-electric shadow-glow-cyan-lg scale-110'
                  : isPast
                  ? 'bg-dark-elevated text-aqua-sky border-aqua-electric/60'
                  : 'bg-dark-primary text-content-muted border-aqua-electric/20'
              }`}
            >
              {milestone.isFuture ? (
                <Sparkles className="w-5 h-5 animate-spin-slow" />
              ) : isPast ? (
                <CheckCircle className="w-5 h-5" />
              ) : (
                <span className="font-mono text-sm font-bold">{milestone.number}</span>
              )}
            </div>
          </div>

          {/* Right/Empty Balance Column on Desktop for alternating rhythm */}
          <div
            className={`hidden md:block md:col-span-5 ${
              isEven ? 'md:order-3' : 'md:order-1'
            }`}
          >
            {/* Visual preview or metadata side-callout */}
            <div className="p-6 rounded-2xl border border-aqua-electric/10 bg-dark-secondary/30 backdrop-blur-sm max-w-sm mx-auto space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-content-muted block">
                Journey Stage {milestone.number} of 06
              </span>
              <p className="text-sm font-medium text-aqua-sky">
                {milestone.period} • {milestone.title}
              </p>
              <p className="text-xs text-content-secondary">
                {milestone.narrative}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
