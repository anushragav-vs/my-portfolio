import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-primary border-t border-aqua-electric/15 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-aqua-electric/10">
          {/* Logo & Tagline */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-dark-elevated border border-aqua-electric/40 text-aqua-electric font-mono font-bold text-base shadow-glow-sm">
              {PERSONAL_INFO.initials}
            </div>
            <div>
              <div className="text-sm font-bold text-content-primary">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs font-mono text-aqua-sky">
                “{PERSONAL_INFO.altTagline}”
              </div>
            </div>
          </div>

          {/* AWS Challenge Badge */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-elevated border border-aqua-electric/25 text-xs font-mono text-content-secondary">
            <ShieldCheck className="w-4 h-4 text-aqua-electric" />
            <span>AWS Student Builder Challenge: Build Your Tech Superpower</span>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card hover:border-aqua-electric text-xs font-mono text-content-secondary hover:text-aqua-electric transition-all shadow-glow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-content-muted">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, TypeScript, GSAP & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-aqua-electric transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-aqua-electric transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-aqua-electric transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
