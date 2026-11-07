"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Filter,
  Layers,
  Clock,
  ChevronDown,
  Check,
  Sparkles,
  TrendingUp,
  GraduationCap,
  HeartHandshake,
  Share2,
  Globe,
  Video,
  Building,
  School,
  LayoutGrid,
} from "lucide-react";
import { PROJECTS, CATEGORIES_CONFIG } from "@/data/portfolioData";
import { Project } from "@/types/portfolio";

export interface SectionVisualTheme {
  id: string;
  number: string;
  name: string;
  accentHex: string;
  // Directory card styling
  cardBorder: string;
  cardBorderHover: string;
  cardSelectedRing: string;
  cardSelectedBg: string;
  // Badge & numbers
  numberBg: string;
  numberText: string;
  iconBg: string;
  iconColor: string;
  badge: string;
  // Pills & Buttons
  pillActive: string;
  // Tags
  tagBg: string;
  tagText: string;
  tagBorder: string;
  // Strategic banner
  bannerGradient: string;
  bannerBorder: string;
  bannerBadgeBg: string;
  // Project card box styling
  cardTopAccent: string;
  cardHoverBorder: string;
  cardHoverShadow: string;
  actionText: string;
}

export const SECTION_THEMES: Record<string, SectionVisualTheme> = {
  "cfd-marketing": {
    id: "cfd-marketing",
    number: "01",
    name: "CFD Marketing & Trading",
    accentHex: "#0284C7", // Ocean Tech Cyan / Blue
    cardBorder: "border-sky-100",
    cardBorderHover: "hover:border-sky-400",
    cardSelectedRing: "ring-2 ring-sky-500/30 border-sky-500 shadow-sky-500/10",
    cardSelectedBg: "bg-gradient-to-br from-sky-50 via-white to-blue-50/40",
    numberBg: "bg-sky-600",
    numberText: "text-white",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    badge: "bg-sky-50 text-sky-700 border-sky-200",
    pillActive: "bg-sky-600 text-white shadow-sky-600/20",
    tagBg: "bg-sky-50/80",
    tagText: "text-sky-800",
    tagBorder: "border-sky-200",
    bannerGradient: "from-sky-50/80 via-white to-blue-50/60",
    bannerBorder: "border-sky-200",
    bannerBadgeBg: "bg-sky-600 text-white",
    cardTopAccent: "#0284C7",
    cardHoverBorder: "hover:border-sky-300",
    cardHoverShadow: "hover:shadow-sky-500/10",
    actionText: "text-sky-600 group-hover:text-sky-700",
  },
  "education": {
    id: "education",
    number: "02",
    name: "Education Projects",
    accentHex: "#059669", // Emerald & Mint Green
    cardBorder: "border-emerald-100",
    cardBorderHover: "hover:border-emerald-400",
    cardSelectedRing: "ring-2 ring-emerald-500/30 border-emerald-500 shadow-emerald-500/10",
    cardSelectedBg: "bg-gradient-to-br from-emerald-50 via-white to-teal-50/40",
    numberBg: "bg-emerald-600",
    numberText: "text-white",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    pillActive: "bg-emerald-600 text-white shadow-emerald-600/20",
    tagBg: "bg-emerald-50/80",
    tagText: "text-emerald-800",
    tagBorder: "border-emerald-200",
    bannerGradient: "from-emerald-50/80 via-white to-teal-50/60",
    bannerBorder: "border-emerald-200",
    bannerBadgeBg: "bg-emerald-600 text-white",
    cardTopAccent: "#059669",
    cardHoverBorder: "hover:border-emerald-300",
    cardHoverShadow: "hover:shadow-emerald-500/10",
    actionText: "text-emerald-600 group-hover:text-emerald-700",
  },
  "csr-corporate": {
    id: "csr-corporate",
    number: "03",
    name: "CSR & Corporate Projects",
    accentHex: "#E11D48", // Rose Coral & Heart
    cardBorder: "border-rose-100",
    cardBorderHover: "hover:border-rose-400",
    cardSelectedRing: "ring-2 ring-rose-500/30 border-rose-500 shadow-rose-500/10",
    cardSelectedBg: "bg-gradient-to-br from-rose-50 via-white to-pink-50/40",
    numberBg: "bg-rose-600",
    numberText: "text-white",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    badge: "bg-rose-50 text-rose-700 border-rose-200",
    pillActive: "bg-rose-600 text-white shadow-rose-600/20",
    tagBg: "bg-rose-50/80",
    tagText: "text-rose-800",
    tagBorder: "border-rose-200",
    bannerGradient: "from-rose-50/80 via-white to-pink-50/60",
    bannerBorder: "border-rose-200",
    bannerBadgeBg: "bg-rose-600 text-white",
    cardTopAccent: "#E11D48",
    cardHoverBorder: "hover:border-rose-300",
    cardHoverShadow: "hover:shadow-rose-500/10",
    actionText: "text-rose-600 group-hover:text-rose-700",
  },
  "social-media": {
    id: "social-media",
    number: "04",
    name: "Social Media Coordinator",
    accentHex: "#7C3AED", // Electric Violet & Purple
    cardBorder: "border-violet-100",
    cardBorderHover: "hover:border-violet-400",
    cardSelectedRing: "ring-2 ring-violet-500/30 border-violet-500 shadow-violet-500/10",
    cardSelectedBg: "bg-gradient-to-br from-violet-50 via-white to-purple-50/40",
    numberBg: "bg-violet-600",
    numberText: "text-white",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    badge: "bg-violet-50 text-violet-700 border-violet-200",
    pillActive: "bg-violet-600 text-white shadow-violet-600/20",
    tagBg: "bg-violet-50/80",
    tagText: "text-violet-800",
    tagBorder: "border-violet-200",
    bannerGradient: "from-violet-50/80 via-white to-purple-50/60",
    bannerBorder: "border-violet-200",
    bannerBadgeBg: "bg-violet-600 text-white",
    cardTopAccent: "#7C3AED",
    cardHoverBorder: "hover:border-violet-300",
    cardHoverShadow: "hover:shadow-violet-500/10",
    actionText: "text-violet-600 group-hover:text-violet-700",
  },
  "freelance-brand": {
    id: "freelance-brand",
    number: "05",
    name: "Freelance Brand Building",
    accentHex: "#D97706", // Warm Amber & Ochre Gold
    cardBorder: "border-amber-100",
    cardBorderHover: "hover:border-amber-400",
    cardSelectedRing: "ring-2 ring-amber-500/30 border-amber-500 shadow-amber-500/10",
    cardSelectedBg: "bg-gradient-to-br from-amber-50 via-white to-orange-50/40",
    numberBg: "bg-amber-600",
    numberText: "text-white",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
    pillActive: "bg-amber-600 text-white shadow-amber-600/20",
    tagBg: "bg-amber-50/80",
    tagText: "text-amber-800",
    tagBorder: "border-amber-200",
    bannerGradient: "from-amber-50/80 via-white to-orange-50/60",
    bannerBorder: "border-amber-200",
    bannerBadgeBg: "bg-amber-600 text-white",
    cardTopAccent: "#D97706",
    cardHoverBorder: "hover:border-amber-300",
    cardHoverShadow: "hover:shadow-amber-500/10",
    actionText: "text-amber-600 group-hover:text-amber-700",
  },
  "content-creator": {
    id: "content-creator",
    number: "06",
    name: "Content Creator",
    accentHex: "#DC2626", // Ruby Red & Crimson
    cardBorder: "border-red-100",
    cardBorderHover: "hover:border-red-400",
    cardSelectedRing: "ring-2 ring-red-500/30 border-red-500 shadow-red-500/10",
    cardSelectedBg: "bg-gradient-to-br from-red-50 via-white to-orange-50/40",
    numberBg: "bg-red-600",
    numberText: "text-white",
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    badge: "bg-red-50 text-red-700 border-red-200",
    pillActive: "bg-red-600 text-white shadow-red-600/20",
    tagBg: "bg-red-50/80",
    tagText: "text-red-800",
    tagBorder: "border-red-200",
    bannerGradient: "from-red-50/80 via-white to-orange-50/60",
    bannerBorder: "border-red-200",
    bannerBadgeBg: "bg-red-600 text-white",
    cardTopAccent: "#DC2626",
    cardHoverBorder: "hover:border-red-300",
    cardHoverShadow: "hover:shadow-red-500/10",
    actionText: "text-red-600 group-hover:text-red-700",
  },
  "business-events": {
    id: "business-events",
    number: "07",
    name: "Business Event Projects",
    accentHex: "#4F46E5", // Royal Indigo & Sapphire
    cardBorder: "border-indigo-100",
    cardBorderHover: "hover:border-indigo-400",
    cardSelectedRing: "ring-2 ring-indigo-500/30 border-indigo-500 shadow-indigo-500/10",
    cardSelectedBg: "bg-gradient-to-br from-indigo-50 via-white to-blue-50/40",
    numberBg: "bg-indigo-600",
    numberText: "text-white",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
    pillActive: "bg-indigo-600 text-white shadow-indigo-600/20",
    tagBg: "bg-indigo-50/80",
    tagText: "text-indigo-800",
    tagBorder: "border-indigo-200",
    bannerGradient: "from-indigo-50/80 via-white to-blue-50/60",
    bannerBorder: "border-indigo-200",
    bannerBadgeBg: "bg-indigo-600 text-white",
    cardTopAccent: "#4F46E5",
    cardHoverBorder: "hover:border-indigo-300",
    cardHoverShadow: "hover:shadow-indigo-500/10",
    actionText: "text-indigo-600 group-hover:text-indigo-700",
  },
  "university-projects": {
    id: "university-projects",
    number: "08",
    name: "University Projects",
    accentHex: "#0D9488", // Bright Teal & Turquoise
    cardBorder: "border-teal-100",
    cardBorderHover: "hover:border-teal-400",
    cardSelectedRing: "ring-2 ring-teal-500/30 border-teal-500 shadow-teal-500/10",
    cardSelectedBg: "bg-gradient-to-br from-teal-50 via-white to-emerald-50/40",
    numberBg: "bg-teal-600",
    numberText: "text-white",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    badge: "bg-teal-50 text-teal-700 border-teal-200",
    pillActive: "bg-teal-600 text-white shadow-teal-600/20",
    tagBg: "bg-teal-50/80",
    tagText: "text-teal-800",
    tagBorder: "border-teal-200",
    bannerGradient: "from-teal-50/80 via-white to-emerald-50/60",
    bannerBorder: "border-teal-200",
    bannerBadgeBg: "bg-teal-600 text-white",
    cardTopAccent: "#0D9488",
    cardHoverBorder: "hover:border-teal-300",
    cardHoverShadow: "hover:shadow-teal-500/10",
    actionText: "text-teal-600 group-hover:text-teal-700",
  },
};

const DEFAULT_THEME: SectionVisualTheme = {
  id: "all",
  number: "ALL",
  name: "All Projects",
  accentHex: "#176B9F",
  cardBorder: "border-[#D8EAF5]",
  cardBorderHover: "hover:border-[#8CC3E5]",
  cardSelectedRing: "ring-2 ring-[#2F7FB5]/30 border-[#2F7FB5] shadow-[#176B9F]/10",
  cardSelectedBg: "bg-gradient-to-br from-[#EAF6FD] via-white to-[#F4FAFE]",
  numberBg: "bg-[#176B9F]",
  numberText: "text-white",
  iconBg: "bg-[#EAF6FD]",
  iconColor: "text-[#176B9F]",
  badge: "bg-[#EAF6FD] text-[#176B9F] border-[#BFDDEC]",
  pillActive: "bg-[#176B9F] text-white shadow-sm",
  tagBg: "bg-[#F4FAFE]",
  tagText: "text-[#557B97]",
  tagBorder: "border-[#D8EAF5]",
  bannerGradient: "from-[#F4FAFE] via-white to-[#EAF6FD]",
  bannerBorder: "border-[#D8EAF5]",
  bannerBadgeBg: "bg-[#176B9F] text-white",
  cardTopAccent: "#176B9F",
  cardHoverBorder: "hover:border-[#8CC3E5]",
  cardHoverShadow: "hover:shadow-[#176B9F]/10",
  actionText: "text-[#176B9F] group-hover:text-[#123A5A]",
};

export function getSectionTheme(categoryId?: string): SectionVisualTheme {
  if (!categoryId) return DEFAULT_THEME;
  return SECTION_THEMES[categoryId] || DEFAULT_THEME;
}

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeCfdSubcategory, setActiveCfdSubcategory] = useState<string>("all-sub");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const projectListRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter projects by category
  let filteredProjects = activeCategory === "all"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  // Filter subcategories if cfd-marketing is active
  if (activeCategory === "cfd-marketing" && activeCfdSubcategory !== "all-sub") {
    filteredProjects = filteredProjects.filter((p) => p.subCategory === activeCfdSubcategory);
  }

  const cfdSubcategories = [
    { id: "all-sub", label: "All Subcategories" },
    { id: "retail-promotions", label: "01.1 Retail Promotions" },
    { id: "ib-partner", label: "01.2 IB & Partner" },
    { id: "loyalty-programs", label: "01.3 Loyalty Programs" },
    { id: "brand-campaigns", label: "01.4 Brand Campaigns" },
    { id: "product-marketing", label: "01.5 Product Marketing" },
  ];

  // Helper to count projects per category
  const getProjectCount = (categoryId: string) => {
    if (categoryId === "all") return PROJECTS.length;
    return PROJECTS.filter((p) => p.category === categoryId).length;
  };

  // Section icons map
  const getSectionIcon = (number: string) => {
    switch (number) {
      case "01": return TrendingUp;
      case "02": return GraduationCap;
      case "03": return HeartHandshake;
      case "04": return Share2;
      case "05": return Globe;
      case "06": return Video;
      case "07": return Building;
      case "08": return School;
      default: return LayoutGrid;
    }
  };

  const currentCategoryMeta = CATEGORIES_CONFIG.find((c) => c.id === activeCategory);
  const activeTheme = getSectionTheme(activeCategory);

  const handleSelectCategory = (catId: string, scrollToProjects = false) => {
    setActiveCategory(catId);
    setActiveCfdSubcategory("all-sub");
    setIsDropdownOpen(false);

    if (scrollToProjects && projectListRef.current) {
      projectListRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 8 Specific Sections (excluding 'all')
  const eightSections = CATEGORIES_CONFIG.filter((c) => c.id !== "all");

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-[#D8EAF5] bg-[#FBFDFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            1. SECTION HEADER
           ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF6FD] border border-[#BFDDEC] text-[11px] font-extrabold uppercase tracking-widest text-[#176B9F] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>8 Distinct Functional Sections · Visual Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#123A5A] leading-[1.05]">
              Commercial planning & cross-functional delivery.
            </h2>
            <p className="text-base text-[#557B97] mt-3">
              Mỗi section được thiết kế với bộ màu sắc và dấu hiệu nhận diện riêng biệt. Chọn nhanh bằng thẻ danh mục bên dưới hoặc menu Dropdown.
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs font-black uppercase tracking-widest text-[#66859D] block">
              Current View
            </span>
            <span className="text-2xl font-black text-[#123A5A]">
              {filteredProjects.length}{" "}
              <span className="text-sm font-semibold text-[#66859D]">of {PROJECTS.length} Projects</span>
            </span>
          </div>
        </div>

        {/* =========================================================================
            2. HIGHLIGHTED 8-SECTION MASTER DIRECTORY (Giao diện chính 8 màu riêng biệt)
           ========================================================================= */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#176B9F]" />
              <span className="text-xs font-black uppercase tracking-wider text-[#123A5A]">
                Portfolio Sections Directory (01 — 08 Distinct Themes)
              </span>
            </div>
            <button
              onClick={() => handleSelectCategory("all")}
              className={`text-xs font-bold transition-all cursor-pointer px-3 py-1 rounded-full border ${
                activeCategory === "all"
                  ? "bg-[#176B9F] text-white border-[#176B9F] shadow-xs"
                  : "bg-white text-[#557B97] border-[#D8EAF5] hover:text-[#123A5A]"
              }`}
            >
              Show All 8 Sections ({PROJECTS.length})
            </button>
          </div>

          {/* 8-Card Grid highlighting each section with its distinct color identity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {eightSections.map((sec) => {
              const Icon = getSectionIcon(sec.number);
              const isSelected = activeCategory === sec.id;
              const count = getProjectCount(sec.id);
              const theme = getSectionTheme(sec.id);

              return (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => handleSelectCategory(sec.id, true)}
                  className={`group text-left p-5 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between cursor-pointer overflow-hidden ${
                    isSelected
                      ? `${theme.cardSelectedBg} ${theme.cardSelectedRing} scale-[1.02]`
                      : `bg-white ${theme.cardBorder} ${theme.cardBorderHover} hover:bg-slate-50/50 hover:shadow-md hover:-translate-y-0.5`
                  }`}
                >
                  {/* Distinct Section Top Accent Bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-opacity"
                    style={{ backgroundColor: theme.accentHex }}
                  />

                  <div>
                    {/* Top row: Section Number Badge & Count */}
                    <div className="flex items-center justify-between mb-3 pt-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black tracking-wider transition-colors ${
                            isSelected
                              ? `${theme.numberBg} ${theme.numberText} shadow-xs`
                              : `${theme.iconBg} ${theme.iconColor} group-hover:${theme.numberBg} group-hover:text-white`
                          }`}
                        >
                          {sec.number}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                            isSelected ? theme.numberBg : theme.iconBg
                          }`}
                        >
                          <Icon
                            className={`w-4 h-4 ${
                              isSelected ? "text-white" : theme.iconColor
                            }`}
                          />
                        </div>
                      </div>

                      <span
                        className={`text-[11px] font-extrabold px-2.5 py-0.5 rounded-full border transition-colors ${
                          isSelected
                            ? `${theme.numberBg} text-white border-transparent`
                            : "bg-white text-slate-600 border-slate-200"
                        }`}
                      >
                        {count} {count === 1 ? "Case" : "Cases"}
                      </span>
                    </div>

                    {/* Section Title */}
                    <h3
                      className={`text-sm font-black tracking-tight leading-snug mb-1.5 transition-colors ${
                        isSelected ? "text-slate-900" : "text-slate-800"
                      }`}
                    >
                      {sec.shortName || sec.label}
                    </h3>

                    {/* Short Description */}
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed mb-3">
                      {sec.description}
                    </p>
                  </div>

                  {/* Bottom tags in this section's unique palette */}
                  {sec.tags && sec.tags.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1">
                      {sec.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 text-[9px] font-bold rounded-md border ${theme.tagBg} ${theme.tagText} ${theme.tagBorder}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Active Indicator dot */}
                  {isSelected && (
                    <span className="absolute top-3 right-3 flex h-2 w-2">
                      <span
                        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                        style={{ backgroundColor: theme.accentHex }}
                      />
                      <span
                        className="relative inline-flex rounded-full h-2 w-2"
                        style={{ backgroundColor: theme.accentHex }}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            3. BUTTON DROPDOWN + QUICK SWITCHER BAR
           ========================================================================= */}
        <div ref={projectListRef} className="pt-2 mb-8">
          <div className="p-4 rounded-2xl bg-white border border-[#D8EAF5] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* The Dropdown Button */}
            <div className="relative" ref={dropdownRef}>
              <div className="text-[10px] font-black uppercase tracking-wider text-[#66859D] mb-1.5 flex items-center gap-1.5">
                <Filter className="w-3 h-3 text-[#2F7FB5]" />
                <span>Select Section Dropdown:</span>
              </div>

              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full md:w-96 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[#F6FBFF] hover:bg-[#EAF6FD] border border-[#BFDDEC] text-left transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2F7FB5]/30"
                aria-expanded={isDropdownOpen}
              >
                <div className="flex items-center gap-2.5 truncate">
                  <span
                    className="w-6 h-6 rounded-md text-white flex items-center justify-center text-xs font-black shrink-0 transition-colors"
                    style={{ backgroundColor: activeTheme.accentHex }}
                  >
                    {currentCategoryMeta?.number || "ALL"}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#123A5A] truncate">
                    {currentCategoryMeta?.label || "All Projects"}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-bold text-[#176B9F] bg-white px-2 py-0.5 rounded-full border border-[#D8EAF5]">
                    {filteredProjects.length}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#557B97] transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* The Dropdown Menu List with Colored Identity Badges */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full md:w-[480px] max-h-[480px] overflow-y-auto rounded-2xl bg-white border border-[#BFDDEC] shadow-2xl shadow-[#123A5A]/15 z-40 p-2 space-y-1 animate-hero-in">
                  <div className="px-3 py-2 text-[10px] font-black uppercase tracking-wider text-[#66859D] border-b border-[#D8EAF5] flex items-center justify-between">
                    <span>Choose a Section to Display</span>
                    <span>8 Visual Identities</span>
                  </div>

                  {CATEGORIES_CONFIG.map((cat) => {
                    const isSelected = activeCategory === cat.id;
                    const count = getProjectCount(cat.id);
                    const itemTheme = getSectionTheme(cat.id);

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleSelectCategory(cat.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all cursor-pointer ${
                          isSelected
                            ? `${itemTheme.tagBg} border ${itemTheme.tagBorder} font-bold`
                            : "hover:bg-slate-50 text-slate-800 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3 truncate">
                          <span
                            className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black shrink-0 text-white shadow-xs"
                            style={{ backgroundColor: itemTheme.accentHex }}
                          >
                            {cat.number}
                          </span>
                          <div className="truncate">
                            <span className="text-xs sm:text-sm font-bold block truncate text-slate-900">
                              {cat.label}
                            </span>
                            <span className="text-[10px] text-slate-500 block truncate">
                              {cat.shortName} · {count} {count === 1 ? "project" : "projects"}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          {isSelected && (
                            <Check
                              className="w-4 h-4"
                              style={{ color: itemTheme.accentHex }}
                            />
                          )}
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600">
                            {count}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick Horizontal Filter Pills */}
            <div className="flex-1 overflow-x-auto pb-1 scrollbar-none">
              <div className="flex items-center gap-1.5 min-w-max">
                <button
                  type="button"
                  onClick={() => handleSelectCategory("all")}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === "all"
                      ? "bg-slate-800 text-white shadow-xs"
                      : "bg-[#F4FAFE] text-[#557B97] border border-[#D8EAF5] hover:text-[#123A5A]"
                  }`}
                >
                  All ({PROJECTS.length})
                </button>
                {eightSections.map((sec) => {
                  const secTheme = getSectionTheme(sec.id);
                  const isSecSelected = activeCategory === sec.id;
                  return (
                    <button
                      key={sec.id}
                      type="button"
                      onClick={() => handleSelectCategory(sec.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                        isSecSelected
                          ? `${secTheme.pillActive} border-transparent shadow-xs`
                          : "bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isSecSelected ? "bg-white" : ""
                        }`}
                        style={{
                          backgroundColor: isSecSelected ? "#ffffff" : secTheme.accentHex,
                        }}
                      />
                      <span className="opacity-75">{sec.number} ·</span>
                      <span>{sec.shortName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            4. SECTION 01 SUBCATEGORY PILLS (When Section 01 is active)
           ========================================================================= */}
        {activeCategory === "cfd-marketing" && (
          <div className="mb-8 p-3 rounded-2xl bg-sky-50/70 border border-sky-200 flex flex-wrap items-center gap-2 animate-hero-in">
            <span className="text-[11px] font-black uppercase tracking-wider text-sky-800 ml-2 mr-1">
              Section 01 Subcategories:
            </span>
            {cfdSubcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveCfdSubcategory(sub.id)}
                className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                  activeCfdSubcategory === sub.id
                    ? "bg-sky-600 text-white shadow-xs"
                    : "bg-white text-sky-800 border border-sky-200 hover:bg-sky-100/50"
                }`}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}

        {/* =========================================================================
            5. ACTIVE SECTION STRATEGIC POSITIONING BANNER (Themed Palette)
           ========================================================================= */}
        {currentCategoryMeta && currentCategoryMeta.positioning && (
          <div
            className={`mb-10 p-6 rounded-2xl bg-gradient-to-r ${activeTheme.bannerGradient} border ${activeTheme.bannerBorder} flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs`}
          >
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider text-white shadow-xs"
                  style={{ backgroundColor: activeTheme.accentHex }}
                >
                  Section {currentCategoryMeta.number}
                </span>
                <span
                  className="text-xs font-black uppercase tracking-widest"
                  style={{ color: activeTheme.accentHex }}
                >
                  Strategic Positioning
                </span>
              </div>
              <p className="text-base font-bold text-slate-900">
                {currentCategoryMeta.positioning}
              </p>
              <p className="text-xs text-slate-600 mt-1 max-w-xl">
                {currentCategoryMeta.description}
              </p>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <span className="text-[11px] font-bold text-slate-500 block">
                Projects in this section
              </span>
              <span
                className="text-3xl font-black"
                style={{ color: activeTheme.accentHex }}
              >
                {filteredProjects.length}
              </span>
            </div>
          </div>
        )}

        {/* =========================================================================
            6. PROJECT CARDS GRID (With Visual Identity Top Bars & Themed Badges)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const cardTheme = getSectionTheme(project.category);

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`group flex flex-col justify-between p-7 rounded-2xl bg-white border border-slate-200 ${cardTheme.cardHoverBorder} transition-all duration-300 hover:shadow-xl ${cardTheme.cardHoverShadow} hover:-translate-y-1 relative overflow-hidden`}
              >
                {/* Visual Identity: Signature Top Color Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[4px] transition-all duration-300 group-hover:h-[6px]"
                  style={{ backgroundColor: cardTheme.accentHex }}
                />

                <div>
                  {/* Card Top: Section Number & Status Badge */}
                  <div className="flex items-center justify-between mb-4 pt-1">
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${cardTheme.badge}`}
                    >
                      {project.sectionNumber} · {project.categoryName}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full border ${
                        project.status === "Completed"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : project.status === "Always-On"
                          ? "bg-blue-50 text-blue-700 border-blue-200"
                          : "bg-amber-50 text-amber-700 border-amber-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Card Banner: Custom Cover Image or Editorial Typographic Gradient */}
                  {project.coverImage ? (
                    <div className="mb-5 relative w-full h-44 rounded-xl overflow-hidden border border-slate-200 bg-[#071131] shadow-inner group/banner">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071131]/90 via-[#071131]/25 to-black/20" />
                      
                      {/* Top Company & Market Glass Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-white">
                        <span className="px-2 py-0.5 rounded bg-black/50 backdrop-blur-md border border-white/20 shadow-xs">
                          {project.company}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-black/50 backdrop-blur-md border border-white/20 shadow-xs">
                          {project.market}
                        </span>
                      </div>

                      {/* Bottom Title on Image */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="text-base font-black tracking-tight text-white block leading-tight drop-shadow-md line-clamp-2">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`mb-5 p-4 rounded-xl border ${cardTheme.tagBorder} flex flex-col justify-between min-h-[110px] transition-colors`}
                      style={{
                        background: `linear-gradient(135deg, ${cardTheme.accentHex}10 0%, #ffffff 60%, ${cardTheme.accentHex}18 100%)`,
                      }}
                    >
                      <div
                        className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider"
                        style={{ color: cardTheme.accentHex }}
                      >
                        <span>{project.company}</span>
                        <span>{project.market}</span>
                      </div>
                      <div className="mt-2">
                        <span className="text-lg font-black tracking-tight text-slate-900 block leading-tight">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Subtitle & Summary */}
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                    {project.subtitle}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Touchpoints / Key Focus Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.touchpoints.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-[10px] font-semibold rounded-md border ${cardTheme.tagBg} ${cardTheme.tagText} ${cardTheme.tagBorder}`}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.touchpoints.length > 3 && (
                      <span className="px-1.5 py-0.5 text-[10px] text-slate-400 font-semibold">
                        +{project.touchpoints.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer: Metadata & Action Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium flex items-center gap-1.5">
                    <Clock
                      className="w-3.5 h-3.5"
                      style={{ color: cardTheme.accentHex }}
                    />
                    <span>{project.period}</span>
                  </span>
                  
                  <span
                    className="inline-flex items-center gap-1 font-black group-hover:translate-x-0.5 transition-transform"
                    style={{ color: cardTheme.accentHex }}
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
