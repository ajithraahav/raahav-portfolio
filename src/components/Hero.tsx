import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Mail, Smartphone, Layers, Cpu, CheckCircle2, Zap } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [activeTab, setActiveTab] = useState<'bloc' | 'arch' | 'code'>('bloc');
  const [simulatedStateIndex, setSimulatedStateIndex] = useState(0);

  const blocStates = [
    { event: "FetchPatientAssessmentEvent(id: 'US-HIPAA-8821')", state: "RehabilitationState.Loading()", status: "BLoC State: Syncing HIPAA APIs...", color: "text-amber-400" },
    { event: "MeasurePIPContracture(flexion: 42.5)", state: "RehabilitationState.Loaded(flexion: 42.5°)", status: "BLoC State: State Emitted to UI", color: "text-emerald-400" },
    { event: "OfflineSyncEvent(storage: 'SQLite Bulk')", state: "OfflineSyncState.InSync(queuedItems: 0)", status: "BLoC State: Maritime Bulk Storage Synced", color: "text-cyan-400" },
    { event: "ApiCallWithRetry(exponentialBackoff: true)", state: "NetworkState.Success(latency: 45ms)", status: "BLoC State: Resilience Pipeline Active", color: "text-indigo-400" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSimulatedStateIndex((prev) => (prev + 1) % blocStates.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const currentState = blocStates[simulatedStateIndex];

  return (
    <section id="hero" className="relative min-h-[90vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-radial-gradient">
      {/* Background Subtle Grid & Light Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono backdrop-blur-md shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Flutter & Mobile Engineering Opportunities</span>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                {RESUME_DATA.personal.name}
              </h1>
              <div className="mt-2 text-xl sm:text-2xl font-bold text-gradient-flutter">
                {RESUME_DATA.personal.title}
              </div>
            </div>

            {/* Resume-derived Factual Summary Statement */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Building scalable, production-ready mobile and web experiences using <span className="text-white font-medium">Flutter & Dart</span>. Specialized in <span className="text-cyan-300 font-medium">BLoC architecture</span>, <span className="text-cyan-300 font-medium">Clean Architecture</span>, offline-first systems, and reliable API integrations across Healthcare, POS, Marine, and Government domains.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 group"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-cyan-300 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 shadow-md transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View & Download Resume</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-slate-900/40 hover:bg-slate-800/40 border border-slate-800/80 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Direct Social Links & Fact Quick Tags */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-slate-800/60 text-sm text-slate-400">
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="font-mono text-xs">github/ajithraahav</span>
              </a>
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="font-mono text-xs">linkedin/raahav-ajith-k-s</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="font-mono text-xs text-emerald-400">📍 {RESUME_DATA.personal.location}</span>
              </div>
            </div>

          </div>

          {/* Right Visual Identity: Interactive Flutter Engineering Architecture Simulator */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg">
              
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-indigo-500/30 blur-xl opacity-70 animate-pulse pointer-events-none" />

              <div className="relative glass-card rounded-2xl border border-slate-700/60 shadow-2xl overflow-hidden">
                
                {/* Header bar of simulated code IDE / DevTools */}
                <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-cyan-400" /> Flutter DevTools v3.22
                    </span>
                  </div>

                  {/* Visualizer Tab Switcher */}
                  <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
                    <button
                      onClick={() => setActiveTab('bloc')}
                      className={`px-2 py-0.5 rounded ${activeTab === 'bloc' ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/50' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      BLoC Stream
                    </button>
                    <button
                      onClick={() => setActiveTab('arch')}
                      className={`px-2 py-0.5 rounded ${activeTab === 'arch' ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/50' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Clean Arch
                    </button>
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-2 py-0.5 rounded ${activeTab === 'code' ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/50' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Dart
                    </button>
                  </div>
                </div>

                {/* Card Content according to active tab */}
                <div className="p-5 space-y-4">

                  {activeTab === 'bloc' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Reactive BLoC State Pipeline
                        </span>
                        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                          <Zap className="w-3 h-3" /> Live Event Simulator
                        </span>
                      </div>

                      <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80 font-mono text-xs space-y-2">
                        <div className="text-slate-500 text-[10px]">EVENT INJECTED:</div>
                        <div className="text-cyan-300 font-semibold truncate">
                          {currentState.event}
                        </div>
                      </div>

                      <div className="bg-slate-900/90 p-4 rounded-xl border border-cyan-500/30 space-y-2 shadow-inner">
                        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                          <span>EMITTED STATE:</span>
                          <span className={currentState.color}>{currentState.status}</span>
                        </div>
                        <div className="text-sm font-mono font-bold text-white flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{currentState.state}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-center">
                          <div className="text-[10px] text-slate-400 uppercase font-mono">Offline Engine</div>
                          <div className="text-xs font-semibold text-slate-200">SQLite & Hive</div>
                        </div>
                        <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800 text-center">
                          <div className="text-[10px] text-slate-400 uppercase font-mono">API Resilience</div>
                          <div className="text-xs font-semibold text-slate-200">Exponential Backoff</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'arch' && (
                    <div className="space-y-3 font-mono text-xs">
                      <div className="text-xs text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                        <Layers className="w-3.5 h-3.5 text-cyan-400" /> Clean Architecture Flow
                      </div>

                      <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 flex items-center justify-between">
                        <span>1. Presentation Layer (Flutter Widgets)</span>
                        <span className="text-[10px] bg-cyan-900/60 px-1.5 py-0.5 rounded">UI</span>
                      </div>

                      <div className="w-0.5 h-3 bg-slate-700 mx-auto" />

                      <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-800/40 text-indigo-300 flex items-center justify-between">
                        <span>2. Business Logic (BLoC / Cubit)</span>
                        <span className="text-[10px] bg-indigo-900/60 px-1.5 py-0.5 rounded">State</span>
                      </div>

                      <div className="w-0.5 h-3 bg-slate-700 mx-auto" />

                      <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-800/40 text-purple-300 flex items-center justify-between">
                        <span>3. Domain Layer (UseCases & Entities)</span>
                        <span className="text-[10px] bg-purple-900/60 px-1.5 py-0.5 rounded">Business</span>
                      </div>

                      <div className="w-0.5 h-3 bg-slate-700 mx-auto" />

                      <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-between">
                        <span>4. Data Repository (REST / SQLite / Hive)</span>
                        <span className="text-[10px] bg-slate-800 px-1.5 py-0.5 rounded">Data</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'code' && (
                    <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 font-mono text-[11px] leading-relaxed text-slate-300 space-y-1 overflow-x-auto">
                      <div><span className="text-purple-400">class</span> <span className="text-cyan-300">RehabilitationBloc</span> <span className="text-purple-400">extends</span> <span className="text-yellow-300">Bloc</span>&lt;<span className="text-cyan-300">AssessmentEvent</span>, <span className="text-cyan-300">AssessmentState</span>&gt; &#123;</div>
                      <div className="pl-4 text-slate-400">// Clean Architecture Repository abstraction</div>
                      <div className="pl-4"><span className="text-purple-400">final</span> <span className="text-cyan-300">PatientRepository</span> repository;</div>
                      <div className="pl-4"><span className="text-purple-400">final</span> <span className="text-cyan-300">OfflineSyncEngine</span> offlineEngine;</div>
                      <br/>
                      <div className="pl-4">RehabilitationBloc(this.repository, this.offlineEngine) &#123;</div>
                      <div className="pl-8">on&lt;<span className="text-cyan-300">FetchAssessmentEvent</span>&gt;((event, emit) <span className="text-purple-400">async</span> &#123;</div>
                      <div className="pl-12">emit(<span className="text-cyan-300">AssessmentLoading</span>());</div>
                      <div className="pl-12"><span className="text-purple-400">final</span> result = <span className="text-purple-400">await</span> repository.getPatientData(event.id);</div>
                      <div className="pl-12">result.fold(</div>
                      <div className="pl-16">(failure) =&gt; emit(<span className="text-cyan-300">AssessmentError</span>(failure.message)),</div>
                      <div className="pl-16">(data) =&gt; emit(<span className="text-cyan-300">AssessmentLoaded</span>(data)),</div>
                      <div className="pl-12">);</div>
                      <div className="pl-8">&#125;);</div>
                      <div className="pl-4">&#125;</div>
                      <div>&#125;</div>
                    </div>
                  )}

                </div>

                <div className="bg-slate-950/80 px-4 py-2.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" /> Production Mobile Spec
                  </span>
                  <span className="text-cyan-300">Flutter • Dart • BLoC</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
