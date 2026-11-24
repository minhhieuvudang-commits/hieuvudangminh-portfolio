import React from "react";
import { CheckCircle2, Target, Users2, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const pillars = [
    {
      num: "01",
      icon: Target,
      title: "I can plan projects.",
      desc: "Translate ambiguous commercial targets into concrete project charters, milestone schedules, realistic budget models, and verifiable deliverables.",
      tag: "Project Charters & Timelines",
    },
    {
      num: "02",
      icon: Users2,
      title: "I can coordinate people & execution.",
      desc: "Align cross-functional departments (Marketing, BD, Product, Compliance, Customer Support) and global leadership while managing 50+ external specialized vendors.",
      tag: "Stakeholder & Vendor Ops",
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "I can deliver measurable outcomes.",
      desc: "Drive on-time milestone handovers, transparent budget reconciliations (up to 500M+ VND), and verifiable campaign results with zero compliance disputes.",
      tag: "On-Time Milestones & Budget",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-200 bg-white relative overflow-hidden">
      {/* Decorative Lookbook Dot Grid */}
      <div
        className="absolute top-12 left-8 w-24 h-24 opacity-30 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#0284C7 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Magazine Spread: Header with Vertical Ribbon text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          <div className="lg:col-span-1 hidden lg:flex justify-center">
            <span
              className="text-5xl font-black tracking-[0.25em] text-slate-200 uppercase select-none pointer-events-none inline-block"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              ABOUT ME
            </span>
          </div>

          <div className="lg:col-span-11 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#EAF6FD] border border-[#BFDDEC] text-[10px] font-black uppercase tracking-widest text-[#0284C7] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Coordination Mindset · Operating Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.08] mb-5 uppercase">
              Creative roots. <span className="text-[#0284C7]">Rigorous</span> project execution.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-normal">
              Trained in creative leadership during my university years at UEH (GPA 8.50/10) and refined through 3+ years in high-tempo venture operations (JDI) and global financial brokerage (STARTRADER), I operate as the connective tissue between commercial ambition and ground-level execution.
            </p>
          </div>

        </div>

        {/* 3 Core Commitment Spreads (With Offset Wireframe Boxes & Number Headers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative p-7 bg-[#F8FAFC] border-2 border-slate-900 rounded-sm hover:shadow-xl hover:shadow-slate-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Offset wireframe border */}
                <div
                  className="absolute -top-2 -right-2 w-full h-full border border-sky-400 rounded-xs pointer-events-none group-hover:border-slate-900 transition-colors z-0"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Top row: Number 01., 02., 03. + Icon */}
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-200">
                    <span className="text-3xl font-black text-slate-900 tracking-tight">
                      {pillar.num}.
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-white border border-slate-300 flex items-center justify-center text-[#0284C7] shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-black tracking-tight text-slate-900 mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#0284C7]">
                    {pillar.tag}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-slate-900 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
