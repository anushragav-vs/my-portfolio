import type { Project } from '../../types';
import { X, ExternalLink, CheckCircle2, Cpu, BarChart3, Layers } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-dark-primary/85 backdrop-blur-xl animate-fade-in overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl my-8 rounded-3xl glass-card-elevated border-2 border-aqua-electric/40 shadow-glow-cyan-lg p-6 sm:p-8 space-y-6 text-left max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-content-secondary hover:text-content-primary hover:bg-dark-elevated transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Information */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-aqua-sky">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-aqua-electric/20 text-aqua-electric border border-aqua-electric/30">
                Primary Showcase
              </span>
            )}
          </div>
          <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-content-primary">
            {project.title}
          </h2>
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-dark-primary/80 border border-aqua-electric/20">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[10px] font-mono text-content-muted uppercase block">
                  {m.label}
                </span>
                <span className="text-lg font-mono font-bold text-aqua-electric text-glow-subtle">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Full Overview Description */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-aqua-electric flex items-center gap-2">
            <Layers className="w-4 h-4" />
            Project Rationale & Architecture
          </h3>
          <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Quantitative Findings Callout if available */}
        {project.findings && (
          <div className="p-4 rounded-2xl bg-dark-elevated/80 border-l-4 border-aqua-electric space-y-1.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-aqua-electric flex items-center gap-1.5 font-bold">
              <BarChart3 className="w-4 h-4" />
              Verified Empirical Findings:
            </h4>
            <p className="text-xs sm:text-sm text-content-primary font-sans leading-relaxed">
              {project.findings}
            </p>
          </div>
        )}

        {/* Architectural Stages if available */}
        {project.architecture && (
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-aqua-electric flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Pipeline Architecture
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.architecture.map((stage, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-dark-primary/60 border border-aqua-electric/15 text-xs font-mono text-content-secondary flex items-center gap-2"
                >
                  <span className="w-5 h-5 rounded-lg bg-dark-elevated text-aqua-electric flex items-center justify-center font-bold text-[10px]">
                    {idx + 1}
                  </span>
                  <span>{stage}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verified Technical Features */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono uppercase tracking-wider text-aqua-electric">
            Verified Technical Implementation
          </h3>
          <ul className="space-y-2">
            {project.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-content-secondary">
                <CheckCircle2 className="w-4 h-4 text-aqua-electric mt-0.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Stack */}
        <div className="space-y-2 pt-2 border-t border-aqua-electric/15">
          <span className="text-xs font-mono uppercase tracking-wider text-content-muted block">
            Technology Stack:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-dark-elevated text-aqua-sky border border-aqua-electric/25"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* External Repositories Actions */}
        <div className="pt-4 flex flex-wrap items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-dark-primary bg-gradient-to-r from-aqua-electric to-aqua-sky hover:opacity-95 shadow-glow-cyan transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub Repository</span>
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-medium text-content-primary glass-card hover:bg-dark-elevated transition-colors border border-aqua-electric/25"
            >
              <ExternalLink className="w-4 h-4 text-aqua-sky" />
              <span>Live Demonstration</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 rounded-xl text-xs font-mono text-content-secondary hover:text-content-primary hover:bg-dark-elevated transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
