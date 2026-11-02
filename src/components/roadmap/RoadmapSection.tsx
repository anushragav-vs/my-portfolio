import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MILESTONES } from '../../data/portfolioData';
import { RoadmapNode } from './RoadmapNode';
import { SvgTimelinePath } from './SvgTimelinePath';
import type { Project } from '../../types';
import { Milestone as MilestoneIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface RoadmapSectionProps {
  onSelectProject: (project: Project) => void;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ onSelectProject }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // ScrollTrigger to calculate overall roadmap progress
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      end: 'bottom 60%',
      scrub: 0.3,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
        const index = Math.min(
          MILESTONES.length - 1,
          Math.floor(self.progress * MILESTONES.length)
        );
        setActiveMilestoneIndex(index);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative py-28 bg-dark-secondary/40 overflow-hidden"
    >
      {/* Background dynamic ambient glow that responds to active milestone */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-aqua-electric/5 blur-[160px] pointer-events-none -z-10 transition-colors duration-1000"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center space-y-4">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-aqua-electric/25 shadow-glow-sm">
          <MilestoneIcon className="w-3.5 h-3.5 text-aqua-electric" />
          <span className="text-xs font-mono uppercase tracking-widest text-aqua-electric">
            Interactive Roadmap
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
          The Journey
        </h2>

        <p className="text-base sm:text-lg text-content-secondary max-w-2xl mx-auto">
          From processing distributed data on MTurk and trading currency markets to studying AI/ML and
          engineering quantitative tools.
        </p>

        {/* Dynamic milestone indicator bar */}
        <div className="pt-2 flex items-center justify-center gap-2">
          {MILESTONES.map((m, idx) => (
            <div
              key={m.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeMilestoneIndex
                  ? 'w-10 bg-aqua-electric shadow-glow-cyan'
                  : idx < activeMilestoneIndex
                  ? 'w-4 bg-aqua-sky/50'
                  : 'w-2 bg-dark-elevated'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* SVG Continuous Timeline Path */}
        <SvgTimelinePath progress={scrollProgress} />

        {/* Milestone Nodes */}
        <div className="space-y-4 relative z-10">
          {MILESTONES.map((milestone, idx) => (
            <RoadmapNode
              key={milestone.id}
              milestone={milestone}
              index={idx}
              isActive={idx === activeMilestoneIndex}
              isPast={idx < activeMilestoneIndex}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
