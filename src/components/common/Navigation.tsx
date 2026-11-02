import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'journey', label: 'Journey', href: '#journey' },
  { id: 'superpower', label: 'Superpower', href: '#superpower' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const activeSection = useScrollSpy(NAV_ITEMS.map((item) => item.id), 250);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-primary/85 backdrop-blur-md border-b border-aqua-electric/15 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-aqua-electric to-aqua-sky transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Monogram */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-aqua-electric rounded-lg p-1"
          aria-label="Anush Ragav - Back to top"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-dark-elevated border border-aqua-electric/30 group-hover:border-aqua-electric group-hover:shadow-glow-cyan transition-all duration-300">
            <span className="font-mono font-bold text-base tracking-wider text-aqua-electric group-hover:scale-105 transition-transform">
              AR
            </span>
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-aqua-sky animate-ping" />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-semibold text-content-primary tracking-wide">
              Anush Ragav
            </span>
            <span className="text-[10px] font-mono text-content-secondary tracking-widest uppercase">
              AI/ML • Quant Explorer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 glass-pill px-3 py-1.5 rounded-full border border-aqua-electric/20">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-1.5 text-xs uppercase font-mono tracking-wider transition-all duration-200 rounded-full focus:outline-none focus:ring-1 focus:ring-aqua-electric ${
                  isActive
                    ? 'text-aqua-electric font-semibold'
                    : 'text-content-secondary hover:text-content-primary hover:bg-dark-elevated/40'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-aqua-electric/10 border border-aqua-electric/30 shadow-inner-glow -z-10 animate-fade-in" />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-dark-primary bg-gradient-to-r from-aqua-electric to-aqua-sky hover:opacity-95 shadow-glow-cyan transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-aqua-electric"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-xl bg-dark-elevated border border-aqua-electric/25 text-content-primary focus:outline-none focus:ring-2 focus:ring-aqua-electric"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-aqua-electric" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card-elevated border-b border-aqua-electric/20 px-6 py-6 mt-3 space-y-4 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-sm font-mono tracking-wider flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-aqua-electric/15 text-aqua-electric border border-aqua-electric/30 font-semibold'
                      : 'text-content-secondary hover:text-content-primary hover:bg-dark-elevated'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-aqua-electric shadow-glow-cyan" />}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-aqua-electric/15 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full text-center py-3 rounded-xl text-sm font-semibold text-dark-primary bg-gradient-to-r from-aqua-electric to-aqua-sky shadow-glow-cyan"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
