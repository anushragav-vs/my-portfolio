import React from 'react';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'superpower' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl glass-card-elevated shadow-glow-cyan border border-aqua-electric/40 text-content-primary animate-float">
      {type === 'superpower' ? (
        <Sparkles className="w-5 h-5 text-aqua-electric animate-spin-slow" />
      ) : (
        <CheckCircle2 className="w-5 h-5 text-aqua-electric" />
      )}
      <span className="text-sm font-medium tracking-wide">{message}</span>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="p-1 rounded-lg text-content-secondary hover:text-content-primary hover:bg-dark-elevated transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
