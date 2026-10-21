import { useState } from 'react';
import { Mail, Copy, Check, Github, Linkedin, ArrowUp, Sparkles, Send, Download, BookOpen, ExternalLink, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [topic, setTopic] = useState('collaboration');
  const [customNote, setCustomNote] = useState('');
  const [showDeployGuide, setShowDeployGuide] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const topicSubjects: Record<string, string> = {
    collaboration: 'Project Collaboration Inquiry',
    internship: 'Software Engineering Opportunity / Internship',
    research: 'Technical & AI Discussion',
    other: 'Connecting with Sakshi Shetye'
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(topicSubjects[topic] || 'Connecting with Sakshi Shetye');
    const body = encodeURIComponent(
      customNote.trim()
        ? `${customNote}\n\n---\nSent from Sakshi's Digital Galaxy Portfolio`
        : `Hi Sakshi,\n\nI came across your portfolio and would love to connect regarding ${topicSubjects[topic]}.\n\nBest regards,`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative pt-28 lg:pt-36 pb-16 border-t border-violet-950/50">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-violet-600/15 via-cyan-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Contact Portal Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#100b2e] via-[#0c0822] to-[#080517] border border-violet-500/30 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-violet-950/40 overflow-hidden mb-20">
          
          {/* Subtle cosmic accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Outreach & Identity */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Connect</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Have an idea?{' '}
                <span className="cosmic-gradient-text">Let's build something meaningful.</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed font-normal">
                Whether you're exploring a software engineering collaboration, an internship role, or an AI discussion, I'm always eager to connect with fellow builders and innovators.
              </p>

              {/* Direct Email Action Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-violet-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-900/50 border border-violet-500/30 flex items-center justify-center text-cyan-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-violet-950/70 hover:bg-violet-900 text-slate-200 border border-violet-500/30 transition-colors shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Profiles & Guides */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#140e34] hover:bg-violet-900/60 border border-violet-500/30 text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#140e34] hover:bg-violet-900/60 border border-violet-500/30 text-xs font-semibold text-white transition-all hover:-translate-y-0.5"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <button
                  onClick={() => setShowDeployGuide(true)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-950/40 hover:bg-violet-900/40 border border-violet-500/20 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                  <span>GitHub Pages Guide (₹0)</span>
                </button>
              </div>

            </div>

            {/* Right Column: Functional Message Dispatcher */}
            <div className="lg:col-span-6 bg-[#080517]/90 rounded-2xl p-6 sm:p-8 border border-violet-500/25 shadow-inner">
              <h3 className="text-lg font-bold text-white mb-2">
                Direct Mail Dispatcher
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Choose a conversation topic to format an instant email via your default mail client.
              </p>

              {/* Topic Selector */}
              <div className="space-y-3 mb-5">
                <label className="text-xs font-semibold text-slate-300 block">
                  Select Topic
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'collaboration', label: 'Project Collab' },
                    { id: 'internship', label: 'SDE / Internship' },
                    { id: 'research', label: 'Research & AI' },
                    { id: 'other', label: 'General Message' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTopic(t.id)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-all text-left ${
                        topic === t.id
                          ? 'bg-violet-600 text-white shadow-sm border border-violet-400'
                          : 'bg-violet-950/30 text-slate-300 border border-violet-900/60 hover:bg-violet-900/40'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Note Input */}
              <div className="space-y-2 mb-6">
                <label className="text-xs font-semibold text-slate-300 block">
                  Optional Note / Context
                </label>
                <textarea
                  rows={3}
                  value={customNote}
                  onChange={(e) => setCustomNote(e.target.value)}
                  placeholder="Hi Sakshi, I enjoyed reviewing your projects and would like to talk about..."
                  className="w-full bg-black/50 border border-violet-500/30 rounded-xl p-3 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 resize-none font-normal"
                />
              </div>

              {/* Real working mailto button */}
              <a
                href={getMailtoUrl()}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-lg shadow-violet-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
              >
                <Send className="w-4 h-4" />
                <span>Open in Email Client</span>
              </a>

              <div className="text-[11px] text-center text-slate-400 mt-3">
                Zero spam · Opens client-side directly in Gmail, Apple Mail, or Outlook
              </div>
            </div>

          </div>

        </div>

        {/* Site Footer */}
        <footer className="pt-8 border-t border-violet-950/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Sakshi Shetye.</span>
            <span aria-hidden="true">·</span>
            <span>All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Built with React & Vite</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-violet-300 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </footer>

      </div>

      {/* GitHub Pages ₹0 Deployment Modal */}
      {showDeployGuide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#0e0924] border border-violet-500/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-violet-900/60">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <h4 className="text-base font-bold text-white">How to Host on GitHub Pages (₹0 Cost)</h4>
              </div>
              <button
                onClick={() => setShowDeployGuide(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-300 space-y-3 leading-relaxed font-normal">
              <p>
                This portfolio is 100% static, client-side, and requires no database, server, or API key. You can deploy it to GitHub Pages in 3 steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-1 text-slate-200">
                <li>
                  <strong className="text-white">Push Code to GitHub:</strong> Create a public repo (e.g. <code className="bg-black/50 px-1 py-0.5 rounded text-cyan-300">sakshi-portfolio</code>) and push this repository.
                </li>
                <li>
                  <strong className="text-white">Set Base Path in vite.config.ts:</strong> If your repository name is <code className="bg-black/50 px-1 py-0.5 rounded text-cyan-300">sakshi-portfolio</code>, add <code className="bg-black/50 px-1 py-0.5 rounded text-cyan-300">base: '/sakshi-portfolio/'</code> (or keep <code className="bg-black/50 px-1 py-0.5 rounded text-cyan-300">base: '/'</code> for a username.github.io repo).
                </li>
                <li>
                  <strong className="text-white">Enable GitHub Actions:</strong> In GitHub Repo Settings → Pages → Build and deployment → Source → Select <em>GitHub Actions</em>. A Vite static workflow deploys automatically on every push!
                </li>
              </ol>
              <div className="p-3 rounded-lg bg-violet-950/40 border border-violet-800/40 text-[11px] text-cyan-200">
                Zero subscriptions, zero domain renewal fees, completely free forever on GitHub's global CDN.
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowDeployGuide(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-colors"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
