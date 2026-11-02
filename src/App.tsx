import { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { CustomCursor } from './components/common/CustomCursor';
import { Navigation } from './components/common/Navigation';
import { HeroSection } from './components/hero/HeroSection';
import { NarrativeSection } from './components/narrative/NarrativeSection';
import { RoadmapSection } from './components/roadmap/RoadmapSection';
import { NeuralConstellation } from './components/constellation/NeuralConstellation';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { ProjectModal } from './components/projects/ProjectModal';
import { SkillsSection } from './components/skills/SkillsSection';
import { CredentialsSection } from './components/credentials/CredentialsSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/common/Footer';
import { Toast } from './components/common/Toast';
import type { Project } from './types';

export function App() {
  // Initialize Lenis smooth scroll connected to GSAP ScrollTrigger
  useLenis();

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const handleSelectProject = (project: Project) => {
    setModalProject(project);
  };

  return (
    <div className="relative min-h-screen bg-dark-primary text-content-primary selection:bg-aqua-electric/25 selection:text-aqua-electric overflow-x-hidden">
      {/* Custom Desktop Glowing Cursor */}
      <CustomCursor />

      {/* Global Navigation Bar */}
      <Navigation />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Narrative Section: Curiosity Became a Direction */}
        <NarrativeSection />

        {/* Signature Interactive Feature: Neural Constellation & Superpower Reveal */}
        <NeuralConstellation />

        {/* Flagship Scroll-Driven Vertical SVG Roadmap */}
        <RoadmapSection onSelectProject={handleSelectProject} />

        {/* Projects Showcase & Live Repos */}
        <ProjectsSection onSelectProject={handleSelectProject} />

        {/* Transparent Skills Grid */}
        <SkillsSection />

        {/* Education & Verified Credentials */}
        <CredentialsSection />

        {/* Contact Section */}
        <ContactSection onNotify={(msg) => setToastMessage(msg)} />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Modal for Deep Case Studies */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />

      {/* Interactive Toast Notifications */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}

export default App;
