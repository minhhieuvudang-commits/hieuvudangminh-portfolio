import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle, Award } from "lucide-react";
import { CAREER_EXPERIENCE } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-[#D8EAF5] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FD] border border-[#BFDDEC] text-[11px] font-extrabold uppercase tracking-widest text-[#176B9F] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#123A5A] leading-[1.05]">
            From venture catalysts to global brokerage.
          </h2>
          <p className="text-base text-[#557B97] mt-3">
            A documented track record of coordinating complex cross-functional operations, enterprise events, vendor networks, and commercial marketing initiatives.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-[#D8EAF5] ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-14">
          {CAREER_EXPERIENCE.map((exp, index) => (
            <div key={exp.company} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[49px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-[#176B9F] group-hover:scale-125 transition-transform" />

              {/* Main Card */}
              <div className="p-7 sm:p-9 rounded-2xl bg-[#FBFDFF] border border-[#D8EAF5] hover:border-[#BFDDEC] transition-all duration-300 hover:shadow-xl hover:shadow-[#176B9F]/06">
                {/* Header Information */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#D8EAF5]">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest text-[#176B9F]">
                      {exp.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#123A5A] mt-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-base font-bold text-[#2F7FB5] mt-0.5">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap md:flex-col md:items-end gap-2 text-xs font-semibold text-[#66859D]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#D8EAF5] rounded-full">
                      <Calendar className="w-3.5 h-3.5 text-[#176B9F]" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#D8EAF5] rounded-full">
                      <MapPin className="w-3.5 h-3.5 text-[#176B9F]" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-[#475467]">
                      <CheckCircle className="w-4 h-4 text-[#2F7FB5] shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Statistics Highlights Badges */}
                {exp.keyStats && exp.keyStats.length > 0 && (
                  <div className="pt-4 border-t border-[#D8EAF5]/80 flex flex-wrap gap-3">
                    {exp.keyStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="px-3.5 py-1.5 rounded-lg bg-[#EAF6FD] border border-[#BFDDEC] flex items-center gap-2"
                      >
                        <span className="text-xs font-black text-[#176B9F]">
                          {stat.value}
                        </span>
                        <span className="text-[11px] font-semibold text-[#557B97]">
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
