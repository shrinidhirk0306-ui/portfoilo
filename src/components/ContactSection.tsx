import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative w-full bg-[#050505] py-24 sm:py-32 px-6 sm:px-12 lg:px-20 text-cream border-t border-cream/15">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-cream/10">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-cream/50 font-mono">
              [ 05 // CONNECT & DIALOGUE ]
            </span>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-cream font-hn leading-[1.1]">
              Let's explore an idea, project, or collaboration.
            </h2>
            <p className="text-base sm:text-lg text-cream/70 font-light leading-relaxed max-w-xl">
              Whether you're a founder building in Bengaluru, an engineer working on AI, someone organizing creative gatherings, or someone with an unconventional story — I'd love to connect.
            </p>

            <div className="pt-4">
              <a
                href={`mailto:${PERSONAL_INFO.socials.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 border border-cream/30 bg-cream text-black hover:bg-cream/90 transition-all font-mono text-sm tracking-wide"
              >
                <span>Write to {PERSONAL_INFO.socials.email}</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Links & Details */}
          <div className="lg:col-span-5 p-8 border border-cream/10 bg-[#090909] space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-cream/40 font-mono block mb-2">
                Location &amp; Availability
              </span>
              <p className="text-sm text-cream/90 font-light">
                Bengaluru, Karnataka, India (IST)
              </p>
              <p className="text-xs text-cream/50 mt-1">
                Open for student projects, internships, hackathon teams, and community collaborations.
              </p>
            </div>

            <div className="pt-4 border-t border-cream/10">
              <span className="text-xs uppercase tracking-widest text-cream/40 font-mono block mb-3">
                Digital Presence
              </span>
              <div className="flex flex-col gap-2.5 text-sm font-mono">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream flex items-center justify-between py-1 border-b border-cream/5 hover:border-cream/20 transition-colors"
                >
                  <span>GitHub</span>
                  <span className="text-xs text-cream/40">github.com/shrinidhirk0306-ui ↗</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream flex items-center justify-between py-1 border-b border-cream/5 hover:border-cream/20 transition-colors"
                >
                  <span>LinkedIn</span>
                  <span className="text-xs text-cream/40">Connect ↗</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/70 hover:text-cream flex items-center justify-between py-1 border-b border-cream/5 hover:border-cream/20 transition-colors"
                >
                  <span>Instagram</span>
                  <span className="text-xs text-cream/40">Socials ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Sub-Footer */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/40 font-mono">
          <div>
            © {new Date().getFullYear()} Shrinidhi Kotagiri · Engineered with Vite, React &amp; Tailwind CSS
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-cream transition-colors flex items-center gap-1.5 uppercase tracking-wider"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </section>
  );
}
