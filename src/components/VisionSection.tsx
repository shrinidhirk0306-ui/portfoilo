export default function VisionSection() {
  return (
    <section id="vision" className="relative w-full bg-[#0a0a0a] py-24 sm:py-32 px-6 sm:px-12 lg:px-20 text-cream border-t border-cream/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-cream/15">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-cream/50 font-mono">
              [ 04 // TRAJECTORY & VISION ]
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-light tracking-tight font-hn">
              Where I Stand &amp; Where I'm Heading.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-cream/60 max-w-md font-light leading-relaxed">
            I'm not trying to have the perfect career blueprint right now. I'm building the skills, experiences, and perspective that will help me figure out what is worth pursuing.
          </p>
        </div>

        {/* Dual Grid: Now vs Future */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* What I'm Doing Right Now */}
          <div className="p-8 sm:p-10 border border-cream/15 bg-[#0e0e0e] flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-cream/40 font-mono block mb-3">
                Current Groundwork · 2026
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-cream font-hn mb-6">
                What I'm Doing Right Now
              </h3>
              <div className="space-y-4 text-sm text-cream/75 leading-relaxed font-light">
                <p>
                  • Immersing in Computer Science foundations, machine learning algorithms, and software development practices at my university in Bengaluru.
                </p>
                <p>
                  • Building proof-of-concept projects like GoalNetwork, Quickbite, and AI predictive pipelines to learn through hands-on shipping.
                </p>
                <p>
                  • Actively engaging in event operations, community activities, and conversations with practitioners from diverse industries.
                </p>
                <p>
                  • Developing execution discipline, public communication, confidence, and empathy for how products actually feel to human beings.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-cream/10 text-xs font-mono text-cream/50">
              Focus: High-agency learning by doing &amp; meeting ambitious peers.
            </div>
          </div>

          {/* Long-Term Vision */}
          <div className="p-8 sm:p-10 border border-cream/15 bg-[#0e0e0e] flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-cream/40 font-mono block mb-3">
                Long-Term Aspiration
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-cream font-hn mb-6">
                The Person I Want to Become
              </h3>
              <div className="space-y-4 text-sm text-cream/75 leading-relaxed font-light">
                <p>
                  • A leader who can build and lead meaningful ventures, identify non-obvious problems, and assemble high-caliber teams around ambitious goals.
                </p>
                <p>
                  • An entrepreneur who bridges the gap between deep technical capabilities and viable, sustainable business economics.
                </p>
                <p>
                  • A super-connector with a high-trust network formed through genuine relationships across medicine, tech, law, and arts.
                </p>
                <p>
                  • Someone whose work leaves a measurable impact on people's day-to-day lives rather than vanity metrics.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-cream/10 text-xs font-mono text-cream/50">
              Focus: Combining technology with business to build something enduring.
            </div>
          </div>
        </div>

        {/* Central Brand Motto Banner */}
        <div className="mt-16 p-10 sm:p-16 border border-cream/20 bg-gradient-to-br from-[#121212] via-[#0d0d0d] to-[#070707] text-center relative overflow-hidden">
          <span className="text-xs uppercase tracking-[0.3em] text-cream/40 font-mono block mb-4">
            The Central Thesis
          </span>
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-light text-cream tracking-tight font-hn">
            People. Ideas. Technology. Possibilities.
          </h3>
          <p className="mt-6 text-sm sm:text-base text-cream/70 max-w-xl mx-auto font-light leading-relaxed">
            "I'm not just collecting skills for a résumé. I'm exploring what I can create with them."
          </p>
        </div>
      </div>
    </section>
  );
}
