import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Terminal, Lightbulb, Compass, Code, Brain } from 'lucide-react';

export const NarrativeSection: React.FC = () => {
  return (
    <section id="narrative" className="relative py-24 bg-dark-secondary/60 border-y border-aqua-electric/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="w-4 h-4 text-aqua-electric" />
          <span className="text-xs font-mono uppercase tracking-widest text-aqua-electric">
            The Narrative
          </span>
        </div>

        {/* Editorial Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
            {PERSONAL_INFO.narrativeLead}
          </h2>
          <div className="mt-3 h-1 w-24 bg-gradient-to-r from-aqua-electric to-transparent rounded-full" />
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Main Story Paragraphs */}
          <div className="md:col-span-8 space-y-6 text-base sm:text-lg text-content-secondary leading-relaxed font-sans">
            {PERSONAL_INFO.narrativeBody.map((paragraph, idx) => (
              <p
                key={idx}
                className="p-5 rounded-2xl glass-card border border-aqua-electric/10 hover:border-aqua-electric/30 transition-colors"
              >
                {paragraph}
              </p>
            ))}

            <div className="p-4 rounded-xl bg-dark-elevated/70 border border-aqua-electric/20 flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-aqua-electric shrink-0 mt-1" />
              <div className="text-sm font-sans text-content-primary">
                <span className="font-semibold text-aqua-electric">Guiding Philosophy:</span>{' '}
                Do not exaggerate early results; value the discipline of transparency. Measure the trade-off
                between return and drawdown, test hypotheses thoroughly, and document every finding.
              </div>
            </div>

            <div className="p-4 rounded-xl glass-card border border-aqua-electric/25 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <p className="text-xs sm:text-sm text-content-primary italic">
                "{PERSONAL_INFO.collaborationMessage}"
              </p>
            </div>
          </div>

          {/* Quick Interdisciplinary Pillars */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-content-muted mb-2">
              Foundational Pillars
            </h3>

            <div className="p-4 rounded-xl glass-card border border-aqua-electric/15 hover:border-aqua-electric/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-dark-elevated text-aqua-electric">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-content-primary">Market Structure</h4>
              </div>
              <p className="text-xs text-content-secondary leading-normal">
                4 years observing currency volatility, understanding risk, liquidity, and probabilistic thinking.
              </p>
            </div>

            <div className="p-4 rounded-xl glass-card border border-aqua-electric/15 hover:border-aqua-electric/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-dark-elevated text-aqua-sky">
                  <Code className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-content-primary">Data Precision</h4>
              </div>
              <p className="text-xs text-content-secondary leading-normal">
                4 years processing MTurk data, building patience for data cleanliness, tagging, and validation.
              </p>
            </div>

            <div className="p-4 rounded-xl glass-card border border-aqua-electric/15 hover:border-aqua-electric/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-dark-elevated text-aqua-electric">
                  <Brain className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-content-primary">AI & Computation</h4>
              </div>
              <p className="text-xs text-content-secondary leading-normal">
                First-year AI/ML student channeling curiosity into rigorous mathematics and verifiable algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
