import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, X } from 'lucide-react';
import { SUPERPOWER_REVEAL } from '../../data/constellationData';

interface SuperpowerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuperpowerModal: React.FC<SuperpowerModalProps> = ({ isOpen, onClose }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setStepIndex(0);
      setIsRevealed(false);
      return;
    }

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < SUPERPOWER_REVEAL.steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsRevealed(true);
          try {
            confetti({
              particleCount: 80,
              spread: 70,
              origin: { y: 0.6 },
              colors: ['#00E5FF', '#38BDF8', '#F1F7FC', '#0D1620'],
            });
          } catch {
            // gracefully fallback if canvas is unavailable
          }
          return prev;
        }
      });
    }, 700);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="superpower-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-primary/90 backdrop-blur-xl animate-fade-in"
    >
      <div className="relative w-full max-w-2xl rounded-3xl glass-card-elevated border-2 border-aqua-electric/40 shadow-glow-cyan-lg p-6 sm:p-8 text-center overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Superpower Reveal"
          className="absolute top-5 right-5 p-2 rounded-xl text-content-secondary hover:text-content-primary hover:bg-dark-elevated transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-32 bg-aqua-electric/20 blur-3xl pointer-events-none" />

        {/* Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-dark-elevated/80 border border-aqua-electric/30 text-xs font-mono text-aqua-electric mb-6">
          <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
          <span>AWS Student Builder Challenge • Tech Superpower</span>
        </div>

        {/* Step Progression */}
        {!isRevealed ? (
          <div className="py-12 space-y-6">
            <div className="flex justify-center">
              <div className="relative w-16 h-16 rounded-2xl bg-dark-elevated border border-aqua-electric/40 flex items-center justify-center shadow-glow-cyan">
                <div className="w-8 h-8 rounded-full border-2 border-aqua-electric border-t-transparent animate-spin" />
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-mono text-lg font-bold text-aqua-electric tracking-wider">
                {SUPERPOWER_REVEAL.steps[stepIndex]}
              </p>
              <div className="w-48 h-1.5 mx-auto bg-dark-elevated rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-aqua-electric to-aqua-sky transition-all duration-500"
                  style={{
                    width: `${((stepIndex + 1) / SUPERPOWER_REVEAL.steps.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-in zoom-in-95 duration-500 py-4">
            {/* Luminous Title */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-aqua-sky">
                Core Developing Competence
              </span>
              <h3
                id="superpower-title"
                className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-aqua-electric via-white to-aqua-sky leading-tight text-glow"
              >
                {SUPERPOWER_REVEAL.title}
              </h3>
            </div>

            {/* Supporting Statement */}
            <div className="p-4 rounded-2xl glass-card border border-aqua-electric/25 max-w-xl mx-auto">
              <p className="text-sm sm:text-base text-content-primary leading-relaxed font-sans">
                "{SUPERPOWER_REVEAL.statement}"
              </p>
            </div>

            {/* Why This Is Authentic */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left pt-2">
              <div className="p-3 rounded-xl bg-dark-elevated/70 border border-aqua-electric/15">
                <span className="text-[10px] font-mono uppercase text-aqua-electric block mb-1">
                  1. Real-World Data
                </span>
                <p className="text-xs text-content-secondary">
                  MTurk roots instilled respect for noisy data, edge cases, and rigorous curation.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-dark-elevated/70 border border-aqua-electric/15">
                <span className="text-[10px] font-mono uppercase text-aqua-sky block mb-1">
                  2. Market Structure
                </span>
                <p className="text-xs text-content-secondary">
                  Forex trading introduced probabilistic mindset and the vital role of drawdown control.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-dark-elevated/70 border border-aqua-electric/15">
                <span className="text-[10px] font-mono uppercase text-aqua-electric block mb-1">
                  3. Machine Learning
                </span>
                <p className="text-xs text-content-secondary">
                  B.E. AI/ML curriculum provides formal algorithmic frameworks to test hypotheses.
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-sm font-semibold text-dark-primary bg-gradient-to-r from-aqua-electric to-aqua-sky hover:opacity-95 shadow-glow-cyan transition-all"
              >
                Explore Connected Constellation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
