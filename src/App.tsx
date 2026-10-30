import Hero from './components/Hero';
import StorySection from './components/StorySection';
import ProjectsSection from './components/ProjectsSection';
import CommunitySection from './components/CommunitySection';
import VisionSection from './components/VisionSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="bg-[#070707] text-cream min-h-screen selection:bg-cream selection:text-black">
      {/* ── 1. The Striking Editorial Hero ── */}
      <Hero />

      {/* ── 2. Narrative Manifesto & The 3 Pillars ── */}
      <StorySection />

      {/* ── 3. What I'm Building (GoalNetwork, Quickbite, ML Predictor) ── */}
      <ProjectsSection />

      {/* ── 4. Gathering People & Community Operations ── */}
      <CommunitySection />

      {/* ── 5. Current Groundwork & Long-Term Vision ── */}
      <VisionSection />

      {/* ── 6. Dialogue, Contact & Digital Presence ── */}
      <ContactSection />
    </div>
  );
}
