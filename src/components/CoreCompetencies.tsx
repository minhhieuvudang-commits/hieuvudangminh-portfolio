import React from "react";
import { Check, Cpu, LayoutList, Megaphone, TrendingUp } from "lucide-react";
import { CORE_COMPETENCIES } from "@/data/portfolioData";

export default function CoreCompetencies() {
  const iconMap: Record<string, React.ElementType> = {
    "Project Management": LayoutList,
    "Marketing & Communication": Megaphone,
    "Industry Knowledge": TrendingUp,
    "Creative & Digital": Cpu,
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-200 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-1 hidden lg:flex justify-center">
            <span
              className="text-5xl font-black tracking-[0.25em] text-slate-200 uppercase select-none pointer-events-none inline-block"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              SKILLS
            </span>
          </div>

          <div className="lg:col-span-11 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FD] border border-[#BFDDEC] text-[10px] font-black uppercase tracking-widest text-[#0284C7] mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Professional Capabilities · Core Pillars</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.06] mb-4 uppercase">
              Core competencies <span className="text-[#0284C7]">&</span> domain expertise.
            </h2>

            <p className="text-base text-slate-600 font-normal">
              Four functional pillars developed across 3+ years of hands-on campaign execution, brokerage operations, and international event logistics.
            </p>
          </div>
        </div>

        {/* 4 Pillars Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_COMPETENCIES.map((pillar, idx) => {
            const Icon = iconMap[pillar.category] || LayoutList;
            const formattedIndex = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={pillar.category}
                className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-sky-950/8 hover:border-[#0284C7] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Offset wireframe border */}
                <div
                  className="absolute -top-2.5 -right-2.5 w-full h-full border border-sky-300 group-hover:border-[#0284C7] rounded-3xl pointer-events-none transition-colors"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#EAF6FD] border border-[#BFDDEC] flex items-center justify-center text-[#0284C7] shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black tracking-tight text-slate-900">
                          {pillar.category}
                        </h3>
                        <p className="text-xs text-slate-500 font-normal">
                          {pillar.description}
                        </p>
                      </div>
                    </div>

                    <span className="text-2xl font-black text-slate-900">
                      {formattedIndex}.
                    </span>
                  </div>

                  {/* Skills Pill Cloud */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                    {pillar.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs hover:border-[#0284C7] transition-colors"
                      >
                        <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
