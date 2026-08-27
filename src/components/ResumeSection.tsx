import React from 'react';
import { FileText, Download, Eye, CheckCircle2 } from 'lucide-react';

interface ResumeSectionProps {
  onOpenModal: () => void;
  onDownload: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenModal, onDownload }) => {
  return (
    <section className="py-20 relative bg-radial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl relative overflow-hidden max-w-5xl mx-auto">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/80 text-cyan-300 text-xs font-mono">
                <FileText className="w-3.5 h-3.5" /> Official Curriculum Vitae
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Download Official Resume
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Access my verified 2-page detailed technical resume covering my 5+ years of Flutter engineering, Clean Architecture implementations, HIPAA healthcare compliance work, and offline-first mobile projects.
              </p>

              {/* Verified Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>5+ Years Verified Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>BLoC & Clean Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>HIPAA US Healthcare Project</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Offline-First (SQLite / Hive)</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onDownload}
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 shadow-lg shadow-cyan-500/25 transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </button>

                <button
                  onClick={onOpenModal}
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition-all duration-200"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Full Screen Preview</span>
                </button>
              </div>
            </div>

            {/* Right Card Visual */}
            <div className="lg:col-span-5">
              <div
                onClick={onOpenModal}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/40 shadow-xl cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-cyan-400" /> Raahav_Ajith_Resume.pdf
                  </span>
                  <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 px-2 py-0.5 rounded border border-cyan-800">
                    PDF Document
                  </span>
                </div>

                <div className="space-y-3 font-mono text-[11px] text-slate-400 leading-relaxed opacity-75 group-hover:opacity-100 transition-opacity">
                  <div className="text-white font-bold">Raahav Ajith K S — Flutter Developer</div>
                  <div>+91 6382799376 • ajithraahav@gmail.com</div>
                  <div className="text-cyan-300">5+ Years • BLoC • Clean Architecture • Scalable Mobile Apps</div>
                  <div className="h-0.5 bg-slate-800 my-2" />
                  <div>MOURI Tech Limited — Consultant – Flutter Developer</div>
                  <div>Galentic Technology — Flutter Developer</div>
                  <div>Techzarinfo Software Solutions — Flutter Developer</div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                  <Eye className="w-4 h-4" /> Click to Read Document
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
