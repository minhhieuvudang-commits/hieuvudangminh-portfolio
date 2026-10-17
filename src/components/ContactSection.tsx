import React from "react";
import { Mail, Phone, MapPin, Download, ArrowUpRight, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-[#D8EAF5] bg-gradient-to-b from-[#F6FBFF] via-[#EAF6FD] to-[#DCEFF9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white border border-[#BFDDEC] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-[#176B9F]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Heading & Availability */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF6FD] border border-[#BFDDEC] text-[11px] font-extrabold uppercase tracking-widest text-[#176B9F] mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next Career Step</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#123A5A] leading-[0.98] mb-6">
                Let&rsquo;s Connect.
              </h2>

              <p className="text-lg sm:text-xl font-medium text-[#176B9F] mb-4">
                Open to opportunities in Marketing Project Coordination, Fintech Marketing, and Project Management.
              </p>

              <p className="text-sm leading-relaxed text-[#557B97] max-w-xl mb-8">
                Whether you have an upcoming promotion sprint, need someone to steer cross-functional marketing operations, or want to discuss full-time coordinator roles in Ho Chi Minh City, I would welcome the conversation.
              </p>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#176B9F] hover:bg-[#123A5A] rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-[#176B9F]/20"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <a
                  href={PERSONAL_INFO.cvUrl}
                  download="CV_Hieu_Vu_Dang_Minh_2026.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-[#176B9F] bg-white hover:bg-[#EAF6FD] border border-[#BFDDEC] rounded-full transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Complete CV (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Contact Cards */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              {/* Email Card */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-5 rounded-2xl bg-[#F8FCFF] border border-[#D8EAF5] hover:border-[#8CC3E5] hover:bg-white transition-all duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF6FD] text-[#176B9F] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#66859D] block">
                      Email Address
                    </span>
                    <span className="text-sm font-bold text-[#123A5A] group-hover:text-[#176B9F] transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#66859D] group-hover:text-[#176B9F] transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, "")}`}
                className="p-5 rounded-2xl bg-[#F8FCFF] border border-[#D8EAF5] hover:border-[#8CC3E5] hover:bg-white transition-all duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF6FD] text-[#176B9F] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#66859D] block">
                      Phone / Zalo
                    </span>
                    <span className="text-sm font-bold text-[#123A5A] group-hover:text-[#176B9F] transition-colors">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#66859D] group-hover:text-[#176B9F] transition-transform group-hover:translate-x-0.5" />
              </a>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-[#F8FCFF] border border-[#D8EAF5] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#EAF6FD] text-[#176B9F] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#66859D] block">
                    Current Location
                  </span>
                  <span className="text-sm font-bold text-[#123A5A]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#F8FCFF] border border-[#D8EAF5] hover:border-[#8CC3E5] hover:bg-white transition-all duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF6FD] text-[#176B9F] flex items-center justify-center">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#66859D] block">
                      Professional Network
                    </span>
                    <span className="text-sm font-bold text-[#123A5A] group-hover:text-[#176B9F] transition-colors">
                      Connect on LinkedIn
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#66859D] group-hover:text-[#176B9F] transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
