import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Activity, Binary } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Outer ambient glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-aqua-electric/10 blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute w-60 h-60 rounded-full bg-aqua-sky/10 blur-2xl pointer-events-none -z-10 translate-x-12 translate-y-8" />

      {/* Cybernetic geometric circles & coordinates */}
      <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
        {/* SVG Decorative Orbiting Lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none animate-spin-slow"
          viewBox="0 0 400 400"
          fill="none"
        >
          <circle
            cx="200"
            cy="200"
            r="185"
            stroke="rgba(0, 229, 255, 0.18)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />
          <circle
            cx="200"
            cy="200"
            r="155"
            stroke="rgba(56, 189, 248, 0.22)"
            strokeWidth="1"
            strokeDasharray="20 40"
          />
          <circle cx="200" cy="15" r="4" fill="#00E5FF" />
          <circle cx="385" cy="200" r="3" fill="#38BDF8" />
          <circle cx="200" cy="385" r="4" fill="#00E5FF" />
          <circle cx="15" cy="200" r="3" fill="#38BDF8" />
        </svg>

        {/* Opposite slow counter-rotation */}
        <svg
          className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] pointer-events-none animate-[spin_35s_linear_infinite_reverse]"
          viewBox="0 0 360 360"
          fill="none"
        >
          <path
            d="M 180, 20 A 160 160 0 0 1 340, 180"
            stroke="rgba(0, 229, 255, 0.3)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 180, 340 A 160 160 0 0 1 20, 180"
            stroke="rgba(56, 189, 248, 0.3)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Center Frame with Avatar */}
        <div className="relative group w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden glass-card-elevated border-2 border-aqua-electric/40 shadow-glow-cyan p-2 transition-transform duration-500 hover:scale-[1.02]">
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-dark-secondary">
            {!imageError ? (
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover object-top transition-opacity duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ) : null}

            {/* Fallback avatar if GitHub image fails to load or offline */}
            {(!imageLoaded || imageError) && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-dark-elevated to-dark-secondary text-aqua-electric">
                <span className="font-mono text-5xl font-extrabold tracking-widest text-glow">
                  AR
                </span>
                <span className="text-[11px] font-mono text-content-secondary mt-2 tracking-wider">
                  ANUSH RAGAV
                </span>
              </div>
            )}

            {/* Subtle Gradient Overlay on image bottom */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-dark-primary via-dark-primary/60 to-transparent pointer-events-none" />

            {/* Identity badge overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-dark-primary/80 backdrop-blur-md border border-aqua-electric/25">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-content-primary">B.E. CSE (AI/ML)</span>
              </div>
              <span className="text-[10px] font-mono text-aqua-electric tracking-wide">
                Currently Pursuing
              </span>
            </div>
          </div>

          {/* Corner Tech Brackets */}
          <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-aqua-electric" />
          <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-aqua-electric" />
          <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-aqua-electric" />
          <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-aqua-electric" />
        </div>

        {/* Floating Technical Badges */}
        <div className="absolute -top-3 -right-2 glass-pill px-3 py-1.5 rounded-xl shadow-glow-cyan flex items-center gap-2 text-xs font-mono text-aqua-sky animate-float">
          <Activity className="w-3.5 h-3.5 text-aqua-electric" />
          <span>Forex & Data Roots</span>
        </div>

        <div className="absolute -bottom-2 -left-2 glass-pill px-3 py-1.5 rounded-xl shadow-glow-sky flex items-center gap-2 text-xs font-mono text-content-secondary animate-float [animation-delay:2s]">
          <Binary className="w-3.5 h-3.5 text-aqua-sky" />
          <span>Python • Quant Math</span>
        </div>
      </div>
    </div>
  );
};
