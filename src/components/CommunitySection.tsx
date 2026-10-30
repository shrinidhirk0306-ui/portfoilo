import { COMMUNITY_EXPERIENCES } from '../data/portfolioData';

export default function CommunitySection() {
  const domains = [
    { title: 'Founders & Startups', note: 'How early ideas transition into viable business models and relentless execution.' },
    { title: 'Doctors & Healthcare', note: 'Understanding clinical pressure, diagnostic empathy, and healthcare systems.' },
    { title: 'Engineers & Architects', note: 'Technical elegance, clean abstractions, and scalability trade-offs.' },
    { title: 'Advocates & Legal Minds', note: 'How policy, regulations, and ethics govern innovation.' },
    { title: 'Creatives & Designers', note: 'Visual storytelling, human emotional resonance, and intuitive aesthetics.' },
    { title: 'Fitness & Disciplined Pursuits', note: 'Habit loops, resilience, and maintaining long-term physical & mental stamina.' },
  ];

  return (
    <section id="community" className="relative w-full bg-[#070707] py-24 sm:py-32 px-6 sm:px-12 lg:px-20 text-cream border-t border-cream/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-cream/15">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-cream/50 font-mono">
              [ 03 // PEOPLE & COMMUNITIES ]
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-light tracking-tight font-hn">
              Gathering People &amp; Ideas.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-cream/60 max-w-md font-light leading-relaxed">
            I enjoy the energy of bringing strangers together, facilitating genuine conversations, and learning how people outside technology think.
          </p>
        </div>

        {/* Narrative Feature */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-light text-cream leading-snug">
              Why I seek conversations outside the standard tech bubble.
            </h3>
            <p className="text-sm sm:text-base text-cream/75 leading-relaxed font-light">
              Too many technical students only talk to other coders. I believe the most transformative ideas happen at the edges — when you listen to a clinician describe workflow fatigue, an advocate dissect liability, or an entrepreneur describe their first painful customer loss.
            </p>
            <p className="text-sm sm:text-base text-cream/75 leading-relaxed font-light">
              Through event operations, community outreach, and informal meetups in Bengaluru, I've developed the ability to break the ice with complete strangers, facilitate welcoming environments, and uncover the real motivations behind what people build.
            </p>
          </div>

          <div className="lg:col-span-6 p-8 border border-cream/15 bg-[#0b0b0b] space-y-4">
            <span className="text-xs uppercase tracking-widest text-cream/40 font-mono block">
              Event Operations &amp; Gathering Experience
            </span>
            <div className="space-y-6 pt-2">
              {COMMUNITY_EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="pb-4 border-b border-cream/10 last:border-0 last:pb-0">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-base font-normal text-cream">{exp.role}</h4>
                    <span className="text-xs text-cream/40 font-mono">{exp.context}</span>
                  </div>
                  <p className="mt-1.5 text-xs text-cream/70 leading-relaxed font-light">
                    {exp.description}
                  </p>
                  <p className="mt-2 text-[11px] text-cream/50 font-mono">
                    <span className="text-cream/70">Impact:</span> {exp.takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cross-Domain Matrix */}
        <div className="mt-20 pt-16 border-t border-cream/15">
          <div className="mb-8">
            <span className="text-xs uppercase tracking-widest text-cream/40 font-mono">
              Perspectives Matrix
            </span>
            <h3 className="text-xl sm:text-2xl font-light text-cream mt-1 font-hn">
              Learning from completely different disciplines
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((d, i) => (
              <div
                key={i}
                className="p-6 border border-cream/10 bg-[#0d0d0d] hover:border-cream/30 transition-all duration-300"
              >
                <span className="text-xs font-mono text-cream/40 block mb-2">0{i + 1}</span>
                <h4 className="text-base font-medium text-cream">{d.title}</h4>
                <p className="mt-2 text-xs text-cream/65 leading-relaxed font-light">
                  {d.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
