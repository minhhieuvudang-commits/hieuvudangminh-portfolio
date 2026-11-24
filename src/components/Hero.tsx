import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight, Mail, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#D8EAF5] bg-[#FBFDFF]">
      {/* Background Subtle Magazine Watermark Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div
          className="absolute top-12 left-6 w-24 h-24"
          style={{ backgroundImage: 'radial-gradient(#0284C7 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}
        />
        <div
          className="absolute bottom-8 right-12 w-32 h-32"
          style={{ backgroundImage: 'radial-gradient(#0284C7 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Magazine Spread Layout: Left/Top is Portrait with Offset Frame, Bottom is Headline Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: Editorial Portrait with Lookbook Offset Wireframe & Accents
             ========================================================================= */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
            
            {/* Giant Vertical Margin Text "PORTFOLIO" (From template left margin) */}
            <div className="hidden xl:block absolute -left-20 top-1/2 -translate-y-1/2 select-none pointer-events-none">
              <span
                className="text-7xl font-black tracking-[0.25em] text-sky-900/[0.06] uppercase inline-block"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                PORTFOLIO
              </span>
            </div>

            {/* The Main Magazine Photo Frame */}
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              
              {/* Offset Wireframe Border (Khung viền lệch signature từ template) */}
              <div
                className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-full h-full border-2 border-[#0284C7] rounded-3xl pointer-events-none z-20"
                aria-hidden="true"
              />

              {/* Pastel Sky Backplate (Mảng màu nền sau ảnh) */}
              <div
                className="absolute -bottom-3 -left-3 w-full h-full bg-[#EAF6FD] rounded-3xl pointer-events-none z-0"
                aria-hidden="true"
              />

              {/* Main Photo Container */}
              <div className="relative z-10 bg-white p-2.5 sm:p-3 rounded-3xl shadow-xl shadow-sky-950/10 border border-slate-200">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100 rounded-2xl">
                  <Image
                    src="/images/portrait.jpg"
                    alt={`${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-102 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle Corner Badge */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md border border-slate-200 text-[10px] font-black uppercase tracking-wider text-slate-800 shadow-xs rounded-lg">
                    STARTRADER · HCMC
                  </div>
                </div>
              </div>

              {/* Color Swatch Chips (3 ô vuông màu xếp dọc từ template) */}
              <div className="absolute -right-7 sm:-right-8 top-1/3 flex flex-col gap-2 z-30 pointer-events-none">
                <span className="w-4 h-4 rounded-full bg-[#0284C7] shadow-xs" title="Ocean Tech Cyan" />
                <span className="w-4 h-4 rounded-full bg-[#38BDF8] shadow-xs" title="Sky Blue" />
                <span className="w-4 h-4 rounded-full bg-[#F59E0B] shadow-xs" title="Fintech Gold" />
              </div>

              {/* Dot Matrix Pattern Accent */}
              <div
                className="absolute -left-6 -bottom-6 w-16 h-16 opacity-60 z-0 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#0284C7 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}
              />
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Magazine Editorial Headline & Biography Block
             ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Eyebrow / Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF6FD] border border-[#BFDDEC] text-[10px] font-black uppercase tracking-widest text-[#0284C7] mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Fintech & CFD Marketing · Project Coordination</span>
            </div>

            {/* Template Signature: "HI, I'M" */}
            <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase mb-2">
              HI, I&apos;M
            </span>

            {/* Template Signature: Bold Solid Name Badge */}
            <div className="mb-4">
              <div className="inline-block bg-[#0284C7] text-white px-5 sm:px-7 py-2 sm:py-2.5 rounded-2xl font-black text-3xl sm:text-5xl md:text-[54px] tracking-wider uppercase shadow-md leading-none">
                {PERSONAL_INFO.name}
              </div>
            </div>

            {/* Professional Title & Subhead */}
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase mb-1">
              {PERSONAL_INFO.title} <span className="text-slate-400 font-bold">(2023–2026)</span>
            </h2>

            {/* Tagline / Motto */}
            <p className="text-base font-semibold text-[#0284C7] italic mb-4">
              &ldquo;{PERSONAL_INFO.tagline}&rdquo;
            </p>

            {/* Introduction Copy */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl mb-8 font-normal">
              {PERSONAL_INFO.bio}
            </p>

            {/* Lookbook Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-wider text-white bg-slate-900 hover:bg-[#0284C7] rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-md active:translate-y-0"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={PERSONAL_INFO.cvUrl}
                download="CV_Hieu_Vu_Dang_Minh_2026.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-black uppercase tracking-wider text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
              >
                <Download className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Download CV</span>
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-wider text-slate-600 hover:text-slate-900 rounded-xl transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Target Roles in Minimal Lookbook Tag Style */}
            <div className="mt-8 pt-5 border-t border-slate-200 w-full">
              <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Specialized Competencies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {PERSONAL_INFO.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 text-[11px] font-bold bg-white border border-slate-200 text-slate-700 rounded-lg shadow-xs"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}
