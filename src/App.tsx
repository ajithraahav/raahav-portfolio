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
    const textContent = `
================================================================================
                           ${RESUME_DATA.personal.name}
${RESUME_DATA.personal.title} — 5+ Years Experience — BLoC — Clean Architecture
Phone: ${RESUME_DATA.personal.phone} | Email: ${RESUME_DATA.personal.email} | Location: ${RESUME_DATA.personal.location}
GitHub: ${RESUME_DATA.personal.github} | LinkedIn: ${RESUME_DATA.personal.linkedin}
================================================================================

PROFESSIONAL SUMMARY:
${RESUME_DATA.personal.summary}

TECHNICAL SKILLS:
- Programming: Dart, JavaScript, Kotlin, HTML, CSS
- Frameworks: Flutter, Flutter Web (latest stable versions)
- State Management: BLoC, Cubit, Provider
- Architecture: Clean Architecture, MVVM, Repository Pattern
- Navigation: Navigator 2.0 (Basic), go_router, Deep Linking
- API Integration: REST APIs, GraphQL (Basic), Caching, Error Handling, Retry Mechanisms (Exponential Backoff)
- Mobile Integrations: Firebase (Auth, FCM, Crashlytics), Google Maps API, Location Services, Razorpay
- Databases: Hive, SQLite, MySQL
- DevOps & Tools: Git, GitHub, Azure DevOps (CI/CD), Fastlane (Basic), GitHub Actions (Basic)
- AI / ML Integration: MediaPipe, TensorFlow Lite (TFLite), On-device ML Model Integration

PROFESSIONAL EXPERIENCE:
${RESUME_DATA.experiences.map(e => `
* ${e.company} — ${e.role} (${e.period})
  Location: ${e.location} ${e.context ? `| Context: ${e.context}` : ''}
  Highlights:
  ${e.highlights.map(h => `  - ${h}`).join('\n')}
  Technologies: ${e.technologies.join(', ')}
`).join('\n')}

SELECTED PROJECTS:
${RESUME_DATA.projects.map(p => `
* ${p.title} (${p.year})
  Category: ${p.category} | Client/Location: ${p.clientOrLocation} | Role: ${p.role}
  Summary: ${p.summary}
  Contributions:
  ${p.contribution.map(c => `  - ${c}`).join('\n')}
  Tech Stack: ${p.techStack.join(', ')}
`).join('\n')}

EDUCATION:
${RESUME_DATA.education.map(edu => `
* ${edu.institution} — ${edu.degree} (${edu.period})
  Location: ${edu.location} | Status: ${edu.status}
  Details: ${edu.details}
`).join('\n')}
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Raahav_Ajith_KS_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#090C15] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Sticky Header */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Sections */}
      <main>
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <MetricsBar />
        
        {/* About / Summary Section */}
        <section id="about" className="py-20 relative bg-[#090C15]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
              <span>About Me</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering Scalable Cross-Platform Applications
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto font-normal">
              I am a Flutter Developer with <span className="text-cyan-300 font-semibold">4.5+ years of production experience</span> crafting resilient mobile and web applications. My core expertise centers on <span className="text-white font-semibold">BLoC state management</span>, <span className="text-white font-semibold">Clean Architecture</span>, robust REST API integrations, and offline-first database design (relational SQLite and Hive). Having delivered solutions across Healthcare (HIPAA-focused), Marine Fleet Management, Restaurant POS, Transit MVP, and Government citizen reporting, I focus on building software systems that perform under challenging real-world network conditions.
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
      <Footer onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Resume Document Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onDownload={handleDownloadResume}
      />

    </div>
  );
}

export default App;
