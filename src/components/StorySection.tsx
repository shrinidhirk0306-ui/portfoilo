import { PERSONAL_INFO, THREE_PILLARS } from '../data/portfolioData';

export default function StorySection() {
  return (
    <section id="story" className="relative w-full bg-[#070707] py-24 sm:py-32 px-6 sm:px-12 lg:px-20 text-cream border-t border-cream/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-cream/15">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-cream/50 font-mono">
              [ 01 // WHO I AM ]
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-light tracking-tight font-hn">
              A window into my mind.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-cream/60 max-w-md font-light leading-relaxed">
            First-year Computer Science Engineering student specializing in AI/ML in Bengaluru. Curious about people, technology, and turning ideas into tangible reality.
          </p>
        </div>

        {/* Narrative Manifesto Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Big Philosophy & Identity */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-none border border-cream/15 bg-[#0d0d0d] relative overflow-hidden">
              <span className="text-xs uppercase tracking-[0.2em] text-cream/40 font-mono block mb-4">
                Core Identity
              </span>
              <p className="text-xl sm:text-2xl font-light leading-snug text-cream">
                "I'm not someone who wants to limit herself to just coding or academics. I'm equally interested in understanding people, bringing people together, organizing experiences, and building things that solve real problems."
              </p>
              <div className="mt-6 pt-6 border-t border-cream/10 flex items-center justify-between text-xs text-cream/50">
                <span>{PERSONAL_INFO.name}</span>
                <span className="font-mono">{PERSONAL_INFO.education}</span>
              </div>
            </div>

            <div className="space-y-4 text-cream/75 text-sm sm:text-base leading-relaxed font-light">
              <p>
                I'm still figuring things out, experimenting with different opportunities, learning new skills, and discovering what I'm genuinely good at. That's an important part of my story.
              </p>
              <p>
                I'd rather experiment, make mistakes, gain real-world experience, and keep building than pretend to have a rigid ten-year blueprint.
              </p>
            </div>
          </div>

          {/* Right Column: The 3 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-cream/50 font-mono mb-6">
              The Intersection I Explore
            </h3>

            <div className="space-y-4">
              {THREE_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-8 border border-cream/10 hover:border-cream/30 bg-[#0b0b0b] transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-mono text-xs text-cream/40 group-hover:text-cream transition-colors">
                      {pillar.number}
                    </span>
                    <span className="text-xs tracking-wider text-cream/50 uppercase font-mono">
                      {pillar.subtitle}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-normal text-cream group-hover:translate-x-1 transition-transform duration-300">
                    {pillar.title}
                  </h4>
                  <p className="mt-3 text-sm text-cream/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                  <ul className="mt-5 space-y-1.5 pt-4 border-t border-cream/10">
                    {pillar.highlights.map((item, idx) => (
                      <li key={idx} className="text-xs text-cream/50 flex items-center gap-2">
                        <span className="w-1 h-1 bg-cream/60 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
