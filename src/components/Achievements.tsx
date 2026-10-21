import { useState } from 'react';
import { Award, BookOpen, Trophy, FileBadge, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS_LIST } from '../data/portfolioData';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Publication: BookOpen,
  Competition: Trophy,
  Certification: FileBadge,
  Internship: Award,
};

export default function Achievements() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Publication', 'Competition', 'Certification', 'Internship'];

  const filteredItems =
    filter === 'All'
      ? ACHIEVEMENTS_LIST
      : ACHIEVEMENTS_LIST.filter((item) => item.category === filter);

  return (
    <section id="achievements" className="relative py-28 lg:py-36 border-t border-violet-950/50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Milestones & Recognition</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Academic research, national competitions{' '}
              <span className="cosmic-gradient-text">& technical credentials.</span>
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Validated milestones earned through peer-reviewed publications, competitive project showcases, and national space research agency programs.
            </p>
          </div>

          {/* Interactive Filter Control */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === cat
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'bg-[#120d2c]/60 text-slate-300 hover:text-white border border-violet-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const Icon = CATEGORY_ICONS[item.category] || Award;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-[#0c0822]/85 border border-violet-500/20 backdrop-blur-md hover:border-violet-400/40 hover:bg-[#110b2b] transition-all duration-300 shadow-xl shadow-black/30 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-900/40 border border-violet-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">{item.date}</span>
                  </div>

                  <div className="text-xs font-mono text-violet-300 mb-1">{item.organization}</div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-200 transition-colors tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-violet-950/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">{item.category}</span>
                  <span className="text-cyan-300 font-medium">Verified Milestone</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
