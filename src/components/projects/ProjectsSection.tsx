import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { GithubProjects } from './GithubProjects';
import { FolderGit2 } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Fintech & Quant' | 'AI & Tools'>('All');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Fintech & Quant') {
      return p.category.includes('Fintech') || p.category.includes('Quant') || p.tags.includes('yfinance') || p.tags.includes('Risk Analysis');
    }
    if (activeFilter === 'AI & Tools') {
      return p.category.includes('AI') || p.category.includes('Productivity') || p.category.includes('Language') || p.tags.includes('Ollama');
    }
    return true;
  });

  const handleOpenDetails = (proj: Project) => {
    setSelectedProject(proj);
    if (onSelectProject) onSelectProject(proj);
  };

  return (
    <section id="projects" className="relative py-28 bg-dark-secondary/80 border-t border-aqua-electric/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-aqua-electric/25 shadow-glow-sm">
            <FolderGit2 className="w-3.5 h-3.5 text-aqua-electric" />
            <span className="text-xs font-mono uppercase tracking-widest text-aqua-electric">
              Selected Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
            Projects & Research
          </h2>

          <p className="text-base sm:text-lg text-content-secondary">
            Verified open-source experiments bridging cognitive architecture, financial backtesting,
            and machine learning foundations. No fabricated metrics.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {(['All', 'Fintech & Quant', 'AI & Tools'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeFilter === filter
                    ? 'bg-aqua-electric text-dark-primary font-semibold shadow-glow-cyan'
                    : 'glass-pill text-content-secondary hover:text-content-primary hover:border-aqua-electric/40'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Live Public GitHub Repositories */}
        <GithubProjects />

        {/* Case Study Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
