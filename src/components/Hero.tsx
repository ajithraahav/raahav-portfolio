import React from 'react';
import { ArrowRight, Download, Mail, Smartphone, Layers, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { RESUME_DATA } from '../data/resumeData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadResume }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center bg-[#F5F5F7]">
      
      {/* Background Subtle Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0071E3]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-black/5 text-[#1D1D1F] text-xs font-semibold shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Flutter & Mobile Engineering Opportunities</span>
            </div>

            {/* Main Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1D1D1F] leading-[1.08]">
                {RESUME_DATA.personal.name}
              </h1>
              <div className="text-xl sm:text-3xl font-bold text-[#0071E3] tracking-tight">
                Senior Flutter Developer & Mobile Application Engineer
              </div>
            </div>

            {/* Resume Summary Statement highlighting 5+ Years Experience */}
            <p className="text-base sm:text-lg text-[#515154] max-w-2xl leading-relaxed font-normal">
              Over <span className="text-[#1D1D1F] font-bold">5+ Years of Experience</span> building production-grade mobile & web applications with <span className="text-[#1D1D1F] font-semibold">Flutter & Dart</span>. Specialized in <span className="text-[#0071E3] font-semibold">BLoC architecture</span>, <span className="text-[#0071E3] font-semibold">Clean Architecture</span>, offline-first systems (SQLite / Hive), and HIPAA-compliant healthcare applications.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-[#0071E3] hover:bg-[#0056B3] shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onDownloadResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-[#1D1D1F] bg-white hover:bg-slate-50 border border-black/10 shadow-xs hover:border-[#0071E3]/40 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-[#0071E3]" />
                <span>Download Resume (PDF)</span>
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-full font-semibold text-[#515154] hover:text-[#1D1D1F] bg-transparent hover:bg-black/5 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-[#515154]" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Contact Metadata */}
            <div className="pt-4 flex flex-wrap items-center gap-6 border-t border-black/5 text-sm text-[#86868B]">
              <a
                href={RESUME_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#0071E3] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="font-mono text-xs">github/ajithraahav</span>
              </a>
              <a
                href={RESUME_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#0071E3] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="font-mono text-xs">linkedin/raahav-ajith-k-s</span>
              </a>
              <div className="flex items-center gap-1.5 text-[#515154]">
                <span className="font-mono text-xs text-emerald-600 font-semibold">📍 {RESUME_DATA.personal.location}</span>
              </div>
            </div>

          </div>

          {/* Right Visual Identity: Refined Apple Glass Product Engineering Showcase */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg">
              
              {/* Subtle background card glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#0071E3]/20 to-indigo-500/20 blur-2xl opacity-60 pointer-events-none" />

              <div className="relative apple-glass-card rounded-3xl p-6 sm:p-8 space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-black/5 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[#0071E3]/10 text-[#0071E3]">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#1D1D1F]">Flutter Mobile Engineering</h3>
                      <p className="text-xs font-medium text-[#86868B]">Production Systems Blueprint</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#0071E3]/10 text-[#0071E3] text-xs font-mono font-bold">
                    5+ YRS EXP
                  </span>
                </div>

                {/* Key Highlights Frosted Cards */}
                <div className="space-y-3">
                  
                  <div className="p-4 rounded-2xl bg-white/90 border border-black/5 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#86868B]">
                      <span className="flex items-center gap-1.5 text-[#0071E3]">
                        <Layers className="w-4 h-4" /> Architecture Pattern
                      </span>
                      <span className="text-emerald-600 font-mono">Clean Arch + BLoC</span>
                    </div>
                    <p className="text-sm font-bold text-[#1D1D1F]">
                      Unidirectional Reactive State Streams & Domain Separation
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/90 border border-black/5 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#86868B]">
                      <span className="flex items-center gap-1.5 text-amber-600">
                        <ShieldCheck className="w-4 h-4" /> Healthcare Compliance
                      </span>
                      <span className="text-amber-600 font-mono">US Client</span>
                    </div>
                    <p className="text-sm font-bold text-[#1D1D1F]">
                      HIPAA Data Standards & PIP Flexion Assessment Modules
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/90 border border-black/5 shadow-2xs space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#86868B]">
                      <span className="flex items-center gap-1.5 text-indigo-600">
                        <Zap className="w-4 h-4" /> Offline Performance
                      </span>
                      <span className="text-indigo-600 font-mono">SQLite / Hive</span>
                    </div>
                    <p className="text-sm font-bold text-[#1D1D1F]">
                      Relational Bulk Offline Persistence for Maritime & Transit Apps
                    </p>
                  </div>

                </div>

                {/* Footer specs */}
                <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#86868B] border-t border-black/5">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Production Verified
                  </span>
                  <span className="text-[#0071E3] font-semibold">Flutter • Dart • BLoC</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
