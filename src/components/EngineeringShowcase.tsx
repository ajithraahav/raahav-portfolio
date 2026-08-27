import React, { useState } from 'react';
import { Cpu, ShieldCheck, Database, RefreshCw, Layers, ArrowRight, Zap } from 'lucide-react';

export const EngineeringShowcase: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<number>(0);

  const architectureLayers = [
    {
      name: "1. Presentation Layer",
      subtitle: "Flutter UI Widgets & Animations",
      desc: "Responsive UI built with Flutter standard implicit/explicit animations. Widget rebuild optimization eliminating wasteful render passes through const constructors and Keys.",
      tech: ["Flutter Widgets", "Responsive Layouts", "Custom Paint", "Implicit Animations"],
      color: "border-cyan-500 text-cyan-400 bg-cyan-950/40"
    },
    {
      name: "2. State Management",
      subtitle: "BLoC / Cubit / Provider",
      desc: "Unidirectional data flow isolating UI rendering from logic. Emits immutable state streams (`State.Loading()`, `State.Loaded()`, `State.Error()`) to guarantee predictable UI behavior.",
      tech: ["flutter_bloc", "Cubit", "Streams / Rx", "Equatable"],
      color: "border-indigo-500 text-indigo-400 bg-indigo-950/40"
    },
    {
      name: "3. Domain Layer",
      subtitle: "Use Cases & Pure Entities",
      desc: "Framework-independent business logic containing core rules (e.g. Clinical PIP flexion assessments, HIPAA data rules, Location calculation algorithms). Pure Dart code with zero UI dependencies.",
      tech: ["UseCases", "Entities", "Failures / Either", "SOLID Principles"],
      color: "border-purple-500 text-purple-400 bg-purple-950/40"
    },
    {
      name: "4. Repository Abstraction",
      subtitle: "Data Source Orchestrator",
      desc: "Mediates between local databases and remote network APIs. Automatically fallback to local cache when offline and push local delta queues when connectivity returns.",
      tech: ["Repository Pattern", "Cache Strategy", "Delta Queue Engine"],
      color: "border-emerald-500 text-emerald-400 bg-emerald-950/40"
    },
    {
      name: "5. Data Sources",
      subtitle: "REST APIs, SQLite & Hive",
      desc: "Relational bulk SQLite for vessel records & maritime maintenance. Hive key-value storage for transit schedules. RESTful endpoints configured with Exponential Backoff retry policies.",
      tech: ["SQLite (Bulk Storage)", "Hive Key-Value", "REST APIs", "Exponential Backoff"],
      color: "border-blue-500 text-blue-400 bg-blue-950/40"
    }
  ];

  return (
    <section id="engineering" className="py-24 relative bg-[#090C15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" /> Engineering Practice
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Build Software: System Architecture
          </h2>
          <p className="text-slate-400 text-base">
            Systematic engineering practices designed for reliability, offline resilience, low-latency performance, and strict enterprise data compliance.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Interactive Diagram Nodes */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" /> Clean Architecture Pipeline (Click to Inspect)
            </div>

            {architectureLayers.map((layer, idx) => (
              <div
                key={layer.name}
                onClick={() => setSelectedNode(idx)}
                className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  selectedNode === idx
                    ? `${layer.color} shadow-lg shadow-cyan-950/50 translate-x-2`
                    : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="font-mono text-xs font-bold uppercase tracking-wider">{layer.name}</div>
                  <div className="text-base font-bold text-white mt-0.5">{layer.subtitle}</div>
                </div>
                <ArrowRight className={`w-5 h-5 ${selectedNode === idx ? 'text-white' : 'text-slate-600'}`} />
              </div>
            ))}
          </div>

          {/* Right: Selected Node Detail & Code Proof */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl relative min-h-[380px] flex flex-col justify-between">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 font-mono text-xs mb-4">
                  <span>Layer {selectedNode + 1} Specification</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {architectureLayers[selectedNode].subtitle}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {architectureLayers[selectedNode].desc}
                </p>
              </div>

              {/* Technologies contained in layer */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Layer Components & Patterns
                </div>
                <div className="flex flex-wrap gap-2">
                  {architectureLayers[selectedNode].tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-cyan-300 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Core Pillars of Engineering Practice */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-card rounded-xl p-6 border border-slate-800">
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/60 w-fit mb-4 text-cyan-400">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Exponential Backoff</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Implemented automatic network retry algorithms with exponential delays to prevent API server overload during intermittent cellular coverage.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 border border-slate-800">
            <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-800/60 w-fit mb-4 text-indigo-400">
              <Database className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">Offline-First Sync</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Designed bulk relational SQLite pipelines for offshore marine vessels operating weeks without Internet, with auto-delta sync upon reconnecting.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 border border-slate-800">
            <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800/60 w-fit mb-4 text-rose-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">HIPAA Data Security</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Strict compliance with US HIPAA healthcare standards, securing patient data transmission and local storage encryption for clinical apps.
            </p>
          </div>

          <div className="glass-card rounded-xl p-6 border border-slate-800">
            <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/60 w-fit mb-4 text-emerald-400">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">60 FPS Tuning</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Optimized Flutter UI rendering through DevTools memory profiling, image caching, and eliminating unnecessary widget rebuilds.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
