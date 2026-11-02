import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Copy, Check, ArrowUpRight, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/BrandIcons';

interface ContactSectionProps {
  onNotify: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNotify }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      onNotify('Email address copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      onNotify(`Email: ${PERSONAL_INFO.email}`);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-dark-primary overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-aqua-electric/8 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-card-elevated border-2 border-aqua-electric/30 p-8 sm:p-12 md:p-16 text-center space-y-8 relative overflow-hidden shadow-glow-cyan">
          {/* Top Decorative Header */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-aqua-electric/30 shadow-glow-sm">
            <MessageSquare className="w-3.5 h-3.5 text-aqua-electric" />
            <span className="text-xs font-mono uppercase tracking-widest text-aqua-electric">
              Get In Touch
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
              Have an interesting problem? Let's explore it.
            </h2>
            <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
              Whether you're exploring quantitative finance backtesting, small language model orchestration,
              or collaborative open-source projects, my inbox is open.
            </p>
          </div>

          {/* Primary Action: Direct Email & Copy Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-dark-primary bg-gradient-to-r from-aqua-electric to-aqua-sky hover:opacity-95 shadow-glow-cyan transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-aqua-electric"
            >
              <Send className="w-4 h-4" />
              <span>Send An Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              aria-label="Copy email address"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-mono text-content-primary glass-card hover:bg-dark-elevated border border-aqua-electric/30 transition-all focus:outline-none focus:ring-2 focus:ring-aqua-electric"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-aqua-electric" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Email Address Plain Display */}
          <div className="pt-2">
            <span className="font-mono text-xs sm:text-sm text-content-secondary tracking-wider selection:bg-aqua-electric/30">
              {PERSONAL_INFO.email}
            </span>
          </div>

          {/* Social Profiles Grid */}
          <div className="pt-8 border-t border-aqua-electric/15 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-elevated/70 border border-aqua-electric/20 hover:border-aqua-electric hover:shadow-glow-cyan transition-all"
            >
              <GithubIcon className="w-4 h-4 text-aqua-electric" />
              <span className="text-xs font-mono text-content-primary group-hover:text-aqua-electric transition-colors">
                GitHub / anushragav-vs
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-content-muted group-hover:text-aqua-sky" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-elevated/70 border border-aqua-electric/20 hover:border-aqua-electric hover:shadow-glow-cyan transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-aqua-sky" />
              <span className="text-xs font-mono text-content-primary group-hover:text-aqua-electric transition-colors">
                LinkedIn / anushragavvs
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 text-content-muted group-hover:text-aqua-sky" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
