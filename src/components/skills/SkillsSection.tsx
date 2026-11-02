import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Layers, CheckCircle2, BookOpen, Wrench } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [filterLevel, setFilterLevel] = useState<string>('All');

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Used in Projects':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" /> Used in Projects
          </span>
        );
      case 'Practically Explored':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-aqua-sky/15 text-aqua-sky border border-aqua-sky/30">
            <Wrench className="w-3 h-3" /> Practically Explored
          </span>
        );
      case 'Currently Learning':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-amber-400/15 text-amber-300 border border-amber-400/30">
            <BookOpen className="w-3 h-3" /> Currently Learning
          </span>
        );
    }
  };

  return (
    <section id="about" className="relative py-24 bg-dark-primary bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-aqua-electric/25 shadow-glow-sm">
            <Layers className="w-3.5 h-3.5 text-aqua-electric" />
            <span className="text-xs font-mono uppercase tracking-widest text-aqua-electric">
              Technical Stack & Foundations
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
            Skills & Competencies
          </h2>

          <p className="text-base sm:text-lg text-content-secondary">
            Transparently categorized by real-world application stage. No arbitrary percentage bars
            or fabricated mastery claims.
          </p>

          {/* Level Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {['All', 'Used in Projects', 'Practically Explored', 'Currently Learning'].map((level) => (
              <button
                key={level}
                onClick={() => setFilterLevel(level)}
                className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all ${
                  filterLevel === level
                    ? 'bg-dark-elevated text-aqua-electric border border-aqua-electric shadow-glow-sm'
                    : 'text-content-secondary hover:text-content-primary bg-dark-secondary/50 border border-transparent'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const visibleSkills = cat.skills.filter(
              (s) => filterLevel === 'All' || s.level === filterLevel
            );

            if (visibleSkills.length === 0) return null;

            return (
              <div
                key={idx}
                className="rounded-3xl glass-card border border-aqua-electric/20 p-6 flex flex-col justify-between hover:border-aqua-electric/40 transition-all hover:shadow-glow-cyan"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-aqua-electric/15">
                    <h3 className="font-mono text-sm font-bold text-aqua-electric uppercase tracking-wider">
                      {cat.title}
                    </h3>
                    <span className="text-xs font-mono text-content-muted">
                      {visibleSkills.length} {visibleSkills.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {visibleSkills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 rounded-2xl bg-dark-elevated/60 border border-aqua-electric/10 space-y-1.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-content-primary">
                            {skill.name}
                          </span>
                          {getLevelBadge(skill.level)}
                        </div>
                        {skill.context && (
                          <p className="text-xs text-content-secondary leading-normal">
                            {skill.context}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
