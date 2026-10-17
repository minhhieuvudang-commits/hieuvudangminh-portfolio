import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight, Mail, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  return (
    <header className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#D8EAF5] bg-[radial-gradient(ellipse_at_85%_15%,rgba(185,225,247,0.35),transparent_40%),radial-gradient(ellipse_at_15%_85%,rgba(216,234,245,0.4),transparent_40%),linear-gradient(135deg,#F6FBFF_0%,#FFFFFF_50%,#EAF6FD_100%)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & Introduction */}
          <div className="lg:col-span-7 flex flex-col items-start animate-hero-in">
            {/* Tagline / Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF6FD] border border-[#BFDDEC] text-[11px] font-extrabold uppercase tracking-widest text-[#176B9F] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#2F7FB5]" />
              <span>CFD & Forex · Fintech · Marketing Operations</span>
            </div>

            {/* Primary Headline: Full Name (Largest headline on homepage) */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[0.94] text-[#123A5A] uppercase mb-4">
              {PERSONAL_INFO.name}
            </h1>

            {/* Professional Title & Supporting Headline */}
            <div className="mb-6">
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-[#176B9F]">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-base sm:text-lg font-medium text-[#557B97] mt-1 italic tracking-wide">
                &ldquo;{PERSONAL_INFO.tagline}&rdquo;
              </p>
            </div>

            {/* Introduction Copy */}
            <p className="text-base sm:text-lg leading-relaxed text-[#475467] max-w-2xl mb-8">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Primary CTA */}
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#176B9F] hover:bg-[#123A5A] rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-[#176B9F]/15 active:translate-y-0"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Download CV */}
              <a
                href={PERSONAL_INFO.cvUrl}
                download="CV_Hieu_Vu_Dang_Minh_2026.pdf"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#176B9F] bg-white hover:bg-[#EAF6FD] border border-[#BFDDEC] rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>

              {/* Contact Me */}
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-[#557B97] hover:text-[#123A5A] hover:bg-white/80 rounded-full transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Target Roles Pill List */}
            <div className="mt-10 pt-6 border-t border-[#D8EAF5]/80 w-full">
              <span className="block text-[11px] font-extrabold uppercase tracking-widest text-[#66859D] mb-2.5">
                Target Roles
              </span>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.targetRoles.map((role) => (
                  <span
                    key={role}
                    className="px-2.5 py-1 text-xs font-semibold bg-[#F4FAFE] border border-[#D8EAF5] text-[#123A5A] rounded-md"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Professional Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-poster-in">
            <div className="relative w-full max-w-[380px] group">
              {/* Decorative Background Accents */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#BFDDEC] to-[#EAF6FD] rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500 opacity-80" />
              <div className="absolute -inset-1 bg-[#176B9F]/10 rounded-3xl blur-md" />
              
              {/* Photo Card Container */}
              <div className="relative bg-white border border-[#BFDDEC] rounded-2xl overflow-hidden shadow-xl shadow-[#123A5A]/08">
                {/* Header Decoration */}
                <div className="px-5 py-3 bg-[#EAF6FD] border-b border-[#D8EAF5] flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#176B9F]">
                    HIEU / PORTFOLIO 2026
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#557B97]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Q4/2026 Roles
                  </span>
                </div>

                {/* Portrait Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F4FAFE]">
                  <Image
                    src="/images/portrait.jpg"
                    alt="Hieu Vu Dang Minh — Marketing Project Coordinator"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover object-top filter contrast-[1.02] brightness-[1.01] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Card Footer Caption */}
                <div className="px-5 py-3.5 bg-white border-t border-[#D8EAF5]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-[#123A5A]">
                        Hieu Vu Dang Minh
                      </p>
                      <p className="text-[11px] text-[#66859D]">
                        Ho Chi Minh City, Vietnam
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#176B9F] bg-[#EAF6FD] border border-[#BFDDEC] rounded-full">
                        Coordinator
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
