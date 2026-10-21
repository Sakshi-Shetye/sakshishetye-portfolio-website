import { useState, useRef } from 'react';
import { ArrowRight, Sparkles, Terminal, Code2, Cpu, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const [activeCodeTab, setActiveCodeTab] = useState<'agent' | 'router'>('agent');
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 6;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            
            {/* Clean unboxed greeting kicker */}
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-violet-400 mb-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Hello, I'm {PERSONAL_INFO.name}.</span>
            </div>

            {/* Display Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 max-w-2xl text-balance">
              Engineering ideas into{' '}
              <span className="cosmic-gradient-text">meaningful digital experiences.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Clean unboxed metadata strip with dot separators (Zero-Pill discipline) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mb-8 border-y border-violet-900/40 py-3 w-full max-w-xl">
              <span>Atharva College of Engineering</span>
              <span aria-hidden="true" className="text-violet-500 font-bold">·</span>
              <span>Computer Engineering</span>
              <span aria-hidden="true" className="text-violet-500 font-bold">·</span>
              <span>Mumbai, India</span>
              <span aria-hidden="true" className="text-violet-500 font-bold">·</span>
              <span className="text-cyan-300 font-medium">Software Development & AI</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="group flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-xl transition-all duration-200 shadow-lg shadow-violet-600/30 hover:shadow-violet-600/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-violet-950/40 hover:bg-violet-900/50 border border-violet-500/30 hover:border-violet-400/50 rounded-xl transition-all duration-200 backdrop-blur-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <span>Get in Touch</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

          </div>

          {/* Right Column: Stylized 3D Female Character in Futuristic Developer Workspace */}
          <div className="lg:col-span-5 flex justify-center z-10">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transition: 'transform 0.15s ease-out'
              }}
              className="relative w-full max-w-md rounded-2xl p-1 bg-gradient-to-b from-violet-500/30 via-indigo-500/10 to-cyan-500/20 shadow-2xl shadow-violet-950/60"
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600/20 via-fuchsia-600/15 to-cyan-500/20 blur-xl opacity-75 -z-10" />

              {/* Main Workspace Frame */}
              <div className="relative rounded-2xl bg-[#0d0922]/90 border border-violet-500/30 overflow-hidden backdrop-blur-xl">
                
                {/* Character Workspace Visual with Fallback */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#090518]">
                  <img
                    src={PERSONAL_INFO.avatarImage}
                    alt="Sakshi Shetye stylized digital engineer workspace illustration"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback container if local image fails
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Scrim gradient overlay to integrate with code console below */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0922] via-transparent to-black/20 pointer-events-none" />

                  {/* Floating abstract holographic chips */}
                  <div className="absolute top-4 left-4 bg-violet-950/80 backdrop-blur-md border border-violet-500/40 rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-lg">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs font-mono text-violet-200">Full-Stack & AI</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-indigo-950/80 backdrop-blur-md border border-cyan-500/30 rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-lg">
                    <Cpu className="w-3.5 h-3.5 text-violet-400" />
                    <span className="text-xs font-mono text-cyan-200">Algorithmic Systems</span>
                  </div>
                </div>

                {/* Integrated Holographic Code Editor Panel */}
                <div className="border-t border-violet-500/20 bg-[#0a061b] p-4">
                  {/* Editor Top Bar */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-violet-950/80 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 font-mono text-[11px] text-slate-400 flex items-center gap-1">
                        <Terminal className="w-3 h-3 text-violet-400" />
                        developer-workspace
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-violet-950/60 p-0.5 rounded-md border border-violet-500/20">
                      <button
                        onClick={() => setActiveCodeTab('agent')}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                          activeCodeTab === 'agent'
                            ? 'bg-violet-600 text-white'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        MindEngine.ts
                      </button>
                      <button
                        onClick={() => setActiveCodeTab('router')}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                          activeCodeTab === 'router'
                            ? 'bg-violet-600 text-white'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        GeoDispatch.ts
                      </button>
                    </div>
                  </div>

                  {/* Real Syntax Highlighted Code Snippet */}
                  <pre className="font-mono text-[11px] leading-relaxed text-slate-300 overflow-x-auto py-1">
                    {activeCodeTab === 'agent' ? (
                      <code>
                        <span className="text-violet-400">const</span>{' '}
                        <span className="text-cyan-300">orchestrateAI</span> ={' '}
                        <span className="text-violet-400">async</span> (query:{' '}
                        <span className="text-amber-300">string</span>) =&gt; &#123;{'\n'}
                        {'  '}<span className="text-slate-400">// Semantic reasoning via Ollama & Gemini</span>{'\n'}
                        {'  '}<span className="text-violet-400">const</span> context ={' '}
                        <span className="text-violet-400">await</span> retriever.getRelevantChunks(query);{'\n'}
                        {'  '}<span className="text-violet-400">return</span> llm.stream(&#123; prompt: query, context &#125;);{'\n'}
                        &#125;;
                      </code>
                    ) : (
                      <code>
                        <span className="text-violet-400">export function</span>{' '}
                        <span className="text-cyan-300">findNearbyMechanics</span>(coords:{' '}
                        <span className="text-amber-300">LatLng</span>) &#123;{'\n'}
                        {'  '}<span className="text-slate-400">// Spatial indexing for rural transit support</span>{'\n'}
                        {'  '}<span className="text-violet-400">return</span> db.mechanics.withinRadius(coords, 25 /*km*/){'\n'}
                        {'    '}.filter(m =&gt; m.status === <span className="text-emerald-400">'available'</span>);{'\n'}
                        &#125;
                      </code>
                    )}
                  </pre>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
