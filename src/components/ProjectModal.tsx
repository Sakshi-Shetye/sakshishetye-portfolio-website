import { useState, useEffect } from 'react';
import { X, ExternalLink, Play, CheckCircle2, RotateCcw, Activity, ShieldAlert, Cpu } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0c0822] border border-violet-500/40 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-violet-900/50 bg-[#090518]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <h3 id="modal-project-title" className="text-lg font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <span className="hidden sm:inline text-xs text-slate-400">· {project.subtitle}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-violet-900/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Visual or Visual Concept */}
          {project.imageSrc ? (
            <div className="relative rounded-xl overflow-hidden border border-violet-500/30 aspect-video max-h-72 w-full bg-black">
              <img
                src={project.imageSrc}
                alt={`${project.title} visual representation`}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0822] via-transparent to-transparent" />
            </div>
          ) : (
            <div className="p-6 rounded-xl bg-gradient-to-br from-violet-950/60 to-indigo-950/40 border border-violet-500/30 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-300">Visual Concept</span>
                <p className="text-sm font-medium text-slate-200 mt-1">{project.visualConcept}</p>
              </div>
              <Cpu className="w-8 h-8 text-violet-400 shrink-0 ml-4" />
            </div>
          )}

          {/* Core Description & Architecture */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-2">
              Project Architecture & Vision
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
              {project.extendedDescription}
            </p>
          </div>

          {/* Technologies Used (Zero-Pill discipline) */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
              Technologies & Infrastructure
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-violet-950/60 text-slate-200 border border-violet-500/30 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
              Key Engineering Features
            </h4>
            <ul className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Live Micro-Demo */}
          <div className="pt-6 border-t border-violet-950/80">
            <div className="flex items-center gap-2 mb-4">
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <h4 className="text-sm font-bold text-white tracking-tight">
                Interactive Simulator / Feature Preview
              </h4>
            </div>

            {project.demoType === 'cpu-scheduling' && <CpuSchedulerDemo />}
            {project.demoType === 'wellness' && <MindMateDemo />}
            {project.demoType === 'breakdown-map' && <MySanmargDemo />}
            {project.demoType === 'interview-pilot' && <MockPilotDemo />}
            {project.demoType === 'campus-portal' && <CampusPortalDemo />}
            {project.demoType === 'cardiocare-analytics' && <CardioCareDemo />}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-violet-900/50 bg-[#090518] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Verified Project by <span className="text-violet-300 font-medium">Sakshi Shetye</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-violet-950/50 hover:bg-violet-900/60 border border-violet-500/30 rounded-lg transition-colors cursor-pointer"
            >
              Close Preview
            </button>
            <a
              href={`mailto:sakshishetyecmpn@gmail.com?subject=Inquiry regarding ${encodeURIComponent(project.title)}&body=Hi Sakshi,%0D%0A%0D%0AI was reviewing your project ${encodeURIComponent(project.title)} on your portfolio and would like to learn more about the implementation.`}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-lg shadow-md transition-all cursor-pointer"
            >
              <span>Discuss Architecture</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

// Sub-component 1: ProcessSchedule Calculator Live Simulator
function CpuSchedulerDemo() {
  const [algorithm, setAlgorithm] = useState<'FCFS' | 'RR'>('FCFS');
  const [quantum, setQuantum] = useState(2);
  const [bursts, setBursts] = useState([4, 3, 5, 2]);
  const [calculated, setCalculated] = useState<{
    gantt: { pid: string; start: number; end: number }[];
    avgWait: number;
    avgTat: number;
  } | null>(null);

  const calculate = () => {
    if (algorithm === 'FCFS') {
      const gantt = [];
      let current = 0;
      let totalWait = 0;
      let totalTat = 0;

      for (let i = 0; i < bursts.length; i++) {
        const b = bursts[i];
        const wait = current;
        const tat = current + b;
        totalWait += wait;
        totalTat += tat;
        gantt.push({ pid: `P${i + 1}`, start: current, end: current + b });
        current += b;
      }

      setCalculated({
        gantt,
        avgWait: Number((totalWait / bursts.length).toFixed(2)),
        avgTat: Number((totalTat / bursts.length).toFixed(2)),
      });
    } else {
      // Round Robin
      const remaining = [...bursts];
      let current = 0;
      const gantt = [];
      const waitTimes = new Array(bursts.length).fill(0);
      const tatTimes = new Array(bursts.length).fill(0);
      let done = false;

      while (!done) {
        done = true;
        for (let i = 0; i < remaining.length; i++) {
          if (remaining[i] > 0) {
            done = false;
            const exec = Math.min(remaining[i], quantum);
            gantt.push({ pid: `P${i + 1}`, start: current, end: current + exec });
            current += exec;
            remaining[i] -= exec;
            if (remaining[i] === 0) {
              tatTimes[i] = current;
              waitTimes[i] = current - bursts[i];
            }
          }
        }
      }

      const avgWait = Number((waitTimes.reduce((a, b) => a + b, 0) / bursts.length).toFixed(2));
      const avgTat = Number((tatTimes.reduce((a, b) => a + b, 0) / bursts.length).toFixed(2));

      setCalculated({ gantt, avgWait, avgTat });
    }
  };

  useEffect(() => {
    calculate();
  }, [algorithm, bursts, quantum]);

  return (
    <div className="p-4 rounded-xl bg-[#090518] border border-violet-500/30 text-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-300">Algorithm:</span>
          <button
            onClick={() => setAlgorithm('FCFS')}
            className={`px-2.5 py-1 rounded font-mono ${
              algorithm === 'FCFS' ? 'bg-violet-600 text-white' : 'bg-violet-950/60 text-slate-400'
            }`}
          >
            FCFS
          </button>
          <button
            onClick={() => setAlgorithm('RR')}
            className={`px-2.5 py-1 rounded font-mono ${
              algorithm === 'RR' ? 'bg-violet-600 text-white' : 'bg-violet-950/60 text-slate-400'
            }`}
          >
            Round Robin
          </button>
        </div>

        {algorithm === 'RR' && (
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Time Quantum (q):</span>
            <input
              type="number"
              min={1}
              max={5}
              value={quantum}
              onChange={(e) => setQuantum(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-12 bg-black border border-violet-500/40 rounded px-2 py-0.5 text-center text-cyan-300 font-mono"
            />
          </div>
        )}
      </div>

      {/* Burst times inputs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {bursts.map((b, i) => (
          <div key={i} className="p-2 rounded bg-violet-950/40 border border-violet-900/60 flex items-center justify-between">
            <span className="font-mono text-cyan-300">P{i + 1} Burst:</span>
            <input
              type="number"
              min={1}
              max={12}
              value={b}
              onChange={(e) => {
                const next = [...bursts];
                next[i] = Math.max(1, parseInt(e.target.value) || 1);
                setBursts(next);
              }}
              className="w-12 bg-black border border-violet-500/30 rounded px-1.5 py-0.5 text-center text-white font-mono"
            />
          </div>
        ))}
      </div>

      {/* Gantt Chart */}
      {calculated && (
        <div className="space-y-3">
          <div className="text-[11px] font-mono text-slate-400">Gantt Execution Timeline:</div>
          <div className="flex w-full overflow-x-auto rounded border border-violet-500/30 p-1 bg-black/50">
            {calculated.gantt.map((slot, idx) => (
              <div
                key={idx}
                className="flex-1 min-w-[42px] border-r border-violet-900/80 p-2 text-center bg-violet-950/60 hover:bg-violet-900/60 transition-colors"
              >
                <div className="font-bold text-cyan-300 font-mono">{slot.pid}</div>
                <div className="text-[10px] text-slate-400 font-mono mt-1">
                  {slot.start} → {slot.end}
                </div>
              </div>
            ))}
          </div>

          {/* Results Summary */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-2.5 rounded bg-violet-900/20 border border-violet-500/30 text-center">
              <span className="text-slate-400 block text-[11px]">Avg. Waiting Time (AWT)</span>
              <span className="text-base font-bold text-cyan-300 font-mono">{calculated.avgWait} ms</span>
            </div>
            <div className="p-2.5 rounded bg-violet-900/20 border border-violet-500/30 text-center">
              <span className="text-slate-400 block text-[11px]">Avg. Turnaround Time (TAT)</span>
              <span className="text-base font-bold text-violet-300 font-mono">{calculated.avgTat} ms</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Sub-component 2: MindMate Interactive Wellness Assistant
function MindMateDemo() {
  const [selectedPrompt, setSelectedPrompt] = useState<string>('exam-stress');
  const [response, setResponse] = useState<string>(
    "It is completely normal to feel overloaded when multiple deadlines converge. Let's break things into smaller 25-minute sprints. Take a slow deep breath in for 4 seconds, hold for 4, and release for 4. You've got this."
  );

  const prompts = [
    {
      id: 'exam-stress',
      label: 'Exam & Deadline Overload',
      text: "It is completely normal to feel overloaded when multiple deadlines converge. Let's break things into smaller 25-minute sprints. Take a slow deep breath in for 4 seconds, hold for 4, and release for 4. You've got this."
    },
    {
      id: 'code-block',
      label: 'Stuck in Debugging Loop',
      text: "A debugging wall usually means your brain needs a context switch. Step away from the monitor for 5 minutes, drink some water, and come back with fresh eyes. The bug will look much clearer."
    },
    {
      id: 'imposter',
      label: 'Imposter Feelings',
      text: "Every senior engineer once struggled with basic syntax. Growth in technology isn't measured by memorization, but by your curiosity to figure things out step by step. Look at how much you've already learned!"
    }
  ];

  return (
    <div className="p-4 rounded-xl bg-[#090518] border border-violet-500/30 text-xs">
      <div className="text-slate-300 mb-2 font-medium">Select a situation to simulate MindMate's supportive guidance:</div>
      <div className="flex flex-wrap gap-2 mb-4">
        {prompts.map((p) => (
          <button
            key={p.id}
            onClick={() => {
              setSelectedPrompt(p.id);
              setResponse(p.text);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              selectedPrompt === p.id
                ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-sm'
                : 'bg-violet-950/50 text-slate-300 hover:text-white border border-violet-900/60'
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-violet-950/30 border border-violet-500/20 relative">
        <div className="text-xs text-violet-300 font-mono mb-2 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          MindMate Companion (Llama-based local system):
        </div>
        <p className="text-sm text-slate-100 leading-relaxed font-normal italic">
          "{response}"
        </p>
      </div>
    </div>
  );
}

// Sub-component 3: MySANmarg Breakdown Assistance Demo
function MySanmargDemo() {
  const [vehicle, setVehicle] = useState<'bike' | 'car' | 'tractor'>('car');
  const [dispatched, setDispatched] = useState(false);

  return (
    <div className="p-4 rounded-xl bg-[#090518] border border-violet-500/30 text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <button
          onClick={() => { setVehicle('bike'); setDispatched(false); }}
          className={`p-2.5 rounded-lg border text-center transition-all ${
            vehicle === 'bike' ? 'border-cyan-400 bg-cyan-950/30 text-white' : 'border-violet-900/50 text-slate-400'
          }`}
        >
          Two-Wheeler
        </button>
        <button
          onClick={() => { setVehicle('car'); setDispatched(false); }}
          className={`p-2.5 rounded-lg border text-center transition-all ${
            vehicle === 'car' ? 'border-cyan-400 bg-cyan-950/30 text-white' : 'border-violet-900/50 text-slate-400'
          }`}
        >
          Four-Wheeler / Taxi
        </button>
        <button
          onClick={() => { setVehicle('tractor'); setDispatched(false); }}
          className={`p-2.5 rounded-lg border text-center transition-all ${
            vehicle === 'tractor' ? 'border-cyan-400 bg-cyan-950/30 text-white' : 'border-violet-900/50 text-slate-400'
          }`}
        >
          Tractor / Rural Agri
        </button>
      </div>

      <div className="p-4 rounded-xl bg-black/40 border border-violet-950 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-slate-300 font-semibold mb-1">Rural Highway Corridor - Sector 4B</div>
          <div className="text-slate-400 text-[11px]">3 verified mechanics located within a 6.2 km radius</div>
        </div>

        <button
          onClick={() => setDispatched(true)}
          className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-colors shrink-0"
        >
          {dispatched ? 'Unit Dispatched' : 'Request Assistance'}
        </button>
      </div>

      {dispatched && (
        <div className="mt-3 p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 flex items-center justify-between">
          <span>Mechanic Ramesh K. dispatched · ETA ~14 mins</span>
          <span className="font-mono text-xs">Direct GPS Ping Active</span>
        </div>
      )}
    </div>
  );
}

// Sub-component 4: MockPilot Interview Simulator Demo
function MockPilotDemo() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="p-4 rounded-xl bg-[#090518] border border-violet-500/30 text-xs space-y-3">
      <div className="p-3 rounded-lg bg-violet-950/30 border border-violet-800/40">
        <span className="text-[11px] font-mono text-cyan-300 uppercase block mb-1">AI Interviewer Question:</span>
        <p className="text-slate-100 text-sm font-medium">
          "How would you handle real-time state synchronization when scaling a web application to multiple concurrent users?"
        </p>
      </div>

      <div className="flex items-center justify-between gap-3 p-3 rounded-lg bg-black/40 border border-violet-900/60">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
              isRecording ? 'bg-rose-600 text-white animate-pulse' : 'bg-violet-600 text-white hover:bg-violet-500'
            }`}
          >
            {isRecording ? 'Listening (Speaking...)' : 'Simulate Response'}
          </button>
          <span className="text-slate-400 text-[11px]">
            {isRecording ? 'Capturing audio waveform & transcribing...' : 'Click to simulate candidate answer'}
          </span>
        </div>

        <span className="text-cyan-300 font-mono text-[11px]">VAPI Integration</span>
      </div>

      {isRecording && (
        <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-500/30 space-y-1.5">
          <div className="text-[11px] text-slate-300 font-mono">Live Closed-Caption Subtitle:</div>
          <div className="text-slate-100 italic">"I would employ WebSockets with server-authoritative state and Redis pub/sub..."</div>
          <div className="text-[10px] text-emerald-400 pt-1 border-t border-indigo-900/60">
            Real-time Feedback: Strong technical terminology, good pacing (132 wpm).
          </div>
        </div>
      )}
    </div>
  );
}

// Sub-component 5: VGuideMaster Campus Portal Switcher
function CampusPortalDemo() {
  const [role, setRole] = useState<'student' | 'faculty' | 'parent' | 'admin'>('student');

  return (
    <div className="p-4 rounded-xl bg-[#090518] border border-violet-500/30 text-xs">
      <div className="flex flex-wrap gap-2 mb-4">
        {(['student', 'faculty', 'parent', 'admin'] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`px-3 py-1.5 rounded-lg capitalize font-medium transition-all ${
              role === r
                ? 'bg-violet-600 text-white shadow-sm'
                : 'bg-violet-950/50 text-slate-400 hover:text-slate-200 border border-violet-900/60'
            }`}
          >
            {r} Portal
          </button>
        ))}
      </div>

      <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/20">
        {role === 'student' && (
          <div>
            <h5 className="font-bold text-white mb-1">Student Dashboard View</h5>
            <p className="text-slate-300 mb-2">View real-time attendance (88.4%), download semester transcripts, and submit lab assignments.</p>
            <span className="text-[11px] font-mono text-cyan-300">Published Research Reference: IJRP March 2024</span>
          </div>
        )}
        {role === 'faculty' && (
          <div>
            <h5 className="font-bold text-white mb-1">Faculty Attendance & Marks Entry</h5>
            <p className="text-slate-300 mb-2">One-click batch roll call, continuous assessment rubric recording, and automated defaulter alerts.</p>
            <span className="text-[11px] font-mono text-cyan-300">Role-Segregated Authorization Model</span>
          </div>
        )}
        {role === 'parent' && (
          <div>
            <h5 className="font-bold text-white mb-1">Parental Progress Monitor</h5>
            <p className="text-slate-300 mb-2">SMS notification bridge, monthly academic summary graphs, and direct faculty feedback channel.</p>
            <span className="text-[11px] font-mono text-cyan-300">Secure Guardian Authentication</span>
          </div>
        )}
        {role === 'admin' && (
          <div>
            <h5 className="font-bold text-white mb-1">Campus Administration Console</h5>
            <p className="text-slate-300 mb-2">Campus-wide departmental analytics, staff workload balancing, and institutional circular publisher.</p>
            <span className="text-[11px] font-mono text-cyan-300">SQL Schema Optimization</span>
          </div>
        )}
      </div>
    </div>
  );
}

// Sub-component 6: CardioCare Heart Disease Risk Demo
function CardioCareDemo() {
  const [bp, setBp] = useState(128);
  const [cholesterol, setCholesterol] = useState(215);

  const riskScore = Math.min(95, Math.max(8, Math.round(((bp - 100) * 0.4 + (cholesterol - 150) * 0.3))));

  return (
    <div className="p-4 rounded-xl bg-[#090518] border border-violet-500/30 text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-slate-300 block mb-1">Systolic Blood Pressure: {bp} mmHg</label>
          <input
            type="range"
            min={90}
            max={190}
            value={bp}
            onChange={(e) => setBp(parseInt(e.target.value))}
            className="w-full accent-cyan-400"
          />
        </div>
        <div>
          <label className="text-slate-300 block mb-1">Serum Cholesterol: {cholesterol} mg/dL</label>
          <input
            type="range"
            min={140}
            max={320}
            value={cholesterol}
            onChange={(e) => setCholesterol(parseInt(e.target.value))}
            className="w-full accent-violet-400"
          />
        </div>
      </div>

      <div className="p-3 rounded-lg bg-black/40 border border-violet-900/60 flex items-center justify-between">
        <span className="text-slate-300">Model Predicted Risk Probability:</span>
        <span className="font-mono font-bold text-cyan-300 text-sm">{riskScore}%</span>
      </div>

      <div className="mt-2 text-[10px] text-slate-400 flex items-center gap-1.5">
        <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
        <span>Academic student project for educational demonstration; not clinical medical advice.</span>
      </div>
    </div>
  );
}
