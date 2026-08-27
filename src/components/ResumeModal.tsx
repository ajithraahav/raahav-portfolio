import React from 'react';
import { RESUME_DATA } from '../data/resumeData';
import { X, Download, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#0F1424] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto text-slate-200">
        
        {/* Modal Toolbar Header */}
        <div className="bg-slate-900 px-6 py-4 border-b border-slate-800 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Raahav_Ajith_KS_Resume.pdf</h3>
              <div className="text-xs font-mono text-slate-400">Verified Resume Document • Updated 2026</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onDownload}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-xl transition-colors shadow-md"
            >
              <Download className="w-4 h-4" /> Download PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Paper Document Preview */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-950 font-sans">
          
          <div className="max-w-3xl mx-auto bg-[#090C15] p-8 sm:p-12 rounded-xl border border-slate-800 shadow-2xl space-y-8 text-left">
            
            {/* Resume Header */}
            <div className="text-center pb-6 border-b border-slate-800 space-y-2">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {RESUME_DATA.personal.name}
              </h1>
              <div className="text-base font-bold text-cyan-400">
                Flutter Developer — 5+ Years Experience — BLoC — Clean Architecture — Scalable Mobile Applications
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300 pt-2">
                <span>{RESUME_DATA.personal.phone}</span>
                <span>•</span>
                <span>{RESUME_DATA.personal.email}</span>
                <span>•</span>
                <span>{RESUME_DATA.personal.location}</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold border-b border-slate-800 pb-1">
                Professional Summary
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {RESUME_DATA.personal.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold border-b border-slate-800 pb-1">
                Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                <div><strong className="text-white">Programming:</strong> Dart, JavaScript, Kotlin, HTML, CSS</div>
                <div><strong className="text-white">Frameworks:</strong> Flutter, Flutter Web (latest stable versions)</div>
                <div><strong className="text-white">State Management:</strong> BLoC, Cubit, Provider</div>
                <div><strong className="text-white">Architecture:</strong> Clean Architecture, MVVM, Repository Pattern</div>
                <div><strong className="text-white">Navigation:</strong> Navigator 2.0 (Basic), go_router, Deep Linking</div>
                <div><strong className="text-white">API Integration:</strong> REST APIs, GraphQL (Basic), Caching, Error Handling, Retry Mechanisms (Exponential Backoff)</div>
                <div><strong className="text-white">Mobile Integrations:</strong> Firebase (Auth, FCM, Crashlytics), Google Maps API, Location Services, Razorpay</div>
                <div><strong className="text-white">Databases:</strong> Hive, SQLite, MySQL</div>
                <div><strong className="text-white">Performance Optimization:</strong> Widget rebuild optimization, Image optimization, Lazy loading, Pagination, Memory profiling</div>
                <div><strong className="text-white">UI/UX:</strong> Responsive UI, Flutter Animations (Implicit/Explicit)</div>
                <div><strong className="text-white">DevOps & Tools:</strong> Git, GitHub, Azure DevOps (CI/CD), Fastlane (Basic), GitHub Actions (Basic)</div>
                <div><strong className="text-white">AI / ML Integration:</strong> MediaPipe, TensorFlow Lite (TFLite), On-device ML Model Integration</div>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold border-b border-slate-800 pb-1">
                Professional Experience
              </h2>
              {RESUME_DATA.experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-baseline font-bold text-white">
                    <span className="text-sm">{exp.company} — <span className="text-slate-300 font-medium italic">{exp.role}</span></span>
                    <span className="font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <div className="text-slate-400 font-mono italic">{exp.location}</div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-300">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Selected Projects */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold border-b border-slate-800 pb-1">
                Selected Projects
              </h2>
              {RESUME_DATA.projects.map((p) => (
                <div key={p.id} className="space-y-1 text-xs">
                  <div className="flex justify-between items-baseline font-bold text-white">
                    <span>{p.title} — <span className="text-slate-300 font-normal italic">{p.subtitle}</span></span>
                    <span className="font-mono text-slate-400">{p.year}</span>
                  </div>
                  <div className="text-cyan-400 font-mono">{p.clientOrLocation}</div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-300">
                    {p.contribution.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold border-b border-slate-800 pb-1">
                Education
              </h2>
              {RESUME_DATA.education.map((edu) => (
                <div key={edu.degree} className="flex justify-between text-xs text-slate-300">
                  <div>
                    <strong className="text-white">{edu.institution}</strong> — {edu.degree} ({edu.location})
                  </div>
                  <div className="font-mono text-slate-400">{edu.period}</div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-900 px-6 py-4 border-t border-slate-800 flex items-center justify-between flex-shrink-0 text-xs font-mono text-slate-400">
          <span>End of Resume Document</span>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors"
            >
              Close
            </button>
            <button
              onClick={onDownload}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors shadow-md"
            >
              <Download className="w-4 h-4" /> Download PDF File
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
