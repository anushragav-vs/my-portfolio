import React, { useState } from 'react';
import {
  CONSTELLATION_NODES,
  CONSTELLATION_CONNECTIONS,
} from '../../data/constellationData';
import { PERSONAL_INFO } from '../../data/portfolioData';
import type { ConstellationNode } from '../../types';
import { SuperpowerModal } from './SuperpowerModal';
import {
  Sparkles,
  Code2,
  Database,
  Sigma,
  TrendingUp,
  Cpu,
  BrainCircuit,
  X,
  Layers,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Database,
  Sigma,
  TrendingUp,
  Cpu,
  BrainCircuit,
};

export const NeuralConstellation: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ConstellationNode | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [isSuperpowerModalOpen, setIsSuperpowerModalOpen] = useState(false);

  // Helper to find node by ID
  const getNode = (id: string) => CONSTELLATION_NODES.find((n) => n.id === id);

  return (
    <section
      id="superpower"
      className="relative py-24 bg-dark-primary bg-tech-dots overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-aqua-electric/6 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border border-aqua-electric/30 shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5 text-aqua-electric animate-spin-slow" />
            <span className="text-xs font-mono uppercase tracking-widest text-aqua-electric">
              Signature Feature
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-content-primary tracking-tight">
            Neural Constellation
          </h2>

          <p className="text-base sm:text-lg text-content-secondary">
            <span className="text-aqua-sky font-semibold">"Everything I'm exploring connects."</span>{' '}
            Tap any node to inspect why each discipline matters and how they synthesize into practical systems.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setIsSuperpowerModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-semibold text-dark-primary bg-gradient-to-r from-aqua-electric to-aqua-sky shadow-glow-cyan hover:scale-[1.03] transition-all focus:outline-none focus:ring-2 focus:ring-aqua-electric"
            >
              <Sparkles className="w-4 h-4" />
              <span>Unlock My Tech Superpower</span>
            </button>
          </div>
        </div>

        {/* Constellation Canvas & Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Constellation Visual */}
          <div className="lg:col-span-8 relative w-full h-[480px] sm:h-[550px] md:h-[600px] rounded-3xl glass-card border border-aqua-electric/25 p-4 overflow-hidden flex items-center justify-center">
            {/* SVG Connecting Vectors */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Connections between surrounding nodes */}
              {CONSTELLATION_CONNECTIONS.map(([idA, idB], idx) => {
                const nodeA = getNode(idA);
                const nodeB = getNode(idB);
                if (!nodeA || !nodeB) return null;

                const isConnectedToHovered =
                  hoveredNodeId === idA ||
                  hoveredNodeId === idB ||
                  selectedNode?.id === idA ||
                  selectedNode?.id === idB;

                return (
                  <line
                    key={idx}
                    x1={nodeA.x}
                    y1={nodeA.y}
                    x2={nodeB.x}
                    y2={nodeB.y}
                    stroke={isConnectedToHovered ? '#00E5FF' : 'rgba(0, 229, 255, 0.15)'}
                    strokeWidth={isConnectedToHovered ? '0.6' : '0.25'}
                    strokeDasharray={isConnectedToHovered ? 'none' : '1.5 1'}
                    filter={isConnectedToHovered ? 'url(#glow)' : undefined}
                    className="transition-all duration-300"
                  />
                );
              })}

              {/* Lines from center AR node (50, 50) to all nodes */}
              {CONSTELLATION_NODES.map((node) => {
                const isHovered =
                  hoveredNodeId === node.id || selectedNode?.id === node.id;
                return (
                  <line
                    key={`center-${node.id}`}
                    x1="50"
                    y1="50"
                    x2={node.x}
                    y2={node.y}
                    stroke={isHovered ? '#00E5FF' : 'rgba(56, 189, 248, 0.22)'}
                    strokeWidth={isHovered ? '0.7' : '0.35'}
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>

            {/* Central Node: AR Monogram & Avatar */}
            <div
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer group"
              style={{ left: '50%', top: '50%' }}
              onClick={() => setIsSuperpowerModalOpen(true)}
              role="button"
              tabIndex={0}
              aria-label="Unlock My Tech Superpower"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setIsSuperpowerModalOpen(true);
              }}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-1 bg-dark-elevated border-2 border-aqua-electric shadow-glow-cyan-lg group-hover:scale-110 transition-all duration-300">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    // Fallback to initials if image offline
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-lg text-aqua-electric -z-10">
                  AR
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-aqua-electric animate-ping" />
              </div>
              <span className="mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-dark-primary/90 border border-aqua-electric/40 text-aqua-electric shadow-glow-sm">
                AR CORE
              </span>
            </div>

            {/* Surrounding Interactive Nodes */}
            {CONSTELLATION_NODES.map((node) => {
              const IconComponent = ICON_MAP[node.iconName] || Layers;
              const isSelected = selectedNode?.id === node.id;
              const isHovered = hoveredNodeId === node.id;

              return (
                <div
                  key={node.id}
                  className="absolute z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <button
                    onClick={() => setSelectedNode(node)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    aria-label={`Inspect ${node.label} node`}
                    aria-pressed={isSelected}
                    className={`group relative flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-aqua-electric rounded-2xl p-1 transition-all ${
                      isSelected || isHovered
                        ? 'scale-110 z-30'
                        : 'hover:scale-105'
                    }`}
                  >
                    {/* Node Circle */}
                    <div
                      className={`relative w-11 h-11 sm:w-13 sm:h-13 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? 'bg-aqua-electric text-dark-primary shadow-glow-cyan-lg scale-110'
                          : isHovered
                          ? 'bg-dark-elevated text-aqua-electric border-2 border-aqua-electric shadow-glow-cyan'
                          : 'bg-dark-elevated text-aqua-sky border border-aqua-electric/30'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Label */}
                    <span
                      className={`mt-1.5 px-2 py-0.5 rounded-md text-[11px] sm:text-xs font-mono font-medium whitespace-nowrap transition-colors ${
                        isSelected
                          ? 'bg-aqua-electric/20 text-aqua-electric border border-aqua-electric/40'
                          : isHovered
                          ? 'text-aqua-electric'
                          : 'text-content-secondary bg-dark-primary/80'
                      }`}
                    >
                      {node.label}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Column: Node Detail Inspection Panel */}
          <div className="lg:col-span-4 flex flex-col">
            {selectedNode ? (
              <div className="relative rounded-3xl glass-card-elevated border border-aqua-electric/30 p-6 space-y-5 animate-in fade-in slide-in-from-right duration-300">
                <button
                  onClick={() => setSelectedNode(null)}
                  aria-label="Close detail panel"
                  className="absolute top-4 right-4 p-1.5 rounded-lg text-content-secondary hover:text-content-primary hover:bg-dark-elevated transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-aqua-sky">
                      {selectedNode.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-content-primary">
                    {selectedNode.label}
                  </h3>
                </div>

                <p className="text-sm text-content-secondary leading-relaxed">
                  {selectedNode.summary}
                </p>

                {/* Why it interests me */}
                <div className="space-y-1.5 pt-2 border-t border-aqua-electric/15">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-aqua-electric">
                    Why It Interests Me
                  </h4>
                  <p className="text-xs text-content-primary/90 leading-relaxed bg-dark-primary/60 p-3 rounded-xl border border-aqua-electric/10">
                    {selectedNode.interestWhy}
                  </p>
                </div>

                {/* Key Learning Focus */}
                <div className="space-y-2 pt-2 border-t border-aqua-electric/15">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-aqua-electric">
                    Current Focus
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedNode.learningFocus.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-content-secondary flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-aqua-sky mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Connected Projects */}
                <div className="space-y-2 pt-2 border-t border-aqua-electric/15">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-aqua-electric">
                    Applied In
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedNode.projectConnections.map((proj, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-dark-elevated text-aqua-sky border border-aqua-electric/20"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-8 rounded-3xl glass-card border border-aqua-electric/15 border-dashed space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-dark-elevated border border-aqua-electric/25 flex items-center justify-center text-aqua-electric shadow-glow-sm">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-content-primary">
                    Select a Discipline Node
                  </h3>
                  <p className="text-xs text-content-secondary max-w-xs">
                    Hover or tap any node in the constellation to reveal why it matters and how it powers
                    my developing technical superpower.
                  </p>
                </div>
                <button
                  onClick={() => setSelectedNode(CONSTELLATION_NODES[0])}
                  className="px-4 py-2 rounded-xl text-xs font-mono text-aqua-electric bg-dark-elevated hover:bg-dark-primary border border-aqua-electric/25 transition-colors"
                >
                  Inspect Python Node →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Superpower Reveal Modal */}
      <SuperpowerModal
        isOpen={isSuperpowerModalOpen}
        onClose={() => setIsSuperpowerModalOpen(false)}
      />
    </section>
  );
};
