import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { ExperienceSection } from './components/Experience';
import { ProjectsSection } from './components/Projects';
import { EngineeringShowcase } from './components/EngineeringShowcase';
import { SkillsSection } from './components/Skills';
import { EducationSection } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { RESUME_DATA } from './data/resumeData';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleDownloadResume = () => {
    // Triggers direct download of actual PDF asset Raahav_Ajith_Flutter_Developer.pdf
    const link = document.createElement('a');
    link.href = RESUME_DATA.personal.resumePdfPath;
    link.download = 'Raahav_Ajith_Flutter_Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] selection:bg-[#0071E3]/20 selection:text-[#0071E3]">
      
      {/* Sticky Header */}
      <Navbar
        onDownloadResume={handleDownloadResume}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onDownloadResume={handleDownloadResume}
        />
        <MetricsBar />
        
        {/* About / Summary Section */}
        <section id="about" className="py-20 relative bg-[#F5F5F7]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0071E3]/10 border border-[#0071E3]/20 text-[#0071E3] text-xs font-semibold">
              <span>About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1F] tracking-tight">
              Engineering Scalable Cross-Platform Mobile Applications
            </h2>
            <p className="text-lg text-[#515154] leading-relaxed max-w-4xl mx-auto font-normal">
              I am a Senior Flutter Developer with <span className="text-[#0071E3] font-bold">5+ Years of Experience</span> crafting resilient mobile and web applications. My core expertise centers on <span className="text-[#1D1D1F] font-semibold">BLoC state management</span>, <span className="text-[#1D1D1F] font-semibold">Clean Architecture</span>, robust REST API integrations, and offline-first database design (relational SQLite and Hive). Having delivered solutions across Healthcare (HIPAA-focused), Marine Fleet Management, Restaurant POS, Transit MVP, and Government citizen reporting, I focus on building software systems that perform under challenging real-world network conditions.
            </p>
          </div>
        </section>

        <ExperienceSection />
        <ProjectsSection />
        <EngineeringShowcase />
        <SkillsSection />
        <EducationSection />
        <ResumeSection
          onOpenModal={() => setIsResumeModalOpen(true)}
          onDownload={handleDownloadResume}
        />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onDownloadResume={handleDownloadResume}
      />

      {/* Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onDownload={handleDownloadResume}
      />

    </div>
  );
}

export default App;
