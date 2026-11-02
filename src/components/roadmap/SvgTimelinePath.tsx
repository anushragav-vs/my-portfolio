import React from 'react';

interface SvgTimelinePathProps {
  progress: number; // 0 to 1
}

export const SvgTimelinePath: React.FC<SvgTimelinePathProps> = ({ progress }) => {
  // Height percentage clamped 0 to 100
  const progressPercent = Math.min(100, Math.max(0, progress * 100));

  return (
    <>
      {/* Desktop Center Vertical Line (md and up) */}
      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] pointer-events-none -z-0">
        {/* Background inactive track */}
        <div className="absolute inset-0 bg-aqua-electric/10" />

        {/* Active glowing progress bar */}
        <div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-aqua-electric via-aqua-sky to-aqua-electric shadow-glow-cyan transition-all duration-150 ease-out"
          style={{ height: `${progressPercent}%` }}
        />

        {/* Pulse bead at current tip */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-aqua-electric shadow-glow-cyan-lg -translate-y-1/2 transition-all duration-150 ease-out"
          style={{ top: `${progressPercent}%` }}
        >
          <div className="w-full h-full rounded-full bg-white animate-ping opacity-60" />
        </div>
      </div>

      {/* Mobile Left Vertical Line (< md) */}
      <div className="block md:hidden absolute top-0 bottom-0 left-6 w-[2px] pointer-events-none -z-0">
        <div className="absolute inset-0 bg-aqua-electric/15" />
        <div
          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-aqua-electric to-aqua-sky shadow-glow-cyan transition-all duration-150 ease-out"
          style={{ height: `${progressPercent}%` }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-aqua-electric shadow-glow-cyan -translate-y-1/2"
          style={{ top: `${progressPercent}%` }}
        />
      </div>
    </>
  );
};
