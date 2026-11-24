import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from "lucide-react";
import { CAREER_EXPERIENCE } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-200 bg-[#FAFCFF] relative overflow-hidden">
      {/* Lookbook dot grid */}
      <div
        className="absolute bottom-10 right-10 w-28 h-28 opacity-30 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#0284C7 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Vertical Ribbon */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-1 hidden lg:flex justify-center">
            <span
              className="text-5xl font-black tracking-[0.25em] text-slate-200 uppercase select-none pointer-events-none inline-block"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              EXPERIENCE
            </span>
          </div>

          <div className="lg:col-span-11 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#EAF6FD] border border-[#BFDDEC] text-[10px] font-black uppercase tracking-widest text-[#0284C7] mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Milestones · Documented Track Record</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.06] mb-4 uppercase">
              From venture catalysts to <span className="text-[#0284C7]">global brokerage.</span>
            </h2>

            <p className="text-base text-slate-600 font-normal">
              A documented track record of coordinating complex cross-functional operations, enterprise events, vendor networks, and commercial marketing initiatives.
            </p>
          </div>
        </div>

        {/* Lookbook Milestone Cards with Offset Borders */}
        <div className="space-y-8">
          {CAREER_EXPERIENCE.map((exp, index) => (
            <div key={exp.company} className="relative group">
              {/* Offset Wireframe Border */}
              <div
                className="absolute -top-2.5 -right-2.5 w-full h-full border-2 border-slate-300 group-hover:border-[#0284C7] rounded-xs pointer-events-none transition-colors"
                aria-hidden="true"
              />

              {/* Main Card */}
              <div className="relative z-10 p-7 sm:p-9 rounded-sm bg-white border-2 border-slate-900 shadow-md transition-all duration-300">
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0284C7] block mb-1">
                      {exp.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                      {exp.role}
                    </h3>
                    <p className="text-base font-bold text-slate-700 mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs font-bold">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white rounded-xs uppercase tracking-wider text-[11px] shadow-xs">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 rounded-xs text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      <span className="w-1.5 h-1.5 rounded-xs bg-[#0284C7] mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Stats Bar */}
                {exp.keyStats && (
                  <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {exp.keyStats.map((stat) => (
                      <div key={stat.label} className="bg-slate-50 p-3 rounded-xs border border-slate-200">
                        <span className="block text-xl font-black text-slate-900">
                          {stat.value}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
