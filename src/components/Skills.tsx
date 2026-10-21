import { useState } from 'react';
import { Code, Globe, Database, Bot, Wrench, Sparkles, Network, LayoutGrid } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  programming: Code,
  'web-dev': Globe,
  databases: Database,
  'ai-apis': Bot,
  tools: Wrench,
};

// Node connections for the interactive Constellation Map view
const CONSTELLATION_NODES = [
  { id: 'java', label: 'Java & OOP', x: 20, y: 30, cat: 'programming', color: '#c084fc' },
  { id: 'cpp', label: 'C++', x: 12, y: 55, cat: 'programming', color: '#c084fc' },
  { id: 'ts', label: 'TypeScript', x: 38, y: 25, cat: 'web-dev', color: '#38bdf8' },
  { id: 'react', label: 'React.js', x: 50, y: 40, cat: 'web-dev', color: '#38bdf8' },
  { id: 'node', label: 'Node.js', x: 42, y: 65, cat: 'web-dev', color: '#38bdf8' },
  { id: 'laravel', label: 'Laravel & PHP', x: 28, y: 80, cat: 'web-dev', color: '#38bdf8' },
  { id: 'sql', label: 'SQL / MySQL', x: 58, y: 78, cat: 'databases', color: '#f472b6' },
  { id: 'firebase', label: 'Firebase', x: 65, y: 58, cat: 'databases', color: '#f472b6' },
  { id: 'gemini', label: 'Gemini API', x: 75, y: 32, cat: 'ai-apis', color: '#a78bfa' },
  { id: 'ollama', label: 'Ollama / Llama', x: 86, y: 48, cat: 'ai-apis', color: '#a78bfa' },
  { id: 'langchain', label: 'LangChain', x: 80, y: 70, cat: 'ai-apis', color: '#a78bfa' },
  { id: 'git', label: 'Git & Agile', x: 52, y: 15, cat: 'tools', color: '#34d399' },
];

const CONSTELLATION_EDGES = [
  ['java', 'cpp'],
  ['java', 'ts'],
  ['ts', 'react'],
  ['react', 'node'],
  ['node', 'sql'],
  ['node', 'firebase'],
  ['react', 'firebase'],
  ['laravel', 'sql'],
  ['react', 'gemini'],
  ['gemini', 'langchain'],
  ['ollama', 'langchain'],
  ['git', 'ts'],
  ['git', 'react']
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'constellation'>('grid');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const displayedCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative py-28 lg:py-36 border-t border-violet-950/50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technical Constellation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Skills forged in code,{' '}
              <span className="cosmic-gradient-text">architecture & algorithms.</span>
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              A comprehensive toolkit developed through engineering coursework, hands-on application builds, and AI-assisted workflows.
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl bg-violet-950/50 border border-violet-500/20 backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Category View</span>
            </button>
            <button
              onClick={() => setViewMode('constellation')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                viewMode === 'constellation'
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Constellation Map</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs (Interactive filter control per constitution) */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
              activeCategory === 'all'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                : 'bg-[#120d2c]/60 text-slate-300 hover:text-white hover:bg-violet-900/30 border border-violet-500/20'
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeCategory === cat.id
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                  : 'bg-[#120d2c]/60 text-slate-300 hover:text-white hover:bg-violet-900/30 border border-violet-500/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* View Mode 1: Crisp, Generously Spaced Category Cards */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCategories.map((category) => {
              const IconComponent = CATEGORY_ICONS[category.id] || Code;
              return (
                <div
                  key={category.id}
                  className="p-8 rounded-2xl bg-[#0c0822]/85 border border-violet-500/20 backdrop-blur-md hover:border-violet-400/40 hover:bg-[#100b2b]/95 transition-all duration-300 shadow-xl shadow-black/30 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-violet-900/40 border border-violet-500/30 flex items-center justify-center text-violet-300 group-hover:text-cyan-300 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-tight">
                          {category.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                      {category.description}
                    </p>

                    {/* Unboxed Skills with subtle dot separators / chips */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-violet-950/60">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-200 bg-violet-950/50 border border-violet-500/25 hover:border-violet-400/60 hover:text-white hover:bg-violet-900/40 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-violet-950/50 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Coursework & Projects</span>
                    <span className="font-mono text-cyan-300">Verified Usage</span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* View Mode 2: Interactive Constellation Map */
          <div className="p-8 rounded-2xl bg-[#090518]/90 border border-violet-500/30 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Hover nodes to trace conceptual architectural connections across Sakshi's stack
              </span>
              <span className="hidden sm:inline font-mono text-violet-300">
                12 Connected Nodes
              </span>
            </div>

            <div className="relative w-full h-[450px] bg-[#070414] rounded-xl border border-violet-950/80 overflow-hidden">
              {/* SVG Connector Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {CONSTELLATION_EDGES.map(([sourceId, targetId], idx) => {
                  const source = CONSTELLATION_NODES.find((n) => n.id === sourceId);
                  const target = CONSTELLATION_NODES.find((n) => n.id === targetId);
                  if (!source || !target) return null;

                  const isConnected = hoveredNode === sourceId || hoveredNode === targetId;

                  return (
                    <line
                      key={idx}
                      x1={`${source.x}%`}
                      y1={`${source.y}%`}
                      x2={`${target.x}%`}
                      y2={`${target.y}%`}
                      stroke={isConnected ? '#38bdf8' : 'rgba(139, 92, 246, 0.25)'}
                      strokeWidth={isConnected ? 2 : 1}
                      strokeDasharray={isConnected ? 'none' : '3,3'}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* Constellation Nodes */}
              {CONSTELLATION_NODES.map((node) => {
                const isHovered = hoveredNode === node.id;
                return (
                  <button
                    key={node.id}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-full"
                  >
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 flex items-center justify-center ${
                          isHovered
                            ? 'scale-150 ring-4 ring-cyan-400/40'
                            : 'hover:scale-125'
                        }`}
                        style={{ backgroundColor: node.color }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      
                      <span
                        className={`mt-2 text-[11px] font-medium whitespace-nowrap px-2 py-0.5 rounded transition-all duration-200 ${
                          isHovered
                            ? 'bg-violet-900 text-white shadow-lg border border-cyan-400/50 scale-105'
                            : 'bg-black/60 text-slate-300 border border-violet-900/50'
                        }`}
                      >
                        {node.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
