import React from "react";
import { CheckCircle2, Target, Users2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const pillars = [
    {
      icon: Target,
      title: "I can plan projects.",
      desc: "Translate ambiguous commercial targets into concrete project charters, milestone schedules, realistic budget models, and verifiable deliverables.",
    },
    {
      icon: Users2,
      title: "I can coordinate people & execution.",
      desc: "Align cross-functional departments (Marketing, BD, Product, Compliance, Customer Support) and global leadership while managing 50+ external specialized vendors.",
    },
    {
      icon: ShieldCheck,
      title: "I can deliver measurable outcomes.",
      desc: "Drive on-time milestone handovers, transparent budget reconciliations (up to 500M+ VND), and verifiable campaign results with zero compliance disputes.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#D8EAF5] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag & Heading */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-black uppercase tracking-widest text-[#176B9F] mb-3 block">
            About My Coordination Mindset
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#123A5A] leading-[1.08] mb-6">
            Creative roots. Rigorous project execution.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#557B97]">
            Trained in creative leadership during my university years at UEH (GPA 8.50/10) and refined through 3+ years in high-tempo venture operations (JDI) and global financial brokerage (STARTRADER), I operate as the connective tissue between commercial ambition and ground-level execution.
          </p>
        </div>

        {/* 3 Core Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-2xl bg-[#F6FBFF] border border-[#D8EAF5] hover:border-[#BFDDEC] transition-all duration-300 hover:shadow-lg hover:shadow-[#176B9F]/06 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EAF6FD] border border-[#BFDDEC] flex items-center justify-center text-[#176B9F] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black tracking-tight text-[#123A5A] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#557B97]">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#D8EAF5]/60 flex items-center gap-2 text-xs font-bold text-[#176B9F]">
                  <CheckCircle2 className="w-4 h-4 text-[#2F7FB5]" />
                  <span>Demonstrated across 40+ initiatives</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Quote / Credo */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#EAF6FD] via-[#F4FAFE] to-white border border-[#BFDDEC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm sm:text-base font-semibold text-[#123A5A] leading-relaxed">
              &ldquo;Great project coordination is not about administrative bureaucracy — it is the art of removing friction so specialized teams do their best work without dropping the ball on budget, compliance, or schedule.&rdquo;
            </p>
            <span className="block text-xs text-[#66859D] mt-2 font-medium">
              — Hieu Vu Dang Minh, Marketing Project Coordinator
            </span>
          </div>
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#176B9F] bg-white border border-[#BFDDEC] hover:bg-[#EAF6FD] rounded-full transition-all shrink-0"
          >
            <span>See Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
