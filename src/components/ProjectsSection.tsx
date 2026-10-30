import { useState } from 'react';
import { PROJECTS, type Project } from '../data/portfolioData';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const skillsList = [
    { category: 'AI & Data Science', items: ['Python', 'Scikit-Learn', 'Pandas & NumPy', 'Data Preprocessing', 'Predictive Modeling', 'Prompt Engineering'] },
    { category: 'Web & Building', items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'REST APIs', 'Git & GitHub'] },
    { category: 'Core & Problem Solving', items: ['Data Structures & Algorithms', 'C / C++', 'Object-Oriented Programming', 'System Thinking', 'UI/UX Wireframing'] },
  ];

  return (
    <section id="projects" className="relative w-full bg-[#090909] py-24 sm:py-32 px-6 sm:px-12 lg:px-20 text-cream border-t border-cream/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-cream/15">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-cream/50 font-mono">
              [ 02 // WHAT I AM BUILDING ]
            </span>
            <h2 className="mt-3 text-3xl sm:text-5xl font-light tracking-tight font-hn">
              Projects &amp; Prototypes.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-cream/60 max-w-md font-light leading-relaxed">
            Turning theoretical curiosity into functional systems. From AI predictive models to campus solutions and community platforms.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              className="p-8 border border-cream/15 hover:border-cream/40 bg-[#0d0d0d] flex flex-col justify-between transition-all duration-300 group cursor-pointer"
              onClick={() => setActiveProject(proj)}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-cream/50 font-mono mb-4">
                  <span>0{idx + 1}</span>
                  <span className="px-2 py-0.5 border border-cream/20 text-[10px] uppercase">
                    {proj.status}
                  </span>
                </div>

                <span className="text-xs uppercase tracking-wider text-cream/40 font-mono">
                  {proj.category}
                </span>

                <h3 className="text-2xl font-normal mt-2 text-cream group-hover:text-cream/90 transition-colors">
                  {proj.title}
                </h3>

                <p className="mt-3 text-sm text-cream/70 leading-relaxed font-light">
                  {proj.tagline}
                </p>

                <div className="mt-6 pt-6 border-t border-cream/10 space-y-3">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-cream/40 font-mono block">
                      The Challenge
                    </span>
                    <p className="text-xs text-cream/60 mt-1 line-clamp-2">
                      {proj.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-cream/40 font-mono block">
                      The Architecture
                    </span>
                    <p className="text-xs text-cream/60 mt-1 line-clamp-2">
                      {proj.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-cream/10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 bg-cream/5 text-cream/60 border border-cream/10"
                    >
                      {t}
                    </span>
                  ))}
                  {proj.tech.length > 3 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-cream/40">
                      +{proj.tech.length - 3}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="text-xs font-mono uppercase tracking-wider text-cream/70 group-hover:text-cream flex items-center gap-1.5 transition-colors"
                >
                  <span>Inspect Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-Depth Project Inspection */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="bg-[#121212] border border-cream/20 max-w-2xl w-full p-8 sm:p-10 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-cream/50 font-mono">
                    {activeProject.category} · {activeProject.status}
                  </span>
                  <h3 className="text-3xl font-light text-cream mt-1 font-hn">
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProject(null)}
                  className="text-cream/50 hover:text-cream text-lg font-mono px-2 py-1"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <p className="mt-4 text-base text-cream/80 leading-relaxed font-light">
                {activeProject.tagline}
              </p>

              <div className="mt-8 space-y-6 border-y border-cream/10 py-6">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-cream/40 font-mono mb-2">
                    Problem &amp; Context
                  </h4>
                  <p className="text-sm text-cream/75 leading-relaxed font-light">
                    {activeProject.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-cream/40 font-mono mb-2">
                    Solution &amp; Approach
                  </h4>
                  <p className="text-sm text-cream/75 leading-relaxed font-light">
                    {activeProject.solution}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-cream/40 font-mono mb-2">
                    My Role
                  </h4>
                  <p className="text-sm text-cream/75 leading-relaxed font-light">
                    {activeProject.role}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xs uppercase tracking-widest text-cream/40 font-mono mb-3">
                  Technologies &amp; Methodologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 bg-cream/10 text-cream border border-cream/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-2 border border-cream/30 text-xs uppercase tracking-wider font-mono hover:bg-cream hover:text-black transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Technical Toolkit & Competencies */}
        <div className="mt-20 pt-16 border-t border-cream/15">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8">
            <h3 className="text-xl font-light text-cream font-hn">
              Technical Stack &amp; Areas of Study
            </h3>
            <span className="text-xs text-cream/50 font-mono mt-1 sm:mt-0">
              Continuously Expanding Through Practice
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsList.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="p-6 border border-cream/10 bg-[#0d0d0d]"
              >
                <h4 className="text-xs uppercase tracking-widest text-cream/50 font-mono pb-3 border-b border-cream/10">
                  {skillGroup.category}
                </h4>
                <ul className="mt-4 space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs text-cream/75 flex items-center gap-2 font-mono"
                    >
                      <span className="w-1 h-1 bg-cream/40 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
