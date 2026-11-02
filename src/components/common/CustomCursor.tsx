import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // Only run on desktop devices with fine pointers
    if (prefersReduced || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.classList.contains('cursor-pointer') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animationFrameId: number;
    const followCursor = () => {
      setRingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(followCursor);
    };
    animationFrameId = requestAnimationFrame(followCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [pos.x, pos.y, isVisible, prefersReduced]);

  if (prefersReduced || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Central dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-aqua-electric -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Outer Cyan Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-aqua-electric/60 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          isHovered
            ? 'w-10 h-10 bg-aqua-electric/15 border-aqua-electric shadow-glow-cyan scale-125'
            : 'w-6 h-6 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
};
