import React from 'react';
import { FileText, Download, Eye, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';

interface ResumeSectionProps {
  onOpenModal: () => void;
  onDownload: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenModal, onDownload }) => {
  return (
    <section className="py-20 relative bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="apple-glass-card rounded-3xl p-8 sm:p-12 border border-black/5 shadow-md relative overflow-hidden max-w-5xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-semibold">
                <FileText className="w-3.5 h-3.5" /> Official Curriculum Vitae
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
                Download Official Resume
              </h2>

              <p className="text-[#515154] text-base leading-relaxed font-normal">
                Access my verified 2-page detailed technical resume covering 5+ years of Flutter engineering, Clean Architecture implementations, HIPAA healthcare compliance work, and offline-first mobile projects.
              </p>

              {/* Verified Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#1D1D1F] font-mono font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>5+ Years Verified Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>BLoC & Clean Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>HIPAA US Healthcare Project</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Offline-First (SQLite / Hive)</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onDownload}
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-white bg-[#0071E3] hover:bg-[#0056B3] shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume PDF</span>
                </button>

                <button
                  onClick={onOpenModal}
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-[#1D1D1F] bg-white hover:bg-slate-50 border border-black/10 shadow-2xs hover:border-[#0071E3]/40 transition-all duration-200"
                >
                  <Eye className="w-4 h-4 text-[#0071E3]" />
                  <span>Full Screen Preview</span>
                </button>
              </div>
            </div>

            {/* Right Card Visual */}
            <div className="lg:col-span-5">
              <div
                onClick={onOpenModal}
                className="bg-white p-7 rounded-3xl border border-black/5 hover:border-[#0071E3]/40 shadow-sm hover:shadow-md cursor-pointer group transition-all"
              >
                <div className="flex items-center justify-between border-b border-black/5 pb-3 mb-4">
                  <span className="font-mono text-xs text-[#1D1D1F] font-bold flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#0071E3]" /> Raahav_Ajith_Flutter_Developer.pdf
                  </span>
                  <span className="text-[10px] font-mono bg-[#0071E3]/10 text-[#0071E3] px-2.5 py-0.5 rounded-full font-bold">
                    PDF Document
                  </span>
                </div>

                <div className="space-y-3 font-mono text-[11px] text-[#515154] leading-relaxed">
                  <div className="text-[#1D1D1F] font-bold text-xs">{RESUME_DATA.personal.name}</div>
                  <div>+91 6382799376 • ajithraahav@gmail.com</div>
                  <div className="text-[#0071E3] font-semibold">5+ Years Exp • BLoC • Clean Architecture • Scalable Mobile Apps</div>
                  <div className="h-0.5 bg-black/5 my-2" />
                  <div>MOURI Tech Limited — Consultant – Flutter Developer</div>
                  <div>Galentic Technology — Flutter Developer</div>
                  <div>Techzarinfo Software Solutions — Flutter Developer</div>
                </div>

                <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-center gap-2 text-xs font-bold text-[#0071E3] group-hover:text-[#0056B3]">
                  <Eye className="w-4 h-4" /> Click to View Official PDF Document
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
