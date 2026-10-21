import { Briefcase, Calendar, CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import { EXPERIENCE_LIST } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 lg:py-36 border-t border-violet-950/50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Professional Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Hands-on engineering{' '}
            <span className="cosmic-gradient-text">internships & impact.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Direct industry experience building full-stack web applications, integrating modern AI inference APIs, and shipping responsive user-facing tools.
          </p>
        </div>

        {/* Chronological Timeline */}
        <div className="relative pl-6 sm:pl-10 border-l border-violet-500/30 space-y-12 max-w-4xl">
          {EXPERIENCE_LIST.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Glowing timeline node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#0d0924] border-2 border-violet-400 flex items-center justify-center shadow-lg shadow-violet-500/40 group-hover:border-cyan-400 transition-colors">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Experience Card */}
              <div className="p-8 rounded-2xl bg-[#0d0924]/85 border border-violet-500/20 backdrop-blur-md hover:border-violet-400/40 hover:bg-[#110c2c] transition-all duration-300 shadow-xl shadow-black/30">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-violet-300">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span>{item.company}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {item.role}
                </h3>

                {/* Bullet highlights */}
                <ul className="space-y-3 mb-6">
                  {item.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed font-normal">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Used (Unboxed metadata) */}
                <div className="pt-4 border-t border-violet-950/60 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-400 mr-2">Technologies Deployed:</span>
                  {item.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-violet-950/60 border border-violet-500/30 text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
