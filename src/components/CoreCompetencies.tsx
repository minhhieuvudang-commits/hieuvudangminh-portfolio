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
    <section id="skills" className="py-20 md:py-28 border-t border-[#D8EAF5] bg-[#FBFDFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FD] border border-[#BFDDEC] text-[11px] font-extrabold uppercase tracking-widest text-[#176B9F] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Professional Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#123A5A] leading-[1.05]">
            Core competencies & domain expertise.
          </h2>
          <p className="text-base text-[#557B97] mt-3">
            Four functional pillars developed across 3+ years of hands-on campaign execution, brokerage operations, and international event logistics.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_COMPETENCIES.map((pillar) => {
            const Icon = iconMap[pillar.category] || LayoutList;
            return (
              <div
                key={pillar.category}
                className="p-8 sm:p-9 rounded-2xl bg-white border border-[#D8EAF5] hover:border-[#BFDDEC] transition-all duration-300 hover:shadow-xl hover:shadow-[#176B9F]/06 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#EAF6FD] border border-[#BFDDEC] flex items-center justify-center text-[#176B9F]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-tight text-[#123A5A]">
                        {pillar.category}
                      </h3>
                      <p className="text-xs text-[#66859D] mt-0.5">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag Cloud */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6">
                    {pillar.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3.5 py-2 rounded-xl bg-[#F4FAFE] border border-[#D8EAF5] text-xs font-semibold text-[#123A5A] flex items-center gap-2 hover:bg-[#EAF6FD] hover:border-[#BFDDEC] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2F7FB5] shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D8EAF5]/70 flex items-center justify-between text-[11px] font-bold text-[#66859D]">
                  <span>Operational Standard</span>
                  <span className="text-[#176B9F]">Verified Practical Application</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
