import React, { useEffect } from 'react';
import type { Project } from '../data/resumeData';
import { X, MapPin, CheckCircle2, ShieldAlert, HeartPulse, Utensils, Train, Anchor, Compass, Layers, Cpu } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
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
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-amber-500" />;
      case 'Train': return <Train className="w-6 h-6 text-[#0071E3]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6 text-emerald-500" />;
      case 'Anchor': return <Anchor className="w-6 h-6 text-blue-600" />;
      case 'Compass': return <Compass className="w-6 h-6 text-indigo-500" />;
      default: return <MapPin className="w-6 h-6 text-purple-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop click listener */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-4xl bg-white border border-black/10 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto text-[#1D1D1F]">
        
        {/* Modal Header */}
        <div className="bg-[#F5F5F7] px-6 py-5 border-b border-black/5 flex items-start justify-between flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-white border border-black/5 shadow-2xs">
              {renderIcon(project.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-[#0071E3] font-semibold">
                <span>{project.category} Domain</span>
                <span>•</span>
                <span>{project.year}</span>
                <span>•</span>
                <span>{project.clientOrLocation}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight mt-0.5">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#515154] hover:text-[#1D1D1F] hover:bg-black/5 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#515154]">
          
          {/* Subtitle & Role Badges */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-[#F5F5F7] border border-black/5">
            <div>
              <div className="text-xs font-mono text-[#86868B] uppercase font-semibold">Project Type</div>
              <div className="text-sm font-bold text-[#1D1D1F]">{project.subtitle}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-[#86868B] uppercase font-semibold">My Role</div>
              <div className="text-sm font-bold text-[#0071E3]">{project.role}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-[#86868B] uppercase font-semibold">Client / Environment</div>
              <div className="text-sm font-bold text-[#1D1D1F]">{project.clientOrLocation}</div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-[#0071E3] uppercase tracking-wider font-bold flex items-center gap-2">
              <Layers className="w-4 h-4" /> Overview
            </h3>
            <p className="text-base text-[#1D1D1F] leading-relaxed bg-[#F5F5F7]/80 p-5 rounded-2xl border border-black/5 font-normal">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-xs font-mono text-amber-700 uppercase tracking-wider font-bold">
                Engineering Challenge
              </h3>
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-sm text-amber-900 leading-relaxed font-medium h-full">
                {project.challenge}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono text-emerald-700 uppercase tracking-wider font-bold">
                Architecture Blueprint
              </h3>
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 text-sm text-emerald-950 leading-relaxed font-mono h-full font-medium">
                {project.architectureDetails}
              </div>
            </div>
          </div>

          {/* Personal Engineering Contributions */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-[#0071E3] uppercase tracking-wider font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0071E3]" /> My Personal Contributions
            </h3>
            <div className="space-y-2.5">
              {project.contribution.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-[#F5F5F7] border border-black/5">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0071E3] text-white border border-[#0071E3] flex items-center justify-center font-mono text-xs font-bold">
                    {idx + 1}
                  </span>
                  <p className="text-sm text-[#1D1D1F] leading-relaxed font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-indigo-600 uppercase tracking-wider font-bold">
              Core Application Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#F5F5F7] border border-black/5 text-xs font-semibold text-[#1D1D1F] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0071E3] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-mono text-[#86868B] uppercase tracking-wider font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#0071E3]" /> Technologies & Frameworks Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full bg-[#F5F5F7] border border-black/5 text-xs font-mono text-[#0071E3] font-bold shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#F5F5F7] px-6 py-4 border-t border-black/5 flex items-center justify-between flex-shrink-0 text-xs font-mono text-[#86868B]">
          <span>Verified Experience Record</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#1D1D1F] hover:bg-black text-white font-semibold transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
};
