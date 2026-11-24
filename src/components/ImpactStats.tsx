import React from "react";
import { IMPACT_METRICS } from "@/data/portfolioData";

export default function ImpactStats() {
  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-xl shadow-sky-950/5 overflow-hidden relative">
        {/* Subtle top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#0284C7] via-[#38BDF8] to-[#0284C7]" />

        {/* Editorial Subtitle Bar */}
        <div className="bg-[#F8FAFC] px-6 py-2.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
              Verified Project Performance & Career Impact (2023–2026)
            </span>
          </div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            Multi-organization Aggregated Track Record
          </span>
        </div>

        {/* 5-Column Lookbook Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {IMPACT_METRICS.map((item, index) => (
            <div
              key={item.label}
              className={`p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:bg-[#F0F9FF]/50 group relative ${
                index === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div>
                <span className="block text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 group-hover:text-[#0284C7] transition-colors leading-none mb-2">
                  {item.value}
                </span>
                <h3 className="text-[11px] font-black uppercase tracking-wider text-slate-700 mb-1">
                  {item.label}
                </h3>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-500 mt-3 border-t border-slate-100 pt-2 font-normal">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
