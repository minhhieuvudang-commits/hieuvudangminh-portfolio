"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Download, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/#" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full nav-blur border-b border-[#D8EAF5] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-base font-extrabold tracking-tight text-[#123A5A]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#2F7FB5] group-hover:scale-125 transition-transform" />
          <span className="tracking-wider uppercase text-sm sm:text-base font-black">
            {PERSONAL_INFO.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-[13px] font-semibold text-[#557B97]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#2F7FB5] transition-colors tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Button: Download CV */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.cvUrl}
            download="CV_Hieu_Vu_Dang_Minh_2026.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#176B9F] bg-[#EAF6FD] hover:bg-[#DCEFF9] border border-[#BFDDEC] rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={PERSONAL_INFO.cvUrl}
            download="CV_Hieu_Vu_Dang_Minh_2026.pdf"
            className="p-2 text-xs font-bold text-[#176B9F] bg-[#EAF6FD] border border-[#BFDDEC] rounded-full"
            aria-label="Download CV"
          >
            <Download className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#123A5A] hover:text-[#2F7FB5] focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D8EAF5] bg-[#FBFDFF]/95 backdrop-blur-md px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-4 text-sm font-semibold text-[#557B97]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 hover:text-[#2F7FB5] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-[#D8EAF5]">
              <a
                href={PERSONAL_INFO.cvUrl}
                download="CV_Hieu_Vu_Dang_Minh_2026.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-[#176B9F] hover:bg-[#123A5A] rounded-xl transition-all shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Complete CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
