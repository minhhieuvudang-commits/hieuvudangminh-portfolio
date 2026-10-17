import React from "react";
import Link from "next/link";
import { ArrowUp, Download, Mail, Phone } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-[#D8EAF5] bg-[#EAF6FD]/80 py-12 md:py-16 text-sm text-[#557B97]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#D8EAF5]">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <span className="text-base font-black tracking-tight text-[#123A5A] uppercase block mb-2">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs font-bold text-[#176B9F] mb-3">
              {PERSONAL_INFO.title} · Ho Chi Minh City, Vietnam
            </p>
            <p className="text-xs text-[#66859D] leading-relaxed max-w-sm mb-6">
              Demonstrated capability to coordinate and deliver marketing projects across multiple business functions, from initial planning to execution and project closure.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.cvUrl}
                download="CV_Hieu_Vu_Dang_Minh_2026.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#176B9F] bg-white border border-[#BFDDEC] rounded-full hover:bg-[#EAF6FD] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>CV (PDF)</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#557B97] bg-white border border-[#BFDDEC] rounded-full hover:text-[#176B9F] transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#123A5A] block mb-3">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <Link href="/#" className="hover:text-[#176B9F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#176B9F] transition-colors">
                  About Coordination Mindset
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-[#176B9F] transition-colors">
                  Selected Work (6 Sections)
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-[#176B9F] transition-colors">
                  Professional Experience
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-[#176B9F] transition-colors">
                  Core Competencies
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#176B9F] transition-colors">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Verified Specialization */}
          <div className="md:col-span-4">
            <span className="text-[11px] font-black uppercase tracking-wider text-[#123A5A] block mb-3">
              Domain Specialization
            </span>
            <div className="flex flex-wrap gap-1.5 mb-4">
              <span className="px-2 py-1 text-[11px] bg-white border border-[#D8EAF5] rounded-md text-[#123A5A]">
                CFD Trading Promotions
              </span>
              <span className="px-2 py-1 text-[11px] bg-white border border-[#D8EAF5] rounded-md text-[#123A5A]">
                IB & Affiliate Programs
              </span>
              <span className="px-2 py-1 text-[11px] bg-white border border-[#D8EAF5] rounded-md text-[#123A5A]">
                Loyalty & Retention Systems
              </span>
              <span className="px-2 py-1 text-[11px] bg-white border border-[#D8EAF5] rounded-md text-[#123A5A]">
                GTM Product Enablement
              </span>
              <span className="px-2 py-1 text-[11px] bg-white border border-[#D8EAF5] rounded-md text-[#123A5A]">
                Corporate Events & CSR
              </span>
            </div>
            <p className="text-[11px] text-[#66859D]">
              All project metrics, dates, and organizational scopes follow strict content integrity guidelines.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#66859D]">
          <div>
            &copy; 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Built with Next.js, TypeScript & Tailwind CSS</span>
            <a
              href="#"
              className="inline-flex items-center gap-1 font-bold text-[#176B9F] hover:text-[#123A5A] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
