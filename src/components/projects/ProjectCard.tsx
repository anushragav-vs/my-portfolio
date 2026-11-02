import type { Project } from '../../types';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenDetails }) => {
  return (
    <div className="group relative rounded-3xl glass-card border border-aqua-electric/20 hover:border-aqua-electric/50 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between overflow-hidden p-6 sm:p-7">
      {/* Ambient background hover flare */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-aqua-electric/10 blur-3xl pointer-events-none group-hover:bg-aqua-electric/20 transition-all" />

      <div>
        {/* Top bar: Category & Featured tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono uppercase tracking-wider text-aqua-sky">
            {project.category}
          </span>
          {project.featured && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-aqua-electric/15 text-aqua-electric border border-aqua-electric/30">
              Featured Research
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-content-primary group-hover:text-aqua-electric transition-colors mb-3">
          {project.title}
        </h3>

        {/* Concise Summary */}
        <p className="text-sm text-content-secondary leading-relaxed mb-5">
          {project.summary}
        </p>

        {/* Real Metrics Highlights if documented */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5 p-3 rounded-2xl bg-dark-elevated/70 border border-aqua-electric/15">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="text-[10px] font-mono text-content-muted uppercase block">
                  {m.label}
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-aqua-electric">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Key Features (Progressive disclosure preview) */}
        <div className="space-y-1.5 mb-5">
          {project.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-content-secondary">
              <span className="w-1.5 h-1.5 rounded-full bg-aqua-sky mt-1 shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6 pt-3 border-t border-aqua-electric/15">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-dark-primary text-content-secondary border border-aqua-electric/15"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            onClick={() => onOpenDetails(project)}
            className="flex items-center gap-1.5 text-xs font-mono font-semibold text-aqua-electric hover:text-aqua-sky transition-colors focus:outline-none"
          >
            <span>Detailed Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2 rounded-xl bg-dark-elevated hover:bg-dark-primary border border-aqua-electric/25 hover:border-aqua-electric text-content-secondary hover:text-content-primary transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo for ${project.title}`}
                className="p-2 rounded-xl bg-dark-elevated hover:bg-dark-primary border border-aqua-electric/25 hover:border-aqua-electric text-aqua-sky transition-all"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
