import React, { useEffect } from 'react';
import type { Project } from '../data/resumeData';
import { X, MapPin, CheckCircle2, ShieldAlert, HeartPulse, Utensils, Train, Anchor, Compass, Layers, Cpu } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject?: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-400" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-amber-400" />;
      case 'Train': return <Train className="w-6 h-6 text-cyan-400" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-emerald-400" />;
      case 'Anchor': return <Anchor className="w-6 h-6 text-blue-400" />;
      case 'Compass': return <Compass className="w-6 h-6 text-indigo-400" />;
      default: return <MapPin className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop click listener */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#0D1220] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="bg-slate-900/90 px-6 py-5 border-b border-slate-800 flex items-start justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
              {renderIcon(project.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                <span>{project.category} Domain</span>
                <span>•</span>
                <span>{project.year}</span>
                <span>•</span>
                <span>{project.clientOrLocation}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-0.5">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-300">
          
          {/* Subtitle & Role Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">Project Type</div>
              <div className="text-sm font-semibold text-slate-200">{project.subtitle}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">My Role</div>
              <div className="text-sm font-semibold text-cyan-300">{project.role}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">Client / Environment</div>
              <div className="text-sm font-semibold text-slate-200">{project.clientOrLocation}</div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4" /> Overview
            </h3>
            <p className="text-base text-slate-200 leading-relaxed bg-slate-900/30 p-4 rounded-xl border border-slate-800/60">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-mono text-amber-400 uppercase tracking-wider">
                Engineering Challenge
              </h3>
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 text-sm text-slate-300 leading-relaxed h-full">
                {project.challenge}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-wider">
                Architecture Blueprint
              </h3>
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 text-sm text-slate-300 leading-relaxed font-mono h-full">
                {project.architectureDetails}
              </div>
            </div>
          </div>

          {/* Personal Engineering Contributions */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> My Personal Contributions
            </h3>
            <div className="space-y-2.5">
              {project.contribution.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center font-mono text-xs font-bold">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-slate-200 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider">
              Core Application Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 text-xs text-slate-200 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" /> Technologies & Frameworks Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-300 font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-900/90 px-6 py-4 border-t border-slate-800 flex items-center justify-between flex-shrink-0 text-xs font-mono text-slate-400">
          <span>Source: Verified Attached Resume Record</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
