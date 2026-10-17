import React from "react";
import { IMPACT_METRICS } from "@/data/portfolioData";

export default function ImpactStats() {
  return (
    <section className="relative z-10 -mt-8 sm:-mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-[#D8EAF5] rounded-2xl shadow-xl shadow-[#176B9F]/08 overflow-hidden">
        {/* Editorial Subtitle Bar */}
        <div className="bg-[#F4FAFE] px-6 py-2.5 border-b border-[#D8EAF5] flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#176B9F]">
            Verified Portfolio Impact Metrics
          </span>
          <span className="text-[11px] font-semibold text-[#66859D]">
            Multi-organization aggregated track record
          </span>
        </div>

        {/* 5-Column Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#D8EAF5]">
          {IMPACT_METRICS.map((item, index) => (
            <div
              key={item.label}
              className={`p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:bg-[#F6FBFF] group ${
                index === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div>
                <span className="block text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-[#123A5A] group-hover:text-[#176B9F] transition-colors leading-none mb-2">
                  {item.value}
                </span>
                <h3 className="text-xs font-black uppercase tracking-wider text-[#557B97] mb-1.5">
                  {item.label}
                </h3>
              </div>
              <p className="text-[11px] leading-relaxed text-[#66859D] mt-2 border-t border-[#EAF6FD] pt-2">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
