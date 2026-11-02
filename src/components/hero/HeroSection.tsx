import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { HeroVisual } from './HeroVisual';
import {
  Compass,
  FolderGit2,
  Mail,
  MapPin,
  ChevronDown,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = [
    'Building at the intersection of AI, Data & Quantitative Finance.',
    'Learning. Building. Exploring.',
    'Turning market curiosity into transparent code.'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [subtitles.length]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center bg-tech-grid overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-aqua-electric/8 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-aqua-sky/8 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Narrative & Typography */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Context Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-aqua-electric/25 w-fit shadow-glow-sm">
              <span className="w-2 h-2 rounded-full bg-aqua-electric animate-ping" />
              <span className="text-xs font-mono font-medium text-aqua-electric uppercase tracking-wider">
                AWS Student Builder Challenge
              </span>
              <span className="text-content-muted">•</span>
              <span className="text-xs font-mono text-content-secondary">2026</span>
            </div>

            {/* Name & Academic Identity */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-content-primary leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-electric via-aqua-sky to-content-primary">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base font-mono text-aqua-sky">
                <span>AI/ML Student</span>
                <span className="text-content-muted">|</span>
                <span>Python & Data</span>
                <span className="text-content-muted">|</span>
                <span className="flex items-center gap-1 text-content-primary">
                  <TrendingUp className="w-4 h-4 text-aqua-electric" /> Quantitative Explorer
                </span>
              </div>
            </div>

            {/* Dynamic Rotating Headline */}
            <div className="min-h-[72px] sm:min-h-[84px] flex items-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-content-primary font-sans leading-snug transition-all duration-500 key={subtitleIndex}">
                “{subtitles[subtitleIndex]}”
              </p>
            </div>

            {/* Supporting Authentic Description */}
            <p className="text-base sm:text-lg text-content-secondary max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bio} Combining four years of independent forex trading and data annotation
              experience with formal AI/ML education at{' '}
              <span className="text-content-primary font-medium">{PERSONAL_INFO.college}</span>.
            </p>

            {/* Location & Status Bar */}
            <div className="flex items-center gap-4 text-xs font-mono text-content-secondary">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-aqua-electric" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <span className="text-content-muted">•</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-emerald-300">Open to Collaboration</span>
              </div>
            </div>

            {/* Call to Actions (Buttons) */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={() => scrollTo('journey')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-dark-primary bg-gradient-to-r from-aqua-electric to-aqua-sky hover:opacity-95 shadow-glow-cyan transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-aqua-electric"
              >
                <Compass className="w-4 h-4" />
                <span>Explore My Journey</span>
              </button>

              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-content-primary glass-card hover:bg-dark-elevated/70 border border-aqua-electric/25 hover:border-aqua-electric/60 transition-all focus:outline-none focus:ring-2 focus:ring-aqua-electric"
              >
                <FolderGit2 className="w-4 h-4 text-aqua-sky" />
                <span>View My Projects</span>
              </button>

              <button
                onClick={() => scrollTo('superpower')}
                className="flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-aqua-electric glass-card hover:border-aqua-electric transition-all shadow-glow-sm"
              >
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                <span>Tech Superpower</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-content-secondary hover:text-content-primary hover:bg-dark-elevated/50 transition-colors"
                aria-label="Contact Section"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Connect</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual with Authentic Portrait & Orbiting Nodes */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Refined Animated Scroll Indicator */}
      <div className="w-full flex justify-center pt-8">
        <button
          onClick={() => scrollTo('narrative')}
          aria-label="Scroll down to personal narrative"
          className="group flex flex-col items-center gap-2 text-content-secondary hover:text-aqua-electric transition-colors focus:outline-none"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase opacity-75 group-hover:opacity-100">
            Scroll to Discover
          </span>
          <div className="w-5 h-9 rounded-full border border-aqua-electric/30 flex items-start justify-center p-1 group-hover:border-aqua-electric group-hover:shadow-glow-cyan transition-all">
            <div className="w-1.5 h-2 rounded-full bg-aqua-electric animate-bounce" />
          </div>
          <ChevronDown className="w-4 h-4 text-aqua-electric -mt-1 animate-pulse" />
        </button>
      </div>
    </section>
  );
};
